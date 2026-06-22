/**
 * POST /api/jarvis/execute
 *
 * Execute an MCP tool on SOV3 and return the result.
 * This is Jarvis's action layer — allows the UI to trigger any of 75 MCP tools.
 *
 * Body: { tool: string, arguments?: Record<string, unknown> }
 * Returns: { result: unknown, elapsed_ms: number }
 */

import { type NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';

const SOV3_URL = process.env.SOV3_API_URL || 'http://localhost:3101';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { tool: string; arguments?: Record<string, unknown> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { tool, arguments: args = {} } = body;
  if (!tool || typeof tool !== 'string') {
    return NextResponse.json({ error: 'tool name required' }, { status: 400 });
  }

  const start = Date.now();

  try {
    const res = await fetch(`${SOV3_URL}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/call',
        params: { name: tool, arguments: args },
        id: Date.now(),
      }),
      signal: AbortSignal.timeout(30_000),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `SOV3 returned ${res.status}`, elapsed_ms: Date.now() - start },
        { status: 502 },
      );
    }

    const data = await res.json();
    const text = data?.result?.content?.[0]?.text;

    let result: unknown;
    try {
      result = text ? JSON.parse(text) : data?.result;
    } catch {
      result = text ?? data?.result;
    }

    return NextResponse.json({
      tool,
      result,
      elapsed_ms: Date.now() - start,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'SOV3 unreachable', elapsed_ms: Date.now() - start },
      { status: 502 },
    );
  }
}

/**
 * GET /api/jarvis/execute — List available MCP tools
 */
export async function GET(): Promise<NextResponse> {
  try {
    const res = await fetch(`${SOV3_URL}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/list',
        id: 1,
      }),
      signal: AbortSignal.timeout(5_000),
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'SOV3 unreachable' }, { status: 502 });
    }

    const data = await res.json();
    const tools = data?.result?.tools ?? [];

    return NextResponse.json({
      total: tools.length,
      tools: tools.map((t: { name: string; description?: string }) => ({
        name: t.name,
        description: t.description,
      })),
    });
  } catch {
    return NextResponse.json({ error: 'SOV3 unreachable' }, { status: 502 });
  }
}
