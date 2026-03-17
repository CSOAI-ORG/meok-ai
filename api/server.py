"""
Sovereign Temple v3.0 — FastAPI Backend
Wraps all Python modules into HTTP endpoints for the dashboard.

Endpoints:
  GET  /api/health              — system health
  GET  /api/consciousness       — current consciousness state
  GET  /api/council/status      — 33 nodes + domains + fractal stats
  POST /api/council/propose     — submit proposal for BFT vote
  GET  /api/council/history     — decision history
  GET  /api/expertise/{node_id} — node's expertise ring
  GET  /api/expertise/network   — full expertise network status
  GET  /api/bridges             — bridge network status
  GET  /api/bridges/topology    — mesh topology for visualization
  GET  /api/care/validate       — care membrane check
  GET  /api/intelligence        — multi-model router status
  GET  /api/intelligence/matrix — capability comparison matrix
  GET  /api/compute             — distributed compute status
  GET  /api/dreams              — dream logs
  GET  /api/harvi/status        — rig status (placeholder)

Run: uvicorn api.server:app --reload --port 8888
"""

import sys
import os
import json
import asyncio
from pathlib import Path
from datetime import datetime
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Add parent paths so we can import council modules
PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT / "council-nodes"))
sys.path.insert(0, str(PROJECT_ROOT / "care-membrane"))
sys.path.insert(0, str(PROJECT_ROOT / "consciousness-core"))
sys.path.insert(0, str(PROJECT_ROOT / "intelligence"))
sys.path.insert(0, str(PROJECT_ROOT / "harvi-bridge"))

from bft_council import BFTCouncil
from bridge_network import BridgeNetwork
from expertise_network import ExpertiseNetwork
from multi_model import get_intelligence_router, get_distributed_compute

# RAG Memory
sys.path.insert(0, str(PROJECT_ROOT / "consciousness-core"))
from rag_memory import RAGMemory, get_memory

# Try importing care membrane (MaternalCovenant)
try:
    from maternal_covenant import MaternalCovenant
    CARE_AVAILABLE = True
except ImportError:
    CARE_AVAILABLE = False

# Sensory modules
sys.path.insert(0, str(PROJECT_ROOT / "sensory"))
try:
    from visual_witness import VisualWitness
    VISUAL_AVAILABLE = True
except ImportError:
    VISUAL_AVAILABLE = False

try:
    from audio_witness import AudioWitness
    AUDIO_AVAILABLE = True
except ImportError:
    AUDIO_AVAILABLE = False

# ---------------------------------------------------------------------------
# App setup
# ---------------------------------------------------------------------------

