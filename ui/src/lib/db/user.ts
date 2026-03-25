/**
 * MEOK AI LABS — User model and database operations
 *
 * Handles user lifecycle: creation on Clerk signup, tier management,
 * companion bonding state, Guardian parental-control settings, and
 * message-rate enforcement.
 */

import { sql } from './index';

// ── Types ──────────────────────────────────────────────────────────────────

export type Tier = 'explorer' | 'sovereign' | 'family';

export interface User {
  id: string;                    // Clerk user ID (primary key)
  email: string;
  name: string | null;
  tier: Tier;
  companion_id: string | null;   // Which character they hatched (e.g. 'aria')
  companion_name: string | null; // Custom name the user gave their companion
  companion_stage: number;       // Interaction count — 0 = egg, 200 = full sovereign
  guardian_enabled: boolean;
  guardian_settings: GuardianSettings | null;
  family_group_id: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  messages_today: number;
  messages_today_reset: string;  // ISO date string — date when the counter next resets
  messages_total: number;
  streak_days: number;
  last_active_date: string | null;
  created_at: string;            // ISO datetime
  updated_at: string;            // ISO datetime
  deleted_at: string | null;     // ISO datetime — set on GDPR deletion request
}

export interface GuardianSettings {
  scan_messages: boolean;
  alert_email: string | null;
  alert_phone: string | null;
  child_safe_mode: boolean;
  threat_threshold: number;  // 0.0–1.0, default 0.85 — higher = less sensitive
  relationship_shield?: boolean;
  social_guardian?: boolean;
  notifications?: { email: boolean; push: boolean; in_app_only: boolean };
}

// ── Constants ──────────────────────────────────────────────────────────────

/** Per-tier daily message caps and memory retention windows. -1 = unlimited. */
export const TIER_LIMITS: Record<Tier, { messages_per_day: number; memory_days: number; companions: number }> = {
  explorer:  { messages_per_day: 50,   memory_days: -1,  companions: 1  }, // sovereign memory is permanent
  sovereign: { messages_per_day: -1,   memory_days: -1,  companions: 1  }, // unlimited
  family:    { messages_per_day: -1,   memory_days: -1,  companions: 5  }, // 5 family members, each 1 companion
};

/** Sensible defaults applied to new Guardian activations. */
export const DEFAULT_GUARDIAN_SETTINGS: GuardianSettings = {
  scan_messages:    true,
  alert_email:      null,
  alert_phone:      null,
  child_safe_mode:  true,
  threat_threshold: 0.85,
};

// ── Helpers ────────────────────────────────────────────────────────────────

/**
 * Returns true when the user is allowed to send another message right now,
 * based on their tier's daily cap and today's running count.
 *
 * Explorer users are capped at TIER_LIMITS.explorer.messages_per_day.
 * Sovereign and Family users are always allowed (-1 = unlimited).
 */
export function canSendMessage(user: User): boolean {
  const limit = TIER_LIMITS[user.tier].messages_per_day;
  if (limit === -1) return true; // unlimited tier
  return user.messages_today < limit;
}

// ── Internal helpers ───────────────────────────────────────────────────────

/** Returns today's date as an ISO date string (YYYY-MM-DD). */
function todayISO(): string {
  return new Date().toISOString().split('T')[0];
}

/** Constructs a new User shell with all defaults filled in. */
function buildNewUser(clerkUserId: string, email: string, name: string | null): User {
  const now = new Date().toISOString();
  return {
    id:                     clerkUserId,
    email,
    name,
    tier:                   'explorer',
    companion_id:           null,
    companion_name:         null,
    companion_stage:        0,
    guardian_enabled:       false,
    guardian_settings:      null,
    family_group_id:        null,
    stripe_customer_id:     null,
    stripe_subscription_id: null,
    messages_today:         0,
    messages_today_reset:   todayISO(),
    messages_total:         0,
    streak_days:            0,
    last_active_date:       null,
    created_at:             now,
    updated_at:             now,
    deleted_at:             null,
  };
}

// ── CRUD operations ────────────────────────────────────────────────────────

