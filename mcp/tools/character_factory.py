"""
Character Factory MCP Tools — Manage MEOK character archetypes and instances.

Provides tools for:
  • Listing archetypes and their mapped experts
  • Creating character instances
  • Recording interactions and tracking character evolution
  • Building council views with character enrichment
  • Getting character prompts for LLM persona adoption

Open, care-governed, MIT-licensed.
"""

from __future__ import annotations

import logging
from typing import Any, Dict, List, Optional

from meok.mcp.state import ServiceState
from meok.core.character_registry import CharacterRegistry, CharacterArchetype

logger = logging.getLogger(__name__)

# ── Shared registry instance ─────────────────────────────────────────────────
_registry: Optional[CharacterRegistry] = None


def _get_registry() -> CharacterRegistry:
    global _registry
    if _registry is None:
        _registry = CharacterRegistry()
    return _registry


# ── Tool definitions ─────────────────────────────────────────────────────────

CHARACTER_TOOLS = [
    {
        "name": "list_character_archetypes",
        "description": "List all 7 MEOK character archetypes with their domains, personalities, and mapped experts.",
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
    {
        "name": "get_character_archetype",
        "description": "Get details for a specific character archetype.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "archetype_id": {
                    "type": "string",
                    "enum": ["sovereign", "guardian", "scout", "strategist", "creator", "companion", "sage"],
                },
            },
            "required": ["archetype_id"],
        },
    },
    {
        "name": "create_character_instance",
        "description": "Create a new runtime instance of a character archetype.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "archetype_id": {
                    "type": "string",
                    "enum": ["sovereign", "guardian", "scout", "strategist", "creator", "companion", "sage"],
                },
                "display_name": {"type": "string"},
            },
            "required": ["archetype_id"],
        },
    },
    {
        "name": "get_character_instance",
        "description": "Get the current state of a character instance.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "instance_id": {"type": "string"},
            },
            "required": ["instance_id"],
        },
    },
    {
        "name": "interact_with_character",
        "description": "Record an interaction with a character instance (gains XP, may level up).",
        "inputSchema": {
            "type": "object",
            "properties": {
                "instance_id": {"type": "string"},
                "interaction_type": {
                    "type": "string",
                    "enum": ["user_chat", "council_vote_accepted", "council_vote_rejected", "error_detected", "task_completed"],
                },
                "xp_gained": {"type": "integer", "default": 10},
            },
            "required": ["instance_id", "interaction_type"],
        },
    },
    {
        "name": "get_character_persona_prompt",
        "description": "Get the system prompt persona for a character archetype (for LLM adoption).",
        "inputSchema": {
            "type": "object",
            "properties": {
                "archetype_id": {
                    "type": "string",
                    "enum": ["sovereign", "guardian", "scout", "strategist", "creator", "companion", "sage"],
                },
            },
            "required": ["archetype_id"],
        },
    },
    {
        "name": "get_council_character_view",
        "description": "Enrich expert votes with character archetype data for TUI rendering.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "expert_votes": {
                    "type": "array",
                    "items": {"type": "object"},
                },
            },
            "required": ["expert_votes"],
        },
    },
    {
        "name": "get_archetype_for_expert",
        "description": "Find which character archetype maps to a given expert ID.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "expert_id": {"type": "string"},
            },
            "required": ["expert_id"],
        },
    },
]


# ── Tool handler ─────────────────────────────────────────────────────────────

async def handle_character_factory_tool(
    name: str, arguments: Dict[str, Any], state: ServiceState
) -> Dict[str, Any]:
    """Dispatch character factory tool calls."""
    registry = _get_registry()

    if name == "list_character_archetypes":
        return {"archetypes": registry.list_archetypes()}

    elif name == "get_character_archetype":
        archetype = registry.get_archetype(arguments["archetype_id"])
        if archetype is None:
            return {"error": f"Unknown archetype: {arguments['archetype_id']}"}
        return {"archetype": archetype.to_dict()}

    elif name == "create_character_instance":
        try:
            instance = registry.create_instance(
                archetype_id=arguments["archetype_id"],
                display_name=arguments.get("display_name"),
            )
            return {"created": True, "instance": instance.to_dict()}
        except Exception as e:
            return {"error": str(e)}

    elif name == "get_character_instance":
        instance = registry.get_instance(arguments["instance_id"])
        if instance is None:
            return {"error": f"Unknown instance: {arguments['instance_id']}"}
        return {"instance": instance.to_dict()}

    elif name == "interact_with_character":
        result = registry.interact(
            instance_id=arguments["instance_id"],
            interaction_type=arguments["interaction_type"],
            xp_gained=arguments.get("xp_gained", 10),
        )
        if result is None:
            return {"error": f"Unknown instance: {arguments['instance_id']}"}
        return result

    elif name == "get_character_persona_prompt":
        archetype = registry.get_archetype(arguments["archetype_id"])
        if archetype is None:
            return {"error": f"Unknown archetype: {arguments['archetype_id']}"}
        return {
            "archetype_id": archetype.archetype_id,
            "name": archetype.name,
            "system_prompt": archetype.system_prompt_persona,
            "voice_description": archetype.voice_description,
        }

    elif name == "get_council_character_view":
        enriched = registry.build_council_view(arguments.get("expert_votes", []))
        return {"enriched_votes": enriched}

    elif name == "get_archetype_for_expert":
        archetype = registry.get_archetype_for_expert(arguments["expert_id"])
        if archetype is None:
            return {"found": False, "expert_id": arguments["expert_id"]}
        return {
            "found": True,
            "expert_id": arguments["expert_id"],
            "archetype": archetype.to_dict(),
        }

    elif name == "get_emergence_blueprint":
        # Implementation of the Emergene blueprint logic
        archetype_id = arguments["archetype_id"]
        stage = arguments.get("stage", "egg")
        
        # Mocking the blueprint generation based on the meokai_emergene_3d_gaming_architecture.md
        blueprint = {
            "archetype_id": archetype_id,
            "stage": stage,
            "dna_segment": f"MEOK-{archetype_id.upper()}-{stage.upper()}-v2",
            "big_five": {
                "openness": 0.8 if archetype_id == "scout" else 0.5,
                "conscientiousness": 0.9 if archetype_id == "strategist" else 0.5,
                "extraversion": 0.7 if archetype_id == "companion" else 0.4,
                "agreeableness": 0.9 if archetype_id == "companion" else 0.3,
                "neuroticism": 0.2
            },
            "system_1": "Beehave Behavior Tree [Active]",
            "system_2": "GOAP + Nemotron SLM [Active]",
            "visual_pipeline": {
                "concept": "FLUX.1 [dev]",
                "mesh": "TRELLIS.2",
                "animation": "Wan 2.7",
                "voice": "NVIDIA ACE / Chatterbox"
            }
        }
        return {"blueprint": blueprint}

    elif name == "update_character_dna":
        instance_id = arguments["instance_id"]
        strength = arguments.get("mutation_strength", 0.05)
        # Mocking DNA mutation
        return {
            "instance_id": instance_id,
            "mutation_applied": True,
            "new_traits": ["enhanced_resilience", "pattern_recognition_v2"],
            "xp_delta": 50
        }

    else:
        return {"error": f"Unknown character factory tool: {name}"}
