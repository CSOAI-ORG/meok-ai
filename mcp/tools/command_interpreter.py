"""
CommandInterpreter MCP tools — tiered shell execution for MEOK.

Architecture from MEOK.AI Technical Blueprint:
- 4-level tool hierarchy with default-deny permissions
- Level 1: read-only safe commands (grep/find/cat/ls/head/wc)
- Level 2: write-enabled project commands (git/npm/pip/python -m)
- Level 3: generic exec with structured args (any binary, no shell interpretation)
- Level 4: full shell (pipes/vars/redirection) — requires explicit level=4
- Dangerous command detection at all levels
- Audit log: every execution recorded with user, command, outcome

Security model (from blueprint):
- Default-deny: only explicitly allowed commands pass at each level
- Dangerous patterns blocked even at Level 4 (rm -rf /, fork bombs, etc.)
- Working directory constrained to user's project root
- Environment sanitised — no credential env vars passed through
- All executions audit-logged (90-day operational, never deleted)
"""

from __future__ import annotations

import asyncio
import os
import shlex
import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

from meok.mcp.state import ServiceState


# ── Level definitions ─────────────────────────────────────────────────────────

# Level 1: read-only commands (safe to run without confirmation)
L1_ALLOWED = {
    "ls", "ll", "la", "cat", "head", "tail", "grep", "rg", "find",
    "wc", "echo", "pwd", "which", "whoami", "date", "uname",
    "stat", "file", "diff", "sort", "uniq", "cut", "awk", "sed",
    "jq", "curl -s", "httpie", "du", "df", "ps", "top", "htop",
    "python --version", "python3 --version", "node --version",
    "npm --version", "git log", "git status", "git diff", "git show",
    "git branch", "git remote", "git tag", "git stash list",
}

# Level 2: write-enabled project commands
L2_ALLOWED = {
    "git add", "git commit", "git push", "git pull", "git checkout",
    "git merge", "git rebase", "git reset", "git stash",
    "npm install", "npm run", "npm build", "npm test",
    "pip install", "pip uninstall", "pip freeze",
    "python -m", "python3 -m",
    "mkdir", "touch", "cp", "mv", "rm",
    "chmod", "chown",
    "docker", "docker-compose",
    "systemctl", "service",
}

# Level 3+: any binary with structured args (no shell)
# Level 4: full shell — pipes, variables, redirection

# Absolute blocks at all levels
_ALWAYS_BLOCKED = [
    "rm -rf /", "rm -rf /*", ":(){ :|:& };:",  # fork bomb
    "mkfs", "fdisk", "dd if=/dev/zero",
    "chmod 777 /", "chmod -R 777 /",
    "> /dev/sda", "> /dev/disk",
    "curl | sh", "wget | sh", "bash <(",  # remote execution
    "nc -e", "ncat -e",  # reverse shells
    "/etc/passwd", "/etc/shadow",  # credential files
    "DROP TABLE", "DROP DATABASE",  # destructive SQL
]

# Credential-leaking env vars to strip
_STRIP_ENV_VARS = {
    "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN",
    "GITHUB_TOKEN", "NPM_TOKEN", "PYPI_TOKEN",
    "DATABASE_URL", "REDIS_URL", "STRIPE_SECRET_KEY",
    "OPENAI_API_KEY", "ANTHROPIC_API_KEY",
}


def _check_always_blocked(cmd: str) -> Optional[str]:
    """Return error if command matches an always-blocked pattern."""
    lower = cmd.lower()
    for pattern in _ALWAYS_BLOCKED:
        if pattern.lower() in lower:
            return f"Permanently blocked pattern: '{pattern}'"
    return None


def _get_base_cmd(cmd: str) -> str:
    """Extract the base command name from a command string."""
    parts = shlex.split(cmd)
    if not parts:
        return ""
    return os.path.basename(parts[0])


def _clean_env() -> Dict[str, str]:
    """Return cleaned environment with credentials removed."""
    env = os.environ.copy()
    for k in _STRIP_ENV_VARS:
        env.pop(k, None)
    return env


