"""
Tool registry — aggregates all tool modules and provides unified dispatch.
"""

from datetime import datetime
from typing import Dict, Any

from meok.mcp.state import ServiceState

from meok.mcp.tools.neural import NEURAL_TOOLS, handle_neural_tool
from meok.mcp.tools.memory import MEMORY_TOOLS, handle_memory_tool
from meok.mcp.tools.monitoring import MONITORING_TOOLS, handle_monitoring_tool
from meok.mcp.tools.agents import AGENT_TOOLS, handle_agent_tool
from meok.mcp.tools.consciousness import CONSCIOUSNESS_TOOLS, handle_consciousness_tool
from meok.mcp.tools.system import SYSTEM_TOOLS, handle_system_tool
from meok.mcp.tools.orion import ORION_TOOLS, handle_orion_tool
from meok.mcp.tools.coordination import COORDINATION_TOOLS, handle_coordination_tool
from meok.mcp.tools.heartbeat import HEARTBEAT_TOOLS, handle_heartbeat_tool
from meok.mcp.tools.creativity import CREATIVITY_TOOLS, handle_creativity_tool

# Combined tool list — order matches the original monolithic server
ALL_TOOLS = (
    NEURAL_TOOLS
    + MEMORY_TOOLS
    + MONITORING_TOOLS
    + AGENT_TOOLS
    + CONSCIOUSNESS_TOOLS
    + SYSTEM_TOOLS
    + ORION_TOOLS
    + COORDINATION_TOOLS
    + HEARTBEAT_TOOLS
    + CREATIVITY_TOOLS
)

# Build name -> handler lookup from each module's tool list
_TOOL_NAME_TO_HANDLER: Dict[str, Any] = {}

for _tool in NEURAL_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_neural_tool
for _tool in MEMORY_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_memory_tool
for _tool in MONITORING_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_monitoring_tool
for _tool in AGENT_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_agent_tool
for _tool in CONSCIOUSNESS_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_consciousness_tool
for _tool in SYSTEM_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_system_tool
for _tool in ORION_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_orion_tool
for _tool in COORDINATION_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_coordination_tool
for _tool in HEARTBEAT_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_heartbeat_tool
for _tool in CREATIVITY_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_creativity_tool

# Also expose as a dict for external inspection
TOOL_HANDLERS = {
    "neural": handle_neural_tool,
    "memory": handle_memory_tool,
    "monitoring": handle_monitoring_tool,
    "agents": handle_agent_tool,
    "consciousness": handle_consciousness_tool,
    "system": handle_system_tool,
    "orion": handle_orion_tool,
    "coordination": handle_coordination_tool,
    "heartbeat": handle_heartbeat_tool,
    "creativity": handle_creativity_tool,
}


async def execute_tool(name: str, arguments: Dict[str, Any], state: ServiceState, tenant_id: str = "default") -> Dict[str, Any]:
    """Execute an MCP tool by name, routing to the appropriate handler."""
    start_time = datetime.now()

    # Inject tenant context for handlers that need it
    arguments["_tenant_id"] = tenant_id

    try:
        handler = _TOOL_NAME_TO_HANDLER.get(name)
        if handler is None:
            return {"error": f"Unknown tool: {name}"}
        return await handler(name, arguments, state)
    except Exception as e:
        import traceback
        return {"error": str(e), "traceback": traceback.format_exc()}
