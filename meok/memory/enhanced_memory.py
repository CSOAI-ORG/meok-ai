"""
Enhanced Memory System for Sovereign Temple
Features: Temporal chains, episodic compaction, importance scoring
"""

import asyncio
import asyncpg
import logging
import json
from datetime import datetime, timedelta
from typing import Dict, Any, List, Optional, Tuple
import numpy as np
from dataclasses import dataclass, asdict

try:
    import weaviate
    from weaviate.util import generate_uuid5
    _WEAVIATE_AVAILABLE = True
except ImportError:
    import hashlib, uuid as _uuid
    _WEAVIATE_AVAILABLE = False
    def generate_uuid5(val):
        return str(_uuid.UUID(hashlib.md5(str(val).encode()).hexdigest()))
import hashlib

logger = logging.getLogger(__name__)


@dataclass
class MemoryEpisode:
    """Represents a single memory episode"""
    id: str
    content: str
    timestamp: datetime
    importance_score: float
    care_weight: float
    source_agent: str
    memory_type: str  # 'interaction', 'insight', 'decision', 'emotion'
    related_episodes: List[str]  # IDs of causally related episodes
    tags: List[str]
    access_count: int = 0
    last_accessed: Optional[datetime] = None
    compacted_from: Optional[List[str]] = None  # IDs of episodes this was summarized from
    # Emotional state at time of memory (VAD model — persisted from consciousness.py EmotionalState)
    emotional_valence: float = 0.0        # -1 (very negative) to +1 (very positive)
    emotional_arousal: float = 0.0        # -1 (very calm) to +1 (very excited)
    emotional_dominance: float = 0.0      # -1 (submissive) to +1 (dominant/in-control)
    emotional_score: float = 50.0         # Composite 0-100: 50=neutral, <30=distress, >70=highly positive
    # Memory lifecycle — granularity for compression management
    granularity_level: int = 1            # 1=verbatim (0-7d), 2=summarized (7-30d), 3=abstract (30d+)

    @staticmethod
    def compute_emotional_score(valence: float, arousal: float, dominance: float) -> float:
        """Compute composite emotional score (0-100) from VAD dimensions.

        Formula from External Memory Architecture doc:
          score = 50 + (valence × 30) + (|arousal| × 15) + (dominance × 5)
        Interpretation: < 30 = significant distress | 45-55 = neutral | > 70 = highly positive
        """
        return round(50.0 + (valence * 30) + (abs(arousal) * 15) + (dominance * 5), 1)

    def to_dict(self) -> Dict[str, Any]:
        data = asdict(self)
        data['timestamp'] = self.timestamp.isoformat()
        data['last_accessed'] = self.last_accessed.isoformat() if self.last_accessed else None
        return data


class TemporalMemoryChain:
    """
    Manages cause-effect relationships between memories
    Creates chains of related episodes for narrative continuity
    """
    
    def __init__(self):
        self.chains: Dict[str, List[str]] = {}  # chain_id -> ordered episode IDs
        self.episode_chains: Dict[str, List[str]] = {}  # episode_id -> list of chain IDs
    
    def create_chain(self, chain_name: str, initial_episode_id: str) -> str:
        """Create a new temporal chain"""
        chain_id = f"chain_{chain_name}_{datetime.now().strftime('%Y%m%d%H%M%S')}"
        self.chains[chain_id] = [initial_episode_id]
        
        if initial_episode_id not in self.episode_chains:
            self.episode_chains[initial_episode_id] = []
        self.episode_chains[initial_episode_id].append(chain_id)
        
        return chain_id
    
    def add_to_chain(self, chain_id: str, episode_id: str, cause_episode_id: Optional[str] = None):
        """Add an episode to a chain, optionally specifying causal predecessor"""
        if chain_id not in self.chains:
            raise ValueError(f"Chain {chain_id} does not exist")
        
        self.chains[chain_id].append(episode_id)
        
        if episode_id not in self.episode_chains:
            self.episode_chains[episode_id] = []
        self.episode_chains[episode_id].append(chain_id)
    
    def get_chain(self, chain_id: str) -> List[str]:
        """Get all episodes in a chain in temporal order"""
        return self.chains.get(chain_id, [])
    
    def get_episode_chains(self, episode_id: str) -> List[str]:
        """Get all chains an episode belongs to"""
        return self.episode_chains.get(episode_id, [])

    def query_by_emotion(
        self,
        all_episodes: List["MemoryEpisode"],
        valence_min: float = -1.0,
        valence_max: float = 1.0,
        score_min: float = 0.0,
        score_max: float = 100.0,
        limit: int = 20,
    ) -> List["MemoryEpisode"]:
        """Filter episodes by emotional VAD range and return sorted by emotional_score.

        Example — find distress moments:
            query_by_emotion(episodes, score_min=0.0, score_max=35.0)
        Example — find high-positive moments:
            query_by_emotion(episodes, valence_min=0.5, score_min=65.0)
        """
        matching = [
            ep for ep in all_episodes
            if valence_min <= ep.emotional_valence <= valence_max
            and score_min <= ep.emotional_score <= score_max
        ]
        matching.sort(key=lambda ep: ep.emotional_score, reverse=True)
        return matching[:limit]
    
    def find_causal_path(self, start_episode: str, end_episode: str, max_depth: int = 10) -> Optional[List[str]]:
        """Find a causal path between two episodes"""
        # Simple BFS to find path
        visited = set()
        queue = [(start_episode, [start_episode])]
        
        while queue and len(visited) < max_depth * 10:
            current, path = queue.pop(0)
            
            if current == end_episode:
                return path
            
            if current in visited:
                continue
            visited.add(current)
            
            # Find related episodes through chains
            for chain_id in self.episode_chains.get(current, []):
                chain = self.chains[chain_id]
                idx = chain.index(current)
                if idx < len(chain) - 1:
                    next_ep = chain[idx + 1]
                    if next_ep not in visited:
                        queue.append((next_ep, path + [next_ep]))
        
        return None


