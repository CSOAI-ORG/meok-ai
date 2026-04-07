"""
Orion-Riri-Hourman agent tool definitions and handler.
Tools: orion_hunt_tasks, orion_get_tasks, orion_capture_task,
       hourman_start_sprint, hourman_get_status, hourman_complete_sprint,
       riri_list_templates, riri_build_tool, orion_riri_hourman_status
"""

from typing import Dict, Any

from meok.mcp.state import ServiceState

ORION_TOOLS = [
    {
        "name": "orion_hunt_tasks",
        "description": "Hunt for TODO/FIXME tasks across the codebase (Orion module)",
        "inputSchema": {
            "type": "object",
            "properties": {
                "max_files": {"type": "integer", "description": "Max files to scan", "default": 100}
            }
        }
    },
    {
        "name": "orion_get_tasks",
        "description": "Get prioritized tasks ready for capture",
        "inputSchema": {
            "type": "object",
            "properties": {
                "limit": {"type": "integer", "description": "Number of tasks to return", "default": 10}
            }
        }
    },
    {
        "name": "orion_capture_task",
        "description": "Capture a task for sprint execution",
        "inputSchema": {
            "type": "object",
            "properties": {
                "task_id": {"type": "string", "description": "Task ID to capture"}
            },
            "required": ["task_id"]
        }
    },
    {
        "name": "hourman_start_sprint",
        "description": "Start a Miraclo sprint (micro/power/deep)",
        "inputSchema": {
            "type": "object",
            "properties": {
                "sprint_type": {"type": "string", "enum": ["micro", "power", "deep"], "description": "Sprint duration type"},
                "task_id": {"type": "string", "description": "Optional task ID to focus on"}
            },
            "required": ["sprint_type"]
        }
    },
    {
        "name": "hourman_get_status",
        "description": "Get sprint controller status and energy levels",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "hourman_complete_sprint",
        "description": "Complete the active sprint with results",
        "inputSchema": {
            "type": "object",
            "properties": {
                "summary": {"type": "string", "description": "Summary of what was accomplished"},
                "task_id": {"type": "string", "description": "Optional task ID to mark complete"}
            },
            "required": ["summary"]
        }
    },
    {
        "name": "riri_list_templates",
        "description": "List available tool templates for rapid building",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "riri_build_tool",
        "description": "Build a tool from a template (Riri module)",
        "inputSchema": {
            "type": "object",
            "properties": {
                "template": {"type": "string", "description": "Template name"},
                "name": {"type": "string", "description": "Tool name"},
                "description": {"type": "string", "description": "Tool description"},
                "params": {"type": "object", "description": "Template-specific parameters"}
            },
            "required": ["template", "name", "description"]
        }
    },
    {
        "name": "orion_riri_hourman_status",
        "description": "Get complete Orion-Riri-Hourman agent status",
        "inputSchema": {"type": "object", "properties": {}}
    },
]


async def handle_orion_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle Orion-Riri-Hourman tool calls."""
    try:
        if not state.ORION_AGENT_AVAILABLE or not state.get_orion_agent:
            return {"error": "Orion-Riri-Hourman agent not available"}

        agent = state.get_orion_agent()

        if name == "orion_hunt_tasks":
            result = await agent.hunt_tasks(max_files=arguments.get("max_files", 100))
            return result

        elif name == "orion_get_tasks":
            tasks = agent.get_pursuing_tasks(arguments.get("limit", 10))
            return {"tasks": tasks}

        elif name == "orion_capture_task":
            result = await agent.capture_task(arguments["task_id"])
            return result

        elif name == "hourman_start_sprint":
            result = await agent.start_sprint(
                arguments["sprint_type"],
                arguments.get("task_id"),
            )
            return result

        elif name == "hourman_get_status":
            return agent.sprints.get_status()

        elif name == "hourman_complete_sprint":
            result = await agent.complete_sprint(
                arguments["summary"],
                arguments.get("task_id"),
            )
            return result

        elif name == "riri_list_templates":
            return agent.get_available_templates()

        elif name == "riri_build_tool":
            result = await agent.build_tool(
                arguments["template"],
                {
                    "name": arguments["name"],
                    "description": arguments["description"],
                    **arguments.get("params", {}),
                },
            )
            return result

        elif name == "orion_riri_hourman_status":
            return agent.get_full_status()

        return {"error": f"Unknown orion tool: {name}"}
    except Exception as e:
        return {"error": f"Orion tool error: {str(e)}", "tool": name}
