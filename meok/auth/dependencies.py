"""FastAPI auth dependencies for injection into routes."""

from fastapi import Depends, HTTPException, Request, status

from meok.auth.jwt_utils import decode_token, hash_api_key
from meok.auth.models import TokenPayload
from meok.config.settings import get_settings


# Default payload when auth is disabled (dev mode)
_DEFAULT_PAYLOAD = TokenPayload(sub="default", tenant_id="default", exp=0)

# Module-level singleton — reused across requests
_auth_repo = None

def _get_auth_repo():
    global _auth_repo
    if _auth_repo is None:
        from meok.auth.repository import AuthRepository
        _auth_repo = AuthRepository()
    return _auth_repo


async def get_current_user(request: Request) -> TokenPayload:
    """
    Extract and validate user from request.

    Checks Authorization: Bearer <jwt> header first, then X-API-Key header.
    If settings.auth.required is False and no token provided, returns default tenant.
    """
    settings = get_settings()

    # Try JWT from Authorization header
    auth_header = request.headers.get("authorization", "")
    if auth_header.startswith("Bearer "):
        token = auth_header[7:]
        try:
            return decode_token(token)
        except Exception:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid or expired token",
                headers={"WWW-Authenticate": "Bearer"},
            )

    # Try API key from X-API-Key header
    api_key = request.headers.get("x-api-key", "")
    if api_key:
        repo = _get_auth_repo()
        try:
            tenant_id = await repo.get_tenant_by_api_key(api_key)
            if tenant_id:
                return TokenPayload(sub="api_key", tenant_id=tenant_id, exp=0)
        except Exception:
            pass
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid API key",
        )

    # No credentials provided
    if not settings.auth.required:
        return _DEFAULT_PAYLOAD

    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Authentication required",
        headers={"WWW-Authenticate": "Bearer"},
    )


async def get_current_tenant(user: TokenPayload = Depends(get_current_user)) -> str:
    """Extract tenant_id from the current user."""
    return user.tenant_id


async def require_auth(request: Request) -> TokenPayload:
    """Always require auth, regardless of settings.auth.required."""
    auth_header = request.headers.get("authorization", "")
    if auth_header.startswith("Bearer "):
        token = auth_header[7:]
        try:
            return decode_token(token)
        except Exception:
            pass

    api_key = request.headers.get("x-api-key", "")
    if api_key:
        repo = _get_auth_repo()
        try:
            tenant_id = await repo.get_tenant_by_api_key(api_key)
            if tenant_id:
                return TokenPayload(sub="api_key", tenant_id=tenant_id, exp=0)
        except Exception:
            pass

    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Authentication required",
        headers={"WWW-Authenticate": "Bearer"},
    )
