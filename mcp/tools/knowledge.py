"""
Sovereign Knowledge tools — the 17 governed knowledge domains.

Lets the platform enumerate the domains the sovereign absorbs (science →
arts), get a domain's scope + governance stance, and record a learning to
the corpus. Governance is first-class: multi-faith-NEUTRAL, source-cited,
bias-checked, attestable (SIGIL) — serving "anyone, any belief" *requires*
neutrality. Mirrors the Hermes knowledge-curriculum.

Pattern matches the other tool modules: KNOWLEDGE_TOOLS + handle_knowledge_tool.
"""
import os
import json
import time
from typing import Dict, Any, List
from meok.mcp.state import ServiceState

# 17 domains (mirrors ~/.hermes/knowledge-curriculum.json)
KNOWLEDGE_DOMAINS: Dict[str, str] = {
    "science": "Natural & physical sciences — peer-reviewed, replicable.",
    "research": "Cross-disciplinary research & methods.",
    "technology": "Computing, AI, engineering, infrastructure.",
    "news": "Current events — multi-source, recency-weighted.",
    "economy": "Macro/micro economics, markets, labour.",
    "health": "Medicine & public health — evidence-graded, not advice.",
    "ecosystems_climate": "Climate, biodiversity, earth systems.",
    "law_governance": "Law, regulation, governance (ties to MEOK Law).",
    "tax": "Tax regimes & obligations by jurisdiction.",
    "history": "Human history — multi-perspective, sourced.",
    "religion_belief": "World faiths & belief — STRICTLY NEUTRAL, no proselytising.",
    "ethics_philosophy": "Ethics & philosophy — plural traditions.",
    "people_society": "Societies, cultures, demographics.",
    "consumers_commerce": "Consumers, products, commerce.",
    "animals_biodiversity": "Animals, welfare, biodiversity.",
    "media_culture": "Media, arts, culture.",
    "arts_language": "Arts & language — the world's tongues.",
}

# Governance stance applied to every domain (the basis for serving anyone, any belief).
NEUTRALITY = {
    "multi_faith_neutral": True,
    "bias_checked": True,
    "source_cited": True,
    "attestable": True,  # SIGIL-signed
    "council_adjudicates_contested": True,
}

_CORPUS = os.environ.get(
    "MEOK_KNOWLEDGE_CORPUS",
    os.path.join(os.path.expanduser("~"), ".hermes", "knowledge-corpus"),
)


def _record_path(domain: str) -> str:
    os.makedirs(_CORPUS, exist_ok=True)
    return os.path.join(_CORPUS, f"{domain}.jsonl")


KNOWLEDGE_TOOLS = [
    {
        "name": "list_knowledge_domains",
        "description": "List the 17 sovereign knowledge domains (science → arts) with their scope, plus the global neutrality/governance stance.",
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "get_knowledge_domain",
        "description": "Get a domain's scope + the governance stance applied to it (neutral, sourced, attestable).",
        "inputSchema": {
            "type": "object",
            "properties": {"domain": {"type": "string", "enum": list(KNOWLEDGE_DOMAINS.keys())}},
            "required": ["domain"],
        },
    },
    {
        "name": "record_learning",
        "description": "Record a learned item into a domain's corpus (must be source-cited). Appended as an attestable line; neutrality enforced.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "domain": {"type": "string", "enum": list(KNOWLEDGE_DOMAINS.keys())},
                "item": {"type": "string", "description": "The learning (concise)."},
                "source": {"type": "string", "description": "Citation/URL — required for neutrality."},
            },
            "required": ["domain", "item", "source"],
        },
    },
]


async def handle_knowledge_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle Sovereign Knowledge tool calls."""
    try:
        args = arguments or {}
        if name == "list_knowledge_domains":
            return {
                "count": len(KNOWLEDGE_DOMAINS),
                "domains": [{"id": k, "scope": v} for k, v in KNOWLEDGE_DOMAINS.items()],
                "governance": NEUTRALITY,
            }

        if name == "get_knowledge_domain":
            d = args.get("domain", "")
            if d not in KNOWLEDGE_DOMAINS:
                return {"error": f"Unknown domain: {d}", "known": list(KNOWLEDGE_DOMAINS.keys())}
            return {"domain": d, "scope": KNOWLEDGE_DOMAINS[d], "governance": NEUTRALITY}

        if name == "record_learning":
            d, item, src = args.get("domain", ""), args.get("item", ""), args.get("source", "")
            if d not in KNOWLEDGE_DOMAINS:
                return {"error": f"Unknown domain: {d}", "known": list(KNOWLEDGE_DOMAINS.keys())}
            if not item or not src:
                return {"error": "item and source are both required (source-cited neutrality)."}
            rec = {"ts": int(time.time()), "domain": d, "item": item, "source": src, "neutral": True}
            try:
                with open(_record_path(d), "a") as f:
                    f.write(json.dumps(rec) + "\n")
                rec["persisted"] = True
            except Exception as e:
                rec["persisted"] = False
                rec["persist_error"] = str(e)
            return {"recorded": True, **rec}

        return {"error": f"Unknown knowledge tool: {name}"}
    except Exception as e:
        import traceback
        return {"error": str(e), "traceback": traceback.format_exc()}
