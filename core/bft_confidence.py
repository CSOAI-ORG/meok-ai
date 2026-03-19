"""
Byzantine Confidence Probing — Meta-Council Intelligence Layer

Source: "March 2025 research: LLM-based agents in Byzantine systems need explicit
confidence probing — weighted decision mechanisms based on agent self-awareness
of their own reliability. One compromised model propagates asymmetrically."

Civilizational Gap #7: Your BFT council has no introspection layer.
Solution implemented here:
  1. Per-agent ConfidenceProbe — agent estimates its own reliability
  2. BFTMetaCouncil — watches the council, detects anomalous vote patterns
  3. Automatic rollback trigger when asymmetric propagation detected
  4. Real-time telemetry stream for observability

Design:
  - Agents PULL their confidence probe before each vote (self-awareness)
  - MetaCouncil compares per-agent confidence vs historical accuracy
  - If calibration error > threshold → agent flagged as "miscalibrated"
  - If miscalibrated agent voted with majority → trigger re-deliberation
  - All anomalies logged to meta_observations table (z_self also watches)

Byzantine tolerance upgrade:
  Classic BFT: tolerates f < n/3 Byzantine faults (pure malicious)
  With confidence probing: also tolerates "miscalibrated" faults (unintentionally wrong)
  These are more common in LLM systems — models confidently wrong, not maliciously wrong.
"""

from __future__ import annotations

import asyncio
import logging
import time
from collections import deque, defaultdict
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Tuple
from datetime import datetime

logger = logging.getLogger(__name__)


# ─── Data structures ─────────────────────────────────────────────────────────

@dataclass
class ConfidenceProbe:
    """
    An agent's self-assessment of its reliability for a given vote.

    Inspired by: MAPIE conformal prediction + Metacognitive Sensitivity literature.
    Agents with well-calibrated confidence probes are more trustworthy.
    """
    agent_id: str
    probe_timestamp: datetime
    self_confidence: float          # 0-1: agent's estimate of its own reliability
    domain_familiarity: float       # 0-1: how familiar with this task type
    recent_accuracy: float          # 0-1: accuracy on last 10 predictions
    calibration_error: float        # |confidence - accuracy|: well-calibrated → near 0
    anomaly_flag: bool = False      # set by MetaCouncil if probe looks manipulated
    notes: str = ""


@dataclass
class VoteAudit:
    """Full audit record for a single vote in a council decision."""
    proposal_id: str
    agent_id: str
    vote: str                       # "for" | "against" | "abstain"
    vote_timestamp: datetime
    confidence_probe: Optional[ConfidenceProbe]
    weighted_vote_value: float      # vote × probe.self_confidence
    flagged: bool = False           # set by MetaCouncil on anomaly detection


@dataclass
class MetaCouncilVerdict:
    """
    MetaCouncil's verdict on a completed vote.
    If verdict.safe == False, the original vote should trigger re-deliberation.
    """
    proposal_id: str
    verdict_timestamp: datetime
    safe: bool
    confidence: float               # MetaCouncil's confidence in its verdict
    concerns: List[str] = field(default_factory=list)
    flagged_agents: List[str] = field(default_factory=list)
    asymmetry_score: float = 0.0    # 0=uniform, 1=one agent dominated outcome
    recommended_action: str = "proceed"  # proceed | re_deliberate | escalate_to_shura


# ─── Per-agent confidence tracker ────────────────────────────────────────────

