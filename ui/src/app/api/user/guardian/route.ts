import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { getUserById, getGuardianSettings, updateGuardianSettings } from '@/lib/db/user'

// GET /api/user/guardian — load guardian settings
export async function GET() {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const user = await getUserById(userId)
  const settings = await getGuardianSettings(userId)

  return NextResponse.json({
    guardian_enabled: user?.guardian_enabled ?? false,
    settings: settings ?? {
      scan_messages: true,
      alert_email: null,
      alert_phone: null,
      child_safe_mode: false,
      threat_threshold: 0.85,
      relationship_shield: true,
      social_guardian: true,
      notifications: { email: true, push: true, in_app_only: false },
    },
  })
}

// POST /api/user/guardian — save guardian settings
export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body: { guardian_enabled?: boolean; settings?: Record<string, unknown> }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  await updateGuardianSettings(userId, body.settings ?? {}, body.guardian_enabled)
  return NextResponse.json({ ok: true })
}
