import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '';
const localMode = process.env.MEOK_LOCAL_MODE === 'true';
const hasValidClerk = !localMode && clerkKey.startsWith('pk_') && !clerkKey.includes('REPLACE');

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

export default hasValidClerk
  ? clerkMiddleware(async (auth, req) => {
      if (isProtectedRoute(req)) {
        await auth.protect();
      }
    })
  : passthroughMiddleware;

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
