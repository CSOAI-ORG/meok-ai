"""
Council-to-Neural Learning Pipeline — Phase 2.6

Converts Shura deliberation outcomes, AgentCouncil vote tallies, and
Contract Net task completions into real-time training signals.

Research backing:
  - River (online-ml/river): streaming ML, one-sample-at-a-time
  - SRC (Tadros et al. 2022, Nature Comms): Sleep Replay Consolidation
  - ReMA (ACL 2025): meta-agent + reasoning agent with joint rewards
  - MAPIE v1 (2025): conformal prediction for calibrated uncertainty
"""

import asyncio
import logging
import math
from collections import deque
from dataclasses import dataclass, field
from datetime import datetime
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

# ── Action-type encoding (one-hot like, compact) ─────────────────────────────
ACTION_TYPES = [
    "research", "memory_write", "neural_retrain", "dream",
    "security_harden", "generic", "memory_read", "council_vote",
]

CONSENSUS_DIRS = ["favorable", "cautionary", "mixed", "unknown"]


def _encode_action_type(action_type: str) -> float:
    """Encode action type as a normalised float [0, 1]."""
    try:
        idx = ACTION_TYPES.index(action_type)
    except ValueError:
        idx = len(ACTION_TYPES) - 1  # "generic"
    return idx / max(len(ACTION_TYPES) - 1, 1)


def _encode_consensus(direction: str) -> float:
    """Encode consensus direction as a normalised float [0, 1]."""
    try:
        idx = CONSENSUS_DIRS.index(direction)
    except ValueError:
        idx = len(CONSENSUS_DIRS) - 1
    return idx / max(len(CONSENSUS_DIRS) - 1, 1)


# ── Learning signal ───────────────────────────────────────────────────────────

@dataclass
class CouncilLearningSignal:
    """
    A single structured training example extracted from a council event.
    The features dict is normalised to [0, 1] range for River compatibility.
    """
    event_type: str          # "vote_tally" | "task_complete" | "shura_deliberation"
    features: Dict[str, float]
    label: float             # outcome quality 0-1 (1 = great, 0 = failure)
    care_score: float        # used for SRC Hebbian weighting
    timestamp: datetime = field(default_factory=datetime.now)
    source_id: str = ""      # proposal_id or task_id for traceability

    def to_dict(self) -> Dict[str, Any]:
        return {
            "event_type": self.event_type,
            "label": round(self.label, 4),
            "care_score": round(self.care_score, 4),
            "timestamp": self.timestamp.isoformat(),
            "source_id": self.source_id,
            "features": {k: round(v, 4) for k, v in self.features.items()},
        }


# ── Online learner (River) ────────────────────────────────────────────────────

def _make_river_learner():
    """Try to create a River HoeffdingTreeClassifier; fall back to a trivial counter.

    Handles both ImportError (river not installed) and API version differences:
    river>=0.21 renamed split_confidence → delta. We try the modern API first.
    """
    try:
        from river import tree, preprocessing
        from river import compose
        # Try modern API (river>=0.21: split_confidence renamed to delta)
        try:
            pipeline = compose.Pipeline(
                preprocessing.StandardScaler(),
                tree.HoeffdingTreeClassifier(
                    grace_period=50,
                    delta=0.01,
                    leaf_prediction="nba",
                    nb_threshold=0,
                ),
            )
        except TypeError:
            # Fall back to older API parameter name
            pipeline = compose.Pipeline(
                preprocessing.StandardScaler(),
                tree.HoeffdingTreeClassifier(
                    grace_period=50,
                    split_confidence=0.01,
                    leaf_prediction="nba",
                    nb_threshold=0,
                ),
            )
        return pipeline, "river"
    except ImportError:
        logger.info("River not installed — using simple accuracy counter fallback")
        return None, "fallback"
    except Exception as e:
        logger.info("River unavailable (%s) — using simple accuracy counter fallback", e)
        return None, "fallback"


