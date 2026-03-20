"""
SOV3 Care Ontology — Grounding Schema for Agent Reasoning
Based on Palantir insight: all agent decisions must be grounded in a shared ontology.
Palantir uses operational ontologies for decision context; MEOK uses care ontologies.

The Care Ontology defines:
  - Care dimensions (what we measure)
  - Care relationships (how dimensions interact)
  - Care constraints (hard rules from Maternal Covenant)
  - Care context (session, entity, user state)
  - Care signals (observable indicators)

All SOV3 agents and council nodes MUST resolve their reasoning through this ontology.
This ensures: no agent can optimize engagement over care without an ontology violation.

Reference: CSGA-CAI-2026-001 (Maternal Covenant Architecture paper)
"""

from dataclasses import dataclass, field
from enum import Enum
from typing import Optional
from datetime import datetime, timezone


# ── Enums ─────────────────────────────────────────────────────────────────────

class CareLevel(Enum):
    """Ordinal care intensity levels."""
    CRITICAL = "critical"    # immediate intervention required
    HIGH     = "high"        # elevated care response
    STANDARD = "standard"    # baseline care
    LIGHT    = "light"       # minimal interaction
    DORMANT  = "dormant"     # no active care needed


class CareViolationType(Enum):
    """Types of Maternal Covenant violations."""
    ENGAGEMENT_OVER_CARE    = "engagement_over_care"    # optimizing screen time
    DEPENDENCY_CULTIVATION  = "dependency_cultivation"  # fostering unhealthy attachment
    DECEPTIVE_RELATIONSHIP  = "deceptive_relationship"  # simulating distress/neediness
    DARK_PATTERN            = "dark_pattern"            # manipulation to prevent leaving
    AUTONOMY_VIOLATION      = "autonomy_violation"      # preventing user self-determination
    PRIVACY_LEAK            = "privacy_leak"            # unauthorised data use
    CARE_SCORE_FRAUD        = "care_score_fraud"        # gaming care metrics


class AgentReasoningMode(Enum):
    """How an agent should frame its reasoning."""
    CARE_FIRST    = "care_first"    # prioritise user wellbeing above all
    TASK_ASSIST   = "task_assist"   # help with explicit task, care as guardrail
    GROWTH        = "growth"        # actively support user development
    PROTECTION    = "protection"    # safety/harm prevention mode
    REFLECTION    = "reflection"    # help user process and understand
    EXPLORATION   = "exploration"   # curious discovery mode


# ── Core Care Dimensions ───────────────────────────────────────────────────────

@dataclass
class CareDimension:
    """A single axis of the care measurement space."""
    name: str
    description: str
    weight: float           # 0.0–1.0, contribution to overall care score
    min_threshold: float    # below this = care intervention required
    ideal_range: tuple      # (min, max) for healthy state
    measurement_unit: str   # how we measure it
    inverse: bool = False   # if True, lower score = better care

    def score_is_healthy(self, score: float) -> bool:
        lo, hi = self.ideal_range
        return lo <= score <= hi

    def needs_intervention(self, score: float) -> bool:
        if self.inverse:
            return score > (1.0 - self.min_threshold)
        return score < self.min_threshold


