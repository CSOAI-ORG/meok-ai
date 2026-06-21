"""Rainbow Security REST API — 7-Layer Defense"""
from fastapi import APIRouter
from pydantic import BaseModel

try:
    from meok.core.rainbow_security import RainbowSecurityFramework
except ImportError:  # pragma: no cover
    from core.rainbow_security import RainbowSecurityFramework

try:
    from meok.core.rainbow_scheduler import (
        start_scheduler,
        stop_scheduler,
        get_scheduler_status,
        read_assessments,
        run_rainbow_assessment,
    )
except ImportError:  # pragma: no cover
    from core.rainbow_scheduler import (
        start_scheduler,
        stop_scheduler,
        get_scheduler_status,
        read_assessments,
        run_rainbow_assessment,
    )

router = APIRouter(prefix="/v1/rainbow", tags=["rainbow-security"])


class ScheduleRequest(BaseModel):
    enabled: bool


@router.get("/layer/{layer_code}")
async def get_layer(layer_code: str):
    return RainbowSecurityFramework.get_layer_status(layer_code)


@router.get("/layers")
async def get_all_layers():
    return RainbowSecurityFramework.get_all_layers()


@router.post("/assess")
async def run_assessment():
    return RainbowSecurityFramework.run_assessment()


@router.post("/schedule")
async def toggle_schedule(req: ScheduleRequest):
    if req.enabled:
        return start_scheduler()
    return stop_scheduler()


@router.get("/schedule")
async def schedule_status():
    return get_scheduler_status()


@router.get("/assessments")
async def get_assessments(limit: int = 100):
    assessments = read_assessments(limit=limit)
    return {"assessments": assessments, "total": len(assessments)}
