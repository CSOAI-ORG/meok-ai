"""
MEOK WhatsApp Bot — DEPRECATED — DO NOT USE

⚠️  Meta banned general-purpose AI chatbots from WhatsApp in January 2026.
    Running this bot violates Meta's Acceptable Use Policy and risks permanent
    ban of the associated WhatsApp Business Account.

    Use Telegram instead: meok/bots/telegram_bot.py
    Discord integration is planned for post-launch (P3).

Original description:
Routes WhatsApp messages to SOV3 companion via Meta's WhatsApp Business Cloud API.
Required env vars:
    WHATSAPP_ACCESS_TOKEN    — from Meta Developer Dashboard
    WHATSAPP_VERIFY_TOKEN    — your custom verification string
    WHATSAPP_PHONE_NUMBER_ID — your business phone number ID
    SOV3_API_URL             — e.g. https://sov3.meok.ai
    SOV3_ADMIN_TOKEN         — SOV3 API authentication token
"""

# ⚠️  DEPRECATED — WhatsApp banned general-purpose AI chatbots January 2026.
# Meta policy violation if deployed. This file is kept for historical reference only.
# Use Telegram bot instead: /clawd/meok/bots/telegram_bot.py
# Reference: https://developers.facebook.com/blog/post/2026/01/15/messaging-policy-update
raise SystemExit("WhatsApp bot disabled — Meta policy violation. Use Telegram instead.")

import logging
import os
import uuid

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Query, Request, Response

load_dotenv()

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
ACCESS_TOKEN = os.environ["WHATSAPP_ACCESS_TOKEN"]
VERIFY_TOKEN = os.environ["WHATSAPP_VERIFY_TOKEN"]
PHONE_NUMBER_ID = os.environ["WHATSAPP_PHONE_NUMBER_ID"]
SOV3_API_URL = os.environ["SOV3_API_URL"].rstrip("/")
SOV3_ADMIN_TOKEN = os.environ["SOV3_ADMIN_TOKEN"]

GRAPH_API_BASE = "https://graph.facebook.com/v21.0"

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s — %(message)s",
)
logger = logging.getLogger("meok.whatsapp")

# ---------------------------------------------------------------------------
# FastAPI app
# ---------------------------------------------------------------------------
app = FastAPI(title="MEOK WhatsApp Bot", version="1.0.0")


# ---------------------------------------------------------------------------
# SOV3 integration (shared logic — same endpoint used by all MEOK bots)
# ---------------------------------------------------------------------------
async def sov3_query(user_id: str, text: str, interface: str = "whatsapp") -> str:
    """Query SOV3 companion — same function used by all bots."""
    payload = {
        "jsonrpc": "2.0",
        "method": "tools/call",
        "params": {
            "name": "sov3_query",
            "arguments": {
                "user_id": user_id,
                "query": text,
                "interface": interface,
            },
        },
        "id": str(uuid.uuid4()),
    }
    try:
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(
                f"{SOV3_API_URL}/mcp",
                json=payload,
                headers={"Authorization": f"Bearer {SOV3_ADMIN_TOKEN}"},
            )
            resp.raise_for_status()
            data = resp.json()
            return (
                data.get("result", {})
                .get("content", [{}])[0]
                .get("text", "I'm having trouble connecting right now. Try again in a moment.")
            )
    except httpx.TimeoutException:
        logger.error("SOV3 request timed out for user %s", user_id)
        return "I'm taking a bit longer than usual — please try again in a moment."
    except httpx.HTTPStatusError as exc:
        logger.error("SOV3 returned HTTP %s for user %s", exc.response.status_code, user_id)
        return "Something went wrong on my end. I'll be back shortly."
    except Exception:
        logger.exception("Unexpected error querying SOV3 for user %s", user_id)
        return "I ran into an unexpected issue. Give me a moment and try again."


# ---------------------------------------------------------------------------
# WhatsApp Cloud API helpers
# ---------------------------------------------------------------------------
async def send_whatsapp_message(to: str, text: str) -> None:
    """Send a plain-text WhatsApp message via the Cloud API."""
    url = f"{GRAPH_API_BASE}/{PHONE_NUMBER_ID}/messages"
    payload = {
        "messaging_product": "whatsapp",
        "to": to,
        "type": "text",
        "text": {"body": text},
    }
    headers = {
        "Authorization": f"Bearer {ACCESS_TOKEN}",
        "Content-Type": "application/json",
    }
    try:
        async with httpx.AsyncClient(timeout=15) as client:
            resp = await client.post(url, json=payload, headers=headers)
            resp.raise_for_status()
            logger.info("Message sent to %s (message_id=%s)", to, resp.json().get("messages", [{}])[0].get("id"))
    except httpx.HTTPStatusError as exc:
        logger.error(
            "Failed to send WhatsApp message to %s: HTTP %s — %s",
            to,
            exc.response.status_code,
            exc.response.text,
        )
    except Exception:
        logger.exception("Unexpected error sending WhatsApp message to %s", to)


