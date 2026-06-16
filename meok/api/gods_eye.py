"""
God's Eye — Surveillance Mesh API
=================================
Open-source intelligence layer that watches everything:
internal systems, external threats, model behavior, data anomalies,
and compliance drift.

Built on open-source components to ensure transparency and
community auditability.

Core stack:
  - OpenTelemetry Collector (unified telemetry)
  - Grafana (visualization)
  - Loki (log aggregation)
  - Prometheus (metrics)
  - Jaeger (distributed tracing)

Plus MEOK custom components:
  - God-Eye Scanner (API vulnerability probing)
  - Godseye Dashboard (real-time threat intel)
"""
from __future__ import annotations

import os
import uuid
from datetime import datetime, timedelta
from typing import Any, Dict, List, Optional

from fastapi import APIRouter

# ── Optional OpenTelemetry forwarding ──
try:
    from meok.core.gods_eye_otel import log_event, record_metric, init_telemetry, _TRACE_AVAILABLE
    if _TRACE_AVAILABLE:
        from opentelemetry import trace
    _OTEL_AVAILABLE = True
except ImportError:  # pragma: no cover
    _OTEL_AVAILABLE = False

# ── Scanner ──
try:
    from meok.core.god_eye_scanner import scan_and_store, get_last_scan
except ImportError:  # pragma: no cover
    from core.god_eye_scanner import scan_and_store, get_last_scan

router = APIRouter(prefix="/v1/gods-eye", tags=["gods-eye"])

# ── In-memory telemetry stores ──
_TELEMETRY_LOGS: List[Dict[str, Any]] = []
_TELEMETRY_METRICS: Dict[str, List[Dict]] = {}
_TELEMETRY_TRACES: List[Dict[str, Any]] = []
_THREAT_INTELLIGENCE: List[Dict[str, Any]] = []


class GodseyeDashboard:
    """Real-time threat intelligence dashboard aggregator."""

    @staticmethod
    def get_system_health() -> Dict[str, Any]:
        return {
            "status": "healthy",
            "components": {
                "telemetry": len(_TELEMETRY_LOGS) > 0,
                "metrics": len(_TELEMETRY_METRICS) > 0,
                "threat_intel": len(_THREAT_INTELLIGENCE),
            },
            "last_update": datetime.utcnow().isoformat(),
        }

    @staticmethod
    def get_anomaly_summary(minutes: int = 60) -> Dict[str, Any]:
        cutoff = datetime.utcnow() - timedelta(minutes=minutes)
        recent = [t for t in _THREAT_INTELLIGENCE if datetime.fromisoformat(t["timestamp"]) > cutoff]

        severity_counts = {"low": 0, "medium": 0, "high": 0, "critical": 0}
        for r in recent:
            severity_counts[r.get("severity", "low")] += 1

        return {
            "window_minutes": minutes,
            "total_anomalies": len(recent),
            "severity_breakdown": severity_counts,
            "critical_active": severity_counts["critical"] > 0,
            "top_threats": sorted(recent, key=lambda x: x.get("severity", "low"), reverse=True)[:5],
        }


# ── OTel helpers ──

def _otel_log(source: str, level: str, message: str, metadata: Optional[Dict] = None) -> None:
    if _OTEL_AVAILABLE and os.environ.get("OTEL_EXPORTER_OTLP_ENDPOINT"):
        log_event(source, level, message, metadata)


def _otel_metric(name: str, value: float, labels: Optional[Dict] = None) -> None:
    if _OTEL_AVAILABLE and os.environ.get("OTEL_EXPORTER_OTLP_ENDPOINT"):
        record_metric(name, value, labels)


def _otel_trace(
    trace_id: str,
    span_id: str,
    operation: str,
    duration_ms: int,
    parent_span: Optional[str] = None,
) -> None:
    if not (_OTEL_AVAILABLE and os.environ.get("OTEL_EXPORTER_OTLP_ENDPOINT") and _TRACE_AVAILABLE):
        return
    try:
        init_telemetry()
        tracer = trace.get_tracer("meok.gods_eye")
        with tracer.start_span(operation) as span:
            span.set_attribute("trace_id", trace_id)
            span.set_attribute("span_id", span_id)
            span.set_attribute("operation.duration_ms", duration_ms)
            if parent_span:
                span.set_attribute("parent_span", parent_span)
    except Exception:
        pass


# ── API Endpoints ─────────────────────────────────────────────────

@router.get("/health")
async def gods_eye_health():
    """System health overview."""
    return GodseyeDashboard.get_system_health()


@router.post("/telemetry/log")
async def ingest_log(source: str, level: str, message: str, metadata: Optional[Dict] = None):
    """Ingest a log entry (OpenTelemetry-compatible)."""
    entry = {
        "log_id": f"log_{uuid.uuid4().hex[:8]}",
        "timestamp": datetime.utcnow().isoformat(),
        "source": source,
        "level": level,
        "message": message,
        "metadata": metadata or {},
    }
    _TELEMETRY_LOGS.append(entry)
    _otel_log(source, level, message, metadata)
    return {"ingested": True, "log_id": entry["log_id"]}


