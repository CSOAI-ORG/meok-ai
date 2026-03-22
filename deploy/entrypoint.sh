#!/bin/bash
# MEOK.ai Standalone Entrypoint
# Starts: PostgreSQL → Ollama (if available) → MEOK MCP Server
set -e

log() { echo "[$(date '+%H:%M:%S')] MEOK ▶ $1"; }
warn() { echo "[$(date '+%H:%M:%S')] MEOK ⚠ $1"; }

log "=== MEOK.ai Sovereign AI OS Starting ==="
log "Instance: ${HOSTNAME:-standalone}"

# ── 1. PostgreSQL ────────────────────────────────────────────────────────────
log "Starting PostgreSQL 15..."
# Ensure TCP listening is enabled (Docker containers may default to socket-only)
PG_CONF="/etc/postgresql/15/main/postgresql.conf"
grep -q "^listen_addresses" "$PG_CONF" \
    || echo "listen_addresses = 'localhost'" >> "$PG_CONF"
# Ensure IPv6 loopback is in pg_hba.conf for asyncpg compatibility
grep -q "::1.*md5" /etc/postgresql/15/main/pg_hba.conf \
    || echo "host meok meok ::1/128 md5" >> /etc/postgresql/15/main/pg_hba.conf

service postgresql start || warn "postgresql service start failed — may already be running"
# Wait for PostgreSQL to be ready to accept connections
for i in $(seq 1 10); do
    su postgres -c "pg_isready -q" 2>/dev/null && break
    sleep 1
done

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
export MEOK_DATABASE__POSTGRES_DSN="${MEOK_DATABASE__POSTGRES_DSN:-postgresql://meok:meok@localhost:5432/meok}"
export OLLAMA_URL="${OLLAMA_URL:-http://localhost:11434}"
export MEOK_ENVIRONMENT="${MEOK_ENVIRONMENT:-production}"

log "Postgres DSN: ${MEOK_DATABASE__POSTGRES_DSN}"
log "LLM: Groq=${GROQ_API_KEY:+set} | Anthropic=${ANTHROPIC_API_KEY:+set} | Ollama=${OLLAMA_URL}"

# ── 4. MEOK MCP Server ───────────────────────────────────────────────────────
log "Starting MEOK MCP Server on :3100..."
cd /app

exec python3 -m meok.mcp.server 2>&1 | tee -a /tmp/meok_logs/server.log
