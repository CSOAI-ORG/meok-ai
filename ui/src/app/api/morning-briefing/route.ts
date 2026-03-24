import { NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'

// GET /api/morning-briefing
// Returns the user's morning briefing data
export async function GET() {
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const user = await currentUser()
  const firstName = user?.firstName ?? 'there'

  const now = new Date()
  const briefing = {
    generated_at: now.toISOString(),
    care_score: 84,
    greeting: `Good morning, ${firstName}`,
    priorities: [
      {
        id: 'pri_001',
        text: 'Review MEOK AI LABS research strategy document',
        priority: 'high' as const,
      },
      {
        id: 'pri_002',
        text: 'Follow up on MEOK AI LABS Companies House registration',
        priority: 'high' as const,
      },
      {
        id: 'pri_003',
        text: 'Check Sovereign Temple council health — last heartbeat 4h ago',
        priority: 'medium' as const,
      },
    ],
    calendar_events: [
      {
        time: '10:00',
        title: 'MEOK product review — roadmap priorities',
        location: 'Google Meet',
      },
      {
        time: '14:30',
        title: 'MEOK AI LABS advisory call',
      },
    ],
    overnight_work: [
      {
        agent: 'Orion-Riri-Hourman',
        task: 'Dream Engine synthesis — 3 memory clusters consolidated',
        status: 'complete' as const,
      },
      {
        agent: 'Sovereign Council',
        task: 'BFT vote cycle 2847 — 220/220 nodes responded',
        status: 'complete' as const,
      },
      {
        agent: 'Memory Indexer',
        task: 'pgvector re-index for new conversation embeddings',
        status: 'pending' as const,
      },
    ],
    sovereign_insight:
      'Your care score has increased 6 points over the last 7 days. The council observed stronger boundary-setting patterns in your evening conversations — this is growth.',
    next_action: 'Open your top priority task and spend 25 focused minutes on it before your first meeting.',
  }

  return NextResponse.json(briefing)
}
