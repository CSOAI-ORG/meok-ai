/**
 * MEOK AI LABS — Voice Fingerprinting
 *
 * Tracks per-character voice consistency to ensure each companion
 * maintains its unique communication style across interactions.
 */

// ── Types ──────────────────────────────────────────────────────────────────

export interface VoicePattern {
  avgSentenceLength: number;       // average words per sentence
  questionRatio: number;           // 0–1, proportion of sentences that are questions
  vocabularyComplexity: number;    // 0–1, based on average word length and syllable proxy
  formalityScore: number;          // 0–1, higher = more formal
}

export interface ConsistencyReport {
  driftScore: number;              // 0–1, 0 = perfect match, 1 = completely different
  dimensions: {
    sentenceLength: number;        // 0–1 drift
    questionRatio: number;         // 0–1 drift
    vocabularyComplexity: number;  // 0–1 drift
    formalityScore: number;        // 0–1 drift
  };
}

// ── Constants ──────────────────────────────────────────────────────────────

/** Words that indicate formal register. */
const FORMAL_MARKERS = [
  'therefore', 'however', 'furthermore', 'consequently', 'nevertheless',
  'moreover', 'accordingly', 'thus', 'hence', 'wherein',
  'notwithstanding', 'henceforth', 'thereby', 'whereas', 'shall',
  'ought', 'indeed', 'perhaps', 'regarding', 'concerning',
];

/** Words that indicate informal register. */
const INFORMAL_MARKERS = [
  'hey', 'yeah', 'nah', 'gonna', 'wanna', 'kinda', 'sorta',
  'lol', 'omg', 'btw', 'tbh', 'imo', 'nope', 'yep', 'cool',
  'awesome', 'dude', 'literally', 'basically', 'stuff', 'things',
  'ok', 'okay', 'right?', 'y\'know', 'like',
];

/** Contractions indicate informality. */
const CONTRACTION_PATTERN = /\b\w+n't\b|\b\w+'re\b|\b\w+'ve\b|\b\w+'ll\b|\b\w+'d\b|\b\w+'s\b/gi;

// ── Core Functions ─────────────────────────────────────────────────────────

/**
 * Analyze a block of text and extract its voice pattern signature.
 */
export function analyzeVoicePattern(text: string): VoicePattern {
  if (!text || text.trim().length === 0) {
    return { avgSentenceLength: 0, questionRatio: 0, vocabularyComplexity: 0, formalityScore: 0.5 };
  }

  const sentences = splitSentences(text);
  const words = text.split(/\s+/).filter((w) => w.length > 0);

  // Average sentence length (in words)
  const avgSentenceLength = sentences.length > 0
    ? words.length / sentences.length
    : 0;

  // Question ratio
  const questionCount = sentences.filter((s) => s.trim().endsWith('?')).length;
  const questionRatio = sentences.length > 0 ? questionCount / sentences.length : 0;

  // Vocabulary complexity: proxy via average word length (normalized)
  const avgWordLength = words.length > 0
    ? words.reduce((sum, w) => sum + w.replace(/[^a-zA-Z]/g, '').length, 0) / words.length
    : 0;
  // Typical range: 3 (simple) to 8 (complex), map to 0–1
  const vocabularyComplexity = Math.min(1, Math.max(0, (avgWordLength - 3) / 5));

  // Formality score
  const formalityScore = computeFormalityScore(text, words);

  return {
    avgSentenceLength: Math.round(avgSentenceLength * 100) / 100,
    questionRatio: Math.round(questionRatio * 1000) / 1000,
    vocabularyComplexity: Math.round(vocabularyComplexity * 1000) / 1000,
    formalityScore: Math.round(formalityScore * 1000) / 1000,
  };
}

/**
 * Check consistency between a baseline voice pattern and a current sample.
 * Returns a drift score from 0 (identical) to 1 (completely divergent).
 */
