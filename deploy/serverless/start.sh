#!/bin/bash
# ═══════════════════════════════════════════════════════════
# MEOK.ai — Vast.ai Serverless Startup Script
# Initializes databases on first boot, then hands off to supervisor
# ═══════════════════════════════════════════════════════════
set -e

echo "╔══════════════════════════════════════════╗"
echo "║   MEOK.ai — Sovereign AI Starting...     ║"
echo "╚══════════════════════════════════════════╝"

# ─── Initialize PostgreSQL ──────────────────────────────
PG_DATA="/var/lib/postgresql/data"

# Ensure directories exist
mkdir -p "$PG_DATA" /var/run/postgresql /var/log/supervisor
chown -R postgres:postgres "$PG_DATA" /var/run/postgresql

if [ ! -f "$PG_DATA/PG_VERSION" ]; then
    echo "[MEOK] First boot — initializing PostgreSQL..."

    # Initialize cluster
    su postgres -c "/usr/lib/postgresql/15/bin/initdb -D $PG_DATA --encoding=UTF8 --locale=C"

    # Configure for local-only access
    echo "host all all 127.0.0.1/32 trust" >> "$PG_DATA/pg_hba.conf"
    echo "listen_addresses = '127.0.0.1'" >> "$PG_DATA/postgresql.conf"
    echo "max_connections = 100" >> "$PG_DATA/postgresql.conf"
    echo "shared_buffers = 256MB" >> "$PG_DATA/postgresql.conf"

    # Start temporarily to create DB
    su postgres -c "/usr/lib/postgresql/15/bin/pg_ctl -D $PG_DATA start -w -o '-c listen_addresses=127.0.0.1'"

    # Create user and database
    su postgres -c "psql -c \"CREATE USER meok WITH PASSWORD 'meok' CREATEDB;\""
    su postgres -c "psql -c \"CREATE DATABASE meok OWNER meok;\""

    # Run init SQL if it exists
    if [ -f /docker-entrypoint-initdb.d/init.sql ]; then
        su postgres -c "psql -d meok -f /docker-entrypoint-initdb.d/init.sql" || true
        echo "[MEOK] Database schema initialized"
    fi

    # Stop — supervisor will start it properly
    su postgres -c "/usr/lib/postgresql/15/bin/pg_ctl -D $PG_DATA stop -w"

    echo "[MEOK] PostgreSQL initialized"
else
    echo "[MEOK] PostgreSQL data exists — skipping init"
fi

# ─── Start periodic backup cron ─────────────────────────
if [ -f /app/meok/deploy/serverless/backup.sh ]; then
    echo "*/30 * * * * /app/meok/deploy/serverless/backup.sh >> /var/log/meok-backup.log 2>&1" | crontab - 2>/dev/null || true
    echo "[MEOK] Backup cron installed (every 30 min)"
fi

echo "[MEOK] Starting all services via supervisor..."
echo ""

# ─── Hand off to supervisor ─────────────────────────────
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/meok.conf
