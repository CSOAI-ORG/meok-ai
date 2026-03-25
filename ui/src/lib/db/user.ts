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
                       messages_today, messages_today_reset, created_at, updated_at, deleted_at)
    VALUES (${user.id}, ${user.email}, ${user.name}, ${user.tier},
            ${user.companion_id}, ${user.companion_name}, ${user.companion_stage},
            ${user.guardian_enabled}, ${user.guardian_settings ? JSON.stringify(user.guardian_settings) : null},
            ${user.family_group_id}, ${user.stripe_customer_id}, ${user.stripe_subscription_id},
            ${user.messages_today}, ${user.messages_today_reset},
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

  // TODO: enqueue a GDPR erasure job (e.g. via Inngest / BullMQ):
  //   await gdprQueue.add('schedule-erasure', { userId: id }, { delay: ms('30d') });
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
  const rows = await sql`
    UPDATE users
    SET messages_today       = CASE WHEN messages_today_reset < ${today}
                                    THEN 1
                                    ELSE messages_today + 1
                               END,
        messages_today_reset = ${today},
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
