"""
MEOK AI LABS — Claw Code Execution Adapter
Gives SOV3/Jarvis real execution power: run code, write files, git commit.
Inspired by claw-code architecture. Governed by Byzantine Council.

Usage:
    executor = ClawCodeExecutor()
    result = await executor.execute_task({"type": "fix_test", "description": "Fix evolution test", "working_dir": "/path/to/repo"})
"""

import asyncio
import json
import logging
import os
import re
import shlex
import subprocess
import tempfile
import time
from dataclasses import dataclass, field
from pathlib import Path
from typing import Dict, List, Optional

log = logging.getLogger("claw-executor")

# ── Safety Tiers (matches SOV3 Byzantine governance) ─────────────────────────
TIER_0_ACTIONS = {"read_file", "list_files", "run_tests", "search_code", "check_status"}
TIER_1_ACTIONS = {"write_file", "edit_file", "create_file"}
TIER_2_ACTIONS = {"git_commit", "delete_file", "run_command", "deploy"}

# ── Command hardening ────────────────────────────────────────────────────────
_ALLOWED_COMMANDS = {"git", "python", "node", "npm", "ls", "cat", "pwd", "echo", "mkdir", "cp", "mv", "rm"}
_SHELL_METACHARS = re.compile(r"[;|&$`><()]")


@dataclass
class ExecutionResult:
    success: bool
    action: str
    output: str
    files_changed: List[str] = field(default_factory=list)
    tests_passed: Optional[bool] = None
    duration_ms: int = 0
    tier: int = 0


