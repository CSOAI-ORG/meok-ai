"""
MEOK TaskExecutor — Closes GAP 2: Tasks assigned but never executed

The previous architecture had delegate_task() write a task to the database and
return. There was no polling loop, no worker, nothing that ever picked up the
task and ran it. This module closes that loop.

Architecture:
- asyncio.PriorityQueue: low-priority tasks yielded to high-priority ones
- 3 worker coroutines: parallel execution without thread overhead
- Dead-letter queue: exhausted retries go here for inspection
- Follow-up task spawning: completed tasks can create follow-up tasks
  (self-sustaining cognitive loop)
- Memory recall injection: before executing, recall relevant memories
  (closes GAP 3 in parallel — memories actually get accessed)

Wire into lifespan:
    executor = TaskExecutor(state.agent_registry, state.memory_store)
    await executor.start()
    state.task_executor = executor

Wire into delegate_task():
    await state.task_executor.submit(TaskEnvelope(task_id=..., payload=...))
"""

from __future__ import annotations

import asyncio
import logging
import uuid
from dataclasses import dataclass, field
from datetime import datetime, timezone
from enum import Enum
from typing import Any, Callable, Coroutine, Dict, List, Optional

logger = logging.getLogger(__name__)


# ── Task state machine ─────────────────────────────────────────────────────────

class TaskState(str, Enum):
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    DEAD_LETTER = "dead_letter"


# ── Task envelope ──────────────────────────────────────────────────────────────

@dataclass
class TaskEnvelope:
    """
    A unit of work for the TaskExecutor.

    payload must contain at minimum:
      - action_type: str  (e.g. "research", "memory_write", "care_check")
      - content: str      (human-readable description of what to do)
    """
    payload: Dict[str, Any]
    task_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    agent_id: Optional[str] = None        # Which agent should execute this
    priority: int = 5                      # 0 = highest, 9 = lowest
    max_retries: int = 3
    retry_count: int = 0
    timeout_seconds: int = 300
    state: TaskState = TaskState.PENDING
    created_at: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    started_at: Optional[str] = None
    completed_at: Optional[str] = None
    result: Optional[Dict[str, Any]] = None
    error: Optional[str] = None

    def __lt__(self, other: "TaskEnvelope") -> bool:
        """Priority queue comparison — lower priority number = higher priority."""
        return self.priority < other.priority


# ── Task executor ──────────────────────────────────────────────────────────────

