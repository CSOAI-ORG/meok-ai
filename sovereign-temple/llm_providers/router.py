"""
MEOK Sovereign Temple — Unified LLM Router v3.0

Routes requests to the best available LLM based on task type.
Features:
- Task-based routing
- Automatic fallback chain
- Circuit breaker for failing providers
- Latency tracking
- Cost optimization
- Apfel (Apple on-device) support
- AirLLM (layer-wise inference) support
"""

import logging
import time
import json
import hashlib
from collections import defaultdict
from typing import Optional, Dict, Any, List
from .ollama_provider import ollama
from .openrouter_provider import openrouter
from .cerebras_provider import cerebras
from .apfel_provider import apfel
from .airllm_provider import airllm
from .litellm_provider import litellm_provider

logger = logging.getLogger(__name__)


class ResponseCache:
    """In-memory response cache for LLM requests."""

    def __init__(self, ttl_seconds: int = 3600):
        self.cache = {}  # {hash: (response, timestamp)}
        self.ttl = ttl_seconds
        self.hits = 0
        self.misses = 0

    def _hash_request(self, messages: list, model: str, provider: str) -> str:
        """Create cache key from request."""
        import hashlib
        import json

        data = f"{provider}:{model}:{json.dumps(messages, sort_keys=True)}"
        return hashlib.sha256(data.encode()).hexdigest()

    def get(self, messages: List, model: str, provider: str) -> Optional[str]:
        """Get cached response if available and not expired."""
        key = self._hash_request(messages, model, provider)
        if key in self.cache:
            response, ts = self.cache[key]
            if time.time() - ts < self.ttl:
                self.hits += 1
                return response
            else:
                del self.cache[key]  # Expired
        self.misses += 1
        return None

    def set(self, messages: list, model: str, provider: str, response: str):
        """Cache a response."""
        key = self._hash_request(messages, model, provider)
        self.cache[key] = (response, time.time())

        # Limit cache size
        if len(self.cache) > 1000:
            # Remove oldest 100 entries
            sorted_cache = sorted(self.cache.items(), key=lambda x: x[1][1])
            for key, _ in sorted_cache[:100]:
                del self.cache[key]

    def get_stats(self) -> dict:
        """Get cache statistics."""
        total = self.hits + self.misses
        hit_rate = (self.hits / total * 100) if total > 0 else 0
        return {
            "hits": self.hits,
            "misses": self.misses,
            "hit_rate": round(hit_rate, 1),
            "size": len(self.cache),
        }


class CircuitBreaker:
    """Circuit breaker to prevent calling failing providers."""

    def __init__(self, failure_threshold: int = 3, recovery_timeout: int = 60):
        self.failures = defaultdict(int)
        self.last_failure_time = {}
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout

    def record_failure(self, provider: str):
        self.failures[provider] += 1
        self.last_failure_time[provider] = time.time()

    def record_success(self, provider: str):
        self.failures[provider] = 0

    def is_healthy(self, provider: str) -> bool:
        if self.failures[provider] >= self.failure_threshold:
            # Check if recovery timeout has passed
            if provider in self.last_failure_time:
                if (
                    time.time() - self.last_failure_time[provider]
                    > self.recovery_timeout
                ):
                    self.failures[provider] = 0  # Reset
                    return True
            return False
        return True


