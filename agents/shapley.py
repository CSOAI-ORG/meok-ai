"""
Shapley Value Attribution — Fair Credit for Multi-Agent Task Completions.

Computes Monte Carlo Shapley values to fairly distribute credit among
agents that collaborated on a task. Updates agent trust scores based on
marginal contribution.

Why Shapley values?
    The Shapley value is the unique solution satisfying:
        - Efficiency (total credit = total outcome)
        - Symmetry (equal agents get equal credit)
        - Null player (non-contributing agents get 0)
        - Additivity (credits sum correctly across tasks)

    For multi-agent systems, this solves the free-rider problem: agents
    that coast on others' work receive less trust credit, incentivising
    genuine contribution.

Monte Carlo approximation:
    Exact Shapley computation is O(2^n) — intractable for large coalitions.
    We use Monte Carlo sampling (Maleki et al., 2013): permute agent order k times,
    compute marginal contribution at each position, average. Converges at k≈200-500.

References:
    - Shapley, L.S. (1953). "A Value for n-Person Games."
    - Maleki et al. (2013). "Bounding the Estimation Error of Sampling-Based Shapley Values."
    - Winter, E. (2002). "The Shapley Value." Handbook of Game Theory.
    - Fatima et al. (2008). "A Linear Approximation Method for the Shapley Value."
"""

import logging
import math
import random
import uuid
from dataclasses import dataclass, field
from datetime import datetime
from typing import Any, Callable, Dict, List, Optional, Tuple

logger = logging.getLogger(__name__)


# ── Constants ─────────────────────────────────────────────────────────────────

DEFAULT_MC_SAMPLES = 300        # Monte Carlo permutations (accuracy vs. speed)
MIN_MC_SAMPLES = 50             # Floor for small coalitions
TRUST_UPDATE_ALPHA = 0.08       # EMA factor for trust score update
TRUST_UPDATE_CAP = 0.05         # Max single-step trust change (±)


# ── Data Structures ───────────────────────────────────────────────────────────

@dataclass
class ShapleyResult:
    """Result of Shapley value computation for one task."""
    task_id: str
    task_type: str
    outcome_value: float          # 0-1: how good was the task outcome?
    participating_agents: List[str]
    shapley_values: Dict[str, float]    # agent_id → Shapley value (sum = outcome_value)
    mc_samples_used: int
    computed_at: datetime = field(default_factory=datetime.now)
    notes: str = ""

    def get_credit_fractions(self) -> Dict[str, float]:
        """Return credit as fractions of total (0-1 each, sum = 1)."""
        total = sum(self.shapley_values.values())
        if total <= 0:
            n = len(self.participating_agents)
            return {aid: 1.0 / n for aid in self.participating_agents} if n else {}
        return {
            aid: round(v / total, 4)
            for aid, v in self.shapley_values.items()
        }


# ── Shapley Attributor ────────────────────────────────────────────────────────

