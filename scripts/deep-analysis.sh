#!/bin/bash
# Deep Performance Analysis & More Optimizations

echo "🔍 Deep Performance Analysis"
echo "=============================="
echo ""

# 1. Check slow queries
echo "📊 Slow Query Analysis..."
docker exec sovereign-postgres psql -U sovereign -d sovereign_memory -c "
SELECT query, calls, mean_time, total_time 
FROM pg_stat_statements 
WHERE query LIKE '%memory_episodes%' 
ORDER BY mean_time DESC 
LIMIT 5;
" 2>&1 || echo "  pg_stat_statements not enabled"

echo ""
echo "🔄 Connection Pool Status..."
docker exec sovereign-postgres psql -U sovereign -d sovereign_memory -c "
SELECT count(*) as active, state FROM pg_stat_activity 
WHERE datname='sovereign_memory' GROUP BY state;
" 2>&1

echo ""
echo "🧠 Memory Cache Hit Ratio..."
docker exec sovereign-postgres psql -U sovereign -d sovereign_memory -c "
SELECT 
  sum(heap_blks_read) as reads,
  sum(heap_blks_hit) as hits,
  round(sum(heap_blks_hit)::numeric / nullif(sum(heap_blks_hit)+sum(heap_blks_read), 0) * 100, 2) as ratio
FROM pg_statio_user_tables;
" 2>&1

echo ""
echo "🤖 Ollama Model Load Times..."
for model in qwen2.5:7b llama3.2:3b; do
    start=$(date +%s%N)
    curl -s -X POST http://localhost:11434/api/generate -d "{\"model\":\"$model\",\"prompt\":\"hello\",\"stream\":false}" > /dev/null 2>&1
    end=$(date +%s%N)
    echo "  $model: $(( (end - start) / 1000000 ))ms"
done

echo ""
echo "📡 Network Latency Check..."
echo "  localhost→MCP: $(curl -s -w '%{time_total}' -o /dev/null http://localhost:3100/health 2>/dev/null || echo 'fail')"
echo "  localhost→Redis: $(docker exec sovereign-redis redis-cli ping 2>/dev/null | grep PONG | wc -l)"

echo ""
echo "=============================="
echo "Analysis complete"