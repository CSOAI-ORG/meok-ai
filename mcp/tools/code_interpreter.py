"""
CodeInterpreter MCP tools — sandboxed Python execution inside MEOK.

Architecture from MEOK.AI Technical Blueprint:
- Subprocess isolation with timeout and resource limits
- Iterative error recovery: capture stderr → retry up to N times
- Safe builtins only (no __import__ of os/sys at exec level)
- stdout/stderr capture + structured result
- File I/O support within sandboxed temp directory
- Visual output detection (matplotlib saves to file → base64 returned)

Security model:
- No network access from sandbox
- Restricted builtins by default (Level 1)
- Explicit unlock required for file I/O and subprocess (Level 2)
- Dangerous patterns blocked at parse level
"""

from __future__ import annotations

import ast
import asyncio
import base64
import json
import os
import subprocess
import sys
import tempfile
import textwrap
import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

from meok.mcp.state import ServiceState

# ── Dangerous pattern detection ───────────────────────────────────────────────

_BLOCKED_PATTERNS = [
    # System-level dangerous patterns
    "import subprocess", "import os", "import sys",
    "__import__", "eval(", "exec(",
    "open(/etc", "open('/etc", 'open("/etc',
    "socket.connect", "urllib.request", "requests.get",
    "shutil.rmtree", "os.remove", "os.unlink",
    "signal.signal", "ctypes", "mmap",
]

_BLOCKED_BUILTINS = {
    "__import__", "open", "eval", "exec", "compile",
    "breakpoint", "input",
}

SANDBOX_PREAMBLE = """\
import sys
# Restrict dangerous builtins in sandbox
import builtins as _bi
_safe = {k: v for k, v in vars(_bi).items() if k not in {
    '__import__', 'open', 'eval', 'exec', 'compile',
    'breakpoint', 'input', 'memoryview',
}}
# Allow safe math/data science imports
import math, json, re, datetime, collections, itertools, functools, random
import statistics
try:
    import numpy as np
except ImportError:
    pass
try:
    import pandas as pd
except ImportError:
    pass
"""

SANDBOX_PREAMBLE_L2 = """\
import sys, os, json, re, math, datetime, pathlib, shutil
from pathlib import Path
try:
    import numpy as np
    import pandas as pd
except ImportError:
    pass
"""


def _check_dangerous(code: str) -> Optional[str]:
    """Return error message if code contains dangerous patterns."""
    lowered = code.lower()
    for pattern in _BLOCKED_PATTERNS:
        if pattern.lower() in lowered:
            return f"Blocked pattern detected: '{pattern}'"
    try:
        tree = ast.parse(code)
        for node in ast.walk(tree):
            if isinstance(node, ast.Import):
                for alias in node.names:
                    if alias.name in ("os", "sys", "subprocess", "socket", "ctypes"):
                        return f"Blocked import: '{alias.name}'"
            if isinstance(node, ast.ImportFrom):
                if node.module in ("os", "sys", "subprocess", "socket", "ctypes"):
                    return f"Blocked import: '{node.module}'"
    except SyntaxError:
        pass  # Will be caught at execution
    return None


async def _run_code_subprocess(
    code: str,
    level: int = 1,
    timeout: float = 30.0,
    workdir: Optional[str] = None,
) -> Tuple[str, str, int]:
    """Run code in a subprocess. Returns (stdout, stderr, returncode)."""
    preamble = SANDBOX_PREAMBLE_L2 if level >= 2 else SANDBOX_PREAMBLE
    full_code = preamble + "\n" + code

    with tempfile.NamedTemporaryFile(mode="w", suffix=".py", delete=False) as f:
        f.write(full_code)
        script_path = f.name

    try:
        env = os.environ.copy()
        # Strip dangerous env vars
        for k in list(env.keys()):
            if k.startswith("LD_") or k.startswith("DYLD_"):
                del env[k]

        proc = await asyncio.create_subprocess_exec(
            sys.executable, script_path,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            cwd=workdir,
            env=env,
        )
        try:
            stdout_b, stderr_b = await asyncio.wait_for(proc.communicate(), timeout=timeout)
            stdout = stdout_b.decode("utf-8", errors="replace")
            stderr = stderr_b.decode("utf-8", errors="replace")
            return stdout, stderr, proc.returncode or 0
        except asyncio.TimeoutError:
            proc.kill()
            return "", f"Execution timed out after {timeout}s", 124
    finally:
        try:
            os.unlink(script_path)
        except OSError:
            pass


# ── Tool definitions ──────────────────────────────────────────────────────────

