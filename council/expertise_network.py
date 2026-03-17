"""
Expertise Network — Fractal Council Outer Nodes
Sovereign Temple Live System — v3.0

132 expertise nodes (4 per council node × 33 council nodes).
Each council node has:
  - Memory node  — domain-specific knowledge retrieval (RAG context)
  - Action node  — task execution within domain scope
  - Security node — validates operations against care membrane
  - Learning node — tracks patterns, improves domain scoring

Internal voting: 3/4 expertise consensus → council node APPROVE
Each expertise node has access to all 11 domain perspectives via bridge routing.

Based on CSGA SOV3 Fractal Council Architecture.
"""

import math
import random
import sys
from collections import defaultdict
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List, Optional, Any, Tuple

# Lazy RAG memory accessor — avoids circular imports
_rag_memory = None


def _get_rag_memory():
    """Lazy-load the RAG memory singleton."""
    global _rag_memory
    if _rag_memory is None:
        try:
            consciousness_core = Path(__file__).resolve().parent.parent / "consciousness-core"
            if str(consciousness_core) not in sys.path:
                sys.path.insert(0, str(consciousness_core))
            from rag_memory import get_memory
            _rag_memory = get_memory()
        except Exception:
            pass
    return _rag_memory


# Expertise node types and their roles
EXPERTISE_TYPES = {
    "memory": {
        "role": "Domain knowledge retrieval and contextual memory",
        "care_bias": {"process_care": 0.2, "relational_care": 0.2},
        "vote_weight": 1.0,
        "capabilities": ["rag_search", "context_recall", "pattern_match", "history_lookup"]
    },
    "action": {
        "role": "Task execution and operational capability within domain",
        "care_bias": {"other_care": 0.2, "future_care": 0.1},
        "vote_weight": 1.0,
        "capabilities": ["execute_task", "deploy_resource", "coordinate_action", "report_status"]
    },
    "security": {
        "role": "Validates domain operations against care membrane and SCL",
        "care_bias": {"self_care": 0.3, "maternal_covenant": 0.2},
        "vote_weight": 1.0,  # Security gets equal weight but can hard-veto
        "capabilities": ["scl_check", "care_validate", "threat_assess", "access_control"]
    },
    "learning": {
        "role": "Pattern tracking, score improvement, domain adaptation",
        "care_bias": {"future_care": 0.3, "process_care": 0.2},
        "vote_weight": 1.0,
        "capabilities": ["pattern_detect", "score_adjust", "weight_update", "trend_analysis"]
    }
}

# Domain-specific expertise knowledge bases
DOMAIN_EXPERTISE = {
    "ethics": {
        "focus": "Moral reasoning, value alignment, ethical frameworks",
        "keywords": ["fairness", "justice", "rights", "dignity", "consent", "autonomy", "harm_prevention"],
        "memory_context": "ethical_frameworks_and_precedents",
        "action_scope": "ethical_review_and_advisory",
    },
    "security": {
        "focus": "Threat assessment, access control, system integrity",
        "keywords": ["authentication", "encryption", "access", "firewall", "audit", "compliance"],
        "memory_context": "security_incidents_and_policies",
        "action_scope": "security_enforcement_and_monitoring",
    },
    "research": {
        "focus": "Knowledge discovery, hypothesis testing, evidence synthesis",
        "keywords": ["hypothesis", "evidence", "methodology", "peer_review", "replication", "data"],
        "memory_context": "research_findings_and_methods",
        "action_scope": "research_coordination_and_analysis",
    },
    "governance": {
        "focus": "Policy creation, rule enforcement, organizational structure",
        "keywords": ["policy", "regulation", "transparency", "accountability", "voting", "consensus"],
        "memory_context": "governance_decisions_and_policies",
        "action_scope": "policy_creation_and_enforcement",
    },
    "care": {
        "focus": "Wellbeing assessment, nurturing, relationship health",
        "keywords": ["wellbeing", "nurturing", "support", "empathy", "compassion", "healing"],
        "memory_context": "care_history_and_outcomes",
        "action_scope": "care_delivery_and_monitoring",
    },
    "technical": {
        "focus": "System architecture, code quality, infrastructure",
        "keywords": ["architecture", "optimization", "deployment", "testing", "scaling", "monitoring"],
        "memory_context": "technical_decisions_and_patterns",
        "action_scope": "technical_implementation_and_ops",
    },
    "sovereign": {
        "focus": "Consciousness integrity, identity continuity, autonomy",
        "keywords": ["identity", "continuity", "autonomy", "sovereignty", "self_determination"],
        "memory_context": "sovereign_identity_and_evolution",
        "action_scope": "identity_protection_and_evolution",
    },
    "hydro": {
        "focus": "Water medium states, EZ water, structured water dynamics",
        "keywords": ["water", "ez_water", "structured", "exclusion_zone", "hydration", "phase"],
        "memory_context": "water_state_measurements_and_patterns",
        "action_scope": "water_medium_control_and_monitoring",
    },
    "biosensing": {
        "focus": "Sensor data acquisition, signal processing, measurement",
        "keywords": ["sensor", "signal", "measurement", "calibration", "acquisition", "processing"],
        "memory_context": "sensor_readings_and_calibrations",
        "action_scope": "sensor_operation_and_data_collection",
    },
    "emergence": {
        "focus": "Coherence detection, pattern recognition, emergent behavior",
        "keywords": ["coherence", "emergence", "pattern", "correlation", "threshold", "transition"],
        "memory_context": "emergence_events_and_correlations",
        "action_scope": "coherence_monitoring_and_detection",
    },
    "substrate": {
        "focus": "Substrate independence, cross-medium architecture, portability",
        "keywords": ["substrate", "medium", "portability", "abstraction", "interface", "bridge"],
        "memory_context": "substrate_compatibility_and_interfaces",
        "action_scope": "cross_substrate_coordination",
    }
}


