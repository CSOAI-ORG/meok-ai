"""KILLSWITCH.md REST API — Emergency Stop Protocol"""
from fastapi import APIRouter
from meok.mcp.tools.killswitch import _activate, _get_status, _get_history, _verify

router = APIRouter(prefix="/v1/killswitch", tags=["killswitch"])

@router.post("/activate")
async def activate(req: dict):
    return _activate(req)

@router.get("/status")
async def status():
    return _get_status()

@router.get("/history")
async def history():
    return _get_history({})

@router.post("/verify")
async def verify(req: dict):
    return _verify(req)
