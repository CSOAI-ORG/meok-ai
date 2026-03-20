"""
MCP Tools — Care Shield
Always-on sovereign monitoring tools exposed via MCP server.
"""

from __future__ import annotations

import logging
from typing import Any

logger = logging.getLogger("meok.mcp.care_shield")

CARE_SHIELD_TOOLS = [
    {
        "name": "shield_start_monitoring",
        "description": (
            "Add a MonitorProfile to Care Shield continuous monitoring. "
            "Shield will watch for new breaches, dark web mentions, and exposure changes. "
            "Privacy-first: raw data not stored, only SHA-256 hashes retained."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "user_id": {
                    "type": "string",
                    "description": "Unique identifier for this monitoring profile",
                },
                "email": {"type": "string", "description": "Email address to monitor"},
                "username": {"type": "string", "description": "Username to monitor across platforms"},
                "full_name": {"type": "string", "description": "Full name for data broker monitoring"},
                "domain": {"type": "string", "description": "Domain to monitor for exposure"},
                "phone": {"type": "string", "description": "Phone number to monitor for platform leakage"},
                "check_interval_hours": {
                    "type": "number",
                    "description": "How often to re-check (in hours, default 24)",
                    "default": 24,
                },
                "notification_channels": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": "Notification channels: email, whatsapp, push",
                    "default": ["email"],
                },
            },
            "required": ["user_id"],
        },
    },
    {
        "name": "shield_check_now",
        "description": (
            "Run an immediate Care Shield check for a monitored profile. "
            "Compares current OSINT findings against previous baseline. "
            "Returns only NEW findings since the last check."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "profile_id": {
                    "type": "string",
                    "description": "Profile ID to run the check for",
                },
            },
            "required": ["profile_id"],
        },
    },
    {
        "name": "shield_get_alerts",
        "description": "Get pending Care Shield alerts for a monitored profile.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "profile_id": {
                    "type": "string",
                    "description": "Profile ID to get alerts for",
                },
                "unread_only": {
                    "type": "boolean",
                    "description": "Return only unread alerts (default: true)",
                    "default": True,
                },
            },
            "required": ["profile_id"],
        },
    },
    {
        "name": "shield_dismiss_alert",
        "description": "Mark a Care Shield alert as read/dismissed.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "alert_id": {
                    "type": "string",
                    "description": "Alert ID to dismiss",
                },
            },
            "required": ["alert_id"],
        },
    },
    {
        "name": "shield_status",
        "description": (
            "Get a summary of all Care Shield monitored profiles, "
            "their last check time, whether they are due for a new check, "
            "and the count of unread alerts per profile."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
]


async def handle_care_shield(tool_name: str, arguments: dict) -> Any:
    try:
        from meok.core.care_shield import get_care_shield, MonitorProfile

        shield = get_care_shield()

        if tool_name == "shield_start_monitoring":
            profile = MonitorProfile(
                user_id=arguments["user_id"],
                email=arguments.get("email"),
                username=arguments.get("username"),
                full_name=arguments.get("full_name"),
                domain=arguments.get("domain"),
                phone=arguments.get("phone"),
                check_interval_hours=float(arguments.get("check_interval_hours", 24)),
                notification_channels=arguments.get("notification_channels", ["email"]),
            )
            return shield.start_monitoring(profile)

        elif tool_name == "shield_check_now":
            profile_id = arguments.get("profile_id", "").strip()
            if not profile_id:
                return {"error": "profile_id is required"}
            alerts = await shield.run_check(profile_id)
            return {
                "profile_id": profile_id,
                "new_alert_count": len(alerts),
                "alerts": [
                    {
                        "alert_id": a.alert_id,
                        "type": a.alert_type,
                        "severity": a.severity,
                        "title": a.title,
                        "action_required": a.action_required,
                        "detected_at": a.detected_at,
                    }
                    for a in alerts
                ],
            }

        elif tool_name == "shield_get_alerts":
            profile_id = arguments.get("profile_id", "").strip()
            if not profile_id:
                return {"error": "profile_id is required"}
            unread_only = arguments.get("unread_only", True)
            alerts = shield.get_alerts(profile_id, unread_only=unread_only)
            return {
                "profile_id": profile_id,
                "count": len(alerts),
                "unread_only": unread_only,
                "alerts": [a.to_dict() for a in alerts],
            }

        elif tool_name == "shield_dismiss_alert":
            alert_id = arguments.get("alert_id", "").strip()
            if not alert_id:
                return {"error": "alert_id is required"}
            success = shield.mark_read(alert_id)
            return {"alert_id": alert_id, "dismissed": success}

        elif tool_name == "shield_status":
            return shield.get_status()

        return {"error": f"Unknown Care Shield tool: {tool_name}"}

    except Exception as e:
        logger.error("Care Shield MCP error in %s: %s", tool_name, e)
        return {"error": str(e)}
