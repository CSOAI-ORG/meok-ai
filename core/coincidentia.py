"""
Coincidentia Oppositorum — Reconciliation Engine
Layer 4 of the 5-Layer Governance Stack

Nicholas of Cusa (1401-1464) proposed that God and ultimate truth exist
beyond all opposites — where contradictions coincide and are resolved
into a higher unity. This engine applies that principle to governance:
when Byzantine consensus fails (tied vote), rather than deadlock,
we seek the synthesis that transcends both thesis and antithesis.

The three synthesis strategies (escalating depth):
  1. Conditional — add safeguards that address concerns while preserving intent
  2. Phased — split into Stage 1 (limited) and Stage 2 (full)
  3. Parallel — dual-track implementation honouring both positions

If all three attempts fail, escalates to human oversight.

Reference: De Docta Ignorantia (1440), Nicholas of Cusa
"""

import logging
from datetime import datetime
from typing import Any, Dict, List, Optional, TYPE_CHECKING

if TYPE_CHECKING:
    from meok.agents.registry import AgentRegistry, AgentCouncil
    from meok.core.shura_council import ShuraCouncil

logger = logging.getLogger(__name__)

# ── Synthesis strategy templates ────────────────────────────────────────────
# Each strategy takes (thesis_summary, antithesis_summary, original_description)
# and returns a synthesised description string.

_SYNTHESIS_STRATEGIES = [
    # Attempt 1: Conditional implementation (add safeguards)
    lambda t, a, d: (
        f"Conditional implementation: {d[:200]}. "
        f"Safeguards address opposition ({a[:120].rstrip()}...) "
        f"while preserving core intent ({t[:120].rstrip()}...)."
    ),
    # Attempt 2: Phased approach (limited → full)
    lambda t, a, d: (
        f"Phased implementation of: {d[:150]}. "
        f"Stage 1 (limited scope) addresses concerns "
        f"({a[:80].rstrip()}...). "
        f"Stage 2 (full scope) achieves original goal "
        f"({t[:80].rstrip()}...)."
    ),
    # Attempt 3: Parallel tracks (Cusanian coincidence of opposites)
    lambda t, a, d: (
        f"Dual-track synthesis for: {d[:150]}. "
        f"The FOR position ({t[:60].rstrip()}...) and the AGAINST position "
        f"({a[:60].rstrip()}...) are honoured simultaneously through "
        f"parallel implementation paths that converge on shared outcomes."
    ),
]

_STRATEGY_NAMES = ["conditional", "phased", "parallel"]


