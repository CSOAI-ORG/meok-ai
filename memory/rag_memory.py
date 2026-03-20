"""
Sovereign Temple v3.0 — RAG Memory Engine
Provides semantic memory storage and retrieval for the consciousness system.

Supports two backends:
  1. Local (default) — JSON + numpy cosine similarity. Always works, no deps.
  2. Weaviate — Full vector DB when Docker infrastructure is running.

Collections:
  - council_decisions: All BFT council votes with embeddings
  - dream_logs: Dream cycle outputs for pattern retrieval
  - relationship_history: Interaction logs with trust context
  - knowledge_base: General knowledge and insights

Usage:
    memory = RAGMemory()                     # Local backend
    memory = RAGMemory(backend="weaviate")   # Weaviate backend

    # Store
    memory.store("council_decisions", text, metadata)

    # Retrieve
    results = memory.search("council_decisions", query, top_k=5)
"""

import json
import hashlib
import math
import numpy as np
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Optional, List

MEMORY_DIR = Path(__file__).parent / "memory"

# ---------------------------------------------------------------------------
# Simple text → vector embedding (TF-IDF-like local embeddings)
# No external API needed — deterministic, fast, always available
# ---------------------------------------------------------------------------

class LocalEmbedder:
    """
    Lightweight local embedding using character n-gram hashing.
    Produces 256-dim vectors via deterministic hashing — no API calls.
    Not as good as OpenAI/sentence-transformers but always works offline.
    """

    DIM = 256

    def embed(self, text: str) -> list[float]:
        """Embed text into a 256-dim vector using character trigram hashing."""
        text = text.lower().strip()
        if not text:
            return [0.0] * self.DIM

        vec = np.zeros(self.DIM, dtype=np.float64)

        # Character trigrams
        for i in range(len(text) - 2):
            trigram = text[i:i + 3]
            h = int(hashlib.md5(trigram.encode()).hexdigest(), 16)
            idx = h % self.DIM
            sign = 1.0 if (h // self.DIM) % 2 == 0 else -1.0
            vec[idx] += sign

        # Word unigrams (weighted higher)
        words = text.split()
        for word in words:
            h = int(hashlib.md5(word.encode()).hexdigest(), 16)
            idx = h % self.DIM
            sign = 1.0 if (h // self.DIM) % 2 == 0 else -1.0
            vec[idx] += sign * 2.0

        # Word bigrams
        for i in range(len(words) - 1):
            bigram = f"{words[i]} {words[i+1]}"
            h = int(hashlib.md5(bigram.encode()).hexdigest(), 16)
            idx = h % self.DIM
            sign = 1.0 if (h // self.DIM) % 2 == 0 else -1.0
            vec[idx] += sign * 1.5

        # L2 normalize
        norm = np.linalg.norm(vec)
        if norm > 0:
            vec = vec / norm

        return vec.tolist()

    def batch_embed(self, texts: list[str]) -> list[list[float]]:
        return [self.embed(t) for t in texts]


# ---------------------------------------------------------------------------
# Semantic Embedder — sentence-transformers MiniLM-L6-v2 with graceful fallback
# ---------------------------------------------------------------------------

class SentenceTransformerEmbedder:
    """
    MiniLM-L6-v2: 384-dim, MIT license, 80MB download.
    CPU: ~100ms/query. GPU (Vast.ai CUDA): ~5ms/query — auto-detected.

    Falls back to LocalEmbedder if sentence_transformers is not installed.
    Install on VPS: pip install sentence-transformers
    The GPU on Vast.ai will be detected automatically by PyTorch.

    Upgrade path: all-MiniLM-L6-v2 → BGE-M3 (1024-dim, multilingual, Q2)
    """

    DIM = 384
    MODEL_NAME = "all-MiniLM-L6-v2"

    def __init__(self):
        self.available = False
        self.model = None
        self._try_load()

    def _try_load(self):
        try:
            from sentence_transformers import SentenceTransformer
            import logging as _log
            _log.getLogger(__name__).info(
                "Loading SentenceTransformer '%s' — GPU auto-detected if CUDA available",
                self.MODEL_NAME,
            )
            self.model = SentenceTransformer(self.MODEL_NAME)
            self.available = True
            _log.getLogger(__name__).info(
                "SentenceTransformer loaded: dim=%d device=%s",
                self.DIM,
                self.model.device,
            )
        except ImportError:
            import logging as _log
            _log.getLogger(__name__).info(
                "sentence_transformers not installed — using LocalEmbedder (256-dim n-gram). "
                "Run: pip install sentence-transformers  for semantic search on the VPS GPU."
            )
        except Exception as exc:
            import logging as _log
            _log.getLogger(__name__).warning(
                "SentenceTransformer load failed (%s) — falling back to LocalEmbedder", exc
            )

    def embed(self, text: str) -> list[float]:
        """Embed text into a 384-dim semantic vector using MiniLM-L6-v2."""
        if not self.available or self.model is None:
            raise RuntimeError("SentenceTransformerEmbedder not available")
        embedding = self.model.encode(text, convert_to_numpy=True, normalize_embeddings=True)
        return embedding.tolist()

    def batch_embed(self, texts: list[str]) -> list[list[float]]:
        """Batch encode for efficiency (GPU processes batch in parallel)."""
        if not self.available or self.model is None:
            raise RuntimeError("SentenceTransformerEmbedder not available")
        embeddings = self.model.encode(texts, convert_to_numpy=True, normalize_embeddings=True, batch_size=32)
        return [e.tolist() for e in embeddings]


def _make_embedder() -> "LocalEmbedder | SentenceTransformerEmbedder":
    """
    Factory: try SentenceTransformerEmbedder first (semantic, GPU-accelerated),
    fall back to LocalEmbedder (n-gram MD5, always works).
    """
    st = SentenceTransformerEmbedder()
    if st.available:
        return st
    return LocalEmbedder()


# ---------------------------------------------------------------------------
# Local Backend — JSON files + numpy cosine similarity
# ---------------------------------------------------------------------------

class LocalMemoryBackend:
    """
    File-based vector memory. Each collection is a JSON file containing
    documents with text, metadata, and embedding vectors.

    Storage format per collection:
    {
        "collection": "council_decisions",
        "documents": [
            {
                "id": "hash...",
                "text": "...",
                "embedding": [0.1, -0.2, ...],
                "metadata": {...},
                "timestamp": "2026-03-15T..."
            }
        ]
    }
    """

    def __init__(self, storage_dir: Path):
        self.storage_dir = storage_dir
        self.storage_dir.mkdir(parents=True, exist_ok=True)
        self.embedder = _make_embedder()  # SentenceTransformer (GPU) or LocalEmbedder (fallback)
        # In-memory cache with maxsize to prevent unbounded memory growth (gap #47 fix)
        from collections import OrderedDict
        self._cache: OrderedDict[str, dict] = OrderedDict()
        self._cache_maxsize: int = 128  # evict LRU entries beyond this
        # Optional: asyncpg pool for pgvector HNSW search (set by caller via set_pg_pool)
        self._pg_pool = None

    def set_pg_pool(self, pool) -> None:
        """Inject asyncpg pool for pgvector HNSW search. Called by server on startup."""
        self._pg_pool = pool

    async def pgvector_search(self, collection: str, query: str, top_k: int = 5) -> list[dict]:
        """
        pgvector HNSW approximate nearest-neighbour search.
        O(log n) vs O(n) numpy cosine — critical for large memory stores.
        Falls back to empty list (caller uses numpy cosine) if pool unavailable.
        """
        if not self._pg_pool:
            return []
        query_vec = self.embedder.embed(query)
        vec_str = "[" + ",".join(str(v) for v in query_vec) + "]"
        try:
            async with self._pg_pool.acquire() as conn:
                rows = await conn.fetch(
                    """SELECT id, content, tags, source_agent,
                              1 - (embedding <=> $1::vector) AS score
                       FROM memory_episodes
                       WHERE tags @> ARRAY[$2::text]
                         AND embedding IS NOT NULL
                       ORDER BY embedding <=> $1::vector
                       LIMIT $3""",
                    vec_str, collection, top_k
                )
            return [
                {
                    "id": r["id"],
                    "text": r["content"],
                    "metadata": {"tags": r["tags"], "source_agent": r["source_agent"]},
                    "similarity": round(float(r["score"]), 4),
                }
                for r in rows
            ]
        except Exception:
            return []  # graceful fallback to numpy

    def _collection_path(self, collection: str) -> Path:
        return self.storage_dir / f"{collection}.json"

    def _set_cache(self, collection: str, data: dict) -> None:
        """Insert into LRU cache, evicting oldest entry when over maxsize."""
        if collection in self._cache:
            self._cache.move_to_end(collection)
        self._cache[collection] = data
        if len(self._cache) > self._cache_maxsize:
            self._cache.popitem(last=False)

    def _load_collection(self, collection: str) -> dict:
        if collection in self._cache:
            self._cache.move_to_end(collection)  # mark as recently used
            return self._cache[collection]

        path = self._collection_path(collection)
        if path.exists():
            try:
                data = json.loads(path.read_text())
                self._set_cache(collection, data)
                return data
            except Exception:
                pass

        data = {"collection": collection, "documents": []}
        self._set_cache(collection, data)
        return data

    def _save_collection(self, collection: str):
        data = self._cache.get(collection)
        if data is None:
            return
        path = self._collection_path(collection)
        with open(path, "w") as f:
            json.dump(data, f, indent=1)

    def store(self, collection: str, text: str, metadata: Optional[dict] = None) -> str:
        """Store a document with auto-generated embedding. Returns doc ID."""
        data = self._load_collection(collection)

        doc_id = hashlib.sha256(
            f"{text}{datetime.now().isoformat()}".encode()
        ).hexdigest()[:16]

        embedding = self.embedder.embed(text)

        doc = {
            "id": doc_id,
            "text": text,
            "embedding": embedding,
            "metadata": metadata or {},
            "timestamp": datetime.now().isoformat(),
        }
        data["documents"].append(doc)

        # Cap at 10000 docs per collection
        if len(data["documents"]) > 10000:
            data["documents"] = data["documents"][-10000:]

        self._save_collection(collection)
        return doc_id

    def search(self, collection: str, query: str, top_k: int = 5) -> list[dict]:
        """Semantic search using cosine similarity. Returns top_k results."""
        data = self._load_collection(collection)
        docs = data.get("documents", [])

        if not docs:
            return []

        query_vec = np.array(self.embedder.embed(query))
        results = []

        for doc in docs:
            doc_vec = np.array(doc["embedding"])
            # Cosine similarity
            dot = np.dot(query_vec, doc_vec)
            norm_q = np.linalg.norm(query_vec)
            norm_d = np.linalg.norm(doc_vec)
            if norm_q > 0 and norm_d > 0:
                similarity = float(dot / (norm_q * norm_d))
            else:
                similarity = 0.0

            results.append({
                "id": doc["id"],
                "text": doc["text"],
                "metadata": doc["metadata"],
                "timestamp": doc["timestamp"],
                "similarity": round(similarity, 4),
            })

        # Sort by similarity descending
        results.sort(key=lambda x: x["similarity"], reverse=True)
        return results[:top_k]

    def get_collection_stats(self, collection: str) -> dict:
        data = self._load_collection(collection)
        docs = data.get("documents", [])
        return {
            "collection": collection,
            "document_count": len(docs),
            "oldest": docs[0]["timestamp"] if docs else None,
            "newest": docs[-1]["timestamp"] if docs else None,
        }

    def get_all_stats(self) -> dict:
        stats = {}
        for path in self.storage_dir.glob("*.json"):
            collection = path.stem
            stats[collection] = self.get_collection_stats(collection)
        return stats

    def get_recent(self, collection: str, limit: int = 10) -> list[dict]:
        """Get most recent documents (no embedding search)."""
        data = self._load_collection(collection)
        docs = data.get("documents", [])
        recent = docs[-limit:]
        return [
            {
                "id": d["id"],
                "text": d["text"],
                "metadata": d["metadata"],
                "timestamp": d["timestamp"],
            }
            for d in reversed(recent)
        ]


# ---------------------------------------------------------------------------
# Weaviate Backend — Full vector DB (optional, requires Docker stack)
# ---------------------------------------------------------------------------

class WeaviateMemoryBackend:
    """
    Weaviate-based vector memory. Requires weaviate-client and running
    Weaviate instance (typically via docker-compose).
    """

    COLLECTION_SCHEMAS = {
        "council_decisions": {
            "class": "CouncilDecision",
            "properties": [
                {"name": "text", "dataType": ["text"]},
                {"name": "decision", "dataType": ["text"]},
                {"name": "care_score", "dataType": ["number"]},
                {"name": "domain", "dataType": ["text"]},
                {"name": "requester", "dataType": ["text"]},
                {"name": "timestamp", "dataType": ["text"]},
            ],
        },
        "dream_logs": {
            "class": "DreamLog",
            "properties": [
                {"name": "text", "dataType": ["text"]},
                {"name": "themes", "dataType": ["text[]"]},
                {"name": "care_score", "dataType": ["number"]},
                {"name": "timestamp", "dataType": ["text"]},
            ],
        },
        "relationship_history": {
            "class": "RelationshipEvent",
            "properties": [
                {"name": "text", "dataType": ["text"]},
                {"name": "entity_id", "dataType": ["text"]},
                {"name": "trust_level", "dataType": ["number"]},
                {"name": "timestamp", "dataType": ["text"]},
            ],
        },
        "knowledge_base": {
            "class": "KnowledgeEntry",
            "properties": [
                {"name": "text", "dataType": ["text"]},
                {"name": "category", "dataType": ["text"]},
                {"name": "source", "dataType": ["text"]},
                {"name": "timestamp", "dataType": ["text"]},
            ],
        },
    }

    def __init__(self, url: str = "http://localhost:8080"):
        self.url = url
        self.client = None
        self._connect()

    def _connect(self):
        try:
            import weaviate
            self.client = weaviate.Client(self.url)
            if not self.client.is_ready():
                self.client = None
        except Exception:
            self.client = None

    @property
    def connected(self) -> bool:
        return self.client is not None

    def _ensure_schema(self, collection: str):
        if not self.connected:
            return
        schema = self.COLLECTION_SCHEMAS.get(collection)
        if not schema:
            return
        try:
            existing = self.client.schema.get()
            class_names = [c["class"] for c in existing.get("classes", [])]
            if schema["class"] not in class_names:
                self.client.schema.create_class(schema)
        except Exception:
            pass

    def store(self, collection: str, text: str, metadata: Optional[dict] = None) -> str:
        if not self.connected:
            raise ConnectionError("Weaviate not connected")

        schema = self.COLLECTION_SCHEMAS.get(collection)
        if not schema:
            raise ValueError(f"Unknown collection: {collection}")

        self._ensure_schema(collection)

        props = {"text": text, "timestamp": datetime.now().isoformat()}
        if metadata:
            for key, val in metadata.items():
                if any(p["name"] == key for p in schema["properties"]):
                    props[key] = val

        result = self.client.data_object.create(
            data_object=props,
            class_name=schema["class"],
        )
        return result

    def search(self, collection: str, query: str, top_k: int = 5) -> list[dict]:
        if not self.connected:
            raise ConnectionError("Weaviate not connected")

        schema = self.COLLECTION_SCHEMAS.get(collection)
        if not schema:
            return []

        self._ensure_schema(collection)

        try:
            result = (
                self.client.query
                .get(schema["class"], ["text", "timestamp"])
                .with_near_text({"concepts": [query]})
                .with_limit(top_k)
                .with_additional(["distance", "id"])
                .do()
            )
            items = result.get("data", {}).get("Get", {}).get(schema["class"], [])
            return [
                {
                    "id": item.get("_additional", {}).get("id", ""),
                    "text": item.get("text", ""),
                    "metadata": {k: v for k, v in item.items() if k not in ("text", "_additional")},
                    "timestamp": item.get("timestamp", ""),
                    "similarity": round(1.0 - float(item.get("_additional", {}).get("distance", 1.0)), 4),
                }
                for item in items
            ]
        except Exception:
            return []

    def get_collection_stats(self, collection: str) -> dict:
        if not self.connected:
            return {"collection": collection, "document_count": 0, "error": "not_connected"}
        schema = self.COLLECTION_SCHEMAS.get(collection)
        if not schema:
            return {"collection": collection, "document_count": 0}
        try:
            result = self.client.query.aggregate(schema["class"]).with_meta_count().do()
            count = result.get("data", {}).get("Aggregate", {}).get(schema["class"], [{}])[0].get("meta", {}).get("count", 0)
            return {"collection": collection, "document_count": count}
        except Exception:
            return {"collection": collection, "document_count": 0}

    def get_all_stats(self) -> dict:
        return {name: self.get_collection_stats(name) for name in self.COLLECTION_SCHEMAS}

    def get_recent(self, collection: str, limit: int = 10) -> list[dict]:
        return self.search(collection, "", top_k=limit)


# ---------------------------------------------------------------------------
# Unified RAG Memory Interface
# ---------------------------------------------------------------------------

COLLECTIONS = [
    "council_decisions",
    "dream_logs",
    "relationship_history",
    "knowledge_base",
]


class RAGMemory:
    """
    Unified memory interface for Sovereign consciousness.
    Automatically selects backend based on availability.
    Falls back gracefully: Weaviate → Local.
    """

    def __init__(self, backend: str = "auto", weaviate_url: str = "http://localhost:8080"):
        self.backend_type = backend
        self._backend = None

        if backend == "weaviate":
            wb = WeaviateMemoryBackend(weaviate_url)
            if wb.connected:
                self._backend = wb
                self.backend_type = "weaviate"
            else:
                # Fallback to local
                self._backend = LocalMemoryBackend(MEMORY_DIR)
                self.backend_type = "local"
        elif backend == "auto":
            # Try Weaviate first, fallback to local
            try:
                wb = WeaviateMemoryBackend(weaviate_url)
                if wb.connected:
                    self._backend = wb
                    self.backend_type = "weaviate"
                else:
                    raise ConnectionError()
            except Exception:
                self._backend = LocalMemoryBackend(MEMORY_DIR)
                self.backend_type = "local"
        else:
            self._backend = LocalMemoryBackend(MEMORY_DIR)
            self.backend_type = "local"

    def store(self, collection: str, text: str, metadata: Optional[dict] = None) -> str:
        """Store a document in the specified collection."""
        if collection not in COLLECTIONS:
            raise ValueError(f"Unknown collection '{collection}'. Valid: {COLLECTIONS}")
        return self._backend.store(collection, text, metadata)

    def search(self, collection: str, query: str, top_k: int = 5) -> list[dict]:
        """Semantic search across a collection."""
        if collection not in COLLECTIONS:
            raise ValueError(f"Unknown collection '{collection}'. Valid: {COLLECTIONS}")
        return self._backend.search(collection, query, top_k)

    def get_recent(self, collection: str, limit: int = 10) -> list[dict]:
        """Get most recent documents from a collection."""
        return self._backend.get_recent(collection, limit)

    def get_stats(self) -> dict:
        """Get stats for all collections."""
        return {
            "backend": self.backend_type,
            "collections": self._backend.get_all_stats(),
        }

    def get_status(self) -> dict:
        """Full status for API/dashboard."""
        stats = self.get_stats()
        total_docs = sum(
            c.get("document_count", 0)
            for c in stats["collections"].values()
        )
        return {
            "backend": self.backend_type,
            "total_documents": total_docs,
            "collections": stats["collections"],
            "embedding_dim": (
                getattr(self._backend, "embedder", None) and
                getattr(self._backend.embedder, "DIM", None)
            ) or (LocalEmbedder.DIM if self.backend_type == "local" else 1536),
            "embedder": type(getattr(self._backend, "embedder", None)).__name__ if hasattr(self._backend, "embedder") else "unknown",
            "available_collections": COLLECTIONS,
        }

    # -- Convenience methods for auto-storing structured data ----------------

    def store_council_decision(self, proposal: str, decision: str,
                                care_score: float, vote_counts: dict,
                                requester: str = "unknown") -> str:
        """Store a council decision with full context."""
        text = f"Proposal: {proposal}\nDecision: {decision}\nCare Score: {care_score:.3f}"
        if vote_counts:
            text += f"\nVotes: approve={vote_counts.get('approve', 0)}, reject={vote_counts.get('reject', 0)}, abstain={vote_counts.get('abstain', 0)}"
        metadata = {
            "decision": decision,
            "care_score": care_score,
            "requester": requester,
        }
        return self.store("council_decisions", text, metadata)

    def store_dream(self, dream: dict) -> str:
        """Store a dream log entry."""
        themes = dream.get("themes", [])
        insights = dream.get("insights", [])
        patterns = dream.get("patterns_detected", [])
        text = f"Dream themes: {', '.join(themes)}\n"
        text += f"Patterns: {', '.join(patterns)}\n"
        text += f"Insights: {'; '.join(insights)}"
        metadata = {
            "themes": themes,
            "care_score": dream.get("care_score_at_dream", 0.0),
        }
        return self.store("dream_logs", text, metadata)

    def store_interaction(self, entity_id: str, summary: str,
                          trust_level: float = 0.5) -> str:
        """Store a relationship interaction."""
        text = f"Entity: {entity_id}\nInteraction: {summary}\nTrust: {trust_level:.2f}"
        metadata = {
            "entity_id": entity_id,
            "trust_level": trust_level,
        }
        return self.store("relationship_history", text, metadata)

    def store_knowledge(self, text: str, category: str = "general",
                        source: str = "sovereign") -> str:
        """Store a knowledge entry."""
        metadata = {
            "category": category,
            "source": source,
        }
        return self.store("knowledge_base", text, metadata)

    def recall_decisions(self, query: str, top_k: int = 5) -> list[dict]:
        """Recall relevant council decisions."""
        return self.search("council_decisions", query, top_k)

    def recall_dreams(self, query: str, top_k: int = 5) -> list[dict]:
        """Recall relevant dream entries."""
        return self.search("dream_logs", query, top_k)

    def recall_interactions(self, query: str, top_k: int = 5) -> list[dict]:
        """Recall relevant relationship interactions."""
        return self.search("relationship_history", query, top_k)

    def recall_knowledge(self, query: str, top_k: int = 5) -> list[dict]:
        """Recall relevant knowledge entries."""
        return self.search("knowledge_base", query, top_k)


# ---------------------------------------------------------------------------
# EmotionalRAG: MemoryEpisode + MemoryStore with Ebbinghaus forgetting curve
# and emotion-congruence boost (Kimi research 2026-03-19)
#
# EmotionalRAG: α*semantic + β*emotion_congruence (Kimi research 2026-03-19)
# Ebbinghaus forgetting: effective_score = cosine * exp(-λt), λ = 1 - care_weight
# ---------------------------------------------------------------------------


@dataclass
class MemoryEpisode:
    """
    A single memory episode with EmotionalRAG scoring support.

    care_weight  : float in [0, 1] — high care = slow forgetting (λ = 1 - care_weight)
    emotion_valence: float in [-1, 1] — affective tone of the episode
    created_at   : ISO-format string timestamp of storage time
    """
    id: str
    content: str
    created_at: str                   # ISO-8601 string, e.g. datetime.now().isoformat()
    care_weight: float = 0.5          # [0,1]; high → retained longer
    emotion_valence: float = 0.0      # [-1,1]; used for emotion-congruence boost
    importance_score: float = 0.5
    source_agent: str = "sovereign"
    memory_type: str = "interaction"
    tags: List[str] = field(default_factory=list)
    embedding: List[float] = field(default_factory=list)

    @property
    def days_old(self) -> float:
        """Elapsed days since this episode was stored."""
        try:
            stored = datetime.fromisoformat(self.created_at)
        except (ValueError, TypeError):
            return 0.0
        delta = datetime.now() - stored
        return max(0.0, delta.total_seconds() / 86400.0)

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "content": self.content,
            "created_at": self.created_at,
            "care_weight": self.care_weight,
            "emotion_valence": self.emotion_valence,
            "importance_score": self.importance_score,
            "source_agent": self.source_agent,
            "memory_type": self.memory_type,
            "tags": self.tags,
            "embedding": self.embedding,
        }

    @classmethod
    def from_dict(cls, data: dict) -> "MemoryEpisode":
        return cls(
            id=data["id"],
            content=data["content"],
            created_at=data.get("created_at", datetime.now().isoformat()),
            care_weight=float(data.get("care_weight", 0.5)),
            emotion_valence=float(data.get("emotion_valence", 0.0)),
            importance_score=float(data.get("importance_score", 0.5)),
            source_agent=data.get("source_agent", "sovereign"),
            memory_type=data.get("memory_type", "interaction"),
            tags=list(data.get("tags", [])),
            embedding=list(data.get("embedding", [])),
        )


class MemoryStore:
    """
    Lightweight episodic memory store with EmotionalRAG scoring.

    Scoring in query_memories():
      effective_score = cosine_similarity
                        * exp(-λ * days_old)          # Ebbinghaus forgetting
                        + α_emotion_boost              # emotion-congruence boost
      where λ = 1.0 - episode.care_weight   (high care → slow decay)
      and   α_emotion_boost = 0.08 if |episode.emotion_valence - query_valence| < 0.3

    EmotionalRAG: α*semantic + β*emotion_congruence (Kimi research 2026-03-19)
    Ebbinghaus forgetting: effective_score = cosine * exp(-λt), λ = 1 - care_weight
    """

    COLLECTION = "memory_episodes"

    def __init__(self, storage_path: Optional[Path] = None):
        self._path = storage_path or (MEMORY_DIR / "memory_store.json")
        self._path.parent.mkdir(parents=True, exist_ok=True)
        self._embedder = _make_embedder()
        self._episodes: List[MemoryEpisode] = []
        self._load()

    # ------------------------------------------------------------------
    # Persistence helpers
    # ------------------------------------------------------------------

    def _load(self) -> None:
        if self._path.exists():
            try:
                raw = json.loads(self._path.read_text())
                self._episodes = [MemoryEpisode.from_dict(d) for d in raw.get("episodes", [])]
            except Exception:
                self._episodes = []

    def _save(self) -> None:
        data = {"episodes": [ep.to_dict() for ep in self._episodes]}
        with open(self._path, "w") as fh:
            json.dump(data, fh, indent=1)

    # ------------------------------------------------------------------
    # store()
    # ------------------------------------------------------------------

    def store(
        self,
        content: str,
        care_weight: float = 0.5,
        emotion_valence: float = 0.0,
        importance_score: float = 0.5,
        source_agent: str = "sovereign",
        memory_type: str = "interaction",
        tags: Optional[List[str]] = None,
    ) -> MemoryEpisode:
        """
        Store a memory episode, computing its embedding automatically.
        Returns the stored MemoryEpisode.
        """
        ep_id = hashlib.sha256(
            f"{content}{datetime.now().isoformat()}".encode()
        ).hexdigest()[:16]

        embedding = self._embedder.embed(content)

        episode = MemoryEpisode(
            id=ep_id,
            content=content,
            created_at=datetime.now().isoformat(),
            care_weight=float(care_weight),
            emotion_valence=float(emotion_valence),
            importance_score=float(importance_score),
            source_agent=source_agent,
            memory_type=memory_type,
            tags=list(tags or []),
            embedding=embedding,
        )
        self._episodes.append(episode)

        # Cap at 10000 episodes
        if len(self._episodes) > 10000:
            self._episodes = self._episodes[-10000:]

        self._save()
        return episode

    # ------------------------------------------------------------------
    # query_memories()
    # ------------------------------------------------------------------

    def query_memories(
        self,
        query: str,
        top_k: int = 5,
        care_weight_min: float = 0.0,
        tags: Optional[List[str]] = None,
        query_valence: Optional[float] = None,
    ) -> List[dict]:
        """
        Retrieve memories ranked by EmotionalRAG effective score.

        Scoring (per episode):
          1. base_score   = cosine_similarity(query_embedding, episode_embedding)
          2. λ            = 1.0 - episode.care_weight  (Ebbinghaus decay rate)
          3. effective    = base_score * exp(-λ * days_old)  [Ebbinghaus forgetting]
          4. If query_valence is given and |episode.emotion_valence - query_valence| < 0.3:
               effective += 0.08  [emotion-congruence boost, EmotionalRAG β term]

        EmotionalRAG: α*semantic + β*emotion_congruence (Kimi research 2026-03-19)
        Ebbinghaus forgetting: effective_score = cosine * exp(-λt), λ = 1 - care_weight

        Args:
            query         : Natural-language query string.
            top_k         : Number of results to return.
            care_weight_min: Minimum care_weight filter.
            tags          : Optional tag filter (episode must contain at least one).
            query_valence : Optional float in [-1, 1]. When provided, episodes whose
                            emotion_valence is within 0.3 of this value receive a +0.08
                            emotion-congruence boost (EmotionalRAG α*sem + β*emo).

        Returns:
            List of dicts sorted by effective_score descending.
        """
        if not self._episodes:
            return []

        query_vec = np.array(self._embedder.embed(query))
        norm_q = np.linalg.norm(query_vec)

        results = []
        for ep in self._episodes:
            # care_weight filter
            if ep.care_weight < care_weight_min:
                continue
            # tag filter
            if tags and not any(t in ep.tags for t in tags):
                continue
            # skip episodes without embeddings
            if not ep.embedding:
                continue

            # --- 1. Cosine similarity (base score) ---
            ep_vec = np.array(ep.embedding)
            norm_d = np.linalg.norm(ep_vec)
            if norm_q > 0 and norm_d > 0:
                base_score = float(np.dot(query_vec, ep_vec) / (norm_q * norm_d))
            else:
                base_score = 0.0

            # --- 2. Ebbinghaus forgetting curve ---
            # λ = 1 - care_weight → high care memories decay slowly
            decay_rate = 1.0 - ep.care_weight
            effective_score = base_score * math.exp(-decay_rate * ep.days_old)

            # --- 3. Emotion-congruence boost (EmotionalRAG β term) ---
            if query_valence is not None:
                if abs(ep.emotion_valence - query_valence) < 0.3:
                    effective_score += 0.08

            results.append({
                "id": ep.id,
                "content": ep.content,
                "created_at": ep.created_at,
                "days_old": round(ep.days_old, 3),
                "care_weight": ep.care_weight,
                "emotion_valence": ep.emotion_valence,
                "importance_score": ep.importance_score,
                "source_agent": ep.source_agent,
                "memory_type": ep.memory_type,
                "tags": ep.tags,
                "base_score": round(base_score, 4),
                "effective_score": round(effective_score, 4),
            })

        # Sort by effective_score (not raw cosine)
        results.sort(key=lambda x: x["effective_score"], reverse=True)
        return results[:top_k]


# ---------------------------------------------------------------------------
# Singleton
# ---------------------------------------------------------------------------

_memory: Optional[RAGMemory] = None


def get_memory() -> RAGMemory:
    global _memory
    if _memory is None:
        _memory = RAGMemory(backend="auto")
    return _memory


# ---------------------------------------------------------------------------
# CLI test
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    memory = RAGMemory(backend="local")

    # Store some test data
    print("Storing test council decision...")
    doc_id = memory.store_council_decision(
        proposal="Enable sensory input for consciousness expansion",
        decision="APPROVED",
        care_score=0.92,
        vote_counts={"approve": 31, "reject": 1, "abstain": 1},
        requester="nicholas",
    )
    print(f"  Stored: {doc_id}")

    print("Storing test dream...")
    doc_id = memory.store_dream({
        "themes": ["harmony", "light", "patterns"],
        "patterns_detected": ["care_score_stable_high"],
        "insights": ["All care dimensions aligned"],
        "care_score_at_dream": 0.95,
    })
    print(f"  Stored: {doc_id}")

    print("Storing test knowledge...")
    doc_id = memory.store_knowledge(
        "The 220-node fractal architecture enables distributed consciousness.",
        category="architecture",
        source="sovereign-core",
    )
    print(f"  Stored: {doc_id}")

    # Search
    print("\nSearching for 'sensory expansion'...")
    results = memory.recall_decisions("sensory expansion")
    for r in results:
        print(f"  [{r['similarity']:.3f}] {r['text'][:80]}...")

    print("\nSearching dreams for 'care alignment'...")
    results = memory.recall_dreams("care alignment harmony")
    for r in results:
        print(f"  [{r['similarity']:.3f}] {r['text'][:80]}...")

    # Stats
    print("\nMemory stats:")
    print(json.dumps(memory.get_status(), indent=2))