/**
 * Creates a new user record in the database when a Clerk `user.created`
 * event fires. The user starts on the Explorer tier with no companion.
 *
 * @param clerkUserId  The `id` field from the Clerk webhook payload.
 * @param email        Primary email address at sign-up time.
 * @param name         Full name, or null if not provided.
 * @returns            The newly created User record.
 */
export async function createUser(
  clerkUserId: string,
  email: string,
  name: string | null,
): Promise<User> {
  console.log(`[db/user] createUser — clerkUserId=${clerkUserId} email=${email} name=${name ?? '(none)'}`);

  const user = buildNewUser(clerkUserId, email, name);

  if (!sql) {
    console.warn('[db/user] createUser — no database connection, returning in-memory user');
    return user;
  }

  await sql`
    INSERT INTO users (id, email, name, tier, companion_id, companion_name, companion_stage,
                       guardian_enabled, guardian_settings, family_group_id,
                       stripe_customer_id, stripe_subscription_id,
                       messages_today, messages_today_reset,
                       messages_total, streak_days, last_active_date,
                       created_at, updated_at, deleted_at)
    VALUES (${user.id}, ${user.email}, ${user.name}, ${user.tier},
            ${user.companion_id}, ${user.companion_name}, ${user.companion_stage},
            ${user.guardian_enabled}, ${user.guardian_settings ? JSON.stringify(user.guardian_settings) : null},
            ${user.family_group_id}, ${user.stripe_customer_id}, ${user.stripe_subscription_id},
            ${user.messages_today}, ${user.messages_today_reset},
            ${user.messages_total}, ${user.streak_days}, ${user.last_active_date},
            ${user.created_at}, ${user.updated_at}, ${user.deleted_at})
    ON CONFLICT (id) DO NOTHING
  `;

  return user;
}

/**
 * Fetches a single user by their Clerk user ID.
 *
 * @param id  Clerk user ID.
 * @returns   The User record, or null if not found (or soft-deleted).
 */
export async function getUserById(id: string): Promise<User | null> {
  console.log(`[db/user] getUserById — id=${id}`);

  if (!sql) {
    console.warn('[db/user] getUserById — no database connection');
    return null;
  }

  const rows = await sql`SELECT * FROM users WHERE id = ${id} AND deleted_at IS NULL`;
  return (rows[0] as User) ?? null;
}

/**
 * Upgrades or downgrades a user's subscription tier and optionally records
 * the associated Stripe customer / subscription IDs.
 *
 * Called from the Stripe webhook handler when a checkout session completes
 * or a subscription is cancelled.
 *
 * @param id         Clerk user ID.
 * @param tier       Target tier to assign.
 * @param stripeData Optional Stripe identifiers to persist alongside the tier.
 */
export async function updateUserTier(
  id: string,
  tier: Tier,
  stripeData?: { customerId?: string; subscriptionId?: string },
): Promise<void> {
  console.log(
    `[db/user] updateUserTier — id=${id} tier=${tier}` +
    (stripeData ? ` stripeCustomer=${stripeData.customerId ?? '-'} stripeSub=${stripeData.subscriptionId ?? '-'}` : ''),
  );

  if (!sql) {
    console.warn('[db/user] updateUserTier — no database connection');
    return;
  }

  await sql`
    UPDATE users
    SET tier                    = ${tier},
        stripe_customer_id      = COALESCE(${stripeData?.customerId ?? null}, stripe_customer_id),
        stripe_subscription_id  = COALESCE(${stripeData?.subscriptionId ?? null}, stripe_subscription_id),
        updated_at              = NOW()
    WHERE id = ${id}
  `;
}

/**
 * Soft-deletes a user in response to a Clerk `user.deleted` event.
 * Sets `deleted_at` to now; a background job should later purge PII
 * to satisfy GDPR Article 17 (right to erasure).
 *
 * Hard-delete / anonymisation should be handled by a scheduled job
 * that picks up rows where `deleted_at < NOW() - INTERVAL '30 days'`.
 *
 * @param id  Clerk user ID.
 */
