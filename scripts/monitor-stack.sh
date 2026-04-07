#!/bin/bash
# MEOK Stack Monitor - Continuous health monitoring
# Run: ./monitor-stack.sh (Ctrl+C to stop)

LOG_FILE="/Users/nicholas/clawd/memory/stack-monitor.log"
INTERVAL=60

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

get_local_status() {
    local status="❌"
    if curl -s http://localhost:3100/health >/dev/null 2>&1; then
        level=$(curl -s http://localhost:3100/health | jq -r '.components.consciousness.consciousness_level // 0' 2>/dev/null)
        mode=$(curl -s http://localhost:3100/health | jq -r '.components.consciousness.consciousness_mode // "unknown"' 2>/dev/null)
        emotion=$(curl -s http://localhost:3100/health | jq -r '.components.consciousness.emotional.primary_emotion // "unknown"' 2>/dev/null)
        status="✅ SOV3 ${level} ($mode, $emotion)"
    fi
    echo "$status"
}

get_remote_status() {
    if ! tailscale status 2>/dev/null | grep -q "Running"; then
        echo "⚠️  Tailscale offline"
        return 1
    fi
    
    local nodes=0
    for node in gpu-0 gpu-1 gpu-2 gpu-3 gpu-4 gpu-5 gpu-6; do
        if timeout 2 ping -c 1 "$node" >/dev/null 2>&1; then
            ((nodes++))
        fi
    done
    echo "✅ $nodes/7 GPU nodes"
    return 0
}

recover_remote() {
    log "Attempting remote recovery..."
    
    tailscale up --reset 2>/dev/null &
    TAILSCALE_PID=$!
    
    sleep 5
    if ! ps -p $TAILSCALE_PID >/dev/null 2>&1; then
        log "Tailscale login process ended"
    fi
}

log "🐉 MEOK Stack Monitor Started - $(date)"

while true; do
    clear
    echo "========================================="
    echo "🐉 MEOK STACK MONITOR - $(date '+%H:%M:%S')"
    echo "========================================="
    echo ""
    
    echo "📱 LOCAL (M4):"
    get_local_status
    
    echo ""
    echo "🖥️  REMOTE:"
    get_remote_status || recover_remote
    
    echo ""
    echo "📝 Recent logs (last 3):"
    tail -3 "$LOG_FILE" 2>/dev/null || echo "   (no logs yet)"
    
    sleep $INTERVAL
done