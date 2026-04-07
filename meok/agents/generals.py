"""
Division Generals — Mongol Decimal Hierarchy for MEOK Agent System.

Implements a 3-tier escalation structure above the 202 base councils:
    202 councils of 33 agents
        ↓  20 Division Generals  (each governs ~10 councils / ~330 agents)
        ↓   4 Senior Generals    (each governs 5 divisions)
        ↓   Sovereign Core       (z_self + 5-layer governance stack)

Design principles:
- Starling murmuration topology: 7-neighbor attention model per general
- Per-council Engagement tracking (Ibn Khaldun) at division level
- Contract Net routing for task dispatch (see contract_net.py)
- Deadlock mediation: council BFT tie → General → Senior → Sovereign Core
- Created from highest-trust agents in the registry (emergent leadership)

References:
    - Ibn Khaldun, Muqaddimah (1377) — on the rise and fall of group solidarity
    - Starling murmurations: Cavagna et al. (2010), Science 328(5981)
    - Mongol decimal system: Morgan, "The Mongols" (1986)
"""

import asyncio
import logging
import uuid
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from typing import Any, Dict, List, Optional, Set

logger = logging.getLogger(__name__)


# ── Data Structures ───────────────────────────────────────────────────────────

@dataclass
class CouncilEngagement:
    """Per-council Engagement tracking (Ibn Khaldun social cohesion)."""
    council_id: str
    agent_ids: List[str] = field(default_factory=list)

    # Components (updated after each task completion)
    intra_council_trust_density: float = 0.0
    task_success_rate: float = 0.5
    reciprocity_balance: float = 0.5   # 0 = all one-way, 1 = fully reciprocal
    care_alignment_variance: float = 0.0  # Low = more aligned

    # Decay (time since last interaction)
    last_interaction_at: Optional[datetime] = None
    interaction_count: int = 0

    # Computed
    score: float = 0.5

    def compute(self) -> float:
        """Compute composite Engagement score (0-1)."""
        # Time-decay penalty: cohesion erodes without interaction
        decay = 1.0
        if self.last_interaction_at:
            hours_ago = (datetime.now() - self.last_interaction_at).total_seconds() / 3600
            decay = max(0.3, 1.0 - (hours_ago / 168))  # Full decay over 7 days

        raw = (
            self.intra_council_trust_density * 0.30
            + self.task_success_rate * 0.25
            + self.reciprocity_balance * 0.25
            + max(0.0, 1.0 - self.care_alignment_variance * 4) * 0.20
        )
        self.score = round(min(1.0, max(0.0, raw * decay)), 4)
        return self.score

    def record_interaction(self, success: bool, trust_delta: float = 0.0) -> None:
        """Record an agent interaction within this council."""
        self.interaction_count += 1
        self.last_interaction_at = datetime.now()
        # Exponential moving average for success rate
        alpha = 0.15
        self.task_success_rate = (1 - alpha) * self.task_success_rate + alpha * (1.0 if success else 0.0)
        # Trust density nudge
        self.intra_council_trust_density = min(
            1.0, self.intra_council_trust_density + trust_delta * 0.1
        )
        self.compute()


