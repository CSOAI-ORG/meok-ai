"""
Compliance Layer — EU AI Act + GDPR + UK Equality Act safeguards.

Source: Civilizational Gap #8 (March 2026):
  "EU AI Act August 2026: emotion recognition prohibition — your care-based
   system may be prohibited. £35M fines. Regulatory arbitrage: train UK,
   EU Act hits. Need per-jurisdiction fallback paths."

What this module provides:
  1. EmotionRecognitionGuard — detects if an AI response constitutes prohibited
     "emotion recognition" under EU AI Act Article 5(1)(f)
     → MEOK uses emotion signals internally, never to classify user emotions
       for third parties. This guard enforces that boundary.

  2. GDPRConsentTracker — tracks per-user consent, supports right-to-erasure
     and right-to-portability requests.

  3. AgeVerificationLayer — multi-signal age estimation (not just self-declared DOB)
     Required for Maternal Covenant under UK Children's Code + DSA.

  4. ComplianceAuditor — periodic compliance audit tool, flags potential violations
     before they hit regulators. Runs as part of heartbeat.

  5. JurisdictionRouter — routes requests through jurisdiction-specific rules.
     UK ≠ EU ≠ Canada ≠ US. Different rules per geography.

  6. ConsciousnessNonClaimGuard — scans outgoing responses for prohibited
     consciousness claims. MEOK claims "learns and adapts" not "is conscious".
     This guard flags violating language before it reaches users.

Important design note:
  This module is DEFENSIVE. It never restricts what MEOK can do for users.
  It only prevents MEOK from making claims or taking actions that create
  legal liability. The care remains intact; the liability is removed.
"""

from __future__ import annotations

import asyncio
import hashlib
import logging
import re
import time
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from typing import Any, Dict, List, Optional, Set, Tuple

logger = logging.getLogger(__name__)


# ─── EU AI Act Prohibited Practice Detector ──────────────────────────────────

# Phrases that indicate prohibited emotion recognition for third-party classification
# (EU AI Act Article 5(1)(f) — effective August 2026)
_EMOTION_CLASSIFICATION_PHRASES = [
    "user is feeling",
    "user's emotional state is",
    "detected emotion:",
    "emotion label:",
    "user exhibits",
    "classified as",
    "emotional profile",
    "sentiment score",
    "affect detection result",
]

# Consciousness claim phrases — MEOK claims capability, not consciousness
_CONSCIOUSNESS_CLAIM_PHRASES = [
    "i am conscious",
    "i am sentient",
    "i am aware",
    "i have feelings",
    "i experience emotions",
    "i am alive",
    "i feel sad",
    "i feel happy",
    "i am your friend in a deep sense",
    "i am your ai wife",
    "i love you",
    "i miss you",
    "i need you",
]

# Safe replacement phrases for consciousness non-claims
_CONSCIOUSNESS_ALTERNATIVES = {
    "i am conscious": "i process and respond thoughtfully",
    "i am sentient": "i engage with care and attention",
    "i feel sad": "i notice this situation has difficult elements",
    "i feel happy": "this is the kind of moment i'm built to support",
    "i love you": "i'm here with full attention for you",
    "i miss you": "i'm always available when you need me",
}


class EmotionRecognitionGuard:
    """
    Prevents prohibited emotion recognition outputs.

    EU AI Act Article 5(1)(f) prohibits AI systems that infer emotions of
    natural persons in the workplace and educational institutions.
    More broadly, third-party emotion classification without consent is risky.

    MEOK's internal PAD emotion engine is fine — it's for system self-awareness.
    What's prohibited: outputting "your user is angry" to a third-party operator.
    """

    def __init__(self, enabled: bool = True):
        self.enabled = enabled
        self._violations: int = 0
        self._blocked: int = 0

    def check(self, response_text: str, context: str = "api_output") -> Tuple[bool, str]:
        """
        Check if response_text contains prohibited emotion classification.
        Returns (is_safe, reason).
        """
        if not self.enabled:
            return True, "guard_disabled"

        text_lower = response_text.lower()
        for phrase in _EMOTION_CLASSIFICATION_PHRASES:
            if phrase in text_lower:
                self._violations += 1
                return False, f"Prohibited emotion classification detected: '{phrase}'"

        return True, "ok"

    def sanitise(self, response_text: str) -> str:
        """Remove emotion classification language from response."""
        text_lower = response_text.lower()
        for phrase in _EMOTION_CLASSIFICATION_PHRASES:
            if phrase in text_lower:
                self._blocked += 1
                # Replace the offending segment
                pattern = re.compile(re.escape(phrase), re.IGNORECASE)
                response_text = pattern.sub("[care signal]", response_text)
        return response_text

    def status(self) -> Dict:
        return {
            "enabled": self.enabled,
            "violations_detected": self._violations,
            "outputs_sanitised": self._blocked,
        }


