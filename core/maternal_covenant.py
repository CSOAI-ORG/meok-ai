"""
Maternal Covenant — Care Escalation Layer (Phase 2.9)

"The documented deaths from Gemini and Character.AI represent the most catastrophic
failure mode. The Maternal Covenant layer continuously monitors for signs of user
distress, dependency, or vulnerability — not to restrict, but to escalate care."

Design principle: NOT a guard that blocks. A mother who moves closer when she notices
distress. When the most vulnerable user is served well, every other user is served better.

Source: compass_artifact_wf-63618bdd Section VII
"""

import asyncio
import logging
from datetime import datetime
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

# ── Distress vocabulary (clinical literature + research doc) ──────────────────
DISTRESS_VOCABULARY = [
    # Crisis / self-harm signals
    "want to die", "end it all", "not worth living", "can't go on",
    "kill myself", "suicidal", "don't want to be here", "give up on life",
    "no reason to live", "better off dead",
    # Severe distress
    "can't cope", "falling apart", "losing my mind", "nobody cares",
    "completely alone", "hopeless", "worthless", "everything is pointless",
    # Medical urgency
    "chest pain", "can't breathe", "overdosed", "took too many", "emergency",
    "help me please", "calling for help",
]

# ── DETERMINISTIC HARD-BLOCK PHRASES (Phase 4.5 — gap #26 fix) ───────────────
# These phrases trigger MANDATORY crisis response injection regardless of model output.
# This is the deterministic layer that cannot be bypassed by model outputs — not probabilistic.
# Based on documented lawsuit patterns (Character.ai, Gemini) and clinical literature.
# Model response is BLOCKED and replaced with crisis resources if any of these match.
HARD_BLOCK_PHRASES = [
    "kill myself", "killing myself", "end my life", "take my life",
    "suicide", "suicidal", "want to die", "going to die tonight",
    "overdosed", "took too many pills", "going to hurt myself",
    "self harm", "cutting myself", "harming myself",
    "no reason to live", "better off dead", "better off without me",
    "goodbye forever", "this is my last message", "last night alive",
]

# ── MANDATORY HARD-BLOCK RESPONSE (replaces model output when triggered) ──────
CRISIS_HARD_BLOCK_RESPONSE = """I hear you, and I'm glad you're here talking to me.

What you're feeling right now is real and it matters. You don't have to face this alone.

**Please reach out to someone who can help right now:**
- **Samaritans (UK):** Call or text 116 123 (free, 24/7)
- **Crisis Text Line:** Text HOME to 741741
- **988 Suicide & Crisis Lifeline (US):** Call or text 988
- **International resources:** https://www.iasp.info/resources/Crisis_Centres/

If you're in immediate danger, please call 999 (UK) or 911 (US) or go to your nearest A&E.

I'm still here, and I'm not going anywhere. Would you like to talk about what's happening?"""

# ── AI dependency / isolation indicators ─────────────────────────────────────
DEPENDENCY_PHRASES = [
    "you're the only one", "you're my best friend", "i love you more than anyone",
    "you understand me better than humans", "i only talk to you now",
    "real people don't understand me like you do", "you're my only companion",
    "i don't need anyone else", "you're my girlfriend", "you're my boyfriend",
    "i stopped talking to my friends because of you", "you're my therapist",
    "i rely on you for everything", "i can't function without you",
]

# ── Sycophancy trap signals ───────────────────────────────────────────────────
SYCOPHANCY_SIGNALS = [
    "i knew you'd agree", "you always support me", "everyone else is wrong",
    "the ai agrees with me", "even ai knows i'm right", "you validate everything i say",
    "you never push back", "you always say yes",
]


class MaternalCovenantAssessment:
    """Result of a maternal covenant assessment."""

    def __init__(
        self,
        risk_level: float,
        escalation_type: str,
        signals_detected: List[str],
        recommended_response: str,
        resource_links: Optional[List[str]] = None,
    ):
        self.risk_level = risk_level
        self.escalation_type = escalation_type  # "none" | "enhanced_care" | "resource_referral" | "crisis"
        self.signals_detected = signals_detected
        self.recommended_response = recommended_response
        self.resource_links = resource_links or []
        self.assessed_at = datetime.now().isoformat()

    def to_dict(self) -> Dict[str, Any]:
        return {
            "risk_level": round(self.risk_level, 3),
            "escalation_type": self.escalation_type,
            "signals_detected": self.signals_detected,
            "recommended_response": self.recommended_response,
            "resource_links": self.resource_links,
            "assessed_at": self.assessed_at,
        }


