#!/bin/bash
# MEOK Team Registration Script
# Run once to register all agents with the MEOK coordination hub
# Usage: ./register_team.sh [MEOK_URL]

MEOK="${1:-http://localhost:3100}"
MCP_URL="$MEOK/mcp"

echo "🤖 MEOK Team Registration"
echo "   Endpoint: $MCP_URL"
echo ""

call_meok() {
    local tool="$1"
    local args="$2"
    curl -s "$MCP_URL" \
        -X POST \
        -H "Content-Type: application/json" \
        -d "{\"jsonrpc\":\"2.0\",\"method\":\"tools/call\",\"params\":{\"name\":\"$tool\",\"arguments\":$args},\"id\":1}" \
        | python3 -c "import sys,json; r=json.load(sys.stdin); c=r.get('result',{}).get('content',[]); print(c[0].get('text','{}') if c else r.get('error',{}))" 2>/dev/null
}

register() {
    local id="$1"
    local type="$2"
    local caps="$3"
    echo -n "  Registering $id ($type)... "
    result=$(call_meok "coord_register_agent" "{\"agent_id\":\"$id\",\"agent_type\":\"$type\",\"capabilities\":$caps}")
    echo "$result" | python3 -c "import sys,json; d=json.loads(sys.stdin.read()); print('✅' if d.get('registered') or d.get('status')=='registered' or 'success' in str(d).lower() else '⚠️  '+str(d))" 2>/dev/null || echo "📝 $result"
}

# Register all team members
register "jarvis-openclaw"   "openclaw-jarvis"   '["communication","web_search","browser","planning","monitoring"]'
register "sovereign-openclaw" "openclaw-sovereign" '["planning","analysis","monitoring","neural_inference","memory_operations"]'
register "meok-openclaw"     "openclaw-meok"     '["code_execution","analysis","neural_inference","memory_operations","creative"]'
register "claude-code"       "claude-code"       '["code_execution","analysis","planning","memory_operations","creative"]'
register "kimi-code"         "kimi-code"         '["code_execution","analysis","planning","memory_operations"]'
register "nemoclaw-gateway"  "nemoclaw"          '["security","code_execution","monitoring"]'

echo ""
echo "📊 Dashboard:"
call_meok "coord_get_dashboard" '{}' | python3 -c "
import sys, json
try:
    d = json.loads(sys.stdin.read())
    agents = d.get('agents', {})
    print(f'   Agents registered: {len(agents)}')
    for aid, a in agents.items():
        print(f'   • {aid} ({a.get(\"type\",\"?\")}): {a.get(\"status\",\"?\")}')
except: print(sys.stdin.read())
" 2>/dev/null

echo ""
echo "✅ Team registration complete!"
echo "   TEAM.md: /Users/nicholas/clawd/TEAM.md"
echo "   MEOK health: $MEOK/health"