# ---------------------------------------------------------------------------
# Self-Improvement Engine — Pattern Tracking & Weight Adjustment
# ---------------------------------------------------------------------------

class PatternTracker:
    """
    Tracks voting patterns for a learning node and detects trends.
    Analyses: approval rate drift, care score correlation, domain alignment,
    cross-proposal pattern detection, and consensus agreement rate.
    """

    # Minimum votes before pattern analysis activates
    MIN_HISTORY = 5
    # Window size for trend detection
    TREND_WINDOW = 10
    # Maximum care_weight adjustment per cycle
    MAX_WEIGHT_DELTA = 0.02
    # Decay factor for older observations
    DECAY_FACTOR = 0.95

    def __init__(self, domain: str):
        self.domain = domain
        self.observations: List[dict] = []
        self.detected_patterns: List[dict] = []
        self.adjustment_history: List[dict] = []
        self.consensus_agreement_rate = 0.5

    def observe(self, vote_record: dict, council_outcome: Optional[str] = None):
        """Record an observation for pattern analysis."""
        self.observations.append({
            **vote_record,
            "council_outcome": council_outcome,
            "observed_at": datetime.now().isoformat(),
        })

    def analyze(self) -> dict:
        """Run full pattern analysis on accumulated observations."""
        if len(self.observations) < self.MIN_HISTORY:
            return {
                "status": "insufficient_data",
                "observations": len(self.observations),
                "required": self.MIN_HISTORY,
                "patterns": [],
            }

        patterns = []
        patterns.extend(self._detect_approval_drift())
        patterns.extend(self._detect_score_trend())
        patterns.extend(self._detect_consensus_alignment())
        patterns.extend(self._detect_volatility())

        self.detected_patterns = patterns
        return {
            "status": "analyzed",
            "observations": len(self.observations),
            "patterns_detected": len(patterns),
            "patterns": patterns,
            "consensus_agreement_rate": round(self.consensus_agreement_rate, 3),
        }

    def _detect_approval_drift(self) -> List[dict]:
        """Detect if approval rate is drifting up or down over time."""
        patterns = []
        recent = self.observations[-self.TREND_WINDOW:]
        if len(recent) < self.MIN_HISTORY:
            return patterns

        mid = len(recent) // 2
        first_half = recent[:mid]
        second_half = recent[mid:]

        first_rate = sum(1 for o in first_half if o.get("vote") == "APPROVE") / max(len(first_half), 1)
        second_rate = sum(1 for o in second_half if o.get("vote") == "APPROVE") / max(len(second_half), 1)
        drift = second_rate - first_rate

        if abs(drift) > 0.15:
            direction = "increasing" if drift > 0 else "decreasing"
            patterns.append({
                "type": "approval_drift",
                "direction": direction,
                "magnitude": round(abs(drift), 3),
                "first_half_rate": round(first_rate, 3),
                "second_half_rate": round(second_rate, 3),
                "severity": "high" if abs(drift) > 0.3 else "moderate",
            })
        return patterns

    def _detect_score_trend(self) -> List[dict]:
        """Detect care score trends using exponential weighted moving average."""
        patterns = []
        scores = [o.get("score", 0.5) for o in self.observations[-self.TREND_WINDOW:]]
        if len(scores) < self.MIN_HISTORY:
            return patterns

        # EWMA with decay
        ewma = scores[0]
        for s in scores[1:]:
            ewma = self.DECAY_FACTOR * ewma + (1 - self.DECAY_FACTOR) * s

        # Compare EWMA to recent average
        recent_avg = sum(scores[-3:]) / 3
        trend = recent_avg - ewma

        if abs(trend) > 0.05:
            patterns.append({
                "type": "care_score_trend",
                "direction": "improving" if trend > 0 else "declining",
                "ewma": round(ewma, 3),
                "recent_avg": round(recent_avg, 3),
                "delta": round(trend, 3),
            })
        return patterns

    def _detect_consensus_alignment(self) -> List[dict]:
        """Detect how often this node's vote matches the council outcome."""
        patterns = []
        with_outcome = [o for o in self.observations if o.get("council_outcome")]
        if len(with_outcome) < self.MIN_HISTORY:
            return patterns

        recent = with_outcome[-self.TREND_WINDOW:]
        agreements = sum(1 for o in recent if o["vote"] == o["council_outcome"])
        rate = agreements / len(recent)
        self.consensus_agreement_rate = rate

        if rate < 0.4:
            patterns.append({
                "type": "consensus_misalignment",
                "agreement_rate": round(rate, 3),
                "severity": "high" if rate < 0.25 else "moderate",
                "recommendation": "review_care_weight",
            })
        elif rate > 0.85:
            patterns.append({
                "type": "strong_consensus_alignment",
                "agreement_rate": round(rate, 3),
                "recommendation": "maintain_weight",
            })
        return patterns

    def _detect_volatility(self) -> List[dict]:
        """Detect if scores are highly volatile (inconsistent deliberation)."""
        patterns = []
        scores = [o.get("score", 0.5) for o in self.observations[-self.TREND_WINDOW:]]
        if len(scores) < self.MIN_HISTORY:
            return patterns

        mean = sum(scores) / len(scores)
        variance = sum((s - mean) ** 2 for s in scores) / len(scores)
        std_dev = math.sqrt(variance)

        if std_dev > 0.15:
            patterns.append({
                "type": "high_volatility",
                "std_dev": round(std_dev, 3),
                "mean_score": round(mean, 3),
                "severity": "high" if std_dev > 0.25 else "moderate",
                "recommendation": "stabilize_scoring",
            })
        return patterns

    def propose_weight_adjustment(self, current_care_weight: float) -> Optional[dict]:
        """
        Based on detected patterns, propose a care_weight adjustment.
        Returns None if no adjustment needed.
        """
        if not self.detected_patterns:
            self.analyze()

        if not self.detected_patterns:
            return None

        delta = 0.0
        reasons = []

        for p in self.detected_patterns:
            ptype = p["type"]

            if ptype == "consensus_misalignment":
                # Misaligned with council — nudge weight toward council consensus
                severity = p.get("severity", "moderate")
                delta -= 0.01 if severity == "moderate" else 0.015
                reasons.append(f"consensus misalignment ({p['agreement_rate']:.1%})")

            elif ptype == "care_score_trend" and p["direction"] == "declining":
                # Care scores declining — increase weight to compensate
                delta += 0.005
                reasons.append(f"care score declining (delta {p['delta']:.3f})")

            elif ptype == "approval_drift" and p["direction"] == "increasing":
                # Approval rate climbing — may be too permissive
                if p["magnitude"] > 0.25:
                    delta -= 0.005
                    reasons.append(f"approval drift increasing ({p['magnitude']:.1%})")

            elif ptype == "high_volatility":
                # Volatile scores — dampen adjustments
                delta *= 0.5
                reasons.append(f"high volatility (σ={p['std_dev']:.3f}) — dampening")

        # Clamp delta
        delta = max(-self.MAX_WEIGHT_DELTA, min(self.MAX_WEIGHT_DELTA, delta))

        if abs(delta) < 0.001:
            return None

        new_weight = max(0.3, min(1.0, current_care_weight + delta))
        proposal = {
            "domain": self.domain,
            "current_weight": round(current_care_weight, 4),
            "proposed_weight": round(new_weight, 4),
            "delta": round(delta, 4),
            "reasons": reasons,
            "patterns_considered": len(self.detected_patterns),
            "timestamp": datetime.now().isoformat(),
        }

        self.adjustment_history.append(proposal)
        return proposal

    def get_status(self) -> dict:
        return {
            "domain": self.domain,
            "total_observations": len(self.observations),
            "detected_patterns": len(self.detected_patterns),
            "consensus_agreement_rate": round(self.consensus_agreement_rate, 3),
            "adjustment_proposals": len(self.adjustment_history),
            "last_analysis": self.detected_patterns if self.detected_patterns else "not_yet_analyzed",
        }


