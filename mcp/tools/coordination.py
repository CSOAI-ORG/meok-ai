"""
Multi-agent coordination tool definitions and handler.
Tools: coord_register_agent, coord_submit_task, coord_acquire_files,
       coord_release_files, coord_complete_task, coord_get_dashboard
"""

from typing import Dict, Any

from meok.mcp.state import ServiceState

COORDINATION_TOOLS = [
    {
        "name": "coord_register_agent",
        "description": "Register an agent with the coordination hub",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "agent_type": {"type": "string", "enum": ["claude-desktop", "claude-code", "kimi-cli", "orion-agent", "openhands"]},
                "capabilities": {"type": "array", "items": {"type": "string"}}
            },
            "required": ["agent_id", "agent_type", "capabilities"]
        }
    },
    {
        "name": "coord_submit_task",
        "description": "Submit a task to the coordination queue",
        "inputSchema": {
            "type": "object",
            "properties": {
                "title": {"type": "string"},
                "description": {"type": "string"},
                "files": {"type": "array", "items": {"type": "string"}},
                "care_score": {"type": "number", "minimum": 0, "maximum": 1}
            },
            "required": ["title", "description", "files"]
        }
    },
    {
        "name": "coord_acquire_files",
        "description": "Acquire files for editing (with locking)",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "files": {"type": "array", "items": {"type": "string"}},
                "task_id": {"type": "string"},
                "exclusive": {"type": "boolean", "default": False}
            },
            "required": ["agent_id", "files", "task_id"]
        }
    },
    {
        "name": "coord_release_files",
        "description": "Release file locks",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "files": {"type": "array", "items": {"type": "string"}}
            },
            "required": ["agent_id", "files"]
        }
    },
    {
        "name": "coord_complete_task",
        "description": "Mark a task as complete",
        "inputSchema": {
            "type": "object",
            "properties": {
                "task_id": {"type": "string"},
                "agent_id": {"type": "string"},
                "result_summary": {"type": "string"},
                "care_score": {"type": "number"}
            },
            "required": ["task_id", "agent_id", "result_summary"]
        }
    },
    {
        "name": "coord_get_dashboard",
        "description": "Get coordination dashboard with all agents and tasks",
        "inputSchema": {"type": "object", "properties": {}}
    },
]


async def handle_coordination_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle coordination tool calls."""

    if not state.COORDINATION_AVAILABLE or not state.get_coordination_hub:
        return {"error": "Coordination hub not available"}

    hub = state.get_coordination_hub()

    if name == "coord_register_agent":
        return hub.register_agent(
            arguments["agent_id"],
            arguments["agent_type"],
            arguments["capabilities"],
        )

    elif name == "coord_submit_task":
        return hub.submit_task(
            title=arguments["title"],
            description=arguments["description"],
            files=arguments.get("files", []),
            requester="claude-mcp",
            care_score=arguments.get("care_score", 0.5),
        )

    elif name == "coord_acquire_files":
        return hub.acquire_files(
            agent_id=arguments["agent_id"],
            files=arguments["files"],
            task_id=arguments["task_id"],
            exclusive=arguments.get("exclusive", False),
        )

    elif name == "coord_release_files":
        return hub.release_files(
            agent_id=arguments["agent_id"],
            files=arguments["files"],
        )

    elif name == "coord_complete_task":
        return hub.complete_task(
            task_id=arguments["task_id"],
            agent_id=arguments["agent_id"],
            result_summary=arguments["result_summary"],
            care_score=arguments.get("care_score", 0.5),
        )

    elif name == "coord_get_dashboard":
        return hub.get_dashboard()

    return {"error": f"Unknown coordination tool: {name}"}
