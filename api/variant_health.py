"""
Variant Health Score API
Pulls from 6 SOV3 neural models to compute per-variant wellbeing metrics.

GET /api/variants/health — all variant scores
GET /api/variants/health/{variant_id} — single variant
POST /api/variants/assign — assign variant to user (Thompson sampling)
POST /api/variants/conversion — record conversion event
"""

import asyncio
import logging
import os
from datetime import datetime, timezone
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Request
from pydantic import BaseModel

try:
    from meok.core.variant_bandit import bandit
except ImportError:
    from ..core.variant_bandit import bandit

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/variants", tags=["variants"])

SOV3_URL = os.getenv("SOV3_URL", "http://localhost:3100")


# ── Models ───────────────────────────────────────────────────────────────────

class VariantAssignRequest(BaseModel):
    user_id: Optional[str] = None
    session_id: Optional[str] = None
    context: Optional[dict] = None

class ConversionRequest(BaseModel):
    variant_id: str
    user_id: Optional[str] = None
    care_score: float = 0.5
    conversion_type: str = "signup"  # signup | day7_retention | care_metric


# ── 6 SOV3 Neural Model Scores ───────────────────────────────────────────────

async def fetch_sov3_neural_scores() -> dict:
    """
    Fetch care/health scores from SOV3's 6 neural models.
    Models: care_predictor, engagement_model, wellbeing_classifier,
            dependency_detector, growth_tracker, resonance_model
    Falls back to computed scores if SOV3 unavailable.
    """
    import httpx
    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            resp = await client.get(f"{SOV3_URL}/health")
            if resp.status_code == 200:
                data = resp.json()
                models = data.get("components", {}).get("neural_models", {})
                return {
                    "care_predictor": models.get("care_predictor", {}).get("accuracy", 0.72),
                    "engagement_model": models.get("engagement_model", {}).get("accuracy", 0.68),
                    "wellbeing_classifier": models.get("wellbeing_classifier", {}).get("accuracy", 0.75),
                    "dependency_detector": models.get("dependency_detector", {}).get("accuracy", 0.81),
                    "growth_tracker": models.get("growth_tracker", {}).get("accuracy", 0.69),
                    "resonance_model": models.get("resonance_model", {}).get("accuracy", 0.73),
                    "source": "sov3_live",
                }
    except Exception as e:
        logger.warning(f"SOV3 unavailable, using baseline scores: {e}")

    # Baseline scores when SOV3 is down
    return {
        "care_predictor": 0.72,
        "engagement_model": 0.68,
        "wellbeing_classifier": 0.75,
        "dependency_detector": 0.81,
        "growth_tracker": 0.69,
        "resonance_model": 0.73,
        "source": "baseline",
    }


def compute_variant_health_score(arm_stats: dict, neural_scores: dict) -> dict:
    """
    Care-Weighted Variant Health Score (CVHS).
    Combines: conversion_rate × mean_care_score × neural_model_alignment

    Formula:
        base_score = (alpha / (alpha + beta))
        care_multiplier = mean_care_score × wellbeing_weight
        engagement_penalty = engagement_model × (1 - dependency_risk)
        CVHS = base_score × care_multiplier × (1 + engagement_penalty) / 2
    """
    base = arm_stats.get("expected_reward", 0.5)
    care = arm_stats.get("mean_care_score", 0.5)
    impressions = arm_stats.get("impressions", 0)

    wellbeing = neural_scores.get("wellbeing_classifier", 0.75)
    dependency = 1.0 - neural_scores.get("dependency_detector", 0.81)  # lower is healthier
    growth = neural_scores.get("growth_tracker", 0.69)
    resonance = neural_scores.get("resonance_model", 0.73)

    # Care-weighted score
    care_multiplier = (care * 0.4 + wellbeing * 0.3 + growth * 0.2 + resonance * 0.1)
    engagement_bonus = dependency * neural_scores.get("engagement_model", 0.68) * 0.5

    raw_score = base * care_multiplier * (1.0 + engagement_bonus) / 1.5

    # Confidence interval width (wider = more uncertainty)
    confidence = min(1.0, impressions / 100)

    return {
        "score": round(raw_score, 4),
        "confidence": round(confidence, 3),
        "care_multiplier": round(care_multiplier, 3),
        "dependency_penalty": round(1.0 - dependency, 3),
        "impressions": impressions,
        "grade": "A" if raw_score >= 0.75 else "B" if raw_score >= 0.60 else "C" if raw_score >= 0.45 else "D",
    }


# ── Routes ───────────────────────────────────────────────────────────────────

@router.get("/health")
async def get_all_variant_health():
    """Return health scores for all active variants."""
    neural_scores = await fetch_sov3_neural_scores()
    stats = bandit.get_stats()

    results = []
    for arm in stats:
        health = compute_variant_health_score(arm, neural_scores)
        results.append({**arm, "health": health})

    return {
        "variants": results,
        "neural_model_scores": neural_scores,
        "computed_at": datetime.now(timezone.utc).isoformat(),
        "total_variants": len(results),
    }


@router.get("/health/{variant_id}")
async def get_variant_health(variant_id: str):
    """Return health score for a single variant."""
    stats_list = bandit.get_stats()
    arm_stats = next((s for s in stats_list if s["variant_id"] == variant_id), None)
    if not arm_stats:
        raise HTTPException(status_code=404, detail=f"Variant '{variant_id}' not found")

    neural_scores = await fetch_sov3_neural_scores()
    health = compute_variant_health_score(arm_stats, neural_scores)

    return {**arm_stats, "health": health, "neural_scores": neural_scores}


@router.post("/assign")
async def assign_variant(req: VariantAssignRequest):
    """Assign a variant to a user via Thompson sampling."""
    arm = bandit.select_variant(user_id=req.user_id)
    await bandit.record_impression(arm.variant_id)

    return {
        "variant_id": arm.variant_id,
        "variant_name": arm.name,
        "description": arm.description,
        "assigned_at": datetime.now(timezone.utc).isoformat(),
    }


@router.post("/conversion")
async def record_conversion(req: ConversionRequest):
    """Record a conversion event for Thompson sampling reward update."""
    conversion_weights = {
        "signup": 1.0,
        "day7_retention": 1.5,  # Higher weight for retention
        "care_metric": 0.8,
    }
    reward = conversion_weights.get(req.conversion_type, 1.0)

    await bandit.record_conversion(
        variant_id=req.variant_id,
        care_score=req.care_score,
        reward=reward,
    )

    return {"recorded": True, "variant_id": req.variant_id, "reward": reward}


@router.get("/stats")
async def get_bandit_stats():
    """Raw bandit arm statistics for monitoring."""
    return {
        "arms": bandit.get_stats(),
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }
