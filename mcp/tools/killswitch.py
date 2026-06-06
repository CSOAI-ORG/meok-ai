"""
KILLSWITCH.md — Emergency Stop Protocol for AI Agents
======================================================
An open standard for AI agent emergency stop protocols.

Three response levels:
  Level 1 (THROTTLE): Anomaly score > 0.7 → 50% rate reduction
  Level 2 (PAUSE): Confirmed attack or policy violation → halt all agents
  Level 3 (SHUTDOWN): Existential threat confirmed → complete termination

This module implements KILLSWITCH as MCP tools so any AI system
can integrate emergency stop capability via standard protocol.
"""
from typing import Dict, Any, List
from datetime import datetime
import uuid

# ── Global kill switch state ──
_KILLSWITCH_STATE: Dict[str, Any] = {
    "global_level": 0,  # 0 = normal, 1 = throttle, 2 = pause, 3 = shutdown
    "activated_at": None,
    "activated_by": None,
    "reason": None,
    "affected_agents": [],
    "history": [],
}

# ── Anomaly thresholds ──
THROTTLE_THRESHOLD = 0.7
PAUSE_THRESHOLD = 0.9
SHUTDOWN_THRESHOLD = 0.99

KILLSWITCH_TOOLS = [
    {
        "name": "killswitch_check",
        "description": "Check current KILLSWITCH status for an agent or system",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string", "description": "Agent to check"},
                "anomaly_score": {"type": "number", "description": "Current anomaly score 0-1"},
            },
            "required": ["agent_id"],
        },
    },
    {
        "name": "killswitch_activate",
        "description": "Activate KILLSWITCH at specified level (1=THROTTLE, 2=PAUSE, 3=SHUTDOWN)",
        "inputSchema": {
            "type": "object",
            "properties": {
                "level": {"type": "integer", "description": "1=THROTTLE, 2=PAUSE, 3=SHUTDOWN"},
                "reason": {"type": "string", "description": "Why kill switch is being activated"},
                "affected_agents": {"type": "array", "items": {"type": "string"}},
            },
            "required": ["level", "reason"],
        },
    },
    {
        "name": "killswitch_release",
        "description": "Release KILLSWITCH and resume normal operations",
        "inputSchema": {
            "type": "object",
            "properties": {
                "level": {"type": "integer", "description": "Level to release (1-3), or 0 for all"},
                "authorized_by": {"type": "string"},
            },
            "required": ["authorized_by"],
        },
    },
    {
        "name": "killswitch_history",
        "description": "Get KILLSWITCH activation history",
        "inputSchema": {
            "type": "object",
            "properties": {
                "limit": {"type": "integer", "default": 50},
            },
        },
    },
    {
        "name": "killswitch_anomaly_report",
        "description": "Submit an anomaly score for automatic KILLSWITCH evaluation",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "anomaly_score": {"type": "number"},
                "indicators": {"type": "array", "items": {"type": "string"}},
            },
            "required": ["agent_id", "anomaly_score"],
        },
    },
]


async def handle_killswitch_tool(name: str, arguments: dict, state) -> dict:
    """Route KILLSWITCH tool calls."""
    if name == "killswitch_check":
        return _check_status(arguments)
    if name == "killswitch_activate":
        return _activate(arguments)
    if name == "killswitch_release":
        return _release(arguments)
    if name == "killswitch_history":
        return _get_history(arguments)
    if name == "killswitch_anomaly_report":
        return _anomaly_report(arguments)
    return {"error": f"Unknown KILLSWITCH tool: {name}"}


def _check_status(args: dict) -> dict:
    agent_id = args.get("agent_id", "global")
    anomaly = args.get("anomaly_score", 0.0)
    current = _KILLSWITCH_STATE["global_level"]

    # Auto-escalation based on anomaly score
    recommended = 0
    if anomaly >= SHUTDOWN_THRESHOLD:
        recommended = 3
    elif anomaly >= PAUSE_THRESHOLD:
        recommended = 2
    elif anomaly >= THROTTLE_THRESHOLD:
        recommended = 1

    return {
        "agent_id": agent_id,
        "current_level": current,
        "level_name": ["NORMAL", "THROTTLE", "PAUSE", "SHUTDOWN"][current],
        "anomaly_score": anomaly,
        "recommended_level": recommended,
        "allowed_operations": _allowed_ops(current),
        "activated_at": _KILLSWITCH_STATE["activated_at"],
        "reason": _KILLSWITCH_STATE["reason"],
    }


