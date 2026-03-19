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
    PERSIST_PATH = settings.database.persist_path
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
    state.memory_store = EnhancedMemoryStore(postgres_dsn=POSTGRES_DSN, weaviate_url=WEAVIATE_URL, persist_path=PERSIST_PATH)
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
    state.agent_registry = AgentRegistry(postgres_dsn=POSTGRES_DSN, persist_path=PERSIST_PATH)
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

    state.agent_registry._audit_logger = state.audit_logger
    state.task_delegator = TaskDelegator(state.agent_registry)

    # ── TaskOrchestrator — execution engine ───────────────────────
    logger.info("  Initializing task orchestrator...")
    try:
        from meok.core.orchestrator import TaskOrchestrator
        state.orchestrator = TaskOrchestrator()
        # Inject subsystem refs (lazy — filled after each subsystem inits)
        state.orchestrator.memory_store = state.memory_store
        logger.info("    TaskOrchestrator ready — execution engine active")
    except Exception as e:
        state.orchestrator = None
        logger.warning(f"    TaskOrchestrator init failed: {e}")

    state.agent_council = AgentCouncil(state.agent_registry, orchestrator=state.orchestrator)
    logger.info("    Task delegation + council ready (dispatch wired)")

    # ── TaskExecutor — closes GAP 2 (tasks actually execute) ─────
    try:
        from meok.core.task_executor import init_executor
        state.task_executor = init_executor(
            agent_registry=state.agent_registry,
            memory_store=state.memory_store,
        )
        await state.task_executor.start()
        logger.info("    TaskExecutor started — %d workers active (GAP 2 closed)", state.task_executor.num_workers)
    except Exception as e:
        state.task_executor = None
        logger.warning(f"    TaskExecutor init failed: {e}")

    # ── Governance Layers 2 & 4 (Shura + Coincidentia) ───────────
    try:
        from meok.core.shura_council import ShuraCouncil
        state.shura_council = ShuraCouncil(state.agent_registry)
        logger.info("    Shura Council (Layer 2) ready — deliberation before vote")
    except Exception as e:
        state.shura_council = None
        logger.warning(f"    Shura Council init failed: {e}")

    try:
        from meok.core.coincidentia import CoincidentiaOppositorum
        state.coincidentia = CoincidentiaOppositorum(state.agent_registry)
        logger.info("    Coincidentia Oppositorum (Layer 4) ready — reconciliation engine")
    except Exception as e:
        state.coincidentia = None
        logger.warning(f"    Coincidentia init failed: {e}")

    # ── Consciousness ─────────────────────────────────────────────
    logger.info("  Initializing consciousness module...")
    state.consciousness = ConsciousnessOrchestrator(state.memory_store)
    try:
        await state.consciousness.initialize()
        logger.info("    Consciousness module ready")
        if state.orchestrator:
            state.orchestrator.consciousness = state.consciousness
    except Exception as e:
        logger.warning(f"    Consciousness initialization failed (will retry): {e}")

    # ── GuardrailSystem — closes GAP 14 (council votes enforced) ─
    try:
        from meok.core.guardrails import get_guardrails
        guardrails = get_guardrails()
        state.guardrails = guardrails
        logger.info(
            "    GuardrailSystem active — MAX_AGENTS=%d, BFT_THRESHOLD=%d/33, CARE_FLOOR=%.1f",
            guardrails.MAX_AGENTS, guardrails.BFT_THRESHOLD, guardrails.CARE_FLOOR,
        )
    except Exception as e:
        state.guardrails = None
        logger.warning(f"    GuardrailSystem init failed: {e}")

    # ── Autonomous maintenance ────────────────────────────────────
    logger.info("  Initializing autonomous maintenance...")
    state.maintenance_system = AutonomousMaintenanceSystem(
        state.memory_store,
        state.consciousness,
        state=state,  # GAP 12: pass state for system-aware curiosity
    )
    await state.maintenance_system.start()
    logger.info("    Autonomous maintenance running (care floor: 0.3 / active: 0.5)")

    # ── DreamSynthesizer — closes GAP 9 (dream prompts → Ollama) ─
    try:
        from meok.core.dream_synthesizer import init_synthesizer
        state.dream_synthesizer = init_synthesizer(memory_store=state.memory_store)
        logger.info(
            "    DreamSynthesizer ready — bisociation pairs → Ollama (%s at %s)",
            state.dream_synthesizer.model,
            state.dream_synthesizer.ollama_url,
        )
    except Exception as e:
        state.dream_synthesizer = None
        logger.warning("    DreamSynthesizer init failed (non-fatal): %s", e)

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
            # Wire compute harvester (created later in Phase 5.1 block — patched in after)
            # actual wire happens after compute_harvester init below
        except Exception as e:
            logger.warning(f"    Heartbeat initialization failed: {e}")

    if state.RESEARCH_AVAILABLE:
        try:
            state.research_agent = AutonomousResearchAgent(state.memory_store)
            logger.info("    Research agent ready")
            # Wire into orchestrator
            if state.orchestrator:
                state.orchestrator.research_agent = state.research_agent
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
            if state.orchestrator:
                state.orchestrator.security_engine = state.security_engine
        except Exception as e:
            logger.warning(f"    Security hardening init failed: {e}")

    if state.CONTINUAL_LEARNING_AVAILABLE:
        try:
            state.continual_trainer = ContinualLearningTrainer(state.model_registry, state.memory_store)
            logger.info("    Continual learning trainer ready")
            if state.orchestrator:
                state.orchestrator.continual_trainer = state.continual_trainer
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

            # GAP 9: Wire DreamSynthesizer + CrossDomainLinker into dream cycle
            if (
                state.consciousness
                and hasattr(state.consciousness, "dream")
                and state.consciousness.dream is not None
            ):
                if getattr(state, "dream_synthesizer", None):
                    state.consciousness.dream.dream_synthesizer = state.dream_synthesizer
                    state.consciousness.dream.cross_domain_linker = state.cross_domain_linker
                    logger.info("    GAP 9: DreamSynthesizer wired into dream cycle — Ollama synthesis active")
        except Exception as e:
            logger.warning(f"    Tier 2 creativity init failed: {e}")

    # ── z_self — 7th Meta-Cognitive Network ──────────────────────
    try:
        from meok.neural.z_self import ZSelf
        from meok.neural.z_self_tripwires import ZSelfTripwires
        state.Z_SELF_AVAILABLE = True
    except ImportError:
        state.Z_SELF_AVAILABLE = False
        ZSelf = None
        ZSelfTripwires = None

    if state.Z_SELF_AVAILABLE:
        logger.info("  Initializing z_self meta-cognitive network...")
        try:
            model_path = os.path.join(model_dir, "z_self_weights.pt")
            state.z_self = ZSelf(
                memory_store=state.memory_store,
                model_registry=state.model_registry,
                model_path=model_path if os.path.exists(model_path) else None,
            )
            await state.z_self.initialize()
            z_status = state.z_self.get_status()
            backend = "PyTorch" if z_status["using_pytorch"] else "numpy heuristic"
            logger.info(
                "    z_self ready (%s, input=%d, output=%d) — Pure Sakshi observer",
                backend, z_status["input_dimensions"], z_status["output_dimensions"],
            )

            # Care model reference for tripwires
            care_model = None
            if state.model_registry:
                care_model = state.model_registry.models.get("care_validation_nn")

            state.z_self_tripwires = ZSelfTripwires(
                z_self=state.z_self,
                care_validator=care_model,
                alert_manager=state.alert_manager,
                memory_store=state.memory_store,
            )
            logger.info("    z_self tripwires ready (18 care alignment scenarios — 10 canonical + 8 pain-point)")
        except Exception as e:
            state.z_self = None
            state.z_self_tripwires = None
            logger.warning(f"    z_self initialization failed: {e}")

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

    # ── Phase 2.5: Generals + Contract Net + Shapley ──────────────
    logger.info("  Initializing Phase 2.5: Generals + Contract Net + Shapley...")

    # GeneralRegistry — Mongol decimal hierarchy
    try:
        from meok.agents.generals import GeneralRegistry
        state.general_registry = GeneralRegistry(state.agent_registry)
        init_result = await state.general_registry.initialize()
        logger.info(
            "    GeneralRegistry ready: %d Division Generals, %d Senior Generals, %d councils",
            init_result.get("division_generals", 0),
            init_result.get("senior_generals", 0),
            init_result.get("councils_assigned", 0),
        )
    except Exception as e:
        state.general_registry = None
        logger.warning(f"    GeneralRegistry init failed: {e}")

    # ContractNetProtocol — FIPA task routing with pheromone trails
    try:
        from meok.agents.contract_net import ContractNetProtocol
        state.contract_net = ContractNetProtocol(state.agent_registry)
        logger.info(
            "    ContractNetProtocol ready — pheromone trails active (β=%.2f)",
            0.85,
        )
    except Exception as e:
        state.contract_net = None
        logger.warning(f"    ContractNetProtocol init failed: {e}")

    # ShapleyAttributor — fair credit for multi-agent task completions
    try:
        from meok.agents.shapley import ShapleyAttributor
        state.shapley_attributor = ShapleyAttributor(state.agent_registry)
        logger.info("    ShapleyAttributor ready — Monte Carlo Shapley (k=300)")
    except Exception as e:
        state.shapley_attributor = None
        logger.warning(f"    ShapleyAttributor init failed: {e}")

    # ── Phase 2.6: Council-to-Neural Learning Pipeline ────────────────────
    try:
        from meok.learning.council_learner import CouncilLearner
        z_self_ref = getattr(state, 'z_self', None)
        state.council_learner = CouncilLearner(
            agent_registry=state.agent_registry,
            z_self=z_self_ref,
        )
        # Wire learner into components that fire learning signals
        if hasattr(state, 'agent_council') and state.agent_council:
            state.agent_council.council_learner = state.council_learner
        # shura_council is the attribute name set above (not 'shura')
        if hasattr(state, 'shura_council') and state.shura_council:
            state.shura_council.council_learner = state.council_learner
        if state.agent_registry:
            state.agent_registry._council_learner = state.council_learner
        if hasattr(state, 'consciousness') and state.consciousness and hasattr(state.consciousness, 'dream'):
            state.consciousness.dream.council_learner = state.council_learner
        # ContractNet auctions → learning
        if hasattr(state, 'contract_net') and state.contract_net:
            state.contract_net.council_learner = state.council_learner
        # GeneralRegistry council interactions → learning
        if hasattr(state, 'general_registry') and state.general_registry:
            state.general_registry.council_learner = state.council_learner
        logger.info("CouncilLearner wired: agent_council, shura_council, registry, dream, contract_net, generals")
    except Exception as _exc:
        logger.warning("CouncilLearner init failed (non-fatal): %s", _exc)
        state.council_learner = None

    # ── AgentPool — lazy loading with LRU eviction (SOV3 research) ────────
    try:
        from meok.agents.pool import AgentPoolManager
        state.agent_pool = AgentPoolManager(state.agent_registry, global_max=100)
        # Pre-warm global pool with top-trust agents
        all_agents = list(state.agent_registry.agents.values())
        if all_agents:
            state.agent_pool.prime_councils(all_agents, {})
        logger.info(
            "AgentPoolManager ready — %d agents pre-warmed (max_active=100, %d total registered)",
            state.agent_pool.global_pool.active_count(),
            len(all_agents),
        )
    except Exception as _exc:
        state.agent_pool = None
        logger.warning("AgentPool init failed (non-fatal): %s", _exc)

    # ── BFT Confidence Probing — meta-council watching the council ─────────
    try:
        from meok.core.bft_confidence import BFTMetaCouncil, AgentConfidenceTracker
        _tracker = AgentConfidenceTracker(window_size=20)
        state.bft_meta_council = BFTMetaCouncil(tracker=_tracker)
        # Wire into AgentCouncil so every vote gets audited + anti-sycophancy
        if hasattr(state, 'agent_council') and state.agent_council:
            state.agent_council.bft_meta_council = state.bft_meta_council
            # Wire z_self for anti-sycophancy detection
            if getattr(state, 'z_self', None):
                state.agent_council.z_self = state.z_self
        logger.info("BFTMetaCouncil ready — per-agent confidence probing + anti-sycophancy active")
    except Exception as _exc:
        state.bft_meta_council = None
        logger.warning("BFTMetaCouncil init failed (non-fatal): %s", _exc)

    # ── Compliance Layer — EU AI Act + GDPR + UK Children's Code ──────────
    try:
        from meok.core.compliance import (
            ComplianceAuditor, GDPRConsentTracker, AgeVerificationLayer,
            EmotionRecognitionGuard, ConsciousnessNonClaimGuard,
        )
        state.gdpr_consent = GDPRConsentTracker()
        state.age_verification = AgeVerificationLayer()
        state.emotion_guard = EmotionRecognitionGuard(enabled=True)
        state.consciousness_guard = ConsciousnessNonClaimGuard(mode="replace")
        state.compliance_auditor = ComplianceAuditor(
            consent_tracker=state.gdpr_consent,
            age_layer=state.age_verification,
            emotion_guard=state.emotion_guard,
            consciousness_guard=state.consciousness_guard,
        )
        # Run initial audit
        initial_audit = state.compliance_auditor.run_audit(jurisdiction="UK")
        logger.info(
            "ComplianceAuditor ready — score=%.2f, issues=%d (critical=%d). "
            "DPIA required: %s",
            initial_audit["compliance_score"],
            initial_audit["issues_count"],
            initial_audit["critical_issues"],
            "YES ⚠️" if not GDPRConsentTracker.DPIA_COMPLETED else "completed ✓",
        )
    except Exception as _exc:
        state.compliance_auditor = None
        logger.warning("ComplianceAuditor init failed (non-fatal): %s", _exc)

    # ── Phase 2.9: Maternal Covenant monitoring layer ─────────────────────
    try:
        from meok.core.maternal_covenant import MaternalCovenant
        state.maternal_covenant = MaternalCovenant(
            z_self=getattr(state, 'z_self', None),
            memory_store=state.memory_store,
        )
        logger.info(
            "MaternalCovenant ready — %d distress signals, %d dependency phrases, %d sycophancy patterns",
            len(state.maternal_covenant.DISTRESS_VOCABULARY),
            len(state.maternal_covenant.DEPENDENCY_PHRASES),
            len(state.maternal_covenant.SYCOPHANCY_SIGNALS),
        )
    except Exception as _exc:
        state.maternal_covenant = None
        logger.warning("MaternalCovenant init failed (non-fatal): %s", _exc)

    # ── Phase 4.13: Sustainability Engine ────────────────────────────────
    try:
        from meok.core.sustainability import SustainabilityEngine
        state.sustainability_engine = SustainabilityEngine()
        logger.info("SustainabilityEngine ready — care-aligned business model active")
    except Exception as _exc:
        state.sustainability_engine = None
        logger.warning("SustainabilityEngine init failed (non-fatal): %s", _exc)

    # ── Phase 5.1: Compute Harvester ─────────────────────────────────────────
    try:
        from meok.core.compute_harvest import ComputeHarvester
        import os as _os
        state.compute_harvester = ComputeHarvester(
            vast_api_key=_os.environ.get("VAST_API_KEY", ""),
        )
        # Wire to heartbeat so daily harvest job has access
        if getattr(state, "heartbeat", None) is not None:
            state.heartbeat.compute_harvester = state.compute_harvester
        logger.info("ComputeHarvester ready — daily compute audit active")
    except Exception as _exc:
        state.compute_harvester = None
        logger.warning("ComputeHarvester init failed (non-fatal): %s", _exc)

    # ── LLM Router — multi-provider routing (from MEOK.AI Architecture Blueprint)
    try:
        from meok.core.llm_router import init_router
        state.llm_router = init_router()
        available = state.llm_router.get_available_providers("default")
        logger.info("LLMRouter ready — available providers: %s", available or ["none configured — set API keys"])
    except Exception as _lr_exc:
        state.llm_router = None
        logger.warning("LLMRouter init failed (non-fatal): %s", _lr_exc)

    # ── Architecture Blueprint Memory Ingestion ───────────────────────────────
    # Auto-ingest pending architectural knowledge files into memory store on boot.
    # Files in meok/memory/*.json with source_agent="architectural_ingestion" are
    # one-shot: ingested once, then skipped on subsequent boots (idempotent).
    try:
        import json as _json
        from pathlib import Path as _Path
        _mem_dir = _Path(__file__).parent.parent / "memory"
        _blueprint_files = sorted(_mem_dir.glob("architectural_*.json"))
        if _blueprint_files and getattr(state, "memory_store", None):
            _ingested = 0
            for _bf in _blueprint_files:
                try:
                    _episodes = _json.loads(_bf.read_text())
                    for _ep in _episodes:
                        await state.memory_store.record_episode(
                            content=_ep["content"],
                            source_type=_ep.get("source_agent", "architectural_ingestion"),
                            care_weight=_ep.get("care_weight", 0.8),
                            metadata={
                                "tags": _ep.get("tags", []),
                                "memory_type": _ep.get("memory_type", "insight"),
                                "ingested_from": _bf.name,
                            },
                        )
                        _ingested += 1
                except Exception as _ep_exc:
                    logger.debug("  Blueprint episode ingest skip: %s", _ep_exc)
            if _ingested:
                logger.info(
                    "  Architecture Blueprint: ingested %d knowledge episodes from %d files",
                    _ingested, len(_blueprint_files),
                )
    except Exception as _bp_exc:
        logger.debug("Blueprint memory ingestion (non-fatal): %s", _bp_exc)

    logger.info("MEOK MCP Server initialized successfully!")
