import { NextRequest, NextResponse } from "next/server";

// Protected routes — require meok_auth cookie or Bearer token
const PROTECTED = ["/dashboard", "/chat", "/characters", "/settings"];
const PUBLIC = ["/", "/login", "/register", "/birth", "/api/health", "/api/stripe/webhook", "/privacy", "/terms", "/maternal-covenant", "/labs", "/blog"];

function isProtected(pathname: string): boolean {
  return PROTECTED.some((p) => pathname.startsWith(p));
}

function isPublic(pathname: string): boolean {
  return PUBLIC.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow public routes and static assets
  if (isPublic(pathname)) return NextResponse.next();

  // For protected routes: check for meok_auth cookie or Authorization header
  if (isProtected(pathname)) {
    const cookie = req.cookies.get("meok_auth")?.value;
    const bearer = req.headers.get("authorization")?.replace("Bearer ", "");
    const hasToken = !!(cookie || bearer);

    if (!hasToken) {
      // API routes → 401
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      // Pages → redirect to login
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
