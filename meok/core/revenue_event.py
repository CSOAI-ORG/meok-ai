"""
Revenue event model and ledger.
Lightweight in-memory ledger for the MEOK MCP revenue tools.
"""
from __future__ import annotations

import uuid
from dataclasses import dataclass, field, asdict
from datetime import datetime, timedelta
from enum import Enum
from typing import Any, Dict, List, Optional


class RevenueSource(Enum):
    STRIPE = "stripe"
    MCP = "mcp"
    SUBSCRIPTION = "subscription"
    MARKETPLACE = "marketplace"
    SERVICES = "services"
    OTHER = "other"


class RevenueEventType(Enum):
    PAYMENT = "payment"
    REFUND = "refund"
    COST = "cost"
    OPPORTUNITY = "opportunity"
    CHURN = "churn"
    UPGRADE = "upgrade"
    DOWNGRADE = "downgrade"


@dataclass
class RevenueEvent:
    timestamp: datetime
    source: RevenueSource
    event_type: RevenueEventType
    amount: float
    currency: str = "gbp"
    metadata: Dict[str, Any] = field(default_factory=dict)
    attribution: Dict[str, Any] = field(default_factory=dict)
    confidence: float = 1.0
    event_id: str = field(default_factory=lambda: str(uuid.uuid4()))

    def to_dict(self) -> Dict[str, Any]:
        return {
            "event_id": self.event_id,
            "timestamp": self.timestamp.isoformat(),
            "source": self.source.value,
            "event_type": self.event_type.value,
            "amount": self.amount,
            "currency": self.currency,
            "metadata": self.metadata,
            "attribution": self.attribution,
            "confidence": self.confidence,
        }


@dataclass
class RevenueSnapshot:
    total_revenue: float = 0.0
    total_cost: float = 0.0
    net: float = 0.0
    event_count: int = 0
    payment_count: int = 0
    refund_count: int = 0
    start: Optional[datetime] = None
    end: Optional[datetime] = None

    def to_dict(self) -> Dict[str, Any]:
        return {
            "total_revenue": round(self.total_revenue, 4),
            "total_cost": round(self.total_cost, 4),
            "net": round(self.net, 4),
            "event_count": self.event_count,
            "payment_count": self.payment_count,
            "refund_count": self.refund_count,
            "start": self.start.isoformat() if self.start else None,
            "end": self.end.isoformat() if self.end else None,
        }


class RevenueLedger:
    """In-memory revenue ledger. Production deployments should back this with PostgreSQL."""

    def __init__(self):
        self._events: Dict[str, RevenueEvent] = {}

    def record(self, event: RevenueEvent) -> None:
        self._events[event.event_id] = event

    def query(
        self,
        source: Optional[RevenueSource] = None,
        event_type: Optional[RevenueEventType] = None,
        customer_id: Optional[str] = None,
        product_id: Optional[str] = None,
        since: Optional[datetime] = None,
        until: Optional[datetime] = None,
        limit: int = 1000,
    ) -> List[RevenueEvent]:
        results = []
        for event in self._events.values():
            if source and event.source != source:
                continue
            if event_type and event.event_type != event_type:
                continue
            if customer_id and event.attribution.get("customer_id") != customer_id:
                continue
            if product_id and event.attribution.get("product_id") != product_id:
                continue
            if since and event.timestamp < since:
                continue
            if until and event.timestamp > until:
                continue
            results.append(event)

        results.sort(key=lambda e: e.timestamp, reverse=True)
        return results[:limit]

    def snapshot(self, start: Optional[datetime] = None, end: Optional[datetime] = None) -> RevenueSnapshot:
        if end is None:
            end = datetime.utcnow()
        if start is None:
            start = end - timedelta(days=30)

        snap = RevenueSnapshot(start=start, end=end)
        for event in self._events.values():
            if start <= event.timestamp <= end:
                snap.event_count += 1
                if event.event_type == RevenueEventType.PAYMENT:
                    snap.total_revenue += event.amount
                    snap.payment_count += 1
                elif event.event_type == RevenueEventType.REFUND:
                    snap.total_revenue -= abs(event.amount)
                    snap.refund_count += 1
                elif event.event_type == RevenueEventType.COST:
                    snap.total_cost += abs(event.amount)
                else:
                    # Opportunities/upgrades counted as revenue
                    if event.amount > 0:
                        snap.total_revenue += event.amount
                    else:
                        snap.total_cost += abs(event.amount)

        snap.net = snap.total_revenue - snap.total_cost
        return snap

    def stats(self) -> Dict[str, Any]:
        total = len(self._events)
        by_source: Dict[str, int] = {}
        by_type: Dict[str, int] = {}
        for event in self._events.values():
            by_source[event.source.value] = by_source.get(event.source.value, 0) + 1
            by_type[event.event_type.value] = by_type.get(event.event_type.value, 0) + 1
        return {
            "total_events": total,
            "by_source": by_source,
            "by_type": by_type,
        }
