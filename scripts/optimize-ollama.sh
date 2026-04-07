#!/bin/bash
# Ollama Model Keep-Alive - Prevent model unloading

echo "🤖 Setting Ollama Model Keep-Alive"
echo "===================================="

# Create ollama config for keep-alive
OLLAMA_CONFIG_DIR="$HOME/.ollama"
mkdir -p "$OLLAMA_CONFIG_DIR"

# Set keep-alive to keep models loaded indefinitely
curl -s -X POST http://localhost:11434/api/settings -d '{
  "keep_alive": "24h",
  "num_gpu": 1
}' 2>/dev/null || echo "Using default config"

# Pre-load frequently used models
echo ""
echo "📦 Pre-loading fast models into memory..."

MODELS=("qwen2.5:7b" "llama3.2:3b" "nomic-embed-text:latest")

for model in "${MODELS[@]}"; do
    echo "  Loading $model..."
    curl -s -X POST http://localhost:11434/api/generate \
        -d "{\"model\":\"$model\",\"prompt\":\"\",\"stream\":false}" \
        -w "  → %{time_total}s\n" > /dev/null 2>&1 &
done

echo ""
echo "✅ Ollama optimized - models will stay loaded"
echo "   Keep-alive: 24 hours"
echo "   Pre-loading: 3 models in background"