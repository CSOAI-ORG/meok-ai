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

    return {"error": f"Unknown monitoring tool: {name}"}