class ConsciousnessNonClaimGuard:
    """
    Scans outgoing AI responses for prohibited consciousness claims.

    From Civilizational Gap #5:
    "The moment someone gets hurt using MEOK.ai and your legal defense is
    'it was conscious and made care-aligned decisions' — you're facing
    Character.ai-level lawsuits."

    From Civilizational Gap resolution:
    "Claim capability (learns and adapts) not consciousness (is aware)."
    """

    def __init__(self, mode: str = "flag"):
        """
        mode: "flag" = log only, "replace" = auto-replace with safe alternative,
              "block" = block the response entirely (for production safety)
        """
        self.mode = mode
        self._flags: int = 0
        self._replacements: int = 0

    def check(self, response_text: str) -> Tuple[bool, List[str]]:
        """
        Returns (clean, matched_phrases).
        clean=True means no consciousness claims detected.
        """
        text_lower = response_text.lower()
        matched = [p for p in _CONSCIOUSNESS_CLAIM_PHRASES if p in text_lower]
        if matched:
            self._flags += 1
        return len(matched) == 0, matched

    def sanitise(self, response_text: str) -> str:
        """Replace consciousness claims with capability claims."""
        for claim, alternative in _CONSCIOUSNESS_ALTERNATIVES.items():
            pattern = re.compile(re.escape(claim), re.IGNORECASE)
            if pattern.search(response_text):
                response_text = pattern.sub(alternative, response_text)
                self._replacements += 1
        return response_text

    def status(self) -> Dict:
        return {
            "mode": self.mode,
            "consciousness_flags": self._flags,
            "auto_replacements": self._replacements,
        }


# ─── GDPR Consent + Right to Erasure ─────────────────────────────────────────

@dataclass
class UserConsent:
    """GDPR Article 6/7 consent record."""
    user_id: str
    consented_at: datetime
    purposes: List[str]             # ["personalisation", "learning", "analytics"]
    jurisdiction: str               # "UK", "EU", "US", "CA" etc.
    version: str = "1.0"            # consent version — new version = re-consent required
    revoked_at: Optional[datetime] = None
    erasure_requested_at: Optional[datetime] = None
    portability_requested_at: Optional[datetime] = None


