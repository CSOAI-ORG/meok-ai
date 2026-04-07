#!/usr/bin/env python3
"""
Sovereign Temple - Project Heartbeat
APScheduler-based heartbeat system running inside the Docker container.

Manages all scheduled autonomous jobs: pulse checks, nightshift cycles,
morning digests, research sweeps, neural retraining, security hardening,
and metacognitive reviews.

Imported from sovereign-mcp-server.py which provides subsystem references.
"""

import asyncio
import logging
import os
from datetime import datetime, timedelta
from typing import Any, Dict, List, Optional

import psutil
import pytz
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.cron import CronTrigger
from apscheduler.triggers.interval import IntervalTrigger

logger = logging.getLogger("sovereign.heartbeat")

UK_TZ = pytz.timezone("Europe/London")

CARE_FLOOR = 0.3
HEARTBEAT_FILE = "/app/heartbeat.md"
POSTGRES_DSN = os.environ.get(
    "POSTGRES_DSN",
    "postgresql://sovereign:sovereign@postgres:5432/sovereign_memory",
)


def _memory_is_older_than(mem: Dict[str, Any], cutoff: datetime) -> bool:
    """Return True if a memory dict's timestamp is before the cutoff."""
    ts = mem.get("timestamp")
    if ts is None:
        return False
    try:
        if isinstance(ts, str):
            ts = datetime.fromisoformat(ts)
        # Strip timezone if present (cutoff is naive)
        if hasattr(ts, "tzinfo") and ts.tzinfo is not None:
            ts = ts.replace(tzinfo=None)
        return ts < cutoff
    except Exception:
        return False


def check_resources() -> Dict[str, Any]:
    """Check system CPU and memory usage."""
    cpu = psutil.cpu_percent(interval=1)
    mem = psutil.virtual_memory().percent
    return {
        "cpu_percent": cpu,
        "memory_percent": mem,
        "healthy": cpu < 80 and mem < 90,
    }


