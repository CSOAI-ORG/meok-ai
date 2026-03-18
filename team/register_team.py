"""
MEOK Team Registration — Python version
Registers all team agents with MEOK's coordination hub and records team formation memory.
Run: python3 meok/team/register_team.py
"""

import asyncio
import httpx
import json
import sys
from datetime import datetime

MEOK_URL = "http://localhost:3100/mcp"

TEAM = [
    {
        "agent_id": "jarvis-openclaw",
        "agent_type": "openclaw-jarvis",
        "capabilities": ["communication", "web_search", "browser", "planning", "monitoring"],
        "description": "JARVIS — conversational front-end, messaging, web UI, daily ops",
    },
    {
        "agent_id": "sovereign-openclaw",
        "agent_type": "openclaw-sovereign",
        "capabilities": ["planning", "analysis", "monitoring", "neural_inference", "memory_operations"],
        "description": "Sovereign — strategic reasoning, governance, council oversight",
    },
    {
        "agent_id": "meok-openclaw",
        "agent_type": "openclaw-meok",
        "capabilities": ["code_execution", "analysis", "neural_inference", "memory_operations", "creative"],
        "description": "Meok Dev — R&D, experimental features, MEOK development",
    },
    {
        "agent_id": "claude-code",
        "agent_type": "claude-code",
        "capabilities": ["code_execution", "analysis", "planning", "memory_operations", "creative"],
        "description": "Claude Code — precise code editing, architecture, debugging",
    },
    {
        "agent_id": "kimi-code",
        "agent_type": "kimi-code",
        "capabilities": ["code_execution", "analysis", "planning", "memory_operations"],
        "description": "Kimi Code — 128k context, long document analysis, large codebases",
    },
    {
        "agent_id": "nemoclaw-gateway",
        "agent_type": "nemoclaw",
        "capabilities": ["security", "code_execution", "monitoring"],
        "description": "NemoClaw — security gateway, sandboxed code execution",
    },
]


async def call_tool(client: httpx.AsyncClient, name: str, arguments: dict) -> dict:
    resp = await client.post(
        MEOK_URL,
        json={"jsonrpc": "2.0", "method": "tools/call", "params": {"name": name, "arguments": arguments}, "id": 1},
        timeout=10,
    )
    result = resp.json()
    if "result" in result:
        content = result["result"].get("content", [])
        if content:
            try:
                return json.loads(content[0]["text"])
            except Exception:
                return {"text": content[0]["text"]}
    return result.get("error", {"error": "unknown"})


async def main():
    print("🤖 MEOK Team Registration")
    print(f"   Endpoint: {MEOK_URL}")
    print()

    async with httpx.AsyncClient() as client:
        # Check MEOK health
        try:
            r = await client.get("http://localhost:3100/health", timeout=5)
            health = r.json()
            print(f"   MEOK status: {health.get('status', '?')} v{health.get('version', '?')}")
        except Exception as e:
            print(f"   ⚠️  MEOK not responding: {e}")
            print("   Start MEOK: cd /Users/nicholas/clawd && PYTHONPATH=/Users/nicholas/clawd python3 -m meok.mcp.server")
            sys.exit(1)

        print()

        # Register each agent
        registered = []
        for agent in TEAM:
            print(f"   Registering {agent['agent_id']} ({agent['agent_type']})...", end=" ", flush=True)
            result = await call_tool(client, "coord_register_agent", {
                "agent_id": agent["agent_id"],
                "agent_type": agent["agent_type"],
                "capabilities": agent["capabilities"],
            })
            if "error" in str(result).lower() and "success" not in str(result).lower():
                print(f"⚠️  {result}")
            else:
                print("✅")
                registered.append(agent["agent_id"])

        print()

        # Record team formation memory
        if registered:
            await call_tool(client, "record_memory", {
                "content": f"Team registration complete at {datetime.now().isoformat()}. "
                           f"Registered agents: {', '.join(registered)}. "
                           f"Architecture: MEOK as OS, Sovereign as AI brain, "
                           f"JARVIS/OpenClaw for comms, Claude Code for coding, "
                           f"Kimi Code for long-context, NemoClaw for security.",
                "source_agent": "meok-system",
                "memory_type": "decision",
                "care_weight": 0.8,
                "tags": ["team", "registration", "architecture"],
            })
            print("   💾 Team formation recorded in MEOK memory")

        # Show dashboard
        print()
        print("📊 Coordination Dashboard:")
        dashboard = await call_tool(client, "coord_get_dashboard", {})
        agents = dashboard.get("agents", {})
        print(f"   Total agents registered: {len(agents)}")
        for agent_id, agent_data in agents.items():
            status = agent_data.get("status", "?")
            agent_type = agent_data.get("type", "?")
            caps = ", ".join(agent_data.get("capabilities", [])[:3])
            print(f"   • {agent_id:<25} [{agent_type:<20}] {status} — {caps}")

        print()
        print("✅ Team registration complete!")
        print()
        print("Next steps:")
        print("  1. OpenClaw agents can now use MEOK via MCP (openclaw.json updated)")
        print("  2. Use coord_submit_task to delegate work across the team")
        print("  3. All agents share memory via record_memory/query_memories")
        print("  4. See full team guide: /Users/nicholas/clawd/TEAM.md")


if __name__ == "__main__":
    asyncio.run(main())
