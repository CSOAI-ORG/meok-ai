#!/bin/bash
# MEOK Server Watchdog — auto-restart if health check fails
# Runs in background, checks every 30s, restarts after 3 consecutive failures
# Usage: nohup bash /app/meok/scripts/watchdog.sh > /tmp/meok_logs/watchdog.log 2>&1 &

HEALTH_URL="http://localhost:3100/health"
LOG_DIR="/tmp/meok_logs"
FAIL_COUNT=0
MAX_FAILS=3
CHECK_INTERVAL=30

mkdir -p "$LOG_DIR"

log() {
    echo "[$(date -Iseconds)] [WATCHDOG] $1" | tee -a "$LOG_DIR/watchdog.log"
}

restart_server() {
    log "RESTARTING — killing existing process..."
    pkill -f "meok.mcp.server" 2>/dev/null || true
    sleep 3
    log "Starting meok.mcp.server..."
    nohup python3 -m meok.mcp.server >> "$LOG_DIR/server.log" 2>&1 &
    local PID=$!
    log "Started PID=$PID"
    echo $PID > "$LOG_DIR/server.pid"
    sleep 10  # give server time to boot
    FAIL_COUNT=0
}

log "Watchdog starting. Health URL: $HEALTH_URL, interval: ${CHECK_INTERVAL}s, max fails: $MAX_FAILS"

# Write own PID
echo $$ > "$LOG_DIR/watchdog.pid"

while true; do
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 5 --max-time 10 "$HEALTH_URL" 2>/dev/null)

    if [ "$HTTP_CODE" = "200" ]; then
        if [ "$FAIL_COUNT" -gt 0 ]; then
            log "Recovered. HTTP 200. Resetting fail counter."
        fi
        FAIL_COUNT=0
    else
        FAIL_COUNT=$((FAIL_COUNT + 1))
        log "FAIL $FAIL_COUNT/$MAX_FAILS — HTTP $HTTP_CODE from $HEALTH_URL"

        if [ "$FAIL_COUNT" -ge "$MAX_FAILS" ]; then
            log "Threshold reached. Triggering restart."
            restart_server
        fi
    fi

    sleep "$CHECK_INTERVAL"
done
