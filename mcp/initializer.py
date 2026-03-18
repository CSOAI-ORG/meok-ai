"""
System initializer for the MEOK MCP Server.
Sets up all services on the ServiceState instance.
"""

import asyncio
import logging
import os
from typing import Optional

from meok.mcp.state import ServiceState
from meok.config.settings import get_settings

logger = logging.getLogger(__name__)


async def initialize_system(state: ServiceState):
    """Initialize all subsystems onto the given ServiceState."""

    settings = get_settings()

    POSTGRES_DSN = settings.database.postgres_dsn
    WEAVIATE_URL = settings.database.weaviate_url
    KIMI_API_KEY = settings.api_keys.kimi_api_key.get_secret_value() if settings.api_keys.kimi_api_key else ""

    # ── Core imports (all from meok.* packages) ────────────────────
    from meok.neural import create_default_registry
    from meok.monitoring.alert_system import AlertManager, AlertSeverity, AlertChannel, console_alert_handler
    from meok.monitoring.audit_logger import AuditLogger
    from meok.monitoring.metrics_collector import MetricsCollector
    from meok.memory.enhanced_memory import EnhancedMemoryStore
    from meok.agents.registry import AgentRegistry, TaskDelegator, AgentCouncil, AgentCapability
    from meok.core.consciousness import ConsciousnessOrchestrator
    from meok.core.maintenance import AutonomousMaintenanceSystem

    # Store shared type references on state
    state.AlertSeverity = AlertSeverity
    state.AlertChannel = AlertChannel
    state.AgentCapability = AgentCapability

    logger.info("Initializing MEOK MCP Server...")

    # ── Neural models ─────────────────────────────────────────────
    logger.info("  Loading neural models...")
    model_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "neural", "models")
    state.model_registry = create_default_registry(model_dir=model_dir)

    for name, model in state.model_registry.models.items():
        if not model.load_model():
            logger.info(f"    Training {name}...")
            model.train_model()
            model.save_model()
        else:
            logger.info(f"    Loaded {name}")

    # ── Memory store ──────────────────────────────────────────────
    logger.info("  Initializing memory store...")
    state.memory_store = EnhancedMemoryStore(postgres_dsn=POSTGRES_DSN, weaviate_url=WEAVIATE_URL)
    try:
        await state.memory_store.initialize()
        logger.info("    Memory store ready")
    except Exception as e:
        logger.warning(f"    Memory store initialization failed (will retry): {e}")

    # ── Monitoring ────────────────────────────────────────────────
    logger.info("  Initializing monitoring...")
    state.audit_logger = AuditLogger(postgres_dsn=POSTGRES_DSN)
    try:
        await state.audit_logger.initialize()
        logger.info("    Audit logger ready")
    except Exception as e:
        logger.warning(f"    Audit logger initialization failed: {e}")

    state.metrics = MetricsCollector()
    await state.metrics.start_collection()
    logger.info("    Metrics collection started")

    state.alert_manager = AlertManager()
    state.alert_manager.add_handler(AlertChannel.CONSOLE, console_alert_handler)
    state.alert_manager.setup_default_rules()
    logger.info("    Alert manager ready")

    # ── Multi-agent system ────────────────────────────────────────
    logger.info("  Initializing multi-agent system...")
    state.agent_registry = AgentRegistry(postgres_dsn=POSTGRES_DSN)
    for attempt in range(3):
        try:
            await state.agent_registry.initialize()
            logger.info("    Agent registry ready (%d agents loaded)", len(state.agent_registry.agents))
            break
        except Exception as e:
            if attempt < 2:
                logger.info(f"    Agent registry retry {attempt+1}/3 (waiting for Postgres)...")
                await asyncio.sleep(3)
            else:
                logger.warning(f"    Agent registry initialization failed after 3 attempts: {e}")

    state.task_delegator = TaskDelegator(state.agent_registry)
    state.agent_council = AgentCouncil(state.agent_registry)
    logger.info("    Task delegation ready")

    # ── Consciousness ─────────────────────────────────────────────
    logger.info("  Initializing consciousness module...")
    state.consciousness = ConsciousnessOrchestrator(state.memory_store)
    try:
        await state.consciousness.initialize()
        logger.info("    Consciousness module ready")
    except Exception as e:
        logger.warning(f"    Consciousness initialization failed (will retry): {e}")

    # ── Autonomous maintenance ────────────────────────────────────
    logger.info("  Initializing autonomous maintenance...")
    state.maintenance_system = AutonomousMaintenanceSystem(state.memory_store, state.consciousness)
    await state.maintenance_system.start()
    logger.info("    Autonomous maintenance running (care floor: 0.3)")

    # ── Project Heartbeat ─────────────────────────────────────────
    try:
        from meok.core.heartbeat import SovereignHeartbeat
        state.HEARTBEAT_AVAILABLE = True
    except ImportError:
        state.HEARTBEAT_AVAILABLE = False
        SovereignHeartbeat = None

    try:
        from meok.core.research_agent import AutonomousResearchAgent
        state.RESEARCH_AVAILABLE = True
    except ImportError:
        state.RESEARCH_AVAILABLE = False
        AutonomousResearchAgent = None

    try:
        from meok.core.security_hardening import SecurityHardeningEngine
        state.SECURITY_HARDENING_AVAILABLE = True
    except ImportError:
        state.SECURITY_HARDENING_AVAILABLE = False
        SecurityHardeningEngine = None

    try:
        from meok.core.continual_learning import ContinualLearningTrainer
        state.CONTINUAL_LEARNING_AVAILABLE = True
    except ImportError:
        state.CONTINUAL_LEARNING_AVAILABLE = False
        ContinualLearningTrainer = None

    if state.HEARTBEAT_AVAILABLE and settings.heartbeat.enabled:
        logger.info("  Initializing Project Heartbeat...")
        try:
            state.heartbeat = SovereignHeartbeat(
                memory_store=state.memory_store,
                consciousness=state.consciousness,
                maintenance_system=state.maintenance_system,
                alert_manager=state.alert_manager,
                model_registry=state.model_registry,
                agent_registry=state.agent_registry,
                metrics=state.metrics,
            )
            state.heartbeat.start()
            logger.info("    Heartbeat scheduler running — Sovereign is alive 24/7")
        except Exception as e:
            logger.warning(f"    Heartbeat initialization failed: {e}")

    if state.RESEARCH_AVAILABLE:
        try:
            state.research_agent = AutonomousResearchAgent(state.memory_store)
            logger.info("    Research agent ready")
        except Exception as e:
            logger.warning(f"    Research agent init failed: {e}")

    if state.SECURITY_HARDENING_AVAILABLE:
        try:
            state.security_engine = SecurityHardeningEngine(
                model_registry=state.model_registry,
                agent_registry=state.agent_registry,
                alert_manager=state.alert_manager,
                memory_store=state.memory_store,
                audit_logger=state.audit_logger,
            )
            logger.info("    Security hardening engine ready")
        except Exception as e:
            logger.warning(f"    Security hardening init failed: {e}")

    if state.CONTINUAL_LEARNING_AVAILABLE:
        try:
            state.continual_trainer = ContinualLearningTrainer(state.model_registry, state.memory_store)
            logger.info("    Continual learning trainer ready")
        except Exception as e:
            logger.warning(f"    Continual learning init failed: {e}")

    # ── Civilizational Creativity Engine ──────────────────────────
    try:
        from meok.neural import (
            CreativityAssessmentNN, CreativityTrainingPipeline,
            kolmogorov_novelty, CORPUS, get_corpus_stats, ingest_corpus,
        )
        state.CREATIVITY_ENGINE_AVAILABLE = True
        state.kolmogorov_novelty = kolmogorov_novelty
        state.ingest_corpus = ingest_corpus
    except ImportError:
        state.CREATIVITY_ENGINE_AVAILABLE = False
        CreativityTrainingPipeline = None
        ingest_corpus = None

    if state.CREATIVITY_ENGINE_AVAILABLE:
        logger.info("  Initializing Creativity Engine...")
        try:
            state.creativity_pipeline = CreativityTrainingPipeline(
                model_registry=state.model_registry,
                memory_store=state.memory_store,
                ewc_regularizer=state.continual_trainer,
            )
            creativity_result = await state.creativity_pipeline.train_creativity_model()
            logger.info(f"    CreativityAssessmentNN trained (MSE: {creativity_result.get('metrics', {}).get('mse', '?')})")

            corpus_result = await ingest_corpus(state.memory_store)
            if corpus_result.get("status") == "complete":
                logger.info(f"    Civilizational corpus ingested: {corpus_result.get('traditions_ingested', 0)} traditions")
            elif corpus_result.get("status") == "already_ingested":
                logger.info("    Civilizational corpus already in memory")
            else:
                logger.info(f"    Corpus ingestion: {corpus_result.get('status', 'unknown')}")
        except Exception as e:
            logger.warning(f"    Creativity engine init failed: {e}")

    # ── Tier 2: Cross-Domain, Stochastic Resonance, QD Archive ───
    try:
        from meok.neural.cross_domain_linker import CrossDomainLinker
        from meok.neural.stochastic_resonance import StochasticResonanceEngine, apply_stochastic_resonance
        from meok.neural.quality_diversity import QualityDiversityArchive
        state.TIER2_CREATIVITY_AVAILABLE = True
        state.apply_stochastic_resonance = apply_stochastic_resonance
    except ImportError:
        state.TIER2_CREATIVITY_AVAILABLE = False
        CrossDomainLinker = None
        StochasticResonanceEngine = None
        QualityDiversityArchive = None

    if state.TIER2_CREATIVITY_AVAILABLE:
        logger.info("  Initializing Tier 2 Creativity Systems...")
        try:
            state.cross_domain_linker = CrossDomainLinker()
            state.cross_domain_linker.compute_distances()
            state.cross_domain_linker.find_bisociations(top_k=30)
            stats = state.cross_domain_linker.get_stats()
            logger.info(f"    CrossDomainLinker: {stats.get('total_links', 0)} bisociation links found")

            state.resonance_engine = StochasticResonanceEngine(n_features=12)
            logger.info(f"    StochasticResonance: sigma={state.resonance_engine.get_stats()['mean_sigma']}")

            state.qd_archive = QualityDiversityArchive()
            logger.info(f"    QD Archive: {state.qd_archive.total_cells} cells ({state.qd_archive.grid_shape})")
        except Exception as e:
            logger.warning(f"    Tier 2 creativity init failed: {e}")

    # ── Kimi Agent ────────────────────────────────────────────────
    try:
        from meok.neural.kimi_agent import KimiAgent
        state.KIMI_AVAILABLE = True
    except ImportError:
        state.KIMI_AVAILABLE = False
        KimiAgent = None

    if KIMI_API_KEY and state.KIMI_AVAILABLE:
        logger.info("  Initializing Kimi Agent...")
        try:
            state.kimi_agent = KimiAgent(api_key=KIMI_API_KEY)
            logger.info(f"    Kimi connected (model: {state.kimi_agent.default_model})")
            if state.agent_registry:
                try:
                    await state.agent_registry.register_agent(
                        name="Kimi",
                        description="Moonshot AI code agent — frontend builds, TypeScript, React",
                        capabilities=[AgentCapability.CODE_EXECUTION, AgentCapability.CREATIVE, AgentCapability.ANALYSIS],
                        trust_level=0.7,
                        metadata={"type": "external_api", "provider": "moonshot", "model": "moonshot-v1-32k"},
                    )
                    logger.info("    Kimi registered in agent registry")
                except Exception as e:
                    logger.warning(f"    Kimi registry failed (non-fatal): {e}")
        except Exception as e:
            logger.warning(f"    Kimi init failed: {e}")

    # ── Orion-Riri-Hourman Agent ──────────────────────────────────
    try:
        from meok.agents.orion_riri_hourman import HunterBuilderAgent
        from meok.agents.orion_riri_hourman.agent import get_agent as get_orion_agent
        state.ORION_AGENT_AVAILABLE = True
        state.get_orion_agent = get_orion_agent
    except ImportError:
        state.ORION_AGENT_AVAILABLE = False

    # ── Multi-Agent Coordination Hub ──────────────────────────────
    try:
        from meok.agents.coordination_hub import get_hub as get_coordination_hub
        state.COORDINATION_AVAILABLE = True
        state.get_coordination_hub = get_coordination_hub
    except ImportError:
        state.COORDINATION_AVAILABLE = False

    logger.info("MEOK MCP Server initialized successfully!")
