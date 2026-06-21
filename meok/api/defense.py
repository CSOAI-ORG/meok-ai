"""
Defense / NATO Theater Regulatory Mapping API
=============================================
Military-grade compliance overlay for operational theaters.

Classifications:
  - UNCLASSIFIED: Public regulatory data only
  - RESTRICTED: Theater-specific deployment rules
  - NATO SECRET: Coalition partner AI governance alignment
  - NATO TOP SECRET: Adversarial capability mapping

Theaters:
  - European Theater (NATO JFC Brunssum / Naples)
  - Indo-Pacific Theater (INDOPACOM)
  - Middle East Theater (CENTCOM)
  - Arctic Theater (JFC Norfolk)

Each theater has:
  - Host nation AI regulations (from RegGeoInt)
  - NATO STANAG overlays
  - Classification-level restrictions
  - Coalition partner interoperability rules
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, List, Optional
from datetime import datetime
import uuid

router = APIRouter(prefix="/v1/defense", tags=["defense-nato"])

# ── Classification levels ──
CLASSIFICATIONS = ["UNCLASSIFIED", "RESTRICTED", "NATO SECRET", "NATO TOP SECRET"]

# ── Theater definitions ──
THEATERS: Dict[str, Dict[str, Any]] = {
    "eucom": {
        "name": "European Theater",
        "jfc": "JFC Brunssum / Naples",
        "host_nations": ["DE", "FR", "GB", "PL", "RO", "BG", "EE", "LV", "LT"],
        "nato_stanags": ["STANAG 4774", "STANAG 4778", "STANAG 5602"],
        "classification_ceiling": "NATO SECRET",
    },
    "indopacom": {
        "name": "Indo-Pacific Theater",
        "jfc": "INDOPACOM",
        "host_nations": ["JP", "KR", "AU", "SG", "PH"],
        "nato_stanags": ["STANAG 4774", "STANAG 5602"],
        "classification_ceiling": "NATO TOP SECRET",
    },
    "centcom": {
        "name": "Middle East Theater",
        "jfc": "CENTCOM",
        "host_nations": ["AE", "IL"],
        "nato_stanags": ["STANAG 4774"],
        "classification_ceiling": "NATO SECRET",
    },
    "arctic": {
        "name": "Arctic Theater",
        "jfc": "JFC Norfolk",
        "host_nations": ["NO", "IS", "CA", "US"],
        "nato_stanags": ["STANAG 4774", "STANAG 4778"],
        "classification_ceiling": "NATO SECRET",
    },
}

# ── Deployment registry ──
_THEATER_DEPLOYMENTS: Dict[str, Dict[str, Any]] = {}


class TheaterDeploymentRequest(BaseModel):
    system_name: str
    classification: str
    theater_id: str
    operator_nation: str
    coalition_partners: List[str]
    ai_capabilities: List[str]
    autonomy_level: str  # human-in-the-loop, human-on-the-loop, autonomous


class TheaterComplianceCheck(BaseModel):
    deployment_id: str
    partner_nation: str


def _check_theater_compliance(deploy: Dict[str, Any], partner: str) -> Dict[str, Any]:
    """Check if a deployment can be shared with a coalition partner."""
    from meok.api.compliance_map import REGULATORY_MAP
    theater = THEATERS.get(deploy["theater_id"])
    if not theater:
        return {"allowed": False, "error": "Unknown theater"}

    # Classification check
    deploy_idx = CLASSIFICATIONS.index(deploy["classification"])
    theater_idx = CLASSIFICATIONS.index(theater["classification_ceiling"])
    if deploy_idx > theater_idx:
        return {
            "allowed": False,
            "error": f"Classification {deploy['classification']} exceeds theater ceiling {theater['classification_ceiling']}",
        }

    # Partner nation jurisdiction check
    partner_juris = REGULATORY_MAP.get(partner.upper())
    if not partner_juris:
        return {"allowed": False, "error": f"Partner nation {partner} not in compliance map"}

    # Autonomy level restrictions
    if deploy["autonomy_level"] == "autonomous" and partner.upper() not in ["US", "GB", "FR"]:
        return {
            "allowed": False,
            "error": "Autonomous systems sharing restricted to Five Eyes / EU nuclear powers",
        }

    # Cross-border framework alignment
    shared_frameworks = set(partner_juris["frameworks"])
    issues = []
    for host in theater["host_nations"]:
        host_juris = REGULATORY_MAP.get(host)
        if host_juris:
            host_fw = set(host_juris["frameworks"])
            missing = host_fw - shared_frameworks
            if missing:
                issues.append({"host_nation": host, "partner_missing_frameworks": list(missing)})

    return {
        "allowed": len(issues) == 0,
        "classification_check": "passed",
        "partner_jurisdiction": partner_juris["name"],
        "autonomy_clearance": deploy["autonomy_level"],
        "framework_alignment_issues": issues,
    }


# ── API Endpoints ─────────────────────────────────────────────────

@router.get("/theaters")
async def list_theaters():
    """List all operational theaters."""
    return {
        "theaters": [
            {"id": k, **v} for k, v in THEATERS.items()
        ],
        "total": len(THEATERS),
    }


@router.get("/theaters/{theater_id}")
async def get_theater(theater_id: str):
    """Get theater details with host nation regulatory profiles."""
    theater = THEATERS.get(theater_id.lower())
    if not theater:
        raise HTTPException(status_code=404, detail="Theater not found")

    from meok.api.compliance_map import REGULATORY_MAP
    host_profiles = []
    for nation in theater["host_nations"]:
        profile = REGULATORY_MAP.get(nation)
        if profile:
            host_profiles.append({"code": nation, **profile})

    return {
        "id": theater_id.lower(),
        **theater,
        "host_nation_profiles": host_profiles,
        "regulatory_framework_count": sum(len(p["frameworks"]) for p in host_profiles),
    }


@router.post("/deploy")
async def deploy_to_theater(req: TheaterDeploymentRequest):
    """Register an AI system deployment in a theater."""
    theater = THEATERS.get(req.theater_id.lower())
    if not theater:
        raise HTTPException(status_code=404, detail="Theater not found")

    if req.classification not in CLASSIFICATIONS:
        raise HTTPException(status_code=400, detail=f"Invalid classification. Use: {CLASSIFICATIONS}")

    deploy_id = f"dep_{uuid.uuid4().hex[:12]}"
    deployment = {
        "deployment_id": deploy_id,
        "system_name": req.system_name,
        "classification": req.classification,
        "theater_id": req.theater_id.lower(),
        "operator_nation": req.operator_nation.upper(),
        "coalition_partners": [p.upper() for p in req.coalition_partners],
        "ai_capabilities": req.ai_capabilities,
        "autonomy_level": req.autonomy_level,
        "deployed_at": datetime.utcnow().isoformat(),
        "status": "active",
        "compliance_checks": [],
    }
    _THEATER_DEPLOYMENTS[deploy_id] = deployment
    return deployment


@router.post("/compliance-check")
async def theater_compliance_check(req: TheaterComplianceCheck):
    """Check coalition partner interoperability for a deployment."""
    deploy = _THEATER_DEPLOYMENTS.get(req.deployment_id)
    if not deploy:
        raise HTTPException(status_code=404, detail="Deployment not found")

    result = _check_theater_compliance(deploy, req.partner_nation)
    check_record = {
        "check_id": f"chk_{uuid.uuid4().hex[:8]}",
        "partner_nation": req.partner_nation.upper(),
        "result": result,
        "checked_at": datetime.utcnow().isoformat(),
    }
    deploy["compliance_checks"].append(check_record)
    return check_record


@router.get("/deployments")
async def list_deployments(theater_id: Optional[str] = None):
    """List theater deployments."""
    results = [
        d for d in _THEATER_DEPLOYMENTS.values()
        if not theater_id or d["theater_id"] == theater_id.lower()
    ]
    return {
        "deployments": results,
        "total": len(results),
        "by_classification": {
            c: len([d for d in results if d["classification"] == c])
            for c in CLASSIFICATIONS
        },
    }


@router.get("/deployments/{deployment_id}")
async def get_deployment(deployment_id: str):
    """Get deployment details."""
    deploy = _THEATER_DEPLOYMENTS.get(deployment_id)
    if not deploy:
        raise HTTPException(status_code=404, detail="Deployment not found")
    return deploy


@router.get("/theaters/{theater_id}/regulatory-summary")
async def theater_regulatory_summary(theater_id: str):
    """Summary of all regulatory requirements across a theater."""
    theater = THEATERS.get(theater_id.lower())
    if not theater:
        raise HTTPException(status_code=404, detail="Theater not found")

    from meok.api.compliance_map import REGULATORY_MAP
    all_frameworks = set()
    enforcement_dates = {}
    for nation in theater["host_nations"]:
        profile = REGULATORY_MAP.get(nation)
        if profile:
            all_frameworks.update(profile["frameworks"])
            enforcement_dates[nation] = profile.get("enforcement_date", "unknown")

    return {
        "theater_id": theater_id.lower(),
        "theater_name": theater["name"],
        "unique_frameworks": sorted(list(all_frameworks)),
        "framework_count": len(all_frameworks),
        "enforcement_dates": enforcement_dates,
        "nato_stanags": theater["nato_stanags"],
        "classification_ceiling": theater["classification_ceiling"],
    }
