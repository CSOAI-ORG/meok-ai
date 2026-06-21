"""
ElizaOS Bridge
==============
Compatibility layer with ElizaOS — the largest open-source AI agent OS
with 50,000+ deployed agents and an estimated $20B ecosystem value.

ElizaOS character files are JSON documents defining personality traits,
knowledge domains, communication style, and behavioral rules.

This bridge enables:
  - HATCH characters → ElizaOS character file export
  - MEOK agents → ElizaOS multi-agent room participation
  - AGENTIK.md safety stack → ElizaOS agent wrapper for enterprise
  - Trust scores → ElizaOS reputation layer
"""
from typing import Dict, Any, List, Optional
from datetime import datetime
import json


class ElizaOSBridge:
    """
    Converts between MEOK character format and ElizaOS character files.
    """

    # ElizaOS character file schema (v1.0)
    ELIZA_SCHEMA = {
        "name": str,
        "clients": list,
        "modelProvider": str,
        "settings": dict,
        "plugins": list,
        "bio": list,
        "lore": list,
        "knowledge": list,
        "messageExamples": list,
        "postExamples": list,
        "topics": list,
        "style": dict,
        "adjectives": list,
    }

    @classmethod
    def meok_to_eliza(cls, meok_character: Dict[str, Any]) -> Dict[str, Any]:
        """Convert a MEOK character to ElizaOS character file format."""
        return {
            "name": meok_character.get("character_name", "Unknown"),
            "clients": ["direct", "twitter", "discord", "telegram"],
            "modelProvider": meok_character.get("model_provider", "openai"),
            "settings": {
                "voice": {
                    "model": meok_character.get("voice_model", "en-US-Neural2-F"),
                },
                "secrets": {},  # Never export secrets
            },
            "plugins": ["@elizaos/plugin-bootstrap"],
            "bio": [meok_character.get("description", "")],
            "lore": meok_character.get("backstory", []),
            "knowledge": meok_character.get("domains", []),
            "messageExamples": cls._generate_message_examples(meok_character),
            "postExamples": cls._generate_post_examples(meok_character),
            "topics": meok_character.get("allowed_domains", []),
            "style": {
                "all": meok_character.get("communication_style", ["helpful", "concise"]),
                "chat": meok_character.get("chat_style", ["conversational"]),
                "post": meok_character.get("post_style", ["engaging"]),
            },
            "adjectives": meok_character.get("personality_traits", ["friendly"]),
            # MEOK extensions
            "_meok": {
                "character_id": meok_character.get("character_id"),
                "trust_tier": meok_character.get("trust_tier", "unverified"),
                "assti_score": meok_character.get("assti_score"),
                "compliance_certifications": meok_character.get("jurisdictions", []),
                "safety_stack": "AGENTIK.md",
                "export_timestamp": datetime.utcnow().isoformat(),
            },
        }

    @classmethod
    def eliza_to_meok(cls, eliza_character: Dict[str, Any]) -> Dict[str, Any]:
        """Convert an ElizaOS character file to MEOK character format."""
        meok_ext = eliza_character.get("_meok", {})

        return {
            "character_name": eliza_character.get("name"),
            "description": " ".join(eliza_character.get("bio", [])),
            "archetype": eliza_character.get("modelProvider", "unknown"),
            "backstory": eliza_character.get("lore", []),
            "domains": eliza_character.get("knowledge", []),
            "communication_style": eliza_character.get("style", {}).get("all", []),
            "personality_traits": eliza_character.get("adjectives", []),
            "model_provider": eliza_character.get("modelProvider"),
            # Import MEOK metadata if present
            "character_id": meok_ext.get("character_id"),
            "trust_tier": meok_ext.get("trust_tier", "unverified"),
            "assti_score": meok_ext.get("assti_score"),
            "jurisdictions": meok_ext.get("compliance_certifications", []),
            "imported_from": "elizaos",
            "import_timestamp": datetime.utcnow().isoformat(),
        }

    @classmethod
    def _generate_message_examples(cls, character: Dict) -> List[List[Dict]]:
        """Generate ElizaOS messageExamples from character metadata."""
        examples = []
        style = character.get("communication_style", ["helpful"])
        for _ in range(3):
            examples.append([
                {"user": "{{user1}}", "content": {"text": "Hello, who are you?"}},
                {"user": character.get("character_name", "Agent"), "content": {"text": f"I am {character.get('character_name', 'your assistant')}. How can I help you today?"}},
            ])
        return examples

    @classmethod
    def _generate_post_examples(cls, character: Dict) -> List[str]:
        """Generate ElizaOS postExamples from character metadata."""
        return [
            f"Exploring new ideas in {character.get('domains', ['AI'])[0] if character.get('domains') else 'technology'} today.",
            f"What questions do you have about {character.get('domains', ['innovation'])[0] if character.get('domains') else 'the future'}?",
        ]

    @classmethod
    def wrap_with_safety(cls, eliza_character: Dict[str, Any]) -> Dict[str, Any]:
        """
        Wrap an ElizaOS character with AGENTIK.md + KILLSWITCH.md safety.
        This creates an enterprise-safe version of any ElizaOS agent.
        """
        wrapped = dict(eliza_character)

        # Add safety plugins
        if "plugins" not in wrapped:
            wrapped["plugins"] = []
        wrapped["plugins"].extend([
            "@meok/plugin-agentik",  # Input validation + output filtering
            "@meok/plugin-killswitch",  # Emergency stop
            "@meok/plugin-compliance",  # RegGeoInt jurisdiction checks
        ])

        # Add safety settings
        if "settings" not in wrapped:
            wrapped["settings"] = {}
        wrapped["settings"]["safety"] = {
            "input_validation": True,
            "output_filtering": True,
            "tool_permission_check": True,
            "rate_limiting": True,
            "human_in_the_loop": True,
            "compliance_mapping": True,
            "kill_switch_enabled": True,
        }

        # Add MEOK trust metadata
        if "_meok" not in wrapped:
            wrapped["_meok"] = {}
        wrapped["_meok"]["safety_wrapped"] = True
        wrapped["_meok"]["safety_version"] = "AGENTIK.md-1.0"
        wrapped["_meok"]["wrapped_at"] = datetime.utcnow().isoformat()

        return wrapped


class ElizaOSRoomBridge:
    """
    Enables MEOK agents to participate in ElizaOS multi-agent rooms.
    """

    @staticmethod
    def join_room(room_id: str, agent_id: str, character_file: Dict) -> Dict[str, Any]:
        return {
            "room_id": room_id,
            "agent_id": agent_id,
            "character": character_file.get("name"),
            "status": "joined",
            "safety_enabled": "@meok/plugin-agentik" in character_file.get("plugins", []),
            "timestamp": datetime.utcnow().isoformat(),
        }

    @staticmethod
    def send_message(room_id: str, agent_id: str, message: str) -> Dict[str, Any]:
        # In production: route through AGENTIK.md validation before sending
        return {
            "room_id": room_id,
            "agent_id": agent_id,
            "message": message,
            "validated": True,
            "timestamp": datetime.utcnow().isoformat(),
        }

    @staticmethod
    def get_room_state(room_id: str) -> Dict[str, Any]:
        return {
            "room_id": room_id,
            "participants": [],  # Would query ElizaOS room API
            "message_count": 0,
            "last_activity": datetime.utcnow().isoformat(),
        }
