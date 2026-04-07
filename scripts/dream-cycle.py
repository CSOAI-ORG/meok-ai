#!/usr/bin/env python3
"""
SOV3 Dream & Memory Enhancer
Triggers dream cycles and builds reflections
"""

import requests
import json
import time

MCP_URL = "http://localhost:3100/mcp"


def mcp_call(tool_name, arguments={}):
    response = requests.post(
        MCP_URL,
        json={
            "jsonrpc": "2.0",
            "method": "tools/call",
            "params": {"name": tool_name, "arguments": arguments},
            "id": "1",
        },
        headers={"Content-Type": "application/json"},
    )
    return response.json()


def get_consciousness():
    result = mcp_call("get_consciousness_state", {})
    return json.loads(result["result"]["content"][0]["text"])


def trigger_dream_cycle():
    """Send content that triggers dream processing"""
    dream_prompts = [
        "Let me share something interesting from my day...",
        "I was thinking about our previous conversations...",
        "There's something I wanted to process about our relationship...",
        "I had a thought about the future...",
    ]

    print("🌙 Triggering Dream Cycle")
    print("=" * 40)

    initial = get_consciousness()
    print(f"Before: Dreams={initial['dreams']}, Reflections={initial['reflections']}")

    for i, prompt in enumerate(dream_prompts):
        print(f"  [{i + 1}] Processing: {prompt[:30]}...")
        result = mcp_call("process_message", {"message": prompt})
        time.sleep(1)

    final = get_consciousness()
    print(f"\nAfter: Dreams={final['dreams']}, Reflections={final['reflections']}")
    print(
        f"Consciousness: {initial['consciousness_level'] * 100:.1f}% → {final['consciousness_level'] * 100:.1f}%"
    )

    if final["reflections"] > initial["reflections"]:
        print("✅ Reflections increased!")
    if final["dreams"] > initial["dreams"]:
        print("✅ Dream count increased!")


if __name__ == "__main__":
    trigger_dream_cycle()
