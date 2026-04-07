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
        "description": "Delegate a task to the best available agent based on capabilities",
        "inputSchema": {
            "type": "object",
            "properties": {
                "task": {"type": "string", "description": "Short task name or description"},
                "description": {"type": "string", "description": "Full task description (optional)"},
                "target_agent": {"type": "string", "description": "Specific agent ID to target (optional)"},
                "required_capabilities": {"type": "array", "items": {"type": "string"}},
                "priority": {"type": "integer"},
                "care_weight": {"type": "number"}
            },
            "required": ["task"]
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
    try:
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
            # Resolve description from task or description field
            task_desc = arguments.get("description") or arguments.get("task", "")
            target = arguments.get("target_agent")

            # If targeting a specific agent, route via coordination hub
            if target and state.COORDINATION_AVAILABLE and state.get_coordination_hub:
                hub = state.get_coordination_hub()
                result = hub.submit_task(
                    title=arguments.get("task", task_desc[:50]),
                    description=task_desc,
                    files=[],
                    requester="delegate",
                    care_score=arguments.get("care_weight", 0.7),
                )
                return {**result, "target_agent": target, "status": "delegated"}

            if not state.task_delegator:
                return {"error": "Task delegator not available", "hint": "Use coord_submit_task for coordination hub routing"}
            task_obj = await state.task_delegator.delegate_task(
                description=task_desc,
                required_capabilities=[state.AgentCapability(c) for c in arguments.get("required_capabilities", [])],
                priority=arguments.get("priority", 5),
                care_weight=arguments.get("care_weight", 0.5),
            )
            if task_obj:
                return {"task_id": task_obj.id, "assigned_to": task_obj.assigned_to, "status": "assigned"}
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
    except Exception as e:
        return {"error": f"Agent tool error: {str(e)}", "tool": name}
