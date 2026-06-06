"""
ACP Gateway — Agent Communication Protocol
WebSocket + REST hybrid for real-time agent messaging.

SIGIL Integration: ACP messages can be encoded in SIGIL for compact,
deterministic, auditable agent communication.
"""
import json
import uuid
from datetime import datetime, timezone
from typing import Any

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

# SIGIL integration — compact agent wire format
try:
    import sys
    sys.path.insert(0, "/Users/nicholas/clawd/meok-sigil")
    from sigil import encode as sigil_encode, parse as sigil_parse, gloss as sigil_gloss
    SIGIL_AVAILABLE = True
except Exception:
    SIGIL_AVAILABLE = False

router = APIRouter(prefix="/acp", tags=["acp"])

# ── State ─────────────────────────────────────────────────────────
_channels: dict[str, dict[str, Any]] = {}
_connections: dict[str, WebSocket] = {}


# ── WebSocket Handler ─────────────────────────────────────────────
@router.websocket("/ws")
async def acp_websocket(websocket: WebSocket):
    await websocket.accept()
    peer_id = f"peer_{uuid.uuid4().hex[:8]}"
    _connections[peer_id] = websocket
    try:
        await websocket.send_json({
            "type": "event",
            "id": f"evt_{uuid.uuid4().hex[:8]}",
            "from": "system",
            "to": peer_id,
            "payload": {"event": "connected", "peer_id": peer_id},
            "timestamp": datetime.now(timezone.utc).isoformat(),
        })
        while True:
            raw = await websocket.receive_text()
            try:
                msg = json.loads(raw)
                await _route_message(peer_id, msg, websocket)
            except json.JSONDecodeError:
                await websocket.send_json({"error": "Invalid JSON"})
    except WebSocketDisconnect:
        del _connections[peer_id]


async def _route_message(from_peer: str, msg: dict, ws: WebSocket):
    msg["from"] = from_peer
    msg["id"] = msg.get("id") or f"acp_{uuid.uuid4().hex[:8]}"
    msg["timestamp"] = datetime.now(timezone.utc).isoformat()

    msg_type = msg.get("type", "request")
    to_peer = msg.get("to")

    # SIGIL decode: if payload.sigil is present, add human-readable gloss
    if SIGIL_AVAILABLE and msg.get("payload", {}).get("sigil"):
        try:
            sigil_line = msg["payload"]["sigil"]
            msg["payload"]["_gloss"] = sigil_gloss(sigil_line)
            msg["payload"]["_parsed"] = sigil_parse(sigil_line)
        except Exception:
            pass

    if to_peer and to_peer in _connections:
        await _connections[to_peer].send_json(msg)
    else:
        # Broadcast to channel if channel_id present
        channel_id = msg.get("payload", {}).get("channel_id")
        if channel_id and channel_id in _channels:
            for member in _channels[channel_id]["participants"]:
                if member != from_peer and member in _connections:
                    await _connections[member].send_json(msg)
        else:
            await ws.send_json({"error": f"Peer or channel not found: {to_peer or channel_id}"})


# ── REST Endpoints for Channel Management ─────────────────────────
@router.post("/channels")
async def create_channel(body: dict):
    cid = f"ch_{uuid.uuid4().hex[:8]}"
    channel = {
        "id": cid,
        "participants": body.get("participants", []),
        "topic": body.get("topic"),
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    _channels[cid] = channel
    return channel


@router.get("/channels")
async def list_channels():
    return list(_channels.values())


@router.get("/channels/{channel_id}")
async def get_channel(channel_id: str):
    if channel_id not in _channels:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Channel not found")
    return _channels[channel_id]
