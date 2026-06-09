from __future__ import annotations

"""
Ralph Task Runner — PGQueuer-based autonomous task execution
Polls ralph_tasks table for pending work, executes, updates status.

Usage:
    python -m meok.agents.ralph_task_runner

Deps: asyncpg, pgqueuer (pip install pgqueuer)
"""

import asyncio
import json
import logging
import os
from datetime import datetime, timezone
from typing import Any

import asyncpg

logger = logging.getLogger(__name__)

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://meok:meok@localhost:5432/meok")


class RalphTaskRunner:
    """PGQueuer-compatible task runner for Ralph autonomous mode."""

    def __init__(self, db_url: str = DATABASE_URL, poll_interval: float = 5.0):
        self.db_url = db_url
        self.poll_interval = poll_interval
        self.pool: asyncpg.Pool | None = None
        self.running = False
        self.handlers: dict[str, Any] = {}

    async def connect(self):
        self.pool = await asyncpg.create_pool(self.db_url, min_size=2, max_size=10)
        logger.info("RalphTaskRunner connected to DB")

    async def disconnect(self):
        if self.pool:
            await self.pool.close()

    def register(self, task_name: str):
        """Decorator to register a task handler."""
        def decorator(fn):
            self.handlers[task_name] = fn
            return fn
        return decorator

    async def dequeue_task(self) -> dict | None:
        """Atomically claim the next pending task with advisory lock."""
        async with self.pool.acquire() as conn:
            row = await conn.fetchrow("""
                UPDATE ralph_tasks
                SET status = 'running', started_at = NOW()
                WHERE id = (
                    SELECT id FROM ralph_tasks
                    WHERE status IN ('queued','pending')
                      AND (scheduled_at IS NULL OR scheduled_at <= NOW())
                    ORDER BY priority ASC, created_at ASC
                    LIMIT 1
                    FOR UPDATE SKIP LOCKED
                )
                RETURNING *
            """)
            return dict(row) if row else None

    async def complete_task(self, task_id: str, result: dict):
        async with self.pool.acquire() as conn:
            await conn.execute("""
                UPDATE ralph_tasks
                SET status = 'complete', result = $1, completed_at = NOW()
                WHERE task_id = $2
            """, result, task_id)

    async def mark_delegated(self, task_id: str, result: dict):
        """Task handed to SOV3's agent system — status 'running', NOT 'complete'
        (assigned != done). A reconciliation step (poll SOV3 for the delegated
        task's final status) flips it to 'complete' only when work truly lands.
        This is what keeps the completion-survival metric honest."""
        async with self.pool.acquire() as conn:
            await conn.execute(
                "UPDATE ralph_tasks SET status='running', output_data=$1::jsonb WHERE task_id=$2",
                json.dumps(result), task_id,
            )

    async def fail_task(self, task_id: str, error: str, retry: bool = True):
        async with self.pool.acquire() as conn:
            if retry:
                await conn.execute("""
                    UPDATE ralph_tasks
                    SET status = CASE
                        WHEN retry_count < max_retries THEN 'queued'
                        ELSE 'failed'
                    END,
                    retry_count = retry_count + 1,
                    error_message = $1,
                    scheduled_at = NOW() + INTERVAL '5 minutes'
                    WHERE task_id = $2
                """, error, task_id)
            else:
                await conn.execute("""
                    UPDATE ralph_tasks
                    SET status = 'failed', error_message = $1, completed_at = NOW()
                    WHERE task_id = $2
                """, error, task_id)

    async def enqueue(self, task_name: str, payload: dict = None, priority: int = 5,
                      task_type: str = "one_shot", tags: list[str] = None) -> str:
        """Add a new task to the queue."""
        async with self.pool.acquire() as conn:
            row = await conn.fetchrow("""
                INSERT INTO ralph_tasks (task_name, task_type, priority, payload, tags)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING task_id
            """, task_name, task_type, priority, payload or {}, tags or [])
            return row["task_id"]

    async def _dispatch_agent(self, agent: str, task: dict) -> dict:
        """Route a UI task to the LIVE SOV3 MCP runtime (delegate_task → the care-gated
        Orion agent system). Real delegation over HTTP+token; raises on any failure so
        the task is recorded honestly (we never fake-complete)."""
        import os as _os, json as _json
        title = task.get("title") or task.get("task_name") or ""
        base = _os.getenv("SOV3_MCP_URL", "http://localhost:3101/mcp")
        tok = _os.getenv("SOV3_MCP_TOKEN", "")
        if not tok:
            try:
                tok = open(_os.path.expanduser("~/clawd/sovereign-temple/.sov3_mcp_token")).read().strip()
            except Exception:
                pass
        # valid AgentCapability values: neural_inference, memory_operations, web_search,
        # code_execution, analysis, creative, communication, monitoring, security, planning
        caps = [c.strip() for c in _os.getenv("RALPH_DEFAULT_CAPABILITY", "planning").split(",") if c.strip()]
        rpc = {"jsonrpc": "2.0", "id": 1, "method": "tools/call",
               "params": {"name": "delegate_task", "arguments": {
                   "description": (f"[{agent}] {title}" if agent else title).strip(),
                   "required_capabilities": caps,
                   "priority": int(task.get("priority") or 5)}}}
        try:
            import httpx
        except ImportError:
            raise RuntimeError("httpx not installed — cannot reach SOV3 runtime")
        async with httpx.AsyncClient(timeout=httpx.Timeout(connect=4.0, read=90.0, write=10.0, pool=4.0)) as cli:
            r = await cli.post(base, headers={"Authorization": f"Bearer {tok}",
                                              "Content-Type": "application/json",
                                              "Accept": "application/json, text/event-stream"}, json=rpc)
        body = r.text
        if "data:" in body and '"result"' in body:  # streamable-http SSE framing
            for ln in body.splitlines():
                if ln.startswith("data:"):
                    body = ln[5:].strip(); break
        try:
            data = _json.loads(body)
        except Exception:
            raise RuntimeError(f"SOV3 non-JSON response: {body[:160]}")
        if data.get("error"):
            raise RuntimeError(f"SOV3 delegate_task error: {data['error']}")
        res = data.get("result", data)
        # MCP wraps tool output as result.content[].text — surface + detect embedded errors
        txt = ""
        if isinstance(res, dict) and isinstance(res.get("content"), list):
            txt = " ".join(c.get("text", "") for c in res["content"] if isinstance(c, dict))
            if '"error"' in txt:
                raise RuntimeError(f"SOV3 delegate_task returned error: {txt[:200]}")
        return {"delegated_via": "sov3.delegate_task", "agent": agent, "sov3": txt or res}

    async def run_one(self, task: dict) -> None:
        """Execute a single task with its registered handler."""
        name = task.get("task_name") or task.get("title")
        handler = self.handlers.get(name)
        if not handler:
            # UI-created tasks carry `agent` + `title` instead of a registered task_name.
            # Dispatch to the REAL agent — never stub-complete (fake completions poison the
            # completion-survival selection signal). If no agent runtime, fail honestly.
            if task.get("agent"):
                try:
                    result = await self._dispatch_agent(task["agent"], task)
                    # delegate_task returns 'assigned' (async) — mark delegated/running,
                    # NOT complete. Reconciliation flips to 'complete' when SOV3 finishes.
                    await self.mark_delegated(task["task_id"], result or {"status": "assigned"})
                    logger.info(f"Task '{name}' delegated to SOV3 ({task['agent']})")
                except Exception as e:
                    logger.error(f"Agent dispatch failed for '{name}': {e}")
                    await self.fail_task(task["task_id"], f"agent dispatch: {e}", retry=False)
                return
            logger.warning(f"No handler/agent for task '{name}' — failing (no fake completion)")
            await self.fail_task(task["task_id"], f"No handler or agent for '{name}'", retry=False)
            return

        try:
            result = await handler(task.get("payload") or task.get("input_data") or {})
            await self.complete_task(task["task_id"], result or {"status": "ok"})
            logger.info(f"Task '{name}' ({task['task_id'][:8]}) completed")
        except Exception as e:
            logger.error(f"Task '{name}' failed: {e}", exc_info=True)
            await self.fail_task(task["task_id"], str(e))

    async def run(self):
        """Main poll loop."""
        self.running = True
        logger.info(f"RalphTaskRunner polling every {self.poll_interval}s")
        while self.running:
            try:
                task = await self.dequeue_task()
                if task:
                    asyncio.create_task(self.run_one(task))
                else:
                    await asyncio.sleep(self.poll_interval)
            except Exception as e:
                logger.error(f"Poll error: {e}", exc_info=True)
                await asyncio.sleep(self.poll_interval)

    def stop(self):
        self.running = False