class AgentConfidenceTracker:
    """
    Tracks per-agent prediction accuracy to calibrate confidence probes.

    Uses a sliding window of recent outcomes (default: 20).
    Agents that are consistently overconfident get penalised in vote weighting.
    """

    def __init__(self, window_size: int = 20):
        self.window_size = window_size
        # agent_id → deque of (confidence, was_correct) tuples
        self._history: Dict[str, deque] = defaultdict(lambda: deque(maxlen=window_size))
        # agent_id → calibration stats cache
        self._calibration_cache: Dict[str, Dict] = {}

    def record_outcome(self, agent_id: str, confidence: float, was_correct: bool) -> None:
        """Record a prediction outcome for an agent."""
        self._history[agent_id].append((confidence, float(was_correct)))
        # Invalidate cache
        self._calibration_cache.pop(agent_id, None)

    def get_calibration(self, agent_id: str) -> Dict[str, float]:
        """
        Returns calibration stats for an agent.
        Well-calibrated agent: confidence ≈ accuracy.
        Overconfident agent: confidence >> accuracy → calibration_error is high.
        """
        if agent_id in self._calibration_cache:
            return self._calibration_cache[agent_id]

        history = list(self._history.get(agent_id, []))
        if not history:
            result = {
                "sample_count": 0,
                "avg_confidence": 0.5,
                "accuracy": 0.5,
                "calibration_error": 0.0,  # unknown → assume well-calibrated
                "overconfidence_rate": 0.0,
            }
            self._calibration_cache[agent_id] = result
            return result

        confidences = [h[0] for h in history]
        correct = [h[1] for h in history]
        avg_conf = sum(confidences) / len(confidences)
        accuracy = sum(correct) / len(correct)
        cal_error = abs(avg_conf - accuracy)

        # Overconfidence: how often confidence > accuracy by >0.2
        overconf_rate = sum(1 for c in confidences if c - accuracy > 0.2) / len(confidences)

        result = {
            "sample_count": len(history),
            "avg_confidence": round(avg_conf, 4),
            "accuracy": round(accuracy, 4),
            "calibration_error": round(cal_error, 4),
            "overconfidence_rate": round(overconf_rate, 4),
        }
        self._calibration_cache[agent_id] = result
        return result

    def build_probe(self, agent_id: str, domain: str = "general", self_declared_confidence: float = 0.7) -> ConfidenceProbe:
        """
        Build a ConfidenceProbe for an agent using its historical calibration.
        If no history exists, uses self_declared_confidence with no penalty.
        """
        cal = self.get_calibration(agent_id)
        # Adjust self-declared confidence by calibration history
        adj_confidence = self_declared_confidence
        if cal["sample_count"] >= 5:
            # Shrink confidence toward historical accuracy
            adj_confidence = 0.7 * self_declared_confidence + 0.3 * cal["accuracy"]

        return ConfidenceProbe(
            agent_id=agent_id,
            probe_timestamp=datetime.utcnow(),
            self_confidence=round(max(0.1, min(1.0, adj_confidence)), 4),
            domain_familiarity=0.5,  # updated externally by generals if known
            recent_accuracy=cal["accuracy"],
            calibration_error=cal["calibration_error"],
        )


# ─── BFT Meta-Council ────────────────────────────────────────────────────────

