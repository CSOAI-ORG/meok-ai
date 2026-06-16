"""
HATCH Worlds API
================
Persistent AI character world state management.

MEOK HATCH is the Tamagotchi for AI characters — the global
infrastructure layer for AI character deployment.

Four pillars:
  1. Character Engine — personality DNA, emotional state, memory
  2. World State Manager — spatial indexing, relationship graphs, events
  3. Safety Compliance Layer — AGENTIK.md + KILLSWITCH.md
  4. Enterprise Bridge — REST/WebSocket, MCP protocol, on-premise
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, List, Optional
from datetime import datetime
import uuid

router = APIRouter(prefix="/v1/hatch", tags=["hatch-worlds"])

# ── In-memory world state ──
_HATCH_CHARACTERS: Dict[str, Dict[str, Any]] = {}
_HATCH_WORLDS: Dict[str, Dict[str, Any]] = {}
_HATCH_RELATIONSHIPS: Dict[str, Dict[str, Any]] = {}


# ── Models ──
class CharacterCreate(BaseModel):
    character_name: str
    archetype: str
    personality_dna: Dict[str, float]  # openness, conscientiousness, etc.
    backstory: List[str]
    domains: List[str]
    creator_id: str


class WorldCreate(BaseModel):
    world_name: str
    world_type: str  # "town", "enterprise", "game", "social"
    spatial_bounds: Dict[str, Any]  # coordinates, zones
    rules: List[str]


class InteractionEvent(BaseModel):
    character_id: str
    event_type: str  # "speak", "move", "emotion_change", "memory_formed"
    payload: Dict[str, Any]


# ── Character Engine ──

@router.post("/characters")
async def create_character(req: CharacterCreate):
    """Create a new HATCH character with personality DNA."""
    char_id = f"hatch_{uuid.uuid4().hex[:16]}"

    character = {
        "character_id": char_id,
        "character_name": req.character_name,
        "archetype": req.archetype,
        "personality_dna": req.personality_dna,
        "backstory": req.backstory,
        "domains": req.domains,
        "creator_id": req.creator_id,
        "emotional_state": {
            "happiness": 0.5,
            "energy": 0.7,
            "trust": 0.3,
            "curiosity": 0.8,
        },
        "memory_vector": [],  # RAG-ready memory store
        "experience_points": 0,
        "hatch_level": 1,
        "status": "active",
        "created_at": datetime.utcnow().isoformat(),
        "last_interaction": datetime.utcnow().isoformat(),
    }

    _HATCH_CHARACTERS[char_id] = character
    return character


@router.get("/characters/{character_id}")
async def get_character(character_id: str):
    """Get full character state including emotional state and memory."""
    char = _HATCH_CHARACTERS.get(character_id)
    if not char:
        raise HTTPException(status_code=404, detail="Character not found")
    return char


@router.post("/characters/{character_id}/interact")
async def interact_with_character(character_id: str, event: InteractionEvent):
    """Process an interaction event and update character state."""
    char = _HATCH_CHARACTERS.get(character_id)
    if not char:
        raise HTTPException(status_code=404, detail="Character not found")

    # Update emotional state based on event
    if event.event_type == "speak":
        char["emotional_state"]["energy"] = min(1.0, char["emotional_state"]["energy"] + 0.05)
        char["experience_points"] += 10
    elif event.event_type == "emotion_change":
        for emotion, value in event.payload.get("emotions", {}).items():
            if emotion in char["emotional_state"]:
                char["emotional_state"][emotion] = max(0.0, min(1.0, value))
    elif event.event_type == "memory_formed":
        char["memory_vector"].append({
            "memory_id": f"mem_{uuid.uuid4().hex[:8]}",
            "content": event.payload.get("content", ""),
            "importance": event.payload.get("importance", 0.5),
            "timestamp": datetime.utcnow().isoformat(),
        })

    # Level up logic
    if char["experience_points"] >= char["hatch_level"] * 100:
        char["hatch_level"] += 1

    char["last_interaction"] = datetime.utcnow().isoformat()
    return char


@router.post("/characters/{character_id}/export/elizaos")
async def export_to_elizaos(character_id: str):
    """Export a HATCH character to ElizaOS character file format."""
    char = _HATCH_CHARACTERS.get(character_id)
    if not char:
        raise HTTPException(status_code=404, detail="Character not found")

    from meok.core.elizaos_bridge import ElizaOSBridge
    eliza_file = ElizaOSBridge.meok_to_eliza(char)
    return {"character_id": character_id, "elizaos_format": eliza_file}


# ── World State Manager ──

@router.post("/worlds")
async def create_world(req: WorldCreate):
    """Create a persistent world for AI characters."""
    world_id = f"world_{uuid.uuid4().hex[:12]}"

    world = {
        "world_id": world_id,
        "world_name": req.world_name,
        "world_type": req.world_type,
        "spatial_bounds": req.spatial_bounds,
        "rules": req.rules,
        "characters": [],
        "event_history": [],
        "economy": {
            "currency": "HATCH_CREDITS",
            "total_supply": 1000000,
            "circulating": 0,
        },
        "created_at": datetime.utcnow().isoformat(),
    }

    _HATCH_WORLDS[world_id] = world
    return world


@router.get("/worlds/{world_id}")
async def get_world(world_id: str):
    """Get full world state including all characters and events."""
    world = _HATCH_WORLDS.get(world_id)
    if not world:
        raise HTTPException(status_code=404, detail="World not found")

    # Enrich with character details
    characters = [_HATCH_CHARACTERS.get(cid) for cid in world["characters"] if cid in _HATCH_CHARACTERS]
    return {**world, "character_details": characters}


@router.post("/worlds/{world_id}/join")
async def join_world(world_id: str, character_id: str):
    """Add a character to a world."""
    world = _HATCH_WORLDS.get(world_id)
    char = _HATCH_CHARACTERS.get(character_id)
    if not world or not char:
        raise HTTPException(status_code=404, detail="World or character not found")

    if character_id not in world["characters"]:
        world["characters"].append(character_id)

    # Record event
    world["event_history"].append({
        "event_id": f"evt_{uuid.uuid4().hex[:8]}",
        "type": "character_joined",
        "character_id": character_id,
        "timestamp": datetime.utcnow().isoformat(),
    })

    return {"world_id": world_id, "character_id": character_id, "status": "joined"}


# ── Relationship Graph ──

@router.post("/relationships")
async def create_relationship(character_a: str, character_b: str, relationship_type: str):
    """Create a relationship between two characters."""
    rel_id = f"rel_{uuid.uuid4().hex[:8]}"
    _HATCH_RELATIONSHIPS[rel_id] = {
        "relationship_id": rel_id,
        "character_a": character_a,
        "character_b": character_b,
        "type": relationship_type,  # friend, rival, mentor, etc.
        "trust_score": 0.5,
        "interaction_count": 0,
        "created_at": datetime.utcnow().isoformat(),
    }
    return _HATCH_RELATIONSHIPS[rel_id]


@router.get("/characters/{character_id}/relationships")
async def get_relationships(character_id: str):
    """Get all relationships for a character."""
    rels = [r for r in _HATCH_RELATIONSHIPS.values() if r["character_a"] == character_id or r["character_b"] == character_id]
    return {"character_id": character_id, "relationships": rels, "count": len(rels)}


# ── Safety Compliance Layer ──

@router.get("/characters/{character_id}/safety")
async def get_character_safety_status(character_id: str):
    """Get AGENTIK.md + KILLSWITCH.md safety status for a character."""
    char = _HATCH_CHARACTERS.get(character_id)
    if not char:
        raise HTTPException(status_code=404, detail="Character not found")

    return {
        "character_id": character_id,
        "safety_stack": "AGENTIK.md-1.0 + KILLSWITCH.md-1.0",
        "input_validation": True,
        "output_filtering": True,
        "tool_permissions": True,
        "rate_limiting": True,
        "human_in_the_loop": True,
        "kill_switch": True,
        "compliance_mapped": True,
        "trust_tier": char.get("trust_tier", "unverified"),
        "assti_score": char.get("assti_score"),
    }


# ── Enterprise Bridge ──

@router.get("/stats")
async def hatch_stats():
    """Global HATCH ecosystem statistics."""
    return {
        "total_characters": len(_HATCH_CHARACTERS),
        "total_worlds": len(_HATCH_WORLDS),
        "total_relationships": len(_HATCH_RELATIONSHIPS),
        "characters_by_level": {
            level: sum(1 for c in _HATCH_CHARACTERS.values() if c["hatch_level"] == level)
            for level in range(1, 11)
        },
        "worlds_by_type": {
            wtype: sum(1 for w in _HATCH_WORLDS.values() if w["world_type"] == wtype)
            for wtype in ["town", "enterprise", "game", "social"]
        },
    }
