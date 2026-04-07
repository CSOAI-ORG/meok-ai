"""
MEOK LLM Provider - AirLLM
Layer-wise inference to run 70B+ models on 4GB GPU
"""

import os
import logging
from typing import Optional, Dict, Any

logger = logging.getLogger(__name__)

AIRLLM_MODEL = os.getenv("AIRLLM_MODEL", "meta-llama/Llama-3.1-70B-Instruct")


class AirLLMProvider:
    """AirLLM provider for low-memory large model inference."""

    def __init__(self, model_name: str = AIRLLM_MODEL):
        self.model_name = model_name
        self._available = None
        self._lib = None

    def _import_airllm(self):
        """Lazy import of airllm."""
        if self._lib is None:
            try:
                from airllm import AirLLM

                self._lib = AirLLM
            except ImportError:
                return None
        return self._lib

    async def chat(
        self, model: str = None, messages: list = None, system: str = None, **kwargs
    ) -> str:
        """Send chat request to AirLLM model."""
        AirLLM = self._import_airllm()

        if not AirLLM:
            return "Error: airllm not installed. Install with: pip install airllm"

        try:
            # Build prompt
            prompt = ""
            if system:
                prompt += f"System: {system}\n"
            for msg in messages or []:
                role = msg.get("role", "user")
                content = msg.get("content", "")
                prompt += f"{role.capitalize()}: {content}\n"

            # Initialize model (lazy load)
            model = AirLLM(model_name or self.model_name)

            # Generate
            response = model.generate(
                prompt,
                max_new_tokens=kwargs.get("max_tokens", 512),
                temperature=kwargs.get("temperature", 0.7),
            )

            return response

        except Exception as e:
            logger.warning(f"AirLLM request failed: {e}")
            raise

    async def health_check(self) -> Dict[str, Any]:
        """Check if AirLLM is available."""
        AirLLM = self._import_airllm()

        if not AirLLM:
            return {
                "available": False,
                "error": "airllm not installed. Run: pip install airllm",
            }

        return {
            "available": True,
            "model": self.model_name,
            "provider": "airllm",
            "type": "layer-wise-inference",
            "description": "Can run 70B+ models on 4GB GPU",
        }

    def get_gpu_memory_requirement(self, model_name: str = None) -> str:
        """Get estimated GPU memory for a model."""
        model = model_name or self.model_name

        # Rough estimates (in GB)
        estimates = {
            "70b": "4GB",
            "8b": "1GB",
            "3b": "0.5GB",
            "Llama-3.1-70B": "4GB",
            "Llama-3.1-8B": "1GB",
            "Llama-3.1-3B": "0.5GB",
            "Mistral-7B": "1GB",
            "Mixtral-8x7B": "6GB",
        }

        for key, val in estimates.items():
            if key.lower() in model.lower():
                return f"~{val} GPU memory"

        return "Unknown - requires testing"


# Singleton instance
airllm = AirLLMProvider()


# Quick test
if __name__ == "__main__":
    import asyncio

    async def test():
        print("Testing AirLLM provider...")
        health = await airllm.health_check()
        print(f"Health: {health}")
        print(f"GPU Memory: {airllm.get_gpu_memory_requirement()}")

    asyncio.run(test())
