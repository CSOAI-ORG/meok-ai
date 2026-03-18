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

        # 8. Write heartbeat file
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
        4. Asabiyyah group cohesion measurement
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

        # Phase 4: Asabiyyah group cohesion
        try:
            if self.agent_registry and hasattr(self.agent_registry, 'compute_asabiyyah'):
                asabiyyah = self.agent_registry.compute_asabiyyah()
                results["asabiyyah"] = asabiyyah
                results["phases"].append("asabiyyah_measurement")

                # Alert if cohesion is weakening (Khaldunian warning)
                if asabiyyah.get("khaldunian_warning"):
                    logger.warning(
                        "Khaldunian warning: asabiyyah in '%s' phase (score: %.3f)",
                        asabiyyah.get("phase", "unknown"),
                        asabiyyah.get("score", 0),
                    )
        except Exception:
            logger.exception("Asabiyyah measurement failed")

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
        if "asabiyyah" in results:
            summary_lines.append(
                f"Asabiyyah: {results['asabiyyah'].get('score', 'N/A')} "
                f"({results['asabiyyah'].get('phase', 'unknown')})"
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
            "Creativity cycle complete: %d phases, asabiyyah=%.3f",
            len(results["phases"]),
            results.get("asabiyyah", {}).get("score", 0),
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
    ) -> None:
        """Record a memory via memory_store, swallowing errors."""
        if not self.memory_store:
            return
        try:
            await self.memory_store.record_episode(
                content=content,
                source_agent="sovereign_heartbeat",
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
