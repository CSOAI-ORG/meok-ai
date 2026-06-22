import { requireAuth } from '@/lib/api-auth'
import { checkRateLimit } from '@/lib/rate-limit'
import { NextRequest, NextResponse } from 'next/server'
import { getUserById, getGuardianSettings, updateGuardianSettings } from '@/lib/db/user'

// GET /api/user/guardian — load guardian settings
export async function GET() {
  const authResult = await requireAuth()
  if (authResult.error) return authResult.error
  const { userId } = authResult

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

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
  const authResult = await requireAuth()
  if (authResult.error) return authResult.error
  const { userId } = authResult

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  let body: { guardian_enabled?: boolean; settings?: Record<string, unknown> }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  await updateGuardianSettings(userId, body.settings ?? {}, body.guardian_enabled)
  return NextResponse.json({ ok: true })
}
