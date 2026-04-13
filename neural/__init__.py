"""
MEOK Neural Core + Civilizational Creativity Engine
All neural network models (sklearn + PyTorch) plus the 47-tradition
civilizational knowledge corpus, novelty metrics, and creative assessment.
"""

from .base_model import BaseNeuralModel, NeuralModelRegistry
from .care_validation_nn import CareValidationNN
from .partnership_detection_ml import PartnershipDetectionML
from .threat_detection_nn import ThreatDetectionNN
from .relationship_evolution_nn import RelationshipEvolutionNN
from .care_pattern_analyzer import CarePatternAnalyzer
from .dependency_detection_nn import DependencyDetectionNN
from .pytorch_adapter import (
    PyTorchModelAdapter,
    create_threat_detection_pt,
    create_care_validation_pt,
    create_partnership_detection_pt,
)

from .novelty_metric import kolmogorov_novelty, normalized_compression_distance, batch_novelty_scores

try:
    from .civilizational_corpus import CivilizationalTradition, CORPUS
except ImportError:
    CORPUS = []
    CivilizationalTradition = None

try:
    from .creativity_nn import CreativityAssessmentNN, FEATURE_NAMES, OUTPUT_NAMES
except ImportError:
    CreativityAssessmentNN = None

try:
    from .corpus_ingester import ingest_corpus, get_corpus_stats
except ImportError:
    pass

try:
    from .training_pipeline import CreativityTrainingPipeline
except ImportError:
    CreativityTrainingPipeline = None

# Tier 2: Cross-domain bisociation detection
try:
    from .cross_domain_linker import CrossDomainLinker, BisociationLink
except ImportError:
    CrossDomainLinker = None
    BisociationLink = None

# Tier 2: Stochastic resonance for creativity amplification
try:
    from .stochastic_resonance import StochasticResonanceEngine, apply_stochastic_resonance
except ImportError:
    StochasticResonanceEngine = None
    apply_stochastic_resonance = None

# Tier 2: Quality-Diversity archive (MAP-Elites)
try:
    from .quality_diversity import QualityDiversityArchive, CreativeOutput
except ImportError:
    QualityDiversityArchive = None
    CreativeOutput = None

# z_self: 7th meta-cognitive neural network (Pure Sakshi observer)
try:
    from .z_self import ZSelf, ZSelfNetwork, MODEL_NAMES as Z_SELF_MODEL_NAMES
    from .z_self_tripwires import ZSelfTripwires, TRIPWIRE_SCENARIOS
except ImportError:
    ZSelf = None
    ZSelfNetwork = None
    ZSelfTripwires = None
    TRIPWIRE_SCENARIOS = []

def create_default_registry(model_dir: str = "models") -> NeuralModelRegistry:
    """Create a registry with all models initialized (sklearn + PyTorch)."""
    registry = NeuralModelRegistry()

    # Original sklearn models
    registry.register(CareValidationNN(model_dir))
    registry.register(PartnershipDetectionML(model_dir))
    registry.register(ThreatDetectionNN(model_dir))
    registry.register(RelationshipEvolutionNN(model_dir))
    registry.register(CarePatternAnalyzer(model_dir))
    registry.register(DependencyDetectionNN(model_dir))

    # GPU-trained PyTorch models (CPU inference)
    try:
        registry.register(create_threat_detection_pt(model_dir))
        registry.register(create_care_validation_pt(model_dir))
        registry.register(create_partnership_detection_pt(model_dir))
    except ImportError:
        print("[NeuralCore] PyTorch not available - skipping GPU-trained models")

    # Creativity Assessment NN (trained on 47 civilizational traditions)
    if CreativityAssessmentNN is not None:
        try:
            registry.register(CreativityAssessmentNN(model_dir))
        except Exception:
            print("[NeuralCore] CreativityAssessmentNN init failed - skipping")

    return registry


__all__ = [
    # Core neural models
    'BaseNeuralModel',
    'NeuralModelRegistry',
    'CareValidationNN',
    'PartnershipDetectionML',
    'ThreatDetectionNN',
    'RelationshipEvolutionNN',
    'CarePatternAnalyzer',
    'DependencyDetectionNN',
    'PyTorchModelAdapter',
    'create_default_registry',
    # Novelty metrics
    'kolmogorov_novelty',
    'normalized_compression_distance',
    'batch_novelty_scores',
    # Corpus
    'CivilizationalTradition',
    'CORPUS',
    # Neural model
    'CreativityAssessmentNN',
    'FEATURE_NAMES',
    'OUTPUT_NAMES',
    # Ingestion
    'ingest_corpus',
    'get_corpus_stats',
    # Training
    'CreativityTrainingPipeline',
    # Tier 2: Bisociation
    'CrossDomainLinker',
    'BisociationLink',
    # Tier 2: Stochastic Resonance
    'StochasticResonanceEngine',
    'apply_stochastic_resonance',
    # Tier 2: Quality-Diversity
    'QualityDiversityArchive',
    'CreativeOutput',
]
