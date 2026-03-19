"""
Sustainability MCP Tools — Phase 4.13
Care-aligned business model monitoring.
"""

from typing import Dict, Any
from meok.mcp.state import ServiceState

SUSTAINABILITY_TOOLS = [
    {
        "name": "get_sustainability_status",
        "description": (
            "Full sustainability report: MRR, tier breakdown, dark pattern guard status, "
            "free-to-paid conversion rate, care sustainability score. "
            "MEOK model: Free (genuine care) + Pro (£12/mo) + Enterprise (custom) + Research Partner. "
            "No dark patterns. Pricing changes require Shura vote."
        ),
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "get_tier_info",
        "description": (
            "Get tier configuration details. tier_name: Free | Pro | Enterprise | Research Partner | Community Supporter. "
            "Omit tier_name for all tiers overview."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "tier_name": {
                    "type": "string",
                    "description": "Tier to get info for. Omit for all tiers.",
                }
            },
        },
    },
    {
        "name": "check_upgrade_prompt",
        "description": (
            "Run a proposed upgrade prompt through the DarkPatternGuard before showing to users. "
            "Returns: safe (bool), violations list, recommended_action. "
            "Any violations trigger Shura council review. "
            "PROHIBITED: artificial urgency, care quality degradation, emotional pressure, upgrade guilt."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "prompt_text": {
                    "type": "string",
                    "description": "The upgrade prompt text to check",
                },
                "context": {
                    "type": "string",
                    "description": "Where this prompt appears (e.g. 'memory_limit_reached', 'monthly_digest')",
                },
            },
            "required": ["prompt_text"],
        },
    },
    {
        "name": "record_tier_change",
        "description": "Record a user tier change (upgrade/downgrade/churn) for sustainability tracking.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "tier_name": {"type": "string", "description": "Tier name (Free, Pro, Enterprise, etc.)"},
                "delta": {"type": "integer", "description": "1 for new user, -1 for churn", "default": 1},
            },
            "required": ["tier_name"],
        },
    },
    {
        "name": "get_compute_credits_status",
        "description": (
            "Phase 4.13: Free compute credits tracker. "
            "Shows status of startup credit applications: "
            "Google Cloud ($200K), AWS ($100K), Azure ($150K), NVIDIA ($50K), Vast.ai ($2.5K). "
            "Total: $502.5K available. Apply NOW — Google approves in 48h."
        ),
        "inputSchema": {"type": "object", "properties": {}},
    },
]


# Compute credits status (manual tracking — requires human action to apply)
COMPUTE_CREDITS = [
    {
        "provider": "Google Cloud",
        "amount_usd": 200000,
        "program": "Google for Startups Cloud Program",
        "apply_url": "https://cloud.google.com/startup",
        "approval_timeline": "48 hours",
        "status": "not_applied",
        "notes": "Apply immediately. Fastest approval. AI-first credits.",
    },
    {
        "provider": "AWS",
        "amount_usd": 100000,
        "program": "AWS Activate Founders",
        "apply_url": "https://aws.amazon.com/activate/",
        "approval_timeline": "2-3 days",
        "status": "not_applied",
        "notes": "Need company registration. Use MEOK AI LTD details.",
    },
    {
        "provider": "Microsoft Azure",
        "amount_usd": 150000,
        "program": "Microsoft for Startups Founders Hub",
        "apply_url": "https://foundershub.startups.microsoft.com/",
        "approval_timeline": "5-7 days",
        "status": "not_applied",
        "notes": "Includes GitHub Copilot + Azure OpenAI access.",
    },
    {
        "provider": "NVIDIA",
        "amount_usd": 50000,
        "program": "NVIDIA Inception Program",
        "apply_url": "https://www.nvidia.com/en-us/deep-learning-ai/startups/",
        "approval_timeline": "1 week",
        "status": "not_applied",
        "notes": "GPU access for AI research. Good for Vast.ai partnership.",
    },
    {
        "provider": "Vast.ai",
        "amount_usd": 2500,
        "program": "Already active (workergroup 21087)",
        "apply_url": "https://cloud.vast.ai",
        "approval_timeline": "Instant",
        "status": "active",
        "notes": "Currently running 3x RTX 4070 Ti instances. Expand on demand.",
    },
]


async def handle_sustainability_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle sustainability tool calls."""

    engine = getattr(state, 'sustainability_engine', None)

    if name == "get_sustainability_status":
        if engine is None:
            return {"error": "SustainabilityEngine not initialised"}
        return engine.get_sustainability_status()

    elif name == "get_tier_info":
        if engine is None:
            return {"error": "SustainabilityEngine not initialised"}
        tier_name = arguments.get("tier_name")
        return engine.get_tier_info(tier_name)

    elif name == "check_upgrade_prompt":
        if engine is None:
            return {"error": "SustainabilityEngine not initialised"}
        prompt_text = arguments.get("prompt_text", "")
        context = arguments.get("context", "unknown")
        return engine.dark_pattern_guard.check_upgrade_prompt(prompt_text, context)

    elif name == "record_tier_change":
        if engine is None:
            return {"error": "SustainabilityEngine not initialised"}
        tier_name = arguments.get("tier_name", "Free")
        delta = int(arguments.get("delta", 1))
        engine.record_tier_user(tier_name, delta)
        return {"recorded": True, "tier": tier_name, "delta": delta}

    elif name == "get_compute_credits_status":
        total = sum(c["amount_usd"] for c in COMPUTE_CREDITS)
        active = sum(c["amount_usd"] for c in COMPUTE_CREDITS if c["status"] == "active")
        pending = sum(c["amount_usd"] for c in COMPUTE_CREDITS if c["status"] == "not_applied")
        return {
            "total_available_usd": total,
            "active_usd": active,
            "pending_application_usd": pending,
            "credits": COMPUTE_CREDITS,
            "action_required": "Apply for Google Cloud ($200K), AWS ($100K), Azure ($150K), NVIDIA ($50K) NOW",
            "runway_months_estimate": round(total / 15000, 1),  # ~$15K/month ops cost
            "breakeven_paid_users": 320,  # at $15/mo, $2.50 compute cost = $12.50 margin
        }

    return {"error": f"Unknown sustainability tool: {name}"}
