"""
MEOK AI Labs — Redis Rate Limiting Middleware
Sliding window rate limiting with distributed support
"""

import time
import hashlib
from typing import Optional, Callable, Dict, Any
from functools import wraps
from dataclasses import dataclass
from enum import Enum

try:
    import redis

    REDIS_AVAILABLE = True
except ImportError:
    REDIS_AVAILABLE = False


class RateLimitTier(Enum):
    """Rate limit tiers for different user types"""

    FREE = ("free", 10, 60)  # 10 requests per minute
    STARTER = ("starter", 50, 60)  # 50 requests per minute
    PRO = ("pro", 200, 60)  # 200 requests per minute
    ENTERPRISE = ("enterprise", 1000, 60)  # 1000 requests per minute
    ADMIN = ("admin", 10000, 60)  # 10000 requests per minute

    def __init__(self, name: str, limit: int, window: int):
        self.name = name
        self.limit = limit
        self.window = window


@dataclass
class RateLimitResult:
    """Result of rate limit check"""

    allowed: bool
    remaining: int
    reset_at: float
    tier: str
    retry_after: Optional[int] = None


class RedisRateLimiter:
    """
    Sliding window rate limiter using Redis

    Features:
    - Sliding window algorithm (more accurate than fixed window)
    - Per-user and per-IP tracking
    - Automatic tier management
    - Distributed rate limiting across instances
    """

    def __init__(
        self, redis_url: str = "redis://localhost:6379", key_prefix: str = "ratelimit:"
    ):
        self.redis_url = redis_url
        self.key_prefix = key_prefix

        if REDIS_AVAILABLE:
            self.redis = redis.from_url(redis_url, decode_responses=True)
        else:
            self.redis = None

        # Lua script for atomic sliding window
        self._script = """
        local key = KEYS[1]
        local limit = tonumber(ARGV[1])
        local window = tonumber(ARGV[2])
        local now = tonumber(ARGV[3])
        local window_start = now - window
        
        -- Remove old entries
        redis.call('ZREMRANGEBYSCORE', key, '-inf', window_start)
        
        -- Count current requests
        local current = redis.call('ZCARD', key)
        
        if current < limit then
            -- Add new request
            redis.call('ZADD', key, now, now .. ':' .. math.random())
            redis.call('EXPIRE', key, window)
            return {1, limit - current - 1, now + window}
        else
            -- Get oldest entry
            local oldest = redis.call('ZRANGE', key, 0, 0, 'WITHSCORES')
            local retry_after = oldest and (window - (now - oldest[2])) or window
            return {0, 0, now + window, retry_after}
        end
        """

    def _get_client_key(self, identifier: str, tier: str) -> str:
        """Generate Redis key for client"""
        return f"{self.key_prefix}{tier}:{hashlib.md5(identifier.encode()).hexdigest()}"

    def check_rate_limit(
        self, identifier: str, tier: RateLimitTier = RateLimitTier.FREE
    ) -> RateLimitResult:
        """
        Check if request is allowed

        Args:
            identifier: User ID, IP address, or API key
            tier: Rate limit tier

        Returns:
            RateLimitResult with allow/deny decision
        """
        if not self.redis:
            # Redis not available, allow all (dev mode)
            return RateLimitResult(
                allowed=True,
                remaining=tier.limit,
                reset_at=time.time() + tier.window,
                tier=tier.name,
            )

        key = self._get_client_key(identifier, tier.name)
        now = time.time()

        try:
            result = self.redis.eval(self._script, 1, key, tier.limit, tier.window, now)

            allowed = bool(result[0])
            remaining = int(result[1])
            reset_at = float(result[2])
            retry_after = int(result[3]) if len(result) > 3 else None

            return RateLimitResult(
                allowed=allowed,
                remaining=remaining,
                reset_at=reset_at,
                tier=tier.name,
                retry_after=retry_after,
            )

        except redis.RedisError as e:
            # On Redis error, fail open (allow request)
            print(f"Rate limit Redis error: {e}")
            return RateLimitResult(
                allowed=True,
                remaining=tier.limit,
                reset_at=time.time() + tier.window,
                tier=tier.name,
            )

    def get_usage(self, identifier: str, tier: RateLimitTier) -> Dict[str, Any]:
        """Get current usage statistics for identifier"""
        if not self.redis:
            return {"requests": 0, "limit": tier.limit, "remaining": tier.limit}

        key = self._get_client_key(identifier, tier.name)
        now = time.time()
        window_start = now - tier.window

        # Clean and count
        self.redis.zremrangebyscore(key, "-inf", window_start)
        current = self.redis.zcard(key)

        return {
            "requests": current,
            "limit": tier.limit,
            "remaining": max(0, tier.limit - current),
            "window": tier.window,
        }

    def reset_limit(self, identifier: str, tier: RateLimitTier) -> bool:
        """Reset rate limit for identifier"""
        if not self.redis:
            return True

        key = self._get_client_key(identifier, tier.name)
        self.redis.delete(key)
        return True


