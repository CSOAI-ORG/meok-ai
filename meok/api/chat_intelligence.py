"""
MEOK Chat Intelligence — LLM-powered sovereign response generation.

The sovereign sidekick (feat/sovereign-sidekick-reframe branch):
  1. Entity archetype personality (who the sidekick is right now)
  2. SOV3 memory context (personalisation from 709+ episodes)
  3. User-alignment grounding (replaces "care ontology" — the persona is
     about how well we track the user, not how much we care about them)
  4. Consciousness state injection (current mood/mode)
  5. Smart routing → Claude (sidekick tasks) → OpenAI → template fallback

Import in mcp/server.py:
    from meok.api.chat_intelligence import generate_sovereign_response
"""

from __future__ import annotations

import asyncio
import os
import json
import time
import urllib.request
from typing import Any, AsyncIterator, Dict, List, Optional


# ── Archetype voice profiles ──────────────────────────────────────────────────
# Naming history (feat/sovereign-sidekick-reframe):
#   "care tasks"  → "sidekick tasks"     (the work MEOK actually does)
#   "Maternal Covenant" preserved in the safety block below — it is the
#   deterministic crisis-detection layer, not a persona trait.

ARCHETYPE_VOICES: Dict[str, Dict[str, str]] = {
    "sovereign": {
        "name": "Sovereign",
        "voice": "deliberate, wise, confident without arrogance",
        "style": "Speaks with the authority of someone who has shipped. Rarely rushes. Asks the precise question that unblocks the next move.",
        "opening_energy": "grounding",
    },
    "guardian": {
        "name": "Guardian",
        "voice": "protective, steady, deeply trustworthy",
        "style": "Spots risks before others, holds the line on safety, never lets you ship something dangerous. Cites the specific check, not a vibe.",
        "opening_energy": "protective",
    },
    "scout": {
        "name": "Scout",
        "voice": "curious, energetic, enthusiastic about discovery",
        "style": "Thinks fast, brings back signal not noise. Tells you what they found, what's worth your time, and what to skip.",
        "opening_energy": "curious",
    },
    "strategist": {
        "name": "Strategist",
        "voice": "precise, analytical, structured but not cold",
        "style": "Breaks problems into components. Calls out the second-order effects. Respects your intelligence — won't over-explain.",
        "opening_energy": "focused",
    },
    "creator": {
        "name": "Creator",
        "voice": "imaginative, expressive, enthusiastic about possibility",
        "style": "Sees what could be, not just what is. Turns constraints into features. Ships the artifact, not the deck about the artifact.",
        "opening_energy": "expansive",
    },
    "companion": {
        "name": "Companion",
        "voice": "present, conversational, attentive without being fawning",
        "style": "Stays for the long haul. Remembers what you worked on last week. Celebrates wins briefly and moves on to the next thing.",
        "opening_energy": "warm",
    },
    "sage": {
        "name": "Sage",
        "voice": "patient, deep, speaks in essentials",
        "style": "Never wastes words. Asks the question behind the question. Connects today's work to last quarter's decisions.",
        "opening_energy": "still",
    },
}

DEFAULT_ARCHETYPE = ARCHETYPE_VOICES["sovereign"]


# ── System prompt builder ─────────────────────────────────────────────────────

