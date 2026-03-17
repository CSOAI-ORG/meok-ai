#!/usr/bin/env python3
"""
MEOK MCP Server — modular architecture.
FastAPI application exposing the MCP protocol over HTTP.
"""

import json
from datetime import datetime
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from meok.mcp.state import ServiceState
from meok.mcp.initializer import initialize_system
from meok.mcp.tools import ALL_TOOLS, execute_tool

# ── Shared state ──────────────────────────────────────────────────
state = ServiceState()


# ── Lifespan (startup / shutdown) ─────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    await initialize_system(state)
    yield


# ── FastAPI app ───────────────────────────────────────────────────
app = FastAPI(
    title="MEOK MCP Server",
    version="2.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Endpoints ─────────────────────────────────────────────────────

@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "version": "2.0.0",
        "components": {
            "neural_models": state.model_registry.list_models() if state.model_registry else {},
            "memory_store": "connected" if state.memory_store else "disconnected",
            "consciousness": state.consciousness.get_consciousness_state() if state.consciousness else {},
        },
    }


@app.post("/mcp")
async def mcp_endpoint(request: Request):
    """MCP endpoint for tool calls."""
    body = await request.json()

    method = body.get("method")
    params = body.get("params", {})
    req_id = body.get("id")

    # Handle initialize
    if method == "initialize":
        return JSONResponse({
            "jsonrpc": "2.0",
            "id": req_id,
            "result": {
                "protocolVersion": "2024-11-05",
                "serverInfo": {
                    "name": "meok-mcp",
                    "version": "2.0.0",
                },
                "capabilities": {
                    "tools": {}
                },
            },
        })

    # Handle tools/list
    if method == "tools/list":
        return JSONResponse({
            "jsonrpc": "2.0",
            "id": req_id,
            "result": {"tools": ALL_TOOLS},
        })

    # Handle tools/call
    if method == "tools/call":
        tool_name = params.get("name")
        arguments = params.get("arguments", {})

        result = await execute_tool(tool_name, arguments, state)

        return JSONResponse({
            "jsonrpc": "2.0",
            "id": req_id,
            "result": {
                "content": [{
                    "type": "text",
                    "text": json.dumps(result, indent=2),
                }]
            },
        })

    return JSONResponse({
        "jsonrpc": "2.0",
        "id": req_id,
        "error": {"code": -32601, "message": f"Method not found: {method}"},
    })


@app.get("/")
async def root():
    return {
        "name": "MEOK MCP Server",
        "version": "2.0.0",
        "description": "Complete consciousness system with neural networks, enhanced memory, monitoring, multi-agent, and emotional modeling",
        "endpoints": {
            "health": "/health",
            "mcp": "/mcp (POST)",
        },
    }


# ── Entrypoint ────────────────────────────────────────────────────
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3100)
