"""
FIPA Contract Net Protocol — Task Routing with Pheromone Trails.

Implements the Foundation for Intelligent Physical Agents (FIPA) Contract Net
Protocol (CNP) for multi-agent task allocation, extended with stigmergic
pheromone trails for emergent specialization.

Protocol flow:
    1. Manager broadcasts Call-for-Proposals (CFP) to capable agents
    2. Agents submit Bids (capability score × trust × pheromone weight)
    3. Manager awards task to highest bidder
    4. On completion: pheromone trail deposited (success) or decayed (failure)

Pheromone model:
    - Per (agent_id, task_type) trails using exponential moving average
    - Aging factor β = 0.85 (Beta Reputation System, Jøsang & Ismail 2002)
    - Evaporation rate: trails decay toward 0.5 (neutral) without reinforcement
    - Emergent specialization: agents accumulate pheromone in their niche

References:
    - FIPA Contract Net Interaction Protocol (FIPA SC00029H, 2002)
    - Ant colony optimisation: Dorigo & Stützle (2004)
    - Beta Reputation System: Jøsang & Ismail, SAC 2002
    - Stigmergy in agent systems: Bonabeau et al. (1999)
"""

import logging
import math
import uuid
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from typing import Any, Dict, List, Optional, Tuple

logger = logging.getLogger(__name__)


# ── Constants ─────────────────────────────────────────────────────────────────

PHEROMONE_AGING_FACTOR = 0.85       # β in Beta Reputation System
PHEROMONE_NEUTRAL = 0.5             # Resting state (no information)
PHEROMONE_DEPOSIT_SUCCESS = 0.15    # Strength of successful reinforcement
PHEROMONE_DEPOSIT_FAILURE = -0.08   # Strength of failure signal
MIN_BIDDERS = 1                     # Minimum agents for award to proceed
CFP_TIMEOUT_SECONDS = 30            # Max wait for bids


# ── Data Structures ───────────────────────────────────────────────────────────

@dataclass
class Bid:
    """A bid submitted by an agent in response to a CFP."""
    agent_id: str
    agent_name: str
    task_type: str
    task_id: str

    # Bid components (0-1 each)
    capability_score: float         # How capable is this agent for this task type?
    trust_level: float              # Agent's registry trust level
    pheromone_weight: float         # Historical success pheromone for this task type
    current_load: float             # 0 = idle, 1 = fully loaded (lower is better)
    care_score: float = 0.5         # Agent's care alignment score

    submitted_at: datetime = field(default_factory=datetime.now)

    def compute_score(self) -> float:
        """
        Weighted bid score. Higher = more likely to win.

        Weights (sum to 1.0):
            capability_score × 0.30
            trust_level      × 0.25
            pheromone_weight × 0.25
            (1 - load)       × 0.15
            care_score       × 0.05
        """
        score = (
            self.capability_score * 0.30
            + self.trust_level * 0.25
            + self.pheromone_weight * 0.25
            + (1.0 - self.current_load) * 0.15
            + self.care_score * 0.05
        )
        return round(min(1.0, max(0.0, score)), 4)


@dataclass
class ContractRecord:
    """Records an awarded task contract for pheromone updates."""
    contract_id: str
    task_id: str
    task_type: str
    awarded_agent_id: str
    bid_score: float
    all_bids: List[Bid]
    awarded_at: datetime = field(default_factory=datetime.now)
    completed_at: Optional[datetime] = None
    success: Optional[bool] = None
    outcome_notes: str = ""


# ── Pheromone Trail Store ──────────────────────────────────────────────────────

