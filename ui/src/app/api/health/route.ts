/**
 * MEOK AI LABS — Health Check Endpoint
 *
 * Returns structured status of all subsystems.
 */

import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';

const startTime = Date.now();

export async function GET() {
  // Database check
  let db: { connected: boolean; latencyMs?: number; error?: string } = { connected: false, error: 'Not checked' };
  try {
    if (sql) {
      const start = Date.now();
      const result = await sql`SELECT 1 AS health_check`;
      db = { connected: true, latencyMs: Date.now() - start };
    } else {
      db = { connected: false, error: 'DATABASE_URL not configured' };
    }
  } catch (err) {
    db = {
      connected: false,
      error: err instanceof Error ? err.message : 'DB error',
    };
  }

  // Auth check
  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '';
  const clerk = clerkKey.startsWith('pk_') ? 'configured' : 'missing';

  // Stripe check  
  const stripe = (process.env.STRIPE_SECRET_KEY ?? '').startsWith('sk_') ? 'configured' : 'missing';

  // Build response
  const response = {
    status: db.connected ? 'healthy' : 'degraded',
    service: 'meok-ui',
    version: '3.0.0-revenue',
    timestamp: new Date().toISOString(),
    uptime: Math.floor((Date.now() - startTime) / 1000),
    db,
    clerk,
    stripe,
    revenue_ready: stripe === 'configured' && db.connected,
  };

  return NextResponse.json(response, {
    status: db.connected ? 200 : 503,
    headers: { 'Cache-Control': 'no-store' },
  });
}
