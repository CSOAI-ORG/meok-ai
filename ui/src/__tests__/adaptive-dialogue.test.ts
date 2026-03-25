/**
 * Adaptive dialogue engine unit tests
 */
import { computeStyleDirective, formatStyleDirective, type DialogueContext } from '../lib/adaptive-dialogue';
import type { EmotionalState } from '../lib/emotion';
import type { LanguageDetection } from '../lib/language';

function makeContext(overrides: Partial<DialogueContext> = {}): DialogueContext {
  return {
    emotion: { valence: 0, arousal: 0.2, dominance: 0.5, primary: 'neutral', confidence: 0.1 },
    proceduralPatterns: [],
    userProfile: null,
    language: { language: 'en', confidence: 0.9, script: 'latin' },
    taskType: 'chat',
    companionArchetype: 'nurturer',
    conversationLength: 5,
    ...overrides,
  };
}

describe('computeStyleDirective', () => {
  describe('emotional tone', () => {
    it('sets warm tone for distressed user', () => {
      const ctx = makeContext({
        emotion: { valence: -0.5, arousal: 0.6, dominance: 0.3, primary: 'sadness', confidence: 0.7 },
      });
      const style = computeStyleDirective(ctx);
      expect(style.emotionalTone).toBe('warm');
    });

    it('sets warm tone for nurturer companion', () => {
      const ctx = makeContext({ companionArchetype: 'nurturer' });
      const style = computeStyleDirective(ctx);
      expect(style.emotionalTone).toBe('warm');
    });

    it('sets direct tone for challenger companion', () => {
      const ctx = makeContext({
        companionArchetype: 'challenger',
        emotion: { valence: 0.1, arousal: 0.3, dominance: 0.5, primary: 'neutral', confidence: 0.1 },
      });
      const style = computeStyleDirective(ctx);
      expect(style.emotionalTone).toBe('direct');
    });

    it('sets warm tone for emotional task type', () => {
      const ctx = makeContext({
        taskType: 'emotional',
        companionArchetype: 'sage',
        emotion: { valence: 0, arousal: 0.2, dominance: 0.5, primary: 'neutral', confidence: 0.05 },
      });
      const style = computeStyleDirective(ctx);
      expect(style.emotionalTone).toBe('warm');
    });
  });

  describe('technical depth', () => {
    it('sets expert depth for coding task with tech user', () => {
      const ctx = makeContext({
        taskType: 'coding',
        userProfile: {
          ocean: { openness: 0.5, conscientiousness: 0.6, extraversion: 0.4, agreeableness: 0.5, neuroticism: 0.3 },
          confidence: 0.5,
          formality: 0.5,
          verbosity: 0.5,
          techLevel: 0.8,
          detectedLanguage: 'en',
          messageCount: 20,
          lastUpdated: new Date().toISOString(),
        },
      });
      const style = computeStyleDirective(ctx);
      expect(style.technicalDepth).toBe('expert');
    });

    it('sets simplified depth for emotional task with low-tech user', () => {
      const ctx = makeContext({
        taskType: 'emotional',
        userProfile: {
          ocean: { openness: 0.5, conscientiousness: 0.5, extraversion: 0.5, agreeableness: 0.5, neuroticism: 0.7 },
          confidence: 0.5,
          formality: 0.5,
          verbosity: 0.5,
          techLevel: 0.1,
          detectedLanguage: 'en',
          messageCount: 20,
          lastUpdated: new Date().toISOString(),
        },
      });
      const style = computeStyleDirective(ctx);
      expect(style.technicalDepth).toBe('simplified');
    });
  });

  describe('pacing', () => {
    it('sets slow_deliberate for highly aroused negative emotion', () => {
      const ctx = makeContext({
        emotion: { valence: -0.5, arousal: 0.8, dominance: 0.2, primary: 'fear', confidence: 0.6 },
      });
      const style = computeStyleDirective(ctx);
      expect(style.pacing).toBe('slow_deliberate');
    });

    it('sets quick pacing for chat/gaming tasks', () => {
      const ctx = makeContext({ taskType: 'gaming' });
      const style = computeStyleDirective(ctx);
      expect(style.pacing).toBe('quick');
    });

    it('sets quick for short conversations', () => {
      const ctx = makeContext({
        taskType: 'research',
        conversationLength: 2,
      });
      const style = computeStyleDirective(ctx);
      expect(style.pacing).toBe('quick');
    });
  });

  describe('verbosity', () => {
    it('sets detailed for coding/research tasks', () => {
      const ctx = makeContext({ taskType: 'research' });
      const style = computeStyleDirective(ctx);
      expect(['moderate', 'detailed']).toContain(style.verbosity);
    });

    it('sets concise for gaming tasks', () => {
      const ctx = makeContext({ taskType: 'gaming' });
      const style = computeStyleDirective(ctx);
      expect(['concise', 'moderate']).toContain(style.verbosity);
    });

    it('respects brief procedural pattern', () => {
      const ctx = makeContext({
        proceduralPatterns: [
          { pattern: 'writes_brief_messages', confidence: 0.8, last_observed: new Date().toISOString(), observation_count: 10 },
        ],
      });
      const style = computeStyleDirective(ctx);
      expect(style.verbosity).toBe('concise');
    });
  });

  describe('formality', () => {
    it('leans formal for coding tasks', () => {
      const ctx = makeContext({ taskType: 'coding' });
      const style = computeStyleDirective(ctx);
      expect(['balanced', 'formal']).toContain(style.formality);
    });

    it('leans casual for gaming tasks', () => {
      const ctx = makeContext({ taskType: 'gaming' });
      const style = computeStyleDirective(ctx);
      expect(['casual', 'balanced']).toContain(style.formality);
    });
  });
});

describe('formatStyleDirective', () => {
  it('returns formatted style block', () => {
    const style = {
      formality: 'casual' as const,
      verbosity: 'concise' as const,
      emotionalTone: 'warm' as const,
      technicalDepth: 'standard' as const,
      pacing: 'slow_deliberate' as const,
    };
    const result = formatStyleDirective(style);
    expect(result).toContain('ADAPTIVE STYLE');
    expect(result).toContain('casual');
    expect(result).toContain('concise');
    expect(result).toContain('warm');
    expect(result).toContain('empathy');
    expect(result).toContain('wellbeing');
  });

  it('includes no hints for neutral/standard/normal', () => {
    const style = {
      formality: 'balanced' as const,
      verbosity: 'moderate' as const,
      emotionalTone: 'neutral' as const,
      technicalDepth: 'standard' as const,
      pacing: 'normal' as const,
    };
    const result = formatStyleDirective(style);
    expect(result).toContain('ADAPTIVE STYLE');
    expect(result).not.toContain('empathy');
    expect(result).not.toContain('jargon');
  });
});
