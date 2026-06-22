import { NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';

export interface MemorySearchResult {
  id: string;
  content: string;
  type: 'episodic' | 'semantic';
  created_at: string;
  tags: string[];
}

const mockResults: MemorySearchResult[] = [
  {
    id: 'mem-001',
    content: 'User expressed excitement about the upcoming product launch and mentioned wanting to share it with their team.',
    type: 'episodic',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    tags: ['work', 'launch', 'excitement'],
  },
  {
    id: 'mem-002',
    content: 'Prefers concise answers in the morning and more detailed explanations in the evening.',
    type: 'semantic',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(),
    tags: ['preferences', 'routine', 'communication'],
  },
  {
    id: 'mem-003',
    content: 'Discussed plans for a hiking trip to the Lake District next spring with family.',
    type: 'episodic',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    tags: ['travel', 'family', 'hiking'],
  },
  {
    id: 'mem-004',
    content: 'Knows Python, TypeScript, and Rust. Enjoys building developer tools and CLI utilities.',
    type: 'semantic',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
    tags: ['skills', 'programming', 'hobbies'],
  },
  {
    id: 'mem-005',
    content: 'Celebrated a milestone birthday recently and reflected on goals for the next decade.',
    type: 'episodic',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 45).toISOString(),
    tags: ['personal', 'milestones', 'reflection'],
  },
];

export async function GET(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const q = req.nextUrl.searchParams.get('q')?.trim() ?? '';

  if (!q) {
    return NextResponse.json({ results: [] }, { status: 200 });
  }

  // Return mock results filtered loosely by query presence
  const filtered = mockResults.slice(0, Math.min(5, Math.max(3, mockResults.length)));

  return NextResponse.json({ results: filtered, query: q }, { status: 200 });
}
