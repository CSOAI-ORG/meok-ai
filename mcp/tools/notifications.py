"""
MCP Tools — Notification Service
Test and configure notification channels for Care Shield and Family Guardian alerts.
"""

from __future__ import annotations

import logging
from typing import Any

logger = logging.getLogger("meok.mcp.notifications")

NOTIFICATION_TOOLS = [
    {
        "name": "notify_test",
        "description": (
            "Test all configured notification channels by sending a test message. "
            "Returns which channels are configured, available, and whether delivery succeeded."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "recipient": {
                    "type": "string",
                    "description": (
                        "Test recipient: email address, phone number, or user_id. "
                        "If user_id, looks up stored recipient config."
                    ),
                },
            },
            "required": ["recipient"],
        },
    },
    {
        "name": "notify_configure_whatsapp",
        "description": (
            "Store a WhatsApp recipient phone number for a user. "
            "Care Shield and Family Guardian alerts will be sent to this number "
            "when TWILIO_ACCOUNT_SID is configured."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "user_id": {
                    "type": "string",
                    "description": "User or profile ID to configure",
                },
                "phone": {
                    "type": "string",
                    "description": "WhatsApp number with country code (e.g. +447700900000)",
                },
            },
            "required": ["user_id", "phone"],
        },
    },
    {
        "name": "notify_configure_email",
        "description": (
            "Store an email recipient address for a user. "
            "Care Shield and Family Guardian alerts will be sent to this address "
            "when RESEND_API_KEY is configured."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "user_id": {
                    "type": "string",
                    "description": "User or profile ID to configure",
                },
                "email": {
                    "type": "string",
                    "description": "Email address for alert delivery",
                },
            },
            "required": ["user_id", "email"],
        },
    },
]


async def handle_notifications_tool(tool_name: str, arguments: dict) -> Any:
    try:
        from meok.core.notifications import (
            get_notification_service,
            configure_whatsapp_recipient,
            configure_email_recipient,
        )

        if tool_name == "notify_test":
            recipient = arguments.get("recipient", "").strip()
            if not recipient:
                return {"error": "recipient is required"}
            ns = get_notification_service()
            channel_status = ns.get_channel_status()
            test_result = await ns.test_all_channels(recipient)
            return {
                "recipient": recipient,
                "channel_status": channel_status,
                "test_result": test_result,
            }

        elif tool_name == "notify_configure_whatsapp":
            user_id = arguments.get("user_id", "").strip()
            phone   = arguments.get("phone", "").strip()
            if not user_id or not phone:
                return {"error": "user_id and phone are required"}
            result = configure_whatsapp_recipient(user_id, phone)
            ns = get_notification_service()
            result["twilio_configured"] = ns.whatsapp.is_configured()
            if not ns.whatsapp.is_configured():
                result["note"] = (
                    "TWILIO_ACCOUNT_SID not set — messages will be logged. "
                    "Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER to enable real WhatsApp sends."
                )
            return result

        elif tool_name == "notify_configure_email":
            user_id = arguments.get("user_id", "").strip()
            email   = arguments.get("email", "").strip()
            if not user_id or not email:
                return {"error": "user_id and email are required"}
            result = configure_email_recipient(user_id, email)
            ns = get_notification_service()
            result["resend_configured"] = ns.email.is_configured()
            if not ns.email.is_configured():
                result["note"] = (
                    "RESEND_API_KEY not set — emails will be logged. "
                    "Set RESEND_API_KEY to enable real email delivery."
                )
            return result

        return {"error": f"Unknown notification tool: {tool_name}"}

    except Exception as e:
        logger.error("Notification MCP error in %s: %s", tool_name, e)
        return {"error": str(e)}
