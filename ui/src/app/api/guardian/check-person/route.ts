import { NextRequest, NextResponse } from 'next/server'
import { CheckPersonRequestSchema, CONFIDENCE_THRESHOLDS, meetsConfidenceThreshold } from '@/lib/guardian/validation'
import { guardianRateLimit, attachRateLimitHeaders } from '@/lib/guardian/rate-limit'
import { logGuardianAction } from '@/lib/guardian/audit-log'

type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH'

const URGENCY_PHRASES = [
  'act now',
  'limited time',
  'urgent',
  'immediately',
  'right away',
  'asap',
  'don\'t delay',
  'time sensitive',
  'expires today',
  'last chance',
  'final notice',
  'must respond',
  'respond immediately',
  'deadline',
  'before it\'s too late',
]

const PREMIUM_RATE_PREFIXES = [
  '0871',
  '0872',
  '0873',
  '0874',
  '0875',
  '0876',
  '0877',
  '0878',
  '0879',
  '0900',
  '0906',
  '0907',
  '0908',
  '0909',
  '0970',
  '0976',
  '0982',
  '0983',
  '0988',
  '0989',
]

function isUKConsumerNumber(phone: string): boolean {
  const digits = phone.replace(/[\s\-().+]/g, '')
  // UK mobile: 07xxx (11 digits) or +447xxx (12 with country code)
  return (
    /^07\d{9}$/.test(digits) ||
    /^447\d{9}$/.test(digits) ||
    /^00447\d{9}$/.test(digits)
  )
}

function isPremiumRateNumber(phone: string): boolean {
  const digits = phone.replace(/[\s\-().+]/g, '')
  return PREMIUM_RATE_PREFIXES.some((prefix) => digits.startsWith(prefix))
}

function assessPhone(phone: string): string | null {
  if (isPremiumRateNumber(phone)) {
    return 'Premium rate phone number'
  }
  if (!isUKConsumerNumber(phone)) {
    // Non-UK or unrecognised format — flag as a signal
    return 'Non-UK or unrecognised phone number format'
  }
  return null
}

async function assessCompanyName(company: string): Promise<{
  signal: string | null
  url: string | null
}> {
  // Companies House API: live lookup when API key is available, otherwise manual search link
  const encodedName = encodeURIComponent(company)
  const url = `https://find-and-update.company-information.service.gov.uk/search?q=${encodedName}`
  const apiKey = process.env.COMPANIES_HOUSE_API_KEY

  if (apiKey) {
    try {
      const apiUrl = `https://api.company-information.service.gov.uk/search/companies?q=${encodedName}&items_per_page=1`
      const res = await fetch(apiUrl, {
        headers: { Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}` },
        signal: AbortSignal.timeout(5_000),
      })
      if (res.ok) {
        const data = await res.json() as { total_results?: number }
        if ((data.total_results ?? 0) > 0) {
          return { signal: null, url }
        }
        return { signal: 'Company name not found on Companies House', url }
      }
    } catch (e) {
      console.warn('[guardian/check-person] Companies House API failed (falling back):', e)
    }
  }

  // Fallback: return manual search link with unverified status
  return {
    signal: 'Unverified company name — verify via Companies House link',
    url,
  }
}

function detectUrgencyLanguage(context: string): string | null {
  const lower = context.toLowerCase()
  const matched = URGENCY_PHRASES.filter((phrase) => lower.includes(phrase))
  if (matched.length > 0) {
    return 'Urgency language detected'
  }
  return null
}

function scoreToRiskLevel(score: number): RiskLevel {
  if (score >= 0.6) return 'HIGH'
  if (score >= 0.35) return 'MEDIUM'
  return 'LOW'
}

function buildRecommendation(
  riskLevel: RiskLevel,
  signals: string[]
): string {
  if (riskLevel === 'HIGH') {
    return 'Exercise extreme caution. Do not share personal information, send money, or make any commitments. Consider reporting to Action Fraud (0300 123 2040).'
  }
  if (riskLevel === 'MEDIUM') {
    return 'Proceed carefully. Verify the person\'s identity through independent channels before sharing sensitive information or agreeing to anything.'
  }
  return signals.length === 0
    ? 'No significant risk signals detected. Standard precautions apply.'
    : 'Low risk detected but remain vigilant. Verify identity if in doubt.'
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const startTime = Date.now()
  let statusCode = 500

  try {
    // 0. Rate limiting check
    const rateLimitResponse = await guardianRateLimit(req, 'CHECK_PERSON')
    if (rateLimitResponse) {
      return rateLimitResponse
    }

    const body = await req.json()
    const { name, company, phone, context, user_id, confidence_threshold } = body

    // 1. Validate using Zod schema
    const validation = CheckPersonRequestSchema.safeParse({
      name,
      company,
      phone,
      context,
      user_id,
      confidence_threshold,
    })

    if (!validation.success) {
      statusCode = 400
      return NextResponse.json(
        { error: validation.error.issues.map(e => e.message).join('; ') },
        { status: 400 }
      )
    }

    const { name: validName, company: validCompany, phone: validPhone, context: validContext, user_id: validUserId, confidence_threshold: validThreshold } = validation.data

    const signals: string[] = []
    let companiesHouseUrl: string | undefined

    // 2. Risk signals

    // Phone assessment
    if (validPhone && validPhone.trim().length > 0) {
      const phoneSignal = assessPhone(validPhone.trim())
      if (phoneSignal) signals.push(phoneSignal)
    }

    // Company name check
    if (validCompany && validCompany.trim().length > 0) {
      const { signal, url } = await assessCompanyName(validCompany.trim())
      if (signal) signals.push(signal)
      if (url) companiesHouseUrl = url
    }

    // Context urgency scan
    if (validContext && validContext.trim().length > 0) {
      const urgencySignal = detectUrgencyLanguage(validContext)
      if (urgencySignal) signals.push(urgencySignal)
    }

    // 3. Score: base 0.1, each signal adds 0.2, capped at 0.95
    const risk_score = Math.min(0.1 + signals.length * 0.2, 0.95)
    const risk_level = scoreToRiskLevel(risk_score)
    const recommendation = buildRecommendation(risk_level, signals)
    const confidence = risk_score
    const meetsThreshold = meetsConfidenceThreshold(confidence, validThreshold)

    const response: {
      risk_score: number
      risk_level: RiskLevel
      signals: string[]
      recommendation: string
      confidence: number
      companies_house_url?: string
    } = {
      risk_score,
      risk_level,
      signals,
      recommendation,
      confidence,
    }

    if (companiesHouseUrl) {
      response.companies_house_url = companiesHouseUrl
    }

    statusCode = 200

    const duration = Date.now() - startTime
    logGuardianAction(req, '/api/guardian/check-person', {
      status: 200,
      riskLevel: risk_level,
      confidence,
      signals,
    }, duration)

    const jsonResponse = NextResponse.json(response)
    return attachRateLimitHeaders(jsonResponse, 'CHECK_PERSON',
      req.headers.get('x-forwarded-for')?.split(',')[0] || (req as any).ip || '0.0.0.0',
      validUserId || null
    )
  } catch (err) {
    statusCode = 500
    const duration = Date.now() - startTime
    logGuardianAction(req, '/api/guardian/check-person', {
      status: 500,
      error: err instanceof Error ? err.message : 'Unknown error',
    }, duration)

    return NextResponse.json(
      { error: 'Person check failed' },
      { status: 500 }
    )
  }
}
