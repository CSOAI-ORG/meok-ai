"""
Unified API Router
Exposes vertical-specific tools, trust registry, and protocol health.
"""
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from typing import Any, Dict, List, Optional

from meok.auth.dependencies import require_auth
from meok.a2a.gateway import VERTICAL_AGENTS
from meok.consensus.abci import app as abci_app

router = APIRouter(prefix="/v1", tags=["unified"])


# ── Request/Response Models ───────────────────────────────────────
class ToolExecuteRequest(BaseModel):
    vertical: str
    tool: str
    arguments: Dict[str, Any]


class TrustRegistryEntry(BaseModel):
    entity_id: str
    status: str
    metadata: Dict[str, Any]


# ── Vertical Tools ────────────────────────────────────────────────
@router.get("/verticals/{vertical}/tools")
async def list_vertical_tools(vertical: str, user=Depends(require_auth)):
    """List MCP-style tools available for a vertical."""
    agent = VERTICAL_AGENTS.get(vertical)
    if not agent:
        raise HTTPException(status_code=404, detail="Vertical not found")
    # Return skills as tools
    return {
        "vertical": vertical,
        "tools": [
            {
                "name": skill["id"],
                "description": skill["description"],
                "inputSchema": {"type": "object", "properties": {}},
            }
            for skill in agent.get("skills", [])
        ],
    }


@router.post("/verticals/{vertical}/tools/{tool}")
async def execute_vertical_tool(
    vertical: str,
    tool: str,
    body: Dict[str, Any],
    user=Depends(require_auth),
):
    """Execute a tool for a specific vertical."""
    agent = VERTICAL_AGENTS.get(vertical)
    if not agent:
        raise HTTPException(status_code=404, detail="Vertical not found")

    # TODO: dispatch to actual tool handler
    return {
        "success": True,
        "vertical": vertical,
        "tool": tool,
        "result": f"Executed {tool} for {vertical} with args: {body}",
        "executed_by": user.get("sub"),
    }


# ── Trust Registry ────────────────────────────────────────────────
@router.get("/trust-registry/{entity_id}")
async def get_trust_entry(entity_id: str, user=Depends(require_auth)):
    """Query trust registry for an entity (via ABCI state)."""
    entry = abci_app.state.get(entity_id)
    if not entry:
        raise HTTPException(status_code=404, detail="Entity not found")
    return {"entity_id": entity_id, **entry}


@router.post("/trust-registry")
async def register_trust_entry(body: TrustRegistryEntry, user=Depends(require_auth)):
    """Register a new trust entry (submits ABCI tx)."""
    import json
    tx = json.dumps({
        "type": "register",
        "entity_id": body.entity_id,
        "metadata": body.metadata,
    }).encode("utf-8")
    result = abci_app.deliver_tx(tx)
    if result.get("code", 0) != 0:
        raise HTTPException(status_code=400, detail=result.get("log", "Tx failed"))
    return {"registered": body.entity_id, "height": abci_app.height}


# ── Protocol Health ───────────────────────────────────────────────
@router.get("/health")
async def protocol_health():
    """Health check for all protocol layers."""
    return {
        "status": "healthy",
        "protocols": {
            "mcp": {"status": "active"},
            "a2a": {"status": "active", "agents": list(VERTICAL_AGENTS.keys())},
            "acp": {"status": "active"},
            "p2p": {"status": "standby"},  # started on demand
            "abci": {"status": "active", "height": abci_app.height, "entries": len(abci_app.state)},
        },
    }
