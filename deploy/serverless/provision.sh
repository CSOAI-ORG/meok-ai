#!/bin/bash
# ═══════════════════════════════════════════════════════════
# MEOK.ai — Vast.ai Serverless Provisioning Script
# Runs on worker startup to install MEOK + databases
# Used as PROVISIONING_SCRIPT in Vast.ai template
# ═══════════════════════════════════════════════════════════
set -e

echo "╔══════════════════════════════════════════╗"
echo "║   MEOK.ai — Provisioning Worker...       ║"
echo "╚══════════════════════════════════════════╝"

# ─── Install PostgreSQL ─────────────────────────────────
apt-get update -qq
apt-get install -y -qq postgresql-15 postgresql-client-15 supervisor curl >/dev/null 2>&1

# ─── Initialize PostgreSQL ──────────────────────────────
PG_DATA="/var/lib/postgresql/15/main"
if [ ! -f "$PG_DATA/PG_VERSION" ]; then
    mkdir -p "$PG_DATA"
    chown -R postgres:postgres /var/lib/postgresql /var/run/postgresql
    su postgres -c "/usr/lib/postgresql/15/bin/initdb -D $PG_DATA --encoding=UTF8 --locale=C"
    echo "host all all 127.0.0.1/32 trust" >> "$PG_DATA/pg_hba.conf"
    echo "listen_addresses = '127.0.0.1'" >> "$PG_DATA/postgresql.conf"
    su postgres -c "/usr/lib/postgresql/15/bin/pg_ctl -D $PG_DATA start -w"
    su postgres -c "psql -c \"CREATE USER meok WITH PASSWORD 'meok' CREATEDB;\""
    su postgres -c "psql -c \"CREATE DATABASE meok OWNER meok;\""
    su postgres -c "/usr/lib/postgresql/15/bin/pg_ctl -D $PG_DATA stop -w"
fi

# ─── Install MEOK Python deps ──────────────────────────
pip install -q fastapi uvicorn pydantic pydantic-settings numpy scikit-learn \
    asyncpg psutil python-dotenv apscheduler sqlalchemy feedparser httpx pytz \
    ribs scipy alembic PyJWT bcrypt weaviate-client 2>/dev/null

# ─── Unpack MEOK source (embedded as base64 in env) ────
# The MEOK source is packaged as a tar.gz and passed via MEOK_SOURCE env var
if [ -n "${MEOK_SOURCE_URL:-}" ]; then
    echo "Downloading MEOK source from $MEOK_SOURCE_URL..."
    mkdir -p /app
    cd /app
    curl -sL "$MEOK_SOURCE_URL" | tar xz
elif [ -n "${MEOK_SOURCE:-}" ]; then
    echo "Unpacking embedded MEOK source..."
    mkdir -p /app
    echo "$MEOK_SOURCE" | base64 -d | tar xz -C /app
fi

# ─── Create supervisor config ──────────────────────────
mkdir -p /var/log/supervisor
cat > /etc/supervisor/conf.d/meok.conf << 'SUPERVISOR'
[supervisord]
nodaemon=false
logfile=/var/log/supervisor/supervisord.log

[program:postgres]
command=/usr/lib/postgresql/15/bin/postgres -D /var/lib/postgresql/15/main -c listen_addresses=127.0.0.1
user=postgres
autostart=true
autorestart=true
priority=10

[program:meok]
command=python -m meok.mcp.server
directory=/app
autostart=true
autorestart=true
priority=30
startsecs=15
environment=PYTHONPATH="/app",MEOK_DATABASE__POSTGRES_DSN="postgresql://meok:meok@127.0.0.1:5432/meok"
stdout_logfile=/var/log/supervisor/meok.log
stderr_logfile=/var/log/supervisor/meok_err.log
SUPERVISOR

# Start supervisor in background
/usr/bin/supervisord -c /etc/supervisor/conf.d/meok.conf &

echo "[MEOK] Provisioning complete. MCP server starting on :3100"
