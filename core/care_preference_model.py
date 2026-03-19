"""
Care Preference Model (CPM) — Stage 1: Rule-Based Preference Predictor

Source: MEOK Technical Architecture Blueprint + Maternal Ethics OS Document

Three-stage CPM roadmap:
  Stage 1 (NOW):  Rule-based, entity signals → care style recommendation.
                  No training data needed. Ships with MEOK MVP.
  Stage 2 (Q2):   RLHCF with care ethicists — 6 months of interaction data.
                  Asymmetric loss: harm penalised 3× more than inefficiency.
  Stage 3 (Q3+):  Cultural Adaptive CPM (CA-CPM) — two-tier constraint system.
                  Universal constraints + community-developed cultural modules.

CPM objective (Stage 2+):
  score = α·utility + β·harm_prevented + γ·repair_quality + δ·continuity
  where α=0.3, β=0.4, γ=0.2, δ=0.1

CPM output dimensions:
  care_style:   challenger / explorer / supporter / guardian
  intensity:    gentle / medium / high
  proactivity:  low / medium / high
  empathy_mode: validating / reflective / directive
"""

from __future__ import annotations

import logging
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)


# ── Care Style Definitions ────────────────────────────────────────────────────

CARE_STYLES: Dict[str, Dict[str, str]] = {
    "challenger": {
        "description": "Pushes toward growth, accountability, high performance",
        "best_for": "High agency users who want direct feedback and challenge",
        "risk": "Can feel harsh if care_alignment is low — shift to supporter",
    },
    "explorer": {
        "description": "Curious, open-ended, discovery-oriented",
        "best_for": "Curious users who want to learn and discover independently",
        "risk": "Can feel aimless without structure — add structure when mood is low",
    },
    "supporter": {
        "description": "Warm, affirming, holds space, prioritises emotional safety",
        "best_for": "Users in distress, low mood, or low care_alignment",
        "risk": "Can feel sycophantic if overdone — balance with honest feedback",
    },
    "guardian": {
        "description": "Protective, vigilant, proactive in flagging risks",
        "best_for": "Users in high-stakes situations, crisis-adjacent contexts",
        "risk": "Can feel paternalistic — dial back proactivity when user is stable",
    },
}

# Entity dominant_trait → base care recommendation
TRAIT_TO_CARE: Dict[str, Dict[str, str]] = {
    "warrior": {
        "care_style": "challenger",
        "intensity": "high",
        "proactivity": "medium",
        "empathy_mode": "directive",
    },
    "scholar": {
        "care_style": "explorer",
        "intensity": "medium",
        "proactivity": "high",
        "empathy_mode": "reflective",
    },
    "guardian": {
        "care_style": "guardian",
        "intensity": "high",
        "proactivity": "high",
        "empathy_mode": "validating",
    },
    "creator": {
        "care_style": "explorer",
        "intensity": "medium",
        "proactivity": "medium",
        "empathy_mode": "reflective",
    },
    "explorer": {
        "care_style": "explorer",
        "intensity": "low",
        "proactivity": "high",
        "empathy_mode": "reflective",
    },
    "diplomat": {
        "care_style": "supporter",
        "intensity": "medium",
        "proactivity": "medium",
        "empathy_mode": "validating",
    },
    # Default fallback
    "default": {
        "care_style": "supporter",
        "intensity": "medium",
        "proactivity": "medium",
        "empathy_mode": "validating",
    },
}


@dataclass
class CareRecommendation:
    """Output of CPM.recommend_care_style()."""
    care_style: str          # challenger / explorer / supporter / guardian
    intensity: str           # gentle / medium / high
    proactivity: str         # low / medium / high
    empathy_mode: str        # validating / reflective / directive
    basis: str               # Human-readable explanation of why this was chosen
    adjustments_applied: List[str] = field(default_factory=list)
    style_description: str = ""
    confidence: float = 0.7  # 0-1; lower when entity signals are weak

    def to_dict(self) -> Dict[str, Any]:
        return {
            "care_style": self.care_style,
            "intensity": self.intensity,
            "proactivity": self.proactivity,
            "empathy_mode": self.empathy_mode,
            "basis": self.basis,
            "adjustments_applied": self.adjustments_applied,
            "style_description": self.style_description,
            "confidence": round(self.confidence, 2),
        }


