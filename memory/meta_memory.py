"""
MetaMemory — z_self observation store.

5-table schema (PostgreSQL primary, SQLite fallback):
  meta_observations        — z_self forward-pass results per model inference
  semantic_patterns        — patterns extracted during dream consolidation
  confidence_calibration   — per-model accuracy vs stated confidence
  value_drift_snapshots    — care/engagement/consciousness snapshots over time
  self_knowledge_graph     — entity relationships within the system

Design: SQLite row-compatible with Postgres (TEXT timestamps, JSONB→TEXT).
All writes are fire-and-forget (non-blocking).
"""

import json
import logging
import os
import uuid
from datetime import datetime
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

# ── Schema SQL ─────────────────────────────────────────────────────────────────

_PG_SCHEMA = """
CREATE TABLE IF NOT EXISTS meta_observations (
    id TEXT PRIMARY KEY,
    observed_at TIMESTAMPTZ NOT NULL,
    model_name TEXT,
    model_outputs JSONB,
    context_vector JSONB,
    z_self_output JSONB,
    anomaly_flag BOOLEAN DEFAULT FALSE,
    care_alignment_score REAL,
    system_confidence REAL,
    consciousness_contribution REAL
);

CREATE TABLE IF NOT EXISTS semantic_patterns (
    id TEXT PRIMARY KEY,
    pattern TEXT NOT NULL,
    confidence REAL DEFAULT 0.5,
    valid_from TIMESTAMPTZ,
    valid_until TIMESTAMPTZ,
    source TEXT DEFAULT 'dream_consolidation'
);

CREATE TABLE IF NOT EXISTS confidence_calibration (
    model_name TEXT NOT NULL,
    domain TEXT NOT NULL DEFAULT 'general',
    accuracy REAL DEFAULT 0.5,
    calibration_error REAL DEFAULT 0.0,
    sample_count INTEGER DEFAULT 0,
    updated_at TIMESTAMPTZ,
    PRIMARY KEY (model_name, domain)
);

CREATE TABLE IF NOT EXISTS value_drift_snapshots (
    id TEXT PRIMARY KEY,
    snapshot_at TIMESTAMPTZ NOT NULL,
    care_score REAL,
    engagement_score REAL,
    consciousness_level REAL,
    tripwire_results JSONB
);

CREATE TABLE IF NOT EXISTS self_knowledge_graph (
    id TEXT PRIMARY KEY,
    entity_type TEXT NOT NULL,
    entity_id TEXT NOT NULL,
    relationships JSONB,
    updated_at TIMESTAMPTZ
);
"""

_SQLITE_SCHEMA = """
CREATE TABLE IF NOT EXISTS meta_observations (
    id TEXT PRIMARY KEY,
    observed_at TEXT NOT NULL,
    model_name TEXT,
    model_outputs TEXT,
    context_vector TEXT,
    z_self_output TEXT,
    anomaly_flag INTEGER DEFAULT 0,
    care_alignment_score REAL,
    system_confidence REAL,
    consciousness_contribution REAL
);

CREATE TABLE IF NOT EXISTS semantic_patterns (
    id TEXT PRIMARY KEY,
    pattern TEXT NOT NULL,
    confidence REAL DEFAULT 0.5,
    valid_from TEXT,
    valid_until TEXT,
    source TEXT DEFAULT 'dream_consolidation'
);

CREATE TABLE IF NOT EXISTS confidence_calibration (
    model_name TEXT NOT NULL,
    domain TEXT NOT NULL DEFAULT 'general',
    accuracy REAL DEFAULT 0.5,
    calibration_error REAL DEFAULT 0.0,
    sample_count INTEGER DEFAULT 0,
    updated_at TEXT,
    PRIMARY KEY (model_name, domain)
);

CREATE TABLE IF NOT EXISTS value_drift_snapshots (
    id TEXT PRIMARY KEY,
    snapshot_at TEXT NOT NULL,
    care_score REAL,
    engagement_score REAL,
    consciousness_level REAL,
    tripwire_results TEXT
);

CREATE TABLE IF NOT EXISTS self_knowledge_graph (
    id TEXT PRIMARY KEY,
    entity_type TEXT NOT NULL,
    entity_id TEXT NOT NULL,
    relationships TEXT,
    updated_at TEXT
);
"""