class ShapleyAttributor:
    """
    Monte Carlo Shapley value computation for multi-agent task credit.

    Usage:
        attributor = ShapleyAttributor(agent_registry)
        result = attributor.compute_shapley(
            task_id="task_123",
            task_type="research",
            participating_agents=["a1", "a2", "a3"],
            outcome_value=0.85,  # 0 = total failure, 1 = perfect success
            agent_contributions={"a1": 0.7, "a2": 0.4, "a3": 0.3},  # optional
        )
        attributor.update_trust_from_shapley(result)
    """

    def __init__(self, agent_registry: Optional[Any] = None):
        self.agent_registry = agent_registry
        self._results: Dict[str, ShapleyResult] = {}   # task_id → result
        self._total_computations = 0
        self._trust_updates_applied = 0

    # ── Primary API ───────────────────────────────────────────────────────────

    def compute_shapley(
        self,
        task_id: str,
        task_type: str,
        participating_agents: List[str],
        outcome_value: float,
        agent_contributions: Optional[Dict[str, float]] = None,
        mc_samples: int = DEFAULT_MC_SAMPLES,
    ) -> ShapleyResult:
        """
        Compute Monte Carlo Shapley values for participating agents.

        Args:
            task_id: unique task identifier
            task_type: task type string (e.g. "research", "memory_write")
            participating_agents: list of agent_ids that contributed
            outcome_value: overall task outcome quality (0-1)
            agent_contributions: optional dict of agent_id → raw contribution
                score (0-1). Used as the characteristic function if provided;
                otherwise derives from registry trust + performance.
            mc_samples: number of Monte Carlo permutations

        Returns:
            ShapleyResult with per-agent Shapley values summing to outcome_value.
        """
        n = len(participating_agents)
        if n == 0:
            return ShapleyResult(
                task_id=task_id,
                task_type=task_type,
                outcome_value=outcome_value,
                participating_agents=[],
                shapley_values={},
                mc_samples_used=0,
                notes="no_participants",
            )

        if n == 1:
            # Single agent gets all credit
            return ShapleyResult(
                task_id=task_id,
                task_type=task_type,
                outcome_value=outcome_value,
                participating_agents=participating_agents,
                shapley_values={participating_agents[0]: round(outcome_value, 4)},
                mc_samples_used=1,
                notes="single_agent",
            )

        # Build characteristic function v: subset → value
        contrib = agent_contributions or self._derive_contributions(participating_agents)
        v = self._build_characteristic_function(participating_agents, contrib, outcome_value)

        # Monte Carlo Shapley
        samples = max(MIN_MC_SAMPLES, min(mc_samples, 1000))
        marginals: Dict[str, List[float]] = {aid: [] for aid in participating_agents}

        for _ in range(samples):
            perm = participating_agents.copy()
            random.shuffle(perm)
            coalition: List[str] = []
            prev_val = 0.0
            for agent_id in perm:
                coalition.append(agent_id)
                curr_val = v(frozenset(coalition))
                marginal = curr_val - prev_val
                marginals[agent_id].append(marginal)
                prev_val = curr_val

        shapley_values = {
            aid: round(sum(m) / len(m), 5)
            for aid, m in marginals.items()
        }

        # Normalise so values sum to outcome_value
        total_sv = sum(shapley_values.values())
        if abs(total_sv) > 1e-9:
            scale = outcome_value / total_sv
            shapley_values = {aid: round(v * scale, 4) for aid, v in shapley_values.items()}

        self._total_computations += 1
        result = ShapleyResult(
            task_id=task_id,
            task_type=task_type,
            outcome_value=outcome_value,
            participating_agents=participating_agents,
            shapley_values=shapley_values,
            mc_samples_used=samples,
        )
        self._results[task_id] = result
        return result

    def update_trust_from_shapley(
        self,
        result: ShapleyResult,
        registry: Optional[Any] = None,
    ) -> Dict[str, float]:
        """
        Update agent trust scores based on Shapley credit fractions.

        Agents with above-average Shapley credit receive a small trust boost;
        below-average agents receive a small trust decay. Updates are capped
        at TRUST_UPDATE_CAP to prevent wild swings.

        Returns:
            Dict of agent_id → new_trust_level (for those updated)
        """
        reg = registry or self.agent_registry
        if not reg:
            return {}

        fractions = result.get_credit_fractions()
        if not fractions:
            return {}

        mean_fraction = 1.0 / len(fractions) if fractions else 0.0
        updates: Dict[str, float] = {}

        for agent_id, fraction in fractions.items():
            agent = reg.agents.get(agent_id)
            if not agent:
                continue

            # Delta: positive if above-average contributor, negative if below
            excess = fraction - mean_fraction   # in [-1/n, (n-1)/n]
            trust_delta = excess * result.outcome_value * TRUST_UPDATE_ALPHA
            trust_delta = max(-TRUST_UPDATE_CAP, min(TRUST_UPDATE_CAP, trust_delta))

            new_trust = round(
                min(1.0, max(0.0, agent.trust_level + trust_delta)), 4
            )
            agent.trust_level = new_trust
            updates[agent_id] = new_trust

        self._trust_updates_applied += 1
        logger.debug(
            "Shapley trust updates applied: task=%s agents=%d outcome=%.2f",
            result.task_id, len(updates), result.outcome_value,
        )
        return updates

    # ── Characteristic Function ───────────────────────────────────────────────

    def _build_characteristic_function(
        self,
        agents: List[str],
        contributions: Dict[str, float],
        outcome_value: float,
    ) -> Callable[[frozenset], float]:
        """
        Build v: 2^n → R, the coalition characteristic function.

        v(S) = outcome_value × (weighted_sum of agents in S) / total_weight

        This is a weighted additive characteristic function, which satisfies
        superadditivity when individual contributions are positive.
        """
        total_weight = sum(contributions.get(a, 0.1) for a in agents)
        total_weight = max(total_weight, 1e-9)

        def v(coalition: frozenset) -> float:
            if not coalition:
                return 0.0
            coalition_weight = sum(contributions.get(a, 0.1) for a in coalition)
            # Sub-additive scaling: coalition synergy is sub-linear
            n = len(coalition)
            synergy = 1.0 + 0.05 * math.log(1 + n)   # log-scale synergy bonus
            return outcome_value * (coalition_weight / total_weight) * synergy

        return v

    def _derive_contributions(self, agent_ids: List[str]) -> Dict[str, float]:
        """
        Derive agent contribution scores from registry data (trust × performance).

        Falls back to uniform 0.5 for unknown agents.
        """
        if not self.agent_registry:
            return {aid: 0.5 for aid in agent_ids}

        result = {}
        for aid in agent_ids:
            agent = self.agent_registry.agents.get(aid)
            if agent:
                result[aid] = round(agent.trust_level * 0.5 + agent.performance_score * 0.5, 4)
            else:
                result[aid] = 0.5
        return result

    # ── Stats / Introspection ─────────────────────────────────────────────────

    def get_stats(self) -> Dict[str, Any]:
        """Return attribution statistics."""
        return {
            "total_computations": self._total_computations,
            "trust_updates_applied": self._trust_updates_applied,
            "tasks_tracked": len(self._results),
        }

    def get_result(self, task_id: str) -> Optional[Dict[str, Any]]:
        """Return Shapley result for a given task_id."""
        result = self._results.get(task_id)
        if not result:
            return None
        return {
            "task_id": result.task_id,
            "task_type": result.task_type,
            "outcome_value": result.outcome_value,
            "participating_agents": result.participating_agents,
            "shapley_values": result.shapley_values,
            "credit_fractions": result.get_credit_fractions(),
            "mc_samples_used": result.mc_samples_used,
            "computed_at": result.computed_at.isoformat(),
        }

    def list_recent_results(self, limit: int = 10) -> List[Dict[str, Any]]:
        """Return recent Shapley results, newest first."""
        results = sorted(
            self._results.values(),
            key=lambda r: r.computed_at,
            reverse=True,
        )[:limit]
        return [
            {
                "task_id": r.task_id,
                "task_type": r.task_type,
                "outcome_value": r.outcome_value,
                "agents": len(r.participating_agents),
                "top_contributor": max(r.shapley_values, key=r.shapley_values.get) if r.shapley_values else None,
                "computed_at": r.computed_at.isoformat(),
            }
            for r in results
        ]

    def get_agent_total_credit(self, agent_id: str) -> Dict[str, Any]:
        """Return total Shapley credit accumulated by an agent across all tasks."""
        total = 0.0
        task_count = 0
        for r in self._results.values():
            if agent_id in r.shapley_values:
                total += r.shapley_values[agent_id]
                task_count += 1
        return {
            "agent_id": agent_id,
            "total_shapley_credit": round(total, 4),
            "tasks_participated": task_count,
            "mean_credit_per_task": round(total / task_count, 4) if task_count else 0.0,
        }