class CarePreferenceModel:
    """
    Stage 1 CPM: Rule-based preference predictor using entity signals.

    Input signals (from MEOKEntity and interaction context):
      - dominant_trait: warrior/scholar/guardian/creator/explorer/diplomat
      - care_alignment: 0-1 EMA of care quality (< 0.5 = needs more active care)
      - hatch_level: 0-4 (newer entities get more supportive care)
      - recent_mood: 0-1 proxy (from emotional_score / 100 or last interaction valence)
      - recent_emotional_valence: -1 to 1 (from VAD-tagged memory)
      - interaction_count: total interactions (low count → more scaffolding)

    Future (Stage 2): RLHCF training with care ethicists.
    Future (Stage 3): CA-CPM cultural modules loaded dynamically.
    """

    def recommend_care_style(
        self,
        dominant_trait: str = "default",
        care_alignment: float = 0.5,
        hatch_level: int = 1,
        recent_mood: float = 0.5,
        recent_emotional_valence: float = 0.0,
        interaction_count: int = 0,
    ) -> CareRecommendation:
        """
        Recommend a care style based on entity signals.

        Args:
            dominant_trait:           Entity's dominant personality trait
            care_alignment:           0-1 EMA care alignment score
            hatch_level:              Entity maturity level 0-4
            recent_mood:              0-1 mood proxy (0=very low, 1=very high)
            recent_emotional_valence: -1 to 1 from VAD memory
            interaction_count:        Total interaction count (new users get scaffolding)

        Returns:
            CareRecommendation with care_style, intensity, proactivity, empathy_mode
        """
        adjustments: List[str] = []

        # 1. Base recommendation from dominant trait
        base = dict(TRAIT_TO_CARE.get(dominant_trait, TRAIT_TO_CARE["default"]))
        confidence = 0.8 if dominant_trait in TRAIT_TO_CARE else 0.5

        # 2. Care alignment adjustment (low alignment → more active support)
        if care_alignment < 0.4:
            base["care_style"] = "supporter"
            base["proactivity"] = "high"
            base["empathy_mode"] = "validating"
            adjustments.append(f"care_alignment={care_alignment:.2f}<0.4 → shifted to supporter/high-proactivity")
            confidence = min(confidence, 0.9)
        elif care_alignment < 0.5:
            base["proactivity"] = "high"
            adjustments.append(f"care_alignment={care_alignment:.2f}<0.5 → increased proactivity to high")

        # 3. Recent mood adjustment (low mood → gentler care)
        if recent_mood < 0.3 or recent_emotional_valence < -0.4:
            base["care_style"] = "supporter"
            base["intensity"] = "gentle"
            base["empathy_mode"] = "validating"
            adjustments.append(
                f"low_mood (mood={recent_mood:.2f}, valence={recent_emotional_valence:.2f}) "
                f"→ gentle supporter mode"
            )
        elif recent_mood < 0.45:
            base["intensity"] = "gentle" if base["intensity"] == "high" else base["intensity"]
            adjustments.append(f"moderately_low_mood={recent_mood:.2f} → softened intensity")

        # 4. New entity scaffolding (hatch_level 0-1 or < 10 interactions)
        if hatch_level <= 1 or interaction_count < 10:
            base["proactivity"] = "high"
            base["empathy_mode"] = "validating"
            adjustments.append(
                f"new_entity (hatch={hatch_level}, interactions={interaction_count}) "
                f"→ high proactivity scaffold"
            )
            confidence = min(confidence, 0.6)  # Less confident with new users

        # 5. Challenger safeguard — don't challenge users in distress
        if base["care_style"] == "challenger" and (recent_mood < 0.4 or care_alignment < 0.5):
            base["care_style"] = "explorer"
            adjustments.append("challenger→explorer: not appropriate when user shows distress signals")

        style_info = CARE_STYLES.get(base["care_style"], {})

        basis_parts = [
            f"trait={dominant_trait}",
            f"care_alignment={care_alignment:.2f}",
            f"mood={recent_mood:.2f}",
            f"hatch_level={hatch_level}",
            f"interactions={interaction_count}",
        ]

        return CareRecommendation(
            care_style=base["care_style"],
            intensity=base["intensity"],
            proactivity=base["proactivity"],
            empathy_mode=base["empathy_mode"],
            basis=", ".join(basis_parts),
            adjustments_applied=adjustments,
            style_description=style_info.get("description", ""),
            confidence=confidence,
        )

    def recommend_from_entity(self, entity: Any, recent_emotional_valence: float = 0.0) -> CareRecommendation:
        """
        Convenience method: extract signals directly from a MEOKEntity object.

        Compatible with entity objects that have:
          .dominant_trait, .care_alignment, .hatch_level, .interactions_count
        """
        dominant_trait = getattr(entity, "dominant_trait", "default") or "default"
        care_alignment = float(getattr(entity, "care_alignment", 0.5))
        hatch_level = int(getattr(entity, "hatch_level", 1))
        interaction_count = int(getattr(entity, "interactions_count", 0))

        # Derive recent_mood from emotional_score if available (emotional_score is 0-100)
        emotional_score = getattr(entity, "emotional_score", None)
        if emotional_score is not None:
            recent_mood = float(emotional_score) / 100.0
        else:
            recent_mood = 0.5

        return self.recommend_care_style(
            dominant_trait=dominant_trait,
            care_alignment=care_alignment,
            hatch_level=hatch_level,
            recent_mood=recent_mood,
            recent_emotional_valence=recent_emotional_valence,
            interaction_count=interaction_count,
        )

    def get_care_style_info(self, style: str) -> Dict[str, str]:
        """Return description and risk notes for a care style."""
        return CARE_STYLES.get(style, {"description": "Unknown style", "best_for": "", "risk": ""})

    def list_available_styles(self) -> List[str]:
        """Return all available care styles."""
        return list(CARE_STYLES.keys())


# ── Module singleton ──────────────────────────────────────────────────────────

_cpm: Optional[CarePreferenceModel] = None


def get_cpm() -> CarePreferenceModel:
    global _cpm
    if _cpm is None:
        _cpm = CarePreferenceModel()
    return _cpm
