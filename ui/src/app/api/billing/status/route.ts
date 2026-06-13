import { NextResponse } from 'next/server'

// Minimal smoke test — bypasses Clerk, DB, Stripe. If THIS 500s, the issue
// is at the runtime/edge layer, not in our code.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  console.log('[status] handler start')
  try {
    return NextResponse.json({ ok: true, plan: 'explorer', ts: new Date().toISOString() })
  } catch (err) {
    console.error('[status] handler error:', err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
