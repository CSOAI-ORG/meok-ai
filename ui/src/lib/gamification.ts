/**
 * MEOK AI Fluency Gamification System
 *
 * Duolingo-inspired mastery progression for the MEOK platform.
 * All functions are pure (no side effects) and fully deterministic.
 * No external dependencies.
 */

// ── Types ─────────────────────────────────────────────────────────────────────

export type MasteryTier = "Beginner" | "Explorer" | "Builder" | "Sovereign";

export interface MasteryLevel {
  tier: MasteryTier;
  label: string;
  color: string;
  badge: string;
  minInteractions: number;
  maxInteractions: number | null; // null = no upper bound (Sovereign)
}

export interface Streak {
  current: number;
  longest: number;
  lastActiveDate: string | null; // ISO date string "YYYY-MM-DD"
  freezesAvailable: number;
}

export type StreakStatus = "maintained" | "broken" | "extended" | "started";

export interface StreakResult {
  status: StreakStatus;
  newStreak: number;
}

export interface LevelProgress {
  percent: number;
  xpToNext: number;
  current: MasteryLevel;
  next: MasteryLevel | null;
}

export type InteractionType =
  | "chat"
  | "memory"
  | "guardian"
  | "work"
  | "birth";

export type ChallengeType =
  | "send_3_chats"
  | "save_a_memory"
  | "trigger_guardian"
  | "update_work_context"
  | "check_birth_card"
  | "review_morning_brief"
  | "explore_sovereign_mode";

export interface DailyChallenge {
  id: string;
  type: ChallengeType;
  title: string;
  description: string;
  xpReward: number;
  targetCount: number;
}

export type BadgeId =
  | "first_hatch"
  | "7_day_streak"
  | "30_day_streak"
  | "first_guardian_alert"
  | "100_interactions"
  | "reached_sovereign"
  | "first_morning_brief"
  | "shared_birth_card";

export interface Badge {
  id: BadgeId;
  title: string;
  description: string;
  emoji: string;
  unlockedAt?: Date;
}

export interface UserStats {
  userId: string;
  totalInteractions: number;
  streak: Streak;
  earnedBadgeIds: BadgeId[];
  guardianAlertsTriggered: number;
  morningBriefsRead: number;
  birthCardShared: boolean;
}

// ── Mastery Level Definitions ─────────────────────────────────────────────────

const MASTERY_LEVELS: MasteryLevel[] = [
  {
    tier: "Beginner",
    label: "Beginner",
    color: "#94a3b8", // slate-400
    badge: "🥚",
    minInteractions: 0,
    maxInteractions: 9,
  },
  {
    tier: "Explorer",
    label: "Explorer",
    color: "#60a5fa", // blue-400
    badge: "🌱",
    minInteractions: 10,
    maxInteractions: 24,
  },
  {
    tier: "Builder",
    label: "Builder",
    color: "#a78bfa", // violet-400
    badge: "⚡",
    minInteractions: 25,
    maxInteractions: 49,
  },
  {
    tier: "Sovereign",
    label: "Sovereign",
    color: "#fbbf24", // amber-400
    badge: "👑",
    minInteractions: 50,
    maxInteractions: null,
  },
];

// ── Badge Definitions ─────────────────────────────────────────────────────────

const ALL_BADGES: Badge[] = [
  {
    id: "first_hatch",
    title: "First Hatch",
    description: "Complete your first interaction with MEOK",
    emoji: "🐣",
  },
  {
    id: "7_day_streak",
    title: "Week Warrior",
    description: "Maintain a 7-day active streak",
    emoji: "🔥",
  },
  {
    id: "30_day_streak",
    title: "Monthly Master",
    description: "Maintain a 30-day active streak",
    emoji: "🌟",
  },
  {
    id: "first_guardian_alert",
    title: "Guardian Activated",
    description: "Trigger your first Guardian alert",
    emoji: "🛡️",
  },
  {
    id: "100_interactions",
    title: "Century",
    description: "Complete 100 total interactions",
    emoji: "💯",
  },
  {
    id: "reached_sovereign",
    title: "Sovereign Ascension",
    description: "Reach the Sovereign mastery level (50+ interactions)",
    emoji: "👑",
  },
  {
    id: "first_morning_brief",
    title: "Early Bird",
    description: "Read your first Morning Brief",
    emoji: "🌅",
  },
  {
    id: "shared_birth_card",
    title: "Storyteller",
    description: "Share your Birth Card with someone",
    emoji: "🎴",
  },
];

