"""AGENTIK.md REST API — Safety Stack"""
from fastapi import APIRouter
from meok.mcp.tools.agentik import handle_agentik_tool

router = APIRouter(prefix="/v1/agentik", tags=["agentik"])

@router.post("/validate")
async def validate(req: dict):
    return await handle_agentik_tool("agentik_validate", req, None)

@router.get("/status")
async def status():
    return await handle_agentik_tool("agentik_status", {}, None)

@router.get("/compliance/{jurisdiction}")
async def compliance(jurisdiction: str):
    return await handle_agentik_tool("agentik_compliance_check", {"jurisdiction": jurisdiction}, None)
