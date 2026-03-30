/**
 * GET /api/user/conversations/search?q=quantum+computing
 *
 * Full-text search across all user's conversation messages.
 * Uses PostgreSQL tsvector + GIN index for sub-5ms queries.
 * Supports Google-like syntax: "exact phrase", OR, -exclusion.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/api-auth';
import { sql } from '@/lib/db';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const authResult = await requireAuth({ skipRateLimit: true });
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const query = req.nextUrl.searchParams.get('q');
  if (!query || query.trim().length < 2) {
    return NextResponse.json({ error: 'Query must be at least 2 characters' }, { status: 400 });
  }

  if (!sql) return NextResponse.json({ results: [] });

  try {
    const rows = await sql`
      SELECT
        m.id,
        m.conversation_id,
        m.role,
        m.content,
        m.created_at,
        c.title AS conversation_title,
        c.companion_id,
        ts_rank_cd(m.search_vector, websearch_to_tsquery('english', ${query})) AS rank,
        ts_headline('english', m.content, websearch_to_tsquery('english', ${query}),
          'StartSel=<mark>, StopSel=</mark>, MaxWords=50, MinWords=20') AS highlight
      FROM conversation_messages m
      JOIN conversations c ON c.id = m.conversation_id
      WHERE c.user_id = ${userId}
        AND m.search_vector @@ websearch_to_tsquery('english', ${query})
      ORDER BY rank DESC
      LIMIT 20
    `;

    return NextResponse.json({ results: rows, query });
  } catch (err) {
    console.error('[conversations/search] Error:', err);
    return NextResponse.json({ results: [], error: 'Search failed' });
  }
}
