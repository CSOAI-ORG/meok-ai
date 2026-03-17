"""
ServiceState — holds all global state for the MEOK MCP Server.
Replaces the monolithic global variables.
"""

from typing import Optional, Any


class ServiceState:
    """Central state container for all MCP subsystems."""

    def __init__(self):
        # Neural core
        self.model_registry: Optional[Any] = None  # NeuralModelRegistry

        # Memory
        self.memory_store: Optional[Any] = None  # EnhancedMemoryStore

        # Monitoring
        self.audit_logger: Optional[Any] = None  # AuditLogger
        self.metrics: Optional[Any] = None  # MetricsCollector
        self.alert_manager: Optional[Any] = None  # AlertManager

        # Multi-agent
        self.agent_registry: Optional[Any] = None  # AgentRegistry
        self.task_delegator: Optional[Any] = None  # TaskDelegator
        self.agent_council: Optional[Any] = None  # AgentCouncil

        # Consciousness
        self.consciousness: Optional[Any] = None  # ConsciousnessOrchestrator

        # Maintenance
        self.maintenance_system: Optional[Any] = None  # AutonomousMaintenanceSystem

        # Project Heartbeat
        self.heartbeat: Optional[Any] = None  # SovereignHeartbeat
        self.research_agent: Optional[Any] = None  # AutonomousResearchAgent
        self.security_engine: Optional[Any] = None  # SecurityHardeningEngine
        self.continual_trainer: Optional[Any] = None  # ContinualLearningTrainer

        # Creativity Engine
        self.creativity_pipeline: Optional[Any] = None  # CreativityTrainingPipeline
        self.cross_domain_linker: Optional[Any] = None  # CrossDomainLinker
        self.resonance_engine: Optional[Any] = None  # StochasticResonanceEngine
        self.qd_archive: Optional[Any] = None  # QualityDiversityArchive

        # External agents
        self.kimi_agent: Optional[Any] = None  # KimiAgent
        self.orion_agent: Optional[Any] = None  # HunterBuilderAgent
        self.coordination_hub: Optional[Any] = None

        # Feature availability flags
        self.HEARTBEAT_AVAILABLE: bool = False
        self.RESEARCH_AVAILABLE: bool = False
        self.SECURITY_HARDENING_AVAILABLE: bool = False
        self.CONTINUAL_LEARNING_AVAILABLE: bool = False
        self.CREATIVITY_ENGINE_AVAILABLE: bool = False
        self.TIER2_CREATIVITY_AVAILABLE: bool = False
        self.KIMI_AVAILABLE: bool = False
        self.ORION_AGENT_AVAILABLE: bool = False
        self.COORDINATION_AVAILABLE: bool = False

        # Import references (set during initialization)
        self.AlertSeverity: Optional[Any] = None
        self.AlertChannel: Optional[Any] = None
        self.AgentCapability: Optional[Any] = None
        self.kolmogorov_novelty: Optional[Any] = None
        self.ingest_corpus: Optional[Any] = None
        self.apply_stochastic_resonance: Optional[Any] = None
        self.get_orion_agent: Optional[Any] = None
        self.get_coordination_hub: Optional[Any] = None
