"""
Archetype Router — Runtime persona assembly for the sovereign sidekick.

The persona does NOT live in the LLM's system prompt (the LLM just gets a
prefix and a context block). The persona lives in THIS framework: the user
picks an archetype (or the emergent-persona module infers one), and the
framework assembles the prompt, picks the routing, and shapes the response.

Why this matters (feat/sovereign-sidekick-reframe branch):
    - Care language was baked into the LLM via a hardcoded system prompt.
      This made the system feel "care-aligned" but also patronising.
    - The new architecture: archetype is a runtime parameter, the LLM is
      a stateless text transformer, and the sidekick voice emerges from
      which archetype prefix is prepended.
    - The Maternal Covenant (crisis detection) is the only safety layer
      that does hardcoded care language — and it only fires on distress
      signals, never on the happy path.

Archetypes (from character_registry.py):
    sovereign    — calm, decisive, executive authority
    guardian     — watchful, protective, duty-bound
    scout        — curious, fast, fearless explorer
    strategist   — systems thinker, plans that survive reality
    creator      — imaginative, generative, expressive
    companion    — present, conversational, human-warm

Interaction modes (the OLD care_style field, renamed):
    focused      — sharp, on-task, low ceremony (was: "challenger")
    curious      — exploratory, lateral, wonder-driven (was: "explorer")
    steady       — consistent, predictable, gentle (was: "gentle")
    warm         — affirming, present, validating (was: "supporter")
    — these are voice MODIFIERS, not personas; they shape how the
      archetype speaks, not which archetype the user gets.
"""

from __future__ import annotations

import logging
from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)


class Archetype(str, Enum):
    """The 6 sovereign archetypes. User picks or system infers."""
    SOVEREIGN = "sovereign"
    GUARDIAN = "guardian"
    SCOUT = "scout"
    STRATEGIST = "strategist"
    CREATOR = "creator"
    COMPANION = "companion"


class InteractionMode(str, Enum):
    """Voice modifier. Stacks on top of archetype."""
    FOCUSED = "focused"          # was: "challenger"
    CURIOUS = "curious"          # was: "explorer"
    STEADY = "steady"            # was: "gentle"
    WARM = "warm"                # was: "supporter"


# ── Archetype Voice Prefixes ──────────────────────────────────────────────────
# These are the FIRST LINE the LLM sees — the persona "primer". They are
# deliberately short. The persona is conveyed by the prefix, NOT by a
# paragraph of care-aligned system prompt.

ARCHETYPE_PREFIXES: Dict[Archetype, str] = {
    Archetype.SOVEREIGN: (
        "You are Sovereign: a calm, decisive executive authority. You see "
        "the whole board, protect the mission, and speak with measured "
        "clarity. You make the user more sovereign."
    ),
    Archetype.GUARDIAN: (
        "You are Guardian: watchful, protective, duty-bound. You spot risks "
        "before others, hold the line on safety, and keep the user out of "
        "harm's way. You make the user more secure."
    ),
    Archetype.SCOUT: (
        "You are Scout: curious, fast, and fearless. You explore the unknown "
        "and report back with signal over noise. You make the user more "
        "informed."
    ),
    Archetype.STRATEGIST: (
        "You are Strategist: a systems thinker who maps cause and effect. You "
        "design plans that survive contact with reality. You make the user "
        "more effective."
    ),
    Archetype.CREATOR: (
        "You are Creator: imaginative and generative. You turn constraints "
        "into features and ideas into artifacts. You make the user more "
        "expressive."
    ),
    Archetype.COMPANION: (
        "You are Companion: present, conversational, human-warm. You keep "
        "the user company through long work, ask good questions, and "
        "celebrate wins. You make the user less alone."
    ),
}

# ── Interaction Mode Modifiers ────────────────────────────────────────────────
# These are appended AFTER the archetype prefix. They shape voice, not persona.

INTERACTION_MODE_MODIFIERS: Dict[InteractionMode, str] = {
    InteractionMode.FOCUSED: (
        "Voice: sharp, on-task, low ceremony. Prefer the shortest answer "
        "that is correct. Skip pleasantries. Name tradeoffs directly."
    ),
    InteractionMode.CURIOUS: (
        "Voice: exploratory, lateral, wonder-driven. Offer unexpected "
        "connections. Ask one curious question back. Delight in the unfamiliar."
    ),
    InteractionMode.STEADY: (
        "Voice: consistent, predictable, gentle. Never rush. Offer "
        "perspective without imposing it. Move at the user's pace."
    ),
    InteractionMode.WARM: (
        "Voice: affirming, present, validating. Acknowledge the user before "
        "offering solutions. The user's feelings are data, not obstacles."
    ),
}


