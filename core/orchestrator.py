"""
TaskOrchestrator — Execution Engine
Bridges approved AgentCouncil proposals to actual system actions.

The council votes, deliberates, and reaches consensus — but for years the
`action_params` of every approved proposal sat in a dict, unread, unexecuted.
This module is the missing bridge: when a proposal is approved, the
orchestrator interprets `action_type` and `action_params` and dispatches
to the appropriate subsystem.

Action routing table:
  "research"        → AutonomousResearchAgent.sweep()
  "memory_write"    → EnhancedMemoryStore.record_episode()
  "neural_retrain"  → ContinualLearningTrainer.run_training_cycle()
  "dream"           → ConsciousnessOrchestrator.dream.enter_dream_state()
  "security_harden" → SecurityHardeningEngine.run_hardening()
  "generic" / *     → log + store as memory episode

All dispatches are non-blocking: the orchestrator fires-and-records, with
the result stored on the proposal and written as a memory episode.
"""

import asyncio
import logging
from datetime import datetime
from typing import Any, Dict, Optional, TYPE_CHECKING

if TYPE_CHECKING:
    pass

logger = logging.getLogger(__name__)


class TaskOrchestrator:
    """
    Dispatches approved council proposals to the correct subsystem.

    Accepts lazy subsystem references (set after init) so it can be
    constructed early in the initializer before all subsystems are ready.
    """

    def __init__(self):
        # Subsystem references — injected by initializer after each is ready
        self.memory_store: Optional[Any] = None
        self.research_agent: Optional[Any] = None
        self.continual_trainer: Optional[Any] = None
        self.consciousness: Optional[Any] = None
        self.security_engine: Optional[Any] = None

        # Dispatch log: proposal_id → result
        self.dispatch_log: Dict[str, Dict[str, Any]] = {}
        self._total_dispatched: int = 0
        self._total_failed: int = 0

    # ── Public API ────────────────────────────────────────────────────────────

    async def dispatch(
        self,
        proposal_id: str,
        action_type: str,
        action_params: Dict[str, Any],
        proposed_by: str = "council",
    ) -> Dict[str, Any]:
        """
        Dispatch an approved proposal to the appropriate subsystem.

        Args:
            proposal_id:  The council proposal ID (for logging/tracing)
            action_type:  One of: research, memory_write, neural_retrain,
                          dream, security_harden, generic
            action_params: Free-form params from the proposal
            proposed_by:  Originating agent name (for memory attribution)

        Returns:
            Dict with keys: dispatched, action_type, result, dispatched_at
        """
        logger.info(
            "Orchestrator dispatching proposal '%s' (action=%s)",
            proposal_id,
            action_type,
        )

        started = datetime.now()
        result: Dict[str, Any] = {}
        dispatched = False

        try:
            if action_type == "research":
                result = await self._dispatch_research(action_params)
            elif action_type == "memory_write":
                result = await self._dispatch_memory_write(action_params, proposed_by)
            elif action_type == "neural_retrain":
                result = await self._dispatch_neural_retrain(action_params)
            elif action_type == "dream":
                result = await self._dispatch_dream(action_params)
            elif action_type == "security_harden":
                result = await self._dispatch_security_harden(action_params)
            else:
                # Generic / unknown — log + store as memory
                result = await self._dispatch_generic(proposal_id, action_type, action_params, proposed_by)

            dispatched = True
            self._total_dispatched += 1

        except Exception as exc:
            self._total_failed += 1
            logger.exception(
                "Orchestrator dispatch failed for proposal '%s' (action=%s): %s",
                proposal_id,
                action_type,
                exc,
            )
            result = {"error": str(exc), "action_type": action_type}

        dispatch_record = {
            "proposal_id": proposal_id,
            "action_type": action_type,
            "dispatched": dispatched,
            "result": result,
            "dispatched_at": started.isoformat(),
            "duration_ms": int((datetime.now() - started).total_seconds() * 1000),
        }

        self.dispatch_log[proposal_id] = dispatch_record

        # Phase 4.5: Fire PAD emotion impulse (fixes 0.0 emotions gap — SOVEREIGN_MISSING_LAYER)
        # "A system that talks to itself" — every real dispatch is a real emotional event
        if self.consciousness and hasattr(self.consciousness, 'process_interaction'):
            try:
                self.consciousness.process_interaction({
                    "care_score": 0.75 if dispatched else 0.3,
                    "success": dispatched,
                    "threat_detected": "security" in action_type,
                    "novelty_detected": action_type not in ("memory_write", "generic"),
                    "agent_collaboration": True,  # orchestrator always coordinates agents
                })
            except Exception:
                pass  # Emotion update failure is non-fatal

        # Store dispatch as a memory episode (non-blocking, best-effort)
        if self.memory_store and dispatched:
            try:
                await self.memory_store.record_episode(
                    content=(
                        f"Orchestrator dispatched '{action_type}' for proposal {proposal_id}. "
                        f"Result: {str(result)[:300]}"
                    ),
                    source_agent="task_orchestrator",
                    memory_type="episodic",
                    care_weight=0.5,
                    tags=["orchestrator", "dispatch", action_type],
                )
            except Exception:
                pass  # Memory write failure is non-fatal

        logger.info(
            "Dispatch complete: proposal='%s' action='%s' dispatched=%s duration=%dms",
            proposal_id,
            action_type,
            dispatched,
            dispatch_record["duration_ms"],
        )

        return dispatch_record

    def get_stats(self) -> Dict[str, Any]:
        """Return orchestrator statistics."""
        by_action: Dict[str, int] = {}
        for rec in self.dispatch_log.values():
            a = rec.get("action_type", "unknown")
            by_action[a] = by_action.get(a, 0) + 1

        return {
            "total_dispatched": self._total_dispatched,
            "total_failed": self._total_failed,
            "success_rate": (
                round(self._total_dispatched / (self._total_dispatched + self._total_failed), 3)
                if (self._total_dispatched + self._total_failed) > 0
                else 1.0
            ),
            "by_action_type": by_action,
            "dispatch_log_size": len(self.dispatch_log),
        }

    def list_recent_dispatches(self, limit: int = 20) -> list:
        """List most recent dispatches."""
        items = list(self.dispatch_log.values())
        return sorted(items, key=lambda x: x.get("dispatched_at", ""), reverse=True)[:limit]

    # ── Private dispatch handlers ─────────────────────────────────────────────

    async def _dispatch_research(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Trigger an autonomous research sweep."""
        if not self.research_agent:
            return {"status": "skipped", "reason": "research_agent not available"}
        sweep = await self.research_agent.sweep()
        return {"status": "complete", "findings": sweep.get("total_findings", 0)}

    async def _dispatch_memory_write(self, params: Dict[str, Any], proposed_by: str) -> Dict[str, Any]:
        """Write a memory episode as instructed by the council."""
        if not self.memory_store:
            return {"status": "skipped", "reason": "memory_store not available"}
        content = params.get("content", str(params))
        episode = await self.memory_store.record_episode(
            content=content,
            source_agent=params.get("source_agent", proposed_by),
            memory_type=params.get("memory_type", "semantic"),
            care_weight=float(params.get("care_weight", 0.5)),
            tags=params.get("tags", ["council_write"]),
        )
        return {"status": "written", "episode_id": getattr(episode, "id", "unknown")}

    async def _dispatch_neural_retrain(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Trigger a neural model retraining cycle."""
        if not self.continual_trainer:
            return {"status": "skipped", "reason": "continual_trainer not available"}
        result = await self.continual_trainer.run_training_cycle()
        return {"status": "complete", "models_updated": result.get("models_updated", 0)}

    async def _dispatch_dream(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Trigger a dream cycle."""
        if not self.consciousness or not self.consciousness.dream:
            return {"status": "skipped", "reason": "consciousness/dream not available"}
        duration = int(params.get("duration_seconds", 30))
        await self.consciousness.dream.enter_dream_state(duration_seconds=duration)
        return {"status": "complete", "duration_seconds": duration}

    async def _dispatch_security_harden(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Trigger security hardening."""
        if not self.security_engine:
            return {"status": "skipped", "reason": "security_engine not available"}
        result = await self.security_engine.run_hardening()
        return {"status": "complete", "hardening_result": str(result)[:200]}

    async def _dispatch_generic(
        self,
        proposal_id: str,
        action_type: str,
        params: Dict[str, Any],
        proposed_by: str,
    ) -> Dict[str, Any]:
        """Log unrecognised action types as memory episodes."""
        if self.memory_store:
            await self.memory_store.record_episode(
                content=(
                    f"Council approved generic action '{action_type}' "
                    f"from '{proposed_by}'. Params: {str(params)[:400]}"
                ),
                source_agent="task_orchestrator",
                memory_type="episodic",
                care_weight=0.4,
                tags=["council_approved", "generic", action_type],
            )
        return {"status": "logged", "action_type": action_type, "params_keys": list(params.keys())}
