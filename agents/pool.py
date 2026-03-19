"""
AgentPool — Lazy-loading agent pool with LRU eviction.

Source: SOV3 deep research (compass_artifact_wf-7205807b):
  "DeepMind's 3-4 agent limit (Gemini/AlphaCode) and AgentScope's million-agent
   architecture both converge on the same answer: don't load all agents at once.
   Use lazy loading with LRU eviction — keep max_active=100 agents in hot memory,
   swap the rest to the registry database."

With 6,660 agents at ~2KB each = 13MB if all loaded.
AgentPool keeps only 100 active = ~200KB hot memory.
The other 6,560 agents exist in the database and are loaded on demand.

Usage:
    pool = AgentPool(registry=state.agent_registry, max_active=100)
    agent = await pool.get(agent_id)     # loads from DB if evicted
    pool.touch(agent_id)                 # mark recently used (prevent eviction)
    pool.release(agent_id)               # hint: this agent no longer needed
    stats = pool.stats()                 # hit_rate, active_count, evictions
"""

from __future__ import annotations

import asyncio
import logging
import time
from collections import OrderedDict
from typing import Any, Dict, Optional, TYPE_CHECKING

if TYPE_CHECKING:
    from meok.agents.registry import Agent, AgentRegistry

logger = logging.getLogger(__name__)


class AgentPool:
    """
    LRU cache over AgentRegistry.

    Design principles:
    - Transparent: callers use pool.get(id) exactly like registry.agents[id]
    - Non-blocking eviction: evict synchronously on get() when over limit
    - Write-through: mutations to Agent objects auto-persist via registry
    - Thread-safe: asyncio single-threaded, no extra locking needed

    Eviction order: LRU (Least Recently Used) — idle agents evicted first.
    Eviction guard: agents with status=BUSY or current_task set are pinned.
    """

    def __init__(self, registry: "AgentRegistry", max_active: int = 100):
        self.registry = registry
        self.max_active = max_active

        # LRU ordered dict: agent_id → Agent object
        self._active: OrderedDict[str, "Agent"] = OrderedDict()

        # Stats
        self._hits: int = 0
        self._misses: int = 0
        self._evictions: int = 0
        self._loads: int = 0
        self._start_time: float = time.time()

    # ─── Public API ──────────────────────────────────────────────────────────

    async def get(self, agent_id: str) -> Optional["Agent"]:
        """
        Return agent by ID. Loads from registry DB if not in hot cache.
        Moves agent to end of LRU order (most recently used).
        """
        if agent_id in self._active:
            self._hits += 1
            self._active.move_to_end(agent_id)
            return self._active[agent_id]

        # Cache miss — load from registry
        self._misses += 1
        agent = await self._load(agent_id)
        if agent is None:
            return None

        self._put(agent_id, agent)
        return agent

    def get_sync(self, agent_id: str) -> Optional["Agent"]:
        """
        Synchronous get — hot cache only (no DB load).
        Returns None if agent not currently active.
        Use for tight loops where async overhead is unacceptable.
        """
        if agent_id in self._active:
            self._hits += 1
            self._active.move_to_end(agent_id)
            return self._active[agent_id]
        return None

    def put(self, agent: "Agent") -> None:
        """Insert or update an agent in the hot cache."""
        self._put(agent.id, agent)

    def touch(self, agent_id: str) -> None:
        """Mark agent as recently used — prevents near-term eviction."""
        if agent_id in self._active:
            self._active.move_to_end(agent_id)

    def release(self, agent_id: str) -> None:
        """
        Hint that caller no longer needs this agent.
        Moves to front of LRU (eviction candidate) but keeps it active
        so the next get() within the window is still a cache hit.
        """
        if agent_id in self._active:
            self._active.move_to_end(agent_id, last=False)

    def evict(self, agent_id: str) -> None:
        """Force-remove agent from hot cache (e.g. agent went offline)."""
        self._active.pop(agent_id, None)

    def prime(self, agents: list) -> None:
        """
        Bulk-load a list of Agent objects into cache.
        Used at startup to pre-warm with the most trusted agents.
        Agents are inserted in priority order (highest trust first → last evicted).
        Respects max_active.
        """
        sorted_agents = sorted(agents, key=lambda a: a.trust_level)
        for agent in sorted_agents:
            self._put(agent.id, agent)

    def active_ids(self) -> list:
        """Return list of currently active agent IDs (most recent last)."""
        return list(self._active.keys())

    def active_count(self) -> int:
        """Number of agents currently in hot cache."""
        return len(self._active)

    def stats(self) -> Dict[str, Any]:
        """Pool performance statistics."""
        total = self._hits + self._misses
        hit_rate = self._hits / total if total > 0 else 0.0
        uptime = time.time() - self._start_time
        return {
            "active_count": len(self._active),
            "max_active": self.max_active,
            "cache_hits": self._hits,
            "cache_misses": self._misses,
            "hit_rate": round(hit_rate, 4),
            "evictions": self._evictions,
            "db_loads": self._loads,
            "uptime_seconds": round(uptime, 1),
            "agents_per_second": round(total / max(uptime, 1), 2),
        }

    # ─── Internal ────────────────────────────────────────────────────────────

    def _put(self, agent_id: str, agent: "Agent") -> None:
        """Insert into LRU cache, evicting if over capacity."""
        if agent_id in self._active:
            self._active.move_to_end(agent_id)
            self._active[agent_id] = agent
            return

        self._active[agent_id] = agent
        self._active.move_to_end(agent_id)

        # Evict LRU agents that are not pinned (busy/active)
        while len(self._active) > self.max_active:
            evicted = self._evict_lru()
            if evicted is None:
                # All agents are pinned — allow slight overflow
                logger.debug("AgentPool: all %d agents pinned, allowing overflow", len(self._active))
                break

    def _evict_lru(self) -> Optional[str]:
        """
        Evict the least-recently-used, non-pinned agent.
        Returns evicted agent_id or None if all are pinned.
        """
        from meok.agents.registry import AgentStatus

        for agent_id in list(self._active.keys()):
            agent = self._active[agent_id]
            # Don't evict busy agents or agents with active tasks
            pinned = (
                agent.status == AgentStatus.BUSY
                or agent.current_task is not None
            )
            if not pinned:
                del self._active[agent_id]
                self._evictions += 1
                logger.debug("AgentPool: evicted %s (LRU)", agent_id)
                return agent_id

        return None  # all pinned

    async def _load(self, agent_id: str) -> Optional["Agent"]:
        """Load agent from registry database."""
        self._loads += 1

        # Try in-memory registry dict first (fast path for small deployments)
        if hasattr(self.registry, 'agents') and agent_id in self.registry.agents:
            return self.registry.agents[agent_id]

        # Load from database via registry method
        if hasattr(self.registry, 'get_agent'):
            try:
                return await self.registry.get_agent(agent_id)
            except Exception as e:
                logger.warning("AgentPool: failed to load agent %s: %s", agent_id, e)
                return None

        logger.debug("AgentPool: agent %s not found in registry", agent_id)
        return None

    # ─── Context manager ─────────────────────────────────────────────────────

    async def __aenter__(self):
        return self

    async def __aexit__(self, *_):
        pass