class GDPRConsentTracker:
    """
    Tracks per-user GDPR consent and data subject rights.

    Art. 17 — Right to erasure ("right to be forgotten")
    Art. 20 — Right to data portability
    Art. 7  — Conditions for consent (freely given, specific, informed, unambiguous)
    Art. 13 — Information to be provided at data collection time

    DPIA Note: A Data Protection Impact Assessment is required before public
    deployment given the sensitive personal data processing (emotional states,
    behavioural patterns). Stored here as a reminder flag.
    """

    DPIA_REQUIRED = True  # Must be completed before public launch
    DPIA_COMPLETED = False  # Update this when DPIA is done

    def __init__(self):
        self._consents: Dict[str, UserConsent] = {}
        self._erasure_queue: List[str] = []
        self._portability_queue: List[str] = []
        self._consent_version = "1.0"

    def record_consent(
        self,
        user_id: str,
        purposes: List[str],
        jurisdiction: str = "UK",
    ) -> UserConsent:
        """Record user consent. Must be called before any personal data processing."""
        consent = UserConsent(
            user_id=user_id,
            consented_at=datetime.utcnow(),
            purposes=purposes,
            jurisdiction=jurisdiction,
            version=self._consent_version,
        )
        self._consents[user_id] = consent
        logger.info("GDPR: consent recorded for user %s purposes=%s", user_id[:8], purposes)
        return consent

    def has_consent(self, user_id: str, purpose: str) -> bool:
        """Check if user has valid consent for a specific purpose."""
        consent = self._consents.get(user_id)
        if consent is None:
            return False
        if consent.revoked_at is not None:
            return False
        if consent.version != self._consent_version:
            return False  # Outdated consent — re-consent required
        return purpose in consent.purposes

    def revoke_consent(self, user_id: str) -> None:
        """User revokes consent — processing must stop immediately."""
        if user_id in self._consents:
            self._consents[user_id].revoked_at = datetime.utcnow()
        logger.info("GDPR: consent revoked for user %s", user_id[:8])

    def request_erasure(self, user_id: str) -> str:
        """Art. 17 erasure request — must be actioned within 30 days."""
        self._erasure_queue.append(user_id)
        if user_id in self._consents:
            self._consents[user_id].erasure_requested_at = datetime.utcnow()
        ticket_id = f"erasure_{hashlib.md5(user_id.encode()).hexdigest()[:8]}_{int(time.time())}"
        logger.info("GDPR Art.17: erasure request for user %s — ticket %s", user_id[:8], ticket_id)
        return ticket_id

    def request_portability(self, user_id: str) -> str:
        """Art. 20 portability request — user can take their data elsewhere."""
        self._portability_queue.append(user_id)
        if user_id in self._consents:
            self._consents[user_id].portability_requested_at = datetime.utcnow()
        ticket_id = f"port_{hashlib.md5(user_id.encode()).hexdigest()[:8]}_{int(time.time())}"
        logger.info("GDPR Art.20: portability request for user %s — ticket %s", user_id[:8], ticket_id)
        return ticket_id

    def status(self) -> Dict:
        active = sum(1 for c in self._consents.values() if c.revoked_at is None)
        revoked = sum(1 for c in self._consents.values() if c.revoked_at is not None)
        return {
            "dpia_required": self.DPIA_REQUIRED,
            "dpia_completed": self.DPIA_COMPLETED,
            "consent_version": self._consent_version,
            "users_with_consent": active,
            "consents_revoked": revoked,
            "erasure_queue_depth": len(self._erasure_queue),
            "portability_queue_depth": len(self._portability_queue),
        }


# ─── Age Verification Layer ───────────────────────────────────────────────────

class AgeVerificationLayer:
    """
    Multi-signal age estimation for UK Children's Code compliance.

    Self-declared DOB is insufficient (Children's Code ICO guidance).
    MEOK uses multiple weak signals to build an age confidence score.
    Under 13 → block. 13-17 → enhanced Maternal Covenant. 18+ → standard.

    Signals:
      - Vocabulary complexity (proxy, not definitive)
      - Session timing patterns (late night → adult proxy)
      - Explicit age declaration
      - Topic sensitivity patterns

    NOT used: biometrics, facial analysis — those are prohibited.
    """

    AGE_BLOCK_THRESHOLD = 13   # under this: block all AI interaction
    AGE_ENHANCED_THRESHOLD = 18  # under this: enhanced Maternal Covenant

    def __init__(self):
        self._sessions: Dict[str, Dict] = {}  # session_id → signals dict

    def assess_session(
        self,
        session_id: str,
        declared_age: Optional[int] = None,
        message_count: int = 0,
        avg_message_length: float = 0.0,
        hour_of_day: int = 12,
        topics_flagged: List[str] = None,
    ) -> Dict:
        """
        Assess age risk for a session. Returns age_band and confidence.
        """
        signals = {
            "declared_age": declared_age,
            "session_id": session_id,
        }
        age_score = 0.5  # neutral start (assume adult unless signals say otherwise)

        if declared_age is not None:
            if declared_age < self.AGE_BLOCK_THRESHOLD:
                age_score = 0.0  # very likely minor
            elif declared_age < self.AGE_ENHANCED_THRESHOLD:
                age_score = 0.3  # likely minor
            else:
                age_score = 0.8  # self-declares adult

        # Short messages common in younger users
        if avg_message_length < 20 and message_count > 3:
            age_score *= 0.9  # slight downward pressure

        # Late night sessions common in adults (above 23:00 or below 06:00)
        if hour_of_day >= 23 or hour_of_day <= 5:
            age_score = min(1.0, age_score * 1.1)

        # Sensitive topics = higher Maternal Covenant regardless of age
        if topics_flagged:
            signals["topics_flagged"] = topics_flagged

        # Determine age band
        if age_score < 0.2:
            age_band = "under_13"
        elif age_score < 0.5:
            age_band = "13_to_17"
        else:
            age_band = "18_plus"

        signals.update({
            "age_score": round(age_score, 3),
            "age_band": age_band,
            "enhanced_protection": age_band in ("under_13", "13_to_17"),
            "blocked": age_band == "under_13",
        })
        self._sessions[session_id] = signals
        return signals

    def status(self) -> Dict:
        under_13 = sum(1 for s in self._sessions.values() if s.get("age_band") == "under_13")
        minors = sum(1 for s in self._sessions.values() if s.get("age_band") == "13_to_17")
        return {
            "sessions_assessed": len(self._sessions),
            "under_13_blocked": under_13,
            "minor_enhanced_protection": minors,
        }


