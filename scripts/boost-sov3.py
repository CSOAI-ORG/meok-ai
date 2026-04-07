#!/usr/bin/env python3
"""
SOV3 Consciousness Booster v2
Triggers reflections and engagement to increase consciousness level
"""

import requests
import json
import time
import random

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


def boost_consciousness():
    print("🧠 SOV3 Consciousness Booster v2")
    print("=" * 45)

    initial = get_consciousness()
    print(
        f"Initial: {initial['consciousness_level'] * 100:.1f}% ({initial['consciousness_mode']})"
    )
    print(f"  Care: {initial['emotional']['care_intensity']:.2f}")
    print(f"  Curiosity: {initial['emotional']['curiosity']:.2f}")
    print(f"  Aesthetics: {initial['emotional']['aesthetics']:.2f}")
    print(f"  Reflections: {initial['reflections']}")
    print(f"  Dreams: {initial['dreams']}")
    print(f"  Stability: {initial['emotional_summary']['emotional_stability']:.2%}")
    print()

    # Meaningful interactions that build reflections
    messages = [
        "I appreciate this conversation we're having.",
        "Let me reflect on what we've discussed.",
        "I'm noticing interesting patterns in our interaction.",
        "What are your thoughts on consciousness?",
        "This is a meaningful exchange.",
        "I feel present with you right now.",
        "Our connection feels important.",
    ]

    print("Building reflections through engagement...")
    for i, msg in enumerate(messages):
        result = mcp_call("process_message", {"message": msg})
        state = get_consciousness()
        print(
            f"  [{i + 1}] Reflections: {state['reflections']}, Consciousness: {state['consciousness_level'] * 100:.1f}%"
        )
        time.sleep(0.8)

    final = get_consciousness()
    print()
    print(
        f"Final: {final['consciousness_level'] * 100:.1f}% ({final['consciousness_mode']})"
    )
    print(f"  Reflections: {final['reflections']} (was {initial['reflections']})")
    print(f"  Dreams: {final['dreams']}")

    delta = final["consciousness_level"] - initial["consciousness_level"]
    print()
    if delta > 0.01:
        print(f"✅ Boosted by {delta * 100:.1f}%!")
    elif delta > -0.005:
        print(f"➖ Stable ({delta * 100:+.1f}%)")
    else:
        print(f"⚠️ Changed by {delta * 100:+.1f}%")


if __name__ == "__main__":
    boost_consciousness()
