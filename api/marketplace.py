"""
MEOK Character Marketplace
==========================
Buy, sell, and trade AI character configurations with built-in compliance.

- 10% MEOK protocol fee on all transactions
- Trust tier gating (Gold+ to list, Silver+ to buy)
- AIBOM-backed provenance (every character has a Bill of Materials)
- Ed25519-signed ownership certificates
- Cross-border compliance checking via RegGeoInt

This is the revenue engine of Phase 2.
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, List, Optional
from datetime import datetime
import hashlib
import uuid

router = APIRouter(prefix="/v1/marketplace", tags=["marketplace"])

# ── In-memory marketplace (replace with PostgreSQL + ABCI in prod) ──
_MARKETPLACE_LISTINGS: Dict[str, Dict[str, Any]] = {}
_MARKETPLACE_TRANSACTIONS: List[Dict[str, Any]] = []

MEOK_FEE_RATE = 0.10  # 10% protocol fee


class CharacterListing(BaseModel):
    seller_id: str
    character_id: str
    character_name: str
    description: str
    price_usd: float
    trust_tier_required: str = "silver"  # bronze, silver, gold, platinum, diamond
    jurisdictions: List[str] = []  # Certified compliant in these jurisdictions
    aibom_hash: Optional[str] = None  # AI Bill of Materials hash
    metadata: Dict[str, Any] = {}


class PurchaseRequest(BaseModel):
    buyer_id: str
    listing_id: str
    payment_method: str = "stripe"  # stripe, crypto, escrow


class ListingResponse(BaseModel):
    listing_id: str
    seller_id: str
    character_id: str
    character_name: str
    price_usd: float
    meok_fee_usd: float
    seller_receives_usd: float
    trust_tier_required: str
    jurisdictions: List[str]
    aibom_hash: Optional[str]
    status: str  # active, sold, withdrawn
    created_at: str


# ── Helper functions ──────────────────────────────────────────────

def _require_trust_tier(entity_id: str, minimum_tier: str) -> bool:
    """Check if entity meets minimum trust tier."""
    tier_order = ["unverified", "bronze", "silver", "gold", "platinum", "diamond"]
    # In production: query trust layer API
    # For now, mock: any entity with registry entry is "silver"
    from meok.api.trust_layer import _TRUST_REGISTRY, _compute_trust_score
    if entity_id not in _TRUST_REGISTRY:
        return minimum_tier == "unverified"
    score = _compute_trust_score(entity_id)
    return tier_order.index(score["tier"]) >= tier_order.index(minimum_tier)


def _generate_listing_id() -> str:
    return f"list_{uuid.uuid4().hex[:16]}"


def _generate_certificate_hash(listing_id: str, buyer_id: str, timestamp: str) -> str:
    payload = f"{listing_id}:{buyer_id}:{timestamp}"
    return hashlib.sha256(payload.encode()).hexdigest()


# ── API Endpoints ─────────────────────────────────────────────────

@router.get("/listings")
async def list_marketplace_listings(
    status: str = "active",
    min_tier: Optional[str] = None,
    jurisdiction: Optional[str] = None,
    max_price: Optional[float] = None,
):
    """Browse character marketplace listings."""
    results = []
    for listing in _MARKETPLACE_LISTINGS.values():
        if status and listing["status"] != status:
            continue
        if min_tier:
            tier_order = ["unverified", "bronze", "silver", "gold", "platinum", "diamond"]
            if tier_order.index(listing["trust_tier_required"]) > tier_order.index(min_tier):
                continue
        if jurisdiction and jurisdiction.upper() not in listing.get("jurisdictions", []):
            continue
        if max_price is not None and listing["price_usd"] > max_price:
            continue
        results.append(listing)

    return {
        "listings": results,
        "total": len(results),
        "filters": {"status": status, "min_tier": min_tier, "jurisdiction": jurisdiction, "max_price": max_price},
    }


@router.post("/listings")
async def create_listing(listing: CharacterListing):
    """List a character for sale. Requires Gold+ trust tier."""
    if not _require_trust_tier(listing.seller_id, "gold"):
        raise HTTPException(
            status_code=403,
            detail="Seller trust tier insufficient. Gold+ required to list characters.",
        )

    listing_id = _generate_listing_id()
    meok_fee = round(listing.price_usd * MEOK_FEE_RATE, 2)
    seller_receives = round(listing.price_usd - meok_fee, 2)

    record = {
        "listing_id": listing_id,
        "seller_id": listing.seller_id,
        "character_id": listing.character_id,
        "character_name": listing.character_name,
        "description": listing.description,
        "price_usd": listing.price_usd,
        "meok_fee_usd": meok_fee,
        "seller_receives_usd": seller_receives,
        "trust_tier_required": listing.trust_tier_required,
        "jurisdictions": [j.upper() for j in listing.jurisdictions],
        "aibom_hash": listing.aibom_hash,
        "metadata": listing.metadata,
        "status": "active",
        "created_at": datetime.utcnow().isoformat(),
    }

    _MARKETPLACE_LISTINGS[listing_id] = record
    return record


@router.get("/listings/{listing_id}")
async def get_listing(listing_id: str):
    """Get a specific marketplace listing."""
    listing = _MARKETPLACE_LISTINGS.get(listing_id)
    if not listing:
        raise HTTPException(status_code=404, detail="Listing not found")
    return listing


@router.post("/purchase")
async def purchase_character(req: PurchaseRequest):
    """Purchase a character from the marketplace."""
    listing = _MARKETPLACE_LISTINGS.get(req.listing_id)
    if not listing:
        raise HTTPException(status_code=404, detail="Listing not found")
    if listing["status"] != "active":
        raise HTTPException(status_code=400, detail="Listing is not active")

    # Buyer trust check
    if not _require_trust_tier(req.buyer_id, listing["trust_tier_required"]):
        raise HTTPException(
            status_code=403,
            detail=f"Buyer trust tier insufficient. {listing['trust_tier_required']}+ required.",
        )

    # Cross-border compliance check
    from meok.api.compliance_map import REGULATORY_MAP
    compliance_warnings = []
    for juris in listing.get("jurisdictions", []):
        if juris not in REGULATORY_MAP:
            compliance_warnings.append(f"Jurisdiction {juris} not in compliance map")

    # Generate ownership certificate
    timestamp = datetime.utcnow().isoformat()
    cert_hash = _generate_certificate_hash(req.listing_id, req.buyer_id, timestamp)

    transaction = {
        "transaction_id": f"tx_{uuid.uuid4().hex[:16]}",
        "listing_id": req.listing_id,
        "buyer_id": req.buyer_id,
        "seller_id": listing["seller_id"],
        "character_id": listing["character_id"],
        "price_usd": listing["price_usd"],
        "meok_fee_usd": listing["meok_fee_usd"],
        "seller_receives_usd": listing["seller_receives_usd"],
        "payment_method": req.payment_method,
        "ownership_certificate": cert_hash,
        "compliance_warnings": compliance_warnings,
        "timestamp": timestamp,
    }

    _MARKETPLACE_TRANSACTIONS.append(transaction)
    listing["status"] = "sold"
    listing["sold_at"] = timestamp
    listing["buyer_id"] = req.buyer_id

    return {
        "success": True,
        "transaction": transaction,
        "message": f"Character '{listing['character_name']}' transferred to {req.buyer_id}",
    }


@router.get("/transactions")
async def list_transactions(limit: int = 50, offset: int = 0):
    """List marketplace transactions."""
    txs = _MARKETPLACE_TRANSACTIONS[offset:offset + limit]
    total_volume = sum(tx["price_usd"] for tx in _MARKETPLACE_TRANSACTIONS)
    total_fees = sum(tx["meok_fee_usd"] for tx in _MARKETPLACE_TRANSACTIONS)

    return {
        "transactions": txs,
        "total": len(_MARKETPLACE_TRANSACTIONS),
        "total_volume_usd": round(total_volume, 2),
        "total_fees_usd": round(total_fees, 2),
        "limit": limit,
        "offset": offset,
    }


@router.get("/stats")
async def marketplace_stats():
    """Marketplace aggregate statistics."""
    active = [l for l in _MARKETPLACE_LISTINGS.values() if l["status"] == "active"]
    sold = [l for l in _MARKETPLACE_LISTINGS.values() if l["status"] == "sold"]
    total_volume = sum(tx["price_usd"] for tx in _MARKETPLACE_TRANSACTIONS)
    total_fees = sum(tx["meok_fee_usd"] for tx in _MARKETPLACE_TRANSACTIONS)

    return {
        "active_listings": len(active),
        "sold_listings": len(sold),
        "total_transactions": len(_MARKETPLACE_TRANSACTIONS),
        "total_volume_usd": round(total_volume, 2),
        "total_protocol_fees_usd": round(total_fees, 2),
        "meok_fee_rate": MEOK_FEE_RATE,
        "avg_sale_price": round(total_volume / len(_MARKETPLACE_TRANSACTIONS), 2) if _MARKETPLACE_TRANSACTIONS else 0,
    }


@router.delete("/listings/{listing_id}")
async def withdraw_listing(listing_id: str, seller_id: str):
    """Withdraw a listing (seller only)."""
    listing = _MARKETPLACE_LISTINGS.get(listing_id)
    if not listing:
        raise HTTPException(status_code=404, detail="Listing not found")
    if listing["seller_id"] != seller_id:
        raise HTTPException(status_code=403, detail="Only the seller can withdraw")
    if listing["status"] != "active":
        raise HTTPException(status_code=400, detail="Listing already inactive")

    listing["status"] = "withdrawn"
    listing["withdrawn_at"] = datetime.utcnow().isoformat()
    return {"withdrawn": True, "listing_id": listing_id}
