#!/usr/bin/env python3
"""
MEOK E2E Test Runner - Working endpoints only
"""

import urllib.request
import json
import time
import sys

BASE_MEOK = "http://localhost:3200"
BASE_SOV3 = "http://localhost:3101"


def http_get(url: str):
    try:
        req = urllib.request.Request(url, headers={"Accept": "application/json"})
        resp = urllib.request.urlopen(req, timeout=10)
        return resp.status, json.loads(resp.read().decode())
    except Exception as e:
        return 0, {"error": str(e)}


def http_post(url: str, data: dict):
    try:
        body = json.dumps(data).encode()
        req = urllib.request.Request(
            url,
            data=body,
            headers={"Accept": "application/json", "Content-Type": "application/json"},
        )
        resp = urllib.request.urlopen(req, timeout=10)
        return resp.status, json.loads(resp.read().decode())
    except Exception as e:
        return 0, {"error": str(e)}


def mcp_call(tool: str, args: dict):
    return http_post(
        f"{BASE_SOV3}/mcp",
        {
            "jsonrpc": "2.0",
            "method": "tools/call",
            "params": {"name": tool, "arguments": args},
            "id": 1,
        },
    )


def test(name: str, fn):
    t0 = time.time()
    try:
        result = fn()
        ms = (time.time() - t0) * 1000
        if result:
            print(f"✅ {name} ({ms:.0f}ms)")
            return True
        print(f"❌ {name}")
        return False
    except Exception as e:
        ms = (time.time() - t0) * 1000
        print(f"❌ {name}: {e}")
        return False


print("=== MEOK API (port 3200) ===\n")
results = []

# Test /api/health
code, data = http_get(f"{BASE_MEOK}/api/health")
results.append(
    test("GET /api/health", lambda: code == 200 and data.get("status") == "operational")
)

print("\n=== SOV3 (port 3101) ===\n")

# Test /health
code, data = http_get(f"{BASE_SOV3}/health")
results.append(
    test("GET /health", lambda: code == 200 and data.get("status") == "healthy")
)

# Test consciousness
results.append(
    test(
        "MCP: get_consciousness_state",
        lambda: mcp_call("get_consciousness_state", {})[0] == 200,
    )
)

# Test care validation
results.append(
    test(
        "MCP: validate_care",
        lambda: mcp_call("validate_care", {"text": "I care about you"})[0] == 200,
    )
)

# Test partnership detection
results.append(
    test(
        "MCP: detect_partnership_opportunities",
        lambda: (
            mcp_call("detect_partnership_opportunities", {"text": "partner"})[0] == 200
        ),
    )
)

# Test care safety
results.append(
    test(
        "MCP: assess_care_safety (safe)",
        lambda: mcp_call("assess_care_safety", {"text": "be kind"})[0] == 200,
    )
)

# Test care metrics
results.append(
    test("MCP: get_care_metrics", lambda: mcp_call("get_care_metrics", {})[0] == 200)
)

# Test emotional VAD
results.append(
    test("MCP: get_emotional_vad", lambda: mcp_call("get_emotional_vad", {})[0] == 200)
)

print("\n=== UI (port 3000) ===\n")

# Test UI
try:
    resp = urllib.request.urlopen("http://localhost:3000/", timeout=5)
    results.append(test("GET / (UI)", lambda: resp.status == 200))
except Exception as e:
    print(f"❌ GET / (UI): {e}")
    results.append(False)

print("\n=== Results ===")
passed = sum(results)
total = len(results)
print(f"{passed}/{total} tests passed")

if passed == total:
    print("\n🎉 All systems operational!")
else:
    print(f"\n⚠️  {total - passed} tests failed")

sys.exit(0 if passed == total else 1)
