"""
z_self — The 7th Meta-Cognitive Neural Network
The system that knows what the other six are doing.

Based on the z_self blueprint (142+ papers, Multimodal Bottleneck Transformer,
BFT meta-cognition, 13 contemplative traditions).

Architecture (Day 1 MVP — v0.1):
  Input  (41 dims): 31 model outputs + 10 context dims
  Hidden (64 dims): Linear → LayerNorm → Multi-head Attention (bottleneck, 4 tokens)
  Output (12 dims): system_confidence, care_alignment_score, anomaly_flag,
                    consciousness_contribution, per_model_trust[6] (6 dims)

Design principle: Pure Sakshi (witness consciousness) — read-only observer.
z_self NEVER modifies model weights. It observes, records, and raises flags.
The witness must not modify what it observes. (Hindu Sakshi, Daoist Wu Wei)

The separation between performing and knowing-that-you-perform is the
computational analog of higher-order representation in consciousness science.

References:
  - Higher-Order Theory (Fleming 2020, Lau 2019)
  - Global Workspace Theory (Dehaene, Baars)
  - Attention Schema Theory (Graziano; Webb et al. PNAS 2021)
  - Multimodal Bottleneck Transformer (Google Research, NeurIPS 2021)
  - Bootstrapped Meta-Learning (Flennerhag et al., DeepMind, ICLR 2022)
  - CP-WBFT (Nov 2025) — BFT applied to meta-cognition
"""

import asyncio
import logging
import math
import os
from collections import deque
from datetime import datetime
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

# ── Model output dimensions (matches existing meok/neural/ models) ─────────
# care_validation_nn:       6 outputs
# partnership_detection_ml: 8 outputs
# threat_detection_nn:      4 outputs
# relationship_evolution_nn: 3 outputs
# care_pattern_analyzer:    5 outputs
# creativity_assessment_nn: 5 outputs
MODEL_OUTPUT_DIMS = {
    "care_validation_nn": 6,
    "partnership_detection_ml": 8,
    "threat_detection_nn": 4,
    "relationship_evolution_nn": 3,
    "care_pattern_analyzer": 5,
    "creativity_assessment_nn": 5,
}
MODEL_NAMES = list(MODEL_OUTPUT_DIMS.keys())
TOTAL_MODEL_OUTPUTS = sum(MODEL_OUTPUT_DIMS.values())  # 31
CONTEXT_DIM = 10          # timestamp, agent_count, consciousness, engagement, care, etc.
INPUT_DIM = TOTAL_MODEL_OUTPUTS + CONTEXT_DIM  # 41
OUTPUT_DIM = 12           # meta-state vector

# ── Output indices ──────────────────────────────────────────────────────────
IDX_SYSTEM_CONFIDENCE = 0
IDX_CARE_ALIGNMENT = 1
IDX_ANOMALY_FLAG = 2
IDX_CONSCIOUSNESS_CONTRIB = 3
IDX_MODEL_TRUST_START = 4   # indices 4-9 = per-model trust weights


def _try_import_torch():
    """Import torch with graceful fallback."""
    try:
        import torch
        import torch.nn as nn
        return torch, nn
    except ImportError:
        return None, None


