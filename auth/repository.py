"""Auth database operations using asyncpg."""

import uuid
from datetime import datetime, timedelta, timezone
from typing import Optional

import asyncpg

from meok.auth.jwt_utils import hash_api_key
from meok.config.settings import get_settings


class AuthRepository:
    """Database operations for auth (users, tenants, API keys, refresh tokens)."""

    def __init__(self):
        self._pool: Optional[asyncpg.Pool] = None

    async def _get_pool(self) -> asyncpg.Pool:
        if self._pool is None:
            settings = get_settings()
            self._pool = await asyncpg.create_pool(settings.database.postgres_dsn, min_size=1, max_size=5)
        return self._pool

    # -- Users --

    async def create_user(self, email: str, password_hash: str, hatch_name: str) -> dict:
        """Create a new user + tenant. Returns user dict."""
        pool = await self._get_pool()
        async with pool.acquire() as conn:
            async with conn.transaction():
                # Create tenant
                tenant_id = str(uuid.uuid4())
                await conn.execute(
                    """INSERT INTO tenants (id, name, email, hatch_name, config, status)
                       VALUES ($1, $2, $3, $4, '{}', 'active')""",
                    tenant_id, email, email, hatch_name,
                )
                # Create user
                user_id = str(uuid.uuid4())
                row = await conn.fetchrow(
                    """INSERT INTO users (id, email, password_hash, tenant_id)
                       VALUES ($1, $2, $3, $4)
                       RETURNING id, email, tenant_id, created_at, is_active""",
                    user_id, email, password_hash, tenant_id,
                )
                return dict(row)

    async def get_user_by_email(self, email: str) -> Optional[dict]:
        pool = await self._get_pool()
        async with pool.acquire() as conn:
            row = await conn.fetchrow(
                "SELECT id, email, password_hash, tenant_id, created_at, is_active FROM users WHERE email = $1",
                email,
            )
            return dict(row) if row else None

    async def get_user_by_id(self, user_id: str) -> Optional[dict]:
        pool = await self._get_pool()
        async with pool.acquire() as conn:
            row = await conn.fetchrow(
                "SELECT id, email, tenant_id, created_at, is_active FROM users WHERE id = $1",
                user_id,
            )
            return dict(row) if row else None

    # -- API Keys --

    async def create_api_key(self, user_id: str, tenant_id: str, key: str, name: str = "default") -> dict:
        """Store an API key (hashed). Returns key metadata."""
        pool = await self._get_pool()
        key_hash = hash_api_key(key)
        key_prefix = key[:12]
        async with pool.acquire() as conn:
            row = await conn.fetchrow(
                """INSERT INTO api_keys (user_id, tenant_id, key_hash, key_prefix, name)
                   VALUES ($1, $2, $3, $4, $5)
                   RETURNING id, tenant_id, key_prefix, name, created_at""",
                user_id, tenant_id, key_hash, key_prefix, name,
            )
            return dict(row)

    async def get_tenant_by_api_key(self, key: str) -> Optional[str]:
        """Look up tenant_id by API key. Returns None if not found or inactive."""
        pool = await self._get_pool()
        key_hash = hash_api_key(key)
        async with pool.acquire() as conn:
            row = await conn.fetchrow(
                """SELECT tenant_id FROM api_keys
                   WHERE key_hash = $1 AND is_active = true""",
                key_hash,
            )
            if row:
                # Update last_used_at
                await conn.execute(
                    "UPDATE api_keys SET last_used_at = NOW() WHERE key_hash = $1",
                    key_hash,
                )
                return row["tenant_id"]
            return None

    # -- Refresh Tokens --

    async def store_refresh_token(self, user_id: str, token_hash: str, expires_at: datetime) -> None:
        pool = await self._get_pool()
        async with pool.acquire() as conn:
            await conn.execute(
                """INSERT INTO refresh_tokens (user_id, token_hash, expires_at)
                   VALUES ($1, $2, $3)""",
                user_id, token_hash, expires_at,
            )

    async def validate_refresh_token(self, token_hash: str) -> Optional[str]:
        """Validate refresh token, return user_id if valid."""
        pool = await self._get_pool()
        async with pool.acquire() as conn:
            row = await conn.fetchrow(
                """SELECT user_id FROM refresh_tokens
                   WHERE token_hash = $1 AND revoked = false AND expires_at > NOW()""",
                token_hash,
            )
            return row["user_id"] if row else None

    async def revoke_refresh_token(self, token_hash: str) -> None:
        pool = await self._get_pool()
        async with pool.acquire() as conn:
            await conn.execute(
                "UPDATE refresh_tokens SET revoked = true WHERE token_hash = $1",
                token_hash,
            )

    # -- Tenants --

    async def get_tenant(self, tenant_id: str) -> Optional[dict]:
        pool = await self._get_pool()
        async with pool.acquire() as conn:
            row = await conn.fetchrow(
                "SELECT id, name, email, hatch_name, config, status, created_at FROM tenants WHERE id = $1",
                tenant_id,
            )
            return dict(row) if row else None

    async def get_tenant_by_user(self, user_id: str) -> Optional[dict]:
        """Get the tenant associated with a user."""
        pool = await self._get_pool()
        async with pool.acquire() as conn:
            row = await conn.fetchrow(
                """SELECT t.id, t.name, t.email, t.hatch_name, t.config, t.status, t.created_at
                   FROM tenants t JOIN users u ON u.tenant_id = t.id
                   WHERE u.id = $1""",
                user_id,
            )
            return dict(row) if row else None

    async def seed_tenant(self, tenant_id: str) -> None:
        """Insert default agent + welcome memory for a new tenant."""
        pool = await self._get_pool()
        async with pool.acquire() as conn:
            # Default agent
            agent_id = f"sovereign_core_{tenant_id[:8]}"
            await conn.execute(
                """INSERT INTO agents (id, tenant_id, name, description, capabilities, status, trust_level, created_at, last_seen, metadata)
                   VALUES ($1, $2, 'Sovereign Core', 'The central consciousness', ARRAY['neural_inference','memory_operations','analysis','monitoring','planning'], 'active', 1.0, NOW(), NOW(), '{"type":"core","version":"3.0.0"}')
                   ON CONFLICT (id) DO NOTHING""",
                agent_id, tenant_id,
            )
            # Welcome memory
            episode_id = str(uuid.uuid4())
            await conn.execute(
                """INSERT INTO memory_episodes (id, tenant_id, content, timestamp, importance_score, care_weight, source_agent, memory_type, tags)
                   VALUES ($1, $2, 'Welcome to MEOK. Your sovereign AI has been hatched and is ready to grow with you.', NOW(), 0.9, 0.9, $3, 'interaction', ARRAY['welcome','hatch'])
                   ON CONFLICT (id) DO NOTHING""",
                episode_id, tenant_id, agent_id,
            )

    async def deactivate_tenant(self, tenant_id: str) -> None:
        pool = await self._get_pool()
        async with pool.acquire() as conn:
            await conn.execute(
                "UPDATE tenants SET status = 'inactive' WHERE id = $1",
                tenant_id,
            )

    async def get_tenant_stats(self, tenant_id: str) -> dict:
        """Get stats for a tenant (memory count, agent count, etc.)."""
        pool = await self._get_pool()
        async with pool.acquire() as conn:
            memory_count = await conn.fetchval(
                "SELECT COUNT(*) FROM memory_episodes WHERE tenant_id = $1", tenant_id
            )
            agent_count = await conn.fetchval(
                "SELECT COUNT(*) FROM agents WHERE tenant_id = $1", tenant_id
            )
            last_activity = await conn.fetchval(
                "SELECT MAX(timestamp) FROM memory_episodes WHERE tenant_id = $1", tenant_id
            )
            return {
                "tenant_id": tenant_id,
                "memory_count": memory_count or 0,
                "agent_count": agent_count or 0,
                "last_activity": last_activity.isoformat() if last_activity else None,
            }
