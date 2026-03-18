"""
Hatch API — create, manage, and inspect sovereign AI instances (tenants).
Mount this router on the dashboard API server.
"""

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field
from typing import Optional

from meok.auth.dependencies import require_auth
from meok.auth.models import TokenPayload
from meok.auth.jwt_utils import generate_api_key
from meok.auth.repository import AuthRepository

router = APIRouter(prefix="/api/hatch", tags=["hatch"])
_repo = AuthRepository()


class HatchRequest(BaseModel):
    hatch_name: str = Field(default="Sovereign", description="Name for the AI instance")
    config: dict = Field(default_factory=lambda: {
        "care_veto_threshold": 0.4,
        "council_size": 33,
        "voting_threshold": 22,
    })


class HatchResponse(BaseModel):
    tenant_id: str
    hatch_name: str
    api_key: str
    mcp_endpoint: str
    status: str


class HatchStatus(BaseModel):
    tenant_id: str
    hatch_name: str
    status: str
    memory_count: int
    agent_count: int
    last_activity: Optional[str]


@router.post("", response_model=HatchResponse)
async def hatch(body: HatchRequest, user: TokenPayload = Depends(require_auth)):
    """Hatch a new sovereign AI instance for the authenticated user."""
    # Get user's existing tenant
    tenant = await _repo.get_tenant_by_user(user.sub)
    if not tenant:
        raise HTTPException(status_code=404, detail="User tenant not found")

    # Seed default data for the tenant
    await _repo.seed_tenant(tenant["id"])

    # Generate API key for MCP access
    key = generate_api_key()
    await _repo.create_api_key(user.sub, tenant["id"], key, "hatch-default")

    return HatchResponse(
        tenant_id=tenant["id"],
        hatch_name=tenant["hatch_name"],
        api_key=key,
        mcp_endpoint="/mcp",
        status="active",
    )


@router.get("/{tenant_id}", response_model=HatchStatus)
async def hatch_status(tenant_id: str, user: TokenPayload = Depends(require_auth)):
    """Get status of a hatched AI instance."""
    # Verify ownership
    tenant = await _repo.get_tenant_by_user(user.sub)
    if not tenant or tenant["id"] != tenant_id:
        raise HTTPException(status_code=403, detail="Not your tenant")

    stats = await _repo.get_tenant_stats(tenant_id)
    return HatchStatus(
        tenant_id=tenant_id,
        hatch_name=tenant["hatch_name"],
        status=tenant["status"],
        memory_count=stats["memory_count"],
        agent_count=stats["agent_count"],
        last_activity=stats["last_activity"],
    )


@router.delete("/{tenant_id}")
async def deactivate_hatch(tenant_id: str, user: TokenPayload = Depends(require_auth)):
    """Soft-delete a hatched AI instance."""
    tenant = await _repo.get_tenant_by_user(user.sub)
    if not tenant or tenant["id"] != tenant_id:
        raise HTTPException(status_code=403, detail="Not your tenant")

    await _repo.deactivate_tenant(tenant_id)
    return {"status": "deactivated", "tenant_id": tenant_id}