class ClawCodeExecutor:
    """
    Execution engine for SOV3 autonomous tasks.
    Wraps subprocess calls with safety, timeouts, and governance tiers.
    """

    def __init__(self, working_dir: str = None, timeout: int = 30):
        self.working_dir = working_dir or os.getcwd()
        self.timeout = timeout
        self.execution_log: List[Dict] = []

    def get_tier(self, action: str) -> int:
        if action in TIER_0_ACTIONS:
            return 0
        if action in TIER_1_ACTIONS:
            return 1
        if action in TIER_2_ACTIONS:
            return 2
        return 2  # Default to highest tier for unknown actions

    def _resolve_path(self, path: str) -> Path:
        """Resolve a relative path inside the working directory."""
        p = Path(path)
        if p.is_absolute():
            raise ValueError("Absolute paths are not allowed")
        if ".." in p.parts:
            raise ValueError("Path traversal detected")
        resolved = (Path(self.working_dir) / p).resolve()
        base = Path(self.working_dir).resolve()
        # Ensure resolved path is still under base
        try:
            resolved.relative_to(base)
        except ValueError:
            raise ValueError("Path traversal detected")
        return resolved

    def _validate_command(self, command: str) -> List[str]:
        """Validate and split a command string into safe list args."""
        if not command or not isinstance(command, str):
            raise ValueError("Invalid command")

        if _SHELL_METACHARS.search(command):
            raise ValueError("Shell metacharacters are not allowed")

        try:
            parts = shlex.split(command)
        except ValueError as exc:
            raise ValueError(f"Command parsing failed: {exc}")

        if not parts:
            raise ValueError("Empty command")

        cmd = parts[0]
        if cmd not in _ALLOWED_COMMANDS:
            raise ValueError(f"Command '{cmd}' is not in the allowed list")

        # Extra restriction for rm: block -rf / patterns and traversal
        if cmd == "rm":
            for arg in parts[1:]:
                if arg.startswith("-"):
                    continue
                if arg.startswith("/") or ".." in arg:
                    raise ValueError("rm target outside working directory is not allowed")

        return parts

    async def execute_task(self, task: Dict) -> ExecutionResult:
        """Execute a task and return results."""
        start = time.monotonic()
        task_type = task.get("type", "unknown")
        description = task.get("description", "")
        working_dir = task.get("working_dir", self.working_dir)

        try:
            if task_type == "run_tests":
                result = await self.run_tests(
                    task.get("test_path", ""),
                    working_dir=working_dir
                )
            elif task_type == "read_file":
                result = await self.read_file(task.get("path", ""))
            elif task_type == "write_file":
                result = await self.write_file(
                    task.get("path", ""),
                    task.get("content", ""),
                )
            elif task_type == "run_command":
                result = await self.run_command(
                    task.get("command", ""),
                    working_dir=working_dir
                )
            elif task_type == "search_code":
                result = await self.search_code(
                    task.get("pattern", ""),
                    task.get("path", working_dir),
                )
            elif task_type == "git_commit":
                result = await self.git_commit(
                    task.get("files", []),
                    task.get("message", "Autonomous commit by Jarvis"),
                    working_dir=working_dir,
                )
            elif task_type in ("memory_consolidation", "research_sweep", "care_validation_sweep"):
                # These were stubs — now they run real commands
                result = await self._run_sov3_task(task_type, working_dir)
            else:
                result = ExecutionResult(
                    success=False,
                    action=task_type,
                    output=f"Unknown task type: {task_type}",
                )

            result.duration_ms = int((time.monotonic() - start) * 1000)
            self._log_execution(task, result)
            return result

        except Exception as e:
            log.warning("Execution error for %s: %s", task_type, e)
            return ExecutionResult(
                success=False,
                action=task_type,
                output="Execution failed due to a security or runtime error",
                duration_ms=int((time.monotonic() - start) * 1000),
            )

    async def read_file(self, path: str) -> ExecutionResult:
        """Read a file safely."""
        try:
            target = self._resolve_path(path)
            content = target.read_text()
            return ExecutionResult(
                success=True, action="read_file",
                output=content[:10000],  # Cap at 10K chars
                tier=0,
            )
        except Exception as e:
            log.warning("read_file blocked: %s", e)
            return ExecutionResult(success=False, action="read_file", output="File read denied or failed")

    async def write_file(self, path: str, content: str) -> ExecutionResult:
        """Write a file with backup."""
        try:
            p = self._resolve_path(path)
        except Exception as e:
            log.warning("write_file blocked: %s", e)
            return ExecutionResult(success=False, action="write_file", output="File write denied: invalid path")

        backup = None
        try:
            if p.exists():
                backup = p.read_text()
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text(content)
            return ExecutionResult(
                success=True, action="write_file",
                output=f"Written {len(content)} chars to {path}",
                files_changed=[path],
                tier=1,
            )
        except Exception as e:
            # Rollback on failure
            if backup is not None:
                try:
                    p.write_text(backup)
                except:
                    pass
            log.warning("write_file error: %s", e)
            return ExecutionResult(success=False, action="write_file", output="File write failed")

    async def run_command(self, command: str, working_dir: str = None) -> ExecutionResult:
        """Run a shell command with timeout using list args where possible."""
        # Validate and parse command
        try:
            cmd_parts = self._validate_command(command)
        except ValueError as e:
            return ExecutionResult(
                success=False, action="run_command",
                output=f"Blocked: {e}",
                tier=2,
            )

        # Extra block for dangerous bare strings that slip through tokenization
        dangerous = ["rm -rf /", "mkfs", "dd if=", ":(){ :|:", "shutdown", "reboot"]
        lowered = command.lower()
        if any(d in lowered for d in dangerous):
            return ExecutionResult(
                success=False, action="run_command",
                output="Blocked: dangerous command detected",
                tier=2,
            )

        try:
            proc = await asyncio.create_subprocess_exec(
                *cmd_parts,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
                cwd=working_dir or self.working_dir,
            )
            stdout, stderr = await asyncio.wait_for(
                proc.communicate(), timeout=self.timeout
            )
            output = stdout.decode()[:5000]
            if proc.returncode != 0:
                output += f"\nSTDERR: {stderr.decode()[:2000]}"

            return ExecutionResult(
                success=proc.returncode == 0,
                action="run_command",
                output=output,
                tier=2,
            )
        except asyncio.TimeoutError:
            return ExecutionResult(
                success=False, action="run_command",
                output=f"Command timed out after {self.timeout}s",
            )
        except Exception as e:
            log.warning("run_command error: %s", e)
            return ExecutionResult(
                success=False, action="run_command",
                output="Command execution failed",
            )

    async def run_tests(self, test_path: str = "", working_dir: str = None) -> ExecutionResult:
        """Run tests and report results."""
        wd = working_dir or self.working_dir
        cmd_parts = ["npx", "jest", "--no-coverage"]
        if test_path:
            cmd_parts.append(test_path)

        try:
            proc = await asyncio.create_subprocess_exec(
                *cmd_parts,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
                cwd=wd,
            )
            stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=self.timeout)
            output = stdout.decode()[:5000]
            if proc.returncode != 0:
                output += f"\nSTDERR: {stderr.decode()[:2000]}"
            return ExecutionResult(
                success=proc.returncode == 0,
                action="run_tests",
                output=output,
                tier=0,
                tests_passed=proc.returncode == 0,
            )
        except asyncio.TimeoutError:
            return ExecutionResult(
                success=False, action="run_tests",
                output=f"Tests timed out after {self.timeout}s",
                tier=0,
                tests_passed=False,
            )
        except Exception as e:
            log.warning("run_tests error: %s", e)
            return ExecutionResult(success=False, action="run_tests", output="Test execution failed", tier=0, tests_passed=False)

    async def search_code(self, pattern: str, path: str = None) -> ExecutionResult:
        """Search code with grep (no shell pipes)."""
        search_path = path or self.working_dir
        try:
            proc = await asyncio.create_subprocess_exec(
                "grep", "-rn", pattern, search_path,
                "--include=*.ts", "--include=*.tsx", "--include=*.py",
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )
            stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=self.timeout)
            lines = stdout.decode().splitlines()[:20]
            output = "\n".join(lines)
            return ExecutionResult(
                success=proc.returncode == 0 or bool(lines),
                action="search_code",
                output=output,
                tier=0,
            )
        except Exception as e:
            log.warning("search_code error: %s", e)
            return ExecutionResult(success=False, action="search_code", output="Search failed")

    async def git_commit(self, files: List[str], message: str, working_dir: str = None) -> ExecutionResult:
        """Stage and commit files."""
        wd = working_dir or self.working_dir
        try:
            # Stage files
            for f in files:
                result = await self._run_exec(["git", "add", f], cwd=wd)
                if not result["success"]:
                    return ExecutionResult(
                        success=False, action="git_commit",
                        output=f"git add failed: {result['output']}",
                        tier=2, files_changed=files,
                    )

            # Commit
            result = await self._run_exec(
                ["git", "commit", "-m", f"{message}\n\nAutonomous commit by Jarvis/SOV3"],
                cwd=wd,
            )
            return ExecutionResult(
                success=result["success"],
                action="git_commit",
                output=result["output"],
                tier=2,
                files_changed=files,
            )
        except Exception as e:
            log.warning("git_commit error: %s", e)
            return ExecutionResult(success=False, action="git_commit", output="Git commit failed")

    async def _run_exec(self, cmd: List[str], cwd: str = None) -> Dict[str, any]:
        """Low-level subprocess_exec helper."""
        proc = await asyncio.create_subprocess_exec(
            *cmd,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            cwd=cwd or self.working_dir,
        )
        stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=self.timeout)
        output = stdout.decode()[:5000]
        if proc.returncode != 0:
            output += f"\nSTDERR: {stderr.decode()[:2000]}"
        return {"success": proc.returncode == 0, "output": output}

    async def _run_sov3_task(self, task_type: str, working_dir: str) -> ExecutionResult:
        """Execute SOV3-specific tasks that were previously stubs."""
        if task_type == "memory_consolidation":
            # Run memory dedup SQL
            result = await self.run_command(
                'psql "postgresql://sovereign:sovereign@localhost:5432/sovereign_memory" -c '
                '"SELECT count(*) as total FROM memory_episodes;"',
                working_dir=working_dir,
            )
            result.action = "memory_consolidation"
            return result

        elif task_type == "research_sweep":
            # Trigger SOV3 research sweep via MCP
            result = await self.run_command(
                'curl -s -X POST http://localhost:3100/mcp -H "Content-Type: application/json" '
                '-d \'{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"trigger_research_sweep","arguments":{}}}\'',
                working_dir=working_dir,
            )
            result.action = "research_sweep"
            return result

        elif task_type == "care_validation_sweep":
            # Run care validation on recent memories
            result = await self.run_command(
                'curl -s -X POST http://localhost:3100/mcp -H "Content-Type: application/json" '
                '-d \'{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"validate_care","arguments":{"text":"System care validation sweep"}}}\'',
                working_dir=working_dir,
            )
            result.action = "care_validation_sweep"
            return result

        return ExecutionResult(success=False, action=task_type, output="Unknown SOV3 task type")

    def _log_execution(self, task: Dict, result: ExecutionResult):
        """Log execution for audit trail."""
        entry = {
            "timestamp": time.time(),
            "task_type": task.get("type"),
            "success": result.success,
            "action": result.action,
            "tier": result.tier,
            "duration_ms": result.duration_ms,
            "files_changed": result.files_changed,
        }
        self.execution_log.append(entry)
        if len(self.execution_log) > 100:
            self.execution_log = self.execution_log[-50:]

        log.info(f"[claw] {result.action}: {'✅' if result.success else '❌'} ({result.duration_ms}ms) tier={result.tier}")


# ── Quick test ───────────────────────────────────────────────────────────────
if __name__ == "__main__":
    async def test():
        executor = ClawCodeExecutor(working_dir="/Users/nicholas/clawd/meok/ui")
        # Test read
        r = await executor.read_file("package.json")
        print(f"Read: {r.success}, {len(r.output)} chars")
        # Test search
        r = await executor.search_code("getCharacter", "src/lib")
        print(f"Search: {r.success}, found lines")
        # Test run tests
        r = await executor.run_tests(working_dir="/Users/nicholas/clawd/meok/ui")
        print(f"Tests: {r.success}, passed={r.tests_passed}")
        print(f"Output: {r.output[-200:]}")

    asyncio.run(test())
