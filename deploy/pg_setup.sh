#!/bin/bash
# PostgreSQL startup called from Vast.ai EXTRA_COMMANDS before onstart.sh
mkdir -p /tmp/meok_logs
chmod 777 /tmp/meok_logs

PG_VER=$(ls /etc/postgresql/ 2>/dev/null | sort -V | tail -1)
if [ -n "$PG_VER" ]; then
    PG_CONF="/etc/postgresql/$PG_VER/main/postgresql.conf"
    PG_HBA="/etc/postgresql/$PG_VER/main/pg_hba.conf"
    # Ensure TCP listening (idempotent)
    sed -i '/^listen_addresses/d' "$PG_CONF" 2>/dev/null || true
    echo "listen_addresses = '*'" >> "$PG_CONF"
    grep -q "^host all all 0.0.0.0/0" "$PG_HBA" 2>/dev/null \
        || echo "host all all 0.0.0.0/0 md5" >> "$PG_HBA"
fi

# Start PostgreSQL
service postgresql start >> /tmp/meok_logs/pg.log 2>&1 || true

# Wait for TCP (up to 20s)
for i in $(seq 1 20); do
    pg_isready -h 127.0.0.1 -p 5432 -q 2>/dev/null && echo "[pg_setup] TCP ready" && break
    sleep 1
done

# Create user + DB (idempotent)
su postgres -c "createuser -s meok 2>/dev/null; true"
su postgres -c "psql -c \"ALTER USER meok PASSWORD 'meok';\" 2>/dev/null; true"
su postgres -c "createdb -O meok meok 2>/dev/null; true"

# Run MEOK core schema (idempotent)
su postgres -c "psql -d meok -f /app/meok/db/init.sql 2>/dev/null; true"

# ── Create auth tables in PostgreSQL (idempotent) ─────────────────────────────
su postgres -c "psql -d meok << 'EOSQL'
CREATE TABLE IF NOT EXISTS tenants (
    id TEXT PRIMARY KEY,
    name TEXT,
    email TEXT,
    hatch_name TEXT,
    config TEXT DEFAULT '{}',
    status TEXT DEFAULT 'active',
    plan TEXT DEFAULT 'free',
    feature_flags TEXT DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE,
    password_hash TEXT,
    tenant_id TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE
);
CREATE TABLE IF NOT EXISTS api_keys (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    user_id TEXT,
    tenant_id TEXT,
    key_hash TEXT UNIQUE,
    key_prefix TEXT,
    name TEXT DEFAULT 'default',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_used_at TIMESTAMPTZ
);
CREATE TABLE IF NOT EXISTS refresh_tokens (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    user_id TEXT,
    token_hash TEXT UNIQUE,
    expires_at TIMESTAMPTZ,
    revoked BOOLEAN DEFAULT FALSE
);
CREATE TABLE IF NOT EXISTS agents (
    id TEXT PRIMARY KEY,
    tenant_id TEXT,
    name TEXT,
    description TEXT,
    capabilities TEXT,
    status TEXT DEFAULT 'active',
    trust_level REAL DEFAULT 1.0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_seen TIMESTAMPTZ,
    metadata TEXT DEFAULT '{}'
);
CREATE TABLE IF NOT EXISTS memory_episodes (
    id TEXT PRIMARY KEY,
    tenant_id TEXT,
    content TEXT,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    importance_score REAL DEFAULT 0.5,
    care_weight REAL DEFAULT 0.5,
    source_agent TEXT,
    memory_type TEXT DEFAULT 'interaction',
    tags TEXT DEFAULT '[]'
);
EOSQL
"

echo "[pg_setup] Auth tables created (idempotent)"

# Export DSN for the server process
export MEOK_DATABASE__POSTGRES_DSN="postgresql://meok:meok@127.0.0.1:5432/meok"
echo "[pg_setup] Done — PostgreSQL ready for MEOK"
