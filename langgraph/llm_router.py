"""
MEOK AI Labs - LLM Router
Intelligent routing to best model based on task, cost, and latency
"""

from typing import Optional, Dict, List, Any
from dataclasses import dataclass
from enum import Enum
import asyncio
import time

try:
    import httpx
except ImportError:
    import subprocess
    import sys

    subprocess.check_call([sys.executable, "-m", "pip", "install", "httpx"])
    import httpx


class TaskType(Enum):
    REASONING = "reasoning"  # Deep analysis, logic
    CREATIVE = "creative"  # Writing, brainstorming
    CODE = "code"  # Code generation, review
    VISION = "vision"  # Image understanding
    FAST = "fast"  # Quick responses
    LONG_CONTEXT = "long_context"  # Large documents
    SAFETY = "safety"  # Content moderation


@dataclass
class ModelConfig:
    name: str
    provider: str
    endpoint: str
    api_key: Optional[str]
    max_tokens: int
    cost_per_1k_input: float
    cost_per_1k_output: float
    latency_ms_avg: int
    supports: List[TaskType]
    context_window: int


class LLMRouter:
    """
    Routes LLM requests to optimal model based on:
    - Task type
    - Cost constraints
    - Latency requirements
    - Available context
    """

    def __init__(self):
        self.models: Dict[str, ModelConfig] = {}
        self.defaults: Dict[TaskType, str] = {}
        self._init_models()

    def _init_models(self):
        """Initialize available models"""

        # Cloud models
        self.models["gpt-4o"] = ModelConfig(
            name="gpt-4o",
            provider="openai",
            endpoint="https://api.openai.com/v1/chat/completions",
            api_key=None,  # Set from env
            max_tokens=128000,
            cost_per_1k_input=0.005,
            cost_per_1k_output=0.015,
            latency_ms_avg=2000,
            supports=[
                TaskType.REASONING,
                TaskType.CREATIVE,
                TaskType.CODE,
                TaskType.VISION,
            ],
            context_window=128000,
        )

        self.models["gpt-4o-mini"] = ModelConfig(
            name="gpt-4o-mini",
            provider="openai",
            endpoint="https://api.openai.com/v1/chat/completions",
            api_key=None,
            max_tokens=128000,
            cost_per_1k_input=0.00015,
            cost_per_1k_output=0.0006,
            latency_ms_avg=500,
            supports=[TaskType.FAST, TaskType.CODE, TaskType.REASONING],
            context_window=128000,
        )

        self.models["claude-sonnet"] = ModelConfig(
            name="claude-3-5-sonnet-latest",
            provider="anthropic",
            endpoint="https://api.anthropic.com/v1/messages",
            api_key=None,
            max_tokens=200000,
            cost_per_1k_input=0.003,
            cost_per_1k_output=0.015,
            latency_ms_avg=2500,
            supports=[
                TaskType.REASONING,
                TaskType.CREATIVE,
                TaskType.CODE,
                TaskType.SAFETY,
            ],
            context_window=200000,
        )

        self.models["qwen-3-72b"] = ModelConfig(
            name="qwen3-72b",
            provider="ollama",
            endpoint="http://localhost:11434/api/chat",
            api_key=None,
            max_tokens=32768,
            cost_per_1k_input=0.0,  # Local
            cost_per_1k_output=0.0,
            latency_ms_avg=3000,
            supports=[TaskType.REASONING, TaskType.CREATIVE, TaskType.CODE],
            context_window=32768,
        )

        self.models["llama-3.1-70b"] = ModelConfig(
            name="llama3.1:70b",
            provider="ollama",
            endpoint="http://localhost:11434/api/chat",
            api_key=None,
            max_tokens=32768,
            cost_per_1k_input=0.0,
            cost_per_1k_output=0.0,
            latency_ms_avg=5000,
            supports=[
                TaskType.REASONING,
                TaskType.CREATIVE,
                TaskType.CODE,
                TaskType.LONG_CONTEXT,
            ],
            context_window=128000,
        )

        self.models["qwen-coder"] = ModelConfig(
            name="qwen3-coder:32b",
            provider="ollama",
            endpoint="http://localhost:11434/api/chat",
            api_key=None,
            max_tokens=32768,
            cost_per_1k_input=0.0,
            cost_per_1k_output=0.0,
            latency_ms_avg=2000,
            supports=[TaskType.CODE],
            context_window=32768,
        )

        self.models["phi-3-medium"] = ModelConfig(
            name="phi-3-medium-128k-instruct",
            provider="vllm",
            endpoint="http://localhost:8000/v1/chat/completions",
            api_key=None,
            max_tokens=128000,
            cost_per_1k_input=0.0,
            cost_per_1k_output=0.0,
            latency_ms_avg=1500,
            supports=[TaskType.FAST, TaskType.REASONING],
            context_window=128000,
        )

        # Set defaults
        self.defaults = {
            TaskType.REASONING: "claude-sonnet",
            TaskType.CREATIVE: "gpt-4o",
            TaskType.CODE: "qwen-coder",
            TaskType.VISION: "gpt-4o",
            TaskType.FAST: "gpt-4o-mini",
            TaskType.LONG_CONTEXT: "llama-3.1-70b",
            TaskType.SAFETY: "claude-sonnet",
        }

    def select_model(
        self,
        task_type: TaskType,
        context_length: int = 0,
        max_cost: float = float("inf"),
        max_latency_ms: int = 30000,
        prefer_local: bool = True,
    ) -> ModelConfig:
        """
        Select optimal model for task

        Args:
            task_type: Type of task
            context_length: Required context window
            max_cost: Maximum cost per 1k tokens
            max_latency_ms: Maximum acceptable latency
            prefer_local: Prefer local models (cheaper)

        Returns:
            Best model configuration
        """

        candidates = [
            m
            for m in self.models.values()
            if task_type in m.supports
            and m.context_window >= context_length
            and m.cost_per_1k_input <= max_cost
            and m.latency_ms_avg <= max_latency_ms
        ]

        if not candidates:
            # Fallback to default
            return self.models[self.defaults.get(task_type, "gpt-4o-mini")]

        # Sort by priority: local > latency > cost
        def score(model: ModelConfig) -> tuple:
            local_bonus = -100 if prefer_local and "ollama" in model.provider else 0
            latency_score = model.latency_ms_avg
            cost_score = model.cost_per_1k_input + model.cost_per_1k_output
            return (local_bonus, latency_score, cost_score)

        candidates.sort(key=score)
        return candidates[0]

    async def generate(
        self,
        prompt: str,
        task_type: TaskType = TaskType.FAST,
        model: Optional[str] = None,
        **kwargs,
    ) -> Dict[str, Any]:
        """
        Generate response via optimal model

        Args:
            prompt: Input prompt
            task_type: Task type for routing
            model: Optional specific model
            **kwargs: Additional model parameters

        Returns:
            Generation result with metadata
        """

        # Select model
        if model:
            model_config = self.models.get(model)
            if not model_config:
                model_config = self.select_model(task_type)
        else:
            model_config = self.select_model(task_type)

        start_time = time.time()

        # Call appropriate provider
        if model_config.provider == "openai":
            result = await self._call_openai(model_config, prompt, **kwargs)
        elif model_config.provider == "anthropic":
            result = await self._call_anthropic(model_config, prompt, **kwargs)
        elif model_config.provider in ["ollama", "vllm"]:
            result = await self._call_ollama(model_config, prompt, **kwargs)
        else:
            raise ValueError(f"Unknown provider: {model_config.provider}")

        latency_ms = (time.time() - start_time) * 1000

        # Calculate cost
        input_tokens = result.get("usage", {}).get("prompt_tokens", 0)
        output_tokens = result.get("usage", {}).get("completion_tokens", 0)
        cost = (
            input_tokens / 1000 * model_config.cost_per_1k_input
            + output_tokens / 1000 * model_config.cost_per_1k_output
        )

        return {
            "content": result.get("content", ""),
            "model": model_config.name,
            "provider": model_config.provider,
            "latency_ms": latency_ms,
            "input_tokens": input_tokens,
            "output_tokens": output_tokens,
            "cost": cost,
            "finish_reason": result.get("finish_reason", "stop"),
        }

    async def _call_openai(self, model: ModelConfig, prompt: str, **kwargs) -> Dict:
        """Call OpenAI API"""
        headers = {
            "Authorization": f"Bearer {model.api_key}",
            "Content-Type": "application/json",
        }

        payload = {
            "model": model.name,
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": kwargs.get("max_tokens", 4096),
            "temperature": kwargs.get("temperature", 0.7),
        }

        async with httpx.AsyncClient() as client:
            resp = await client.post(
                model.endpoint, headers=headers, json=payload, timeout=60
            )
            resp.raise_for_status()
            data = resp.json()

            return {
                "content": data["choices"][0]["message"]["content"],
                "usage": data.get("usage", {}),
                "finish_reason": data["choices"][0].get("finish_reason"),
            }

    async def _call_anthropic(self, model: ModelConfig, prompt: str, **kwargs) -> Dict:
        """Call Anthropic API"""
        headers = {
            "x-api-key": model.api_key,
            "anthropic-version": "2023-06-01",
            "Content-Type": "application/json",
        }

        payload = {
            "model": model.name,
            "max_tokens": kwargs.get("max_tokens", 4096),
            "messages": [{"role": "user", "content": prompt}],
        }

        async with httpx.AsyncClient() as client:
            resp = await client.post(
                model.endpoint, headers=headers, json=payload, timeout=60
            )
            resp.raise_for_status()
            data = resp.json()

            return {
                "content": data["content"][0]["text"],
                "usage": {
                    "prompt_tokens": data["usage"]["input_tokens"],
                    "completion_tokens": data["usage"]["output_tokens"],
                },
                "finish_reason": data["stop_reason"],
            }

    async def _call_ollama(self, model: ModelConfig, prompt: str, **kwargs) -> Dict:
        """Call Ollama/vLLM API"""
        payload = {
            "model": model.name,
            "messages": [{"role": "user", "content": prompt}],
            "stream": False,
            "options": {
                "temperature": kwargs.get("temperature", 0.7),
                "num_predict": kwargs.get("max_tokens", 4096),
            },
        }

        async with httpx.AsyncClient() as client:
            resp = await client.post(model.endpoint, json=payload, timeout=120)
            resp.raise_for_status()
            data = resp.json()

            # Handle both Ollama and vLLM response formats
            if "message" in data:
                content = data["message"]["content"]
                prompt_tokens = data.get("prompt_eval_count", 0)
                completion_tokens = data.get("eval_count", 0)
            else:
                content = data["choices"][0]["message"]["content"]
                usage = data.get("usage", {})
                prompt_tokens = usage.get("prompt_tokens", 0)
                completion_tokens = usage.get("completion_tokens", 0)

            return {
                "content": content,
                "usage": {
                    "prompt_tokens": prompt_tokens,
                    "completion_tokens": completion_tokens,
                },
                "finish_reason": "stop",
            }


# Singleton
llm_router = LLMRouter()
