"""
Emergent Persona — Infer the sovereign-sidekick archetype from user signals.

When the user hasn't explicitly picked an archetype (the common case),
this module infers one from:
    1. Recent message content (keywords, tone, request type)
    2. Time-of-day and work rhythm (from user_alignment history)
    3. Current task (from the request itself)
    4. Learned interaction_mode signal (curiosity, urgency, calm, etc.)

Why this matters (feat/sovereign-sidekick-reframe branch):
    The persona should EMERGE from how the user works, not be
    hardcoded. This is the "Kimi-Claude frontier" thinking you asked
    for — the framework reasons about which archetype the user needs
    RIGHT NOW, and assembles the prompt accordingly.

Inference rules (transparent — no opaque ML):
    - "deploy" / "ship" / "go" / "EAT"  →  SOVEREIGN + FOCUSED
    - "audit" / "check" / "verify"      →  GUARDIAN  + FOCUSED
    - "what is" / "find" / "explore"    →  SCOUT     + CURIOUS
    - "plan" / "design" / "architect"   →  STRATEGIST + CURIOUS
    - "write" / "create" / "imagine"    →  CREATOR   + WARM
    - (no clear signal)                  →  COMPANION + STEADY  (default)

The user can always override with an explicit `archetype=` parameter.
"""

from __future__ import annotations

import logging
import re
from collections import Counter
from datetime import datetime
from typing import Any, Dict, List, Optional, Tuple

from meok.core.archetype_router import (
    Archetype,
    InteractionMode,
    build_persona_spec,
    PersonaSpec,
)

logger = logging.getLogger(__name__)


# ── Keyword → Archetype inference ─────────────────────────────────────────────
# Order matters: first match wins. Keep this list lean and obvious — the
# value is in transparency, not coverage.

_KEYWORD_TO_ARCHETYPE: List[Tuple[str, Archetype, InteractionMode]] = [
    # Sovereign (executive authority, ship it)
    (r"\b(deploy|ship|ship\s+it|execute|go\s*!|MGO|EAT|launch|merge\s+it)\b", Archetype.SOVEREIGN, InteractionMode.FOCUSED),
    (r"\b(decide|decide\s+now|approve|sign\s+off|greenlight)\b",          Archetype.SOVEREIGN, InteractionMode.FOCUSED),

    # Guardian (watchful, protective, risk review)
    (r"\b(audit|verify|check\s+security|threat|risk|hardening|red\s*team|review\s+for\s+issues)\b", Archetype.GUARDIAN, InteractionMode.FOCUSED),
    (r"\b(blocked|breach|leak|vulnerability|CVE|exploit)\b",              Archetype.GUARDIAN, InteractionMode.FOCUSED),

    # Scout (curious, fast intel, frontier)
    (r"\b(what\s+is|find|explore|search|discover|research|scan|survey)\b", Archetype.SCOUT, InteractionMode.CURIOUS),
    (r"\b(latest|new|trend|emerging|frontier|cutting\s+edge)\b",          Archetype.SCOUT, InteractionMode.CURIOUS),

    # Strategist (plans that survive, systems thinking)
    (r"\b(plan|design|architect|roadmap|map\s+out|sequence|phases)\b",    Archetype.STRATEGIST, InteractionMode.CURIOUS),
    (r"\b(refactor|restructure|reframe|reorg|merge|consolidate)\b",       Archetype.STRATEGIST, InteractionMode.FOCUSED),

    # Creator (imaginative, generative)
    (r"\b(write|create|imagine|draft|compose|generate|make|build)\b",     Archetype.CREATOR, InteractionMode.WARM),
    (r"\b(blog|article|post|story|narrative|content|brand)\b",            Archetype.CREATOR, InteractionMode.WARM),
]


