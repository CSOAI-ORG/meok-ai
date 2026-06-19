/**
 * MEOK AI LABS — Scorecard Sharing API
 *
 * POST /api/scorecard/share - Create a shareable compliance/care scorecard link
 * GET  /api/scorecard/share?id=<id> - Fetch a shared scorecard by id
 *
 * Mirrors the established /api/research/share pattern. Backs the public
 * read-only viewer at /s/[id]. Producers (certification / attestation flows,
 * or an authed scorecard tool) POST a scorecard and receive a share link.
 *
 * Storage is an in-memory Map (per-instance, same caveat as research/share).
 * Swap for the kv-cache / a durable store when share links must survive
 * restarts and span instances.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';

type ScorecardCriterion = {
  label: string;
  passed?: boolean;
  score?: number; // 0-100
  detail?: string;
};

type SharedScorecard = {
  systemName?: string;
  framework?: string;
  overallScore?: number | null; // 0-100
  status?: string;
  criteria?: ScorecardCriterion[];
  certificateId?: string | null;
  verifyUrl?: string;
  createdAt: string;
  createdBy: string;
  expiresAt: string;
};

// In-memory store for shared scorecards (use a durable store in production)
const SHARED_SCORECARDS = new Map<string, SharedScorecard>();

export async function POST(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: {
    systemName?: string;
    framework?: string;
    overallScore?: number | null;
    status?: string;
    criteria?: ScorecardCriterion[];
    certificateId?: string | null;
    verifyUrl?: string;
    expiresIn?: number; // hours
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const {
    systemName,
    framework,
    overallScore = null,
    status,
    criteria,
    certificateId = null,
    verifyUrl,
    expiresIn = 168, // default 7 days
  } = body;

  if (!systemName && typeof overallScore !== 'number') {
    return NextResponse.json(
      { error: 'Missing scorecard data (provide at least systemName or overallScore)' },
      { status: 400 }
    );
  }

  const shareId = `sc_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  const createdAt = new Date().toISOString();
  const expiresAt = new Date(Date.now() + expiresIn * 60 * 60 * 1000).toISOString();

  SHARED_SCORECARDS.set(shareId, {
    systemName,
    framework,
    overallScore,
    status,
    criteria: criteria || [],
    certificateId,
    verifyUrl,
    createdAt,
    createdBy: userId,
    expiresAt,
  });

  return NextResponse.json({
    shareId,
    url: `/s/${shareId}`,
    expiresAt,
  });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const shareId = searchParams.get('id');

  if (!shareId) {
    return NextResponse.json({ error: 'Missing "id" parameter' }, { status: 400 });
  }

  const shared = SHARED_SCORECARDS.get(shareId);

  if (!shared) {
    return NextResponse.json({ error: 'Shared scorecard not found' }, { status: 404 });
  }

  if (new Date(shared.expiresAt) < new Date()) {
    SHARED_SCORECARDS.delete(shareId);
    return NextResponse.json({ error: 'Link has expired' }, { status: 410 });
  }

  return NextResponse.json(shared);
}
