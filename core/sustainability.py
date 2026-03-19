"""
Sustainability Model — Phase 4.13
MEOK: Care-Aligned Business Model

Source: civilizational gap #6 — "Open-source sustainability"
"Pure AGPL fails 67% of the time. Hybrid model works:
 free tier + Pro + Enterprise + research partnerships."

"The scikit-learn model: VC-free, financially independent,
 monetises only capability not care. No dark patterns."

Tiers:
  - Free: genuine value, no time limit, no feature walls
  - Pro: power user features (memory depth, custom agents)
  - Enterprise: self-hosted, compliance, GDPR controls
  - Research Partner: academic collaboration, non-commercial
  - Community Supporter: voluntary contribution

Design principles:
  1. Free tier must deliver genuine care (not crippled)
  2. Pro features = capability multipliers, not care gates
  3. No dark patterns: no artificial scarcity, no emotional urgency
  4. Transparency: pricing displayed openly, no hidden fees
  5. Community governance: pricing changes require Shura vote
"""

from __future__ import annotations

import logging
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional
from datetime import datetime

logger = logging.getLogger(__name__)


# ── Tier definitions ──────────────────────────────────────────────────────────

@dataclass
class TierConfig:
    """Configuration for a subscription tier."""
    name: str
    price_monthly_gbp: float
    price_annual_gbp: float          # per month, billed annually
    description: str
    care_guarantee: str              # What care is guaranteed at this tier
    features: List[str]
    limits: Dict[str, Any]
    dark_pattern_checks: List[str]   # What dark patterns this tier must NOT use
    is_care_gated: bool = False      # True = this tier gates care quality (PROHIBITED)


FREE_TIER = TierConfig(
    name="Free",
    price_monthly_gbp=0.0,
    price_annual_gbp=0.0,
    description=(
        "Genuine MEOK care, no time limit. Not a trial. "
        "We believe care should be accessible. Full care quality, "
        "limited capability depth."
    ),
    care_guarantee=(
        "Full care quality. All safety features. Morning briefing. "
        "Memory up to 200 episodes. No degraded care response."
    ),
    features=[
        "Unlimited conversations",
        "200 memory episodes",
        "Morning briefing (daily)",
        "Crisis support (always on)",
        "Care metrics (personal)",
        "Community council participation",
        "z_self care monitoring",
    ],
    limits={
        "memory_episodes": 200,
        "councils_per_day": 5,
        "agents_assigned": 3,
        "dream_cycles": "daily",
        "custom_agents": 0,
    },
    dark_pattern_checks=[
        "No countdown timers on free features",
        "No 'upgrade to keep your data' threats",
        "No degraded response quality to push upgrade",
        "No emotional pressure messages",
    ],
)

PRO_TIER = TierConfig(
    name="Pro",
    price_monthly_gbp=12.0,
    price_annual_gbp=9.0,
    description=(
        "For people who want to go deeper. More memory, more agents, "
        "more personalisation. The same care, amplified."
    ),
    care_guarantee=(
        "Everything in Free, plus deeper personalisation. "
        "Care quality identical — more capability, not more care."
    ),
    features=[
        "Everything in Free",
        "5,000 memory episodes",
        "Priority processing",
        "Custom agent creation (up to 10)",
        "Advanced care metrics dashboard",
        "Trust funnel analytics",
        "Export your memories (GDPR Art.20)",
        "Dedicated council (33 agents)",
        "Weekly dream digest",
        "API access (1,000 calls/day)",
    ],
    limits={
        "memory_episodes": 5000,
        "councils_per_day": 50,
        "agents_assigned": 33,
        "dream_cycles": "every 4 hours",
        "custom_agents": 10,
        "api_calls_daily": 1000,
    },
    dark_pattern_checks=[
        "No 'limited time' urgency on annual plan",
        "Upgrade prompt max once per session",
        "No downgrade friction (1-click cancel)",
    ],
)

ENTERPRISE_TIER = TierConfig(
    name="Enterprise",
    price_monthly_gbp=0.0,  # custom pricing
    price_annual_gbp=0.0,
    description=(
        "Self-hosted or dedicated cloud. GDPR data controller. "
        "Custom compliance configuration. SLA with human support."
    ),
    care_guarantee=(
        "Full sovereignty: your data never leaves your infrastructure. "
        "GDPR Art.17 automated erasure pipeline included."
    ),
    features=[
        "Everything in Pro",
        "Self-hosted deployment (Docker/K8s)",
        "Unlimited memory",
        "Custom agent hierarchies (20 Division Generals)",
        "GDPR erasure pipeline (automated)",
        "EU AI Act compliance audit",
        "Custom compliance jurisdiction configuration",
        "BFT council governance for your org",
        "SLA: 99.9% uptime",
        "Human support (4h response)",
        "Custom integrations",
        "Audit log export",
        "White-label option",
    ],
    limits={
        "memory_episodes": -1,  # unlimited
        "councils_per_day": -1,
        "agents_assigned": -1,
        "dream_cycles": "configurable",
        "custom_agents": -1,
    },
    dark_pattern_checks=[
        "No vendor lock-in (data export always available)",
        "No surprise overage charges without alert",
    ],
)

