"""
Model-Board tools — a track-record scoreboard for AI models/agents.

Register models, record per-task results, and rank them (leaderboard +
best-for-a-task). Ported from model-scoreboard-mcp so the production platform
can keep an evidence-based "which model wins which task" surface — the basis
for the SmartRouter / best-model selection.

State is in-memory (per process). For durable storage, back it with the
platform's memory/DB layer; the API is stable either way.

Pattern matches the other tool modules: SCOREBOARD_TOOLS + handle_scoreboard_tool.
"""
from typing import Dict, Any, List
from meok.mcp.state import ServiceState

MODEL_TYPES = ["LLM", "MoE", "MoM", "SLM", "world", "reasoning", "multimodal"]

# id -> {provider, type}
_MODELS: Dict[str, Dict[str, str]] = {}
# list of {model, task, score}
_RESULTS: List[Dict[str, Any]] = []


def _agg(task: str = "") -> List[Dict[str, Any]]:
    """Aggregate mean score + n per model, optionally filtered to one task."""
    acc: Dict[str, Dict[str, Any]] = {}
    for r in _RESULTS:
        if task and r["task"] != task:
            continue
        m = acc.setdefault(r["model"], {"model": r["model"], "sum": 0.0, "n": 0})
        m["sum"] += r["score"]
        m["n"] += 1
    rows = []
    for m in acc.values():
        rows.append({
            "model": m["model"],
            "provider": _MODELS.get(m["model"], {}).get("provider", ""),
            "type": _MODELS.get(m["model"], {}).get("type", ""),
            "mean_score": round(m["sum"] / m["n"], 4) if m["n"] else 0.0,
            "n": m["n"],
        })
    rows.sort(key=lambda x: x["mean_score"], reverse=True)
    return rows


SCOREBOARD_TOOLS = [
    {
        "name": "register_model",
        "description": "Register a model/agent on the board (id, provider, type: LLM/MoE/MoM/SLM/world/reasoning/multimodal).",
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {"type": "string"},
                "provider": {"type": "string"},
                "type": {"type": "string", "enum": MODEL_TYPES, "default": "LLM"},
            },
            "required": ["id", "provider"],
        },
    },
    {
        "name": "record_result",
        "description": "Record a benchmark/eval result: model, task, score (0..1). Auto-registers the model if new.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "model": {"type": "string"},
                "task": {"type": "string"},
                "score": {"type": "number"},
                "provider": {"type": "string", "default": ""},
                "type": {"type": "string", "enum": MODEL_TYPES, "default": "LLM"},
            },
            "required": ["model", "task", "score"],
        },
    },
    {
        "name": "leaderboard",
        "description": "Ranked board by mean score (optionally for one task). Returns model, provider, type, mean_score, n.",
        "inputSchema": {"type": "object", "properties": {"task": {"type": "string", "default": ""}}},
    },
    {
        "name": "best_for",
        "description": "The best model for a given task (highest mean score with at least min_n results).",
        "inputSchema": {
            "type": "object",
            "properties": {"task": {"type": "string"}, "min_n": {"type": "integer", "default": 1}},
            "required": ["task"],
        },
    },
]


async def handle_scoreboard_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle Model-Board tool calls."""
    try:
        args = arguments or {}
        if name == "register_model":
            mid = args.get("id", "")
            if not mid:
                return {"error": "id required"}
            _MODELS[mid] = {"provider": args.get("provider", ""), "type": args.get("type", "LLM")}
            return {"registered": mid, **_MODELS[mid], "total_models": len(_MODELS)}

        if name == "record_result":
            mid, task = args.get("model", ""), args.get("task", "")
            if not mid or not task or "score" not in args:
                return {"error": "model, task, score required"}
            if mid not in _MODELS:
                _MODELS[mid] = {"provider": args.get("provider", ""), "type": args.get("type", "LLM")}
            score = max(0.0, min(1.0, float(args["score"])))
            _RESULTS.append({"model": mid, "task": task, "score": score})
            return {"recorded": True, "model": mid, "task": task, "score": score, "total_results": len(_RESULTS)}

        if name == "leaderboard":
            rows = _agg(args.get("task", ""))
            return {"task": args.get("task", "") or "ALL", "rows": rows, "count": len(rows)}

        if name == "best_for":
            task = args.get("task", "")
            if not task:
                return {"error": "task required"}
            min_n = int(args.get("min_n", 1))
            rows = [r for r in _agg(task) if r["n"] >= min_n]
            if not rows:
                return {"task": task, "best": None, "note": f"no model with >= {min_n} result(s) for '{task}'"}
            return {"task": task, "best": rows[0], "runners_up": rows[1:3]}

        return {"error": f"Unknown scoreboard tool: {name}"}
    except Exception as e:
        import traceback
        return {"error": str(e), "traceback": traceback.format_exc()}
