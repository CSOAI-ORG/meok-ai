/**
 * MEOK AI LABS — Guardian API Rate Limiting
 * Per-user and per-IP rate limiting for guardian endpoints
 */

import { NextRequest, NextResponse } from 'next/server';

// ── Rate Limit Configuration ──────────────────────────────────────────────

export const GUARDIAN_RATE_LIMITS = {
  // Scam detection: 30 scans per minute per user, 200 per hour globally
  SCAN_MESSAGE: {
    PER_USER_PER_MINUTE: 30,
    PER_IP_PER_MINUTE: 100,
    WINDOW_MS: 60_000,
  },
  // Person checks: 20 per minute per user, 150 per hour globally
  CHECK_PERSON: {
    PER_USER_PER_MINUTE: 20,
    PER_IP_PER_MINUTE: 80,
    WINDOW_MS: 60_000,
  },
  // Family alerts: 10 per minute per user (usually internal)
  FAMILY_ALERT: {
    PER_USER_PER_MINUTE: 10,
    PER_IP_PER_MINUTE: 50,
    WINDOW_MS: 60_000,
  },
} as const;

// ── In-Memory Rate Limit Store ────────────────────────────────────────────
// In production, use Redis. This is for development/fallback.

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

// Cleanup old entries every minute
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (entry.resetAt < now) {
      store.delete(key);
    }
  }
}, 60_000);

// ── Rate Limiting Functions ───────────────────────────────────────────────

/**
 * Check if request exceeds rate limit
 */
function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const entry = store.get(key) || { count: 0, resetAt: now + windowMs };

  // Reset if window expired
  if (entry.resetAt < now) {
    entry.count = 0;
    entry.resetAt = now + windowMs;
  }

  entry.count += 1;
  store.set(key, entry);

  const allowed = entry.count <= limit;
  const remaining = Math.max(0, limit - entry.count);

  return {
    allowed,
    remaining,
    resetAt: entry.resetAt,
  };
}

/**
 * Extract client IP from request
 */
function getClientIP(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : (req as any).ip || '0.0.0.0';
  return ip;
}

/**
 * Extract user ID from authorization token or request header
 */
function getUserID(req: NextRequest): string | null {
  // Try to extract from Authorization header (Bearer token format)
  const authHeader = req.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    // In real implementation, decode JWT and extract user_id
    // For now, return a placeholder
    return 'auth-user';
  }

  // Try x-user-id header
  return req.headers.get('x-user-id');
}

/**
 * Rate limit middleware for guardian endpoints
 */
export async function guardianRateLimit(
  req: NextRequest,
  endpoint: 'SCAN_MESSAGE' | 'CHECK_PERSON' | 'FAMILY_ALERT'
): Promise<NextResponse | null> {
  const config = GUARDIAN_RATE_LIMITS[endpoint];
  const clientIP = getClientIP(req);
  const userID = getUserID(req);

  // Check per-IP limit
  const ipLimit = checkRateLimit(`ip:${endpoint}:${clientIP}`, config.PER_IP_PER_MINUTE, config.WINDOW_MS);
  if (!ipLimit.allowed) {
    return new NextResponse(
      JSON.stringify({
        error: 'IP rate limit exceeded',
        remaining: ipLimit.remaining,
        resetAt: new Date(ipLimit.resetAt).toISOString(),
      }),
      {
        status: 429,
        headers: {
          'Retry-After': Math.ceil((ipLimit.resetAt - Date.now()) / 1000).toString(),
          'X-RateLimit-Limit': config.PER_IP_PER_MINUTE.toString(),
          'X-RateLimit-Remaining': ipLimit.remaining.toString(),
          'X-RateLimit-Reset': new Date(ipLimit.resetAt).toISOString(),
        },
      }
    );
  }

  // Check per-user limit if authenticated
  if (userID) {
    const userLimit = checkRateLimit(
      `user:${endpoint}:${userID}`,
      config.PER_USER_PER_MINUTE,
      config.WINDOW_MS
    );

    if (!userLimit.allowed) {
      return new NextResponse(
        JSON.stringify({
          error: 'User rate limit exceeded',
          remaining: userLimit.remaining,
          resetAt: new Date(userLimit.resetAt).toISOString(),
        }),
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((userLimit.resetAt - Date.now()) / 1000).toString(),
            'X-RateLimit-Limit': config.PER_USER_PER_MINUTE.toString(),
            'X-RateLimit-Remaining': userLimit.remaining.toString(),
            'X-RateLimit-Reset': new Date(userLimit.resetAt).toISOString(),
          },
        }
      );
    }
  }

  // Request allowed
  return null;
}

/**
 * Attach rate limit headers to response
 */
export function attachRateLimitHeaders(
  response: NextResponse,
  endpoint: 'SCAN_MESSAGE' | 'CHECK_PERSON' | 'FAMILY_ALERT',
  clientIP: string,
  userID: string | null
): NextResponse {
  const config = GUARDIAN_RATE_LIMITS[endpoint];

  // Get current limits
  const ipKey = `ip:${endpoint}:${clientIP}`;
  const userKey = userID ? `user:${endpoint}:${userID}` : null;

  const ipEntry = store.get(ipKey);
  const userEntry = userKey ? store.get(userKey) : null;

  if (ipEntry) {
    response.headers.set('X-RateLimit-IP-Limit', config.PER_IP_PER_MINUTE.toString());
    response.headers.set('X-RateLimit-IP-Remaining', Math.max(0, config.PER_IP_PER_MINUTE - ipEntry.count).toString());
    response.headers.set('X-RateLimit-IP-Reset', new Date(ipEntry.resetAt).toISOString());
  }

  if (userEntry && userID) {
    response.headers.set('X-RateLimit-User-Limit', config.PER_USER_PER_MINUTE.toString());
    response.headers.set('X-RateLimit-User-Remaining', Math.max(0, config.PER_USER_PER_MINUTE - userEntry.count).toString());
    response.headers.set('X-RateLimit-User-Reset', new Date(userEntry.resetAt).toISOString());
  }

  return response;
}
