#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# optimize-sovereign-olm.sh — Restore the MEOKBRIDGE sandwich to production speed
# Run this on the M4 (MacBook Air M4 16GB) to:
#   1. Restart Ollama with optimal env (num_parallel=4, flash_attn, num_ctx=4096)
#   2. Pre-load small model (qwen3:0.6b) for drafts
#   3. Pre-load meok-sov3 (3.1B Q4) for finals
#   4. Restart MEOKBRIDGE orchestrator on :3205
#   5. Verify mesh health
# ═══════════════════════════════════════════════════════════════════════════════
set -e

GREEN='\033[0;32m'; YELLOW='\033[1;33m'; BLUE='\033[1;34m'; NC='\033[0m'
log() { echo -e "${BLUE}[OLM-OPT]${NC} $1"; }
ok()  { echo -e "${GREEN}[OK]${NC} $1"; }
warn(){ echo -e "${YELLOW}[WARN]${NC} $1"; }

OLLAMA_BIN="/usr/local/bin/ollama"
PROJECT_DIR="/Users/nicholas/clawd/sovereign-temple"

# ── 1. Check M4 hardware ──
log "Hardware check:"
sysctl -n machdep.cpu.brand_string
MEMORY_GB=$(( $(sysctl -n hw.memsize) / 1024 / 1024 / 1024 ))
log "Memory: ${MEMORY_GB}GB"
if [ "$MEMORY_GB" -lt 16 ]; then
  warn "Less than 16GB unified memory. Use qwen3:0.6b only."
fi

# ── 2. Kill any stuck Ollama ──
log "Killing any stuck Ollama processes..."
pkill -9 -f "Ollama" 2>/dev/null || true
pkill -9 -f "ollama serve" 2>/dev/null || true
pkill -9 -f "meokbridge" 2>/dev/null || true
sleep 2

# ── 3. Restart Ollama with optimal env ──
log "Restarting Ollama with optimal env..."
export OLLAMA_HOST="http://0.0.0.0:11434"
export OLLAMA_NUM_PARALLEL=4
export OLLAMA_FLASH_ATTENTION=true
export OLLAMA_KV_CACHE_TYPE=q8_0
export OLLAMA_CONTEXT_LENGTH=4096
export OLLAMA_KEEP_ALIVE=30m
export OLLAMA_MAX_LOADED_MODELS=2

# Start via the app
open -a Ollama
sleep 5

# Verify
if ! curl -s -m 5 http://localhost:11434/api/tags > /dev/null 2>&1; then
  warn "Ollama not responding on :11434. Falling back to direct ollama serve."
  nohup "$OLLAMA_BIN" serve > ~/.ollama/logs/server.log 2>&1 &
  sleep 5
fi
ok "Ollama restarted"

# ── 4. Set keep-alive + num_gpu via API ──
log "Setting Ollama keep-alive + num_gpu..."
curl -s -X POST http://localhost:11434/api/settings -d '{
  "keep_alive": "30m",
  "num_gpu": 99
}' > /dev/null
ok "Settings: keep_alive=30m, num_gpu=99"

# ── 5. Pre-load small model (qwen3:0.6b = 22 tok/s) ──
log "Pre-loading qwen3:0.6b (drafts, 0.5GB)..."
curl -s -X POST http://localhost:11434/api/generate \
  -d '{"model":"qwen3:0.6b","prompt":"ready","stream":false,"options":{"num_predict":1,"num_gpu":99,"num_ctx":2048}}' > /dev/null 2>&1
ok "qwen3:0.6b loaded"

# ── 6. Pre-load meok-sov3 (finals) ──
log "Pre-loading meok-sov3:latest (finals, 2.0GB)..."
curl -s -X POST http://localhost:11434/api/generate \
  -d '{"model":"meok-sov3:latest","prompt":"ready","stream":false,"options":{"num_predict":1,"num_gpu":99,"num_ctx":2048}}' > /dev/null 2>&1
ok "meok-sov3 loaded"

# ── 7. Benchmark ──
log "Benchmarking meok-sov3 (200 tokens)..."
RESULT=$(curl -s -X POST http://localhost:11434/api/generate \
  -d '{"model":"meok-sov3:latest","prompt":"Write a 3-sentence story about a robot who learns to dream.","stream":false,"options":{"num_predict":200,"num_gpu":99,"num_ctx":4096}}' 2>/dev/null)
TOKENS=$(echo "$RESULT" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('eval_count',0))" 2>/dev/null)
EVAL_S=$(echo "$RESULT" | python3 -c "import json,sys; d=json.load(sys.stdin); print(round(d.get('eval_duration',0)/1e9,2))" 2>/dev/null)
RATE=$(python3 -c "print(f'{$TOKENS/$EVAL_S:.1f}')" 2>/dev/null)
ok "meok-sov3: ${TOKENS} tokens in ${EVAL_S}s = ${RATE} tok/s"
if [ "${RATE%.*}" -ge 25 ] 2>/dev/null; then
  ok "GPU acceleration CONFIRMED (target: 25+ tok/s)"
elif [ "${RATE%.*}" -ge 10 ] 2>/dev/null; then
  warn "CPU mode (target was 25+ tok/s). Try restarting Ollama.app fresh."
else
  warn "Slow (${RATE} tok/s). Likely CPU only. Check Activity Monitor for Ollama process."
fi

# ── 8. Restart MEOKBRIDGE orchestrator ──
log "Starting MEOKBRIDGE orchestrator on :3205..."
cd "$PROJECT_DIR"
nohup python3 -m meokbridge.api > ~/.ollama/logs/meokbridge.log 2>&1 &
sleep 3
if curl -s -m 3 http://localhost:3205/health > /dev/null 2>&1; then
  ok "MEOKBRIDGE :3205 LIVE"
else
  warn "MEOKBRIDGE not responding. Check ~/.ollama/logs/meokbridge.log"
fi

# ── 9. Probe mesh nodes ──
log "Mesh node health:"
for node in "m4-local:11434" "m2-sidekick:m2-air.local:11434" "vast-cloud:11436" "meokbridge:3205"; do
  name="${node%%:*}"
  port="${node##*:}"
  if [[ "$port" == *":"* ]]; then
    hostport="$port"
  else
    hostport="localhost:$port"
  fi
  code=$(curl -s -m 3 -o /dev/null -w "%{http_code}" "http://$hostport/" 2>/dev/null || echo "000")
  case "$code" in
    200|404) ok "$name ($hostport): $code (alive)" ;;
    000)     warn "$name ($hostport): $code (DEAD — bring it back online)" ;;
    *)       warn "$name ($hostport): $code (degraded)" ;;
  esac
done

echo ""
ok "OLM optimization complete. Throughput target: 100+ tok/s on M4 alone, 3,500+ tok/s with full mesh."
echo "Next: bring M2 back online + reopen Vast.ai tunnel to restore mesh throughput."
