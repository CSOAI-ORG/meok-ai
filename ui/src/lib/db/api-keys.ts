/**
 * MEOK AI LABS — API key management (PostgreSQL-backed)
 *
 * Replaces the legacy flat-file ~/.meok/api_keys.json storage with
 * proper Neon PostgreSQL persistence suitable for Vercel serverless.
 */

import { sql } from './index';
import { createHash, randomBytes } from 'crypto';

export type ApiKeyTier = 'sovereign' | 'family';

export interface ApiKey {
  id: string;
  user_id: string;
  key_hash: string;
  key_prefix: string;
  tier: ApiKeyTier;
  name: string;
  is_active: boolean;
  created_at: string;
  last_used_at: string | null;
}

// ── Schema ──────────────────────────────────────────────────────────────────

export async function ensureApiKeysTable(): Promise<void> {
  if (!sql) throw new Error('DATABASE_URL not configured');
  await sql`
    CREATE TABLE IF NOT EXISTS api_keys (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      key_hash TEXT UNIQUE NOT NULL,
      key_prefix TEXT NOT NULL,
      tier TEXT NOT NULL DEFAULT 'sovereign',
      name TEXT NOT NULL DEFAULT 'default',
      is_active BOOLEAN NOT NULL DEFAULT true,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      last_used_at TIMESTAMPTZ
    );
  `;
  await sql`
    CREATE INDEX IF NOT EXISTS idx_api_keys_user_id ON api_keys(user_id);
  `;
  await sql`
    CREATE INDEX IF NOT EXISTS idx_api_keys_key_hash ON api_keys(key_hash);
  `;
}

// ── Key generation ──────────────────────────────────────────────────────────

export function generateApiKey(): string {
  const raw = randomBytes(32).toString('base64url');
  return `meok_${raw}`;
}

export function hashApiKey(key: string): string {
  return createHash('sha256').update(key).digest('hex');
}

// ── CRUD ────────────────────────────────────────────────────────────────────

/**
 * Create and store a new API key for a user. Returns the plaintext key
 * (only time it's ever shown — store it safely client-side).
 */
export async function createApiKey(
  userId: string,
  tier: ApiKeyTier,
  name: string = 'default',
): Promise<{ plaintext: string; prefix: string; id: string }> {
  if (!sql) throw new Error('DATABASE_URL not configured');

  const plaintext = generateApiKey();
  const keyHash = hashApiKey(plaintext);
  const prefix = plaintext.slice(0, 12);

  const rows = await sql`
    INSERT INTO api_keys (user_id, key_hash, key_prefix, tier, name)
    VALUES (${userId}, ${keyHash}, ${prefix}, ${tier}, ${name})
    RETURNING id;
  `;

  if (!rows || rows.length === 0) {
    throw new Error('Failed to create API key');
  }

  return { plaintext, prefix, id: rows[0].id };
}

/**
 * Look up a key by its full plaintext value. Returns the key metadata
 * and updates last_used_at.
 */
export async function lookupApiKey(plaintext: string): Promise<ApiKey | null> {
  if (!sql) throw new Error('DATABASE_URL not configured');

  const keyHash = hashApiKey(plaintext);
  const rows = await sql`
    UPDATE api_keys
    SET last_used_at = NOW()
    WHERE key_hash = ${keyHash} AND is_active = true
    RETURNING *;
  `;

  return rows?.[0] ?? null;
}

/**
 * List all active API keys for a user.
 */
export async function listApiKeys(userId: string): Promise<ApiKey[]> {
  if (!sql) throw new Error('DATABASE_URL not configured');
  return sql`
    SELECT id, user_id, key_prefix, tier, name, is_active, created_at, last_used_at
    FROM api_keys
    WHERE user_id = ${userId} AND is_active = true
    ORDER BY created_at DESC;
  `;
}

/**
 * Revoke (deactivate) an API key.
 */
export async function revokeApiKey(keyId: string, userId: string): Promise<boolean> {
  if (!sql) throw new Error('DATABASE_URL not configured');
  const rows = await sql`
    UPDATE api_keys
    SET is_active = false
    WHERE id = ${keyId} AND user_id = ${userId}
    RETURNING id;
  `;
  return (rows?.length ?? 0) > 0;
}
