"""
LLM Router — multi-provider routing with circuit breaker fallback.

From MEOK.AI Technical Architecture Blueprint (2026-03-19):
Routes LLM requests to the cheapest/fastest capable provider based on task type.
Falls back to next provider automatically on failure (circuit breaker pattern).

Providers supported:
- Anthropic Claude (claude-3-5-sonnet, claude-opus-4)  — primary reasoning + care
- OpenAI (gpt-4.1, o3, o4-mini)                        — reasoning/coding backup
- Google Gemini (gemini-2.5-pro, gemini-1.5-pro)       — long-context, native code exec
- Ollama (local)                                        — private/on-premise, dreaming
- Custom OpenAI-compatible endpoints                    — open-source models

Task types and their provider preferences:
- "reasoning"    → Claude → o3 → Gemini-2.5
- "code"         → Gemini-2.5 → qwen2.5-coder (ollama) → GPT-4.1
- "fast"         → GPT-4.1-mini → llama3 (ollama) → Claude-haiku
- "dream"        → Ollama → (no fallback, dreams are local-only)
- "long_context" → Gemini-1.5-pro → Claude → GPT-4-turbo
- "care"         → Claude (always — care alignment requires Claude's values)
"""

from __future__ import annotations

import asyncio
import json
import os
import time
import urllib.request
from collections import deque
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Tuple


# ── Provider definitions ──────────────────────────────────────────────────────

@dataclass
class Provider:
    name: str
    model: str
    base_url: str
    api_key_env: str
    context_window: int        # tokens
    cost_per_1k_in: float      # USD
    cost_per_1k_out: float     # USD
    supports_tools: bool = True
    requires_local: bool = False  # True for Ollama — no API key needed


PROVIDERS: List[Provider] = [
    Provider(
        name="claude",
        model=os.environ.get("MEOK_CLAUDE_MODEL", "claude-3-5-sonnet-20241022"),
        base_url="https://api.anthropic.com/v1",
        api_key_env="ANTHROPIC_API_KEY",
        context_window=200_000,
        cost_per_1k_in=0.003,
        cost_per_1k_out=0.015,
    ),
    Provider(
        name="openai",
        model=os.environ.get("MEOK_OPENAI_MODEL", "gpt-4.1-mini"),
        base_url="https://api.openai.com/v1",
        api_key_env="OPENAI_API_KEY",
        context_window=128_000,
        cost_per_1k_in=0.0004,
        cost_per_1k_out=0.0016,
    ),
    Provider(
        name="gemini",
        model=os.environ.get("MEOK_GEMINI_MODEL", "gemini-2.0-flash"),
        base_url="https://generativelanguage.googleapis.com/v1beta",
        api_key_env="GEMINI_API_KEY",
        context_window=1_000_000,
        cost_per_1k_in=0.00015,
        cost_per_1k_out=0.0006,
    ),
    Provider(
        name="ollama",
        model=os.environ.get("MEOK_OLLAMA_MODEL", "llama3.2"),
        base_url=os.environ.get("OLLAMA_URL", "http://localhost:11434"),
        api_key_env="",
        context_window=128_000,
        cost_per_1k_in=0.0,
        cost_per_1k_out=0.0,
        requires_local=True,
    ),
]

PROVIDER_MAP = {p.name: p for p in PROVIDERS}

# Task type → ordered list of provider names (preference order)
TASK_ROUTING: Dict[str, List[str]] = {
    "reasoning":    ["claude", "openai", "gemini"],
    "code":         ["gemini", "ollama", "openai", "claude"],
    "fast":         ["openai", "ollama", "claude"],
    "dream":        ["ollama"],           # local-only — privacy
    "long_context": ["gemini", "claude", "openai"],
    "care":         ["claude"],           # care alignment → Claude always
    "default":      ["claude", "openai", "gemini"],
}


# ── Circuit breaker ───────────────────────────────────────────────────────────

@dataclass
class CircuitBreaker:
    """Simple circuit breaker: open after N failures, resets after cooldown_s."""
    provider_name: str
    failure_threshold: int = 3
    cooldown_s: float = 60.0
    _failures: deque = field(default_factory=lambda: deque(maxlen=10))
    _open_until: float = 0.0

    def is_open(self) -> bool:
        if time.monotonic() > self._open_until:
            return False
        return True

    def record_failure(self) -> None:
        self._failures.append(time.monotonic())
        recent = [t for t in self._failures if time.monotonic() - t < 120]
        if len(recent) >= self.failure_threshold:
            self._open_until = time.monotonic() + self.cooldown_s

    def record_success(self) -> None:
        self._failures.clear()
        self._open_until = 0.0


# ── Cost tracker ─────────────────────────────────────────────────────────────

@dataclass
class UsageStat:
    provider: str
    model: str
    input_tokens: int
    output_tokens: int
    cost_usd: float
    task_type: str
    elapsed_ms: float = 0.0          # wall-clock latency for the full API call
    timestamp: float = field(default_factory=time.time)


