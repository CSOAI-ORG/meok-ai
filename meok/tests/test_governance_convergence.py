"""
Tests for the MEOK Law + Model-Board MCP tools (mcp/tools/law.py, scoreboard.py).

Law:        list_jurisdictions, resolve_jurisdiction (tiered stack), cross_jurisdiction (overlap).
Model-Board: register_model, record_result, leaderboard, best_for (ranking by mean score).

Run: cd ~/meok-ai && pytest meok/tests/test_governance_convergence.py -v
"""
import asyncio
import sys
import types
import importlib.util
from pathlib import Path

_REPO = Path(__file__).resolve().parents[2]


def _load(modname, filename):
    """Load a tool module by path with a stubbed state dep (CI-safe, no package install)."""
    sys.modules.setdefault("meok", types.ModuleType("meok"))
    sys.modules.setdefault("meok.mcp", types.ModuleType("meok.mcp"))
    if "meok.mcp.state" not in sys.modules:
        _st = types.ModuleType("meok.mcp.state")
        _st.ServiceState = object
        sys.modules["meok.mcp.state"] = _st
    spec = importlib.util.spec_from_file_location(modname, _REPO / "mcp" / "tools" / filename)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


law = _load("law_under_test", "law.py")
sb = _load("scoreboard_under_test", "scoreboard.py")


def _law(name, args):
    return asyncio.run(law.handle_law_tool(name, args, None))


def _sb(name, args):
    return asyncio.run(sb.handle_scoreboard_tool(name, args, None))


# ---- MEOK Law ----

def test_list_jurisdictions():
    r = _law("list_jurisdictions", {})
    assert r["count"] == len(law.LAW_STACKS) >= 6
    assert any(j["id"] == "uk" for j in r["jurisdictions"])


def test_resolve_uk_has_tiers_and_frameworks():
    r = _law("resolve_jurisdiction", {"jurisdiction": "uk"})
    assert r["place"].startswith("London")
    scopes = [t["scope"] for t in r["tiers"]]
    assert "National" in scopes and "Tax" in scopes
    assert "UK GDPR" in r["all_frameworks"]


def test_resolve_de_includes_bloc():
    r = _law("resolve_jurisdiction", {"jurisdiction": "de"})
    assert "EU AI Act" in r["all_frameworks"]
    assert any(t["scope"] == "Bloc" for t in r["tiers"])


def test_cross_jurisdiction_overlap_and_superset():
    # CA and CO both sit under US federal NIST AI RMF → a true shared framework.
    r = _law("cross_jurisdiction", {"a": "us_ca", "b": "us_co"})
    assert "NIST AI RMF" in r["shared"]
    # merged superset contains members unique to each
    assert set(r["only_a"]).issubset(set(r["merged_superset"]))
    assert set(r["only_b"]).issubset(set(r["merged_superset"]))
    assert len(r["merged_superset"]) >= max(len(r["only_a"]), len(r["only_b"]))

    # uk vs de: distinct national regimes, no exact-string overlap, but a real superset.
    r2 = _law("cross_jurisdiction", {"a": "uk", "b": "de"})
    assert len(r2["merged_superset"]) == len(set(r2["only_a"]) | set(r2["only_b"]) | set(r2["shared"]))


def test_law_unknown_jurisdiction_errors():
    assert "error" in _law("resolve_jurisdiction", {"jurisdiction": "atlantis"})


# ---- Model-Board ----

def test_register_and_record_then_leaderboard():
    _sb("register_model", {"id": "claude-opus-4-8", "provider": "Anthropic", "type": "LLM"})
    _sb("record_result", {"model": "claude-opus-4-8", "task": "code", "score": 0.9})
    _sb("record_result", {"model": "gpt-x", "task": "code", "score": 0.7, "provider": "OpenAI"})
    lb = _sb("leaderboard", {"task": "code"})
    assert lb["count"] >= 2
    # highest mean first
    assert lb["rows"][0]["mean_score"] >= lb["rows"][-1]["mean_score"]


def test_best_for_picks_top():
    _sb("record_result", {"model": "winner", "task": "math", "score": 0.95})
    _sb("record_result", {"model": "loser", "task": "math", "score": 0.4})
    r = _sb("best_for", {"task": "math"})
    assert r["best"]["model"] == "winner"


def test_best_for_respects_min_n():
    _sb("record_result", {"model": "thin", "task": "rare", "score": 0.99})
    r = _sb("best_for", {"task": "rare", "min_n": 5})
    assert r["best"] is None


def test_score_is_clamped_0_1():
    out = _sb("record_result", {"model": "clamp", "task": "t", "score": 5})
    assert out["score"] == 1.0


def test_scoreboard_unknown_tool_errors():
    assert "error" in _sb("nope", {})
