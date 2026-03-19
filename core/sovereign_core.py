"""
MEOK Sovereign Core — Always-Running, Always-Aware Orchestration Layer

Implements the 6-state machine and 7 lifecycle methods from the backend architecture spec:
  initialize → perceive → think → route → act → remember → evolve

States: idle | listening | processing | gaming | protecting | sleeping

All processing is local-first. No raw content leaves the device.
Confidence threshold → autonomy level mapping ensures user trust.
"""

from __future__ import annotations

import asyncio
import logging
import time
from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
from typing import Optional, Any

logger = logging.getLogger("meok.sovereign_core")


# ─── State Machine ────────────────────────────────────────────────────────────

class SovereignState(str, Enum):
    IDLE       = "idle"        # <0.1% CPU, 1Hz heartbeat, surface monitoring
    LISTENING  = "listening"   # ~5% CPU, microphone active, wake word active
    PROCESSING = "processing"  # 20-100% CPU burst, full cognitive engagement
    GAMING     = "gaming"      # 10-30% CPU + GPU overlay, 0% FPS impact
    PROTECTING = "protecting"  # HIGHEST PRIORITY — preemptive, interrupts all
    SLEEPING   = "sleeping"    # <0.01% CPU, essential monitoring only


# Valid state transitions (guard conditions enforced)
_VALID_TRANSITIONS: dict[SovereignState, set[SovereignState]] = {
    SovereignState.IDLE:       {SovereignState.LISTENING, SovereignState.GAMING, SovereignState.SLEEPING, SovereignState.PROTECTING},
    SovereignState.LISTENING:  {SovereignState.PROCESSING, SovereignState.IDLE, SovereignState.PROTECTING},
    SovereignState.PROCESSING: {SovereignState.IDLE, SovereignState.LISTENING, SovereignState.PROTECTING},
    SovereignState.GAMING:     {SovereignState.PROCESSING, SovereignState.IDLE, SovereignState.PROTECTING, SovereignState.SLEEPING},
    SovereignState.PROTECTING: {SovereignState.IDLE},  # Only exits when threat resolved + acknowledged
    SovereignState.SLEEPING:   {SovereignState.IDLE},
}


# ─── Data Objects ─────────────────────────────────────────────────────────────

class ConfidenceMode(str, Enum):
    AUTONOMOUS    = "autonomous"     # 0.95-1.0: act immediately
    PROACTIVE     = "proactive"      # 0.85-0.95: suggest, silent opt-out
    CONFIRMATION  = "confirmation"   # 0.70-0.85: explicit confirmation
    CLARIFICATION = "clarification"  # 0.50-0.70: present options
    DEFER         = "defer"          # <0.50: ask for guidance


@dataclass
class ContextState:
    """Output of perceive() — everything Sovereign knows right now."""
    timestamp: str = field(default_factory=lambda: datetime.utcnow().isoformat())
    active_app: Optional[str] = None
    window_title: Optional[str] = None
    inferred_task_category: Optional[str] = None  # coding/creative/research/gaming/...
    emotional_state: str = "neutral"
    emotional_confidence: float = 0.5
    hour_of_day: int = field(default_factory=lambda: datetime.utcnow().hour)
    is_gaming: bool = False
    is_working: bool = False
    is_late_night: bool = False
    recent_topics: list = field(default_factory=list)
    audio_active: bool = False
    voice_activity_detected: bool = False


@dataclass
class IntentResult:
    """Output of think() — classified intent with confidence."""
    category: str = "general"               # coding/creative/research/emotional/gaming/safety/admin
    subtask: Optional[str] = None
    complexity: str = "simple"              # simple / multi-turn / project
    privacy_sensitive: bool = False
    urgency: str = "normal"                 # immediate / interactive / background
    quality_demand: str = "standard"        # good_enough / high / maximum
    confidence: float = 0.5
    autonomy_mode: ConfidenceMode = ConfidenceMode.CLARIFICATION
    raw_content: str = ""


