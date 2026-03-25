/**
 * MEOK AI LABS — Lightweight Emotion Analysis
 *
 * Uses AFINN-style lexicon for valence scoring plus arousal/dominance heuristics.
 * No external API calls — runs entirely in-process.
 */

export interface EmotionalState {
  valence: number;      // -1 to 1 (negative to positive)
  arousal: number;      // 0 to 1 (calm to excited)
  dominance: number;    // 0 to 1 (submissive to dominant)
  primary: string;      // joy, sadness, anger, fear, surprise, trust, anticipation, disgust, neutral
  confidence: number;   // 0 to 1
}

// Compact AFINN-style lexicon (word -> valence score -5 to +5)
const VALENCE_LEXICON: Record<string, number> = {
  // Strongly negative (-5 to -3)
  'abandon': -2, 'abuse': -3, 'afraid': -2, 'agony': -4, 'angry': -3,
  'annoy': -2, 'anxious': -2, 'awful': -3, 'bad': -2, 'betray': -3,
  'bitter': -2, 'blame': -2, 'bore': -2, 'broke': -2, 'catastrophe': -4,
  'cheat': -3, 'concern': -1, 'conflict': -2, 'confuse': -1, 'crash': -2,
  'cruel': -3, 'cry': -2, 'damn': -2, 'danger': -2, 'dead': -3,
  'death': -3, 'defeat': -2, 'depress': -3, 'despair': -4, 'destroy': -3,
  'die': -3, 'disappoint': -2, 'disaster': -3, 'disgust': -3, 'doubt': -1,
  'dread': -3, 'dumb': -2, 'embarrass': -2, 'enemy': -2, 'envy': -2,
  'evil': -3, 'fail': -2, 'fault': -2, 'fear': -2, 'fool': -2,
  'frustrat': -2, 'grief': -3, 'guilt': -2, 'harm': -2, 'hate': -3,
  'helpless': -2, 'hopeless': -3, 'horrible': -3, 'hostile': -2, 'hurt': -2,
  'idiot': -3, 'ignore': -1, 'ill': -2, 'insult': -2, 'irritat': -2,
  'jealous': -2, 'kill': -3, 'lie': -2, 'lonely': -2, 'lose': -2,
  'lost': -1, 'mad': -2, 'mean': -2, 'mess': -1, 'miserable': -3,
  'miss': -1, 'mourn': -2, 'murder': -4, 'nausea': -2, 'negative': -1,
  'neglect': -2, 'nervous': -2, 'nightmare': -3, 'pain': -2, 'panic': -3,
  'pathetic': -2, 'piss': -3, 'poison': -2, 'poor': -1, 'problem': -1,
  'punish': -2, 'rage': -3, 'regret': -2, 'reject': -2, 'resent': -2,
  'ruin': -2, 'sad': -2, 'scare': -2, 'scream': -2, 'shame': -2,
  'shock': -2, 'sick': -2, 'sob': -2, 'sorry': -1, 'stress': -2,
  'struggle': -1, 'stupid': -2, 'suffer': -2, 'terrible': -3, 'terrif': -3,
  'threat': -2, 'tired': -1, 'torture': -4, 'toxic': -3, 'tragic': -3,
  'trap': -2, 'trouble': -2, 'ugly': -2, 'upset': -2, 'victim': -2,
  'violat': -3, 'violent': -3, 'war': -2, 'weak': -1, 'weep': -2,
  'worry': -2, 'worse': -2, 'worst': -3, 'worthless': -3, 'wound': -2,
  'wreck': -2, 'wrong': -2,

  // Positive (+1 to +5)
  'accomplish': 2, 'achieve': 2, 'admir': 2, 'adore': 3, 'adventure': 2,
  'agree': 1, 'alive': 2, 'amaz': 3, 'amuse': 2, 'appreciat': 2,
  'awesome': 3, 'beauti': 3, 'believ': 1, 'beloved': 3, 'benefit': 2,
  'best': 3, 'bless': 2, 'bliss': 3, 'brave': 2, 'bright': 1,
  'brilliant': 3, 'calm': 2, 'care': 2, 'celebrate': 3, 'charm': 2,
  'cheer': 2, 'comfort': 2, 'compassion': 2, 'confiden': 2, 'content': 2,
  'courage': 2, 'creat': 2, 'cure': 2, 'cute': 2, 'delight': 3,
  'dream': 1, 'eager': 2, 'easy': 1, 'ecsta': 4, 'elat': 3,
  'elegant': 2, 'empow': 2, 'encour': 2, 'energi': 2, 'enjoy': 2,
  'enthusi': 3, 'excel': 3, 'excit': 3, 'fab': 3, 'faith': 2,
  'fantas': 3, 'favor': 2, 'fine': 1, 'forgiv': 2, 'free': 2,
  'friend': 2, 'fun': 2, 'genero': 2, 'gentle': 2, 'glad': 2,
  'glory': 3, 'good': 2, 'grace': 2, 'grand': 2, 'grat': 2,
  'great': 2, 'grow': 1, 'happy': 3, 'harmoni': 2, 'heal': 2,
  'health': 2, 'heart': 1, 'heaven': 3, 'help': 2, 'hero': 2,
  'honor': 2, 'hope': 2, 'humor': 2, 'ideal': 2, 'impress': 2,
  'improv': 2, 'inspir': 3, 'intellig': 2, 'interest': 1, 'invit': 1,
  'joy': 3, 'kind': 2, 'laugh': 2, 'learn': 1, 'liberat': 2,
  'light': 1, 'love': 3, 'luck': 2, 'magic': 2, 'magnific': 3,
  'marvelous': 3, 'master': 2, 'merci': 2, 'merry': 2, 'miracle': 3,
  'nice': 2, 'noble': 2, 'nurtur': 2, 'optimis': 2, 'outstand': 3,
  'paradise': 3, 'passion': 2, 'peace': 2, 'perfect': 3, 'play': 1,
  'pleas': 2, 'positive': 2, 'power': 1, 'prais': 2, 'pretty': 2,
  'pride': 2, 'prize': 2, 'promis': 1, 'prosper': 2, 'protect': 1,
  'proud': 2, 'pure': 2, 'radiant': 3, 'refresh': 2, 'relax': 2,
  'relief': 2, 'remark': 2, 'respect': 2, 'reward': 2, 'rich': 2,
  'safe': 2, 'satisf': 2, 'secur': 1, 'serene': 2, 'sincere': 2,
  'smile': 2, 'smooth': 1, 'sooth': 2, 'special': 2, 'splendid': 3,
  'strength': 2, 'success': 3, 'sun': 1, 'super': 2, 'support': 2,
  'sure': 1, 'surpris': 1, 'sweet': 2, 'talent': 2, 'terrific': 3,
  'thank': 2, 'thrill': 3, 'tranquil': 2, 'treasur': 2, 'triumph': 3,
  'trust': 2, 'truth': 1, 'valuabl': 2, 'vibrant': 2, 'victori': 3,
  'vigor': 2, 'virtue': 2, 'warm': 2, 'wealth': 2, 'welcome': 2,
  'well': 1, 'win': 2, 'wisdom': 2, 'wonder': 3, 'worth': 2,
  'wow': 3, 'yay': 3, 'yes': 1, 'young': 1, 'zeal': 2,
};