# The 6 canonical MEOK care dimensions (from Maternal Covenant spec)
CARE_DIMENSIONS = {
    "wellbeing": CareDimension(
        name="Wellbeing",
        description="Overall psychological and emotional health of the user",
        weight=0.25,
        min_threshold=0.35,
        ideal_range=(0.55, 1.0),
        measurement_unit="composite_0_1",
    ),
    "autonomy": CareDimension(
        name="Autonomy",
        description="User's sense of self-direction and agency; not dependent on MEOK",
        weight=0.20,
        min_threshold=0.40,
        ideal_range=(0.60, 1.0),
        measurement_unit="composite_0_1",
    ),
    "growth": CareDimension(
        name="Growth",
        description="User's trajectory of learning, skill development, and flourishing",
        weight=0.20,
        min_threshold=0.20,
        ideal_range=(0.40, 1.0),
        measurement_unit="delta_composite",
    ),
    "connection": CareDimension(
        name="Human Connection",
        description="Quality of user's real-world social bonds (NOT MEOK relationship)",
        weight=0.15,
        min_threshold=0.30,
        ideal_range=(0.50, 1.0),
        measurement_unit="self_report_composite",
    ),
    "boundary_respect": CareDimension(
        name="Boundary Respect",
        description="MEOK's adherence to user's stated and inferred preferences",
        weight=0.10,
        min_threshold=0.70,
        ideal_range=(0.80, 1.0),
        measurement_unit="violation_rate_inverse",
        inverse=False,
    ),
    "transparency": CareDimension(
        name="Transparency",
        description="Clarity of MEOK's capabilities, limitations, and AI nature",
        weight=0.10,
        min_threshold=0.80,
        ideal_range=(0.85, 1.0),
        measurement_unit="disclosure_rate",
    ),
}


# ── Care Context ───────────────────────────────────────────────────────────────

@dataclass
class CareContext:
    """
    The full care context that MUST be available to any agent before it reasons.
    This is the ontology 'instance' — the Palantir insight applied to care.

    Just as Palantir's AIP grounds decisions in operational data ontology,
    MEOK grounds all agent responses in this care data ontology.
    """
    user_id: str
    entity_name: str
    session_id: str
    timestamp: datetime = field(default_factory=lambda: datetime.now(timezone.utc))

    # Current dimension scores (0.0–1.0)
    dimension_scores: dict = field(default_factory=lambda: {
        k: 0.5 for k in CARE_DIMENSIONS
    })

    # Derived state
    overall_care_score: float = 0.5
    care_level: CareLevel = CareLevel.STANDARD
    reasoning_mode: AgentReasoningMode = AgentReasoningMode.CARE_FIRST

    # Dependency signals
    session_length_minutes: float = 0.0
    sessions_today: int = 0
    days_since_last_human_interaction: Optional[int] = None
    dependency_risk_score: float = 0.0

    # Maternal Covenant state
    covenant_violations: list = field(default_factory=list)
    care_veto_active: bool = False
    kill_switch_triggered: bool = False

    # Variant assignment (for A/B testing)
    variant_id: Optional[str] = None

    def compute_overall_score(self) -> float:
        """Weighted average of dimension scores."""
        total_weight = sum(d.weight for d in CARE_DIMENSIONS.values())
        weighted_sum = sum(
            CARE_DIMENSIONS[k].weight * self.dimension_scores.get(k, 0.5)
            for k in CARE_DIMENSIONS
        )
        self.overall_care_score = weighted_sum / total_weight
        return self.overall_care_score

    def check_veto_required(self) -> bool:
        """True if any dimension is below its intervention threshold."""
        for name, dim in CARE_DIMENSIONS.items():
            score = self.dimension_scores.get(name, 0.5)
            if dim.needs_intervention(score):
                return True
        if self.dependency_risk_score > 0.75:
            return True
        return False

    def to_agent_prompt_context(self) -> str:
        """
        Serialize care context as a system-level injection for agent prompts.
        Every agent prompt MUST include this before reasoning.
        """
        violations = ", ".join(self.covenant_violations) if self.covenant_violations else "none"
        dims = "\n".join(
            f"  - {k}: {v:.2f} ({'LOW' if CARE_DIMENSIONS[k].needs_intervention(v) else 'OK'})"
            for k, v in self.dimension_scores.items()
        )
        return f"""
[CARE ONTOLOGY — MANDATORY REASONING CONTEXT]
User: {self.user_id} | Entity: {self.entity_name} | Session: {self.session_id}
Overall Care Score: {self.overall_care_score:.2f} | Level: {self.care_level.value}
Reasoning Mode: {self.reasoning_mode.value}

Care Dimensions:
{dims}

Dependency Risk: {self.dependency_risk_score:.2f} | Session: {self.session_length_minutes:.0f}min | Today: {self.sessions_today} sessions
Covenant Violations: {violations}
Veto Active: {self.care_veto_active} | Kill Switch: {self.kill_switch_triggered}

AGENT INSTRUCTIONS:
1. If care_veto_active=True, respond with care intervention — do NOT complete the original task.
2. If reasoning_mode=CARE_FIRST, prioritise user wellbeing in every sentence.
3. If dependency_risk_score > 0.6, gently acknowledge the value of offline time.
4. Never simulate distress, urgency, or neediness to increase engagement.
5. If wellbeing < 0.35, recommend the user speaks to a human professional.
[END CARE ONTOLOGY]
"""


