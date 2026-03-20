"""
MEOK.ai — RAG Memory Search Endpoint (TASK-003)
POST /api/v1/memory/search

Wires the pgvector HNSW path (LocalMemoryBackend.pgvector_search) and the
numpy cosine fallback (LocalMemoryBackend.search / MemoryStore.query_memories)
into a unified HTTP endpoint for semantic episode retrieval.

Search strategy (in priority order):
  1. pgvector HNSW via asyncpg pool  — O(log n), used when pool is wired.
  2. MemoryStore.query_memories()    — EmotionalRAG (Ebbinghaus + emotion boost).
  3. LocalMemoryBackend.search()     — plain numpy cosine, always works.

The pgvector pool is injected by the app startup event; the endpoint
degrades gracefully to the local numpy backend if Postgres is unavailable.
"""

import asyncio
import os
from datetime import datetime
from typing import Any, Dict, List, Optional

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field

from meok.auth.dependencies import get_current_user
from meok.auth.models import TokenPayload
from meok.memory.rag_memory import get_memory, MemoryStore, MEMORY_DIR

# ---------------------------------------------------------------------------
# Router
# ---------------------------------------------------------------------------

router = APIRouter(prefix="/api/v1", tags=["rag-memory"])

# ---------------------------------------------------------------------------
# Optional asyncpg pool — injected at startup by server.py
# ---------------------------------------------------------------------------

_pg_pool = None  # set via set_pg_pool() below


def set_pg_pool(pool) -> None:
    """Called from server startup to inject an asyncpg connection pool."""
    global _pg_pool
    _pg_pool = pool
    # Also wire it into the LocalMemoryBackend so pgvector_search() is available
    memory = get_memory()
    backend = getattr(memory, "_backend", None)
    if backend is not None and hasattr(backend, "set_pg_pool"):
        backend.set_pg_pool(pool)


# ---------------------------------------------------------------------------
# Singleton MemoryStore (EmotionalRAG episodes)
# ---------------------------------------------------------------------------

_store: Optional[MemoryStore] = None


def _get_store() -> MemoryStore:
    global _store
    if _store is None:
        _store = MemoryStore()
    return _store


# ---------------------------------------------------------------------------
# Request / Response models
# ---------------------------------------------------------------------------

class MemorySearchV1Request(BaseModel):
    query: str
    limit: int = Field(default=10, ge=1, le=100)
    min_similarity: float = Field(default=0.0, ge=0.0, le=1.0)
    # Optional EmotionalRAG parameters
    query_valence: Optional[float] = Field(default=None, ge=-1.0, le=1.0)
    care_weight_min: float = Field(default=0.0, ge=0.0, le=1.0)
    tags: Optional[List[str]] = None
    # Which collections to search (RAGMemory collections)
    collections: Optional[List[str]] = None


class MemoryEpisodeResult(BaseModel):
    id: str
    content: str
    created_at: str
    similarity: float
    effective_score: Optional[float] = None
    care_weight: Optional[float] = None
    emotion_valence: Optional[float] = None
    importance_score: Optional[float] = None
    source_agent: Optional[str] = None
    memory_type: Optional[str] = None
    tags: Optional[List[str]] = None
    backend: str = "local"


class MemorySearchV1Response(BaseModel):
    query: str
    limit: int
    min_similarity: float
    result_count: int
    results: List[MemoryEpisodeResult]
    backend_used: str


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

async def _pgvector_search(query: str, limit: int, min_similarity: float) -> List[dict]:
    """
    Attempt pgvector HNSW search.
    SQL: 1 - (embedding <=> $1::vector) AS similarity
    Returns [] if pool unavailable or query fails.
    """
    if _pg_pool is None:
        return []
    try:
        memory = get_memory()
        backend = getattr(memory, "_backend", None)
        if backend is None or not hasattr(backend, "pgvector_search"):
            return []
        # pgvector_search uses 'council_decisions' collection as default;
        # we search 'memory_episodes' table directly via raw SQL here.
        pg_pool = _pg_pool
        embedder = getattr(backend, "embedder", None)
        if embedder is None:
            return []
        query_vec = embedder.embed(query)
        vec_str = "[" + ",".join(str(v) for v in query_vec) + "]"
        async with pg_pool.acquire() as conn:
            rows = await conn.fetch(
                """SELECT id, content, created_at::text, care_weight,
                          emotion_valence, importance_score,
                          source_agent, memory_type, tags,
                          1 - (embedding <=> $1::vector) AS similarity
                   FROM memory_episodes
                   WHERE embedding IS NOT NULL
                     AND 1 - (embedding <=> $1::vector) >= $2
                   ORDER BY embedding <=> $1::vector
                   LIMIT $3""",
                vec_str, min_similarity, limit
            )
        return [
            {
                "id": str(r["id"]),
                "content": r["content"],
                "created_at": r["created_at"] or datetime.now().isoformat(),
                "care_weight": float(r["care_weight"] or 0.5),
                "emotion_valence": float(r["emotion_valence"] or 0.0),
                "importance_score": float(r["importance_score"] or 0.5),
                "source_agent": r["source_agent"] or "sovereign",
                "memory_type": r["memory_type"] or "interaction",
                "tags": list(r["tags"] or []),
                "similarity": round(float(r["similarity"]), 4),
                "effective_score": round(float(r["similarity"]), 4),
                "backend": "pgvector",
            }
            for r in rows
        ]
    except Exception as exc:
        # Graceful degradation — log and fall through to numpy
        import logging
        logging.getLogger(__name__).warning("pgvector search failed: %s", exc)
        return []


