#!/usr/bin/env python3
"""
MEOK MCP Server — modular architecture.
FastAPI application exposing the MCP protocol over HTTP.
"""

import json
import hashlib
from datetime import datetime, timedelta, timezone
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request, Depends, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from meok.mcp.state import ServiceState
from meok.mcp.initializer import initialize_system
from meok.mcp.tools import ALL_TOOLS, execute_tool
from meok.config.settings import get_settings
from meok.auth.models import (
    UserCreate, UserLogin, TokenResponse, RefreshRequest,
    APIKeyCreate, APIKeyResponse, UserInfo, TokenPayload,
)
from meok.auth.passwords import hash_password, verify_password
from meok.auth.jwt_utils import (
    create_access_token, create_refresh_token, decode_token,
    generate_api_key,
)
from meok.auth.dependencies import get_current_user, require_auth
from meok.auth.repository import AuthRepository

# ── Shared state ──────────────────────────────────────────────────
state = ServiceState()
auth_repo = AuthRepository()


# ── Lifespan (startup / shutdown) ─────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    await initialize_system(state)
    yield


# ── FastAPI app ───────────────────────────────────────────────────
app = FastAPI(
    title="MEOK MCP Server",
    version="3.0.0",
    lifespan=lifespan,
)

_settings = get_settings()
app.add_middleware(
    CORSMiddleware,
    allow_origins=_settings.mcp.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Health ────────────────────────────────────────────────────────

@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "version": "3.0.0",
        "components": {
            "neural_models": state.model_registry.list_models() if state.model_registry else {},
            "memory_store": "connected" if state.memory_store else "disconnected",
            "consciousness": state.consciousness.get_consciousness_state() if state.consciousness else {},
        },
    }


# ── Auth endpoints ────────────────────────────────────────────────

@app.post("/auth/register", response_model=TokenResponse)
async def register(body: UserCreate):
    """Register a new user and create their tenant."""
    existing = await auth_repo.get_user_by_email(body.email)
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    pw_hash = hash_password(body.password)
    user = await auth_repo.create_user(body.email, pw_hash, body.hatch_name)

    # Seed the new tenant with defaults
    await auth_repo.seed_tenant(user["tenant_id"])

    access = create_access_token(str(user["id"]), user["tenant_id"])
    refresh = create_refresh_token(str(user["id"]), user["tenant_id"])

    # Store refresh token hash
    settings = get_settings()
    expires = datetime.now(timezone.utc) + timedelta(days=settings.auth.refresh_token_expiry_days)
    await auth_repo.store_refresh_token(
        str(user["id"]),
        hashlib.sha256(refresh.encode()).hexdigest(),
        expires,
    )

    return TokenResponse(
        access_token=access,
        refresh_token=refresh,
        tenant_id=user["tenant_id"],
    )


@app.post("/auth/login", response_model=TokenResponse)
async def login(body: UserLogin):
    """Authenticate and return JWT tokens."""
    user = await auth_repo.get_user_by_email(body.email)
    if not user or not verify_password(body.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    if not user.get("is_active", True):
        raise HTTPException(status_code=403, detail="Account deactivated")

    access = create_access_token(str(user["id"]), user["tenant_id"])
    refresh = create_refresh_token(str(user["id"]), user["tenant_id"])

    settings = get_settings()
    expires = datetime.now(timezone.utc) + timedelta(days=settings.auth.refresh_token_expiry_days)
    await auth_repo.store_refresh_token(
        str(user["id"]),
        hashlib.sha256(refresh.encode()).hexdigest(),
        expires,
    )

    return TokenResponse(
        access_token=access,
        refresh_token=refresh,
        tenant_id=user["tenant_id"],
    )


@app.post("/auth/refresh", response_model=TokenResponse)
async def refresh_token(body: RefreshRequest):
    """Exchange a refresh token for new access + refresh tokens."""
    try:
        payload = decode_token(body.refresh_token)
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid refresh token")

    token_hash = hashlib.sha256(body.refresh_token.encode()).hexdigest()
    user_id = await auth_repo.validate_refresh_token(token_hash)
    if not user_id:
        raise HTTPException(status_code=401, detail="Refresh token revoked or expired")

    # Revoke old, issue new
    await auth_repo.revoke_refresh_token(token_hash)

    user = await auth_repo.get_user_by_id(user_id)
    if not user:
        raise HTTPException(status_code=401, detail="User not found")

    access = create_access_token(str(user["id"]), user["tenant_id"])
    new_refresh = create_refresh_token(str(user["id"]), user["tenant_id"])

    settings = get_settings()
    expires = datetime.now(timezone.utc) + timedelta(days=settings.auth.refresh_token_expiry_days)
    await auth_repo.store_refresh_token(
        str(user["id"]),
        hashlib.sha256(new_refresh.encode()).hexdigest(),
        expires,
    )

    return TokenResponse(
        access_token=access,
        refresh_token=new_refresh,
        tenant_id=user["tenant_id"],
    )


@app.post("/auth/api-key", response_model=APIKeyResponse)
async def create_api_key_endpoint(body: APIKeyCreate, user: TokenPayload = Depends(require_auth)):
    """Generate an API key for MCP access (requires auth)."""
    key = generate_api_key()
    result = await auth_repo.create_api_key(user.sub, user.tenant_id, key, body.name)
    return APIKeyResponse(
        api_key=key,
        key_prefix=result["key_prefix"],
        tenant_id=result["tenant_id"],
        name=result["name"],
        created_at=result["created_at"],
    )


@app.get("/auth/me", response_model=UserInfo)
async def get_me(user: TokenPayload = Depends(require_auth)):
    """Get current user info."""
    db_user = await auth_repo.get_user_by_id(user.sub)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    tenant = await auth_repo.get_tenant(user.tenant_id)
    return UserInfo(
        id=str(db_user["id"]),
        email=db_user["email"],
        tenant_id=user.tenant_id,
        hatch_name=tenant["hatch_name"] if tenant else "Sovereign",
        created_at=db_user["created_at"],
        is_active=db_user.get("is_active", True),
    )


# ── MCP endpoint (tenant-aware) ──────────────────────────────────

@app.post("/mcp")
async def mcp_endpoint(request: Request, user: TokenPayload = Depends(get_current_user)):
    """MCP endpoint for tool calls — tenant-scoped."""
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
                    "version": "3.0.0",
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

        result = await execute_tool(tool_name, arguments, state, tenant_id=user.tenant_id)

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


# ── Root ──────────────────────────────────────────────────────────

@app.get("/")
async def root():
    return {
        "name": "MEOK MCP Server",
        "version": "3.0.0",
        "description": "Sovereign AI OS — consciousness, memory, governance, creativity",
        "endpoints": {
            "health": "/health",
            "mcp": "/mcp (POST)",
            "auth": {
                "register": "/auth/register (POST)",
                "login": "/auth/login (POST)",
                "refresh": "/auth/refresh (POST)",
                "api_key": "/auth/api-key (POST, authenticated)",
                "me": "/auth/me (GET, authenticated)",
            },
        },
    }


# ── Entrypoint ────────────────────────────────────────────────────
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3100)
