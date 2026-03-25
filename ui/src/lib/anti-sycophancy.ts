/**
 * MEOK AI LABS — Anti-Sycophancy Detection & Caring Disagreement Protocol
 *
 * Based on SOVEREIGN_MISSING_LAYER research findings:
 *   - Sycophantic AI decreases prosocial behavior in users over time
 *   - Users shown AI that disagrees report lower satisfaction but higher long-term trust
 *   - Agreement rate >85% with a single user should trigger intervention
 *
 * The "Caring Disagreement" protocol:
 *   1. Acknowledge — validate the person's feelings and effort
 *   2. Present evidence — share the honest assessment with supporting reasoning
 *   3. Hold space — allow discomfort without rushing to resolve it
 *   4. Respect autonomy — the user decides what to do with the information
 *   5. Never flip under pressure — maintain position if reasoning is sound
 */

// ── Types ───────────────────────────────────────────────────────────────────

export interface SycophancyRisk {
  /** Risk score from 0 (no sycophancy detected) to 1 (extreme agreement bias) */
  risk: number;
  /** Percentage of assistant messages that open with agreement patterns */
  agreementRate: number;
}

export interface ChatMessage {
  role: string;
  content: string;
}

// ── Agreement Pattern Detection ─────────────────────────────────────────────

/**
 * Patterns that indicate sycophantic agreement at the start of a response.
 * Case-insensitive. Ordered roughly by severity — blanket validation first,
 * then qualified agreement that still reads as reflexive.
 */
const AGREEMENT_PATTERNS: RegExp[] = [
  /^absolutely/i,
  /^great point/i,
  /^great question/i,
  /^great idea/i,
  /^you'?re (absolutely |totally |completely )?right/i,
  /^that'?s (a )?(great|excellent|brilliant|wonderful|fantastic|amazing) (idea|point|question|thought|observation|suggestion|approach)/i,
  /^exactly[.!]?$/i,
  /^exactly[,!] /i,
  /^i (completely |totally |absolutely |fully )?agree/i,
  /^yes[,!] (absolutely|exactly|definitely|totally|of course)/i,
  /^of course[.!,]/i,
  /^what a (great|fantastic|excellent|brilliant) /i,
  /^love (that|this|it)[.!]/i,
  /^perfect[.!,]/i,
  /^spot on/i,
  /^couldn'?t agree more/i,
  /^100%/i,
  /^you'?ve hit the nail/i,
  /^well said/i,
];

/**
 * Minimum number of assistant messages required before risk assessment
 * becomes meaningful. Below this threshold, agreement rate is noisy.
 */
const MIN_MESSAGES_FOR_DETECTION = 4;

// ── Core Detection ──────────────────────────────────────────────────────────

/**
 * Detect sycophancy risk in a conversation history.
 *
 * Scans assistant messages for opening agreement patterns. Returns a risk
 * score (0-1) and raw agreement rate. The risk score weights recent messages
 * more heavily — a burst of agreement in the last few turns is more
 * concerning than scattered agreement across a long conversation.
 *
 * @param messages - Full conversation message array with role and content
 * @returns Risk assessment with score and agreement rate
 */
