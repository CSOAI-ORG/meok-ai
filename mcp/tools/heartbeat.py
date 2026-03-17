"""
Project Heartbeat tool definitions and handler.
Tools: get_heartbeat_status, get_nightshift_digest, trigger_research_sweep,
       trigger_security_hardening, trigger_neural_retrain, pause_heartbeat_job,
       resume_heartbeat_job
"""

from typing import Dict, Any

from meok.mcp.state import ServiceState

HEARTBEAT_TOOLS = [
    {
        "name": "get_heartbeat_status",
        "description": "Get Sovereign heartbeat scheduler status, running jobs, and next run times",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "get_nightshift_digest",
        "description": "Get the latest morning intelligence digest compiled during nightshift",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "trigger_research_sweep",
        "description": "Manually trigger an autonomous research sweep (RSS + web + Ollama summarization)",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "trigger_security_hardening",
        "description": "Manually trigger a security self-hardening cycle",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "trigger_neural_retrain",
        "description": "Manually trigger neural model retraining cycle",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "pause_heartbeat_job",
        "description": "Pause a specific heartbeat scheduler job (human override)",
        "inputSchema": {
            "type": "object",
            "properties": {
                "job_id": {"type": "string", "description": "Job ID to pause (e.g., heartbeat_pulse, nightshift_deep, research_sweep)"}
            },
            "required": ["job_id"]
        }
    },
    {
        "name": "resume_heartbeat_job",
        "description": "Resume a paused heartbeat scheduler job",
        "inputSchema": {
            "type": "object",
            "properties": {
                "job_id": {"type": "string", "description": "Job ID to resume"}
            },
            "required": ["job_id"]
        }
    },
]


async def handle_heartbeat_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle heartbeat tool calls."""

    if name == "get_heartbeat_status":
        if state.heartbeat:
            return state.heartbeat.get_status()
        return {"error": "Heartbeat not available", "hint": "Project Heartbeat not initialized"}

    elif name == "get_nightshift_digest":
        if state.memory_store and state.memory_store.pool:
            async with state.memory_store.pool.acquire() as conn:
                rows = await conn.fetch(
                    "SELECT * FROM memory_episodes WHERE tags @> $1::text[] "
                    "ORDER BY timestamp DESC LIMIT 1",
                    ['morning_digest'],
                )
                if rows:
                    row = rows[0]
                    return {
                        "id": str(row['id']),
                        "content": row['content'],
                        "timestamp": row['timestamp'].isoformat(),
                        "care_weight": float(row['care_weight']),
                        "tags": row['tags'],
                    }
                return {"message": "No morning digest found yet. Digest is generated at 3:30 AM GMT."}
        return {"error": "Memory store not available"}

    elif name == "trigger_research_sweep":
        if state.research_agent:
            result = await state.research_agent.sweep()
            return result
        return {"error": "Research agent not available"}

    elif name == "trigger_security_hardening":
        if state.security_engine:
            result = await state.security_engine.run_full_cycle()
            return result
        return {"error": "Security hardening engine not available"}

    elif name == "trigger_neural_retrain":
        if state.continual_trainer:
            result = await state.continual_trainer.retrain_all()
            return result
        return {"error": "Continual learning trainer not available"}

    elif name == "pause_heartbeat_job":
        if state.heartbeat:
            return state.heartbeat.pause_job(arguments["job_id"])
        return {"error": "Heartbeat not available"}

    elif name == "resume_heartbeat_job":
        if state.heartbeat:
            return state.heartbeat.resume_job(arguments["job_id"])
        return {"error": "Heartbeat not available"}

    return {"error": f"Unknown heartbeat tool: {name}"}
