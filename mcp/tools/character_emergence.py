"""
MCP Tools — Character Emergence System
Exposes entity stage, progression, and breakthrough events via MCP.
"""

from __future__ import annotations
import logging
from typing import Any

logger = logging.getLogger("meok.mcp.character_emergence")

CHARACTER_EMERGENCE_TOOLS = [
    {
        "name": "get_emergence_state",
        "description": (
            "Get the character emergence stage for an entity — Egg/Cracking/Hatching/Growing/Mature/Full. "
            "Returns stage emoji, label, progress (0-1), interactions_to_next, and unlocked capabilities. "
            "Use this to render the correct companion animation state on any front-end."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "entity_id": {
                    "type": "string",
                    "description": "Entity ID to check",
                },
            },
            "required": ["entity_id"],
        },
    },
    {
        "name": "advance_emergence",
        "description": (
            "Record new interactions and check if the entity advanced to a new stage. "
            "Returns new stage info and whether a breakthrough occurred. "
            "Call this after each meaningful user interaction."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "entity_id": {"type": "string", "description": "Entity ID"},
                "interaction_delta": {
                    "type": "integer",
                    "default": 1,
                    "description": "Number of interactions to add (default 1)",
                },
            },
            "required": ["entity_id"],
        },
    },
    {
        "name": "list_stage_thresholds",
        "description": "Return all 6 stage definitions with thresholds and unlocked capabilities.",
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
]


async def handle_character_emergence_tool(tool_name: str, arguments: dict, state: Any = None) -> Any:
    try:
        from core.character_emergence import (
            compute_emergence_state,
            STAGE_ORDER,
            STAGE_DEFS,
        )

        if tool_name == "get_emergence_state":
            entity_id = arguments.get("entity_id", "default")

            # Fetch interaction count from entity store
            interaction_count = await _get_interaction_count(entity_id, state)
            es = compute_emergence_state(entity_id, interaction_count)
            return es.to_dict()

        elif tool_name == "advance_emergence":
            entity_id = arguments.get("entity_id", "default")
            delta = max(1, int(arguments.get("interaction_delta", 1)))

            # Get current count, then advance
            old_count = await _get_interaction_count(entity_id, state)
            old_stage = compute_emergence_state(entity_id, old_count)

            new_count = old_count + delta
            await _set_interaction_count(entity_id, new_count, state)

            new_state = compute_emergence_state(entity_id, new_count)
            breakthrough = new_state.stage != old_stage.stage

            result = new_state.to_dict()
            result["breakthrough"] = breakthrough
            result["old_stage"] = old_stage.stage.value
            result["interactions_added"] = delta
            if breakthrough:
                result["breakthrough_message"] = (
                    f"🎉 {old_stage.stage_def.emoji} → {new_state.stage_def.emoji}  "
                    f"{old_stage.stage_def.label} → {new_state.stage_def.label}: "
                    f"{new_state.stage_def.description}"
                )
            return result

        elif tool_name == "list_stage_thresholds":
            return {
                "stages": [
                    {
                        "stage": s.value,
                        "label": STAGE_DEFS[s].label,
                        "emoji": STAGE_DEFS[s].emoji,
                        "threshold": STAGE_DEFS[s].threshold,
                        "description": STAGE_DEFS[s].description,
                        "personality_unlock": STAGE_DEFS[s].personality_unlock,
                        "color": STAGE_DEFS[s].color,
                    }
                    for s in STAGE_ORDER
                ]
            }

        return {"error": f"Unknown character emergence tool: {tool_name}"}

    except Exception as e:
        logger.error("Character emergence MCP error in %s: %s", tool_name, e)
        return {"error": str(e)}


# ─── Entity store helpers ─────────────────────────────────────────────────────

async def _get_interaction_count(entity_id: str, state: Any) -> int:
    """Read interaction_count from entity store."""
    try:
        if state and hasattr(state, "db"):
            row = await state.db.fetchrow(
                "SELECT interaction_count FROM entities WHERE entity_id = $1", entity_id
            )
            if row:
                return int(row["interaction_count"] or 0)
        # Fallback: check entity manager if available
        from core.entity import get_entity_manager
        em = get_entity_manager()
        entity = em.get_or_create(entity_id)
        return int(getattr(entity, "interaction_count", 0))
    except Exception:
        return 0


async def _set_interaction_count(entity_id: str, count: int, state: Any) -> None:
    """Update interaction_count in entity store."""
    try:
        if state and hasattr(state, "db"):
            await state.db.execute(
                "UPDATE entities SET interaction_count = $1 WHERE entity_id = $2",
                count, entity_id,
            )
            return
        from core.entity import get_entity_manager
        em = get_entity_manager()
        entity = em.get_or_create(entity_id)
        entity.interaction_count = count
    except Exception as e:
        logger.warning("Could not persist interaction_count for %s: %s", entity_id, e)
