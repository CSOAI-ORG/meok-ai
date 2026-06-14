"""KILLSWITCH.md REST API — Emergency Stop Protocol"""
from fastapi import APIRouter
from meok.mcp.tools.killswitch import _activate, _check_status, _get_history, _anomaly_report

router = APIRouter(prefix="/v1/killswitch", tags=["killswitch"])

@router.post("/activate")
async def activate(req: dict):
    return _activate(req)

@router.get("/status")
async def status():
    return _check_status({"agent_id": "global", "anomaly_score": 0.0})

@router.get("/history")
async def history():
    return _get_history({})

@router.post("/verify")
async def verify(req: dict):
    return _anomaly_report(req)