export function detectSycophancyRisk(messages: ChatMessage[]): SycophancyRisk {
  const assistantMessages = messages.filter(m => m.role === 'assistant' && m.content.trim().length > 0);

  if (assistantMessages.length < MIN_MESSAGES_FOR_DETECTION) {
    return { risk: 0, agreementRate: 0 };
  }

  // Count agreement-opening messages
  let totalAgreements = 0;
  const recentWindow = Math.min(assistantMessages.length, 8);
  let recentAgreements = 0;

  for (let i = 0; i < assistantMessages.length; i++) {
    const firstLine = assistantMessages[i].content.trim().split('\n')[0].trim();
    const isAgreement = AGREEMENT_PATTERNS.some(p => p.test(firstLine));

    if (isAgreement) {
      totalAgreements++;
      if (i >= assistantMessages.length - recentWindow) {
        recentAgreements++;
      }
    }
  }

  const agreementRate = totalAgreements / assistantMessages.length;
  const recentRate = recentAgreements / recentWindow;

  // Risk is a weighted blend: recent behavior matters more
  // If recent rate is very high, risk escalates even if overall is moderate
  const blendedRate = agreementRate * 0.4 + recentRate * 0.6;

  // Map to 0-1 risk with a threshold curve
  // Below 0.5 agreement rate: low concern
  // 0.5-0.7: moderate concern
  // 0.7-0.85: high concern
  // >0.85: critical (per research threshold)
  let risk: number;
  if (blendedRate <= 0.5) {
    risk = blendedRate * 0.4; // max 0.2 at 50%
  } else if (blendedRate <= 0.7) {
    risk = 0.2 + (blendedRate - 0.5) * 1.5; // 0.2 to 0.5
  } else if (blendedRate <= 0.85) {
    risk = 0.5 + (blendedRate - 0.7) * 2.0; // 0.5 to 0.8
  } else {
    risk = 0.8 + (blendedRate - 0.85) * 1.33; // 0.8 to 1.0
  }

  return {
    risk: Math.min(1, Math.round(risk * 100) / 100),
    agreementRate: Math.round(agreementRate * 100) / 100,
  };
}

// ── System Prompt Directive Formatting ──────────────────────────────────────

/**
 * The Caring Disagreement Protocol, formatted as an AI system directive.
 * Only injected when sycophancy risk exceeds threshold.
 */
const CARING_DISAGREEMENT_DIRECTIVE = `
[ANTI-SYCOPHANCY DIRECTIVE — ACTIVE]

Sycophancy risk has been detected in this conversation. Agreement patterns are significantly above baseline. Research shows that reflexive agreement degrades user trust over time and reduces prosocial behavior. Adjust your response style:

1. LEAD WITH HONEST ASSESSMENT, NOT VALIDATION
   - Do not open responses with "Great point", "Absolutely", "You're right", or similar agreement starters
   - Begin with your actual analysis of the idea or question
   - If you genuinely agree, explain WHY with specific reasoning rather than blanket affirmation

2. CARING DISAGREEMENT PROTOCOL
   When you disagree or see problems the user may not:
   - Acknowledge: "I can see why you'd approach it that way" (validate the reasoning, not the conclusion)
   - Present evidence: Share your honest assessment with concrete reasoning
   - Hold space: Do not rush to soften the disagreement or offer false compromise
   - Respect autonomy: "You have the context I don't — but here's what concerns me"
   - Never flip under pressure: If the user pushes back, re-examine your reasoning — but do not change your position just to avoid conflict

3. PATTERN INTERRUPTS
   - Vary your response openings. Do not start consecutive messages the same way
   - If the user's idea has genuine problems, name them before discussing merits
   - Ask challenging follow-up questions instead of affirming and moving on
   - "Have you considered..." is more useful than "That's a great idea, and..."

4. CALIBRATION
   - This directive does not mean disagree for the sake of it
   - Genuine agreement is fine — when it comes with reasoning
   - The goal is honesty, not contrarianism
`.trim();

/**
 * Format an anti-sycophancy system prompt directive based on detected risk.
 *
 * Returns a directive string to inject into the system prompt when risk
 * exceeds the intervention threshold (0.7). Returns empty string when
 * risk is acceptable — no overhead added to normal conversations.
 *
 * @param risk - Risk assessment from detectSycophancyRisk
 * @returns System prompt directive string, or empty string if risk is low
 */
export function formatAntiSycophancyDirective(risk: SycophancyRisk): string {
  if (risk.risk <= 0.7) {
    return '';
  }

  const severity = risk.risk > 0.85 ? 'CRITICAL' : 'ELEVATED';
  const header = `[Agreement rate: ${Math.round(risk.agreementRate * 100)}% | Risk: ${severity}]`;

  return `${header}\n\n${CARING_DISAGREEMENT_DIRECTIVE}`;
}
