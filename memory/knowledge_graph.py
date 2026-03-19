"""
Knowledge Graph Memory Compression — MEOK.AI
From Extended Technical Research Brief (Section 14.2)

Compresses raw conversation episodes into semantic entity-relationship triplets,
achieving 10-100x compression while preserving queryable emotional + factual relationships.

Architecture: 4-layer hierarchy
  L0 — raw observations (individual statements)
  L1 — episode summaries (per-conversation digest)
  L2 — thematic consolidation (pattern clusters)
  L3 — identity narratives (long-term self-model)

Edge-level sentiment: Child--[friends with, positive, 2023-09]-->Alex
                  →  Child--[conflict with, negative, 2024-02]-->Alex
"""

from __future__ import annotations

import json
import re
import time
from dataclasses import dataclass, field
from datetime import datetime
from typing import Any, Dict, List, Optional, Tuple
import logging

logger = logging.getLogger(__name__)


# ── Data structures ────────────────────────────────────────────────────────────

@dataclass
class Entity:
    """A node in the knowledge graph."""
    id: str
    label: str                          # e.g. "Nick", "Valorant", "Max (dog)"
    entity_type: str                    # person, place, event, concept, object
    properties: Dict[str, Any] = field(default_factory=dict)
    first_seen: float = field(default_factory=time.time)
    last_seen: float = field(default_factory=time.time)
    mention_count: int = 1


@dataclass
class Relationship:
    """A directed edge in the knowledge graph with temporal + emotional context."""
    id: str
    subject_id: str
    predicate: str                      # e.g. "experienced", "caused_by", "friends_with"
    object_id: str
    sentiment: str = "neutral"          # positive, negative, neutral, mixed
    sentiment_score: float = 0.0        # -1.0 to 1.0
    start_date: Optional[str] = None
    end_date: Optional[str] = None
    confidence: float = 1.0
    source_episode_id: Optional[str] = None
    created_at: float = field(default_factory=time.time)
    updated_at: float = field(default_factory=time.time)


@dataclass
class MemoryTriplet:
    """Compressed semantic unit: (subject, predicate, object, context)."""
    subject: str
    predicate: str
    object: str
    sentiment: str = "neutral"
    confidence: float = 1.0
    source: str = ""
    timestamp: str = ""


@dataclass
class CompressionResult:
    """Result of compressing an episode or conversation."""
    layer: int                          # 0-3
    triplets: List[MemoryTriplet]
    entities_found: List[str]
    compression_ratio: float            # original_chars / compressed_chars
    episode_id: str = ""
    summary: str = ""


# ── Extraction patterns ────────────────────────────────────────────────────────

PREDICATE_PATTERNS = {
    # Emotional states
    r"(?:was|felt|feel|am|feeling)\s+(sad|happy|angry|scared|excited|proud|ashamed|lonely|anxious)": "experienced_emotion",
    r"(?:love|loved|like|liked|enjoy|enjoyed|hate|hated|dislike|disliked)\s+(\w+)": "has_attitude_toward",
    r"(?:miss|missed)\s+(\w+)": "misses",

    # Events
    r"(?:died|passed away|gone)": "death_event",
    r"(?:born|arrived|started|began)": "beginning_event",
    r"(?:left|ended|stopped|quit|broke up)": "ending_event",

    # Relationships
    r"(?:my|our)\s+(friend|best friend|girlfriend|boyfriend|partner|husband|wife|mum|mom|dad|father|sister|brother)": "has_relationship",
    r"(?:we|they)\s+(?:fought|argued|disagreed)": "conflict_with",
    r"(?:we|they)\s+(?:made up|reconciled|forgave)": "reconciled_with",

    # Activities
    r"(?:play|plays|played|playing)\s+(\w+)": "plays",
    r"(?:work|works|worked|working)\s+(?:at|for|on)\s+(\w+)": "works_at",
    r"(?:live|lives|lived)\s+(?:in|at)\s+(\w+)": "lives_in",

    # Achievements
    r"(?:won|beat|achieved|completed|finished)\s+(\w+)": "achieved",
    r"(?:lost|failed|missed)\s+(\w+)": "failed_at",
}

SENTIMENT_WORDS = {
    "positive": ["happy", "great", "love", "excited", "proud", "amazing", "wonderful",
                 "fantastic", "good", "joy", "thrilled", "grateful", "win", "won", "beat"],
    "negative": ["sad", "angry", "hate", "scared", "anxious", "terrible", "awful",
                 "bad", "horrible", "depressed", "lonely", "afraid", "fail", "lost", "died"],
}

