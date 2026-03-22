"""
MEOK Faith Calibration MCP Tools
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Exposes faith calibration functionality as MCP tools:
  - get_faith_profile: Retrieve user's current faith calibration state
  - update_faith_profile: Update tradition, denomination, observance
  - get_faith_onboarding_question: Next progressive onboarding step
  - get_tradition_framework: Details about a specific tradition's care approach
  - faith_calibrated_reflect: Send a faith-calibrated prompt to LLM router
  - list_traditions: All supported traditions
  - detect_tradition_from_content: Soft inference from user language

Design: TOOL NOT TEACHER — all responses direct to human authorities.
"""

import json as _json
import logging
from typing import Any, Dict
from datetime import datetime, timezone

from meok.mcp.state import ServiceState

logger = logging.getLogger(__name__)

FAITH_TOOLS = [
    {
        "name": "get_faith_profile",
        "description": (
            "Retrieve the current user's faith calibration profile — their declared "
            "spiritual tradition, denomination, observance level, and whether faith "
            "calibration is active. Returns profile fields or 'not_yet_declared'."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
    {
        "name": "update_faith_profile",
        "description": (
            "Update the user's faith calibration profile. Supports progressive "
            "disclosure — update one field at a time. Traditions: islam, christianity, "
            "hinduism, judaism, buddhism, sikhism, indigenous, spiritual_not_religious, "
            "secular_humanist, none_or_exploring. Always requires user consent."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "tradition": {
                    "type": "string",
                    "description": "Major tradition identifier",
                },
                "denomination": {
                    "type": "string",
                    "description": "Denomination or school of thought within the tradition",
                },
                "observance_level": {
                    "type": "string",
                    "enum": ["minimal", "moderate", "observant", "strictly_observant", "prefer_not_to_say"],
                },
                "consented": {
                    "type": "boolean",
                    "description": "User explicitly consented to faith calibration",
                },
                "has_religious_trauma": {
                    "type": "boolean",
                    "description": "User has indicated religious trauma — activates trauma-informed mode",
                },
                "is_deconstructing": {
                    "type": "boolean",
                    "description": "User is in deconstruction process",
                },
                "cultural_context": {
                    "type": "string",
                    "description": "Cultural background e.g. south_asian, arab, western, afro_caribbean",
                },
            },
        },
    },
    {
        "name": "get_faith_onboarding_question",
        "description": (
            "Get the next progressive faith onboarding question. Steps: "
            "1=consent, 2=tradition, 3=denomination, 4=observance. "
            "Never forces disclosure — always allows 'prefer not to say'."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "step": {
                    "type": "integer",
                    "description": "Onboarding step (1-4)",
                    "minimum": 1,
                    "maximum": 4,
                },
            },
            "required": ["step"],
        },
    },
    {
        "name": "get_tradition_framework",
        "description": (
            "Get detailed care framework for a specific spiritual tradition — "
            "care concept, grief approach, community framing, ethics approach, "
            "primary sources, and human expert direction. "
            "Use to understand how MEOK calibrates care for a tradition."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "tradition": {
                    "type": "string",
                    "description": "Tradition identifier (e.g. islam, christianity, hinduism)",
                },
            },
            "required": ["tradition"],
        },
    },
    {
        "name": "faith_calibrated_reflect",
        "description": (
            "Send a message through MEOK's faith-calibrated care layer. "
            "The LLM response will be framed according to the user's declared tradition, "
            "using appropriate vocabulary, sources, and care framework. "
            "Always includes tool-not-teacher positioning and source citations."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "message": {
                    "type": "string",
                    "description": "User's message or question",
                },
                "context": {
                    "type": "string",
                    "description": "Additional context about the conversation",
                },
                "max_tokens": {
                    "type": "integer",
                    "default": 600,
                },
            },
            "required": ["message"],
        },
    },
    {
        "name": "list_traditions",
        "description": "List all spiritual traditions MEOK supports with their care concepts and frameworks.",
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
    {
        "name": "detect_tradition_from_content",
        "description": (
            "Softly infer a user's likely tradition from their language and vocabulary. "
            "Returns a suggestion only — user must confirm. Never declares their tradition."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "content": {
                    "type": "string",
                    "description": "Text to analyse for tradition signals",
                },
            },
            "required": ["content"],
        },
    },
]


