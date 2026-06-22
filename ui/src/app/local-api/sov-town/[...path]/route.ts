import { type NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Proxy all /api/sov-town/* requests to the Sovereign Town dashboard server.
 *
 * Why server-side proxy:
 * - Keeps MEOK_MASTER_API_KEY out of the browser.
 * - Avoids CORS when the dashboard runs on a different origin/port.
 * - Allows switching between local dev (localhost:3940) and production tunnel
 *   (sov-town.meok.ai) via the SOV_TOWN_URL env var.
 */

const SOV_TOWN_BASE = process.env.SOV_TOWN_URL ?? 'http://127.0.0.1:3940';
const SOV_TOWN_KEY = process.env.MEOK_MASTER_API_KEY ?? '';

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(req, 'GET', (await params).path);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(req, 'POST', (await params).path);
}

async function proxy(req: NextRequest, method: string, pathParts: string[]) {
  const path = '/' + pathParts.join('/') + req.nextUrl.search;
  const upstream = new URL(path, SOV_TOWN_BASE);

  const headers = new Headers();
  if (SOV_TOWN_KEY) headers.set('X-MEOK-Key', SOV_TOWN_KEY);

  let body: BodyInit | undefined;
  if (method !== 'GET' && method !== 'HEAD') {
    body = await req.arrayBuffer();
    const contentType = req.headers.get('content-type');
    if (contentType) headers.set('Content-Type', contentType);
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15_000);
    const upstreamRes = await fetch(upstream.toString(), {
      method,
      headers,
      body,
      signal: controller.signal,
    });
    clearTimeout(timer);

    const responseHeaders = new Headers(upstreamRes.headers);
    responseHeaders.delete('content-encoding');
    responseHeaders.delete('transfer-encoding');

    return new Response(upstreamRes.body, {
      status: upstreamRes.status,
      headers: responseHeaders,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[api/sov-town] proxy error:', msg);
    return NextResponse.json({ error: 'Sovereign Town unavailable', detail: msg }, { status: 503 });
  }
}
