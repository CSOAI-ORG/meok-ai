"""
MEOK Faith Calibration MCP Tools
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Exposes faith calibration functionality as MCP tools:
  - get_faith_profile: Retrieve user's current faith calibration state
  - update_faith_profile: Update tradition, denomination, observance
  - get_faith_onboarding_question: Next progressive onboarding step (6 steps)
  - get_tradition_framework: Details about a specific tradition's care approach
  - faith_calibrated_reflect: Send a faith-calibrated prompt to LLM router
  - list_traditions: All supported traditions
  - detect_tradition_from_content: Soft inference from user language
  - get_denomination_options: Full denomination tree for a tradition
  - get_prayer_calendar_api: API config for prayer times and calendar
  - get_faith_verse: Fetch a verse from the appropriate scripture API

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
            "secular_humanist, none_or_exploring, taoism, bahai. "
            "Always requires user consent. Can set trauma mode, interfaith flag, "
            "calendar preferences, and simplified language mode."
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
                "is_interfaith": {
                    "type": "boolean",
                    "description": "User navigates multiple traditions or is in an interfaith family/community",
                },
                "cultural_context": {
                    "type": "string",
                    "description": "Cultural background e.g. south_asian, arab, western, afro_caribbean",
                },
                "wants_prayer_time_reminders": {
                    "type": "boolean",
                    "description": "User wants prayer time reminders (requires location)",
                },
                "wants_calendar_awareness": {
                    "type": "boolean",
                    "description": "User wants awareness of tradition's holy days and calendar",
                },
                "location_for_prayer_times": {
                    "type": "string",
                    "description": "Location for prayer time calculations — 'lat,lng' or city name",
                },
                "simplified_language_mode": {
                    "type": "boolean",
                    "description": "Activate simplified language mode for cognitive accessibility",
                },
                "special_contexts": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": "Special contexts: deconstructing, interfaith, converting, religious_trauma, etc.",
                },
            },
        },
    },
    {
        "name": "get_faith_onboarding_question",
        "description": (
            "Get the next progressive faith onboarding question. Steps: "
            "1=consent, 2=tradition, 3=denomination/school, 4=observance, "
            "5=special_contexts (trauma/interfaith/deconstructing), "
            "6=calendar_preferences. "
            "Never forces disclosure — always allows 'prefer not to say'."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "step": {
                    "type": "integer",
                    "description": "Onboarding step (1-6)",
                    "minimum": 1,
                    "maximum": 6,
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
    {
        "name": "get_denomination_options",
        "description": (
            "Get the full denomination / school-of-thought tree for a tradition. "
            "Returns all denominations with labels and descriptions. "
            "Use after tradition is declared to offer the user denominational refinement. "
            "Covers Islam (4 Sunni madhabs + Shia + Sufi), Christianity (13 denominations), "
            "Judaism (Orthodox/Conservative/Reform/Reconstructionist/Renewal/Sephardic), "
            "Buddhism (Theravada + 4 Zen/Pure Land + 4 Tibetan schools), "
            "Hinduism (5 schools), Sikhism (4 orientations), Taoism, Baha'i, Indigenous."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "tradition": {
                    "type": "string",
                    "description": (
                        "Major tradition identifier. One of: islam, christianity, judaism, "
                        "buddhism, hinduism, sikhism, taoism, bahai, indigenous, "
                        "spiritual_not_religious, secular_humanist"
                    ),
                },
            },
            "required": ["tradition"],
        },
    },
    {
        "name": "get_prayer_calendar_api",
        "description": (
            "Get the API configuration for prayer times and calendar awareness for a tradition. "
            "Returns scripture text API (Quran.com, Sefaria, BaniDB, VedicScriptures, SuttaCentral) "
            "and prayer/calendar API (AlAdhan, Hebcal) endpoints, documentation URLs, auth requirements, "
            "and integration notes. Use to set up real-time religious text and calendar integrations."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "tradition": {
                    "type": "string",
                    "description": "Tradition identifier (e.g. islam, judaism, sikhism, hinduism, buddhism, christianity)",
                },
            },
            "required": ["tradition"],
        },
    },
    {
        "name": "get_faith_verse",
        "description": (
            "Fetch a verse or passage from the tradition's scripture API. "
            "Returns the verse text and source information. "
            "For Islam: fetches from Quran.com API (chapter:verse format, e.g. '2:286'). "
            "For Judaism: fetches from Sefaria (e.g. 'Genesis.1.1' or 'Talmud.Berakhot.2a'). "
            "For Sikhism: fetches from BaniDB (shabad ID). "
            "For Hinduism: fetches Bhagavad Gita from VedicScriptures (chapter/verse, e.g. '3/19'). "
            "For Buddhism: fetches from SuttaCentral (sutta UID, e.g. 'dn1'). "
            "For Christianity: uses bible-api.com (passage, e.g. 'John 3:16'). "
            "NOTE: Requires network access. Returns error if API unavailable."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "tradition": {
                    "type": "string",
                    "description": "Tradition identifier",
                },
                "reference": {
                    "type": "string",
                    "description": (
                        "The verse/passage reference. Format varies by tradition: "
                        "Islam='2:286', Judaism='Genesis.1.1', Sikhism='1' (shabad ID), "
                        "Hinduism='3/19' (chapter/verse), Buddhism='dn1' (sutta UID), "
                        "Christianity='John 3:16'"
                    ),
                },
                "translation": {
                    "type": "string",
                    "description": "Translation preference (e.g. 'en' for English). Optional.",
                },
            },
            "required": ["tradition", "reference"],
        },
    },
]


async def handle_faith_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Any:
    """Dispatch faith calibration tool calls."""

    try:
        from meok.core.faith_calibration import (
            FaithCalibrationEngine, FaithProfile, MajorTradition,
            FAITH_API_REGISTRY, CALENDAR_AWARENESS,
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
            "needs_trauma_mode": profile.needs_trauma_mode(),
            "has_tradition": profile.tradition != MajorTradition.NONE,
            "tradition_display": profile.tradition.replace("_", " ").title() if profile.tradition else None,
            "framework_available": profile.tradition in [
                "islam", "christianity", "hinduism", "judaism", "buddhism",
                "sikhism", "spiritual_not_religious", "secular_humanist",
                "taoism", "bahai", "indigenous",
            ],
            "has_calendar_api": profile.tradition in CALENDAR_AWARENESS,
            "has_scripture_api": profile.tradition in FAITH_API_REGISTRY,
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

        if "is_interfaith" in arguments:
            profile.is_interfaith = bool(arguments["is_interfaith"])

        if "cultural_context" in arguments:
            profile.cultural_context = arguments["cultural_context"]

        if "wants_prayer_time_reminders" in arguments:
            profile.wants_prayer_time_reminders = bool(arguments["wants_prayer_time_reminders"])

        if "wants_calendar_awareness" in arguments:
            profile.wants_calendar_awareness = bool(arguments["wants_calendar_awareness"])

        if "location_for_prayer_times" in arguments:
            profile.location_for_prayer_times = arguments["location_for_prayer_times"]

        if "simplified_language_mode" in arguments:
            profile.simplified_language_mode = bool(arguments["simplified_language_mode"])

        if "special_contexts" in arguments and isinstance(arguments["special_contexts"], list):
            profile.special_contexts = arguments["special_contexts"]
            # Sync special_contexts to boolean flags for backward compatibility
            if "religious_trauma" in profile.special_contexts:
                profile.has_religious_trauma = True
            if "deconstructing" in profile.special_contexts:
                profile.is_deconstructing = True
            if "interfaith" in profile.special_contexts:
                profile.is_interfaith = True

        profile.last_updated = datetime.now(timezone.utc).isoformat()
        await _save_profile(profile)

        fw = engine.get_tradition_framework(profile.tradition)
        return {
            "success": True,
            "profile": profile.to_dict(),
            "is_calibrated": profile.is_calibrated(),
            "needs_trauma_mode": profile.needs_trauma_mode(),
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
            fw = engine.get_tradition_framework(profile.tradition)
            return {
                "response": result.get("content", ""),
                "provider": result.get("provider", "unknown"),
                "tradition": profile.tradition,
                "is_calibrated": profile.is_calibrated(),
                "tool_disclaimer": fw.tool_disclaimer if fw else "",
                "elapsed_ms": result.get("elapsed_ms", 0),
            }
        except Exception as e:
            return {"error": str(e)}

    elif name == "list_traditions":
        traditions = engine.get_available_traditions()
        return {
            "traditions": traditions,
            "total": len(traditions),
            "note": (
                "Faith calibration calibrates MEOK's care language to resonate with your tradition. "
                "MEOK is always a reflection companion, never a spiritual authority."
            ),
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
            "confirm_prompt": (
                f"I noticed some vocabulary that suggests "
                f"{suggestion.replace('_', ' ').title() if suggestion else 'an unclear tradition'} — "
                f"does that resonate with you, or would you describe your background differently?"
            ) if suggestion else "No specific tradition detected from this text.",
        }

    elif name == "get_denomination_options":
        tradition = arguments.get("tradition", "")
        if not tradition:
            return {"error": "tradition is required"}
        result = engine.get_denomination_tree(tradition)
        return result

    elif name == "get_prayer_calendar_api":
        tradition = arguments.get("tradition", "")
        if not tradition:
            return {"error": "tradition is required"}

        config = engine.get_api_config(tradition)
        if not config:
            available = [t for t in list(FAITH_API_REGISTRY.keys()) + list(CALENDAR_AWARENESS.keys())
                         if t in FAITH_API_REGISTRY or t in CALENDAR_AWARENESS]
            # Deduplicate
            available = sorted(set(available))
            return {
                "error": f"No API configuration found for tradition: {tradition}",
                "traditions_with_apis": available,
                "note": (
                    "Not all traditions have external API integrations. "
                    "Islam (Quran.com + AlAdhan), Judaism (Sefaria + Hebcal), "
                    "Sikhism (BaniDB), Hinduism (VedicScriptures), "
                    "Buddhism (SuttaCentral), Christianity (bible-api.com) are supported."
                ),
            }
        return config

    elif name == "get_faith_verse":
        tradition = arguments.get("tradition", "")
        reference = arguments.get("reference", "")
        translation = arguments.get("translation", "en")

        if not tradition:
            return {"error": "tradition is required"}
        if not reference:
            return {"error": "reference is required"}

        api_config = FAITH_API_REGISTRY.get(tradition)
        if not api_config or not api_config.scripture_api_url:
            return {
                "error": f"No scripture API configured for tradition: {tradition}",
                "note": "Supported traditions: islam, judaism, sikhism, hinduism, buddhism, christianity",
            }

        try:
            import urllib.request
            import json

            url = None
            headers = {"Accept": "application/json"}

            if tradition == "islam":
                # Quran.com API v4 — reference format: "chapter:verse" e.g. "2:286"
                chapter_verse = reference.replace(":", "/")
                url = f"https://api.quran.com/api/v4/verses/by_key/{reference}?translations=131"

            elif tradition == "judaism":
                # Sefaria — reference format: "Genesis.1.1" or "Talmud.Berakhot.2a"
                url = f"https://www.sefaria.org/api/texts/{reference}?context=0&pad=0"

            elif tradition == "sikhism":
                # BaniDB — reference is a shabad ID (integer)
                url = f"https://api.banidb.com/v2/shabads/{reference}"

            elif tradition == "hinduism":
                # VedicScriptures Bhagavad Gita — reference format: "chapter/verse" e.g. "3/19"
                parts = reference.replace(":", "/").split("/")
                if len(parts) == 2:
                    url = f"https://vedicscriptures.github.io/slok/{parts[0]}/{parts[1]}/"
                else:
                    return {"error": "Hinduism reference format: chapter/verse (e.g. '3/19')"}

            elif tradition == "buddhism":
                # SuttaCentral — reference is sutta UID e.g. "dn1"
                url = f"https://suttacentral.net/api/suttas/{reference}/sujato"

            elif tradition == "christianity":
                # bible-api.com — no auth required, public domain translations
                import urllib.parse
                encoded_ref = urllib.parse.quote(reference)
                url = f"https://bible-api.com/{encoded_ref}"

            else:
                return {"error": f"No scripture fetch implementation for tradition: {tradition}"}

            # Perform the request with a timeout
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=8) as resp:
                raw = resp.read().decode("utf-8")
                data = json.loads(raw)

            # Normalise response to a common shape
            normalised: Dict[str, Any] = {
                "tradition": tradition,
                "reference": reference,
                "api_source": api_config.scripture_api_name,
                "api_url_used": url,
            }

            if tradition == "islam":
                verse = data.get("verse", {})
                translations = verse.get("translations", [])
                normalised["text"] = translations[0].get("text", "") if translations else verse.get("text_uthmani", "")
                normalised["arabic"] = verse.get("text_uthmani", "")
                normalised["verse_key"] = verse.get("verse_key", reference)
                normalised["tool_note"] = "Source: Quran.com API v4. For personal religious rulings, consult a qualified imam."

            elif tradition == "judaism":
                normalised["text"] = " ".join(data.get("text", [])) if isinstance(data.get("text"), list) else data.get("text", "")
                normalised["he"] = " ".join(data.get("he", [])) if isinstance(data.get("he"), list) else data.get("he", "")
                normalised["ref"] = data.get("ref", reference)
                normalised["tool_note"] = "Source: Sefaria. For halakhic rulings, consult a rabbi from your denomination."

            elif tradition == "sikhism":
                shabads = data.get("shabads", [{}])
                lines = shabads[0].get("lines", []) if shabads else []
                texts = [line.get("translations", {}).get("en", {}).get("translation", "") for line in lines]
                normalised["text"] = " | ".join(t for t in texts if t)
                normalised["gurmukhi"] = " | ".join(line.get("gurmukhi", {}).get("unicode", "") for line in lines)
                normalised["tool_note"] = "Source: BaniDB (Khalis Foundation). The Sri Guru Granth Sahib Ji is the living Guru."

            elif tradition == "hinduism":
                normalised["text"] = data.get("tej", {}).get("ht", "") or data.get("purohit", {}).get("et", "")
                normalised["sanskrit"] = data.get("slok", "")
                normalised["chapter"] = data.get("chapter", "")
                normalised["verse"] = data.get("verse", "")
                normalised["tool_note"] = "Source: VedicScriptures / Bhagavad Gita API. Consult a qualified pandit or swami for personal guidance."

            elif tradition == "buddhism":
                normalised["text"] = data.get("translation", {}).get("text", "") if isinstance(data, dict) else str(data)
                normalised["sutta_uid"] = reference
                normalised["tool_note"] = "Source: SuttaCentral. The Dharma is best transmitted through direct teacher-student relationship."

            elif tradition == "christianity":
                normalised["text"] = data.get("text", "")
                normalised["reference"] = data.get("reference", reference)
                normalised["translation"] = data.get("translation_name", "WEB")
                normalised["tool_note"] = "Source: bible-api.com (public domain). For pastoral guidance, consult your minister or priest."

            return normalised

        except urllib.error.URLError as e:
            return {
                "error": f"Network error fetching verse: {e}",
                "tradition": tradition,
                "reference": reference,
                "api_source": api_config.scripture_api_name,
                "note": "Check network connectivity. API endpoint: " + (url or "unknown"),
            }
        except Exception as e:
            logger.exception("[Faith] get_faith_verse error for %s/%s", tradition, reference)
            return {
                "error": f"Error fetching verse: {e}",
                "tradition": tradition,
                "reference": reference,
            }

    return {"error": f"Unknown faith tool: {name}"}
