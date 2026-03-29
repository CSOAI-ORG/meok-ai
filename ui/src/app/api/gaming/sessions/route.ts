/**
 * MEOK AI LABS — Gaming Sessions API
 *
 * GET  /api/gaming/sessions   — List all gaming sessions for the user
 * POST /api/gaming/sessions   — Add a new gaming session
 * DELETE /api/gaming/sessions?id=xxx — Delete a session
 */

import { requireAuth } from '@/lib/api-auth';
import { type NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  if (!sql) {
    return NextResponse.json({ sessions: [] });
  }

  try {
    const rows = await sql`
      SELECT id, game, duration_minutes AS duration, notes, rating, session_date AS date, created_at
      FROM gaming_sessions
      WHERE user_id = ${userId}
      ORDER BY session_date DESC, created_at DESC
      LIMIT 200
    `.catch(() => null);

    return NextResponse.json({ sessions: rows ?? [] });
  } catch {
    return NextResponse.json({ sessions: [] });
  }
}

export async function POST(req: NextRequest) {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const body = await req.json() as {
    id?: string;
    game: string;
    duration: number;
    notes?: string;
    rating: number;
    date: string;
  };

  if (!body.game || !body.duration || !body.rating || !body.date) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (!sql) {
    return NextResponse.json({ ok: true, id: body.id ?? crypto.randomUUID() });
  }

  try {
    const rows = await sql`
      INSERT INTO gaming_sessions (id, user_id, game, duration_minutes, notes, rating, session_date)
      VALUES (
        ${body.id ?? crypto.randomUUID()},
        ${userId},
        ${body.game.slice(0, 200)},
        ${Math.max(1, Math.min(1440, body.duration))},
        ${(body.notes ?? '').slice(0, 1000)},
        ${Math.max(1, Math.min(5, body.rating))},
        ${body.date}
      )
      ON CONFLICT (id) DO UPDATE SET
        game = EXCLUDED.game,
        duration_minutes = EXCLUDED.duration_minutes,
        notes = EXCLUDED.notes,
        rating = EXCLUDED.rating,
        session_date = EXCLUDED.session_date
      RETURNING id
    `.catch(() => null);

    return NextResponse.json({ ok: true, id: rows?.[0]?.id ?? body.id });
  } catch (err) {
    console.error('[api/gaming/sessions] POST error:', err);
    return NextResponse.json({ ok: true, id: body.id }); // graceful
  }
}

export async function DELETE(req: NextRequest) {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const id = new URL(req.url).searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });

  if (sql) {
    await sql`
      DELETE FROM gaming_sessions WHERE id = ${id} AND user_id = ${userId}
    `.catch(() => {});
  }

  return NextResponse.json({ ok: true });
}