_USAGE_LOG: List[UsageStat] = []
MAX_USAGE_LOG = 1000


def _log_usage(stat: UsageStat) -> None:
    _USAGE_LOG.append(stat)
    if len(_USAGE_LOG) > MAX_USAGE_LOG:
        _USAGE_LOG.pop(0)


# ── The router ────────────────────────────────────────────────────────────────

class LLMRouter:
    """Routes LLM requests to the best available provider for the task."""

    def __init__(self) -> None:
        self._breakers: Dict[str, CircuitBreaker] = {
            p.name: CircuitBreaker(p.name) for p in PROVIDERS
        }
        self._lock = asyncio.Lock()

    def get_provider_order(self, task_type: str) -> List[Provider]:
        """Return providers in preference order, skipping unavailable/tripped."""
        names = TASK_ROUTING.get(task_type, TASK_ROUTING["default"])
        result = []
        for name in names:
            provider = PROVIDER_MAP.get(name)
            if provider is None:
                continue
            # Skip if no API key (and not local)
            if not provider.requires_local:
                key = os.environ.get(provider.api_key_env, "")
                if not key:
                    continue
            # Skip if circuit breaker is open
            if self._breakers[name].is_open():
                continue
            result.append(provider)
        return result

    async def complete(
        self,
        messages: List[Dict[str, str]],
        task_type: str = "default",
        max_tokens: int = 1024,
        temperature: float = 0.7,
        system: Optional[str] = None,
        preferred_provider: Optional[str] = None,
    ) -> Dict[str, Any]:
        """
        Route a completion request to the best available provider.

        Returns:
            {
                "content": str,
                "provider": str,
                "model": str,
                "input_tokens": int,
                "output_tokens": int,
                "cost_usd": float,
            }
        """
        providers = self.get_provider_order(task_type)

        # Honor preferred_provider if available and not tripped
        if preferred_provider and preferred_provider in PROVIDER_MAP:
            pref = PROVIDER_MAP[preferred_provider]
            if not self._breakers[preferred_provider].is_open():
                providers = [pref] + [p for p in providers if p.name != preferred_provider]

        if not providers:
            raise RuntimeError(
                f"No available providers for task_type='{task_type}'. "
                f"Check API keys and circuit breaker status."
            )

        last_error: Optional[Exception] = None
        for provider in providers:
            try:
                result = await self._call_provider(
                    provider, messages, system, max_tokens, temperature
                )
                self._breakers[provider.name].record_success()

                # Cost tracking
                cost = (
                    result["input_tokens"] / 1000 * provider.cost_per_1k_in
                    + result["output_tokens"] / 1000 * provider.cost_per_1k_out
                )
                _log_usage(UsageStat(
                    provider=provider.name,
                    model=provider.model,
                    input_tokens=result["input_tokens"],
                    output_tokens=result["output_tokens"],
                    cost_usd=cost,
                    task_type=task_type,
                    elapsed_ms=result.get("elapsed_ms", 0.0),
                ))
                result["cost_usd"] = round(cost, 6)
                result["provider"] = provider.name
                result["model"] = provider.model
                return result

            except Exception as e:
                self._breakers[provider.name].record_failure()
                last_error = e
                continue

        raise RuntimeError(
            f"All providers failed for task_type='{task_type}'. "
            f"Last error: {last_error}"
        )

    async def _call_provider(
        self,
        provider: Provider,
        messages: List[Dict[str, str]],
        system: Optional[str],
        max_tokens: int,
        temperature: float,
    ) -> Dict[str, Any]:
        """Dispatch to the correct provider API."""
        if provider.name == "claude":
            return await self._call_claude(provider, messages, system, max_tokens, temperature)
        elif provider.name == "ollama":
            return await self._call_ollama(provider, messages, system, max_tokens, temperature)
        else:
            # OpenAI-compatible (openai, gemini via openai compat, custom)
            return await self._call_openai_compat(provider, messages, system, max_tokens, temperature)

    async def _call_claude(
        self,
        provider: Provider,
        messages: List[Dict[str, str]],
        system: Optional[str],
        max_tokens: int,
        temperature: float,
    ) -> Dict[str, Any]:
        api_key = os.environ.get(provider.api_key_env, "")
        payload = {
            "model": provider.model,
            "max_tokens": max_tokens,
            "messages": messages,
            "temperature": temperature,
        }
        if system:
            payload["system"] = system

        def _do():
            data = json.dumps(payload).encode()
            req = urllib.request.Request(
                f"{provider.base_url}/messages",
                data=data,
                headers={
                    "Content-Type": "application/json",
                    "x-api-key": api_key,
                    "anthropic-version": "2023-06-01",
                },
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=60) as resp:
                return json.loads(resp.read().decode())

        loop = asyncio.get_event_loop()
        _t0 = time.monotonic()
        resp = await loop.run_in_executor(None, _do)
        elapsed_ms = round((time.monotonic() - _t0) * 1000, 1)

        content = ""
        for block in resp.get("content", []):
            if block.get("type") == "text":
                content += block.get("text", "")

        usage = resp.get("usage", {})
        return {
            "content": content,
            "input_tokens": usage.get("input_tokens", 0),
            "output_tokens": usage.get("output_tokens", 0),
            "elapsed_ms": elapsed_ms,
        }

    async def _call_openai_compat(
        self,
        provider: Provider,
        messages: List[Dict[str, str]],
        system: Optional[str],
        max_tokens: int,
        temperature: float,
    ) -> Dict[str, Any]:
        api_key = os.environ.get(provider.api_key_env, "openai")
        all_messages = []
        if system:
            all_messages.append({"role": "system", "content": system})
        all_messages.extend(messages)

        payload = {
            "model": provider.model,
            "messages": all_messages,
            "max_tokens": max_tokens,
            "temperature": temperature,
        }

        def _do():
            data = json.dumps(payload).encode()
            req = urllib.request.Request(
                f"{provider.base_url}/chat/completions",
                data=data,
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {api_key}",
                },
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=60) as resp:
                return json.loads(resp.read().decode())

        loop = asyncio.get_event_loop()
        _t0 = time.monotonic()
        resp = await loop.run_in_executor(None, _do)
        elapsed_ms = round((time.monotonic() - _t0) * 1000, 1)

        content = resp["choices"][0]["message"]["content"]
        usage = resp.get("usage", {})
        return {
            "content": content,
            "input_tokens": usage.get("prompt_tokens", 0),
            "output_tokens": usage.get("completion_tokens", 0),
            "elapsed_ms": elapsed_ms,
        }

    async def _call_ollama(
        self,
        provider: Provider,
        messages: List[Dict[str, str]],
        system: Optional[str],
        max_tokens: int,
        temperature: float,
    ) -> Dict[str, Any]:
        # Convert messages to single prompt for Ollama chat API
        all_messages = []
        if system:
            all_messages.append({"role": "system", "content": system})
        all_messages.extend(messages)

        payload = {
            "model": provider.model,
            "messages": all_messages,
            "stream": False,
            "options": {"temperature": temperature, "num_predict": max_tokens},
        }

        def _do():
            data = json.dumps(payload).encode()
            req = urllib.request.Request(
                f"{provider.base_url}/api/chat",
                data=data,
                headers={"Content-Type": "application/json"},
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=60) as resp:
                return json.loads(resp.read().decode())

        loop = asyncio.get_event_loop()
        _t0 = time.monotonic()
        resp = await loop.run_in_executor(None, _do)
        elapsed_ms = round((time.monotonic() - _t0) * 1000, 1)

        content = resp.get("message", {}).get("content", "")
        usage = resp.get("prompt_eval_count", 0)
        return {
            "content": content,
            "input_tokens": usage,
            "output_tokens": resp.get("eval_count", 0),
            "elapsed_ms": elapsed_ms,
        }

    def get_usage_stats(self) -> Dict[str, Any]:
        """Aggregate usage, cost, and latency stats across all providers."""
        by_provider: Dict[str, Dict[str, Any]] = {}
        total_cost = 0.0
        for stat in _USAGE_LOG:
            p = by_provider.setdefault(stat.provider, {
                "calls": 0,
                "input_tokens": 0,
                "output_tokens": 0,
                "cost_usd": 0.0,
                "total_ms": 0.0,   # TTFT/TPOT aggregate wall-clock latency
            })
            p["calls"] += 1
            p["input_tokens"] += stat.input_tokens
            p["output_tokens"] += stat.output_tokens
            p["cost_usd"] += stat.cost_usd
            p["total_ms"] += stat.elapsed_ms
            total_cost += stat.cost_usd

        # Compute avg_ms per provider and round cost
        by_provider_out = {}
        for k, v in by_provider.items():
            by_provider_out[k] = {
                **v,
                "cost_usd": round(v["cost_usd"], 6),
                "total_ms": round(v["total_ms"], 1),
                "avg_ms": round(v["total_ms"] / v["calls"], 1) if v["calls"] else 0.0,
            }

        return {
            "total_calls": len(_USAGE_LOG),
            "total_cost_usd": round(total_cost, 6),
            "by_provider": by_provider_out,
            "circuit_breakers": {
                name: {"open": cb.is_open(), "failures": len(cb._failures)}
                for name, cb in self._breakers.items()
            },
        }

    def get_available_providers(self, task_type: str = "default") -> List[str]:
        """Return names of currently available providers for a task type."""
        return [p.name for p in self.get_provider_order(task_type)]


# ── Module singleton ──────────────────────────────────────────────────────────

_router: Optional[LLMRouter] = None


def get_router() -> LLMRouter:
    global _router
    if _router is None:
        _router = LLMRouter()
    return _router


def init_router() -> LLMRouter:
    global _router
    _router = LLMRouter()
    return _router
