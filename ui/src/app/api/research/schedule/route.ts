/**
 * MEOK AI LABS — Research Scheduling API
 *
 * POST /api/research/schedule - Schedule research for overnight execution
 * GET  /api/research/schedule - Get scheduled research tasks
 * DELETE /api/research/schedule - Cancel scheduled research
 */

import { type NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';

const STORAGE_KEY = 'meok_scheduled_research';

interface ScheduledResearch {
  id: string;
  query: string;
  templateId?: string;
  scheduledFor: string; // ISO timestamp
  createdAt: string;
  status: 'pending' | 'running' | 'completed' | 'cancelled';
  result?: string;
  sources?: Array<{ title: string; url: string }>;
}

function loadScheduled(): ScheduledResearch[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveScheduled(items: ScheduledResearch[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, 50)));
  } catch { /* ignore */ }
}

// Server-side storage (in-memory for demo, would use DB in production)
let serverScheduled: ScheduledResearch[] = [];

export async function GET(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // In production, fetch from user's scheduled research in DB
  return NextResponse.json({
    scheduled: serverScheduled.filter(s => s.status === 'pending'),
    history: serverScheduled.filter(s => s.status === 'completed').slice(0, 20),
  });
}

export async function POST(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: {
    query: string;
    templateId?: string;
    scheduledFor?: string;
    runNow?: boolean;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { query, templateId, scheduledFor, runNow } = body;

  if (!query || typeof query !== 'string') {
    return NextResponse.json({ error: 'Missing or invalid "query" field' }, { status: 400 });
  }

  const scheduled: ScheduledResearch = {
    id: `sr_${Date.now()}`,
    query: query.trim().slice(0, 4000),
    templateId,
    scheduledFor: scheduledFor || new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(), // Default: 8 hours from now
    createdAt: new Date().toISOString(),
    status: runNow ? 'running' : 'pending',
  };

  serverScheduled.push(scheduled);

  // If runNow, trigger the research immediately
  if (runNow) {
    // In production, this would call the research workflow
    // For now, we just mark it as scheduled for immediate processing
    console.log(`[research/schedule] Immediate research triggered: ${query.slice(0, 50)}...`);
  }

  return NextResponse.json({
    success: true,
    scheduled: {
      id: scheduled.id,
      query: scheduled.query,
      scheduledFor: scheduled.scheduledFor,
      status: scheduled.status,
    },
  });
}

export async function DELETE(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing "id" parameter' }, { status: 400 });
  }

  const index = serverScheduled.findIndex(s => s.id === id);
  if (index === -1) {
    return NextResponse.json({ error: 'Scheduled research not found' }, { status: 404 });
  }

  serverScheduled[index].status = 'cancelled';

  return NextResponse.json({ success: true });
}