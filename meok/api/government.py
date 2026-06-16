"""
Government Enforcement API
==========================
Built for regulators, not lawyers.

Provides:
  - Real-time AI system registration by jurisdiction
  - Automated compliance gap detection
  - Enforcement action tracking
  - Public transparency registers
  - Cross-border investigation tools

The selling point: governments currently use spreadsheets and PDFs
to track AI systems. MEOK gives them an API.
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, List, Optional
from datetime import datetime
import uuid

router = APIRouter(prefix="/v1/government", tags=["government"])

# ── Registries ──
_REGISTERED_SYSTEMS: Dict[str, Dict[str, Any]] = {}
_ENFORCEMENT_ACTIONS: List[Dict[str, Any]] = []
_TRANSPARENCY_REGISTER: List[Dict[str, Any]] = []


class SystemRegistration(BaseModel):
    system_name: str
    operator_id: str
    operator_name: str
    jurisdictions: List[str]
    risk_classification: str  # minimal, limited, high-risk, unacceptable
    intended_use: str
    training_data_provenance: Optional[str] = None
    aibom_hash: Optional[str] = None
    contact_email: str


class ComplianceCheckRequest(BaseModel):
    system_id: str
    jurisdiction: str


class EnforcementAction(BaseModel):
    jurisdiction: str
    system_id: str
    action_type: str  # warning, fine, suspension, ban, criminal_referral
    severity: str  # low, medium, high, critical
    description: str
    penalty_amount_eur: Optional[float] = None


# ── Helpers ───────────────────────────────────────────────────────

def _check_gaps(system: Dict[str, Any], jurisdiction: str) -> List[Dict[str, Any]]:
    """Identify compliance gaps for a system in a jurisdiction."""
    from meok.api.compliance_map import REGULATORY_MAP, FRAMEWORKS
    gaps = []
    jdata = REGULATORY_MAP.get(jurisdiction.upper())
    if not jdata:
        return [{"type": "unknown_jurisdiction", "message": f"{jurisdiction} not in RegGeoInt database"}]

    required_frameworks = set(jdata["frameworks"])
    system_frameworks = set(system.get("compliance_frameworks", []))
    missing = required_frameworks - system_frameworks

    for fw in missing:
        fw_data = FRAMEWORKS.get(fw, {})
        gaps.append({
            "type": "missing_framework",
            "framework": fw,
            "framework_name": fw_data.get("name", fw),
            "penalty_max": fw_data.get("penalties_max", "Unknown"),
            "severity": "high" if fw in ["eu-ai-act", "gdpr"] else "medium",
        })

    # Risk tier check
    if system.get("risk_classification") == "high-risk":
        if "eu-ai-act" in missing:
            gaps.append({
                "type": "risk_tier_mismatch",
                "message": "High-risk system lacks EU AI Act conformity assessment",
                "severity": "critical",
            })

    return gaps


# ── API Endpoints ─────────────────────────────────────────────────

@router.post("/register")
async def register_system(req: SystemRegistration):
    """Register an AI system with the regulatory authority."""
    system_id = f"sys_{uuid.uuid4().hex[:16]}"
    registration = {
        "system_id": system_id,
        "system_name": req.system_name,
        "operator_id": req.operator_id,
        "operator_name": req.operator_name,
        "jurisdictions": [j.upper() for j in req.jurisdictions],
        "risk_classification": req.risk_classification,
        "intended_use": req.intended_use,
        "training_data_provenance": req.training_data_provenance,
        "aibom_hash": req.aibom_hash,
        "contact_email": req.contact_email,
        "registered_at": datetime.utcnow().isoformat(),
        "compliance_frameworks": [],
        "status": "registered",
    }
    _REGISTERED_SYSTEMS[system_id] = registration

    # Auto-add to transparency register for public accountability
    _TRANSPARENCY_REGISTER.append({
        "system_id": system_id,
        "system_name": req.system_name,
        "operator_name": req.operator_name,
        "risk_classification": req.risk_classification,
        "jurisdictions": req.jurisdictions,
        "registered_at": registration["registered_at"],
    })

    return registration


@router.get("/systems/{system_id}")
async def get_system(system_id: str):
    """Get registered system details."""
    system = _REGISTERED_SYSTEMS.get(system_id)
    if not system:
        raise HTTPException(status_code=404, detail="System not found")
    return system


@router.get("/systems")
async def list_systems(
    jurisdiction: Optional[str] = None,
    risk_classification: Optional[str] = None,
    operator_id: Optional[str] = None,
):
    """List registered systems with filtering."""
    results = []
    for sys in _REGISTERED_SYSTEMS.values():
        if jurisdiction and jurisdiction.upper() not in sys["jurisdictions"]:
            continue
        if risk_classification and sys["risk_classification"] != risk_classification:
            continue
        if operator_id and sys["operator_id"] != operator_id:
            continue
        results.append(sys)
    return {"systems": results, "total": len(results)}


@router.post("/compliance-check")
async def compliance_check(req: ComplianceCheckRequest):
    """Run automated compliance gap detection on a registered system."""
    system = _REGISTERED_SYSTEMS.get(req.system_id)
    if not system:
        raise HTTPException(status_code=404, detail="System not found")

    gaps = _check_gaps(system, req.jurisdiction)
    return {
        "system_id": req.system_id,
        "jurisdiction": req.jurisdiction.upper(),
        "gaps": gaps,
        "gap_count": len(gaps),
        "compliant": len(gaps) == 0,
        "checked_at": datetime.utcnow().isoformat(),
    }


@router.post("/enforce")
async def enforcement_action(req: EnforcementAction):
    """Record an enforcement action against a system."""
    system = _REGISTERED_SYSTEMS.get(req.system_id)
    if not system:
        raise HTTPException(status_code=404, detail="System not found")

    action = {
        "action_id": f"act_{uuid.uuid4().hex[:12]}",
        "jurisdiction": req.jurisdiction.upper(),
        "system_id": req.system_id,
        "system_name": system["system_name"],
        "operator_name": system["operator_name"],
        "action_type": req.action_type,
        "severity": req.severity,
        "description": req.description,
        "penalty_amount_eur": req.penalty_amount_eur,
        "timestamp": datetime.utcnow().isoformat(),
    }
    _ENFORCEMENT_ACTIONS.append(action)
    system["status"] = "enforcement_action"
    return action


@router.get("/enforcement-actions")
async def list_enforcement_actions(
    jurisdiction: Optional[str] = None,
    severity: Optional[str] = None,
):
    """List enforcement actions with filtering."""
    results = [
        a for a in _ENFORCEMENT_ACTIONS
        if (not jurisdiction or a["jurisdiction"] == jurisdiction.upper())
        and (not severity or a["severity"] == severity)
    ]
    total_penalties = sum(a.get("penalty_amount_eur", 0) or 0 for a in results)
    return {
        "actions": results,
        "total": len(results),
        "total_penalties_eur": round(total_penalties, 2),
    }


@router.get("/transparency-register")
async def transparency_register(
    jurisdiction: Optional[str] = None,
    risk_classification: Optional[str] = None,
):
    """Public transparency register — which AI systems operate where."""
    results = [
        r for r in _TRANSPARENCY_REGISTER
        if (not jurisdiction or jurisdiction.upper() in [j.upper() for j in r["jurisdictions"]])
        and (not risk_classification or r["risk_classification"] == risk_classification)
    ]
    return {
        "register": results,
        "total_systems": len(results),
        "by_risk": {
            "minimal": len([r for r in results if r["risk_classification"] == "minimal"]),
            "limited": len([r for r in results if r["risk_classification"] == "limited"]),
            "high-risk": len([r for r in results if r["risk_classification"] == "high-risk"]),
            "unacceptable": len([r for r in results if r["risk_classification"] == "unacceptable"]),
        },
    }


@router.get("/dashboard/{jurisdiction}")
async def jurisdiction_dashboard(jurisdiction: str):
    """Real-time enforcement dashboard for a jurisdiction."""
    systems = [s for s in _REGISTERED_SYSTEMS.values() if jurisdiction.upper() in s["jurisdictions"]]
    actions = [a for a in _ENFORCEMENT_ACTIONS if a["jurisdiction"] == jurisdiction.upper()]
    from meok.api.compliance_map import REGULATORY_MAP
    jdata = REGULATORY_MAP.get(jurisdiction.upper(), {})

    return {
        "jurisdiction": jurisdiction.upper(),
        "jurisdiction_name": jdata.get("name", "Unknown"),
        "competent_authority": jdata.get("competent_authority"),
        "registered_systems": len(systems),
        "enforcement_actions": len(actions),
        "high_risk_systems": len([s for s in systems if s["risk_classification"] == "high-risk"]),
        "pending_compliance_checks": len([s for s in systems if s["status"] == "registered"]),
        "total_penalties_issued_eur": round(sum(a.get("penalty_amount_eur", 0) or 0 for a in actions), 2),
        "last_updated": datetime.utcnow().isoformat(),
    }
