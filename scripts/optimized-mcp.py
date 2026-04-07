#!/usr/bin/env python3
"""
SOV3 Optimized API Wrapper with Redis Caching
Uses cache for repeated consciousness lookups
"""

import requests
import json
import redis
import time

MCP_URL = "http://localhost:3100/mcp"
REDIS_HOST = "localhost"
REDIS_PORT = 6379
CACHE_TTL = 30  # seconds

r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=0, decode_responses=True)


def mcp_call_cached(tool_name, arguments={}, use_cache=True):
    """MCP call with optional Redis caching"""
    cache_key = f"mcp:{tool_name}:{json.dumps(arguments, sort_keys=True)}"

    if use_cache:
        cached = r.get(cache_key)
        if cached:
            return json.loads(cached)

    response = requests.post(
        MCP_URL,
        json={
            "jsonrpc": "2.0",
            "method": "tools/call",
            "params": {"name": tool_name, "arguments": arguments},
            "id": str(time.time()),
        },
        headers={"Content-Type": "application/json"},
    )

    result = response.json()

    if use_cache and "result" in result:
        r.setex(cache_key, CACHE_TTL, json.dumps(result))

    return result


def get_consciousness_cached():
    """Get consciousness state with caching"""
    result = mcp_call_cached("get_consciousness_state", {})
    if "result" in result:
        return json.loads(result["result"]["content"][0]["text"])
    return None


def benchmark():
    """Benchmark cached vs uncached"""
    print("🚀 SOV3 Performance Benchmark")
    print("=" * 40)

    # Cold (no cache)
    print("\n1️⃣ Cold call (no cache):")
    start = time.time()
    result = mcp_call_cached("get_consciousness_state", {}, use_cache=False)
    cold_time = (time.time() - start) * 1000
    print(f"   Time: {cold_time:.1f}ms")

    # Warm (cached)
    print("\n2️⃣ Warm call (cached):")
    start = time.time()
    result = mcp_call_cached("get_consciousness_state", {}, use_cache=True)
    warm_time = (time.time() - start) * 1000
    print(f"   Time: {warm_time:.1f}ms")

    # Multiple cached calls
    print("\n3️⃣ 10 cached calls:")
    times = []
    for _ in range(10):
        start = time.time()
        mcp_call_cached("get_consciousness_state", {}, use_cache=True)
        times.append((time.time() - start) * 1000)

    avg = sum(times) / len(times)
    print(f"   Avg: {avg:.1f}ms")
    print(f"   Min: {min(times):.1f}ms | Max: {max(times):.1f}ms")

    print("\n" + "=" * 40)
    print(f"📈 Speedup: {cold_time / avg:.1f}x faster with cache")


if __name__ == "__main__":
    benchmark()