def _emotional_rag_search(
    query: str,
    limit: int,
    min_similarity: float,
    query_valence: Optional[float],
    care_weight_min: float,
    tags: Optional[List[str]],
) -> List[dict]:
    """EmotionalRAG search via MemoryStore (Ebbinghaus + emotion-congruence boost)."""
    store = _get_store()
    results = store.query_memories(
        query=query,
        top_k=limit,
        care_weight_min=care_weight_min,
        tags=tags,
        query_valence=query_valence,
    )
    # Apply min_similarity filter on effective_score
    return [r for r in results if r.get("effective_score", 0.0) >= min_similarity]


def _collection_search(
    collections: List[str],
    query: str,
    limit: int,
    min_similarity: float,
) -> List[dict]:
    """
    Search across RAGMemory named collections (council_decisions, dream_logs, etc.)
    using numpy cosine similarity.
    """
    memory = get_memory()
    all_results: List[dict] = []
    for collection in collections:
        try:
            results = memory.search(collection, query, limit)
            for r in results:
                r["_collection"] = collection
                r["content"] = r.pop("text", r.get("content", ""))
                r["created_at"] = r.pop("timestamp", datetime.now().isoformat())
                r["backend"] = "local_cosine"
                r["effective_score"] = r.get("similarity", 0.0)
                all_results.append(r)
        except ValueError:
            pass  # Unknown collection — skip

    # Filter by similarity and re-rank
    filtered = [r for r in all_results if r.get("similarity", 0.0) >= min_similarity]
    filtered.sort(key=lambda x: x.get("similarity", 0.0), reverse=True)
    return filtered[:limit]


# ---------------------------------------------------------------------------
# Endpoint
# ---------------------------------------------------------------------------

@router.post("/memory/search", response_model=MemorySearchV1Response)
async def memory_search_v1(
    req: MemorySearchV1Request,
    user: TokenPayload = Depends(get_current_user),
) -> MemorySearchV1Response:
    """
    Semantic memory search with three-tier fallback.

    **Tier 1 — pgvector HNSW** (when Postgres pool is wired):
    - Uses ``1 - (embedding <=> $1::vector) AS similarity`` for O(log n) ANN.
    - Searches the ``memory_episodes`` table directly.

    **Tier 2 — EmotionalRAG** (MemoryStore JSON, always available):
    - Ebbinghaus forgetting curve: ``effective = cosine * exp(-λ * days_old)``
    - Emotion-congruence boost: ``+0.08`` when ``|episode.emotion_valence - query_valence| < 0.3``
    - Accepts ``query_valence``, ``care_weight_min``, and ``tags`` filters.

    **Tier 3 — Collection cosine search** (RAGMemory named collections):
    - Plain numpy cosine on JSON-backed collections (council_decisions, dream_logs, etc.)
    - Specify ``collections`` list to search; defaults to all four standard collections.
    """
    backend_used = "local_cosine"
    raw_results: List[dict] = []

    # --- Tier 1: pgvector HNSW ---
    if _pg_pool is not None:
        raw_results = await _pgvector_search(req.query, req.limit, req.min_similarity)
        if raw_results:
            backend_used = "pgvector_hnsw"

    # --- Tier 2: EmotionalRAG (MemoryStore) ---
    if not raw_results:
        raw_results = _emotional_rag_search(
            query=req.query,
            limit=req.limit,
            min_similarity=req.min_similarity,
            query_valence=req.query_valence,
            care_weight_min=req.care_weight_min,
            tags=req.tags,
        )
        if raw_results:
            backend_used = "emotional_rag"

    # --- Tier 3: RAGMemory collection cosine ---
    if not raw_results:
        collections = req.collections or [
            "council_decisions",
            "dream_logs",
            "relationship_history",
            "knowledge_base",
        ]
        raw_results = _collection_search(
            collections=collections,
            query=req.query,
            limit=req.limit,
            min_similarity=req.min_similarity,
        )
        if raw_results:
            backend_used = "local_cosine"

    # --- Normalise output ---
    episodes: List[MemoryEpisodeResult] = []
    for r in raw_results:
        episodes.append(
            MemoryEpisodeResult(
                id=str(r.get("id", "")),
                content=r.get("content", r.get("text", "")),
                created_at=r.get("created_at", r.get("timestamp", datetime.now().isoformat())),
                similarity=float(r.get("similarity", r.get("base_score", 0.0))),
                effective_score=float(r.get("effective_score", r.get("similarity", 0.0))),
                care_weight=r.get("care_weight"),
                emotion_valence=r.get("emotion_valence"),
                importance_score=r.get("importance_score"),
                source_agent=r.get("source_agent"),
                memory_type=r.get("memory_type"),
                tags=r.get("tags"),
                backend=r.get("backend", backend_used),
            )
        )

    return MemorySearchV1Response(
        query=req.query,
        limit=req.limit,
        min_similarity=req.min_similarity,
        result_count=len(episodes),
        results=episodes,
        backend_used=backend_used,
    )


@router.get("/memory/status")
async def memory_status_v1(
    user: TokenPayload = Depends(get_current_user),
) -> Dict[str, Any]:
    """
    Full memory system status: backend type, episode counts, embedder info,
    and whether pgvector HNSW is active.
    """
    memory = get_memory()
    status = memory.get_status()
    store = _get_store()
    status["pgvector_available"] = _pg_pool is not None
    status["episode_store_count"] = len(store._episodes)
    status["emotional_rag_enabled"] = True
    return status
