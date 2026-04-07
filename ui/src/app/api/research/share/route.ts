/**
 * MEOK AI LABS — Research Sharing API
 *
 * POST /api/research/share - Create shareable research link
 * GET  /api/research/share - Get shared research by ID
 */

import { type NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';

// In-memory store for shared research (use DB in production)
const SHARED_RESEARCH = new Map<string, {
  query: string;
  answer: string;
  sources: Array<{ title: string; url: string; snippet?: string }>;
  createdAt: string;
  createdBy: string;
  expiresAt: string;
}>();

export async function POST(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: {
    query: string;
    answer: string;
    sources?: Array<{ title: string; url: string; snippet?: string }>;
    expiresIn?: number; // hours
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { query, answer, sources, expiresIn = 168 } = body; // default 7 days

  if (!query || !answer) {
    return NextResponse.json({ error: 'Missing query or answer' }, { status: 400 });
  }

  // Generate share ID
  const shareId = `sr_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  const createdAt = new Date().toISOString();
  const expiresAt = new Date(Date.now() + expiresIn * 60 * 60 * 1000).toISOString();

  SHARED_RESEARCH.set(shareId, {
    query,
    answer,
    sources: sources || [],
    createdAt,
    createdBy: userId,
    expiresAt,
  });

  return NextResponse.json({
    shareId,
    url: `/research/shared/${shareId}`,
    expiresAt,
  });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const shareId = searchParams.get('id');

  if (!shareId) {
    return NextResponse.json({ error: 'Missing "id" parameter' }, { status: 400 });
  }

  const shared = SHARED_RESEARCH.get(shareId);
  
  if (!shared) {
    return NextResponse.json({ error: 'Shared research not found' }, { status: 404 });
  }

  // Check expiration
  if (new Date(shared.expiresAt) < new Date()) {
    SHARED_RESEARCH.delete(shareId);
    return NextResponse.json({ error: 'Link has expired' }, { status: 410 });
  }

  return NextResponse.json(shared);
}