"""
MEOK Character Emergence System — Python backend mirror
6-stage lifecycle: Egg → Cracking → Hatching → Growing → Mature → Full

Spec:  MEOK.AI Architecture Blueprint + Website Architecture Blueprint
Stage: determined by interaction_count from entity entity table
Use:   EntityService.get_emergence_state(entity_id) → EmergenceState
MCP:   character_emergence tool (see mcp/tools/character_emergence.py)
"""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import Optional


class Stage(str, Enum):
    EGG      = "egg"
    CRACKING = "cracking"
    HATCHING = "hatching"
    GROWING  = "growing"
    MATURE   = "mature"
    FULL     = "full"


@dataclass(frozen=True)
class StageDefinition:
    id: Stage
    index: int
    label: str
    emoji: str
    description: str
    color: str
    progress_min: float
    progress_max: float
    threshold: int          # minimum interaction_count to enter this stage
    personality_unlock: str  # what becomes available at this stage


STAGE_DEFS: dict[Stage, StageDefinition] = {
    Stage.EGG: StageDefinition(
        id=Stage.EGG,
        index=0,
        label="Egg",
        emoji="🥚",
        description="Something extraordinary is waiting inside…",
        color="#87CEEB",
        progress_min=0.0,
        progress_max=0.15,
        threshold=0,
        personality_unlock="basic greeting",
    ),
    Stage.CRACKING: StageDefinition(
        id=Stage.CRACKING,
        index=1,
        label="Cracking",
        emoji="🥚",   # still an egg, but different animation state
        description="The first signs of life — your companion stirs.",
        color="#6BB8D4",
        progress_min=0.15,
        progress_max=0.35,
        threshold=10,
        personality_unlock="basic preferences detected",
    ),
    Stage.HATCHING: StageDefinition(
        id=Stage.HATCHING,
        index=2,
        label="Hatching",
        emoji="🐣",
        description="Your companion is emerging!",
        color="#FFD700",
        progress_min=0.35,
        progress_max=0.60,
        threshold=25,
        personality_unlock="care style recommendation active",
    ),
    Stage.GROWING: StageDefinition(
        id=Stage.GROWING,
        index=3,
        label="Growing",
        emoji="🐥",
        description="Learning who you are, what you care about.",
        color="#2ECC71",
        progress_min=0.60,
        progress_max=0.80,
        threshold=50,
        personality_unlock="emotional baseline established",
    ),
    Stage.MATURE: StageDefinition(
        id=Stage.MATURE,
        index=4,
        label="Mature",
        emoji="🐦",
        description="Your sovereign companion is fully formed.",
        color="#4A90D9",
        progress_min=0.80,
        progress_max=0.95,
        threshold=100,
        personality_unlock="full CPM + council deliberation",
    ),
    Stage.FULL: StageDefinition(
        id=Stage.FULL,
        index=5,
        label="Full",
        emoji="✨",
        description="MEOK — fully yours. Sovereign. Caring. Alive.",
        color="#4A90D9",
        progress_min=0.95,
        progress_max=1.0,
        threshold=200,
        personality_unlock="autonomous proactive mode + nightshift",
    ),
}

STAGE_ORDER = [Stage.EGG, Stage.CRACKING, Stage.HATCHING, Stage.GROWING, Stage.MATURE, Stage.FULL]


@dataclass
class EmergenceState:
    entity_id: str
    interaction_count: int
    stage: Stage
    stage_def: StageDefinition
    progress: float             # 0.0–1.0 overall
    next_stage: Optional[Stage]
    interactions_to_next: int   # 0 if already at FULL
    personality_unlocked: list[str]

    def to_dict(self) -> dict:
        return {
            "entity_id": self.entity_id,
            "interaction_count": self.interaction_count,
            "stage": self.stage.value,
            "stage_label": self.stage_def.label,
            "stage_emoji": self.stage_def.emoji,
            "stage_description": self.stage_def.description,
            "stage_color": self.stage_def.color,
            "progress": round(self.progress, 4),
            "progress_pct": round(self.progress * 100, 1),
            "next_stage": self.next_stage.value if self.next_stage else None,
            "interactions_to_next": self.interactions_to_next,
            "personality_unlocked": self.personality_unlocked,
        }


# ─── Core computation ─────────────────────────────────────────────────────────

def stage_from_interactions(count: int) -> Stage:
    """Determine the current stage from raw interaction count."""
    for stage in reversed(STAGE_ORDER):
        if count >= STAGE_DEFS[stage].threshold:
            return stage
    return Stage.EGG


def progress_within_stage(count: int, stage: Stage) -> float:
    """Progress within the current stage's window (0.0–1.0)."""
    sdef = STAGE_DEFS[stage]
    idx = sdef.index
    if idx >= len(STAGE_ORDER) - 1:
        return 1.0  # FULL stage
    next_stage = STAGE_ORDER[idx + 1]
    next_threshold = STAGE_DEFS[next_stage].threshold
    span = next_threshold - sdef.threshold
    if span <= 0:
        return 1.0
    within = min(count - sdef.threshold, span) / span
    return sdef.progress_min + within * (sdef.progress_max - sdef.progress_min)


def compute_emergence_state(entity_id: str, interaction_count: int) -> EmergenceState:
    """Full emergence state for an entity."""
    count = max(0, interaction_count)
    stage = stage_from_interactions(count)
    sdef = STAGE_DEFS[stage]
    progress = progress_within_stage(count, stage)

    # Next stage
    idx = sdef.index
    next_stage = STAGE_ORDER[idx + 1] if idx < len(STAGE_ORDER) - 1 else None
    if next_stage:
        interactions_to_next = max(0, STAGE_DEFS[next_stage].threshold - count)
    else:
        interactions_to_next = 0

    # Unlocked personalities = all stages up to current
    unlocked = [STAGE_DEFS[s].personality_unlock for s in STAGE_ORDER[: idx + 1]]

    return EmergenceState(
        entity_id=entity_id,
        interaction_count=count,
        stage=stage,
        stage_def=sdef,
        progress=progress,
        next_stage=next_stage,
        interactions_to_next=interactions_to_next,
        personality_unlocked=unlocked,
    )


# ─── Entity integration ───────────────────────────────────────────────────────

def emergence_from_entity(entity_data: dict) -> EmergenceState:
    """
    Build an EmergenceState from entity row data.
    Entity fields used:
      - entity_id (str)
      - interaction_count (int) or hatch_level (0-100 → *2 heuristic)
    """
    entity_id = entity_data.get("entity_id", "unknown")
    count = entity_data.get("interaction_count")
    if count is None:
        hatch_level = entity_data.get("hatch_level", 0)
        count = int(hatch_level * 2)
    return compute_emergence_state(entity_id, int(count))


# ─── Quick test ──────────────────────────────────────────────────────────────

if __name__ == "__main__":
    for interactions in [0, 5, 10, 20, 25, 40, 50, 80, 100, 150, 200, 250]:
        state = compute_emergence_state("test_entity", interactions)
        bar = "█" * int(state.progress * 20) + "░" * (20 - int(state.progress * 20))
        print(
            f"  {interactions:>4} interactions → {state.stage_def.emoji} {state.stage.value:<10} "
            f"[{bar}] {state.progress*100:5.1f}% "
            f"  next:{state.interactions_to_next:>4} to {state.next_stage.value if state.next_stage else '—':<10}"
        )
