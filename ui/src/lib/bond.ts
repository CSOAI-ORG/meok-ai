/**
 * MEOK AI LABS — Bond Level System
 *
 * Tracks emotional bond progression between user and companion.
 * 10 bond levels, 7 care actions, 3 pure functions.
 * No side effects — all functions are pure computations.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface BondLevel {
  name: string;
  threshold: number;
  color: string;
}

export type CareAction =
  | 'daily_chat'
  | 'share_feelings'
  | 'teach_skill'
  | 'resolve_conflict'
  | 'celebrate_milestone'
  | 'gift_interaction'
  | 'consecutive_day';

// ─── Constants ───────────────────────────────────────────────────────────────

/** Bond levels ordered by ascending point threshold */
export const BOND_LEVELS: readonly BondLevel[] = [
  { name: 'Spark',     threshold: 0,    color: '#7C3AED' },
  { name: 'Ember',     threshold: 50,   color: '#F59E0B' },
  { name: 'Glow',      threshold: 150,  color: '#FBBF24' },
  { name: 'Warmth',    threshold: 300,  color: '#F472B6' },
  { name: 'Trust',     threshold: 500,  color: '#10B981' },
  { name: 'Depth',     threshold: 800,  color: '#06B6D4' },
  { name: 'Harmony',   threshold: 1200, color: '#3B82F6' },
  { name: 'Resonance', threshold: 1800, color: '#8B5CF6' },
  { name: 'Devotion',  threshold: 2500, color: '#C9A84C' },
  { name: 'Eternal',   threshold: 3500, color: '#FFD700' },
] as const;

/** Points awarded per care action */
export const CARE_ACTION_POINTS: Record<CareAction, number> = {
  daily_chat:          5,
  share_feelings:      10,
  teach_skill:         15,
  resolve_conflict:    20,
  celebrate_milestone: 25,
  gift_interaction:    10,
  consecutive_day:     3,
} as const;

// ─── Pure Functions ──────────────────────────────────────────────────────────

/**
 * Returns the current bond level for a given point total.
 * Walks the levels in reverse to find the highest threshold met.
 *
 * @param points - Total bond points accumulated
 * @returns The matching BondLevel
 */
export function getBondLevel(points: number): BondLevel {
  for (let i = BOND_LEVELS.length - 1; i >= 0; i--) {
    if (points >= BOND_LEVELS[i].threshold) {
      return BOND_LEVELS[i];
    }
  }
  return BOND_LEVELS[0];
}

/**
 * Returns progress toward the next bond level as a percentage (0–100).
 * Returns 100 if already at the highest level.
 *
 * @param points - Total bond points accumulated
 * @returns Percentage progress to next level (0–100)
 */
export function getProgressToNextLevel(points: number): number {
  const currentIndex = BOND_LEVELS.findIndex((_, i) => {
    const next = BOND_LEVELS[i + 1];
    return !next || points < next.threshold;
  });

  // Already at max level
  if (currentIndex === BOND_LEVELS.length - 1) {
    return 100;
  }

  const current = BOND_LEVELS[currentIndex];
  const next = BOND_LEVELS[currentIndex + 1];
  const range = next.threshold - current.threshold;
  const progress = points - current.threshold;

  return Math.min(100, Math.max(0, Math.round((progress / range) * 100)));
}

/**
 * Returns the point value for a given care action.
 *
 * @param action - The care action performed
 * @returns Points awarded for the action
 */
export function pointsForAction(action: CareAction): number {
  return CARE_ACTION_POINTS[action];
}
