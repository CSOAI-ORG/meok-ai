"""
MEOK.ai — Neural Inference Endpoint (TASK-001)
POST /api/v1/predict

Wires the NeuralModelRegistry to an HTTP endpoint so all sklearn/PyTorch
models can be called from the dashboard or external clients.

Supported models (auto-registered via create_default_registry):
  - care_validation_nn
  - threat_detection_nn
  - partnership_detection_ml
  - relationship_evolution_nn
  - care_pattern_analyzer
  - creativity_assessment_nn
  - pt_threat_detection   (PyTorch adapter)
  - pt_care_validation    (PyTorch adapter)
  - pt_partnership_detection (PyTorch adapter)
"""

import time
from pathlib import Path
from typing import Any, Dict, Optional

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from meok.auth.dependencies import get_current_user
from meok.auth.models import TokenPayload
from meok.neural import NeuralModelRegistry, create_default_registry

# ---------------------------------------------------------------------------
# Router
# ---------------------------------------------------------------------------

router = APIRouter(prefix="/api/v1", tags=["neural-inference"])

# ---------------------------------------------------------------------------
# Singleton registry — lazy-init, one per worker process
# ---------------------------------------------------------------------------

_MODEL_DIR = Path(__file__).resolve().parent.parent / "neural" / "models"
_registry: Optional[NeuralModelRegistry] = None


def _get_registry() -> NeuralModelRegistry:
    global _registry
    if _registry is None:
        _registry = create_default_registry(str(_MODEL_DIR))
        # Try to load pre-trained weights; train any that are missing
        for name, model in _registry.models.items():
            loaded = model.load_model()
            if not loaded:
                try:
                    model.train_model()
                    model.save_model()
                except Exception as exc:
                    # Non-fatal: model stays untrained until next call
                    print(f"[NeuralInference] Could not train {name}: {exc}")
    return _registry


# ---------------------------------------------------------------------------
# Request / Response models
# ---------------------------------------------------------------------------

class PredictRequest(BaseModel):
    text: str
    model: str = "care_validation_nn"


class PredictResponse(BaseModel):
    model: str
    score: float
    detail: Dict[str, Any]
    latency_ms: float


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _extract_score(result: Dict[str, Any]) -> float:
    """
    Pull a single scalar score out of whichever result shape the model returns.

    Known shapes:
      care_validation_nn      → {"overall_care_score": 0.87, ...}
      threat_detection_nn     → {"threat_score": 0.12, ...}
      partnership_detection_ml→ {"partnership_score": 0.76, ...}
      relationship_evolution_nn → {"stability_score": 0.81, ...}
      care_pattern_analyzer   → {"care_score": 0.90, ...}
      creativity_assessment_nn→ {"creative_quality": 0.73, ...}
      pt_* adapters           → {"score": 0.65, ...}
    """
    for key in (
        "overall_care_score",
        "care_score",
        "threat_score",
        "partnership_score",
        "stability_score",
        "creative_quality",
        "score",
    ):
        if key in result:
            val = result[key]
            if isinstance(val, (int, float)):
                return float(val)

    # Fallback: first numeric value found
    for val in result.values():
        if isinstance(val, (int, float)):
            return float(val)

    return 0.0


# ---------------------------------------------------------------------------
# Endpoint
# ---------------------------------------------------------------------------

@router.post("/predict", response_model=PredictResponse)
async def predict(
    req: PredictRequest,
    user: TokenPayload = Depends(get_current_user),
) -> PredictResponse:
    """
    Run neural inference on a text string.

    - **text**: Input text to score.
    - **model**: Model name (default: ``care_validation_nn``).

    Returns a scalar ``score`` in [0, 1] plus the full ``detail`` dict from
    the model, and wall-clock ``latency_ms``.
    """
    registry = _get_registry()
    model_obj = registry.get(req.model)

    if model_obj is None:
        available = sorted(registry.models.keys())
        raise HTTPException(
            status_code=404,
            detail=f"Model '{req.model}' not found. Available: {available}",
        )

    if not model_obj.is_trained or model_obj.model is None:
        # Last-chance: try to train now (e.g. first request in a fresh deployment)
        try:
            model_obj.train_model()
            model_obj.save_model()
        except Exception as exc:
            raise HTTPException(
                status_code=503,
                detail=f"Model '{req.model}' is not trained and auto-train failed: {exc}",
            )

    t0 = time.perf_counter()
    try:
        result = model_obj.predict(req.text)
    except Exception as exc:
        raise HTTPException(
            status_code=500,
            detail=f"Inference error in model '{req.model}': {exc}",
        )
    latency_ms = (time.perf_counter() - t0) * 1000.0

    if "error" in result:
        raise HTTPException(
            status_code=500,
            detail=f"Model returned error: {result['error']}",
        )

    score = _extract_score(result)

    return PredictResponse(
        model=req.model,
        score=round(score, 4),
        detail=result,
        latency_ms=round(latency_ms, 2),
    )


@router.get("/predict/models")
async def list_models(
    user: TokenPayload = Depends(get_current_user),
) -> Dict[str, Any]:
    """List all available neural models and their training status."""
    registry = _get_registry()
    return {
        "model_count": len(registry.models),
        "models": registry.list_models(),
    }
