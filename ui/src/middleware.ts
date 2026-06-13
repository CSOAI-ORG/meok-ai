import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '';
const clerkSecretKey = process.env.CLERK_SECRET_KEY ?? '';
const localMode = process.env.MEOK_LOCAL_MODE === 'true';
const hasValidClerk = !localMode && clerkKey.startsWith('pk_') && !clerkKey.includes('REPLACE') && clerkSecretKey.startsWith('sk_') && !clerkSecretKey.includes('REPLACE') && clerkSecretKey.length > 15;

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/chat(.*)',
  '/settings(.*)',
]);

// ── Global API rate limiter (IP-based, 60 req/min) ──────────────────────
const apiRateMap = new Map<string, { count: number; reset: number }>();
const API_RATE_LIMIT = 120; // requests per window
const API_RATE_WINDOW = 60_000; // 1 minute

function checkApiRate(ip: string): boolean {
  const now = Date.now();
  const entry = apiRateMap.get(ip);
  if (!entry || now > entry.reset) {
    apiRateMap.set(ip, { count: 1, reset: now + API_RATE_WINDOW });
    // Periodic cleanup: evict expired entries to prevent memory leak
    if (apiRateMap.size > 10_000) {
      for (const [key, val] of apiRateMap) {
        if (now > val.reset) apiRateMap.delete(key);
      }
    }
    return true;
  }
  entry.count++;
  return entry.count <= API_RATE_LIMIT;
}

// When Clerk is not configured, allow all routes (dev mode) with rate limiting
function passthroughMiddleware(req: NextRequest) {
  // Apply rate limiting to API routes
  if (req.nextUrl.pathname.startsWith('/api/')) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? req.headers.get('x-real-ip') ?? '127.0.0.1';
    if (!checkApiRate(ip)) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
  }
  return NextResponse.next();
}

// Clerk middleware wrapped with rate limiting on API routes.
// The Clerk handshake can throw on stale session cookies (kid mismatch) when
// a Clerk instance migration happened — e.g. dev → live key switch, or a
// different Clerk instance than the one that minted the cookie. We catch
// that and fall through to passthrough so non-stale users still get auth
// and stale-cookie users degrade gracefully to unauthenticated (matching
// the "no __session cookie" path).
const clerkWithRateLimit = clerkMiddleware(async (auth, req) => {
  // Apply rate limiting to API routes even when Clerk is active
  if (req.nextUrl.pathname.startsWith('/api/')) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? req.headers.get('x-real-ip') ?? '127.0.0.1';
    if (!checkApiRate(ip)) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
  }
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

// Wrapped dispatcher: on Clerk kid-mismatch / handshake errors, drop to
// passthrough (no auth) instead of 500. Stale cookies then expire naturally.
function safeClerkDispatch(req: NextRequest, event: unknown) {
  try {
    return (clerkWithRateLimit as unknown as (r: NextRequest, e: unknown) => Response)(req, event);
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[middleware] Clerk handshake failed, falling through:', err);
    }
    return passthroughMiddleware(req);
  }
}

// Public, agent-facing routes that MUST be reachable by non-browser clients (no Clerk
// handshake). Clerk dev keys 403 all /api/* otherwise — A2A agents aren't browsers.
// Plain pathname check (Clerk's createRouteMatcher needs Clerk context; this doesn't).
const guardedMiddleware = hasValidClerk ? safeClerkDispatch : passthroughMiddleware;

export default function middleware(req: NextRequest, event: unknown) {
  if (req.nextUrl.pathname.startsWith('/api/a2a')) {
    return passthroughMiddleware(req);
  }
  // Agent/AEO discovery files must be world-readable — never auth-gated.
  if (req.nextUrl.pathname.startsWith('/.well-known')) {
    return passthroughMiddleware(req);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (guardedMiddleware as any)(req, event);
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
