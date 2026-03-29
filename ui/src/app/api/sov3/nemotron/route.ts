import { type NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SOV3_URL = process.env.SOV3_MCP_URL || 'http://localhost:3101';

// Supported Nemotron tools that can be invoked via SOV3
const ALLOWED_TOOLS = [
  'nemotron_chat',
  'nemotron_care_response',
  'nemotron_analyze_care',
  'nemotron_info',
  'extract_facts',
  'validate_care',
  'safety_check',
] as const;

type NemotronTool = typeof ALLOWED_TOOLS[number];

interface NemotronRequest {
  tool: NemotronTool;
  params: Record<string, unknown>;
}

export async function POST(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body: NemotronRequest = await req.json();

    if (!body.tool || !ALLOWED_TOOLS.includes(body.tool as NemotronTool)) {
      return NextResponse.json({ error: 'Invalid tool', allowed: ALLOWED_TOOLS }, { status: 400 });
    }

    // Forward to SOV3 MCP server
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(`${SOV3_URL}/mcp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'tools/call',
          params: { name: body.tool, arguments: body.params },
          id: crypto.randomUUID(),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error(`SOV3 returned ${response.status}`);
      }

      const result = await response.json();
      return NextResponse.json({ success: true, result: result.result ?? result });
    } catch (fetchError) {
      clearTimeout(timeout);
      // SOV3 is down — return graceful fallback
      console.error('[sov3/nemotron] SOV3 unreachable:', fetchError);
      return NextResponse.json({
        success: false,
        error: 'SOV3 is currently offline',
        fallback: true,
        message: 'The Sovereign Temple is resting. Your request has been noted for when it wakes.',
      }, { status: 503 });
    }
  } catch (err) {
    console.error('[sov3/nemotron] Request error:', err);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

// Health check
export async function GET() {
  try {
    const res = await fetch(`${SOV3_URL}/health`, {
      signal: AbortSignal.timeout(5000)
    });
    const health = await res.json();
    return NextResponse.json({ sov3: 'online', ...health });
  } catch {
    return NextResponse.json({ sov3: 'offline', message: 'SOV3 MCP server is not reachable' });
  }
}