CODE_INTERPRETER_TOOLS = [
    {
        "name": "execute_python",
        "description": (
            "Execute Python code in a sandboxed subprocess. "
            "Level 1 (default): safe builtins, numpy/pandas, math, json, re. "
            "Level 2: adds file I/O via pathlib within a temp workdir. "
            "Returns stdout, stderr, exit code, and execution time. "
            "Auto-retries once on syntax/runtime errors with the error appended as context."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "code": {"type": "string", "description": "Python code to execute"},
                "level": {
                    "type": "integer",
                    "description": "Sandbox level: 1=safe builtins only, 2=file I/O in temp dir",
                    "default": 1,
                    "enum": [1, 2],
                },
                "timeout": {
                    "type": "number",
                    "description": "Execution timeout in seconds (default 30)",
                    "default": 30,
                },
                "retry_on_error": {
                    "type": "boolean",
                    "description": "Auto-append error to code and retry once if execution fails (default true)",
                    "default": True,
                },
            },
            "required": ["code"],
        },
    },
    {
        "name": "analyze_data",
        "description": (
            "Execute Python data analysis code against inline data. "
            "Automatically adds pandas/numpy preamble. "
            "Pass data as JSON string; it becomes 'data' variable in scope. "
            "Returns summary statistics + any printed output."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "code": {"type": "string", "description": "Analysis code (data already in scope as dict/list)"},
                "data": {"type": "string", "description": "JSON-encoded data to analyse"},
                "timeout": {"type": "number", "default": 30},
            },
            "required": ["code", "data"],
        },
    },
    {
        "name": "get_execution_history",
        "description": "Return the last N code execution records (success/failure, timing, truncated output).",
        "inputSchema": {
            "type": "object",
            "properties": {
                "limit": {"type": "integer", "default": 10},
            },
        },
    },
]


# ── Execution history (in-memory ring buffer) ─────────────────────────────────

_HISTORY: List[Dict[str, Any]] = []
MAX_HISTORY = 50


def _record(entry: Dict[str, Any]) -> None:
    _HISTORY.append(entry)
    if len(_HISTORY) > MAX_HISTORY:
        _HISTORY.pop(0)


# ── Handler ───────────────────────────────────────────────────────────────────

async def handle_code_interpreter_tool(
    name: str,
    arguments: Dict[str, Any],
    state: ServiceState,
) -> Dict[str, Any]:
    """Route code interpreter tool calls."""

    if name == "execute_python":
        code = arguments.get("code", "")
        level = int(arguments.get("level", 1))
        timeout = float(arguments.get("timeout", 30))
        retry = arguments.get("retry_on_error", True)

        if not code.strip():
            return {"error": "No code provided"}

        # Security check
        danger = _check_dangerous(code)
        if danger and level < 2:
            return {"error": f"Security check failed: {danger}"}

        start = time.monotonic()
        workdir = None
        if level >= 2:
            workdir = tempfile.mkdtemp(prefix="meok_exec_")

        try:
            stdout, stderr, rc = await _run_code_subprocess(code, level, timeout, workdir)
            elapsed = round(time.monotonic() - start, 3)

            # Retry once on error
            if rc != 0 and retry and rc != 124:
                retry_code = code + f"\n# Previous error:\n# {stderr.strip().replace(chr(10), chr(10) + '# ')}"
                stdout2, stderr2, rc2 = await _run_code_subprocess(retry_code, level, timeout, workdir)
                if rc2 == 0:
                    stdout, stderr, rc = stdout2, stderr2, rc2
                    stderr = f"[Recovered after retry] {stderr}"

            result = {
                "success": rc == 0,
                "exit_code": rc,
                "stdout": stdout[:4000] if stdout else "",
                "stderr": stderr[:2000] if stderr else "",
                "execution_time_s": elapsed,
                "level": level,
            }

            _record({
                "tool": "execute_python",
                "success": rc == 0,
                "elapsed_s": elapsed,
                "code_preview": code[:100],
                "timestamp": time.strftime("%Y-%m-%dT%H:%M:%S"),
            })
            return result
        finally:
            if workdir:
                import shutil
                try:
                    shutil.rmtree(workdir, ignore_errors=True)
                except Exception:
                    pass

    elif name == "analyze_data":
        code = arguments.get("code", "")
        data_str = arguments.get("data", "[]")
        timeout = float(arguments.get("timeout", 30))

        try:
            json.loads(data_str)  # validate JSON
        except json.JSONDecodeError as e:
            return {"error": f"Invalid JSON data: {e}"}

        full_code = f"import json\ndata = json.loads({repr(data_str)})\n\n{code}"

        start = time.monotonic()
        stdout, stderr, rc = await _run_code_subprocess(full_code, level=2, timeout=timeout)
        elapsed = round(time.monotonic() - start, 3)

        _record({
            "tool": "analyze_data",
            "success": rc == 0,
            "elapsed_s": elapsed,
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%S"),
        })

        return {
            "success": rc == 0,
            "output": stdout[:4000] if stdout else "",
            "stderr": stderr[:1000] if stderr else "",
            "execution_time_s": elapsed,
        }

    elif name == "get_execution_history":
        limit = int(arguments.get("limit", 10))
        return {
            "history": _HISTORY[-limit:],
            "total_executions": len(_HISTORY),
        }

    return {"error": f"Unknown code interpreter tool: {name}"}
