/**
 * MEOK AI LABS — Guardian Elderly-Specific Patterns
 * Cognitive decline indicators for proactive family safety monitoring.
 */

// ── Types ──────────────────────────────────────────────────────────────────

export interface CognitiveAnalysis {
  score: number;          // 0-1 aggregate
  indicators: string[];   // Human-readable descriptions of detected patterns
  recommendation: string; // Suggested next step
}

// ── Pattern categories ─────────────────────────────────────────────────────

const CONFUSION_PATTERNS: { regex: RegExp; label: string }[] = [
  { regex: /i\s+forgot/i, label: 'Memory lapse: "I forgot"' },
  { regex: /what\s+were\s+we\s+talking\s+about/i, label: 'Lost thread of conversation' },
  { regex: /who\s+are\s+you/i, label: 'Identity confusion: "Who are you?"' },
  { regex: /where\s+am\s+i/i, label: 'Place disorientation: "Where am I?"' },
  { regex: /i\s+don'?t\s+remember/i, label: 'Memory difficulty: "I don\'t remember"' },
  { regex: /what\s+did\s+you\s+say/i, label: 'Difficulty retaining recent information' },
  { regex: /i'?m\s+confused/i, label: 'Self-reported confusion' },
  { regex: /i\s+can'?t\s+think/i, label: 'Difficulty with thought processes' },
];

const TIME_DISORIENTATION_PATTERNS: { regex: RegExp; label: string }[] = [
  { regex: /what\s+day\s+is\s+it/i, label: 'Day disorientation: "What day is it?"' },
  { regex: /is\s+it\s+morning/i, label: 'Time-of-day confusion' },
  { regex: /what\s+time\s+is\s+it/i, label: 'Time awareness difficulty' },
  { regex: /what\s+year\s+is\s+it/i, label: 'Year disorientation' },
  { regex: /what\s+month\s+is\s+it/i, label: 'Month disorientation' },
  { regex: /is\s+it\s+night/i, label: 'Day/night confusion' },
];

// ── Repeated question detection ────────────────────────────────────────────

/**
 * Normalize a message for comparison: lowercase, collapse whitespace,
 * strip punctuation. This helps detect semantically identical questions
 * even with minor formatting differences.
 */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Detect repeated questions: same normalized question asked 3+ times
 * in the recent message window.
 */
function detectRepeatedQuestions(messages: string[]): string[] {
  const indicators: string[] = [];

  // Only consider messages that look like questions
  const questions = messages
    .filter(m => m.includes('?') || /^(who|what|where|when|why|how|do|does|is|are|can|will)\b/i.test(m.trim()))
    .map(normalize);

  // Count occurrences
  const counts = new Map<string, number>();
  for (const q of questions) {
    if (q.length < 5) continue; // Skip very short fragments
    counts.set(q, (counts.get(q) ?? 0) + 1);
  }

  for (const [question, count] of counts) {
    if (count >= 3) {
      indicators.push(
        `Repeated question (${count}x): "${question.slice(0, 60)}${question.length > 60 ? '...' : ''}"`,
      );
    }
  }

  return indicators;
}

// ── Score & recommendation mapping ─────────────────────────────────────────

function getRecommendation(score: number): string {
  if (score >= 0.7) {
    return 'Multiple cognitive indicators detected. We recommend discussing these observations with a healthcare provider and considering enabling Family Guardian alerts.';
  }
  if (score >= 0.4) {
    return 'Some signs of confusion or memory difficulty detected. Consider checking in and monitoring over the next few conversations.';
  }
  if (score >= 0.2) {
    return 'Minor indicators noted. This may be normal — continue monitoring.';
  }
  return 'No significant cognitive concerns detected.';
}

// ── Main analysis function ─────────────────────────────────────────────────

/**
 * Analyze a window of recent messages for indicators of cognitive decline.
 * Looks for repeated questions, confusion language, and time disorientation.
 *
 * @param messages - Array of recent user messages (most recent last)
 */
export function analyzeForCognitiveDecline(messages: string[]): CognitiveAnalysis {
  if (messages.length === 0) {
    return { score: 0, indicators: [], recommendation: getRecommendation(0) };
  }

  const indicators: string[] = [];

  // 1. Repeated questions (weighted 0.4 per unique repeated question, max 0.6)
  const repeated = detectRepeatedQuestions(messages);
  indicators.push(...repeated);
  const repeatedScore = Math.min(repeated.length * 0.4, 0.6);

  // 2. Confusion patterns (weighted 0.15 each, max 0.45)
  const fullText = messages.join(' ');
  let confusionHits = 0;
  for (const p of CONFUSION_PATTERNS) {
    if (p.regex.test(fullText)) {
      indicators.push(p.label);
      confusionHits++;
    }
  }
  const confusionScore = Math.min(confusionHits * 0.15, 0.45);

  // 3. Time disorientation (weighted 0.2 each, max 0.4)
  let timeHits = 0;
  for (const p of TIME_DISORIENTATION_PATTERNS) {
    if (p.regex.test(fullText)) {
      indicators.push(p.label);
      timeHits++;
    }
  }
  const timeScore = Math.min(timeHits * 0.2, 0.4);

  // Aggregate, capped at 1.0
  const score = Math.min(repeatedScore + confusionScore + timeScore, 1.0);

  return {
    score,
    indicators,
    recommendation: getRecommendation(score),
  };
}
