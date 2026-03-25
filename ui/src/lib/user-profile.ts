/**
 * MEOK AI LABS — User Personality Profiling (Big Five / OCEAN)
 *
 * Infers the user's personality dimensions from conversation patterns.
 * Lightweight heuristic approach — no API calls.
 */

// ── Types ───────────────────────────────────────────────────────────────────

export interface OCEANScores {
  openness: number;          // 0-1 (conventional → experimental)
  conscientiousness: number; // 0-1 (spontaneous → organized)
  extraversion: number;      // 0-1 (reserved → outgoing)
  agreeableness: number;     // 0-1 (challenging → accommodating)
  neuroticism: number;       // 0-1 (stable → emotionally expressive)
}

export interface UserProfile {
  ocean: OCEANScores;
  confidence: number;      // 0-1, ramps with message count
  formality: number;       // 0-1 (casual → formal)
  verbosity: number;       // 0-1 (terse → verbose)
  techLevel: number;       // 0-1 (novice → expert)
  detectedLanguage: string;
  messageCount: number;
  lastUpdated: string;
}

// ── Keyword sets for trait inference ────────────────────────────────────────

const OPENNESS_HIGH = [
  'imagine', 'creative', 'abstract', 'art', 'philosophy', 'metaphor', 'dream',
  'invent', 'hypothetical', 'curious', 'explore', 'wonder', 'experiment',
  'unconventional', 'novel', 'aesthetic', 'poetry', 'vision', 'inspire',
  'culture', 'music', 'fascinating', 'theory', 'possibility', 'what if',
];

const CONSCIENTIOUSNESS_HIGH = [
  'schedule', 'plan', 'organiz', 'deadline', 'checklist', 'task', 'priorit',
  'efficient', 'systematic', 'detail', 'careful', 'thorough', 'disciplin',
  'step by step', 'first', 'second', 'third', 'goal', 'target', 'track',
  'review', 'measure', 'standard', 'procedure', 'routine',
];

const EXTRAVERSION_HIGH = [
  'team', 'party', 'social', 'friend', 'group', 'excit', 'fun', 'love',
  'awesome', 'amazing', 'together', 'everyone', 'community', 'share',
  'celebration', 'enthusi', 'outgoing', 'vibe', 'energy', 'chat',
];

const AGREEABLENESS_HIGH = [
  'please', 'thank', 'sorry', 'appreciate', 'kind', 'help', 'understand',
  'agree', 'cooperat', 'support', 'care', 'gentle', 'consider', 'empath',
  'forgiv', 'patient', 'generous', 'compassion', 'harmoni', 'peace',
  'i think maybe', 'perhaps', 'if you don\'t mind', 'no worries',
];

const NEUROTICISM_HIGH = [
  'anxious', 'worry', 'stress', 'nervous', 'afraid', 'panic', 'overwhelm',
  'doubt', 'insecur', 'scared', 'fear', 'upset', 'frustrated', 'can\'t',
  'failing', 'mess', 'wrong', 'terrible', 'hopeless', 'helpless',
  'i\'m not sure', 'what if', 'i\'m worried', 'i don\'t know if',
];

const TECH_INDICATORS = [
  'api', 'function', 'database', 'server', 'deploy', 'code', 'debug',
  'algorithm', 'framework', 'typescript', 'python', 'docker', 'git',
  'component', 'async', 'middleware', 'endpoint', 'query', 'schema',
  'regex', 'interface', 'class', 'module', 'npm', 'cli', 'ssh',
];

const FORMAL_INDICATORS = [
  'therefore', 'furthermore', 'however', 'consequently', 'regarding',
  'accordingly', 'nevertheless', 'shall', 'whom', 'hence', 'whereas',
  'pursuant', 'hereafter', 'aforementioned', 'kindly', 'sincerely',
];

const CASUAL_INDICATORS = [
  'lol', 'haha', 'gonna', 'wanna', 'gotta', 'kinda', 'btw', 'tbh',
  'nah', 'yeah', 'omg', 'idk', 'imo', 'bruh', 'yo', 'sup', 'np',
  'lmao', 'ngl', 'fr', 'rn', 'lowkey', 'highkey', 'vibe',
];

