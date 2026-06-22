import { NextRequest, NextResponse } from 'next/server'

interface WaitlistEntry {
  email: string
  name?: string
  interest?: string
  referrer?: string
  metadata?: Record<string, string | boolean | number>
}

/** Escape user input for safe HTML interpolation */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// ── In-memory fallback storage ───────────────────────────────────────────────
// Keyed by normalized email so signups dedupe within a single server instance.
const memoryWaitlist = new Map<string, WaitlistEntry & { signedUpAt: string }>()

// ── Upstash Redis integration ────────────────────────────────────────────────
// Set UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN to enable.
function upstashEnabled(): boolean {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
}

async function getUpstashRedis() {
  if (!upstashEnabled()) return null
  try {
    const { Redis } = await import('@upstash/redis')
    return new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })
  } catch (err) {
    console.error('[waitlist] Upstash init error:', err)
    return null
  }
}

const WAITLIST_HASH_KEY = 'waitlist:public-beta'

async function persistToUpstash(entry: WaitlistEntry): Promise<boolean> {
  const redis = await getUpstashRedis()
  if (!redis) return false
  try {
    await redis.hset(WAITLIST_HASH_KEY, {
      [entry.email]: JSON.stringify({ ...entry, signedUpAt: new Date().toISOString() }),
    })
    return true
  } catch (err) {
    console.error('[waitlist] Upstash persist error:', err)
    return false
  }
}

async function getUpstashCount(): Promise<number | null> {
  const redis = await getUpstashRedis()
  if (!redis) return null
  try {
    return (await redis.hlen(WAITLIST_HASH_KEY)) as number
  } catch (err) {
    console.error('[waitlist] Upstash count error:', err)
    return null
  }
}

// ── Loops.so integration ────────────────────────────────────────────────────
async function sendToLoops(entry: WaitlistEntry): Promise<boolean> {
  const apiKey = process.env.LOOPS_API_KEY
  if (!apiKey) return false

  try {
    const contactBody: Record<string, string> = {
      email: entry.email,
      source: 'meok-waitlist',
      subscribed: 'true',
    }
    if (entry.name) contactBody.firstName = entry.name.split(' ')[0]
    if (entry.interest) contactBody.userGroup = entry.interest
    if (entry.referrer) contactBody.referrer = entry.referrer

    const res = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify(contactBody),
    })

    if (!res.ok) {
      console.error('[waitlist] Loops error:', res.status, await res.text())
      return false
    }

    const listId = process.env.LOOPS_WAITLIST_LIST_ID
    if (listId) {
      await fetch('https://app.loops.so/api/v1/lists/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({ email: entry.email, listId }),
      })
    }

    const transactionalId = process.env.LOOPS_WAITLIST_TRANSACTIONAL_ID
    if (transactionalId) {
      await fetch('https://app.loops.so/api/v1/transactional', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({
          transactionalId,
          email: entry.email,
          dataVariables: { name: entry.name ?? 'there' },
        }),
      })
    }

    return true
  } catch (err) {
    console.error('[waitlist] Loops exception:', err)
    return false
  }
}

// ── Resend notification (optional) ─────────────────────────────────────────
async function notifyViaResend(entry: WaitlistEntry): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL
  if (!apiKey || !notifyEmail) return

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from: 'MEOK Waitlist <noreply@meok.ai>',
        to: notifyEmail,
        subject: `New waitlist signup: ${entry.email}`,
        html: `<p><strong>Email:</strong> ${escapeHtml(entry.email)}</p>
<p><strong>Name:</strong> ${escapeHtml(entry.name ?? '—')}</p>
<p><strong>Interest:</strong> ${escapeHtml(entry.interest ?? '—')}</p>
<p><strong>Referrer:</strong> ${escapeHtml(entry.referrer ?? '—')}</p>
${entry.metadata ? `<p><strong>Metadata:</strong> ${escapeHtml(JSON.stringify(entry.metadata))}</p>` : ''}
<p><strong>Time:</strong> ${new Date().toISOString()}</p>`,
      }),
    })
  } catch (err) {
    console.error('[waitlist] Resend exception:', err)
  }
}

// ── Database persistence (best-effort) ───────────────────────────────────────
async function persistToDB(entry: WaitlistEntry): Promise<boolean> {
  try {
    const { sql } = await import('@/lib/db')
    await sql`
      INSERT INTO waitlist (email, name, interest, referrer)
      VALUES (${entry.email}, ${entry.name ?? null}, ${entry.interest ?? null}, ${entry.referrer ?? null})
      ON CONFLICT (email) DO UPDATE SET
        name = COALESCE(EXCLUDED.name, waitlist.name),
        interest = COALESCE(EXCLUDED.interest, waitlist.interest),
        updated_at = NOW()
    `
    return true
  } catch (err) {
    console.error('[waitlist] DB persist error:', err)
    return false
  }
}

async function getDBCount(): Promise<number | null> {
  try {
    const { sql } = await import('@/lib/db')
    const rows = await sql<{ count: number }[]>`SELECT COUNT(*)::int as count FROM waitlist`
    return rows[0]?.count ?? null
  } catch (err) {
    console.error('[waitlist] DB count error:', err)
    return null
  }
}

// ── Count resolution ─────────────────────────────────────────────────────────
async function getWaitlistCount(): Promise<number> {
  const upstashCount = await getUpstashCount()
  if (upstashCount !== null) return upstashCount

  const dbCount = await getDBCount()
  if (dbCount !== null) return dbCount

  return memoryWaitlist.size
}

// ── Route handlers ───────────────────────────────────────────────────────────

export async function GET() {
  try {
    const count = await getWaitlistCount()
    return NextResponse.json({ success: true, count })
  } catch {
    return NextResponse.json({ success: false, count: memoryWaitlist.size }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as WaitlistEntry

    if (!body.email || typeof body.email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const metadata: WaitlistEntry['metadata'] =
      typeof body.metadata === 'object' && body.metadata !== null ? body.metadata : undefined

    const entry: WaitlistEntry = {
      email: body.email.toLowerCase().trim(),
      name: typeof body.name === 'string' ? body.name.trim() : undefined,
      interest: typeof body.interest === 'string' ? body.interest.trim() : undefined,
      referrer:
        typeof body.referrer === 'string'
          ? body.referrer.trim()
          : metadata
            ? JSON.stringify(metadata)
            : undefined,
      metadata,
    }

    // Always keep a server-side copy so /api/waitlist count never reads zero.
    memoryWaitlist.set(entry.email, { ...entry, signedUpAt: new Date().toISOString() })

    console.log(
      '[waitlist]',
      JSON.stringify({
        email: entry.email,
        name: entry.name,
        interest: entry.interest,
        referrer: entry.referrer,
        metadata: entry.metadata,
        ts: new Date().toISOString(),
      })
    )

    // Best-effort persistence (parallel, never block response)
    await Promise.allSettled([
      persistToDB(entry),
      persistToUpstash(entry),
      sendToLoops(entry),
      notifyViaResend(entry),
    ])

    return NextResponse.json({
      success: true,
      message: "You're on the list. We'll be in touch before launch.",
      count: await getWaitlistCount(),
    })
  } catch {
    return NextResponse.json({ error: 'Signup failed. Please try again.' }, { status: 500 })
  }
}
