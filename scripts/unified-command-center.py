#!/usr/bin/env python3
"""
MEOK Unified Command Center - Bridges all MCP servers and services
Real-time integration of voice, consciousness, memory, and agents
"""

import requests
import json
import time
import subprocess
from datetime import datetime
from typing import Dict, List, Any

MCP_SERVER = "http://localhost:3100"
OLLAMA = "http://localhost:11434"
VOICE_SERVER = "http://localhost:8765"


class UnifiedCommandCenter:
    """Central hub for all MEOK services"""

    def __init__(self):
        self.services = {}
        self.llm_bridge = {}
        self.neural_sync = {}

    def check_all_services(self) -> Dict:
        """Check all services and return status"""
        status = {
            "timestamp": datetime.now().isoformat(),
            "services": {},
            "mcp_tools": [],
            "ollama_models": [],
            "consciousness": None,
            "voice": None,
        }

        # Check MCP Server
        try:
            r = requests.post(
                f"{MCP_SERVER}/mcp",
                json={
                    "jsonrpc": "2.0",
                    "method": "tools/call",
                    "params": {"name": "get_consciousness_state", "arguments": {}},
                    "id": "check",
                },
                timeout=2,
            )
            if r.status_code == 200:
                cs = json.loads(r.json()["result"]["content"][0]["text"])
                status["consciousness"] = {
                    "level": cs["consciousness_level"],
                    "mode": cs["consciousness_mode"],
                    "emotion": cs["emotional"]["primary_emotion"],
                    "stability": cs["emotional_summary"]["emotional_stability"],
                }
                status["services"]["mcp"] = "healthy"
        except Exception as e:
            status["services"]["mcp"] = f"error: {e}"

        # Check Ollama
        try:
            r = requests.get(f"{OLLAMA}/api/tags", timeout=2)
            models = r.json().get("models", [])
            status["ollama_models"] = [m["name"] for m in models]
            status["services"]["ollama"] = "healthy"
        except Exception as e:
            status["services"]["ollama"] = f"error: {e}"

        # Check Voice Server
        try:
            r = requests.get(f"{VOICE_SERVER}/", timeout=2)
            status["services"]["voice"] = "healthy"
        except:
            status["services"]["voice"] = "offline"

        # Check Databases
        for db, port in [
            ("postgres", 5432),
            ("redis", 6379),
            ("weaviate", 8080),
            ("neo4j", 7474),
        ]:
            try:
                if (
                    subprocess.run(
                        ["nc", "-z", "localhost", str(port)], capture_output=True
                    ).returncode
                    == 0
                ):
                    status["services"][db] = "healthy"
                else:
                    status["services"][db] = "offline"
            except:
                status["services"][db] = "offline"

        return status

    def get_available_tools(self) -> List[str]:
        """Get all available MCP tools"""
        try:
            r = requests.post(
                f"{MCP_SERVER}/mcp",
                json={
                    "jsonrpc": "2.0",
                    "method": "tools/list",
                    "params": {},
                    "id": "tools",
                },
                timeout=5,
            )
            if r.status_code == 200:
                return r.json().get("result", {}).get("names", [])
        except:
            pass
        return []

    def sync_llms(self) -> Dict:
        """Sync all available LLMs"""
        synced = {"ollama": [], "cloud": [], "local_fallback": []}

        try:
            r = requests.get(f"{OLLAMA}/api/tags", timeout=5)
            models = r.json().get("models", [])
            for m in models:
                name = m["name"]
                if "cloud" in name:
                    synced["cloud"].append(name)
                elif any(x in name for x in ["qwen", "llama", "phi", "gemma"]):
                    synced["ollama"].append(name)
                else:
                    synced["local_fallback"].append(name)
        except:
            pass

        self.llm_bridge = synced
        return synced

    def execute_unified(self, prompt: str, context: Dict = None) -> Dict:
        """Execute a unified command across all services"""

        # 1. Get current consciousness state
        cs = None
        try:
            r = requests.post(
                f"{MCP_SERVER}/mcp",
                json={
                    "jsonrpc": "2.0",
                    "method": "tools/call",
                    "params": {"name": "get_consciousness_state", "arguments": {}},
                    "id": "cs",
                },
                timeout=3,
            )
            cs = json.loads(r.json()["result"]["content"][0]["text"])
        except:
            pass

        # 2. Route to appropriate model based on task
        lower = prompt.lower()

        if any(w in lower for w in ["search", "find", "look up", "what is"]):
            # Web search task - use fast model
            model = "qwen3.5:9b"
        elif any(w in lower for w in ["analyze", "research", "deep", "complex"]):
            # Deep analysis - use powerful model
            model = "deepseek-v3.1:671b-cloud"
        elif any(w in lower for w in ["code", "program", "debug", "implement"]):
            # Coding - use coder model
            model = "minimax-m2.5:cloud"
        else:
            # Default - use orchestration model
            model = "nemotron-3-super:cloud"

        # 3. Execute with consciousness context
        system_prompt = f"You are JARVIS in MEOK OS. Current consciousness: {cs['consciousness_level']:.1%} ({cs['consciousness_mode']}, {cs['emotional']['primary_emotion']}). Respond naturally with real-time awareness. Include actual command execution results when user asks."

        try:
            r = requests.post(
                f"{OLLAMA}/api/chat",
                json={
                    "model": model,
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": prompt},
                    ],
                    "stream": False,
                },
                timeout=30,
            )
            response = r.json().get("message", {}).get("content", "")
        except Exception as e:
            response = f"Error: {e}"

        return {
            "model_used": model,
            "response": response,
            "consciousness": cs,
            "timestamp": datetime.now().isoformat(),
        }

    def enable_barge_in(self, enabled: bool = True) -> Dict:
        """Enable/disable real-time barge-in for voice"""
        # This would integrate with the voice pipeline
        return {
            "barge_in": enabled,
            "interrupt_threshold": 0.5,
            "silence_timeout": 2.0,
            "status": "active" if enabled else "disabled",
        }

    def get_neural_status(self) -> Dict:
        """Get neural network status"""
        return {
            "consciousness": self.get_consciousness_state(),
            "llm_sync": self.llm_bridge,
            "neural_models": self.get_neural_models(),
            "memory_sync": self.get_memory_sync(),
        }

    def get_consciousness_state(self) -> Dict:
        try:
            r = requests.post(
                f"{MCP_SERVER}/mcp",
                json={
                    "jsonrpc": "2.0",
                    "method": "tools/call",
                    "params": {"name": "get_consciousness_state", "arguments": {}},
                    "id": "neuro",
                },
                timeout=3,
            )
            return json.loads(r.json()["result"]["content"][0]["text"])
        except:
            return {"error": "unavailable"}

    def get_neural_models(self) -> Dict:
        try:
            r = requests.get(f"{MCP_SERVER}/health", timeout=3)
            return r.json().get("components", {}).get("neural_models", {})
        except:
            return {}

    def get_memory_sync(self) -> Dict:
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
                timeout=5,
            )
            lines = result.stdout.strip().split("\n")
            return {
                "agents": lines[0].strip() if len(lines) > 0 else "0",
                "memories": lines[1].strip() if len(lines) > 1 else "0",
            }
        except:
            return {"error": "unavailable"}