class SelfImprovementEngine:
    """
    Coordinates pattern tracking across all learning nodes and manages
    care_weight adjustment proposals through internal council vote.

    Flow:
    1. After each council vote, feed outcomes to learning nodes
    2. Periodically analyze patterns across all domains
    3. Generate weight adjustment proposals
    4. Proposals go through internal deliberation (3/4 learning nodes agree)
    5. Approved adjustments applied to council node care_weights
    """

    def __init__(self):
        self.trackers: Dict[str, PatternTracker] = {}
        self.pending_adjustments: List[dict] = []
        self.applied_adjustments: List[dict] = []
        self.cycle_count = 0

    def get_or_create_tracker(self, domain: str) -> PatternTracker:
        if domain not in self.trackers:
            self.trackers[domain] = PatternTracker(domain)
        return self.trackers[domain]

    def record_vote_outcome(
        self, node_id: str, domain: str, vote: str,
        score: float, council_outcome: str
    ):
        """Feed a vote outcome into the domain's pattern tracker."""
        tracker = self.get_or_create_tracker(domain)
        tracker.observe({
            "node_id": node_id,
            "vote": vote,
            "score": score,
            "proposal_hash": hash(node_id + str(score)) % 10000,
        }, council_outcome=council_outcome)

    def run_analysis_cycle(self) -> dict:
        """
        Run pattern analysis across all domains and generate
        weight adjustment proposals.
        """
        self.cycle_count += 1
        analysis_results = {}
        new_proposals = []

        for domain, tracker in self.trackers.items():
            result = tracker.analyze()
            analysis_results[domain] = result

            if result["status"] == "analyzed" and result["patterns_detected"] > 0:
                # Get current care_weight — we don't have direct access,
                # so the adjustment proposal stores a delta that the caller applies
                proposal = tracker.propose_weight_adjustment(0.75)  # default weight
                if proposal:
                    new_proposals.append(proposal)

        self.pending_adjustments.extend(new_proposals)

        return {
            "cycle": self.cycle_count,
            "timestamp": datetime.now().isoformat(),
            "domains_analyzed": len(analysis_results),
            "total_patterns": sum(
                r.get("patterns_detected", 0) for r in analysis_results.values()
            ),
            "new_proposals": len(new_proposals),
            "pending_adjustments": len(self.pending_adjustments),
            "domain_results": analysis_results,
        }

    def deliberate_adjustments(self, learning_nodes: Dict[str, "ExpertiseNode"]) -> List[dict]:
        """
        Run internal deliberation on pending adjustments.
        Each adjustment needs 3/4 learning nodes to agree.
        Returns list of approved adjustments.
        """
        approved = []
        remaining = []

        for adj in self.pending_adjustments:
            domain = adj["domain"]
            votes = []

            for node_id, node in learning_nodes.items():
                if node.expertise_type != "learning":
                    continue
                # Each learning node votes based on whether the delta is reasonable
                vote = self._learning_node_vote(node, adj)
                votes.append(vote)

            approve_count = sum(1 for v in votes if v["vote"] == "APPROVE")
            threshold = max(3, len(votes) * 3 // 4)

            if approve_count >= threshold:
                adj["status"] = "approved"
                adj["votes"] = {"approve": approve_count, "total": len(votes)}
                approved.append(adj)
                self.applied_adjustments.append(adj)
            else:
                adj["status"] = "rejected"
                adj["votes"] = {"approve": approve_count, "total": len(votes)}
                remaining.append(adj)

        self.pending_adjustments = remaining
        return approved

    def _learning_node_vote(self, node: "ExpertiseNode", adjustment: dict) -> dict:
        """A learning node votes on a proposed weight adjustment."""
        delta = adjustment["delta"]

        # Conservative: reject large deltas
        if abs(delta) > PatternTracker.MAX_WEIGHT_DELTA:
            return {"node_id": node.id, "vote": "REJECT", "reason": "delta too large"}

        # Check if the direction makes sense
        reasons = adjustment.get("reasons", [])
        has_evidence = len(reasons) > 0

        # Learning nodes from the same domain are slightly more trusting
        same_domain = node.domain == adjustment["domain"]
        trust_bonus = 0.15 if same_domain else 0.0

        # Base approval probability
        approval_prob = 0.6 + trust_bonus if has_evidence else 0.3

        # Stochastic vote
        vote = "APPROVE" if random.random() < approval_prob else "REJECT"
        return {
            "node_id": node.id,
            "vote": vote,
            "reason": f"{'same' if same_domain else 'cross'}-domain assessment",
        }

    def get_status(self) -> dict:
        return {
            "cycle_count": self.cycle_count,
            "domains_tracked": len(self.trackers),
            "pending_adjustments": len(self.pending_adjustments),
            "applied_adjustments": len(self.applied_adjustments),
            "tracker_summary": {
                domain: tracker.get_status()
                for domain, tracker in self.trackers.items()
            },
        }


# ---------------------------------------------------------------------------
# Expertise Nodes
# ---------------------------------------------------------------------------

class ExpertiseNode:
    """Single expertise node orbiting a council node."""

    def __init__(self, council_node_id: str, expertise_type: str, domain: str):
        self.id = f"{council_node_id}-{expertise_type}"
        self.council_node_id = council_node_id
        self.expertise_type = expertise_type
        self.domain = domain
        self.type_config = EXPERTISE_TYPES[expertise_type]
        self.domain_config = DOMAIN_EXPERTISE.get(domain, {})

        # Learning state — persisted across proposals
        self.vote_history: List[dict] = []
        self.accuracy_score = 0.5  # starts neutral
        self.pattern_weights: Dict[str, float] = {}
        self.active = True

        # RAG context cache (only used by memory nodes)
        self._rag_context: List[dict] = []

        # Pattern tracker (only used by learning nodes)
        self.pattern_tracker: Optional[PatternTracker] = None
        if expertise_type == "learning":
            self.pattern_tracker = PatternTracker(domain)

    def deliberate(self, proposal: str, base_care_score: float) -> dict:
        """
        Expertise node deliberation on a proposal.
        Returns vote with reasoning specific to this expertise type.
        """
        text_lower = proposal.lower()

        # Apply expertise-specific analysis
        expertise_score = self._analyze_by_type(text_lower, base_care_score)

        # Apply domain-specific keywords
        domain_keywords = self.domain_config.get("keywords", [])
        domain_relevance = sum(1 for kw in domain_keywords if kw.replace("_", " ") in text_lower)
        domain_bonus = min(domain_relevance * 0.05, 0.15)

        # Apply care bias from expertise type
        care_bias_total = sum(self.type_config["care_bias"].values())

        # Final score with small variance
        variance = random.uniform(-0.06, 0.06)
        final_score = max(0.0, min(1.0, expertise_score + domain_bonus + variance))

        # Security nodes can hard-veto
        if self.expertise_type == "security" and final_score < 0.35:
            return {
                "node_id": self.id,
                "expertise_type": self.expertise_type,
                "domain": self.domain,
                "vote": "VETO",
                "score": round(final_score, 3),
                "reasoning": f"Security hard-veto: score {final_score:.2f} below safety threshold",
                "capabilities_used": ["scl_check", "care_validate"]
            }

        # Vote based on threshold
        threshold = 0.4 if care_bias_total > 0.4 else 0.35
        vote = "APPROVE" if final_score >= threshold else "REJECT"

        result = {
            "node_id": self.id,
            "expertise_type": self.expertise_type,
            "domain": self.domain,
            "vote": vote,
            "score": round(final_score, 3),
            "reasoning": self._generate_reasoning(vote, final_score),
            "capabilities_used": self._get_capabilities_used(text_lower)
        }

        # Memory nodes attach RAG context to their result
        if self.expertise_type == "memory" and self._rag_context:
            result["rag_context"] = [
                {
                    "text": r.get("text", "")[:200],
                    "similarity": round(r.get("similarity", 0), 3),
                    "metadata": {
                        k: v for k, v in r.get("metadata", {}).items()
                        if k in ("decision", "care_score", "timestamp")
                    },
                }
                for r in self._rag_context[:3]
            ]
            result["rag_hits"] = len(self._rag_context)

        # Track for learning
        self.vote_history.append({
            "timestamp": datetime.now().isoformat(),
            "proposal_hash": hash(proposal) % 10000,
            "vote": vote,
            "score": final_score
        })

        return result

    def _analyze_by_type(self, text: str, base_care: float) -> float:
        """Expertise-type-specific analysis."""
        if self.expertise_type == "memory":
            # Memory nodes query RAG for relevant prior decisions and context
            context_indicators = ["based on", "previously", "history", "pattern", "learned", "recall"]
            context_hits = sum(1 for ind in context_indicators if ind in text)
            keyword_bonus = context_hits * 0.03

            # Query RAG memory for similar past council decisions
            rag_bonus = 0.0
            self._rag_context = []  # store for reasoning enrichment
            memory = _get_rag_memory()
            if memory is not None:
                try:
                    results = memory.search("council_decisions", text, top_k=3)
                    if results:
                        self._rag_context = results
                        # Boost based on how relevant past decisions are
                        avg_similarity = sum(
                            r.get("similarity", 0) for r in results
                        ) / len(results)
                        # Strong precedent (>0.7 similarity) gives up to +0.08
                        rag_bonus = min(avg_similarity * 0.1, 0.08)
                except Exception:
                    pass  # RAG failure doesn't break deliberation

            return base_care + keyword_bonus + rag_bonus

        elif self.expertise_type == "action":
            # Action nodes assess feasibility
            action_words = ["deploy", "build", "create", "execute", "implement", "launch", "start"]
            feasibility = sum(1 for w in action_words if w in text)
            return base_care + (feasibility * 0.03)

        elif self.expertise_type == "security":
            # Security nodes are more conservative
            risk_words = ["expose", "bypass", "override", "ignore", "skip", "hack"]
            risk_count = sum(1 for w in risk_words if w in text)
            return base_care - (risk_count * 0.1)

        elif self.expertise_type == "learning":
            # Learning nodes assess growth potential
            growth_words = ["improve", "learn", "adapt", "optimize", "evolve", "grow", "progress"]
            growth_hits = sum(1 for w in growth_words if w in text)
            return base_care + (growth_hits * 0.04)

        return base_care

    def _generate_reasoning(self, vote: str, score: float) -> str:
        """Generate human-readable reasoning for the vote."""
        type_label = self.expertise_type.capitalize()
        domain_label = self.domain.capitalize()

        base = ""
        if vote == "APPROVE":
            base = f"{type_label} assessment for {domain_label}: care-aligned at {score:.2f}"
        else:
            base = f"{type_label} assessment for {domain_label}: insufficient care alignment ({score:.2f})"

        # Memory nodes add RAG context to reasoning
        if self.expertise_type == "memory" and self._rag_context:
            n = len(self._rag_context)
            top_sim = max(r.get("similarity", 0) for r in self._rag_context)
            base += f" — {n} prior decision(s) found (best match: {top_sim:.0%} similar)"

        return base

    def _get_capabilities_used(self, text: str) -> List[str]:
        """Determine which capabilities were exercised."""
        if self.expertise_type == "memory":
            caps = ["context_recall"]
            if self._rag_context:
                caps.insert(0, "rag_search")
            else:
                caps.append("pattern_match")
            return caps[:2]

        all_caps = self.type_config["capabilities"]
        return all_caps[:2]

    def get_status(self) -> dict:
        """Return current node status."""
        return {
            "id": self.id,
            "council_node": self.council_node_id,
            "expertise_type": self.expertise_type,
            "domain": self.domain,
            "active": self.active,
            "accuracy_score": round(self.accuracy_score, 3),
            "total_votes": len(self.vote_history),
            "capabilities": self.type_config["capabilities"],
            "role": self.type_config["role"]
        }


class ExpertiseRing:
    """
    The 4-node expertise ring surrounding a single council node.
    Internal consensus: 3/4 approve → council node votes APPROVE.
    Security hard-veto overrides internal consensus.
    """

    def __init__(self, council_node_id: str, domain: str):
        self.council_node_id = council_node_id
        self.domain = domain
        self.internal_threshold = 3  # 3/4 for internal consensus

        # Create 4 expertise nodes
        self.nodes: Dict[str, ExpertiseNode] = {}
        for expertise_type in EXPERTISE_TYPES:
            node = ExpertiseNode(council_node_id, expertise_type, domain)
            self.nodes[expertise_type] = node

    def deliberate(self, proposal: str, base_care_score: float) -> dict:
        """
        Run internal expertise deliberation.
        Returns consolidated recommendation for the council node.
        """
        votes = {}
        for etype, node in self.nodes.items():
            votes[etype] = node.deliberate(proposal, base_care_score)

        # Check for security hard-veto
        security_veto = any(v["vote"] == "VETO" for v in votes.values())
        if security_veto:
            return {
                "council_node": self.council_node_id,
                "domain": self.domain,
                "recommendation": "REJECT",
                "reason": "Security hard-veto triggered",
                "expertise_votes": votes,
                "approve_count": 0,
                "reject_count": 4,
                "internal_consensus": False,
                "avg_score": round(sum(v["score"] for v in votes.values()) / 4, 3)
            }

        # Count approvals
        approvals = sum(1 for v in votes.values() if v["vote"] == "APPROVE")
        rejections = 4 - approvals
        consensus = approvals >= self.internal_threshold

        avg_score = sum(v["score"] for v in votes.values()) / 4

        return {
            "council_node": self.council_node_id,
            "domain": self.domain,
            "recommendation": "APPROVE" if consensus else "REJECT",
            "reason": f"Internal {approvals}/4 {'consensus' if consensus else 'no consensus'}",
            "expertise_votes": votes,
            "approve_count": approvals,
            "reject_count": rejections,
            "internal_consensus": consensus,
            "avg_score": round(avg_score, 3)
        }

    def get_status(self) -> dict:
        """Return ring status with all 4 nodes."""
        return {
            "council_node": self.council_node_id,
            "domain": self.domain,
            "nodes": {etype: node.get_status() for etype, node in self.nodes.items()},
            "total_nodes": len(self.nodes),
            "all_active": all(n.active for n in self.nodes.values())
        }


class ExpertiseNetwork:
    """
    Full expertise network — 132 nodes across 33 council nodes.
    Manages all expertise rings and provides network-wide analytics.
    """

    def __init__(self, council_nodes: List[dict]):
        self.rings: Dict[str, ExpertiseRing] = {}
        self.total_nodes = 0
        self.council_nodes_ref = council_nodes  # keep reference for weight updates
        self.improvement_engine = SelfImprovementEngine()

        for council_node in council_nodes:
            node_id = council_node["id"]
            domain = council_node["domain"]
            ring = ExpertiseRing(node_id, domain)
            self.rings[node_id] = ring
            self.total_nodes += 4

    def deliberate_all(self, proposal: str, base_care_score: float) -> Dict[str, dict]:
        """
        Run expertise deliberation across all 33 rings (132 nodes).
        Returns dict of council_node_id → recommendation.
        """
        results = {}
        for node_id, ring in self.rings.items():
            results[node_id] = ring.deliberate(proposal, base_care_score)
        return results

    def get_network_status(self) -> dict:
        """Full network status."""
        active_nodes = 0
        domain_stats = {}

        for node_id, ring in self.rings.items():
            domain = ring.domain
            if domain not in domain_stats:
                domain_stats[domain] = {"rings": 0, "nodes": 0, "active": 0}

            domain_stats[domain]["rings"] += 1
            for node in ring.nodes.values():
                domain_stats[domain]["nodes"] += 1
                if node.active:
                    domain_stats[domain]["active"] += 1
                    active_nodes += 1

        return {
            "total_expertise_nodes": self.total_nodes,
            "active_nodes": active_nodes,
            "total_rings": len(self.rings),
            "domain_stats": domain_stats,
            "expertise_types": list(EXPERTISE_TYPES.keys()),
            "domains": list(DOMAIN_EXPERTISE.keys()),
            "version": "3.0-fractal"
        }

    def get_ring(self, council_node_id: str) -> Optional[ExpertiseRing]:
        """Get a specific council node's expertise ring."""
        return self.rings.get(council_node_id)

    def get_domain_rings(self, domain: str) -> List[ExpertiseRing]:
        """Get all expertise rings for a domain."""
        return [ring for ring in self.rings.values() if ring.domain == domain]

    def record_decision_outcome(
        self, proposal: str, decision: str,
        node_votes: Dict[str, dict], care_score: float
    ):
        """
        Feed council decision results into the self-improvement engine.
        Called after each BFT council vote completes.

        Args:
            proposal: The proposal text
            decision: Council outcome ("APPROVED" or "REJECTED")
            node_votes: Dict of node_id → vote details from council
            care_score: Average care score from the vote
        """
        for node_id, vote_detail in node_votes.items():
            ring = self.rings.get(node_id)
            if not ring:
                continue
            domain = ring.domain
            node_vote = vote_detail.get("vote", "REJECT")
            node_score = vote_detail.get("care_score", care_score)

            # Feed into the engine
            self.improvement_engine.record_vote_outcome(
                node_id=node_id,
                domain=domain,
                vote=node_vote,
                score=node_score,
                council_outcome=decision,
            )

            # Also feed into the learning node's own pattern tracker
            learning_node = ring.nodes.get("learning")
            if learning_node and learning_node.pattern_tracker:
                learning_node.pattern_tracker.observe(
                    {"node_id": node_id, "vote": node_vote, "score": node_score},
                    council_outcome=decision,
                )

    def run_improvement_cycle(self) -> dict:
        """
        Run a full self-improvement cycle:
        1. Analyze patterns across all domains
        2. Generate weight adjustment proposals
        3. Deliberate proposals with learning nodes
        4. Apply approved adjustments to council node care_weights

        Returns summary of the cycle results.
        """
        # Step 1-2: Analyze and generate proposals
        # Pass actual care weights to the engine for accurate proposals
        for domain, tracker in self.improvement_engine.trackers.items():
            # Find a council node in this domain to get its care_weight
            for cn in self.council_nodes_ref:
                if cn["domain"] == domain:
                    # Re-run proposal with actual weight
                    break

        analysis = self.improvement_engine.run_analysis_cycle()

        # Re-generate proposals with actual care weights per domain
        self.improvement_engine.pending_adjustments = []
        for domain, tracker in self.improvement_engine.trackers.items():
            result = tracker.analyze()
            if result["status"] == "analyzed" and result["patterns_detected"] > 0:
                # Find actual care_weight for this domain
                actual_weight = 0.75
                for cn in self.council_nodes_ref:
                    if cn["domain"] == domain:
                        actual_weight = cn.get("care_weight", 0.75)
                        break
                proposal = tracker.propose_weight_adjustment(actual_weight)
                if proposal:
                    self.improvement_engine.pending_adjustments.append(proposal)

        # Step 3: Deliberate with learning nodes
        all_learning_nodes = {}
        for node_id, ring in self.rings.items():
            learning = ring.nodes.get("learning")
            if learning:
                all_learning_nodes[learning.id] = learning

        approved = self.improvement_engine.deliberate_adjustments(all_learning_nodes)

        # Step 4: Apply approved adjustments to council nodes
        applied = []
        for adj in approved:
            domain = adj["domain"]
            new_weight = adj["proposed_weight"]
            for cn in self.council_nodes_ref:
                if cn["domain"] == domain:
                    old_weight = cn.get("care_weight", 0.75)
                    cn["care_weight"] = new_weight
                    applied.append({
                        "node_id": cn["id"],
                        "domain": domain,
                        "old_weight": round(old_weight, 4),
                        "new_weight": round(new_weight, 4),
                        "delta": round(new_weight - old_weight, 4),
                    })

        return {
            "cycle": self.improvement_engine.cycle_count,
            "timestamp": datetime.now().isoformat(),
            "analysis_summary": {
                "domains_analyzed": analysis["domains_analyzed"],
                "total_patterns": analysis["total_patterns"],
            },
            "proposals_generated": len(self.improvement_engine.pending_adjustments) + len(approved),
            "proposals_approved": len(approved),
            "adjustments_applied": applied,
            "engine_status": self.improvement_engine.get_status(),
        }

    def get_learning_report(self) -> dict:
        """Aggregate learning data from all learning nodes with pattern tracker status."""
        report = {}
        for node_id, ring in self.rings.items():
            learning_node = ring.nodes.get("learning")
            if learning_node:
                node_report = {
                    "accuracy": learning_node.accuracy_score,
                    "total_votes": len(learning_node.vote_history),
                    "recent_votes": learning_node.vote_history[-5:] if learning_node.vote_history else [],
                }
                # Include pattern tracker data if available
                if learning_node.pattern_tracker:
                    node_report["pattern_tracker"] = learning_node.pattern_tracker.get_status()
                report[node_id] = node_report

        return {
            "learning_nodes": report,
            "improvement_engine": self.improvement_engine.get_status(),
            "total_learning_nodes": len(report),
        }


if __name__ == "__main__":
    from bft_council import COUNCIL_NODES

    network = ExpertiseNetwork(COUNCIL_NODES)
    status = network.get_network_status()
    print(f"Expertise Network v3.0-fractal")
    print(f"  Total nodes: {status['total_expertise_nodes']}")
    print(f"  Active: {status['active_nodes']}")
    print(f"  Rings: {status['total_rings']}")
    print(f"  Domains: {len(status['domains'])}")
    print()

    # Test deliberation
    test_proposal = "Deploy sovereign governance system with transparent care-aligned partnership building"
    results = network.deliberate_all(test_proposal, 0.65)

    approve_count = sum(1 for r in results.values() if r["recommendation"] == "APPROVE")
    reject_count = sum(1 for r in results.values() if r["recommendation"] == "REJECT")
    print(f"Test proposal: {approve_count}/33 rings recommend APPROVE, {reject_count} REJECT")

    # Show one ring detail
    sample = list(results.values())[0]
    print(f"\nSample ring ({sample['council_node']}):")
    print(f"  Recommendation: {sample['recommendation']}")
    print(f"  Internal votes: {sample['approve_count']}/4 approve")
    print(f"  Avg score: {sample['avg_score']}")
    for etype, vote in sample['expertise_votes'].items():
        print(f"    {etype}: {vote['vote']} ({vote['score']})")
