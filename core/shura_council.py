"""
Shura Council — Islamic Consultative Governance Layer
Layer 2 of the 5-Layer Governance Stack

Shura (شورى) is the Quranic principle of collective consultation
before decision. Every significant action is brought to council
for deliberation before Byzantine voting opens.

The Shura layer enriches proposals with collective wisdom, surfacing
concerns, support, and key considerations that Byzantine voters
can factor into their votes.

Reference: Quran 42:38 — "those who conduct their affairs by mutual consultation"
"""

import asyncio
import logging
from datetime import datetime
from typing import Any, Dict, List, Optional, TYPE_CHECKING

if TYPE_CHECKING:
    from meok.agents.registry import AgentRegistry, AgentCouncil, Agent

logger = logging.getLogger(__name__)


class ShuraCouncil:
    """
    Consultative deliberation before Byzantine consensus voting.

    The Shura phase runs BEFORE a proposal enters the AgentCouncil (BFT vote).
    Agents share perspectives, raise concerns, and offer supporting evidence.
    The enriched proposal carries this collective wisdom into the vote.

    Pipeline:
        Proposal → Shura Deliberation → Enriched Proposal → Byzantine Vote
    """

    def __init__(
        self,
        registry: "AgentRegistry",
        deliberation_duration: float = 5.0,
        max_participants: int = 11,
    ):
        self.registry = registry
        # deliberation_duration: seconds to hold deliberation window open
        # In production, longer = more thorough; 5s is fast-mode for dev
        self.deliberation_duration = deliberation_duration
        self.max_participants = max_participants
        self.deliberations: Dict[str, Dict[str, Any]] = {}
        self.council_learner = None  # set by initializer (Phase 2.6)

    async def deliberate(self, proposal: Dict[str, Any]) -> Dict[str, Any]:
        """
        Run the Shura deliberation phase on a proposal.

        Agents examine the proposal from their perspective, generating stances
        (support / concern / neutral) with explicit reasoning.

        Sanhedrin principle (reverse seniority):
            Lowest-trust agents speak FIRST, preventing anchoring by high-trust
            voices. The Sanhedrin court required junior members to vote before
            seniors so dominant opinions couldn't suppress minority views.

        Devil's Advocate:
            The lowest-performing participant is elected as Devil's Advocate and
            MUST argue against the proposal regardless of their private stance.
            If deliberation ends with unanimous support and the adversarial
            position was never engaged, a Sanhedrin flag is raised — unanimous
            approval is considered suspicious and requires re-deliberation.

        Returns the enriched proposal with shura metadata attached.
        """
        agents = list(self.registry.agents.values())

        # Select participants — reverse seniority: lowest trust speaks first
        participants = self._select_participants_reverse_seniority(agents, self.max_participants)

        # Elect Devil's Advocate from the group (lowest performance_score)
        devil_advocate_id = self._elect_devil_advocate(participants)

        perspectives: List[Dict[str, Any]] = []
        concerns: List[str] = []
        supporting_evidence: List[str] = []
        adversarial_engaged = False

        for agent in participants:
            is_devil_advocate = (agent.id == devil_advocate_id)
            perspective = self._generate_perspective(
                agent, proposal, force_adversarial=is_devil_advocate
            )
            if perspective:
                perspectives.append(perspective)
                if perspective["stance"] == "concern":
                    concerns.append(perspective["reasoning"])
                    # Check if any supporting agent acknowledged the concern
                    if is_devil_advocate:
                        adversarial_engaged = True  # Will be verified below
                elif perspective["stance"] == "support":
                    supporting_evidence.append(perspective["reasoning"])

        # Adversarial position is "engaged" if at least one supporting agent
        # explicitly acknowledged the Devil's Advocate concern
        # (In this heuristic: engaged if concerns were raised AND supports mention them)
        if concerns and supporting_evidence:
            adversarial_engaged = any(
                any(kw in ev.lower() for kw in ["concern", "despite", "although", "risk", "caution"])
                for ev in supporting_evidence
            )

        # Hold the deliberation window open
        await asyncio.sleep(min(self.deliberation_duration, 5.0))

        consensus_direction = self._compute_consensus_direction(perspectives)
        key_considerations = self._extract_key_considerations(perspectives, concerns)

        # Sanhedrin flag: unanimous support without engaging adversarial = suspicious
        support_count = sum(1 for p in perspectives if p["stance"] == "support")
        total_perspectives = len(perspectives)
        sanhedrin_flag = (
            total_perspectives > 0
            and support_count == total_perspectives
            and not adversarial_engaged
        )
        if sanhedrin_flag:
            logger.warning(
                "Shura Sanhedrin flag: unanimous support (%d/%d) without adversarial engagement — "
                "re-deliberation recommended",
                support_count, total_perspectives,
            )
            key_considerations.insert(
                0,
                "SANHEDRIN FLAG: Unanimous approval without adversarial engagement — "
                "unanimous consent is suspicious; Byzantine voters should apply extra scrutiny",
            )

        shura_metadata = {
            "perspectives": perspectives,
            "concerns": concerns,
            "supporting_evidence": supporting_evidence,
            "consensus_direction": consensus_direction,   # "favorable" | "cautionary" | "mixed"
            "key_considerations": key_considerations,
            "participant_count": len(perspectives),
            "deliberated_at": datetime.now().isoformat(),
            "devil_advocate_id": devil_advocate_id,
            "adversarial_engaged": adversarial_engaged,
            "sanhedrin_flag": sanhedrin_flag,
        }

        deliberation_id = f"shura_{datetime.now().strftime('%Y%m%d%H%M%S%f')}"
        self.deliberations[deliberation_id] = {
            "proposal": proposal,
            "shura": shura_metadata,
        }

        logger.info(
            "Shura deliberation complete — %d participants, direction: %s, concerns: %d",
            len(perspectives),
            consensus_direction,
            len(concerns),
        )

        enriched = dict(proposal)
        enriched["shura"] = shura_metadata
        enriched["shura_deliberation_id"] = deliberation_id
        return enriched

    async def run_shura_pipeline(
        self,
        title: str,
        description: str,
        proposed_by: str,
        action_type: str,
        action_params: Dict[str, Any],
        care_weight: float = 0.5,
        council: Optional["AgentCouncil"] = None,
    ) -> Dict[str, Any]:
        """
        Full Shura → Byzantine pipeline.

        1. Construct proposal dict
        2. Run Shura deliberation (enriches with perspectives)
        3. Submit enriched proposal to Byzantine AgentCouncil for vote
        4. Return result with proposal_id and shura insights
        """
        proposal = {
            "title": title,
            "description": description,
            "proposed_by": proposed_by,
            "action_type": action_type,
            "action_params": action_params,
            "care_weight": care_weight,
        }

        # Phase 1: Shura deliberation
        enriched = await self.deliberate(proposal)
        shura = enriched["shura"]

        # Phase 2: Submit to Byzantine vote (optional — council may be None in tests)
        proposal_id = None
        if council is not None:
            enriched_description = (
                f"{description}\n\n"
                f"[Shura — {shura['participant_count']} participants, "
                f"direction: {shura['consensus_direction']}]"
            )
            if shura["key_considerations"]:
                enriched_description += (
                    "\nKey considerations: " + "; ".join(shura["key_considerations"][:3])
                )

            proposal_id = await council.submit_proposal(
                title=title,
                description=enriched_description,
                proposed_by=proposed_by,
                action_type=action_type,
                action_params={**action_params, "shura_insights": shura},
                quorum=3,
            )

        result = {
            "shura_deliberation": shura,
            "proposal_id": proposal_id,
            "consensus_direction": shura["consensus_direction"],
            "participant_count": shura["participant_count"],
            "concerns": shura["concerns"],
        }
        # ── Phase 2.6: fire shura learning signal (non-blocking) ────────────
        if getattr(self, 'council_learner', None) is not None:
            import asyncio as _asyncio
            _asyncio.create_task(self.council_learner.on_shura_deliberation(result))
        return result

    def get_deliberation(self, deliberation_id: str) -> Optional[Dict[str, Any]]:
        """Get a past deliberation by ID."""
        return self.deliberations.get(deliberation_id)

    def list_recent_deliberations(self, limit: int = 10) -> List[Dict[str, Any]]:
        """List most recent deliberations."""
        items = [
            {"id": k, **v["shura"], "title": v["proposal"].get("title", "?")}
            for k, v in self.deliberations.items()
        ]
        return sorted(items, key=lambda x: x.get("deliberated_at", ""), reverse=True)[:limit]

    # ── Private helpers ──────────────────────────────────────────────────────

    def _select_participants(self, agents: List["Agent"], max_n: int) -> List["Agent"]:
        """Select diverse agents for deliberation (legacy — prefers high-trust first)."""
        from meok.agents.registry import AgentStatus

        idle = [a for a in agents if a.status in (AgentStatus.IDLE, AgentStatus.ACTIVE)]
        rest = [a for a in agents if a not in idle]

        pool = idle + rest
        pool.sort(key=lambda a: a.trust_level, reverse=True)
        return pool[:max_n]

    def _select_participants_reverse_seniority(
        self, agents: List["Agent"], max_n: int
    ) -> List["Agent"]:
        """
        Sanhedrin reverse seniority: lowest-trust agents speak FIRST.

        Prevents anchoring — junior agents are not influenced by senior votes.
        Preferred over _select_participants in deliberate().
        """
        from meok.agents.registry import AgentStatus

        idle = [a for a in agents if a.status in (AgentStatus.IDLE, AgentStatus.ACTIVE)]
        rest = [a for a in agents if a not in idle]
        pool = idle + rest

        # Prefer idle/active, but within each group sort ascending (lowest trust first)
        idle_sorted = sorted(idle, key=lambda a: a.trust_level)         # low → high
        rest_sorted = sorted(rest, key=lambda a: a.trust_level)

        # Interleave: take up to max_n, filling from idle first then rest
        combined = idle_sorted + rest_sorted
        return combined[:max_n]

    def _elect_devil_advocate(self, participants: List["Agent"]) -> Optional[str]:
        """
        Elect the Devil's Advocate: the participant with the lowest performance_score.

        Rationale: least experienced agents benefit most from arguing against —
        it forces them to engage deeply with the proposal's weaknesses,
        building their own understanding (Socratic method).
        """
        if not participants:
            return None
        # Lowest performance_score is the Devil's Advocate
        da = min(participants, key=lambda a: getattr(a, "performance_score", 0.5))
        return da.id

    def _generate_perspective(
        self,
        agent: "Agent",
        proposal: Dict[str, Any],
        force_adversarial: bool = False,
    ) -> Optional[Dict[str, Any]]:
        """
        Generate an agent's perspective on the proposal.

        If force_adversarial=True (Devil's Advocate), the agent MUST argue
        against regardless of private stance. Their reasoning explicitly
        identifies risks and concerns to ensure they are heard before voting.
        """
        care_weight = float(proposal.get("care_weight", 0.5))
        action_type = proposal.get("action_type", "")
        trust = agent.trust_level

        if force_adversarial:
            # Devil's Advocate mandatory dissent (Sanhedrin)
            stance = "concern"
            reasoning = (
                f"[Devil's Advocate — Sanhedrin] Agent '{agent.name}' (trust={trust:.2f}) "
                f"argues against as mandatory dissenter: '{action_type}' carries risk of "
                f"unintended consequences; care_weight={care_weight:.2f} should be scrutinised; "
                f"consider reversibility, third-party impact, and long-term costs before approval"
            )
        elif care_weight < 0.3:
            stance = "concern"
            reasoning = (
                f"Care weight {care_weight:.2f} is below Maternal Covenant threshold (0.3) — "
                f"proposal requires care justification before proceeding"
            )
        elif trust >= 0.75:
            stance = "support"
            reasoning = (
                f"High-trust agent (trust={trust:.2f}) endorses proposal — "
                f"action '{action_type}' appears aligned with system values; "
                f"despite concerns raised, benefits outweigh risks at care_weight={care_weight:.2f}"
            )
        elif trust < 0.4:
            stance = "concern"
            reasoning = (
                f"Low-trust agent (trust={trust:.2f}) flags caution — "
                f"additional validation recommended for '{action_type}'"
            )
        elif care_weight >= 0.7:
            stance = "support"
            reasoning = (
                f"High care weight ({care_weight:.2f}) indicates alignment with "
                f"care-centred governance principles; risks appear manageable"
            )
        else:
            stance = "neutral"
            reasoning = (
                f"Agent '{agent.name}' finds proposal merits deliberation — "
                f"care={care_weight:.2f}, trust={trust:.2f}"
            )

        return {
            "agent_id": agent.id,
            "agent_name": agent.name,
            "trust_level": trust,
            "stance": stance,
            "reasoning": reasoning,
            "is_devil_advocate": force_adversarial,
        }

    def _compute_consensus_direction(self, perspectives: List[Dict[str, Any]]) -> str:
        """Determine the overall direction of Shura deliberation."""
        if not perspectives:
            return "undetermined"

        support = sum(1 for p in perspectives if p["stance"] == "support")
        concern = sum(1 for p in perspectives if p["stance"] == "concern")
        total = len(perspectives)

        support_ratio = support / total
        if support_ratio > 0.66:
            return "favorable"
        elif support_ratio < 0.33:
            return "cautionary"
        else:
            return "mixed"

    def _extract_key_considerations(
        self, perspectives: List[Dict[str, Any]], concerns: List[str]
    ) -> List[str]:
        """Extract the most important considerations for Byzantine voters."""
        considerations: List[str] = []

        # Top concerns
        considerations.extend(concerns[:3])

        # Summary of support
        support_count = sum(1 for p in perspectives if p["stance"] == "support")
        if support_count > 0:
            considerations.append(f"{support_count} of {len(perspectives)} agents expressed support")

        # Unanimous signals
        if len(perspectives) > 0:
            concern_count = sum(1 for p in perspectives if p["stance"] == "concern")
            if concern_count == len(perspectives):
                considerations.insert(0, "UNANIMOUS CONCERN — all deliberating agents raised issues")
            elif support_count == len(perspectives):
                considerations.insert(0, "UNANIMOUS SUPPORT — all deliberating agents endorsed proposal")

        return considerations