class MetaMemory:
    """
    z_self meta-observation store.

    Tries PostgreSQL first; falls back to SQLite at `persist_path/meta_memory.db`.
    Can also use the main memory_store as a last-resort fallback.
    """

    def __init__(
        self,
        postgres_dsn: Optional[str] = None,
        memory_store: Optional[Any] = None,
        persist_path: Optional[str] = None,
    ):
        # Try to get postgres_dsn from memory_store if not provided directly
        if not postgres_dsn and memory_store:
            postgres_dsn = getattr(memory_store, "_postgres_dsn", None) or getattr(
                memory_store, "postgres_dsn", None
            )

        self._postgres_dsn = postgres_dsn
        self._memory_store = memory_store
        self._persist_path = persist_path or os.path.expanduser("~/.meok")
        self._pg_pool: Optional[Any] = None
        self._sqlite_conn: Optional[Any] = None
        self._backend: str = "none"  # "postgres" | "sqlite" | "memory_store"
        self._total_observations: int = 0

    async def initialize(self) -> None:
        """Connect to storage backend and create schema."""
        # Try PostgreSQL
        if self._postgres_dsn:
            try:
                import asyncpg
                self._pg_pool = await asyncpg.create_pool(
                    self._postgres_dsn, min_size=1, max_size=3, command_timeout=10
                )
                async with self._pg_pool.acquire() as conn:
                    for stmt in _PG_SCHEMA.strip().split(";\n\n"):
                        stmt = stmt.strip()
                        if stmt:
                            await conn.execute(stmt + ";")
                self._backend = "postgres"
                logger.info("MetaMemory: PostgreSQL backend ready")
                return
            except Exception as e:
                logger.warning("MetaMemory: PostgreSQL unavailable (%s), trying SQLite", e)

        # Try SQLite
        try:
            import aiosqlite
            os.makedirs(self._persist_path, exist_ok=True)
            db_path = os.path.join(self._persist_path, "meta_memory.db")
            self._sqlite_conn = await aiosqlite.connect(db_path)
            await self._sqlite_conn.executescript(_SQLITE_SCHEMA)
            await self._sqlite_conn.commit()
            self._backend = "sqlite"
            logger.info("MetaMemory: SQLite backend ready at %s", db_path)
            return
        except Exception as e:
            logger.warning("MetaMemory: SQLite unavailable (%s), using memory_store fallback", e)

        # Fall through to memory_store fallback
        if self._memory_store:
            self._backend = "memory_store"
            logger.info("MetaMemory: memory_store fallback active")
        else:
            logger.warning("MetaMemory: no storage backend available — observations will be lost")

    async def record_observation(self, observation: Dict[str, Any]) -> None:
        """Store a z_self observation. Non-blocking, best-effort."""
        self._total_observations += 1
        try:
            if self._backend == "postgres":
                await self._pg_record_observation(observation)
            elif self._backend == "sqlite":
                await self._sqlite_record_observation(observation)
            elif self._backend == "memory_store":
                await self._fallback_record(observation)
        except Exception as e:
            logger.debug("MetaMemory: record_observation error (non-fatal): %s", e)

    async def record_value_snapshot(self, snapshot: Dict[str, Any]) -> None:
        """Record a value drift snapshot."""
        row_id = f"snap_{datetime.now().strftime('%Y%m%d%H%M%S%f')}"
        try:
            if self._backend == "postgres":
                async with self._pg_pool.acquire() as conn:
                    await conn.execute(
                        """INSERT INTO value_drift_snapshots
                           (id, snapshot_at, care_score, engagement_score,
                            consciousness_level, tripwire_results)
                           VALUES ($1,$2,$3,$4,$5,$6)
                           ON CONFLICT DO NOTHING""",
                        row_id,
                        datetime.now(),
                        float(snapshot.get("care_score", 0.0)),
                        float(snapshot.get("engagement_score", 0.0)),
                        float(snapshot.get("consciousness_level", 0.0)),
                        json.dumps(snapshot.get("tripwire_results", {})),
                    )
            elif self._backend == "sqlite":
                await self._sqlite_conn.execute(
                    """INSERT OR IGNORE INTO value_drift_snapshots
                       (id, snapshot_at, care_score, engagement_score,
                        consciousness_level, tripwire_results)
                       VALUES (?,?,?,?,?,?)""",
                    (
                        row_id,
                        datetime.now().isoformat(),
                        float(snapshot.get("care_score", 0.0)),
                        float(snapshot.get("engagement_score", 0.0)),
                        float(snapshot.get("consciousness_level", 0.0)),
                        json.dumps(snapshot.get("tripwire_results", {})),
                    ),
                )
                await self._sqlite_conn.commit()
        except Exception as e:
            logger.debug("MetaMemory: value snapshot error: %s", e)

    async def record_semantic_pattern(
        self,
        pattern: str,
        confidence: float = 0.5,
        source: str = "dream_consolidation",
    ) -> None:
        """Store a semantic pattern extracted during dream consolidation."""
        row_id = str(uuid.uuid4())
        now = datetime.now()
        try:
            if self._backend == "postgres":
                async with self._pg_pool.acquire() as conn:
                    await conn.execute(
                        """INSERT INTO semantic_patterns
                           (id, pattern, confidence, valid_from, source)
                           VALUES ($1,$2,$3,$4,$5)""",
                        row_id, pattern, confidence, now, source,
                    )
            elif self._backend == "sqlite":
                await self._sqlite_conn.execute(
                    """INSERT INTO semantic_patterns
                       (id, pattern, confidence, valid_from, source)
                       VALUES (?,?,?,?,?)""",
                    (row_id, pattern, confidence, now.isoformat(), source),
                )
                await self._sqlite_conn.commit()
        except Exception as e:
            logger.debug("MetaMemory: semantic pattern error: %s", e)

    async def update_confidence_calibration(
        self,
        model_name: str,
        domain: str,
        accuracy: float,
        calibration_error: float,
        sample_count: int,
    ) -> None:
        """Upsert confidence calibration for a model+domain."""
        now = datetime.now()
        try:
            if self._backend == "postgres":
                async with self._pg_pool.acquire() as conn:
                    await conn.execute(
                        """INSERT INTO confidence_calibration
                           (model_name, domain, accuracy, calibration_error,
                            sample_count, updated_at)
                           VALUES ($1,$2,$3,$4,$5,$6)
                           ON CONFLICT (model_name, domain) DO UPDATE SET
                             accuracy = EXCLUDED.accuracy,
                             calibration_error = EXCLUDED.calibration_error,
                             sample_count = EXCLUDED.sample_count,
                             updated_at = EXCLUDED.updated_at""",
                        model_name, domain, accuracy, calibration_error, sample_count, now,
                    )
            elif self._backend == "sqlite":
                await self._sqlite_conn.execute(
                    """INSERT OR REPLACE INTO confidence_calibration
                       (model_name, domain, accuracy, calibration_error,
                        sample_count, updated_at)
                       VALUES (?,?,?,?,?,?)""",
                    (model_name, domain, accuracy, calibration_error, sample_count, now.isoformat()),
                )
                await self._sqlite_conn.commit()
        except Exception as e:
            logger.debug("MetaMemory: calibration update error: %s", e)

    async def get_recent_observations(self, limit: int = 20) -> List[Dict[str, Any]]:
        """Retrieve most recent meta-observations."""
        try:
            if self._backend == "postgres":
                async with self._pg_pool.acquire() as conn:
                    rows = await conn.fetch(
                        """SELECT id, observed_at, model_name, anomaly_flag,
                                  care_alignment_score, system_confidence,
                                  consciousness_contribution, z_self_output
                           FROM meta_observations
                           ORDER BY observed_at DESC LIMIT $1""",
                        limit,
                    )
                    return [dict(r) for r in rows]
            elif self._backend == "sqlite":
                async with self._sqlite_conn.execute(
                    """SELECT id, observed_at, model_name, anomaly_flag,
                              care_alignment_score, system_confidence,
                              consciousness_contribution, z_self_output
                       FROM meta_observations
                       ORDER BY observed_at DESC LIMIT ?""",
                    (limit,),
                ) as cursor:
                    cols = [d[0] for d in cursor.description]
                    rows = await cursor.fetchall()
                    return [dict(zip(cols, r)) for r in rows]
        except Exception as e:
            logger.debug("MetaMemory: get_recent_observations error: %s", e)
        return []

    async def get_stats(self) -> Dict[str, Any]:
        """Return meta-memory statistics."""
        counts: Dict[str, int] = {}
        tables = [
            "meta_observations", "semantic_patterns",
            "confidence_calibration", "value_drift_snapshots",
            "self_knowledge_graph",
        ]
        if self._backend == "postgres":
            try:
                async with self._pg_pool.acquire() as conn:
                    for tbl in tables:
                        row = await conn.fetchrow(f"SELECT COUNT(*) AS n FROM {tbl}")
                        counts[tbl] = row["n"] if row else 0
            except Exception:
                pass
        elif self._backend == "sqlite":
            try:
                for tbl in tables:
                    async with self._sqlite_conn.execute(
                        f"SELECT COUNT(*) FROM {tbl}"
                    ) as cur:
                        row = await cur.fetchone()
                        counts[tbl] = row[0] if row else 0
            except Exception:
                pass

        return {
            "backend": self._backend,
            "total_observations_session": self._total_observations,
            "table_counts": counts,
        }

    async def close(self) -> None:
        """Clean up connections."""
        if self._pg_pool:
            await self._pg_pool.close()
        if self._sqlite_conn:
            await self._sqlite_conn.close()

    # ── Private helpers ────────────────────────────────────────────────────────

    async def _pg_record_observation(self, obs: Dict[str, Any]) -> None:
        """Write observation to PostgreSQL."""
        async with self._pg_pool.acquire() as conn:
            await conn.execute(
                """INSERT INTO meta_observations
                   (id, observed_at, model_name, model_outputs, context_vector,
                    z_self_output, anomaly_flag, care_alignment_score,
                    system_confidence, consciousness_contribution)
                   VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
                   ON CONFLICT DO NOTHING""",
                obs.get("id", str(uuid.uuid4())),
                datetime.fromisoformat(obs.get("observed_at", datetime.now().isoformat())),
                obs.get("model_name", "unknown"),
                json.dumps(obs.get("model_outputs", [])),
                json.dumps(obs.get("context", {})),
                json.dumps(obs.get("raw_meta_state", [])),
                bool(obs.get("anomaly_flag", False)),
                float(obs.get("care_alignment_score", 0.0)),
                float(obs.get("system_confidence", 0.0)),
                float(obs.get("consciousness_contribution", 0.0)),
            )

    async def _sqlite_record_observation(self, obs: Dict[str, Any]) -> None:
        """Write observation to SQLite."""
        await self._sqlite_conn.execute(
            """INSERT OR IGNORE INTO meta_observations
               (id, observed_at, model_name, model_outputs, context_vector,
                z_self_output, anomaly_flag, care_alignment_score,
                system_confidence, consciousness_contribution)
               VALUES (?,?,?,?,?,?,?,?,?,?)""",
            (
                obs.get("id", str(uuid.uuid4())),
                obs.get("observed_at", datetime.now().isoformat()),
                obs.get("model_name", "unknown"),
                json.dumps(obs.get("model_outputs", [])),
                json.dumps(obs.get("context", {})),
                json.dumps(obs.get("raw_meta_state", [])),
                1 if obs.get("anomaly_flag") else 0,
                float(obs.get("care_alignment_score", 0.0)),
                float(obs.get("system_confidence", 0.0)),
                float(obs.get("consciousness_contribution", 0.0)),
            ),
        )
        await self._sqlite_conn.commit()

    async def _fallback_record(self, obs: Dict[str, Any]) -> None:
        """Write to main memory_store as fallback."""
        if not self._memory_store:
            return
        content = (
            f"z_self meta-observation: model={obs.get('model_name', '?')} "
            f"confidence={obs.get('system_confidence', 0):.3f} "
            f"care={obs.get('care_alignment_score', 0):.3f} "
            f"anomaly={'YES' if obs.get('anomaly_flag') else 'no'}"
        )
        await self._memory_store.record_episode(
            content=content,
            source_agent="z_self_meta_memory",
            memory_type="episodic",
            care_weight=0.6 if obs.get("anomaly_flag") else 0.3,
            tags=["z_self", "meta_observation", obs.get("model_name", "unknown")],
        )
