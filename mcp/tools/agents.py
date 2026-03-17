"""
Multi-agent tool definitions and handler.
Tools: register_agent, delegate_task, submit_council_proposal, vote_on_proposal, get_agent_registry_stats
"""

from typing import Dict, Any

from meok.mcp.state import ServiceState

AGENT_TOOLS = [
    {
        "name": "register_agent",
        "description": "Register a new agent",
        "inputSchema": {
            "type": "object",
            "properties": {
                "name": {"type": "string"},
                "description": {"type": "string"},
                "capabilities": {"type": "array", "items": {"type": "string"}},
                "trust_level": {"type": "number"}
            },
            "required": ["name", "capabilities"]
        }
    },
    {
        "name": "delegate_task",
        "description": "Delegate a task to the best available agent",
        "inputSchema": {
            "type": "object",
            "properties": {
                "description": {"type": "string"},
                "required_capabilities": {"type": "array", "items": {"type": "string"}},
                "priority": {"type": "integer"},
                "care_weight": {"type": "number"}
            },
            "required": ["description", "required_capabilities"]
        }
    },
    {
        "name": "submit_council_proposal",
        "description": "Submit a proposal for agent council vote",
        "inputSchema": {
            "type": "object",
            "properties": {
                "title": {"type": "string"},
                "description": {"type": "string"},
                "proposed_by": {"type": "string"},
                "action_type": {"type": "string"},
                "action_params": {"type": "object"}
            },
            "required": ["title", "description", "proposed_by"]
        }
    },
    {
        "name": "vote_on_proposal",
        "description": "Cast a vote on a council proposal",
        "inputSchema": {
            "type": "object",
            "properties": {
                "proposal_id": {"type": "string"},
                "agent_id": {"type": "string"},
                "vote": {"type": "string", "enum": ["for", "against", "abstain"]},
                "reasoning": {"type": "string"}
            },
            "required": ["proposal_id", "agent_id", "vote"]
        }
    },
    {
        "name": "get_agent_registry_stats",
        "description": "Get agent registry statistics",
        "inputSchema": {"type": "object", "properties": {}}
    },
]


async def handle_agent_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle multi-agent tool calls."""

    if name == "register_agent":
        if not state.agent_registry:
            return {"error": "Agent registry not available"}
        agent = await state.agent_registry.register_agent(
            name=arguments["name"],
            description=arguments.get("description", ""),
            capabilities=[state.AgentCapability(c) for c in arguments["capabilities"]],
            trust_level=arguments.get("trust_level", 0.5),
        )
        return {"agent_id": agent.id, "name": agent.name, "status": "registered"}

    elif name == "delegate_task":
        if not state.task_delegator:
            return {"error": "Task delegator not available"}
        task = await state.task_delegator.delegate_task(
            description=arguments["description"],
            required_capabilities=[state.AgentCapability(c) for c in arguments["required_capabilities"]],
            priority=arguments.get("priority", 5),
            care_weight=arguments.get("care_weight", 0.5),
        )
        if task:
            return {"task_id": task.id, "assigned_to": task.assigned_to, "status": "assigned"}
        return {"error": "No suitable agent found"}

    elif name == "submit_council_proposal":
        if not state.agent_council:
            return {"error": "Agent council not available"}
        proposal_id = await state.agent_council.submit_proposal(
            title=arguments["title"],
            description=arguments["description"],
            proposed_by=arguments["proposed_by"],
            action_type=arguments.get("action_type", "generic"),
            action_params=arguments.get("action_params", {}),
        )
        return {"proposal_id": proposal_id, "status": "open"}

    elif name == "vote_on_proposal":
        if not state.agent_council:
            return {"error": "Agent council not available"}
        success = await state.agent_council.cast_vote(
            proposal_id=arguments["proposal_id"],
            agent_id=arguments["agent_id"],
            vote=arguments["vote"],
            reasoning=arguments.get("reasoning", ""),
        )
        return {"success": success}

    elif name == "get_agent_registry_stats":
        if not state.agent_registry:
            return {"error": "Agent registry not available"}
        return state.agent_registry.get_registry_stats()

    return {"error": f"Unknown agent tool: {name}"}
