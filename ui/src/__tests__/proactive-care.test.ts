/**
 * Tests for proactive-care.ts — care signal evaluation.
 */
import { evaluateCareSignal, type CareSignalContext } from '@/lib/proactive-care';

function makeCtx(overrides: Partial<CareSignalContext> = {}): CareSignalContext {
  return {
    lastInteraction: new Date().toISOString(),
    interactionCount: 10,
    recentTopics: ['coding'],
    companionName: 'Aria',
    userName: 'Nick',
    signalsSentThisWeek: 0,
    ...overrides,
  };
}

describe('evaluateCareSignal', () => {
  it('returns null when rate limit exceeded (2 per week)', () => {
    const ctx = makeCtx({ signalsSentThisWeek: 2 });
    expect(evaluateCareSignal(ctx)).toBeNull();
  });

  it('returns null when rate limit is exactly at max', () => {
    const ctx = makeCtx({ signalsSentThisWeek: 3 });
    expect(evaluateCareSignal(ctx)).toBeNull();
  });

  it('returns check_in signal after 7+ days of absence', () => {
    const sevenDaysAgo = new Date(Date.now() - 8 * 86400000).toISOString();
    const ctx = makeCtx({ lastInteraction: sevenDaysAgo });
    const signal = evaluateCareSignal(ctx);
    expect(signal).not.toBeNull();
    expect(signal?.type).toBe('check_in');
    expect(signal?.priority).toBe('low');
  });

  it('returns medium priority check_in after 14+ days', () => {
    const twoWeeksAgo = new Date(Date.now() - 15 * 86400000).toISOString();
    const ctx = makeCtx({ lastInteraction: twoWeeksAgo });
    const signal = evaluateCareSignal(ctx);
    expect(signal).not.toBeNull();
    expect(signal?.type).toBe('check_in');
    expect(signal?.priority).toBe('medium');
  });

  it('check_in message includes user name', () => {
    const sevenDaysAgo = new Date(Date.now() - 8 * 86400000).toISOString();
    const ctx = makeCtx({ lastInteraction: sevenDaysAgo, userName: 'Nick' });
    const signal = evaluateCareSignal(ctx);
    expect(signal?.message).toContain('Nick');
  });

  it('returns null for active user (recent interaction)', () => {
    const ctx = makeCtx({ lastInteraction: new Date().toISOString(), interactionCount: 5 });
    const signal = evaluateCareSignal(ctx);
    expect(signal).toBeNull();
  });

  it('signal has required fields', () => {
    const sevenDaysAgo = new Date(Date.now() - 8 * 86400000).toISOString();
    const ctx = makeCtx({ lastInteraction: sevenDaysAgo });
    const signal = evaluateCareSignal(ctx);
    expect(signal).toHaveProperty('type');
    expect(signal).toHaveProperty('message');
    expect(signal).toHaveProperty('priority');
  });

  it('friendTest is true for check_in signals', () => {
    const sevenDaysAgo = new Date(Date.now() - 8 * 86400000).toISOString();
    const ctx = makeCtx({ lastInteraction: sevenDaysAgo });
    const signal = evaluateCareSignal(ctx);
    expect(signal?.friendTest).toBe(true);
  });
});
