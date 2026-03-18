"""JWT encode/decode and API key generation."""

import hashlib
import secrets
from datetime import datetime, timedelta, timezone

import jwt

from meok.auth.models import TokenPayload
from meok.config.settings import get_settings


def create_access_token(user_id: str, tenant_id: str) -> str:
    """Create a short-lived JWT access token."""
    settings = get_settings()
    expires = datetime.now(timezone.utc) + timedelta(minutes=settings.auth.token_expiry_minutes)
    payload = {
        "sub": user_id,
        "tenant_id": tenant_id,
        "exp": int(expires.timestamp()),
        "type": "access",
    }
    return jwt.encode(payload, settings.auth.jwt_secret.get_secret_value(), algorithm=settings.auth.jwt_algorithm)


def create_refresh_token(user_id: str, tenant_id: str) -> str:
    """Create a long-lived JWT refresh token."""
    settings = get_settings()
    expires = datetime.now(timezone.utc) + timedelta(days=settings.auth.refresh_token_expiry_days)
    payload = {
        "sub": user_id,
        "tenant_id": tenant_id,
        "exp": int(expires.timestamp()),
        "type": "refresh",
    }
    return jwt.encode(payload, settings.auth.jwt_secret.get_secret_value(), algorithm=settings.auth.jwt_algorithm)


def decode_token(token: str) -> TokenPayload:
    """Decode and validate a JWT token. Raises jwt.InvalidTokenError on failure."""
    settings = get_settings()
    payload = jwt.decode(
        token,
        settings.auth.jwt_secret.get_secret_value(),
        algorithms=[settings.auth.jwt_algorithm],
    )
    return TokenPayload(
        sub=payload["sub"],
        tenant_id=payload["tenant_id"],
        exp=payload["exp"],
    )


def generate_api_key() -> str:
    """Generate a secure random API key (48 chars, prefixed with 'meok_')."""
    return f"meok_{secrets.token_urlsafe(36)}"


def hash_api_key(key: str) -> str:
    """Hash an API key for storage (SHA-256)."""
    return hashlib.sha256(key.encode()).hexdigest()
