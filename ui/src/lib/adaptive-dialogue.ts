/**
 * MEOK AI LABS — Adaptive Dialogue Engine
 *
 * Synthesizes all available signals (emotion, procedural patterns, user profile,
 * language, task type, companion archetype) into a single style directive
 * that shapes how the AI responds.
 *
 * Three adaptation timescales:
 *   1. Immediate (this message): Emotion detection adjusts tone now
 *   2. Session (this conversation): Procedural patterns adjust style
 *   3. Longitudinal (across sessions): User profile + stored patterns set baseline
 */

import type { EmotionalState } from './emotion';
import type { ProceduralPattern } from './memory';
import type { UserProfile } from './user-profile';
import type { LanguageDetection } from './language';
import type { TaskType } from './llm-router';

// ── Types ───────────────────────────────────────────────────────────────────

export interface DialogueContext {
  emotion: EmotionalState;
  proceduralPatterns: ProceduralPattern[];
  userProfile: UserProfile | null;
  language: LanguageDetection;
  taskType: TaskType;
  companionArchetype: string;
  conversationLength: number;
}

export interface StyleDirective {
  formality: 'casual' | 'balanced' | 'formal';
  verbosity: 'concise' | 'moderate' | 'detailed';
  emotionalTone: 'warm' | 'neutral' | 'direct';
  technicalDepth: 'simplified' | 'standard' | 'expert';
  pacing: 'quick' | 'normal' | 'slow_deliberate';
}

// ── Style computation ───────────────────────────────────────────────────────

function patternValue(patterns: ProceduralPattern[], name: string): number | null {
  const p = patterns.find(pp => pp.pattern === name);
  return p ? p.confidence : null;
}

function computeFormality(ctx: DialogueContext): StyleDirective['formality'] {
  let score = 0.5; // baseline: balanced

  // Longitudinal: user profile formality
  if (ctx.userProfile && ctx.userProfile.confidence > 0.15) {
    score = ctx.userProfile.formality;
  }

  // Session: procedural patterns override
  const casual = patternValue(ctx.proceduralPatterns, 'casual_communication');
  const formal = patternValue(ctx.proceduralPatterns, 'formal_communication');
  if (casual && casual > 0.5) score -= 0.2;
  if (formal && formal > 0.5) score += 0.2;

  // Task type influence
  if (ctx.taskType === 'coding' || ctx.taskType === 'research') score += 0.1;
  if (ctx.taskType === 'gaming' || ctx.taskType === 'chat') score -= 0.1;

  // Companion archetype influence
  if (ctx.companionArchetype === 'sage') score += 0.1;
  if (ctx.companionArchetype === 'explorer') score -= 0.05;

  if (score > 0.65) return 'formal';
  if (score < 0.35) return 'casual';
  return 'balanced';
}

function computeVerbosity(ctx: DialogueContext): StyleDirective['verbosity'] {
  let score = 0.5;

  // Longitudinal: user profile verbosity
  if (ctx.userProfile && ctx.userProfile.confidence > 0.15) {
    score = ctx.userProfile.verbosity;
  }

  // Session: procedural patterns
  const brief = patternValue(ctx.proceduralPatterns, 'writes_brief_messages');
  const detailed = patternValue(ctx.proceduralPatterns, 'writes_detailed_messages');
  if (brief && brief > 0.5) score -= 0.25;
  if (detailed && detailed > 0.5) score += 0.25;

  // Openness: high openness users appreciate detail
  if (ctx.userProfile && ctx.userProfile.ocean.openness > 0.7) score += 0.1;

  // Task type: coding/research want more detail
  if (ctx.taskType === 'coding' || ctx.taskType === 'research' || ctx.taskType === 'reasoning') score += 0.15;
  if (ctx.taskType === 'gaming') score -= 0.15;

  if (score > 0.65) return 'detailed';
  if (score < 0.35) return 'concise';
  return 'moderate';
}