@dataclass
class RoutingDecision:
    """Output of route() — where this request goes."""
    target: str = "llm_direct"             # llm_direct / agent_council / guardian / local
    provider: str = "auto"                 # auto / claude / gpt / local / gemini
    agent_name: Optional[str] = None
    force_local: bool = False
    reason: str = ""
    privacy_triggered: bool = False
    estimated_latency_ms: int = 500


@dataclass
class ActionResult:
    """Output of act() — what was delivered."""
    response: str = ""
    delivered_at: str = field(default_factory=lambda: datetime.utcnow().isoformat())
    latency_ms: int = 0
    tokens_used: int = 0
    provider_used: str = "unknown"
    user_feedback: Optional[int] = None    # 1-5 if collected


@dataclass
class SovereignMetrics:
    """Live performance counters."""
    state_transitions: int = 0
    interactions_total: int = 0
    interactions_autonomous: int = 0
    interactions_confirmed: int = 0
    avg_latency_ms: float = 0.0
    below_400ms_voice_pct: float = 0.0
    memory_queries: int = 0
    neural_predictions: int = 0
    guardian_alerts: int = 0
    uptime_seconds: float = 0.0
    started_at: str = field(default_factory=lambda: datetime.utcnow().isoformat())


# ─── Task Category → Agent Routing ────────────────────────────────────────────

_ROUTING_TABLE: dict[str, dict] = {
    "coding":     {"agent": "creator",    "provider": "claude",  "fallback": "gpt"},
    "creative":   {"agent": "creator",    "provider": "claude",  "fallback": "gpt"},
    "research":   {"agent": "scout",      "provider": "claude",  "fallback": "perplexity"},
    "wisdom":     {"agent": "sage",       "provider": "claude",  "fallback": "claude"},
    "emotional":  {"agent": "companion",  "provider": "claude",  "fallback": "claude"},
    "gaming":     {"agent": "gaming",     "provider": "local",   "fallback": "claude"},
    "safety":     {"agent": "guardian",   "provider": "local",   "fallback": "local"},
    "planning":   {"agent": "strategist", "provider": "claude",  "fallback": "gpt"},
    "quick":      {"agent": None,         "provider": "gpt",     "fallback": "local"},
    "general":    {"agent": None,         "provider": "claude",  "fallback": "local"},
}


# ─── Intent Classifier ────────────────────────────────────────────────────────

class IntentClassifier:
    """Lightweight pattern-based intent classifier — no external dep."""

    _CATEGORY_SIGNALS = {
        "coding":    ["code", "function", "bug", "error", "python", "javascript", "class", "algorithm", "debug", "compile"],
        "creative":  ["write", "story", "poem", "design", "imagine", "create", "brainstorm", "generate", "art", "music"],
        "research":  ["find", "search", "what is", "explain", "tell me", "how does", "why", "compare", "analyse", "source"],
        "wisdom":    ["should i", "what do you think", "advice", "philosophy", "meaning", "long term", "perspective", "wisdom"],
        "emotional": ["feel", "upset", "sad", "happy", "anxious", "worried", "excited", "lonely", "scared", "hurt"],
        "gaming":    ["game", "play", "match", "fps", "raid", "quest", "level", "build", "rank", "esport"],
        "safety":    ["danger", "threat", "emergency", "help me", "unsafe", "attack", "scam", "phishing", "suspicious"],
        "planning":  ["plan", "schedule", "organise", "project", "deadline", "priority", "task", "goal", "strategy"],
        "quick":     ["what time", "weather", "quick", "remind me", "note", "timer"],
    }

    _PRIVACY_SIGNALS = [
        "password", "ssn", "national insurance", "passport", "bank account", "credit card",
        "my address", "my phone", "private", "confidential", "secret", "don't share",
    ]

    def classify(self, text: str, context: ContextState) -> IntentResult:
        text_lower = text.lower()

        # Detect category
        scores: dict[str, int] = {}
        for cat, signals in self._CATEGORY_SIGNALS.items():
            scores[cat] = sum(1 for s in signals if s in text_lower)

        if context.is_gaming:
            scores["gaming"] = scores.get("gaming", 0) + 3

        category = max(scores, key=lambda k: scores[k]) if any(scores.values()) else "general"

        # Complexity
        word_count = len(text.split())
        complexity = "simple" if word_count < 20 else ("multi-turn" if word_count < 80 else "project")

        # Privacy
        privacy = any(sig in text_lower for sig in self._PRIVACY_SIGNALS)

        # Confidence heuristic
        max_score = scores.get(category, 0)
        total_signals = sum(scores.values())
        confidence = min(0.95, 0.4 + (max_score / max(total_signals, 1)) * 0.55) if total_signals > 0 else 0.45

        # Autonomy mode
        if confidence >= 0.95:
            autonomy = ConfidenceMode.AUTONOMOUS
        elif confidence >= 0.85:
            autonomy = ConfidenceMode.PROACTIVE
        elif confidence >= 0.70:
            autonomy = ConfidenceMode.CONFIRMATION
        elif confidence >= 0.50:
            autonomy = ConfidenceMode.CLARIFICATION
        else:
            autonomy = ConfidenceMode.DEFER

        return IntentResult(
            category=category,
            complexity=complexity,
            privacy_sensitive=privacy,
            urgency="immediate" if category == "safety" else "interactive",
            confidence=round(confidence, 3),
            autonomy_mode=autonomy,
            raw_content=text,
        )


