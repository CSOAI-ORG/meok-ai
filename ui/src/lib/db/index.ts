/**
 * MEOK AI LABS — Database connection (Neon serverless Postgres)
 *
 * Uses @neondatabase/serverless for HTTP-based SQL queries.
 * The `sql` export is a tagged template function, or null if DATABASE_URL is not set.
 * Marketing pages and other non-DB routes will continue to work without a connection.
 */

import { neon } from '@neondatabase/serverless';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.warn('[db] DATABASE_URL not set — database operations will fail');
}

export const sql = DATABASE_URL ? neon(DATABASE_URL) : null;
