"""
MCP Tools — Family Guardian
Care-based child safety tools exposed via MCP server.
"""

from __future__ import annotations

import json
import logging
from typing import Any

logger = logging.getLogger("meok.mcp.family_guardian")

FAMILY_GUARDIAN_TOOLS = [
    {
        "name": "family_add_child",
        "description": "Add a child profile to Family Guardian. Requires explicit consent for ages 13+.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "child_id": {"type": "string", "description": "Unique ID for this child profile"},
                "display_name": {"type": "string", "description": "Child's first name or nickname"},
                "age": {"type": "integer", "description": "Child's age in years (5-17)"},
                "consent_given": {"type": "boolean", "description": "Has the child been informed and consented (age-appropriate)?"},
                "alert_contacts": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": "Phone numbers for WhatsApp/SMS alerts (e.g. [\"+447700900000\"])",
                },
            },
            "required": ["child_id", "display_name", "age"],
        },
    },
    {
        "name": "family_analyse_interaction",
        "description": (
            "Analyse a child's interaction text for safety signals. "
            "Raw text is processed locally and NOT stored — only derived signals are persisted. "
            "Returns emotional score, safety flags, and any alerts generated."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "child_id": {"type": "string", "description": "Child profile ID"},
                "text": {"type": "string", "description": "Text to analyse (processed locally, not stored)"},
                "interaction_type": {
                    "type": "string",
                    "enum": ["conversation", "game_session", "search", "social"],
                    "default": "conversation",
                },
                "duration_minutes": {"type": "number", "description": "Session duration in minutes"},
                "topics": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": "Topic tags (e.g. [\"gaming\", \"social\"])",
                },
                "hour_of_day": {"type": "integer", "description": "Hour of day 0-23 (for late-night detection)"},
            },
            "required": ["child_id", "text"],
        },
    },
    {
        "name": "family_dashboard",
        "description": "Get the family dashboard — current alert status, child profiles, and wellbeing overview.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "family_id": {"type": "string", "description": "Family identifier"},
            },
            "required": ["family_id"],
        },
    },
    {
        "name": "family_weekly_report",
        "description": "Generate the weekly family wellness report with per-child summaries and care suggestions.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "family_id": {"type": "string", "description": "Family identifier"},
            },
            "required": ["family_id"],
        },
    },
    {
        "name": "family_get_alerts",
        "description": "Get unresolved alerts for a child or all children.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "child_id": {"type": "string", "description": "Child ID (optional — omit for all children)"},
            },
        },
    },
    {
        "name": "family_resolve_alert",
        "description": "Mark a family alert as resolved with optional parent notes.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "alert_id": {"type": "string", "description": "Alert ID to resolve"},
                "notes": {"type": "string", "description": "Parent notes on resolution"},
            },
            "required": ["alert_id"],
        },
    },
    {
        "name": "family_interaction_config",
        "description": "Get age-appropriate UI/UX configuration for a child's profile.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "child_id": {"type": "string", "description": "Child profile ID"},
            },
            "required": ["child_id"],
        },
    },
]


async def handle_family_guardian(tool_name: str, arguments: dict) -> Any:
    try:
        from core.family_guardian import get_guardian
        g = get_guardian()

        if tool_name == "family_add_child":
            return g.add_child_profile(
                child_id=arguments["child_id"],
                display_name=arguments["display_name"],
                age=arguments["age"],
                consent_given=arguments.get("consent_given", False),
                alert_contacts=arguments.get("alert_contacts", []),
            )

        elif tool_name == "family_analyse_interaction":
            return g.analyse_interaction(
                child_id=arguments["child_id"],
                text=arguments["text"],
                interaction_type=arguments.get("interaction_type", "conversation"),
                duration_minutes=arguments.get("duration_minutes", 0.0),
                topics=arguments.get("topics"),
                hour_of_day=arguments.get("hour_of_day"),
            )

        elif tool_name == "family_dashboard":
            return g.get_dashboard(arguments["family_id"])

        elif tool_name == "family_weekly_report":
            return g.generate_weekly_report(arguments["family_id"])

        elif tool_name == "family_get_alerts":
            alerts = g.alert_manager.get_unresolved(arguments.get("child_id"))
            from dataclasses import asdict
            return {"alerts": [asdict(a) for a in alerts], "count": len(alerts)}

        elif tool_name == "family_resolve_alert":
            success = g.alert_manager.resolve(
                arguments["alert_id"],
                notes=arguments.get("notes", ""),
            )
            return {"success": success}

        elif tool_name == "family_interaction_config":
            return g.get_interaction_config(arguments["child_id"])

        return {"error": f"Unknown family guardian tool: {tool_name}"}

    except Exception as e:
        logger.error("Family Guardian MCP error in %s: %s", tool_name, e)
        return {"error": str(e)}