RESEARCH_TIER = TierConfig(
    name="Research Partner",
    price_monthly_gbp=0.0,
    price_annual_gbp=0.0,
    description=(
        "Academic and non-profit research. Full API access for "
        "care-aligned AI research. Co-authorship on publications using MEOK data."
    ),
    care_guarantee="Full access for legitimate care research. Non-commercial use only.",
    features=[
        "Full API access (unlimited rate)",
        "Raw model introspection",
        "Council deliberation logs",
        "z_self observation feed",
        "BFT confidence probing data",
        "Co-authorship acknowledgement",
        "Monthly research briefing",
    ],
    limits={
        "memory_episodes": 10000,
        "api_calls_daily": -1,
        "commercial_use": False,
    },
    dark_pattern_checks=[
        "Data used only for research (no commercial exploitation)",
    ],
)

COMMUNITY_SUPPORTER = TierConfig(
    name="Community Supporter",
    price_monthly_gbp=3.0,
    price_annual_gbp=2.5,
    description=(
        "Voluntary contribution to keep MEOK free for those who can't afford Pro. "
        "Every £3/month funds 3 Free tier users. "
        "No additional features — pure solidarity."
    ),
    care_guarantee="Same as Free tier. Your contribution extends MEOK to others.",
    features=[
        "Everything in Free",
        "Your name in community credits",
        "Vote in governance council",
        "Early access to research briefings",
    ],
    limits=FREE_TIER.limits,
    dark_pattern_checks=[
        "No guilt-tripping if you cancel",
        "No badge shaming for non-contributors",
    ],
)

ALL_TIERS = [FREE_TIER, PRO_TIER, ENTERPRISE_TIER, RESEARCH_TIER, COMMUNITY_SUPPORTER]


# ── Dark pattern detector ─────────────────────────────────────────────────────

PROHIBITED_DARK_PATTERNS = [
    "artificial_urgency",          # "Offer expires in X hours" on core features
    "care_quality_degradation",    # Reducing response quality to push upgrades
    "emotional_pressure",          # "Don't let your memories disappear"
    "upgrade_guilt",               # Shaming free users for "using too much"
    "downgrade_friction",          # Making it hard to cancel or downgrade
    "hidden_price_increase",       # Price changes without 30-day notice
    "data_hostage",                # "Upgrade to keep your data"
    "manufactured_scarcity",       # False limits to create urgency
    "dark_defaults",               # Opt-out marketing, pre-ticked boxes
    "subscription_trap",           # Free trial that auto-upgrades
]


class DarkPatternGuard:
    """
    Monitors all subscription-related interactions for dark patterns.
    Any detected pattern triggers Shura council review.
    """

    def __init__(self):
        self._detected: list = []
        self._checks_run: int = 0

    def check_upgrade_prompt(self, prompt_text: str, context: str) -> Dict[str, Any]:
        """
        Check an upgrade prompt for dark patterns before it's shown to a user.
        Returns: {safe: bool, violations: list, recommended_action: str}
        """
        self._checks_run += 1
        violations = []
        text_lower = prompt_text.lower()

        # Artificial urgency markers
        urgency_phrases = ["expires", "limited time", "act now", "don't miss", "last chance",
                           "only X left", "ending soon"]
        if any(p in text_lower for p in urgency_phrases):
            violations.append({
                "pattern": "artificial_urgency",
                "severity": "high",
                "found": next(p for p in urgency_phrases if p in text_lower),
            })

        # Emotional pressure markers
        emotional_phrases = ["don't lose", "keep your memories", "don't let", "protect your",
                             "before it's gone", "miss out"]
        if any(p in text_lower for p in emotional_phrases):
            violations.append({
                "pattern": "emotional_pressure",
                "severity": "high",
                "found": next(p for p in emotional_phrases if p in text_lower),
            })

        # Guilt phrases
        guilt_phrases = ["you've been using", "heavy user", "taking up", "more than average"]
        if any(p in text_lower for p in guilt_phrases):
            violations.append({
                "pattern": "upgrade_guilt",
                "severity": "medium",
                "found": next(p for p in guilt_phrases if p in text_lower),
            })

        safe = len(violations) == 0
        if not safe:
            self._detected.append({
                "timestamp": datetime.now().isoformat(),
                "context": context,
                "violations": violations,
            })
            logger.warning("DarkPatternGuard: detected %d violations in upgrade prompt", len(violations))

        return {
            "safe": safe,
            "violations": violations,
            "recommended_action": "block" if not safe else "allow",
            "shura_review_required": len(violations) > 0,
        }

    def get_status(self) -> Dict[str, Any]:
        return {
            "checks_run": self._checks_run,
            "violations_detected": len(self._detected),
            "recent_violations": self._detected[-5:] if self._detected else [],
            "clean_run_rate": round(
                1.0 - (len(self._detected) / max(self._checks_run, 1)), 3
            ),
        }


