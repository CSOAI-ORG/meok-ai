/**
 * MEOK AI — MCP / Sovereign Temple Health Check
 *
 * Proxies a health check to the SOV3 server so the client-side
 * deployment page can display status without CORS issues.
 */

import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface MCPHealthResult {
  reachable: boolean;
  status?: string;
  latencyMs?: number;
  url: string;
  error?: string;
}

export async function GET() {
  const sov3Url = process.env.SOV3_URL ||
    process.env.SOV3_API_URL ||
    "http://localhost:3101";

  const healthUrl = `${sov3Url.replace(/\/$/, "")}/health`;

  const start = Date.now();
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(healthUrl, { signal: controller.signal });
    clearTimeout(timeout);

    const latencyMs = Date.now() - start;

    if (!res.ok) {
      const result: MCPHealthResult = {
        reachable: false,
        latencyMs,
        url: sov3Url,
        error: `HTTP ${res.status} ${res.statusText}`,
      };
      return NextResponse.json(result, { status: 200 });
    }

    const data = await res.json().catch(() => ({}));
    const result: MCPHealthResult = {
      reachable: true,
      status: (data as Record<string, string>).status ?? "ok",
      latencyMs,
      url: sov3Url,
    };
    return NextResponse.json(result);
  } catch (err) {
    const result: MCPHealthResult = {
      reachable: false,
      latencyMs: Date.now() - start,
      url: sov3Url,
      error: err instanceof Error ? err.message : "Unreachable",
    };
    return NextResponse.json(result, { status: 200 });
  }
}