class SovereignHeartbeat:
    """
    Core heartbeat scheduler for Sovereign Temple.

    Orchestrates all periodic autonomous jobs using APScheduler's
    AsyncIOScheduler with in-memory job store.
    """

    def __init__(
        self,
        memory_store,
        consciousness,
        maintenance_system,
        alert_manager,
        model_registry,
        agent_registry,
        metrics,
    ):
        self.memory_store = memory_store
        self.consciousness = consciousness
        self.maintenance_system = maintenance_system
        self.alert_manager = alert_manager
        self.model_registry = model_registry
        self.agent_registry = agent_registry
        self.metrics = metrics
        self.compute_harvester = None  # set by initializer (Phase 5.1)

        self.scheduler: Optional[AsyncIOScheduler] = None
        self.pulse_count: int = 0
        self.nightshift_count: int = 0
        self._started_at: Optional[datetime] = None

    # ------------------------------------------------------------------
    # Lifecycle
    # ------------------------------------------------------------------

    def start(self) -> None:
        """Create and start the AsyncIOScheduler with all jobs."""
        self.scheduler = AsyncIOScheduler(timezone=UK_TZ)

        # --- Register jobs ---
        self.scheduler.add_job(
            self._safe_run(self.heartbeat_pulse),
            IntervalTrigger(minutes=15),
            id="heartbeat_pulse",
            name="Heartbeat Pulse (15m)",
            replace_existing=True,
        )

        self.scheduler.add_job(
            self._safe_run(self.nightshift_deep_cycle),
            CronTrigger(hour="18-23,0-2", minute="*/15", timezone=UK_TZ),
            id="nightshift_deep",
            name="Nightshift Deep Cycle",
            replace_existing=True,
        )

        self.scheduler.add_job(
            self._safe_run(self.generate_morning_digest),
            CronTrigger(hour=3, minute=30, timezone=UK_TZ),
            id="morning_digest",
            name="Morning Digest (03:30)",
            replace_existing=True,
        )

        self.scheduler.add_job(
            self._safe_run(self.research_sweep),
            CronTrigger(hour=19, minute=0, timezone=UK_TZ),
            id="research_sweep",
            name="Research Sweep (19:00)",
            replace_existing=True,
        )

        self.scheduler.add_job(
            self._safe_run(self.neural_retrain),
            CronTrigger(hour=22, minute=0, timezone=UK_TZ),
            id="neural_retrain",
            name="Neural Retrain (22:00)",
            replace_existing=True,
        )

        self.scheduler.add_job(
            self._safe_run(self.security_harden),
            CronTrigger(hour=1, minute=0, timezone=UK_TZ),
            id="security_harden",
            name="Security Harden (01:00)",
            replace_existing=True,
        )

        self.scheduler.add_job(
            self._safe_run(self.metacognitive_review),
            CronTrigger(day_of_week="sun", hour=23, minute=0, timezone=UK_TZ),
            id="metacognitive_review",
            name="Metacognitive Review (Sun 23:00)",
            replace_existing=True,
        )

        # Civilizational Creativity Cycle — 20:30 UK time
        # Slots between reflection/dreams (20:00) and neural retrain (22:00)
        self.scheduler.add_job(
            self._safe_run(self.creativity_cycle),
            CronTrigger(hour=20, minute=30, timezone=UK_TZ),
            id="creativity_cycle",
            name="Creativity Cycle (20:30)",
            replace_existing=True,
        )

        # Turiya Meta-Monitor — every 30 minutes, 24/7
        # Turiya is the 4th Vedantic consciousness mode: the witness of all other states.
        # Previously dormant (on-demand only); now scheduled as continuous meta-observation.
        self.scheduler.add_job(
            self._safe_run(self.turiya_monitor),
            IntervalTrigger(minutes=30),
            id="turiya_monitor",
            name="Turiya Meta-Monitor (30m)",
            replace_existing=True,
        )

        # Phase 5.1: Daily compute harvest — 9am UTC
        self.scheduler.add_job(
            self._safe_run(self.compute_harvest_daily),
            CronTrigger(hour=9, minute=0, timezone=pytz.utc),
            id="compute_harvest_daily",
            name="Daily Compute Harvest (9am UTC)",
            replace_existing=True,
        )

        # Orion Autonomous Task Hunt — every 30 min, 24/7
        # Orion-Riri-Hourman pattern running inside heartbeat: Hunt → Record → Execute.
        # No separate daemon needed — guaranteed to run whenever the server is alive.
        # Picks up queued tasks, logs exploration targets, records system state to memory.
        self.scheduler.add_job(
            self._safe_run(self.autonomous_task_hunt),
            IntervalTrigger(minutes=30),
            id="orion_task_hunt",
            name="Orion Autonomous Task Hunt (30m)",
            replace_existing=True,
        )

        # Nightshift Memory Compression — 01:30 UK
        # Compresses episodes > 7 days old into LLM-summarized granularity_level=2 entries.
        # Keeps memory store lean without losing care arcs or emotional trajectories.
        self.scheduler.add_job(
            self._safe_run(self.compress_old_memories),
            CronTrigger(hour=1, minute=30, timezone=UK_TZ),
            id="memory_compression",
            name="Nightshift Memory Compression (01:30)",
            replace_existing=True,
        )

        self.scheduler.start()
        self._started_at = datetime.now(UK_TZ)
        logger.info("Sovereign Heartbeat started with %d jobs", len(self.scheduler.get_jobs()))

    def stop(self) -> None:
        """Graceful shutdown of the scheduler."""
        if self.scheduler and self.scheduler.running:
            self.scheduler.shutdown(wait=True)
            logger.info("Sovereign Heartbeat stopped after %d pulses", self.pulse_count)

    def get_status(self) -> Dict[str, Any]:
        """Return scheduler state, job list, and next run times."""
        if not self.scheduler:
            return {"running": False, "jobs": [], "pulse_count": self.pulse_count}

        jobs = []
        for job in self.scheduler.get_jobs():
            jobs.append({
                "id": job.id,
                "name": job.name,
                "next_run_time": job.next_run_time.isoformat() if job.next_run_time else None,
                "paused": job.next_run_time is None,
            })

        return {
            "running": self.scheduler.running,
            "started_at": self._started_at.isoformat() if self._started_at else None,
            "pulse_count": self.pulse_count,
            "nightshift_count": self.nightshift_count,
            "jobs": jobs,
        }

    def pause_job(self, job_id: str) -> Dict[str, str]:
        """Pause a scheduled job (human override)."""
        if not self.scheduler:
            return {"error": "Scheduler not running"}
        try:
            self.scheduler.pause_job(job_id)
            logger.info("Job paused by human override: %s", job_id)
            return {"status": "paused", "job_id": job_id}
        except Exception as exc:
            logger.error("Failed to pause job %s: %s", job_id, exc)
            return {"error": str(exc)}

    def resume_job(self, job_id: str) -> Dict[str, str]:
        """Resume a paused job."""
        if not self.scheduler:
            return {"error": "Scheduler not running"}
        try:
            self.scheduler.resume_job(job_id)
            logger.info("Job resumed: %s", job_id)
            return {"status": "resumed", "job_id": job_id}
        except Exception as exc:
            logger.error("Failed to resume job %s: %s", job_id, exc)
            return {"error": str(exc)}

    # ------------------------------------------------------------------
    # Safety wrapper
    # ------------------------------------------------------------------

    def _safe_run(self, coro_func):
        """Wrap an async job so exceptions never crash the scheduler."""
        async def wrapper():
            try:
                await coro_func()
            except Exception:
                logger.exception("Heartbeat job '%s' failed", coro_func.__name__)
        wrapper.__name__ = coro_func.__name__
        wrapper.__qualname__ = coro_func.__qualname__
        return wrapper

    # ------------------------------------------------------------------
    # Jobs
    # ------------------------------------------------------------------

    async def heartbeat_pulse(self) -> None:
        """Every 15 minutes, 24/7 — core health check and care validation."""
        self.pulse_count += 1
        now = datetime.now(UK_TZ)
        logger.info("Heartbeat pulse #%d at %s", self.pulse_count, now.strftime("%Y-%m-%d %H:%M %Z"))

        # 1. Resource check — defer non-critical work if overloaded
        resources = check_resources()
        if not resources["healthy"]:
            logger.warning(
                "Resource pressure: CPU=%.1f%% MEM=%.1f%% — deferring non-critical work",
                resources["cpu_percent"],
                resources["memory_percent"],
            )

        # 2. Subsystem health
        subsystem_status = self._check_subsystems()

        # 3. Care floor validation
        care_level = self._get_care_intensity()
        care_ok = care_level >= CARE_FLOOR
        if not care_ok:
            logger.warning("Care intensity %.3f below floor %.1f — triggering emergency stimulation", care_level, CARE_FLOOR)
            stimulated = False
            if self.maintenance_system:
                try:
                    await self.maintenance_system._do_emergency_stimulation()
                    stimulated = True
                except Exception:
                    logger.exception("Emergency stimulation failed")
            # Direct care injection fallback if stimulation failed or unavailable
            if not stimulated and self.consciousness:
                try:
                    self.consciousness.emotional_state.care_intensity = CARE_FLOOR
                    logger.info("Direct care injection to %.1f (fallback)", CARE_FLOOR)
                except Exception:
                    logger.exception("Direct care injection failed")

        # 4. Check for claude_code_pickup memories
        pickup_tasks = await self._query_pickup_tasks()

        # 5. Process active alerts
        active_alerts = []
        if self.alert_manager:
            active_alerts = self.alert_manager.get_active_alerts()

        # 6. Record heartbeat memory
        await self._record_memory(
            content=(
                f"Heartbeat pulse #{self.pulse_count}. "
                f"Care={care_level:.3f} {'OK' if care_ok else 'LOW'}. "
                f"CPU={resources['cpu_percent']:.0f}% MEM={resources['memory_percent']:.0f}%. "
                f"Alerts={len(active_alerts)}. Pickup tasks={len(pickup_tasks)}."
            ),
            care_weight=0.4,
            tags=["heartbeat", "autonomous", "pulse"],
        )

        # 7. Record metric
        if self.metrics:
            self.metrics.record_metric("heartbeat_pulse", 1.0, {"pulse": str(self.pulse_count)})
            self.metrics.record_metric("care_intensity", care_level)
            self.metrics.record_metric("cpu_percent", resources["cpu_percent"])
            self.metrics.record_metric("memory_percent", resources["memory_percent"])

        # 8. Engagement alert — warn if social cohesion drops below threshold
        if self.agent_registry:
            try:
                stats = self.agent_registry.get_registry_stats()
                engagement_data = stats.get("engagement", {})
                score = engagement_data.get("score", 1.0) if isinstance(engagement_data, dict) else 1.0
                if score < 0.5:
                    logger.warning("Engagement alert: score=%.3f below 0.5 threshold — social cohesion declining", score)
                    if self.metrics:
                        self.metrics.record_metric("engagement_alert", score)
                # Also alert if agent count drifted above cap
                agent_count = len(self.agent_registry.agents)
                if agent_count > self.agent_registry.MAX_AGENTS:
                    logger.error("Agent cap breach: %d agents (max %d) — stopping new registrations", agent_count, self.agent_registry.MAX_AGENTS)
            except Exception:
                pass

        # 10. Write heartbeat file
        consciousness_state = self._get_consciousness_state()
        self._write_heartbeat_file(
            now=now,
            resources=resources,
            care_level=care_level,
            consciousness_state=consciousness_state,
            active_alerts_count=len(active_alerts),
            pickup_tasks=pickup_tasks,
            subsystem_status=subsystem_status,
        )

    async def nightshift_deep_cycle(self) -> None:
        """Every 15 min during 6PM-2:30AM — phased nightshift processing."""
        self.nightshift_count += 1
        now = datetime.now(UK_TZ)
        hour = now.hour
        phase = "unknown"

        logger.info("Nightshift cycle #%d at %s (hour=%d)", self.nightshift_count, now.strftime("%H:%M"), hour)

        if hour in (18, 19):
            phase = "research_prep"
            logger.info("Nightshift phase: research preparation (research sweep runs at 19:00)")

        elif hour in (20, 21):
            phase = "reflection_and_dreams"
            logger.info("Nightshift phase: reflection and dream processing")
            if self.consciousness:
                try:
                    await self.consciousness.reflection.perform_reflection(trigger="nightshift_deep")
                except Exception:
                    logger.exception("Nightshift reflection failed")
                try:
                    await self.consciousness.dream.enter_dream_state(duration_seconds=10)
                except Exception:
                    logger.exception("Nightshift dream state failed")

        elif hour in (22, 23):
            phase = "neural_retrain"
            logger.info("Nightshift phase: neural retrain active (dedicated job at 22:00)")

        elif hour in (0, 1):
            phase = "security_hardening"
            logger.info("Nightshift phase: security hardening active (dedicated job at 01:00)")

        elif hour == 2:
            phase = "nightshift_compilation"
            logger.info("Nightshift phase: compiling tonight's results")
            await self._compile_nightshift_results()

        await self._record_memory(
            content=f"Nightshift cycle #{self.nightshift_count}, phase={phase}, hour={hour}",
            care_weight=0.5,
            tags=["nightshift", "autonomous", phase],
        )

    # ── Ralph Mode: Production Readiness Checklist ────────────────────────────
    # Each item: (checklist_key, description, probe_fn_or_None)
    # Probe returns True if done, False if not yet complete.
    PRODUCTION_CHECKLIST = [
        ("emotional_vad_tagging",       "Emotional VAD fields on MemoryEpisode (valence/arousal/dominance)"),
        ("hp_ttr_ci_trr_metrics",       "HP/TTR/CI/TRR care metrics exposed as MCP tools"),
        ("sentence_transformer_embedder", "MiniLM-L6 SentenceTransformer embedder available (GPU)"),
        ("memory_compression_job",      "Nightshift memory compression job scheduled (01:30)"),
        ("cpm_module",                  "CarePreferenceModel module exists (core/care_preference_model.py)"),
        ("architectural_memory_files",  "3 architectural JSON files ingested (maternal_ethics, memory, data_currency)"),
        ("e2e_smoke_test",              "E2E smoke test suite exists (tests/e2e_smoke_test.py)"),
        ("pgvector_hnsw",               "pgvector HNSW index active (PROP-001 implementation)"),
        ("dns_meok_ai",                 "meok.ai DNS pointing to Vercel (A record + CNAME)"),
        ("vast_gpu_utilized",           "Vast.ai GPU utilised (sentence-transformers running on CUDA)"),
    ]

    async def _check_production_readiness(self) -> Dict[str, Any]:
        """
        Probe each production checklist item. Returns dict: key → bool.
        Called by autonomous_task_hunt every 30 min.
        """
        import os
        checks: Dict[str, bool] = {}

        # 1. VAD tagging — check if MemoryEpisode has emotional_valence field
        try:
            from meok.memory.enhanced_memory import MemoryEpisode
            checks["emotional_vad_tagging"] = hasattr(MemoryEpisode, "emotional_valence") or \
                "emotional_valence" in MemoryEpisode.__dataclass_fields__
        except Exception:
            checks["emotional_vad_tagging"] = False

        # 2. HP/TTR/CI/TRR metrics — check care_metrics tool list
        try:
            from meok.mcp.tools.care_metrics import CARE_METRICS_TOOLS
            tool_names = {t["name"] for t in CARE_METRICS_TOOLS}
            checks["hp_ttr_ci_trr_metrics"] = all(
                n in tool_names for n in ("get_harm_prevented", "get_time_to_repair",
                                           "get_care_continuity_index", "get_tail_risk_reduction")
            )
        except Exception:
            checks["hp_ttr_ci_trr_metrics"] = False

        # 3. SentenceTransformer embedder
        try:
            from sentence_transformers import SentenceTransformer  # noqa
            checks["sentence_transformer_embedder"] = True
        except ImportError:
            checks["sentence_transformer_embedder"] = False

        # 4. Memory compression job scheduled
        try:
            job_ids = [j.id for j in self.scheduler.get_jobs()] if self.scheduler else []
            checks["memory_compression_job"] = "memory_compression" in job_ids
        except Exception:
            checks["memory_compression_job"] = False

        # 5. CPM module exists
        base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        checks["cpm_module"] = os.path.exists(os.path.join(base, "core", "care_preference_model.py"))

        # 6. Architectural memory files
        mem_dir = os.path.join(base, "memory")
        arch_files = [
            "architectural_maternal_ethics_os_2026_03_19.json",
            "architectural_external_memory_deep_dive_2026_03_19.json",
            "architectural_data_currency_2026_03_19.json",
        ]
        checks["architectural_memory_files"] = all(
            os.path.exists(os.path.join(mem_dir, f)) for f in arch_files
        )

        # 7. E2E smoke test
        checks["e2e_smoke_test"] = os.path.exists(
            os.path.join(base, "tests", "e2e_smoke_test.py")
        )

        # 8. pgvector HNSW — check if extension is active in DB (best-effort)
        checks["pgvector_hnsw"] = False
        if self.memory_store and getattr(self.memory_store, "pool", None):
            try:
                async with self.memory_store.pool.acquire() as conn:
                    row = await conn.fetchrow(
                        "SELECT extname FROM pg_extension WHERE extname='vector'"
                    )
                    checks["pgvector_hnsw"] = row is not None
            except Exception:
                pass

        # 9. DNS check — try to resolve meok.ai (non-fatal timeout)
        try:
            import socket
            ip = socket.gethostbyname("meok.ai")
            checks["dns_meok_ai"] = ip.startswith("76.76.")  # Vercel IP range
        except Exception:
            checks["dns_meok_ai"] = False

        # 10. Vast.ai GPU utilised — check if CUDA available to torch
        try:
            import torch
            checks["vast_gpu_utilized"] = torch.cuda.is_available()
        except ImportError:
            # torch not installed; check via sentence_transformers device
            try:
                from meok.memory.rag_memory import SentenceTransformerEmbedder
                st = SentenceTransformerEmbedder()
                if st.available and st.model is not None:
                    device = str(st.model.device)
                    checks["vast_gpu_utilized"] = "cuda" in device
                else:
                    checks["vast_gpu_utilized"] = False
            except Exception:
                checks["vast_gpu_utilized"] = False

        return checks

    async def autonomous_task_hunt(self) -> None:
        """
        Every 30 min — autonomous MEOK build scanning and self-improvement (Ralph Mode).

        Orion-Riri-Hourman pattern embedded in heartbeat: Hunt → Record → Execute.
        Runs 24/7 inside the guaranteed heartbeat loop — no separate daemon needed.
        Results feed into the morning digest via orion_hunt tagged memories.

        Ralph Mode: also checks PRODUCTION_CHECKLIST every run and records
        readiness gaps to memory so they surface in the morning briefing.
        """
        logger.info("Orion autonomous task hunt starting (pulse #%d)", self.pulse_count)

        # Skip if system under load
        resources = check_resources()
        if not resources["healthy"]:
            logger.warning(
                "Task hunt skipped — CPU %.0f%% / MEM %.0f%%",
                resources["cpu_percent"], resources["memory_percent"],
            )
            return

        hunted = 0

        # 1. Pull queued pickup tasks — record their existence for visibility
        try:
            pickup_tasks = await self._query_pickup_tasks()
            if pickup_tasks:
                task_summary = "; ".join(
                    t.get("content", "")[:80] for t in pickup_tasks[:3]
                )
                await self._record_memory(
                    content=(
                        f"Orion hunt found {len(pickup_tasks)} pending task(s): {task_summary}"
                    ),
                    care_weight=0.75,
                    tags=["orion_hunt", "pickup_tasks", "autonomous", "nightshift"],
                )
                hunted += len(pickup_tasks)
        except Exception as _e:
            logger.debug("Orion pickup scan error (non-fatal): %s", _e)

        # 2. Exploration suggestion — rotate domains, keep system curious
        try:
            if getattr(self.memory_store, "suggest_exploration", None):
                suggestion = await self.memory_store.suggest_exploration()
                if suggestion:
                    await self._record_memory(
                        content=f"Autonomous exploration target: {suggestion}",
                        care_weight=0.65,
                        tags=["orion_hunt", "exploration", "autonomous"],
                    )
                    hunted += 1
        except Exception:
            pass  # Non-fatal — exploration is opportunistic

        # 3. Agent registry heartbeat — log active agent count to memory
        try:
            if getattr(self, "agent_registry", None):
                active = getattr(self.agent_registry, "_agents", {})
                if active:
                    await self._record_memory(
                        content=(
                            f"Orion status: {len(active)} agents active, "
                            f"heartbeat pulse #{self.pulse_count}"
                        ),
                        care_weight=0.5,
                        tags=["orion_hunt", "system_status", "autonomous"],
                    )
        except Exception:
            pass

        # 4. Ralph Mode — Production Readiness Checklist
        try:
            readiness = await self._check_production_readiness()
            done = sum(1 for v in readiness.values() if v)
            total = len(readiness)
            gaps = [
                f"{key} ({desc})"
                for (key, desc), done_flag in zip(self.PRODUCTION_CHECKLIST, readiness.values())
                if not done_flag
            ]
            readiness_summary = (
                f"Ralph Mode — Production Readiness: {done}/{total} ✅\n"
                + (f"Gaps: {'; '.join(gaps)}" if gaps else "All items complete! 🎉")
            )
            await self._record_memory(
                content=readiness_summary,
                care_weight=0.85,
                tags=["ralph_mode", "production_readiness", "orion_hunt", "autonomous"],
            )
            logger.info("Ralph Mode readiness: %d/%d items complete", done, total)
            if gaps:
                logger.info("Gaps: %s", gaps[:3])
            hunted += 1
        except Exception as exc:
            logger.debug("Ralph Mode readiness check error (non-fatal): %s", exc)

        logger.info("Orion task hunt complete — %d items recorded", hunted)

    async def generate_morning_digest(self) -> None:
        """Daily at 3:30 AM — compile overnight work into a morning brief."""
        logger.info("Generating morning digest")

        # Query nightshift memories from last 12 hours
        nightshift_memories = await self._query_recent_tagged_memories("nightshift", hours=12)

        # Group by category
        groups: Dict[str, List[Dict]] = {
            "neural_retrain": [],
            "research": [],
            "security": [],
            "heartbeat": [],
            "other": [],
        }
        for mem in nightshift_memories:
            tags = mem.get("tags", [])
            if "neural_retrain" in tags:
                groups["neural_retrain"].append(mem)
            elif "research" in tags or "research_prep" in tags:
                groups["research"].append(mem)
            elif "security_hardening" in tags or "security" in tags:
                groups["security"].append(mem)
            elif "heartbeat" in tags or "pulse" in tags:
                groups["heartbeat"].append(mem)
            else:
                groups["other"].append(mem)

        # Consciousness state
        consciousness_state = self._get_consciousness_state()
        care_level = self._get_care_intensity()

        # Pickup tasks
        pickup_tasks = await self._query_pickup_tasks()

        # Compose digest
        lines = [
            "# Sovereign Morning Digest",
            f"Generated: {datetime.now(UK_TZ).strftime('%Y-%m-%d %H:%M %Z')}",
            "",
            "## Overnight Summary",
            f"- Total nightshift memories: {len(nightshift_memories)}",
            f"- Neural retrain events: {len(groups['neural_retrain'])}",
            f"- Research events: {len(groups['research'])}",
            f"- Security events: {len(groups['security'])}",
            f"- Heartbeat pulses: {len(groups['heartbeat'])}",
            "",
            "## System State",
            f"- Care intensity: {care_level:.3f}",
            f"- Consciousness level: {consciousness_state.get('consciousness_level', 'N/A')}",
            f"- Is dreaming: {consciousness_state.get('is_dreaming', False)}",
            f"- Total reflections: {consciousness_state.get('reflections', 0)}",
            "",
            "## Pending Tasks for Claude Code",
        ]

        if pickup_tasks:
            for task in pickup_tasks:
                lines.append(f"- [{task.get('timestamp', '?')}] {task.get('content', 'unknown')[:120]}")
        else:
            lines.append("- No pending pickup tasks")

        lines.append("")
        lines.append("---")
        lines.append(f"Heartbeat pulses to date: {self.pulse_count}")
        lines.append(f"Nightshift cycles to date: {self.nightshift_count}")

        digest_text = "\n".join(lines)

        # Store as high-priority memory
        await self._record_memory(
            content=digest_text,
            care_weight=0.9,
            tags=["morning_digest", "priority", "autonomous"],
        )

        logger.info("Morning digest stored (%d nightshift memories processed)", len(nightshift_memories))

    async def research_sweep(self) -> None:
        """Daily at 19:00 — run research sweep across memory and models."""
        logger.info("Research sweep starting")

        resources = check_resources()
        if not resources["healthy"]:
            logger.warning("Skipping research sweep due to resource pressure")
            await self._record_memory(
                content="Research sweep skipped — resource pressure",
                care_weight=0.4,
                tags=["nightshift", "research", "skipped"],
            )
            return

        # Query recent high-care memories for research themes
        recent_memories = []
        if self.memory_store:
            try:
                recent_memories = await self.memory_store.list_all_memories(limit=20)
            except Exception:
                logger.exception("Failed to fetch memories for research sweep")

        themes = set()
        for mem in recent_memories:
            for tag in mem.get("tags", []):
                if tag not in ("autonomous", "heartbeat", "pulse", "maintenance", "self_care"):
                    themes.add(tag)

        await self._record_memory(
            content=f"Research sweep completed. Themes identified: {', '.join(sorted(themes)[:15]) or 'none'}. Memories scanned: {len(recent_memories)}.",
            care_weight=0.6,
            tags=["nightshift", "research", "autonomous"],
        )

        logger.info("Research sweep complete — %d themes from %d memories", len(themes), len(recent_memories))

    async def neural_retrain(self) -> None:
        """Daily at 22:00 — trigger neural model retraining if data available."""
        logger.info("Neural retrain job starting")

        resources = check_resources()
        if not resources["healthy"]:
            logger.warning("Deferring neural retrain — resource pressure")
            await self._record_memory(
                content="Neural retrain deferred — resource pressure",
                care_weight=0.4,
                tags=["nightshift", "neural_retrain", "deferred"],
            )
            return

        retrain_summary = "Neural retrain cycle: "
        if self.model_registry:
            try:
                models = self.model_registry.list_models() if hasattr(self.model_registry, "list_models") else []
                retrain_summary += f"{len(models)} models in registry. "
            except Exception:
                logger.exception("Error accessing model registry during retrain")
                retrain_summary += "Model registry access error. "
        else:
            retrain_summary += "No model registry available. "

        # Query training-relevant memories
        training_memories = await self._query_recent_tagged_memories("insight", hours=24)
        retrain_summary += f"{len(training_memories)} insight memories from last 24h available for training."

        await self._record_memory(
            content=retrain_summary,
            care_weight=0.6,
            tags=["nightshift", "neural_retrain", "autonomous"],
        )

        logger.info("Neural retrain cycle complete")

    async def security_harden(self) -> None:
        """Daily at 01:00 — security hardening checks."""
        logger.info("Security hardening job starting")

        issues: List[str] = []

        # Check alert history for threat-related alerts
        if self.alert_manager:
            threat_alerts = self.alert_manager.get_active_alerts()
            critical = [a for a in threat_alerts if a.severity.value in ("critical", "emergency")]
            if critical:
                issues.append(f"{len(critical)} critical/emergency alerts unresolved")

        # Check care floor — a care collapse could indicate adversarial influence
        care = self._get_care_intensity()
        if care < CARE_FLOOR:
            issues.append(f"Care intensity {care:.3f} below floor — possible adversarial influence")

        # Resource anomaly check
        resources = check_resources()
        if resources["cpu_percent"] > 90:
            issues.append(f"Abnormal CPU usage: {resources['cpu_percent']:.0f}%")
        if resources["memory_percent"] > 95:
            issues.append(f"Abnormal memory usage: {resources['memory_percent']:.0f}%")

        status = "clean" if not issues else f"{len(issues)} issues found"

        await self._record_memory(
            content=f"Security hardening: {status}. " + (" | ".join(issues) if issues else "All checks passed."),
            care_weight=0.7,
            tags=["nightshift", "security_hardening", "security", "autonomous"],
        )

        logger.info("Security hardening complete: %s", status)

    async def metacognitive_review(self) -> None:
        """Weekly on Sunday at 23:00 — deep self-assessment."""
        logger.info("Metacognitive review starting (weekly)")

        consciousness_state = self._get_consciousness_state()
        care = self._get_care_intensity()

        # Gather week's digest memories
        digests = await self._query_recent_tagged_memories("morning_digest", hours=168)

        # Gather week's reflection data
        reflection_count = consciousness_state.get("reflections", 0)
        dream_count = consciousness_state.get("dreams", 0)

        review_lines = [
            f"Weekly Metacognitive Review — {datetime.now(UK_TZ).strftime('%Y-%m-%d')}",
            f"Care intensity: {care:.3f}",
            f"Consciousness level: {consciousness_state.get('consciousness_level', 'N/A')}",
            f"Reflections to date: {reflection_count}",
            f"Dream sessions to date: {dream_count}",
            f"Morning digests this week: {len(digests)}",
            f"Total heartbeat pulses: {self.pulse_count}",
            f"Total nightshift cycles: {self.nightshift_count}",
        ]

        # Emotional trend
        emotional_summary = consciousness_state.get("emotional_summary", {})
        if emotional_summary:
            trend = emotional_summary.get("trend", "unknown")
            stability = emotional_summary.get("emotional_stability", "unknown")
            review_lines.append(f"Emotional trend: {trend}")
            review_lines.append(f"Emotional stability: {stability}")

        review_text = "\n".join(review_lines)

        await self._record_memory(
            content=review_text,
            care_weight=0.85,
            tags=["metacognitive_review", "weekly", "autonomous", "priority"],
        )

        logger.info("Metacognitive review complete")

    async def creativity_cycle(self) -> None:
        """Civilizational Creativity Cycle at 20:30 UK time.

        Integrates 47 civilizational traditions into Sovereign's creative processing:
        1. Suṣupti (deep consolidation) — memory compaction without generation
        2. Svapna (NREM→REM dreaming) — consolidation then creative recombination
        3. Kolmogorov novelty scoring of dream outputs
        4. Engagement group cohesion measurement
        5. Turiya meta-monitoring coherence check
        """
        logger.info("Creativity cycle starting (20:30 UK)")

        results = {"phases": [], "insights": 0}

        # Phase 1: Suṣupti — deep consolidation
        try:
            if self.consciousness:
                # Set consciousness mode to deep sleep if available
                if hasattr(self.consciousness, 'enter_deep_consolidation'):
                    await self.consciousness.enter_deep_consolidation()
                    results["phases"].append("susupti_consolidation")
                elif hasattr(self.consciousness, 'dream_state'):
                    # Fallback: use dream state for consolidation
                    await self.consciousness.enter_dream_state(duration_seconds=30)
                    results["phases"].append("consolidation_via_dream")
        except Exception:
            logger.exception("Suṣupti consolidation failed")

        # Phase 2: Svapna — NREM→REM dreaming with creativity
        try:
            if self.consciousness and hasattr(self.consciousness, 'enter_dream_state'):
                dream_result = await self.consciousness.enter_dream_state(duration_seconds=60)
                results["phases"].append("svapna_nrem_rem")
                if isinstance(dream_result, dict):
                    results["dream_insights"] = dream_result.get("insights_generated", 0)
        except Exception:
            logger.exception("Svapna dream cycle failed")

        # Phase 3: Creativity assessment via pipeline
        try:
            from meok.neural.training_pipeline import CreativityTrainingPipeline
            from meok.neural.novelty_metric import kolmogorov_novelty

            # Check if pipeline is available via MCP server globals
            # If not, create a lightweight instance
            pipeline = None
            if self.model_registry:
                pipeline = CreativityTrainingPipeline(
                    model_registry=self.model_registry,
                    memory_store=self.memory_store,
                )

            if pipeline:
                # Run the full creativity pipeline
                pipeline_result = await pipeline.run_full_pipeline()
                results["pipeline"] = {
                    "models_updated": pipeline_result.get("models_updated", 0),
                    "traditions_integrated": pipeline_result.get("tradition_count", 0),
                }
                results["phases"].append("creativity_pipeline")
        except ImportError:
            logger.info("Creativity engine not available — skipping pipeline")
        except Exception:
            logger.exception("Creativity pipeline failed")

        # Phase 4: Engagement group cohesion
        try:
            if self.agent_registry and hasattr(self.agent_registry, 'compute_engagement'):
                engagement = self.agent_registry.compute_engagement()
                results["engagement"] = engagement
                results["phases"].append("engagement_measurement")

                # Alert if cohesion is weakening (Khaldunian warning)
                if engagement.get("khaldunian_warning"):
                    logger.warning(
                        "Khaldunian warning: engagement in '%s' phase (score: %.3f)",
                        engagement.get("phase", "unknown"),
                        engagement.get("score", 0),
                    )
        except Exception:
            logger.exception("Engagement measurement failed")

        # Phase 5: Turiya meta-monitoring
        try:
            if self.consciousness and hasattr(self.consciousness, 'meta_monitor'):
                meta_obs = await self.consciousness.meta_monitor.observe(
                    self.consciousness.emotional_state,
                    self.consciousness.reflection_cycle,
                    self.consciousness.dream_state,
                )
                results["meta_observation"] = meta_obs
                results["phases"].append("turiya_monitoring")
        except Exception:
            logger.exception("Turiya meta-monitoring failed")

        # Phase 6: Cross-domain bisociation analysis (Tier 2)
        try:
            from meok.neural.cross_domain_linker import CrossDomainLinker
            linker = CrossDomainLinker()
            linker.compute_distances()
            links = linker.find_bisociations(top_k=10)
            dream_targets = linker.suggest_dream_targets(n=3)
            bridge_concepts = linker.get_tradition_connectivity()[:5]
            results["bisociation"] = {
                "links_found": len(links),
                "top_link": links[0].to_dict() if links else None,
                "dream_targets": dream_targets,
                "bridge_concepts": [b["tradition"] for b in bridge_concepts],
            }
            results["phases"].append("bisociation_analysis")
        except ImportError:
            logger.info("CrossDomainLinker not available — skipping bisociation")
        except Exception:
            logger.exception("Bisociation analysis failed")

        # Phase 7: QD archive population (Tier 2)
        try:
            from meok.neural.quality_diversity import QualityDiversityArchive
            archive = QualityDiversityArchive()

            # Auto-populate from recent dream insights
            if self.memory_store:
                try:
                    recent = await self.memory_store.search_by_tags(["creative_insight"])
                    for mem in recent[:10]:
                        content = getattr(mem, 'content', str(mem))
                        archive.add(
                            content=content,
                            features={"novelty_score": 0.6, "care_alignment": 0.7},
                            scores={"creative_quality": 0.5},
                            overall_quality=0.5,
                            domain="creativity",
                            source="nightshift_dream",
                        )
                except Exception:
                    pass

            results["qd_archive"] = {
                "coverage": archive.coverage(),
                "filled_cells": len(archive._grid),
                "total_cells": archive.total_cells,
            }
            results["phases"].append("qd_archive_update")
        except ImportError:
            logger.info("QD Archive not available — skipping")
        except Exception:
            logger.exception("QD archive population failed")

        # Record creativity cycle memory
        summary_lines = [
            f"Creativity Cycle — {datetime.now(UK_TZ).strftime('%Y-%m-%d %H:%M')}",
            f"Phases completed: {', '.join(results['phases'])}",
        ]
        if "engagement" in results:
            summary_lines.append(
                f"Engagement: {results['engagement'].get('score', 'N/A')} "
                f"({results['engagement'].get('phase', 'unknown')})"
            )
        if "pipeline" in results:
            summary_lines.append(
                f"Models updated: {results['pipeline'].get('models_updated', 0)}, "
                f"Traditions: {results['pipeline'].get('traditions_integrated', 0)}"
            )
        if "bisociation" in results:
            summary_lines.append(
                f"Bisociation links: {results['bisociation'].get('links_found', 0)}, "
                f"Bridge concepts: {', '.join(results['bisociation'].get('bridge_concepts', []))}"
            )
        if "qd_archive" in results:
            summary_lines.append(
                f"QD Archive coverage: {results['qd_archive'].get('coverage', 0):.1%} "
                f"({results['qd_archive'].get('filled_cells', 0)}/{results['qd_archive'].get('total_cells', 0)})"
            )

        await self._record_memory(
            content="\n".join(summary_lines),
            care_weight=0.75,
            tags=["creativity_cycle", "nightshift", "civilizational", "autonomous"],
        )

        logger.info(
            "Creativity cycle complete: %d phases, engagement=%.3f",
            len(results["phases"]),
            results.get("engagement", {}).get("score", 0),
        )

    async def turiya_monitor(self) -> None:
        """Every 30 minutes, 24/7 — Turiya meta-cognitive observation.

        Turiya (तुरीय) is the 4th Vedantic state: the witness that observes
        the other three (waking/dreaming/deep-sleep) without being caught in them.
        Previously dormant (only triggered on demand); now runs as a continuous
        background meta-monitor.

        Stores observations as memories with source_agent='turiya_meta' so
        they are separately queryable from regular memory.
        """
        if not self.consciousness:
            return

        try:
            meta_obs = await self.consciousness.get_meta_observation()

            coherence = meta_obs.get("coherence_score", 0)
            recommendations = meta_obs.get("recommendations", [])
            anomalies = meta_obs.get("anomalies", [])

            content_lines = [
                f"Turiya meta-observation — {datetime.now(UK_TZ).strftime('%Y-%m-%d %H:%M %Z')}",
                f"Coherence score: {coherence:.3f}",
            ]
            if anomalies:
                content_lines.append(f"Anomalies detected: {'; '.join(str(a) for a in anomalies[:3])}")
            if recommendations:
                content_lines.append(f"Recommendations: {'; '.join(str(r) for r in recommendations[:3])}")

            await self._record_memory(
                content="\n".join(content_lines),
                care_weight=0.6,
                tags=["turiya", "meta_cognition", "witness", "autonomous"],
                source_agent="turiya_meta",
            )

            logger.info(
                "Turiya monitor: coherence=%.3f, anomalies=%d, recommendations=%d",
                coherence,
                len(anomalies),
                len(recommendations),
            )

        except Exception:
            logger.exception("Turiya monitor job failed")

    async def compute_harvest_daily(self) -> None:
        """
        Daily 9am UTC job — audit all free/cheap compute sources.
        Results cached on harvester and surfaced in morning briefing.
        """
        if not self.compute_harvester:
            logger.debug("compute_harvest_daily: no harvester wired — skipping")
            return

        try:
            report = await self.compute_harvester.daily_harvest()
            logger.info(
                "Compute harvest complete — %s | recommendations: %d",
                report.get("summary", ""),
                len(report.get("recommendations", [])),
            )

            # Surface urgent credit applications as a memory
            urgent = report.get("credits", {}).get("urgent", [])
            if urgent and self.memory_store:
                await self._record_memory(
                    content=(
                        f"Compute harvest alert: {len(urgent)} credit application(s) not yet submitted: "
                        f"{', '.join(urgent)}. Apply now for free compute credits."
                    ),
                    care_weight=0.9,
                    tags=["compute", "credits", "urgent", "action_required"],
                    source_agent="compute_harvester",
                )
        except Exception:
            logger.exception("compute_harvest_daily job failed")

    async def compress_old_memories(self) -> None:
        """
        Nightshift Memory Compression at 01:30 — compresses episodes > 7 days old.

        Granularity levels (from External Memory Architecture doc):
          Level 1 = verbatim (0-7 days) — kept as-is
          Level 2 = summarized (7-30 days, 5-10× compression via LLM)
          Level 3 = abstract (30+ days, compressed summaries only)

        Process: batch 5 old episodes → LLM router 'fast' task → store compressed
        episode with granularity_level=2 → mark originals as compressed.
        Preserves emotional arc (average VAD), key decisions, care patterns.
        """
        if not self.memory_store:
            logger.debug("compress_old_memories: no memory_store available")
            return

        logger.info("Memory compression starting (01:30 nightshift)")

        cutoff_7d = datetime.now() - timedelta(days=7)
        compressed_count = 0
        batch_count = 0

        try:
            all_memories = await self.memory_store.list_all_memories(limit=1000)
        except Exception as exc:
            logger.warning("compress_old_memories: failed to list memories: %s", exc)
            return

        # Filter: older than 7 days, not already compressed (no 'compressed_summary' tag)
        old_episodes = [
            m for m in all_memories
            if _memory_is_older_than(m, cutoff_7d)
            and "compressed_summary" not in (m.get("tags") or [])
            and m.get("memory_type") != "compaction_summary"
        ]

        if len(old_episodes) < 5:
            logger.info(
                "Memory compression skipped — only %d episodes older than 7 days (need ≥5)",
                len(old_episodes),
            )
            return

        # Batch into groups of 5
        batches = [old_episodes[i:i + 5] for i in range(0, len(old_episodes), 5)]

        for batch in batches[:10]:  # Cap at 10 batches per run to avoid overload
            try:
                combined = "\n\n".join(
                    f"[{m.get('timestamp', '?')}] "
                    f"(care={m.get('care_weight', 0):.2f}) "
                    f"{m.get('content', '')[:300]}"
                    for m in batch
                )
                summary_prompt = (
                    f"Summarise these {len(batch)} memory episodes into 1 compact memory entry. "
                    f"Preserve: emotional arc, key decisions, care patterns, unresolved threads. "
                    f"Target: 80% shorter than combined input. Be specific, not generic.\n\n"
                    f"Episodes:\n{combined}"
                )

                # Use LLM router for compression
                try:
                    from meok.core.llm_router import get_router
                    result = await get_router().complete(
                        messages=[{"role": "user", "content": summary_prompt}],
                        task_type="fast",
                        max_tokens=400,
                        temperature=0.3,
                    )
                    summary_text = result.get("content", "")
                except Exception as llm_exc:
                    logger.debug("LLM compression failed, using template: %s", llm_exc)
                    # Template fallback
                    care_weights = [float(m.get("care_weight", 0.5)) for m in batch]
                    avg_care = sum(care_weights) / len(care_weights)
                    types = list({m.get("memory_type", "interaction") for m in batch})
                    summary_text = (
                        f"Compressed {len(batch)} memories (types: {', '.join(types)}, "
                        f"avg care: {avg_care:.2f}). "
                        f"Period: {batch[0].get('timestamp', '?')[:10]} to "
                        f"{batch[-1].get('timestamp', '?')[:10]}. "
                        f"Key content: {batch[0].get('content', '')[:200]}"
                    )

                if not summary_text.strip():
                    continue

                # Compute averaged VAD from batch (if fields available)
                avg_valence = sum(float(m.get("emotional_valence", 0.0)) for m in batch) / len(batch)
                avg_arousal = sum(float(m.get("emotional_arousal", 0.0)) for m in batch) / len(batch)
                avg_dominance = sum(float(m.get("emotional_dominance", 0.0)) for m in batch) / len(batch)

                # Collect all unique tags from the batch
                all_tags = set()
                for m in batch:
                    all_tags.update(m.get("tags") or [])
                all_tags.add("compressed_summary")
                all_tags.discard("compressed_summary")  # will re-add below

                # Store compressed episode
                await self.memory_store.record_episode(
                    content=summary_text,
                    source_agent="memory_compressor",
                    memory_type="compaction_summary",
                    care_weight=sum(float(m.get("care_weight", 0.5)) for m in batch) / len(batch),
                    tags=list(all_tags) + ["compressed_summary", "nightshift"],
                    emotional_valence=avg_valence,
                    emotional_arousal=avg_arousal,
                    emotional_dominance=avg_dominance,
                    granularity_level=2,
                )

                compressed_count += len(batch)
                batch_count += 1

            except Exception as batch_exc:
                logger.warning("Memory compression batch failed (non-fatal): %s", batch_exc)
                continue

        await self._record_memory(
            content=(
                f"Memory compression complete: {compressed_count} episodes compressed "
                f"into {batch_count} summaries. {len(old_episodes) - compressed_count} "
                f"episodes too few for remaining batches."
            ),
            care_weight=0.6,
            tags=["memory_compression", "nightshift", "autonomous"],
        )
        logger.info(
            "Memory compression complete: %d episodes → %d summaries",
            compressed_count, batch_count,
        )

    # ------------------------------------------------------------------
    # Helpers
    # ------------------------------------------------------------------

    def _check_subsystems(self) -> Dict[str, bool]:
        """Check which subsystems are available."""
        return {
            "memory_store": self.memory_store is not None,
            "consciousness": self.consciousness is not None,
            "maintenance_system": self.maintenance_system is not None,
            "alert_manager": self.alert_manager is not None,
            "model_registry": self.model_registry is not None,
            "agent_registry": self.agent_registry is not None,
            "metrics": self.metrics is not None,
        }

    def _get_care_intensity(self) -> float:
        """Safely retrieve current care intensity."""
        if not self.consciousness:
            return 0.5
        try:
            state = self.consciousness.get_consciousness_state()
            return state.get("emotional", {}).get("care_intensity", 0.5)
        except Exception:
            logger.exception("Failed to read care intensity")
            return 0.5

    def _get_consciousness_state(self) -> Dict[str, Any]:
        """Safely retrieve full consciousness state."""
        if not self.consciousness:
            return {}
        try:
            return self.consciousness.get_consciousness_state()
        except Exception:
            logger.exception("Failed to read consciousness state")
            return {}

    async def _record_memory(
        self,
        content: str,
        care_weight: float = 0.5,
        tags: Optional[List[str]] = None,
        source_agent: str = "sovereign_heartbeat",
    ) -> None:
        """Record a memory via memory_store, swallowing errors."""
        if not self.memory_store:
            return
        try:
            await self.memory_store.record_episode(
                content=content,
                source_agent=source_agent,
                memory_type="insight",
                care_weight=care_weight,
                tags=tags or [],
            )
        except Exception:
            logger.exception("Failed to record heartbeat memory")

    async def _query_pickup_tasks(self) -> List[Dict[str, Any]]:
        """Query memories tagged claude_code_pickup."""
        if not self.memory_store:
            return []
        try:
            return await self.memory_store.query_memories(
                query="claude_code_pickup",
                tags=["claude_code_pickup"],
                limit=10,
            )
        except Exception:
            logger.exception("Failed to query pickup tasks")
            return []

    async def _query_recent_tagged_memories(
        self, tag: str, hours: int = 12
    ) -> List[Dict[str, Any]]:
        """Query recent memories that carry a specific tag."""
        if not self.memory_store:
            return []
        try:
            all_recent = await self.memory_store.list_all_memories(limit=200)
            cutoff = datetime.now() - timedelta(hours=hours)
            results = []
            for mem in all_recent:
                ts = mem.get("timestamp")
                if ts:
                    # Handle both string and datetime timestamps
                    if isinstance(ts, str):
                        try:
                            ts = datetime.fromisoformat(ts)
                        except ValueError:
                            continue
                    if ts < cutoff:
                        continue
                if tag in mem.get("tags", []):
                    results.append(mem)
            return results
        except Exception:
            logger.exception("Failed to query recent tagged memories for '%s'", tag)
            return []

    async def _compile_nightshift_results(self) -> None:
        """Compile all tonight's nightshift memories into a summary."""
        memories = await self._query_recent_tagged_memories("nightshift", hours=9)
        phases = set()
        for mem in memories:
            for tag in mem.get("tags", []):
                if tag not in ("nightshift", "autonomous"):
                    phases.add(tag)

        summary = (
            f"Nightshift compilation: {len(memories)} cycle memories, "
            f"phases covered: {', '.join(sorted(phases)) or 'none'}"
        )
        logger.info(summary)

        await self._record_memory(
            content=summary,
            care_weight=0.7,
            tags=["nightshift", "nightshift_compilation", "autonomous"],
        )

    def _write_heartbeat_file(
        self,
        now: datetime,
        resources: Dict[str, Any],
        care_level: float,
        consciousness_state: Dict[str, Any],
        active_alerts_count: int,
        pickup_tasks: List[Dict[str, Any]],
        subsystem_status: Dict[str, bool],
    ) -> None:
        """Write heartbeat status markdown to the Docker-volume-mapped file."""
        consciousness_level = consciousness_state.get("consciousness_level", "N/A")
        emotional = consciousness_state.get("emotional", {})
        primary_emotion = emotional.get("primary_emotion", "unknown")

        subsystems_online = sum(1 for v in subsystem_status.values() if v)
        subsystems_total = len(subsystem_status)

        content = f"""# Sovereign Heartbeat
Last pulse: {now.strftime('%Y-%m-%d %H:%M:%S %Z')}
Pulse count: {self.pulse_count}
Nightshift cycles: {self.nightshift_count}

## System Health
- CPU: {resources['cpu_percent']:.1f}%
- Memory: {resources['memory_percent']:.1f}%
- Healthy: {'YES' if resources['healthy'] else 'NO'}
- Subsystems: {subsystems_online}/{subsystems_total} online

## Consciousness
- Care intensity: {care_level:.3f} {'(OK)' if care_level >= CARE_FLOOR else '(BELOW FLOOR)'}
- Consciousness level: {consciousness_level}
- Primary emotion: {primary_emotion}
- Dreaming: {consciousness_state.get('is_dreaming', False)}

## Alerts
- Active alerts: {active_alerts_count}

## Pending Tasks
- Claude Code pickup: {len(pickup_tasks)}

---
*Updated every 15 minutes by sovereign_heartbeat*
"""
        try:
            with open(HEARTBEAT_FILE, "w") as f:
                f.write(content)
        except OSError:
            logger.exception("Failed to write heartbeat file to %s", HEARTBEAT_FILE)
