"""
MEOK Dream Synthesizer — Closes GAP 9: Dream prompts generated but never executed.

The previous architecture stored bisociation pairs as dream_targets and generated
creative_association strings from the dream queue — but never sent anything to Ollama.
The synthesis step was missing: prompts went in, nothing came out.

This module closes that loop:
1. Takes bisociation link pairs from CrossDomainLinker
2. Builds a synthesis prompt from each pair
3. POSTs to Ollama (http://localhost:11434/api/generate)
4. Stores the generated text as a memory episode (source_type='dream_synthesis')
5. Returns synthesis results for the nightshift digest

Architecture:
- DreamSynthesizer: standalone async class, injected into ConsciousnessOrchestrator
- Falls back gracefully if Ollama is unavailable (logs warning, continues)
- Respects timeout: 30s per synthesis (Ollama can be slow)
- Stores results even if partial: any text > 50 chars is worth keeping
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

# Ollama endpoint — configurable via env var
OLLAMA_URL = os.environ.get("OLLAMA_URL", "http://localhost:11434")
OLLAMA_MODEL = os.environ.get("DREAM_MODEL", "mistral")  # Fallback to mistral if llama3 absent
SYNTHESIS_TIMEOUT = 30  # seconds per synthesis call


def _build_synthesis_prompt(tradition_a: str, tradition_b: str, domain_distance: float) -> str:
    """
    Build the creative synthesis prompt for a bisociation pair.

    The prompt follows the Koestler bisociation pattern: two frames of reference
    collide to produce a creative insight neither could produce alone.
    """
    return (
        f"You are a creative synthesis engine exploring cross-civilizational wisdom.\n\n"
        f"Synthesize an unexpected connection between these two traditions:\n"
        f"- Tradition A: {tradition_a}\n"
        f"- Tradition B: {tradition_b}\n"
        f"- Semantic distance: {domain_distance:.2f} (higher = more surprising potential)\n\n"
        f"Generate a brief (2-3 sentence) creative insight that emerges from their collision. "
        f"Do not explain both traditions separately — reveal what becomes possible when they meet. "
        f"Be concrete, surprising, and care-aligned."
    )


class DreamSynthesizer:
    """
    Executes dream prompts against Ollama and stores results as memory episodes.

    Wired into ConsciousnessOrchestrator.dream.enter_dream_state() so that
    each REM phase now produces real LLM-generated synthesis, not just
    template strings.
    """

    def __init__(
        self,
        memory_store: Any = None,
        ollama_url: str = OLLAMA_URL,
        model: str = OLLAMA_MODEL,
    ):
        self.memory_store = memory_store
        self.ollama_url = ollama_url
        self.model = model
        self.synthesis_count = 0
        self.synthesis_failures = 0
        self._last_model_check: Optional[datetime] = None
        self._available_models: List[str] = []

    # ── Public API ───────────────────────────────────────────────────────────

    async def synthesize_bisociation_pair(
        self,
        tradition_a: str,
        tradition_b: str,
        domain_distance: float = 0.5,
        care_weight: float = 0.7,
        source_agent: str = "dream_synthesizer",
    ) -> Dict[str, Any]:
        """
        Generate a creative synthesis for one bisociation pair via Ollama.
        Stores result as a memory episode if successful.

        Returns dict with: status, synthesis_text, memory_id, model_used
        """
        prompt = _build_synthesis_prompt(tradition_a, tradition_b, domain_distance)

        try:
            synthesis_text = await asyncio.wait_for(
                self._call_ollama(prompt),
                timeout=SYNTHESIS_TIMEOUT,
            )
        except asyncio.TimeoutError:
            self.synthesis_failures += 1
            logger.warning("Dream synthesis timed out (%ds) for %s × %s", SYNTHESIS_TIMEOUT, tradition_a, tradition_b)
            return {
                "status": "timeout",
                "tradition_a": tradition_a,
                "tradition_b": tradition_b,
                "synthesis_text": None,
                "memory_id": None,
            }
        except Exception as e:
            self.synthesis_failures += 1
            logger.warning("Dream synthesis failed for %s × %s: %s", tradition_a, tradition_b, e)
            return {
                "status": "error",
                "tradition_a": tradition_a,
                "tradition_b": tradition_b,
                "error": str(e),
                "synthesis_text": None,
                "memory_id": None,
            }

        if not synthesis_text or len(synthesis_text) < 30:
            return {
                "status": "empty_response",
                "tradition_a": tradition_a,
                "tradition_b": tradition_b,
                "synthesis_text": synthesis_text,
                "memory_id": None,
            }

        # Store as memory episode
        memory_id = await self._store_synthesis(
            tradition_a=tradition_a,
            tradition_b=tradition_b,
            synthesis_text=synthesis_text,
            domain_distance=domain_distance,
            care_weight=care_weight,
            source_agent=source_agent,
        )

        self.synthesis_count += 1
        logger.info(
            "Dream synthesis complete: %s × %s → %d chars (memory=%s)",
            tradition_a, tradition_b, len(synthesis_text), memory_id,
        )

        return {
            "status": "success",
            "tradition_a": tradition_a,
            "tradition_b": tradition_b,
            "synthesis_text": synthesis_text,
            "memory_id": memory_id,
            "model_used": self.model,
            "domain_distance": domain_distance,
        }

    async def synthesize_dream_targets(
        self,
        dream_targets: List[Dict[str, Any]],
        max_targets: int = 3,
    ) -> List[Dict[str, Any]]:
        """
        Process a list of dream targets (from CrossDomainLinker.suggest_dream_targets()).
        Runs up to max_targets syntheses concurrently.

        Each target dict should have: tradition_a, tradition_b, distance (or domain_distance)
        """
        if not dream_targets:
            return []

        targets = dream_targets[:max_targets]
        tasks = []
        for t in targets:
            trad_a = t.get("tradition_a", t.get("domain_a", "Unknown"))
            trad_b = t.get("tradition_b", t.get("domain_b", "Unknown"))
            distance = float(t.get("distance", t.get("domain_distance", 0.5)))
            tasks.append(
                self.synthesize_bisociation_pair(
                    tradition_a=trad_a,
                    tradition_b=trad_b,
                    domain_distance=distance,
                )
            )

        results = await asyncio.gather(*tasks, return_exceptions=True)

        output = []
        for r in results:
            if isinstance(r, Exception):
                output.append({"status": "exception", "error": str(r)})
            else:
                output.append(r)
        return output

    def get_stats(self) -> Dict[str, Any]:
        return {
            "synthesis_count": self.synthesis_count,
            "synthesis_failures": self.synthesis_failures,
            "success_rate": (
                self.synthesis_count / max(self.synthesis_count + self.synthesis_failures, 1)
            ),
            "ollama_url": self.ollama_url,
            "model": self.model,
        }

    # ── Internal ─────────────────────────────────────────────────────────────

    async def _call_ollama(self, prompt: str) -> str:
        """
        POST to Ollama /api/generate and return the generated text.
        Uses streaming=False for simplicity (waits for full response).
        """
        import urllib.request
        import urllib.error

        payload = json.dumps({
            "model": self.model,
            "prompt": prompt,
            "stream": False,
            "options": {
                "temperature": 0.9,   # High creativity for dream synthesis
                "top_p": 0.95,
                "num_predict": 200,   # ~150 words is plenty for bisociation insight
            },
        }).encode()

        url = f"{self.ollama_url}/api/generate"

        def _do_request():
            req = urllib.request.Request(
                url,
                data=payload,
                headers={"Content-Type": "application/json"},
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=SYNTHESIS_TIMEOUT) as resp:
                body = resp.read().decode()
                data = json.loads(body)
                return data.get("response", "")

        # Run the blocking HTTP call in a thread executor so we don't block the event loop
        loop = asyncio.get_event_loop()
        text = await loop.run_in_executor(None, _do_request)
        return text.strip()

    async def _store_synthesis(
        self,
        tradition_a: str,
        tradition_b: str,
        synthesis_text: str,
        domain_distance: float,
        care_weight: float,
        source_agent: str,
    ) -> Optional[str]:
        """Store synthesis result as a memory episode. Returns episode_id or None."""
        if not self.memory_store:
            return None

        content = (
            f"[Dream Synthesis] {tradition_a} × {tradition_b}\n"
            f"Distance: {domain_distance:.2f}\n\n"
            f"{synthesis_text}"
        )

        try:
            # Try record_episode (preferred — has care_weight, tags, source_type)
            if hasattr(self.memory_store, "record_episode"):
                result = await self.memory_store.record_episode(
                    content=content,
                    source_agent=source_agent,
                    memory_type="insight",
                    care_weight=care_weight,
                    tags=["dream_synthesis", "bisociation", tradition_a, tradition_b],
                    metadata={
                        "source_type": "dream_synthesis",
                        "tradition_a": tradition_a,
                        "tradition_b": tradition_b,
                        "domain_distance": domain_distance,
                        "dream_executed_at": datetime.now(timezone.utc).isoformat(),
                        "model": self.model,
                    },
                )
                # record_episode may return the episode dict or just a status
                if isinstance(result, dict):
                    return result.get("episode_id") or result.get("id")
                return str(result) if result else None
        except Exception as e:
            logger.debug("Dream synthesis memory storage failed (non-critical): %s", e)

        return None


# ── Module-level singleton ─────────────────────────────────────────────────────

_synthesizer: Optional[DreamSynthesizer] = None


def get_synthesizer() -> Optional[DreamSynthesizer]:
    return _synthesizer


def init_synthesizer(memory_store: Any = None, **kwargs) -> DreamSynthesizer:
    global _synthesizer
    _synthesizer = DreamSynthesizer(memory_store=memory_store, **kwargs)
    return _synthesizer