export async function markUserDeleted(id: string): Promise<void> {
  console.log(`[db/user] markUserDeleted — id=${id} deleted_at=${new Date().toISOString()}`);

  if (!sql) {
    console.warn('[db/user] markUserDeleted — no database connection');
    return;
  }

  await sql`
    UPDATE users
    SET deleted_at = NOW(),
        updated_at = NOW()
    WHERE id = ${id}
  `;

  // GDPR erasure: deleted_at is now set. A scheduled Neon cron query handles
  // final PII purge after the 30-day retention window:
  //   DELETE FROM users WHERE deleted_at IS NOT NULL AND deleted_at < NOW() - INTERVAL '30 days';
  // This runs via pg_cron or an external scheduler (Inngest/Vercel Cron).
  console.log(`[db/user] GDPR erasure scheduled — userId=${id} will be purged 30 days after deleted_at`);
}

/**
 * Increments the user's `messages_today` counter by one, resetting it first
 * if the reset date has passed (i.e. a new calendar day has started).
 *
 * Returns whether the message should be allowed and how many messages remain
 * in today's quota. `-1` remaining means the tier is unlimited.
 *
 * @param id  Clerk user ID.
 * @returns   `{ allowed: boolean; remaining: number }` — remaining is -1 for unlimited tiers.
 */
export async function incrementMessageCount(
  id: string,
): Promise<{ allowed: boolean; remaining: number }> {
  console.log(`[db/user] incrementMessageCount — id=${id}`);

  if (!sql) {
    console.warn('[db/user] incrementMessageCount — no database connection');
    return { allowed: true, remaining: -1 };
  }

  const today = todayISO();
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const rows = await sql`
    UPDATE users
    SET messages_today       = CASE WHEN messages_today_reset < ${today}
                                    THEN 1
                                    ELSE messages_today + 1
                               END,
        messages_today_reset = ${today},
        messages_total       = COALESCE(messages_total, 0) + 1,
        streak_days          = CASE
                                 WHEN last_active_date = ${today} THEN COALESCE(streak_days, 0)
                                 WHEN last_active_date = ${yesterday} THEN COALESCE(streak_days, 0) + 1
                                 ELSE 1
                               END,
        last_active_date     = ${today},
        updated_at           = NOW()
    WHERE id         = ${id}
      AND deleted_at IS NULL
    RETURNING tier, messages_today
  `;

  if (!rows[0]) {
    // User not found or soft-deleted — deny by default
    return { allowed: false, remaining: 0 };
  }

  const row = rows[0] as { tier: string; messages_today: number };
  const limit = TIER_LIMITS[row.tier as Tier].messages_per_day;
  if (limit === -1) return { allowed: true, remaining: -1 };
  const allowed   = row.messages_today <= limit;
  const remaining = Math.max(0, limit - row.messages_today);
  return { allowed, remaining };
}

/**
 * Records which companion character a user hatched and what name they chose.
 * Resets `companion_stage` to 0 (the egg state) when a new companion is set.
 *
 * @param id            Clerk user ID.
 * @param companionId   Character slug, e.g. `'aria'`, `'kael'`.
 * @param companionName The custom name the user gave their companion.
 */
export async function updateCompanion(
  id: string,
  companionId: string,
  companionName: string,
): Promise<void> {
  console.log(`[db/user] updateCompanion — id=${id} companionId=${companionId} companionName=${companionName}`);

  if (!sql) {
    console.warn('[db/user] updateCompanion — no database connection');
    return;
  }

  await sql`
    UPDATE users
    SET companion_id    = ${companionId},
        companion_name  = ${companionName},
        companion_stage = 0,
        updated_at      = NOW()
    WHERE id = ${id}
  `;
}

/**
 * Retrieves the Guardian parental-control settings for a user.
 * Returns null if Guardian has never been configured.
 *
 * @param id  Clerk user ID.
 * @returns   GuardianSettings or null.
 */
export async function getGuardianSettings(id: string): Promise<GuardianSettings | null> {
  console.log(`[db/user] getGuardianSettings — id=${id}`);

  if (!sql) {
    console.warn('[db/user] getGuardianSettings — no database connection');
    return null;
  }

  const rows = await sql`
    SELECT guardian_settings
    FROM users
    WHERE id = ${id} AND deleted_at IS NULL
  `;

  return (rows[0]?.guardian_settings as GuardianSettings) ?? null;
}

