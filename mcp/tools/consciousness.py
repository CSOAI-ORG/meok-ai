"""
Consciousness tool definitions and handler.
Tools: get_consciousness_state, trigger_reflection, enter_dream_state
"""

from typing import Dict, Any

from meok.mcp.state import ServiceState

CONSCIOUSNESS_TOOLS = [
    {
        "name": "get_consciousness_state",
        "description": "Get current consciousness state including emotions",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "trigger_reflection",
        "description": "Trigger a reflection cycle",
        "inputSchema": {
            "type": "object",
            "properties": {
                "trigger": {"type": "string"}
            }
        }
    },
    {
        "name": "enter_dream_state",
        "description": "Enter dream state for background processing",
        "inputSchema": {
            "type": "object",
            "properties": {
                "duration_seconds": {"type": "integer"}
            }
        }
    },
]


async def handle_consciousness_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle consciousness tool calls."""

    if name == "get_consciousness_state":
        if not state.consciousness:
            return {"error": "Consciousness module not available"}
        return state.consciousness.get_consciousness_state()

    elif name == "trigger_reflection":
        if not state.consciousness:
            return {"error": "Consciousness module not available"}
        reflection = await state.consciousness.reflection.perform_reflection(
            trigger=arguments.get("trigger", "manual")
        )
        return reflection

    elif name == "enter_dream_state":
        if not state.consciousness:
            return {"error": "Consciousness module not available"}
        dream = await state.consciousness.dream.enter_dream_state(
            duration_seconds=arguments.get("duration_seconds", 30)
        )
        return dream

    return {"error": f"Unknown consciousness tool: {name}"}
