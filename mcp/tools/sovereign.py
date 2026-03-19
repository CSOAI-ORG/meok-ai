"""
MCP Tools — Sovereign Core
Exposes the 7-lifecycle-method orchestration layer via MCP.
"""

from __future__ import annotations
import logging
from typing import Any

logger = logging.getLogger("meok.mcp.sovereign")

SOVEREIGN_TOOLS = [
    {
        "name": "sovereign_process",
        "description": (
            "Run the full 7-step Sovereign pipeline on any input: "
            "perceive → think → route → act → remember → evolve. "
            "Returns intent classification, routing decision, response, latency, and care score."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "input": {"type": "string", "description": "User input / request to process"},
                "entity_id": {"type": "string", "default": "nick", "description": "Entity/user ID"},
            },
            "required": ["input"],
        },
    },
    {
        "name": "sovereign_state",
        "description": "Get the current Sovereign state machine status and live metrics.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "entity_id": {"type": "string", "default": "nick"},
            },
        },
    },
    {
        "name": "sovereign_transition",
        "description": "Manually trigger a Sovereign state transition (idle/listening/processing/gaming/protecting/sleeping).",
        "inputSchema": {
            "type": "object",
            "properties": {
                "new_state": {
                    "type": "string",
                    "enum": ["idle", "listening", "processing", "gaming", "protecting", "sleeping"],
                },
                "reason": {"type": "string", "description": "Why this transition is needed"},
                "entity_id": {"type": "string", "default": "nick"},
            },
            "required": ["new_state"],
        },
    },
    {
        "name": "sovereign_classify_intent",
        "description": "Classify the intent of a piece of text — category, confidence, autonomy mode, privacy flag.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "text": {"type": "string", "description": "Text to classify"},
            },
            "required": ["text"],
        },
    },
]


async def handle_sovereign(tool_name: str, arguments: dict) -> Any:
    try:
        from core.sovereign_core import get_sovereign, SovereignState
        sov = get_sovereign(arguments.get("entity_id", "nick"))

        if tool_name == "sovereign_process":
            return await sov.process(arguments["input"])

        elif tool_name == "sovereign_state":
            return sov.get_metrics()

        elif tool_name == "sovereign_transition":
            state_map = {s.value: s for s in SovereignState}
            new_state = state_map.get(arguments["new_state"])
            if not new_state:
                return {"error": f"Unknown state: {arguments['new_state']}"}
            success = sov.transition(new_state, arguments.get("reason", "manual"))
            return {"success": success, "current_state": sov.state.value}

        elif tool_name == "sovereign_classify_intent":
            import asyncio
            from core.sovereign_core import ContextState
            intent = sov.think(arguments["text"])
            return {
                "category": intent.category,
                "complexity": intent.complexity,
                "confidence": intent.confidence,
                "autonomy_mode": intent.autonomy_mode.value,
                "privacy_sensitive": intent.privacy_sensitive,
                "urgency": intent.urgency,
            }

        return {"error": f"Unknown sovereign tool: {tool_name}"}

    except Exception as e:
        logger.error("Sovereign MCP error in %s: %s", tool_name, e)
        return {"error": str(e)}