/**
 * Merges partial Guardian settings into the user's existing JSONB column.
 * Optionally toggles the top-level `guardian_enabled` flag.
 *
 * @param id        Clerk user ID.
 * @param settings  Partial settings object to merge (JSONB ||).
 * @param enabled   If provided, also sets `guardian_enabled`.
 */
export async function updateGuardianSettings(
  id: string,
  settings: Partial<GuardianSettings>,
  enabled?: boolean,
): Promise<void> {
  if (!sql) {
    console.warn('[db/user] updateGuardianSettings — no database connection');
    return;
  }
  // Merge new settings into existing JSONB
  if (enabled !== undefined) {
    await sql`
      UPDATE users
      SET guardian_enabled = ${enabled},
          guardian_settings = COALESCE(guardian_settings, '{}') || ${JSON.stringify(settings)}::jsonb,
          updated_at = NOW()
      WHERE id = ${id} AND deleted_at IS NULL
    `;
  } else {
    await sql`
      UPDATE users
      SET guardian_settings = COALESCE(guardian_settings, '{}') || ${JSON.stringify(settings)}::jsonb,
          updated_at = NOW()
      WHERE id = ${id} AND deleted_at IS NULL
    `;
  }
}

// ── Custom Characters ─────────────────────────────────────────────────────

/** Per-tier limits for how many custom characters a user can create. */
export const CUSTOM_CHARACTER_LIMITS: Record<Tier, number> = {
  explorer:  1,
  sovereign: 5,
  family:    10,
};

/**
 * Retrieves the user's custom characters array from the `custom_characters`
 * JSONB column. Returns an empty array if the column doesn't exist yet or
 * the user has no custom characters.
 */
export async function getCustomCharacters(userId: string): Promise<unknown[]> {
  console.log(`[db/user] getCustomCharacters — userId=${userId}`);

  if (!sql) {
    console.warn('[db/user] getCustomCharacters — no database connection');
    return [];
  }

  try {
    const rows = await sql`
      SELECT custom_characters
      FROM users
      WHERE id = ${userId} AND deleted_at IS NULL
    `;
    const raw = rows[0]?.custom_characters;
    if (Array.isArray(raw)) return raw;
    if (typeof raw === 'string') {
      try { return JSON.parse(raw); } catch { return []; }
    }
    return [];
  } catch (err: unknown) {
    // Column may not exist yet — gracefully return empty
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('custom_characters') || msg.includes('column')) {
      console.warn('[db/user] getCustomCharacters — column may not exist yet, returning []');
      return [];
    }
    throw err;
  }
}

/**
 * Appends a new custom character object to the user's `custom_characters`
 * JSONB array column. Creates the column value if it doesn't exist yet.
 */
export async function saveCustomCharacter(userId: string, character: Record<string, unknown>): Promise<void> {
  console.log(`[db/user] saveCustomCharacter — userId=${userId} characterId=${character.id}`);

  if (!sql) {
    console.warn('[db/user] saveCustomCharacter — no database connection');
    return;
  }

  try {
    await sql`
      UPDATE users
      SET custom_characters = COALESCE(custom_characters, '[]'::jsonb) || ${JSON.stringify([character])}::jsonb,
          updated_at = NOW()
      WHERE id = ${userId} AND deleted_at IS NULL
    `;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('custom_characters') || msg.includes('column')) {
      console.warn('[db/user] saveCustomCharacter — column may not exist yet. Run migration to add custom_characters JSONB column.');
    }
    throw err;
  }
}

// ── OCEAN Profile Persistence ────────────────────────────────────────────

/**
 * Retrieves the user's persisted OCEAN (Big Five) personality profile.
 * Returns null if no profile has been computed yet.
 */
