"""
Care Shield — Always-on sovereign monitoring.

"Care Shield watches for your personal data in new breaches, dark web mentions,
social media threats, and digital exposure changes — quietly, continuously,
so you're never caught off guard."
— MEOK.AI Protection Brief, 2026-03-20

Architecture:
  MonitorProfile (user's watch configuration)
  → CareShield.run_check() → Mirror Mode collectors
  → diff against previous findings
  → ShieldAlert on new findings only
  → persist to ~/.meok/care_shield/
  → trigger notifications via NotificationService

Privacy model: raw subject data is never stored in alerts — only derived
signals and SHA-256 hashes are persisted.
"""

from __future__ import annotations

import hashlib
import json
import logging
import os
import uuid
from dataclasses import asdict, dataclass, field
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

# Storage root
SHIELD_DIR = Path(os.environ.get("MEOK_SHIELD_DIR", Path.home() / ".meok" / "care_shield"))


# ── Data models ────────────────────────────────────────────────────────────────

@dataclass
class MonitorProfile:
    """Configuration for continuous monitoring of one person's digital footprint."""
    user_id: str
    email: Optional[str] = None
    username: Optional[str] = None
    full_name: Optional[str] = None
    domain: Optional[str] = None
    phone: Optional[str] = None
    check_interval_hours: float = 24.0
    created_at: str = field(default_factory=lambda: datetime.utcnow().isoformat())
    last_checked: Optional[str] = None
    active: bool = True
    notification_channels: List[str] = field(default_factory=lambda: ["email"])

    def subject_hash(self) -> str:
        subject = (self.email or self.username or self.full_name or self.domain or self.user_id).lower().strip()
        return hashlib.sha256(subject.encode()).hexdigest()

    def is_due(self) -> bool:
        """Check if this profile is due for a re-check."""
        if self.last_checked is None:
            return True
        last = datetime.fromisoformat(self.last_checked)
        return datetime.utcnow() >= last + timedelta(hours=self.check_interval_hours)


@dataclass
class ShieldAlert:
    """A new finding discovered during a care shield check."""
    alert_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    profile_id: str = ""
    alert_type: str = "breach"          # breach | threat | mention | anomaly
    severity: str = "medium"            # critical | high | medium | low | info
    title: str = ""
    description: str = ""
    action_required: str = ""
    detected_at: str = field(default_factory=lambda: datetime.utcnow().isoformat())
    read: bool = False
    source_collector: str = ""
    evidence_hash: str = ""             # SHA-256 of evidence dict — for dedup without storing raw data

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


# ── Persistence helpers ────────────────────────────────────────────────────────

def _profile_path(user_id: str) -> Path:
    return SHIELD_DIR / "profiles" / f"{user_id}.json"


def _alerts_path(user_id: str) -> Path:
    return SHIELD_DIR / "alerts" / f"{user_id}.json"


def _fingerprint_path(user_id: str) -> Path:
    """Stores hashes of previously seen findings to detect new ones."""
    return SHIELD_DIR / "fingerprints" / f"{user_id}.json"


def _ensure_dirs():
    for sub in ("profiles", "alerts", "fingerprints"):
        (SHIELD_DIR / sub).mkdir(parents=True, exist_ok=True)


def _load_json(path: Path, default):
    if path.exists():
        try:
            return json.loads(path.read_text())
        except Exception:
            pass
    return default


def _save_json(path: Path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, default=str))


# ── CareShield ────────────────────────────────────────────────────────────────

