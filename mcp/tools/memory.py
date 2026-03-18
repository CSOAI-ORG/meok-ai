"""
Memory tool definitions and handler.
Tools: record_memory, query_memories, get_temporal_chain, get_memory_stats, list_memories
"""

from typing import Dict, Any

from meok.mcp.state import ServiceState

MEMORY_TOOLS = [
    {
        "name": "record_memory",
        "description": "Record a memory episode with care-weighting",
        "inputSchema": {
            "type": "object",
            "properties": {
                "content": {"type": "string"},
                "source_agent": {"type": "string"},
                "memory_type": {"type": "string", "enum": ["interaction", "insight", "decision", "emotion"]},
                "care_weight": {"type": "number"},
                "tags": {"type": "array", "items": {"type": "string"}},
                "emotional_valence": {"type": "number"}
            },
            "required": ["content"]
        }
    },
    {
        "name": "query_memories",
        "description": "Query memories using semantic search with care-weighting",
        "inputSchema": {
            "type": "object",
            "properties": {
                "query": {"type": "string"},
                "care_weight_min": {"type": "number"},
                "tags": {"type": "array", "items": {"type": "string"}},
                "limit": {"type": "integer"}
            },
            "required": ["query"]
        }
    },
    {
        "name": "get_temporal_chain",
        "description": "Get temporal chain of related memories. If no episode_id given, returns recent memories.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "episode_id": {"type": "string", "description": "Starting episode ID (optional — omit to get recent chain)"},
                "direction": {"type": "string", "enum": ["forward", "backward", "both"]},
                "max_steps": {"type": "integer"},
                "limit": {"type": "integer", "description": "Number of recent memories when no episode_id given"}
            }
        }
    },
    {
        "name": "get_memory_stats",
        "description": "Get memory system statistics",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "list_memories",
        "description": "List all memories from PostgreSQL",
        "inputSchema": {
            "type": "object",
            "properties": {
                "limit": {"type": "integer", "description": "Maximum memories to return", "default": 50}
            }
        }
    },
]


async def handle_memory_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle memory tool calls."""

    if name == "record_memory":
        if not state.memory_store:
            return {"error": "Memory store not available"}
        episode = await state.memory_store.record_episode(
            content=arguments["content"],
            source_agent=arguments.get("source_agent", "user"),
            memory_type=arguments.get("memory_type", "interaction"),
            care_weight=arguments.get("care_weight", 0.5),
            tags=arguments.get("tags", []),
            emotional_valence=arguments.get("emotional_valence", 0.5),
        )
        return {"success": True, "episode_id": episode.id}

    elif name == "query_memories":
        if not state.memory_store:
            return {"error": "Memory store not available"}
        results = await state.memory_store.query_memories(
            query=arguments["query"],
            care_weight_min=arguments.get("care_weight_min", 0.0),
            tags=arguments.get("tags"),
            limit=arguments.get("limit", 5),
        )
        return {"memories": results}

    elif name == "get_temporal_chain":
        if not state.memory_store:
            return {"error": "Memory store not available"}
        if "episode_id" not in arguments:
            # If no episode_id given, return recent memories as chain
            limit = arguments.get("limit", arguments.get("max_steps", 10))
            memories = await state.memory_store.list_all_memories(limit=limit)
            return {"chain": memories, "count": len(memories)}
        chain = await state.memory_store.get_temporal_chain(
            episode_id=arguments["episode_id"],
            direction=arguments.get("direction", "forward"),
            max_steps=arguments.get("max_steps", 5),
        )
        return {"chain": chain}

    elif name == "get_memory_stats":
        if not state.memory_store:
            return {"error": "Memory store not available"}
        return await state.memory_store.get_stats()

    elif name == "list_memories":
        if not state.memory_store:
            return {"error": "Memory store not available"}
        memories = await state.memory_store.list_all_memories(
            limit=arguments.get("limit", 50)
        )
        return {"memories": memories, "count": len(memories)}

    return {"error": f"Unknown memory tool: {name}"}
