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
import numpy as np
from datetime import datetime
from pathlib import Path
from typing import Optional

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