// ── Daily Challenge Definitions ───────────────────────────────────────────────

const CHALLENGE_POOL: Omit<DailyChallenge, "id">[] = [
  {
    type: "send_3_chats",
    title: "Chatty",
    description: "Send 3 messages to MEOK today",
    xpReward: 15,
    targetCount: 3,
  },
  {
    type: "save_a_memory",
    title: "Memory Maker",
    description: "Save a new memory to your vault",
    xpReward: 20,
    targetCount: 1,
  },
  {
    type: "trigger_guardian",
    title: "Alert Mode",
    description: "Trigger a Guardian alert today",
    xpReward: 25,
    targetCount: 1,
  },
  {
    type: "update_work_context",
    title: "Work Sync",
    description: "Update your work context",
    xpReward: 20,
    targetCount: 1,
  },
  {
    type: "check_birth_card",
    title: "Know Thyself",
    description: "Review your Birth Card today",
    xpReward: 10,
    targetCount: 1,
  },
  {
    type: "review_morning_brief",
    title: "Morning Ritual",
    description: "Read your Morning Brief",
    xpReward: 15,
    targetCount: 1,
  },
  {
    type: "explore_sovereign_mode",
    title: "Sovereign Seeker",
    description: "Explore a Sovereign Mode feature",
    xpReward: 30,
    targetCount: 1,
  },
];

// ── Core Functions ────────────────────────────────────────────────────────────

/**
 * Returns the MasteryLevel object for the given interaction count.
 */
export function getMasteryLevel(interactions: number): MasteryLevel {
  // Iterate in reverse so we land on the highest qualifying tier
  for (let i = MASTERY_LEVELS.length - 1; i >= 0; i--) {
    if (interactions >= MASTERY_LEVELS[i].minInteractions) {
      return MASTERY_LEVELS[i];
    }
  }
  return MASTERY_LEVELS[0];
}

/**
 * Computes streak status based on the last active date and the current streak count.
 *
 * Rules:
 * - null lastActiveDate → "started" (first ever interaction), newStreak = 1
 * - Last active was today → "maintained", streak unchanged
 * - Last active was yesterday → "extended", streak + 1
 * - Last active was 2+ days ago → "broken", newStreak = 1
 */
export function calculateStreak(
  lastActiveDate: Date | null,
  currentStreak: number
): StreakResult {
  const today = startOfDay(new Date());

  if (lastActiveDate === null) {
    return { status: "started", newStreak: 1 };
  }

  const last = startOfDay(lastActiveDate);
  const diffDays = daysBetween(last, today);

  if (diffDays === 0) {
    return { status: "maintained", newStreak: currentStreak };
  } else if (diffDays === 1) {
    return { status: "extended", newStreak: currentStreak + 1 };
  } else {
    return { status: "broken", newStreak: 1 };
  }
}

/**
 * Returns the streak bonus (additional interaction credits) for a given streak length.
 *
 * - < 7 days  → 0 bonus
 * - 7–29 days → 1 bonus
 * - 30–89 days→ 2 bonus
 * - 90+ days  → 3 bonus
 */
export function getStreakBonus(streakDays: number): number {
  if (streakDays >= 90) return 3;
  if (streakDays >= 30) return 2;
  if (streakDays >= 7) return 1;
  return 0;
}

/**
 * Returns the base XP awarded for a given interaction type.
 *
 * - chat     → 5 XP  (most common, lower value)
 * - memory   → 15 XP (intentional, higher effort)
 * - guardian → 20 XP (proactive safety behaviour)
 * - work     → 10 XP (context maintenance)
 * - birth    → 25 XP (identity reflection, rare)
 */
