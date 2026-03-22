#!/bin/bash
set -euo pipefail
# ═══════════════════════════════════════════════════════════
# MEOK.ai — Hetzner CX32 Setup Script
# Cost: €5.77/mo vs $1.082/hr Vast.ai GPU (saves $772/mo)
# Requires: hcloud CLI (brew install hcloud) + API token
# ═══════════════════════════════════════════════════════════

CYAN='\033[0;36m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
log()  { echo -e "${GREEN}[MEOK]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
die()  { echo -e "${RED}[ERR]${NC} $1"; exit 1; }

SERVER_NAME="meok-prod"
SERVER_TYPE="cx32"          # 4 vCPU, 8GB RAM, 80GB SSD — €5.77/mo
IMAGE="ubuntu-24.04"
LOCATION="hel1"             # Helsinki (EU, GDPR)
SSH_KEY_NAME="meok-deploy"

echo -e "${CYAN}"
cat << 'BANNER'
  ╔══════════════════════════════════════════╗
  ║  MEOK.ai → Hetzner Migration            ║
  ║  CX32: 4vCPU 8GB RAM 80GB — €5.77/mo   ║
  ║  From: $1.082/hr GPU (~$780/mo)         ║
  ║  Saving: ~$772/month                    ║
  ╚══════════════════════════════════════════╝
BANNER
echo -e "${NC}"

# ─── Pre-flight ────────────────────────────────────────────
command -v hcloud >/dev/null || die "Install hcloud CLI: brew install hcloud"
[[ -n "${HCLOUD_TOKEN:-}" ]] || die "Set HCLOUD_TOKEN env var (Hetzner console → API Tokens)"

# ─── 1. Upload SSH key ─────────────────────────────────────
log "Uploading SSH key..."
hcloud ssh-key create \
  --name "$SSH_KEY_NAME" \
  --public-key-from-file ~/.ssh/id_ed25519.pub \
  2>/dev/null || log "SSH key already exists"

# ─── 2. Create server ──────────────────────────────────────
log "Creating CX32 server in Helsinki..."
SERVER_IP=$(hcloud server create \
  --name "$SERVER_NAME" \
  --type "$SERVER_TYPE" \
  --image "$IMAGE" \
  --location "$LOCATION" \
  --ssh-key "$SSH_KEY_NAME" \
  --format json | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['server']['public_net']['ipv4']['ip'])")

log "Server created: $SERVER_IP"
log "Waiting 30s for boot..."
sleep 30

# ─── 3. Bootstrap server ──────────────────────────────────
log "Bootstrapping server..."
ssh -i ~/.ssh/id_ed25519 -o StrictHostKeyChecking=no root@$SERVER_IP bash << 'REMOTE'
set -e

# System
apt-get update -q
apt-get install -y -q python3.11 python3.11-venv python3.11-dev \
  git curl wget build-essential postgresql postgresql-contrib \
  nginx certbot python3-certbot-nginx htop

# Python env
python3.11 -m venv /app/venv
source /app/venv/bin/activate

# Postgres setup
systemctl start postgresql
systemctl enable postgresql
sudo -u postgres psql -c "CREATE USER meok WITH PASSWORD 'meok_prod_2026' CREATEDB;"
sudo -u postgres psql -c "CREATE DATABASE meokdb OWNER meok;"

# App dir
mkdir -p /app/meok /app/logs /app/meok/neural/models

echo "Bootstrap complete"
REMOTE

# ─── 4. Rsync app code ─────────────────────────────────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

log "Syncing app code to $SERVER_IP..."
rsync -az --exclude='.git' --exclude='__pycache__' \
  --exclude='*.pyc' --exclude='.env' --exclude='node_modules' \
  -e "ssh -i ~/.ssh/id_ed25519 -o StrictHostKeyChecking=no" \
  "$APP_ROOT/" root@$SERVER_IP:/app/meok/

# ─── 5. Install deps ──────────────────────────────────────
log "Installing Python dependencies..."
ssh -i ~/.ssh/id_ed25519 root@$SERVER_IP bash << 'REMOTE'
source /app/venv/bin/activate
pip install --quiet --upgrade pip
pip install --quiet -r /app/meok/requirements.txt
echo "Dependencies installed"
REMOTE

# ─── 6. Write .env ────────────────────────────────────────
log "Writing production .env..."
cat > /tmp/meok.env << EOF
MEOK_ENV=production
MEOK_PORT=8000
DATABASE_URL=postgresql+asyncpg://meok:meok_prod_2026@localhost/meokdb
PYTHONPATH=/app
LOG_LEVEL=info
EOF
scp -i ~/.ssh/id_ed25519 /tmp/meok.env root@$SERVER_IP:/app/meok/.env

# ─── 7. Systemd service ────────────────────────────────────
log "Setting up systemd service..."
cat > /tmp/meok.service << EOF
[Unit]
Description=MEOK.ai Backend
After=network.target postgresql.service

[Service]
User=root
WorkingDirectory=/app
Environment=PYTHONPATH=/app
EnvironmentFile=/app/meok/.env
ExecStart=/app/venv/bin/uvicorn meok.mcp.server:app --host 0.0.0.0 --port 8000 --workers 2
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF
scp -i ~/.ssh/id_ed25519 /tmp/meok.service root@$SERVER_IP:/etc/systemd/system/meok.service

ssh -i ~/.ssh/id_ed25519 root@$SERVER_IP bash << 'REMOTE'
systemctl daemon-reload
systemctl enable meok
systemctl start meok
sleep 5
systemctl status meok --no-pager
REMOTE

# ─── 8. Nginx reverse proxy ────────────────────────────────
log "Configuring Nginx..."
cat > /tmp/meok.nginx << 'EOF'
server {
    listen 80;
    server_name api.meok.ai;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_read_timeout 120s;
        proxy_connect_timeout 10s;
    }
}
EOF
scp -i ~/.ssh/id_ed25519 /tmp/meok.nginx root@$SERVER_IP:/etc/nginx/sites-available/meok
ssh -i ~/.ssh/id_ed25519 root@$SERVER_IP bash << 'REMOTE'
ln -sf /etc/nginx/sites-available/meok /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
REMOTE

# ─── 9. Health check ──────────────────────────────────────
log "Health check..."
sleep 5
HEALTH=$(curl -s --max-time 10 "http://$SERVER_IP:8000/health" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('status','unknown'))" 2>/dev/null || echo "failed")

if [[ "$HEALTH" == "healthy" ]]; then
  echo ""
  echo -e "${GREEN}✅ MEOK backend running on Hetzner!${NC}"
  echo ""
  echo "  New IP:    $SERVER_IP"
  echo "  Backend:   http://$SERVER_IP:8000"
  echo "  Health:    http://$SERVER_IP:8000/health"
  echo "  Cost:      €5.77/month"
  echo ""
  echo -e "${YELLOW}Next steps:${NC}"
  echo "  1. Update .env.local: MEOK_BACKEND_URL=http://$SERVER_IP:8000"
  echo "  2. Add DNS: api.meok.ai → $SERVER_IP"
  echo "  3. Run: certbot --nginx -d api.meok.ai"
  echo "  4. STOP the Vast.ai instance #33199588 (saves \$1.082/hr)"
  echo ""
else
  warn "Health check returned: $HEALTH — check logs: ssh root@$SERVER_IP journalctl -u meok -n 50"
fi