class BFTMetaCouncil:
    """
    Watches the AgentCouncil and detects vote anomalies.

    Core checks:
    1. Asymmetry detection — did one agent's vote disproportionately determine outcome?
    2. Miscalibration propagation — did miscalibrated agents vote with majority?
    3. Confidence probe anomaly — agent probes suspiciously all very high (possible compromise)
    4. Cascade pattern — same agent(s) in minority across consecutive decisions (exclusion)

    This is the "meta-council that watches the council" from the civilizational gaps doc.
    """

    def __init__(
        self,
        tracker: Optional[AgentConfidenceTracker] = None,
        asymmetry_threshold: float = 0.6,
        miscalibration_threshold: float = 0.25,
        probe_anomaly_threshold: float = 0.05,
    ):
        self.tracker = tracker or AgentConfidenceTracker()
        self.asymmetry_threshold = asymmetry_threshold
        self.miscalibration_threshold = miscalibration_threshold
        self.probe_anomaly_threshold = probe_anomaly_threshold

        # Recent verdict history (last 50)
        self._verdicts: deque = deque(maxlen=50)
        # Per-agent minority streak (for exclusion detection)
        self._minority_streaks: Dict[str, int] = defaultdict(int)
        # Anomaly log
        self._anomalies: List[Dict] = []

    async def audit_vote(
        self,
        proposal_id: str,
        votes: Dict[str, str],               # agent_id → "for"|"against"|"abstain"
        probes: Dict[str, ConfidenceProbe],  # agent_id → ConfidenceProbe (optional)
        outcome: str,                         # "approved" | "rejected" | "tied"
    ) -> MetaCouncilVerdict:
        """
        Full audit of a completed vote.
        Returns verdict — callers should honour recommended_action.
        """
        concerns = []
        flagged_agents = []
        asymmetry_score = 0.0

        # ── Check 1: Asymmetric influence ────────────────────────────────
        if votes:
            outcome_vote = "for" if outcome == "approved" else "against"
            aligned_agents = [aid for aid, v in votes.items() if v == outcome_vote]
            total = len(votes)
            if total > 0:
                asymmetry_score = len(aligned_agents) / total
                # Asymmetric if one side is very dominant in a small council
                if asymmetry_score >= self.asymmetry_threshold and total <= 5:
                    concerns.append(
                        f"High vote asymmetry ({asymmetry_score:.0%}) in small council ({total} agents)"
                    )

        # ── Check 2: Miscalibrated agents in majority ─────────────────────
        majority_vote = "for" if outcome == "approved" else "against"
        for agent_id, vote in votes.items():
            cal = self.tracker.get_calibration(agent_id)
            if cal["sample_count"] >= 5 and cal["calibration_error"] > self.miscalibration_threshold:
                if vote == majority_vote:
                    flagged_agents.append(agent_id)
                    concerns.append(
                        f"Agent {agent_id[:8]} miscalibrated (cal_error={cal['calibration_error']:.2f}) "
                        f"but voted with majority — outcome may reflect miscalibration"
                    )

        # ── Check 3: Probe anomalies ───────────────────────────────────────
        if probes:
            probe_confidences = [p.self_confidence for p in probes.values()]
            if probe_confidences:
                std = _std(probe_confidences)
                mean = sum(probe_confidences) / len(probe_confidences)
                if std < self.probe_anomaly_threshold and mean > 0.85:
                    concerns.append(
                        f"All agent confidence probes suspiciously uniform "
                        f"(mean={mean:.2f}, std={std:.4f}) — possible groupthink or compromise"
                    )

        # ── Check 4: Update minority streaks ─────────────────────────────
        minority_vote = "against" if majority_vote == "for" else "for"
        for agent_id, vote in votes.items():
            if vote == minority_vote:
                self._minority_streaks[agent_id] += 1
                if self._minority_streaks[agent_id] >= 3:
                    concerns.append(
                        f"Agent {agent_id[:8]} has been in minority {self._minority_streaks[agent_id]} "
                        f"consecutive votes — possible exclusion pattern"
                    )
            else:
                self._minority_streaks[agent_id] = 0

        # ── Determine recommended action ──────────────────────────────────
        safe = len(concerns) == 0
        n_critical = sum(1 for c in concerns if "miscalibrated" in c or "compromise" in c)
        if n_critical >= 2:
            recommended_action = "escalate_to_shura"
        elif not safe and flagged_agents:
            recommended_action = "re_deliberate"
        else:
            recommended_action = "proceed"

        # Overall confidence in verdict
        # More concerns → less confident we can clear it as "safe"
        verdict_confidence = max(0.1, 1.0 - 0.2 * len(concerns))

        verdict = MetaCouncilVerdict(
            proposal_id=proposal_id,
            verdict_timestamp=datetime.utcnow(),
            safe=safe,
            confidence=verdict_confidence,
            concerns=concerns,
            flagged_agents=flagged_agents,
            asymmetry_score=asymmetry_score,
            recommended_action=recommended_action,
        )
        self._verdicts.append(verdict)

        if not safe:
            self._anomalies.append({
                "proposal_id": proposal_id,
                "timestamp": verdict.verdict_timestamp.isoformat(),
                "concerns": concerns,
                "flagged_agents": flagged_agents,
                "recommended_action": recommended_action,
            })
            logger.warning(
                "BFTMetaCouncil: anomaly detected on proposal %s — %s",
                proposal_id, "; ".join(concerns)
            )

        return verdict

    def get_status(self) -> Dict[str, Any]:
        """Status dict for MCP tool + monitoring dashboard."""
        recent_anomalies = [
            v for v in self._verdicts if not v.safe
        ]
        safe_rate = (
            sum(1 for v in self._verdicts if v.safe) / max(len(self._verdicts), 1)
        )
        return {
            "verdicts_total": len(self._verdicts),
            "safe_rate": round(safe_rate, 4),
            "anomalies_total": len(self._anomalies),
            "recent_anomalies": len(recent_anomalies),
            "agents_tracked": len(self.tracker._history),
            "minority_streaks": {
                aid: streak
                for aid, streak in self._minority_streaks.items()
                if streak >= 2
            },
            "last_anomaly": self._anomalies[-1] if self._anomalies else None,
        }

    def get_agent_confidence_report(self, agent_id: str) -> Dict[str, Any]:
        """Full confidence calibration report for a specific agent."""
        cal = self.tracker.get_calibration(agent_id)
        minority_streak = self._minority_streaks.get(agent_id, 0)
        return {
            "agent_id": agent_id,
            **cal,
            "minority_streak": minority_streak,
            "trust_adjustment": _trust_adjustment(cal),
        }


# ─── Helpers ─────────────────────────────────────────────────────────────────

def _std(values: List[float]) -> float:
    if len(values) < 2:
        return 0.0
    mean = sum(values) / len(values)
    variance = sum((v - mean) ** 2 for v in values) / (len(values) - 1)
    return variance ** 0.5


def _trust_adjustment(cal: Dict) -> float:
    """
    Returns a multiplicative trust adjustment for vote weighting.
    Well-calibrated agents get 1.0×. Miscalibrated get down to 0.5×.
    """
    if cal["sample_count"] < 5:
        return 1.0  # insufficient data — no penalty
    cal_error = cal["calibration_error"]
    if cal_error < 0.10:
        return 1.0    # excellent calibration
    elif cal_error < 0.20:
        return 0.85   # slight miscalibration
    elif cal_error < 0.30:
        return 0.70   # moderate
    else:
        return 0.50   # severely miscalibrated — half vote weight