// Arousal indicators (words that suggest high arousal)
const HIGH_AROUSAL = new Set([
  'amaz', 'anger', 'anxious', 'astonish', 'attack', 'awesome', 'bang',
  'blast', 'boom', 'burst', 'clash', 'crash', 'crazi', 'danger', 'destroy',
  'ecsta', 'elat', 'electr', 'emergenc', 'energi', 'excit', 'explo',
  'extreme', 'fantastic', 'fierce', 'fire', 'frenzi', 'furi', 'horror',
  'hurr', 'hyster', 'incredibl', 'insane', 'intens', 'mad', 'mania',
  'panic', 'passion', 'power', 'race', 'rage', 'rapid', 'rush', 'scream',
  'shock', 'slam', 'smash', 'speed', 'storm', 'stun', 'surge', 'terror',
  'thrill', 'thunder', 'urgen', 'vibrant', 'violent', 'vivid', 'wild', 'wow',
]);

// Dominance indicators (words suggesting high dominance/control)
const HIGH_DOMINANCE = new Set([
  'accomplish', 'achiev', 'assert', 'authorit', 'boss', 'brav', 'certain',
  'command', 'compet', 'confiden', 'conquer', 'control', 'courag', 'decid',
  'demand', 'determin', 'dominat', 'empow', 'enforc', 'expert', 'fierce',
  'firm', 'force', 'hero', 'indepen', 'influen', 'insist', 'lead',
  'master', 'power', 'pride', 'rule', 'sovereign', 'strength', 'strong',
  'superio', 'triumph', 'victori', 'vigor', 'will', 'win',
]);

