"""
MEOK Entity — The Digital Self

Every user's MEOK companion is unique. It hatches from their first interaction,
evolves based on how they use it, and becomes a digital mirror of who they are.

Philosophy: "You don't choose it. You become it."

Architecture:
- MEOKEntity: persisted state (SQLite per-user, Postgres in production)
- EntityEvolution: the rules governing how the entity grows
- get_entity / update_entity: async CRUD helpers used by MCP tools + chat layer
"""

from __future__ import annotations

import hashlib
import json
import math
import os
import sqlite3
from dataclasses import dataclass, field, asdict
from datetime import datetime
from typing import Dict, List, Optional, Tuple

import logging

logger = logging.getLogger(__name__)

# ── Evolution thresholds (interactions) ───────────────────────────────────────

HATCH_LEVELS = {
    0: {"name": "Egg",       "label": "Dormant",    "threshold": 0},
    1: {"name": "Hatchling", "label": "Emerging",   "threshold": 25},
    2: {"name": "Juvenile",  "label": "Learning",   "threshold": 100},
    3: {"name": "Adult",     "label": "Sovereign",  "threshold": 500},
    4: {"name": "Ancient",   "label": "Transcendent", "threshold": 2000},
}

MAX_HATCH_LEVEL = 4

# ── Dominant trait derivation ──────────────────────────────────────────────────

INTEREST_TO_TRAIT: Dict[str, str] = {
    "gaming":    "warrior",
    "work":      "scholar",
    "creative":  "creator",
    "learning":  "explorer",
    "wellness":  "guardian",
    "social":    "diplomat",
}

STYLE_TO_TRAIT: Dict[str, str] = {
    "challenger":  "warrior",
    "supporter":   "guardian",
    "explorer":    "explorer",
    "scholar":     "scholar",
}

TRAIT_COLORS: Dict[str, Tuple[str, str]] = {
    "warrior":   ("#FF4D6D", "#FF9500"),   # crimson + amber
    "scholar":   ("#60B8F0", "#A78BFA"),   # sky blue + violet
    "creator":   ("#F5C842", "#7CC47A"),   # sun yellow + leaf green
    "explorer":  ("#34D399", "#60B8F0"),   # emerald + sky blue
    "guardian":  ("#A78BFA", "#F472B6"),   # violet + rose
    "diplomat":  ("#F5C842", "#60B8F0"),   # gold + sky blue
}

# ── Data model ────────────────────────────────────────────────────────────────

@dataclass
class MEOKEntity:
    user_id: str
    name: str = "Sovereign"
    hatch_level: int = 0
    dominant_trait: str = "explorer"
    color_primary: str = "#60B8F0"
    color_secondary: str = "#34D399"
    game_affinity: List[str] = field(default_factory=list)
    interests: List[str] = field(default_factory=list)
    companion_style: str = "explorer"
    personality_seed: float = 0.5
    interactions_count: int = 0
    care_alignment: float = 0.7
    created_at: str = field(default_factory=lambda: datetime.utcnow().isoformat())
    last_evolved_at: str = field(default_factory=lambda: datetime.utcnow().isoformat())
    last_seen_at: str = field(default_factory=lambda: datetime.utcnow().isoformat())

    # Derived display fields (not stored, computed on read)
    @property
    def hatch_label(self) -> str:
        return HATCH_LEVELS.get(self.hatch_level, HATCH_LEVELS[0])["label"]

    @property
    def hatch_name(self) -> str:
        return HATCH_LEVELS.get(self.hatch_level, HATCH_LEVELS[0])["name"]

    @property
    def next_threshold(self) -> Optional[int]:
        next_level = self.hatch_level + 1
        if next_level > MAX_HATCH_LEVEL:
            return None
        return HATCH_LEVELS[next_level]["threshold"]

    @property
    def progress_to_next(self) -> float:
        """0.0 – 1.0 progress toward next evolution."""
        current_threshold = HATCH_LEVELS[self.hatch_level]["threshold"]
        next_threshold = self.next_threshold
        if next_threshold is None:
            return 1.0
        span = next_threshold - current_threshold
        progress = self.interactions_count - current_threshold
        return max(0.0, min(1.0, progress / span))

    def compute_health_score(self, days_since_last_seen: int = 0) -> dict:
        """
        0–100 entity health score for churn prediction and pro-tier care prompts.

        From CCO research (architectural_cco_research_2026_03_19.json):
        - care_alignment (30 pts): direct proxy for emotional health
        - interactions (25 pts): log-scale engagement signal
        - hatch_level (25 pts): retention milestone (higher = stickier)
        - recency (20 pts): days since last session (0 days = max, 30+ days = 0)
        """
        import math as _math

        care_pts    = round(min(self.care_alignment, 1.0) * 30)
        inter_pts   = round(min(_math.log1p(self.interactions_count) / _math.log1p(100), 1.0) * 25)
        hatch_pts   = round((self.hatch_level / MAX_HATCH_LEVEL) * 25)
        recency_pts = round(max(0.0, 1.0 - days_since_last_seen / 30.0) * 20)

        total = care_pts + inter_pts + hatch_pts + recency_pts

        if total >= 75:
            status = "thriving"
        elif total >= 50:
            status = "healthy"
        elif total >= 30:
            status = "at_risk"
        else:
            status = "dormant"

        return {
            "score": total,
            "status": status,
            "components": {
                "care": care_pts,
                "engagement": inter_pts,
                "evolution": hatch_pts,
                "recency": recency_pts,
            },
            "at_risk": total < 40,
        }

    def to_dict(self) -> Dict:
        d = asdict(self)
        d["hatch_label"] = self.hatch_label
        d["hatch_name"] = self.hatch_name
        d["next_threshold"] = self.next_threshold
        d["progress_to_next"] = round(self.progress_to_next, 3)
        d["health_score"] = self.compute_health_score()
        return d


