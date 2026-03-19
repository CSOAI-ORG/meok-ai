#!/bin/bash
# ═══════════════════════════════════════════════════════════
# MEOK.ai — Vast.ai Serverless Startup Script
# PostgreSQL is optional — MEOK starts even if it fails
# ═══════════════════════════════════════════════════════════
# NOTE: no set -e — we want to survive PostgreSQL failures

echo "╔══════════════════════════════════════════╗"
echo "║   MEOK.ai — Sovereign AI Starting...     ║"
echo "╚══════════════════════════════════════════╝"

# ─── Initialize PostgreSQL (optional) ───────────────────
PG_DATA="/var/lib/postgresql/data"

init_postgres() {
    echo "[MEOK] First boot — initializing PostgreSQL..."

    mkdir -p "$PG_DATA" /var/run/postgresql /var/log/supervisor
    chown -R postgres:postgres "$PG_DATA" /var/run/postgresql 2>/dev/null || true

    su postgres -c "/usr/lib/postgresql/15/bin/initdb -D $PG_DATA --encoding=UTF8 --locale=C" || return 1

    echo "host all all 127.0.0.1/32 trust" >> "$PG_DATA/pg_hba.conf"
    echo "listen_addresses = '127.0.0.1'" >> "$PG_DATA/postgresql.conf"
    echo "max_connections = 100" >> "$PG_DATA/postgresql.conf"
    echo "shared_buffers = 128MB" >> "$PG_DATA/postgresql.conf"

    su postgres -c "/usr/lib/postgresql/15/bin/pg_ctl -D $PG_DATA start -w -o '-c listen_addresses=127.0.0.1'" || return 1

    su postgres -c "psql -c \"CREATE USER meok WITH PASSWORD 'meok' CREATEDB;\"" || true
    su postgres -c "psql -c \"CREATE DATABASE meok OWNER meok;\"" || true

    if [ -f /docker-entrypoint-initdb.d/init.sql ]; then
        su postgres -c "psql -d meok -f /docker-entrypoint-initdb.d/init.sql" || true
        echo "[MEOK] Database schema initialized"
    fi

    su postgres -c "/usr/lib/postgresql/15/bin/pg_ctl -D $PG_DATA stop -w" || true
    echo "[MEOK] PostgreSQL initialized ✓"
}

mkdir -p "$PG_DATA" /var/run/postgresql /var/log/supervisor

if [ ! -f "$PG_DATA/PG_VERSION" ]; then
    init_postgres || echo "[MEOK] WARNING: PostgreSQL init failed — running without database (auth disabled, MCP tools use memory store)"
else
    echo "[MEOK] PostgreSQL data exists — skipping init"
    chown -R postgres:postgres "$PG_DATA" /var/run/postgresql 2>/dev/null || true
fi

# ─── Start periodic backup cron ─────────────────────────
if [ -f /app/meok/deploy/serverless/backup.sh ]; then
    echo "*/30 * * * * /app/meok/deploy/serverless/backup.sh >> /var/log/meok-backup.log 2>&1" | crontab - 2>/dev/null || true
    echo "[MEOK] Backup cron installed"
fi

echo "[MEOK] Starting all services via supervisor..."

# ─── Hand off to supervisor ─────────────────────────────
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/meok.conf
