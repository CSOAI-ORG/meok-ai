"""
MEOK LLM Provider - LiteLLM Proxy
Routes through LiteLLM for enhanced features: caching, rate limiting, 100+ providers
"""

import os
import logging
from typing import Optional, Dict, Any

logger = logging.getLogger(__name__)

LITELLM_URL = os.getenv("LITELLM_URL", "http://localhost:4000")
LITELLM_KEY = os.getenv("LITELLM_KEY", "sk-meok-key")


class LiteLLMProvider:
    """LiteLLM proxy provider - routes to any configured model."""

    def __init__(self, base_url: str = LITELLM_URL, api_key: str = LITELLM_KEY):
        self.base_url = base_url
        self.api_key = api_key
        self._available = None

    async def chat(
        self,
        model: str = "llama-local",
        messages: list = None,
        system: str = None,
        **kwargs,
    ) -> str:
        """Send chat request via LiteLLM proxy."""
        try:
            import httpx

            # Build messages
            chat_messages = []
            if system:
                chat_messages.append({"role": "system", "content": system})
            chat_messages.extend(messages or [])

            async with httpx.AsyncClient(timeout=kwargs.get("timeout", 60.0)) as client:
                response = await client.post(
                    f"{self.base_url}/v1/chat/completions",
                    headers={
                        "Authorization": f"Bearer {self.api_key}",
                        "Content-Type": "application/json",
                    },
                    json={
                        "model": model,
                        "messages": chat_messages,
                        "temperature": kwargs.get("temperature", 0.7),
                        "max_tokens": kwargs.get("max_tokens", 2048),
                    },
                )
                response.raise_for_status()
                data = response.json()
                return data["choices"][0]["message"]["content"]

        except ImportError:
            return "Error: httpx required"
        except Exception as e:
            logger.warning(f"LiteLLM request failed: {e}")
            raise

    async def health_check(self) -> Dict[str, Any]:
        """Check if LiteLLM is available."""
        try:
            import httpx

            async with httpx.AsyncClient(timeout=5.0) as client:
                response = await client.get(
                    f"{self.base_url}/health",
                    headers={"Authorization": f"Bearer {self.api_key}"},
                )
                if response.status_code == 200:
                    data = response.json()
                    return {
                        "available": True,
                        "healthy_endpoints": len(data.get("healthy_endpoints", [])),
                        "provider": "litellm",
                        "url": self.base_url,
                    }
        except Exception as e:
            return {"available": False, "error": str(e)}

        return {"available": False, "error": "Not responding"}

    def get_available_models(self) -> list:
        """Get list of available models via LiteLLM."""
        try:
            import httpx
            import json

            req = urllib.request.Request(
                f"{self.base_url}/v1/models",
                headers={"Authorization": f"Bearer {self.api_key}"},
            )
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = json.loads(resp.read().decode())
                return [m["id"] for m in data.get("data", [])]
        except Exception as e:
            logger.warning(f"Failed to get models: {e}")
            return []


# Singleton instance
litellm_provider = LiteLLMProvider()


# Quick test
if __name__ == "__main__":
    import asyncio

    async def test():
        print("Testing LiteLLM provider...")
        health = await litellm_provider.health_check()
        print(f"Health: {health}")

        if health.get("available"):
            print("\nTesting chat...")
            result = await litellm_provider.chat(
                model="llama-local",
                messages=[{"role": "user", "content": "Say MEOK in 3 letters."}],
            )
            print(f"Response: {result}")

    asyncio.run(test())
