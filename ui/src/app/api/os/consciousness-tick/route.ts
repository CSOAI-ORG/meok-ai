/**
 * MEOK AI LABS — Consciousness Tick Endpoint
 *
 * POST /api/os/consciousness-tick
 *
 * Persists or retrieves the user's consciousness state so it is consistent
 * across devices and Vercel cold starts (vs. localStorage-only which is
 * per-browser and wiped on function restart).
 *
 * Called by the service worker heartbeat on each tick.
 *
 * POST body: { state: ConsciousnessState }  → saves state, returns saved
 * GET  → returns last persisted state for this user
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ── GET: retrieve persisted consciousness state ───────────────────────────────

export async function GET(): Promise<NextResponse> {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  if (!sql) {
    return NextResponse.json({ state: null, source: 'db_unavailable' });
  }

  try {
    const rows = await sql`
      SELECT consciousness_state, updated_at
      FROM users
      WHERE id = ${userId}
      LIMIT 1
    `;

    if (!rows.length || !rows[0]) {
      return NextResponse.json({ state: null, source: 'not_found' });
    }

    const row = rows[0] as Record<string, unknown>;
    return NextResponse.json({
      state: row['consciousness_state'] ?? null,
      updatedAt: row['updated_at'] ?? null,
      source: 'db',
    });
  } catch (err) {
    console.error('[consciousness-tick] GET error:', err);
    return NextResponse.json({ state: null, source: 'error' });
  }
}

// ── POST: persist consciousness state ────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  let body: { state?: unknown };
  try {
    body = await req.json() as { state?: unknown };
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!body.state || typeof body.state !== 'object') {
    return NextResponse.json({ error: 'state is required' }, { status: 400 });
  }

  if (!sql) {
    // DB unavailable — acknowledge but don't persist
    return NextResponse.json({ ok: true, persisted: false, reason: 'db_unavailable' });
  }

  try {
    await sql`
      UPDATE users
      SET consciousness_state = ${JSON.stringify(body.state)}::jsonb,
          updated_at = NOW()
      WHERE id = ${userId}
    `;

    return NextResponse.json({ ok: true, persisted: true });
  } catch (err) {
    console.error('[consciousness-tick] POST error:', err);
    // Non-fatal — client can continue with localStorage
    return NextResponse.json({ ok: true, persisted: false, reason: 'db_error' });
  }
}
