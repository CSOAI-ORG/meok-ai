#!/bin/bash
set -euo pipefail

# ═══════════════════════════════════════════════════════════
# MEOK.ai — Vast.ai Serverless Deployment
# Push to existing endpoint z0ltwqdk
# Budget: $0.25/hr ($180/mo)
# ═══════════════════════════════════════════════════════════

CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[MEOK]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }

# Configuration
ENDPOINT_ID="${VAST_ENDPOINT_ID:-14360}"
DOCKER_REGISTRY="${DOCKER_REGISTRY:-docker.io}"
DOCKER_IMAGE="${DOCKER_IMAGE:-meokai/sovereign:latest}"
DASHBOARD_IMAGE="${DASHBOARD_IMAGE:-meokai/dashboard:latest}"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

echo -e "${CYAN}"
echo "  ╔══════════════════════════════════════════════╗"
echo "  ║  MEOK.ai → Vast.ai Serverless Deployment    ║"
echo "  ║  Endpoint: z0ltwqdk (ID: ${ENDPOINT_ID})           ║"
echo "  ║  Budget: \$0.25/hr (\$180/mo)                 ║"
echo "  ╚══════════════════════════════════════════════╝"
echo -e "${NC}"

# ─── Step 1: Build production images ──────────────────────
build() {
    log "Building production Docker images..."
    cd "$PROJECT_ROOT"

    # MCP Server
    docker build -t "$DOCKER_IMAGE" -f Dockerfile .
    log "✅ MCP server image: $DOCKER_IMAGE"

    # Dashboard
    docker build -t "$DASHBOARD_IMAGE" -f ui/Dockerfile ui/
    log "✅ Dashboard image: $DASHBOARD_IMAGE"
}

# ─── Step 2: Push to Docker Hub ───────────────────────────
push() {
    log "Pushing images to registry..."

    docker push "$DOCKER_IMAGE"
    log "✅ Pushed $DOCKER_IMAGE"

    docker push "$DASHBOARD_IMAGE"
    log "✅ Pushed $DASHBOARD_IMAGE"
}

# ─── Step 3: Configure Vast.ai endpoint ──────────────────
configure() {
    log "Configuring Vast.ai endpoint..."

    # Check if vastai CLI is available
    if ! python3 -m vastai --help >/dev/null 2>&1; then
        warn "vastai CLI not in PATH. Install with: pip install vastai"
        warn "Then set API key: python3 -m vastai set api-key YOUR_KEY"
        return 1
    fi

    # Update endpoint to use our image
    # Vast.ai serverless uses a Docker template
    log "Endpoint z0ltwqdk (ID: $ENDPOINT_ID)"
    log ""
    log "Manual steps at https://cloud.vast.ai/serverless/"
    log "1. Select endpoint z0ltwqdk"
    log "2. Edit template → Custom Docker Image"
    log "3. Image: $DOCKER_IMAGE"
    log "4. Exposed ports: 3100 (MCP), 3000 (Dashboard)"
    log "5. Environment variables:"
    log "   MEOK_DATABASE__POSTGRES_DSN=postgresql://meok:PASSWORD@localhost:5432/meok"
    log "   MEOK_MCP__PORT=3100"
    log "   MEOK_AUTH__REQUIRED=true"
    log "   MEOK_AUTH__JWT_SECRET=YOUR_SECRET"
    log "   MEOK_SELF_LEARNING=true"
    log "   OPENAI_API_KEY=sk-..."
    log "6. GPU filter: VRAM >= 16GB, Price <= \$0.25/hr"
    log "7. Min workers: 1, Max workers: 3"
    log "   (1 worker @ \$0.07-0.11/hr = \$50-78/mo, leaves budget for burst)"
    log "8. Deploy!"
}

# ─── Step 4: Verify deployment ────────────────────────────
verify() {
    VAST_URL="${VAST_ENDPOINT_URL:-https://api.vast.ai/serverless/v1/z0ltwqdk}"

    log "Checking Vast.ai endpoint health..."

    RESPONSE=$(curl -sf "$VAST_URL/health" \
        -H "Authorization: Bearer ${VAST_API_KEY:-}" 2>/dev/null || echo "unreachable")

    if echo "$RESPONSE" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['status'])" 2>/dev/null | grep -q "healthy"; then
        log "✅ Vast.ai endpoint is HEALTHY"
        echo "$RESPONSE" | python3 -m json.tool
    else
        warn "Endpoint not reachable yet. Workers may be spinning up (cold start)."
        log "Check at: https://cloud.vast.ai/serverless/"
    fi
}

# ─── Step 5: Cost monitoring ──────────────────────────────
cost() {
    log "Cost analysis for $0.25/hr budget:"
    echo ""
    echo "  GPU Options within budget:"
    echo "  ┌──────────────────┬──────────┬────────────┬────────────┐"
    echo "  │ GPU              │ $/hr     │ $/month    │ Budget left│"
    echo "  ├──────────────────┼──────────┼────────────┼────────────┤"
    echo "  │ RTX 5060 Ti 16GB │ \$0.070   │ \$50/mo     │ \$130/mo    │"
    echo "  │ RTX 5070 Ti 16GB │ \$0.109   │ \$78/mo     │ \$102/mo    │"
    echo "  │ RTX 4070 Ti 12GB │ \$0.150   │ \$108/mo    │ \$72/mo     │"
    echo "  │ RTX 4090 24GB    │ \$0.200   │ \$144/mo    │ \$36/mo     │"
    echo "  │ 2x RTX 5060 Ti   │ \$0.140   │ \$100/mo    │ \$80/mo     │"
    echo "  └──────────────────┴──────────┴────────────┴────────────┘"
    echo ""
    echo "  Recommended: 1x RTX 5060 Ti dedicated (\$50) + burst budget (\$130)"
    echo "  Total 24/7 cost: ~\$50-78/month"
}

# ─── Main ──────────────────────────────────────────────────
case "${1:-all}" in
    build)     build ;;
    push)      push ;;
    configure) configure ;;
    verify)    verify ;;
    cost)      cost ;;
    all)       build && push && configure && cost ;;
    *)         echo "Usage: $0 {build|push|configure|verify|cost|all}" ;;
esac
