/**
 * MEOK AI LABS — Database connection
 *
 * Uses @neondatabase/serverless for cloud (Neon HTTP),
 * or postgres.js for local development (standard TCP).
 *
 * The `sql` export is a tagged template function, or null if DATABASE_URL is not set.
 * Marketing pages and other non-DB routes will continue to work without a connection.
 */

import { neon } from '@neondatabase/serverless';

const DATABASE_URL = process.env.DATABASE_URL;
const IS_LOCAL = DATABASE_URL?.includes('localhost') || DATABASE_URL?.includes('127.0.0.1');

if (!DATABASE_URL) {
  console.warn('[db] DATABASE_URL not set — database operations will fail');
}

// For local Postgres: use postgres.js which supports the same tagged template syntax
// For Neon cloud: use @neondatabase/serverless HTTP driver
let sql: ReturnType<typeof neon> | null = null;

if (DATABASE_URL) {
  if (IS_LOCAL) {
    // Local mode: use postgres.js (TCP connection)
    // postgres.js returns rows as arrays by default, but with the tagged template
    // interface it matches neon's API closely enough for our queries
    try {
      // Dynamic import to avoid bundling issues when not needed
      const pgModule = require('postgres');
      const pg = pgModule(DATABASE_URL);

      // Wrap postgres.js to match neon's tagged template return type (array of rows)
      sql = ((strings: TemplateStringsArray, ...values: unknown[]) => {
        return pg(strings, ...values).then((rows: unknown[]) => rows);
      }) as ReturnType<typeof neon>;
    } catch (err) {
      console.warn('[db] postgres.js not available for local mode, falling back to neon driver');
      sql = neon(DATABASE_URL);
    }
  } else {
    // Cloud mode: use Neon HTTP driver
    sql = neon(DATABASE_URL);
  }
}

export { sql };