function computeEmotionalTone(ctx: DialogueContext): StyleDirective['emotionalTone'] {
  // Immediate: emotion detection has highest priority
  if (ctx.emotion.confidence > 0.2) {
    if (ctx.emotion.valence < -0.3) return 'warm'; // distressed → lead with empathy
    if (ctx.emotion.primary === 'joy' || ctx.emotion.primary === 'trust') return 'warm';
  }

  // Companion archetype influence
  if (ctx.companionArchetype === 'nurturer') return 'warm';
  if (ctx.companionArchetype === 'challenger') return 'direct';

  // Task type
  if (ctx.taskType === 'emotional') return 'warm';
  if (ctx.taskType === 'coding' || ctx.taskType === 'reasoning') return 'direct';

  return 'neutral';
}

function computeTechnicalDepth(ctx: DialogueContext): StyleDirective['technicalDepth'] {
  let score = 0.5;

  // Longitudinal: tech level from profile
  if (ctx.userProfile && ctx.userProfile.confidence > 0.15) {
    score = ctx.userProfile.techLevel;
  }

  // Session: technical focus pattern
  const techFocus = patternValue(ctx.proceduralPatterns, 'technical_focus');
  if (techFocus && techFocus > 0.5) score += 0.2;

  // Task type
  if (ctx.taskType === 'coding' || ctx.taskType === 'reasoning') score += 0.2;
  if (ctx.taskType === 'emotional' || ctx.taskType === 'gaming') score -= 0.15;

  if (score > 0.6) return 'expert';
  if (score < 0.25) return 'simplified';
  return 'standard';
}

function computePacing(ctx: DialogueContext): StyleDirective['pacing'] {
  // Immediate: high arousal + negative valence = slow deliberate (de-escalation)
  if (ctx.emotion.confidence > 0.2 && ctx.emotion.arousal > 0.6 && ctx.emotion.valence < -0.2) {
    return 'slow_deliberate';
  }

  // Longitudinal: high neuroticism = slow deliberate
  if (ctx.userProfile && ctx.userProfile.ocean.neuroticism > 0.7 && ctx.userProfile.confidence > 0.3) {
    return 'slow_deliberate';
  }

  // Task type: chat/gaming = quick, coding/research = normal
  if (ctx.taskType === 'chat' || ctx.taskType === 'gaming') return 'quick';

  // Short conversations = quick, long ones = normal
  if (ctx.conversationLength < 5) return 'quick';

  return 'normal';
}

// ── Public API ──────────────────────────────────────────────────────────────

/**
 * Compute a style directive from all available dialogue context signals.
 */
export function computeStyleDirective(ctx: DialogueContext): StyleDirective {
  return {
    formality: computeFormality(ctx),
    verbosity: computeVerbosity(ctx),
    emotionalTone: computeEmotionalTone(ctx),
    technicalDepth: computeTechnicalDepth(ctx),
    pacing: computePacing(ctx),
  };
}

const PACING_HINTS: Record<string, string> = {
  quick: 'Keep responses brief and responsive.',
  normal: '',
  slow_deliberate: 'Take time with your response. Use shorter paragraphs. Check in on the user\'s wellbeing.',
};

const TONE_HINTS: Record<string, string> = {
  warm: 'Lead with empathy and acknowledgement before substance.',
  neutral: '',
  direct: 'Be clear and direct. Prioritise accuracy over comfort.',
};

const DEPTH_HINTS: Record<string, string> = {
  simplified: 'Use plain language. Avoid jargon. Explain concepts step by step.',
  standard: '',
  expert: 'You can use technical terminology freely. Skip basic explanations.',
};

/**
 * Format a style directive as a context block for the system prompt.
 */
export function formatStyleDirective(style: StyleDirective): string {
  const hints = [
    PACING_HINTS[style.pacing],
    TONE_HINTS[style.emotionalTone],
    DEPTH_HINTS[style.technicalDepth],
  ].filter(Boolean);

  const hintBlock = hints.length > 0 ? ` ${hints.join(' ')}` : '';

  return `[ADAPTIVE STYLE: ${style.formality} | ${style.verbosity} | ${style.emotionalTone} | ${style.technicalDepth} | ${style.pacing}${hintBlock}]`;
}
