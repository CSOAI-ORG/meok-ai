#!/bin/bash
# MEOK VPS Entrypoint — starts MEOK server (PostgreSQL optional, server runs in degraded mode without it)
echo "=== MEOK Sovereign v10 Starting ==="
echo "Time: $(date)"

# Set default DSN pointing to localhost (will fail gracefully if no postgres)
export MEOK_DATABASE__POSTGRES_DSN="${MEOK_DATABASE__POSTGRES_DSN:-postgresql://meok:meok@localhost:5432/meok}"

# Quick PostgreSQL setup attempt (non-blocking)
if command -v pg_lsclusters >/dev/null 2>&1; then
    echo "Attempting PostgreSQL setup..."
    # Try pg_ctlcluster if available (Debian style)
    pg_ctlcluster 15 main start 2>/dev/null || true
    sleep 3
    if psql -U postgres -c "SELECT 1" >/dev/null 2>&1; then
        psql -U postgres -c "CREATE USER meok WITH PASSWORD 'meok'" 2>/dev/null || true
        psql -U postgres -c "CREATE DATABASE meok OWNER meok" 2>/dev/null || true
        psql -U postgres -d meok -c "CREATE EXTENSION IF NOT EXISTS vector" 2>/dev/null || true
        echo "PostgreSQL ready!"
    fi
fi

echo "=== Starting MEOK MCP Server ==="
cd /app
exec python -m meok.mcp.server
