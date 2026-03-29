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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let sql: any = null;

if (DATABASE_URL) {
  if (IS_LOCAL) {
    // Local mode: use postgres.js (TCP connection to localhost PostgreSQL)
    try {
      const pgModule = require('postgres');
      const pg = pgModule(DATABASE_URL);
      // Wrap postgres.js to return plain arrays (matching Neon's API)
      sql = (strings: TemplateStringsArray, ...values: unknown[]) => {
        return pg(strings, ...values).then((rows: unknown[]) => [...rows]);
      };
    } catch {
      console.warn('[db] postgres.js not available, falling back to neon driver');
      sql = neon(DATABASE_URL);
    }
  } else {
    // Cloud mode: use Neon HTTP driver
    sql = neon(DATABASE_URL);
  }
}

export { sql };