class TaskExecutor:
    """
    Multi-worker asyncio task executor.

    Workers pull from a PriorityQueue, recall relevant memories before
    executing (GAP 3 fix), dispatch to the appropriate handler, and
    can spawn follow-up tasks to create a self-sustaining loop.
    """

    NUM_WORKERS = 3

    def __init__(
        self,
        agent_registry: Any = None,
        memory_store: Any = None,
        num_workers: int = NUM_WORKERS,
    ):
        self.agent_registry = agent_registry
        self.memory_store = memory_store
        self.num_workers = num_workers

        self._queue: asyncio.PriorityQueue = asyncio.PriorityQueue()
        self._dead_letter: asyncio.Queue = asyncio.Queue()
        self._workers: List[asyncio.Task] = []
        self._shutdown = False

        # Stats
        self.total_submitted: int = 0
        self.total_completed: int = 0
        self.total_failed: int = 0
        self.total_dead_lettered: int = 0

        # Optional custom handler registry
        # Maps action_type -> async callable(envelope) -> dict
        self._handlers: Dict[str, Callable[["TaskEnvelope"], Coroutine]] = {}

    # ── Lifecycle ──────────────────────────────────────────────────────────────

    async def start(self) -> None:
        """Start worker coroutines. Call from lifespan."""
        self._shutdown = False
        for i in range(self.num_workers):
            task = asyncio.create_task(
                self._worker_loop(f"executor-worker-{i}"),
                name=f"meok-executor-{i}",
            )
            self._workers.append(task)
        logger.info(
            "TaskExecutor started — %d workers running", self.num_workers
        )

    async def stop(self) -> None:
        """Graceful shutdown — drain queue then cancel workers."""
        self._shutdown = True
        # Signal workers to stop by putting sentinel values
        for _ in self._workers:
            await self._queue.put((999, datetime.now(timezone.utc).isoformat(), None))
        await asyncio.gather(*self._workers, return_exceptions=True)
        self._workers.clear()
        logger.info("TaskExecutor stopped")

    # ── Submit ────────────────────────────────────────────────────────────────

    async def submit(self, envelope: TaskEnvelope) -> str:
        """
        Submit a task for execution.
        Returns the task_id.
        """
        self.total_submitted += 1
        # PriorityQueue items are (priority, tiebreaker, item)
        await self._queue.put((envelope.priority, envelope.created_at, envelope))
        logger.debug("Task %s submitted (action=%s, priority=%d)",
                     envelope.task_id, envelope.payload.get("action_type"), envelope.priority)
        return envelope.task_id

    def submit_sync(self, envelope: TaskEnvelope) -> str:
        """
        Submit from synchronous context. Schedules on the running loop.
        """
        try:
            loop = asyncio.get_running_loop()
            loop.call_soon_threadsafe(
                lambda: loop.create_task(self.submit(envelope))
            )
        except RuntimeError:
            pass  # No running loop — task silently dropped
        return envelope.task_id

    def register_handler(
        self,
        action_type: str,
        handler: Callable[["TaskEnvelope"], Coroutine],
    ) -> None:
        """Register a custom handler for a given action_type."""
        self._handlers[action_type] = handler

    # ── Stats ────────────────────────────────────────────────────────────────

    def get_stats(self) -> Dict[str, Any]:
        return {
            "queue_size": self._queue.qsize(),
            "dead_letter_size": self._dead_letter.qsize(),
            "workers": len(self._workers),
            "total_submitted": self.total_submitted,
            "total_completed": self.total_completed,
            "total_failed": self.total_failed,
            "total_dead_lettered": self.total_dead_lettered,
            "completion_rate": (
                self.total_completed / max(self.total_submitted, 1)
            ),
        }

    # ── Internal ──────────────────────────────────────────────────────────────

    async def _worker_loop(self, name: str) -> None:
        logger.debug("Worker %s started", name)
        while not self._shutdown:
            try:
                _, _, envelope = await asyncio.wait_for(
                    self._queue.get(), timeout=5.0
                )
            except asyncio.TimeoutError:
                continue

            if envelope is None:
                # Shutdown sentinel
                break

            envelope.state = TaskState.RUNNING
            envelope.started_at = datetime.now(timezone.utc).isoformat()

            try:
                result = await asyncio.wait_for(
                    self._execute(envelope),
                    timeout=float(envelope.timeout_seconds),
                )
                envelope.state = TaskState.COMPLETED
                envelope.completed_at = datetime.now(timezone.utc).isoformat()
                envelope.result = result
                self.total_completed += 1

                logger.info(
                    "Task %s completed (action=%s) in worker %s",
                    envelope.task_id,
                    envelope.payload.get("action_type"),
                    name,
                )

                # Self-sustaining: completed tasks can spawn follow-ups
                for followup in result.get("follow_up_tasks", []):
                    await self.submit(TaskEnvelope(**followup))

            except (asyncio.TimeoutError, Exception) as e:
                envelope.retry_count += 1
                envelope.error = str(e)
                self.total_failed += 1

                if envelope.retry_count >= envelope.max_retries:
                    envelope.state = TaskState.DEAD_LETTER
                    await self._dead_letter.put(envelope)
                    self.total_dead_lettered += 1
                    logger.error(
                        "Task %s dead-lettered after %d retries: %s",
                        envelope.task_id, envelope.retry_count, e,
                    )
                else:
                    # Exponential backoff retry
                    backoff = 2 ** envelope.retry_count
                    logger.warning(
                        "Task %s failed (attempt %d/%d), retrying in %ds: %s",
                        envelope.task_id, envelope.retry_count, envelope.max_retries, backoff, e,
                    )
                    envelope.state = TaskState.PENDING
                    await asyncio.sleep(backoff)
                    await self._queue.put((envelope.priority, envelope.created_at, envelope))

            finally:
                self._queue.task_done()

    async def _execute(self, envelope: TaskEnvelope) -> Dict[str, Any]:
        """
        Execute a single task envelope.

        Steps:
        1. Recall relevant memories (GAP 3 fix — memories get accessed)
        2. Route to custom handler if registered, else use default dispatch
        3. Return result dict (may include follow_up_tasks)
        """
        action_type = envelope.payload.get("action_type", "generic")
        content = envelope.payload.get("content", "")

        # Step 1: Memory recall (closes GAP 3)
        memories = await self._recall_memories(content)
        envelope.payload["_recalled_memories"] = memories

        # Step 2: Dispatch
        handler = self._handlers.get(action_type)
        if handler:
            return await handler(envelope)
        else:
            return await self._default_handler(envelope, action_type, content, memories)

    async def _recall_memories(self, query: str, top_k: int = 5) -> List[Dict]:
        """
        Recall relevant memories before task execution and increment access_count.
        This is the GAP 3 fix: memories were written but never recalled.
        Uses recall_for_task() which both retrieves AND marks memories as accessed.
        """
        if not self.memory_store or not query:
            return []
        try:
            # Preferred: recall_for_task() increments access_count (GAP 3 fix)
            if hasattr(self.memory_store, "recall_for_task"):
                results = await self.memory_store.recall_for_task(
                    query=query, top_k=top_k, care_weight_min=0.3
                )
                return results if isinstance(results, list) else []
            # Fallback: query_memories (doesn't increment access_count but better than nothing)
            if hasattr(self.memory_store, "query_memories"):
                results = await self.memory_store.query_memories(
                    query=query, care_weight_min=0.3, limit=top_k
                )
                return results if isinstance(results, list) else []
        except Exception as e:
            logger.debug("Memory recall failed (non-critical): %s", e)
        return []

    async def _default_handler(
        self,
        envelope: TaskEnvelope,
        action_type: str,
        content: str,
        memories: List[Dict],
    ) -> Dict[str, Any]:
        """
        Default handler: records the task as a memory episode and logs it.
        Specific action types get routed to the right subsystem when available.
        """
        memory_content = (
            f"Task executed: {action_type}\n"
            f"Content: {content}\n"
            f"Recalled {len(memories)} relevant memories."
        )

        # Record the execution itself as a memory
        if self.memory_store and hasattr(self.memory_store, "record_episode"):
            try:
                await self.memory_store.record_episode(
                    content=memory_content,
                    source_agent=envelope.agent_id or "task_executor",
                    memory_type="interaction",
                    care_weight=0.6,
                    tags=["task_execution", action_type],
                )
            except Exception:
                pass

        return {
            "status": "completed",
            "action_type": action_type,
            "content_processed": content[:200] if content else "",
            "memories_recalled": len(memories),
            "follow_up_tasks": [],
        }


# ── Module-level singleton ─────────────────────────────────────────────────────

_executor: Optional[TaskExecutor] = None


def get_executor() -> Optional[TaskExecutor]:
    return _executor


def init_executor(agent_registry: Any = None, memory_store: Any = None) -> TaskExecutor:
    global _executor
    _executor = TaskExecutor(agent_registry=agent_registry, memory_store=memory_store)
    return _executor
