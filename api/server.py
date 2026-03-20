"""
MEOK.ai — FastAPI Backend (Dashboard API)
Wraps all Python modules into HTTP endpoints for the dashboard.

All endpoints are protected by auth when settings.auth.required is True.
When False (dev mode), returns default tenant — fully backwards compatible.

Run: uvicorn meok.api.server:app --reload --port 8888
"""

import json
from datetime import datetime
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from meok.council.bft_council import BFTCouncil
from meok.memory.rag_memory import RAGMemory, get_memory
from meok.auth.dependencies import get_current_user
from meok.auth.models import TokenPayload
from meok.api.hatch import router as hatch_router
try:
    from meok.api.variant_health import router as variant_router
    _variant_router_available = True
except ImportError:
    _variant_router_available = False

# ---------------------------------------------------------------------------
# App setup
# ---------------------------------------------------------------------------

app = FastAPI(
    title="MEOK.ai Dashboard API",
    description="Sovereign AI Operating System — Dashboard API",
    version="3.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount hatch router
app.include_router(hatch_router)
# Mount variant health / Thompson sampling router
if _variant_router_available:
    app.include_router(variant_router)

# ---------------------------------------------------------------------------
# Singletons — created once on startup
# ---------------------------------------------------------------------------

_council: Optional[BFTCouncil] = None
_decision_history: list = []

CONSCIOUSNESS_FILE = Path(__file__).resolve().parent.parent / "core" / "state" / "consciousness.json"
DREAMS_DIR = Path(__file__).resolve().parent.parent / "core" / "dreams"


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
# Endpoints (all auth-protected)
# ---------------------------------------------------------------------------

@app.get("/api/health")
async def health(user: TokenPayload = Depends(get_current_user)):
    council = get_council()
    return {
        "status": "operational",
        "timestamp": datetime.now().isoformat(),
        "version": "3.0.0",
        "tenant_id": user.tenant_id,
        "council_nodes": council.node_count,
        "expertise_nodes": council.expertise_node_count,
        "bridge_nodes": council.bridge_node_count,
        "total_architecture_nodes": council.total_architecture_nodes,
        "domains": len(council.domains),
    }


@app.get("/api/consciousness")
async def consciousness(user: TokenPayload = Depends(get_current_user)):
    return load_consciousness()


# -- Council ----------------------------------------------------------------

@app.get("/api/council/status")
async def council_status(user: TokenPayload = Depends(get_current_user)):
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
async def propose(req: ProposalRequest, user: TokenPayload = Depends(get_current_user)):
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
    try:
        node_votes = result.get("votes", {})
        council.expertise_network.record_decision_outcome(
            proposal=req.proposal,
            decision=result["decision"],
            node_votes=node_votes,
            care_score=result["average_care_score"],
        )
    except Exception:
        pass
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
        pass
    return result


@app.get("/api/council/history")
async def council_history(user: TokenPayload = Depends(get_current_user)):
    return {
        "total_decisions": len(_decision_history),
        "decisions": list(reversed(_decision_history[:50])),
    }


# -- Expertise --------------------------------------------------------------

@app.get("/api/expertise/network")
async def expertise_network_status(user: TokenPayload = Depends(get_current_user)):
    council = get_council()
    return council.expertise_network.get_network_status()


@app.get("/api/expertise/{node_id}")
async def expertise_ring(node_id: str, user: TokenPayload = Depends(get_current_user)):
    council = get_council()
    ring = council.expertise_network.get_ring(node_id)
    if not ring:
        raise HTTPException(404, f"No expertise ring for node '{node_id}'")
    return ring.get_status()


@app.get("/api/expertise/domain/{domain}")
async def expertise_by_domain(domain: str, user: TokenPayload = Depends(get_current_user)):
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
async def expertise_learning(user: TokenPayload = Depends(get_current_user)):
    council = get_council()
    return council.expertise_network.get_learning_report()


# -- Bridges ----------------------------------------------------------------

@app.get("/api/bridges")
async def bridges_status(user: TokenPayload = Depends(get_current_user)):
    council = get_council()
    return council.bridge_network.get_network_status()


@app.get("/api/bridges/topology")
async def bridges_topology(user: TokenPayload = Depends(get_current_user)):
    council = get_council()
    return council.bridge_network.get_topology()


@app.get("/api/bridges/high-affinity")
async def bridges_high_affinity(threshold: float = 0.7, user: TokenPayload = Depends(get_current_user)):
    council = get_council()
    bridges = council.bridge_network.get_high_affinity_bridges(threshold)
    return {
        "threshold": threshold,
        "count": len(bridges),
        "bridges": [b.get_status() for b in sorted(bridges, key=lambda x: x.affinity, reverse=True)],
    }


@app.get("/api/bridges/domain/{domain}")
async def bridges_for_domain(domain: str, user: TokenPayload = Depends(get_current_user)):
    council = get_council()
    bridges = council.bridge_network.get_domain_connections(domain)
    if not bridges:
        raise HTTPException(404, f"No bridges for domain '{domain}'")
    return {
        "domain": domain,
        "connection_count": len(bridges),
        "bridges": [b.get_status() for b in bridges],
    }


# -- Dreams -----------------------------------------------------------------

@app.get("/api/dreams")
async def dreams(user: TokenPayload = Depends(get_current_user)):
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
async def memory_status(user: TokenPayload = Depends(get_current_user)):
    memory = get_memory()
    return memory.get_status()


@app.post("/api/memory/store")
async def memory_store(req: MemoryStoreRequest, user: TokenPayload = Depends(get_current_user)):
    memory = get_memory()
    doc_id = memory.store(req.collection, req.text, req.metadata or {})
    return {"stored": True, "doc_id": doc_id, "collection": req.collection}


@app.post("/api/memory/search")
async def memory_search(req: MemorySearchRequest, user: TokenPayload = Depends(get_current_user)):
    memory = get_memory()
    results = memory.search(req.collection, req.query, req.top_k)
    return {
        "collection": req.collection,
        "query": req.query,
        "count": len(results),
        "results": results,
    }


@app.get("/api/memory/recent/{collection}")
async def memory_recent(collection: str, limit: int = 10, user: TokenPayload = Depends(get_current_user)):
    memory = get_memory()
    status = memory.get_status()
    collections = status.get("collections", {})
    if collection not in collections:
        raise HTTPException(404, f"Collection '{collection}' not found")
    results = memory.search(collection, "", min(limit, 50))
    return {
        "collection": collection,
        "total_docs": collections[collection],
        "recent": results[:limit],
    }


@app.get("/api/memory/collections")
async def memory_collections(user: TokenPayload = Depends(get_current_user)):
    memory = get_memory()
    status = memory.get_status()
    return {
        "backend": status.get("backend", "unknown"),
        "collections": status.get("collections", {}),
        "storage_path": status.get("storage_path", ""),
    }


# -- Learning / Self-Improvement --------------------------------------------

@app.get("/api/learning/status")
async def learning_status(user: TokenPayload = Depends(get_current_user)):
    council = get_council()
    return council.expertise_network.get_learning_report()


@app.post("/api/learning/analyze")
async def learning_analyze(user: TokenPayload = Depends(get_current_user)):
    council = get_council()
    result = council.expertise_network.run_improvement_cycle()
    return result


@app.get("/api/learning/adjustments")
async def learning_adjustments(user: TokenPayload = Depends(get_current_user)):
    council = get_council()
    engine = council.expertise_network.improvement_engine
    status = engine.get_status()
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


# ---------------------------------------------------------------------------
# Startup
# ---------------------------------------------------------------------------

@app.on_event("startup")
async def startup():
    get_council()
    DREAMS_DIR.mkdir(parents=True, exist_ok=True)
    print("MEOK Dashboard API started")
    print("  220-node architecture ready")
    print(f"  Dreams dir: {DREAMS_DIR}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("meok.api.server:app", host="0.0.0.0", port=8888, reload=True)