class _FallbackLearner:
    """Minimal accuracy tracker when River is unavailable."""
    def __init__(self):
        self._correct = 0
        self._total = 0

    def learn_one(self, features: Dict[str, float], label: int) -> None:
        # Threshold heuristic: predict 1 if majority features > 0.5
        pred = 1 if sum(features.values()) / max(len(features), 1) > 0.5 else 0
        self._correct += int(pred == label)
        self._total += 1

    def predict_one(self, features: Dict[str, float]) -> int:
        return 1 if sum(features.values()) / max(len(features), 1) > 0.5 else 0

    @property
    def accuracy(self) -> float:
        return self._correct / max(self._total, 1)


# ── CouncilLearner ────────────────────────────────────────────────────────────

class CouncilLearner:
    """
    Online learning engine that trains incrementally on council events.

    Three complementary pathways:
    1. River online learner  — immediate incremental update per event
    2. z_self.observe()      — meta-cognitive update via forward pass
    3. SRC replay queue      — prioritised for dream-cycle Hebbian consolidation

    All pathways are fire-and-forget (called via asyncio.create_task).
    Zero latency impact on the primary governance flow.
    """

    REPLAY_QUEUE_MAX = 200      # SRC replay buffer capacity
    RECENT_SIGNALS_MAX = 100    # Window for get_learning_feed()

    def __init__(self, agent_registry=None, z_self=None):
        self.agent_registry = agent_registry
        self.z_self = z_self

        # Online learner (River or fallback)
        _model, self._backend = _make_river_learner()
        if self._backend == "river":
            self._river = _model
            self._fallback = None
        else:
            self._river = None
            self._fallback = _FallbackLearner()

        # Counters
        self._samples_processed = 0
        self._river_correct = 0
        self._river_total = 0

        # SRC replay queue — sorted by (care_score × |label - 0.5|) descending
        # High-care + decisive outcomes are most informative for replay
        self._replay_queue: deque = deque(maxlen=self.REPLAY_QUEUE_MAX)

        # Recent signals for get_learning_feed()
        self._recent_signals: deque = deque(maxlen=self.RECENT_SIGNALS_MAX)

        # MAPIE calibration state (accumulated residuals)
        self._calibration_residuals: List[float] = []
        self._calibration_max = 500

        logger.info("CouncilLearner initialised (backend=%s)", self._backend)

    # ── Public event handlers ─────────────────────────────────────────────────

    async def on_council_outcome(
        self,
        proposal: Dict[str, Any],
        outcome: str,
        dispatch_result: Optional[Dict[str, Any]] = None,
    ) -> None:
        """
        Called after AgentCouncil._tally_votes().
        Extracts vote features → trains online model → notifies z_self.
        """
        try:
            result = proposal.get("result", {})
            for_ratio = result.get("for_ratio", 0.5)
            care_weight = proposal.get("care_weight", 0.5)
            action_type = proposal.get("action_type", "generic")

            # Determine label
            dispatch_success = True
            if dispatch_result and "error" in dispatch_result:
                dispatch_success = False

            if outcome == "approved" and dispatch_success:
                label = 1.0
            elif outcome == "approved" and not dispatch_success:
                label = 0.6  # approved but execution failed
            elif outcome == "rejected":
                label = 0.0
            else:
                label = 0.5  # tied

            # Get current engagement if available
            engagement_score = 0.5
            if self.agent_registry:
                try:
                    asa = self.agent_registry.compute_engagement()
                    engagement_score = asa.get("score", 0.5)
                except Exception:
                    pass

            features = {
                "for_ratio": for_ratio,
                "against_ratio": 1.0 - for_ratio,
                "care_weight": care_weight,
                "engagement_score": engagement_score,
                "action_type_enc": _encode_action_type(action_type),
                "has_shura": 1.0 if proposal.get("shura") else 0.0,
                "dispatch_success": 1.0 if dispatch_success else 0.0,
            }

            signal = CouncilLearningSignal(
                event_type="vote_tally",
                features=features,
                label=label,
                care_score=care_weight,
                source_id=proposal.get("id", ""),
            )
            await self._process_signal(signal)

        except Exception as exc:
            logger.debug("CouncilLearner.on_council_outcome error: %s", exc)

    async def on_task_completed(
        self,
        agent_id: str,
        task_type: str,
        success: bool,
        pheromone_before: float = 0.5,
        agent_trust: float = 0.5,
        performance_score: float = 0.5,
    ) -> None:
        """
        Called after AgentRegistry.record_task_result().
        Updates River model for task routing decisions.
        """
        try:
            label = 1.0 if success else 0.0

            # Hour of day as a context signal (0-1)
            hour_norm = datetime.now().hour / 23.0

            features = {
                "agent_trust": agent_trust,
                "task_type_enc": _encode_action_type(task_type),
                "pheromone_before": pheromone_before,
                "performance_score": performance_score,
                "hour_of_day": hour_norm,
                "success": label,
            }

            signal = CouncilLearningSignal(
                event_type="task_complete",
                features=features,
                label=label,
                care_score=0.5 + 0.3 * agent_trust,  # proxy: high-trust agents → higher care
                source_id=agent_id,
            )
            await self._process_signal(signal)

        except Exception as exc:
            logger.debug("CouncilLearner.on_task_completed error: %s", exc)

    async def on_shura_deliberation(self, shura_result: Dict[str, Any]) -> None:
        """
        Called after ShuraCouncil.run_shura_pipeline().
        Feeds deliberation quality metadata into the learning pipeline.
        """
        try:
            shura = shura_result.get("shura", {})
            if not shura:
                return

            participant_count = shura.get("participant_count", 0)
            adversarial_engaged = 1.0 if shura.get("adversarial_engaged") else 0.0
            sanhedrin_flag = 1.0 if shura.get("sanhedrin_flag") else 0.0
            consensus_dir = shura.get("consensus_direction", "unknown")
            concern_count = len(shura.get("concerns", []))
            support_count = len(shura.get("supporting_evidence", []))
            total_perspectives = max(participant_count, 1)

            # Care score: high if adversarial engaged + no sanhedrin flag + mixed consensus
            care_proxy = (adversarial_engaged * 0.5 + (1.0 - sanhedrin_flag) * 0.3 +
                          min(concern_count / total_perspectives, 1.0) * 0.2)

            # Label: quality of deliberation
            # Good deliberation = has concerns, adversarial engaged, not unanimous rubber-stamp
            label = min(1.0, (adversarial_engaged * 0.4 +
                               min(concern_count / total_perspectives, 0.5) * 0.4 +
                               (1.0 - sanhedrin_flag) * 0.2))

            features = {
                "participant_count_norm": min(participant_count / 11.0, 1.0),
                "adversarial_engaged": adversarial_engaged,
                "sanhedrin_flag": sanhedrin_flag,
                "consensus_dir_enc": _encode_consensus(consensus_dir),
                "concern_ratio": min(concern_count / total_perspectives, 1.0),
                "support_ratio": min(support_count / total_perspectives, 1.0),
                "care_proxy": care_proxy,
            }

            signal = CouncilLearningSignal(
                event_type="shura_deliberation",
                features=features,
                label=label,
                care_score=care_proxy,
                source_id=shura_result.get("shura_deliberation_id", ""),
            )
            await self._process_signal(signal)

        except Exception as exc:
            logger.debug("CouncilLearner.on_shura_deliberation error: %s", exc)

    # ── SRC replay queue ──────────────────────────────────────────────────────

    def get_replay_queue(self, n: int = 50) -> List[CouncilLearningSignal]:
        """
        Returns the top-N signals for SRC dream replay, sorted by:
        priority = care_score × |label - 0.5| × 2
        (high-care + decisive outcomes are most informative for Hebbian replay)
        """
        sorted_signals = sorted(
            self._replay_queue,
            key=lambda s: s.care_score * abs(s.label - 0.5) * 2,
            reverse=True,
        )
        return sorted_signals[:n]

    # ── Stats and inspection ──────────────────────────────────────────────────

    def get_learning_stats(self) -> Dict[str, Any]:
        """Return summary of learning pipeline health."""
        accuracy = self._river_correct / max(self._river_total, 1)

        # Calibration score: standard deviation of residuals (lower = better calibrated)
        cal_score = 1.0
        if len(self._calibration_residuals) >= 10:
            mean_r = sum(self._calibration_residuals) / len(self._calibration_residuals)
            variance = sum((r - mean_r) ** 2 for r in self._calibration_residuals) / len(self._calibration_residuals)
            std = math.sqrt(variance)
            cal_score = max(0.0, 1.0 - std)  # lower std → better calibration → higher score

        return {
            "backend": self._backend,
            "samples_processed": self._samples_processed,
            "river_accuracy": round(accuracy, 4),
            "z_self_calibration": round(cal_score, 4),
            "replay_queue_size": len(self._replay_queue),
            "recent_signals_count": len(self._recent_signals),
            "event_breakdown": self._get_event_breakdown(),
        }

    def get_recent_feed(self, n: int = 10) -> List[Dict[str, Any]]:
        """Return the N most recent learning signals as dicts."""
        signals = list(self._recent_signals)
        return [s.to_dict() for s in reversed(signals)][-n:]

    def reset_online_model(self) -> Dict[str, Any]:
        """Clear the River online model — for debugging or fresh start."""
        _model, self._backend = _make_river_learner()
        if self._backend == "river":
            self._river = _model
            self._fallback = None
        else:
            self._river = None
            self._fallback = _FallbackLearner()
        self._river_correct = 0
        self._river_total = 0
        self._calibration_residuals.clear()
        logger.info("CouncilLearner online model reset")
        return {"status": "reset", "backend": self._backend, "samples_before_reset": self._samples_processed}

    async def replay_recent(self, n: int = 50) -> Dict[str, Any]:
        """
        Manually trigger replay of the top-N signals through the learning pipeline.
        Used by trigger_council_learning MCP tool and SRC dream replay.
        """
        signals = self.get_replay_queue(n)
        replayed = 0
        for signal in signals:
            await self._update_learners(signal, is_replay=True)
            replayed += 1
        return {"replayed": replayed, "queue_size": len(self._replay_queue)}

    # ── Private helpers ───────────────────────────────────────────────────────

    async def _process_signal(self, signal: CouncilLearningSignal) -> None:
        """Core pipeline: store → train → observe → queue for replay."""
        self._samples_processed += 1
        self._recent_signals.append(signal)
        self._replay_queue.append(signal)  # deque maxlen handles eviction

        await self._update_learners(signal)

    async def _update_learners(
        self,
        signal: CouncilLearningSignal,
        is_replay: bool = False,
    ) -> None:
        """Update River learner and notify z_self (non-blocking)."""
        # 1. River incremental update
        binary_label = 1 if signal.label >= 0.5 else 0
        try:
            if self._backend == "river" and self._river is not None:
                pred = self._river.predict_one(signal.features)
                self._river.learn_one(signal.features, binary_label)
                if pred is not None:
                    self._river_total += 1
                    if pred == binary_label:
                        self._river_correct += 1
            elif self._fallback is not None:
                pred = self._fallback.predict_one(signal.features)
                self._fallback.learn_one(signal.features, binary_label)
                self._river_total += 1
                if pred == binary_label:
                    self._river_correct += 1
        except Exception as exc:
            logger.debug("River learn_one error: %s", exc)

        # 2. Track calibration residual
        predicted_prob = signal.label  # proxy: use label as predicted probability
        actual = float(binary_label)
        residual = abs(predicted_prob - actual)
        self._calibration_residuals.append(residual)
        if len(self._calibration_residuals) > self._calibration_max:
            self._calibration_residuals = self._calibration_residuals[-self._calibration_max:]

        # 3. Notify z_self (fire-and-forget)
        if self.z_self is not None:
            try:
                # Build minimal context dict for z_self.observe()
                context = {
                    "care_intensity": signal.care_score,
                    "engagement_score": signal.features.get("engagement_score", 0.5),
                    "council_learning_event": signal.event_type,
                    "is_replay": is_replay,
                    "label": signal.label,
                }
                asyncio.create_task(
                    self.z_self.observe(
                        model_name="council_learner",
                        model_inputs=list(signal.features.values()),
                        model_outputs=[signal.label],
                        context=context,
                    )
                )
            except Exception as exc:
                logger.debug("z_self observe error: %s", exc)

    def _get_event_breakdown(self) -> Dict[str, int]:
        counts: Dict[str, int] = {}
        for s in self._recent_signals:
            counts[s.event_type] = counts.get(s.event_type, 0) + 1
        return counts