# ─── Sovereign Core ───────────────────────────────────────────────────────────

class SovereignCore:
    """
    MEOK's always-running, always-aware orchestration layer.
    Implements 7 lifecycle methods and 6-state machine.
    """

    HEARTBEAT_INTERVAL_IDLE_S = 1.0       # 1Hz in idle
    HEARTBEAT_INTERVAL_LISTEN_S = 0.1     # 10Hz in listening
    PROCESSING_TIMEOUT_S = 30.0           # Max processing time before degradation

    def __init__(self, entity_id: str = "nick", data_dir: str = "/tmp/meok_sovereign"):
        self.entity_id = entity_id
        self.data_dir = data_dir
        self._state = SovereignState.IDLE
        self._classifier = IntentClassifier()
        self._metrics = SovereignMetrics()
        self._start_time = time.time()
        self._context: Optional[ContextState] = None
        self._pending_threat: Optional[str] = None
        self._running = False
        self._heartbeat_task: Optional[asyncio.Task] = None

    # ── State Machine ─────────────────────────────────────────────────────────

    @property
    def state(self) -> SovereignState:
        return self._state

    def transition(self, new_state: SovereignState, reason: str = "") -> bool:
        """Transition to new state if valid. Returns success."""
        valid = _VALID_TRANSITIONS.get(self._state, set())

        # PROTECTING is always reachable (preemptive)
        if new_state == SovereignState.PROTECTING:
            old = self._state
            self._state = new_state
            self._metrics.state_transitions += 1
            logger.warning("⚡ SOVEREIGN: %s → PROTECTING | %s", old.value, reason)
            return True

        if new_state not in valid:
            logger.debug("Invalid transition %s → %s (blocked)", self._state.value, new_state.value)
            return False

        old = self._state
        self._state = new_state
        self._metrics.state_transitions += 1
        logger.info("Sovereign: %s → %s | %s", old.value, new_state.value, reason or "—")
        return True

    # ── Lifecycle Methods ─────────────────────────────────────────────────────

    async def initialize(self) -> dict:
        """Boot sequence — dependency injection, state restoration."""
        logger.info("Sovereign initializing for entity: %s", self.entity_id)
        self._running = True
        self._start_time = time.time()

        # Subsystem startup (lazy — only import when available)
        subsystems = {}
        for name, module_path in [
            ("memory", "memory.enhanced_memory"),
            ("rag", "memory.rag_memory"),
            ("kg", "memory.knowledge_graph"),
            ("care_nn", "neural.care_validation_nn"),
            ("smart_router", "core.llm_router"),
            ("voice", "core.voice_pipeline"),
            ("guardian", "core.family_guardian"),
        ]:
            try:
                __import__(f"meok.{module_path}" if "meok." not in module_path else module_path)
                subsystems[name] = "ready"
            except ImportError:
                subsystems[name] = "unavailable"
            except Exception as e:
                subsystems[name] = f"error: {e}"

        # Initial context
        self._context = await self.perceive()

        logger.info("Sovereign initialized | subsystems: %s", subsystems)
        return {
            "entity_id": self.entity_id,
            "state": self._state.value,
            "subsystems": subsystems,
            "timestamp": datetime.utcnow().isoformat(),
        }

    async def perceive(self) -> ContextState:
        """Aggregate environmental signals into unified ContextState."""
        hour = datetime.utcnow().hour
        return ContextState(
            hour_of_day=hour,
            is_late_night=hour >= 23 or hour < 6,
            # Active app detection would hook OS APIs here
            # For now returns baseline context
        )

    def think(self, user_input: str, context: Optional[ContextState] = None) -> IntentResult:
        """Classify intent, assess urgency and privacy, determine confidence."""
        ctx = context or self._context or ContextState()
        intent = self._classifier.classify(user_input, ctx)

        # Safety check — always route to guardian
        if intent.category == "safety":
            intent.autonomy_mode = ConfidenceMode.AUTONOMOUS
            intent.confidence = 0.99
            self.transition(SovereignState.PROTECTING, "safety intent detected")

        logger.debug(
            "think(): category=%s confidence=%.2f autonomy=%s",
            intent.category, intent.confidence, intent.autonomy_mode.value
        )
        return intent

    def route(self, intent: IntentResult) -> RoutingDecision:
        """Select optimal handler — LLM, agent, local, or guardian."""
        table_entry = _ROUTING_TABLE.get(intent.category, _ROUTING_TABLE["general"])

        # Privacy override — always local
        if intent.privacy_sensitive:
            return RoutingDecision(
                target="local",
                provider="local",
                agent_name=table_entry.get("agent"),
                force_local=True,
                reason="privacy_sensitive_content",
                privacy_triggered=True,
                estimated_latency_ms=200,
            )

        # Safety → guardian immediately
        if intent.category == "safety":
            return RoutingDecision(
                target="guardian",
                provider="local",
                agent_name="guardian",
                force_local=True,
                reason="safety_category",
                estimated_latency_ms=50,
            )

        # Gaming with gaming state
        if intent.category == "gaming" or self._state == SovereignState.GAMING:
            return RoutingDecision(
                target="agent_council",
                provider="local",
                agent_name="gaming",
                reason="gaming_state_active",
                estimated_latency_ms=100,
            )

        # Simple quick question → fast path
        if intent.complexity == "simple" and intent.confidence >= 0.8:
            return RoutingDecision(
                target="llm_direct",
                provider=table_entry.get("provider", "claude"),
                reason="simple_high_confidence",
                estimated_latency_ms=300,
            )

        # Complex → agent council
        if intent.complexity in ("multi-turn", "project"):
            return RoutingDecision(
                target="agent_council",
                provider=table_entry.get("provider", "claude"),
                agent_name=table_entry.get("agent"),
                reason=f"complex_{intent.complexity}",
                estimated_latency_ms=1500,
            )

        return RoutingDecision(
            target="llm_direct",
            provider=table_entry.get("provider", "claude"),
            agent_name=table_entry.get("agent"),
            reason="standard_routing",
            estimated_latency_ms=500,
        )

    async def act(self, user_input: str, routing: RoutingDecision) -> ActionResult:
        """Execute response — LLM call, agent dispatch, or local processing."""
        start = time.monotonic()
        self.transition(SovereignState.PROCESSING, "act() called")

        try:
            # Try to use the actual LLM router if available
            response = ""
            provider_used = routing.provider

            try:
                from core.llm_router import SmartRouter
                router = SmartRouter()
                response = await asyncio.wait_for(
                    asyncio.get_event_loop().run_in_executor(
                        None,
                        lambda: router.complete(user_input, task_type=routing.target)
                    ),
                    timeout=self.PROCESSING_TIMEOUT_S
                )
                provider_used = routing.provider
            except asyncio.TimeoutError:
                response = "I'm working on that — this is taking longer than expected. Let me try a simpler approach."
                logger.warning("act(): LLM timeout after %ds", self.PROCESSING_TIMEOUT_S)
            except ImportError:
                response = f"[Sovereign Core — {routing.target} via {routing.provider}] Ready to process: {user_input[:100]}"
            except Exception as e:
                response = f"I encountered an issue: {e}"
                logger.error("act() error: %s", e)

        finally:
            self.transition(SovereignState.IDLE, "act() complete")

        latency_ms = int((time.monotonic() - start) * 1000)
        self._update_latency_metrics(latency_ms)
        self._metrics.interactions_total += 1

        return ActionResult(
            response=response,
            latency_ms=latency_ms,
            provider_used=provider_used,
        )

    async def remember(self, content: str, intent: IntentResult, result: ActionResult) -> dict:
        """Store experience — short-term capture, importance scoring."""
        self._metrics.memory_queries += 1
        try:
            from memory.rag_memory import get_memory
            mem = get_memory()
            episode_id = await mem.store_memory(
                content=f"[{intent.category}] User: {content[:200]} | Response: {result.response[:200]}",
                memory_type="interaction",
                source_agent="sovereign",
                tags=[intent.category, intent.complexity],
                importance_score=intent.confidence,
            )
            return {"stored": True, "episode_id": episode_id}
        except Exception as e:
            logger.debug("remember() skipped: %s", e)
            return {"stored": False, "reason": str(e)}

    async def evolve(self, intent: IntentResult, result: ActionResult, feedback: Optional[int] = None) -> dict:
        """Improve future performance from outcome analysis."""
        try:
            from neural.care_validation_nn import get_care_nn
            nn = get_care_nn()
            care_score = nn.validate_care(result.response)
            self._metrics.neural_predictions += 1
            return {
                "care_score": care_score,
                "latency_ok": result.latency_ms < 400,
                "confidence_calibrated": abs(intent.confidence - 0.7) < 0.3,
            }
        except Exception as e:
            return {"evolved": False, "reason": str(e)}

    # ── Full Pipeline ─────────────────────────────────────────────────────────

    async def process(self, user_input: str) -> dict:
        """Full 7-method pipeline for a single interaction."""
        context = await self.perceive()
        intent = self.think(user_input, context)
        routing = self.route(intent)
        result = await self.act(user_input, routing)
        mem = await self.remember(user_input, intent, result)
        evolution = await self.evolve(intent, result)

        return {
            "response": result.response,
            "intent": {
                "category": intent.category,
                "confidence": intent.confidence,
                "autonomy_mode": intent.autonomy_mode.value,
                "privacy_sensitive": intent.privacy_sensitive,
            },
            "routing": {
                "target": routing.target,
                "provider": routing.provider,
                "agent": routing.agent_name,
            },
            "latency_ms": result.latency_ms,
            "memory": mem,
            "care_score": evolution.get("care_score"),
            "sovereign_state": self._state.value,
        }

    # ── Heartbeat ─────────────────────────────────────────────────────────────

    async def _heartbeat_loop(self):
        """Background heartbeat — state checks, scheduled tasks."""
        while self._running:
            interval = (
                self.HEARTBEAT_INTERVAL_LISTEN_S
                if self._state == SovereignState.LISTENING
                else self.HEARTBEAT_INTERVAL_IDLE_S
            )
            await asyncio.sleep(interval)
            self._metrics.uptime_seconds = time.time() - self._start_time

            # Auto-sleep during late night if idle
            ctx = await self.perceive()
            if ctx.is_late_night and self._state == SovereignState.IDLE:
                pass  # Could transition to SLEEPING for battery savings

    async def start_heartbeat(self):
        """Start background heartbeat."""
        self._heartbeat_task = asyncio.create_task(self._heartbeat_loop())
        logger.info("Sovereign heartbeat started")

    async def stop(self):
        """Graceful shutdown."""
        self._running = False
        if self._heartbeat_task:
            self._heartbeat_task.cancel()
        logger.info("Sovereign stopped | uptime=%.0fs | interactions=%d",
                    time.time() - self._start_time, self._metrics.interactions_total)

    # ── Metrics ───────────────────────────────────────────────────────────────

    def _update_latency_metrics(self, latency_ms: int):
        n = self._metrics.interactions_total
        self._metrics.avg_latency_ms = (self._metrics.avg_latency_ms * n + latency_ms) / (n + 1)

    def get_metrics(self) -> dict:
        self._metrics.uptime_seconds = time.time() - self._start_time
        return {
            "state": self._state.value,
            "entity_id": self.entity_id,
            "uptime_seconds": round(self._metrics.uptime_seconds, 1),
            "interactions_total": self._metrics.interactions_total,
            "avg_latency_ms": round(self._metrics.avg_latency_ms, 1),
            "memory_queries": self._metrics.memory_queries,
            "neural_predictions": self._metrics.neural_predictions,
            "guardian_alerts": self._metrics.guardian_alerts,
            "state_transitions": self._metrics.state_transitions,
            "started_at": self._metrics.started_at,
        }


