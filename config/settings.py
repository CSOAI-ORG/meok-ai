"""
MEOK.ai Configuration System
Pydantic BaseSettings with MEOK_ environment variable prefix.

All values default to current hardcoded values from Sovereign Temple v3.0-fractal.
Override any value via environment variable: MEOK_<SECTION>__<KEY>
(double underscore for nested models).

Examples:
    MEOK_MCP__PORT=4000
    MEOK_DATABASE__POSTGRES_DSN=postgresql://...
    MEOK_COUNCIL__VOTING_THRESHOLD=25
"""

from __future__ import annotations

import os
from functools import lru_cache
from typing import Dict, List, Optional

from pydantic import Field, SecretStr, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


# ---------------------------------------------------------------------------
# Sub-models (nested settings groups)
# ---------------------------------------------------------------------------

class DatabaseSettings(BaseSettings):
    """Database connection strings."""
    model_config = SettingsConfigDict(env_prefix="MEOK_DATABASE__")

    postgres_dsn: str = Field(
        default="postgresql://sovereign:sovereign@localhost:5432/sovereign_memory",
        description="PostgreSQL connection string",
    )
    weaviate_url: str = Field(
        default="http://localhost:8080",
        description="Weaviate vector DB URL",
    )
    neo4j_uri: str = Field(
        default="bolt://localhost:7687",
        description="Neo4j Bolt URI",
    )
    neo4j_user: str = Field(
        default="neo4j",
        description="Neo4j username",
    )
    neo4j_password: SecretStr = Field(
        default="sovereign",
        description="Neo4j password",
    )
    redis_url: str = Field(
        default="redis://localhost:6379/0",
        description="Redis connection URL (future use)",
    )


class McpSettings(BaseSettings):
    """MCP server network settings."""
    model_config = SettingsConfigDict(env_prefix="MEOK_MCP__")

    host: str = Field(
        default="0.0.0.0",
        description="MCP server bind host",
    )
    port: int = Field(
        default=3100,
        description="MCP server bind port",
    )
    cors_origins: List[str] = Field(
        default=["*"],
        description="CORS allowed origins",
    )
    workers: int = Field(
        default=1,
        description="Uvicorn worker count",
    )


class CouncilSettings(BaseSettings):
    """BFT Council configuration (v3.0-fractal, 33-node)."""
    model_config = SettingsConfigDict(env_prefix="MEOK_COUNCIL__")

    size: int = Field(
        default=33,
        description="Number of council nodes (11 domains x 3)",
    )
    voting_threshold: int = Field(
        default=22,
        description="Votes required for consensus (2f+1 where f=10)",
    )
    care_veto_enabled: bool = Field(
        default=True,
        description="Enable care-score veto on low-care proposals",
    )
    care_veto_threshold: float = Field(
        default=0.4,
        description="Care score below which high-care-weight nodes veto",
    )
    care_veto_threshold_low: float = Field(
        default=0.35,
        description="Care score threshold for nodes with lower care weight",
    )
    care_weight_split: float = Field(
        default=0.5,
        description="Sum-of-care-weights boundary between high/low veto thresholds",
    )
    domains: List[str] = Field(
        default=[
            "ethics",
            "security",
            "research",
            "governance",
            "care",
            "technical",
            "sovereign",
            "hydro",
            "biosensing",
            "emergence",
            "substrate",
            "execution",
        ],
        description="Council domain names (11 original + execution)",
    )
    # Scoring parameters from _score_proposal
    base_care_score: float = Field(
        default=0.35,
        description="Baseline care score before keyword/length bonuses",
    )
    keyword_bonus_per_hit: float = Field(
        default=0.06,
        description="Score added per care keyword match",
    )
    keyword_bonus_cap: float = Field(
        default=0.55,
        description="Maximum total keyword bonus",
    )
    length_bonus_per_word: float = Field(
        default=0.003,
        description="Score added per word in proposal",
    )
    length_bonus_cap: float = Field(
        default=0.1,
        description="Maximum total length bonus",
    )
    node_variance_range: tuple[float, float] = Field(
        default=(-0.08, 0.08),
        description="Random variance applied per-node during deliberation",
    )
    expertise_reject_penalty: float = Field(
        default=0.08,
        description="Score penalty when expertise ring rejects",
    )
    expertise_approve_bonus: float = Field(
        default=0.03,
        description="Score bonus when expertise ring approves with consensus",
    )


