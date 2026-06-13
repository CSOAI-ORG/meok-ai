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

import { NextResponse } from 'next/server';
import { checkRateLimit, type RateLimitTier } from './rate-limit';
import type { getUserById as GetUserByIdType } from './db/user';

const _clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '';
const _localMode = process.env.MEOK_LOCAL_MODE === 'true';
const _hasClerk = !_localMode && _clerkKey.startsWith('pk_') && !_clerkKey.includes('REPLACE');

// Clerk is dynamically imported ONLY when actually needed. Static import
// causes module-load failures on Vercel's serverless runtime (the @clerk/nextjs
// edge bundle can fail to initialize due to JWKS, kid-mismatch, or runtime
// constraints — 500 with empty message). The dynamic import is cached so
// we only pay the cost once per process.
type ClerkAuth = () => Promise<{ userId: string | null }>;
let _clerkAuthPromise: Promise<ClerkAuth | null> | null = null;

async function loadClerkAuth(): Promise<ClerkAuth | null> {
  if (!_hasClerk) return null;
  if (!_clerkAuthPromise) {
    _clerkAuthPromise = (async () => {
      try {
        const mod = await import('@clerk/nextjs/server');
        return mod.auth as ClerkAuth;
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('[api-auth] Failed to load Clerk auth:', err);
        }
        return null;
      }
    })();
  }
  return _clerkAuthPromise;
}

/**
 * Get the authenticated user ID, with local mode bypass.
 * Use this instead of `auth()` directly in API routes.
 *
 * Three layers of safety:
 * 1. MEOK_LOCAL_MODE=true → return local_sovereign_user, never touch Clerk
 * 2. _hasClerk false (no live key) → return local_sovereign_user
 * 3. Dynamic import fails → return null (treat as unauthenticated)
 * 4. auth() throws → catch + return null
 */
export async function getAuthUserId(): Promise<string | null> {
  if (_localMode || !_hasClerk) return 'local_sovereign_user';
  try {
    const auth = await loadClerkAuth();
    if (!auth) return null;
    const result = await auth();
    return result.userId;
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[api-auth] Clerk auth() failed, treating as unauthenticated:', err);
    }
    return null;
  }
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
  const userId = await getAuthUserId();

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
        // Dynamic import to avoid loading DB module when not needed
        const dbModule = await import('./db/user');
        const user = await (dbModule.getUserById as typeof GetUserByIdType)(userId);
        if (user?.tier === 'sovereign' || user?.tier === 'family') {
          tier = user.tier as RateLimitTier;
        }
      } catch {
        // ignore — fall back to explorer tier
      }
    }

    const rateLimitResult = await checkRateLimit(userId, tier);
    if (!rateLimitResult.allowed) {
          return {
            error: NextResponse.json(
              { error: 'Rate limit exceeded', reset_at: rateLimitResult.resetAt },
              { status: 429 },
            ),
          };
    }
  }

  return { userId, tier: opts.tier ?? 'explorer' };
}
