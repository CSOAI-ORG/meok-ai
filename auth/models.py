"""Auth request/response models."""

from datetime import datetime
from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class UserCreate(BaseModel):
    email: str = Field(..., description="User email address")
    password: str = Field(..., min_length=8, description="Password (min 8 chars)")
    hatch_name: str = Field(default="Sovereign", description="Name for the AI instance")


class UserLogin(BaseModel):
    email: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    tenant_id: str


class TokenPayload(BaseModel):
    sub: str  # user_id
    tenant_id: str
    exp: int


class RefreshRequest(BaseModel):
    refresh_token: str


class APIKeyCreate(BaseModel):
    name: str = Field(default="default", description="Friendly name for the API key")


class APIKeyResponse(BaseModel):
    api_key: str
    key_prefix: str
    tenant_id: str
    name: str
    created_at: datetime


class UserInfo(BaseModel):
    id: str
    email: str
    tenant_id: str
    hatch_name: str
    created_at: datetime
    is_active: bool
    plan: str = "free"
    feature_flags: dict = {}


# Feature flag keys (use these constants everywhere)
class FeatureFlag:
    RALPH_MODE = "ralph_mode"          # autonomous AI task runner
    PGVECTOR_SEARCH = "pgvector_search"  # semantic memory search
    VOICE_PIPELINE = "voice_pipeline"  # Silero VAD → WhisperKit → TTS
    FAMILY_GUARDIAN = "family_guardian"  # parental controls + COPPA mode
    CUSTOM_CHARACTERS = "custom_characters"  # unlimited character creation
    BETA_DASHBOARD = "beta_dashboard"  # advanced sovereign dashboard

    # Default flags per plan
    PLAN_FLAGS = {
        "free": {
            RALPH_MODE: False,
            PGVECTOR_SEARCH: False,
            VOICE_PIPELINE: False,
            FAMILY_GUARDIAN: False,
            CUSTOM_CHARACTERS: False,
            BETA_DASHBOARD: False,
        },
        "pro": {
            RALPH_MODE: False,
            PGVECTOR_SEARCH: True,
            VOICE_PIPELINE: True,
            FAMILY_GUARDIAN: False,
            CUSTOM_CHARACTERS: False,
            BETA_DASHBOARD: True,
        },
        "premium": {
            RALPH_MODE: True,
            PGVECTOR_SEARCH: True,
            VOICE_PIPELINE: True,
            FAMILY_GUARDIAN: True,
            CUSTOM_CHARACTERS: True,
            BETA_DASHBOARD: True,
        },
    }
