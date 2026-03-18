#!/bin/bash
# ═══════════════════════════════════════════════════════════
# MEOK.ai — Database Backup Script
# Runs every 30 minutes via cron inside Vast.ai worker
# Backs up PostgreSQL to /app/backups/ (persists while worker runs)
# ═══════════════════════════════════════════════════════════
set -euo pipefail

BACKUP_DIR="/app/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
MAX_BACKUPS=48  # Keep 24 hours of 30-min backups

mkdir -p "$BACKUP_DIR"

echo "[$(date)] Starting backup..."

# PostgreSQL dump
su postgres -c "pg_dump -Fc meok" > "$BACKUP_DIR/meok_${TIMESTAMP}.dump" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "[$(date)] PostgreSQL backup: meok_${TIMESTAMP}.dump ($(du -h "$BACKUP_DIR/meok_${TIMESTAMP}.dump" | cut -f1))"
else
    echo "[$(date)] ERROR: PostgreSQL backup failed"
fi

# Cleanup old backups (keep last MAX_BACKUPS)
cd "$BACKUP_DIR"
ls -t meok_*.dump 2>/dev/null | tail -n +$((MAX_BACKUPS + 1)) | xargs rm -f 2>/dev/null

echo "[$(date)] Backup complete. Active backups: $(ls meok_*.dump 2>/dev/null | wc -l)"
