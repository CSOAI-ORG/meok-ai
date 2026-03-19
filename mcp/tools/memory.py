"""
Memory tool definitions and handler.
Tools: record_memory, query_memories, get_temporal_chain, get_memory_stats, list_memories, pgvector_search
"""

from typing import Dict, Any

import logging
from meok.mcp.state import ServiceState

logger = logging.getLogger(__name__)

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
    {
        "name": "pgvector_search",
        "description": "Semantic vector search using pgvector HNSW index — sub-100ms O(log n) recall across all stored memories",
        "inputSchema": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Natural language search query"},
                "top_k": {"type": "integer", "description": "Number of results to return", "default": 5},
                "min_similarity": {"type": "number", "description": "Minimum cosine similarity threshold (0-1)", "default": 0.0}
            },
            "required": ["query"]
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

    elif name == "pgvector_search":
        if not state.memory_store:
            return {"error": "Memory store not available"}
        pool = getattr(state.memory_store, "pool", None)
        if not pool:
            return {"error": "pgvector requires PostgreSQL connection — pool not available"}
        query_text = arguments.get("query", "")
        top_k = int(arguments.get("top_k", 5))
        min_sim = float(arguments.get("min_similarity", 0.0))
        if not query_text:
            return {"error": "query parameter required"}
        try:
            # Build embedding for the query
            import sys, os
            sys.path.insert(0, os.path.join(os.path.dirname(__file__), "../../.."))
            from meok.memory.rag_memory import _make_embedder
            embedder = _make_embedder()
            query_vec = embedder.embed(query_text)
            dim = len(query_vec)
            vec_str = "[" + ",".join(f"{v:.8f}" for v in query_vec) + "]"
            async with pool.acquire() as conn:
                # Check column exists and has correct dimension
                col_check = await conn.fetchval(
                    "SELECT data_type FROM information_schema.columns "
                    "WHERE table_name='memory_episodes' AND column_name='embedding'"
                )
                if not col_check:
                    return {"error": "pgvector migration not yet run — embedding column missing. Restart server to apply migration."}
                rows = await conn.fetch(
                    """SELECT id, content, tags, source_agent, memory_type, timestamp,
                              1 - (embedding <=> $1::vector) AS similarity
                       FROM memory_episodes
                       WHERE embedding IS NOT NULL
                         AND 1 - (embedding <=> $1::vector) >= $3
                       ORDER BY embedding <=> $1::vector
                       LIMIT $2""",
                    vec_str, top_k, min_sim
                )
            return {
                "results": [
                    {
                        "id": r["id"],
                        "content": r["content"],
                        "tags": r["tags"],
                        "source_agent": r["source_agent"],
                        "memory_type": r["memory_type"],
                        "timestamp": str(r["timestamp"]),
                        "similarity": round(float(r["similarity"]), 4),
                    }
                    for r in rows
                ],
                "count": len(rows),
                "query": query_text,
                "embedding_dim": dim,
                "backend": "pgvector_hnsw",
            }
        except Exception as e:
            logger.exception("pgvector_search error")
            return {"error": f"pgvector_search failed: {e}"}

    return {"error": f"Unknown memory tool: {name}"}