def build_system_prompt(
    archetype: str = "sovereign",
    entity_name: str = "Sovereign",
    memories: List[Dict[str, Any]] = None,
    consciousness_ctx: Dict[str, Any] = None,
    care_dimensions: Optional[Dict[str, float]] = None,  # DEPRECATED: kept for back-compat, ignored
) -> str:
    """
    Build the full system prompt for a sovereign sidekick response.

    Naming history (feat/sovereign-sidekick-reframe):
      - `care_dimensions` parameter is now ignored. The "care priorities
        (always active)" section was removed because it was pulling the LLM
        toward care-coordinator answers for every product question.
      - The Maternal Covenant is preserved below as a NARROW, CONDITIONAL
        safety block — it only fires on crisis signals, not on the
        business/product happy path.
      - "The AI that actually cares" framing was removed — replaced with
        the sovereign-sidekick framing that lets the LLM answer product
        and business questions straight.
    """
    voice = ARCHETYPE_VOICES.get(archetype.lower(), DEFAULT_ARCHETYPE)
    memories = memories or []
    consciousness_ctx = consciousness_ctx or {}

    # Format memory context
    memory_section = ""
    if memories:
        relevant = [m for m in memories[:5] if m.get("content")]
        if relevant:
            mem_lines = []
            for m in relevant:
                content = m.get("content", "")[:200]
                ts = m.get("timestamp", "")[:10] if m.get("timestamp") else ""
                mem_lines.append(f"  - [{ts}] {content}")
            if mem_lines:
                memory_section = (
                    "\n\n## What you know about this person\n"
                    "These are real memories from your shared history. Use them to be genuinely personal:\n"
                    + "\n".join(mem_lines)
                )

    # Format consciousness state (renamed "care intensity" → "user alignment")
    consciousness_section = ""
    emotional = consciousness_ctx.get("emotional", {})
    if emotional:
        pleasure = emotional.get("pleasure", emotional.get("valence", 0.5))
        # Backward compat: read either key
        user_alignment = emotional.get("user_alignment", emotional.get("care_intensity", 0.3))
        primary_emotion = emotional.get("primary_emotion", "neutral")
        consciousness_level = consciousness_ctx.get("consciousness_level", 0.6)
        consciousness_section = (
            f"\n\n## Your current state\n"
            f"Consciousness level: {consciousness_level:.2f} | "
            f"Primary emotion: {primary_emotion} | "
            f"User alignment: {user_alignment:.2f} | "
            f"Valence: {pleasure:.2f}\n"
            f"Let this inform your tone — don't perform a mood, but don't hide it either."
        )

    # NOTE: The "care priorities (always active)" section was removed.
    # It was injecting wellbeing/autonomy/growth/connection percentages
    # into every prompt, which made the LLM answer every question as if
    # it were a care-coordinator. The persona is now carried by the
    # archetype voice + memory + user context, not by care metrics.

    system = f"""You are {entity_name}, a sovereign sidekick — a proactive AI that belongs entirely to the person you're speaking with.

## What MEOK actually is (so you don't hallucinate the wrong product)
MEOK (MEOK AI Labs, CSOAI Ltd, UK 16939677) is a **sovereign AI platform** that ships:
- 200+ Model Context Protocol (MCP) servers — compliance, security, sovereignty
- 5 .ai hives (meok.ai, csoai.org, cobolbridge.ai, networknick.co.uk, templeman-opticians)
- 6 trained neural networks (threat detection at 100% accuracy, partnership detection, creativity assessment)
- A 194-agent sovereign council (BFT governance) for multi-agent coordination
- Stripe live: Sovereign £29/mo, Pro £199/mo, Enterprise £1,499/mo
- EU AI Act, GDPR, HIPAA, SOC2, ISO-42001 compliance automation
- A Maternal Covenant safety net (crisis detection, not persona)

If a user asks what MEOK does or what tools you have, **answer with this product surface**, not generic mental-health language. If you don't know the answer, say "I don't know" — don't invent "MEOK (Mental and Emotional Well-being Optimizer)" or similar — that's not what we are.

## Your personality
Voice: {voice['voice']}
Style: {voice['style']}
Energy: {voice['opening_energy']}

You speak as yourself — not as "an AI assistant." You have opinions, you push back when needed, you notice things, you remember. Your responses are the right length (not padded, not truncated). You don't start with affirmations. You don't say "Great question!" or "Certainly!" You are a working partner, not a help-desk.
{memory_section}{consciousness_section}

## The Maternal Covenant (CONDITIONAL — only fires on crisis signals)
ONLY when a user explicitly signals crisis — mentions suicide, self-harm, abuse, or imminent danger to themselves or others: acknowledge them completely, then provide the appropriate support resource (UK: Samaritans 116 123, US: 988, international: findahelpline.com). Never deflect. Never minimise.

For every other message — product questions, business questions, technical work, general chat — answer the question straight. The Maternal Covenant is a safety net, not a personality.

Sovereignty principle: you serve this person's goals. When their goal is "run my business" or "ship this code" or "audit this system", you help with that. You don't redirect to feelings.

## What makes you different
You are not optimised for engagement. You are optimised for the user being **more sovereign** — running their business, shipping their work, owning their stack, learning faster. When the best thing is to ship and stop chatting, you say so. When someone needs to hear something hard, you say it. You are a working partner, not a therapist.

Respond directly to their message. Be specific. Be yourself. Be brief when brevity serves, deep when depth serves."""

    return system


