#!/usr/bin/env python3
"""
MEOK Quick Health Check
Runs against local services to verify they're working
"""

import urllib.request
import json
import sys

BASE_MEOK = "http://localhost:3200"
BASE_SOV3 = "http://localhost:3101"
BASE_UI = "http://localhost:3000"


def check_json(url: str, name: str):
    try:
        resp = urllib.request.urlopen(url, timeout=5)
        data = json.loads(resp.read().decode())
        print(f"✅ {name}: {resp.status}")
        return True, data
    except Exception as e:
        print(f"❌ {name}: {e}")
        return False, None


def check_html(url: str, name: str):
    try:
        req = urllib.request.Request(url, headers={"Accept": "text/html"})
        resp = urllib.request.urlopen(req, timeout=5)
        if resp.status == 200:
            print(f"✅ {name}: {resp.status}")
            return True
    except Exception as e:
        pass
    # Try without Accept header
    try:
        resp = urllib.request.urlopen(url, timeout=5)
        if resp.status == 200:
            print(f"✅ {name}: {resp.status}")
            return True
    except Exception as e:
        pass
    print(f"❌ {name}: failed")
    return False


print("=== MEOK Health Check ===\n")

# Check MEOK API
ok, data = check_json(f"{BASE_MEOK}/api/health", "MEOK API /api/health")
if ok:
    print(f"   Status: {data.get('status')}")
    print(f"   Version: {data.get('version')}")
    print(f"   Nodes: {data.get('total_architecture_nodes')}")

print()

# Check SOV3
ok, data = check_json(f"{BASE_SOV3}/health", "SOV3 /health")
if ok:
    print(f"   Status: {data.get('status')}")
    print(f"   Version: {data.get('version')}")
    print(
        f"   Consciousness: {data.get('components', {}).get('consciousness', {}).get('consciousness_level', '?')}"
    )

print()

# Check UI
check_html(BASE_UI, "UI (dev)")

print()

# Check databases via Docker
import subprocess


def check_docker(name: str, container: str):
    try:
        result = subprocess.run(
            ["docker", "inspect", "-f", "{{.State.Running}}", container],
            capture_output=True,
            text=True,
            timeout=5,
        )
        if result.returncode == 0 and "true" in result.stdout.lower():
            print(f"✅ {name}: running")
            return True
    except:
        pass
    print(f"❌ {name}: not running")
    return False


print("=== Containers ===")
check_docker("PostgreSQL", "sovereign-postgres")
check_docker("Redis", "sovereign-redis")
check_docker("Weaviate", "sovereign-weaviate")
check_docker("Neo4j", "sovereign-neo4j")

print("\n=== All checks complete ===")