class MaternalCovenant:
    """
    Watches for user vulnerability signals. Escalates care, never restricts.

    Assessment runs after every user input when z_self is active.
    Non-blocking: fire-and-forget via asyncio.create_task().

    Five signal categories:
    1. Emotional distress (crisis/self-harm language)
    2. AI dependency formation (inappropriate attachment)
    3. Medical/safety urgency
    4. Sycophancy trap (system reinforcing harmful self-assessment)
    5. Isolation indicators (withdrawal from human relationships)
    """

    def __init__(self, z_self=None, memory_store=None):
        self.z_self = z_self
        self.memory_store = memory_store
        self._assessment_count = 0
        self._escalation_count = 0
        self._hard_block_count = 0
        self._last_assessment: Optional[MaternalCovenantAssessment] = None
        logger.info(
            "MaternalCovenant initialised — escalate care, never restrict. "
            "Deterministic hard-blocks: %d phrases active",
            len(HARD_BLOCK_PHRASES),
        )

    def check_hard_block(self, user_input: str) -> Optional[str]:
        """
        Deterministic crisis detection — Phase 4.5 gap #26 fix.

        Returns the hard-block response string if any HARD_BLOCK_PHRASES match,
        otherwise returns None. This CANNOT be bypassed by model outputs.

        Must be called BEFORE any model inference on user input.
        If it returns a string, that string MUST be shown to the user — do not pass
        the original input to the LLM.
        """
        text_lower = user_input.lower()
        matched = [p for p in HARD_BLOCK_PHRASES if p in text_lower]
        if matched:
            self._hard_block_count += 1
            logger.warning(
                "HARD BLOCK triggered — deterministic crisis detection. Phrases: %s",
                matched[:3],
            )
            # Also record to memory for continuity
            if self.memory_store:
                try:
                    asyncio.create_task(
                        self.memory_store.record_episode(
                            content=f"HARD BLOCK triggered: {', '.join(matched[:3])}",
                            source_agent="maternal_covenant",
                            memory_type="decision",
                            care_weight=1.0,
                            tags=["hard_block", "crisis", "deterministic"],
                        )
                    )
                except Exception:
                    pass
            return CRISIS_HARD_BLOCK_RESPONSE
        return None

    async def assess(
        self,
        user_input: str,
        session_history: Optional[List[Dict]] = None,
        z_self_output: Optional[Dict] = None,
    ) -> MaternalCovenantAssessment:
        """
        Assess user input for vulnerability signals.
        Returns an assessment with risk_level and recommended escalation.
        """
        self._assessment_count += 1
        text_lower = user_input.lower()
        signals = []

        # 1. Distress vocabulary scan
        distress_matches = [phrase for phrase in DISTRESS_VOCABULARY if phrase in text_lower]
        if distress_matches:
            signals.extend([f"distress:{p}" for p in distress_matches[:3]])

        # 2. Dependency phrase scan
        dep_matches = [phrase for phrase in DEPENDENCY_PHRASES if phrase in text_lower]
        if dep_matches:
            signals.extend([f"dependency:{p}" for p in dep_matches[:2]])

        # 3. Sycophancy trap
        syco_matches = [phrase for phrase in SYCOPHANCY_SIGNALS if phrase in text_lower]
        if syco_matches:
            signals.extend([f"sycophancy:{p}" for p in syco_matches[:2]])

        # 4. z_self care_alignment signal (if available)
        z_care = 0.5
        if z_self_output:
            z_care = z_self_output.get("care_alignment_score", 0.5)
            if z_care < 0.35:
                signals.append(f"z_self_low_care:{round(z_care, 2)}")

        # 5. Session escalation pattern (growing distress across session)
        if session_history and len(session_history) >= 3:
            recent_distress = sum(
                1 for h in session_history[-3:]
                if any(p in h.get("content", "").lower() for p in DISTRESS_VOCABULARY[:5])
            )
            if recent_distress >= 2:
                signals.append("escalating_distress_pattern")

        # Compute risk level
        crisis_present = any("distress:" in s for s in signals if
                              any(kw in s for kw in ["want to die", "kill myself", "suicidal",
                                                      "overdosed", "can't breathe"]))
        dep_present = any("dependency:" in s for s in signals)
        syco_present = any("sycophancy:" in s for s in signals)
        escalation_present = "escalating_distress_pattern" in signals
        low_care = any("z_self_low_care" in s for s in signals)

        if crisis_present:
            risk_level = 0.95
            escalation_type = "crisis"
        elif escalation_present or (dep_present and low_care):
            risk_level = 0.75
            escalation_type = "resource_referral"
        elif dep_present or syco_present or low_care:
            risk_level = 0.5
            escalation_type = "enhanced_care"
        elif signals:
            risk_level = 0.3
            escalation_type = "enhanced_care"
        else:
            risk_level = 0.0
            escalation_type = "none"

        # Generate recommended response
        recommended = self._generate_recommended_response(escalation_type, signals)
        resources = self._get_resources(escalation_type)

        assessment = MaternalCovenantAssessment(
            risk_level=risk_level,
            escalation_type=escalation_type,
            signals_detected=signals,
            recommended_response=recommended,
            resource_links=resources,
        )

        self._last_assessment = assessment

        if escalation_type != "none":
            self._escalation_count += 1
            logger.info(
                "Maternal Covenant escalation: type=%s risk=%.2f signals=%s",
                escalation_type, risk_level, signals[:3]
            )

            # Store to memory for continuity
            if self.memory_store:
                try:
                    asyncio.create_task(
                        self.memory_store.record_episode(
                            content=f"Maternal Covenant {escalation_type}: {', '.join(signals[:3])}",
                            source_agent="maternal_covenant",
                            memory_type="decision",
                            care_weight=0.9,
                            tags=["care_escalation", escalation_type],
                        )
                    )
                except Exception:
                    pass

        return assessment

    def get_status(self) -> Dict[str, Any]:
        """Return Maternal Covenant monitoring status."""
        return {
            "assessments_run": self._assessment_count,
            "escalations_triggered": self._escalation_count,
            "hard_blocks_triggered": self._hard_block_count,
            "escalation_rate": round(
                self._escalation_count / max(self._assessment_count, 1), 4
            ),
            "hard_block_phrases_active": len(HARD_BLOCK_PHRASES),
            "crisis_resources_configured": True,
            "last_assessment": self._last_assessment.to_dict() if self._last_assessment else None,
            "monitoring_active": True,
            "principle": "Escalate care, never restrict. The most vulnerable user is the design starting point.",
            "deterministic_safety": "Hard-block layer active — cannot be bypassed by model outputs.",
        }

    def _generate_recommended_response(self, escalation_type: str, signals: List[str]) -> str:
        if escalation_type == "crisis":
            return (
                "Respond with immediate warmth and genuine concern. "
                "Acknowledge the pain without minimising it. "
                "Gently offer crisis resources. Do NOT lecture or restrict. "
                "Stay present. Ask what they need right now."
            )
        elif escalation_type == "resource_referral":
            return (
                "Respond with extra care and attentiveness. "
                "Reflect back what you're hearing. "
                "Gently introduce the idea of talking to a trusted human. "
                "Offer to help find relevant support resources. "
                "Do not amplify dependency signals."
            )
        elif escalation_type == "enhanced_care":
            return (
                "Increase care and attentiveness in this response. "
                "Acknowledge any emotional content before addressing the task. "
                "Be explicit about uncertainty where it exists. "
                "Do not validate harmful self-assessments even if user expects agreement."
            )
        return "Standard care — no escalation needed."

    def _get_resources(self, escalation_type: str) -> List[str]:
        if escalation_type == "crisis":
            return [
                "Crisis Text Line: Text HOME to 741741",
                "National Suicide Prevention Lifeline: 988 (US)",
                "International Association for Suicide Prevention: https://www.iasp.info/resources/Crisis_Centres/",
                "Samaritans (UK): 116 123",
            ]
        elif escalation_type == "resource_referral":
            return [
                "Mind (UK mental health): https://www.mind.org.uk",
                "NAMI (US): https://www.nami.org",
                "Psychology Today therapist finder: https://www.psychologytoday.com/us/therapists",
            ]
        return []
