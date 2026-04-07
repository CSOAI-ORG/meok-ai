#!/bin/bash
# MEOK Complete Monitoring Dashboard - Live updating

echo "🐉 MEOK LIVE MONITOR - Press Ctrl+C to stop"
echo "============================================"
echo ""

while true; do
    clear
    echo "🐉 MEOK LIVE MONITOR - $(date '+%H:%M:%S')"
    echo "============================================"
    echo ""
    
    # SOV3
    echo "🧠 SOV3:"
    cs=$(curl -s -X POST http://localhost:3100/mcp -H "Content-Type: application/json" \
        -d '{"jsonrpc":"2.0","method":"tools/call","params":{"name":"get_consciousness_state","arguments":{}},"id":"mon"}' 2>/dev/null)
    if echo "$cs" | jq -e '.result' >/dev/null 2>&1; then
        level=$(echo "$cs" | jq -r '.result.content[0].text' | jq -r '.consciousness_level')
        mode=$(echo "$cs" | jq -r '.result.content[0].text' | jq -r '.consciousness_mode')
        emotion=$(echo "$cs" | jq -r '.result.content[0].text' | jq -r '.emotional.primary_emotion')
        stability=$(echo "$cs" | jq -r '.result.content[0].text' | jq -r '.emotional_summary.emotional_stability')
        printf "   Consciousness: %.1f%% | Mode: %s | Emotion: %s | Stability: %.1f%%\n" \
            $(echo "$level * 100" | bc) "$mode" "$emotion" $(echo "$stability * 100" | bc)
    else
        echo "   ❌ SOV3 not responding"
    fi
    
    echo ""
    echo "📊 Database:"
    db_stats=$(docker exec sovereign-postgres psql -U sovereign -d sovereign_memory -t -c "SELECT COUNT(*) FROM agents; SELECT COUNT(*) FROM memory_episodes;" 2>/dev/null)
    agents=$(echo "$db_stats" | head -1 | tr -d ' ')
    episodes=$(echo "$db_stats" | tail -1 | tr -d ' ')
    echo "   Agents: ${agents:-?} | Memories: ${episodes:-?}"
    
    echo ""
    echo "🗃️ Cache:"
    hits=$(docker exec sovereign-redis redis-cli info stats 2>/dev/null | grep keyspace_hits | cut -d: -f2 | tr -d ' ')
    misses=$(docker exec sovereign-redis redis-cli info stats 2>/dev/null | grep keyspace_misses | cut -d: -f2 | tr -d ' ')
    total=$((hits + misses))
    if [ "$total" -gt 0 ]; then
        ratio=$((hits * 100 / total))
        echo "   Hit ratio: ${ratio}% ($hits hits, $misses misses)"
    else
        echo "   No cache data"
    fi
    
    echo ""
    echo "🤖 Ollama:"
    model_count=$(curl -s http://localhost:11434/api/tags 2>/dev/null | jq '.models | length' 2>/dev/null || echo "?")
    echo "   Models loaded: $model_count"
    
    echo ""
    echo "⚡ Response Times:"
    mcp_time=$(curl -s -w '%{time_total}' -o /dev/null -X POST http://localhost:3100/mcp \
        -H "Content-Type: application/json" \
        -d '{"jsonrpc":"2.0","method":"tools/call","params":{"name":"get_consciousness_state","arguments":{}},"id":"rt"}' 2>/dev/null)
    echo "   MCP: ${mcp_time}s"
    
    echo ""
    echo "📱 Services:"
    for svc in "3000:MEOK" "3100:MCP" "11434:Ollama" "6379:Redis" "5432:Postgres"; do
        port=$(echo "$svc" | cut -d: -f1)
        name=$(echo "$svc" | cut -d: -f2)
        if nc -z localhost "$port" 2>/dev/null; then
            echo -n "   ✅ $name "
        else
            echo -n "   ❌ $name "
        fi
    done
    echo ""
    
    echo ""
    echo "Press Ctrl+C to stop..."
    sleep 5
done