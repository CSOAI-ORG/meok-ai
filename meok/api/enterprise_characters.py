"""
Enterprise Characters API
=========================
Branded AI assistants with built-in compliance for enterprise customers.

Each enterprise tenant gets:
  - White-labelled character configurations
  - Jurisdiction-scoped deployment rules
  - Audit trail integration (Nobulex receipts)
  - ASSTI transparency reporting
  - Trust tier enforcement

Revenue model: $500-$50K/mo per tenant depending on scale.
"""
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import Dict, Any, List, Optional
from datetime import datetime
import uuid

router = APIRouter(prefix="/v1/enterprise", tags=["enterprise-characters"])

# ── In-memory enterprise registry (PostgreSQL in prod) ──
_ENTERPRISE_TENANTS: Dict[str, Dict[str, Any]] = {}
_ENTERPRISE_CHARACTERS: Dict[str, Dict[str, Any]] = {}


class EnterpriseTenantCreate(BaseModel):
    org_name: str
    contact_email: str
    primary_jurisdiction: str
    allowed_jurisdictions: List[str]
    tier: str = "starter"  # starter, growth, enterprise, gov, defense
    branding: Optional[Dict[str, str]] = None


class EnterpriseCharacterCreate(BaseModel):
    tenant_id: str
    character_name: str
    archetype: str
    description: str
    allowed_domains: List[str]
    assti_minimum: float = 0.7
    jurisdictions: List[str]
    metadata: Dict[str, Any] = {}


class DeploymentRequest(BaseModel):
    character_id: str
    target_jurisdictions: List[str]
    environment: str = "production"  # staging, production, airgap


def _generate_tenant_id() -> str:
    return f"ent_{uuid.uuid4().hex[:12]}"


def _generate_character_id() -> str:
    return f"ec_{uuid.uuid4().hex[:16]}"


def _check_compliance(tenant_id: str, jurisdictions: List[str]) -> Dict[str, Any]:
    """Check if tenant can deploy to given jurisdictions."""
    tenant = _ENTERPRISE_TENANTS.get(tenant_id)
    if not tenant:
        return {"allowed": False, "error": "Tenant not found"}

    allowed = set(tenant["allowed_jurisdictions"])
    requested = set(j.upper() for j in jurisdictions)
    blocked = requested - allowed

    # Also check RegGeoInt for framework requirements
    from meok.api.compliance_map import REGULATORY_MAP
    missing_frameworks = []
    for j in requested:
        jdata = REGULATORY_MAP.get(j)
        if not jdata:
            missing_frameworks.append(f"Unknown jurisdiction: {j}")

    return {
        "allowed": len(blocked) == 0 and len(missing_frameworks) == 0,
        "tenant_allowed_jurisdictions": list(allowed),
        "requested": list(requested),
        "blocked_jurisdictions": list(blocked),
        "missing_frameworks": missing_frameworks,
        "compliance_cost_estimate": f"${len(requested) * 5000}-${len(requested) * 15000}",
    }


# ── API Endpoints ─────────────────────────────────────────────────

@router.post("/tenants")
async def create_tenant(req: EnterpriseTenantCreate):
    """Register a new enterprise tenant."""
    tenant_id = _generate_tenant_id()
    tenant = {
        "tenant_id": tenant_id,
        "org_name": req.org_name,
        "contact_email": req.contact_email,
        "primary_jurisdiction": req.primary_jurisdiction.upper(),
        "allowed_jurisdictions": [j.upper() for j in req.allowed_jurisdictions],
        "tier": req.tier,
        "branding": req.branding or {},
        "created_at": datetime.utcnow().isoformat(),
        "character_limit": {"starter": 3, "growth": 10, "enterprise": 100, "gov": 500, "defense": 1000}[req.tier],
        "monthly_price_usd": {"starter": 500, "growth": 2500, "enterprise": 10000, "gov": 25000, "defense": 50000}[req.tier],
    }
    _ENTERPRISE_TENANTS[tenant_id] = tenant
    return tenant


@router.get("/tenants/{tenant_id}")
async def get_tenant(tenant_id: str):
    """Get enterprise tenant details."""
    tenant = _ENTERPRISE_TENANTS.get(tenant_id)
    if not tenant:
        raise HTTPException(status_code=404, detail="Tenant not found")
    return tenant


