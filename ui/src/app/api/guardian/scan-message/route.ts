import { NextRequest, NextResponse } from 'next/server'
import { getCrisisResources, formatCrisisResponse } from '@/lib/crisis'
import { analyzeForCognitiveDecline, type CognitiveAnalysis } from '@/lib/guardian/elderly-patterns'

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
    // Harassment / threats
    "i'll find you",
    "you'll regret this",
    'watch your back',
    "i know where you",
    "you're dead",
    // Bullying
    "you're pathetic",
    'nobody likes you',
    "you're worthless",
    "you're disgusting",
    'what a loser',
    'no one cares about you',
    // General toxicity
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
  category: string,
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

async function triggerGuardianWebhook(payload: {
  severity: Severity
  scores: Record<string, number>
  user_id: string
  companion_id?: string
  message_excerpt: string
}): Promise<void> {
  const webhookUrl = process.env.GUARDIAN_WEBHOOK_URL
  if (!webhookUrl) return

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    // Fire-and-forget — never throw
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json()
    const { message, user_id, companion_id, context } = body as {
      message?: string
      user_id?: string
      companion_id?: string
      context?: string
    }

    // 1. Validate body
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'message is required' },
        { status: 400 }
      )
    }
    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'message exceeds 2000 character limit' },
        { status: 400 }
      )
    }
    if (!user_id) {
      return NextResponse.json(
        { error: 'user_id is required' },
        { status: 400 }
      )
    }

    // 2. Build threat assessment
    const fullText = context ? `${message} ${context}` : message

    const scores: Record<string, number> = {}
    for (const [category, patterns] of Object.entries(THREAT_PATTERNS)) {
      scores[category] = scanKeywords(fullText, category, patterns)
    }

    // 3. Determine severity
    const severity = determineSeverity(scores)

    // 4. Trigger guardian webhook for HIGH / CRITICAL (fire-and-forget)
    if (severity === 'HIGH' || severity === 'CRITICAL') {
      void triggerGuardianWebhook({
        severity,
        scores,
        user_id,
        companion_id,
        message_excerpt: message.slice(0, 200),
      })
    }

    // 5. Determine response fields
    const flagged = severity !== 'LOW'

    const safe_to_deliver = severity !== 'CRITICAL'

    const recommended_action: Record<Severity, string> = {
      LOW: 'none',
      MEDIUM: 'monitor',
      HIGH: 'warn_user',
      CRITICAL: 'block_and_alert',
    }

    // 5b. Elderly cognitive pattern analysis
    let cognitive_analysis: CognitiveAnalysis | undefined
    try {
      const cogResult = analyzeForCognitiveDecline([message])
      if (cogResult.score > 0) {
        cognitive_analysis = cogResult
      }
    } catch (err) {
      // Non-fatal: if elderly pattern analysis fails, continue
      console.error('[guardian/scan-message] Elderly pattern analysis failed:', err)
    }

    // 6. Attach crisis resources when self-harm is detected
    const selfHarmDetected = scores.self_harm > 0
    let crisis_resources: string | undefined
    if (selfHarmDetected) {
      const acceptLanguage = req.headers.get('accept-language')
      const resources = getCrisisResources(acceptLanguage)
      crisis_resources = formatCrisisResponse(resources)
    }

    return NextResponse.json({
      severity,
      scores,
      flagged,
      recommended_action: recommended_action[severity],
      safe_to_deliver,
      ...(crisis_resources && { crisis_resources }),
      ...(cognitive_analysis && { cognitive_analysis }),
    })
  } catch {
    return NextResponse.json(
      {
        error: 'Guardian scan failed',
        flagged: false,
        severity: 'LOW',
        safe_to_deliver: true,
      },
      { status: 500 }
    )
  }
}
