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

const _clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '';
const _localMode = process.env.MEOK_LOCAL_MODE === 'true';
const _hasClerk = !_localMode && _clerkKey.startsWith('pk_') && !_clerkKey.includes('REPLACE');

/**
 * Get the authenticated user ID, with local mode bypass.
 * Use this instead of `auth()` directly in API routes.
 */
export async function getAuthUserId(): Promise<string | null> {
  if (!_hasClerk) return 'local_sovereign_user';
  const { userId } = await auth();
  return userId;
}

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
  let userId: string | null = null;

  // Dev/local bypass: when MEOK_LOCAL_MODE=true or Clerk keys not configured
  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '';
  const localMode = process.env.MEOK_LOCAL_MODE === 'true';
  const hasClerk = !localMode && clerkKey.startsWith('pk_') && !clerkKey.includes('REPLACE');

  if (hasClerk) {
    const authResult = await auth();
    userId = authResult.userId;
  } else {
    // Local dev mode — no Clerk, use sovereign local user
    userId = 'local_sovereign_user';
  }

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
