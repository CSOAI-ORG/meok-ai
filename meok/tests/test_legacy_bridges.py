"""
Tests for the CSOAI Layer-0 legacy-bridge MCP tools (mcp/tools/bridges.py).

Coverage:
1. catalog holds the full 19-bridge family
2. exactly the two expected tools are exported, each with a schema
3. list_legacy_bridges returns all 19 with the pipeline pattern
4. govern_legacy_message surfaces the right frameworks + flags per sector
   (OFAC for ACH, PAN/PCI for cards, special-category for healthcare,
    OT-control for SCADA) and is attestable
5. unknown bridge_id and unknown tool both return a graceful error

Run: cd meok && pytest tests/test_legacy_bridges.py -v
"""
import asyncio
import sys
from pathlib import Path

# Put the repo root on the path so the namespace package `meok.mcp.*` resolves.
_REPO = Path(__file__).resolve().parents[2]
if str(_REPO) not in sys.path:
    sys.path.insert(0, str(_REPO))

try:
    from meok.mcp.tools.bridges import (
        BRIDGE_CATALOG,
        LEGACY_BRIDGES_TOOLS,
        handle_legacy_bridges_tool,
    )
except Exception:
    # Fallback: load bridges.py by file path with a stubbed state dep (CI-safe,
    # matches the load-by-path idiom in test_council_vote.py). bridges.py only
    # uses meok.mcp.state.ServiceState as a type hint.
    import types
    import importlib.util

    sys.modules.setdefault("meok", types.ModuleType("meok"))
    sys.modules.setdefault("meok.mcp", types.ModuleType("meok.mcp"))
    _st = types.ModuleType("meok.mcp.state")
    _st.ServiceState = object
    sys.modules["meok.mcp.state"] = _st

    _spec = importlib.util.spec_from_file_location(
        "bridges_under_test", _REPO / "mcp" / "tools" / "bridges.py"
    )
    _b = importlib.util.module_from_spec(_spec)
    _spec.loader.exec_module(_b)
    BRIDGE_CATALOG = _b.BRIDGE_CATALOG
    LEGACY_BRIDGES_TOOLS = _b.LEGACY_BRIDGES_TOOLS
    handle_legacy_bridges_tool = _b.handle_legacy_bridges_tool


def _call(name, args):
    return asyncio.run(handle_legacy_bridges_tool(name, args, None))


def test_catalog_is_the_full_19():
    assert len(BRIDGE_CATALOG) == 19
    # spot-check the family spans the sectors we claim
    for k in ("cobol", "iso20022", "hl7-fhir", "scada", "nacha", "iso8583", "tax", "gs1", "mismo", "dlms"):
        assert k in BRIDGE_CATALOG
        assert BRIDGE_CATALOG[k]["frameworks"], f"{k} has no frameworks"


def test_exports_two_tools_with_schemas():
    names = {t["name"] for t in LEGACY_BRIDGES_TOOLS}
    assert names == {"list_legacy_bridges", "govern_legacy_message"}
    for t in LEGACY_BRIDGES_TOOLS:
        assert t.get("description")
        assert t.get("inputSchema", {}).get("type") == "object"


def test_list_returns_all_19():
    r = _call("list_legacy_bridges", {})
    assert r["count"] == 19
    assert len(r["bridges"]) == 19
    assert "govern" in r["pattern"]


def test_govern_ach_flags_ofac():
    r = _call("govern_legacy_message", {"bridge_id": "nacha"})
    assert r["governed"] is True
    assert "OFAC" in " ".join(r["frameworks"])
    assert any("sanctions" in f.lower() for f in r["risk_flags"])
    assert r["attestation"].startswith("attestable")


def test_govern_cards_flags_pan():
    r = _call("govern_legacy_message", {"bridge_id": "iso8583"})
    assert "PCI-DSS" in " ".join(r["frameworks"])
    assert any("PAN" in f for f in r["risk_flags"])


def test_govern_healthcare_flags_special_category():
    r = _call("govern_legacy_message", {"bridge_id": "hl7-fhir"})
    assert any("special-category" in f or "Personal" in f for f in r["risk_flags"])


def test_govern_scada_flags_control_point():
    r = _call("govern_legacy_message", {"bridge_id": "scada"})
    assert any("control-point" in f or "OT" in f for f in r["risk_flags"])


def test_unknown_bridge_id_errors_gracefully():
    r = _call("govern_legacy_message", {"bridge_id": "definitely-not-a-bridge"})
    assert "error" in r and "known" in r


def test_unknown_tool_errors_gracefully():
    r = _call("not_a_tool", {})
    assert "error" in r
