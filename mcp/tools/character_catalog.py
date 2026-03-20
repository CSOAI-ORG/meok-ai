"""
MCP Tools — Character Catalog
Exposes MEOK's 24 AI companions via MCP tools.
"""

from __future__ import annotations

import logging
from typing import Any, Dict

logger = logging.getLogger("meok.mcp.character_catalog")

CHARACTER_CATALOG_TOOLS = [
    {
        "name": "get_character_catalog",
        "description": (
            "Return the full MEOK character catalog — all 24 AI companions. "
            "Each entry includes id, name, tagline, care_style (challenger/supporter/explorer/gentle), "
            "personality_traits, voice_style, domain, best_for, colors, and emoji. "
            "Use this to present character choices to the user."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
    {
        "name": "get_character",
        "description": (
            "Return full details for a single MEOK character by id. "
            "Includes backstory, system_prompt_prefix, and all display fields. "
            "Valid ids: aria, marcus, luna, kai, sage, ember, nova, river, atlas, iris, zephyr, rex, "
            "echo, flux, sol, nyx, quinn, terra, pixel, titan, mochi, cipher, vox, dusk."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "character_id": {
                    "type": "string",
                    "description": "The character's id (e.g. 'aria', 'marcus', 'luna')",
                },
            },
            "required": ["character_id"],
        },
    },
    {
        "name": "select_character",
        "description": (
            "Store the user's character preference in their entity state. "
            "Call this when the user explicitly chooses a character companion. "
            "Returns confirmation with the selected character's details."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "character_id": {
                    "type": "string",
                    "description": "The character id to select",
                },
            },
            "required": ["character_id"],
        },
    },
    {
        "name": "get_recommended_character",
        "description": (
            "Return the best matching character for the current entity's CPM care style, "
            "optionally filtered by domain. "
            "Uses the entity's dominant care trait (challenger/supporter/explorer/gentle) "
            "to find the most compatible companion. "
            "Pass domain hint for more targeted recommendations (e.g. 'coding', 'wellness', 'strategy')."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "domain": {
                    "type": "string",
                    "description": "Optional domain hint (e.g. 'coding', 'wellness', 'creativity', 'strategy')",
                },
                "entity_id": {
                    "type": "string",
                    "description": "Entity ID to look up CPM style for. Defaults to current user.",
                },
            },
        },
    },
]


async def handle_character_catalog_tool(
    tool_name: str, arguments: Dict[str, Any], state: Any = None
) -> Dict[str, Any]:
    """Route character catalog MCP tool calls."""
    try:
        from meok.core.character_catalog import (
            CHARACTER_CATALOG,
            get_character,
            get_best_match,
        )

        # ── get_character_catalog ──────────────────────────────────────────────
        if tool_name == "get_character_catalog":
            return {
                "characters": [c.to_dict() for c in CHARACTER_CATALOG.values()],
                "total": len(CHARACTER_CATALOG),
                "care_styles": ["challenger", "supporter", "explorer", "gentle"],
            }

        # ── get_character ──────────────────────────────────────────────────────
        elif tool_name == "get_character":
            char_id = arguments.get("character_id", "").lower().strip()
            char = get_character(char_id)
            if char is None:
                return {
                    "error": f"Character '{char_id}' not found.",
                    "valid_ids": list(CHARACTER_CATALOG.keys()),
                }
            return char.to_dict()

        # ── select_character ───────────────────────────────────────────────────
        elif tool_name == "select_character":
            char_id = arguments.get("character_id", "").lower().strip()
            char = get_character(char_id)
            if char is None:
                return {
                    "error": f"Character '{char_id}' not found.",
                    "valid_ids": list(CHARACTER_CATALOG.keys()),
                }

            # Persist to entity state if available
            entity_id = arguments.get("_tenant_id", "default")
            try:
                if state and hasattr(state, "db") and state.db:
                    await state.db.execute(
                        """
                        INSERT INTO entity_preferences (entity_id, key, value, updated_at)
                        VALUES ($1, 'selected_character', $2, NOW())
                        ON CONFLICT (entity_id, key) DO UPDATE
                        SET value = EXCLUDED.value, updated_at = NOW()
                        """,
                        entity_id,
                        char_id,
                    )
            except Exception as persist_err:
                logger.warning("Could not persist character selection: %s", persist_err)

            return {
                "selected": True,
                "character": char.to_dict(),
                "message": f"{char.emoji} {char.name} selected as your companion.",
            }

        # ── get_recommended_character ──────────────────────────────────────────
        elif tool_name == "get_recommended_character":
            domain_hint = arguments.get("domain", "")
            entity_id = arguments.get("entity_id") or arguments.get("_tenant_id", "default")

            # Try to resolve entity's CPM care style
            care_style = await _get_entity_care_style(entity_id, state)

            char = get_best_match(care_style, domain_hint)
            return {
                "recommended": char.to_dict(),
                "based_on_care_style": care_style,
                "domain_hint": domain_hint,
                "reasoning": (
                    f"{char.name} is recommended because your care style is '{care_style}' "
                    f"and {char.name}'s domain ({char.domain}) aligns well with your needs."
                ),
            }

        return {"error": f"Unknown character catalog tool: {tool_name}"}

    except Exception as e:
        logger.error("Character catalog MCP error in %s: %s", tool_name, e, exc_info=True)
        return {"error": str(e)}


# ── Helper: resolve entity CPM care style ─────────────────────────────────────

async def _get_entity_care_style(entity_id: str, state: Any) -> str:
    """
    Attempt to read the entity's dominant CPM care style.
    Returns a default of 'gentle' if the entity or style cannot be resolved.
    """
    try:
        if state and hasattr(state, "db") and state.db:
            row = await state.db.fetchrow(
                "SELECT dominant_trait FROM entities WHERE entity_id = $1",
                entity_id,
            )
            if row and row["dominant_trait"]:
                trait = str(row["dominant_trait"]).lower()
                if trait in ("challenger", "supporter", "explorer", "gentle"):
                    return trait
    except Exception:
        pass

    # Fallback: try entity manager
    try:
        from meok.core.entity import get_entity_manager
        em = get_entity_manager()
        entity = em.get_or_create(entity_id)
        trait = str(getattr(entity, "dominant_trait", "gentle")).lower()
        if trait in ("challenger", "supporter", "explorer", "gentle"):
            return trait
    except Exception:
        pass

    return "gentle"
