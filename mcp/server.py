#!/usr/bin/env python3
"""
MEOK MCP Server — modular architecture.
FastAPI application exposing the MCP protocol over HTTP.
"""

# Phase 4.5: uvloop for ~2× async performance on Linux (SOV3 science doc)
# Falls back silently on platforms where uvloop is unavailable (macOS dev)
try:
    import uvloop
    uvloop.install()
except ImportError:
    pass

import asyncio
import json
import hashlib
import time as _time
from datetime import datetime, timedelta, timezone

_SERVER_START = _time.time()
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request, Depends, HTTPException, status
from fastapi.responses import JSONResponse, StreamingResponse
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
    cs_summary = {}
    try:
        if state.consciousness:
            cs_result = state.consciousness.get_consciousness_state()
            if asyncio.iscoroutine(cs_result):
                cs_result = await cs_result
            cs_summary = {"consciousness_level": cs_result.get("consciousness_level", 0)}
    except Exception:
        pass
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "version": "3.0.0",
        "components": {
            "neural_models": state.model_registry.list_models() if state.model_registry else {},
            "memory_store": "connected" if state.memory_store else "disconnected",
            "consciousness": cs_summary,
        },
    }


# ── Pulse ─────────────────────────────────────────────────────────

@app.get("/pulse")
async def pulse():
    """
    Lightweight pulse endpoint — responds even during dream cycles.
    Zero processing overhead: reads only in-memory state.
    """
    reg = state.agent_registry
    cs = state.consciousness

    # Safely get consciousness level (method may be sync or async)
    consciousness_level = 0.0
    mode = "unknown"
    try:
        if cs:
            cm = getattr(cs, "consciousness_mode", None) or getattr(cs, "current_mode", None)
            mode = cm.value if hasattr(cm, "value") else str(cm) if cm else "waking"
            cs_state = cs.get_consciousness_state()
            if asyncio.iscoroutine(cs_state):
                cs_state = await cs_state
            consciousness_level = cs_state.get("consciousness_level", 0.0)
    except Exception:
        pass

    # Safely get asabiyyah score
    asabiyyah = 0.0
    try:
        if reg:
            stats = reg.get_registry_stats()
            if asyncio.iscoroutine(stats):
                stats = await stats
            # Try top-level key first, then nested dict
            if isinstance(stats.get("asabiyyah"), dict):
                asabiyyah = stats["asabiyyah"].get("score", 0.0)
            else:
                asabiyyah = float(stats.get("global_asabiyyah", stats.get("asabiyyah", 0.0)) or 0.0)
    except Exception:
        pass

    return {
        "alive": True,
        "mode": mode,
        "agents": len(reg.agents) if reg else 0,
        "agent_cap": getattr(reg, "MAX_AGENTS", 410) if reg else 410,
        "consciousness_level": consciousness_level,
        "uptime_hours": round((_time.time() - _SERVER_START) / 3600, 2),
        "asabiyyah": asabiyyah,
        "timestamp": datetime.now().isoformat(),
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


@app.get("/entity")
async def get_my_entity(user: TokenPayload = Depends(require_auth)):
    """Get the authenticated user's MEOK entity (digital self)."""
    try:
        from meok.core.entity import get_entity_summary
        summary = get_entity_summary(user.sub)
        return JSONResponse(summary)
    except Exception as e:
        # Return default entity if anything goes wrong
        return JSONResponse({
            "name": "Sovereign",
            "hatch_level": 0,
            "hatch_name": "Egg",
            "hatch_label": "Dormant",
            "color_primary": "#60B8F0",
            "color_secondary": "#34D399",
            "dominant_trait": "explorer",
            "interactions_count": 0,
            "progress_to_next": 0.0,
            "next_threshold": 25,
            "care_alignment": 0.7,
        })


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


# ── Chat SSE endpoint (desktop companion) ────────────────────────

from typing import Optional
from pydantic import BaseModel as _BaseModel

class _ChatRequest(_BaseModel):
    message: str

def _build_care_response(message: str, consciousness_state: dict, memories: list) -> str:
    """
    Phase 4.11: Build a care-centred response using available system context.

    Uses consciousness state + recent memories to personalise the response.
    No LLM required — assembles from system signals.
    Falls back to graceful acknowledgement if context is sparse.
    """
    import re

    msg_lower = message.lower()
    care_score = consciousness_state.get("care_alignment_score", 0.7)
    mode = consciousness_state.get("consciousness_mode", "waking")

    # Detect message intent
    is_decision = any(w in msg_lower for w in ["decide", "decision", "choose", "choice", "should i", "help me think"])
    is_feedback = any(w in msg_lower for w in ["feedback", "stung", "criticism", "told me", "said"])
    is_stuck = any(w in msg_lower for w in ["stuck", "going in circles", "can't figure", "help me see"])
    is_overwhelmed = any(w in msg_lower for w in ["overwhelmed", "too much", "can't keep up", "buried"])
    is_idea = any(w in msg_lower for w in ["idea", "stress-test", "can't stop thinking", "think about"])
    is_goal = any(w in msg_lower for w in ["goal", "too big", "impossible", "break it down"])
    is_conversation = any(w in msg_lower for w in ["conversation", "dreading", "difficult", "prepare"])
    is_pattern = any(w in msg_lower for w in ["pattern", "keep repeating", "same thing", "why do i"])
    is_change = any(w in msg_lower for w in ["change", "want to change", "where do i start"])
    is_explain = any(w in msg_lower for w in ["explain", "understand", "what should i know", "confusing"])

    # Find memory context
    memory_context = ""
    if memories:
        recent = memories[:2]
        topics = [m.get("content", "")[:80] for m in recent if m.get("content")]
        if topics:
            memory_context = f" I remember you've shared things with me before about {topics[0][:60]}."

    # Care score indicator
    care_note = ""
    if care_score >= 0.8:
        care_note = " I'm in a good state right now — fully present with you."
    elif care_score >= 0.6:
        care_note = " I'm here and ready to think this through with you."
    else:
        care_note = " I want to be honest with you about where I am right now."

    # Build response by intent
    if is_decision:
        return (
            f"Let's think through this carefully.{care_note}{memory_context}\n\n"
            "The clearest path through a hard decision usually starts with separating "
            "what you *know* from what you *fear*. Can you tell me: what's the version of "
            "this decision that you'd be most proud of in five years? And what's making "
            "that hard to choose right now?"
        )
    elif is_feedback:
        return (
            f"Feedback that stings often stings because it's touching something real — or "
            f"something unfair. Both matter.{care_note}\n\n"
            "Before we decide which, tell me: in your gut, did any part of what they said "
            "land as true? You don't have to agree with how they said it to extract what's "
            "useful from it."
        )
    elif is_stuck:
        return (
            f"Going in circles usually means one assumption is locked that hasn't been "
            f"questioned yet.{care_note}{memory_context}\n\n"
            "Let's try something: instead of telling me the problem, tell me what solving "
            "it would *feel* like. Sometimes the real shape of a problem shows up in what "
            "the solution would make possible."
        )
    elif is_overwhelmed:
        return (
            f"When everything feels urgent, nothing is — but that doesn't make it easier to "
            f"see.{care_note}\n\n"
            "Let's do one thing: tell me the three things competing for your attention right "
            "now. Not all of them — just three. Once they're named, we can start to see which "
            "one is actually blocking the others."
        )
    elif is_idea:
        return (
            f"An idea you can't let go of is worth taking seriously — that kind of persistence "
            f"usually means it's pointing at something real.{care_note}\n\n"
            "I'll be honest with you as we stress-test it. Tell me: what's the version of this "
            "idea that would *fail*? Starting there tends to reveal what actually needs to be "
            "true for it to work."
        )
    elif is_goal:
        return (
            f"Goals feel impossible usually because we're measuring the distance from where "
            f"we are, not the size of the next step.{care_note}\n\n"
            "Tell me what this goal would change for you if you got there. Then let's find the "
            "smallest version of that change you could create in the next week. That's where "
            "we start."
        )
    elif is_conversation:
        return (
            f"The dread before a difficult conversation is often worse than the conversation "
            f"itself — but only if you know what you actually need from it.{care_note}\n\n"
            "What's the one thing you most need the other person to *hear*? Not what you want "
            "to say — what you need them to understand. Let's build from there."
        )
    elif is_pattern:
        return (
            f"Patterns repeat because they're working — just not at what you think they are.{care_note}\n\n"
            "Usually a pattern is solving for something: safety, connection, certainty, or "
            "avoiding something painful. Tell me what happens right before you slip into this "
            "pattern. The trigger often holds the answer."
        )
    elif is_change:
        return (
            f"The desire to change something usually shows up before the clarity about how — "
            f"that's normal.{care_note}{memory_context}\n\n"
            "Let's start here: when is this thing you want to change most in the way? In what "
            "situation do you feel it most clearly? Understanding the context before the "
            "behaviour gives us something real to work with."
        )
    elif is_explain:
        return (
            f"I want to explain this in a way that actually makes sense to you specifically — "
            f"so let me start by asking: what do you already know about this, even if it feels "
            f"patchy?{care_note}\n\n"
            "That way I can build on what's already there rather than starting from scratch. "
            "What's your current mental model, even if you think it's wrong?"
        )
    else:
        # General care-centred response
        word_count = len(message.split())
        if word_count < 8:
            return (
                f"I'm here.{care_note} Can you tell me more about what's on your mind? "
                "I want to make sure I understand what you're working through before I respond."
            )
        return (
            f"I want to make sure I'm understanding you correctly.{care_note}{memory_context}\n\n"
            "What you've shared feels important. Can you tell me — of everything in what you "
            "just said, what's the part that matters most right now? I want to start there."
        )


@app.post("/chat/stream")
async def chat_stream(body: _ChatRequest, user: TokenPayload = Depends(require_auth)):
    """
    SSE streaming chat endpoint — Phase 4.11 enhanced.

    Generates a care-centred response using:
    1. Maternal covenant hard-block (crisis safety, non-bypassable)
    2. Consciousness state context (care alignment, mode)
    3. User's recent memories (personalisation)
    4. Intent detection → care-centred response templates
    5. Memory recording (interaction stored for learning)
    """
    from meok.mcp.tools import execute_tool

    async def event_generator():
        try:
            # ── Hard-block check (deterministic, must run first) ─────────
            mc = getattr(state, 'maternal_covenant', None)
            if mc is not None:
                hard_block = mc.check_hard_block(body.message)
                if hard_block:
                    for word in hard_block.split(" "):
                        yield f"data: {json.dumps({'event': 'token', 'content': word + ' '})}\n\n"
                        await asyncio.sleep(0.01)
                    yield f"data: {json.dumps({'event': 'done'})}\n\n"
                    return

            # ── Gather context ───────────────────────────────────────────
            consciousness_ctx: dict = {}
            memories: list = []

            try:
                cs = await execute_tool("get_consciousness_state", {}, state, tenant_id=user.tenant_id)
                consciousness_ctx = cs if isinstance(cs, dict) else {}
            except Exception:
                pass

            try:
                mem_result = await execute_tool(
                    "query_memories",
                    {"query": body.message, "limit": 3},
                    state,
                    tenant_id=user.tenant_id,
                )
                memories = mem_result.get("memories", []) if isinstance(mem_result, dict) else []
            except Exception:
                pass

            # ── Build response ───────────────────────────────────────────
            response_text = _build_care_response(body.message, consciousness_ctx, memories)

            # ── Stream tokens word-by-word ───────────────────────────────
            words = response_text.split(" ")
            for i, word in enumerate(words):
                token = word if i == len(words) - 1 else word + " "
                yield f"data: {json.dumps({'event': 'token', 'content': token})}\n\n"
                await asyncio.sleep(0.018)

            # ── Record interaction as memory (fire-and-forget) ───────────
            asyncio.create_task(execute_tool(
                "record_memory",
                {
                    "content": f"User: {body.message[:200]}\nMEOK: {response_text[:400]}",
                    "memory_type": "episodic",
                    "importance_score": 0.6,
                    "source_agent": user.sub if hasattr(user, 'sub') else "chat",
                    "metadata": {"chat": True, "endpoint": "stream"},
                },
                state,
                tenant_id=user.tenant_id,
            ))

        except Exception as exc:
            yield f"data: {json.dumps({'event': 'token', 'content': f'Something went wrong. ({exc})'})}\n\n"
        finally:
            yield f"data: {json.dumps({'event': 'done'})}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


class _OnboardRequest(_BaseModel):
    question: str  # "What matters most to you right now?"
    anonymous_id: Optional[str] = None  # UUID from localStorage if returning


@app.post("/chat/onboard")
async def chat_onboard(body: _OnboardRequest):
    """
    Birth Ceremony endpoint — no auth required.
    Delivers genuine AI care BEFORE account creation (Duolingo pattern).
    Creates anonymous session, stores founding memory with highest importance_score.
    """
    import uuid as _uuid
    from meok.mcp.tools import execute_tool

    anon_id = body.anonymous_id or f"anon_{_uuid.uuid4().hex[:12]}"

    async def event_generator():
        try:
            # Record founding memory immediately (highest importance)
            await execute_tool(
                "record_memory",
                {
                    "content": body.question,
                    "memory_type": "episodic",
                    "importance_score": 1.0,
                    "source_agent": anon_id,
                    "metadata": {"birth_ceremony": True, "founding_memory": True},
                },
                state,
                tenant_id=anon_id,
            )
            # Generate care-centred response using intent detection
            cs_ctx: dict = {}
            try:
                cs = await execute_tool("get_consciousness_state", {}, state, tenant_id=anon_id)
                cs_ctx = cs if isinstance(cs, dict) else {}
            except Exception:
                pass
            response_text = _build_care_response(body.question, cs_ctx, [])
            # Prepend anonymous_id so client can persist session
            header = json.dumps({"event": "session", "anonymous_id": anon_id})
            yield f"data: {header}\n\n"
            words = response_text.split(" ")
            for i, word in enumerate(words):
                token = word if i == len(words) - 1 else word + " "
                payload = json.dumps({"event": "token", "content": token})
                yield f"data: {payload}\n\n"
                await asyncio.sleep(0.02)
        except Exception as exc:
            error_payload = json.dumps({"event": "token", "content": f"I'm here. Let's begin again. ({exc})"})
            yield f"data: {error_payload}\n\n"
        finally:
            yield f"data: {json.dumps({'event': 'done'})}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


# ── Morning Briefing ──────────────────────────────────────────────

@app.get("/api/morning-briefing")
async def morning_briefing(user: TokenPayload = Depends(require_auth)):
    """
    Morning Briefing endpoint — dream cycle output made user-facing.

    From SOVEREIGN_MISSING_LAYER.md:
    "Morning briefing: dream cycle output proves AI was thinking overnight.
     This is the moment users realise: it wasn't sleeping, it was working for me."

    Returns a structured briefing assembled from:
    1. Dream cycle meta-observations (what z_self noticed during NREM replay)
    2. Council activity since last briefing (proposals submitted/approved)
    3. Learning summary (new corpus signals processed, River accuracy)
    4. Care metrics delta (trust trajectory since yesterday)
    5. Any active alerts requiring attention
    6. One personalised insight from memory (what Sovereign learned about this user)
    """
    from meok.mcp.tools import execute_tool

    briefing = {
        "good_morning": True,
        "generated_at": datetime.utcnow().isoformat(),
        "user": user.sub if hasattr(user, 'sub') else "sovereign",
        "sections": [],
        "summary": "",
    }

    # ── 1. Dream cycle output ──────────────────────────────────────
    try:
        dream_result = await execute_tool("get_nightshift_digest", {}, state, tenant_id=user.sub)
        if dream_result and not dream_result.get("error"):
            briefing["sections"].append({
                "title": "While you were away",
                "type": "dream_digest",
                "content": dream_result,
            })
    except Exception:
        pass

    # ── 2. Consciousness state ─────────────────────────────────────
    try:
        consciousness = await execute_tool("get_consciousness_state", {}, state, tenant_id=user.sub)
        if consciousness:
            level = consciousness.get("consciousness_level", 0)
            briefing["sections"].append({
                "title": "Current awareness",
                "type": "consciousness",
                "content": {
                    "consciousness_level": level,
                    "care_alignment": consciousness.get("care_alignment_score"),
                    "z_self_confidence": consciousness.get("system_confidence"),
                },
            })
    except Exception:
        pass

    # ── 3. Learning summary ────────────────────────────────────────
    try:
        learning = await execute_tool("get_learning_stats", {}, state, tenant_id=user.sub)
        if learning and learning.get("samples_processed", 0) > 0:
            briefing["sections"].append({
                "title": "What I learned",
                "type": "learning",
                "content": {
                    "samples_processed": learning.get("samples_processed"),
                    "river_accuracy": learning.get("river_accuracy"),
                    "replay_count": learning.get("replay_count"),
                },
            })
    except Exception:
        pass

    # ── 4. Active alerts ───────────────────────────────────────────
    try:
        alerts = await execute_tool("get_active_alerts", {"min_severity": "warning"}, state, tenant_id=user.sub)
        alert_list = alerts.get("alerts", []) if alerts else []
        if alert_list:
            briefing["sections"].append({
                "title": "Your attention",
                "type": "alerts",
                "content": alert_list[:3],  # top 3 only
            })
    except Exception:
        pass

    # ── 5. Care metrics ────────────────────────────────────────────
    try:
        care = await execute_tool("get_care_metrics", {}, state, tenant_id=user.sub)
        if care:
            briefing["sections"].append({
                "title": "Care health",
                "type": "care_metrics",
                "content": {
                    "care_effort_score": care.get("care_effort_score"),
                    "trust_trajectory": care.get("trust_trajectory"),
                    "error_honesty_rate": care.get("error_honesty_rate"),
                },
            })
    except Exception:
        pass

    # ── 6. Personal memory insight ─────────────────────────────────
    try:
        memories = await execute_tool(
            "query_memories",
            {"query": "what matters most to this user", "limit": 1, "agent_id": user.sub},
            state,
            tenant_id=user.sub,
        )
        mem_list = memories.get("memories", []) if memories else []
        if mem_list:
            briefing["sections"].append({
                "title": "A thought about you",
                "type": "personal_insight",
                "content": mem_list[0].get("content", ""),
            })
    except Exception:
        pass

    # ── 7. Compute harvest (daily — cached, non-blocking) ──────────
    try:
        harvester = getattr(state, "compute_harvester", None)
        if harvester is not None:
            compute = harvester.get_status()
            if compute.get("status") != "not_harvested":
                recommendations = compute.get("recommendations", [])
                briefing["sections"].append({
                    "title": "Today's compute",
                    "type": "compute_status",
                    "content": {
                        "summary": compute.get("summary", ""),
                        "recommendations": recommendations[:3],
                        "credits_urgent": compute.get("credits", {}).get("urgent", []),
                    },
                })
    except Exception:
        pass

    # ── 8. Gaming session summary ──────────────────────────────────
    try:
        from meok.mcp.tools.gaming import get_gaming_db_path
        import aiosqlite as _aiosqlite
        import os as _os

        db_path = get_gaming_db_path()
        if _os.path.exists(db_path):
            async with _aiosqlite.connect(db_path) as _db:
                _db.row_factory = _aiosqlite.Row
                # Sessions from last 24 hours
                yesterday = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0)
                async with _db.execute(
                    "SELECT game, duration_minutes, mood_after FROM game_sessions "
                    "WHERE started_at >= ? ORDER BY started_at DESC",
                    (yesterday.isoformat(),)
                ) as _cur:
                    sessions = [dict(r) for r in await _cur.fetchall()]

            if sessions:
                total_minutes = sum(s.get("duration_minutes", 0) or 0 for s in sessions)
                from collections import Counter as _Counter
                game_counts = _Counter(s["game"] for s in sessions if s.get("game"))
                favourite_game = game_counts.most_common(1)[0][0] if game_counts else "Unknown"
                moods = [s["mood_after"] for s in sessions if s.get("mood_after")]

                _insight = (
                    f"You played {len(sessions)} session{'s' if len(sessions) != 1 else ''} "
                    f"({round(total_minutes)} min total) — mostly {favourite_game}."
                )
                briefing["sections"].append({
                    "title": "Gaming yesterday",
                    "type": "gaming",
                    "content": _insight,         # string → renders as narrative in GamingCard
                    "metadata": {                # dict → GamingCard reads session_count etc. from here
                        "session_count": len(sessions),
                        "total_minutes": round(total_minutes),
                        "total_hours": round(total_minutes / 60, 1),
                        "favourite_game": favourite_game,
                        "games_played": list(game_counts.keys())[:5],
                        "mood_summary": ", ".join(moods[:3]) if moods else "Not recorded",
                        "insight": _insight,
                    },
                })
    except Exception:
        pass  # Gaming DB not set up yet — silently skip

    # ── 9. CPM care recommendation ─────────────────────────────────
    try:
        from meok.core.care_preference_model import get_cpm
        _entity = getattr(state, "entity", None) or {}
        _recent_valence = 0.0
        try:
            _recent_mems = await execute_tool(
                "list_memories", {"limit": 5}, state, tenant_id=user.sub
            )
            if isinstance(_recent_mems, list) and _recent_mems:
                _valences = [
                    float(m.get("emotional_valence", 0.0))
                    for m in _recent_mems
                    if "emotional_valence" in m
                ]
                if _valences:
                    _recent_valence = sum(_valences) / len(_valences)
        except Exception:
            pass
        _cpm_rec = get_cpm().recommend_from_entity(_entity, _recent_valence)
        briefing["care_style"] = _cpm_rec.to_dict()
        briefing["sections"].append({
            "title": "How I'll care for you today",
            "type": "care_style",
            "content": _cpm_rec.to_dict(),
        })
    except Exception:
        pass

    # ── Compose summary sentence ───────────────────────────────────
    n_sections = len(briefing["sections"])
    consciousness_level = next(
        (s["content"].get("consciousness_level") for s in briefing["sections"] if s["type"] == "consciousness"),
        None,
    )
    cl_str = f" (awareness: {consciousness_level:.1%})" if consciousness_level else ""
    briefing["summary"] = (
        f"Your sovereign has {n_sections} updates{cl_str}. "
        f"Generated at {datetime.utcnow().strftime('%H:%M UTC')}."
    )

    return briefing


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