@dataclass
class DivisionGeneral:
    """
    Governs ~10 councils (~330 agents).

    Responsibilities:
    - Monitor per-council Engagement
    - Mediate deadlocked BFT votes between councils
    - Route tasks via Contract Net Protocol (see contract_net.py)
    - Escalate to Senior General when division Engagement < 0.3
    - 7-neighbor topology: each General watches 7 nearest councils (murmuration)
    """
    id: str
    name: str
    agent_id: str          # The actual agent from registry that serves as General
    trust_level: float
    created_at: datetime = field(default_factory=datetime.now)

    # Assigned councils
    council_ids: List[str] = field(default_factory=list)
    council_engagement: Dict[str, CouncilEngagement] = field(default_factory=dict)

    # 7-neighbor murmuration: the councils this General pays closest attention to
    neighbor_council_ids: List[str] = field(default_factory=list)

    # Mediation history
    mediations_total: int = 0
    mediations_resolved: int = 0
    escalations_to_senior: int = 0

    # Senior General reference
    senior_general_id: Optional[str] = None

    # Stats
    tasks_routed: int = 0
    last_active: Optional[datetime] = None

    def get_division_engagement(self) -> float:
        """Compute mean Engagement across all councils in this division."""
        if not self.council_engagement:
            return 0.5
        scores = [ca.compute() for ca in self.council_engagement.values()]
        return round(sum(scores) / len(scores), 4)

    def assign_councils(self, council_ids: List[str]) -> None:
        """Assign councils to this division and init their Engagement trackers."""
        self.council_ids = list(council_ids)
        for cid in council_ids:
            if cid not in self.council_engagement:
                self.council_engagement[cid] = CouncilEngagement(council_id=cid)
        # 7-neighbor: first 7 councils are the murmuration core
        self.neighbor_council_ids = self.council_ids[:7]

    def get_weakest_councils(self, n: int = 3) -> List[str]:
        """Return the n councils with lowest Engagement for intervention."""
        if not self.council_engagement:
            return []
        scored = [(cid, ca.compute()) for cid, ca in self.council_engagement.items()]
        scored.sort(key=lambda x: x[1])
        return [cid for cid, _ in scored[:n]]

    async def mediate_deadlock(
        self,
        proposal_id: str,
        deadlocked_councils: List[str],
        proposal_data: Dict[str, Any],
    ) -> Dict[str, Any]:
        """
        Mediate a BFT deadlock between councils.

        Strategy:
        1. Request re-deliberation with care_weight boosted by 0.1
        2. If still tied: apply Coincidentia synthesis direction
        3. If 3rd attempt fails: escalate to Senior General
        """
        self.mediations_total += 1
        self.last_active = datetime.now()

        attempt = proposal_data.get("mediation_attempt", 1)
        care_weight = min(0.9, proposal_data.get("care_weight", 0.5) + 0.1 * attempt)

        if attempt >= 3:
            # Escalate
            self.escalations_to_senior += 1
            logger.warning(
                "Division General %s escalating proposal %s to Senior General after %d attempts",
                self.id, proposal_id, attempt,
            )
            return {
                "action": "escalate",
                "proposal_id": proposal_id,
                "general_id": self.id,
                "senior_general_id": self.senior_general_id,
                "reason": "3 mediation attempts failed",
                "attempt": attempt,
            }

        logger.info(
            "Division General %s mediating proposal %s (attempt %d, care_weight=%.2f)",
            self.id, proposal_id, attempt, care_weight,
        )

        # Re-deliberation directive: boost care, request fresh perspectives
        self.mediations_resolved += 1
        return {
            "action": "re_deliberate",
            "proposal_id": proposal_id,
            "general_id": self.id,
            "directive": "division_mediation",
            "boosted_care_weight": care_weight,
            "mediation_attempt": attempt + 1,
            "focus": "shared_benefit_synthesis",
        }

    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "name": self.name,
            "agent_id": self.agent_id,
            "trust_level": self.trust_level,
            "created_at": self.created_at.isoformat(),
            "council_count": len(self.council_ids),
            "division_engagement": self.get_division_engagement(),
            "mediations_total": self.mediations_total,
            "mediations_resolved": self.mediations_resolved,
            "escalations_to_senior": self.escalations_to_senior,
            "tasks_routed": self.tasks_routed,
            "senior_general_id": self.senior_general_id,
            "last_active": self.last_active.isoformat() if self.last_active else None,
        }


@dataclass
class SeniorGeneral:
    """
    Corps commander. Governs 5 Division Generals (~100 councils / ~3300 agents).

    Handles escalations that Division Generals cannot resolve.
    Final escalation path: SeniorGeneral → Sovereign Core (z_self + governance).
    """
    id: str
    name: str
    agent_id: str
    trust_level: float
    division_general_ids: List[str] = field(default_factory=list)
    created_at: datetime = field(default_factory=datetime.now)
    escalations_handled: int = 0
    escalations_to_sovereign: int = 0

    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "name": self.name,
            "agent_id": self.agent_id,
            "trust_level": self.trust_level,
            "division_count": len(self.division_general_ids),
            "created_at": self.created_at.isoformat(),
            "escalations_handled": self.escalations_handled,
            "escalations_to_sovereign": self.escalations_to_sovereign,
        }


# ── GeneralRegistry ───────────────────────────────────────────────────────────