class ConsciousnessSettings(BaseSettings):
    """Consciousness orchestrator / emotional state parameters."""
    model_config = SettingsConfigDict(env_prefix="MEOK_CONSCIOUSNESS__")

    # Decay rates (per minute) — from EmotionalStateManager.__init__
    decay_rates: Dict[str, float] = Field(
        default={
            "pleasure": 0.10,
            "arousal": 0.15,
            "dominance": 0.05,
            "care_intensity": 0.02,
            "curiosity": 0.12,
            "aesthetics": 0.08,
        },
        description="Emotional dimension decay rates per minute",
    )
    emotional_inertia: float = Field(
        default=0.7,
        description="How much the current emotional state persists (0-1)",
    )
    care_floor: float = Field(
        default=0.3,
        description="Minimum baseline care intensity (never decays below this)",
    )
    emotional_history_size: int = Field(
        default=1000,
        description="Maximum emotional state history entries",
    )

    # Consciousness modes — Vedantic four-state model
    consciousness_modes: List[str] = Field(
        default=["waking", "dreaming", "deep_sleep", "meta_monitoring"],
        description="Valid consciousness modes (Jagrat/Svapna/Susupti/Turiya)",
    )

    # Reflection cycle
    reflection_interval_hours: int = Field(
        default=4,
        description="Hours between scheduled reflection cycles",
    )
    significant_event_threshold: float = Field(
        default=0.5,
        description="Emotional change magnitude that triggers unscheduled reflection",
    )

    # Dream state
    dream_interval_hours: int = Field(
        default=1,
        description="Hours between dream cycles",
    )
    dream_duration_seconds: int = Field(
        default=30,
        description="Default dream cycle duration",
    )
    nrem_ratio: float = Field(
        default=0.6,
        description="Fraction of dream time in NREM consolidation (remainder is REM)",
    )

    # Meta-monitor
    meta_monitor_max_observations: int = Field(
        default=100,
        description="Max stored meta-monitor observations",
    )


class NeuralSettings(BaseSettings):
    """Neural model registry and paths."""
    model_config = SettingsConfigDict(env_prefix="MEOK_NEURAL__")

    model_dir: str = Field(
        default="models",
        description="Directory containing trained neural models",
    )
    care_validator_model: str = Field(
        default="care_validator.pt",
        description="Care validation model filename",
    )
    partnership_detector_model: str = Field(
        default="partnership_detector.pt",
        description="Partnership detection model filename",
    )
    threat_detector_model: str = Field(
        default="threat_detector.pt",
        description="Threat detection model filename",
    )
    relationship_predictor_model: str = Field(
        default="relationship_predictor.pt",
        description="Relationship prediction model filename",
    )
    creativity_assessment_model: str = Field(
        default="creativity_assessment.pt",
        description="Creativity assessment model filename",
    )


class ApiKeySettings(BaseSettings):
    """External API keys (all optional, loaded from env)."""
    model_config = SettingsConfigDict(env_prefix="MEOK_API__")

    openai_api_key: Optional[SecretStr] = Field(
        default=None,
        description="OpenAI API key (used by Weaviate text2vec-openai)",
    )
    kimi_api_key: Optional[SecretStr] = Field(
        default=None,
        description="Kimi / Moonshot AI API key",
    )


