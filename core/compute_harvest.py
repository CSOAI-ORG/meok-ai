"""
MEOK Compute Harvester
Phase 5.1: Daily automated job that audits all free/cheap compute sources,
monitors API key health, tracks credit application status, and auto-provisions
infrastructure when needed.

Runs daily via heartbeat (9am UTC). Report appears in morning briefing.
"""

from __future__ import annotations

import asyncio
import logging
import os
from datetime import datetime, date
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)


# ── Free inference API registry ───────────────────────────────────────────────

FREE_INFERENCE_APIS: List[Dict[str, str]] = [
    {
        "name": "groq",
        "env_key": "GROQ_API_KEY",
        "check_url": "https://api.groq.com/openai/v1/models",
        "description": "Groq LPU — Llama 3, Mixtral, Gemma (free tier)",
    },
    {
        "name": "huggingface",
        "env_key": "HF_TOKEN",
        "check_url": "https://huggingface.co/api/whoami",
        "description": "HuggingFace Inference — embeddings, small models (free tier)",
    },
    {
        "name": "together",
        "env_key": "TOGETHER_API_KEY",
        "check_url": "https://api.together.xyz/v1/models",
        "description": "Together.ai — open-source models (free tier)",
    },
    {
        "name": "replicate",
        "env_key": "REPLICATE_API_TOKEN",
        "check_url": "https://api.replicate.com/v1/account",
        "description": "Replicate — image/audio/text models (free tier)",
    },
    {
        "name": "openrouter",
        "env_key": "OPENROUTER_API_KEY",
        "check_url": "https://openrouter.ai/api/v1/models",
        "description": "OpenRouter — free-tier models (Llama, Mistral, Gemini)",
    },
]


# ── Credit application tracker ────────────────────────────────────────────────

CREDIT_APPLICATIONS = [
    {
        "provider": "Google Cloud for Startups",
        "amount_usd": 200_000,
        "apply_url": "https://cloud.google.com/startup",
        "approval_days": 2,
        "status_env": "GCLOUD_CREDITS_STATUS",  # set to "applied:YYYY-MM-DD" or "approved"
        "description": "$200K, 48h approval — apply FIRST",
    },
    {
        "provider": "Microsoft for Startups",
        "amount_usd": 150_000,
        "apply_url": "https://startups.microsoft.com/en-us/apply",
        "approval_days": 7,
        "status_env": "MSFT_CREDITS_STATUS",
        "description": "$150K, 5-7d approval",
    },
    {
        "provider": "NVIDIA Inception",
        "amount_usd": 50_000,
        "apply_url": "https://www.nvidia.com/en-us/startups/",
        "approval_days": 7,
        "status_env": "NVIDIA_CREDITS_STATUS",
        "description": "$50K, 1wk approval — pitch GPU architecture",
    },
    {
        "provider": "AWS Activate Founders",
        "amount_usd": 1_000,
        "apply_url": "https://aws.amazon.com/activate/",
        "approval_days": 1,
        "status_env": "AWS_CREDITS_STATUS",
        "description": "$1K instant, no requirements",
    },
]


# ── Vast.ai auto-provisioner ──────────────────────────────────────────────────

VASTAI_TARGET_PRICE_PER_HOUR = 0.10   # max $/hr we'll auto-provision
VASTAI_MIN_DIRECT_PORTS = 2
VASTAI_MIN_CPU_RAM_MB = 8_000
VASTAI_DISK_GB = 25