class ImportanceScorer:
    """
    Automatically scores memory importance based on multiple factors
    """
    
    def __init__(self):
        self.weights = {
            'emotional_intensity': 0.25,
            'care_relevance': 0.20,
            'decision_impact': 0.20,
            'novelty': 0.15,
            'access_frequency': 0.10,
            'agent_significance': 0.10
        }
    
    def calculate_importance(self, episode: MemoryEpisode, 
                           emotional_valence: float = 0.5,
                           decision_impact: float = 0.0,
                           agent_trust: float = 0.5) -> float:
        """Calculate importance score for a memory episode"""
        
        # Emotional intensity (higher for extreme positive or negative)
        emotional_intensity = abs(emotional_valence - 0.5) * 2
        
        # Care relevance
        care_relevance = episode.care_weight
        
        # Novelty based on tags and type
        novelty = 0.7 if episode.memory_type in ['insight', 'decision'] else 0.4
        
        # Access frequency (more accessed = more important)
        access_freq = min(episode.access_count / 10, 1.0)
        
        # Agent significance
        agent_significance = agent_trust
        
        # Calculate weighted score
        score = (
            emotional_intensity * self.weights['emotional_intensity'] +
            care_relevance * self.weights['care_relevance'] +
            decision_impact * self.weights['decision_impact'] +
            novelty * self.weights['novelty'] +
            access_freq * self.weights['access_frequency'] +
            agent_significance * self.weights['agent_significance']
        )
        
        return min(score, 1.0)
    
    def update_importance(self, episode: MemoryEpisode, 
                         access_increment: bool = False,
                         new_emotional_valence: Optional[float] = None):
        """Update importance score based on new information"""
        if access_increment:
            episode.access_count += 1
            episode.last_accessed = datetime.now()
        
        # Recalculate if needed
        # (In practice, this would fetch additional context)


