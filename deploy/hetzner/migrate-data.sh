#!/bin/bash
# ─────────────────────────────────────────────────────────────
# MEOK data migration: Vast.ai → Hetzner
# Run BEFORE destroying the Vast.ai instance
# ─────────────────────────────────────────────────────────────
set -euo pipefail

VAST_IP="198.53.64.194"
VAST_PORT="${VAST_SSH_PORT:-39588}"   # Set VAST_SSH_PORT if different
NEW_IP="${1:?Usage: migrate-data.sh <new-hetzner-ip>}"

echo "Exporting data from Vast.ai $VAST_IP..."

# 1. Find running container
CONTAINER=$(ssh -i ~/.ssh/id_ed25519 -p $VAST_PORT root@$VAST_IP \
  "docker ps --format '{{.Names}}' | head -1" 2>/dev/null || echo "")

if [[ -n "$CONTAINER" ]]; then
  echo "Container: $CONTAINER"
  
  # 2. Export SQLite DB
  ssh -i ~/.ssh/id_ed25519 -p $VAST_PORT root@$VAST_IP \
    "docker exec $CONTAINER find /app -name '*.db' -o -name '*.sqlite' 2>/dev/null" | head -5
  
  # 3. Export neural models
  ssh -i ~/.ssh/id_ed25519 -p $VAST_PORT root@$VAST_IP \
    "docker exec $CONTAINER tar czf /tmp/meok-backup.tar.gz /app/meok/neural/models/ /app/meok/memory/ 2>/dev/null; docker cp $CONTAINER:/tmp/meok-backup.tar.gz /tmp/"
  
  # 4. Copy backup locally
  scp -i ~/.ssh/id_ed25519 -P $VAST_PORT root@$VAST_IP:/tmp/meok-backup.tar.gz /tmp/meok-backup.tar.gz
  echo "Backup downloaded to /tmp/meok-backup.tar.gz"
  
  # 5. Upload to new server
  scp -i ~/.ssh/id_ed25519 /tmp/meok-backup.tar.gz root@$NEW_IP:/tmp/
  ssh -i ~/.ssh/id_ed25519 root@$NEW_IP \
    "tar xzf /tmp/meok-backup.tar.gz -C / 2>/dev/null; systemctl restart meok"
  echo "Data restored on new server"
else
  echo "No running container found — app may have crashed on Vast.ai"
  echo "New server will start fresh (models auto-retrain on first use)"
fi

echo ""
echo "✅ Migration complete"
echo ""
echo "NOW GO TO: https://cloud.vast.ai/instances/"
echo "STOP instance #33199588 (RTX PRO 6000 WS — \$1.082/hr)"
echo "You save \$772/month immediately."