async def send_typing_indicator(to: str) -> None:
    """Mark the conversation as 'typing' so the user sees the indicator."""
    url = f"{GRAPH_API_BASE}/{PHONE_NUMBER_ID}/messages"
    payload = {
        "messaging_product": "whatsapp",
        "to": to,
        "type": "reaction",
        "status": "typing",
    }
    headers = {
        "Authorization": f"Bearer {ACCESS_TOKEN}",
        "Content-Type": "application/json",
    }
    # Typing indicators are best-effort; log but don't propagate errors.
    try:
        async with httpx.AsyncClient(timeout=5) as client:
            await client.post(url, json=payload, headers=headers)
    except Exception:
        logger.debug("Could not send typing indicator to %s (non-fatal)", to)


async def mark_message_read(message_id: str) -> None:
    """Send a read receipt for an incoming message."""
    url = f"{GRAPH_API_BASE}/{PHONE_NUMBER_ID}/messages"
    payload = {
        "messaging_product": "whatsapp",
        "status": "read",
        "message_id": message_id,
    }
    headers = {
        "Authorization": f"Bearer {ACCESS_TOKEN}",
        "Content-Type": "application/json",
    }
    try:
        async with httpx.AsyncClient(timeout=5) as client:
            await client.post(url, json=payload, headers=headers)
    except Exception:
        logger.debug("Could not mark message %s as read (non-fatal)", message_id)


# ---------------------------------------------------------------------------
# Core message handler
# ---------------------------------------------------------------------------
async def handle_message(phone_number: str, message_text: str, message_id: str) -> None:
    """
    Full pipeline for an inbound WhatsApp text message:
      1. Mark as read
      2. Send typing indicator
      3. Query SOV3 companion
      4. Deliver response (or friendly error) back to the user
    """
    logger.info("Incoming message from %s (id=%s): %s", phone_number, message_id, message_text[:80])

    # Acknowledge receipt
    await mark_message_read(message_id)
    await send_typing_indicator(phone_number)

    user_id = f"whatsapp_{phone_number}"
    response_text = await sov3_query(user_id, message_text)

    await send_whatsapp_message(phone_number, response_text)


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------
@app.get("/webhook", summary="Meta webhook verification")
async def verify_webhook(
    hub_mode: str = Query(None, alias="hub.mode"),
    hub_verify_token: str = Query(None, alias="hub.verify_token"),
    hub_challenge: str = Query(None, alias="hub.challenge"),
) -> Response:
    """
    Meta calls this endpoint once during webhook setup.
    It expects the hub.challenge value to be echoed back as plain text
    if hub.mode == 'subscribe' and the verify token matches.
    """
    if hub_mode == "subscribe" and hub_verify_token == VERIFY_TOKEN:
        logger.info("Webhook verified successfully.")
        return Response(content=hub_challenge, media_type="text/plain")

    logger.warning(
        "Webhook verification failed — mode=%s token_match=%s",
        hub_mode,
        hub_verify_token == VERIFY_TOKEN,
    )
    raise HTTPException(status_code=403, detail="Webhook verification failed")


@app.post("/webhook", summary="Receive WhatsApp messages")
async def receive_webhook(request: Request) -> dict:
    """
    Meta POSTs all inbound events here.
    We handle text messages; other event types (status updates, etc.)
    are acknowledged but not processed.
    """
    try:
        body = await request.json()
    except Exception:
        logger.warning("Received non-JSON body on /webhook POST")
        raise HTTPException(status_code=400, detail="Invalid JSON")

    logger.debug("Webhook payload: %s", body)

    # Walk the nested structure Meta sends
    for entry in body.get("entry", []):
        for change in entry.get("changes", []):
            value = change.get("value", {})

            for message in value.get("messages", []):
                msg_type = message.get("type")
                msg_id = message.get("id", "")
                from_number = message.get("from", "")

                if msg_type == "text":
                    text = message.get("text", {}).get("body", "").strip()
                    if text:
                        # Fire and forget — respond 200 to Meta immediately,
                        # handle the message asynchronously.
                        import asyncio
                        asyncio.create_task(handle_message(from_number, text, msg_id))
                else:
                    logger.info("Received unsupported message type '%s' from %s — ignoring", msg_type, from_number)

    # Meta requires a 200 OK response, even if we're still processing
    return {"status": "ok"}


# ---------------------------------------------------------------------------
# Health check
# ---------------------------------------------------------------------------
@app.get("/health", summary="Health check")
async def health() -> dict:
    return {"status": "healthy", "service": "meok-whatsapp-bot"}


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8001)