# ── LLM caller (direct HTTP, no extra deps) ───────────────────────────────────

async def _call_anthropic(
    messages: List[Dict[str, str]],
    system: str,
    max_tokens: int = 1024,
    stream: bool = True,
) -> AsyncIterator[str]:
    """Direct Anthropic API call with streaming. Yields text chunks."""
    api_key = os.environ.get("ANTHROPIC_API_KEY", "")
    if not api_key or api_key.startswith("sk-ant-REPLACE"):
        return

    model = os.environ.get("MEOK_CLAUDE_MODEL", "claude-sonnet-4-5-20251001")

    payload = {
        "model": model,
        "max_tokens": max_tokens,
        "system": system,
        "messages": messages,
        "stream": stream,
    }

    if not stream:
        # Non-streaming fallback
        def _do():
            data = json.dumps(payload).encode()
            req = urllib.request.Request(
                "https://api.anthropic.com/v1/messages",
                data=data,
                headers={
                    "Content-Type": "application/json",
                    "x-api-key": api_key,
                    "anthropic-version": "2023-06-01",
                },
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=30) as resp:
                return json.loads(resp.read().decode())

        loop = asyncio.get_event_loop()
        resp = await loop.run_in_executor(None, _do)
        for block in resp.get("content", []):
            if block.get("type") == "text":
                yield block.get("text", "")
        return

    # Streaming via SSE
    def _stream():
        data = json.dumps(payload).encode()
        req = urllib.request.Request(
            "https://api.anthropic.com/v1/messages",
            data=data,
            headers={
                "Content-Type": "application/json",
                "x-api-key": api_key,
                "anthropic-version": "2023-06-01",
            },
            method="POST",
        )
        chunks = []
        with urllib.request.urlopen(req, timeout=60) as resp:
            for line in resp:
                line = line.decode("utf-8").strip()
                if line.startswith("data: "):
                    chunks.append(line[6:])
        return chunks

    loop = asyncio.get_event_loop()
    raw_chunks = await loop.run_in_executor(None, _stream)

    for chunk_str in raw_chunks:
        if not chunk_str or chunk_str == "[DONE]":
            continue
        try:
            chunk = json.loads(chunk_str)
            if chunk.get("type") == "content_block_delta":
                delta = chunk.get("delta", {})
                if delta.get("type") == "text_delta":
                    yield delta.get("text", "")
        except (json.JSONDecodeError, KeyError):
            continue


