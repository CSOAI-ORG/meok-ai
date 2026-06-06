"""
DELBOY MODE — Revenue MCP Tools

MCP tools for the revenue nervous system. Provides real-time revenue
sensing, forecasting, and optimization capabilities to agents.

Open, care-governed, MIT-licensed.
"""

from __future__ import annotations

import logging
from datetime import datetime, timedelta
from typing import Any, Dict, List, Optional

from meok.mcp.state import ServiceState
from meok.core.revenue_event import RevenueEvent, RevenueEventType, RevenueLedger, RevenueSource

logger = logging.getLogger(__name__)

# ── Shared ledger instance (singleton per process) ───────────────────────────
_ledger: Optional[RevenueLedger] = None


def _get_ledger() -> RevenueLedger:
    global _ledger
    if _ledger is None:
        _ledger = RevenueLedger()
    return _ledger


# ── Tool definitions ─────────────────────────────────────────────────────────

REVENUE_TOOLS = [
    {
        "name": "get_revenue_dashboard",
        "description": "Get real-time revenue dashboard: total revenue, costs, net, event counts.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "window_hours": {
                    "type": "integer",
                    "default": 24,
                    "description": "Time window in hours for the dashboard.",
                },
            },
        },
    },
    {
        "name": "record_revenue_event",
        "description": "Record a revenue event (payment, cost, opportunity, etc.).",
        "inputSchema": {
            "type": "object",
            "properties": {
                "source": {
                    "type": "string",
                    "enum": [s.value for s in RevenueSource],
                    "description": "Source system.",
                },
                "event_type": {
                    "type": "string",
                    "enum": [t.value for t in RevenueEventType],
                    "description": "Type of revenue event.",
                },
                "amount": {
                    "type": "number",
                    "description": "Amount in GBP. Positive = revenue, negative = cost.",
                },
                "currency": {
                    "type": "string",
                    "default": "gbp",
                },
                "metadata": {
                    "type": "object",
                    "default": {},
                },
                "attribution": {
                    "type": "object",
                    "default": {},
                },
                "confidence": {
                    "type": "number",
                    "default": 1.0,
                },
            },
            "required": ["source", "event_type", "amount"],
        },
    },
    {
        "name": "query_revenue_events",
        "description": "Query revenue events with filters.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "source": {"type": "string"},
                "event_type": {"type": "string"},
                "customer_id": {"type": "string"},
                "product_id": {"type": "string"},
                "since_hours": {"type": "integer", "default": 24},
                "limit": {"type": "integer", "default": 50},
            },
        },
    },
    {
        "name": "get_customer_health",
        "description": "Get revenue health for a specific customer: spend, costs, net, risk signals.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "customer_id": {"type": "string"},
                "window_days": {"type": "integer", "default": 30},
            },
            "required": ["customer_id"],
        },
    },
    {
        "name": "get_mcp_cost_attribution",
        "description": "Get cost attribution for MCP tool calls: per-tool, per-customer breakdown.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "since_hours": {"type": "integer", "default": 24},
                "group_by": {
                    "type": "string",
                    "enum": ["tool", "customer", "product"],
                    "default": "tool",
                },
            },
        },
    },
    {
        "name": "forecast_revenue",
        "description": "Simple revenue forecast based on recent trend. Returns projected revenue for next N days.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "horizon_days": {"type": "integer", "default": 30},
                "lookback_days": {"type": "integer", "default": 90},
            },
        },
    },
    {
        "name": "get_revenue_memory",
        "description": "Search revenue history by keyword or semantic concept.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "query": {"type": "string"},
                "limit": {"type": "integer", "default": 10},
            },
            "required": ["query"],
        },
    },
]


# ── Tool handler ─────────────────────────────────────────────────────────────

async def handle_revenue_tool(
    name: str, arguments: Dict[str, Any], state: ServiceState
) -> Dict[str, Any]:
    """Dispatch revenue tool calls."""
    ledger = _get_ledger()

    if name == "get_revenue_dashboard":
        return _handle_dashboard(ledger, arguments)
    elif name == "record_revenue_event":
        return _handle_record(ledger, arguments)
    elif name == "query_revenue_events":
        return _handle_query(ledger, arguments)
    elif name == "get_customer_health":
        return _handle_customer_health(ledger, arguments)
    elif name == "get_mcp_cost_attribution":
        return _handle_mcp_cost(ledger, arguments)
    elif name == "forecast_revenue":
        return _handle_forecast(ledger, arguments)
    elif name == "get_revenue_memory":
        return _handle_memory(ledger, arguments)
    else:
        return {"error": f"Unknown revenue tool: {name}"}


# ── Individual handlers ──────────────────────────────────────────────────────

def _handle_dashboard(ledger: RevenueLedger, args: Dict[str, Any]) -> Dict[str, Any]:
    hours = args.get("window_hours", 24)
    end = datetime.utcnow()
    start = end - timedelta(hours=hours)
    snap = ledger.snapshot(start, end)
    return {
        "window_hours": hours,
        "snapshot": snap.to_dict(),
        "ledger_stats": ledger.stats(),
    }