class EpisodicCompactor:
    """
    Summarizes old memories to maintain manageable memory size
    While preserving essential information
    """
    
    def __init__(self, importance_scorer: ImportanceScorer):
        self.scorer = importance_scorer
        self.compaction_threshold_days = 30  # Compact memories older than this
        self.min_episodes_for_compaction = 5
        self.compaction_ratio = 0.3  # Keep top 30% of old episodes
    
    def should_compact(self, episodes: List[MemoryEpisode]) -> bool:
        """Determine if episodes should be compacted"""
        if len(episodes) < self.min_episodes_for_compaction:
            return False
        
        oldest = min(ep.timestamp for ep in episodes)
        age_days = (datetime.now() - oldest).days
        
        return age_days > self.compaction_threshold_days
    
    def compact_episodes(self, episodes: List[MemoryEpisode], 
                        chain_manager: TemporalMemoryChain) -> Tuple[MemoryEpisode, List[MemoryEpisode]]:
        """
        Compact a group of episodes into a single summary episode
        Returns: (summary_episode, list_of_archived_episodes)
        """
        # Sort by importance and recency
        scored_episodes = []
        for ep in episodes:
            # Age factor: newer episodes get slight boost
            age_days = (datetime.now() - ep.timestamp).days
            age_factor = max(0.5, 1 - (age_days / 365))  # Decay over a year
            
            adjusted_score = ep.importance_score * age_factor
            scored_episodes.append((adjusted_score, ep))
        
        scored_episodes.sort(reverse=True)
        
        # Keep top episodes, summarize the rest
        keep_count = max(1, int(len(episodes) * self.compaction_ratio))
        keep_episodes = [ep for _, ep in scored_episodes[:keep_count]]
        summarize_episodes = [ep for _, ep in scored_episodes[keep_count:]]
        
        # Create summary
        summary_content = self._generate_summary(summarize_episodes)
        summary_tags = list(set(tag for ep in summarize_episodes for tag in ep.tags))
        
        summary_episode = MemoryEpisode(
            id=f"compact_{datetime.now().strftime('%Y%m%d%H%M%S')}_{hashlib.md5(summary_content.encode()).hexdigest()[:8]}",
            content=summary_content,
            timestamp=datetime.now(),
            importance_score=max(ep.importance_score for ep in keep_episodes) if keep_episodes else 0.5,
            care_weight=np.mean([ep.care_weight for ep in episodes]),
            source_agent="system",
            memory_type="compaction_summary",
            related_episodes=[ep.id for ep in keep_episodes],
            tags=summary_tags + ["compacted"],
            compacted_from=[ep.id for ep in summarize_episodes]
        )
        
        # Update chains to point to summary
        for ep in summarize_episodes:
            for chain_id in chain_manager.get_episode_chains(ep.id):
                chain = chain_manager.chains[chain_id]
                if ep.id in chain:
                    idx = chain.index(ep.id)
                    chain[idx] = summary_episode.id
        
        return summary_episode, summarize_episodes
    
    def _generate_summary(self, episodes: List[MemoryEpisode]) -> str:
        """Generate a natural language summary of episodes"""
        # Simple template-based summarization
        # In production, this would use an LLM
        
        by_type: Dict[str, List[MemoryEpisode]] = {}
        for ep in episodes:
            by_type.setdefault(ep.memory_type, []).append(ep)
        
        summary_parts = [f"Summary of {len(episodes)} past interactions:"]
        
        for mem_type, type_eps in by_type.items():
            if mem_type == "interaction":
                summary_parts.append(f"- {len(type_eps)} interactions with various agents")
            elif mem_type == "insight":
                key_insights = [ep.content[:100] + "..." for ep in type_eps[:3]]
                summary_parts.append(f"- {len(type_eps)} key insights including: " + "; ".join(key_insights))
            elif mem_type == "decision":
                summary_parts.append(f"- {len(type_eps)} decisions made, primarily related to: {', '.join(type_eps[0].tags[:3])}")
        
        avg_care = np.mean([ep.care_weight for ep in episodes])
        summary_parts.append(f"- Average care level: {avg_care:.2f}")
        
        return "\n".join(summary_parts)


