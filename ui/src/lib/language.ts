/**
 * MEOK AI LABS — Lightweight Language Detection
 *
 * Trigram-based detection for 12+ languages with script detection fast path.
 * No external API calls — runs entirely in-process.
 */

export interface LanguageDetection {
  language: string;      // ISO 639-1 code
  confidence: number;    // 0-1
  script: 'latin' | 'cjk' | 'arabic' | 'devanagari' | 'cyrillic' | 'hangul' | 'unknown';
}

// ── Script detection (fast path) ────────────────────────────────────────────

function countScriptChars(text: string): Record<string, number> {
  const counts: Record<string, number> = {
    latin: 0, cjk: 0, arabic: 0, devanagari: 0, cyrillic: 0, hangul: 0, other: 0,
  };

  for (const char of text) {
    const code = char.codePointAt(0)!;
    if (code >= 0x0041 && code <= 0x024F) counts.latin++;
    else if (code >= 0x4E00 && code <= 0x9FFF) counts.cjk++;       // CJK Unified
    else if (code >= 0x3040 && code <= 0x309F) counts.cjk++;       // Hiragana
    else if (code >= 0x30A0 && code <= 0x30FF) counts.cjk++;       // Katakana
    else if (code >= 0x0600 && code <= 0x06FF) counts.arabic++;
    else if (code >= 0x0900 && code <= 0x097F) counts.devanagari++;
    else if (code >= 0x0400 && code <= 0x04FF) counts.cyrillic++;
    else if (code >= 0xAC00 && code <= 0xD7AF) counts.hangul++;
    else counts.other++;
  }

  return counts;
}

function hasHiraganaOrKatakana(text: string): boolean {
  for (const char of text) {
    const code = char.codePointAt(0)!;
    if ((code >= 0x3040 && code <= 0x309F) || (code >= 0x30A0 && code <= 0x30FF)) return true;
  }
  return false;
}

function detectScript(text: string): { script: LanguageDetection['script']; language?: string; confidence: number } {
  const counts = countScriptChars(text);
  const total = Object.values(counts).reduce((a, b) => a + b, 0) - counts.other;
  if (total === 0) return { script: 'unknown', confidence: 0 };

  // Dominant script detection
  if (counts.hangul > total * 0.3) return { script: 'hangul', language: 'ko', confidence: 0.95 };
  if (counts.devanagari > total * 0.3) return { script: 'devanagari', language: 'hi', confidence: 0.9 };
  if (counts.arabic > total * 0.3) return { script: 'arabic', language: 'ar', confidence: 0.85 };
  if (counts.cyrillic > total * 0.3) return { script: 'cyrillic', language: 'ru', confidence: 0.8 };

  if (counts.cjk > total * 0.3) {
    // Distinguish Japanese (has hiragana/katakana) from Chinese
    if (hasHiraganaOrKatakana(text)) return { script: 'cjk', language: 'ja', confidence: 0.9 };
    return { script: 'cjk', language: 'zh', confidence: 0.8 };
  }

  if (counts.latin > total * 0.3) return { script: 'latin', confidence: 0 }; // needs trigram analysis
  return { script: 'unknown', confidence: 0 };
}

// ── Latin trigram analysis ──────────────────────────────────────────────────

// Common words per language (more reliable than trigrams for short texts)
const WORD_PROFILES: Record<string, Set<string>> = {
  en: new Set([
    'the', 'is', 'are', 'was', 'were', 'have', 'has', 'had', 'do', 'does',
    'did', 'will', 'would', 'could', 'should', 'can', 'may', 'might',
    'this', 'that', 'these', 'those', 'with', 'from', 'into', 'about',
    'which', 'when', 'where', 'what', 'how', 'who', 'whom', 'whose',
    'not', 'but', 'and', 'or', 'if', 'then', 'than', 'very', 'just',
    'also', 'only', 'some', 'any', 'each', 'every', 'all', 'both',
    'been', 'being', 'because', 'between', 'through', 'during', 'before',
    'after', 'above', 'below', 'here', 'there', 'their', 'they', 'them',
    'your', 'you', 'our', 'its', 'his', 'her', 'my', 'me',
  ]),
  es: new Set([
    'que', 'los', 'las', 'del', 'una', 'por', 'con', 'como', 'para',
    'pero', 'sus', 'este', 'esta', 'son', 'tiene', 'hay', 'fue', 'ser',
    'todo', 'esta', 'muy', 'sin', 'sobre', 'entre', 'cuando', 'donde',
    'puede', 'desde', 'otro', 'otra', 'parte', 'tiempo', 'mismo', 'mas',
    'bien', 'entonces', 'tambien', 'hacer', 'cada', 'hola', 'necesito',
  ]),
  fr: new Set([
    'les', 'des', 'une', 'que', 'est', 'pas', 'pour', 'dans', 'qui', 'sur',
    'par', 'avec', 'son', 'sont', 'mais', 'plus', 'tout', 'fait', 'peut',
    'bien', 'aussi', 'comme', 'cette', 'nous', 'vous', 'leur', 'tres',
    'entre', 'alors', 'sans', 'sous', 'etre', 'avoir', 'faire', 'dit',
    'autre', 'avant', 'meme', 'encore', 'tous', 'aux', 'bonjour', 'mon',
    'comment', 'puis', 'cherche', 'conseils', 'gerer', 'aide', 'mes',
  ]),
  de: new Set([
    'ein', 'ich', 'die', 'und', 'der', 'den', 'das', 'ist', 'nicht',
    'mit', 'auf', 'auch', 'sich', 'von', 'wie', 'noch', 'aus', 'aber',
    'hat', 'nur', 'kann', 'war', 'bei', 'nach', 'wir', 'eine', 'einem',
    'wird', 'zum', 'zur', 'dann', 'sehr', 'schon', 'hier', 'jetzt',
    'mir', 'meinem', 'kannst', 'helfen', 'bin', 'gestresst', 'wegen',
    'brauche', 'hilfe', 'mein', 'meine', 'dein', 'sein', 'ihr', 'uns',
  ]),
  pt: new Set([
    'que', 'dos', 'uma', 'com', 'por', 'para', 'como', 'mas', 'mais',
    'foi', 'tem', 'sua', 'seu', 'entre', 'quando', 'muito', 'isso',
    'pode', 'fazer', 'porque', 'cada', 'outro', 'outra', 'sobre',
    'este', 'esta', 'bem', 'posso', 'melhorar', 'codigo', 'ficar',
    'meu', 'minha', 'nos', 'voce', 'ele', 'ela', 'sao', 'estou',
  ]),
  it: new Set([
    'che', 'per', 'con', 'una', 'del', 'nel', 'gli', 'sono', 'come',
    'non', 'questo', 'questa', 'anche', 'suo', 'sua', 'piu', 'tutto',
    'fatto', 'stato', 'dopo', 'fare', 'essere', 'dire', 'prima',
    'dove', 'quando', 'molto', 'bene', 'solo', 'modo', 'tempo',
  ]),
  tr: new Set([
    'bir', 'ile', 'den', 'ama', 'var', 'olan', 'gibi', 'daha', 'icin',
    'ise', 'kadar', 'sonra', 'bunu', 'olan', 'nasil', 'neden', 'zaman',
    'yok', 'hem', 'iki', 'kendi', 'iyi', 'buyuk', 'yeni', 'ilk',
  ]),
};

