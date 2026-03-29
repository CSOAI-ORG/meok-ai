import { NextRequest, NextResponse } from 'next/server'

interface WaitlistEntry {
  email: string
  name?: string
  interest?: string
  referrer?: string
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

// ── Loops.so integration ────────────────────────────────────────────────────
// Set LOOPS_API_KEY in Vercel env vars to enable. Free at loops.so.
// Optionally set LOOPS_WAITLIST_LIST_ID and LOOPS_WAITLIST_TRANSACTIONAL_ID.
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

    // Add to waitlist mailing list if ID configured
    const listId = process.env.LOOPS_WAITLIST_LIST_ID
    if (listId) {
      await fetch('https://app.loops.so/api/v1/lists/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({ email: entry.email, listId }),
      })
    }

    // Fire transactional welcome email if template configured
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
// Set RESEND_API_KEY + WAITLIST_NOTIFY_EMAIL to get an email per signup.
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
<p><strong>Time:</strong> ${new Date().toISOString()}</p>`,
      }),
    })
  } catch (err) {
    console.error('[waitlist] Resend exception:', err)
  }
}

// ── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as WaitlistEntry

    if (!body.email || typeof body.email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const entry: WaitlistEntry = {
      email: body.email.toLowerCase().trim(),
      name: typeof body.name === 'string' ? body.name.trim() : undefined,
      interest: typeof body.interest === 'string' ? body.interest.trim() : undefined,
      referrer: typeof body.referrer === 'string' ? body.referrer.trim() : undefined,
    }

    // Always log — captured by Vercel function logs, never lost
    console.log('[waitlist]', JSON.stringify({
      email: entry.email,
      name: entry.name,
      interest: entry.interest,
      referrer: entry.referrer,
      ts: new Date().toISOString(),
    }))

    // Best-effort integrations (parallel, never block response)
    await Promise.allSettled([
      sendToLoops(entry),
      notifyViaResend(entry),
    ])

    return NextResponse.json({
      success: true,
      message: "You're on the list. We'll be in touch before launch.",
    })
  } catch {
    return NextResponse.json({ error: 'Signup failed. Please try again.' }, { status: 500 })
  }
}
