"""
Notification Service — Alert delivery for Care Shield and Family Guardian.

Supports three channels (in priority order for "auto" routing):
  1. WhatsApp via Twilio (real send if TWILIO_ACCOUNT_SID configured)
  2. Web Push via pywebpush (queued if library unavailable)
  3. Email via Resend API (real send if RESEND_API_KEY configured)

Env vars:
  TWILIO_ACCOUNT_SID   — enables real WhatsApp sends
  TWILIO_AUTH_TOKEN    — required with TWILIO_ACCOUNT_SID
  TWILIO_FROM_NUMBER   — your Twilio WhatsApp number (e.g. whatsapp:+14155238886)
  RESEND_API_KEY       — enables real email sends via Resend

If none are configured all notifications are logged at INFO level (safe fallback).

Architecture:
  NotificationService
    → WhatsAppNotifier   (Twilio)
    → PushNotifier       (pywebpush queue)
    → EmailNotifier      (Resend API)
  notify(channel, recipient, subject, body, urgency) — tries channels in order
"""

from __future__ import annotations

import json
import logging
import os
import urllib.request
import urllib.parse
import urllib.error
from dataclasses import dataclass, field, asdict
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

# Persistent push queue dir
NOTIF_DIR = Path(os.environ.get("MEOK_NOTIF_DIR", Path.home() / ".meok" / "notifications"))

# Per-user recipient config
RECIPIENTS_FILE = NOTIF_DIR / "recipients.json"


# ── Recipient config ───────────────────────────────────────────────────────────

def _load_recipients() -> Dict[str, Dict[str, str]]:
    if RECIPIENTS_FILE.exists():
        try:
            return json.loads(RECIPIENTS_FILE.read_text())
        except Exception:
            pass
    return {}


def _save_recipients(data: Dict[str, Dict[str, str]]):
    NOTIF_DIR.mkdir(parents=True, exist_ok=True)
    RECIPIENTS_FILE.write_text(json.dumps(data, indent=2))


def configure_whatsapp_recipient(user_id: str, phone: str) -> Dict[str, Any]:
    """Store a WhatsApp recipient number for a user."""
    recipients = _load_recipients()
    if user_id not in recipients:
        recipients[user_id] = {}
    recipients[user_id]["whatsapp"] = phone
    _save_recipients(recipients)
    return {"user_id": user_id, "whatsapp": phone, "configured": True}


def configure_email_recipient(user_id: str, email: str) -> Dict[str, Any]:
    """Store an email recipient for a user."""
    recipients = _load_recipients()
    if user_id not in recipients:
        recipients[user_id] = {}
    recipients[user_id]["email"] = email
    _save_recipients(recipients)
    return {"user_id": user_id, "email": email, "configured": True}


def get_recipient(user_id: str) -> Dict[str, str]:
    return _load_recipients().get(user_id, {})


# ── WhatsApp via Twilio ────────────────────────────────────────────────────────

