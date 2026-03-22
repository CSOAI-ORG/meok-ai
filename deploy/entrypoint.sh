#!/bin/bash
# MEOK.ai Standalone Entrypoint
# Starts: PostgreSQL → Ollama (if available) → MEOK MCP Server
set -e

log() { echo "[$(date '+%H:%M:%S')] MEOK ▶ $1"; }
warn() { echo "[$(date '+%H:%M:%S')] MEOK ⚠ $1"; }

log "=== MEOK.ai Sovereign AI OS Starting ==="
log "Instance: ${HOSTNAME:-standalone}"

# ── 1. PostgreSQL ────────────────────────────────────────────────────────────
# Auto-detect version (works for PG15, PG17, any future version)
PG_VER=$(ls /etc/postgresql/ 2>/dev/null | sort -V | tail -1)
log "Detected PostgreSQL version: ${PG_VER:-unknown}"

if [ -n "$PG_VER" ]; then
    PG_CONF="/etc/postgresql/${PG_VER}/main/postgresql.conf"
    PG_HBA="/etc/postgresql/${PG_VER}/main/pg_hba.conf"

    # ── Force TCP at RUNTIME (belt-and-suspenders — image build may be cached) ──
    # Remove any existing listen_addresses line and re-add with '*'
    sed -i '/^listen_addresses/d' "$PG_CONF" 2>/dev/null || true
    echo "listen_addresses = '*'" >> "$PG_CONF"

    # Ensure pg_hba.conf has TCP access rule
    grep -q "^host all all 0.0.0.0/0" "$PG_HBA" 2>/dev/null \
        || echo "host all all 0.0.0.0/0 md5" >> "$PG_HBA"

    log "PostgreSQL TCP configured (listen_addresses='*')"
    grep listen_addresses "$PG_CONF" | tail -1 | xargs -I{} log "  conf: {}"
fi

log "Starting PostgreSQL ${PG_VER:-?}..."
service postgresql start || warn "postgresql service start failed — may already be running"

# Wait for PostgreSQL socket (up to 15s)
for i in $(seq 1 15); do
    su postgres -c "pg_isready -q" 2>/dev/null && break
    sleep 1
done

# Restart to apply TCP config changes
service postgresql restart 2>/dev/null || warn "postgresql restart failed"

# Wait for TCP to be ready (up to 15s)
log "Waiting for PostgreSQL TCP on 127.0.0.1:5432..."
for i in $(seq 1 15); do
    pg_isready -h 127.0.0.1 -p 5432 -q 2>/dev/null && log "PostgreSQL TCP ready ✓" && break
    sleep 1
done
pg_isready -h 127.0.0.1 -p 5432 2>/dev/null || warn "PostgreSQL TCP may not be listening"

# Create meok user and database (idempotent)
su postgres -c "psql -c \"CREATE USER meok WITH PASSWORD 'meok';\" 2>/dev/null" || true
su postgres -c "psql -c \"CREATE DATABASE meok OWNER meok;\" 2>/dev/null" || true

# Run schema (idempotent — all CREATE IF NOT EXISTS)
su postgres -c "psql -d meok -f /docker-entrypoint-initdb.d/01_schema.sql 2>&1" | tail -5 || warn "Schema init had warnings (may be idempotent)"

log "PostgreSQL ready — database: meok"

# ── 2. Ollama (optional — start if binary is available on host) ─────────────
if command -v ollama > /dev/null 2>&1; then
    OLLAMA_MODEL="${MEOK_OLLAMA_MODEL:-llama3.2:3b}"
    log "Starting Ollama (model: ${OLLAMA_MODEL})..."
    nohup ollama serve > /tmp/meok_logs/ollama.log 2>&1 &
    sleep 3
    # Pull model in background (non-blocking — server starts immediately)
    (ollama pull "$OLLAMA_MODEL" >> /tmp/meok_logs/ollama.log 2>&1 \
        && log "Ollama model ${OLLAMA_MODEL} ready" \
        || warn "Ollama model pull failed") &
    log "Ollama started (model pull in background)"
else
    log "Ollama not found — local LLM disabled. Set GROQ_API_KEY or ANTHROPIC_API_KEY for chat."
fi

# ── 3. Environment ───────────────────────────────────────────────────────────
# Set Postgres DSN if not already overridden via env
export MEOK_DATABASE__POSTGRES_DSN="${MEOK_DATABASE__POSTGRES_DSN:-postgresql://meok:meok@127.0.0.1:5432/meok}"
export OLLAMA_URL="${OLLAMA_URL:-http://localhost:11434}"
export MEOK_ENVIRONMENT="${MEOK_ENVIRONMENT:-production}"

log "Postgres DSN: ${MEOK_DATABASE__POSTGRES_DSN}"
log "LLM: Groq=${GROQ_API_KEY:+set} | Anthropic=${ANTHROPIC_API_KEY:+set} | Ollama=${OLLAMA_URL}"

# ── 4. MEOK MCP Server ───────────────────────────────────────────────────────
log "Starting MEOK MCP Server on :3100..."
cd /app

exec python3 -m meok.mcp.server 2>&1 | tee -a /tmp/meok_logs/server.log
