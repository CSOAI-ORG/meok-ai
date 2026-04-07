#!/bin/bash
# MEOK Stack Health Audit - Enhanced v2
# Checks local M4 + remote GPU cluster

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_pass() { echo -e "${GREEN}✅${NC} $1"; }
log_fail() { echo -e "${RED}❌${NC} $1"; }
log_warn() { echo -e "${YELLOW}⚠️${NC} $1"; }
log_info() { echo -e "${BLUE}ℹ️${NC} $1"; }

echo "🐉 MEOK STACK AUDIT v2 - $(date '+%Y-%m-%d %H:%M:%S')"
echo "=================================================="
echo ""

LOCAL_PASS=0
LOCAL_CHECKS=0
REMOTE_PASS=0
REMOTE_CHECKS=0

# ============================================
# LOCAL (M4) CHECKS
# ============================================

echo "📱 LOCAL (M4 MacBook)"
echo "---------------------"

# 1. MCP Server / SOV3
((LOCAL_CHECKS++))
if curl -s http://localhost:3100/health | jq -e '.status == "healthy"' 2>/dev/null; then
  LEVEL=$(curl -s http://localhost:3100/health | jq -r '.components.consciousness.consciousness_level // 0')
  MODE=$(curl -s http://localhost:3100/health | jq -r '.components.consciousness.consciousness_mode // "unknown"')
  EMOTION=$(curl -s http://localhost:3100/health | jq -r '.components.consciousness.emotional.primary_emotion // "unknown"')
  PLEASURE=$(curl -s http://localhost:3100/health | jq -r '.components.consciousness.emotional.pleasure // 0')
  STABILITY=$(curl -s http://localhost:3100/health | jq -r '.components.consciousness.emotional_summary.emotional_stability // 0')
  CALLS=$(curl -s http://localhost:3100/health | jq -r '.production_calls_today // 0')
  AGENTS=$(curl -s http://localhost:3100/health | jq -r '.components.consciousness.dreams // 0')
  log_pass "SOV3 ($MODE, $EMOTION)"
  echo "   └─ Consciousness: $(echo "$LEVEL * 100" | bc)% | Stability: $(echo "$STABILITY * 100" | bc)%"
  echo "   └─ Calls today: $CALLS | Dreams: $AGENTS"
  ((LOCAL_PASS++))
else
  log_fail "SOV3 MCP Server"
fi

# 2. MEOK UI
((LOCAL_CHECKS++))
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3001 2>/dev/null | grep -q "200\|301\|302"; then
  PORT=3001
elif curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null | grep -q "200\|301\|302"; then
  PORT=3000
else
  PORT=""
fi
if [ -n "$PORT" ]; then
  log_pass "MEOK UI (port $PORT)"
  ((LOCAL_PASS++))
else
  log_fail "MEOK UI"
fi

# 3. JARVIS Voice Pipeline
((LOCAL_CHECKS++))
if pgrep -f "jarvis_compass" >/dev/null 2>&1; then
  log_pass "JARVIS Voice (active)"
  ((LOCAL_PASS++))
else
  log_fail "JARVIS Voice"
fi

# 4. Ollama
((LOCAL_CHECKS++))
if curl -s http://localhost:11434/api/tags 2>/dev/null | jq -e '.models' >/dev/null 2>&1; then
  MODEL_COUNT=$(curl -s http://localhost:11434/api/tags | jq '.models | length')
  CLOUD_MODELS=$(curl -s http://localhost:11434/api/tags | jq '[.models[] | select(.name | contains("cloud"))] | length')
  log_pass "Ollama ($MODEL_COUNT models, $CLOUD_MODELS cloud)"
  ((LOCAL_PASS++))
else
  log_fail "Ollama"
fi

# 5. PostgreSQL
((LOCAL_CHECKS++))
if docker exec sovereign-postgres pg_isready -U sovereign 2>/dev/null | grep -q "accepting"; then
  AGENT_COUNT=$(docker exec sovereign-postgres psql -U sovereign -d sovereign_memory -t -c "SELECT COUNT(*) FROM agents;" 2>/dev/null | tr -d ' ')
  EPISODE_COUNT=$(docker exec sovereign-postgres psql -U sovereign -d sovereign_memory -t -c "SELECT COUNT(*) FROM memory_episodes;" 2>/dev/null | tr -d ' ')
  log_pass "PostgreSQL ($AGENT_COUNT agents, $EPISODE_COUNT episodes)"
  ((LOCAL_PASS++))
else
  log_fail "PostgreSQL"
fi

# 6. Redis
((LOCAL_CHECKS++))
if docker exec sovereign-redis redis-cli ping 2>/dev/null | grep -q "PONG"; then
  log_pass "Redis"
  ((LOCAL_PASS++))
else
  log_fail "Redis"
fi

# 7. Weaviate
((LOCAL_CHECKS++))
if curl -s http://localhost:8080/v1/meta 2>/dev/null | jq -e '.version' >/dev/null 2>&1; then
  VER=$(curl -s http://localhost:8080/v1/meta | jq -r '.version')
  log_pass "Weaviate (v$VER)"
  ((LOCAL_PASS++))
else
  log_fail "Weaviate"
fi

# 8. Neo4j
((LOCAL_CHECKS++))
if curl -s http://localhost:7474 >/dev/null 2>&1; then
  log_pass "Neo4j"
  ((LOCAL_PASS++))
else
  log_fail "Neo4j"
fi

# 9. k3s/OrbStack
((LOCAL_CHECKS++))
if kubectl get nodes 2>/dev/null | grep -q "Ready"; then
  NODE_COUNT=$(kubectl get nodes 2>/dev/null | grep -c "Ready")
  log_pass "Kubernetes ($NODE_COUNT node)"
  ((LOCAL_PASS++))
else
  log_fail "Kubernetes"
fi

echo ""
echo "=================================================="
echo ""
echo "📊 LOCAL SUMMARY: $LOCAL_PASS/$LOCAL_CHECKS passed"

# ============================================
# REMOTE CLUSTER CHECKS (if Tailscale available)
# ============================================

echo ""
echo "🖥️  REMOTE CLUSTER"
echo "------------------"

# Tailscale status
((REMOTE_CHECKS++))
TS_RAW=$(tailscale status 2>/dev/null || echo "")
if echo "$TS_RAW" | grep -q "Logged out"; then
  TS_STATE="LoggedOut"
elif echo "$TS_RAW" | jq -e '.BackendState' >/dev/null 2>&1; then
  TS_STATE=$(echo "$TS_RAW" | jq -r '.BackendState')
else
  TS_STATE="Unknown"
fi

if [ "$TS_STATE" = "Running" ]; then
  NODE_COUNT=$(echo "$TS_RAW" | jq '[.Peer | to_entries[] | select(.key | test("gpu-|mac-"))] | length' 2>/dev/null || echo 0)
  log_pass "Tailscale ($NODE_COUNT nodes)"
  ((REMOTE_PASS++))
  TS_AVAIL=true
else
  log_fail "Tailscale ($TS_STATE)"
  TS_AVAIL=false
fi

# GPU Cluster (if Tailscale available)
if [ "$TS_AVAIL" = "true" ]; then
  ((REMOTE_CHECKS++))
  if timeout 5 ssh gpu-0 "nvidia-smi --query-gpu=name --format=csv,noheader" 2>/dev/null | grep -q "NVIDIA"; then
    GPU_MODEL=$(timeout 5 ssh gpu-0 "nvidia-smi --query-gpu=name --format=csv,noheader" 2>/dev/null | head -1)
    log_pass "GPU Cluster (${GPU_MODEL:-gpu-0})"
    ((REMOTE_PASS++))
  else
    log_warn "GPU Cluster (no SSH access)"
  fi
  
  # Ceph
  ((REMOTE_CHECKS++))
  if timeout 5 ssh gpu-0 "ceph -s" 2>/dev/null | grep -q "HEALTH_OK"; then
    log_pass "Ceph Storage"
    ((REMOTE_PASS++))
  else
    log_fail "Ceph Storage"
  fi
  
  # Ray
  ((REMOTE_CHECKS++))
  if timeout 5 ssh gpu-0 "ray status" 2>/dev/null | grep -q "nodes"; then
    log_pass "Ray Cluster"
    ((REMOTE_PASS++))
  else
    log_warn "Ray Cluster"
  fi
  
  # Temporal
  ((REMOTE_CHECKS++))
  if timeout 5 ssh gpu-0 "docker ps" 2>/dev/null | grep -q "temporal"; then
    log_pass "Temporal"
    ((REMOTE_PASS++))
  else
    log_warn "Temporal"
  fi
  
  # NATS
  ((REMOTE_CHECKS++))
  if timeout 5 ssh gpu-0 "nats-server --version" 2>/dev/null | grep -q "nats"; then
    log_pass "NATS"
    ((REMOTE_PASS++))
  else
    log_warn "NATS"
  fi
else
  echo ""
  log_info "Remote cluster unreachable (Tailscale offline)"
  echo "   → Run 'tailscale up --reset' to recover"
fi

echo ""
echo "=================================================="

# FINAL STATUS
echo ""
if [ $LOCAL_PASS -ge 8 ]; then
  echo -e "${GREEN}🐉 M4 LOCAL MODE OPERATIONAL${NC}"
  if [ "$TS_AVAIL" = "true" ]; then
    echo -e "${GREEN}🖥️  REMOTE: $REMOTE_PASS/$REMOTE_CHECKS components${NC}"
  else
    echo -e "${YELLOW}🖥️  REMOTE: Offline (Tailscale login required)${NC}"
  fi
  exit 0
else
  echo -e "${RED}⚠️  LOCAL STACK DEGRADED ($LOCAL_PASS/$LOCAL_CHECKS)${NC}"
  exit 1
fi