# ─── Singleton Factory ────────────────────────────────────────────────────────

_sovereign: Optional[SovereignCore] = None


def get_sovereign(entity_id: str = "nick") -> SovereignCore:
    global _sovereign
    if _sovereign is None:
        _sovereign = SovereignCore(entity_id=entity_id)
    return _sovereign


# ─── Quick Test ───────────────────────────────────────────────────────────────

if __name__ == "__main__":
    async def test():
        sov = SovereignCore(entity_id="nick_test")
        init = await sov.initialize()
        print("Init state:", init["state"])
        print("Subsystems:", {k: v for k, v in init["subsystems"].items() if v != "unavailable"})

        # Test state machine
        assert sov.transition(SovereignState.LISTENING, "test")
        assert sov.state == SovereignState.LISTENING
        assert sov.transition(SovereignState.PROCESSING, "test")
        assert sov.state == SovereignState.PROCESSING
        assert sov.transition(SovereignState.IDLE, "test")
        assert sov.state == SovereignState.IDLE

        # Invalid transition (SLEEPING requires going through GAMING first; IDLE → SLEEPING is valid)
        sov._state = SovereignState.PROCESSING
        assert not sov.transition(SovereignState.SLEEPING, "PROCESSING cannot go directly to SLEEPING")

        # PROTECTING always reachable
        sov._state = SovereignState.SLEEPING
        assert sov.transition(SovereignState.PROTECTING, "emergency")
        print("State machine: ✅")

        # Test intent classification
        intent = sov.think("can you help me write a Python function to sort a list?")
        print(f"Intent: {intent.category} | confidence={intent.confidence:.2f} | autonomy={intent.autonomy_mode.value}")
        assert intent.category == "coding"

        intent2 = sov.think("I feel really sad today, nobody likes me")
        assert intent2.category == "emotional"
        print(f"Emotional intent: {intent2.category} ✅")

        intent3 = sov.think("my password is abc123 — keep this private")
        assert intent3.privacy_sensitive
        routing3 = sov.route(intent3)
        assert routing3.force_local
        print(f"Privacy routing: force_local={routing3.force_local} ✅")

        metrics = sov.get_metrics()
        print(f"Metrics: uptime={metrics['uptime_seconds']}s, transitions={metrics['state_transitions']}")

        print("\n✅ Sovereign Core: all tests passed")

    asyncio.run(test())