export async function getUserProfile(userId: string): Promise<Record<string, unknown> | null> {
  console.log(`[db/user] getUserProfile — userId=${userId}`);

  if (!sql) {
    console.warn('[db/user] getUserProfile — no database connection');
    return null;
  }

  try {
    const rows = await sql`
      SELECT user_profile
      FROM users
      WHERE id = ${userId} AND deleted_at IS NULL
    `;
    const raw = rows[0]?.user_profile;
    if (!raw || (typeof raw === 'object' && Object.keys(raw as object).length === 0)) return null;
    if (typeof raw === 'string') {
      try { return JSON.parse(raw); } catch { return null; }
    }
    return raw as Record<string, unknown>;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('user_profile') || msg.includes('column')) {
      console.warn('[db/user] getUserProfile — column may not exist yet, returning null');
      return null;
    }
    throw err;
  }
}

/**
 * Persists the user's OCEAN personality profile to the database.
 * Merges the new profile into the existing JSONB column so partial
 * updates are supported.
 */
export async function updateUserProfile(userId: string, profile: Record<string, unknown>): Promise<void> {
  console.log(`[db/user] updateUserProfile — userId=${userId}`);

  if (!sql) {
    console.warn('[db/user] updateUserProfile — no database connection');
    return;
  }

  try {
    await sql`
      UPDATE users
      SET user_profile = COALESCE(user_profile, '{}'::jsonb) || ${JSON.stringify(profile)}::jsonb,
          updated_at = NOW()
      WHERE id = ${userId} AND deleted_at IS NULL
    `;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('user_profile') || msg.includes('column')) {
      console.warn('[db/user] updateUserProfile — column may not exist yet. Run migrate-v2.sql.');
    } else {
      throw err;
    }
  }
}

// ── Bond Points ───────────────────────────────────────────────────────────

/**
 * Adds bond points to a user's running total.
 * The `bond_points` column is an integer default 0.
 */
export async function addBondPoints(userId: string, points: number): Promise<void> {
  console.log(`[db/user] addBondPoints — userId=${userId} points=${points}`);

  if (!sql) {
    console.warn('[db/user] addBondPoints — no database connection');
    return;
  }

  try {
    await sql`
      UPDATE users
      SET bond_points = COALESCE(bond_points, 0) + ${points},
          updated_at  = NOW()
      WHERE id = ${userId} AND deleted_at IS NULL
    `;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('bond_points') || msg.includes('column')) {
      console.warn('[db/user] addBondPoints — column may not exist yet. Run migration to add bond_points INTEGER DEFAULT 0.');
    } else {
      throw err;
    }
  }
}

// ── Diary Entries ─────────────────────────────────────────────────────────

/**
 * Stores a companion diary entry in the `diary_entries` table.
 * Falls back gracefully if the table does not exist yet.
 */
export async function storeDiaryEntry(
  userId: string,
  companionId: string,
  entry: Record<string, unknown>,
): Promise<void> {
  console.log(`[db/user] storeDiaryEntry — userId=${userId} companionId=${companionId} entryId=${entry.id}`);

  if (!sql) {
    console.warn('[db/user] storeDiaryEntry — no database connection');
    return;
  }

  try {
    await sql`
      INSERT INTO diary_entries (id, user_id, companion_id, entry_type, content, topics, mood, bond_value, created_at)
      VALUES (
        ${(entry.id as string) ?? crypto.randomUUID()},
        ${userId},
        ${companionId},
        ${(entry.type as string) ?? 'reflection'},
        ${(entry.content as string) ?? ''},
        ${JSON.stringify((entry.topics as string[]) ?? [])},
        ${(entry.mood as string) ?? 'thoughtful'},
        ${(entry.bondValue as number) ?? 0},
        ${(entry.timestamp as string) ?? new Date().toISOString()}
      )
      ON CONFLICT (id) DO NOTHING
    `;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('diary_entries') || msg.includes('relation') || msg.includes('does not exist')) {
      console.warn('[db/user] storeDiaryEntry — table may not exist yet. Run migration to create diary_entries table.');
    } else {
      throw err;
    }
  }
}

// ── Care Signals ──────────────────────────────────────────────────────────

/**
 * Returns the number of care signals sent to a user in the current
 * calendar week (Monday–Sunday).
 */