class PheromoneTrails:
    """
    In-memory pheromone trail store.

    Trails are keyed by (agent_id, task_type).
    Each trail is a float in [0, 1]:
        > 0.5 : agent has specialised in this task type (positive signal)
        = 0.5 : neutral / no information
        < 0.5 : agent has failed at this task type (negative signal)

    Evaporation: trails drift back toward PHEROMONE_NEUTRAL at rate ε per hour.
    """

    EVAPORATION_RATE_PER_HOUR = 0.02    # Small drift toward neutral
    EVAPORATION_INTERVAL_SECONDS = 3600

    def __init__(self):
        self._trails: Dict[Tuple[str, str], float] = {}   # (agent_id, task_type) → weight
        self._last_evaporation: datetime = datetime.now()
        self._deposit_counts: Dict[Tuple[str, str], int] = {}

    def get(self, agent_id: str, task_type: str) -> float:
        """Return pheromone weight for (agent, task_type). Defaults to neutral."""
        self._maybe_evaporate()
        return self._trails.get((agent_id, task_type), PHEROMONE_NEUTRAL)

    def deposit(self, agent_id: str, task_type: str, success: bool) -> float:
        """
        Deposit pheromone after a task outcome.

        Uses Beta Reputation System aging: new value blends with history via β.
        """
        key = (agent_id, task_type)
        current = self._trails.get(key, PHEROMONE_NEUTRAL)
        delta = PHEROMONE_DEPOSIT_SUCCESS if success else PHEROMONE_DEPOSIT_FAILURE

        # Beta Reputation System aging: weight recent outcomes more
        new_value = current * PHEROMONE_AGING_FACTOR + delta * (1 - PHEROMONE_AGING_FACTOR) + (
            PHEROMONE_NEUTRAL * (1 - PHEROMONE_AGING_FACTOR)
        )
        new_value = round(min(1.0, max(0.0, new_value)), 4)
        self._trails[key] = new_value
        self._deposit_counts[key] = self._deposit_counts.get(key, 0) + 1
        return new_value

    def _maybe_evaporate(self) -> None:
        """Apply evaporation if enough time has elapsed."""
        now = datetime.now()
        elapsed_hours = (now - self._last_evaporation).total_seconds() / 3600
        if elapsed_hours < 1.0:
            return
        self._last_evaporation = now
        rate = self.EVAPORATION_RATE_PER_HOUR * elapsed_hours
        for key in list(self._trails.keys()):
            current = self._trails[key]
            # Drift toward neutral
            self._trails[key] = round(
                current + (PHEROMONE_NEUTRAL - current) * rate, 4
            )

    def get_specialisations(self, task_type: str, threshold: float = 0.65) -> List[Tuple[str, float]]:
        """Return (agent_id, pheromone) pairs specialised in task_type above threshold."""
        results = []
        for (aid, tt), weight in self._trails.items():
            if tt == task_type and weight >= threshold:
                results.append((aid, weight))
        return sorted(results, key=lambda x: x[1], reverse=True)

    def get_agent_profile(self, agent_id: str) -> Dict[str, float]:
        """Return full pheromone profile for an agent across all task types."""
        return {
            tt: w for (aid, tt), w in self._trails.items()
            if aid == agent_id
        }

    def get_stats(self) -> Dict[str, Any]:
        """Pheromone store statistics."""
        if not self._trails:
            return {"total_trails": 0, "specialised_count": 0, "neutral_count": 0}
        values = list(self._trails.values())
        specialised = sum(1 for v in values if v > 0.65)
        negative = sum(1 for v in values if v < 0.35)
        return {
            "total_trails": len(self._trails),
            "specialised_count": specialised,
            "negative_count": negative,
            "neutral_count": len(values) - specialised - negative,
            "mean_pheromone": round(sum(values) / len(values), 4),
        }


# ── Contract Net Protocol ─────────────────────────────────────────────────────