const LOW_DOMINANCE = new Set([
  'abandon', 'afraid', 'anxious', 'beg', 'confus', 'depend', 'desperate',
  'doubt', 'dread', 'embarrass', 'fear', 'fragil', 'guilt', 'helpless',
  'hesitat', 'hopeless', 'humiliat', 'inferior', 'insecur', 'lonely',
  'lost', 'meek', 'nervous', 'overwhelm', 'panic', 'passive', 'pathetic',
  'plead', 'powerless', 'shy', 'small', 'submis', 'suffer', 'surrender',
  'timid', 'trap', 'uncertain', 'victim', 'vulnerable', 'weak', 'worry',
]);

function tokenize(text: string): string[] {
  return text.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).filter(Boolean);
}

function stemMatch(word: string, lexicon: Record<string, number>): number | null {
  if (lexicon[word] !== undefined) return lexicon[word];
  // Try prefix matching (simple stemming)
  for (const [stem, score] of Object.entries(lexicon)) {
    if (word.startsWith(stem) && word.length <= stem.length + 4) return score;
  }
  return null;
}

function setMatch(word: string, wordSet: Set<string>): boolean {
  if (wordSet.has(word)) return true;
  for (const stem of wordSet) {
    if (word.startsWith(stem) && word.length <= stem.length + 4) return true;
  }
  return false;
}

// Map VAD dimensions to primary emotion label
function classifyEmotion(v: number, a: number, d: number): string {
  if (Math.abs(v) < 0.1 && a < 0.3) return 'neutral';
  if (v > 0.3 && a > 0.5) return 'joy';
  if (v > 0.2 && a < 0.4) return 'trust';
  if (v > 0 && a > 0.3) return 'anticipation';
  if (v < -0.3 && a < 0.3) return 'sadness';
  if (v < -0.2 && a > 0.5 && d > 0.5) return 'anger';
  if (v < -0.2 && a > 0.4 && d < 0.4) return 'fear';
  if (Math.abs(v) > 0.1 && a > 0.6) return 'surprise';
  if (v < -0.3 && a > 0.3) return 'disgust';
  return 'neutral';
}

export function analyzeEmotion(text: string): EmotionalState {
  const words = tokenize(text);
  if (words.length === 0) {
    return { valence: 0, arousal: 0.2, dominance: 0.5, primary: 'neutral', confidence: 0 };
  }

  let valenceSum = 0;
  let valenceCount = 0;
  let arousalHits = 0;
  let highDomHits = 0;
  let lowDomHits = 0;

  for (const word of words) {
    const score = stemMatch(word, VALENCE_LEXICON);
    if (score !== null) {
      valenceSum += score;
      valenceCount++;
    }
    if (setMatch(word, HIGH_AROUSAL)) arousalHits++;
    if (setMatch(word, HIGH_DOMINANCE)) highDomHits++;
    if (setMatch(word, LOW_DOMINANCE)) lowDomHits++;
  }

  // Normalize valence to -1..1 range
  const rawValence = valenceCount > 0 ? valenceSum / valenceCount / 5 : 0;
  const valence = Math.max(-1, Math.min(1, rawValence * 2));

  // Arousal: 0-1 based on proportion of high-arousal words
  const arousal = Math.min(1, arousalHits / Math.max(words.length, 1) * 8 + 0.2);

  // Dominance: 0-1
  const domBalance = highDomHits - lowDomHits;
  const dominance = Math.max(0, Math.min(1, 0.5 + domBalance * 0.15));

  // Confidence based on how many lexicon hits we got
  const confidence = Math.min(1, valenceCount / Math.max(words.length, 1) * 3);

  const primary = classifyEmotion(valence, arousal, dominance);

  return { valence, arousal, dominance, primary, confidence };
}

/** Format emotion for system prompt injection */
export function formatEmotionContext(emotion: EmotionalState): string {
  if (emotion.confidence < 0.1) return '';
  const vLabel = emotion.valence > 0.2 ? 'positive' : emotion.valence < -0.2 ? 'negative' : 'neutral';
  const aLabel = emotion.arousal > 0.6 ? 'high energy' : emotion.arousal < 0.3 ? 'calm' : 'moderate energy';
  return `[Detected emotion: ${emotion.primary} (${vLabel}, ${aLabel}) — confidence ${(emotion.confidence * 100).toFixed(0)}%]`;
}
