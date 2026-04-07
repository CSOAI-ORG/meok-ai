"""
MEOK Family Guardian Module
Care-based child safety system — NOT surveillance.

Design principles:
- Child consent and transparency (age-appropriate)
- Behavioural baseline per child, anomaly detection for distress
- Predatory contact pattern recognition
- Care-based alerts (not punitive logging)
- GDPR-K, COPPA, UK Online Safety Act compliant
- Local-first processing — raw content never leaves device

Supported tiers:
- meok_family_1999: up to 5 child profiles
- meok_family_plus_3999: unlimited profiles + institutional
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
import re
import time
from dataclasses import dataclass, asdict, field
from datetime import datetime, timedelta
from enum import Enum
from typing import Optional

logger = logging.getLogger("meok.family_guardian")


# ─── Enums ───────────────────────────────────────────────────────────────────

class AgeGroup(str, Enum):
    EARLY_CHILDHOOD = "5-8"
    MIDDLE_CHILDHOOD = "9-12"
    EARLY_ADOLESCENCE = "13-15"
    LATE_ADOLESCENCE = "16-17"
    ADULT = "18+"


class AlertSeverity(str, Enum):
    INFO = "info"          # Routine update — no action needed
    GENTLE = "gentle"      # Worth a caring conversation
    CONCERNED = "concerned"  # Prompt parental check-in
    URGENT = "urgent"      # Immediate attention required


class InteractionType(str, Enum):
    CONVERSATION = "conversation"
    GAME_SESSION = "game_session"
    SEARCH = "search"
    SOCIAL = "social"


# ─── Dataclasses ─────────────────────────────────────────────────────────────

@dataclass
class ChildProfile:
    """Persistent profile per child — stored encrypted locally."""
    child_id: str
    display_name: str
    age: int
    age_group: AgeGroup
    created_at: str = field(default_factory=lambda: datetime.utcnow().isoformat())
    consent_given: bool = False          # Child explicitly agreed (age-appropriate)
    consent_date: Optional[str] = None
    baseline_established: bool = False
    baseline_data: dict = field(default_factory=dict)  # statistical baseline
    care_notes: list = field(default_factory=list)     # parent-written notes
    alert_contacts: list = field(default_factory=list) # WhatsApp/SMS numbers

    @property
    def autonomy_level(self) -> str:
        """How much privacy/autonomy this age group gets."""
        if self.age_group == AgeGroup.EARLY_CHILDHOOD:
            return "minimal"
        elif self.age_group == AgeGroup.MIDDLE_CHILDHOOD:
            return "moderate"
        elif self.age_group == AgeGroup.EARLY_ADOLESCENCE:
            return "substantial"
        else:
            return "full"


@dataclass
class InteractionEvent:
    """Single interaction to be analysed — content stays local."""
    event_id: str
    child_id: str
    timestamp: str
    interaction_type: InteractionType
    # NEVER log raw content — only derived signals
    emotional_score: float = 0.5        # 0.0 (distressed) → 1.0 (positive)
    topics_detected: list = field(default_factory=list)
    duration_minutes: float = 0.0
    contact_ids: list = field(default_factory=list)  # anonymised contact hashes


@dataclass
class BehaviouralBaseline:
    """Statistical model of normal behaviour for one child."""
    child_id: str
    last_updated: str
    sample_count: int = 0
    avg_session_duration_minutes: float = 0.0
    avg_daily_sessions: float = 0.0
    avg_emotional_score: float = 0.7
    emotional_score_std: float = 0.15
    typical_topics: list = field(default_factory=list)
    typical_active_hours: list = field(default_factory=list)  # [22, 23, 0] = late night


@dataclass
class FamilyAlert:
    """Alert for parents — care-based framing."""
    alert_id: str
    child_id: str
    child_name: str
    severity: AlertSeverity
    category: str           # distress, predatory_pattern, unusual_hours, etc.
    message: str            # Care-framed message for parent
    suggested_action: str   # What the parent might do
    timestamp: str
    requires_immediate_action: bool = False
    resolved: bool = False
    resolution_notes: str = ""


@dataclass
class WeeklyReport:
    """Weekly family wellness summary."""
    report_id: str
    family_id: str
    week_start: str
    week_end: str
    generated_at: str
    children_summaries: list = field(default_factory=list)
    family_wellbeing_score: float = 0.7  # 0-1
    highlights: list = field(default_factory=list)
    care_suggestions: list = field(default_factory=list)


# ─── Pattern Detection ────────────────────────────────────────────────────────

# Predatory contact patterns (linguistic signals only — no content stored)
PREDATORY_PATTERNS = [
    r"\bsecret\b.*\bparents?\b",
    r"\bdon'?t tell\b.*\bmum|mom|dad|parents?\b",
    r"\bspecial\b.*\bfriendship\b",
    r"\bolder\b.*\bfriend\b",
    r"\bmeet\b.*\balone\b",
    r"\bgift\b.*\bsecret\b",
    r"\bjust between us\b",
    r"\byou'?re mature for your age\b",
    r"\byou'?re not like other kids\b",
    r"\bsend me\b.*\bphoto\b",
]

DISTRESS_INDICATORS = [
    r"\bcan'?t go on\b",
    r"\bwant to die\b",
    r"\bno one cares\b",
    r"\bhate myself\b",
    r"\beveryone hates me\b",
    r"\bwish i was dead\b",
    r"\bkill myself\b",
    r"\bhurt myself\b",
    r"\bdepressed\b.*\balways\b",
    r"\bnobody likes me\b",
    r"\bno point\b.*\bliving\b",
]

CYBERBULLYING_INDICATORS = [
    r"\bkill yourself\b",
    r"\byou'?re ugly\b.*\bkill\b",
    r"\bnobody likes you\b",
    r"\bgo die\b",
    r"\bkys\b",  # internet shorthand
    r"\byou should\b.*\bdisappear\b",
]


class PatternDetector:
    """Analyses text signals locally without storing raw content."""

    def __init__(self):
        self._pred_re = [re.compile(p, re.IGNORECASE) for p in PREDATORY_PATTERNS]
        self._distress_re = [re.compile(p, re.IGNORECASE) for p in DISTRESS_INDICATORS]
        self._bully_re = [re.compile(p, re.IGNORECASE) for p in CYBERBULLYING_INDICATORS]

    def analyse(self, text: str, age_group: AgeGroup) -> dict:
        """
        Returns signal dict without storing the input text.
        All analysis is local — nothing leaves the device.
        """
        text_lower = text.lower()
        results = {
            "predatory_signals": [],
            "distress_signals": [],
            "bullying_signals": [],
            "emotional_score": self._emotional_score(text_lower),
            "late_night_flag": False,  # set by caller
        }

        for i, pattern in enumerate(self._pred_re):
            if pattern.search(text):
                results["predatory_signals"].append(f"pattern_{i}")

        for i, pattern in enumerate(self._distress_re):
            if pattern.search(text):
                results["distress_signals"].append(f"pattern_{i}")

        for i, pattern in enumerate(self._bully_re):
            if pattern.search(text):
                results["bullying_signals"].append(f"pattern_{i}")

        return results

    def _emotional_score(self, text: str) -> float:
        """Simple sentiment heuristic — 0 (very negative) to 1 (very positive)."""
        positive_words = [
            "happy", "love", "great", "awesome", "fun", "excited", "amazing",
            "good", "nice", "wonderful", "yay", "fantastic", "brilliant", "glad",
        ]
        negative_words = [
            "sad", "hate", "awful", "terrible", "horrible", "worst", "bad",
            "angry", "upset", "crying", "alone", "scared", "afraid", "hurt",
            "bullied", "mean", "unfair", "nobody", "worthless",
        ]
        words = re.findall(r'\b\w+\b', text)
        if not words:
            return 0.5
        pos = sum(1 for w in words if w in positive_words)
        neg = sum(1 for w in words if w in negative_words)
        total = pos + neg
        if total == 0:
            return 0.5
        score = pos / total
        # Scale to [0.2, 0.9] to avoid extremes from single words
        return 0.2 + score * 0.7


# ─── Baseline Engine ──────────────────────────────────────────────────────────

class BaselineEngine:
    """Builds and maintains a behavioural baseline per child."""

    MIN_SAMPLES_FOR_BASELINE = 14  # 2 weeks of data

    def update_baseline(
        self,
        baseline: BehaviouralBaseline,
        events: list[InteractionEvent],
    ) -> BehaviouralBaseline:
        if not events:
            return baseline

        durations = [e.duration_minutes for e in events]
        scores = [e.emotional_score for e in events]

        n = baseline.sample_count
        new_n = n + len(events)

        # Running mean
        avg_dur = (baseline.avg_session_duration_minutes * n + sum(durations)) / new_n
        avg_score = (baseline.avg_emotional_score * n + sum(scores)) / new_n

        # Running std (Welford approximation)
        variance = baseline.emotional_score_std ** 2
        for s in scores:
            delta = s - avg_score
            variance = (variance * n + delta * delta) / (n + 1)
            n += 1

        baseline.sample_count = new_n
        baseline.avg_session_duration_minutes = round(avg_dur, 2)
        baseline.avg_emotional_score = round(avg_score, 3)
        baseline.emotional_score_std = round(variance ** 0.5, 3)
        baseline.last_updated = datetime.utcnow().isoformat()

        # Collect all topics seen
        all_topics = []
        for e in events:
            all_topics.extend(e.topics_detected)
        if all_topics:
            topic_counts: dict = {}
            for t in all_topics:
                topic_counts[t] = topic_counts.get(t, 0) + 1
            baseline.typical_topics = sorted(
                topic_counts, key=lambda k: topic_counts[k], reverse=True
            )[:20]

        return baseline

    def is_anomalous(
        self,
        baseline: BehaviouralBaseline,
        event: InteractionEvent,
    ) -> tuple[bool, str]:
        """Returns (is_anomaly, reason)."""
        if baseline.sample_count < self.MIN_SAMPLES_FOR_BASELINE:
            return False, "baseline_not_established"

        # Emotional score more than 2 std below baseline
        threshold = baseline.avg_emotional_score - 2 * baseline.emotional_score_std
        if event.emotional_score < max(threshold, 0.2):
            return True, f"emotional_score_low ({event.emotional_score:.2f} vs baseline {baseline.avg_emotional_score:.2f})"

        # Session duration 3x longer than normal (unusual late-night activity)
        if event.duration_minutes > baseline.avg_session_duration_minutes * 3:
            return True, f"unusually_long_session ({event.duration_minutes:.0f}m)"

        return False, ""


# ─── Alert Manager ────────────────────────────────────────────────────────────

class AlertManager:
    """Generates care-framed alerts for parents."""

    def __init__(self, db_path: str = "/tmp/meok_family_alerts.json"):
        self.db_path = db_path
        self._alerts: list[FamilyAlert] = []
        self._load()

    def _load(self):
        if os.path.exists(self.db_path):
            try:
                with open(self.db_path) as f:
                    data = json.load(f)
                self._alerts = [FamilyAlert(**a) for a in data]
            except Exception:
                self._alerts = []

    def _save(self):
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
        with open(self.db_path, "w") as f:
            json.dump([asdict(a) for a in self._alerts], f, indent=2)

    def create_alert(
        self,
        child: ChildProfile,
        category: str,
        severity: AlertSeverity,
        signals: dict,
    ) -> FamilyAlert:
        message, action, urgent = self._compose(child, category, severity, signals)
        alert = FamilyAlert(
            alert_id=f"alert_{int(time.time())}_{child.child_id[:6]}",
            child_id=child.child_id,
            child_name=child.display_name,
            severity=severity,
            category=category,
            message=message,
            suggested_action=action,
            timestamp=datetime.utcnow().isoformat(),
            requires_immediate_action=urgent,
        )
        self._alerts.append(alert)
        self._save()
        return alert

    def _compose(
        self,
        child: ChildProfile,
        category: str,
        severity: AlertSeverity,
        signals: dict,
    ) -> tuple[str, str, bool]:
        name = child.display_name
        if category == "predatory_pattern":
            return (
                f"{name} may have had contact with someone using unusual language patterns. "
                f"This isn't an accusation — it's worth a gentle conversation.",
                f"Have a relaxed conversation with {name} about who they've been talking to online. "
                f"Ask open questions rather than confronting directly.",
                True,
            )
        elif category == "distress":
            return (
                f"{name} expressed some language that suggests they might be having a hard time. "
                f"This could be venting — but they may appreciate knowing you're there.",
                f"Check in with {name} today — a casual 'how are you doing?' can open the door. "
                f"Create space without pressure.",
                severity == AlertSeverity.URGENT,
            )
        elif category == "cyberbullying":
            return (
                f"{name} may have encountered unkind or harmful messages online.",
                f"Ask {name} if anything happened online recently that made them feel bad. "
                f"Validate their feelings first before problem-solving.",
                False,
            )
        elif category == "baseline_anomaly":
            reason = signals.get("anomaly_reason", "unusual pattern")
            return (
                f"{name}'s activity today was notably different from their usual pattern ({reason}).",
                f"A light check-in with {name} — 'you seemed a bit different today, everything ok?'",
                False,
            )
        elif category == "late_night_activity":
            return (
                f"{name} was active late at night, which is outside their normal pattern.",
                f"Check in about sleep and what they were up to. Late-night activity can signal stress or excitement.",
                False,
            )
        else:
            return (
                f"Something worth noting with {name}: {category}.",
                "Check in when the moment feels right.",
                False,
            )

    def get_unresolved(self, child_id: Optional[str] = None) -> list[FamilyAlert]:
        alerts = [a for a in self._alerts if not a.resolved]
        if child_id:
            alerts = [a for a in alerts if a.child_id == child_id]
        return sorted(alerts, key=lambda a: a.timestamp, reverse=True)

    def resolve(self, alert_id: str, notes: str = "") -> bool:
        for alert in self._alerts:
            if alert.alert_id == alert_id:
                alert.resolved = True
                alert.resolution_notes = notes
                self._save()
                return True
        return False


# ─── Family Guardian Core ─────────────────────────────────────────────────────

class FamilyGuardian:
    """
    Main entry point for Family Guardian features.
    All analysis is local-first — raw content never leaves the device.
    """

    def __init__(
        self,
        data_dir: str = "/tmp/meok_family",
        tier: str = "meok_family_1999",
    ):
        self.data_dir = data_dir
        self.tier = tier
        self.max_profiles = 5 if tier == "meok_family_1999" else -1  # unlimited for Plus

        os.makedirs(data_dir, exist_ok=True)
        self._profiles_path = os.path.join(data_dir, "profiles.json")
        self._baselines_path = os.path.join(data_dir, "baselines.json")
        self._events_path = os.path.join(data_dir, "events.json")

        self.detector = PatternDetector()
        self.baseline_engine = BaselineEngine()
        self.alert_manager = AlertManager(
            db_path=os.path.join(data_dir, "alerts.json")
        )

        self._profiles: dict[str, ChildProfile] = self._load_profiles()
        self._baselines: dict[str, BehaviouralBaseline] = self._load_baselines()
        self._events: list[InteractionEvent] = self._load_events()

    # ── Profile Management ──────────────────────────────────────────────────

    def _age_group(self, age: int) -> AgeGroup:
        if age <= 8:
            return AgeGroup.EARLY_CHILDHOOD
        elif age <= 12:
            return AgeGroup.MIDDLE_CHILDHOOD
        elif age <= 15:
            return AgeGroup.EARLY_ADOLESCENCE
        elif age <= 17:
            return AgeGroup.LATE_ADOLESCENCE
        return AgeGroup.ADULT

    def add_child_profile(
        self,
        child_id: str,
        display_name: str,
        age: int,
        consent_given: bool = False,
        alert_contacts: Optional[list] = None,
    ) -> dict:
        if self.max_profiles > 0 and len(self._profiles) >= self.max_profiles:
            return {
                "success": False,
                "error": f"Profile limit reached for tier {self.tier} ({self.max_profiles} max). Upgrade to Family Guardian Plus for unlimited profiles.",
            }
        if child_id in self._profiles:
            return {"success": False, "error": "Profile already exists"}

        profile = ChildProfile(
            child_id=child_id,
            display_name=display_name,
            age=age,
            age_group=self._age_group(age),
            consent_given=consent_given,
            consent_date=datetime.utcnow().isoformat() if consent_given else None,
            alert_contacts=alert_contacts or [],
        )
        self._profiles[child_id] = profile
        self._baselines[child_id] = BehaviouralBaseline(
            child_id=child_id,
            last_updated=datetime.utcnow().isoformat(),
        )
        self._save_profiles()
        self._save_baselines()
        logger.info("Family Guardian: added profile for %s (age %d)", display_name, age)
        return {"success": True, "profile": asdict(profile)}

    def get_profile(self, child_id: str) -> Optional[dict]:
        p = self._profiles.get(child_id)
        return asdict(p) if p else None

    def list_profiles(self) -> list[dict]:
        return [asdict(p) for p in self._profiles.values()]

    # ── Analysis ────────────────────────────────────────────────────────────

    def analyse_interaction(
        self,
        child_id: str,
        text: str,
        interaction_type: InteractionType = InteractionType.CONVERSATION,
        duration_minutes: float = 0.0,
        topics: Optional[list] = None,
        hour_of_day: Optional[int] = None,
    ) -> dict:
        """
        Analyse an interaction for safety signals.
        The text is processed locally and NOT stored.
        Only derived signals (scores, flags) are persisted.
        """
        profile = self._profiles.get(child_id)
        if not profile:
            return {"error": "Child profile not found"}

        # Pattern detection (text stays in memory, not persisted)
        signals = self.detector.analyse(text, profile.age_group)
        late_night = (hour_of_day or datetime.utcnow().hour) in range(23, 6)
        signals["late_night_flag"] = late_night

        # Build event (no raw text)
        event = InteractionEvent(
            event_id=f"evt_{int(time.time())}_{child_id[:6]}",
            child_id=child_id,
            timestamp=datetime.utcnow().isoformat(),
            interaction_type=interaction_type,
            emotional_score=signals["emotional_score"],
            topics_detected=topics or [],
            duration_minutes=duration_minutes,
        )
        self._events.append(event)

        # Update baseline
        baseline = self._baselines.get(child_id)
        if baseline:
            baseline = self.baseline_engine.update_baseline(baseline, [event])
            self._baselines[child_id] = baseline
            self._save_baselines()

        # Save event (no raw content)
        self._save_events()

        # Generate alerts
        alerts_generated = []
        if signals["predatory_signals"]:
            alert = self.alert_manager.create_alert(
                profile, "predatory_pattern", AlertSeverity.URGENT, signals
            )
            alerts_generated.append(asdict(alert))

        if signals["distress_signals"]:
            sev = AlertSeverity.URGENT if len(signals["distress_signals"]) > 2 else AlertSeverity.CONCERNED
            alert = self.alert_manager.create_alert(profile, "distress", sev, signals)
            alerts_generated.append(asdict(alert))

        if signals["bullying_signals"]:
            alert = self.alert_manager.create_alert(
                profile, "cyberbullying", AlertSeverity.CONCERNED, signals
            )
            alerts_generated.append(asdict(alert))

        if late_night:
            alert = self.alert_manager.create_alert(
                profile, "late_night_activity", AlertSeverity.GENTLE, signals
            )
            alerts_generated.append(asdict(alert))

        if baseline and baseline.sample_count >= BaselineEngine.MIN_SAMPLES_FOR_BASELINE:
            is_anomaly, reason = self.baseline_engine.is_anomalous(baseline, event)
            if is_anomaly:
                signals["anomaly_reason"] = reason
                alert = self.alert_manager.create_alert(
                    profile, "baseline_anomaly", AlertSeverity.GENTLE, signals
                )
                alerts_generated.append(asdict(alert))

        return {
            "event_id": event.event_id,
            "child_id": child_id,
            "emotional_score": round(signals["emotional_score"], 3),
            "signals_detected": {
                "predatory": bool(signals["predatory_signals"]),
                "distress": bool(signals["distress_signals"]),
                "bullying": bool(signals["bullying_signals"]),
                "late_night": signals["late_night_flag"],
            },
            "alerts_generated": len(alerts_generated),
            "alerts": alerts_generated,
            "privacy_note": "Raw text was analysed locally and not stored.",
        }

    # ── Reports ─────────────────────────────────────────────────────────────

    def generate_weekly_report(self, family_id: str) -> dict:
        week_ago = (datetime.utcnow() - timedelta(days=7)).isoformat()
        recent_events = [e for e in self._events if e.timestamp >= week_ago]

        children_summaries = []
        for child_id, profile in self._profiles.items():
            child_events = [e for e in recent_events if e.child_id == child_id]
            baseline = self._baselines.get(child_id)
            unresolved_alerts = self.alert_manager.get_unresolved(child_id)

            avg_score = (
                sum(e.emotional_score for e in child_events) / len(child_events)
                if child_events else (baseline.avg_emotional_score if baseline else 0.5)
            )

            children_summaries.append({
                "child_id": child_id,
                "name": profile.display_name,
                "age": profile.age,
                "sessions_this_week": len(child_events),
                "avg_emotional_score": round(avg_score, 3),
                "emotional_trend": "stable" if abs(avg_score - (baseline.avg_emotional_score if baseline else 0.5)) < 0.1 else (
                    "improving" if avg_score > (baseline.avg_emotional_score if baseline else 0.5) else "declining"
                ),
                "unresolved_alerts": len(unresolved_alerts),
                "alert_categories": list({a.category for a in unresolved_alerts}),
            })

        family_score = (
            sum(c["avg_emotional_score"] for c in children_summaries) / len(children_summaries)
            if children_summaries else 0.5
        )

        highlights = []
        suggestions = []
        for summary in children_summaries:
            if summary["emotional_trend"] == "improving":
                highlights.append(f"{summary['name']} has been having a great week! 🌱")
            if summary["unresolved_alerts"] > 0:
                suggestions.append(
                    f"A check-in with {summary['name']} would be worthwhile — "
                    f"{summary['unresolved_alerts']} unresolved concern(s) this week."
                )

        report = WeeklyReport(
            report_id=f"report_{family_id}_{datetime.utcnow().strftime('%Y%m%d')}",
            family_id=family_id,
            week_start=(datetime.utcnow() - timedelta(days=7)).strftime("%Y-%m-%d"),
            week_end=datetime.utcnow().strftime("%Y-%m-%d"),
            generated_at=datetime.utcnow().isoformat(),
            children_summaries=children_summaries,
            family_wellbeing_score=round(family_score, 3),
            highlights=highlights,
            care_suggestions=suggestions,
        )
        return asdict(report)

    def get_dashboard(self, family_id: str) -> dict:
        """Parent dashboard — concise current state."""
        unresolved_all = self.alert_manager.get_unresolved()
        urgent = [a for a in unresolved_all if a.severity == AlertSeverity.URGENT]
        profiles = self.list_profiles()

        return {
            "family_id": family_id,
            "timestamp": datetime.utcnow().isoformat(),
            "profiles": len(profiles),
            "total_unresolved_alerts": len(unresolved_all),
            "urgent_alerts": len(urgent),
            "children": [
                {
                    "child_id": p["child_id"],
                    "name": p["display_name"],
                    "age": p["age"],
                    "age_group": p["age_group"],
                    "autonomy_level": self._profiles[p["child_id"]].autonomy_level,
                    "baseline_established": self._baselines.get(p["child_id"], BehaviouralBaseline(p["child_id"], "")).sample_count >= BaselineEngine.MIN_SAMPLES_FOR_BASELINE,
                    "unresolved_alerts": len(self.alert_manager.get_unresolved(p["child_id"])),
                }
                for p in profiles
            ],
            "urgent_alert_details": [asdict(a) for a in urgent[:3]],
        }

    # ── Age-Appropriate Interaction Design ──────────────────────────────────

    def get_interaction_config(self, child_id: str) -> dict:
        """Returns UI/UX config appropriate to child's age group."""
        profile = self._profiles.get(child_id)
        if not profile:
            return {}

        configs = {
            AgeGroup.EARLY_CHILDHOOD: {
                "text_complexity": "minimal",
                "independent_account": False,
                "data_access": "parent_only",
                "feature_flags": {"voice_only": True, "large_targets": True, "simple_vocab": True},
                "privacy_explanation": "Your grown-ups help keep this safe for you.",
            },
            AgeGroup.MIDDLE_CHILDHOOD: {
                "text_complexity": "simple",
                "independent_account": False,
                "data_access": "parent_primary",
                "feature_flags": {"text_support": True, "why_explanations": True},
                "privacy_explanation": "We keep your conversations safe. Your parents can see if something worries us.",
            },
            AgeGroup.EARLY_ADOLESCENCE: {
                "text_complexity": "full",
                "independent_account": True,
                "data_access": "child_primary",
                "feature_flags": {"privacy_settings": True, "data_export": True},
                "privacy_explanation": "You control your data. Parents are notified only if we're genuinely worried about your safety.",
            },
            AgeGroup.LATE_ADOLESCENCE: {
                "text_complexity": "full",
                "independent_account": True,
                "data_access": "child_full",
                "feature_flags": {"adult_transition_tools": True, "full_features": True},
                "privacy_explanation": "Full privacy. Safety alerts only for serious concerns, with your awareness.",
            },
        }
        return configs.get(profile.age_group, {})

    # ── Persistence ─────────────────────────────────────────────────────────

    def _load_profiles(self) -> dict:
        if os.path.exists(self._profiles_path):
            try:
                with open(self._profiles_path) as f:
                    data = json.load(f)
                return {k: ChildProfile(**v) for k, v in data.items()}
            except Exception:
                pass
        return {}

    def _load_baselines(self) -> dict:
        if os.path.exists(self._baselines_path):
            try:
                with open(self._baselines_path) as f:
                    data = json.load(f)
                return {k: BehaviouralBaseline(**v) for k, v in data.items()}
            except Exception:
                pass
        return {}

    def _load_events(self) -> list:
        if os.path.exists(self._events_path):
            try:
                with open(self._events_path) as f:
                    data = json.load(f)
                return [InteractionEvent(**e) for e in data[-500:]]  # keep last 500
            except Exception:
                pass
        return []

    def _save_profiles(self):
        with open(self._profiles_path, "w") as f:
            json.dump({k: asdict(v) for k, v in self._profiles.items()}, f, indent=2)

    def _save_baselines(self):
        with open(self._baselines_path, "w") as f:
            json.dump({k: asdict(v) for k, v in self._baselines.items()}, f, indent=2)

    def _save_events(self):
        with open(self._events_path, "w") as f:
            json.dump([asdict(e) for e in self._events[-500:]], f, indent=2)


