"""
System tool definitions and handler.
Tools: sovereign_health_check, get_system_status, trigger_maintenance,
       get_maintenance_status, sovereign_rundown
"""

import json as _json
from datetime import datetime
from typing import Dict, Any

from meok.mcp.state import ServiceState

SYSTEM_TOOLS = [
    {
        "name": "sovereign_health_check",
        "description": "Check overall system health",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "get_system_status",
        "description": "Get complete system status",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "trigger_maintenance",
        "description": "Manually trigger autonomous maintenance cycle",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "get_maintenance_status",
        "description": "Get autonomous maintenance system status",
        "inputSchema": {"type": "object", "properties": {}}
    },
    {
        "name": "sovereign_rundown",
        "description": "Comprehensive system rundown — all subsystems, agents, creativity engine, memory, consciousness state in one call",
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "get_llm_router_status",
        "description": (
            "Get LLM router status: available providers, circuit breaker state, "
            "usage stats (calls, tokens, cost per provider), and task routing table."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "task_type": {
                    "type": "string",
                    "description": "Show provider order for this task type (reasoning/code/fast/dream/care/default)",
                    "default": "default",
                }
            },
        },
    },
    {
        "name": "route_llm_request",
        "description": (
            "Send a completion request through the LLM router. "
            "Automatically selects best available provider for the task type and falls back on failure."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "prompt": {"type": "string", "description": "User message / prompt"},
                "task_type": {
                    "type": "string",
                    "description": "Task type for routing: reasoning, code, fast, dream, care, long_context, default",
                    "default": "default",
                },
                "system": {"type": "string", "description": "System prompt (optional)"},
                "max_tokens": {"type": "integer", "default": 1024},
                "preferred_provider": {
                    "type": "string",
                    "description": "Prefer this provider if available (claude/openai/gemini/ollama)",
                },
            },
            "required": ["prompt"],
        },
    },
]