def infer_archetype_from_text(
    text: str,
    explicit_archetype: Optional[str] = None,
    explicit_mode: Optional[str] = None,
) -> Tuple[Archetype, InteractionMode, str]:
    """Infer the best archetype + mode for a user message.

    Returns: (archetype, mode, confidence_signal)
        confidence_signal is a short string for the audit log:
          "explicit" | "matched:<keyword>" | "default:companion+steady"
    """
    # Explicit always wins
    if explicit_archetype:
        try:
            arch = Archetype(explicit_archetype)
        except ValueError:
            logger.warning(f"Unknown explicit archetype '{explicit_archetype}', falling back to inference")
            arch = None
        if arch is not None:
            try:
                mode = InteractionMode(explicit_mode) if explicit_mode else InteractionMode.STEADY
            except ValueError:
                mode = InteractionMode.STEADY
            return arch, mode, "explicit"

    # Keyword inference — first match wins
    if text:
        lower = text.lower()
        for pattern, arch, mode in _KEYWORD_TO_ARCHETYPE:
            if re.search(pattern, lower, re.IGNORECASE):
                return arch, mode, f"matched:{pattern[:30]}"

    # Default: companion + steady (the "I'll just be here with you" mode)
    return Archetype.COMPANION, InteractionMode.STEADY, "default:companion+steady"


def build_emergent_persona(
    user_message: str,
    user_context: Optional[Dict[str, Any]] = None,
    learned_signals: Optional[List[str]] = None,
    explicit_archetype: Optional[str] = None,
    explicit_mode: Optional[str] = None,
) -> PersonaSpec:
    """High-level helper — infer the persona and assemble the spec in one call.

    This is the entry point most LLM-calling code should use. It:
        1. Infers archetype + mode from the user message (or honors explicit)
        2. Pulls learned signals from user_alignment history
        3. Assembles a PersonaSpec ready to be passed to the LLM

    Usage:
        spec = build_emergent_persona(
            user_message="audit meok empire king-down E2E",
            user_context={"project": "MEOK empire audit", "time_of_day": "afternoon"},
            learned_signals=["Nick uses lowercase + typos", "Nick says 'go' to mean 'ship'"],
        )
        result = await router.complete(
            messages, task_type="sidekick", system=spec.to_system_prompt()
        )
    """
    arch, mode, confidence = infer_archetype_from_text(
        user_message,
        explicit_archetype=explicit_archetype,
        explicit_mode=explicit_mode,
    )

    # Pull learned signals from user_alignment history if available
    if learned_signals is None:
        learned_signals = _learned_signals_from_history(user_context)

    spec = build_persona_spec(
        archetype=arch,
        mode=mode,
        user_context=user_context or {},
        learned_signals=learned_signals,
    )

    # Log the inference for audit + user transparency
    logger.info(
        f"emergent persona: {arch.value}+{mode.value} (reason={confidence})"
    )

    return spec


def _learned_signals_from_history(user_context: Optional[Dict[str, Any]]) -> List[str]:
    """Pull learned signals from the user_context or memory.

    For Day 1 this is a stub that returns hardcoded "what we know about Nick"
    — the live version queries meok/memory/subconscious.py for patterns.
    """
    if not user_context:
        return []

    signals: List[str] = []

    # If the user context has explicit "learned_signals", pass them through
    if "learned_signals" in user_context and isinstance(user_context["learned_signals"], list):
        signals.extend(user_context["learned_signals"])

    # Derive from time of day
    if "time_of_day" in user_context:
        tod = user_context["time_of_day"]
        if tod in ("morning", "early_morning"):
            signals.append("User often works on focused implementation in the morning")
        elif tod in ("afternoon", "midday"):
            signals.append("User often does strategic / planning work in the afternoon")
        elif tod in ("evening", "pond_time", "wind_down"):
            signals.append("User is often winding down — prefer shorter, more reflective responses")

    # Derive from current task
    if "current_task" in user_context:
        task = user_context["current_task"]
        signals.append(f"Current focus: {task}")

    return signals
