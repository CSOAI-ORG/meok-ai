import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// ---------------------------------------------------------------------------
// Mock notification data (replace with DB queries later)
// ---------------------------------------------------------------------------
const MOCK_NOTIFICATIONS = [
  {
    id: 'n1',
    type: 'care_signal' as const,
    title: 'Care Signal',
    message: 'Your companion Luna noticed you seemed stressed today and adjusted her tone.',
    timestamp: '5 min ago',
    read: false,
  },
  {
    id: 'n2',
    type: 'guardian_alert' as const,
    title: 'Guardian Alert',
    message: 'Unusual login attempt detected from new device in Berlin, Germany.',
    timestamp: '23 min ago',
    read: false,
  },
  {
    id: 'n3',
    type: 'level_up' as const,
    title: 'Level Up!',
    message: 'You reached Companion Level 7 \u2014 new conversation modes unlocked.',
    timestamp: '1 hr ago',
    read: false,
  },
  {
    id: 'n4',
    type: 'system' as const,
    title: 'System Update',
    message: 'MEOK AI OS v0.4.2 deployed. Memory recall speed improved by 30%.',
    timestamp: '3 hr ago',
    read: true,
  },
  {
    id: 'n5',
    type: 'guardian_alert' as const,
    title: 'Content Flag',
    message: 'A message in your conversation was flagged for review by the guardian system.',
    timestamp: '6 hr ago',
    read: true,
  },
];

// ---------------------------------------------------------------------------
// GET  \u2014  return notifications for the current user
// ---------------------------------------------------------------------------
export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Future: fetch from DB filtered by userId
  return NextResponse.json({ notifications: MOCK_NOTIFICATIONS });
}

// ---------------------------------------------------------------------------
// PATCH  \u2014  mark notifications as read
// ---------------------------------------------------------------------------
export async function PATCH(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const ids: string[] = body?.ids;

  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ error: 'ids array required' }, { status: 400 });
  }

  // Future: UPDATE notifications SET read = true WHERE id IN (ids) AND user_id = userId
  return NextResponse.json({ success: true });
}
