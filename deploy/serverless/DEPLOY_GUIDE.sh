#!/bin/bash
# ═══════════════════════════════════════════════════════════
# MEOK.ai — Vast.ai Serverless Deploy (run when ready!)
# Image: csoai/meok-sovereign:latest (verified working)
# ═══════════════════════════════════════════════════════════

echo "
╔══════════════════════════════════════════════════════════╗
║  MEOK.ai → Vast.ai Serverless — Deploy Checklist       ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  DONE:                                                   ║
║  ✅ Docker image built: csoai/meok-sovereign:latest      ║
║  ✅ Image tested locally: health check passes            ║
║  ✅ PostgreSQL + MCP both start via supervisor           ║
║  ✅ Vast.ai template created (ID: 364149)                ║
║  ✅ Endpoint z0ltwqdk scaled: 1 min / 3 max workers     ║
║  ✅ Docker Hub repo: csoai/meok-sovereign (public)       ║
║                                                          ║
║  TODO:                                                   ║
║  ❌ Docker Hub push (needs your docker login)            ║
║  ❌ Create Vast.ai workergroup (after push)              ║
║                                                          ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  Step 1: docker login -u csoai                           ║
║  Step 2: docker push csoai/meok-sovereign:latest         ║
║  Step 3: Run the curl below to create workergroup        ║
║  Step 4: Wait ~60s, then verify health endpoint          ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
"

# Automated steps (run after docker login + push):
VAST_KEY=\$(cat ~/.vast_api_key)

echo "Creating Vast.ai workergroup..."
curl -s -X POST "https://console.vast.ai/api/v0/workergroups/" \\
  -H "Authorization: Bearer \$VAST_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "endpoint_name": "z0ltwqdk",
    "template_hash": "609b3bfea33d192412f8f947d478c20f",
    "gpu_ram": 16,
    "test_workers": 1
  }' | python3 -m json.tool

echo ""
echo "Waiting 60s for worker cold start..."
sleep 60

echo "Checking health..."
curl -sf "https://z0ltwqdk.endpoint.vast.ai/health" | python3 -m json.tool || echo "Not ready yet — check https://cloud.vast.ai/serverless/"
