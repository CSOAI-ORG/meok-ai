#!/bin/bash
# MEOK + SOV3 Health Monitor
# Run via cron: */5 * * * * /path/to/health-monitor.sh

MEOK_URL="http://localhost:3000"
SOV3_URL="http://localhost:3100"
LOG="/tmp/meok-health.log"

check() {
  local name=$1 url=$2
  local code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "$url" 2>/dev/null)
  if [ "$code" = "200" ]; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') ✅ $name OK ($code)" >> "$LOG"
  else
    echo "$(date '+%Y-%m-%d %H:%M:%S') ❌ $name DOWN ($code)" >> "$LOG"
    # Could add notification here (e.g., osascript for macOS notification)
    osascript -e "display notification \"$name is DOWN (HTTP $code)\" with title \"MEOK Health Alert\"" 2>/dev/null
  fi
}

check "MEOK UI" "$MEOK_URL/api/health"
check "SOV3" "$SOV3_URL/health"
check "SOV3 DB" "$SOV3_URL/health/db"

# Trim log to last 1000 lines
tail -1000 "$LOG" > "$LOG.tmp" && mv "$LOG.tmp" "$LOG"