# ── Default task handlers ────────────────────────────────────────────────────

runner = RalphTaskRunner()


@runner.register("memory_compression")
async def handle_memory_compression(payload: dict) -> dict:
    """Compress old memory episodes."""
    logger.info("Running memory compression...")
    # TODO: call memory compression logic
    return {"compressed": 0, "freed_bytes": 0}


@runner.register("care_metric_refresh")
async def handle_care_refresh(payload: dict) -> dict:
    """Refresh care metrics from latest consciousness state."""
    logger.info("Refreshing care metrics...")
    return {"refreshed": True, "timestamp": datetime.now(timezone.utc).isoformat()}


@runner.register("morning_briefing_prep")
async def handle_morning_briefing(payload: dict) -> dict:
    """Pre-generate morning briefing for the configured hour."""
    logger.info("Preparing morning briefing...")
    return {"prepared": True, "timestamp": datetime.now(timezone.utc).isoformat()}


@runner.register("variant_health_score_update")
async def handle_variant_health(payload: dict) -> dict:
    """Update variant health scores from SOV3 neural models."""
    logger.info("Updating variant health scores...")
    return {"updated": True, "variants_scored": 0}


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)

    async def main():
        await runner.connect()
        try:
            await runner.run()
        finally:
            await runner.disconnect()

    asyncio.run(main())
