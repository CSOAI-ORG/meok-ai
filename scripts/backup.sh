#!/bin/bash
# MEOK LABS — Local Development Backup Script
# Backs up: meok local PostgreSQL, SOV3 memory DB, key config files
# Run manually or add to cron: 0 */6 * * * /Users/nicholas/clawd/meok/scripts/backup.sh

set -euo pipefail

BACKUP_DIR="/Users/nicholas/clawd/.backups"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_PATH="${BACKUP_DIR}/${DATE}"

mkdir -p "$BACKUP_PATH"

echo "=== MEOK LABS Backup — $DATE ==="

# ── MEOK local DB ──────────────────────────────────────────────────────────────
echo "[1/4] Backing up MEOK local database..."
if pg_dump -U nicholas meok_local 2>/dev/null > "${BACKUP_PATH}/meok_local.sql"; then
    echo "  ✓ meok_local.sql ($(wc -c < "${BACKUP_PATH}/meok_local.sql" | tr -d ' ') bytes)"
elif pg_dump -h localhost meok_local 2>/dev/null > "${BACKUP_PATH}/meok_local.sql"; then
    echo "  ✓ meok_local.sql"
else
    echo "  ⚠  meok_local not found, trying postgres user..."
    pg_dump -U postgres meok_local 2>/dev/null > "${BACKUP_PATH}/meok_local.sql" || echo "  ✗ skipped"
fi

# ── SOV3 memory DB ─────────────────────────────────────────────────────────────
echo "[2/4] Backing up SOV3 sovereign_memory database..."
if pg_dump "postgresql://sovereign:sovereign@localhost:5432/sovereign_memory" > "${BACKUP_PATH}/sovereign_memory.sql" 2>/dev/null; then
    echo "  ✓ sovereign_memory.sql ($(wc -l < "${BACKUP_PATH}/sovereign_memory.sql") lines, includes all memory episodes)"
else
    echo "  ✗ sovereign_memory backup failed"
fi

# ── Config files ───────────────────────────────────────────────────────────────
echo "[3/4] Backing up config files..."
cp /Users/nicholas/clawd/sovereign-temple/.env "${BACKUP_PATH}/sovereign_temple.env" 2>/dev/null && echo "  ✓ sovereign_temple.env"
cp /Users/nicholas/clawd/meok/ui/.env.local "${BACKUP_PATH}/meok_ui.env.local" 2>/dev/null && echo "  ✓ meok_ui.env.local" || echo "  ⚠  meok .env.local not found"
cp /Users/nicholas/clawd/meok/.env "${BACKUP_PATH}/meok.env" 2>/dev/null && echo "  ✓ meok.env" || true

# ── Claude memory ──────────────────────────────────────────────────────────────
echo "[4/4] Backing up Claude memory files..."
if [ -d "/Users/nicholas/.claude/projects/-Users-nicholas/memory" ]; then
    cp -r "/Users/nicholas/.claude/projects/-Users-nicholas/memory" "${BACKUP_PATH}/claude_memory"
    echo "  ✓ claude_memory/ ($(ls "${BACKUP_PATH}/claude_memory" | wc -l | tr -d ' ') files)"
fi

# ── Compress backup ────────────────────────────────────────────────────────────
echo "Compressing..."
tar -czf "${BACKUP_DIR}/${DATE}.tar.gz" -C "$BACKUP_DIR" "$DATE"
rm -rf "$BACKUP_PATH"

# ── Retention: keep last 7 backups ────────────────────────────────────────────
ls -t "${BACKUP_DIR}"/*.tar.gz 2>/dev/null | tail -n +8 | xargs rm -f 2>/dev/null || true

BACKUP_SIZE=$(wc -c < "${BACKUP_DIR}/${DATE}.tar.gz" | tr -d ' ')
echo ""
echo "✓ Backup complete: ${BACKUP_DIR}/${DATE}.tar.gz (${BACKUP_SIZE} bytes)"
echo "  Retention: last 7 backups kept"
echo ""
echo "To restore sovereign_memory:"
echo "  tar xzf ${BACKUP_DIR}/${DATE}.tar.gz -C /tmp && psql postgresql://sovereign:sovereign@localhost:5432/sovereign_memory < /tmp/${DATE}/sovereign_memory.sql"
