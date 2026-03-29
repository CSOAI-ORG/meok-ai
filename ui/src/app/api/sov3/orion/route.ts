/**
 * MEOK AI LABS — SOV3 Orion Agent API
 *
 * POST /api/sov3/orion
 *
 * Direct access to Orion/Riri/Hourman SOV3 tools.
 * More flexible than the tasks endpoint — exposes all agent capabilities.
 *
 * Sovereign+ tier required.
 *
 * Allowed tools (whitelist for security):
 *   orion_hunt_tasks        — hunt for next actionable task
 *   orion_riri_hourman_status — agent system status
 *   hourman_complete_sprint — close current sprint
 *   riri_build_tool         — ask Riri to build a tool
 *   riri_list_templates     — list available tool templates
 *   validate_care           — validate content against care membrane
 *   query_memories          — semantic memory search
 *   record_memory           — save something to SOV3 memory
 *   get_consciousness_state — full consciousness snapshot
 *   get_dashboard_metrics   — SOV3 performance metrics
 */

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getUserById } from '@/lib/db/user';
import { checkRateLimit } from '@/lib/rate-limit';
import sov3 from '@/lib/sov3-client';

export const runtime = 'nodejs';

const ALLOWED_TOOLS = new Set([
  'orion_hunt_tasks',
  'orion_riri_hourman_status',
  'hourman_complete_sprint',
  'riri_build_tool',
  'riri_list_templates',
  'validate_care',
  'query_memories',
  'record_memory',
  'get_consciousness_state',
  'get_dashboard_metrics',
  'get_memory_stats',
  'get_heartbeat_status',
]);

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  const user = await getUserById(userId);
  if (!user || user.tier === 'explorer') {
    return NextResponse.json(
      { error: 'Sovereign or Family tier required to access Orion intelligence' },
      { status: 403 }
    );
  }

  let body: { tool: string; params?: Record<string, unknown> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!body.tool || !ALLOWED_TOOLS.has(body.tool)) {
    return NextResponse.json(
      {
        error: 'Invalid or disallowed tool',
        allowed: Array.from(ALLOWED_TOOLS),
      },
      { status: 400 }
    );
  }

  const result = await sov3.call(body.tool, body.params ?? {});

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error ?? 'SOV3 unavailable' },
      { status: 503 }
    );
  }

  return NextResponse.json({ result: result.data });
}
