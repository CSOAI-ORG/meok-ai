"""Council of AI BFT REST API — Byzantine Fault Tolerant Consensus"""
from fastapi import APIRouter
from meok.mcp.tools.council_bft import handle_council_tool

router = APIRouter(prefix="/v1/council", tags=["council-bft"])

@router.post("/deliberate")
async def deliberate(req: dict):
    return await handle_council_tool("council_deliberate", req, None)

@router.post("/verify")
async def verify(req: dict):
    return await handle_council_tool("council_verify_attestation", req, None)

@router.get("/history")
async def history(limit: int = 50):
    return await handle_council_tool("council_history", {"limit": limit}, None)