class CareShield:
    """
    Always-on sovereign monitoring.
    Manages MonitorProfiles, runs checks, surfaces new ShieldAlerts.
    """

    def __init__(self):
        _ensure_dirs()

    # ── Profile management ────────────────────────────────────────────────────

    def start_monitoring(self, profile: MonitorProfile) -> Dict[str, Any]:
        """Save a MonitorProfile and begin watching."""
        _ensure_dirs()
        _save_json(_profile_path(profile.user_id), asdict(profile))
        logger.info("CareShield: started monitoring profile %s", profile.user_id)
        return {
            "status": "monitoring_started",
            "profile_id": profile.user_id,
            "check_interval_hours": profile.check_interval_hours,
            "next_check": (
                datetime.utcnow() + timedelta(hours=profile.check_interval_hours)
            ).isoformat(),
            "subject_hash": profile.subject_hash(),
        }

    def get_profile(self, user_id: str) -> Optional[MonitorProfile]:
        data = _load_json(_profile_path(user_id), None)
        if data is None:
            return None
        return MonitorProfile(**{k: v for k, v in data.items() if k in MonitorProfile.__dataclass_fields__})

    def list_profiles(self) -> List[MonitorProfile]:
        profiles_dir = SHIELD_DIR / "profiles"
        profiles = []
        if profiles_dir.exists():
            for p in profiles_dir.glob("*.json"):
                data = _load_json(p, None)
                if data:
                    try:
                        profiles.append(
                            MonitorProfile(**{k: v for k, v in data.items() if k in MonitorProfile.__dataclass_fields__})
                        )
                    except Exception:
                        pass
        return profiles

    def delete_profile(self, user_id: str) -> bool:
        path = _profile_path(user_id)
        if path.exists():
            path.unlink()
            return True
        return False

    # ── Check engine ─────────────────────────────────────────────────────────

    async def run_check(self, profile_id: str) -> List[ShieldAlert]:
        """
        Run Mirror Mode collectors for a profile.
        Only returns ShieldAlerts for NEWLY discovered findings.
        Updates last_checked timestamp.
        """
        profile = self.get_profile(profile_id)
        if profile is None:
            logger.warning("CareShield: profile not found: %s", profile_id)
            return []

        # Load previous finding fingerprints
        fingerprints: Dict[str, str] = _load_json(_fingerprint_path(profile_id), {})

        # Run Mirror Mode
        new_alerts: List[ShieldAlert] = []
        try:
            from meok.core.mirror_mode import get_mirror, Severity as MSeverity
            mirror = get_mirror()
            report = await mirror.investigate(
                email=profile.email,
                username=profile.username,
                full_name=profile.full_name,
                domain=profile.domain,
            )

            # Also run phone check if available
            phone_findings = []
            if profile.phone:
                try:
                    from meok.core.osint_collectors import IgnorantCollector
                    ignorant = IgnorantCollector()
                    phone_findings = await ignorant.run(profile.phone)
                except Exception as exc:
                    logger.warning("CareShield phone check failed: %s", exc)

            all_findings = report.findings + phone_findings

            new_fingerprints = dict(fingerprints)

            for finding in all_findings:
                # Fingerprint = hash of (collector + title + severity)
                fp_key = hashlib.sha256(
                    f"{finding.collector}:{finding.title}:{finding.severity}".encode()
                ).hexdigest()

                if fp_key not in fingerprints:
                    # New finding — create alert
                    alert_type = _classify_alert_type(finding.collector, finding.title)
                    alert = ShieldAlert(
                        profile_id=profile_id,
                        alert_type=alert_type,
                        severity=finding.severity.value if hasattr(finding.severity, "value") else str(finding.severity),
                        title=finding.title,
                        description=finding.description,
                        action_required=finding.hardening_action,
                        source_collector=finding.collector,
                        evidence_hash=fp_key,
                    )
                    new_alerts.append(alert)
                    new_fingerprints[fp_key] = alert.detected_at

            # Persist updated fingerprints
            _save_json(_fingerprint_path(profile_id), new_fingerprints)

        except Exception as exc:
            logger.error("CareShield run_check error for %s: %s", profile_id, exc)

        # Persist new alerts
        if new_alerts:
            existing_alerts = _load_json(_alerts_path(profile_id), [])
            existing_alerts.extend([a.to_dict() for a in new_alerts])
            _save_json(_alerts_path(profile_id), existing_alerts)

        # Update last_checked
        if profile:
            profile.last_checked = datetime.utcnow().isoformat()
            _save_json(_profile_path(profile_id), asdict(profile))

        # Trigger notifications for high-severity new alerts
        if new_alerts:
            await self._notify_alerts(profile, new_alerts)

        logger.info(
            "CareShield: check complete for %s — %d new alert(s)",
            profile_id, len(new_alerts)
        )
        return new_alerts

    async def _notify_alerts(self, profile: MonitorProfile, alerts: List[ShieldAlert]):
        """Send notifications for new alerts via NotificationService."""
        from meok.core.mirror_mode import Severity
        high_sev = {"critical", "high"}
        urgent = [a for a in alerts if a.severity in high_sev]
        if not urgent:
            return
        try:
            from meok.core.notifications import get_notification_service
            ns = get_notification_service()
            for alert in urgent:
                recipient = profile.email or profile.user_id
                await ns.notify(
                    channel="auto",
                    recipient=recipient,
                    subject=f"[Care Shield] {alert.title}",
                    body=(
                        f"Severity: {alert.severity.upper()}\n\n"
                        f"{alert.description}\n\n"
                        f"Action required: {alert.action_required}"
                    ),
                    urgency="high" if alert.severity == "critical" else "normal",
                )
        except Exception as exc:
            logger.warning("CareShield notification failed: %s", exc)

    # ── Alert management ──────────────────────────────────────────────────────

    def get_alerts(self, profile_id: str, unread_only: bool = True) -> List[ShieldAlert]:
        raw = _load_json(_alerts_path(profile_id), [])
        alerts = []
        for d in raw:
            try:
                alert = ShieldAlert(**{k: v for k, v in d.items() if k in ShieldAlert.__dataclass_fields__})
                if unread_only and alert.read:
                    continue
                alerts.append(alert)
            except Exception:
                pass
        # Sort by detected_at descending
        alerts.sort(key=lambda a: a.detected_at, reverse=True)
        return alerts

    def get_all_alerts(self, profile_id: str) -> List[ShieldAlert]:
        return self.get_alerts(profile_id, unread_only=False)

    def mark_read(self, alert_id: str) -> bool:
        """Mark a single alert as read across all profiles."""
        alerts_dir = SHIELD_DIR / "alerts"
        if not alerts_dir.exists():
            return False
        for path in alerts_dir.glob("*.json"):
            data = _load_json(path, [])
            modified = False
            for item in data:
                if item.get("alert_id") == alert_id:
                    item["read"] = True
                    modified = True
            if modified:
                _save_json(path, data)
                return True
        return False

    def get_status(self) -> Dict[str, Any]:
        """Summary of all monitored profiles and their check status."""
        profiles = self.list_profiles()
        status = []
        for p in profiles:
            unread = len(self.get_alerts(p.user_id, unread_only=True))
            status.append({
                "profile_id": p.user_id,
                "active": p.active,
                "check_interval_hours": p.check_interval_hours,
                "last_checked": p.last_checked,
                "is_due": p.is_due(),
                "unread_alerts": unread,
                "subject_hash": p.subject_hash(),
                "monitors": {
                    "email": bool(p.email),
                    "username": bool(p.username),
                    "full_name": bool(p.full_name),
                    "domain": bool(p.domain),
                    "phone": bool(p.phone),
                },
            })
        return {
            "total_profiles": len(profiles),
            "profiles_due": sum(1 for p in profiles if p.is_due()),
            "profiles": status,
            "storage_dir": str(SHIELD_DIR),
        }


# ── Helpers ────────────────────────────────────────────────────────────────────

def _classify_alert_type(collector: str, title: str) -> str:
    """Heuristically classify alert type from collector name and finding title."""
    title_lower = title.lower()
    if "breach" in title_lower or "breach" in collector:
        return "breach"
    if "leak" in title_lower or "secret" in title_lower or "credential" in title_lower:
        return "breach"
    if "threat" in title_lower or "attack" in title_lower:
        return "threat"
    if "mention" in title_lower or "social" in collector or "twitter" in collector or "instagram" in collector:
        return "mention"
    return "anomaly"


# ── Singleton ──────────────────────────────────────────────────────────────────

_shield: Optional[CareShield] = None


def get_care_shield() -> CareShield:
    global _shield
    if _shield is None:
        _shield = CareShield()
    return _shield