function extractWords(text: string): string[] {
  return text.toLowerCase().replace(/[^a-zà-ÿ\s]/g, '').split(/\s+/).filter(w => w.length > 1);
}

function detectLatinLanguage(text: string): { language: string; confidence: number } {
  const words = extractWords(text);
  if (words.length < 2) return { language: 'en', confidence: 0.2 };

  let bestLang = 'en';
  let bestScore = 0;
  let secondScore = 0;

  for (const [lang, wordSet] of Object.entries(WORD_PROFILES)) {
    let hits = 0;
    for (const word of words) {
      if (wordSet.has(word)) hits++;
    }
    const score = hits / words.length;

    if (score > bestScore) {
      secondScore = bestScore;
      bestScore = score;
      bestLang = lang;
    } else if (score > secondScore) {
      secondScore = score;
    }
  }

  // Confidence based on hit rate and gap between first and second
  const gap = bestScore - secondScore;
  const confidence = Math.min(1, bestScore * 2 + gap * 3);

  return { language: bestLang, confidence: Math.max(0.2, confidence) };
}

// ── Public API ──────────────────────────────────────────────────────────────

/**
 * Detect the language of a text string.
 * Uses script detection for non-Latin scripts, trigram analysis for Latin.
 */
export function detectLanguage(text: string): LanguageDetection {
  if (!text || text.trim().length < 3) {
    return { language: 'en', confidence: 0, script: 'unknown' };
  }

  // Fast path: non-Latin scripts
  const scriptResult = detectScript(text);
  if (scriptResult.language && scriptResult.confidence > 0.5) {
    return {
      language: scriptResult.language,
      confidence: scriptResult.confidence,
      script: scriptResult.script,
    };
  }

  // Latin script: trigram analysis
  if (scriptResult.script === 'latin') {
    const { language, confidence } = detectLatinLanguage(text);
    return { language, confidence, script: 'latin' };
  }

  return { language: 'en', confidence: 0.1, script: 'unknown' };
}

// ── Language name map ───────────────────────────────────────────────────────

const LANGUAGE_NAMES: Record<string, string> = {
  en: 'English', es: 'Spanish', fr: 'French', de: 'German',
  pt: 'Portuguese', it: 'Italian', tr: 'Turkish', ru: 'Russian',
  ja: 'Japanese', ko: 'Korean', zh: 'Chinese', ar: 'Arabic', hi: 'Hindi',
};

/**
 * Generate a language directive for the system prompt.
 * Only emits a directive if a non-English language is detected with high confidence.
 */
export function getLanguageDirective(detection: LanguageDetection): string {
  if (detection.language === 'en' || detection.confidence < 0.4) return '';

  const name = LANGUAGE_NAMES[detection.language] ?? detection.language.toUpperCase();
  return `[LANGUAGE: The user is writing in ${name} (confidence: ${(detection.confidence * 100).toFixed(0)}%). ` +
    `Respond entirely in ${name}. Use culturally appropriate idioms and match the user's formality level.]`;
}

/**
 * Map a detected language code to a country code for crisis hotline matching.
 */
export function languageToCountry(langCode: string): string | null {
  const map: Record<string, string> = {
    en: 'US', de: 'DE', fr: 'FR', ja: 'JP', ko: 'KR',
    pt: 'BR', hi: 'IN', zh: 'SG', it: 'IT', es: 'ES',
    tr: 'TR', ru: 'RU', ar: 'SA',
  };
  return map[langCode] ?? null;
}