@router.post("/telemetry/metric")
async def ingest_metric(name: str, value: float, labels: Optional[Dict] = None):
    """Ingest a metric (Prometheus-compatible)."""
    entry = {
        "timestamp": datetime.utcnow().isoformat(),
        "value": value,
        "labels": labels or {},
    }
    if name not in _TELEMETRY_METRICS:
        _TELEMETRY_METRICS[name] = []
    _TELEMETRY_METRICS[name].append(entry)
    _otel_metric(name, value, labels)
    return {"ingested": True, "metric": name, "value": value}


@router.post("/telemetry/trace")
async def ingest_trace(
    trace_id: str,
    span_id: str,
    operation: str,
    duration_ms: int,
    parent_span: Optional[str] = None,
):
    """Ingest a distributed trace (Jaeger-compatible)."""
    entry = {
        "trace_id": trace_id,
        "span_id": span_id,
        "parent_span": parent_span,
        "operation": operation,
        "duration_ms": duration_ms,
        "timestamp": datetime.utcnow().isoformat(),
    }
    _TELEMETRY_TRACES.append(entry)
    _otel_trace(trace_id, span_id, operation, duration_ms, parent_span)
    return {"ingested": True, "trace_id": trace_id}


@router.get("/telemetry/logs")
async def query_logs(source: Optional[str] = None, level: Optional[str] = None, limit: int = 100):
    """Query telemetry logs."""
    results = _TELEMETRY_LOGS[-limit:]
    if source:
        results = [r for r in results if r["source"] == source]
    if level:
        results = [r for r in results if r["level"] == level]
    return {"logs": results, "total": len(results)}


@router.get("/telemetry/metrics/{name}")
async def query_metric(name: str, limit: int = 100):
    """Query metric time series."""
    series = _TELEMETRY_METRICS.get(name, [])[-limit:]
    return {"metric": name, "series": series, "count": len(series)}


@router.get("/telemetry/traces/{trace_id}")
async def query_trace(trace_id: str):
    """Query distributed trace by ID."""
    spans = [t for t in _TELEMETRY_TRACES if t["trace_id"] == trace_id]
    return {"trace_id": trace_id, "spans": spans, "count": len(spans)}


@router.post("/threat-intel")
async def submit_threat_intel(
    threat_type: str,
    severity: str,  # low, medium, high, critical
    description: str,
    source: Optional[str] = None,
    indicators: Optional[List[str]] = None,
):
    """Submit threat intelligence (OSINT feed)."""
    entry = {
        "intel_id": f"ti_{uuid.uuid4().hex[:8]}",
        "timestamp": datetime.utcnow().isoformat(),
        "threat_type": threat_type,
        "severity": severity,
        "description": description,
        "source": source,
        "indicators": indicators or [],
    }
    _THREAT_INTELLIGENCE.append(entry)

    # Auto-escalate to KILLSWITCH if critical
    if severity == "critical":
        from meok.mcp.tools.killswitch import _activate
        _activate({
            "level": 2,
            "reason": f"Critical threat intelligence: {description}",
            "affected_agents": [],
        })

    return {"submitted": True, "intel_id": entry["intel_id"]}


@router.get("/threat-intel")
async def query_threat_intel(severity: Optional[str] = None, limit: int = 50):
    """Query threat intelligence."""
    results = _THREAT_INTELLIGENCE[-limit:]
    if severity:
        results = [r for r in results if r["severity"] == severity]
    return {"intelligence": results, "total": len(results)}


@router.get("/dashboard")
async def gods_eye_dashboard():
    """Real-time Godseye Dashboard."""
    return {
        "system_health": GodseyeDashboard.get_system_health(),
        "anomaly_summary": GodseyeDashboard.get_anomaly_summary(minutes=60),
        "telemetry_stats": {
            "total_logs": len(_TELEMETRY_LOGS),
            "total_metrics": sum(len(v) for v in _TELEMETRY_METRICS.values()),
            "total_traces": len(_TELEMETRY_TRACES),
            "total_threats": len(_THREAT_INTELLIGENCE),
        },
        "last_updated": datetime.utcnow().isoformat(),
    }


@router.get("/scanner/status")
async def scanner_status():
    """Return the last God-Eye Scanner results (or a stub if none yet)."""
    last = get_last_scan()
    if last is not None:
        return {
            "scanner": "God-Eye",
            "status": "active",
            "last_scan": last.get("scanned_at"),
            "endpoints_checked": last.get("endpoints_checked", 0),
            "vulnerabilities_found": last.get("failed", 0),
            "scan_schedule": "On-demand",
            "report": last,
        }
    return {
        "scanner": "God-Eye",
        "status": "active",
        "last_scan": datetime.utcnow().isoformat(),
        "endpoints_checked": 0,
        "vulnerabilities_found": 0,
        "scan_schedule": "On-demand",
        "report": None,
    }


@router.post("/scanner/run")
async def scanner_run():
    """Trigger a new God-Eye vulnerability scan."""
    report = await scan_and_store()
    return {"scanning": True, "report": report}
