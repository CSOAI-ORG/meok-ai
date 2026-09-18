"""
MEOK Law tools — jurisdiction engine for the MCP server.

Resolves the *stack* of law that applies to a place (local → regional →
national → bloc + tax + cross-border), and the overlap between two
jurisdictions. Ported from the MEOK OS LAW_STACKS prototype so the
production platform can answer "what governs me here?" — the basis for
jurisdiction-aware governance (pairs with the compliance + legacy-bridge tools).

Pattern matches the other tool modules: LAW_TOOLS + handle_law_tool.
"""
from typing import Dict, Any, List
from meok.mcp.state import ServiceState

# jurisdiction id → {place, tiers:[[scope, authority, [frameworks...]], ...]}
LAW_STACKS: Dict[str, Dict[str, Any]] = {
    "uk": {"place": "London, United Kingdom 🇬🇧", "tiers": [
        ["Local", "City of London", ["Local licensing"]],
        ["National", "United Kingdom 🇬🇧", ["UK GDPR", "DPA 2018", "Online Safety Act", "DSIT AI framework"]],
        ["Tax", "HMRC", ["MTD VAT (digital links)", "Corporation Tax", "Income Tax / PAYE"]],
        ["Cross-border", "Serving the EU?", ["EU AI Act applies if you serve EU users"]],
    ]},
    "de": {"place": "Berlin, Germany 🇩🇪", "tiers": [
        ["Local", "Land Berlin", ["State data rules"]],
        ["National", "Germany 🇩🇪", ["BDSG", "TMG", "German AI strategy"]],
        ["Tax", "Finanzamt + EU", ["VAT (USt)", "EU ViDA e-invoicing", "OECD BEPS / Pillar Two"]],
        ["Bloc", "European Union 🇪🇺", ["GDPR", "EU AI Act", "DORA", "NIS2", "DSA"]],
    ]},
    "us_ca": {"place": "California, USA 🇺🇸", "tiers": [
        ["State", "California", ["CCPA / CPRA", "CA AI transparency (SB 942)", "ADMT rules", "CA sales & use tax"]],
        ["Federal", "United States 🇺🇸", ["NIST AI RMF", "HIPAA · GLBA · FCRA", "FTC Act §5", "IRS federal income tax"]],
    ]},
    "us_co": {"place": "Colorado, USA 🇺🇸", "tiers": [
        ["State", "Colorado", ["Colorado AI Act (2026)", "Colorado Privacy Act"]],
        ["Federal", "United States 🇺🇸", ["NIST AI RMF", "sectoral laws"]],
    ]},
    "sg": {"place": "Singapore 🇸🇬", "tiers": [
        ["National", "Singapore 🇸🇬", ["PDPA", "Model AI Governance Framework", "IMDA AI Verify"]],
        ["Tax", "IRAS", ["GST", "Corporate Income Tax"]],
    ]},
    "cn": {"place": "China 🇨🇳", "tiers": [
        ["National", "China 🇨🇳", ["PIPL", "Data Security Law", "Generative AI Measures (CAC)", "Algorithm registry"]],
        ["Tax", "STA", ["VAT (fapiao)", "Corporate Income Tax"]],
    ]},
}


def _stack_frameworks(jid: str) -> List[str]:
    out: List[str] = []
    for _scope, _auth, fws in LAW_STACKS.get(jid, {}).get("tiers", []):
        out.extend(fws)
    return out


LAW_TOOLS = [
    {
        "name": "list_jurisdictions",
        "description": "List the jurisdictions MEOK Law knows (UK, Germany, California, Colorado, Singapore, China…), each with its place label.",
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "resolve_jurisdiction",
        "description": "Resolve the full stack of law for a jurisdiction: local → regional → national → bloc, plus tax + cross-border. Returns each tier (scope, authority, frameworks).",
        "inputSchema": {
            "type": "object",
            "properties": {"jurisdiction": {"type": "string", "description": "Jurisdiction id.", "enum": list(LAW_STACKS.keys())}},
            "required": ["jurisdiction"],
        },
    },
    {
        "name": "cross_jurisdiction",
        "description": "Compare two jurisdictions: the frameworks they share, those unique to each, and the merged superset you must satisfy to operate across both.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "a": {"type": "string", "description": "First jurisdiction id.", "enum": list(LAW_STACKS.keys())},
                "b": {"type": "string", "description": "Second jurisdiction id.", "enum": list(LAW_STACKS.keys())},
            },
            "required": ["a", "b"],
        },
    },
]


async def handle_law_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle MEOK Law jurisdiction tool calls."""
    try:
        args = arguments or {}
        if name == "list_jurisdictions":
            return {"count": len(LAW_STACKS), "jurisdictions": [{"id": k, "place": v["place"]} for k, v in LAW_STACKS.items()]}

        if name == "resolve_jurisdiction":
            jid = args.get("jurisdiction", "")
            stack = LAW_STACKS.get(jid)
            if stack is None:
                return {"error": f"Unknown jurisdiction: {jid}", "known": list(LAW_STACKS.keys())}
            return {
                "jurisdiction": jid,
                "place": stack["place"],
                "tiers": [{"scope": s, "authority": a, "frameworks": f} for s, a, f in stack["tiers"]],
                "all_frameworks": _stack_frameworks(jid),
            }

        if name == "cross_jurisdiction":
            a, b = args.get("a", ""), args.get("b", "")
            if a not in LAW_STACKS or b not in LAW_STACKS:
                return {"error": "Both a and b must be known jurisdictions", "known": list(LAW_STACKS.keys())}
            fa, fb = _stack_frameworks(a), _stack_frameworks(b)
            sa, sb = set(fa), set(fb)
            return {
                "a": {"id": a, "place": LAW_STACKS[a]["place"]},
                "b": {"id": b, "place": LAW_STACKS[b]["place"]},
                "shared": sorted(sa & sb),
                "only_a": sorted(sa - sb),
                "only_b": sorted(sb - sa),
                "merged_superset": sorted(sa | sb),
                "note": "To operate across both, satisfy the merged superset; shared frameworks are common ground.",
            }

        return {"error": f"Unknown law tool: {name}"}
    except Exception as e:
        import traceback
        return {"error": str(e), "traceback": traceback.format_exc()}