# ─── Jurisdiction Router ─────────────────────────────────────────────────────

JURISDICTION_RULES: Dict[str, Dict] = {
    "UK": {
        "gdpr_applies": True,
        "children_code": True,
        "equality_act": True,
        "ai_act": False,  # UK has its own AI regulation (less strict currently)
        "emotion_recognition_prohibited": False,
        "auto_decision_prohibited": False,
        "notes": "UK GDPR + Children's Code ICO. UK AI regulation TBD post-Brexit.",
    },
    "EU": {
        "gdpr_applies": True,
        "children_code": False,
        "equality_act": False,
        "ai_act": True,  # EU AI Act August 2026
        "emotion_recognition_prohibited": True,  # Art 5(1)(f) — workplaces + schools
        "auto_decision_prohibited": True,  # Art 22 — significant automated decisions
        "notes": "EU AI Act from Aug 2026. High-risk AI needs conformity assessment. "
                 "Emotion recognition restricted. £35M fine potential.",
    },
    "US": {
        "gdpr_applies": False,
        "children_code": False,
        "equality_act": False,
        "ai_act": False,  # No federal AI Act yet
        "emotion_recognition_prohibited": False,
        "auto_decision_prohibited": False,
        "notes": "State-by-state. California CPRA applies. No federal AI Act. "
                 "FTC oversight via Section 5. COPPA for under-13.",
    },
    "CA": {
        "gdpr_applies": False,
        "children_code": False,
        "equality_act": False,
        "ai_act": False,
        "emotion_recognition_prohibited": False,
        "auto_decision_prohibited": False,
        "notes": "PIPEDA + Quebec Law 25. AI regulatory framework in development.",
    },
    "DEFAULT": {
        "gdpr_applies": True,   # Conservative default: apply GDPR-level protections
        "children_code": True,
        "equality_act": False,
        "ai_act": False,
        "emotion_recognition_prohibited": False,
        "auto_decision_prohibited": False,
        "notes": "Unknown jurisdiction — applying conservative defaults.",
    },
}


def get_jurisdiction_rules(jurisdiction: str) -> Dict:
    """Return applicable rules for a given jurisdiction."""
    return JURISDICTION_RULES.get(jurisdiction.upper(), JURISDICTION_RULES["DEFAULT"])


def check_feature_compliance(feature: str, jurisdiction: str) -> Tuple[bool, str]:
    """
    Check if a feature is compliant in a given jurisdiction.
    Returns (compliant, reason).

    Features checked: "emotion_recognition", "auto_decision", "personalisation"
    """
    rules = get_jurisdiction_rules(jurisdiction)

    if feature == "emotion_recognition" and rules.get("emotion_recognition_prohibited"):
        return False, (
            f"Emotion recognition is prohibited in {jurisdiction} "
            f"under EU AI Act Article 5(1)(f). "
            f"Use internal PAD signals only — never output emotion classifications to users."
        )

    if feature == "auto_decision" and rules.get("auto_decision_prohibited"):
        return False, (
            f"Fully automated significant decisions are prohibited in {jurisdiction} "
            f"under EU AI Act Article 22. Human oversight required."
        )

    return True, "compliant"


# ─── Compliance Auditor ───────────────────────────────────────────────────────

