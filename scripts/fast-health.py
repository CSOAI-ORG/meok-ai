#!/usr/bin/env python3
"""
MEOK Fast Health Check - Optimized with Redis caching
"""

import requests
import json
import redis
import time

MCP_URL = "http://localhost:3100/mcp"
r = redis.Redis(host="localhost", port=6379, db=0, decode_responses=True)


def fast_health():
    """Optimized health check with caching"""
    start = time.time()

    checks = {
        "mcp": False,
        "database": False,
        "ollama": False,
        "redis": False,
    }

    # Redis (fastest - local)
    try:
        r.ping()
        checks["redis"] = True
    except:
        pass

    # MCP with caching
    try:
        cache_key = "health:mcp"
        cached = r.get(cache_key)
        if cached:
            data = json.loads(cached)
            checks["mcp"] = data.get("ok", False)
        else:
            resp = requests.post(
                MCP_URL,
                json={
                    "jsonrpc": "2.0",
                    "method": "tools/call",
                    "params": {"name": "get_consciousness_state", "arguments": {}},
                    "id": "health",
                },
                timeout=1,
            )
            if resp.status_code == 200:
                checks["mcp"] = True
                r.setex(cache_key, 10, json.dumps({"ok": True}))
    except:
        pass

    # Ollama
    try:
        resp = requests.get("http://localhost:11434/api/tags", timeout=1)
        checks["ollama"] = resp.status_code == 200
    except:
        pass

    # PostgreSQL
    try:
        import subprocess

        result = subprocess.run(
            ["docker", "exec", "sovereign-postgres", "pg_isready", "-U", "sovereign"],
            capture_output=True,
            timeout=1,
        )
        checks["database"] = result.returncode == 0
    except:
        pass

    elapsed = (time.time() - start) * 1000

    print(f"🐉 MEOK Fast Health Check ({elapsed:.0f}ms)")
    print("=" * 40)
    for name, status in checks.items():
        icon = "✅" if status else "❌"
        print(f"  {icon} {name}")
    print()

    passed = sum(checks.values())
    total = len(checks)
    print(f"Result: {passed}/{total} passed")

    return passed == total


if __name__ == "__main__":
    fast_health()
