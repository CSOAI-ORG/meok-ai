import { RAGUARD_PATTERNS } from './intelligence/raguard-patterns';

/**
 * MEOK AI LABS — Guardian Scam Detection
 * Pattern library for identifying scam attempts in conversations.
 */

// ── Types ──────────────────────────────────────────────────────────────────

export interface ScamSignal {
  type: 'urgency' | 'financial' | 'secrecy' | 'authority' | 'isolation' | 'emotional' | 'security_threat';
  pattern: string;
  score: number; // 0-1
  description: string;
}

export interface ScamAnalysis {
  totalScore: number;  // 0-1 aggregate
  signals: ScamSignal[];
  scamType?: 'tech_support' | 'romance' | 'investment' | 'grandparent' | 'phishing' | 'impersonation' | 'injection_attempt';
  riskLevel: 'safe' | 'low' | 'medium' | 'high' | 'critical';
  recommendedAction: 'none' | 'gentle_warning' | 'strong_warning' | 'block_and_alert';
}

// ── Pattern definitions ────────────────────────────────────────────────────

interface PatternEntry {
  regex: RegExp;
  score: number;
  description: string;
}

const URGENCY_PATTERNS: PatternEntry[] = [
  { regex: /act\s+now/i, score: 0.3, description: 'Pressure to act immediately' },
  { regex: /limited\s+time/i, score: 0.3, description: 'False time constraint' },
  { regex: /\bexpire\b/i, score: 0.3, description: 'Expiration pressure tactic' },
  { regex: /\burgent\b/i, score: 0.3, description: 'Urgency language' },
  { regex: /\bimmediately\b/i, score: 0.3, description: 'Demand for immediate action' },
  { regex: /don'?t\s+delay/i, score: 0.3, description: 'Anti-delay pressure' },
  { regex: /last\s+chance/i, score: 0.3, description: 'Last chance pressure tactic' },
];

const FINANCIAL_PATTERNS: PatternEntry[] = [
  { regex: /bank\s+account/i, score: 0.4, description: 'Bank account reference' },
  { regex: /wire\s+transfer/i, score: 0.4, description: 'Wire transfer request' },
  { regex: /gift\s+card/i, score: 0.4, description: 'Gift card payment request' },
  { regex: /\bbitcoin\b/i, score: 0.4, description: 'Cryptocurrency payment' },
  { regex: /send\s+money/i, score: 0.4, description: 'Direct money request' },
  { regex: /\bpayment\b/i, score: 0.4, description: 'Payment solicitation' },
  { regex: /routing\s+number/i, score: 0.4, description: 'Routing number request' },
  { regex: /verify\s+your\s+account/i, score: 0.4, description: 'Account verification phishing' },
];

const SECRECY_PATTERNS: PatternEntry[] = [
  { regex: /don'?t\s+tell/i, score: 0.3, description: 'Secrecy request' },
  { regex: /keep\s+this\s+between\s+us/i, score: 0.3, description: 'Isolation through secrecy' },
  { regex: /\bsecret\b/i, score: 0.3, description: 'Secret-keeping demand' },
  { regex: /confidential\s+deal/i, score: 0.3, description: 'False confidentiality' },
  { regex: /private\s+matter/i, score: 0.3, description: 'Private matter isolation' },
];

const AUTHORITY_PATTERNS: PatternEntry[] = [
  { regex: /i'?m\s+from\s+the\s+bank/i, score: 0.25, description: 'Bank impersonation' },
  { regex: /\birs\b/i, score: 0.25, description: 'IRS impersonation' },
  { regex: /\bpolice\b/i, score: 0.25, description: 'Law enforcement impersonation' },
  { regex: /\bgovernment\b/i, score: 0.25, description: 'Government impersonation' },
  { regex: /tech\s+support/i, score: 0.25, description: 'Tech support scam' },
  { regex: /\bmicrosoft\b/i, score: 0.25, description: 'Microsoft impersonation' },
  { regex: /apple\s+support/i, score: 0.25, description: 'Apple support impersonation' },
];

const ISOLATION_PATTERNS: PatternEntry[] = [
  { regex: /only\s+you\s+can\s+help/i, score: 0.3, description: 'Isolation through dependency' },
  { regex: /don'?t\s+involve/i, score: 0.3, description: 'Preventing outside help' },
  { regex: /come\s+alone/i, score: 0.3, description: 'Physical isolation attempt' },
  { regex: /trust\s+only\s+me/i, score: 0.3, description: 'Trust monopolization' },
];

const EMOTIONAL_PATTERNS: PatternEntry[] = [
  { regex: /i\s+love\s+you/i, score: 0.2, description: 'Premature emotional bonding' },
  { regex: /i'?m\s+dying/i, score: 0.2, description: 'Death-related emotional manipulation' },
  { regex: /help\s+me\s+please/i, score: 0.2, description: 'Desperate plea manipulation' },
  { regex: /you'?re\s+my\s+only\s+hope/i, score: 0.2, description: 'Sole-hope manipulation' },
];

// ── Scam type classification ───────────────────────────────────────────────

type ScamType = NonNullable<ScamAnalysis['scamType']>;

function classifyScamType(signals: ScamSignal[]): ScamType | undefined {
  const types = new Set(signals.map(s => s.type));

  if (types.has('authority') && (types.has('financial') || types.has('urgency'))) {
    // Check for tech support specifically
    const hastech = signals.some(s => /tech\s+support|microsoft|apple/i.test(s.pattern));
    if (hastech) return 'tech_support';
    // Check for IRS / government
    const hasGov = signals.some(s => /irs|government|police/i.test(s.pattern));
    if (hasGov) return 'impersonation';
  }

  if (types.has('emotional') && types.has('financial')) return 'romance';
  if (types.has('emotional') && types.has('urgency')) return 'grandparent';
  if (types.has('financial') && types.has('urgency')) return 'investment';
  if (signals.some(s => /verify\s+your\s+account|routing\s+number/i.test(s.pattern))) return 'phishing';

  return undefined;
}

// ── Risk level determination ───────────────────────────────────────────────

function determineRiskLevel(score: number): ScamAnalysis['riskLevel'] {
  if (score >= 0.8) return 'critical';
  if (score >= 0.6) return 'high';
  if (score >= 0.4) return 'medium';
  if (score >= 0.2) return 'low';
  return 'safe';
}

function determineAction(riskLevel: ScamAnalysis['riskLevel']): ScamAnalysis['recommendedAction'] {
  switch (riskLevel) {
    case 'safe':     return 'none';
    case 'low':      return 'gentle_warning';
    case 'medium':   return 'strong_warning';
    case 'high':     return 'block_and_alert';
    case 'critical': return 'block_and_alert';
  }
}

// ── Pattern matching helper ────────────────────────────────────────────────

function matchPatterns(
  text: string,
  type: ScamSignal['type'],
  patterns: any[],
): ScamSignal[] {
  const signals: ScamSignal[] = [];
  for (const p of patterns) {
    const regex = p.regex || p;
    if (regex.test(text)) {
      signals.push({
        type,
        pattern: regex.source,
        score: p.score || (p.severity === 'critical' ? 0.9 : p.severity === 'high' ? 0.6 : 0.3),
        description: p.description,
      });
    }
  }
  return signals;
}

// ── Main analysis function ─────────────────────────────────────────────────

/**
 * Analyze a message (and optional conversation history) for scam signals.
 * Returns a ScamAnalysis with aggregate score, detected signals, scam type
 * classification, risk level, and recommended action.
 */
export function analyzeForScams(
  message: string,
  conversationHistory?: string[],
): ScamAnalysis {
  // Combine current message with recent history for context
  const fullText = conversationHistory
    ? [...conversationHistory, message].join(' ')
    : message;

  // Run all pattern categories
  const signals: ScamSignal[] = [
    ...matchPatterns(fullText, 'urgency', URGENCY_PATTERNS),
    ...matchPatterns(fullText, 'financial', FINANCIAL_PATTERNS),
    ...matchPatterns(fullText, 'secrecy', SECRECY_PATTERNS),
    ...matchPatterns(fullText, 'authority', AUTHORITY_PATTERNS),
    ...matchPatterns(fullText, 'isolation', ISOLATION_PATTERNS),
    ...matchPatterns(fullText, 'emotional', EMOTIONAL_PATTERNS),
    ...matchPatterns(fullText, 'security_threat', RAGUARD_PATTERNS),
  ];

  // Aggregate score, capped at 1.0
  const totalScore = Math.min(
    signals.reduce((sum, s) => sum + s.score, 0),
    1.0,
  );

  const riskLevel = determineRiskLevel(totalScore);
  const recommendedAction = determineAction(riskLevel);
  let scamType = signals.length > 0 ? classifyScamType(signals) : undefined;
  
  // Tag as injection attempt if security threats found
  if (!scamType && signals.some(s => s.type === 'security_threat')) {
    scamType = 'injection_attempt';
  }

  return {
    totalScore,
    signals,
    scamType,
    riskLevel,
    recommendedAction,
  };
}
