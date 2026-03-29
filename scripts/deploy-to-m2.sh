#!/bin/bash
# Deploy MEOK OS from M4 (dev) → M2 (end-user test rig)
# Usage: ./scripts/deploy-to-m2.sh

set -e

M2_HOST="m2"
M2_DIR="~/meok-ui"
M4_DIR="$HOME/clawd/meok/ui"

echo "=== MEOK Deploy: M4 → M2 ==="
echo "Source: $M4_DIR"
echo "Target: $M2_HOST:$M2_DIR"
echo ""

# 1. Sync codebase (exclude local env, node_modules, build artifacts)
echo "[1/4] Syncing codebase..."
rsync -avz --delete \
  --exclude node_modules \
  --exclude .next \
  --exclude .env.local \
  --exclude test-results \
  --exclude playwright-report \
  "$M4_DIR/" "$M2_HOST:$M2_DIR/"

# 2. Install dependencies on M2
echo "[2/4] Installing dependencies on M2..."
ssh "$M2_HOST" "cd $M2_DIR && npm install --production 2>&1 | tail -3"

# 3. Build on M2
echo "[3/4] Building on M2..."
ssh "$M2_HOST" "cd $M2_DIR && npm run build 2>&1 | tail -5"

# 4. Restart M2 MEOK (kill old, start new)
echo "[4/4] Starting MEOK on M2..."
ssh "$M2_HOST" "pkill -f 'next start' 2>/dev/null; cd $M2_DIR && nohup npm run start > /tmp/meok-m2.log 2>&1 &"
sleep 3

# Verify
echo ""
echo "=== Verifying M2 deployment ==="
M2_HEALTH=$(ssh "$M2_HOST" "curl -s http://localhost:3000/api/health 2>/dev/null | head -c 100" 2>&1)
if echo "$M2_HEALTH" | grep -q "healthy"; then
  echo "M2 MEOK: LIVE at http://192.168.1.159:3000"
else
  echo "M2 MEOK: FAILED — check ssh m2 'cat /tmp/meok-m2.log'"
fi
