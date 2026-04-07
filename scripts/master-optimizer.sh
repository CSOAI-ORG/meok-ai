#!/bin/bash
# MEOK Master Optimizer - Run all optimizations at once

set -e

echo "🐉 MEOK MASTER OPTIMIZER"
echo "========================="
echo ""

# 1. Database optimizations
echo "📊 Running database optimizations..."
docker exec sovereign-postgres psql -U sovereign -d sovereign_memory << 'EOF' 2>/dev/null || true

-- Optimize memory table
CREATE INDEX IF NOT EXISTS idx_memory_content_fts ON memory_episodes USING gin(to_tsvector('english', content));
CREATE INDEX IF NOT EXISTS idx_memory_metadata ON memory_episodes((metadata->>'consciousness')) WHERE metadata ? 'consciousness';

-- Analyze for query planner
ANALYZE agents;
ANALYZE memory_episodes;
ANALYZE agent_tasks;

-- Autovacuum tuning
ALTER TABLE agents SET (autovacuum_vacuum_threshold = 1000);
ALTER TABLE memory_episodes SET (autovacuum_vacuum_threshold = 5000);
EOF
echo "   ✅ Database optimized"

# 2. Redis optimizations
echo ""
echo "🗃️ Optimizing Redis..."
docker exec sovereign-redis redis-cli CONFIG SET maxmemory-policy allkeys-lru 2>/dev/null || true
docker exec sovereign-redis redis-cli CONFIG SET timeout 300 2>/dev/null || true
echo "   ✅ Redis configured"

# 3. Pre-load Ollama models
echo ""
echo "🤖 Pre-loading Ollama models..."
for model in qwen2.5:7b llama3.2:3b; do
    curl -s -X POST http://localhost:11434/api/generate \
        -d "{\"model\":\"$model\",\"prompt\":\"\",\"stream\":false}" > /dev/null 2>&1 &
done
echo "   ✅ Models loading in background"

# 4. Verify all services
echo ""
echo "🔍 Verifying services..."
services=(
    "3100:MCP Server"
    "3000:MEOK UI"
    "11434:Ollama"
    "6379:Redis"
    "5432:PostgreSQL"
    "8080:Weaviate"
    "7474:Neo4j"
)

all_ok=true
for svc in "${services[@]}"; do
    port="${svc%%:*}"
    name="${svc##*:}"
    if nc -z localhost "$port" 2>/dev/null; then
        echo "   ✅ $name"
    else
        echo "   ❌ $name"
        all_ok=false
    fi
done

echo ""
echo "========================="
if [ "$all_ok" = true ]; then
    echo "🎉 All services operational!"
else
    echo "⚠️  Some services need attention"
fi
echo ""
echo "Run ./audit-stack.sh for full status"
echo "Run ./performance-dashboard.py for metrics"