class AgentPoolManager:
    """
    Manages multiple AgentPools — one per council for isolation.
    Provides a unified interface for the orchestrator and generals.

    Pool hierarchy mirrors the Mongol decimal hierarchy:
    - global_pool: max_active=100 (shared hot agents across all councils)
    - per_council_pool: max_active=33 (one council's full roster)

    This lets the most active agents float to the global pool
    while idle councils shed their memory footprint entirely.
    """

    def __init__(self, registry: "AgentRegistry", global_max: int = 100):
        self.registry = registry
        self.global_pool = AgentPool(registry, max_active=global_max)
        self._council_pools: Dict[str, AgentPool] = {}

    def get_council_pool(self, council_id: str, council_size: int = 33) -> AgentPool:
        """Get or create a pool for a specific council."""
        if council_id not in self._council_pools:
            self._council_pools[council_id] = AgentPool(
                self.registry, max_active=council_size
            )
        return self._council_pools[council_id]

    async def get_agent(self, agent_id: str, council_id: Optional[str] = None) -> Optional["Agent"]:
        """
        Get agent — checks council pool first, falls back to global pool.
        This keeps per-council locality while allowing cross-council access.
        """
        if council_id:
            pool = self.get_council_pool(council_id)
            agent = pool.get_sync(agent_id)
            if agent:
                return agent

        # Global pool fallback (loads from DB if needed)
        return await self.global_pool.get(agent_id)

    def prime_councils(self, all_agents: list, council_assignments: Dict[str, list]) -> None:
        """
        Pre-warm council pools from bulk agent list.
        council_assignments: {council_id: [agent_id, ...]}
        """
        agent_map = {a.id: a for a in all_agents}
        for council_id, agent_ids in council_assignments.items():
            pool = self.get_council_pool(council_id)
            agents = [agent_map[aid] for aid in agent_ids if aid in agent_map]
            pool.prime(agents)

        # Prime global pool with highest-trust agents
        top_agents = sorted(all_agents, key=lambda a: a.trust_level, reverse=True)[:100]
        self.global_pool.prime(top_agents)
        logger.info(
            "AgentPoolManager: primed global=%d, council_pools=%d",
            self.global_pool.active_count(),
            len(self._council_pools),
        )

    def stats(self) -> Dict[str, Any]:
        """Aggregate stats across all pools."""
        return {
            "global_pool": self.global_pool.stats(),
            "council_pools_count": len(self._council_pools),
            "total_active": (
                self.global_pool.active_count()
                + sum(p.active_count() for p in self._council_pools.values())
            ),
        }
