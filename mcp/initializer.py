"""
System initializer for the MEOK MCP Server.
Sets up all services on the ServiceState instance.
"""

import os
import sys
from typing import Optional

from meok.mcp.state import ServiceState


async def initialize_system(state: ServiceState):
    """Initialize all subsystems onto the given ServiceState."""

    # ── Module paths ──────────────────────────────────────────────
    # Try to import from meok.config.settings first, fall back to env / defaults
    try:
        from meok.config.settings import (
            SOVEREIGN_TEMPLE_PATH,
            SOVEREIGN_TEMPLE_LIVE_PATH,
            POSTGRES_DSN,
            WEAVIATE_URL,
            KIMI_API_KEY,
        )
    except ImportError:
        SOVEREIGN_TEMPLE_PATH = os.environ.get(
            "SOVEREIGN_TEMPLE_PATH",
            os.path.expanduser("~/clawd/sovereign-temple"),
        )
        SOVEREIGN_TEMPLE_LIVE_PATH = os.environ.get(
            "SOVEREIGN_TEMPLE_LIVE_PATH",
            os.path.expanduser("~/clawd/sovereign-temple-live"),
        )
        POSTGRES_DSN = os.environ.get(
            "POSTGRES_DSN",
            "postgresql://sovereign:sovereign@postgres:5432/sovereign_memory",
        )
        WEAVIATE_URL = os.environ.get("WEAVIATE_URL", "http://weaviate:8080")
        KIMI_API_KEY = os.environ.get("KIMI_API_KEY", "")

    # Add module paths
    for subdir in ["neural_core", "rag_core", "monitoring", "multi_agent", "consciousness"]:
        path = os.path.join(SOVEREIGN_TEMPLE_PATH, subdir)
        if path not in sys.path:
            sys.path.insert(0, path)

    agents_path = os.path.join(SOVEREIGN_TEMPLE_LIVE_PATH, "agents")
    if agents_path not in sys.path:
        sys.path.insert(0, agents_path)

    coord_path = os.path.join(SOVEREIGN_TEMPLE_LIVE_PATH, "coordination")
    if coord_path not in sys.path:
        sys.path.insert(0, coord_path)

    # Also add the sovereign-temple root itself for direct imports
    if SOVEREIGN_TEMPLE_PATH not in sys.path:
        sys.path.insert(0, SOVEREIGN_TEMPLE_PATH)

    # ── Core imports ──────────────────────────────────────────────
    from neural_core import create_default_registry
    from alert_system import AlertManager, AlertSeverity, AlertChannel, console_alert_handler
    from audit_logger import AuditLogger
    from metrics_collector import MetricsCollector
    from enhanced_memory import EnhancedMemoryStore
    from agent_registry import AgentRegistry, TaskDelegator, AgentCouncil, AgentCapability
    from emotional_state import ConsciousnessOrchestrator
    from autonomous_maintenance import AutonomousMaintenanceSystem

    # Store shared type references on state
    state.AlertSeverity = AlertSeverity
    state.AlertChannel = AlertChannel
    state.AgentCapability = AgentCapability

    print("🚀 Initializing MEOK MCP Server...")

    # ── Neural models ─────────────────────────────────────────────
    print("  📊 Loading neural models...")
    state.model_registry = create_default_registry(model_dir="models")

    for name, model in state.model_registry.models.items():
        if not model.load_model():
            print(f"    Training {name}...")
            model.train_model()
            model.save_model()
        else:
            print(f"    Loaded {name}")

    # ── Memory store ──────────────────────────────────────────────
    print("  💾 Initializing memory store...")
    state.memory_store = EnhancedMemoryStore(postgres_dsn=POSTGRES_DSN, weaviate_url=WEAVIATE_URL)
    try:
        await state.memory_store.initialize()
        print("    Memory store ready")
    except Exception as e:
        print(f"    Memory store initialization failed (will retry): {e}")

    # ── Monitoring ────────────────────────────────────────────────
    print("  📡 Initializing monitoring...")
    # Use localhost DSN for audit logger (matches original)
    audit_dsn = os.environ.get(
        "POSTGRES_DSN",
        "postgresql://sovereign:sovereign@localhost:5432/sovereign_memory",
    )
    state.audit_logger = AuditLogger(postgres_dsn=audit_dsn)
    try:
        await state.audit_logger.initialize()
        print("    Audit logger ready")
    except Exception as e:
        print(f"    Audit logger initialization failed: {e}")

    state.metrics = MetricsCollector()
    await state.metrics.start_collection()
    print("    Metrics collection started")

    state.alert_manager = AlertManager()
    state.alert_manager.add_handler(AlertChannel.CONSOLE, console_alert_handler)
    state.alert_manager.setup_default_rules()
    print("    Alert manager ready")

    # ── Multi-agent system ────────────────────────────────────────
    print("  🤖 Initializing multi-agent system...")
    state.agent_registry = AgentRegistry(postgres_dsn=audit_dsn)
    try:
        await state.agent_registry.initialize()
        print("    Agent registry ready")
    except Exception as e:
        print(f"    Agent registry initialization failed: {e}")

    state.task_delegator = TaskDelegator(state.agent_registry)
    state.agent_council = AgentCouncil(state.agent_registry)
    print("    Task delegation ready")

    # ── Consciousness ─────────────────────────────────────────────
    print("  🧠 Initializing consciousness module...")
    state.consciousness = ConsciousnessOrchestrator(state.memory_store)
    await state.consciousness.initialize()
    print("    Consciousness module ready")

    # ── Autonomous maintenance ────────────────────────────────────
    print("  🔄 Initializing autonomous maintenance...")
    state.maintenance_system = AutonomousMaintenanceSystem(state.memory_store, state.consciousness)
    await state.maintenance_system.start()
    print("    Autonomous maintenance running (care floor: 0.3)")

    # ── Project Heartbeat ─────────────────────────────────────────
    try:
        from sovereign_heartbeat import SovereignHeartbeat
        state.HEARTBEAT_AVAILABLE = True
    except ImportError:
        state.HEARTBEAT_AVAILABLE = False
        SovereignHeartbeat = None

    try:
        from sovereign_research_agent import AutonomousResearchAgent
        state.RESEARCH_AVAILABLE = True
    except ImportError:
        state.RESEARCH_AVAILABLE = False
        AutonomousResearchAgent = None

    try:
        from sovereign_security_hardening import SecurityHardeningEngine
        state.SECURITY_HARDENING_AVAILABLE = True
    except ImportError:
        state.SECURITY_HARDENING_AVAILABLE = False
        SecurityHardeningEngine = None

    try:
        from sovereign_continual_learning import ContinualLearningTrainer
        state.CONTINUAL_LEARNING_AVAILABLE = True
    except ImportError:
        state.CONTINUAL_LEARNING_AVAILABLE = False
        ContinualLearningTrainer = None

    if state.HEARTBEAT_AVAILABLE:
        print("  💓 Initializing Project Heartbeat...")
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
            print("    Heartbeat scheduler running — Sovereign is alive 24/7")
        except Exception as e:
            print(f"    Heartbeat initialization failed: {e}")

    if state.RESEARCH_AVAILABLE:
        try:
            state.research_agent = AutonomousResearchAgent(state.memory_store)
            print("    Research agent ready")
        except Exception as e:
            print(f"    Research agent init failed: {e}")

    if state.SECURITY_HARDENING_AVAILABLE:
        try:
            state.security_engine = SecurityHardeningEngine(
                model_registry=state.model_registry,
                agent_registry=state.agent_registry,
                alert_manager=state.alert_manager,
                memory_store=state.memory_store,
                audit_logger=state.audit_logger,
            )
            print("    Security hardening engine ready")
        except Exception as e:
            print(f"    Security hardening init failed: {e}")

    if state.CONTINUAL_LEARNING_AVAILABLE:
        try:
            state.continual_trainer = ContinualLearningTrainer(state.model_registry, state.memory_store)
            print("    Continual learning trainer ready")
        except Exception as e:
            print(f"    Continual learning init failed: {e}")

    # ── Civilizational Creativity Engine ──────────────────────────
    try:
        from creativity_engine import (
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
        print("  🎨 Initializing Creativity Engine...")
        try:
            state.creativity_pipeline = CreativityTrainingPipeline(
                model_registry=state.model_registry,
                memory_store=state.memory_store,
                ewc_regularizer=state.continual_trainer,
            )
            creativity_result = await state.creativity_pipeline.train_creativity_model()
            print(f"    CreativityAssessmentNN trained (MSE: {creativity_result.get('metrics', {}).get('mse', '?')})")

            corpus_result = await ingest_corpus(state.memory_store)
            if corpus_result.get("status") == "complete":
                print(f"    Civilizational corpus ingested: {corpus_result.get('traditions_ingested', 0)} traditions")
            elif corpus_result.get("status") == "already_ingested":
                print("    Civilizational corpus already in memory")
            else:
                print(f"    Corpus ingestion: {corpus_result.get('status', 'unknown')}")
        except Exception as e:
            print(f"    Creativity engine init failed: {e}")

    # ── Tier 2: Cross-Domain, Stochastic Resonance, QD Archive ───
    try:
        from creativity_engine.cross_domain_linker import CrossDomainLinker
        from creativity_engine.stochastic_resonance import StochasticResonanceEngine, apply_stochastic_resonance
        from creativity_engine.quality_diversity import QualityDiversityArchive
        state.TIER2_CREATIVITY_AVAILABLE = True
        state.apply_stochastic_resonance = apply_stochastic_resonance
    except ImportError:
        state.TIER2_CREATIVITY_AVAILABLE = False
        CrossDomainLinker = None
        StochasticResonanceEngine = None
        QualityDiversityArchive = None

    if state.TIER2_CREATIVITY_AVAILABLE:
        print("  🧬 Initializing Tier 2 Creativity Systems...")
        try:
            state.cross_domain_linker = CrossDomainLinker()
            state.cross_domain_linker.compute_distances()
            state.cross_domain_linker.find_bisociations(top_k=30)
            stats = state.cross_domain_linker.get_stats()
            print(f"    CrossDomainLinker: {stats.get('total_links', 0)} bisociation links found")

            state.resonance_engine = StochasticResonanceEngine(n_features=12)
            print(f"    StochasticResonance: σ={state.resonance_engine.get_stats()['mean_sigma']}")

            state.qd_archive = QualityDiversityArchive()
            print(f"    QD Archive: {state.qd_archive.total_cells} cells ({state.qd_archive.grid_shape})")
        except Exception as e:
            print(f"    Tier 2 creativity init failed: {e}")

    # ── Kimi Agent ────────────────────────────────────────────────
    try:
        from creativity_engine.kimi_agent import KimiAgent
        state.KIMI_AVAILABLE = True
    except ImportError:
        state.KIMI_AVAILABLE = False
        KimiAgent = None

    if KIMI_API_KEY and state.KIMI_AVAILABLE:
        print("  🤖 Initializing Kimi Agent...")
        try:
            state.kimi_agent = KimiAgent(api_key=KIMI_API_KEY)
            print(f"    Kimi connected (model: {state.kimi_agent.default_model})")
            if state.agent_registry:
                try:
                    await state.agent_registry.register_agent(
                        name="Kimi",
                        description="Moonshot AI code agent — frontend builds, TypeScript, React",
                        capabilities=[AgentCapability.CODE_EXECUTION, AgentCapability.CREATIVE, AgentCapability.ANALYSIS],
                        trust_level=0.7,
                        metadata={"type": "external_api", "provider": "moonshot", "model": "moonshot-v1-32k"},
                    )
                    print("    Kimi registered in agent registry")
                except Exception as e:
                    print(f"    Kimi registry failed (non-fatal): {e}")
        except Exception as e:
            print(f"    Kimi init failed: {e}")

    # ── Orion-Riri-Hourman Agent ──────────────────────────────────
    try:
        from orion_riri_hourman import HunterBuilderAgent, get_agent as get_orion_agent
        state.ORION_AGENT_AVAILABLE = True
        state.get_orion_agent = get_orion_agent
    except ImportError:
        state.ORION_AGENT_AVAILABLE = False

    # ── Multi-Agent Coordination Hub ──────────────────────────────
    try:
        from coordination import get_hub as get_coordination_hub
        state.COORDINATION_AVAILABLE = True
        state.get_coordination_hub = get_coordination_hub
    except ImportError:
        state.COORDINATION_AVAILABLE = False

    print("✅ MEOK MCP Server initialized successfully!")