class EnhancedMemoryStore:
    """
    Main memory store integrating all enhanced features
    """
    
    def __init__(self,
                 postgres_dsn: str = "postgresql://sovereign:sovereign@localhost:5432/sovereign_memory",
                 weaviate_url: str = "http://localhost:8080",
                 persist_path: str = "/tmp/meok-persist"):
        self.postgres_dsn = postgres_dsn
        self.weaviate_url = weaviate_url
        self.persist_path = persist_path
        self.pool: Optional[asyncpg.Pool] = None
        self.sqlite_conn: Optional[Any] = None
        self.weaviate_client: Optional[weaviate.Client] = None
        self.weaviate_available: bool = False

        self.chain_manager = TemporalMemoryChain()
        self.importance_scorer = ImportanceScorer()
        self.compactor = EpisodicCompactor(self.importance_scorer)

    async def initialize(self):
        """Initialize database connections"""
        # PostgreSQL
        try:
            self.pool = await asyncpg.create_pool(self.postgres_dsn)
            await self._create_tables()
            logger.info("PostgreSQL connected at %s", self.postgres_dsn.split("@")[-1] if "@" in self.postgres_dsn else self.postgres_dsn)
        except Exception as e:
            self.pool = None
            logger.warning("PostgreSQL unavailable — memory writes disabled: %s", e)

        # SQLite fallback — persists when Postgres unavailable
        if self.pool is None:
            try:
                import os
                import aiosqlite
                os.makedirs(self.persist_path, exist_ok=True)
                db_path = os.path.join(self.persist_path, "meok.db")
                self.sqlite_conn = await aiosqlite.connect(db_path)
                await self.sqlite_conn.execute("""
                    CREATE TABLE IF NOT EXISTS memory_episodes (
                        id TEXT PRIMARY KEY,
                        content TEXT NOT NULL,
                        timestamp TEXT NOT NULL,
                        importance_score REAL NOT NULL,
                        care_weight REAL NOT NULL,
                        source_agent TEXT NOT NULL,
                        memory_type TEXT NOT NULL,
                        tags_json TEXT DEFAULT '[]',
                        access_count INTEGER DEFAULT 0
                    )
                """)
                await self.sqlite_conn.commit()
                logger.info("SQLite fallback active at %s", db_path)
            except Exception as e:
                self.sqlite_conn = None
                logger.warning("SQLite fallback also failed: %s", e)

        # Weaviate (non-fatal — Postgres is source of truth)
        try:
            self.weaviate_client = weaviate.Client(self.weaviate_url)
            await self._ensure_schema()
            self.weaviate_available = True
            logger.info("Weaviate connected at %s", self.weaviate_url)
        except Exception as e:
            self.weaviate_available = False
            self.weaviate_client = None
            logger.warning("Weaviate unavailable at %s — vector search disabled, using Postgres fallback: %s", self.weaviate_url, e)
    
    async def _create_tables(self):
        """Create PostgreSQL tables"""
        async with self.pool.acquire() as conn:
            await conn.execute("""
                CREATE TABLE IF NOT EXISTS memory_episodes (
                    id TEXT PRIMARY KEY,
                    content TEXT NOT NULL,
                    timestamp TIMESTAMP NOT NULL,
                    importance_score FLOAT NOT NULL,
                    care_weight FLOAT NOT NULL,
                    source_agent TEXT NOT NULL,
                    memory_type TEXT NOT NULL,
                    related_episodes TEXT[],
                    tags TEXT[],
                    access_count INTEGER DEFAULT 0,
                    last_accessed TIMESTAMP,
                    compacted_from TEXT[],
                    vector_id TEXT,
                    emotional_valence FLOAT DEFAULT 0.0,
                    emotional_arousal FLOAT DEFAULT 0.0,
                    emotional_dominance FLOAT DEFAULT 0.0,
                    emotional_score FLOAT DEFAULT 50.0,
                    granularity_level INTEGER DEFAULT 1
                )
            """)
            # Add VAD columns to existing tables (idempotent — fails silently if already exists)
            for col_def in [
                "emotional_valence FLOAT DEFAULT 0.0",
                "emotional_arousal FLOAT DEFAULT 0.0",
                "emotional_dominance FLOAT DEFAULT 0.0",
                "emotional_score FLOAT DEFAULT 50.0",
                "granularity_level INTEGER DEFAULT 1",
            ]:
                col_name = col_def.split()[0]
                try:
                    await conn.execute(
                        f"ALTER TABLE memory_episodes ADD COLUMN IF NOT EXISTS {col_def}"
                    )
                except Exception:
                    pass  # Column already exists
            
            await conn.execute("""
                CREATE TABLE IF NOT EXISTS temporal_chains (
                    chain_id TEXT PRIMARY KEY,
                    chain_name TEXT NOT NULL,
                    episode_ids TEXT[] NOT NULL,
                    created_at TIMESTAMP DEFAULT NOW()
                )
            """)
            
            await conn.execute("""
                CREATE INDEX IF NOT EXISTS idx_episodes_timestamp 
                ON memory_episodes(timestamp DESC)
            """)
            await conn.execute("""
                CREATE INDEX IF NOT EXISTS idx_episodes_importance 
                ON memory_episodes(importance_score DESC)
            """)
            await conn.execute("""
                CREATE INDEX IF NOT EXISTS idx_episodes_tags
                ON memory_episodes USING GIN(tags)
            """)
            # pgvector HNSW semantic search — idempotent migration
            try:
                await conn.execute("CREATE EXTENSION IF NOT EXISTS vector")
                await conn.execute(
                    "ALTER TABLE memory_episodes ADD COLUMN IF NOT EXISTS embedding vector(384)"
                )
                await conn.execute("""
                    CREATE INDEX IF NOT EXISTS idx_memory_episodes_embedding_hnsw
                    ON memory_episodes USING hnsw (embedding vector_cosine_ops)
                    WITH (m = 16, ef_construction = 64)
                """)
                logger.info("pgvector HNSW index ready")
            except Exception as pgvec_err:
                logger.warning("pgvector not available — semantic search will use fallback: %s", pgvec_err)
    
    async def _ensure_schema(self):
        """Ensure Weaviate schema exists"""
        schema = {
            "class": "MemoryEpisode",
            "vectorizer": "text2vec-openai",
            "moduleConfig": {
                "text2vec-openai": {
                    "vectorizeClassName": False
                }
            },
            "properties": [
                {"name": "content", "dataType": ["text"]},
                {"name": "memory_type", "dataType": ["text"]},
                {"name": "source_agent", "dataType": ["text"]},
                {"name": "tags", "dataType": ["text[]"]},
                {"name": "importance_score", "dataType": ["number"]},
                {"name": "care_weight", "dataType": ["number"]},
                {"name": "timestamp", "dataType": ["text"]},
            ]
        }
        
        try:
            self.weaviate_client.schema.create_class(schema)
        except weaviate.exceptions.UnexpectedStatusCodeException:
            pass  # Class already exists
    
    async def record_episode(self,
                           content: str,
                           source_agent: str,
                           memory_type: str = "interaction",
                           care_weight: float = 0.5,
                           tags: List[str] = None,
                           related_to: Optional[str] = None,
                           emotional_valence: float = 0.0,
                           emotional_arousal: float = 0.0,
                           emotional_dominance: float = 0.0,
                           decision_impact: float = 0.0,
                           agent_trust: float = 0.5,
                           granularity_level: int = 1) -> MemoryEpisode:
        """Record a new memory episode with optional emotional VAD tagging.

        Pass emotional_valence/arousal/dominance from consciousness.py EmotionalState
        to enable emotion-aware retrieval and care pattern analysis.
        """
        episode_id = generate_uuid5({"content": content, "timestamp": datetime.now().isoformat()})

        emotional_score = MemoryEpisode.compute_emotional_score(
            emotional_valence, emotional_arousal, emotional_dominance
        )

        episode = MemoryEpisode(
            id=episode_id,
            content=content,
            timestamp=datetime.now(),
            importance_score=0.0,  # Will calculate
            care_weight=care_weight,
            source_agent=source_agent,
            memory_type=memory_type,
            related_episodes=[related_to] if related_to else [],
            tags=tags or [],
            emotional_valence=emotional_valence,
            emotional_arousal=emotional_arousal,
            emotional_dominance=emotional_dominance,
            emotional_score=emotional_score,
            granularity_level=granularity_level,
        )
        
        # Calculate importance
        episode.importance_score = self.importance_scorer.calculate_importance(
            episode, emotional_valence, decision_impact, agent_trust
        )
        
        # Store in PostgreSQL
        if not self.pool:
            try:
                await self.initialize()
            except Exception:
                pass
        if not self.pool:
            # Try SQLite fallback
            if self.sqlite_conn:
                try:
                    await self.sqlite_conn.execute("""
                        INSERT OR REPLACE INTO memory_episodes
                        (id, content, timestamp, importance_score, care_weight,
                         source_agent, memory_type, tags_json, access_count)
                        VALUES (?,?,?,?,?,?,?,?,?)
                    """, (episode.id, episode.content,
                          episode.timestamp.isoformat() if hasattr(episode.timestamp, 'isoformat') else str(episode.timestamp),
                          episode.importance_score, episode.care_weight,
                          episode.source_agent, episode.memory_type,
                          json.dumps(episode.tags or []), episode.access_count))
                    await self.sqlite_conn.commit()
                    return episode
                except Exception as e:
                    logger.warning("SQLite write failed: %s", e)
            logger.warning("No PostgreSQL pool — memory recorded in-memory only")
            return episode
        async with self.pool.acquire() as conn:
            await conn.execute("""
                INSERT INTO memory_episodes 
                (id, content, timestamp, importance_score, care_weight, source_agent, 
                 memory_type, related_episodes, tags, access_count)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            """, episode.id, episode.content, episode.timestamp, 
                episode.importance_score, episode.care_weight, episode.source_agent,
                episode.memory_type, episode.related_episodes, episode.tags, episode.access_count)
        
        # Store in Weaviate for vector search (non-fatal — Postgres is source of truth)
        if self.weaviate_available:
            try:
                self.weaviate_client.data_object.create({
                    "content": content,
                    "memory_type": memory_type,
                    "source_agent": source_agent,
                    "tags": tags or [],
                    "importance_score": episode.importance_score,
                    "care_weight": care_weight,
                    "timestamp": episode.timestamp.isoformat()
                }, "MemoryEpisode", episode_id)
            except Exception as e:
                logger.warning("Weaviate write failed (Postgres OK): %s", e)

        return episode
    
    async def query_memories(self,
                           query: str,
                           care_weight_min: float = 0.0,
                           tags: List[str] = None,
                           limit: int = 5,
                           agent_id: str = None) -> List[Dict[str, Any]]:
        """Query memories using vector similarity + care weighting.

        Falls back to PostgreSQL keyword search if Weaviate is unavailable.

        Args:
            agent_id: Optional source_agent filter — returns only memories from this agent.
        """

        memories = []

        # Try vector search in Weaviate first
        if self.weaviate_available:
            try:
                near_text = {"concepts": [query]}

                results = self.weaviate_client.query.get(
                    "MemoryEpisode",
                    ["content", "memory_type", "source_agent", "tags",
                     "importance_score", "care_weight", "timestamp"]
                ).with_near_text(near_text).with_limit(limit * 2).do()

                if results and "data" in results:
                    memories = results.get("data", {}).get("Get", {}).get("MemoryEpisode") or []
                    # Apply agent_id filter on Weaviate results (post-filter)
                    if agent_id:
                        memories = [m for m in memories if m.get("source_agent") == agent_id]
            except Exception as e:
                logger.warning("Weaviate query failed, falling back to Postgres: %s", e)

        # Fallback: PostgreSQL keyword search if Weaviate returned nothing
        if not memories:
            try:
                async with self.pool.acquire() as conn:
                    if agent_id:
                        rows = await conn.fetch("""
                            SELECT content, memory_type, source_agent, tags,
                                   importance_score, care_weight, timestamp
                            FROM memory_episodes
                            WHERE content ILIKE $1 AND source_agent = $3
                            ORDER BY importance_score DESC
                            LIMIT $2
                        """, f"%{query[:100]}%", limit * 2, agent_id)
                    else:
                        rows = await conn.fetch("""
                            SELECT content, memory_type, source_agent, tags,
                                   importance_score, care_weight, timestamp
                            FROM memory_episodes
                            WHERE content ILIKE $1
                            ORDER BY importance_score DESC
                            LIMIT $2
                        """, f"%{query[:100]}%", limit * 2)
                    memories = [{
                        "content": row["content"],
                        "memory_type": row["memory_type"],
                        "source_agent": row["source_agent"],
                        "tags": row["tags"] or [],
                        "importance_score": float(row["importance_score"] or 0),
                        "care_weight": float(row["care_weight"] or 0),
                        "timestamp": row["timestamp"].isoformat() if row["timestamp"] else None,
                    } for row in rows]
            except Exception as e:
                logger.warning("Postgres fallback also failed: %s", e)
                # Try SQLite
                if self.sqlite_conn:
                    try:
                        if agent_id:
                            sql = """
                                SELECT content, memory_type, source_agent, tags_json,
                                       importance_score, care_weight, timestamp
                                FROM memory_episodes
                                WHERE content LIKE ? AND source_agent = ?
                                ORDER BY importance_score DESC
                                LIMIT ?
                            """
                            params = (f"%{query[:100]}%", agent_id, limit * 2)
                        else:
                            sql = """
                                SELECT content, memory_type, source_agent, tags_json,
                                       importance_score, care_weight, timestamp
                                FROM memory_episodes
                                WHERE content LIKE ?
                                ORDER BY importance_score DESC
                                LIMIT ?
                            """
                            params = (f"%{query[:100]}%", limit * 2)
                        async with self.sqlite_conn.execute(sql, params) as cursor:
                            rows = await cursor.fetchall()
                        memories = [{"content": r[0], "memory_type": r[1],
                                     "source_agent": r[2], "tags": json.loads(r[3] or "[]"),
                                     "importance_score": r[4], "care_weight": r[5],
                                     "timestamp": r[6]} for r in rows]
                    except Exception as se:
                        logger.warning("SQLite read also failed: %s", se)
                        return []
                else:
                    return []

        # Apply care weighting and filtering
        scored_memories = []
        for mem in memories:
            care_wt = float(mem.get("care_weight", 0) or 0)
            if care_wt >= care_weight_min:
                if tags and not any(tag in (mem.get("tags") or []) for tag in tags):
                    continue

                # Care-weighted score
                care_boost = care_wt * 0.3
                importance_boost = float(mem.get("importance_score", 0) or 0) * 0.2
                scored_memories.append((care_boost + importance_boost, mem))

        scored_memories.sort(key=lambda x: x[0], reverse=True)
        return [mem for _, mem in scored_memories[:limit]]

    async def recall_for_task(
        self,
        query: str,
        top_k: int = 5,
        care_weight_min: float = 0.3,
    ) -> List[Dict[str, Any]]:
        """
        Recall memories relevant to a task and increment their access_count.

        This is the GAP 3 fix: memories were written but access_count stayed 0
        forever because query_memories() was never called before actions.
        This method both recalls AND marks memories as accessed.

        Called by TaskExecutor._recall_memories() before every task execution.
        """
        # Fetch including episode_id so we can increment access counts
        results: List[Dict[str, Any]] = []
        episode_ids: List[str] = []

        try:
            if self.pool:
                async with self.pool.acquire() as conn:
                    rows = await conn.fetch(
                        """
                        SELECT episode_id, content, source_agent, memory_type,
                               care_weight, importance_score, access_count, timestamp
                        FROM memory_episodes
                        WHERE care_weight >= $1
                          AND content ILIKE $2
                        ORDER BY importance_score DESC, care_weight DESC
                        LIMIT $3
                        """,
                        care_weight_min,
                        f"%{query[:80]}%",
                        top_k * 2,
                    )
                    for row in rows:
                        episode_ids.append(row["episode_id"])
                        results.append({
                            "episode_id": row["episode_id"],
                            "content": row["content"],
                            "source_agent": row["source_agent"],
                            "memory_type": row["memory_type"],
                            "care_weight": float(row["care_weight"] or 0),
                            "importance_score": float(row["importance_score"] or 0),
                            "access_count": (row["access_count"] or 0) + 1,
                        })

                    # Increment access_count for recalled episodes (THE critical step)
                    if episode_ids:
                        await conn.execute(
                            """
                            UPDATE memory_episodes
                            SET access_count = access_count + 1,
                                accessed_at   = NOW()
                            WHERE episode_id = ANY($1)
                            """,
                            episode_ids,
                        )
        except Exception as e:
            logger.debug("recall_for_task Postgres failed, trying base query: %s", e)
            # Fall back to query_memories without access_count increment
            results = await self.query_memories(
                query=query,
                care_weight_min=care_weight_min,
                limit=top_k,
            )

        return results[:top_k]

    async def get_temporal_chain(self, episode_id: str, 
                                direction: str = "forward",
                                max_steps: int = 5) -> List[Dict[str, Any]]:
        """Get the temporal chain from an episode"""
        
        chain_ids = self.chain_manager.get_episode_chains(episode_id)
        if not chain_ids:
            return []
        
        chain_id = chain_ids[0]  # Take first chain
        episode_ids = self.chain_manager.get_chain(chain_id)
        
        idx = episode_ids.index(episode_id)
        
        if direction == "forward":
            related_ids = episode_ids[idx:idx + max_steps + 1]
        elif direction == "backward":
            related_ids = episode_ids[max(0, idx - max_steps):idx + 1]
        else:  # both
            related_ids = episode_ids[max(0, idx - max_steps):idx + max_steps + 1]
        
        # Fetch episode details
        async with self.pool.acquire() as conn:
            rows = await conn.fetch("""
                SELECT * FROM memory_episodes WHERE id = ANY($1)
                ORDER BY timestamp
            """, related_ids)
        
        return [dict(row) for row in rows]
    
    async def run_compaction(self):
        """Run memory compaction on old episodes"""
        cutoff_date = datetime.now() - timedelta(days=self.compactor.compaction_threshold_days)
        
        async with self.pool.acquire() as conn:
            rows = await conn.fetch("""
                SELECT * FROM memory_episodes 
                WHERE timestamp < $1 AND compacted_from IS NULL
                ORDER BY timestamp
            """, cutoff_date)
        
        if len(rows) < self.compactor.min_episodes_for_compaction:
            return {"compacted": 0, "summary": None}
        
        episodes = [MemoryEpisode(**dict(row)) for row in rows]
        
        if not self.compactor.should_compact(episodes):
            return {"compacted": 0, "summary": None}
        
        summary_episode, archived = self.compactor.compact_episodes(episodes, self.chain_manager)
        
        # Store summary
        async with self.pool.acquire() as conn:
            await conn.execute("""
                INSERT INTO memory_episodes 
                (id, content, timestamp, importance_score, care_weight, source_agent,
                 memory_type, related_episodes, tags, compacted_from)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            """, summary_episode.id, summary_episode.content, summary_episode.timestamp,
                summary_episode.importance_score, summary_episode.care_weight,
                summary_episode.source_agent, summary_episode.memory_type,
                summary_episode.related_episodes, summary_episode.tags,
                summary_episode.compacted_from)
            
            # Mark archived episodes
            for ep in archived:
                await conn.execute("""
                    UPDATE memory_episodes 
                    SET tags = array_append(tags, 'archived_compacted')
                    WHERE id = $1
                """, ep.id)
        
        return {
            "compacted": len(archived),
            "kept": len(episodes) - len(archived),
            "summary": summary_episode.to_dict()
        }
    
    async def get_stats(self) -> Dict[str, Any]:
        """Get memory statistics"""
        if not self.pool:
            return {"total_episodes": 0, "average_importance": 0, "average_care_weight": 0, "by_type": {}, "top_tags": {}, "note": "PostgreSQL not connected"}
        async with self.pool.acquire() as conn:
            total = await conn.fetchval("SELECT COUNT(*) FROM memory_episodes")
            avg_importance = await conn.fetchval("SELECT AVG(importance_score) FROM memory_episodes")
            avg_care = await conn.fetchval("SELECT AVG(care_weight) FROM memory_episodes")
            
            type_counts = await conn.fetch("""
                SELECT memory_type, COUNT(*) FROM memory_episodes 
                GROUP BY memory_type
            """)
            
            tag_counts = await conn.fetch("""
                SELECT UNNEST(tags) as tag, COUNT(*) 
                FROM memory_episodes 
                GROUP BY tag
                ORDER BY COUNT(*) DESC
                LIMIT 10
            """)
        
        return {
            "total_episodes": total,
            "average_importance": round(avg_importance or 0, 3),
            "average_care_weight": round(avg_care or 0, 3),
            "by_type": {row["memory_type"]: row["count"] for row in type_counts},
            "top_tags": {row["tag"]: row["count"] for row in tag_counts}
        }
    
    async def list_all_memories(self, limit: int = 100, agent_id: str = None) -> List[Dict[str, Any]]:
        """List all memories from PostgreSQL or SQLite fallback.

        Args:
            agent_id: Optional source_agent filter — returns only memories from this agent.
        """
        if not self.pool:
            if self.sqlite_conn:
                try:
                    if agent_id:
                        sql = """
                            SELECT id, content, timestamp, importance_score, care_weight,
                                   source_agent, memory_type, tags_json, access_count
                            FROM memory_episodes
                            WHERE source_agent = ?
                            ORDER BY timestamp DESC
                            LIMIT ?
                        """
                        params = (agent_id, limit)
                    else:
                        sql = """
                            SELECT id, content, timestamp, importance_score, care_weight,
                                   source_agent, memory_type, tags_json, access_count
                            FROM memory_episodes
                            ORDER BY timestamp DESC
                            LIMIT ?
                        """
                        params = (limit,)
                    async with self.sqlite_conn.execute(sql, params) as cursor:
                        rows = await cursor.fetchall()
                    return [{"id": r[0], "content": r[1], "timestamp": r[2],
                             "importance_score": r[3], "care_weight": r[4],
                             "source_agent": r[5], "memory_type": r[6],
                             "tags": json.loads(r[7] or "[]"), "access_count": r[8]}
                            for r in rows]
                except Exception as e:
                    logger.warning("SQLite list_all failed: %s", e)
            return []
        async with self.pool.acquire() as conn:
            if agent_id:
                rows = await conn.fetch("""
                    SELECT id, content, timestamp, importance_score, care_weight,
                           source_agent, memory_type, tags, access_count
                    FROM memory_episodes
                    WHERE source_agent = $2
                    ORDER BY timestamp DESC
                    LIMIT $1
                """, limit, agent_id)
            else:
                rows = await conn.fetch("""
                    SELECT id, content, timestamp, importance_score, care_weight,
                           source_agent, memory_type, tags, access_count
                    FROM memory_episodes
                    ORDER BY timestamp DESC
                    LIMIT $1
                """, limit)

            return [{
                "id": row["id"],
                "content": row["content"],
                "timestamp": row["timestamp"].isoformat() if row["timestamp"] else None,
                "importance_score": row["importance_score"],
                "care_weight": row["care_weight"],
                "source_agent": row["source_agent"],
                "memory_type": row["memory_type"],
                "tags": row["tags"] or [],
                "access_count": row["access_count"]
            } for row in rows]