def _handle_record(ledger: RevenueLedger, args: Dict[str, Any]) -> Dict[str, Any]:
    try:
        event = RevenueEvent(
            timestamp=datetime.utcnow(),
            source=RevenueSource(args["source"]),
            event_type=RevenueEventType(args["event_type"]),
            amount=args["amount"],
            currency=args.get("currency", "gbp"),
            metadata=args.get("metadata", {}),
            attribution=args.get("attribution", {}),
            confidence=args.get("confidence", 1.0),
        )
        ledger.record(event)
        return {"recorded": True, "event_id": event.event_id, "event": event.to_dict()}
    except Exception as e:
        logger.exception("Failed to record revenue event")
        return {"error": str(e)}


def _handle_query(ledger: RevenueLedger, args: Dict[str, Any]) -> Dict[str, Any]:
    since_hours = args.get("since_hours", 24)
    since = datetime.utcnow() - timedelta(hours=since_hours)
    source = args.get("source")
    event_type = args.get("event_type")

    events = ledger.query(
        source=RevenueSource(source) if source else None,
        event_type=RevenueEventType(event_type) if event_type else None,
        customer_id=args.get("customer_id"),
        product_id=args.get("product_id"),
        since=since,
        limit=args.get("limit", 50),
    )
    return {
        "count": len(events),
        "events": [e.to_dict() for e in events],
    }


def _handle_customer_health(ledger: RevenueLedger, args: Dict[str, Any]) -> Dict[str, Any]:
    customer_id = args["customer_id"]
    days = args.get("window_days", 30)
    end = datetime.utcnow()
    start = end - timedelta(days=days)

    events = ledger.query(
        customer_id=customer_id,
        since=start,
        until=end,
        limit=1000,
    )

    revenue = sum(e.amount for e in events if e.amount > 0)
    cost = sum(abs(e.amount) for e in events if e.amount < 0)
    net = revenue - cost

    # Simple health signals
    signals = []
    if net < 0:
        signals.append("negative_net: customer costs exceed revenue")
    if cost > revenue * 0.8:
        signals.append("high_cost_ratio: costs near revenue threshold")
    if not any(e.event_type == RevenueEventType.PAYMENT for e in events[-30:]):
        signals.append("no_recent_payment: churn risk")

    return {
        "customer_id": customer_id,
        "window_days": days,
        "revenue": round(revenue, 4),
        "cost": round(cost, 4),
        "net": round(net, 4),
        "event_count": len(events),
        "health_signals": signals,
        "health_score": max(0.0, min(1.0, net / max(revenue, 0.01))),
    }


def _handle_mcp_cost(ledger: RevenueLedger, args: Dict[str, Any]) -> Dict[str, Any]:
    since_hours = args.get("since_hours", 24)
    since = datetime.utcnow() - timedelta(hours=since_hours)
    group_by = args.get("group_by", "tool")

    events = ledger.query(
        source=RevenueSource.MCP,
        since=since,
        limit=1000,
    )

    groups: Dict[str, float] = {}
    for e in events:
        key = "unknown"
        if group_by == "tool":
            key = e.metadata.get("tool_name", "unknown")
        elif group_by == "customer":
            key = e.attribution.get("customer_id", "unknown")
        elif group_by == "product":
            key = e.attribution.get("product_id", "unknown")
        groups[key] = groups.get(key, 0) + abs(e.amount)

    sorted_groups = sorted(groups.items(), key=lambda x: x[1], reverse=True)
    return {
        "group_by": group_by,
        "since_hours": since_hours,
        "total_cost": round(sum(groups.values()), 4),
        "breakdown": [{"key": k, "cost": round(v, 4)} for k, v in sorted_groups],
    }


def _handle_forecast(ledger: RevenueLedger, args: Dict[str, Any]) -> Dict[str, Any]:
    horizon_days = args.get("horizon_days", 30)
    lookback_days = args.get("lookback_days", 90)

    end = datetime.utcnow()
    start = end - timedelta(days=lookback_days)
    snap = ledger.snapshot(start, end)

    # Simple linear extrapolation
    daily_avg = snap.total_revenue / max(lookback_days, 1)
    forecast = daily_avg * horizon_days

    # Add scenario bounds
    optimistic = forecast * 1.2
    pessimistic = forecast * 0.8

    return {
        "horizon_days": horizon_days,
        "lookback_days": lookback_days,
        "historical_revenue": round(snap.total_revenue, 4),
        "daily_average": round(daily_avg, 4),
        "forecast": {
            "expected": round(forecast, 4),
            "optimistic": round(optimistic, 4),
            "pessimistic": round(pessimistic, 4),
        },
        "method": "linear_trend",
        "confidence": 0.6 if lookback_days < 30 else 0.75,
    }


def _handle_memory(ledger: RevenueLedger, args: Dict[str, Any]) -> Dict[str, Any]:
    query = args["query"].lower()
    limit = args.get("limit", 10)

    # Simple keyword search (in production: semantic search via Qdrant)
    all_events = list(ledger._events.values())
    scored = []
    for e in all_events:
        score = 0
        text = f"{e.source.value} {e.event_type.value} {e.metadata} {e.attribution}".lower()
        for word in query.split():
            if word in text:
                score += 1
        if score > 0:
            scored.append((score, e))

    scored.sort(key=lambda x: (x[0], x[1].timestamp), reverse=True)
    top = [e for _, e in scored[:limit]]

    return {
        "query": args["query"],
        "results_count": len(top),
        "results": [e.to_dict() for e in top],
    }
