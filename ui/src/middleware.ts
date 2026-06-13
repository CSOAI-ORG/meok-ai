import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// MINIMAL middleware — do nothing, pass everything through.
// This is the absolute minimum to verify that the route handlers
// (not the middleware) are the source of 500s.
//
// We do NOT import @clerk/nextjs/server at all here. UI route auth
// protection has been moved into the route handlers themselves.

export default function middleware(req: NextRequest) {
  // No-op passthrough
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