async def handle_system_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle system tool calls."""

    if name == "sovereign_health_check":
        return {
            "status": "healthy",
            "components": {
                "neural_models": len(state.model_registry.models) if state.model_registry else 0,
                "memory_store": "connected" if state.memory_store else "disconnected",
                "audit_logger": "connected" if state.audit_logger else "disconnected",
                "metrics": "active" if state.metrics else "inactive",
                "alert_manager": "active" if state.alert_manager else "inactive",
                "agent_registry": "connected" if state.agent_registry else "disconnected",
                "consciousness": "active" if state.consciousness else "inactive",
            }
        }

    elif name == "get_system_status":
        return {
            "neural": state.model_registry.list_models() if state.model_registry else {},
            "memory": await state.memory_store.get_stats() if state.memory_store else {},
            "monitoring": {
                "alerts": state.alert_manager.get_alert_stats() if state.alert_manager else {},
                "metrics": state.metrics.get_dashboard_data() if state.metrics else {},
            },
            "agents": state.agent_registry.get_registry_stats() if state.agent_registry else {},
            "consciousness": state.consciousness.get_consciousness_state() if state.consciousness else {},
            "maintenance": {
                "running": state.maintenance_system.running if state.maintenance_system else False,
                "care_floor": state.maintenance_system.care_floor if state.maintenance_system else None,
            },
        }

    elif name == "trigger_maintenance":
        if not state.maintenance_system:
            return {"error": "Maintenance system not available"}
        await state.maintenance_system.force_maintenance()
        return {"status": "maintenance_cycle_triggered"}

    elif name == "get_maintenance_status":
        if not state.maintenance_system:
            return {"error": "Maintenance system not available"}
        return {
            "running": state.maintenance_system.running,
            "care_floor": state.maintenance_system.care_floor,
            "last_reflection": (
                state.maintenance_system.reflection.last_reflection.isoformat()
                if state.maintenance_system.reflection.last_reflection
                else None
            ),
        }

    elif name == "sovereign_rundown":
        return await _build_rundown(state)

    elif name == "get_llm_router_status":
        router = getattr(state, "llm_router", None)
        if router is None:
            return {"error": "LLMRouter not initialized", "hint": "Check ANTHROPIC_API_KEY / OPENAI_API_KEY env vars"}
        task_type = arguments.get("task_type", "default")
        return {
            "available_providers": router.get_available_providers(task_type),
            "task_routing_table": {
                tt: router.get_available_providers(tt)
                for tt in ["reasoning", "code", "fast", "dream", "care", "long_context", "default"]
            },
            "usage_stats": router.get_usage_stats(),
        }

    elif name == "route_llm_request":
        router = getattr(state, "llm_router", None)
        if router is None:
            return {"error": "LLMRouter not initialized"}
        prompt = arguments.get("prompt", "")
        if not prompt:
            return {"error": "prompt is required"}
        task_type = arguments.get("task_type", "default")
        system_prompt = arguments.get("system")
        max_tokens = int(arguments.get("max_tokens", 1024))
        preferred = arguments.get("preferred_provider")
        try:
            result = await router.complete(
                messages=[{"role": "user", "content": prompt}],
                task_type=task_type,
                max_tokens=max_tokens,
                system=system_prompt,
                preferred_provider=preferred,
            )
            return result
        except Exception as e:
            return {"error": str(e), "task_type": task_type}

    return {"error": f"Unknown system tool: {name}"}


async def _build_rundown(state: ServiceState) -> Dict[str, Any]:
    """Build the comprehensive sovereign rundown."""
    rundown: Dict[str, Any] = {
        "timestamp": datetime.now().isoformat(),
        "version": "2.0.0",
    }

    # Health
    rundown["health"] = "healthy"

    # Consciousness
    if state.consciousness:
        es = state.consciousness.emotional_state.current_state
        rundown["consciousness"] = {
            "mode": str(getattr(state.consciousness, 'consciousness_mode', 'waking')),
            "care_intensity": round(es.care_intensity, 3),
            "pleasure": round(es.pleasure, 3),
            "arousal": round(es.arousal, 3),
            "curiosity": round(getattr(es, 'curiosity', 0), 3),
            "aesthetics": round(getattr(es, 'aesthetics', 0), 3),
            "primary_emotion": es.primary_emotion,
            "reflections": getattr(state.consciousness, 'reflection_count', 0),
            "dreams": getattr(state.consciousness, 'dream_count', 0),
        }

    # Neural models
    if state.model_registry:
        rundown["neural_models"] = {
            mname: {
                "trained": m.is_trained,
                "metrics": {
                    k: round(v, 4) if isinstance(v, float) else v
                    for k, v in (getattr(m, 'metrics', {}) or {}).items()
                    if k in ("mse", "mae", "r2_score", "accuracy")
                },
            }
            for mname, m in state.model_registry.models.items()
        }

    # Memory
    if state.memory_store:
        try:
            mem_stats = await state.memory_store.get_memory_stats()
            rundown["memory"] = mem_stats
        except Exception:
            rundown["memory"] = {"error": "stats unavailable"}

    # Creativity engine
    if state.cross_domain_linker:
        rundown["creativity"] = {
            "bisociation_links": state.cross_domain_linker.get_stats().get("total_links", 0),
            "top_bridge": (
                state.cross_domain_linker.get_tradition_connectivity()[0]["tradition"]
                if state.cross_domain_linker.get_tradition_connectivity()
                else "none"
            ),
        }
    if state.qd_archive:
        rundown.setdefault("creativity", {})["qd_archive"] = {
            "coverage": state.qd_archive.coverage(),
            "filled": len(state.qd_archive._grid),
            "total_cells": state.qd_archive.total_cells,
        }
    if state.resonance_engine:
        rundown.setdefault("creativity", {})["resonance"] = {
            "mean_sigma": state.resonance_engine.get_stats()["mean_sigma"],
            "improvement_rate": state.resonance_engine.get_stats()["improvement_rate"],
        }

    # Agents
    agents_info: Dict[str, Any] = {}
    if state.agent_registry:
        try:
            reg_stats = state.agent_registry.get_registry_stats()
            agents_info["registry"] = reg_stats
        except Exception:
            pass
    if state.kimi_agent:
        agents_info["kimi"] = state.kimi_agent.get_status()
    agents_info["orion_available"] = state.ORION_AGENT_AVAILABLE
    agents_info["coordination_available"] = state.COORDINATION_AVAILABLE
    rundown["agents"] = agents_info

    # Asabiyyah
    if state.agent_registry and hasattr(state.agent_registry, 'compute_asabiyyah'):
        try:
            rundown["asabiyyah"] = state.agent_registry.compute_asabiyyah()
        except Exception:
            pass

    # Heartbeat
    if state.heartbeat:
        try:
            hb_status = state.heartbeat.get_status()
            rundown["heartbeat"] = {
                "pulse_count": hb_status.get("pulse_count", 0),
                "jobs": len(hb_status.get("jobs", [])),
                "nightshift_active": hb_status.get("nightshift_active", False),
            }
        except Exception:
            pass

    # Tool count — import here to avoid circular import
    from meok.mcp.tools import ALL_TOOLS
    rundown["total_mcp_tools"] = len(ALL_TOOLS)

    # Safe serialize — convert enums, numpy, etc to JSON-safe types
    try:
        import numpy as np

        def _safe(obj):
            if isinstance(obj, (np.integer,)):
                return int(obj)
            if isinstance(obj, (np.floating,)):
                return float(obj)
            if isinstance(obj, np.ndarray):
                return obj.tolist()
            if hasattr(obj, 'value'):  # Enum
                return str(obj.value)
            if hasattr(obj, '__dict__'):
                return str(obj)
            return str(obj)
    except ImportError:
        def _safe(obj):
            if hasattr(obj, 'value'):
                return str(obj.value)
            if hasattr(obj, '__dict__'):
                return str(obj)
            return str(obj)

    rundown = _json.loads(_json.dumps(rundown, default=_safe))
    return rundown