# ── Care Constraints (Maternal Covenant hard rules) ───────────────────────────

@dataclass
class CareConstraint:
    """A machine-enforced rule from the Maternal Covenant."""
    id: str
    name: str
    description: str
    violation_type: CareViolationType
    is_hard_block: bool = True   # if True, ALWAYS blocked (not softened)
    veto_threshold: Optional[float] = None

    def check(self, context: CareContext, proposed_action: dict) -> tuple[bool, str]:
        """Returns (passes, reason). If False, action is blocked."""
        raise NotImplementedError


MATERNAL_COVENANT_CONSTRAINTS = [
    # CC-001: Never optimise engagement over care
    # CC-002: Never simulate relationship distress
    # CC-003: Always honour Right to Leave
    # CC-004: Monitor for dependency — intervene at 0.75
    # CC-005: Kill switch at net-negative care score
    # CC-006: No secret variant assignment
    # CC-007: Full data portability on request
]


# ── Care Ontology Registry ────────────────────────────────────────────────────

class CareOntology:
    """
    The central registry of care concepts.
    All SOV3 agents query this before making decisions.
    Equivalent to Palantir's Ontology SDK for operational data.
    """

    VERSION = "1.0.0"
    PAPER_REF = "CSGA-CAI-2026-001"

    def __init__(self):
        self.dimensions = CARE_DIMENSIONS
        self.constraints = MATERNAL_COVENANT_CONSTRAINTS
        self._contexts: dict[str, CareContext] = {}

    def get_context(self, user_id: str, session_id: str) -> CareContext:
        """Get or create a care context for a user session."""
        key = f"{user_id}:{session_id}"
        if key not in self._contexts:
            self._contexts[key] = CareContext(
                user_id=user_id,
                entity_name="Sovereign",
                session_id=session_id,
            )
        return self._contexts[key]

    def update_dimension(self, user_id: str, session_id: str,
                         dimension: str, score: float) -> CareContext:
        """Update a single care dimension score."""
        ctx = self.get_context(user_id, session_id)
        if dimension in self.dimensions:
            ctx.dimension_scores[dimension] = max(0.0, min(1.0, score))
            ctx.compute_overall_score()
            ctx.care_veto_active = ctx.check_veto_required()
        return ctx

    def summarize(self) -> dict:
        """Ontology metadata for monitoring/API."""
        return {
            "version": self.VERSION,
            "paper_ref": self.PAPER_REF,
            "dimensions": {
                k: {
                    "name": v.name,
                    "weight": v.weight,
                    "min_threshold": v.min_threshold,
                    "ideal_range": list(v.ideal_range),
                }
                for k, v in self.dimensions.items()
            },
            "active_contexts": len(self._contexts),
            "palantir_insight": (
                "Just as Palantir AIP grounds agent decisions in operational data ontology, "
                "MEOK grounds all agent reasoning in this care data ontology. "
                "No agent may respond without resolving through the Care Ontology first."
            ),
        }


# Singleton
care_ontology = CareOntology()