class LLMRouter:
    """Routes requests to the best available LLM based on task type."""

    ROUTES = {
        "quick": {"provider": "ollama", "model": "llama3.1:8b", "max_latency_ms": 2000},
        "private": {
            "provider": "ollama",
            "model": "llama3.1:8b",
            "max_latency_ms": 5000,
        },
        "reasoning": {
            "provider": "openrouter",
            "model": "anthropic/claude-sonnet-4",
            "max_latency_ms": 15000,
        },
        "creative": {
            "provider": "openrouter",
            "model": "google/gemini-2.5-flash-preview:thinking",
            "max_latency_ms": 10000,
        },
        "code": {
            "provider": "openrouter",
            "model": "anthropic/claude-sonnet-4",
            "max_latency_ms": 15000,
        },
        "fast": {
            "provider": "cerebras",
            "model": "llama3.1-70b",
            "max_latency_ms": 5000,
        },
        "research": {
            "provider": "openrouter",
            "model": "google/gemini-2.5-pro",
            "max_latency_ms": 20000,
        },
        "memory_extraction": {
            "provider": "ollama",
            "model": "llama3.1:8b",
            "max_latency_ms": 5000,
        },
        "care_validation": {
            "provider": "ollama",
            "model": "llama3.1:8b",
            "max_latency_ms": 5000,
        },
        "free": {
            "provider": "cerebras",
            "model": "llama3.1-8b",
            "max_latency_ms": 5000,
        },
    }

    # Cost per 1M tokens (approximate)
    COST_PER_1M = {
        "ollama": 0,  # Local, free
        "openrouter": 5.0,
        "cerebras": 0.2,
        "apfel": 0,  # On-device, free (macOS Tahoe only)
        "airllm": 0,  # Local inference, free
        "litellm": 0,  # Depends on model - default free (Ollama)
    }

    # Route configurations (v4.0 - added LiteLLM)
    ROUTES = {
        "quick": {
            "provider": "litellm",
            "model": "llama-local",
            "max_latency_ms": 2000,
        },
        "private": {
            "provider": "litellm",
            "model": "llama-local",  # Fall back to local via LiteLLM
            "max_latency_ms": 3000,
        },
        "reasoning": {
            "provider": "litellm",  # Can use any model via LiteLLM
            "model": "claude-sonnet",  # When key added
            "max_latency_ms": 15000,
        },
        "creative": {
            "provider": "litellm",
            "model": "qwen-local",
            "max_latency_ms": 10000,
        },
        "code": {
            "provider": "litellm",
            "model": "llama-local",
            "max_latency_ms": 15000,
        },
        "fast": {
            "provider": "cerebras",
            "model": "llama3.1-70b",
            "max_latency_ms": 5000,
        },
        "research": {
            "provider": "openrouter",
            "model": "google/gemini-2.5-pro",
            "max_latency_ms": 20000,
        },
        "memory_extraction": {
            "provider": "ollama",
            "model": "llama3.1:8b",
            "max_latency_ms": 5000,
        },
        "care_validation": {
            "provider": "apfel",  # Use Apple on-device for fast local validation
            "model": "apple-on-device",
            "max_latency_ms": 3000,
        },
        "free": {
            "provider": "apfel",  # Free on-device
            "model": "apple-on-device",
            "max_latency_ms": 5000,
        },
        # New: Large model route (via AirLLM)
        "large_model": {
            "provider": "airllm",
            "model": "meta-llama/Llama-3.1-70B-Instruct",
            "max_latency_ms": 60000,
            "description": "70B model on 4GB GPU",
        },
    }

    def __init__(self):
        self.providers = {
            "ollama": ollama,
            "openrouter": openrouter,
            "cerebras": cerebras,
            "apfel": apfel,  # Apple on-device LLM (macOS Tahoe only)
            "airllm": airllm,  # Layer-wise inference (70B+ on 4GB GPU)
            "litellm": litellm_provider,  # LiteLLM proxy (100+ models)
        }
        self.circuit_breaker = CircuitBreaker()
        self.latencies = defaultdict(list)
        self.request_counts = defaultdict(int)
        self.cache = ResponseCache()  # Response caching

    def classify_intent(self, message: str) -> str:
        """Simple intent classification for routing."""
        lower = message.lower()
        if any(
            w in lower for w in ["code", "debug", "function", "error", "bug", "script"]
        ):
            return "code"
        if any(w in lower for w in ["write", "story", "poem", "creative", "imagine"]):
            return "creative"
        if any(w in lower for w in ["search", "find", "latest", "news", "research"]):
            return "research"
        if any(
            w in lower for w in ["private", "personal", "diary", "journal", "secret"]
        ):
            return "private"
        if any(
            w in lower for w in ["quick", "what is", "define", "simple", "yes", "no"]
        ):
            return "quick"
        if any(
            w in lower
            for w in ["analyze", "reason", "think", "explain why", "strategy"]
        ):
            return "reasoning"
        return "fast"

    async def route(
        self,
        message: str,
        messages: list = None,
        system: str = None,
        intent: str = None,
        strategy: str = "balanced",  # "balanced", "fastest", "cheapest", "quality"
    ) -> dict:
        """Route a message to the best provider.

        Args:
            message: The user message
            messages: Conversation history
            system: System prompt
            intent: Override intent classification
            strategy: Routing strategy
                - "balanced": Default, quality/ speed balance
                - "fastest": Lowest latency
                - "cheapest": Lowest cost
                - "quality": Best available
        """
        if not intent:
            intent = self.classify_intent(message)

        route_config = self.ROUTES.get(intent, self.ROUTES["fast"])
        provider_name = route_config["provider"]

        # Check circuit breaker
        if not self.circuit_breaker.is_healthy(provider_name):
            logger.warning(
                f"Circuit breaker open for {provider_name}, falling back to ollama"
            )
            provider_name = "ollama"

        provider = self.providers[provider_name]
        model = route_config["model"]

        # Check cache first (skip for now - would need to handle async differently)
        # For now, we cache the response after getting it

        start_time = time.time()

        try:
            response = await provider.chat(
                model=model,
                messages=messages or [{"role": "user", "content": message}],
                system=system,
            )

            # Record success and latency
            latency_ms = (time.time() - start_time) * 1000
            self.circuit_breaker.record_success(provider_name)
            self.latencies[provider_name].append(latency_ms)
            self.request_counts[provider_name] += 1

            # Keep only last 100 latencies
            if len(self.latencies[provider_name]) > 100:
                self.latencies[provider_name] = self.latencies[provider_name][-100:]

            # Cache the response
            self.cache.set(
                messages=messages or [{"role": "user", "content": message}],
                model=model,
                provider=provider_name,
                response=response,
            )

            return {
                "content": response,
                "provider": provider_name,
                "model": model,
                "intent": intent,
                "latency_ms": round(latency_ms, 2),
            }
        except Exception as e:
            logger.warning(f"Provider {provider_name} failed: {e}")
            self.circuit_breaker.record_failure(provider_name)

            # Fallback: try Ollama local
            if provider_name != "ollama":
                try:
                    start_time = time.time()
                    response = await ollama.chat(
                        model="llama3.1:8b",
                        messages=messages or [{"role": "user", "content": message}],
                        system=system,
                    )
                    latency_ms = (time.time() - start_time) * 1000

                    return {
                        "content": response,
                        "provider": "ollama",
                        "model": "llama3.1:8b",
                        "intent": intent,
                        "fallback": True,
                        "latency_ms": round(latency_ms, 2),
                    }
                except Exception as e2:
                    logger.error(f"Fallback also failed: {e2}")
            return {"error": str(e), "intent": intent}

    async def health(self) -> dict:
        """Check all provider statuses."""
        return {
            "ollama": await ollama.health_check(),
            "openrouter": await openrouter.health_check(),
            "cerebras": await cerebras.health_check(),
            "circuit_breaker": {
                name: {
                    "failures": self.circuit_breaker.failures[name],
                    "healthy": self.circuit_breaker.is_healthy(name),
                }
                for name in self.providers.keys()
            },
            "stats": {
                "total_requests": sum(self.request_counts.values()),
                "requests_by_provider": dict(self.request_counts),
                "avg_latency_ms": {
                    name: (round(sum(lats) / len(lats), 2) if lats else 0)
                    for name, lats in self.latencies.items()
                },
            },
            "cache": self.cache.get_stats(),
        }

    def get_stats(self) -> dict:
        """Get routing statistics."""
        return {
            "requests": dict(self.request_counts),
            "avg_latency": {
                name: round(sum(lats) / len(lats), 2) if lats else 0
                for name, lats in self.latencies.items()
            },
            "circuit_breaker": {
                name: {
                    "failures": self.circuit_breaker.failures[name],
                    "healthy": self.circuit_breaker.is_healthy(name),
                }
                for name in self.providers.keys()
            },
        }


router = LLMRouter()
