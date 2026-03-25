/**
 * User personality profiling (OCEAN) unit tests
 */
import { analyzeOCEAN, formatProfileContext, mergeProfiles } from '../lib/user-profile';

describe('analyzeOCEAN', () => {
  it('returns neutral baseline for empty messages', () => {
    const result = analyzeOCEAN([]);
    expect(result.ocean.openness).toBe(0.5);
    expect(result.ocean.conscientiousness).toBe(0.5);
    expect(result.confidence).toBe(0);
  });

  it('detects high openness from creative/abstract messages', () => {
    const messages = [
      { role: 'user', content: 'I love exploring new creative ideas and imagining hypothetical worlds' },
      { role: 'user', content: 'What if we could experiment with unconventional approaches to art and philosophy?' },
      { role: 'user', content: 'This fascinates me — the aesthetic vision behind this is inspiring' },
    ];
    const result = analyzeOCEAN(messages);
    expect(result.ocean.openness).toBeGreaterThan(0.55);
  });

  it('detects high conscientiousness from structured messages', () => {
    const messages = [
      { role: 'user', content: 'Here is my plan: First, we organize the tasks. Second, we set deadlines.' },
      { role: 'user', content: 'I need to track my goals systematically with a detailed checklist' },
      { role: 'user', content: 'Let me prioritize these tasks by deadline and measure our progress' },
    ];
    const result = analyzeOCEAN(messages);
    expect(result.ocean.conscientiousness).toBeGreaterThan(0.55);
  });

  it('detects high extraversion from enthusiastic messages', () => {
    const messages = [
      { role: 'user', content: 'This is so exciting! I love working with the team!' },
      { role: 'user', content: 'OMG that is amazing!! Let us share this with everyone 🎉' },
      { role: 'user', content: 'Such a fun party vibe! Awesome energy from the group!' },
    ];
    const result = analyzeOCEAN(messages);
    expect(result.ocean.extraversion).toBeGreaterThan(0.55);
  });

  it('detects high agreeableness from polite messages', () => {
    const messages = [
      { role: 'user', content: 'Thank you so much for your help, I really appreciate it' },
      { role: 'user', content: 'Please take your time, no worries if you don\'t mind' },
      { role: 'user', content: 'I understand your perspective and I agree, that is very kind' },
    ];
    const result = analyzeOCEAN(messages);
    expect(result.ocean.agreeableness).toBeGreaterThan(0.55);
  });

  it('detects high neuroticism from anxious messages', () => {
    const messages = [
      { role: 'user', content: 'I am so anxious and worried about everything lately' },
      { role: 'user', content: 'I doubt myself constantly, I am scared of failing' },
      { role: 'user', content: 'I feel overwhelmed and helpless, I can\'t stop stressing' },
    ];
    const result = analyzeOCEAN(messages);
    expect(result.ocean.neuroticism).toBeGreaterThan(0.55);
  });

  it('filters only user messages', () => {
    const messages = [
      { role: 'user', content: 'Hello' },
      { role: 'assistant', content: 'I am so anxious and worried about everything' },
      { role: 'user', content: 'How are you?' },
    ];
    const result = analyzeOCEAN(messages);
    // Should NOT pick up anxiety from assistant message
    expect(result.ocean.neuroticism).toBeLessThan(0.6);
  });

  it('detects casual formality from informal messages', () => {
    const messages = [
      { role: 'user', content: 'lol yeah gonna do that tbh' },
      { role: 'user', content: 'nah bruh idk what to do rn' },
    ];
    const result = analyzeOCEAN(messages);
    expect(result.formality).toBeLessThan(0.45);
  });

  it('detects formal style from professional messages', () => {
    const messages = [
      { role: 'user', content: 'Furthermore, I would like to discuss the implications of this approach.' },
      { role: 'user', content: 'Regarding the aforementioned issue, I kindly request your assistance.' },
    ];
    const result = analyzeOCEAN(messages);
    expect(result.formality).toBeGreaterThan(0.5);
  });

  it('detects high tech level from technical messages', () => {
    const messages = [
      { role: 'user', content: 'Can you help me debug this async middleware for my API endpoint?' },
      { role: 'user', content: 'The Docker deployment is failing at the schema migration step' },
      { role: 'user', content: 'I need to set up a TypeScript interface for the database query' },
    ];
    const result = analyzeOCEAN(messages);
    expect(result.techLevel).toBeGreaterThan(0.3);
  });

  it('detects low verbosity from brief messages', () => {
    const messages = [
      { role: 'user', content: 'yes' },
      { role: 'user', content: 'ok' },
      { role: 'user', content: 'do it' },
    ];
    const result = analyzeOCEAN(messages);
    expect(result.verbosity).toBeLessThan(0.3);
  });

  it('increases confidence with more messages', () => {
    const fewMessages = [{ role: 'user', content: 'Hello' }];
    const manyMessages = Array.from({ length: 20 }, (_, i) => ({
      role: 'user',
      content: `Message number ${i + 1} with some content to analyze`,
    }));

    const fewResult = analyzeOCEAN(fewMessages);
    const manyResult = analyzeOCEAN(manyMessages);
    expect(manyResult.confidence).toBeGreaterThan(fewResult.confidence);
  });
});

describe('formatProfileContext', () => {
  it('returns empty string for low confidence', () => {
    const profile = analyzeOCEAN([]);
    expect(formatProfileContext(profile)).toBe('');
  });

  it('returns formatted context for reasonable confidence', () => {
    const messages = Array.from({ length: 10 }, () => ({
      role: 'user',
      content: 'This is a test message with enough content to build some confidence in the analysis',
    }));
    const profile = analyzeOCEAN(messages);
    const ctx = formatProfileContext(profile);
    if (profile.confidence >= 0.15) {
      expect(ctx).toContain('User profile');
      expect(ctx).toContain('O=');
      expect(ctx).toContain('style:');
    }
  });
});

describe('mergeProfiles', () => {
  it('returns fresh profile when no existing', () => {
    const fresh = analyzeOCEAN([{ role: 'user', content: 'Hello world' }]);
    const merged = mergeProfiles(null, fresh);
    expect(merged).toEqual(fresh);
  });

  it('blends scores from two profiles', () => {
    const existing = analyzeOCEAN([
      { role: 'user', content: 'I love creative art and philosophy' },
      { role: 'user', content: 'What a fascinating experiment' },
    ]);
    existing.confidence = 0.5;

    const fresh = analyzeOCEAN([
      { role: 'user', content: 'I need to organize my schedule' },
      { role: 'user', content: 'Let me plan this systematically' },
    ]);

    const merged = mergeProfiles(existing, fresh);
    expect(merged.messageCount).toBe(existing.messageCount + fresh.messageCount);
    expect(merged.confidence).toBeGreaterThan(0);
  });
});
