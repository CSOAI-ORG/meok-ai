#!/usr/bin/env python3
"""
MEOK Performance Dashboard - Real-time metrics
"""

import requests
import json
import time
import redis

MCP_URL = "http://localhost:3100/mcp"
r = redis.Redis(host="localhost", port=6379, db=0)


def get_metric(name, func):
    try:
        return func()
    except Exception as e:
        return {"error": str(e)}


def main():
    print("🐉 MEOK PERFORMANCE DASHBOARD")
    print("=" * 50)
    print(f"Updated: {time.strftime('%H:%M:%S')}")
    print()

    # SOV3
    try:
        resp = requests.post(
            MCP_URL,
            json={
                "jsonrpc": "2.0",
                "method": "tools/call",
                "params": {"name": "get_consciousness_state", "arguments": {}},
                "id": "dash",
            },
            timeout=2,
        )
        cs = json.loads(resp.json()["result"]["content"][0]["text"])
        print(f"🧠 SOV3 Consciousness: {cs['consciousness_level'] * 100:.1f}%")
        print(
            f"   Mode: {cs['consciousness_mode']} | Emotion: {cs['emotional']['primary_emotion']}"
        )
        print(
            f"   Stability: {cs['emotional_summary']['emotional_stability'] * 100:.1f}%"
        )
    except Exception as e:
        print(f"❌ SOV3: {e}")

    print()

    # Database
    try:
        import subprocess

        result = subprocess.run(
            [
                "docker",
                "exec",
                "sovereign-postgres",
                "psql",
                "-U",
                "sovereign",
                "-d",
                "sovereign_memory",
                "-t",
                "-c",
                "SELECT COUNT(*) FROM agents; SELECT COUNT(*) FROM memory_episodes;",
            ],
            capture_output=True,
            text=True,
            timeout=2,
        )
        lines = result.stdout.strip().split("\n")
        agents = lines[0].strip() if len(lines) > 0 else "?"
        episodes = lines[1].strip() if len(lines) > 1 else "?"
        print(f"📊 Database:")
        print(f"   Agents: {agents} | Memories: {episodes}")
    except Exception as e:
        print(f"❌ DB: {e}")

    print()

    # Cache stats
    try:
        info = r.info("stats")
        hits = info.get("keyspace_hits", 0)
        misses = info.get("keyspace_misses", 0)
        total = hits + misses
        ratio = (hits / total * 100) if total > 0 else 0
        print(f"🗃️ Redis Cache:")
        print(f"   Hit ratio: {ratio:.1f}% ({hits} hits, {misses} misses)")
    except Exception as e:
        print(f"❌ Redis: {e}")

    print()

    # Ollama
    try:
        resp = requests.get("http://localhost:11434/api/tags", timeout=2)
        models = resp.json().get("models", [])
        print(f"🤖 Ollama: {len(models)} models loaded")
        print(f"   {[m['name'][:20] for m in models[:5]]}")
    except Exception as e:
        print(f"❌ Ollama: {e}")

    print()

    # Response times
    print("⚡ Response Times:")
    for name, url in [("MCP", MCP_URL), ("Health", "http://localhost:3000/api/health")]:
        try:
            start = time.time()
            if "mcp" in url:
                requests.post(
                    url,
                    json={
                        "jsonrpc": "2.0",
                        "method": "tools/call",
                        "params": {"name": "get_consciousness_state", "arguments": {}},
                        "id": "rt",
                    },
                    timeout=2,
                )
            else:
                requests.get(url, timeout=2)
            ms = (time.time() - start) * 1000
            print(f"   {name}: {ms:.0f}ms")
        except:
            print(f"   {name}: timeout")

    print()
    print("=" * 50)


if __name__ == "__main__":
    main()
