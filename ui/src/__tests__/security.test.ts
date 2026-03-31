/**
 * Security tests — rate limiting, input validation, auth checks.
 */
import { checkRateLimit, getRemainingTokens } from '@/lib/rate-limit';

describe('Rate Limiting', () => {
  it('allows requests within limit', () => {
    const result = checkRateLimit('test-user-sec-1', 'explorer');
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBeGreaterThanOrEqual(0);
  });

  it('unlimited tier always allows', () => {
    // Family tier should be unlimited (-1)
    for (let i = 0; i < 100; i++) {
      const result = checkRateLimit('test-user-sec-2', 'family');
      expect(result.allowed).toBe(true);
    }
  });

  it('exhausts explorer limit eventually', () => {
    const userId = `exhaust-test-${Date.now()}`;
    let denied = false;
    // Explorer gets 100 messages/day — exhaust them
    for (let i = 0; i < 110; i++) {
      const result = checkRateLimit(userId, 'explorer');
      if (!result.allowed) { denied = true; break; }
    }
    expect(denied).toBe(true);
  });

  it('remaining tokens decrease with each call', () => {
    const userId = `decrease-test-${Date.now()}`;
    const first = checkRateLimit(userId, 'explorer');
    const second = checkRateLimit(userId, 'explorer');
    expect(second.remaining).toBeLessThan(first.remaining);
  });

  it('returns resetAt as a future timestamp', () => {
    const result = checkRateLimit('test-user-sec-5', 'explorer');
    expect(result.resetAt).toBeGreaterThan(Date.now());
  });

  it('getRemainingTokens returns a number', () => {
    const remaining = getRemainingTokens('test-user-sec-6', 'explorer');
    expect(typeof remaining).toBe('number');
    expect(remaining).toBeGreaterThanOrEqual(0);
  });
});