def rate_limit(
    tier: RateLimitTier = RateLimitTier.FREE, identifier_func: Callable = None
):
    """
    Decorator for rate limiting endpoints

    Usage:
        @rate_limit(tier=RateLimitTier.PRO)
        async def my_endpoint(request):
            ...
    """

    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            # Get identifier
            if identifier_func:
                identifier = identifier_func(*args, **kwargs)
            else:
                # Try to get from request object
                request = args[0] if args else kwargs.get("request")
                if hasattr(request, "client"):
                    identifier = request.client.host
                elif hasattr(request, "headers"):
                    identifier = request.headers.get("X-API-Key", "anonymous")
                else:
                    identifier = "default"

            limiter = RedisRateLimiter()
            result = limiter.check_rate_limit(identifier, tier)

            if not result.allowed:
                from fastapi import HTTPException

                raise HTTPException(
                    status_code=429,
                    detail={
                        "error": "Rate limit exceeded",
                        "tier": result.tier,
                        "retry_after": result.retry_after,
                        "reset_at": result.reset_at,
                    },
                    headers={
                        "X-RateLimit-Limit": str(tier.limit),
                        "X-RateLimit-Remaining": "0",
                        "X-RateLimit-Reset": str(int(result.reset_at)),
                        "Retry-After": str(result.retry_after or tier.window),
                    },
                )

            # Add rate limit headers to response
            response = await func(*args, **kwargs)

            if hasattr(response, "headers"):
                response.headers["X-RateLimit-Limit"] = str(tier.limit)
                response.headers["X-RateLimit-Remaining"] = str(result.remaining)
                response.headers["X-RateLimit-Reset"] = str(int(result.reset_at))

            return response

        return wrapper

    return decorator


# ============================================================================
# FastAPI Integration
# ============================================================================

from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse

app = FastAPI()

# Global rate limiter instance
rate_limiter = RedisRateLimiter()


@app.middleware("http")
async def rate_limit_middleware(request: Request, call_next):
    """Apply rate limiting to all requests"""

    # Skip rate limiting for certain paths
    if request.url.path.startswith(("/health", "/metrics", "/docs", "/openapi")):
        return await call_next(request)

    # Get client identifier
    api_key = request.headers.get("X-API-Key", "")
    client_ip = request.client.host if request.client else "unknown"
    identifier = api_key or client_ip

    # Determine tier based on API key or default
    tier = RateLimitTier.ENTERPRISE if api_key else RateLimitTier.FREE

    # Check rate limit
    result = rate_limiter.check_rate_limit(identifier, tier)

    # Prepare response headers
    headers = {
        "X-RateLimit-Limit": str(tier.limit),
        "X-RateLimit-Remaining": str(result.remaining),
        "X-RateLimit-Reset": str(int(result.reset_at)),
        "X-RateLimit-Tier": result.tier,
    }

    if not result.allowed:
        return JSONResponse(
            status_code=429,
            content={
                "error": "Rate limit exceeded",
                "tier": result.tier,
                "retry_after": result.retry_after,
            },
            headers={**headers, "Retry-After": str(result.retry_after or tier.window)},
        )

    # Process request
    response = await call_next(request)

    # Add rate limit headers
    for key, value in headers.items():
        response.headers[key] = value

    return response


@app.get("/health")
async def health():
    return {"status": "ok", "rate_limiter": "active"}


# ============================================================================
# Usage Example
# ============================================================================

if __name__ == "__main__":
    # Direct usage
    limiter = RedisRateLimiter()

    # Check limit
    result = limiter.check_rate_limit(identifier="user123", tier=RateLimitTier.PRO)

    print(f"Allowed: {result.allowed}")
    print(f"Remaining: {result.remaining}")
    print(f"Reset at: {result.reset_at}")

    # Get usage stats
    usage = limiter.get_usage("user123", RateLimitTier.PRO)
    print(f"Usage: {usage}")