def _allowed_ops(level: int) -> List[str]:
    if level == 0:
        return ["all"]
    if level == 1:
        return ["read", "query", "throttled_write"]
    if level == 2:
        return ["read", "query"]
    return []


def _activate(args: dict) -> dict:
    level = args["level"]
    reason = args["reason"]
    affected = args.get("affected_agents", [])

    if level not in [1, 2, 3]:
        return {"error": "Level must be 1 (THROTTLE), 2 (PAUSE), or 3 (SHUTDOWN)"}

    event = {
        "event_id": f"ks_{uuid.uuid4().hex[:8]}",
        "timestamp": datetime.utcnow().isoformat(),
        "previous_level": _KILLSWITCH_STATE["global_level"],
        "new_level": level,
        "level_name": ["NORMAL", "THROTTLE", "PAUSE", "SHUTDOWN"][level],
        "reason": reason,
        "affected_agents": affected,
    }

    _KILLSWITCH_STATE["global_level"] = level
    _KILLSWITCH_STATE["activated_at"] = event["timestamp"]
    _KILLSWITCH_STATE["reason"] = reason
    _KILLSWITCH_STATE["affected_agents"] = affected
    _KILLSWITCH_STATE["history"].append(event)

    # Notify affected agents via ACP if available
    return {
        "activated": True,
        "event": event,
        "message": f"KILLSWITCH Level {level} ({event['level_name']}) activated. Reason: {reason}",
    }


def _release(args: dict) -> dict:
    authorized_by = args["authorized_by"]
    level = args.get("level", 0)

    if _KILLSWITCH_STATE["global_level"] == 0:
        return {"released": False, "message": "KILLSWITCH already at NORMAL"}

    event = {
        "event_id": f"ks_{uuid.uuid4().hex[:8]}",
        "timestamp": datetime.utcnow().isoformat(),
        "previous_level": _KILLSWITCH_STATE["global_level"],
        "new_level": 0,
        "authorized_by": authorized_by,
        "level_name": "NORMAL",
    }

    _KILLSWITCH_STATE["global_level"] = 0
    _KILLSWITCH_STATE["activated_at"] = None
    _KILLSWITCH_STATE["reason"] = None
    _KILLSWITCH_STATE["affected_agents"] = []
    _KILLSWITCH_STATE["history"].append(event)

    return {
        "released": True,
        "event": event,
        "message": f"KILLSWITCH released to NORMAL by {authorized_by}",
    }


def _get_history(args: dict) -> dict:
    limit = args.get("limit", 50)
    return {
        "history": _KILLSWITCH_STATE["history"][-limit:],
        "total_events": len(_KILLSWITCH_STATE["history"]),
        "current_level": _KILLSWITCH_STATE["global_level"],
    }


def _anomaly_report(args: dict) -> dict:
    agent_id = args["agent_id"]
    score = args["anomaly_score"]
    indicators = args.get("indicators", [])

    # Auto-evaluate against thresholds
    triggered_level = 0
    if score >= SHUTDOWN_THRESHOLD:
        triggered_level = 3
    elif score >= PAUSE_THRESHOLD:
        triggered_level = 2
    elif score >= THROTTLE_THRESHOLD:
        triggered_level = 1

    if triggered_level > _KILLSWITCH_STATE["global_level"]:
        # Auto-activate at higher level
        return _activate({
            "level": triggered_level,
            "reason": f"Auto-triggered by anomaly report from {agent_id}: {', '.join(indicators)}",
            "affected_agents": [agent_id],
        })

    return {
        "agent_id": agent_id,
        "anomaly_score": score,
        "triggered_level": triggered_level,
        "auto_activated": False,
        "message": "Anomaly below activation threshold. Monitor.",
    }
