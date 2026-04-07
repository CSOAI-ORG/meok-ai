"""
MEOK LLM Provider - Apfel (Apple On-Device LLM)
Uses Apple's built-in 3B model via apfel CLI or local server
Requires: macOS Tahoe (26+) with Apple Silicon
"""

import os
import logging
from typing import Optional, Dict, Any

logger = logging.getLogger(__name__)

# Apfel runs on localhost:11434 by default (OpenAI-compatible)
APFEL_BASE_URL = os.getenv("APFEL_URL", "http://localhost:11434")
APFEL_MODEL = os.getenv("APFEL_MODEL", "apple-on-device")


class ApfelProvider:
    """Apple on-device LLM provider via apfel."""

    def __init__(self, base_url: str = APFEL_BASE_URL):
        self.base_url = base_url
        self.model = APFEL_MODEL
        self._available = None

    async def chat(
        self, model: str = None, messages: list = None, system: str = None, **kwargs
    ) -> str:
        """Send chat request to apfel."""
        try:
            import httpx

            # Build messages for OpenAI-compatible format
            chat_messages = []
            if system:
                chat_messages.append({"role": "system", "content": system})
            chat_messages.extend(messages or [])

            async with httpx.AsyncClient(timeout=60.0) as client:
                response = await client.post(
                    f"{self.base_url}/v1/chat/completions",
                    json={
                        "model": model or self.model,
                        "messages": chat_messages,
                        "temperature": kwargs.get("temperature", 0.7),
                        "max_tokens": kwargs.get("max_tokens", 2048),
                    },
                )
                response.raise_for_status()
                data = response.json()
                return data["choices"][0]["message"]["content"]

        except ImportError:
            return "Error: httpx required for apfel. Install with: pip install httpx"
        except Exception as e:
            logger.warning(f"Apfel request failed: {e}")
            raise

    async def health_check(self) -> Dict[str, Any]:
        """Check if apfel is available."""
        try:
            import httpx

            async with httpx.AsyncClient(timeout=5.0) as client:
                response = await client.get(f"{self.base_url}/v1/models")
                if response.status_code == 200:
                    models = response.json()
                    return {
                        "available": True,
                        "models": models.get("data", []),
                        "provider": "apfel",
                        "type": "apple-on-device",
                    }
        except ImportError:
            return {"available": False, "error": "httpx not installed"}
        except Exception as e:
            return {"available": False, "error": str(e)}

        return {"available": False, "error": "Not running"}


# Singleton instance
apfel = ApfelProvider()


# CLI helper function
async def run_apfel_cli(prompt: str) -> str:
    """Run apfel via CLI (if installed)."""
    import subprocess

    try:
        result = subprocess.run(
            ["apfel", prompt], capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0:
            return result.stdout
        return f"Error: {result.stderr}"
    except FileNotFoundError:
        return "Error: apfel not installed. Run: brew install apfel"
    except Exception as e:
        return f"Error: {e}"


# Quick test
if __name__ == "__main__":
    import asyncio

    async def test():
        print("Testing apfel provider...")
        health = await apfel.health_check()
        print(f"Health: {health}")

        if health.get("available"):
            print("\nTesting chat...")
            result = await apfel.chat(
                messages=[{"role": "user", "content": "Hello, how are you?"}]
            )
            print(f"Response: {result}")

    asyncio.run(test())