ENTITY_TYPES = {
    r"\b(Nick|Nicholas|Mum|Mom|Dad|James|Alex|Max)\b": "person",
    r"\b(Valorant|Minecraft|Roblox|Fortnite|League of Legends|CS2)\b": "game",
    r"\b(MEOK|CSOAI|Sovereign|Kimi|Riri|Orion)\b": "ai_entity",
    r"\b(London|Manchester|UK|England|farm)\b": "place",
    r"\b(dog|cat|horse|pet)\b": "animal",
}


# ── Knowledge Graph ────────────────────────────────────────────────────────────

class KnowledgeGraph:
    """
    In-memory knowledge graph with JSON persistence.
    Stores entity-relationship triplets with temporal + emotional context.
    """

    def __init__(self, persist_path: Optional[str] = None):
        self.entities: Dict[str, Entity] = {}
        self.relationships: List[Relationship] = []
        self.persist_path = persist_path
        self._rel_counter = 0

        if persist_path:
            self._load()

    def _entity_key(self, label: str) -> str:
        return label.lower().strip().replace(" ", "_")

    def get_or_create_entity(self, label: str, entity_type: str = "concept") -> Entity:
        key = self._entity_key(label)
        if key in self.entities:
            e = self.entities[key]
            e.mention_count += 1
            e.last_seen = time.time()
            return e
        entity = Entity(id=key, label=label, entity_type=entity_type)
        self.entities[key] = entity
        return entity

    def add_relationship(
        self,
        subject_label: str,
        predicate: str,
        object_label: str,
        sentiment: str = "neutral",
        sentiment_score: float = 0.0,
        confidence: float = 1.0,
        source_episode_id: Optional[str] = None,
    ) -> Relationship:
        subj = self.get_or_create_entity(subject_label)
        obj = self.get_or_create_entity(object_label)
        self._rel_counter += 1
        rel = Relationship(
            id=f"rel_{self._rel_counter}",
            subject_id=subj.id,
            predicate=predicate,
            object_id=obj.id,
            sentiment=sentiment,
            sentiment_score=sentiment_score,
            confidence=confidence,
            source_episode_id=source_episode_id,
        )
        self.relationships.append(rel)
        if self.persist_path:
            self._save()
        return rel

    def update_relationship_sentiment(
        self, subject_label: str, predicate: str, object_label: str,
        new_sentiment: str, new_score: float, end_date: Optional[str] = None
    ) -> bool:
        """Temporal relationship evolution — e.g. friends→conflict."""
        subj_id = self._entity_key(subject_label)
        obj_id = self._entity_key(object_label)
        for rel in reversed(self.relationships):
            if rel.subject_id == subj_id and rel.predicate == predicate and rel.object_id == obj_id:
                # Close old relationship
                rel.end_date = end_date or datetime.now().isoformat()[:10]
                rel.updated_at = time.time()
                # Open new relationship with updated sentiment
                self.add_relationship(
                    subject_label, predicate, object_label,
                    sentiment=new_sentiment, sentiment_score=new_score
                )
                return True
        return False

    def query_entity(self, label: str) -> Dict[str, Any]:
        """Get all relationships for an entity."""
        key = self._entity_key(label)
        entity = self.entities.get(key)
        if not entity:
            return {"found": False, "label": label}

        rels_as_subject = [r for r in self.relationships if r.subject_id == key]
        rels_as_object = [r for r in self.relationships if r.object_id == key]

        return {
            "found": True,
            "entity": {
                "id": entity.id,
                "label": entity.label,
                "type": entity.entity_type,
                "mentions": entity.mention_count,
                "first_seen": entity.first_seen,
            },
            "outgoing": [
                {
                    "predicate": r.predicate,
                    "object": self.entities.get(r.object_id, Entity(id="?", label="?", entity_type="?")).label,
                    "sentiment": r.sentiment,
                    "score": r.sentiment_score,
                }
                for r in rels_as_subject
            ],
            "incoming": [
                {
                    "subject": self.entities.get(r.subject_id, Entity(id="?", label="?", entity_type="?")).label,
                    "predicate": r.predicate,
                    "sentiment": r.sentiment,
                }
                for r in rels_as_object
            ],
        }

    def get_emotional_timeline(self, subject_label: str) -> List[Dict]:
        """Track emotional trajectory for a person over time."""
        key = self._entity_key(subject_label)
        emotional_rels = [
            r for r in self.relationships
            if r.subject_id == key and r.predicate in ("experienced_emotion", "has_attitude_toward")
        ]
        return sorted(
            [
                {
                    "predicate": r.predicate,
                    "object": self.entities.get(r.object_id, Entity(id="?", label="?", entity_type="?")).label,
                    "sentiment": r.sentiment,
                    "score": r.sentiment_score,
                    "created_at": r.created_at,
                    "end_date": r.end_date,
                }
                for r in emotional_rels
            ],
            key=lambda x: x["created_at"],
        )

    def stats(self) -> Dict[str, Any]:
        return {
            "entities": len(self.entities),
            "relationships": len(self.relationships),
            "entity_types": {},
        }

    def _save(self):
        if not self.persist_path:
            return
        try:
            data = {
                "entities": {k: vars(v) for k, v in self.entities.items()},
                "relationships": [vars(r) for r in self.relationships],
                "rel_counter": self._rel_counter,
            }
            with open(self.persist_path, "w") as f:
                json.dump(data, f, indent=2)
        except Exception as e:
            logger.warning("KnowledgeGraph save failed: %s", e)

    def _load(self):
        try:
            with open(self.persist_path) as f:
                data = json.load(f)
            for k, v in data.get("entities", {}).items():
                self.entities[k] = Entity(**v)
            for r in data.get("relationships", []):
                self.relationships.append(Relationship(**r))
            self._rel_counter = data.get("rel_counter", 0)
            logger.info("KnowledgeGraph loaded: %d entities, %d rels", len(self.entities), len(self.relationships))
        except FileNotFoundError:
            pass
        except Exception as e:
            logger.warning("KnowledgeGraph load failed: %s", e)