# ── Evolution logic ───────────────────────────────────────────────────────────

class EntityEvolution:
    """Determines how a MEOKEntity changes over time."""

    @staticmethod
    def derive_trait(interests: List[str], companion_style: str) -> str:
        """Combine interests + style preference into a dominant trait."""
        votes: Dict[str, int] = {}
        for interest in interests:
            trait = INTEREST_TO_TRAIT.get(interest, "explorer")
            votes[trait] = votes.get(trait, 0) + 2
        style_trait = STYLE_TO_TRAIT.get(companion_style, "explorer")
        votes[style_trait] = votes.get(style_trait, 0) + 3  # style weighted higher
        return max(votes, key=votes.get) if votes else "explorer"

    @staticmethod
    def derive_colors(trait: str, personality_seed: float) -> Tuple[str, str]:
        """Get primary/secondary colors for this trait, subtly shifted by seed."""
        primary, secondary = TRAIT_COLORS.get(trait, ("#60B8F0", "#34D399"))
        # Micro-shift the hue based on personality_seed so two 'explorer' entities differ slightly
        shifted = EntityEvolution._shift_hex(primary, int((personality_seed - 0.5) * 20))
        return shifted, secondary

    @staticmethod
    def _shift_hex(hex_color: str, degrees: int) -> str:
        """Shift a hex color's hue by `degrees`."""
        try:
            h = hex_color.lstrip("#")
            r, g, b = int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)
            # Simple hue rotation approximation
            r2 = max(0, min(255, r + degrees))
            g2 = max(0, min(255, g + int(degrees * 0.5)))
            b2 = max(0, min(255, b + int(degrees * 0.3)))
            return f"#{r2:02x}{g2:02x}{b2:02x}"
        except Exception:
            return hex_color

    @staticmethod
    def derive_seed(user_id: str, name: str) -> float:
        """Deterministic personality seed from user_id + name."""
        hash_input = f"{user_id}:{name}"
        digest = hashlib.md5(hash_input.encode()).hexdigest()
        return int(digest[:8], 16) / 0xFFFFFFFF  # 0.0 – 1.0

    @staticmethod
    def check_evolution(entity: MEOKEntity) -> Optional[int]:
        """Return new hatch_level if entity should evolve, else None."""
        for level in range(MAX_HATCH_LEVEL, 0, -1):
            threshold = HATCH_LEVELS[level]["threshold"]
            if entity.interactions_count >= threshold and entity.hatch_level < level:
                return level
        return None

    @classmethod
    def apply_interaction(cls, entity: MEOKEntity, game: Optional[str] = None,
                          care_score: float = 0.7) -> bool:
        """
        Record one interaction. Updates counts, care alignment, game affinity.
        Returns True if entity evolved.
        """
        entity.interactions_count += 1
        entity.last_seen_at = datetime.utcnow().isoformat()

        # Exponential moving average care alignment
        entity.care_alignment = 0.9 * entity.care_alignment + 0.1 * care_score

        # Update game affinity
        if game and game not in entity.game_affinity:
            entity.game_affinity.append(game)

        # Check evolution
        new_level = cls.check_evolution(entity)
        if new_level is not None:
            entity.hatch_level = new_level
            entity.last_evolved_at = datetime.utcnow().isoformat()
            logger.info(
                "Entity '%s' evolved to level %d (%s) after %d interactions",
                entity.name, new_level,
                HATCH_LEVELS[new_level]["name"],
                entity.interactions_count,
            )
            return True
        return False


