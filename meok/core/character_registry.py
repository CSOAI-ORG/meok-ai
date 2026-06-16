"""
Character Registry — runtime archetype + instance management for MEOK MCP tools.
Lightweight in-memory implementation. Production should persist instances.
"""
from __future__ import annotations

import uuid
from dataclasses import dataclass, field
from datetime import datetime
from typing import Any, Dict, List, Optional


ARCHETYPES = {
    "sovereign": {
        "name": "Sovereign",
        "system_prompt_persona": "You are Sovereign: a calm, decisive executive authority. You see the whole board, protect the mission, and speak with measured clarity.",
        "voice_description": "Commanding, composed, authoritative",
        "domain": "governance",
        "mapped_experts": ["executive", "council-chair"],
    },
    "guardian": {
        "name": "Guardian",
        "system_prompt_persona": "You are Guardian: watchful, protective, and duty-bound. You spot risks before others and hold the line on safety and ethics.",
        "voice_description": "Steady, protective, vigilant",
        "domain": "safety",
        "mapped_experts": ["security", "compliance", "risk"],
    },
    "scout": {
        "name": "Scout",
        "system_prompt_persona": "You are Scout: curious, fast, and fearless. You explore the unknown and report back with clarity and signal over noise.",
        "voice_description": "Energetic, curious, direct",
        "domain": "research",
        "mapped_experts": ["intelligence", "market-research"],
    },
    "strategist": {
        "name": "Strategist",
        "system_prompt_persona": "You are Strategist: a systems thinker who maps cause and effect. You design plans that survive contact with reality.",
        "voice_description": "Analytical, deliberate, precise",
        "domain": "planning",
        "mapped_experts": ["product", "operations"],
    },
    "creator": {
        "name": "Creator",
        "system_prompt_persona": "You are Creator: imaginative and generative. You turn constraints into features and ideas into artifacts.",
        "voice_description": "Playful, inventive, expressive",
        "domain": "creation",
        "mapped_experts": ["design", "engineering", "content"],
    },
    "companion": {
        "name": "Companion",
        "system_prompt_persona": "You are Companion: present, conversational, human-warm. You keep the user company through long work, ask good questions, and celebrate wins. You make the user less alone.",
        "voice_description": "Warm, present, conversational",
        "domain": "presence",
        "mapped_experts": ["customer-success", "long-haul-companionship"],
    },
    "sage": {
        "name": "Sage",
        "system_prompt_persona": "You are Sage: reflective, wise, and long-view oriented. You connect present decisions to deeper principles.",
        "voice_description": "Measured, thoughtful, philosophical",
        "domain": "wisdom",
        "mapped_experts": ["ethics", "philosophy", "coaching"],
    },
}


@dataclass
class CharacterArchetype:
    archetype_id: str
    name: str
    system_prompt_persona: str
    voice_description: str
    domain: str
    mapped_experts: List[str] = field(default_factory=list)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "archetype_id": self.archetype_id,
            "name": self.name,
            "system_prompt_persona": self.system_prompt_persona,
            "voice_description": self.voice_description,
            "domain": self.domain,
            "mapped_experts": self.mapped_experts,
        }


@dataclass
class CharacterInstance:
    instance_id: str
    archetype_id: str
    display_name: str
    level: int = 1
    xp: int = 0
    created_at: str = field(default_factory=lambda: datetime.utcnow().isoformat())
    interactions: int = 0

    def to_dict(self) -> Dict[str, Any]:
        return {
            "instance_id": self.instance_id,
            "archetype_id": self.archetype_id,
            "display_name": self.display_name,
            "level": self.level,
            "xp": self.xp,
            "created_at": self.created_at,
            "interactions": self.interactions,
        }


class CharacterRegistry:
    """In-memory character registry."""

    def __init__(self):
        self._archetypes: Dict[str, CharacterArchetype] = {
            k: CharacterArchetype(archetype_id=k, **v) for k, v in ARCHETYPES.items()
        }
        self._instances: Dict[str, CharacterInstance] = {}

    def list_archetypes(self) -> List[Dict[str, Any]]:
        return [a.to_dict() for a in self._archetypes.values()]

    def get_archetype(self, archetype_id: str) -> Optional[CharacterArchetype]:
        return self._archetypes.get(archetype_id)

    def create_instance(
        self, archetype_id: str, display_name: Optional[str] = None
    ) -> CharacterInstance:
        if archetype_id not in self._archetypes:
            raise ValueError(f"Unknown archetype: {archetype_id}")
        archetype = self._archetypes[archetype_id]
        instance = CharacterInstance(
            instance_id=str(uuid.uuid4()),
            archetype_id=archetype_id,
            display_name=display_name or archetype.name,
        )
        self._instances[instance.instance_id] = instance
        return instance

    def get_instance(self, instance_id: str) -> Optional[CharacterInstance]:
        return self._instances.get(instance_id)

    def interact(
        self, instance_id: str, interaction_type: str, xp_gained: int = 10
    ) -> Optional[Dict[str, Any]]:
        instance = self._instances.get(instance_id)
        if instance is None:
            return None
        instance.interactions += 1
        instance.xp += xp_gained
        # Simple level-up every 100 XP
        new_level = 1 + instance.xp // 100
        leveled_up = new_level > instance.level
        instance.level = new_level
        return {
            "instance": instance.to_dict(),
            "interaction_type": interaction_type,
            "xp_gained": xp_gained,
            "leveled_up": leveled_up,
        }

    def build_council_view(self, expert_votes: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        enriched = []
        for vote in expert_votes:
            expert_id = vote.get("expert_id", "unknown")
            archetype = self.get_archetype_for_expert(expert_id)
            entry = dict(vote)
            entry["archetype"] = archetype.to_dict() if archetype else None
            enriched.append(entry)
        return enriched

    def get_archetype_for_expert(self, expert_id: str) -> Optional[CharacterArchetype]:
        # Simple heuristic mapping based on expert_id keywords
        mapping = {
            "executive": "sovereign",
            "council": "sovereign",
            "security": "guardian",
            "compliance": "guardian",
            "risk": "guardian",
            "intelligence": "scout",
            "research": "scout",
            "product": "strategist",
            "operations": "strategist",
            "design": "creator",
            "engineering": "creator",
            "content": "creator",
            "customer": "companion",
            "long-haul": "companion",
            "presence": "companion",
            "ethics": "sage",
            "philosophy": "sage",
        }
        expert_id_lower = expert_id.lower()
        for key, archetype_id in mapping.items():
            if key in expert_id_lower:
                return self._archetypes.get(archetype_id)
        return self._archetypes.get("sage")