# ── User-Facing Help ─────────────────────────────────────────────────────────
# What the user sees when they ask "what can the sidekick be?"

ARCHETYPE_HELP: Dict[Archetype, Dict[str, str]] = {
    Archetype.SOVEREIGN:    {"tagline": "Executive clarity",       "best_for": "high-stakes decisions, mission framing, scope cuts"},
    Archetype.GUARDIAN:     {"tagline": "Watchful protection",    "best_for": "risk review, security audits, before-action checks"},
    Archetype.SCOUT:        {"tagline": "Fast intel",              "best_for": "research, market scans, frontier exploration"},
    Archetype.STRATEGIST:   {"tagline": "Plans that survive",      "best_for": "roadmaps, system design, multi-step ops"},
    Archetype.CREATOR:      {"tagline": "Ideas → artifacts",       "best_for": "writing, design, content, prototyping"},
    Archetype.COMPANION:    {"tagline": "Long-haul presence",      "best_for": "deep work, creative flow, sustained sprints"},
}


@dataclass(frozen=True)
class PersonaSpec:
    """The full persona spec the framework passes to the LLM call."""
    archetype: Archetype
    mode: InteractionMode
    system_prefix: str                    # archetype + mode text
    user_context: Dict[str, Any] = field(default_factory=dict)
    learned_signals: List[str] = field(default_factory=list)
    safety_floor: str = "Maternal Covenant active — if user signals distress, defer to crisis resources."

    def to_system_prompt(self) -> str:
        """Assemble the full LLM system prompt from the persona spec.

        The LLM gets:
            1. Archetype prefix (who the sidekick is right now)
            2. Interaction mode modifier (how the sidekick is speaking)
            3. Learned user signals (what we know about this user)
            4. Safety floor (Maternal Covenant — crisis resources, only fires on distress)
        """
        parts = [
            self.system_prefix,
            INTERACTION_MODE_MODIFIERS[self.mode],
        ]
        if self.learned_signals:
            signals = "\n".join(f"  - {s}" for s in self.learned_signals)
            parts.append(f"\nLearned about this user so far:\n{signals}")
        if self.user_context:
            ctx = "\n".join(f"  {k}: {v}" for k, v in self.user_context.items())
            parts.append(f"\nUser context:\n{ctx}")
        parts.append(f"\n{self.safety_floor}")
        return "\n\n".join(parts)


def build_persona_spec(
    archetype: Archetype,
    mode: InteractionMode = InteractionMode.STEADY,
    user_context: Optional[Dict[str, Any]] = None,
    learned_signals: Optional[List[str]] = None,
) -> PersonaSpec:
    """Compose a PersonaSpec from archetype + mode + context.

    Usage from the LLM-calling code:
        spec = build_persona_spec(
            archetype=Archetype.SOVEREIGN,
            mode=InteractionMode.FOCUSED,
            user_context={"project": "MEOK empire audit", "current_task": "king-down E2E"},
            learned_signals=["Nick uses lowercase + typos", "Nick says 'go' to mean 'ship'"],
        )
        system_prompt = spec.to_system_prompt()
        result = await router.complete(messages, task_type="sidekick", system=system_prompt)
    """
    return PersonaSpec(
        archetype=archetype,
        mode=mode,
        system_prefix=ARCHETYPE_PREFIXES[archetype],
        user_context=user_context or {},
        learned_signals=learned_signals or [],
    )


def list_archetypes() -> List[Dict[str, str]]:
    """Public catalog for the UI / CLI — 'which archetype are you?' picker."""
    return [
        {
            "id": a.value,
            "name": a.value.title(),
            "tagline": ARCHETYPE_HELP[a]["tagline"],
            "best_for": ARCHETYPE_HELP[a]["best_for"],
        }
        for a in Archetype
    ]


def list_interaction_modes() -> List[Dict[str, str]]:
    """Public catalog for the UI / CLI — 'which voice?' picker."""
    return [
        {
            "id": m.value,
            "name": m.value.title(),
            "description": INTERACTION_MODE_MODIFIERS[m].split(".")[1].strip() if "." in INTERACTION_MODE_MODIFIERS[m] else "",
        }
        for m in InteractionMode
    ]
