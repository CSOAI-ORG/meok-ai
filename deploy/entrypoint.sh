#!/bin/bash
# MEOK.ai Standalone Entrypoint
# Starts: PostgreSQL → Ollama → MEOK MCP Server
set -e

log() { echo "[$(date '+%H:%M:%S')] MEOK ▶ $1"; }
warn() { echo "[$(date '+%H:%M:%S')] MEOK ⚠ $1"; }

log "=== MEOK.ai Sovereign AI OS Starting ==="
log "Instance: ${HOSTNAME:-standalone}"

# ── 1. PostgreSQL ────────────────────────────────────────────────────────────
log "Starting PostgreSQL 15..."
service postgresql start || warn "postgresql service start failed — may already be running"
sleep 2

# Create meok user and database (idempotent)
su postgres -c "psql -c \"CREATE USER meok WITH PASSWORD 'meok';\" 2>/dev/null" || true
su postgres -c "psql -c \"CREATE DATABASE meok OWNER meok;\" 2>/dev/null" || true

# Run schema (idempotent — all CREATE IF NOT EXISTS)
su postgres -c "psql -d meok -f /docker-entrypoint-initdb.d/01_schema.sql 2>&1" | tail -5 || warn "Schema init had warnings (may be idempotent)"

log "PostgreSQL ready — database: meok"

# ── 2. Ollama (local LLM — uses GPU if available) ───────────────────────────
OLLAMA_MODEL="${MEOK_OLLAMA_MODEL:-llama3.2:3b}"
OLLAMA_HOME="${OLLAMA_HOME:-/tmp/ollama}"
log "Starting Ollama (model: ${OLLAMA_MODEL})..."

export OLLAMA_MODELS="$OLLAMA_HOME/models"
mkdir -p "$OLLAMA_MODELS"

# Start Ollama server in background
OLLAMA_MODELS="$OLLAMA_MODELS" nohup ollama serve > /tmp/meok_logs/ollama.log 2>&1 &
OLLAMA_PID=$!
log "Ollama server PID=$OLLAMA_PID"

# Wait for Ollama to be ready
for i in $(seq 1 20); do
    if curl -sf http://localhost:11434/ > /dev/null 2>&1; then
        log "Ollama ready"
        break
    fi
    sleep 1
done

# Pull model in background (non-blocking — MEOK starts before model is ready)
# Model is used once pulled; subsequent restarts use cached version
(
    log "Pulling ${OLLAMA_MODEL} (background)..."
    OLLAMA_MODELS="$OLLAMA_MODELS" ollama pull "$OLLAMA_MODEL" > /tmp/meok_logs/ollama_pull.log 2>&1 \
        && log "Model ${OLLAMA_MODEL} ready" \
        || warn "Model pull failed — check /tmp/meok_logs/ollama_pull.log"
) &

# ── 3. Environment ───────────────────────────────────────────────────────────
# Set Postgres DSN if not already overridden via env
export MEOK_DATABASE__POSTGRES_DSN="${MEOK_DATABASE__POSTGRES_DSN:-postgresql://meok:meok@localhost:5432/meok}"
export OLLAMA_URL="${OLLAMA_URL:-http://localhost:11434}"
export MEOK_ENVIRONMENT="${MEOK_ENVIRONMENT:-production}"

log "Postgres DSN: ${MEOK_DATABASE__POSTGRES_DSN}"
log "Ollama URL:   ${OLLAMA_URL}"

# ── 4. MEOK MCP Server ───────────────────────────────────────────────────────
log "Starting MEOK MCP Server on :3100..."
cd /app

exec python3 -m meok.mcp.server 2>&1 | tee -a /tmp/meok_logs/server.log
