/**
 * MEOK AI LABS — API Authentication & Rate Limiting Helper
 *
 * Combines Clerk auth + rate limiting into a single call for use in
 * all /api/user/* and other authenticated routes.
 *
 * Usage:
 *   const { userId, error } = await requireAuth(req);
 *   if (error) return error; // auto-returns 401 or 429
 */

import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { checkRateLimit, type RateLimitTier } from './rate-limit';
import { getUserById } from './db/user';

export interface AuthResult {
  userId: string;
  tier: RateLimitTier;
  error?: never;
}

export interface AuthError {
  userId?: never;
  tier?: never;
  error: NextResponse;
}

/**
 * Authenticate and rate-limit an API request.
 *
 * Pass `skipRateLimit: true` for endpoints that should not count against
 * the user's daily token budget (e.g. GET /api/user/progress).
 */
export async function requireAuth(
  opts: { skipRateLimit?: boolean; tier?: RateLimitTier } = {},
): Promise<AuthResult | AuthError> {
  const { userId } = await auth();

  if (!userId) {
    return {
      error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }),
    };
  }

  if (!opts.skipRateLimit) {
    // Resolve tier from DB if not provided (cached in future sessions)
    let tier: RateLimitTier = opts.tier ?? 'explorer';
    if (!opts.tier) {
      try {
        const user = await getUserById(userId);
        if (user?.tier === 'sovereign' || user?.tier === 'family') {
          tier = user.tier as RateLimitTier;
        }
      } catch {
        // Non-fatal: fall back to explorer tier limits
      }
    }

    const result = checkRateLimit(userId, tier);
    if (!result.allowed) {
      return {
        error: NextResponse.json(
          { error: 'Rate limit exceeded', resetAt: result.resetAt },
          {
            status: 429,
            headers: {
              'X-RateLimit-Remaining': '0',
              'X-RateLimit-Reset': String(result.resetAt),
            },
          },
        ),
      };
    }

    return { userId, tier };
  }

  return { userId, tier: opts.tier ?? 'explorer' };
}