export function getXPForInteraction(interactionType: InteractionType): number {
  const xpMap: Record<InteractionType, number> = {
    chat: 5,
    memory: 15,
    guardian: 20,
    work: 10,
    birth: 25,
  };
  return xpMap[interactionType];
}

/**
 * Returns progress information toward the next mastery level.
 *
 * @param interactions - Total interaction count for the user
 */
export function getLevelProgress(interactions: number): LevelProgress {
  const current = getMasteryLevel(interactions);
  const currentIndex = MASTERY_LEVELS.findIndex((l) => l.tier === current.tier);
  const next =
    currentIndex < MASTERY_LEVELS.length - 1
      ? MASTERY_LEVELS[currentIndex + 1]
      : null;

  if (next === null) {
    // Sovereign — no next level
    return { percent: 100, xpToNext: 0, current, next: null };
  }

  const rangeSize = next.minInteractions - current.minInteractions;
  const progress = interactions - current.minInteractions;
  const percent = Math.min(100, Math.floor((progress / rangeSize) * 100));
  const xpToNext = next.minInteractions - interactions;

  return { percent, xpToNext: Math.max(0, xpToNext), current, next };
}

/**
 * Generates a deterministic daily challenge seeded by userId + date.
 * The same user always gets the same challenge on the same calendar day.
 *
 * @param userId - User identifier (used as part of the seed)
 * @param date   - The date for which the challenge is generated
 */
export function getDailyChallenge(
  userId: string,
  date: Date
): DailyChallenge {
  const dateStr = toDateString(date); // "YYYY-MM-DD"
  const seed = simpleHash(`${userId}:${dateStr}`);
  const index = seed % CHALLENGE_POOL.length;
  const template = CHALLENGE_POOL[index];

  return {
    id: `${dateStr}:${template.type}`,
    ...template,
  };
}

/**
 * Checks which badges a user has newly earned (i.e. earned but not yet in
 * `stats.earnedBadgeIds`). Returns only the newly unlocked badges.
 *
 * @param stats - Current user statistics snapshot
 */
export function checkBadgeUnlocks(stats: UserStats): Badge[] {
  const earned = new Set<BadgeId>(stats.earnedBadgeIds);
  const newBadges: Badge[] = [];
  const now = new Date();

  const candidates: Array<{ id: BadgeId; condition: boolean }> = [
    {
      id: "first_hatch",
      condition: stats.totalInteractions >= 1,
    },
    {
      id: "7_day_streak",
      condition: stats.streak.current >= 7 || stats.streak.longest >= 7,
    },
    {
      id: "30_day_streak",
      condition: stats.streak.current >= 30 || stats.streak.longest >= 30,
    },
    {
      id: "first_guardian_alert",
      condition: stats.guardianAlertsTriggered >= 1,
    },
    {
      id: "100_interactions",
      condition: stats.totalInteractions >= 100,
    },
    {
      id: "reached_sovereign",
      condition: stats.totalInteractions >= 50,
    },
    {
      id: "first_morning_brief",
      condition: stats.morningBriefsRead >= 1,
    },
    {
      id: "shared_birth_card",
      condition: stats.birthCardShared,
    },
  ];

  for (const { id, condition } of candidates) {
    if (condition && !earned.has(id)) {
      const template = ALL_BADGES.find((b) => b.id === id);
      if (template) {
        newBadges.push({ ...template, unlockedAt: now });
      }
    }
  }

  return newBadges;
}

// ── Internal helpers ──────────────────────────────────────────────────────────

/** Returns a new Date truncated to midnight (local time) */
function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/** Returns the number of whole days between two midnight-truncated dates */
function daysBetween(from: Date, to: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((to.getTime() - from.getTime()) / msPerDay);
}

/** Returns "YYYY-MM-DD" for a given Date */
function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/**
 * Deterministic integer hash of a string (djb2 variant).
 * Returns a non-negative integer.
 */
function simpleHash(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) ^ str.charCodeAt(i);
  }
  return Math.abs(hash);
}