// ── Analysis functions ──────────────────────────────────────────────────────

function countMatches(text: string, keywords: string[]): number {
  const lower = text.toLowerCase();
  let count = 0;
  for (const kw of keywords) {
    if (lower.includes(kw)) count++;
  }
  return count;
}

function analyzeFormality(messages: string[]): number {
  const allText = messages.join(' ');
  const formalHits = countMatches(allText, FORMAL_INDICATORS);
  const casualHits = countMatches(allText, CASUAL_INDICATORS);

  // Check punctuation patterns
  const properPunctuation = (allText.match(/[.!?]\s/g) ?? []).length;
  const totalSentences = messages.length;
  const punctuationRatio = totalSentences > 0 ? properPunctuation / totalSentences : 0.5;

  // Check capitalization
  const startsWithCap = messages.filter(m => m.length > 0 && m[0] === m[0].toUpperCase()).length;
  const capRatio = messages.length > 0 ? startsWithCap / messages.length : 0.5;

  const formalScore = (formalHits * 0.1 + punctuationRatio * 0.3 + capRatio * 0.3 - casualHits * 0.1);
  return Math.max(0, Math.min(1, formalScore + 0.3));
}

function analyzeVerbosity(messages: string[]): number {
  if (messages.length === 0) return 0.5;
  const avgLength = messages.reduce((sum, m) => sum + m.length, 0) / messages.length;
  // Short: <50 chars → 0.2, Long: >300 chars → 0.9
  return Math.max(0, Math.min(1, (avgLength - 50) / 350 + 0.2));
}

function analyzeTechLevel(messages: string[]): number {
  const allText = messages.join(' ');
  const hits = countMatches(allText, TECH_INDICATORS);
  const density = hits / Math.max(messages.length, 1);
  return Math.max(0, Math.min(1, density * 0.3));
}

/**
 * Analyze a set of user messages to infer OCEAN personality dimensions
 * plus communication style indicators.
 */
export function analyzeOCEAN(
  messages: Array<{ role: string; content: string }>,
): UserProfile {
  const userMessages = messages
    .filter(m => m.role === 'user')
    .map(m => m.content);

  if (userMessages.length === 0) {
    return {
      ocean: { openness: 0.5, conscientiousness: 0.5, extraversion: 0.5, agreeableness: 0.5, neuroticism: 0.5 },
      confidence: 0,
      formality: 0.5,
      verbosity: 0.5,
      techLevel: 0.3,
      detectedLanguage: 'en',
      messageCount: 0,
      lastUpdated: new Date().toISOString(),
    };
  }

  const allText = userMessages.join(' ');
  const wordCount = allText.split(/\s+/).length;
  const msgCount = userMessages.length;

  // Count trait indicators
  const openHits = countMatches(allText, OPENNESS_HIGH);
  const consHits = countMatches(allText, CONSCIENTIOUSNESS_HIGH);
  const extraHits = countMatches(allText, EXTRAVERSION_HIGH);
  const agreeHits = countMatches(allText, AGREEABLENESS_HIGH);
  const neuroHits = countMatches(allText, NEUROTICISM_HIGH);

  // Normalize to 0-1 range (baseline 0.5, shift by hit density)
  const normalize = (hits: number) => Math.max(0, Math.min(1, 0.5 + (hits / Math.max(wordCount, 1)) * 30));

  // Extraversion bonus from exclamation marks and emoji
  const exclamations = (allText.match(/!/g) ?? []).length;
  const emojiCount = (allText.match(/[\u{1F300}-\u{1FAFF}]/gu) ?? []).length;
  const extraBonus = (exclamations + emojiCount) / Math.max(msgCount, 1) * 0.1;

  // Conscientiousness bonus from structured patterns (numbered lists, bullet points)
  const structuredPatterns = (allText.match(/\d+[.)]\s|^[-•*]\s/gm) ?? []).length;
  const consBonus = structuredPatterns / Math.max(msgCount, 1) * 0.15;

  // Question frequency (correlated with openness)
  const questions = (allText.match(/\?/g) ?? []).length;
  const openBonus = questions / Math.max(msgCount, 1) * 0.05;

  const ocean: OCEANScores = {
    openness: normalize(openHits) + openBonus,
    conscientiousness: normalize(consHits) + consBonus,
    extraversion: Math.min(1, normalize(extraHits) + extraBonus),
    agreeableness: normalize(agreeHits),
    neuroticism: normalize(neuroHits),
  };

  // Confidence ramps: 0.1 at 1 msg, 0.3 at 5 msgs, 0.5 at 20, 0.8 at 100
  const confidence = Math.min(0.9, Math.log10(msgCount + 1) * 0.4);

  return {
    ocean,
    confidence,
    formality: analyzeFormality(userMessages),
    verbosity: analyzeVerbosity(userMessages),
    techLevel: analyzeTechLevel(userMessages),
    detectedLanguage: 'en', // Updated by language detection module
    messageCount: msgCount,
    lastUpdated: new Date().toISOString(),
  };
}

