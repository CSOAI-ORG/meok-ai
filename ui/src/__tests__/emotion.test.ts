/**
 * Tests for emotion.ts — lightweight AFINN-based emotion analysis.
 */
import { analyzeEmotion, formatEmotionContext, type EmotionalState } from '@/lib/emotion';

describe('analyzeEmotion', () => {
  it('returns all required fields', () => {
    const emo = analyzeEmotion('Hello world');
    expect(emo).toHaveProperty('valence');
    expect(emo).toHaveProperty('arousal');
    expect(emo).toHaveProperty('dominance');
    expect(emo).toHaveProperty('primary');
    expect(emo).toHaveProperty('confidence');
  });

  it('detects negative valence for sad text', () => {
    const emo = analyzeEmotion('I am so sad and depressed, everything is hopeless');
    expect(emo.valence).toBeLessThan(0);
  });

  it('detects positive valence for happy text', () => {
    const emo = analyzeEmotion('I love this, it makes me so happy and grateful');
    expect(emo.valence).toBeGreaterThan(0);
  });

  it('returns neutral for neutral text', () => {
    const emo = analyzeEmotion('The weather today is partly cloudy');
    expect(emo.primary).toBe('neutral');
  });

  it('valence is in -1 to 1 range', () => {
    const texts = ['I hate everything', 'I love everything', 'ok', ''];
    for (const text of texts) {
      const emo = analyzeEmotion(text);
      expect(emo.valence).toBeGreaterThanOrEqual(-1);
      expect(emo.valence).toBeLessThanOrEqual(1);
    }
  });

  it('arousal is in 0 to 1 range', () => {
    const emo = analyzeEmotion('HELP ME THIS IS AN EMERGENCY OH NO');
    expect(emo.arousal).toBeGreaterThanOrEqual(0);
    expect(emo.arousal).toBeLessThanOrEqual(1);
  });

  it('confidence is in 0 to 1 range', () => {
    const emo = analyzeEmotion('I feel very strongly about this');
    expect(emo.confidence).toBeGreaterThanOrEqual(0);
    expect(emo.confidence).toBeLessThanOrEqual(1);
  });

  it('higher arousal for exclamatory text', () => {
    const calm = analyzeEmotion('I feel okay today');
    const excited = analyzeEmotion('OH WOW THIS IS AMAZING!!!');
    expect(excited.arousal).toBeGreaterThan(calm.arousal);
  });

  it('empty string returns neutral', () => {
    const emo = analyzeEmotion('');
    expect(emo.primary).toBe('neutral');
    expect(emo.confidence).toBeLessThan(0.5);
  });

  it('primary is one of the expected emotions', () => {
    const validEmotions = ['joy', 'sadness', 'anger', 'fear', 'surprise', 'trust', 'anticipation', 'disgust', 'neutral'];
    const texts = ['I love you', 'I hate this', 'I am afraid', 'Wow unexpected', 'ok'];
    for (const text of texts) {
      const emo = analyzeEmotion(text);
      expect(validEmotions).toContain(emo.primary);
    }
  });
});

describe('formatEmotionContext', () => {
  it('returns a non-empty string', () => {
    const emo: EmotionalState = { valence: -0.3, arousal: 0.6, dominance: 0.4, primary: 'sadness', confidence: 0.7 };
    const ctx = formatEmotionContext(emo);
    expect(ctx.length).toBeGreaterThan(10);
  });

  it('mentions the primary emotion', () => {
    const emo: EmotionalState = { valence: 0.5, arousal: 0.3, dominance: 0.5, primary: 'joy', confidence: 0.8 };
    const ctx = formatEmotionContext(emo);
    expect(ctx.toLowerCase()).toContain('joy');
  });

  it('returns empty or minimal for neutral low-confidence', () => {
    const emo: EmotionalState = { valence: 0, arousal: 0.1, dominance: 0.5, primary: 'neutral', confidence: 0.05 };
    const ctx = formatEmotionContext(emo);
    // Should be minimal — not worth injecting into system prompt
    expect(ctx.length).toBeLessThan(200);
  });
});
