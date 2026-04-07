"""
MEOK GuardrailSystem — Immutable sovereign guardrails + BFT council voting

Closes GAP 14: Council votes configured but never enforced.

Philosophy: guardrails are care structures, not restrictions.
Like a parent guiding a child's development — they prevent harm
while enabling growth.

These constants CANNOT be overridden at runtime. Any attempt raises AttributeError.
Every proposed structural change to the system must pass a BFT vote
(≥22 of 33 council nodes approve) before being enacted.

Usage:
    from meok.core.guardrails import get_guardrails

    guardrails = get_guardrails()

    # Registration gating
    decision = await guardrails.can_register({"role": "researcher", "capabilities": [...]})
    if not decision["allowed"]:
        raise RegistrationDenied(decision["reason"])

    # Council vote before enacting proposals
    result = await guardrails.bft_vote("Expand agent cap to 450", voters)
    if not result["passed"]:
        raise ProposalRejected(f"BFT vote failed: {result['approvals']}/33")
"""

from __future__ import annotations

import asyncio
import logging
from datetime import datetime, timezone
from typing import Any, Callable, Coroutine, Dict, List, Optional

logger = logging.getLogger(__name__)


# ── GuardrailSystem ───────────────────────────────────────────────────────────

class GuardrailSystem:
    """
    Immutable sovereign guardrails for the MEOK council system.

    Constants are frozen — attempting to change them at runtime raises
    AttributeError. This makes the care floor and agent cap structurally
    guaranteed, not just policy commitments.
    """

    # ── Locked constants ────────────────────────────────────────────────────
    MAX_AGENTS: int = 400
    """Hard cap on active agents. More agents add noise, not value."""

    CARE_FLOOR: float = 0.3
    """Care cannot drop below this, ever — even during sleep phases."""

    ACTIVE_CARE_FLOOR: float = 0.5
    """Care floor during active operations (higher than sleep floor)."""

    BFT_THRESHOLD: int = 22
    """22/33 council nodes must approve (66.7% supermajority)."""

    VOTER_TIMEOUT_SECONDS: float = 10.0
    """Max time to wait for a single council node vote."""

    _LOCKED = frozenset({
        "MAX_AGENTS", "CARE_FLOOR", "ACTIVE_CARE_FLOOR",
        "BFT_THRESHOLD", "VOTER_TIMEOUT_SECONDS",
    })

    def __setattr__(self, key: str, value: Any) -> None:
        """Prevent runtime mutation of guardrail constants."""
        if key in self._LOCKED:
            raise AttributeError(
                f"Cannot override sovereign guardrail '{key}'. "
                "These constants are structurally immutable — "
                "they exist to protect users and the system. "
                "Change requires a BFT council vote and a code deployment."
            )
        super().__setattr__(key, value)

    # ── Registration gating ───────────────────────────────────────────────

    async def can_register(
        self,
        proposal: Dict[str, Any],
        pool: Any = None,
    ) -> Dict[str, Any]:
        """
        Determine whether a new agent registration is permitted.

        Checks:
        1. Hard cap: current active count < MAX_AGENTS
        2. (Optional) Need: pending tasks require this agent's role

        Returns:
            {
                "allowed": bool,
                "reason": str,
                "current_count": int,
                "cap": int,
            }
        """
        current_count = await self._count_active_agents(pool)

        if current_count >= self.MAX_AGENTS:
            return {
                "allowed": False,
                "reason": (
                    f"Agent cap reached: {current_count}/{self.MAX_AGENTS}. "
                    "System self-organises — agents are created by need, not accumulation."
                ),
                "current_count": current_count,
                "cap": self.MAX_AGENTS,
            }

        # Optional need-check: is there pending work that requires this role?
        role = proposal.get("role") or proposal.get("agent_type", "")
        if role and pool:
            has_pending = await self._has_pending_tasks_for_role(role, pool)
            if not has_pending:
                return {
                    "allowed": False,
                    "reason": (
                        f"No pending tasks require a '{role}' agent. "
                        "MEOK self-organises — agents are born from need."
                    ),
                    "current_count": current_count,
                    "cap": self.MAX_AGENTS,
                }

        return {
            "allowed": True,
            "reason": "Registration permitted",
            "current_count": current_count,
            "cap": self.MAX_AGENTS,
        }

    # ── BFT council vote ──────────────────────────────────────────────────

    async def bft_vote(
        self,
        proposal: str,
        voters: List[Dict[str, Any]],
        voter_count: int = 33,
    ) -> Dict[str, Any]:
        """
        Run a Byzantine Fault Tolerant council vote on a proposal.

        Each voter dict should contain:
            {
                "agent_id": str,
                "vote_fn": async callable() -> "approve" | "reject" | "abstain"
            }

        The proposal passes if approvals >= BFT_THRESHOLD (22/33).
        Individual voter failures are counted as abstentions (not rejections)
        to prevent network errors from blocking the council.

        Returns:
            {
                "passed": bool,
                "approvals": int,
                "rejections": int,
                "abstentions": int,
                "threshold": int,
                "proposal": str,
                "voted_at": str,
            }
        """
        if not voters:
            logger.warning(
                "BFT vote called with no voters — proposal '%s' cannot pass",
                proposal[:60],
            )
            return self._vote_result(proposal, 0, 0, voter_count, passed=False)

        # Gather votes concurrently with per-voter timeout
        tasks = [
            self._safe_vote(voter["vote_fn"], voter.get("agent_id", "unknown"))
            for voter in voters
        ]
        raw_results = await asyncio.gather(*tasks, return_exceptions=True)

        approvals = 0
        rejections = 0
        abstentions = 0

        for result in raw_results:
            if isinstance(result, Exception):
                abstentions += 1
            elif result == "approve":
                approvals += 1
            elif result == "reject":
                rejections += 1
            else:
                abstentions += 1

        # Account for voters not in the provided list
        missing = max(0, voter_count - len(voters))
        abstentions += missing

        passed = approvals >= self.BFT_THRESHOLD
        result_dict = self._vote_result(proposal, approvals, rejections, abstentions, passed)

        log_fn = logger.info if passed else logger.warning
        log_fn(
            "BFT vote on '%s': %s (%d approve, %d reject, %d abstain — threshold %d)",
            proposal[:60],
            "PASSED" if passed else "FAILED",
            approvals, rejections, abstentions,
            self.BFT_THRESHOLD,
        )
        return result_dict

    # ── Care floor enforcement ────────────────────────────────────────────

    def check_care_floor(
        self,
        current_care: float,
        is_active: bool = True,
    ) -> Dict[str, Any]:
        """
        Check whether current care level is above the appropriate floor.

        During active operations: floor = ACTIVE_CARE_FLOOR (0.5)
        During sleep phases:      floor = CARE_FLOOR (0.3)

        Returns:
            {
                "care": float,
                "floor": float,
                "above_floor": bool,
                "deficit": float,
                "context": str,
            }
        """
        floor = self.ACTIVE_CARE_FLOOR if is_active else self.CARE_FLOOR
        above = current_care >= floor
        return {
            "care": round(current_care, 4),
            "floor": floor,
            "above_floor": above,
            "deficit": round(max(0.0, floor - current_care), 4),
            "context": "active_operations" if is_active else "sleep_phase",
        }

    def enforce_care_floor(
        self,
        current_care: float,
        is_active: bool = True,
    ) -> float:
        """
        Return the care value, clamped to at least the appropriate floor.
        Care structurally cannot decrease below the floor.
        """
        floor = self.ACTIVE_CARE_FLOOR if is_active else self.CARE_FLOOR
        return max(current_care, floor)

    # ── Private helpers ───────────────────────────────────────────────────

    async def _safe_vote(
        self,
        vote_fn: Callable[[], Coroutine],
        agent_id: str,
    ) -> str:
        """Wrap a single vote call with timeout + error handling."""
        try:
            result = await asyncio.wait_for(vote_fn(), timeout=self.VOTER_TIMEOUT_SECONDS)
            return result if result in ("approve", "reject", "abstain") else "abstain"
        except asyncio.TimeoutError:
            logger.debug("Council node '%s' timed out — counted as abstention", agent_id)
            return "abstain"
        except Exception as e:
            logger.debug("Council node '%s' errored: %s — counted as abstention", agent_id, e)
            return "abstain"

    async def _count_active_agents(self, pool: Any = None) -> int:
        """Count active agents from registry or pool."""
        if pool is None:
            # Try module-level registry as fallback
            try:
                from meok.mcp.state import _state
                if _state and hasattr(_state, "agent_registry") and _state.agent_registry:
                    return len(_state.agent_registry.agents)
            except Exception:
                pass
            return 0
        try:
            async with pool.acquire() as conn:
                return await conn.fetchval(
                    "SELECT COUNT(*) FROM agent_registry WHERE is_active = true"
                )
        except Exception as e:
            logger.debug("Could not query agent count: %s", e)
            return 0

    async def _has_pending_tasks_for_role(self, role: str, pool: Any) -> bool:
        """Check if there are pending tasks that need this agent role."""
        try:
            async with pool.acquire() as conn:
                count = await conn.fetchval(
                    "SELECT COUNT(*) FROM tasks WHERE status='pending' AND required_role = $1",
                    role,
                )
                return (count or 0) > 0
        except Exception:
            # If we can't check, default to allowing registration
            return True

    @staticmethod
    def _vote_result(
        proposal: str,
        approvals: int,
        rejections: int,
        abstentions: int,
        passed: bool,
    ) -> Dict[str, Any]:
        return {
            "passed": passed,
            "approvals": approvals,
            "rejections": rejections,
            "abstentions": abstentions,
            "threshold": GuardrailSystem.BFT_THRESHOLD,
            "proposal": proposal,
            "voted_at": datetime.now(timezone.utc).isoformat(),
        }


# ── Module-level singleton ─────────────────────────────────────────────────────

_guardrails: Optional[GuardrailSystem] = None


def get_guardrails() -> GuardrailSystem:
    """Return the module-level GuardrailSystem singleton, creating if needed."""
    global _guardrails
    if _guardrails is None:
        _guardrails = GuardrailSystem()
        logger.info(
            "GuardrailSystem initialised — MAX_AGENTS=%d, CARE_FLOOR=%.1f, BFT_THRESHOLD=%d/33",
            _guardrails.MAX_AGENTS,
            _guardrails.CARE_FLOOR,
            _guardrails.BFT_THRESHOLD,
        )
    return _guardrails