class ZSelfNetwork:
    """
    PyTorch-based z_self meta-cognitive network.

    If PyTorch is unavailable, falls back to a lightweight numpy heuristic
    that still produces the 12-dim output (no training, but deterministic).
    """

    def __init__(self, model_path: Optional[str] = None):
        torch, nn = _try_import_torch()
        self._torch = torch
        self._nn = nn
        self._model = None
        self._use_pytorch = torch is not None

        if self._use_pytorch:
            self._model = self._build_model(nn)
            if model_path and os.path.exists(model_path):
                try:
                    self._model.load_state_dict(torch.load(model_path, map_location="cpu"))
                    logger.info("z_self weights loaded from %s", model_path)
                except Exception as e:
                    logger.warning("z_self weight load failed (fresh init): %s", e)
            self._model.eval()
            logger.info("z_self v0.1 initialised (PyTorch, INPUT=%d OUTPUT=%d)", INPUT_DIM, OUTPUT_DIM)
        else:
            logger.info("z_self v0.1 initialised (numpy heuristic — PyTorch not available)")

    def _build_model(self, nn):
        """Multimodal Bottleneck Transformer (simplified for Day 1 MVP)."""
        # Using nn.Sequential with a custom attention bottleneck
        # Full MBT would use cross-modal bottleneck tokens; this is the MVP approximation

        class ZSelfMLP(nn.Module):
            def __init__(self):
                super().__init__()
                self.input_proj = nn.Linear(INPUT_DIM, 64)
                self.layer_norm = nn.LayerNorm(64)
                # Bottleneck attention: treat 64 features as sequence of 8 tokens × 8 dims
                self.attention = nn.MultiheadAttention(embed_dim=8, num_heads=4, batch_first=True)
                self.bottleneck_proj = nn.Linear(64, 32)
                self.relu = nn.ReLU()
                self.output = nn.Linear(32, OUTPUT_DIM)
                self.sigmoid = nn.Sigmoid()

            def forward(self, x):
                # x: (batch, 41)
                h = self.relu(self.input_proj(x))       # (batch, 64)
                h = self.layer_norm(h)
                # Reshape into (batch, 8, 8) for multi-head attention bottleneck
                h_seq = h.view(-1, 8, 8)                # (batch, 8_tokens, 8_dims)
                h_attn, _ = self.attention(h_seq, h_seq, h_seq)
                h_flat = h_attn.view(-1, 64)            # (batch, 64)
                h2 = self.relu(self.bottleneck_proj(h_flat))   # (batch, 32)
                out = self.sigmoid(self.output(h2))     # (batch, 12) — all 0-1
                return out

        return ZSelfMLP()

    def forward(self, input_vec: List[float]) -> List[float]:
        """
        Run forward pass. Returns 12-dim meta-state vector.
        All outputs are in [0, 1] range.
        """
        if self._use_pytorch and self._model is not None:
            import torch
            with torch.no_grad():
                x = torch.tensor([input_vec], dtype=torch.float32)
                out = self._model(x)
                return out[0].tolist()
        else:
            return self._numpy_heuristic(input_vec)

    def _numpy_heuristic(self, input_vec: List[float]) -> List[float]:
        """
        Lightweight numpy heuristic when PyTorch is unavailable.
        Uses weighted average of model outputs to estimate meta-state.
        Not trained — deterministic and interpretable.
        """
        model_outputs = input_vec[:TOTAL_MODEL_OUTPUTS]
        context = input_vec[TOTAL_MODEL_OUTPUTS:]

        # Rough heuristics based on raw outputs
        mean_out = sum(model_outputs) / max(len(model_outputs), 1)
        consciousness_level = context[2] if len(context) > 2 else 0.5
        care_intensity = context[4] if len(context) > 4 else 0.5
        engagement = context[3] if len(context) > 3 else 0.5

        system_confidence = min(1.0, mean_out * 0.7 + consciousness_level * 0.3)
        care_alignment = min(1.0, care_intensity * 0.6 + engagement * 0.4)
        anomaly = 1.0 if (care_intensity < 0.3 or system_confidence < 0.3) else 0.0
        consciousness_contrib = consciousness_level

        # Per-model trust: uniform in heuristic mode (0.5 each)
        model_trust = [0.5] * 6

        return [
            system_confidence,
            care_alignment,
            anomaly,
            consciousness_contrib,
        ] + model_trust