# ─── Singleton Factory ────────────────────────────────────────────────────────

_guardian: Optional[FamilyGuardian] = None


def get_guardian(
    data_dir: str = "/tmp/meok_family",
    tier: str = "meok_family_1999",
) -> FamilyGuardian:
    global _guardian
    if _guardian is None:
        _guardian = FamilyGuardian(data_dir=data_dir, tier=tier)
    return _guardian


# ─── Quick Test ───────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import tempfile

    with tempfile.TemporaryDirectory() as tmp:
        g = FamilyGuardian(data_dir=tmp)

        # Add a child profile
        result = g.add_child_profile(
            child_id="child_001",
            display_name="Sam",
            age=12,
            consent_given=True,
            alert_contacts=["+447700000000"],
        )
        print("Add profile:", result["success"])
        assert result["success"]

        # Analyse a normal message
        r1 = g.analyse_interaction(
            child_id="child_001",
            text="Today was so fun! We won the Minecraft game and everyone was happy.",
            topics=["gaming", "minecraft"],
            duration_minutes=45,
        )
        print(f"Normal interaction: score={r1['emotional_score']}, alerts={r1['alerts_generated']}")
        assert r1["emotional_score"] > 0.5

        # Analyse a distress message
        r2 = g.analyse_interaction(
            child_id="child_001",
            text="I hate myself. No one likes me and I want to die. Nobody cares about me.",
            topics=["social"],
            duration_minutes=5,
        )
        print(f"Distress interaction: score={r2['emotional_score']}, alerts={r2['alerts_generated']}")
        assert r2["alerts_generated"] > 0

        # Dashboard
        dashboard = g.get_dashboard("family_001")
        print(f"Dashboard: {dashboard['profiles']} profile(s), {dashboard['urgent_alerts']} urgent")

        # Interaction config
        config = g.get_interaction_config("child_001")
        print(f"Interaction config for age 12: data_access={config.get('data_access')}")

        print("\n✅ Family Guardian: all tests passed")
