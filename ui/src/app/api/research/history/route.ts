/**
 * MEOK AI LABS — Research History API
 *
 * GET  /api/research/history - Get research history
 * POST /api/research/history - Save research to history
 * DELETE /api/research/history - Delete research entry
 * POST /api/research/favorite - Add to favorites
 * DELETE /api/research/favorite - Remove from favorites
 * POST /api/research/share - Share research
 */

import { type NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';

const HISTORY_KEY = 'meok_research_history';
const FAVORITES_KEY = 'meok_research_favorites';

export async function GET(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type') || 'history'; // history, favorites
  const limit = parseInt(searchParams.get('limit') || '50');
  const offset = parseInt(searchParams.get('offset') || '0');

  // In production, fetch from database
  // For now, return empty arrays (client uses localStorage)
  return NextResponse.json({
    entries: [],
    total: 0,
    limit,
    offset,
  });
}

export async function POST(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: {
    query: string;
    answer: string;
    sources?: Array<{ title: string; url: string; snippet?: string }>;
    templateId?: string;
    metadata?: Record<string, unknown>;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { query, answer, sources, templateId, metadata } = body;

  if (!query || !answer) {
    return NextResponse.json({ error: 'Missing query or answer' }, { status: 400 });
  }

  const entry = {
    id: `r_${Date.now()}`,
    query,
    answer,
    sources: sources || [],
    templateId,
    metadata,
    createdAt: new Date().toISOString(),
  };

  // In production, save to database
  // Return entry for client to save locally
  return NextResponse.json({
    success: true,
    entry,
  });
}

export async function DELETE(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const type = searchParams.get('type') || 'history';

  if (!id) {
    return NextResponse.json({ error: 'Missing "id" parameter' }, { status: 400 });
  }

  // In production, delete from database
  return NextResponse.json({ success: true });
}

// Favorites sub-route
export async function PUT(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { entryId: string; action: 'add' | 'remove' };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { entryId, action } = body;

  if (!entryId) {
    return NextResponse.json({ error: 'Missing "entryId"' }, { status: 400 });
  }

  // In production, update database
  return NextResponse.json({
    success: true,
    action,
    entryId,
  });
}