class GeneralRegistry:
    """
    Manages the Mongol decimal hierarchy of Division Generals and Senior Generals.

    On initialization, pulls the highest-trust agents from AgentRegistry
    and promotes them to Division Generals (20) and Senior Generals (4).
    The remaining 6,636 agents form 202 councils of 33.

    Idempotent: re-running initialization preserves existing promotions.
    """

    TARGET_DIVISION_GENERALS = 20
    TARGET_SENIOR_GENERALS = 4
    COUNCILS_PER_DIVISION = 10   # ~10 councils per Division General
    DIVISIONS_PER_CORPS = 5      # 5 divisions per Senior General

    def __init__(self, agent_registry: Any):
        self.agent_registry = agent_registry
        self.division_generals: Dict[str, DivisionGeneral] = {}
        self.senior_generals: Dict[str, SeniorGeneral] = {}

        # council_id → division_general_id mapping
        self.council_assignments: Dict[str, str] = {}

        # Phase 2.6: fire learning signals on council interaction outcomes
        self.council_learner: Any = None

    # ── Initialization ────────────────────────────────────────────────────────

    async def initialize(self) -> Dict[str, Any]:
        """
        Promote highest-trust agents to Division Generals and Senior Generals.
        Assign councils to divisions. Idempotent.
        """
        if not self.agent_registry:
            logger.warning("GeneralRegistry: no agent_registry — cannot initialize")
            return {"status": "no_registry"}

        agents = list(self.agent_registry.agents.values())
        if not agents:
            return {"status": "no_agents", "generals_created": 0}

        # Sort by trust_level desc, then performance_score
        agents_sorted = sorted(
            agents,
            key=lambda a: (a.trust_level, a.performance_score),
            reverse=True,
        )

        # Skip agents already promoted
        promoted_ids: Set[str] = set()
        for dg in self.division_generals.values():
            promoted_ids.add(dg.agent_id)
        for sg in self.senior_generals.values():
            promoted_ids.add(sg.agent_id)

        # Candidates (not yet promoted)
        candidates = [a for a in agents_sorted if a.id not in promoted_ids]

        dg_created = 0
        sg_created = 0

        # Promote Division Generals
        needed_dg = self.TARGET_DIVISION_GENERALS - len(self.division_generals)
        for agent in candidates[:needed_dg]:
            dg = DivisionGeneral(
                id=f"dg_{agent.id[:8]}",
                name=f"General {agent.name}",
                agent_id=agent.id,
                trust_level=agent.trust_level,
            )
            self.division_generals[dg.id] = dg
            promoted_ids.add(agent.id)
            dg_created += 1

        # Promote Senior Generals from Division Generals (by trust)
        needed_sg = self.TARGET_SENIOR_GENERALS - len(self.senior_generals)
        dg_list = sorted(self.division_generals.values(), key=lambda d: d.trust_level, reverse=True)
        for dg in dg_list[:needed_sg]:
            sg = SeniorGeneral(
                id=f"sg_{dg.agent_id[:8]}",
                name=f"Senior General {dg.name}",
                agent_id=dg.agent_id,
                trust_level=dg.trust_level,
            )
            self.senior_generals[sg.id] = sg
            sg_created += 1

        # Assign Division Generals to Senior Generals (round-robin)
        sg_list = list(self.senior_generals.values())
        for i, dg in enumerate(self.division_generals.values()):
            if sg_list:
                sg = sg_list[i % len(sg_list)]
                dg.senior_general_id = sg.id
                if dg.id not in sg.division_general_ids:
                    sg.division_general_ids.append(dg.id)

        # Assign councils to divisions
        await self._assign_councils_to_divisions()

        logger.info(
            "GeneralRegistry initialized: %d Division Generals, %d Senior Generals, %d councils assigned",
            len(self.division_generals), len(self.senior_generals), len(self.council_assignments),
        )
        return {
            "status": "ok",
            "division_generals": len(self.division_generals),
            "senior_generals": len(self.senior_generals),
            "dg_created": dg_created,
            "sg_created": sg_created,
            "councils_assigned": len(self.council_assignments),
        }

    async def _assign_councils_to_divisions(self) -> None:
        """Distribute known councils across Division Generals."""
        # Discover councils from agent metadata
        council_set: Set[str] = set()
        for agent in self.agent_registry.agents.values():
            meta = agent.metadata or {}
            cid = meta.get("council_id")
            if cid:
                council_set.add(cid)

        # Also synthesize council IDs for known agent clusters
        if not council_set:
            # If no councils registered yet, create placeholders from agent IDs
            agents = list(self.agent_registry.agents.values())
            for i in range(0, len(agents), 33):
                batch = agents[i:i + 33]
                cid = f"council_{uuid.uuid4().hex[:8]}"
                council_set.add(cid)

        councils = sorted(council_set)
        dg_list = list(self.division_generals.values())
        if not dg_list:
            return

        for i, cid in enumerate(councils):
            dg = dg_list[i % len(dg_list)]
            if cid not in self.council_assignments:
                self.council_assignments[cid] = dg.id
                if cid not in dg.council_ids:
                    dg.council_ids.append(cid)
                    if cid not in dg.council_engagement:
                        dg.council_engagement[cid] = CouncilEngagement(council_id=cid)
                    dg.neighbor_council_ids = dg.council_ids[:7]

    # ── Routing ───────────────────────────────────────────────────────────────

    def get_general_for_council(self, council_id: str) -> Optional[DivisionGeneral]:
        """Return the Division General responsible for a council."""
        dg_id = self.council_assignments.get(council_id)
        return self.division_generals.get(dg_id) if dg_id else None

    def get_general_for_agent(self, agent_id: str) -> Optional[DivisionGeneral]:
        """Return the Division General responsible for the council containing agent_id."""
        agent = self.agent_registry.agents.get(agent_id)
        if not agent:
            return None
        council_id = (agent.metadata or {}).get("council_id")
        if council_id:
            return self.get_general_for_council(council_id)
        # Fallback: assign round-robin by agent index
        agents = list(self.agent_registry.agents.keys())
        if agent_id in agents:
            idx = agents.index(agent_id)
            dg_list = list(self.division_generals.values())
            if dg_list:
                return dg_list[idx % len(dg_list)]
        return None

    # ── Mediation ─────────────────────────────────────────────────────────────

    async def handle_deadlock(
        self,
        proposal_id: str,
        council_id: str,
        proposal_data: Dict[str, Any],
    ) -> Dict[str, Any]:
        """
        Route a deadlocked proposal up the hierarchy:
        Council BFT tie → Division General → Senior General → Sovereign Core
        """
        dg = self.get_general_for_council(council_id)
        if dg:
            result = await dg.mediate_deadlock(
                proposal_id=proposal_id,
                deadlocked_councils=[council_id],
                proposal_data=proposal_data,
            )
            if result.get("action") == "escalate":
                # Escalate to Senior General
                sg_id = result.get("senior_general_id")
                sg = self.senior_generals.get(sg_id) if sg_id else None
                if sg:
                    sg.escalations_handled += 1
                    if proposal_data.get("mediation_attempt", 1) >= 5:
                        sg.escalations_to_sovereign += 1
                        return {
                            "action": "sovereign_core",
                            "proposal_id": proposal_id,
                            "reason": "senior_general_escalation",
                            "senior_general_id": sg_id,
                        }
                    return {
                        "action": "senior_mediation",
                        "proposal_id": proposal_id,
                        "senior_general_id": sg_id,
                        "directive": "full_council_review",
                    }
            return result
        # No general assigned — fall through to Sovereign Core
        return {
            "action": "sovereign_core",
            "proposal_id": proposal_id,
            "reason": "no_general_assigned",
        }

    # ── Engagement ─────────────────────────────────────────────────────────────

    def record_council_interaction(
        self,
        council_id: str,
        success: bool,
        trust_delta: float = 0.0,
    ) -> None:
        """Record a task outcome for a council's Engagement tracker."""
        dg = self.get_general_for_council(council_id)
        if dg:
            ca = dg.council_engagement.get(council_id)
            if ca:
                ca.record_interaction(success=success, trust_delta=trust_delta)

        # Phase 2.6: feed council interaction to learning pipeline
        if self.council_learner is not None:
            import asyncio as _asyncio
            try:
                _asyncio.create_task(
                    self.council_learner.on_task_completed(
                        agent_id=council_id,
                        task_type="council_interaction",
                        success=success,
                        pheromone_before=0.5,
                        agent_trust=max(0.0, min(1.0, 0.5 + trust_delta)),
                        performance_score=1.0 if success else 0.0,
                    )
                )
            except RuntimeError:
                pass  # no running event loop (sync context) — skip silently

    def get_all_council_engagement(self) -> Dict[str, float]:
        """Return {council_id: engagement_score} for all tracked councils."""
        result: Dict[str, float] = {}
        for dg in self.division_generals.values():
            for cid, ca in dg.council_engagement.items():
                result[cid] = ca.compute()
        return result

    # ── Stats ─────────────────────────────────────────────────────────────────

    def get_stats(self) -> Dict[str, Any]:
        """Return hierarchy statistics for dashboard / MCP tool."""
        dg_engagement = [dg.get_division_engagement() for dg in self.division_generals.values()]
        mean_div_engagement = (
            round(sum(dg_engagement) / len(dg_engagement), 4) if dg_engagement else 0.0
        )
        total_mediations = sum(dg.mediations_total for dg in self.division_generals.values())
        total_escalations = sum(dg.escalations_to_senior for dg in self.division_generals.values())

        return {
            "division_generals": len(self.division_generals),
            "senior_generals": len(self.senior_generals),
            "councils_tracked": len(self.council_assignments),
            "mean_division_engagement": mean_div_engagement,
            "total_mediations": total_mediations,
            "total_escalations_to_senior": total_escalations,
            "weakest_divisions": [
                {"general_id": dg.id, "name": dg.name, "engagement": dg.get_division_engagement()}
                for dg in sorted(self.division_generals.values(), key=lambda d: d.get_division_engagement())[:3]
            ],
        }

    def list_generals(self) -> List[Dict[str, Any]]:
        """Return list of all Division Generals with stats."""
        return [dg.to_dict() for dg in self.division_generals.values()]