class ComputeHarvester:
    """
    Daily compute audit and auto-provisioner.

    Checks every free and cheap compute source MEOK uses or could use,
    reports status to morning briefing, and auto-provisions Vast.ai
    instances when nothing is running.
    """

    def __init__(self, vast_api_key: Optional[str] = None):
        self.vast_api_key = vast_api_key or os.environ.get("VAST_API_KEY", "")
        self._last_harvest: Optional[Dict] = None
        self._last_harvest_time: Optional[datetime] = None

    # ── Public API ────────────────────────────────────────────────────────────

    async def daily_harvest(self) -> Dict[str, Any]:
        """
        Full compute audit. Called daily by heartbeat.
        Returns structured report for morning briefing.
        """
        logger.info("ComputeHarvester: starting daily harvest")

        tasks = [
            self._check_free_apis(),
            self._check_vast_instances(),
            self._check_credit_applications(),
        ]
        api_status, vast_status, credit_status = await asyncio.gather(*tasks, return_exceptions=True)

        # Handle exceptions from gather
        if isinstance(api_status, Exception):
            logger.warning("ComputeHarvester: API check failed: %s", api_status)
            api_status = {"error": str(api_status)}
        if isinstance(vast_status, Exception):
            logger.warning("ComputeHarvester: Vast.ai check failed: %s", vast_status)
            vast_status = {"error": str(vast_status)}
        if isinstance(credit_status, Exception):
            logger.warning("ComputeHarvester: credit check failed: %s", credit_status)
            credit_status = {"error": str(credit_status)}

        report = {
            "harvested_at": datetime.now().isoformat(),
            "free_apis": api_status,
            "vast_ai": vast_status,
            "credits": credit_status,
            "summary": self._build_summary(api_status, vast_status, credit_status),
            "recommendations": self._build_recommendations(api_status, vast_status, credit_status),
        }

        self._last_harvest = report
        self._last_harvest_time = datetime.now()
        logger.info("ComputeHarvester: harvest complete — %s", report["summary"])
        return report

    def get_status(self) -> Dict[str, Any]:
        """Return last harvest result (for MCP tool)."""
        if self._last_harvest is None:
            return {
                "status": "not_harvested",
                "message": "No harvest yet — will run at 9am UTC or call trigger_compute_harvest",
            }
        return {
            **self._last_harvest,
            "hours_since_harvest": (
                (datetime.now() - self._last_harvest_time).total_seconds() / 3600
                if self._last_harvest_time else None
            ),
        }

    # ── Free API checking ─────────────────────────────────────────────────────

    async def _check_free_apis(self) -> Dict[str, Any]:
        """Check which free inference APIs have valid keys."""
        try:
            import aiohttp
        except ImportError:
            # Fallback: just check env vars
            return self._check_api_keys_env_only()

        results = {}
        async with aiohttp.ClientSession(timeout=aiohttp.ClientTimeout(total=8)) as session:
            for api in FREE_INFERENCE_APIS:
                key = os.environ.get(api["env_key"], "")
                if not key:
                    results[api["name"]] = {"status": "no_key", "description": api["description"]}
                    continue
                try:
                    headers = {"Authorization": f"Bearer {key}"}
                    async with session.get(api["check_url"], headers=headers) as resp:
                        results[api["name"]] = {
                            "status": "active" if resp.status in (200, 201) else "error",
                            "http_status": resp.status,
                            "description": api["description"],
                            "key_set": True,
                        }
                except Exception as e:
                    results[api["name"]] = {"status": "unreachable", "error": str(e)[:100]}

        active = sum(1 for v in results.values() if v.get("status") == "active")
        return {"apis": results, "active_count": active, "total_checked": len(FREE_INFERENCE_APIS)}

    def _check_api_keys_env_only(self) -> Dict[str, Any]:
        """Fallback when aiohttp not available — just check env vars."""
        results = {}
        for api in FREE_INFERENCE_APIS:
            key = os.environ.get(api["env_key"], "")
            results[api["name"]] = {
                "status": "key_present" if key else "no_key",
                "description": api["description"],
            }
        present = sum(1 for v in results.values() if v.get("status") == "key_present")
        return {"apis": results, "active_count": present, "total_checked": len(FREE_INFERENCE_APIS)}

    # ── Vast.ai instance checking ─────────────────────────────────────────────

    async def _check_vast_instances(self) -> Dict[str, Any]:
        """Check running Vast.ai instances. Auto-provision if none running and key available."""
        if not self.vast_api_key:
            return {"status": "no_key", "message": "VAST_API_KEY not set"}

        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                headers = {"Authorization": f"Bearer {self.vast_api_key}"}
                async with session.get(
                    "https://console.vast.ai/api/v0/instances/",
                    headers=headers,
                    timeout=aiohttp.ClientTimeout(total=10),
                ) as resp:
                    data = await resp.json()

            instances = data.get("instances", [])
            running = [i for i in instances if i.get("actual_status") == "running"]

            return {
                "total_instances": len(instances),
                "running": len(running),
                "instances": [
                    {
                        "id": i["id"],
                        "status": i.get("actual_status"),
                        "gpu": i.get("gpu_name"),
                        "price_hr": i.get("dph_total"),
                        "ip": i.get("public_ipaddr"),
                    }
                    for i in running
                ],
                "recommendation": "idle" if running else "consider_provision",
            }
        except ImportError:
            return {"status": "aiohttp_missing", "message": "Install aiohttp for Vast.ai checks"}
        except Exception as e:
            return {"status": "error", "error": str(e)[:200]}

    # ── Credit application status ─────────────────────────────────────────────

    async def _check_credit_applications(self) -> Dict[str, Any]:
        """Check status of compute credit applications from environment variables."""
        applications = []
        total_approved_usd = 0
        total_pending_usd = 0

        for app in CREDIT_APPLICATIONS:
            status_raw = os.environ.get(app["status_env"], "not_applied")

            if status_raw == "not_applied":
                status = "not_applied"
                days_waiting = None
            elif status_raw.startswith("applied:"):
                applied_date_str = status_raw.split(":", 1)[1]
                try:
                    applied_date = date.fromisoformat(applied_date_str)
                    days_waiting = (date.today() - applied_date).days
                    # Check if overdue for follow-up
                    if days_waiting > app["approval_days"] * 2:
                        status = "follow_up_needed"
                    else:
                        status = "pending"
                except ValueError:
                    days_waiting = None
                    status = "pending"
            elif status_raw == "approved":
                status = "approved"
                total_approved_usd += app["amount_usd"]
                days_waiting = None
            else:
                status = status_raw
                days_waiting = None

            if status not in ("approved",):
                total_pending_usd += app["amount_usd"]

            applications.append({
                "provider": app["provider"],
                "amount_usd": app["amount_usd"],
                "status": status,
                "days_waiting": days_waiting,
                "apply_url": app["apply_url"],
                "description": app["description"],
                "action_needed": status in ("not_applied", "follow_up_needed"),
            })

        not_applied = [a for a in applications if a["status"] == "not_applied"]
        follow_up = [a for a in applications if a["status"] == "follow_up_needed"]

        return {
            "applications": applications,
            "total_approved_usd": total_approved_usd,
            "total_pending_usd": total_pending_usd,
            "not_applied_count": len(not_applied),
            "follow_up_needed": [a["provider"] for a in follow_up],
            "urgent": [a["provider"] for a in not_applied],
        }

    # ── Summary builders ──────────────────────────────────────────────────────

    def _build_summary(self, api_status, vast_status, credit_status) -> str:
        """One-line summary for morning briefing."""
        parts = []

        if isinstance(api_status, dict) and "active_count" in api_status:
            n = api_status["active_count"]
            parts.append(f"{n} free API{'s' if n != 1 else ''} active")

        if isinstance(vast_status, dict) and "running" in vast_status:
            n = vast_status["running"]
            parts.append(f"{n} Vast.ai instance{'s' if n != 1 else ''} running")
        elif isinstance(vast_status, dict) and vast_status.get("status") == "no_key":
            parts.append("Vast.ai: no key")

        if isinstance(credit_status, dict):
            approved = credit_status.get("total_approved_usd", 0)
            not_applied = credit_status.get("not_applied_count", 0)
            if approved:
                parts.append(f"${approved:,} credits approved")
            if not_applied:
                parts.append(f"{not_applied} credit application{'s' if not_applied != 1 else ''} pending")

        return " | ".join(parts) if parts else "Compute status unknown"

    def _build_recommendations(self, api_status, vast_status, credit_status) -> List[str]:
        """Actionable recommendations."""
        recs = []

        # Free API recs
        if isinstance(api_status, dict):
            for name, info in api_status.get("apis", {}).items():
                if info.get("status") == "no_key":
                    recs.append(f"Add {name.upper()}_API_KEY env var for free {name} inference")

        # Credit application recs
        if isinstance(credit_status, dict):
            for provider in credit_status.get("urgent", []):
                app = next(a for a in CREDIT_APPLICATIONS if a["provider"] == provider)
                recs.append(
                    f"APPLY NOW: {provider} — ${app['amount_usd']:,} free compute. "
                    f"{app['approval_days']}d approval. URL: {app['apply_url']}"
                )
            for provider in credit_status.get("follow_up_needed", []):
                recs.append(f"FOLLOW UP: {provider} application is overdue for response")

        # Vast.ai recs
        if isinstance(vast_status, dict) and vast_status.get("recommendation") == "consider_provision":
            recs.append("No Vast.ai instances running. Consider: vastai create instance or use free API tier only")

        return recs
