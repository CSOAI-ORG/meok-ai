/**
 * MEOK AI LABS — Minimal Health Check
 */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'meok-ui',
    version: '3.0.0-revenue',
    timestamp: new Date().toISOString(),
    db: process.env.DATABASE_URL ? 'configured' : 'missing',
    clerk: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? 'configured' : 'missing',
    stripe: process.env.STRIPE_SECRET_KEY ? 'configured' : 'missing',
    revenue_ready: !!(process.env.STRIPE_SECRET_KEY && process.env.DATABASE_URL),
  });
}
