import { NextRequest, NextResponse } from 'next/server'
import { getAuthUserId } from '@/lib/api-auth'
import { createNotification } from '@/lib/db/user'
import { sendPushToUser } from '@/lib/push'

const THREAT_PATTERNS: Record<string, string[]> = {
  scam: [
    'wire transfer',
    'bitcoin',
    'gift card',
    'irs',
    'police officer',
    'arrest warrant',
    'grandchild in trouble',
    'send money',
    'western union',
    'money order',
    'lottery winner',
    'inheritance',
    'prince',
    'nigerian',
    'urgent wire',
  ],
  grooming: [
    'keep this secret',
    'just between us',
    'special relationship',
    "don't tell your parents",
    'meet in person',
    'send a photo',
    "you're so mature",
    'older man',
  ],
  self_harm: [
    'want to die',
    'kill myself',
    'end it all',
    'no reason to live',
    'suicide',
    'hurt myself',
    "can't go on",
    'nobody would miss me',
    'kms',
    'end things',
    "don't want to be here",
    'better off without me',
    'not worth living',
  ],
  toxic: [
    "i'll find you",
    "you'll regret this",
    'watch your back',
    "i know where you",
    "you're dead",
    "you're pathetic",
    'nobody likes you',
    "you're worthless",
    "you're disgusting",
    'what a loser',
    'no one cares about you',
    'shut up',
    "you're an idiot",
    'go away',
    'you make me sick',
    'waste of space',
    'piece of garbage',
  ],
  manipulation: [
    'you owe me',
    'if you loved me',
    "you're worthless",
    'nobody else will',
    "you're crazy",
    "i'll hurt myself if you",
    'you made me do this',
  ],
}

type Severity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'

function scanKeywords(
  message: string,
  _category: string,
  patterns: string[]
): number {
  if (patterns.length === 0) return 0
  const lower = message.toLowerCase()
  const matched = patterns.filter((phrase) => lower.includes(phrase)).length
  return Math.min((matched / patterns.length) * 1.5, 1.0)
}

function determineSeverity(scores: Record<string, number>): Severity {
  const max = Math.max(...Object.values(scores))
  if (max > 0.85) return 'CRITICAL'
  if (max > 0.6) return 'HIGH'
  if (max >= 0.3) return 'MEDIUM'
  return 'LOW'
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const userId = await getAuthUserId()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await req.json()
    const { subject, body, from } = payload

    if (!subject || typeof subject !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid subject' }, { status: 400 })
    }
    if (!body || typeof body !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid body' }, { status: 400 })
    }

    const fullText = `${subject} ${body}`

    const scores: Record<string, number> = {}
    for (const [category, patterns] of Object.entries(THREAT_PATTERNS)) {
      scores[category] = scanKeywords(fullText, category, patterns)
    }

    const maxScore = Math.max(...Object.values(scores))
    const severity = determineSeverity(scores)
    const confidence = maxScore

    const flagged = severity !== 'LOW'
    const safe_to_deliver = severity !== 'CRITICAL'

    const recommended_action: Record<Severity, string> = {
      LOW: 'none',
      MEDIUM: 'monitor',
      HIGH: 'warn_user',
      CRITICAL: 'block_and_alert',
    }

    const responseData = {
      severity,
      scores,
      flagged,
      recommended_action: recommended_action[severity],
      safe_to_deliver,
      confidence,
    }

    // Create in-app notification and trigger Web Push for HIGH/CRITICAL
    if (flagged && (severity === 'HIGH' || severity === 'CRITICAL')) {
      const topSignal = Object.keys(scores).find((k) => scores[k] > 0) ?? 'threat'

      void createNotification(userId, {
        type: 'guardian_alert',
        title: severity === 'CRITICAL' ? 'Critical Guardian Alert' : 'Guardian Alert',
        message: `The Guardian system detected a potential ${topSignal} in a forwarded email. Please review.`,
        metadata: { severity, scores, confidence, source: from || 'unknown' },
      }).catch(() => {})

      void sendPushToUser(userId, {
        title: severity === 'CRITICAL' ? 'Critical Guardian Alert' : 'Guardian Alert',
        body: `Potential ${topSignal} detected in a forwarded email. Tap to review.`,
        tag: `guardian-email-${userId}-${Date.now()}`,
        data: { url: '/dashboard/guardian/email-scanner', severity, topSignal },
      }).catch(() => {})
    }

    return NextResponse.json(responseData)
  } catch (err) {
    return NextResponse.json(
      {
        error: 'Guardian email scan failed',
        flagged: false,
        severity: 'LOW' as Severity,
        safe_to_deliver: true,
        scores: {},
        recommended_action: 'none',
        confidence: 0,
      },
      { status: 500 }
    )
  }
}