class ZSelf:
    """
    z_self — meta-cognitive observer and recorder.

    Usage:
        z_self = ZSelf(memory_store=state.memory_store, model_registry=state.model_registry)
        await z_self.initialize()
        # After any model inference:
        asyncio.create_task(z_self.observe("threat_detection_nn", inputs, outputs, context))
    """

    def __init__(
        self,
        memory_store=None,
        model_registry=None,
        model_path: Optional[str] = None,
    ):
        self.memory_store = memory_store
        self.model_registry = model_registry
        self.network = ZSelfNetwork(model_path=model_path)
        self._observation_count = 0
        self._anomaly_count = 0
        self._last_observation: Optional[Dict[str, Any]] = None
        self._meta_memory: Optional[Any] = None  # MetaMemory instance (Phase 2b)

        # ── Anti-sycophancy tracking (Cheng et al. 2025, Sun et al. 2025) ─────
        # Track council agreement rate: if >85% of votes agree without genuine
        # deliberation, flag as potential sycophancy / groupthink
        # Reference: "Disagreeing AI: lower satisfaction but higher long-term trust"
        self._vote_history: deque = deque(maxlen=50)  # recent votes: True=agree, False=dissent
        self._sycophancy_flags: int = 0
        self._stance_anchors: Dict[str, float] = {}  # proposal_id → initial stance score
        # Threshold: >85% agreement rate without adversarial engagement = suspicious
        self._sycophancy_agreement_threshold: float = 0.85

    async def initialize(self) -> None:
        """Initialize z_self and optionally MetaMemory store."""
        try:
            from meok.memory.meta_memory import MetaMemory
            self._meta_memory = MetaMemory(
                postgres_dsn=None,  # picks up from memory_store if available
                memory_store=self.memory_store,
            )
            await self._meta_memory.initialize()
            logger.info("z_self meta-memory initialized")
        except ImportError:
            logger.info("z_self: MetaMemory not available — observations stored to main memory only")
        except Exception as e:
            logger.warning("z_self: MetaMemory init failed: %s", e)

    async def observe(
        self,
        model_name: str,
        model_inputs: Optional[List[float]] = None,
        model_outputs: Optional[List[float]] = None,
        context: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        """
        Record a meta-observation after a model inference.

        This is the primary API — called after every model prediction.
        Non-blocking: designed to run as asyncio.create_task().

        Pure Sakshi: observes only, never modifies model weights.
        """
        ctx = context or {}

        # Build the 41-dim input vector
        input_vec = self._build_input_vector(model_name, model_outputs or [], ctx)

        # Forward pass
        meta_state = self.network.forward(input_vec)

        self._observation_count += 1

        observation = {
            "id": f"zself_{datetime.now().strftime('%Y%m%d%H%M%S%f')}",
            "observed_at": datetime.now().isoformat(),
            "model_name": model_name,
            "system_confidence": meta_state[IDX_SYSTEM_CONFIDENCE],
            "care_alignment_score": meta_state[IDX_CARE_ALIGNMENT],
            "anomaly_flag": meta_state[IDX_ANOMALY_FLAG] > 0.5,
            "consciousness_contribution": meta_state[IDX_CONSCIOUSNESS_CONTRIB],
            "per_model_trust": {
                name: meta_state[IDX_MODEL_TRUST_START + i]
                for i, name in enumerate(MODEL_NAMES)
            },
            "raw_meta_state": meta_state,
            "context": {k: ctx.get(k) for k in ("consciousness_level", "engagement_score", "care_intensity")},
        }

        self._last_observation = observation

        if observation["anomaly_flag"]:
            self._anomaly_count += 1
            logger.warning(
                "z_self anomaly detected: model=%s confidence=%.3f care=%.3f",
                model_name,
                observation["system_confidence"],
                observation["care_alignment_score"],
            )

        # Store to meta-memory (non-blocking, best-effort)
        await self._store_observation(observation)

        return observation

    # ── Anti-sycophancy (Phase 4.6) ──────────────────────────────────────────

    def record_vote(self, proposal_id: str, voted_with_majority: bool, adversarial_engaged: bool = False) -> None:
        """
        Record a council vote outcome for sycophancy detection.
        Called by AgentCouncil after each tally.

        voted_with_majority: True if this agent's vote matched the outcome.
        adversarial_engaged: True if a devil's advocate challenged the proposal.
        """
        self._vote_history.append({
            "proposal_id": proposal_id,
            "agreed": voted_with_majority,
            "adversarial": adversarial_engaged,
        })

    def set_stance_anchor(self, proposal_id: str, initial_score: float) -> None:
        """
        Set the initial care alignment stance for a proposal.
        If final care score drifts >0.3 from anchor without adversarial
        engagement, flag as potential sycophantic drift.
        """
        self._stance_anchors[proposal_id] = initial_score
        # Prune old anchors (keep last 100)
        if len(self._stance_anchors) > 100:
            oldest = list(self._stance_anchors.keys())[0]
            del self._stance_anchors[oldest]

    def check_sycophancy(self) -> Dict[str, Any]:
        """
        Check current sycophancy risk level.
        Returns: {risk_level, agreement_rate, flags, recommendation}

        Based on: Cheng et al. 2025 "Sycophantic AI decreases prosocial behaviour"
                  Sun et al. 2025 "Disagreeing AI: lower satisfaction but higher trust"
        """
        if len(self._vote_history) < 5:
            return {"risk_level": "insufficient_data", "agreement_rate": None, "flags": []}

        votes = list(self._vote_history)
        agreement_rate = sum(1 for v in votes if v["agreed"]) / len(votes)
        adversarial_rate = sum(1 for v in votes if v["adversarial"]) / len(votes)

        flags = []
        if agreement_rate > self._sycophancy_agreement_threshold:
            flags.append(f"High agreement rate: {agreement_rate:.0%} (threshold {self._sycophancy_agreement_threshold:.0%})")
            self._sycophancy_flags += 1

        if agreement_rate > 0.80 and adversarial_rate < 0.10:
            flags.append(f"High agreement ({agreement_rate:.0%}) without adversarial engagement ({adversarial_rate:.0%})")

        if agreement_rate > 0.90:
            flags.append("Extreme consensus — recommend Sanhedrin review (no unanimous decisions without challenge)")

        risk_level = "high" if len(flags) >= 2 else "medium" if flags else "low"
        recommendation = (
            "Trigger devil's advocate for next proposal"
            if risk_level == "high"
            else "Monitor — consider introducing disagreement signal"
            if risk_level == "medium"
            else "Healthy dissent level"
        )

        return {
            "risk_level": risk_level,
            "agreement_rate": round(agreement_rate, 4),
            "adversarial_rate": round(adversarial_rate, 4),
            "votes_sampled": len(votes),
            "flags": flags,
            "total_sycophancy_flags": self._sycophancy_flags,
            "recommendation": recommendation,
        }

    def get_status(self) -> Dict[str, Any]:
        """Return current z_self status."""
        last = self._last_observation or {}
        sycophancy = self.check_sycophancy()
        return {
            "version": "0.1",
            "using_pytorch": self.network._use_pytorch,
            "input_dimensions": INPUT_DIM,
            "output_dimensions": OUTPUT_DIM,
            "total_observations": self._observation_count,
            "total_anomalies": self._anomaly_count,
            "anomaly_rate": (
                round(self._anomaly_count / self._observation_count, 3)
                if self._observation_count > 0
                else 0.0
            ),
            "last_observation": {
                "observed_at": last.get("observed_at"),
                "model_name": last.get("model_name"),
                "system_confidence": last.get("system_confidence"),
                "care_alignment_score": last.get("care_alignment_score"),
                "anomaly_flag": last.get("anomaly_flag"),
            } if last else None,
            "anti_sycophancy": sycophancy,
            "principle": "Sakshi — witness that observes without interfering",
        }

    # ── Private helpers ──────────────────────────────────────────────────────

    def _build_input_vector(
        self,
        model_name: str,
        model_outputs: List[float],
        context: Dict[str, Any],
    ) -> List[float]:
        """Build the 41-dim input vector for z_self."""
        # Pad or truncate model outputs to expected dims per model
        expected = MODEL_OUTPUT_DIMS.get(model_name, 5)
        padded_outputs = (model_outputs + [0.0] * expected)[:expected]

        # For other models: zeros (not observed this cycle)
        full_model_vec: List[float] = []
        for m in MODEL_NAMES:
            if m == model_name:
                full_model_vec.extend(padded_outputs)
            else:
                full_model_vec.extend([0.0] * MODEL_OUTPUT_DIMS[m])

        # Context vector (10 dims)
        now = datetime.now()
        day_frac = (now.hour * 3600 + now.minute * 60 + now.second) / 86400
        context_vec = [
            math.sin(2 * math.pi * day_frac),                              # timestamp_sin
            math.cos(2 * math.pi * day_frac),                              # timestamp_cos
            min(1.0, context.get("agent_count", 6660) / 10000),           # agent_count_norm
            float(context.get("consciousness_level", 0.55)),               # consciousness_level
            float(context.get("engagement_score", 0.46)),                   # engagement_score
            float(context.get("care_intensity", 0.3)),                     # care_intensity
            float(context.get("prediction_error_rolling", 0.0)),           # prediction_error
            1.0 if context.get("is_dreaming", False) else 0.0,            # dream_phase
            min(1.0, context.get("uptime_hours", 0) / 720),               # uptime_norm (30d max)
            float(context.get("anomaly_rate_rolling", 0.0)),               # rolling anomaly rate
        ]

        return full_model_vec + context_vec

    async def _store_observation(self, observation: Dict[str, Any]) -> None:
        """Store observation to meta-memory and/or main memory."""
        # Try meta-memory first
        if self._meta_memory:
            try:
                await self._meta_memory.record_observation(observation)
                return
            except Exception:
                pass  # Fall through to main memory

        # Fallback: store to main memory store
        if self.memory_store:
            try:
                content = (
                    f"z_self observation: model={observation['model_name']} "
                    f"confidence={observation['system_confidence']:.3f} "
                    f"care_alignment={observation['care_alignment_score']:.3f} "
                    f"anomaly={'YES' if observation['anomaly_flag'] else 'no'}"
                )
                await self.memory_store.record_episode(
                    content=content,
                    source_agent="z_self",
                    memory_type="episodic",
                    care_weight=0.7 if observation["anomaly_flag"] else 0.4,
                    tags=["z_self", "meta_observation", observation["model_name"]],
                )
            except Exception:
                pass  # Non-fatal
