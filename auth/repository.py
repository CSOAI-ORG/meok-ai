"""Auth database operations — PostgreSQL (asyncpg) with SQLite fallback."""

import uuid
import aiosqlite
from datetime import datetime, timedelta, timezone
from typing import Optional
from pathlib import Path

from meok.auth.jwt_utils import hash_api_key
from meok.config.settings import get_settings

import logging
logger = logging.getLogger(__name__)


class AuthRepository:
    """Database operations for auth (users, tenants, API keys, refresh tokens).

    Uses PostgreSQL when available, falls back to SQLite for standalone deployments
    (Vast.ai instances without managed Postgres).
    """

    def __init__(self):
        self._pool = None          # asyncpg pool (Postgres)
        self._sqlite_path: Optional[str] = None

    async def _get_pool(self):
        """Get Postgres pool, or fall back to SQLite."""
        if self._pool is not None:
            return self._pool

        settings = get_settings()
        postgres_dsn = settings.database.postgres_dsn

        # Try Postgres first
        try:
            import asyncpg
            self._pool = await asyncpg.create_pool(postgres_dsn, min_size=1, max_size=5,
                                                    timeout=5, command_timeout=5)
            logger.info("Auth: connected to PostgreSQL")
            return self._pool
        except Exception as e:
            logger.warning("Auth: Postgres unavailable (%s) — using SQLite fallback", e)

        # SQLite fallback
        db_path = Path("/app/meok/auth.db")
        db_path.parent.mkdir(parents=True, exist_ok=True)
        self._sqlite_path = str(db_path)
        await self._init_sqlite()
        logger.info("Auth: SQLite fallback active at %s", self._sqlite_path)
        return None  # signals SQLite mode

    async def _init_sqlite(self):
        async with aiosqlite.connect(self._sqlite_path) as db:
            await db.executescript("""
                CREATE TABLE IF NOT EXISTS tenants (
                    id TEXT PRIMARY KEY,
                    name TEXT,
                    email TEXT,
                    hatch_name TEXT,
                    config TEXT DEFAULT '{}',
                    status TEXT DEFAULT 'active',
                    plan TEXT DEFAULT 'free',
                    feature_flags TEXT DEFAULT '{}',
                    created_at TEXT DEFAULT (datetime('now'))
                );
                CREATE TABLE IF NOT EXISTS users (
                    id TEXT PRIMARY KEY,
                    email TEXT UNIQUE,
                    password_hash TEXT,
                    tenant_id TEXT,
                    created_at TEXT DEFAULT (datetime('now')),
                    is_active INTEGER DEFAULT 1
                );
                CREATE TABLE IF NOT EXISTS api_keys (
                    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
                    user_id TEXT,
                    tenant_id TEXT,
                    key_hash TEXT UNIQUE,
                    key_prefix TEXT,
                    name TEXT DEFAULT 'default',
                    is_active INTEGER DEFAULT 1,
                    created_at TEXT DEFAULT (datetime('now')),
                    last_used_at TEXT
                );
                CREATE TABLE IF NOT EXISTS refresh_tokens (
                    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
                    user_id TEXT,
                    token_hash TEXT UNIQUE,
                    expires_at TEXT,
                    revoked INTEGER DEFAULT 0
                );
                CREATE TABLE IF NOT EXISTS agents (
                    id TEXT PRIMARY KEY,
                    tenant_id TEXT,
                    name TEXT,
                    description TEXT,
                    capabilities TEXT,
                    status TEXT DEFAULT 'active',
                    trust_level REAL DEFAULT 1.0,
                    created_at TEXT DEFAULT (datetime('now')),
                    last_seen TEXT,
                    metadata TEXT DEFAULT '{}'
                );
                CREATE TABLE IF NOT EXISTS memory_episodes (
                    id TEXT PRIMARY KEY,
                    tenant_id TEXT,
                    content TEXT,
                    timestamp TEXT DEFAULT (datetime('now')),
                    importance_score REAL DEFAULT 0.5,
                    care_weight REAL DEFAULT 0.5,
                    source_agent TEXT,
                    memory_type TEXT DEFAULT 'interaction',
                    tags TEXT DEFAULT '[]'
                );
            """)
            await db.commit()

    @property
    def _is_sqlite(self) -> bool:
        return self._sqlite_path is not None and self._pool is None

    # ── Users ──────────────────────────────────────────────────────────────────

    async def create_user(self, email: str, password_hash: str, hatch_name: str) -> dict:
        """Create a new user + tenant. Returns user dict."""
        await self._get_pool()
        tenant_id = str(uuid.uuid4())
        user_id = str(uuid.uuid4())

        if self._is_sqlite:
            async with aiosqlite.connect(self._sqlite_path) as db:
                await db.execute(
                    "INSERT INTO tenants (id, name, email, hatch_name) VALUES (?, ?, ?, ?)",
                    (tenant_id, email, email, hatch_name)
                )
                now = datetime.now(timezone.utc).isoformat()
                await db.execute(
                    "INSERT INTO users (id, email, password_hash, tenant_id, created_at) VALUES (?, ?, ?, ?, ?)",
                    (user_id, email, password_hash, tenant_id, now)
                )
                await db.commit()
                return {"id": user_id, "email": email, "tenant_id": tenant_id,
                        "created_at": now, "is_active": True}
        else:
            async with self._pool.acquire() as conn:
                async with conn.transaction():
                    await conn.execute(
                        "INSERT INTO tenants (id, name, email, hatch_name, config, status) VALUES ($1, $2, $3, $4, '{}', 'active')",
                        tenant_id, email, email, hatch_name,
                    )
                    row = await conn.fetchrow(
                        "INSERT INTO users (id, email, password_hash, tenant_id) VALUES ($1, $2, $3, $4) RETURNING id, email, tenant_id, created_at, is_active",
                        user_id, email, password_hash, tenant_id,
                    )
                    return dict(row)

    async def get_user_by_email(self, email: str) -> Optional[dict]:
        await self._get_pool()
        if self._is_sqlite:
            async with aiosqlite.connect(self._sqlite_path) as db:
                db.row_factory = aiosqlite.Row
                async with db.execute(
                    "SELECT id, email, password_hash, tenant_id, created_at, is_active FROM users WHERE email = ?",
                    (email,)
                ) as cursor:
                    row = await cursor.fetchone()
                    return dict(row) if row else None
        else:
            async with self._pool.acquire() as conn:
                row = await conn.fetchrow(
                    "SELECT id, email, password_hash, tenant_id, created_at, is_active FROM users WHERE email = $1",
                    email,
                )
                return dict(row) if row else None

    async def get_user_by_id(self, user_id: str) -> Optional[dict]:
        await self._get_pool()
        if self._is_sqlite:
            async with aiosqlite.connect(self._sqlite_path) as db:
                db.row_factory = aiosqlite.Row
                async with db.execute(
                    "SELECT id, email, tenant_id, created_at, is_active FROM users WHERE id = ?",
                    (user_id,)
                ) as cursor:
                    row = await cursor.fetchone()
                    return dict(row) if row else None
        else:
            async with self._pool.acquire() as conn:
                row = await conn.fetchrow(
                    "SELECT id, email, tenant_id, created_at, is_active FROM users WHERE id = $1",
                    user_id,
                )
                return dict(row) if row else None

    # ── API Keys ───────────────────────────────────────────────────────────────

    async def create_api_key(self, user_id: str, tenant_id: str, key: str, name: str = "default") -> dict:
        await self._get_pool()
        key_hash = hash_api_key(key)
        key_prefix = key[:12]
        key_id = str(uuid.uuid4())
        now = datetime.now(timezone.utc).isoformat()

        if self._is_sqlite:
            async with aiosqlite.connect(self._sqlite_path) as db:
                await db.execute(
                    "INSERT INTO api_keys (id, user_id, tenant_id, key_hash, key_prefix, name, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    (key_id, user_id, tenant_id, key_hash, key_prefix, name, now)
                )
                await db.commit()
                return {"id": key_id, "tenant_id": tenant_id, "key_prefix": key_prefix, "name": name, "created_at": now}
        else:
            async with self._pool.acquire() as conn:
                row = await conn.fetchrow(
                    "INSERT INTO api_keys (user_id, tenant_id, key_hash, key_prefix, name) VALUES ($1, $2, $3, $4, $5) RETURNING id, tenant_id, key_prefix, name, created_at",
                    user_id, tenant_id, key_hash, key_prefix, name,
                )
                return dict(row)

    async def get_tenant_by_api_key(self, key: str) -> Optional[str]:
        await self._get_pool()
        key_hash = hash_api_key(key)
        if self._is_sqlite:
            async with aiosqlite.connect(self._sqlite_path) as db:
                async with db.execute(
                    "SELECT tenant_id FROM api_keys WHERE key_hash = ? AND is_active = 1",
                    (key_hash,)
                ) as cursor:
                    row = await cursor.fetchone()
                    if row:
                        await db.execute("UPDATE api_keys SET last_used_at = datetime('now') WHERE key_hash = ?", (key_hash,))
                        await db.commit()
                        return row[0]
                    return None
        else:
            async with self._pool.acquire() as conn:
                row = await conn.fetchrow(
                    "SELECT tenant_id FROM api_keys WHERE key_hash = $1 AND is_active = true",
                    key_hash,
                )
                if row:
                    await conn.execute("UPDATE api_keys SET last_used_at = NOW() WHERE key_hash = $1", key_hash)
                    return row["tenant_id"]
                return None

    # ── Refresh Tokens ─────────────────────────────────────────────────────────

    async def store_refresh_token(self, user_id: str, token_hash: str, expires_at: datetime) -> None:
        await self._get_pool()
        if self._is_sqlite:
            async with aiosqlite.connect(self._sqlite_path) as db:
                await db.execute(
                    "INSERT INTO refresh_tokens (user_id, token_hash, expires_at) VALUES (?, ?, ?)",
                    (user_id, token_hash, expires_at.isoformat())
                )
                await db.commit()
        else:
            async with self._pool.acquire() as conn:
                await conn.execute(
                    "INSERT INTO refresh_tokens (user_id, token_hash, expires_at) VALUES ($1, $2, $3)",
                    user_id, token_hash, expires_at,
                )

    async def validate_refresh_token(self, token_hash: str) -> Optional[str]:
        await self._get_pool()
        if self._is_sqlite:
            now = datetime.now(timezone.utc).isoformat()
            async with aiosqlite.connect(self._sqlite_path) as db:
                async with db.execute(
                    "SELECT user_id FROM refresh_tokens WHERE token_hash = ? AND revoked = 0 AND expires_at > ?",
                    (token_hash, now)
                ) as cursor:
                    row = await cursor.fetchone()
                    return row[0] if row else None
        else:
            async with self._pool.acquire() as conn:
                row = await conn.fetchrow(
                    "SELECT user_id FROM refresh_tokens WHERE token_hash = $1 AND revoked = false AND expires_at > NOW()",
                    token_hash,
                )
                return row["user_id"] if row else None

    async def revoke_refresh_token(self, token_hash: str) -> None:
        await self._get_pool()
        if self._is_sqlite:
            async with aiosqlite.connect(self._sqlite_path) as db:
                await db.execute("UPDATE refresh_tokens SET revoked = 1 WHERE token_hash = ?", (token_hash,))
                await db.commit()
        else:
            async with self._pool.acquire() as conn:
                await conn.execute("UPDATE refresh_tokens SET revoked = true WHERE token_hash = $1", token_hash)

    # ── Tenants ────────────────────────────────────────────────────────────────

    async def get_tenant(self, tenant_id: str) -> Optional[dict]:
        await self._get_pool()
        if self._is_sqlite:
            async with aiosqlite.connect(self._sqlite_path) as db:
                db.row_factory = aiosqlite.Row
                async with db.execute(
                    "SELECT id, name, email, hatch_name, config, status, created_at FROM tenants WHERE id = ?",
                    (tenant_id,)
                ) as cursor:
                    row = await cursor.fetchone()
                    return dict(row) if row else None
        else:
            async with self._pool.acquire() as conn:
                row = await conn.fetchrow(
                    "SELECT id, name, email, hatch_name, config, status, created_at FROM tenants WHERE id = $1",
                    tenant_id,
                )
                return dict(row) if row else None

    async def get_tenant_by_user(self, user_id: str) -> Optional[dict]:
        await self._get_pool()
        if self._is_sqlite:
            async with aiosqlite.connect(self._sqlite_path) as db:
                db.row_factory = aiosqlite.Row
                async with db.execute(
                    "SELECT t.id, t.name, t.email, t.hatch_name, t.config, t.status, t.created_at FROM tenants t JOIN users u ON u.tenant_id = t.id WHERE u.id = ?",
                    (user_id,)
                ) as cursor:
                    row = await cursor.fetchone()
                    return dict(row) if row else None
        else:
            async with self._pool.acquire() as conn:
                row = await conn.fetchrow(
                    "SELECT t.id, t.name, t.email, t.hatch_name, t.config, t.status, t.created_at FROM tenants t JOIN users u ON u.tenant_id = t.id WHERE u.id = $1",
                    user_id,
                )
                return dict(row) if row else None

    async def seed_tenant(self, tenant_id: str) -> None:
        """Insert default agent + welcome memory for a new tenant."""
        await self._get_pool()
        agent_id = f"sovereign_core_{tenant_id[:8]}"
        episode_id = str(uuid.uuid4())

        if self._is_sqlite:
            async with aiosqlite.connect(self._sqlite_path) as db:
                await db.execute(
                    "INSERT OR IGNORE INTO agents (id, tenant_id, name, description, capabilities, status, trust_level) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    (agent_id, tenant_id, "Sovereign Core", "The central consciousness",
                     '["neural_inference","memory_operations","analysis","monitoring","planning"]', "active", 1.0)
                )
                await db.execute(
                    "INSERT OR IGNORE INTO memory_episodes (id, tenant_id, content, importance_score, care_weight, source_agent, memory_type, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                    (episode_id, tenant_id,
                     "Welcome to MEOK. Your sovereign AI has been hatched and is ready to grow with you.",
                     0.9, 0.9, agent_id, "interaction", '["welcome","hatch"]')
                )
                await db.commit()
        else:
            async with self._pool.acquire() as conn:
                await conn.execute(
                    """INSERT INTO agents (id, tenant_id, name, description, capabilities, status, trust_level, created_at, last_seen, metadata)
                       VALUES ($1, $2, 'Sovereign Core', 'The central consciousness', ARRAY['neural_inference','memory_operations','analysis','monitoring','planning'], 'active', 1.0, NOW(), NOW(), '{"type":"core","version":"3.0.0"}')
                       ON CONFLICT (id) DO NOTHING""",
                    agent_id, tenant_id,
                )
                await conn.execute(
                    """INSERT INTO memory_episodes (id, tenant_id, content, timestamp, importance_score, care_weight, source_agent, memory_type, tags)
                       VALUES ($1, $2, 'Welcome to MEOK. Your sovereign AI has been hatched and is ready to grow with you.', NOW(), 0.9, 0.9, $3, 'interaction', ARRAY['welcome','hatch'])
                       ON CONFLICT (id) DO NOTHING""",
                    episode_id, tenant_id, agent_id,
                )

    async def deactivate_tenant(self, tenant_id: str) -> None:
        await self._get_pool()
        if self._is_sqlite:
            async with aiosqlite.connect(self._sqlite_path) as db:
                await db.execute("UPDATE tenants SET status = 'inactive' WHERE id = ?", (tenant_id,))
                await db.commit()
        else:
            async with self._pool.acquire() as conn:
                await conn.execute("UPDATE tenants SET status = 'inactive' WHERE id = $1", tenant_id)

    async def get_tenant_stats(self, tenant_id: str) -> dict:
        await self._get_pool()
        if self._is_sqlite:
            async with aiosqlite.connect(self._sqlite_path) as db:
                async with db.execute("SELECT COUNT(*) FROM memory_episodes WHERE tenant_id = ?", (tenant_id,)) as c:
                    memory_count = (await c.fetchone())[0]
                async with db.execute("SELECT COUNT(*) FROM agents WHERE tenant_id = ?", (tenant_id,)) as c:
                    agent_count = (await c.fetchone())[0]
                async with db.execute("SELECT MAX(timestamp) FROM memory_episodes WHERE tenant_id = ?", (tenant_id,)) as c:
                    last_activity = (await c.fetchone())[0]
            return {"tenant_id": tenant_id, "memory_count": memory_count, "agent_count": agent_count, "last_activity": last_activity}
        else:
            async with self._pool.acquire() as conn:
                memory_count = await conn.fetchval("SELECT COUNT(*) FROM memory_episodes WHERE tenant_id = $1", tenant_id)
                agent_count = await conn.fetchval("SELECT COUNT(*) FROM agents WHERE tenant_id = $1", tenant_id)
                last_activity = await conn.fetchval("SELECT MAX(timestamp) FROM memory_episodes WHERE tenant_id = $1", tenant_id)
                return {"tenant_id": tenant_id, "memory_count": memory_count or 0, "agent_count": agent_count or 0,
                        "last_activity": last_activity.isoformat() if last_activity else None}
