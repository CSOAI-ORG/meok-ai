/**
 * MEOK AI LABS — Documents API
 *
 * GET  /api/documents          — list user's documents (newest first)
 * POST /api/documents          — create or upsert a document
 */

import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/api-auth';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';

// GET — list documents
export async function GET() {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  if (!sql) return NextResponse.json({ documents: [] });

  try {
    const rows = await sql`
      SELECT id, title, word_count, created_at, updated_at,
             LEFT(content, 200) AS preview
      FROM documents
      WHERE user_id = ${userId}
      ORDER BY updated_at DESC
      LIMIT 50
    `;
    return NextResponse.json({ documents: rows });
  } catch (err) {
    console.error('[api/documents] GET error:', err);
    return NextResponse.json({ documents: [] });
  }
}

// POST — create or save document
export async function POST(req: NextRequest) {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const body = await req.json() as { id?: string; title?: string; content?: string };
  const title = (body.title ?? 'Untitled').slice(0, 500);
  const content = (body.content ?? '').slice(0, 500_000); // 500KB limit
  const wordCount = content.split(/\s+/).filter(Boolean).length;

  if (!sql) {
    return NextResponse.json({ ok: true, persisted: false, reason: 'db_unavailable' });
  }

  try {
    if (body.id) {
      // Update existing document (verify ownership)
      await sql`
        UPDATE documents
        SET title = ${title}, content = ${content}, word_count = ${wordCount}, updated_at = NOW()
        WHERE id = ${body.id} AND user_id = ${userId}
      `;
      return NextResponse.json({ ok: true, id: body.id });
    } else {
      // Create new document
      const rows = await sql`
        INSERT INTO documents (user_id, title, content, word_count)
        VALUES (${userId}, ${title}, ${content}, ${wordCount})
        RETURNING id
      `;
      const id = (rows[0] as { id: string }).id;
      return NextResponse.json({ ok: true, id });
    }
  } catch (err) {
    console.error('[api/documents] POST error:', err);
    return NextResponse.json({ ok: false, error: 'Failed to save document' }, { status: 500 });
  }
}
