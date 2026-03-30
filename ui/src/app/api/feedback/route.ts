import { NextRequest, NextResponse } from "next/server";

/* Simple in-memory rate limiter: max 5 requests per IP per minute */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Prune expired entries to prevent unbounded memory growth
  if (rateLimitMap.size > 5000) {
    for (const [key, val] of rateLimitMap) {
      if (now > val.resetAt) rateLimitMap.delete(key);
    }
  }

  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT) {
    return true;
  }

  return false;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const { category, message, email, messageId, rating, comment } = body as {
    category?: string;
    message?: string;
    email?: string;
    messageId?: string;
    rating?: number;
    comment?: string;
  };

  if (!category || typeof category !== "string") {
    return NextResponse.json(
      { error: "Category is required." },
      { status: 400 }
    );
  }

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400 }
    );
  }

  console.log("[feedback]", {
    category,
    message: message.trim().slice(0, 2000),
    email: email || null,
    messageId: messageId || null,
    rating: rating ?? null,
    comment: comment || null,
    ip,
    timestamp: new Date().toISOString(),
  });

  // Bayesian care update: close the feedback → care score loop
  if (typeof rating === 'number') {
    const sovUrl = process.env.SOV3_API_URL || 'http://localhost:3100';
    if (rating === 1) {
      fetch(`${sovUrl}/mcp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0', method: 'tools/call',
          params: { name: 'validate_care', arguments: { text: 'User provided positive feedback — care alignment confirmed' } },
          id: Date.now(),
        }),
      }).catch(() => {});
    } else if (rating === -1) {
      fetch(`${sovUrl}/mcp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0', method: 'tools/call',
          params: { name: 'validate_care', arguments: { text: 'User provided negative feedback — care alignment needs improvement' } },
          id: Date.now(),
        }),
      }).catch(() => {});
    }
  }

  return NextResponse.json({ success: true });
}
