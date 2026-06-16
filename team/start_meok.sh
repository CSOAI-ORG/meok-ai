#!/bin/bash
# MEOK Startup Script — starts server and registers team
# Used by launchd and can be run manually

CLAWD="/Users/nicholas/clawd"
LOG="/tmp/meok_server.log"
PIDFILE="/tmp/meok_server.pid"

# Use the sovereign-temple .venv python (3.11.15 with fastapi, weaviate-client, mcp, etc.)
# The system Python 3.9 in CommandLineTools does NOT have fastapi — ModuleNotFoundError.
PYTHON3="/Users/nicholas/clawd/sovereign-temple/.venv/bin/python3"
[ -x "$PYTHON3" ] || PYTHON3=/opt/homebrew/Cellar/python@3.11/3.11.15/Frameworks/Python.framework/Versions/3.11/Resources/Python.app/Contents/MacOS/Python
[ -x "$PYTHON3" ] || PYTHON3=/Library/Developer/CommandLineTools/usr/bin/python3
[ -x "$PYTHON3" ] || PYTHON3=/usr/bin/python3

export PYTHONPATH="$CLAWD"
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"

echo "[$(date)] Starting MEOK MCP server (python: $PYTHON3)..." >> "$LOG"

export MEOK_MCP__PORT=3102

# Kill any existing instance
if [ -f "$PIDFILE" ]; then
    OLD_PID=$(cat "$PIDFILE")
    kill "$OLD_PID" 2>/dev/null
    sleep 1
fi

# Start MEOK MCP server
cd "$CLAWD"
nohup "$PYTHON3" -m meok.mcp.server >> "$LOG" 2>&1 &
echo $! > "$PIDFILE"
echo "[$(date)] MEOK MCP PID: $(cat $PIDFILE)" >> "$LOG"

# Wait for server to be ready
for i in $(seq 1 15); do
    sleep 2
    if curl -sf http://localhost:3102/health > /dev/null 2>&1; then
        echo "[$(date)] MEOK MCP healthy on 3102 — registering team..." >> "$LOG"
        "$PYTHON3" "$CLAWD/meok/team/register_team.py" >> "$LOG" 2>&1
        echo "[$(date)] Team registration complete" >> "$LOG"
        break
    fi
    echo "[$(date)] Waiting for MEOK MCP... attempt $i" >> "$LOG"
done