@router.post("/characters")
async def create_character(req: EnterpriseCharacterCreate):
    """Create an enterprise-branded character."""
    tenant = _ENTERPRISE_TENANTS.get(req.tenant_id)
    if not tenant:
        raise HTTPException(status_code=404, detail="Tenant not found")

    existing = [c for c in _ENTERPRISE_CHARACTERS.values() if c["tenant_id"] == req.tenant_id]
    if len(existing) >= tenant["character_limit"]:
        raise HTTPException(status_code=403, detail="Character limit reached for tier")

    # Compliance pre-check
    compliance = _check_compliance(req.tenant_id, req.jurisdictions)
    if not compliance["allowed"]:
        raise HTTPException(status_code=403, detail=f"Compliance check failed: {compliance}")

    char_id = _generate_character_id()
    character = {
        "character_id": char_id,
        "tenant_id": req.tenant_id,
        "character_name": req.character_name,
        "archetype": req.archetype,
        "description": req.description,
        "allowed_domains": req.allowed_domains,
        "assti_minimum": req.assti_minimum,
        "jurisdictions": [j.upper() for j in req.jurisdictions],
        "metadata": req.metadata,
        "status": "draft",
        "created_at": datetime.utcnow().isoformat(),
        "deployment_history": [],
    }
    _ENTERPRISE_CHARACTERS[char_id] = character
    return character


@router.get("/characters/{character_id}")
async def get_character(character_id: str):
    """Get enterprise character details."""
    char = _ENTERPRISE_CHARACTERS.get(character_id)
    if not char:
        raise HTTPException(status_code=404, detail="Character not found")
    return char


@router.get("/tenants/{tenant_id}/characters")
async def list_tenant_characters(tenant_id: str):
    """List all characters for a tenant."""
    chars = [c for c in _ENTERPRISE_CHARACTERS.values() if c["tenant_id"] == tenant_id]
    return {"tenant_id": tenant_id, "characters": chars, "count": len(chars)}


@router.post("/deploy")
async def deploy_character(req: DeploymentRequest):
    """Deploy a character to target jurisdictions."""
    char = _ENTERPRISE_CHARACTERS.get(req.character_id)
    if not char:
        raise HTTPException(status_code=404, detail="Character not found")

    compliance = _check_compliance(char["tenant_id"], req.target_jurisdictions)
    if not compliance["allowed"]:
        raise HTTPException(status_code=403, detail=f"Deployment blocked: {compliance}")

    # Generate deployment certificate
    deploy_id = f"dep_{uuid.uuid4().hex[:12]}"
    deployment = {
        "deployment_id": deploy_id,
        "character_id": req.character_id,
        "environment": req.environment,
        "jurisdictions": [j.upper() for j in req.target_jurisdictions],
        "compliance_check": compliance,
        "deployed_at": datetime.utcnow().isoformat(),
        "status": "active",
    }
    char["deployment_history"].append(deployment)
    char["status"] = "deployed"

    return deployment


@router.get("/tenants/{tenant_id}/audit-trail")
async def tenant_audit_trail(tenant_id: str):
    """Get full audit trail for a tenant (all characters, deployments, compliance checks)."""
    tenant = _ENTERPRISE_TENANTS.get(tenant_id)
    if not tenant:
        raise HTTPException(status_code=404, detail="Tenant not found")

    chars = [c for c in _ENTERPRISE_CHARACTERS.values() if c["tenant_id"] == tenant_id]
    return {
        "tenant_id": tenant_id,
        "org_name": tenant["org_name"],
        "audit_generated_at": datetime.utcnow().isoformat(),
        "character_count": len(chars),
        "characters": chars,
        "total_deployments": sum(len(c["deployment_history"]) for c in chars),
    }


@router.get("/pricing")
async def enterprise_pricing():
    """Get enterprise pricing tiers."""
    return {
        "tiers": {
            "starter": {"monthly_usd": 500, "characters": 3, "jurisdictions": 5, "support": "email"},
            "growth": {"monthly_usd": 2500, "characters": 10, "jurisdictions": 15, "support": "priority"},
            "enterprise": {"monthly_usd": 10000, "characters": 100, "jurisdictions": 50, "support": "dedicated"},
            "gov": {"monthly_usd": 25000, "characters": 500, "jurisdictions": 100, "support": "classified", "airgap": True},
            "defense": {"monthly_usd": 50000, "characters": 1000, "jurisdictions": 200, "support": "TS/SCI", "airgap": True, "natol5": True},
        },
        "notes": "All tiers include ASSTI reporting, audit receipts, and trust layer integration.",
    }
