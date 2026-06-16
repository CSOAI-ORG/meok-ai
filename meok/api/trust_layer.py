"""
ArkForge Trust Layer Integration
================================
Every MEOK character earns a trust score based on:
  - Interaction history (volume, consistency, care-alignment)
  - ASSTI transparency score (self-reported state accuracy)
  - Audit receipt chain (Ed25519-verified bilateral receipts)
  - Sovereign Shield pass/fail (deterministic security validation)
  - Compliance map coverage (jurisdictions where character is certified)

Trust scores unlock marketplace tiers, premium features, and governance weight.
No black-box ML. All dimensions are inspectable and appealable.
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, List, Optional
from datetime import datetime

router = APIRouter(prefix="/v1/trust", tags=["trust-layer"])

# ── In-memory trust registry (replace with ABCI-backed store in prod) ──
_TRUST_REGISTRY: Dict[str, Dict[str, Any]] = {}


class TrustScoreRequest(BaseModel):
    entity_id: str
    dimensions: Optional[Dict[str, float]] = None  # Override defaults


class TrustAttestation(BaseModel):
    entity_id: str
    attestation_type: str  # "interaction", "audit", "shield", "assti", "compliance"
    payload: Dict[str, Any]
    signature: Optional[str] = None  # Ed25519 hex


def _compute_trust_score(entity_id: str, overrides: Dict[str, float] = None) -> Dict[str, Any]:
    """
    Compute composite trust score across 5 dimensions.
    Each dimension ∈ [0, 1]. Composite is weighted average.
    """
    entry = _TRUST_REGISTRY.get(entity_id, {})
    history = entry.get("history", [])

    # Dimension 1: Interaction Consistency (volume + recency)
    interaction_score = overrides.get("interaction", 0.5) if overrides else 0.5
    if history:
        recent = [h for h in history if h["type"] == "interaction"]
        interaction_score = min(1.0, len(recent) / 50.0)  # 50+ interactions = max
        # Recency bonus
        if recent:
            last = max(r["timestamp"] for r in recent)
            days_since = (datetime.utcnow() - datetime.fromisoformat(last)).days
            if days_since <= 7:
                interaction_score = min(1.0, interaction_score + 0.1)

    # Dimension 2: ASSTI Transparency
    assti_score = overrides.get("assti", 0.5) if overrides else entry.get("assti_score", 0.5)

    # Dimension 3: Audit Receipt Chain Integrity
    audit_score = overrides.get("audit", 0.5) if overrides else 0.5
    audits = [h for h in history if h["type"] == "audit"]
    if audits:
        verified = sum(1 for a in audits if a.get("verified", False))
        audit_score = verified / len(audits) if audits else 0.0

    # Dimension 4: Sovereign Shield Validation
    shield_score = overrides.get("shield", 0.5) if overrides else 0.5
    shields = [h for h in history if h["type"] == "shield"]
    if shields:
        passes = sum(1 for s in shields if s.get("pass", False))
        shield_score = passes / len(shields) if shields else 0.0

    # Dimension 5: Compliance Map Coverage
    compliance_score = overrides.get("compliance", 0.0) if overrides else 0.0
    certs = entry.get("compliance_certifications", [])
    if certs:
        # Normalize: 10+ jurisdictions = max score
        compliance_score = min(1.0, len(certs) / 10.0)

    # Weighted composite
    weights = {
        "interaction": 0.25,
        "assti": 0.25,
        "audit": 0.20,
        "shield": 0.20,
        "compliance": 0.10,
    }

    dimensions = {
        "interaction": round(interaction_score, 3),
        "assti": round(assti_score, 3),
        "audit": round(audit_score, 3),
        "shield": round(shield_score, 3),
        "compliance": round(compliance_score, 3),
    }

    composite = sum(dimensions[k] * weights[k] for k in weights)

    # Tier assignment
    tier = "unverified"
    if composite >= 0.95:
        tier = "diamond"
    elif composite >= 0.85:
        tier = "platinum"
    elif composite >= 0.70:
        tier = "gold"
    elif composite >= 0.50:
        tier = "silver"
    elif composite >= 0.30:
        tier = "bronze"

    return {
        "entity_id": entity_id,
        "composite_score": round(composite, 3),
        "tier": tier,
        "dimensions": dimensions,
        "weights": weights,
        "computed_at": datetime.utcnow().isoformat(),
        "history_length": len(history),
    }


# ── API Endpoints ─────────────────────────────────────────────────

@router.get("/score/{entity_id}")
async def get_trust_score(entity_id: str):
    """Get the current trust score for an entity."""
    if entity_id not in _TRUST_REGISTRY:
        return {
            "entity_id": entity_id,
            "composite_score": 0.0,
            "tier": "unverified",
            "dimensions": {},
            "note": "Entity has no trust history. Submit attestations to build score.",
        }
    return _compute_trust_score(entity_id)


@router.post("/score/{entity_id}/compute")
async def compute_trust_score(entity_id: str, req: TrustScoreRequest):
    """Recompute trust score with optional dimension overrides."""
    return _compute_trust_score(entity_id, req.dimensions)


@router.post("/attest")
async def submit_attestation(att: TrustAttestation):
    """Submit a trust attestation for an entity."""
    if att.entity_id not in _TRUST_REGISTRY:
        _TRUST_REGISTRY[att.entity_id] = {"history": [], "compliance_certifications": []}

    record = {
        "type": att.attestation_type,
        "payload": att.payload,
        "signature": att.signature,
        "timestamp": datetime.utcnow().isoformat(),
    }

    # Auto-verify audit receipts if Ed25519 sigil present
    if att.attestation_type == "audit" and att.signature:
        try:
            from meok.mcp.tools.audit_receipt import verify_receipt
            record["verified"] = verify_receipt(att.payload, att.signature)
        except Exception:
            record["verified"] = False

    # Auto-evaluate shield pass/fail
    if att.attestation_type == "shield":
        record["pass"] = att.payload.get("layers_passed", 0) >= 12

    _TRUST_REGISTRY[att.entity_id]["history"].append(record)

    return {
        "submitted": True,
        "entity_id": att.entity_id,
        "type": att.attestation_type,
        "current_score": _compute_trust_score(att.entity_id),
    }


@router.post("/certify/{entity_id}")
async def certify_compliance(entity_id: str, jurisdictions: List[str]):
    """Certify an entity as compliant in specific jurisdictions."""
    if entity_id not in _TRUST_REGISTRY:
        _TRUST_REGISTRY[entity_id] = {"history": [], "compliance_certifications": []}

    existing = set(_TRUST_REGISTRY[entity_id].get("compliance_certifications", []))
    existing.update(j.upper() for j in jurisdictions)
    _TRUST_REGISTRY[entity_id]["compliance_certifications"] = list(existing)

    return {
        "entity_id": entity_id,
        "certified_jurisdictions": list(existing),
        "new_this_request": jurisdictions,
    }


@router.get("/leaderboard")
async def trust_leaderboard(limit: int = 20):
    """Get top entities by trust score."""
    scores = []
    for entity_id in _TRUST_REGISTRY:
        score = _compute_trust_score(entity_id)
        scores.append(score)

    scores.sort(key=lambda x: x["composite_score"], reverse=True)
    return {
        "leaderboard": scores[:limit],
        "total_scored": len(scores),
    }


@router.get("/tier/{tier_name}")
async def list_by_tier(tier_name: str):
    """List all entities in a given trust tier."""
    matches = []
    for entity_id in _TRUST_REGISTRY:
        score = _compute_trust_score(entity_id)
        if score["tier"] == tier_name.lower():
            matches.append(score)
    return {"tier": tier_name.lower(), "entities": matches, "count": len(matches)}


@router.get("/health")
async def trust_layer_health():
    """Health check for the trust layer."""
    return {
        "status": "active",
        "entities_tracked": len(_TRUST_REGISTRY),
        "tiers": {
            "diamond": len([e for e in _TRUST_REGISTRY if _compute_trust_score(e)["tier"] == "diamond"]),
            "platinum": len([e for e in _TRUST_REGISTRY if _compute_trust_score(e)["tier"] == "platinum"]),
            "gold": len([e for e in _TRUST_REGISTRY if _compute_trust_score(e)["tier"] == "gold"]),
            "silver": len([e for e in _TRUST_REGISTRY if _compute_trust_score(e)["tier"] == "silver"]),
            "bronze": len([e for e in _TRUST_REGISTRY if _compute_trust_score(e)["tier"] == "bronze"]),
            "unverified": len([e for e in _TRUST_REGISTRY if _compute_trust_score(e)["tier"] == "unverified"]),
        },
    }