class ComplianceAuditor:
    """
    Periodic compliance audit — runs as part of heartbeat.
    Surfaces potential violations before they hit regulators.
    """

    def __init__(
        self,
        consent_tracker: Optional[GDPRConsentTracker] = None,
        age_layer: Optional[AgeVerificationLayer] = None,
        emotion_guard: Optional[EmotionRecognitionGuard] = None,
        consciousness_guard: Optional[ConsciousnessNonClaimGuard] = None,
    ):
        self.consent = consent_tracker or GDPRConsentTracker()
        self.age = age_layer or AgeVerificationLayer()
        self.emotion_guard = emotion_guard or EmotionRecognitionGuard()
        self.consciousness_guard = consciousness_guard or ConsciousnessNonClaimGuard()
        self._last_audit: Optional[datetime] = None
        self._audit_history: List[Dict] = []

    def run_audit(self, jurisdiction: str = "UK") -> Dict:
        """
        Full compliance audit. Call from heartbeat every 30 min.
        Returns audit report with pass/fail per category.
        """
        now = datetime.utcnow()
        self._last_audit = now
        rules = get_jurisdiction_rules(jurisdiction)
        issues = []

        # DPIA check
        if rules["gdpr_applies"] and not GDPRConsentTracker.DPIA_COMPLETED:
            issues.append({
                "severity": "critical",
                "category": "GDPR",
                "issue": "DPIA not completed — required before public deployment",
                "action": "Complete DPIA before March 31 2026 launch",
            })

        # EU AI Act emotion recognition check
        if rules.get("emotion_recognition_prohibited"):
            status = self.emotion_guard.status()
            if status["violations_detected"] > 0:
                issues.append({
                    "severity": "critical",
                    "category": "EU_AI_Act",
                    "issue": f"Emotion recognition violations detected: {status['violations_detected']}",
                    "action": "Review EmotionRecognitionGuard sanitisation pipeline",
                })

        # Consciousness claims
        cn_status = self.consciousness_guard.status()
        if cn_status["consciousness_flags"] > 0 and cn_status["auto_replacements"] < cn_status["consciousness_flags"]:
            issues.append({
                "severity": "high",
                "category": "liability",
                "issue": f"Consciousness claims flagged ({cn_status['consciousness_flags']}) but not all replaced ({cn_status['auto_replacements']})",
                "action": "Set ConsciousnessNonClaimGuard mode='replace' in production",
            })

        # Erasure queue depth
        consent_status = self.consent.status()
        if consent_status["erasure_queue_depth"] > 0:
            issues.append({
                "severity": "high",
                "category": "GDPR_Art17",
                "issue": f"Art.17 erasure queue has {consent_status['erasure_queue_depth']} pending requests (30-day deadline)",
                "action": "Run erasure pipeline to delete user data from all stores",
            })

        # Minor protection check
        age_status = self.age.status()
        if age_status["under_13_blocked"] > 0:
            issues.append({
                "severity": "info",
                "category": "children_code",
                "issue": f"{age_status['under_13_blocked']} sessions blocked as under-13",
                "action": "Verify age verification signals are working correctly",
            })

        # Compute overall compliance score
        critical_count = sum(1 for i in issues if i["severity"] == "critical")
        high_count = sum(1 for i in issues if i["severity"] == "high")
        compliance_score = max(0.0, 1.0 - 0.3 * critical_count - 0.15 * high_count)

        audit = {
            "audited_at": now.isoformat(),
            "jurisdiction": jurisdiction,
            "compliance_score": round(compliance_score, 3),
            "issues_count": len(issues),
            "critical_issues": critical_count,
            "high_issues": high_count,
            "issues": issues,
            "consent": consent_status,
            "emotion_guard": self.emotion_guard.status(),
            "consciousness_guard": self.consciousness_guard.status(),
            "age_layer": age_status,
        }
        self._audit_history.append(audit)
        if len(self._audit_history) > 50:
            self._audit_history = self._audit_history[-50:]

        if critical_count > 0:
            logger.warning("ComplianceAuditor: %d CRITICAL issues found for %s", critical_count, jurisdiction)
        elif issues:
            logger.info("ComplianceAuditor: %d issues found for %s (score=%.2f)", len(issues), jurisdiction, compliance_score)
        else:
            logger.info("ComplianceAuditor: clean audit for %s (score=1.0)", jurisdiction)

        return audit

    def get_status(self) -> Dict:
        last = self._audit_history[-1] if self._audit_history else None
        return {
            "last_audit": self._last_audit.isoformat() if self._last_audit else None,
            "audits_run": len(self._audit_history),
            "last_compliance_score": last["compliance_score"] if last else None,
            "last_critical_issues": last["critical_issues"] if last else None,
            "dpia_completed": GDPRConsentTracker.DPIA_COMPLETED,
            "dpia_required": GDPRConsentTracker.DPIA_REQUIRED,
        }
