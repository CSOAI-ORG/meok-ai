"""
Tests for the remaining governance-core MCP tools:
Knowledge (17 domains), Aware (consent-gated presence), scoreboard persistence,
and the bridges full-parse availability flag.

Run: cd ~/meok-ai && pytest meok/tests/test_governance_full.py -v
"""
import os
import sys
import types
import asyncio
import tempfile
import importlib.util
from pathlib import Path

_REPO = Path(__file__).resolve().parents[2]


def _stub_state():
    sys.modules.setdefault("meok", types.ModuleType("meok"))
    sys.modules.setdefault("meok.mcp", types.ModuleType("meok.mcp"))
    if "meok.mcp.state" not in sys.modules:
        st = types.ModuleType("meok.mcp.state")
        st.ServiceState = object
        sys.modules["meok.mcp.state"] = st


def _load(modname, filename):
    _stub_state()
    spec = importlib.util.spec_from_file_location(modname, _REPO / "mcp" / "tools" / filename)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


# Point the scoreboard at a temp store BEFORE importing it, so persistence is hermetic.
_TMP = tempfile.mkdtemp()
os.environ["MEOK_SCOREBOARD_PATH"] = os.path.join(_TMP, "board.json")
os.environ["MEOK_KNOWLEDGE_CORPUS"] = os.path.join(_TMP, "corpus")

knowledge = _load("knowledge_under_test", "knowledge.py")
aware = _load("aware_under_test", "aware.py")
bridges = _load("bridges_under_test2", "bridges.py")


def _k(name, args):
    return asyncio.run(knowledge.handle_knowledge_tool(name, args, None))


def _a(name, args):
    return asyncio.run(aware.handle_aware_tool(name, args, None))


def _b(name, args):
    return asyncio.run(bridges.handle_legacy_bridges_tool(name, args, None))


# ---- Knowledge ----

def test_knowledge_lists_17_neutral_domains():
    r = _k("list_knowledge_domains", {})
    assert r["count"] == 17
    assert r["governance"]["multi_faith_neutral"] is True
    assert any(d["id"] == "religion_belief" for d in r["domains"])


def test_knowledge_religion_domain_is_neutral():
    r = _k("get_knowledge_domain", {"domain": "religion_belief"})
    assert "NEUTRAL" in r["scope"].upper()
    assert r["governance"]["attestable"] is True


def test_knowledge_record_requires_source():
    bad = _k("record_learning", {"domain": "science", "item": "x", "source": ""})
    assert "error" in bad
    good = _k("record_learning", {"domain": "science", "item": "Water boils at 100C at 1atm", "source": "NIST"})
    assert good["recorded"] is True and good["persisted"] is True


def test_knowledge_unknown_domain_errors():
    assert "error" in _k("get_knowledge_domain", {"domain": "astrology"})


# ---- Aware (consent-first) ----

def test_aware_off_by_default():
    r = _a("aware_status", {})
    assert r["consent"]["granted"] is False
    assert r["default"] == "off" and r["on_device"] is True


def test_aware_resolve_blocked_without_consent():
    r = _a("aware_resolve_scene", {"scene": "stranger"})
    assert "error" in r and r["error"] == "consent required"


def test_aware_consent_then_resolve_states():
    _a("aware_consent", {"grant": True, "scope": "presence"})
    alone = _a("aware_resolve_scene", {"scene": "alone"})
    assert alone["action"] == "full" and alone["guardian_engaged"] is False
    stranger = _a("aware_resolve_scene", {"scene": "stranger"})
    assert stranger["action"] == "guardian-lock" and stranger["guardian_engaged"] is True
    # revoke → blocked again
    _a("aware_consent", {"grant": False})
    assert "error" in _a("aware_resolve_scene", {"scene": "alone"})


# ---- Scoreboard persistence ----

def test_scoreboard_persists_across_reload():
    sb = _load("sb_persist_1", "scoreboard.py")
    asyncio.run(sb.handle_scoreboard_tool("record_result", {"model": "m1", "task": "t", "score": 0.8}, None))
    # fresh module instance loads from the same temp file
    sb2 = _load("sb_persist_2", "scoreboard.py")
    lb = asyncio.run(sb2.handle_scoreboard_tool("leaderboard", {"task": "t"}, None))
    assert any(row["model"] == "m1" for row in lb["rows"])


# ---- Bridges full-parse flag ----

def test_bridges_full_parse_flag_present_and_false_without_package():
    # No <bridge>-bridge-mcp installed in the test env → metadata governance, flag False.
    r = _b("govern_legacy_message", {"bridge_id": "cobol", "message": "IDENTIFICATION DIVISION."})
    assert r["governed"] is True
    assert r["full_bridge_installed"] is False
    assert "Metadata-level" in r["note"]
