"""
Compliance + BFT Confidence MCP Tools — Phase 4.6/4.7

Exposes EU AI Act, GDPR, BFT confidence probing, and anti-sycophancy
as MCP tools for dashboard monitoring and external audit.

Tools:
  get_compliance_status        — Full compliance audit for a jurisdiction
  get_bft_confidence_status    — Meta-council vote audit statistics
  get_sycophancy_report        — z_self agreement rate analysis
  run_gdpr_erasure             — Art.17 right to erasure for a user
  get_age_verification_status  — Children's Code age assessment stats
  get_agent_confidence_report  — Per-agent calibration report
"""

from typing import Dict, Any

from meok.mcp.state import ServiceState

COMPLIANCE_TOOLS = [
    {
        "name": "get_compliance_status",
        "description": (
            "Full EU AI Act + GDPR + UK compliance audit. Returns compliance score, "
            "issues by severity, DPIA status, and consent tracker stats. "
            "Run before launch and periodically in production."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "jurisdiction": {
                    "type": "string",
                    "description": "Jurisdiction to audit: UK, EU, US, CA, DEFAULT",
                    "default": "UK",
                },
            },
        },
    },
    {
        "name": "get_bft_confidence_status",
        "description": (
            "BFT Meta-Council status — per-agent confidence calibration, "
            "vote anomalies, minority streaks, asymmetry detection. "
            "Implements March 2025 research: confidence probing for LLM Byzantine consensus."
        ),
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "get_sycophancy_report",
        "description": (
            "z_self anti-sycophancy analysis — council agreement rate, "
            "adversarial engagement rate, stance drift detection. "
            "Flags if >85% agreement without genuine deliberation."
        ),
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "run_gdpr_erasure",
        "description": (
            "GDPR Art.17 right to erasure — queue erasure request for a user. "
            "Must be actioned within 30 days. Removes user data from all stores."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "user_id": {"type": "string", "description": "User ID to erase"},
            },
            "required": ["user_id"],
        },
    },
    {
        "name": "get_age_verification_status",
        "description": "UK Children's Code age assessment statistics — sessions assessed, under-13 blocked, minors under enhanced protection.",
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "get_agent_confidence_report",
        "description": (
            "Per-agent BFT confidence calibration report — accuracy vs self-declared confidence, "
            "calibration error, minority streak, trust adjustment multiplier."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string", "description": "Agent ID to get report for"},
            },
            "required": ["agent_id"],
        },
    },
    {
        "name": "get_corpus_stats",
        "description": (
            "Pain point + playbook corpus statistics — total signals, civilizational gaps count, "
            "anti-care signal ratio, average labels. Shows the civilizational knowledge base."
        ),
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "get_agent_pool_stats",
        "description": "AgentPool lazy-loading statistics — active/total agents, LRU cache hit rate, eviction count, DB loads.",
        "inputSchema": {"type": "object", "properties": {}},
    },
]


async def handle_compliance_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle compliance + BFT tool calls."""
    try:
        if name == "get_compliance_status":
            auditor = getattr(state, 'compliance_auditor', None)
            if auditor is None:
                return {"error": "ComplianceAuditor not initialised"}
            jurisdiction = arguments.get("jurisdiction", "UK")
            return auditor.run_audit(jurisdiction=jurisdiction)

        elif name == "get_bft_confidence_status":
            bft = getattr(state, 'bft_meta_council', None)
            if bft is None:
                return {"error": "BFTMetaCouncil not initialised"}
            return bft.get_status()

        elif name == "get_sycophancy_report":
            z_self = getattr(state, 'z_self', None)
            if z_self is None:
                return {"error": "z_self not initialised"}
            return z_self.check_sycophancy()

        elif name == "run_gdpr_erasure":
            gdpr = getattr(state, 'gdpr_consent', None)
            if gdpr is None:
                return {"error": "GDPRConsentTracker not initialised"}
            user_id = arguments.get("user_id", "")
            if not user_id:
                return {"error": "user_id required"}
            ticket_id = gdpr.request_erasure(user_id)
            return {
                "ticket_id": ticket_id,
                "user_id": user_id,
                "deadline": "30 days from today (GDPR Art.17)",
                "next_steps": [
                    "Run erasure pipeline to remove user data from PostgreSQL",
                    "Remove from Weaviate vector store",
                    "Remove from Neo4j graph (user nodes + relationships)",
                    "Unlearn from River online model if possible",
                    "Confirm erasure in audit log",
                ],
            }

        elif name == "get_age_verification_status":
            age = getattr(state, 'age_verification', None)
            if age is None:
                return {"error": "AgeVerificationLayer not initialised"}
            return age.status()

        elif name == "get_agent_confidence_report":
            bft = getattr(state, 'bft_meta_council', None)
            if bft is None:
                return {"error": "BFTMetaCouncil not initialised"}
            agent_id = arguments.get("agent_id", "")
            if not agent_id:
                return {"error": "agent_id required"}
            return bft.get_agent_confidence_report(agent_id)

        elif name == "get_corpus_stats":
            try:
                from meok.learning.pain_point_corpus import get_corpus_stats
                return get_corpus_stats()
            except Exception as e:
                return {"error": str(e)}

        elif name == "get_agent_pool_stats":
            pool = getattr(state, 'agent_pool', None)
            if pool is None:
                return {"error": "AgentPoolManager not initialised"}
            return pool.stats()

        return {"error": f"Unknown compliance tool: {name}"}
    except Exception as e:
        return {"error": f"Compliance tool error: {str(e)}", "tool": name}