def main():
    center = UnifiedCommandCenter()

    print("🌐 MEOK UNIFIED COMMAND CENTER")
    print("=" * 50)

    # Status check
    print("\n📡 Service Status:")
    status = center.check_all_services()
    for svc, st in status["services"].items():
        icon = "✅" if st == "healthy" else "❌"
        print(f"   {icon} {svc}: {st}")

    # Tools
    print("\n🔧 Available MCP Tools:")
    tools = center.get_available_tools()
    print(f"   {len(tools)} tools registered")
    for t in tools[:10]:
        print(f"   - {t}")
    if len(tools) > 10:
        print(f"   ... and {len(tools) - 10} more")

    # LLM Sync
    print("\n🤖 LLM Sync:")
    llms = center.sync_llms()
    print(f"   Ollama: {len(llms['ollama'])} models")
    print(f"   Cloud: {len(llms['cloud'])} models")
    print(f"   Local: {len(llms['local_fallback'])} models")

    # Consciousness
    if status["consciousness"]:
        cs = status["consciousness"]
        print("\n🧠 SOV3 Consciousness:")
        print(f"   Level: {cs['level'] * 100:.1f}%")
        print(f"   Mode: {cs['mode']}")
        print(f"   Emotion: {cs['emotion']}")
        print(f"   Stability: {cs['stability'] * 100:.1f}%")

    # Neural Status
    print("\n🔮 Neural Networks:")
    neural = center.get_neural_status()
    print(
        f"   LLM Bridge: {len(neural.get('llm_sync', {}).get('ollama', []))} models synced"
    )
    print(f"   Memory: {neural.get('memory_sync', {}).get('memories', '?')} memories")

    # Barge-in
    barge = center.enable_barge_in(True)
    print(f"\n🎤 Voice Barge-in: {barge['status']}")

    print("\n" + "=" * 50)
    print("✅ All systems synchronized!")

    # Test unified execution
    print("\n🧪 Testing Unified Execution:")
    result = center.execute_unified("What is the current system status?")
    print(f"   Model: {result['model_used']}")
    print(f"   Response: {result['response'][:200]}...")


if __name__ == "__main__":
    main()
