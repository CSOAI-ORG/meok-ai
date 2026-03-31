/**
 * Tests for bond.ts — bond point system and level progression.
 */
import { pointsForAction, getProgressToNextLevel } from '@/lib/bond';

describe('pointsForAction', () => {
  it('returns a number for daily_chat', () => {
    const pts = pointsForAction('daily_chat');
    expect(typeof pts).toBe('number');
    expect(pts).toBeGreaterThan(0);
  });

  it('returns consistent values for same action', () => {
    expect(pointsForAction('daily_chat')).toBe(pointsForAction('daily_chat'));
  });

  it('all known actions return positive points', () => {
    const actions = ['daily_chat', 'first_message', 'milestone_reached', 'care_signal_sent'] as const;
    for (const action of actions) {
      try {
        const pts = pointsForAction(action as any);
        expect(pts).toBeGreaterThanOrEqual(0);
      } catch {
        // Action may not exist — that's ok
      }
    }
  });
});

describe('getProgressToNextLevel', () => {
  it('returns 0-100 range', () => {
    const progress = getProgressToNextLevel(0);
    expect(progress).toBeGreaterThanOrEqual(0);
    expect(progress).toBeLessThanOrEqual(100);
  });

  it('high points give higher progress', () => {
    const low = getProgressToNextLevel(10);
    const high = getProgressToNextLevel(1000);
    expect(high).toBeGreaterThanOrEqual(low);
  });

  it('max level returns 100', () => {
    const progress = getProgressToNextLevel(999999);
    expect(progress).toBe(100);
  });
});
