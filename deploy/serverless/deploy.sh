#!/bin/bash
set -euo pipefail

# ═══════════════════════════════════════════════════════════
# MEOK.ai — Vast.ai Serverless Deploy Script
# Builds, pushes, and configures endpoint z0ltwqdk
# Budget: $0.25/hr ($180/mo)
# ═══════════════════════════════════════════════════════════

CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log() { echo -e "${GREEN}[MEOK]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

# Configuration
ENDPOINT_NAME="z0ltwqdk"
ENDPOINT_ID="${VAST_ENDPOINT_ID:-14360}"
DOCKER_IMAGE="${DOCKER_IMAGE:-csoai/meok-sovereign:latest}"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

echo -e "${CYAN}"
echo "  ╔══════════════════════════════════════════════╗"
echo "  ║  MEOK.ai → Vast.ai Serverless Deployment    ║"
echo "  ║  Endpoint: ${ENDPOINT_NAME} (ID: ${ENDPOINT_ID})           ║"
echo "  ║  Image: ${DOCKER_IMAGE}              ║"
echo "  ║  Budget: \$0.25/hr (\$180/mo)                 ║"
echo "  ╚══════════════════════════════════════════════╝"
echo -e "${NC}"

# ─── Build ───────────────────────────────────────────────
build() {
    log "Building serverless Docker image..."
    cd "$PROJECT_ROOT"

    docker build \
        -t "$DOCKER_IMAGE" \
        -f deploy/serverless/Dockerfile.serverless \
        .

    log "Image built: $DOCKER_IMAGE"
    docker images "$DOCKER_IMAGE" --format "Size: {{.Size}}"
}

# ─── Push ────────────────────────────────────────────────
push() {
    log "Pushing to Docker Hub..."

    # Check Docker Hub login
    if ! docker info 2>/dev/null | grep -q "Username"; then
        warn "Not logged in to Docker Hub. Run: docker login"
        return 1
    fi

    docker push "$DOCKER_IMAGE"
    log "Pushed: $DOCKER_IMAGE"
}

# ─── Configure endpoint ─────────────────────────────────
configure() {
    log "Configuring Vast.ai endpoint..."

    # Check vastai CLI
    if ! python3 -m vastai --help >/dev/null 2>&1; then
        error "vastai CLI not available. Install: pip install vastai"
    fi

    # Update endpoint scaling for budget
    log "Updating endpoint scaling..."
    python3 -m vastai update endpoint --id "$ENDPOINT_ID" \
        --cold_workers 1 \
        --max_workers 3 \
        --target_util 0.9 \
        --cold_mult 2

    log "Endpoint updated. Now create template + workergroup:"
    echo ""
    echo "  1. Go to https://cloud.vast.ai/templates/"
    echo "  2. Create new template:"
    echo "     - Name: meok-sovereign"
    echo "     - Image: $DOCKER_IMAGE"
    echo "     - Exposed ports: 3100"
    echo "     - Disk: 50GB"
    echo "     - Launch mode: Docker Entrypoint"
    echo "     - Environment vars:"
    echo "       MEOK_AUTH__REQUIRED=true"
    echo "       MEOK_JWT_SECRET=$(openssl rand -hex 32)"
    echo "       OPENAI_API_KEY=<your-key>"
    echo ""
    echo "  3. Note the template hash, then run:"
    echo "     python3 -m vastai create workergroup \\"
    echo "       --template_hash <HASH> \\"
    echo "       --endpoint_name $ENDPOINT_NAME \\"
    echo "       --gpu_ram 16 \\"
    echo "       --test_workers 1"
}

# ─── Verify ──────────────────────────────────────────────
verify() {
    VAST_URL="https://${ENDPOINT_NAME}.endpoint.vast.ai"

    log "Checking endpoint health..."

    RESPONSE=$(curl -sf "$VAST_URL/health" \
        -H "Authorization: Bearer ${VAST_API_KEY:-}" 2>/dev/null || echo "unreachable")

    if echo "$RESPONSE" | python3 -c "import json,sys; d=json.load(sys.stdin); assert d['status']=='healthy'" 2>/dev/null; then
        log "Endpoint is HEALTHY"
        echo "$RESPONSE" | python3 -m json.tool
    else
        warn "Endpoint not reachable. Workers may be starting (cold start ~60s)."
        log "Check: https://cloud.vast.ai/serverless/"

        # Try vastai logs
        if python3 -m vastai --help >/dev/null 2>&1; then
            log "Recent logs:"
            python3 -m vastai get endpt-logs "$ENDPOINT_NAME" 2>/dev/null | tail -20 || true
        fi
    fi
}

# ─── Cost analysis ───────────────────────────────────────
cost() {
    echo ""
    echo "  Cost Analysis (budget: \$0.25/hr = \$180/mo)"
    echo "  ┌──────────────────┬──────────┬────────────┬────────────┐"
    echo "  │ GPU              │ \$/hr     │ \$/month    │ Budget left│"
    echo "  ├──────────────────┼──────────┼────────────┼────────────┤"
    echo "  │ RTX 5060 Ti 16GB │ \$0.070   │ \$50/mo     │ \$130/mo    │"
    echo "  │ RTX 5070 Ti 16GB │ \$0.109   │ \$78/mo     │ \$102/mo    │"
    echo "  │ RTX 4070 Ti 12GB │ \$0.150   │ \$108/mo    │ \$72/mo     │"
    echo "  │ RTX 4090 24GB    │ \$0.200   │ \$144/mo    │ \$36/mo     │"
    echo "  └──────────────────┴──────────┴────────────┴────────────┘"
    echo ""
    echo "  Recommended: 1x RTX 5060 Ti @ \$0.070/hr = \$50/mo"
    echo "  Leaves \$130/mo for burst (up to 3 workers during peaks)"
    echo ""
}

# ─── Main ────────────────────────────────────────────────
case "${1:-all}" in
    build)     build ;;
    push)      push ;;
    configure) configure ;;
    verify)    verify ;;
    cost)      cost ;;
    all)       build && push && configure && cost ;;
    *)         echo "Usage: $0 {build|push|configure|verify|cost|all}" ;;
esac
