"""
MCP Server Card Standard
========================
Implements the .well-known/mcp-server.json discovery spec.
Any MCP-compliant server can expose its capabilities, tools, auth,
and contact info via a static JSON document at a well-known URL.

Spec: https://spec.modelcontextprotocol.io/specification/discovery/
"""
from fastapi import APIRouter
from typing import Dict, Any, List

router = APIRouter(tags=["mcp-server-card"])

# ── Server Card Template ──────────────────────────────────────────

SERVER_CARD: Dict[str, Any] = {
    "schema_version": "2025-06-01",
    "server": {
        "name": "MEOK Protocol Nexus",
        "description": "Regulatory Geospatial Intelligence platform — MCP, A2A, ACP, P2P, ABCI unified gateway.",
        "url": "https://api.meok.ai",
        "version": "3.0.0-phase2",
        "contact": {
            "email": "protocols@meok.ai",
            "security": "security@meok.ai",
        },
    },
    "protocols": {
        "mcp": {
            "version": "2024-11-05",
            "endpoint": "/mcp",
            "tools_endpoint": "/mcp/tools/list",
            "auth": "bearer",
        },
        "a2a": {
            "version": "1.0",
            "endpoint": "/.well-known/agent.json",
            "tasks_endpoint": "/v1/tasks/send",
            "streaming": True,
        },
        "acp": {
            "version": "0.1",
            "endpoint": "/acp/ws",
            "transport": "websocket",
        },
        "p2p": {
            "version": "0.1",
            "endpoint": "/p2p/relay",
            "transport": "libp2p",
        },
        "abci": {
            "version": "0.1",
            "endpoint": "/abci",
            "consensus": "tendermint-compatible",
        },
    },
    "capabilities": {
        "tools": True,
        "resources": False,
        "prompts": True,
        "sampling": False,
        "streaming": True,
    },
    "auth": {
        "type": "bearer",
        "token_url": "https://api.meok.ai/auth/login",
        "refresh_url": "https://api.meok.ai/auth/refresh",
        "api_key_url": "https://api.meok.ai/auth/api-key",
        "scopes": ["tools:read", "tools:execute", "a2a:send", "acp:connect"],
    },
    "trust": {
        "assti_score": 0.94,
        "sigil_version": "0.1",
        "audit_receipts": True,
        "sovereign_shield": True,
        "compliance_certifications": ["eu-ai-act-ready", "gdpr-ready", "iso27001-pending"],
    },
    "verticals": [
        {"id": "safety", "name": "SafetyOf.AI", "domain": "ai-safety"},
        {"id": "pokerhud", "name": "PokerHUD.ai", "domain": "gaming"},
        {"id": "suicidestop", "name": "SuicideStop.ai", "domain": "mental-health"},
        {"id": "diyhelp", "name": "DIYHelp.ai", "domain": "diy"},
        {"id": "fishkeeper", "name": "FishKeeper-AI", "domain": "pets"},
        {"id": "koikeeper", "name": "KoiKeeper-AI", "domain": "pets"},
        {"id": "loopfactory", "name": "LoopFactory.ai", "domain": "industrial"},
        {"id": "industrial_domains", "name": "Industrial Domains", "domain": "industrial"},
        {"id": "industrial_hire", "name": "Industrial Hire AI", "domain": "industrial"},
        {"id": "councilofai", "name": "CouncilOf.AI", "domain": "governance"},
        {"id": "asisecurity", "name": "ASISecurity Portal", "domain": "security"},
    ],
}


@router.get("/.well-known/mcp-server.json")
async def mcp_server_card():
    """
    MCP Server Card — public discovery endpoint.
    Returns the server's capabilities, protocols, auth, and vertical coverage.
    """
    return SERVER_CARD


@router.get("/v1/server-card")
async def server_card_v1():
    """Versioned server card for API consumers."""
    return {
        **SERVER_CARD,
        "_links": {
            "self": "/v1/server-card",
            "tools": "/mcp",
            "health": "/health",
            "compliance_map": "/v1/compliance-map",
            "trust_layer": "/v1/trust",
            "marketplace": "/v1/marketplace",
        },
    }


@router.get("/v1/server-card/verticals/{vertical_id}")
async def vertical_server_card(vertical_id: str):
    """Get server card scoped to a specific vertical."""
    vertical = next((v for v in SERVER_CARD["verticals"] if v["id"] == vertical_id), None)
    if not vertical:
        return {"error": "Vertical not found", "id": vertical_id}

    return {
        "schema_version": SERVER_CARD["schema_version"],
        "server": SERVER_CARD["server"],
        "protocols": SERVER_CARD["protocols"],
        "capabilities": SERVER_CARD["capabilities"],
        "auth": SERVER_CARD["auth"],
        "trust": SERVER_CARD["trust"],
        "vertical": vertical,
    }
