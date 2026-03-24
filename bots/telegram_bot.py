"""
MEOK Telegram Bot — routes Telegram messages to SOV3 companion.

Uses python-telegram-bot v20+ (async).
Required env vars:
    TELEGRAM_BOT_TOKEN  — from @BotFather
    SOV3_API_URL        — e.g. https://sov3.meok.ai
    SOV3_ADMIN_TOKEN    — SOV3 API authentication token
"""

import logging
import os
import uuid

import httpx
from dotenv import load_dotenv
from telegram import ChatAction, Update
from telegram.constants import ChatAction as TGChatAction
from telegram.ext import (
    Application,
    CommandHandler,
    ContextTypes,
    MessageHandler,
    filters,
)

load_dotenv()

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
TELEGRAM_BOT_TOKEN = os.environ["TELEGRAM_BOT_TOKEN"]
SOV3_API_URL = os.environ["SOV3_API_URL"].rstrip("/")
SOV3_ADMIN_TOKEN = os.environ["SOV3_ADMIN_TOKEN"]

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s — %(message)s",
)
logger = logging.getLogger("meok.telegram")

# Quiet down the noisy telegram library logger
logging.getLogger("httpx").setLevel(logging.WARNING)
logging.getLogger("telegram").setLevel(logging.WARNING)


# ---------------------------------------------------------------------------
# SOV3 integration (shared logic — same endpoint used by all MEOK bots)
# ---------------------------------------------------------------------------
async def sov3_query(user_id: str, text: str, interface: str = "telegram") -> str:
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


async def sov3_get_memory_stats(user_id: str) -> dict:
    """Fetch memory stats for a user from SOV3."""
    payload = {
        "jsonrpc": "2.0",
        "method": "tools/call",
        "params": {
            "name": "get_memory_stats",
            "arguments": {"user_id": user_id},
        },
        "id": str(uuid.uuid4()),
    }
    try:
        async with httpx.AsyncClient(timeout=15) as client:
            resp = await client.post(
                f"{SOV3_API_URL}/mcp",
                json=payload,
                headers={"Authorization": f"Bearer {SOV3_ADMIN_TOKEN}"},
            )
            resp.raise_for_status()
            data = resp.json()
            content = data.get("result", {}).get("content", [{}])[0].get("text", "{}")
            import json
            return json.loads(content) if isinstance(content, str) else content
    except Exception:
        logger.exception("Failed to fetch memory stats for user %s", user_id)
        return {}


# ---------------------------------------------------------------------------
# Command handlers
# ---------------------------------------------------------------------------
async def cmd_start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Welcome the user."""
    user_name = update.effective_user.first_name or "there"
    await update.message.reply_text(
        f"Hey {user_name}. I'm your MEOK companion.\n\n"
        "I remember you, I grow with you, and I'm always here. "
        "Just talk to me."
    )


async def cmd_help(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Show a brief usage guide."""
    help_text = (
        "Here's what you can do:\n\n"
        "• Just *send me a message* — I'll respond as your companion.\n"
        "• /memory — See how much I remember about you.\n"
        "• /reset — Clear today's conversation context (your long-term memory stays safe).\n"
        "• /help — Show this guide.\n\n"
        "I'm built on SOV3 — a sovereign intelligence that grows with every interaction."
    )
    await update.message.reply_text(help_text, parse_mode="Markdown")


async def cmd_memory(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Show the user's memory count from SOV3."""
    user_id = f"telegram_{update.effective_user.id}"

    await context.bot.send_chat_action(
        chat_id=update.effective_chat.id, action=TGChatAction.TYPING
    )

    stats = await sov3_get_memory_stats(user_id)

    if not stats:
        await update.message.reply_text(
            "I couldn't retrieve your memory stats right now. Try again in a moment."
        )
        return

    total = stats.get("total_memories", stats.get("count", "unknown"))
    recent = stats.get("recent_memories", stats.get("recent", None))

    lines = [f"Here's what I'm holding for you:\n\n*Total memories:* {total}"]
    if recent is not None:
        lines.append(f"*Added recently:* {recent}")

    oldest = stats.get("oldest_memory_date") or stats.get("oldest")
    if oldest:
        lines.append(f"*Earliest memory:* {oldest}")

    lines.append("\nEvery conversation adds to what I know about you.")
    await update.message.reply_text("\n".join(lines), parse_mode="Markdown")


async def cmd_reset(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Clear today's conversation context (not permanent memory)."""
    user_id = f"telegram_{update.effective_user.id}"

    # Confirm the reset with the user first
    await update.message.reply_text(
        "I've cleared today's conversation context.\n\n"
        "Your long-term memories are still intact — I still know you. "
        "We're just starting fresh for this session."
    )

    # Notify SOV3 to drop the short-term session context
    payload = {
        "jsonrpc": "2.0",
        "method": "tools/call",
        "params": {
            "name": "reset_session",
            "arguments": {"user_id": user_id},
        },
        "id": str(uuid.uuid4()),
    }
    try:
        async with httpx.AsyncClient(timeout=10) as client:
            resp = await client.post(
                f"{SOV3_API_URL}/mcp",
                json=payload,
                headers={"Authorization": f"Bearer {SOV3_ADMIN_TOKEN}"},
            )
            resp.raise_for_status()
            logger.info("Session reset for user %s", user_id)
    except Exception:
        # The user already got confirmation; log silently.
        logger.exception("Failed to reset SOV3 session for user %s", user_id)


# ---------------------------------------------------------------------------
# Text message handler
# ---------------------------------------------------------------------------
async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Handle any plain text message by routing it to SOV3."""
    user_id = f"telegram_{update.effective_user.id}"
    text = update.message.text

    logger.info(
        "Message from %s (user_id=%s): %s",
        update.effective_user.username or update.effective_user.id,
        user_id,
        text[:80],
    )

    await context.bot.send_chat_action(
        chat_id=update.effective_chat.id, action=TGChatAction.TYPING
    )

    response = await sov3_query(user_id, text)
    await update.message.reply_text(response)


# ---------------------------------------------------------------------------
# Error handler
# ---------------------------------------------------------------------------
async def error_handler(update: object, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Log the error and send a friendly message to the user if possible."""
    logger.exception("Unhandled exception in Telegram bot", exc_info=context.error)

    if isinstance(update, Update) and update.effective_message:
        try:
            await update.effective_message.reply_text(
                "Something unexpected happened on my end. I'm still here — "
                "give it a moment and send your message again."
            )
        except Exception:
            logger.exception("Failed to send error reply to user")


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    application = (
        Application.builder()
        .token(TELEGRAM_BOT_TOKEN)
        .build()
    )

    # Register command handlers
    application.add_handler(CommandHandler("start", cmd_start))
    application.add_handler(CommandHandler("help", cmd_help))
    application.add_handler(CommandHandler("memory", cmd_memory))
    application.add_handler(CommandHandler("reset", cmd_reset))

    # Register text message handler (non-command messages)
    application.add_handler(
        MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message)
    )

    # Register error handler
    application.add_error_handler(error_handler)

    logger.info("MEOK Telegram Bot starting — polling for updates...")
    application.run_polling(allowed_updates=Update.ALL_TYPES)