# ── Compression Engine ─────────────────────────────────────────────────────────

class MemoryCompressor:
    """
    Compresses raw memory episodes into knowledge graph triplets.
    Achieves 10-100x compression ratio with preserved queryability.
    """

    def __init__(self, graph: Optional[KnowledgeGraph] = None):
        self.graph = graph or KnowledgeGraph()

    def _detect_sentiment(self, text: str) -> Tuple[str, float]:
        text_lower = text.lower()
        pos = sum(1 for w in SENTIMENT_WORDS["positive"] if w in text_lower)
        neg = sum(1 for w in SENTIMENT_WORDS["negative"] if w in text_lower)
        if pos > neg:
            return "positive", min(0.9, 0.3 * pos)
        elif neg > pos:
            return "negative", -min(0.9, 0.3 * neg)
        return "neutral", 0.0

    def _extract_entities(self, text: str) -> List[Tuple[str, str]]:
        """Return list of (label, type) tuples found in text."""
        found = []
        for pattern, etype in ENTITY_TYPES.items():
            for match in re.finditer(pattern, text, re.IGNORECASE):
                found.append((match.group(0), etype))
        return found

    def _extract_triplets(self, text: str, subject: str = "user") -> List[MemoryTriplet]:
        triplets = []
        entities = self._extract_entities(text)
        sentiment, score = self._detect_sentiment(text)

        # Named entity relationships
        for entity_label, entity_type in entities:
            if entity_type in ("person", "ai_entity") and entity_label.lower() != subject.lower():
                predicate = "interacted_with"
                triplets.append(MemoryTriplet(
                    subject=subject, predicate=predicate, object=entity_label,
                    sentiment=sentiment, confidence=0.7,
                    timestamp=datetime.now().isoformat()[:10],
                ))

        # Predicate pattern matching
        for pattern, predicate in PREDICATE_PATTERNS.items():
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                obj = match.group(1) if match.lastindex else "unknown"
                triplets.append(MemoryTriplet(
                    subject=subject, predicate=predicate, object=obj,
                    sentiment=sentiment, confidence=0.8,
                    timestamp=datetime.now().isoformat()[:10],
                ))

        # If no specific triplets, add a general sentiment triplet
        if not triplets and sentiment != "neutral":
            triplets.append(MemoryTriplet(
                subject=subject, predicate="experienced_emotion",
                object=sentiment, sentiment=sentiment,
                confidence=0.6, timestamp=datetime.now().isoformat()[:10],
            ))

        return triplets

    def compress_episode(
        self,
        content: str,
        episode_id: str = "",
        subject: str = "user",
        layer: int = 0,
    ) -> CompressionResult:
        """
        Compress a single memory episode into triplets.
        Returns L0 (raw→triplets) compression.
        """
        triplets = self._extract_triplets(content, subject=subject)
        entities_found = list({t.subject for t in triplets} | {t.object for t in triplets})

        # Store in knowledge graph
        for t in triplets:
            sentiment, score = self._detect_sentiment(content)
            self.graph.add_relationship(
                t.subject, t.predicate, t.object,
                sentiment=t.sentiment,
                sentiment_score=abs(score) if t.sentiment == "positive" else -abs(score),
                confidence=t.confidence,
                source_episode_id=episode_id,
            )

        # Compression ratio: chars_in / (len(triplets) * avg_triplet_chars)
        original_size = len(content)
        compressed_size = max(1, len(triplets) * 40)
        ratio = original_size / compressed_size

        # L0 summary: most important triplet
        summary = ""
        if triplets:
            t = triplets[0]
            summary = f"{t.subject} {t.predicate} {t.object}"

        return CompressionResult(
            layer=layer,
            triplets=triplets,
            entities_found=entities_found,
            compression_ratio=ratio,
            episode_id=episode_id,
            summary=summary,
        )

    def compress_session(self, episodes: List[Dict[str, Any]]) -> CompressionResult:
        """
        L1 compression: compress a full session into episode summaries.
        Input: list of episode dicts with 'content', 'id' keys.
        """
        all_triplets = []
        all_entities = set()

        for ep in episodes:
            result = self.compress_episode(
                content=ep.get("content", ""),
                episode_id=ep.get("id", ""),
                subject=ep.get("source_agent", "user"),
            )
            all_triplets.extend(result.triplets)
            all_entities.update(result.entities_found)

        # Deduplicate triplets
        seen = set()
        unique_triplets = []
        for t in all_triplets:
            key = (t.subject, t.predicate, t.object)
            if key not in seen:
                seen.add(key)
                unique_triplets.append(t)

        original_size = sum(len(ep.get("content", "")) for ep in episodes)
        compressed_size = max(1, len(unique_triplets) * 40)

        # L1 narrative summary
        summary_parts = [f"{t.subject} {t.predicate} {t.object}" for t in unique_triplets[:5]]
        summary = " | ".join(summary_parts)

        return CompressionResult(
            layer=1,
            triplets=unique_triplets,
            entities_found=list(all_entities),
            compression_ratio=original_size / compressed_size,
            summary=summary,
        )

    def build_identity_narrative(self, subject: str = "user") -> str:
        """
        L3 compression: synthesize identity narrative from all triplets.
        Returns a compact character profile.
        """
        data = self.graph.query_entity(subject)
        if not data.get("found"):
            return f"{subject}: no identity data yet."

        outgoing = data.get("outgoing", [])
        positive_rels = [r for r in outgoing if r["sentiment"] == "positive"]
        negative_rels = [r for r in outgoing if r["sentiment"] == "negative"]

        parts = [f"{subject.title()} identity profile:"]
        if positive_rels:
            likes = [r["object"] for r in positive_rels[:3]]
            parts.append(f"Positive toward: {', '.join(likes)}")
        if negative_rels:
            dislikes = [r["object"] for r in negative_rels[:3]]
            parts.append(f"Negative toward: {', '.join(dislikes)}")

        entity = data["entity"]
        parts.append(f"Mentioned {entity['mentions']} times across memory.")

        return " | ".join(parts)

    def get_graph_stats(self) -> Dict[str, Any]:
        stats = self.graph.stats()
        stats["compression_layers"] = {
            "L0": "raw→triplets (per episode)",
            "L1": "session digest (per conversation)",
            "L2": "thematic clusters (periodic)",
            "L3": "identity narrative (lifetime)",
        }
        return stats


# ── Singleton ─────────────────────────────────────────────────────────────────

_compressor: Optional[MemoryCompressor] = None

def get_compressor(persist_path: Optional[str] = None) -> MemoryCompressor:
    global _compressor
    if _compressor is None:
        graph = KnowledgeGraph(persist_path=persist_path)
        _compressor = MemoryCompressor(graph=graph)
    return _compressor