# ── SQLite persistence ────────────────────────────────────────────────────────

class EntityStore:
    """Thin SQLite wrapper — one row per user_id."""

    def __init__(self, db_path: str = "/tmp/meok-entities.db"):
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("""
                CREATE TABLE IF NOT EXISTS entities (
                    user_id TEXT PRIMARY KEY,
                    data_json TEXT NOT NULL,
                    updated_at TEXT NOT NULL
                )
            """)
            conn.commit()

    def get(self, user_id: str) -> Optional[MEOKEntity]:
        with sqlite3.connect(self.db_path) as conn:
            row = conn.execute(
                "SELECT data_json FROM entities WHERE user_id = ?", (user_id,)
            ).fetchone()
        if not row:
            return None
        try:
            d = json.loads(row[0])
            # Remove computed fields before reconstructing
            for key in ("hatch_label", "hatch_name", "next_threshold", "progress_to_next"):
                d.pop(key, None)
            return MEOKEntity(**d)
        except Exception as e:
            logger.warning("EntityStore: failed to deserialise entity for %s: %s", user_id, e)
            return None

    def save(self, entity: MEOKEntity):
        d = asdict(entity)
        now = datetime.utcnow().isoformat()
        with sqlite3.connect(self.db_path) as conn:
            conn.execute(
                "INSERT OR REPLACE INTO entities (user_id, data_json, updated_at) VALUES (?, ?, ?)",
                (entity.user_id, json.dumps(d), now),
            )
            conn.commit()

    def delete(self, user_id: str):
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("DELETE FROM entities WHERE user_id = ?", (user_id,))
            conn.commit()


# ── Public API ────────────────────────────────────────────────────────────────

# Module-level store singleton
_store: Optional[EntityStore] = None

def _get_store() -> EntityStore:
    global _store
    if _store is None:
        db_path = os.environ.get("MEOK_ENTITY_DB", "/tmp/meok-entities.db")
        _store = EntityStore(db_path)
    return _store


def get_entity(user_id: str) -> Optional[MEOKEntity]:
    """Return entity for user_id, or None if not yet hatched."""
    return _get_store().get(user_id)


def create_entity(
    user_id: str,
    name: str,
    interests: List[str],
    companion_style: str,
) -> MEOKEntity:
    """
    Create a brand-new entity from birth ceremony answers.
    Sets trait, colors, and personality_seed deterministically.
    """
    trait = EntityEvolution.derive_trait(interests, companion_style)
    seed = EntityEvolution.derive_seed(user_id, name)
    primary, secondary = EntityEvolution.derive_colors(trait, seed)

    entity = MEOKEntity(
        user_id=user_id,
        name=name,
        hatch_level=0,
        dominant_trait=trait,
        color_primary=primary,
        color_secondary=secondary,
        interests=interests,
        companion_style=companion_style,
        personality_seed=seed,
    )
    _get_store().save(entity)
    logger.info("Entity '%s' created for user %s (trait=%s)", name, user_id, trait)
    return entity


def record_interaction(
    user_id: str,
    game: Optional[str] = None,
    care_score: float = 0.7,
) -> Tuple[MEOKEntity, bool]:
    """
    Record one interaction and persist.
    Returns (entity, evolved) — evolved=True if level changed.
    """
    store = _get_store()
    entity = store.get(user_id)
    if entity is None:
        # Auto-create default entity if none exists
        entity = create_entity(user_id, "Sovereign", ["learning"], "explorer")

    evolved = EntityEvolution.apply_interaction(entity, game=game, care_score=care_score)
    store.save(entity)
    return entity, evolved


def get_entity_summary(user_id: str) -> Dict:
    """
    Returns a dict suitable for sending to the frontend sidebar.
    Always returns something (creates default if needed).
    """
    entity = get_entity(user_id)
    if entity is None:
        return {
            "name": "Sovereign",
            "hatch_level": 0,
            "hatch_name": "Egg",
            "hatch_label": "Dormant",
            "color_primary": "#60B8F0",
            "color_secondary": "#34D399",
            "dominant_trait": "explorer",
            "interactions_count": 0,
            "progress_to_next": 0.0,
            "next_threshold": 25,
            "care_alignment": 0.7,
        }
    return entity.to_dict()
