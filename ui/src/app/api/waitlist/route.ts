import { NextRequest, NextResponse } from 'next/server'

interface WaitlistEntry {
  email: string
  name?: string
  interest?: string
  referrer?: string
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as WaitlistEntry

    if (!body.email || typeof body.email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // TODO: Store in DB / send to Mailchimp / Loops / ConvertKit
    // For now, log it and return success
    console.log('[waitlist] New signup:', {
      email: body.email,
      name: body.name,
      interest: body.interest,
      referrer: body.referrer,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "You're on the list. We'll be in touch before March 31.",
    })
  } catch {
    return NextResponse.json({ error: 'Signup failed. Please try again.' }, { status: 500 })
  }
}