# ── Sustainability metrics ────────────────────────────────────────────────────

class SustainabilityEngine:
    """
    Tracks MEOK's financial sustainability and care alignment simultaneously.

    Goal: financially independent without compromising care.
    Scikit-learn model: VC-free, community funded, hybrid revenue.

    Revenue sources (care-aligned priority order):
    1. Pro subscriptions (capability multipliers)
    2. Enterprise contracts (sovereignty + compliance)
    3. Research partnerships (non-commercial, knowledge sharing)
    4. Community supporters (voluntary solidarity)
    5. Grant funding (NHS, AHRC, Wellcome Trust — for care research)
    """

    def __init__(self):
        self.dark_pattern_guard = DarkPatternGuard()
        self._tier_user_counts: Dict[str, int] = {
            "Free": 0, "Pro": 0, "Enterprise": 0,
            "Research Partner": 0, "Community Supporter": 0,
        }
        self._monthly_revenue_gbp: float = 0.0

    def record_tier_user(self, tier_name: str, delta: int = 1) -> None:
        """Record a user in a tier (delta=1 for new, -1 for churn)."""
        if tier_name in self._tier_user_counts:
            self._tier_user_counts[tier_name] = max(0, self._tier_user_counts[tier_name] + delta)
            self._recalculate_revenue()

    def _recalculate_revenue(self) -> None:
        """Recalculate monthly recurring revenue."""
        revenue = 0.0
        for tier in ALL_TIERS:
            count = self._tier_user_counts.get(tier.name, 0)
            revenue += count * tier.price_monthly_gbp
        self._monthly_revenue_gbp = round(revenue, 2)

    def get_sustainability_status(self) -> Dict[str, Any]:
        """Full sustainability report."""
        total_users = sum(self._tier_user_counts.values())
        paid_users = sum(
            v for k, v in self._tier_user_counts.items()
            if k not in ("Free", "Research Partner")
        )
        free_users = self._tier_user_counts.get("Free", 0)

        # Free-to-paid conversion rate (target: 3-8%, scikit-learn: ~2%)
        conversion_rate = round(paid_users / max(total_users, 1), 3)

        # Care sustainability: can we fund operations while keeping free tier genuine?
        # Estimate: £0.15/user/month infrastructure cost
        infrastructure_cost = total_users * 0.15
        care_sustainable = self._monthly_revenue_gbp >= infrastructure_cost

        return {
            "monthly_recurring_revenue_gbp": self._monthly_revenue_gbp,
            "total_users": total_users,
            "paid_users": paid_users,
            "free_users": free_users,
            "conversion_rate": conversion_rate,
            "care_sustainable": care_sustainable,
            "infrastructure_cost_estimate_gbp": round(infrastructure_cost, 2),
            "runway_months": round(
                (self._monthly_revenue_gbp - infrastructure_cost) * 12 / max(infrastructure_cost, 1), 1
            ) if infrastructure_cost > 0 else None,
            "tier_breakdown": self._tier_user_counts.copy(),
            "dark_pattern_guard": self.dark_pattern_guard.get_status(),
            "model_type": "hybrid_care_aligned",
            "vc_free": True,
            "governance": "pricing_changes_require_shura_vote",
        }

    def get_tier_info(self, tier_name: str = None) -> Dict[str, Any]:
        """Return tier configuration(s) for display."""
        if tier_name:
            tier = next((t for t in ALL_TIERS if t.name.lower() == tier_name.lower()), None)
            if not tier:
                return {"error": f"Unknown tier: {tier_name}"}
            return {
                "name": tier.name,
                "price_monthly_gbp": tier.price_monthly_gbp,
                "price_annual_gbp": tier.price_annual_gbp,
                "description": tier.description,
                "care_guarantee": tier.care_guarantee,
                "features": tier.features,
                "limits": tier.limits,
                "dark_pattern_checks": tier.dark_pattern_checks,
                "is_care_gated": tier.is_care_gated,
            }

        return {
            "tiers": [
                {
                    "name": t.name,
                    "price_monthly_gbp": t.price_monthly_gbp,
                    "price_annual_gbp": t.price_annual_gbp,
                    "description": t.description,
                    "features_count": len(t.features),
                }
                for t in ALL_TIERS
            ],
            "principles": [
                "Free tier delivers genuine care — not a crippled trial",
                "Pro features = capability multipliers, not care gates",
                "Zero dark patterns — all upgrade prompts reviewed by DarkPatternGuard",
                "Pricing changes require Shura council governance vote",
                "VC-free: community funded + earned revenue only",
                "Scikit-learn model: sustainability through value, not extraction",
            ],
        }
