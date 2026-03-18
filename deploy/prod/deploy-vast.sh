#!/bin/bash
set -euo pipefail

# ═══════════════════════════════════════════════════════════
# MEOK.ai — Vast.ai GPU 24/7 Deployment Script
# Deploys sovereign AI OS on rented GPU instances
# ═══════════════════════════════════════════════════════════

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

log() { echo -e "${GREEN}[MEOK]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

# ─── Phase 1: Pre-flight checks ───────────────────────────
preflight() {
    log "Pre-flight checks..."

    command -v docker >/dev/null 2>&1 || error "Docker not installed"
    command -v docker-compose >/dev/null 2>&1 || command -v "docker compose" >/dev/null 2>&1 || error "Docker Compose not installed"

    if [ ! -f "$SCRIPT_DIR/.env.prod" ]; then
        error ".env.prod not found. Copy .env.prod.template and fill in values."
    fi

    # Check GPU
    if command -v nvidia-smi >/dev/null 2>&1; then
        GPU_INFO=$(nvidia-smi --query-gpu=name,memory.total --format=csv,noheader 2>/dev/null || echo "none")
        log "GPU detected: $GPU_INFO"
    else
        warn "No GPU detected — running in CPU mode"
    fi

    log "Pre-flight passed"
}

# ─── Phase 2: Build & push images ─────────────────────────
build_images() {
    log "Building Docker images..."

    cd "$PROJECT_ROOT"

    # Build MCP server image
    docker build -t meok/sovereign:latest -f Dockerfile .
    log "MCP server image built"

    # Build dashboard image
    docker build -t meok/dashboard:latest -f ui/Dockerfile ui/
    log "Dashboard image built"

    # Push to registry if DOCKER_REGISTRY is set
    if [ -n "${DOCKER_REGISTRY:-}" ]; then
        log "Pushing to $DOCKER_REGISTRY..."
        docker tag meok/sovereign:latest "$DOCKER_REGISTRY/meok/sovereign:latest"
        docker tag meok/dashboard:latest "$DOCKER_REGISTRY/meok/dashboard:latest"
        docker push "$DOCKER_REGISTRY/meok/sovereign:latest"
        docker push "$DOCKER_REGISTRY/meok/dashboard:latest"
        log "Images pushed"
    fi
}

# ─── Phase 3: Deploy stack ─────────────────────────────────
deploy_stack() {
    log "Deploying MEOK stack..."

    cd "$SCRIPT_DIR"

    # Copy init.sql from project
    cp "$PROJECT_ROOT/db/init.sql" ./init.sql

    # Load env
    set -a
    source .env.prod
    set +a

    # Deploy
    docker compose -f docker-compose.gpu.yml --env-file .env.prod up -d

    log "Stack deployed. Waiting for health..."

    # Wait for MCP server
    for i in $(seq 1 60); do
        if curl -sf http://localhost:${MEOK_MCP_PORT:-3100}/health >/dev/null 2>&1; then
            log "MCP server healthy!"
            break
        fi
        if [ $i -eq 60 ]; then
            error "MCP server failed to start after 60s"
        fi
        sleep 1
    done
}

# ─── Phase 4: Post-deploy verification ────────────────────
verify() {
    log "Running post-deploy verification..."

    HEALTH=$(curl -sf http://localhost:${MEOK_MCP_PORT:-3100}/health)
    VERSION=$(echo "$HEALTH" | python3 -c "import json,sys; print(json.load(sys.stdin)['version'])" 2>/dev/null || echo "unknown")
    STATUS=$(echo "$HEALTH" | python3 -c "import json,sys; print(json.load(sys.stdin)['status'])" 2>/dev/null || echo "unknown")

    log "Version: $VERSION | Status: $STATUS"

    # Check all containers
    echo ""
    docker compose -f docker-compose.gpu.yml ps
    echo ""

    log "Dashboard:  http://localhost:${MEOK_DASHBOARD_PORT:-3000}"
    log "MCP API:    http://localhost:${MEOK_MCP_PORT:-3100}"
    log "Health:     http://localhost:${MEOK_MCP_PORT:-3100}/health"
}

# ─── Phase 5: Setup auto-restart cron ─────────────────────
setup_watchdog() {
    log "Setting up watchdog cron..."

    WATCHDOG_SCRIPT="$SCRIPT_DIR/watchdog.sh"
    cat > "$WATCHDOG_SCRIPT" << 'WATCHDOG'
#!/bin/bash
# MEOK Watchdog — restarts stack if MCP server is unhealthy
DEPLOY_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if ! curl -sf http://localhost:3100/health >/dev/null 2>&1; then
    echo "[$(date)] MEOK unhealthy — restarting..." >> "$DEPLOY_DIR/watchdog.log"
    cd "$DEPLOY_DIR"
    docker compose -f docker-compose.gpu.yml --env-file .env.prod restart meok
fi
WATCHDOG
    chmod +x "$WATCHDOG_SCRIPT"

    # Add to crontab (every 5 minutes)
    CRON_LINE="*/5 * * * * $WATCHDOG_SCRIPT"
    (crontab -l 2>/dev/null | grep -v "watchdog.sh"; echo "$CRON_LINE") | crontab -

    log "Watchdog installed (checks every 5 minutes)"
}

# ─── Main ──────────────────────────────────────────────────
main() {
    echo -e "${CYAN}"
    echo "  ╔══════════════════════════════════════════╗"
    echo "  ║     MEOK.ai — Sovereign AI Deployment    ║"
    echo "  ║         24/7 GPU Instance Setup           ║"
    echo "  ╚══════════════════════════════════════════╝"
    echo -e "${NC}"

    case "${1:-deploy}" in
        preflight)  preflight ;;
        build)      preflight && build_images ;;
        deploy)     preflight && build_images && deploy_stack && verify && setup_watchdog ;;
        verify)     verify ;;
        watchdog)   setup_watchdog ;;
        logs)       docker compose -f "$SCRIPT_DIR/docker-compose.gpu.yml" logs -f --tail=100 ;;
        stop)       docker compose -f "$SCRIPT_DIR/docker-compose.gpu.yml" down ;;
        restart)    docker compose -f "$SCRIPT_DIR/docker-compose.gpu.yml" --env-file "$SCRIPT_DIR/.env.prod" restart ;;
        *)          echo "Usage: $0 {preflight|build|deploy|verify|watchdog|logs|stop|restart}" ;;
    esac
}

main "$@"