class ContractNetProtocol:
    """
    FIPA Contract Net Protocol for task routing.

    Integrates with AgentRegistry to find capable agents,
    score bids, and award tasks. Pheromone trails enable emergent specialisation
    without central coordination (stigmergy).

    Usage:
        cnp = ContractNetProtocol(agent_registry)
        bids = await cnp.broadcast_call_for_proposals(task)
        winner = await cnp.award_task(bids, task)
        # ... task executes ...
        await cnp.record_outcome(contract_id, success=True)
    """

    def __init__(self, agent_registry: Any):
        self.agent_registry = agent_registry
        self.pheromones = PheromoneTrails()
        self._contracts: Dict[str, ContractRecord] = {}
        self._total_auctions = 0
        self._total_awarded = 0
        self._no_bid_count = 0
        self.council_learner = None  # Phase 2.6: wired in initializer

    # ── Protocol Steps ────────────────────────────────────────────────────────

    async def broadcast_call_for_proposals(
        self,
        task: Dict[str, Any],
        max_bidders: int = 20,
    ) -> List[Bid]:
        """
        Step 1: Broadcast CFP to capable agents, collect bids.

        Args:
            task: dict with keys: id, type, required_capabilities, care_weight, description
            max_bidders: cap on number of agents solicited

        Returns:
            List of Bid objects, sorted by score descending.
        """
        task_type = task.get("type", "generic")
        required_caps = task.get("required_capabilities", [])
        care_weight = float(task.get("care_weight", 0.5))

        if not self.agent_registry:
            logger.warning("ContractNet: no agent_registry — returning empty bids")
            return []

        # Find candidate agents
        agents = list(self.agent_registry.agents.values())

        # Filter: must have at least one required capability (or no requirement)
        if required_caps:
            from meok.agents.registry import AgentCapability
            cap_set = set()
            for cap in required_caps:
                if isinstance(cap, str):
                    try:
                        cap_set.add(AgentCapability(cap))
                    except ValueError:
                        pass
                else:
                    cap_set.add(cap)

            agents = [
                a for a in agents
                if any(c in a.capabilities for c in cap_set)
            ] if cap_set else agents

        # Sort by pheromone weight for this task type (specialised first)
        agents_scored = [
            (a, self.pheromones.get(a.id, task_type))
            for a in agents
        ]
        agents_scored.sort(key=lambda x: x[1], reverse=True)
        agents_solicited = [a for a, _ in agents_scored[:max_bidders]]

        bids: List[Bid] = []
        for agent in agents_solicited:
            capability_score = self._capability_score(agent, task_type, required_caps)
            if capability_score < 0.1:
                continue  # Agent can't do this task

            current_load = 1.0 if agent.current_task else 0.3
            pheromone = self.pheromones.get(agent.id, task_type)

            bid = Bid(
                agent_id=agent.id,
                agent_name=agent.name,
                task_type=task_type,
                task_id=task.get("id", ""),
                capability_score=capability_score,
                trust_level=agent.trust_level,
                pheromone_weight=pheromone,
                current_load=current_load,
                care_score=care_weight,
            )
            bids.append(bid)

        bids.sort(key=lambda b: b.compute_score(), reverse=True)
        logger.debug(
            "ContractNet CFP for task '%s' (type=%s): %d bids from %d solicited",
            task.get("id", "?"), task_type, len(bids), len(agents_solicited),
        )
        self._total_auctions += 1
        return bids

    async def award_task(
        self,
        bids: List[Bid],
        task: Dict[str, Any],
    ) -> Optional[str]:
        """
        Step 2: Award task to highest bidder. Returns winning agent_id or None.

        Ties broken by trust_level, then by agent_id (deterministic).
        """
        if not bids:
            self._no_bid_count += 1
            logger.warning("ContractNet: no bids for task %s", task.get("id"))
            return None

        winner = max(bids, key=lambda b: (b.compute_score(), b.trust_level, b.agent_id))
        contract = ContractRecord(
            contract_id=f"cnp_{uuid.uuid4().hex[:10]}",
            task_id=task.get("id", ""),
            task_type=task.get("type", "generic"),
            awarded_agent_id=winner.agent_id,
            bid_score=winner.compute_score(),
            all_bids=bids,
        )
        self._contracts[contract.contract_id] = contract
        self._total_awarded += 1

        logger.info(
            "ContractNet awarded task %s to agent %s (score=%.3f, pheromone=%.3f)",
            task.get("id"), winner.agent_id, winner.compute_score(), winner.pheromone_weight,
        )
        return winner.agent_id

    async def record_outcome(
        self,
        contract_id: str,
        success: bool,
        outcome_notes: str = "",
    ) -> None:
        """
        Step 3: Record task outcome and deposit pheromone trail.

        Call this after the task completes (success or failure).
        """
        contract = self._contracts.get(contract_id)
        if not contract:
            logger.warning("ContractNet: contract %s not found for outcome recording", contract_id)
            return

        contract.completed_at = datetime.now()
        contract.success = success
        contract.outcome_notes = outcome_notes

        # Deposit pheromone for winning agent
        new_weight = self.pheromones.deposit(
            agent_id=contract.awarded_agent_id,
            task_type=contract.task_type,
            success=success,
        )

        # Weak negative signal for runner-up (didn't win, no feedback needed)
        # — this is intentionally omitted to avoid punishing non-winners

        logger.info(
            "ContractNet outcome: contract=%s agent=%s success=%s pheromone_now=%.3f",
            contract_id, contract.awarded_agent_id, success, new_weight,
        )

        # Phase 2.6: fire learning signal for auction result
        if self.council_learner is not None:
            import asyncio as _asyncio
            _asyncio.create_task(
                self.council_learner.on_task_completed(
                    agent_id=contract.awarded_agent_id,
                    task_type=contract.task_type,
                    success=success,
                    pheromone_before=float(self.pheromones.get(contract.awarded_agent_id, contract.task_type)),
                    agent_trust=0.5,  # will be refreshed from registry below
                    performance_score=1.0 if success else 0.0,
                )
            )

        # Update registry performance score
        if self.agent_registry:
            agent = self.agent_registry.agents.get(contract.awarded_agent_id)
            if agent:
                if success:
                    agent.tasks_completed += 1
                else:
                    agent.tasks_failed += 1
                # EMA performance update
                alpha = 0.1
                outcome_val = 1.0 if success else 0.0
                agent.performance_score = round(
                    (1 - alpha) * agent.performance_score + alpha * outcome_val, 4
                )

    # ── Routing shortcut (combines CFP + award in one call) ───────────────────

    async def route_task(self, task: Dict[str, Any]) -> Optional[str]:
        """
        Convenience: broadcast CFP + award in one call.
        Returns winning agent_id or None.
        Does NOT record outcome (caller must call record_outcome after execution).
        """
        bids = await self.broadcast_call_for_proposals(task)
        return await self.award_task(bids, task)

    # ── Helpers ───────────────────────────────────────────────────────────────

    def _capability_score(
        self,
        agent: Any,
        task_type: str,
        required_caps: List[Any],
    ) -> float:
        """Score how capable an agent is for a given task type (0-1)."""
        if not required_caps:
            return agent.performance_score  # Generic capability

        from meok.agents.registry import AgentCapability
        cap_set: set = set()
        for cap in required_caps:
            if isinstance(cap, str):
                try:
                    cap_set.add(AgentCapability(cap))
                except ValueError:
                    pass
            else:
                cap_set.add(cap)

        agent_caps = set(agent.capabilities)
        if not cap_set:
            return agent.performance_score

        match_ratio = len(cap_set & agent_caps) / len(cap_set)
        return round(match_ratio * agent.performance_score, 4)

    # ── Stats / Introspection ─────────────────────────────────────────────────

    def get_routing_weights(self, task_type: str) -> Dict[str, float]:
        """Return {agent_id: pheromone_weight} for a task_type (specialised agents only)."""
        specialised = self.pheromones.get_specialisations(task_type, threshold=0.6)
        return {aid: weight for aid, weight in specialised}

    def get_stats(self) -> Dict[str, Any]:
        """Return Contract Net statistics."""
        active = sum(1 for c in self._contracts.values() if c.success is None)
        completed = sum(1 for c in self._contracts.values() if c.success is not None)
        successful = sum(1 for c in self._contracts.values() if c.success is True)
        return {
            "total_auctions": self._total_auctions,
            "total_awarded": self._total_awarded,
            "no_bid_count": self._no_bid_count,
            "active_contracts": active,
            "completed_contracts": completed,
            "success_rate": round(successful / completed, 3) if completed else 0.0,
            "pheromones": self.pheromones.get_stats(),
        }

    def list_recent_contracts(self, limit: int = 10) -> List[Dict[str, Any]]:
        """Return recent contracts, newest first."""
        contracts = sorted(
            self._contracts.values(),
            key=lambda c: c.awarded_at,
            reverse=True,
        )[:limit]
        return [
            {
                "contract_id": c.contract_id,
                "task_id": c.task_id,
                "task_type": c.task_type,
                "awarded_agent_id": c.awarded_agent_id,
                "bid_score": c.bid_score,
                "success": c.success,
                "awarded_at": c.awarded_at.isoformat(),
                "completed_at": c.completed_at.isoformat() if c.completed_at else None,
            }
            for c in contracts
        ]
