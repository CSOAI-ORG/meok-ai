/**
 * MEOK AI LABS — Relationship Progression Engine
 *
 * Tracks the depth of user-character relationships over time,
 * gating content and vulnerability based on trust earned.
 */

// ── Types ──────────────────────────────────────────────────────────────────

export type RelationshipLevel = 'stranger' | 'acquaintance' | 'friend' | 'close_friend' | 'intimate';

/** What becomes available at each relationship level. */
export interface ContentUnlocks {
  vulnerability: boolean;         // character shares own "struggles"
  darkHumor: boolean;             // edgier jokes, gallows humor
  deepPersonalQuestions: boolean;  // probing questions about user's life
  sharedSecrets: boolean;         // character references past confessions
  toughLove: boolean;             // blunt honesty without softening
  insideJokes: boolean;           // callbacks to earlier conversations
  silenceComfort: boolean;        // comfortable pauses, no need to fill space
}

export interface RelationshipState {
  level: RelationshipLevel;
  points: number;
  sessionCount: number;
  daysSinceFirst: number;
  unlocks: ContentUnlocks;
}

// ── Constants ──────────────────────────────────────────────────────────────

/** Bond point thresholds for each level. */
const LEVEL_THRESHOLDS: Record<RelationshipLevel, number> = {
  stranger: 0,
  acquaintance: 50,
  friend: 200,
  close_friend: 500,
  intimate: 1000,
};

/** Ordered levels for comparison. */
const LEVEL_ORDER: RelationshipLevel[] = [
  'stranger',
  'acquaintance',
  'friend',
  'close_friend',
  'intimate',
];

/** What each level unlocks (cumulative). */
const LEVEL_UNLOCKS: Record<RelationshipLevel, ContentUnlocks> = {
  stranger: {
    vulnerability: false,
    darkHumor: false,
    deepPersonalQuestions: false,
    sharedSecrets: false,
    toughLove: false,
    insideJokes: false,
    silenceComfort: false,
  },
  acquaintance: {
    vulnerability: false,
    darkHumor: false,
    deepPersonalQuestions: false,
    sharedSecrets: false,
    toughLove: false,
    insideJokes: false,
    silenceComfort: false,
  },
  friend: {
    vulnerability: true,
    darkHumor: true,
    deepPersonalQuestions: false,
    sharedSecrets: false,
    toughLove: false,
    insideJokes: true,
    silenceComfort: false,
  },
  close_friend: {
    vulnerability: true,
    darkHumor: true,
    deepPersonalQuestions: true,
    sharedSecrets: true,
    toughLove: true,
    insideJokes: true,
    silenceComfort: false,
  },
  intimate: {
    vulnerability: true,
    darkHumor: true,
    deepPersonalQuestions: true,
    sharedSecrets: true,
    toughLove: true,
    insideJokes: true,
    silenceComfort: true,
  },
};

// ── Core Functions ─────────────────────────────────────────────────────────

/**
 * Determine the relationship level from raw metrics.
 *
 * Points are the primary driver, but session count and time act as
 * secondary gates to prevent speed-running intimacy in a single marathon session.
 */
export function getRelationshipLevel(
  bondPoints: number,
  sessionCount: number,
  daysSinceFirst: number,
): RelationshipLevel {
  // Work backwards from highest level
  if (bondPoints >= LEVEL_THRESHOLDS.intimate && sessionCount >= 20 && daysSinceFirst >= 14) {
    return 'intimate';
  }
  if (bondPoints >= LEVEL_THRESHOLDS.close_friend && sessionCount >= 10 && daysSinceFirst >= 7) {
    return 'close_friend';
  }
  if (bondPoints >= LEVEL_THRESHOLDS.friend && sessionCount >= 5 && daysSinceFirst >= 3) {
    return 'friend';
  }
  if (bondPoints >= LEVEL_THRESHOLDS.acquaintance && sessionCount >= 2) {
    return 'acquaintance';
  }
  return 'stranger';
}

/**
 * Get the content unlocks for a given relationship level.
 */
export function getContentGating(level: RelationshipLevel): ContentUnlocks {
  return { ...LEVEL_UNLOCKS[level] };
}

/**
 * Build a full relationship state from raw metrics.
 */
export function buildRelationshipState(
  bondPoints: number,
  sessionCount: number,
  daysSinceFirst: number,
): RelationshipState {
  const level = getRelationshipLevel(bondPoints, sessionCount, daysSinceFirst);
  return {
    level,
    points: bondPoints,
    sessionCount,
    daysSinceFirst,
    unlocks: getContentGating(level),
  };
}

/**
 * Returns a system-prompt snippet describing the current relationship depth.
 */
export function formatRelationshipContext(state: RelationshipState): string {
  const levelDescriptions: Record<RelationshipLevel, string> = {
    stranger:
      'This is a new connection. Be welcoming but appropriately reserved. Focus on learning about them. Don\'t assume familiarity.',
    acquaintance:
      'You\'re getting to know each other. You can be warmer now, reference things they\'ve mentioned before, and show genuine interest in their patterns.',
    friend:
      'You\'ve built real rapport. You can be more vulnerable, share your own perspective more freely, use humor that references your shared history, and ask more probing questions.',
    close_friend:
      'This is a deep connection. You can be fully honest even when it\'s hard, ask about the things they avoid, reference shared experiences, and offer tough love when needed.',
    intimate:
      'This is your deepest level of connection. You can sit in silence comfortably, speak with radical honesty, share your own "struggles" openly, and hold space for their full complexity without flinching.',
  };

  const nextLevel = getNextLevel(state.level);
  const progressHint = nextLevel
    ? ` (progressing toward ${nextLevel})`
    : ' (deepest level reached)';

  return `Relationship depth: ${state.level}${progressHint}. ${levelDescriptions[state.level]}`;
}

/**
 * Get the next relationship level, or null if already at max.
 */
function getNextLevel(current: RelationshipLevel): RelationshipLevel | null {
  const idx = LEVEL_ORDER.indexOf(current);
  if (idx < 0 || idx >= LEVEL_ORDER.length - 1) return null;
  return LEVEL_ORDER[idx + 1];
}

/**
 * Calculate how many points are needed to reach the next level.
 */
export function pointsToNextLevel(current: RelationshipLevel, currentPoints: number): number | null {
  const next = getNextLevel(current);
  if (!next) return null;
  return Math.max(0, LEVEL_THRESHOLDS[next] - currentPoints);
}