export function checkConsistency(baseline: VoicePattern, current: VoicePattern): ConsistencyReport {
  // Sentence length drift: normalize against baseline (max reasonable divergence ~20 words)
  const sentenceLengthDrift = baseline.avgSentenceLength > 0
    ? Math.min(1, Math.abs(current.avgSentenceLength - baseline.avgSentenceLength) / 20)
    : 0;

  // Question ratio drift: absolute difference (both 0–1)
  const questionRatioDrift = Math.abs(current.questionRatio - baseline.questionRatio);

  // Vocabulary complexity drift
  const vocabularyDrift = Math.abs(current.vocabularyComplexity - baseline.vocabularyComplexity);

  // Formality drift
  const formalityDrift = Math.abs(current.formalityScore - baseline.formalityScore);

  // Weighted composite: formality and sentence length matter most for "voice"
  const driftScore =
    sentenceLengthDrift * 0.3 +
    questionRatioDrift * 0.15 +
    vocabularyDrift * 0.25 +
    formalityDrift * 0.3;

  return {
    driftScore: Math.round(driftScore * 1000) / 1000,
    dimensions: {
      sentenceLength: Math.round(sentenceLengthDrift * 1000) / 1000,
      questionRatio: Math.round(questionRatioDrift * 1000) / 1000,
      vocabularyComplexity: Math.round(vocabularyDrift * 1000) / 1000,
      formalityScore: Math.round(formalityDrift * 1000) / 1000,
    },
  };
}

/**
 * Generate a system-prompt directive to maintain voice consistency.
 */
export function formatConsistencyDirective(baseline: VoicePattern): string {
  const lengthDesc =
    baseline.avgSentenceLength < 8 ? 'short, punchy'
    : baseline.avgSentenceLength < 15 ? 'moderate-length'
    : 'longer, flowing';

  const questionDesc =
    baseline.questionRatio > 0.3 ? 'Ask questions frequently.'
    : baseline.questionRatio > 0.15 ? 'Ask occasional questions.'
    : 'Use questions sparingly.';

  const complexityDesc =
    baseline.vocabularyComplexity > 0.6 ? 'sophisticated, multi-syllable vocabulary'
    : baseline.vocabularyComplexity > 0.3 ? 'accessible but not simplistic vocabulary'
    : 'simple, direct vocabulary';

  const formalityDesc =
    baseline.formalityScore > 0.7 ? 'formal and measured'
    : baseline.formalityScore > 0.4 ? 'conversational but articulate'
    : 'casual and relaxed';

  return [
    'Maintain these voice patterns:',
    `- Use ${lengthDesc} sentences (avg ~${Math.round(baseline.avgSentenceLength)} words).`,
    `- ${questionDesc}`,
    `- Prefer ${complexityDesc}.`,
    `- Keep your tone ${formalityDesc}.`,
  ].join('\n');
}

// ── Internal Helpers ───────────────────────────────────────────────────────

function splitSentences(text: string): string[] {
  // Split on sentence-ending punctuation followed by space or end
  return text
    .split(/(?<=[.!?])\s+/)
    .filter((s) => s.trim().length > 0);
}

function computeFormalityScore(text: string, words: string[]): number {
  if (words.length === 0) return 0.5;

  const lowerText = text.toLowerCase();
  const lowerWords = words.map((w) => w.toLowerCase().replace(/[^a-z']/g, ''));

  // Count formal markers
  let formalCount = 0;
  for (const marker of FORMAL_MARKERS) {
    if (lowerWords.includes(marker)) formalCount++;
  }

  // Count informal markers
  let informalCount = 0;
  for (const marker of INFORMAL_MARKERS) {
    if (lowerWords.includes(marker)) informalCount++;
  }

  // Count contractions (informal signal)
  const contractions = lowerText.match(CONTRACTION_PATTERN);
  const contractionCount = contractions ? contractions.length : 0;

  // Normalize counts per 100 words
  const wordScale = 100 / Math.max(1, words.length);
  const formalScore = formalCount * wordScale;
  const informalScore = (informalCount + contractionCount * 0.5) * wordScale;

  // Convert to 0–1 scale: positive = formal, negative = informal
  const rawDiff = formalScore - informalScore;
  // Map roughly [-5, 5] to [0, 1]
  return Math.min(1, Math.max(0, 0.5 + rawDiff / 10));
}
