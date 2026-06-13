import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// IMPORTANT: clerkMiddleware is imported via dynamic import inside safeClerkDispatch.
// A static `import { clerkMiddleware } from '@clerk/nextjs/server'` at the top
// causes the EDGE middleware to fail at module-load on /api/* paths because
// the Clerk edge SDK module can throw on initialization when the runtime
// can't reach Clerk (kid-mismatch, no JWKS, runtime unsupported). Even with
// the runtime itself never calling the imported function, the import-time
// evaluation is enough to 500 every /api/* request. The original middleware
// file had this import; fixing by isolating it behind a dynamic import.

const apiRateMap = new Map<string, { count: number; reset: number }>();
const API_RATE_LIMIT = 120;
const API_RATE_WINDOW = 60_000;

function checkApiRate(ip: string): boolean {
  const now = Date.now();
  const entry = apiRateMap.get(ip);
  if (!entry || now > entry.reset) {
    apiRateMap.set(ip, { count: 1, reset: now + API_RATE_WINDOW });
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

function passthroughMiddleware(req: NextRequest): Response {
  if (req.nextUrl.pathname.startsWith('/api/')) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]
      ?? req.headers.get('x-real-ip')
      ?? '127.0.0.1';
    if (!checkApiRate(ip)) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
  }
  return NextResponse.next();
}

// Dynamic Clerk import — only loaded when we actually need to run Clerk
// middleware for protected routes. /api/* never triggers this import.
let _clerkModulePromise: Promise<typeof import('@clerk/nextjs/server')> | null = null;
async function getClerkModule() {
  if (!_clerkModulePromise) {
    _clerkModulePromise = import('@clerk/nextjs/server');
  }
  return _clerkModulePromise;
}

async function clerkWithRateLimit(req: NextRequest, event: unknown): Promise<Response> {
  const { clerkMiddleware, createRouteMatcher } = await getClerkModule();

  if (req.nextUrl.pathname.startsWith('/api/')) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]
      ?? req.headers.get('x-real-ip')
      ?? '127.0.0.1';
    if (!checkApiRate(ip)) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
  }

  const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/chat(.*)',
    '/settings(.*)',
  ]);

  // Build the Clerk middleware on demand
  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '';
  const clerkSecretKey = process.env.CLERK_SECRET_KEY ?? '';
  const hasValidClerk = clerkKey.startsWith('pk_') && !clerkKey.includes('REPLACE')
    && clerkSecretKey.startsWith('sk_') && !clerkSecretKey.includes('REPLACE')
    && clerkSecretKey.length > 15;

  if (!hasValidClerk) {
    return passthroughMiddleware(req);
  }

  // Call clerkMiddleware and run it
  const handler = clerkMiddleware(async (auth: any) => {
    if (isProtectedRoute(req)) {
      await auth.protect();
    }
  });

  return await (handler as unknown as (r: NextRequest, e: unknown) => Promise<Response>)(req, event);
}

export default async function middleware(req: NextRequest, event: unknown) {
  // /api/* and .well-known never load Clerk. Auth happens in route handlers
  // via getAuthUserId() in api-auth.ts which has its own try/catch and
  // MEOK_LOCAL_MODE bypass.
  if (req.nextUrl.pathname.startsWith('/.well-known')) {
    return passthroughMiddleware(req);
  }
  if (req.nextUrl.pathname.startsWith('/api/')) {
    return passthroughMiddleware(req);
  }
  // UI routes: dynamically load Clerk only when needed
  try {
    return await clerkWithRateLimit(req, event);
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[middleware] Clerk path failed, falling through:', err);
    }
    return passthroughMiddleware(req);
  }
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