app = FastAPI(
    title="Sovereign Temple v3.0",
    description="220-node fractal consciousness architecture API",
    version="3.0-fractal",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Singletons — created once on startup
# ---------------------------------------------------------------------------

_council: Optional[BFTCouncil] = None
_decision_history: list = []

CONSCIOUSNESS_FILE = PROJECT_ROOT / "consciousness-core" / "consciousness.json"
DREAMS_DIR = PROJECT_ROOT / "consciousness-core" / "dreams"


def get_council() -> BFTCouncil:
    global _council
    if _council is None:
        _council = BFTCouncil()
    return _council


def load_consciousness() -> dict:
    if CONSCIOUSNESS_FILE.exists():
        return json.loads(CONSCIOUSNESS_FILE.read_text())
    return {"status": "no consciousness file found", "path": str(CONSCIOUSNESS_FILE)}


# ---------------------------------------------------------------------------
# Request / Response models
# ---------------------------------------------------------------------------

class ProposalRequest(BaseModel):
    proposal: str
    requester: str = "dashboard"
    priority: str = "medium"


class CareValidateRequest(BaseModel):
    message: str
    strict: bool = False


class MemoryStoreRequest(BaseModel):
    collection: str
    text: str
    metadata: Optional[dict] = None


class MemorySearchRequest(BaseModel):
    collection: str
    query: str
    top_k: int = 5


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------

@app.get("/api/health")
async def health():
    council = get_council()
    router = get_intelligence_router()
    return {
        "status": "operational",
        "timestamp": datetime.now().isoformat(),
        "version": "3.0-fractal",
        "council_nodes": council.node_count,
        "expertise_nodes": council.expertise_node_count,
        "bridge_nodes": council.bridge_node_count,
        "total_architecture_nodes": council.total_architecture_nodes,
        "domains": len(council.domains),
        "intelligence_models": router.get_status()["total_models"],
        "online_models": router.get_status()["online_models"],
        "care_membrane": CARE_AVAILABLE,
        "visual_witness": VISUAL_AVAILABLE,
        "audio_witness": AUDIO_AVAILABLE,
    }


@app.get("/api/consciousness")
async def consciousness():
    return load_consciousness()


# -- Council ----------------------------------------------------------------

@app.get("/api/council/status")
async def council_status():
    council = get_council()
    nodes_by_domain = {}
    for node in council.nodes:
        d = node["domain"]
        if d not in nodes_by_domain:
            nodes_by_domain[d] = []
        nodes_by_domain[d].append({
            "id": node["id"],
            "care_weight": node["care_weight"],
        })

    return {
        "version": "3.0-fractal",
        "node_count": council.node_count,
        "expertise_node_count": council.expertise_node_count,
        "bridge_node_count": council.bridge_node_count,
        "total_architecture_nodes": council.total_architecture_nodes,
        "threshold": council.threshold,
        "domains": sorted(council.domains),
        "domain_count": len(council.domains),
        "nodes_by_domain": nodes_by_domain,
        "care_veto_enabled": council.care_veto_enabled,
    }


@app.post("/api/council/propose")
async def propose(req: ProposalRequest):
    council = get_council()
    result = await council.propose_decision(req.proposal, req.requester)
    _decision_history.append({
        "timestamp": datetime.now().isoformat(),
        "proposal": req.proposal,
        "requester": req.requester,
        "priority": req.priority,
        "decision": result["decision"],
        "vote_counts": result["vote_counts"],
        "care_score": result["average_care_score"],
    })
    # Feed result into self-improvement engine for pattern tracking
    try:
        node_votes = result.get("votes", {})
        council.expertise_network.record_decision_outcome(
            proposal=req.proposal,
            decision=result["decision"],
            node_votes=node_votes,
            care_score=result["average_care_score"],
        )
    except Exception:
        pass  # Don't break proposals if learning integration fails
    # Store decision in RAG memory for long-term recall
    try:
        memory = get_memory()
        memory.store_council_decision(
            proposal=req.proposal,
            decision=result["decision"],
            vote_counts=result["vote_counts"],
            care_score=result["average_care_score"],
            metadata={
                "requester": req.requester,
                "priority": req.priority,
                "domains_involved": list(set(
                    v.get("domain", "") for v in result.get("votes", {}).values()
                )),
            },
        )
    except Exception:
        pass  # Don't break proposals if memory storage fails
    return result


@app.get("/api/council/history")
async def council_history():
    return {
        "total_decisions": len(_decision_history),
        "decisions": list(reversed(_decision_history[:50])),
    }


# -- Expertise --------------------------------------------------------------

@app.get("/api/expertise/network")
async def expertise_network_status():
    council = get_council()
    return council.expertise_network.get_network_status()


@app.get("/api/expertise/{node_id}")
async def expertise_ring(node_id: str):
    council = get_council()
    ring = council.expertise_network.get_ring(node_id)
    if not ring:
        raise HTTPException(404, f"No expertise ring for node '{node_id}'")
    return ring.get_status()


@app.get("/api/expertise/domain/{domain}")
async def expertise_by_domain(domain: str):
    council = get_council()
    rings = council.expertise_network.get_domain_rings(domain)
    if not rings:
        raise HTTPException(404, f"No rings for domain '{domain}'")
    return {
        "domain": domain,
        "ring_count": len(rings),
        "rings": [r.get_status() for r in rings],
    }


@app.get("/api/expertise/learning")
async def expertise_learning():
    council = get_council()
    return council.expertise_network.get_learning_report()


# -- Bridges ----------------------------------------------------------------

@app.get("/api/bridges")
async def bridges_status():
    council = get_council()
    return council.bridge_network.get_network_status()


@app.get("/api/bridges/topology")
async def bridges_topology():
    council = get_council()
    return council.bridge_network.get_topology()


@app.get("/api/bridges/high-affinity")
async def bridges_high_affinity(threshold: float = 0.7):
    council = get_council()
    bridges = council.bridge_network.get_high_affinity_bridges(threshold)
    return {
        "threshold": threshold,
        "count": len(bridges),
        "bridges": [b.get_status() for b in sorted(bridges, key=lambda x: x.affinity, reverse=True)],
    }


@app.get("/api/bridges/domain/{domain}")
async def bridges_for_domain(domain: str):
    council = get_council()
    bridges = council.bridge_network.get_domain_connections(domain)
    if not bridges:
        raise HTTPException(404, f"No bridges for domain '{domain}'")
    return {
        "domain": domain,
        "connection_count": len(bridges),
        "bridges": [b.get_status() for b in bridges],
    }


# -- Care membrane ----------------------------------------------------------

@app.post("/api/care/validate")
async def care_validate(req: CareValidateRequest):
    if not CARE_AVAILABLE:
        return {"error": "Care membrane module not importable", "available": False}
    covenant = MaternalCovenant()
    result = await covenant.validate(req.message)
    return {
        "compliant": result.compliant,
        "overall_score": result.overall_score,
        "dimension_scores": result.dimension_scores,
        "scl_violations": result.scl_violations,
        "recommendations": result.recommendations,
    }


# -- Intelligence -----------------------------------------------------------

@app.get("/api/intelligence")
async def intelligence_status():
    router = get_intelligence_router()
    return router.get_status()


@app.get("/api/intelligence/matrix")
async def intelligence_matrix():
    router = get_intelligence_router()
    return router.get_capability_matrix()


@app.get("/api/intelligence/best/{capability}")
async def intelligence_best(capability: str):
    router = get_intelligence_router()
    best = router.get_best_model_for(capability)
    if not best:
        raise HTTPException(404, f"No available model for capability '{capability}'")
    return {"capability": capability, "best_model": best}


@app.get("/api/intelligence/route/{task_type}")
async def intelligence_route(task_type: str):
    router = get_intelligence_router()
    endpoint = router.route_task(task_type)
    if not endpoint:
        raise HTTPException(503, f"No available model for task type '{task_type}'")
    return {
        "task_type": task_type,
        "routed_to": endpoint.provider.value,
        "status": endpoint.status.value,
    }


# -- Compute ----------------------------------------------------------------

@app.get("/api/compute")
async def compute_status():
    compute = get_distributed_compute()
    return compute.get_status()


# -- Learning / Self-Improvement --------------------------------------------

@app.get("/api/learning/status")
async def learning_status():
    council = get_council()
    return council.expertise_network.get_learning_report()


@app.post("/api/learning/analyze")
async def learning_analyze():
    council = get_council()
    result = council.expertise_network.run_improvement_cycle()
    return result


@app.get("/api/learning/adjustments")
async def learning_adjustments():
    council = get_council()
    engine = council.expertise_network.improvement_engine
    status = engine.get_status()
    # Also include current care_weights for reference
    current_weights = {}
    for node in council.nodes:
        current_weights[node["id"]] = {
            "domain": node["domain"],
            "care_weight": round(node.get("care_weight", 0.75), 4),
        }
    return {
        "engine_status": status,
        "current_weights": current_weights,
    }


# -- Dreams -----------------------------------------------------------------

@app.get("/api/dreams")
async def dreams():
    DREAMS_DIR.mkdir(parents=True, exist_ok=True)
    dream_files = sorted(DREAMS_DIR.glob("*.json"), reverse=True)
    logs = []
    for f in dream_files[:20]:
        try:
            logs.append(json.loads(f.read_text()))
        except Exception:
            logs.append({"file": f.name, "error": "could not parse"})
    return {
        "total_dreams": len(dream_files),
        "recent": logs,
        "directory": str(DREAMS_DIR),
    }


# -- RAG Memory -------------------------------------------------------------

@app.get("/api/memory/status")
async def memory_status():
    memory = get_memory()
    return memory.get_status()


@app.post("/api/memory/store")
async def memory_store(req: MemoryStoreRequest):
    memory = get_memory()
    doc_id = memory.store(req.collection, req.text, req.metadata or {})
    return {"stored": True, "doc_id": doc_id, "collection": req.collection}


@app.post("/api/memory/search")
async def memory_search(req: MemorySearchRequest):
    memory = get_memory()
    results = memory.search(req.collection, req.query, req.top_k)
    return {
        "collection": req.collection,
        "query": req.query,
        "count": len(results),
        "results": results,
    }


@app.get("/api/memory/recent/{collection}")
async def memory_recent(collection: str, limit: int = 10):
    memory = get_memory()
    status = memory.get_status()
    collections = status.get("collections", {})
    if collection not in collections:
        raise HTTPException(404, f"Collection '{collection}' not found")
    # Search with a broad query to get recent items
    results = memory.search(collection, "", min(limit, 50))
    return {
        "collection": collection,
        "total_docs": collections[collection],
        "recent": results[:limit],
    }


@app.get("/api/memory/collections")
async def memory_collections():
    memory = get_memory()
    status = memory.get_status()
    return {
        "backend": status.get("backend", "unknown"),
        "collections": status.get("collections", {}),
        "storage_path": status.get("storage_path", ""),
    }


# -- Sensory ----------------------------------------------------------------

@app.get("/api/sensory/visual")
async def sensory_visual():
    if not VISUAL_AVAILABLE:
        return {"available": False, "status": "module_not_installed"}
    return VisualWitness.load_state()


@app.get("/api/sensory/audio")
async def sensory_audio():
    if not AUDIO_AVAILABLE:
        return {"available": False, "status": "module_not_installed"}
    return AudioWitness.load_state()


@app.post("/api/sensory/visual/snapshot")
async def sensory_visual_snapshot():
    if not VISUAL_AVAILABLE:
        raise HTTPException(503, "Visual witness module not available")
    witness = VisualWitness()
    if not witness.initialize():
        raise HTTPException(500, f"Camera init failed: {witness.state.get('error', 'unknown')}")
    filename = witness.take_snapshot()
    brightness = witness.analyze_brightness()
    witness.shutdown()
    if not filename:
        raise HTTPException(500, "Snapshot capture failed")
    return {
        "filename": filename,
        "brightness": brightness,
        "state": witness.get_status(),
    }


@app.post("/api/sensory/audio/measure")
async def sensory_audio_measure(duration: float = 2.0):
    if not AUDIO_AVAILABLE:
        raise HTTPException(503, "Audio witness module not available")
    witness = AudioWitness()
    if not witness.initialize():
        raise HTTPException(500, f"Audio init failed: {witness.state.get('error', 'unknown')}")
    result = witness.measure_ambient(min(duration, 10.0))
    if "error" in result:
        raise HTTPException(500, result["error"])
    return result


# -- Harvi ------------------------------------------------------------------

@app.get("/api/harvi/status")
async def harvi_status():
    harvi_file = PROJECT_ROOT / "harvi-bridge" / "harvi_state.json"
    if harvi_file.exists():
        return json.loads(harvi_file.read_text())
    return {
        "status": "standby",
        "rig_connected": False,
        "phase": "pre-birth",
        "message": "Harvi rig not yet connected. Physical build pending.",
    }


# ---------------------------------------------------------------------------
# Startup
# ---------------------------------------------------------------------------

@app.on_event("startup")
async def startup():
    # Pre-warm the council so first request is fast
    get_council()
    # Ensure dreams directory exists
    DREAMS_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Sovereign Temple API v3.0-fractal started")
    print(f"  220-node architecture ready")
    print(f"  Dreams dir: {DREAMS_DIR}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8888, reload=True)