class WhatsAppNotifier:
    """
    Sends WhatsApp messages via Twilio.
    If TWILIO_ACCOUNT_SID is not set, logs the message instead.
    """

    def is_configured(self) -> bool:
        return bool(
            os.environ.get("TWILIO_ACCOUNT_SID")
            and os.environ.get("TWILIO_AUTH_TOKEN")
            and os.environ.get("TWILIO_FROM_NUMBER")
        )

    async def send_whatsapp(self, to_number: str, message: str) -> Dict[str, Any]:
        if not to_number:
            return {"success": False, "error": "No recipient number"}

        if not self.is_configured():
            logger.info(
                "[WhatsApp STUB] To: %s | Message: %s",
                to_number, message[:100]
            )
            return {
                "success": True,
                "stub": True,
                "reason": "TWILIO_ACCOUNT_SID not configured — message logged only",
                "to": to_number,
                "message_preview": message[:80],
            }

        try:
            account_sid = os.environ["TWILIO_ACCOUNT_SID"]
            auth_token  = os.environ["TWILIO_AUTH_TOKEN"]
            from_number = os.environ["TWILIO_FROM_NUMBER"]

            # Ensure whatsapp: prefix
            to_wa   = to_number if to_number.startswith("whatsapp:") else f"whatsapp:{to_number}"
            from_wa = from_number if from_number.startswith("whatsapp:") else f"whatsapp:{from_number}"

            url = f"https://api.twilio.com/2010-04-01/Accounts/{account_sid}/Messages.json"
            payload = urllib.parse.urlencode({
                "To": to_wa,
                "From": from_wa,
                "Body": message[:1600],   # Twilio WhatsApp limit
            }).encode()

            import base64
            credentials = base64.b64encode(f"{account_sid}:{auth_token}".encode()).decode()
            req = urllib.request.Request(
                url,
                data=payload,
                headers={
                    "Authorization": f"Basic {credentials}",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            )
            with urllib.request.urlopen(req, timeout=10) as resp:
                result = json.loads(resp.read())
                sid = result.get("sid", "unknown")
                logger.info("WhatsApp sent to %s — SID: %s", to_wa, sid)
                return {"success": True, "sid": sid, "to": to_wa}

        except urllib.error.HTTPError as e:
            body = e.read().decode(errors="replace")
            logger.error("Twilio WhatsApp HTTP error %s: %s", e.code, body)
            return {"success": False, "error": f"Twilio {e.code}: {body[:200]}"}
        except Exception as exc:
            logger.error("WhatsApp send failed: %s", exc)
            return {"success": False, "error": str(exc)}


# ── Web Push ───────────────────────────────────────────────────────────────────

class PushNotifier:
    """
    Sends Web Push notifications via pywebpush.
    If pywebpush is not available, queues the payload to a local file.
    """

    QUEUE_FILE = NOTIF_DIR / "push_queue.json"

    def is_available(self) -> bool:
        try:
            import importlib
            importlib.import_module("pywebpush")
            return True
        except ImportError:
            return False

    async def send_push(
        self, subscription: Dict[str, Any], payload: Dict[str, Any]
    ) -> Dict[str, Any]:
        if not subscription:
            return {"success": False, "error": "No subscription provided"}

        if not self.is_available():
            # Queue for later delivery
            return self._queue_push(subscription, payload)

        try:
            from pywebpush import webpush, WebPushException  # type: ignore

            vapid_private_key = os.environ.get("VAPID_PRIVATE_KEY", "")
            vapid_claims = {
                "sub": os.environ.get("VAPID_SUBJECT", "mailto:admin@meok.ai"),
            }

            if not vapid_private_key:
                return self._queue_push(subscription, payload)

            webpush(
                subscription_info=subscription,
                data=json.dumps(payload),
                vapid_private_key=vapid_private_key,
                vapid_claims=vapid_claims,
            )
            return {"success": True, "method": "webpush"}

        except Exception as exc:
            logger.warning("Web push failed, queuing: %s", exc)
            return self._queue_push(subscription, payload)

    def _queue_push(self, subscription: Dict[str, Any], payload: Dict[str, Any]) -> Dict[str, Any]:
        """Store push notification in local queue when pywebpush unavailable."""
        NOTIF_DIR.mkdir(parents=True, exist_ok=True)
        queue = []
        if self.QUEUE_FILE.exists():
            try:
                queue = json.loads(self.QUEUE_FILE.read_text())
            except Exception:
                pass
        queue.append({
            "queued_at": datetime.utcnow().isoformat(),
            "subscription": subscription,
            "payload": payload,
        })
        self.QUEUE_FILE.write_text(json.dumps(queue, indent=2))
        logger.info("[Push QUEUE] Queued push notification (pywebpush unavailable)")
        return {
            "success": True,
            "queued": True,
            "reason": "pywebpush not available — queued to file",
            "queue_length": len(queue),
        }


# ── Email via Resend ───────────────────────────────────────────────────────────

class EmailNotifier:
    """
    Sends emails via the Resend API.
    If RESEND_API_KEY is not set, logs the email instead.
    Resend API: POST https://api.resend.com/emails
    """

    RESEND_API_URL = "https://api.resend.com/emails"
    FROM_DEFAULT   = os.environ.get("RESEND_FROM_EMAIL", "alerts@meok.ai")

    def is_configured(self) -> bool:
        return bool(os.environ.get("RESEND_API_KEY"))

    async def send_email(
        self,
        to: str,
        subject: str,
        body: str,
        from_email: Optional[str] = None,
        html: Optional[str] = None,
    ) -> Dict[str, Any]:
        if not to:
            return {"success": False, "error": "No recipient email"}

        if not self.is_configured():
            logger.info(
                "[Email STUB] To: %s | Subject: %s | Body: %s...",
                to, subject, body[:80]
            )
            return {
                "success": True,
                "stub": True,
                "reason": "RESEND_API_KEY not configured — email logged only",
                "to": to,
                "subject": subject,
            }

        try:
            api_key = os.environ["RESEND_API_KEY"]
            payload = {
                "from": from_email or self.FROM_DEFAULT,
                "to": [to],
                "subject": subject,
                "text": body,
            }
            if html:
                payload["html"] = html

            data = json.dumps(payload).encode()
            req = urllib.request.Request(
                self.RESEND_API_URL,
                data=data,
                headers={
                    "Authorization": f"Bearer {api_key}",
                    "Content-Type": "application/json",
                },
            )
            with urllib.request.urlopen(req, timeout=10) as resp:
                result = json.loads(resp.read())
                email_id = result.get("id", "unknown")
                logger.info("Email sent to %s — Resend ID: %s", to, email_id)
                return {"success": True, "id": email_id, "to": to}

        except urllib.error.HTTPError as e:
            body_err = e.read().decode(errors="replace")
            logger.error("Resend API HTTP error %s: %s", e.code, body_err)
            return {"success": False, "error": f"Resend {e.code}: {body_err[:200]}"}
        except Exception as exc:
            logger.error("Email send failed: %s", exc)
            return {"success": False, "error": str(exc)}


# ── NotificationService ────────────────────────────────────────────────────────

class NotificationService:
    """
    Unified notification dispatcher.
    Tries channels in priority order: whatsapp → push → email.
    Channel "auto" tries all configured channels.
    """

    CHANNEL_PRIORITY = ["whatsapp", "push", "email"]

    def __init__(self):
        self.whatsapp = WhatsAppNotifier()
        self.push     = PushNotifier()
        self.email    = EmailNotifier()

    async def notify(
        self,
        channel: str,
        recipient: str,
        subject: str,
        body: str,
        urgency: str = "normal",
        push_subscription: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        """
        Deliver a notification.
        channel: "whatsapp" | "email" | "push" | "auto"
        recipient: phone number (WhatsApp), email address, or user_id (auto)
        urgency: "normal" | "high"
        """
        results = {}

        channels = self.CHANNEL_PRIORITY if channel == "auto" else [channel]

        for ch in channels:
            try:
                if ch == "whatsapp":
                    # recipient may be a user_id — look up stored number
                    phone = recipient
                    if "@" in recipient or not recipient.startswith("+"):
                        # Looks like email or user_id — look up from config
                        stored = get_recipient(recipient)
                        phone = stored.get("whatsapp", "")
                    if phone:
                        result = await self.whatsapp.send_whatsapp(phone, f"{subject}\n\n{body}")
                        results["whatsapp"] = result

                elif ch == "email":
                    to_email = recipient
                    if not "@" in recipient:
                        stored = get_recipient(recipient)
                        to_email = stored.get("email", "")
                    if to_email:
                        result = await self.email.send_email(to_email, subject, body)
                        results["email"] = result

                elif ch == "push":
                    if push_subscription:
                        payload = {
                            "title": subject,
                            "body": body[:160],
                            "urgency": urgency,
                            "timestamp": datetime.utcnow().isoformat(),
                        }
                        result = await self.push.send_push(push_subscription, payload)
                        results["push"] = result

            except Exception as exc:
                logger.warning("Notification channel %s failed: %s", ch, exc)
                results[ch] = {"success": False, "error": str(exc)}

        if not results:
            logger.info(
                "[Notification FALLBACK] No channel delivered. "
                "Subject: %s | Recipient: %s", subject, recipient
            )
            return {"success": False, "reason": "no configured channels", "subject": subject}

        any_success = any(r.get("success") for r in results.values())
        return {
            "success": any_success,
            "channels_attempted": list(results.keys()),
            "results": results,
        }

    async def test_all_channels(self, test_recipient: str) -> Dict[str, Any]:
        """Test all configured notification channels."""
        return await self.notify(
            channel="auto",
            recipient=test_recipient,
            subject="[MEOK Care Shield] Notification test",
            body=(
                "This is a test notification from MEOK Care Shield. "
                "Your notification channels are working correctly. "
                f"Sent at: {datetime.utcnow().isoformat()}"
            ),
            urgency="normal",
        )

    def get_channel_status(self) -> Dict[str, Any]:
        return {
            "whatsapp": {
                "configured": self.whatsapp.is_configured(),
                "env_vars": ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_FROM_NUMBER"],
            },
            "push": {
                "available": self.push.is_available(),
                "env_vars": ["VAPID_PRIVATE_KEY", "VAPID_SUBJECT"],
                "queue_file": str(self.push.QUEUE_FILE),
            },
            "email": {
                "configured": self.email.is_configured(),
                "env_vars": ["RESEND_API_KEY", "RESEND_FROM_EMAIL"],
            },
        }


# ── Singleton ──────────────────────────────────────────────────────────────────

_notification_service: Optional[NotificationService] = None


def get_notification_service() -> NotificationService:
    global _notification_service
    if _notification_service is None:
        _notification_service = NotificationService()
    return _notification_service
