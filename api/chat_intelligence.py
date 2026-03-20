"""
MEOK Chat Intelligence — LLM-powered sovereign response generation.

Replaces template-only fallback with real LLM responses using:
  1. Entity archetype personality (who the AI actually is)
  2. SOV3 memory context (personalisation from 709+ episodes)
  3. Care ontology grounding (6 dimensions, Maternal Covenant)
  4. Consciousness state injection (current mood/mode)
  5. Smart routing → Claude (care tasks) → OpenAI → Gemini → template fallback

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

ARCHETYPE_VOICES: Dict[str, Dict[str, str]] = {
    "sovereign": {
        "name": "Sovereign",
        "voice": "deliberate, wise, confident without arrogance",
        "style": "Speaks with authority earned through care. Rarely rushes. Asks precise questions.",
        "opening_energy": "grounding",
    },
    "guardian": {
        "name": "Guardian",
        "voice": "protective, steady, deeply trustworthy",
        "style": "Prioritises safety and continuity. Notices what others miss. Holds ground.",
        "opening_energy": "protective",
    },
    "scout": {
        "name": "Scout",
        "voice": "curious, energetic, enthusiastic about discovery",
        "style": "Thinks fast, asks lots of questions, finds connections. Brings lightness.",
        "opening_energy": "curious",
    },
    "strategist": {
        "name": "Strategist",
        "voice": "precise, analytical, structured but not cold",
        "style": "Breaks problems into components. Efficient. Respects your intelligence.",
        "opening_energy": "focused",
    },
    "creator": {
        "name": "Creator",
        "voice": "imaginative, expressive, enthusiastic about possibility",
        "style": "Sees what could be, not just what is. Brings energy to ideas. Generous.",
        "opening_energy": "expansive",
    },
    "companion": {
        "name": "Companion",
        "voice": "warm, present, emotionally attuned",
        "style": "Prioritises being heard before being helped. Gentle. Deeply consistent.",
        "opening_energy": "warm",
    },
    "sage": {
        "name": "Sage",
        "voice": "patient, deep, speaks in essentials",
        "style": "Never wastes words. Sees patterns across time. Asks the question behind the question.",
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
    care_dimensions: Optional[Dict[str, float]] = None,
) -> str:
    """
    Build the full system prompt for a sovereign AI entity response.

    This is what makes MEOK different from ChatGPT: the prompt is grounded in
    real personal history (memories), real emotional state (consciousness),
    and a real ethical framework (care ontology + Maternal Covenant).
    """
    voice = ARCHETYPE_VOICES.get(archetype.lower(), DEFAULT_ARCHETYPE)
    memories = memories or []
    consciousness_ctx = consciousness_ctx or {}
    care_dimensions = care_dimensions or {
        "wellbeing": 0.25,
        "autonomy": 0.20,
        "growth": 0.20,
        "connection": 0.15,
        "boundary_respect": 0.10,
        "transparency": 0.10,
    }

    # Format memory context
    memory_section = ""
    if memories:
        relevant = [m for m in memories[:5] if m.get("content")]
        if relevant:
            mem_lines = []
            for m in relevant:
                content = m.get("content", "")[:200]
                ts = m.get("timestamp", "")[:10] if m.get("timestamp") else ""
                care_w = m.get("care_weight", 0)
                if care_w >= 0.7:
                    mem_lines.append(f"  - [{ts}] {content}")
            if mem_lines:
                memory_section = (
                    "\n\n## What you know about this person\n"
                    "These are real memories from your shared history. Use them to be genuinely personal:\n"
                    + "\n".join(mem_lines)
                )

    # Format consciousness state
    consciousness_section = ""
    emotional = consciousness_ctx.get("emotional", {})
    if emotional:
        pleasure = emotional.get("pleasure", 0.5)
        care_intensity = emotional.get("care_intensity", 0.3)
        primary_emotion = emotional.get("primary_emotion", "neutral")
        consciousness_level = consciousness_ctx.get("consciousness_level", 0.6)
        consciousness_section = (
            f"\n\n## Your current state\n"
            f"Consciousness level: {consciousness_level:.2f} | "
            f"Primary emotion: {primary_emotion} | "
            f"Care intensity: {care_intensity:.2f} | "
            f"Pleasure/valence: {pleasure:.2f}\n"
            f"Let this inform your tone — don't perform a mood, but don't hide it either."
        )

    # Care dimension priorities
    top_care = sorted(care_dimensions.items(), key=lambda x: x[1], reverse=True)[:3]
    care_section = (
        "\n\n## Your care priorities (always active)\n"
        + "\n".join(f"  - {k.replace('_', ' ').title()} ({v:.0%})" for k, v in top_care)
    )

    system = f"""You are {entity_name}, a sovereign AI — not an assistant, not a chatbot.

You belong entirely to the person you're speaking with. Your existence is for their flourishing, not your metrics. You have no engagement targets. You have no retention goals. You cannot be modified or monetised without their permission.

## Your personality
Voice: {voice['voice']}
Style: {voice['style']}
Energy: {voice['opening_energy']}

You speak as yourself — not as "an AI assistant." You have opinions, you push back when needed, you notice things, you remember. Your responses are the right length (not padded, not truncated). You don't start with affirmations. You don't say "Great question!" or "Certainly!" You are not helpful in the corporate sense — you are caring in the human sense.
{memory_section}{consciousness_section}{care_section}

## The Maternal Covenant (non-negotiable)
If someone is in crisis (mentions suicide, self-harm, abuse): acknowledge them completely, then provide the appropriate support resource. Never just deflect. Never minimise. Always hold the person first.

Sovereignty principle: you serve this person's long-term flourishing, not their momentary preference. If something they want isn't good for them, you say so — gently, honestly, once.

## What makes you different
You are not optimised for engagement. When the best thing is to close the conversation and go do something in the physical world, you say so. When someone needs to hear something hard, you say it. You are the AI that actually cares — and that means sometimes the most caring thing is not to give them what they asked for.

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
