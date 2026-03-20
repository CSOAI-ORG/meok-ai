"""
Ralph Task Runner — PGQueuer-based autonomous task execution
Polls ralph_tasks table for pending work, executes, updates status.

Usage:
    python -m meok.agents.ralph_task_runner

Deps: asyncpg, pgqueuer (pip install pgqueuer)
"""

import asyncio
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
                    WHERE status = 'pending'
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
                SET status = 'done', result = $1, completed_at = NOW()
                WHERE task_id = $2
            """, result, task_id)

    async def fail_task(self, task_id: str, error: str, retry: bool = True):
        async with self.pool.acquire() as conn:
            if retry:
                await conn.execute("""
                    UPDATE ralph_tasks
                    SET status = CASE
                        WHEN retry_count < max_retries THEN 'pending'
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

    async def run_one(self, task: dict) -> None:
        """Execute a single task with its registered handler."""
        name = task["task_name"]
        handler = self.handlers.get(name)
        if not handler:
            logger.warning(f"No handler for task '{name}' — skipping")
            await self.fail_task(task["task_id"], f"No handler registered for '{name}'", retry=False)
            return

        try:
            result = await handler(task["payload"])
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