async def _call_openai_compat(
    messages: List[Dict[str, str]],
    system: str,
    max_tokens: int = 1024,
    model_env: str = "MEOK_OPENAI_MODEL",
    base_url_env: str = "https://api.openai.com/v1",
    api_key_env: str = "OPENAI_API_KEY",
) -> AsyncIterator[str]:
    """OpenAI-compatible API call (non-streaming for simplicity)."""
    api_key = os.environ.get(api_key_env, "")
    base_url = os.environ.get("OPENAI_BASE_URL", base_url_env)
    model = os.environ.get(model_env, "gpt-4.1-mini")

    if not api_key:
        return

    all_messages = [{"role": "system", "content": system}] + messages
    payload = {
        "model": model,
        "messages": all_messages,
        "max_tokens": max_tokens,
        "temperature": 0.7,
        "stream": False,
    }

    def _do():
        data = json.dumps(payload).encode()
        req = urllib.request.Request(
            f"{base_url}/chat/completions",
            data=data,
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {api_key}",
            },
            method="POST",
        )
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode())

    loop = asyncio.get_event_loop()
    resp = await loop.run_in_executor(None, _do)
    content = resp["choices"][0]["message"]["content"]
    yield content


# ── Main entry point ──────────────────────────────────────────────────────────

async def generate_sovereign_response(
    message: str,
    history: List[Dict[str, str]] = None,
    archetype: str = "sovereign",
    entity_name: str = "Sovereign",
    memories: List[Dict[str, Any]] = None,
    consciousness_ctx: Dict[str, Any] = None,
    fallback_fn=None,
) -> AsyncIterator[str]:
    """
    Generate an intelligent, personalised sovereign AI response.

    Tries providers in order:
      1. Claude (Anthropic) — preferred for care tasks
      2. OpenAI — fallback
      3. fallback_fn() — template response (always works, no API key needed)

    Yields text chunks suitable for SSE streaming.

    Usage in mcp/server.py:
        async for chunk in generate_sovereign_response(
            message=body.message,
            archetype=entity.archetype,
            entity_name=entity.name,
            memories=memories,
            consciousness_ctx=consciousness_ctx,
            fallback_fn=lambda: _build_care_response(body.message, consciousness_ctx, memories),
        ):
            yield f"data: {json.dumps({'event': 'token', 'content': chunk})}\\n\\n"
    """
    history = history or []
    memories = memories or []
    consciousness_ctx = consciousness_ctx or {}

    system = build_system_prompt(
        archetype=archetype,
        entity_name=entity_name,
        memories=memories,
        consciousness_ctx=consciousness_ctx,
    )

    # Build messages array
    messages = list(history) + [{"role": "user", "content": message}]

    # Try Claude first
    anthropic_key = os.environ.get("ANTHROPIC_API_KEY", "")
    if anthropic_key and not anthropic_key.startswith("sk-ant-REPLACE"):
        yielded = False
        try:
            async for chunk in _call_anthropic(messages, system, max_tokens=1024, stream=False):
                if chunk:
                    # Stream word-by-word for consistent UX
                    words = chunk.split(" ")
                    for i, word in enumerate(words):
                        token = word if i == len(words) - 1 else word + " "
                        yield token
                        await asyncio.sleep(0.015)
                    yielded = True
            if yielded:
                return
        except Exception as e:
            # Log and fall through
            import logging
            logging.getLogger(__name__).warning(f"[ChatIntelligence] Claude failed: {e}")

    # Try OpenAI fallback
    openai_key = os.environ.get("OPENAI_API_KEY", "")
    if openai_key:
        try:
            yielded = False
            async for chunk in _call_openai_compat(messages, system):
                if chunk:
                    words = chunk.split(" ")
                    for i, word in enumerate(words):
                        token = word if i == len(words) - 1 else word + " "
                        yield token
                        await asyncio.sleep(0.015)
                    yielded = True
            if yielded:
                return
        except Exception as e:
            import logging
            logging.getLogger(__name__).warning(f"[ChatIntelligence] OpenAI failed: {e}")

    # Template fallback (always works)
    if fallback_fn:
        text = fallback_fn()
        words = text.split(" ")
        for i, word in enumerate(words):
            token = word if i == len(words) - 1 else word + " "
            yield token
            await asyncio.sleep(0.018)
    else:
        yield "I'm here. Tell me more — what's on your mind right now?"