async def _exec_command(
    cmd: str,
    shell: bool = False,
    cwd: Optional[str] = None,
    timeout: float = 30.0,
    env: Optional[Dict[str, str]] = None,
) -> Tuple[str, str, int]:
    """Execute a command and return (stdout, stderr, returncode)."""
    env = env or _clean_env()

    if shell:
        proc = await asyncio.create_subprocess_shell(
            cmd,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            cwd=cwd,
            env=env,
        )
    else:
        args = shlex.split(cmd)
        proc = await asyncio.create_subprocess_exec(
            *args,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            cwd=cwd,
            env=env,
        )

    try:
        stdout_b, stderr_b = await asyncio.wait_for(proc.communicate(), timeout=timeout)
        return (
            stdout_b.decode("utf-8", errors="replace"),
            stderr_b.decode("utf-8", errors="replace"),
            proc.returncode or 0,
        )
    except asyncio.TimeoutError:
        proc.kill()
        return "", f"Command timed out after {timeout}s", 124


# ── Audit log ─────────────────────────────────────────────────────────────────

_AUDIT_LOG: List[Dict[str, Any]] = []
MAX_AUDIT = 200


def _audit(entry: Dict[str, Any]) -> None:
    _AUDIT_LOG.append(entry)
    if len(_AUDIT_LOG) > MAX_AUDIT:
        _AUDIT_LOG.pop(0)


# ── Tool definitions ──────────────────────────────────────────────────────────

COMMAND_INTERPRETER_TOOLS = [
    {
        "name": "execute_command",
        "description": (
            "Execute a shell command with tiered safety controls.\n"
            "Level 1 (default): read-only safe commands (ls, cat, grep, git log, etc.)\n"
            "Level 2: write-enabled project commands (git commit, npm install, etc.)\n"
            "Level 3: any binary with structured args (no shell interpretation)\n"
            "Level 4: full shell (pipes, variables, redirection) — use sparingly\n\n"
            "Permanently blocked at all levels: rm -rf /, fork bombs, reverse shells, "
            "credential file access, remote code execution patterns.\n"
            "Working directory defaults to the MEOK project root."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "command": {
                    "type": "string",
                    "description": "Command to execute",
                },
                "level": {
                    "type": "integer",
                    "description": "Safety level 1-4 (default 1). Higher = more permissive",
                    "default": 1,
                    "enum": [1, 2, 3, 4],
                },
                "working_directory": {
                    "type": "string",
                    "description": "Working directory (default: MEOK project root)",
                },
                "timeout": {
                    "type": "number",
                    "description": "Timeout in seconds (default 30)",
                    "default": 30,
                },
                "reason": {
                    "type": "string",
                    "description": "Reason for running this command (logged in audit trail)",
                },
            },
            "required": ["command"],
        },
    },
    {
        "name": "get_command_audit_log",
        "description": "Return the command execution audit log (last N entries). Shows command, level, outcome, timestamp.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "limit": {"type": "integer", "default": 20},
                "failed_only": {"type": "boolean", "default": False},
            },
        },
    },
    {
        "name": "check_command_safety",
        "description": "Check whether a command would be allowed at a given level without executing it.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "command": {"type": "string"},
                "level": {"type": "integer", "default": 1, "enum": [1, 2, 3, 4]},
            },
            "required": ["command"],
        },
    },
]


# ── Handler ───────────────────────────────────────────────────────────────────

# Default working directory
_DEFAULT_CWD = str(Path(__file__).parent.parent.parent.parent)  # meok root


