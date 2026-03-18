#!/bin/bash
# MEOK Startup Script — starts server and registers team
# Used by launchd and can be run manually

CLAWD="/Users/nicholas/clawd"
LOG="/tmp/meok_server.log"
PIDFILE="/tmp/meok_server.pid"

# Use Homebrew python3 if available, fall back to system
PYTHON3=/opt/homebrew/bin/python3
[ -x "$PYTHON3" ] || PYTHON3=$(which python3 2>/dev/null || echo /usr/bin/python3)

export PYTHONPATH="$CLAWD"
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"

echo "[$(date)] Starting MEOK MCP server (python: $PYTHON3)..." >> "$LOG"

# Kill any existing instance
if [ -f "$PIDFILE" ]; then
    OLD_PID=$(cat "$PIDFILE")
    kill "$OLD_PID" 2>/dev/null
    sleep 1
fi

# Start MEOK server
cd "$CLAWD"
"$PYTHON3" -m meok.mcp.server >> "$LOG" 2>&1 &
echo $! > "$PIDFILE"
echo "[$(date)] MEOK PID: $(cat $PIDFILE)" >> "$LOG"

# Wait for server to be ready
for i in $(seq 1 15); do
    sleep 2
    if curl -sf http://localhost:3100/health > /dev/null 2>&1; then
        echo "[$(date)] MEOK healthy — registering team..." >> "$LOG"
        "$PYTHON3" "$CLAWD/meok/team/register_team.py" >> "$LOG" 2>&1
        echo "[$(date)] Team registration complete" >> "$LOG"
        break
    fi
    echo "[$(date)] Waiting for MEOK... attempt $i" >> "$LOG"
done