// ── Formatting ──────────────────────────────────────────────────────────────

function traitLabel(value: number): string {
  if (value > 0.7) return 'high';
  if (value < 0.3) return 'low';
  return 'moderate';
}

function formalityLabel(value: number): string {
  if (value > 0.7) return 'formal';
  if (value < 0.3) return 'casual';
  return 'balanced';
}

function verbosityLabel(value: number): string {
  if (value > 0.7) return 'detailed';
  if (value < 0.3) return 'concise';
  return 'moderate';
}

function techLabel(value: number): string {
  if (value > 0.6) return 'expert';
  if (value < 0.2) return 'novice';
  return 'intermediate';
}

/**
 * Format user profile as a context block for the system prompt.
 * Only emits if confidence is above threshold.
 */
export function formatProfileContext(profile: UserProfile): string {
  if (profile.confidence < 0.15) return '';

  const { ocean } = profile;
  return `[User profile (inferred, confidence ${(profile.confidence * 100).toFixed(0)}%): ` +
    `O=${traitLabel(ocean.openness)} C=${traitLabel(ocean.conscientiousness)} ` +
    `E=${traitLabel(ocean.extraversion)} A=${traitLabel(ocean.agreeableness)} ` +
    `N=${traitLabel(ocean.neuroticism)} | ` +
    `style: ${formalityLabel(profile.formality)}, ${verbosityLabel(profile.verbosity)}, ` +
    `tech: ${techLabel(profile.techLevel)}]`;
}

/**
 * Merge an existing profile with a new analysis, blending scores by confidence.
 */
export function mergeProfiles(existing: UserProfile | null, fresh: UserProfile): UserProfile {
  if (!existing || existing.confidence < 0.05) return fresh;

  const w1 = existing.confidence;
  const w2 = fresh.confidence;
  const total = w1 + w2;

  const blend = (a: number, b: number) => (a * w1 + b * w2) / total;

  return {
    ocean: {
      openness: blend(existing.ocean.openness, fresh.ocean.openness),
      conscientiousness: blend(existing.ocean.conscientiousness, fresh.ocean.conscientiousness),
      extraversion: blend(existing.ocean.extraversion, fresh.ocean.extraversion),
      agreeableness: blend(existing.ocean.agreeableness, fresh.ocean.agreeableness),
      neuroticism: blend(existing.ocean.neuroticism, fresh.ocean.neuroticism),
    },
    confidence: Math.min(0.95, total * 0.7),
    formality: blend(existing.formality, fresh.formality),
    verbosity: blend(existing.verbosity, fresh.verbosity),
    techLevel: blend(existing.techLevel, fresh.techLevel),
    detectedLanguage: fresh.detectedLanguage || existing.detectedLanguage,
    messageCount: existing.messageCount + fresh.messageCount,
    lastUpdated: fresh.lastUpdated,
  };
}
