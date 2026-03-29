/**
 * MEOK AI LABS — SOV3 Tasks API (Orion + Hourman)
 *
 * GET  /api/sov3/tasks          — list tasks (Orion queue)
 * POST /api/sov3/tasks          — capture a new task
 * GET  /api/sov3/tasks?sprint=1 — get sprint status (Hourman)
 *
 * Sovereign+ tier required.
 * Proxies to Sovereign Temple v3.0 MCP tools.
 *
 * This brings MEOK users access to SOV3's autonomous task intelligence:
 *   - Orion captures, prioritises, and routes tasks
 *   - Hourman plans work sprints
 *   - Riri builds automation tools
 */

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getUserById } from '@/lib/db/user';
import { checkRateLimit } from '@/lib/rate-limit';
import sov3 from '@/lib/sov3-client';

export const runtime = 'nodejs';

// ── GET — list tasks or sprint status ────────────────────────────────────────

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const user = await getUserById(userId);
  if (!user || user.tier === 'explorer') {
    return NextResponse.json(
      { error: 'Sovereign or Family tier required to access AI task intelligence' },
      { status: 403 }
    );
  }

  const { searchParams } = new URL(req.url);
  const sprint = searchParams.get('sprint') === '1';

  if (sprint) {
    const result = await sov3.sprintStatus();
    if (!result.ok) {
      return NextResponse.json({ error: result.error ?? 'SOV3 unavailable' }, { status: 503 });
    }
    return NextResponse.json(result.data);
  }

  const status   = searchParams.get('status') ?? undefined;
  const priority = searchParams.get('priority') ?? undefined;
  const limit    = Math.min(parseInt(searchParams.get('limit') ?? '20', 10), 50);

  const result = await sov3.getTasks({ status, priority, limit });
  if (!result.ok) {
    return NextResponse.json({ error: result.error ?? 'SOV3 unavailable' }, { status: 503 });
  }

  return NextResponse.json(result.data);
}

// ── POST — capture a task ─────────────────────────────────────────────────────

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
      { error: 'Sovereign or Family tier required to access AI task intelligence' },
      { status: 403 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { title, description, priority, sprint, sprint_goal, sprint_duration } = body as {
    title?: string;
    description?: string;
    priority?: 'critical' | 'high' | 'medium' | 'low';
    sprint?: boolean;
    sprint_goal?: string;
    sprint_duration?: number;
  };

  // ── Start a sprint ──────────────────────────────────────────────────────────
  if (sprint) {
    if (!sprint_goal) {
      return NextResponse.json({ error: 'sprint_goal is required to start a sprint' }, { status: 400 });
    }
    const result = await sov3.startSprint({
      goal: sprint_goal,
      duration_minutes: sprint_duration ?? 60,
    });
    if (!result.ok) {
      return NextResponse.json({ error: result.error ?? 'SOV3 unavailable' }, { status: 503 });
    }
    return NextResponse.json(result.data, { status: 201 });
  }

  // ── Capture a task ──────────────────────────────────────────────────────────
  if (!title || typeof title !== 'string' || !title.trim()) {
    return NextResponse.json({ error: 'title is required' }, { status: 400 });
  }

  const result = await sov3.captureTask({
    title:       title.trim(),
    description: typeof description === 'string' ? description.trim() : undefined,
    priority:    priority ?? 'medium',
    source:      `meok-user:${userId.slice(-6)}`,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error ?? 'SOV3 unavailable' }, { status: 503 });
  }

  return NextResponse.json(result.data, { status: 201 });
}