class HeartbeatSettings(BaseSettings):
    """Sovereign Heartbeat autonomous scheduler configuration."""
    model_config = SettingsConfigDict(env_prefix="MEOK_HEARTBEAT__")

    enabled: bool = Field(
        default=True,
        description="Enable the heartbeat scheduler on startup",
    )
    timezone: str = Field(
        default="Europe/London",
        description="Timezone for all scheduled jobs",
    )

    # Pulse check — every N minutes
    pulse_interval_minutes: int = Field(
        default=15,
        description="Minutes between heartbeat pulse checks",
    )

    # Nightshift deep cycle — runs 6PM-2:30AM every 15 min
    nightshift_cron_hours: str = Field(
        default="18-23,0-2",
        description="Cron hour range for nightshift deep cycles",
    )
    nightshift_cron_minutes: str = Field(
        default="*/15",
        description="Cron minute pattern for nightshift deep cycles",
    )

    # Morning digest — 03:30
    morning_digest_hour: int = Field(default=3)
    morning_digest_minute: int = Field(default=30)

    # Research sweep — 19:00
    research_sweep_hour: int = Field(default=19)
    research_sweep_minute: int = Field(default=0)

    # Neural retrain — 22:00
    neural_retrain_hour: int = Field(default=22)
    neural_retrain_minute: int = Field(default=0)

    # Security hardening — 01:00
    security_hardening_hour: int = Field(default=1)
    security_hardening_minute: int = Field(default=0)

    # Weekly deep review — Sunday 23:00
    weekly_review_day: str = Field(
        default="sun",
        description="Day of week for weekly deep review",
    )
    weekly_review_hour: int = Field(default=23)
    weekly_review_minute: int = Field(default=0)

    # Creativity nightshift — 20:30
    creativity_cycle_hour: int = Field(default=20)
    creativity_cycle_minute: int = Field(default=30)


class AuthSettings(BaseSettings):
    """Authentication settings (Phase 2 — JWT-based API auth)."""
    model_config = SettingsConfigDict(env_prefix="MEOK_AUTH__")

    jwt_secret: SecretStr = Field(
        default="meok-dev-secret-change-in-production",
        description="JWT signing secret (MUST override in production)",
    )
    jwt_algorithm: str = Field(
        default="HS256",
        description="JWT signing algorithm",
    )
    token_expiry_minutes: int = Field(
        default=60,
        description="Access token lifetime in minutes",
    )
    refresh_token_expiry_days: int = Field(
        default=7,
        description="Refresh token lifetime in days",
    )


# ---------------------------------------------------------------------------
# Root settings model
# ---------------------------------------------------------------------------

class MeokSettings(BaseSettings):
    """
    Root configuration for MEOK.ai.

    All settings are overridable via environment variables with MEOK_ prefix.
    Nested groups use double-underscore: MEOK_DATABASE__POSTGRES_DSN=...

    Load via:
        from meok.config import get_settings
        settings = get_settings()
    """
    model_config = SettingsConfigDict(
        env_prefix="MEOK_",
        env_nested_delimiter="__",
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # Application metadata
    app_name: str = Field(default="MEOK.ai")
    app_version: str = Field(default="0.1.0")
    environment: str = Field(
        default="development",
        description="Runtime environment: development | staging | production",
    )
    debug: bool = Field(
        default=False,
        description="Enable debug mode (verbose logging, reload, etc.)",
    )
    log_level: str = Field(
        default="INFO",
        description="Python logging level",
    )

    # Nested configuration groups
    database: DatabaseSettings = Field(default_factory=DatabaseSettings)
    mcp: McpSettings = Field(default_factory=McpSettings)
    council: CouncilSettings = Field(default_factory=CouncilSettings)
    consciousness: ConsciousnessSettings = Field(default_factory=ConsciousnessSettings)
    neural: NeuralSettings = Field(default_factory=NeuralSettings)
    api_keys: ApiKeySettings = Field(default_factory=ApiKeySettings)
    heartbeat: HeartbeatSettings = Field(default_factory=HeartbeatSettings)
    auth: AuthSettings = Field(default_factory=AuthSettings)

    @field_validator("environment")
    @classmethod
    def validate_environment(cls, v: str) -> str:
        allowed = {"development", "staging", "production"}
        if v not in allowed:
            raise ValueError(f"environment must be one of {allowed}, got {v!r}")
        return v

    @field_validator("log_level")
    @classmethod
    def validate_log_level(cls, v: str) -> str:
        allowed = {"DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"}
        upper = v.upper()
        if upper not in allowed:
            raise ValueError(f"log_level must be one of {allowed}, got {v!r}")
        return upper


# ---------------------------------------------------------------------------
# Singleton accessor
# ---------------------------------------------------------------------------

@lru_cache(maxsize=1)
def get_settings() -> MeokSettings:
    """
    Return the cached singleton MeokSettings instance.

    On first call, reads from environment variables and .env file.
    Subsequent calls return the same object (zero cost).

    To force a reload (e.g., in tests):
        get_settings.cache_clear()
        settings = get_settings()
    """
    return MeokSettings()