async def handle_faith_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Any:
    """Dispatch faith calibration tool calls."""

    try:
        from meok.core.faith_calibration import (
            FaithCalibrationEngine, FaithProfile, MajorTradition
        )
    except ImportError as e:
        return {"error": f"Faith calibration module unavailable: {e}"}

    engine = FaithCalibrationEngine()

    # ── Profile storage helpers ─────────────────────────────────────────────
    async def _load_profile() -> FaithProfile:
        """Load faith profile from memory store (keyed to tenant)."""
        if state.memory_store:
            try:
                results = await state.memory_store.query_memories(
                    query="faith_profile", limit=1, memory_type="faith_profile"
                )
                if results:
                    raw = results[0].get("content", "{}")
                    if isinstance(raw, str):
                        import json
                        data = json.loads(raw) if raw.startswith("{") else {}
                    else:
                        data = raw
                    return FaithProfile.from_dict(data)
            except Exception:
                pass
        return FaithProfile()

    async def _save_profile(profile: FaithProfile):
        """Persist faith profile to memory store."""
        if state.memory_store:
            try:
                import json
                await state.memory_store.record_episode(
                    content=json.dumps(profile.to_dict()),
                    memory_type="faith_profile",
                    importance=0.9,
                    tags=["faith_profile", "user_preferences"],
                )
            except Exception as e:
                logger.warning("[Faith] Failed to save profile: %s", e)

    # ── Tool handlers ────────────────────────────────────────────────────────

    if name == "get_faith_profile":
        profile = await _load_profile()
        return {
            "profile": profile.to_dict(),
            "is_calibrated": profile.is_calibrated(),
            "has_tradition": profile.tradition != MajorTradition.NONE,
            "tradition_display": profile.tradition.replace("_", " ").title() if profile.tradition else None,
            "framework_available": profile.tradition in ["islam", "christianity", "hinduism",
                                                          "judaism", "buddhism", "sikhism",
                                                          "spiritual_not_religious", "secular_humanist"],
        }

    elif name == "update_faith_profile":
        profile = await _load_profile()

        if arguments.get("consented") is True:
            profile.consented_to_faith_calibration = True

        if "tradition" in arguments and arguments["tradition"]:
            profile.tradition = arguments["tradition"]

        if "denomination" in arguments and arguments["denomination"]:
            profile.denomination = arguments["denomination"]

        if "observance_level" in arguments:
            profile.observance_level = arguments["observance_level"]

        if "has_religious_trauma" in arguments:
            profile.has_religious_trauma = bool(arguments["has_religious_trauma"])

        if "is_deconstructing" in arguments:
            profile.is_deconstructing = bool(arguments["is_deconstructing"])

        if "cultural_context" in arguments:
            profile.cultural_context = arguments["cultural_context"]

        profile.last_updated = datetime.now(timezone.utc).isoformat()
        await _save_profile(profile)

        fw = engine.get_tradition_framework(profile.tradition)
        return {
            "success": True,
            "profile": profile.to_dict(),
            "is_calibrated": profile.is_calibrated(),
            "tradition_display": fw.display_name if fw else profile.tradition,
            "care_concept": fw.care_concept if fw else None,
            "message": f"Faith calibration updated: {fw.display_name if fw else profile.tradition}",
        }

    elif name == "get_faith_onboarding_question":
        step = arguments.get("step", 1)
        profile = await _load_profile()
        question = engine.get_onboarding_question(step, profile)
        return question

    elif name == "get_tradition_framework":
        tradition = arguments.get("tradition", "")
        info = engine.get_tradition_info(tradition)
        if not info:
            available = list(engine.get_available_traditions())
            return {
                "error": f"Unknown tradition: {tradition}",
                "available_traditions": [t["tradition"] for t in available],
            }
        return info

    elif name == "faith_calibrated_reflect":
        message = arguments.get("message", "")
        context = arguments.get("context")
        max_tokens = int(arguments.get("max_tokens", 600))

        if not message:
            return {"error": "message is required"}

        # Load profile
        profile = await _load_profile()

        # Build calibrated system prompt
        system_prompt = engine.calibrate_system_prompt(profile, task_type="care", context=context)

        # Route through LLM
        router = getattr(state, "llm_router", None)
        if not router:
            return {"error": "LLM router not available"}

        try:
            result = await router.complete(
                messages=[{"role": "user", "content": message}],
                task_type="care",
                max_tokens=max_tokens,
                system=system_prompt,
            )
            return {
                "response": result.get("content", ""),
                "provider": result.get("provider", "unknown"),
                "tradition": profile.tradition,
                "is_calibrated": profile.is_calibrated(),
                "tool_disclaimer": engine.get_tradition_framework(profile.tradition).tool_disclaimer,
                "elapsed_ms": result.get("elapsed_ms", 0),
            }
        except Exception as e:
            return {"error": str(e)}

    elif name == "list_traditions":
        traditions = engine.get_available_traditions()
        return {
            "traditions": traditions,
            "total": len(traditions),
            "note": "Faith calibration calibrates MEOK's care language to resonate with your tradition. MEOK is always a reflection companion, never a spiritual authority.",
        }

    elif name == "detect_tradition_from_content":
        content = arguments.get("content", "")
        if not content:
            return {"error": "content is required"}
        suggestion = engine.infer_tradition_from_content(content)
        return {
            "suggested_tradition": suggestion,
            "confidence": "soft_inference",
            "note": "This is a gentle suggestion based on vocabulary patterns. Please confirm or correct — your tradition is yours to define.",
            "confirm_prompt": f"I noticed some vocabulary that suggests {suggestion.replace('_', ' ').title() if suggestion else 'an unclear tradition'} — does that resonate with you, or would you describe your background differently?" if suggestion else "No specific tradition detected from this text.",
        }

    return {"error": f"Unknown faith tool: {name}"}
