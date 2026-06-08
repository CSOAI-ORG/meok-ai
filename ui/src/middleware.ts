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

// Clerk middleware wrapped with rate limiting on API routes
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

// Public, agent-facing routes that MUST be reachable by non-browser clients (no Clerk
// handshake). Clerk dev keys 403 all /api/* otherwise — A2A agents aren't browsers.
const isPublicApiRoute = createRouteMatcher(['/api/a2a(.*)']);
const guardedMiddleware = hasValidClerk ? clerkWithRateLimit : passthroughMiddleware;

export default function middleware(req: NextRequest, event: unknown) {
  if (isPublicApiRoute(req)) return passthroughMiddleware(req);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (guardedMiddleware as any)(req, event);
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