export async function getSignalsSentThisWeek(userId: string): Promise<number> {
  console.log(`[db/user] getSignalsSentThisWeek — userId=${userId}`);

  if (!sql) {
    console.warn('[db/user] getSignalsSentThisWeek — no database connection');
    return 0;
  }

  try {
    const rows = await sql`
      SELECT COUNT(*)::int AS count
      FROM care_signals
      WHERE user_id = ${userId}
        AND created_at >= date_trunc('week', CURRENT_DATE)
    `;
    return (rows[0]?.count as number) ?? 0;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('care_signals') || msg.includes('relation') || msg.includes('does not exist')) {
      console.warn('[db/user] getSignalsSentThisWeek — table may not exist yet, returning 0');
      return 0;
    }
    throw err;
  }
}

/**
 * Queues a care signal for later delivery by inserting into `care_signals`.
 */
export async function queueCareSignal(
  userId: string,
  signal: { type: string; message: string; priority: string; deliverAt: string; friendTest: boolean },
): Promise<void> {
  console.log(`[db/user] queueCareSignal — userId=${userId} type=${signal.type}`);

  if (!sql) {
    console.warn('[db/user] queueCareSignal — no database connection');
    return;
  }

  try {
    await sql`
      INSERT INTO care_signals (id, user_id, signal_type, message, priority, deliver_at, friend_test, delivered, created_at)
      VALUES (
        ${crypto.randomUUID()},
        ${userId},
        ${signal.type},
        ${signal.message},
        ${signal.priority},
        ${signal.deliverAt},
        ${signal.friendTest},
        false,
        NOW()
      )
    `;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('care_signals') || msg.includes('relation') || msg.includes('does not exist')) {
      console.warn('[db/user] queueCareSignal — table may not exist yet. Run migration to create care_signals table.');
    } else {
      throw err;
    }
  }
}

/**
 * Retrieves pending (undelivered) care signals for a user, ordered by creation date.
 */
export async function getPendingCareSignals(
  userId: string,
): Promise<Array<{ id: string; type: string; message: string; priority: string; deliverAt: string; createdAt: string }>> {
  console.log(`[db/user] getPendingCareSignals — userId=${userId}`);

  if (!sql) {
    console.warn('[db/user] getPendingCareSignals — no database connection');
    return [];
  }

  try {
    const rows = await sql`
      SELECT id, signal_type, message, priority, deliver_at, created_at
      FROM care_signals
      WHERE user_id = ${userId}
        AND delivered = false
        AND deliver_at <= NOW()
      ORDER BY created_at ASC
    `;
    return rows.map((r: Record<string, unknown>) => ({
      id: r.id as string,
      type: r.signal_type as string,
      message: r.message as string,
      priority: r.priority as string,
      deliverAt: r.deliver_at as string,
      createdAt: r.created_at as string,
    }));
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('care_signals') || msg.includes('relation') || msg.includes('does not exist')) {
      console.warn('[db/user] getPendingCareSignals — table may not exist yet, returning []');
      return [];
    }
    throw err;
  }
}

/**
 * Downgrades a user to explorer tier. Called when a Stripe subscription
 * is cancelled or a payment permanently fails after grace period.
 */
export async function downgradeTier(userId: string): Promise<void> {
  console.log(`[db/user] downgradeTier — userId=${userId}`);
  await updateUserTier(userId, 'explorer');
}

/**
 * Sets a grace period flag on the user after a failed payment.
 * The user retains their current tier until `grace_expires`, after which
 * they should be downgraded to explorer.
 *
 * Note: grace period is stored as metadata in guardian_settings JSONB
 * to avoid another column. A scheduled job should check and enforce.
 */
export async function setGracePeriod(userId: string, days: number = 7): Promise<void> {
  console.log(`[db/user] setGracePeriod — userId=${userId} days=${days}`);

  if (!sql) {
    console.warn('[db/user] setGracePeriod — no database connection');
    return;
  }

  const graceExpires = new Date(Date.now() + days * 86400000).toISOString();
  await sql`
    UPDATE users
    SET guardian_settings = COALESCE(guardian_settings, '{}'::jsonb) || ${JSON.stringify({ payment_grace_expires: graceExpires })}::jsonb,
        updated_at = NOW()
    WHERE id = ${userId} AND deleted_at IS NULL
  `;
}
