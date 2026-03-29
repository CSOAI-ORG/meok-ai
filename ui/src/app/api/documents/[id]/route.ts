/**
 * MEOK AI LABS — Document by ID
 *
 * GET    /api/documents/[id]  — get full document
 * DELETE /api/documents/[id]  — delete document
 */

import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/api-auth';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;
  const { id } = await params;

  if (!sql) return NextResponse.json({ error: 'DB unavailable' }, { status: 503 });

  try {
    const rows = await sql`
      SELECT id, title, content, word_count, created_at, updated_at
      FROM documents
      WHERE id = ${id} AND user_id = ${userId}
      LIMIT 1
    `;
    if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ document: rows[0] });
  } catch (err) {
    console.error('[api/documents/[id]] GET error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;
  const { id } = await params;

  if (!sql) return NextResponse.json({ ok: false, reason: 'db_unavailable' });

  try {
    await sql`DELETE FROM documents WHERE id = ${id} AND user_id = ${userId}`;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/documents/[id]] DELETE error:', err);
    return NextResponse.json({ ok: false, error: 'Failed to delete' }, { status: 500 });
  }
}