class CoincidentiaOppositorum:
    """
    Reconciliation engine for failed Byzantine consensus.

    When Byzantine voting produces a 'tied' or 'no_consensus' result,
    CoincidentiaOppositorum:
      1. Identifies the thesis (FOR) and antithesis (AGAINST) factions
      2. Extracts their reasoning
      3. Generates a dialectical synthesis using one of 3 escalating strategies
      4. Re-submits the synthesised proposal through Shura → Byzantine pipeline
      5. Repeats up to max_attempts times before escalating

    Care weight is raised slightly with each attempt — the system
    becomes more careful the harder it is to reach consensus.
    """

    def __init__(
        self,
        registry: "AgentRegistry",
        max_attempts: int = 3,
        care_boost_per_attempt: float = 0.1,
    ):
        self.registry = registry
        self.max_attempts = max_attempts
        self.care_boost_per_attempt = care_boost_per_attempt
        self.reconciliations: Dict[str, Dict[str, Any]] = {}

    async def reconcile(
        self,
        proposal_id: str,
        proposal: Dict[str, Any],
        votes: Dict[str, Dict[str, Any]],  # agent_id -> {vote, reasoning, trust_level}
        council: Optional["AgentCouncil"] = None,
        shura: Optional["ShuraCouncil"] = None,
        attempt: int = 1,
    ) -> Dict[str, Any]:
        """
        Attempt to reconcile a failed/tied vote.

        Args:
            proposal_id: ID of the failed proposal
            proposal: Original proposal dict
            votes: All votes cast {agent_id: {vote, reasoning, trust_level}}
            council: AgentCouncil instance for re-submission (optional)
            shura: ShuraCouncil instance for enriched re-submission (optional)
            attempt: Which reconciliation attempt this is (1-indexed)

        Returns:
            Result dict with outcome, synthesis, and new proposal_id if applicable.
        """
        if attempt > self.max_attempts:
            logger.warning(
                "Coincidentia: %d attempts exhausted for proposal '%s' — escalating",
                self.max_attempts,
                proposal.get("title", proposal_id),
            )
            return {
                "outcome": "escalated",
                "message": (
                    f"Coincidentia Oppositorum exhausted {self.max_attempts} synthesis "
                    f"attempts on '{proposal.get('title', proposal_id)}'. "
                    f"Human oversight required."
                ),
                "attempts": attempt - 1,
                "proposal_id": proposal_id,
            }

        # ── Identify factions ────────────────────────────────────────────
        thesis_agents = {
            k: v for k, v in votes.items() if v.get("vote") == "for"
        }
        antithesis_agents = {
            k: v for k, v in votes.items() if v.get("vote") == "against"
        }

        thesis_reasons = [
            v.get("reasoning", "").strip()
            for v in thesis_agents.values()
            if v.get("reasoning", "").strip()
        ]
        antithesis_reasons = [
            v.get("reasoning", "").strip()
            for v in antithesis_agents.values()
            if v.get("reasoning", "").strip()
        ]

        # ── Generate synthesis ───────────────────────────────────────────
        synthesis = self._synthesize(proposal, thesis_reasons, antithesis_reasons, attempt)

        # ── Record reconciliation ────────────────────────────────────────
        rec_id = f"reconciliation_{proposal_id}_{attempt}"
        self.reconciliations[rec_id] = {
            "original_proposal_id": proposal_id,
            "attempt": attempt,
            "thesis_count": len(thesis_agents),
            "antithesis_count": len(antithesis_agents),
            "thesis_reasons": thesis_reasons,
            "antithesis_reasons": antithesis_reasons,
            "synthesis": synthesis,
            "reconciled_at": datetime.now().isoformat(),
        }

        logger.info(
            "Coincidentia attempt %d/%d for '%s': strategy=%s, "
            "thesis=%d agents, antithesis=%d agents",
            attempt,
            self.max_attempts,
            proposal.get("title", proposal_id),
            synthesis["synthesis_strategy"],
            len(thesis_agents),
            len(antithesis_agents),
        )

        result: Dict[str, Any] = {
            "outcome": "synthesis_proposed",
            "reconciliation_id": rec_id,
            "attempt": attempt,
            "synthesis": synthesis,
            "new_proposal_id": None,
            "thesis_agents": len(thesis_agents),
            "antithesis_agents": len(antithesis_agents),
        }

        # ── Re-submit synthesised proposal ───────────────────────────────
        if council is not None:
            new_title = f"{proposal.get('title', 'Unknown')} [Synthesis #{attempt}]"
            new_description = (
                f"{synthesis['description']}\n\n"
                f"[Coincidentia #{attempt}/{self.max_attempts} — "
                f"strategy: {synthesis['synthesis_strategy']} — "
                f"{len(thesis_agents)} FOR / {len(antithesis_agents)} AGAINST "
                f"on original proposal '{proposal.get('title', proposal_id)}']"
            )
            # Raise care weight with each attempt — more careful as harder to settle
            new_care_weight = min(
                1.0,
                float(proposal.get("care_weight", 0.5)) + self.care_boost_per_attempt * attempt,
            )
            new_action_params = {
                **proposal.get("action_params", {}),
                "synthesis": synthesis,
                "reconciliation_id": rec_id,
                "original_proposal_id": proposal_id,
            }

            if shura is not None:
                shura_result = await shura.run_shura_pipeline(
                    title=new_title,
                    description=new_description,
                    proposed_by="coincidentia_oppositorum",
                    action_type=proposal.get("action_type", "synthesis"),
                    action_params=new_action_params,
                    care_weight=new_care_weight,
                    council=council,
                )
                result["new_proposal_id"] = shura_result.get("proposal_id")
                result["shura_direction"] = shura_result.get("consensus_direction")
            else:
                new_proposal_id = await council.submit_proposal(
                    title=new_title,
                    description=new_description,
                    proposed_by="coincidentia_oppositorum",
                    action_type=proposal.get("action_type", "synthesis"),
                    action_params=new_action_params,
                    quorum=3,
                )
                result["new_proposal_id"] = new_proposal_id

        return result

    def get_reconciliation(self, reconciliation_id: str) -> Optional[Dict[str, Any]]:
        """Retrieve a past reconciliation by ID."""
        return self.reconciliations.get(reconciliation_id)

    def list_reconciliations(self, limit: int = 20) -> List[Dict[str, Any]]:
        """List most recent reconciliations."""
        items = list(self.reconciliations.values())
        return sorted(items, key=lambda x: x.get("reconciled_at", ""), reverse=True)[:limit]

    def get_stats(self) -> Dict[str, Any]:
        """Get reconciliation statistics."""
        total = len(self.reconciliations)
        if total == 0:
            return {
                "total_reconciliations": 0,
                "escalations": 0,
                "synthesis_rate": 0.0,
                "strategy_breakdown": {},
            }

        by_strategy: Dict[str, int] = {}
        for rec in self.reconciliations.values():
            s = rec.get("synthesis", {}).get("synthesis_strategy", "unknown")
            by_strategy[s] = by_strategy.get(s, 0) + 1

        return {
            "total_reconciliations": total,
            "strategy_breakdown": by_strategy,
            "max_attempts": self.max_attempts,
        }

    # ── Private helpers ──────────────────────────────────────────────────────

    def _synthesize(
        self,
        proposal: Dict[str, Any],
        thesis_reasons: List[str],
        antithesis_reasons: List[str],
        attempt: int,
    ) -> Dict[str, Any]:
        """
        Apply dialectical synthesis strategy to generate a new proposal.

        Attempt 1: Conditional (add safeguards)
        Attempt 2: Phased (staged rollout)
        Attempt 3: Parallel (dual-track Cusanian coincidence)
        """
        strategy_idx = min(attempt - 1, len(_SYNTHESIS_STRATEGIES) - 1)
        strategy_fn = _SYNTHESIS_STRATEGIES[strategy_idx]
        strategy_name = _STRATEGY_NAMES[strategy_idx]

        title = proposal.get("title", "Unknown Proposal")
        description = proposal.get("description", "")

        thesis_summary = (
            "; ".join(thesis_reasons[:2])
            if thesis_reasons
            else "support without explicit reasoning given"
        )
        antithesis_summary = (
            "; ".join(antithesis_reasons[:2])
            if antithesis_reasons
            else "opposition without explicit reasoning given"
        )

        synthesised_description = strategy_fn(thesis_summary, antithesis_summary, description)

        return {
            "title": f"{title} — Synthesis #{attempt}",
            "description": synthesised_description,
            "thesis_summary": thesis_summary,
            "antithesis_summary": antithesis_summary,
            "synthesis_strategy": strategy_name,
            "care_boost": self.care_boost_per_attempt * attempt,
            "cusanian_principle": (
                "The opposites coincide: that which appears contradictory "
                "converges in a higher unity when viewed from the infinite."
            ),
        }
