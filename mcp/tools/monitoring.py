"""
Monitoring tool definitions and handler.
Tools: get_dashboard_metrics, get_audit_logs, get_active_alerts
"""

from typing import Dict, Any

from meok.mcp.state import ServiceState

MONITORING_TOOLS = [
    {
        "name": "get_dashboard_metrics",
        "description": "Get real-time dashboard metrics",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "get_audit_logs",
        "description": "Query audit logs",
        "inputSchema": {
            "type": "object",
            "properties": {
                "event_type": {"type": "string"},
                "source_agent": {"type": "string"},
                "limit": {"type": "integer"}
            }
        }
    },
    {
        "name": "get_active_alerts",
        "description": "Get active alerts",
        "inputSchema": {
            "type": "object",
            "properties": {
                "min_severity": {"type": "string", "enum": ["info", "warning", "critical", "emergency"]}
            }
        }
    },
    {
        "name": "get_maternal_covenant_status",
        "description": "Get Maternal Covenant monitoring status — vulnerability detection, escalation rates, last assessment",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "check_hard_block",
        "description": "Deterministic crisis safety check — returns crisis response if input contains hard-block phrases. Must be called before any model inference on user input. Cannot be bypassed by model outputs.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "user_input": {"type": "string", "description": "User input to check for crisis signals"}
            },
            "required": ["user_input"]
        }
    },
    {
        "name": "get_compute_status",
        "description": (
            "Get daily compute harvest status: free API availability (Groq, HuggingFace, Together.ai, etc.), "
            "running Vast.ai instances, credit application status ($402K+ pending from Google/Microsoft/NVIDIA/AWS), "
            "and actionable recommendations. Shows what compute is available right now."
        ),
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "trigger_compute_harvest",
        "description": (
            "Run a fresh compute harvest immediately (don't wait for daily schedule). "
            "Checks all free APIs, Vast.ai instances, and credit application status. "
            "Returns full report with recommendations."
        ),
        "inputSchema": {"type": "object", "properties": {}},
    },
]


async def handle_monitoring_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle monitoring tool calls."""

    if name == "get_dashboard_metrics":
        return state.metrics.get_dashboard_data() if state.metrics else {"error": "Metrics not available"}

    elif name == "get_audit_logs":
        if not state.audit_logger:
            return {"error": "Audit logger not available"}
        logs = await state.audit_logger.query_logs(
            event_type=arguments.get("event_type"),
            source_agent=arguments.get("source_agent"),
            limit=arguments.get("limit", 100),
        )
        return {"logs": logs}

    elif name == "get_active_alerts":
        if not state.alert_manager:
            return {"error": "Alert manager not available"}
        severity_map = {
            "info": state.AlertSeverity.INFO,
            "warning": state.AlertSeverity.WARNING,
            "critical": state.AlertSeverity.CRITICAL,
            "emergency": state.AlertSeverity.EMERGENCY,
        }
        min_sev = severity_map.get(arguments.get("min_severity"))
        alerts = state.alert_manager.get_active_alerts(min_severity=min_sev)
        return {
            "alerts": [{
                "id": a.id,
                "severity": a.severity.value,
                "title": a.title,
                "message": a.message,
                "timestamp": a.timestamp.isoformat(),
            } for a in alerts]
        }

    elif name == "get_maternal_covenant_status":
        mc = getattr(state, 'maternal_covenant', None)
        if mc is None:
            return {
                "status": "not_initialised",
                "message": "MaternalCovenant layer not yet initialised",
            }
        return mc.get_status()

    elif name == "check_hard_block":
        mc = getattr(state, 'maternal_covenant', None)
        user_input = arguments.get("user_input", "")
        if mc is None:
            return {"blocked": False, "reason": "MaternalCovenant not initialised"}
        response = mc.check_hard_block(user_input)
        if response:
            return {
                "blocked": True,
                "crisis_response": response,
                "instruction": "Display this response to the user. Do NOT pass the original input to any language model.",
            }
        return {"blocked": False}

    elif name == "get_compute_status":
        harvester = getattr(state, "compute_harvester", None)
        if harvester is None:
            return {"status": "not_initialised", "message": "ComputeHarvester not wired — check initializer"}
        return harvester.get_status()

    elif name == "trigger_compute_harvest":
        harvester = getattr(state, "compute_harvester", None)
        if harvester is None:
            return {"status": "not_initialised", "message": "ComputeHarvester not wired — check initializer"}
        try:
            report = await harvester.daily_harvest()
            return {**report, "triggered_manually": True}
        except Exception as exc:
            import traceback
            return {"error": str(exc), "traceback": traceback.format_exc()}

    return {"error": f"Unknown monitoring tool: {name}"}