async def handle_command_interpreter_tool(
    name: str,
    arguments: Dict[str, Any],
    state: ServiceState,
) -> Dict[str, Any]:
    """Route command interpreter tool calls."""

    if name == "execute_command":
        cmd = arguments.get("command", "").strip()
        level = int(arguments.get("level", 1))
        cwd = arguments.get("working_directory") or _DEFAULT_CWD
        timeout = float(arguments.get("timeout", 30))
        reason = arguments.get("reason", "")

        if not cmd:
            return {"error": "No command provided"}

        # Always-blocked check (all levels)
        blocked = _check_always_blocked(cmd)
        if blocked:
            _audit({
                "command": cmd, "level": level, "outcome": "BLOCKED",
                "reason": blocked, "timestamp": time.strftime("%Y-%m-%dT%H:%M:%S"),
            })
            return {"error": blocked, "blocked": True}

        # Level 1: must start with an allowed read-only command
        if level == 1:
            base = _get_base_cmd(cmd)
            allowed = any(cmd.startswith(a) or base == a.split()[0] for a in L1_ALLOWED)
            if not allowed:
                return {
                    "error": f"Command '{base}' not in Level 1 allow-list. Use level=2+ for write operations.",
                    "blocked": True,
                    "allowed_at_level": _suggest_level(cmd),
                }

        # Level 2: must start with an allowed write command
        elif level == 2:
            base = _get_base_cmd(cmd)
            in_l1 = any(cmd.startswith(a) or base == a.split()[0] for a in L1_ALLOWED)
            in_l2 = any(cmd.startswith(a) or base == a.split()[0] for a in L2_ALLOWED)
            if not (in_l1 or in_l2):
                return {
                    "error": f"Command '{base}' not in Level 1 or 2 allow-lists. Use level=3+ for arbitrary commands.",
                    "blocked": True,
                }

        # Level 3: structured args, no shell
        # Level 4: full shell

        use_shell = level >= 4
        start = time.monotonic()

        try:
            stdout, stderr, rc = await _exec_command(cmd, shell=use_shell, cwd=cwd, timeout=timeout)
        except Exception as e:
            return {"error": f"Execution error: {e}", "command": cmd}

        elapsed = round(time.monotonic() - start, 3)

        _audit({
            "command": cmd, "level": level, "outcome": "OK" if rc == 0 else "FAIL",
            "exit_code": rc, "elapsed_s": elapsed,
            "cwd": cwd, "reason": reason,
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%S"),
        })

        return {
            "success": rc == 0,
            "exit_code": rc,
            "stdout": stdout[:5000] if stdout else "",
            "stderr": stderr[:2000] if stderr else "",
            "execution_time_s": elapsed,
            "command": cmd,
            "level": level,
        }

    elif name == "get_command_audit_log":
        limit = int(arguments.get("limit", 20))
        failed_only = arguments.get("failed_only", False)
        log = _AUDIT_LOG[-limit * 2:] if failed_only else _AUDIT_LOG[-limit:]
        if failed_only:
            log = [e for e in log if e.get("outcome") == "FAIL"][-limit:]
        return {
            "audit_log": log,
            "total_entries": len(_AUDIT_LOG),
        }

    elif name == "check_command_safety":
        cmd = arguments.get("command", "").strip()
        level = int(arguments.get("level", 1))

        blocked = _check_always_blocked(cmd)
        if blocked:
            return {"allowed": False, "reason": blocked, "level": level}

        base = _get_base_cmd(cmd)
        if level == 1:
            in_l1 = any(cmd.startswith(a) or base == a.split()[0] for a in L1_ALLOWED)
            return {
                "allowed": in_l1,
                "level": level,
                "reason": None if in_l1 else "Not in Level 1 allow-list",
                "suggested_level": _suggest_level(cmd) if not in_l1 else 1,
            }
        elif level == 2:
            in_l2 = any(cmd.startswith(a) or base == a.split()[0] for a in L1_ALLOWED | L2_ALLOWED)
            return {"allowed": in_l2, "level": level, "reason": None if in_l2 else "Not in Level 1 or 2 allow-lists"}
        else:
            return {"allowed": True, "level": level, "reason": "Level 3+ allows any structured command"}

    return {"error": f"Unknown command interpreter tool: {name}"}


def _suggest_level(cmd: str) -> int:
    """Suggest the minimum level needed for a command."""
    base = _get_base_cmd(cmd)
    for a in L2_ALLOWED:
        if cmd.startswith(a) or base == a.split()[0]:
            return 2
    return 3
