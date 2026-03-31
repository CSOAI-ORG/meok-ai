/**
 * MEOK AI LABS — Easter Launch Readiness Check
 *
 * Hit /api/launch-check to see if all systems are go for launch.
 * Returns a checklist of every critical dependency.
 */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface CheckItem {
  name: string;
  status: 'pass' | 'fail' | 'warn';
  detail: string;
}

export async function GET() {
  const checks: CheckItem[] = [];

  // 1. Database
  try {
    const { sql } = await import('@/lib/db');
    const start = Date.now();
    await sql`SELECT 1`;
    checks.push({ name: 'Database', status: 'pass', detail: `Connected (${Date.now() - start}ms)` });
  } catch {
    checks.push({ name: 'Database', status: 'fail', detail: 'Cannot connect — check DATABASE_URL' });
  }

  // 2. Clerk Auth
  const clerkPub = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '';
  const clerkSec = process.env.CLERK_SECRET_KEY ?? '';
  const clerkWebhook = process.env.CLERK_WEBHOOK_SECRET ?? '';
  const localMode = process.env.MEOK_LOCAL_MODE === 'true';

  if (localMode) {
    checks.push({ name: 'Clerk Auth', status: 'warn', detail: 'MEOK_LOCAL_MODE=true — auth bypassed' });
  } else if (clerkPub.startsWith('pk_') && clerkSec.startsWith('sk_')) {
    checks.push({ name: 'Clerk Auth', status: 'pass', detail: 'Keys configured' });
  } else {
    checks.push({ name: 'Clerk Auth', status: 'fail', detail: 'Missing CLERK keys' });
  }

  checks.push({
    name: 'Clerk Webhook Secret',
    status: clerkWebhook.length > 10 ? 'pass' : 'fail',
    detail: clerkWebhook.length > 10 ? 'Configured' : 'Missing — user.created events will fail',
  });

  // 3. Stripe
  const stripeKey = process.env.STRIPE_SECRET_KEY ?? '';
  const stripeWebhook = process.env.STRIPE_WEBHOOK_SECRET ?? '';
  const stripePriceSov = process.env.STRIPE_PRICE_SOVEREIGN_MONTHLY ?? '';

  checks.push({
    name: 'Stripe Secret Key',
    status: stripeKey.startsWith('sk_') ? 'pass' : 'fail',
    detail: stripeKey.startsWith('sk_live') ? 'Live key' : stripeKey.startsWith('sk_test') ? 'Test key (switch to live before launch)' : 'Missing',
  });

  checks.push({
    name: 'Stripe Webhook Secret',
    status: stripeWebhook.startsWith('whsec_') ? 'pass' : 'fail',
    detail: stripeWebhook.startsWith('whsec_') ? 'Configured' : 'Missing — payments wont process',
  });

  checks.push({
    name: 'Stripe Price IDs',
    status: stripePriceSov.startsWith('price_') && !stripePriceSov.includes('xxx') ? 'pass' : 'fail',
    detail: stripePriceSov.startsWith('price_') && !stripePriceSov.includes('xxx') ? 'Configured' : 'Placeholder or missing — checkout will 500',
  });

  // 4. AI Providers
  const anthropic = !!process.env.ANTHROPIC_API_KEY;
  const openai = !!process.env.OPENAI_API_KEY;
  checks.push({
    name: 'Anthropic API Key',
    status: anthropic ? 'pass' : 'warn',
    detail: anthropic ? 'Configured' : 'Missing — Claude models unavailable',
  });
  checks.push({
    name: 'OpenAI API Key',
    status: openai ? 'pass' : 'warn',
    detail: openai ? 'Configured' : 'Missing — GPT models unavailable',
  });

  // 5. SOV3
  try {
    const sov3Url = process.env.SOV3_API_URL || 'http://localhost:3100';
    const res = await fetch(`${sov3Url}/health`, { signal: AbortSignal.timeout(3000) });
    checks.push({
      name: 'Sovereign Temple (SOV3)',
      status: res.ok ? 'pass' : 'warn',
      detail: res.ok ? `Healthy at ${sov3Url}` : `HTTP ${res.status}`,
    });
  } catch {
    checks.push({ name: 'Sovereign Temple (SOV3)', status: 'warn', detail: 'Unreachable — memory/council degraded' });
  }

  // 6. Ollama
  try {
    const ollamaUrl = (process.env.OLLAMA_ENDPOINT || 'http://localhost:11434').replace(/\/v1\/?$/, '');
    const res = await fetch(`${ollamaUrl}/api/tags`, { signal: AbortSignal.timeout(2000) });
    if (res.ok) {
      const data = await res.json() as { models?: Array<{ name: string }> };
      const count = data.models?.length ?? 0;
      checks.push({ name: 'Ollama', status: count > 0 ? 'pass' : 'warn', detail: `${count} models loaded` });
    } else {
      checks.push({ name: 'Ollama', status: 'warn', detail: 'Reachable but no models' });
    }
  } catch {
    checks.push({ name: 'Ollama', status: 'warn', detail: 'Unreachable — local models unavailable' });
  }

  // Summary
  const fails = checks.filter(c => c.status === 'fail').length;
  const warns = checks.filter(c => c.status === 'warn').length;
  const passes = checks.filter(c => c.status === 'pass').length;

  const ready = fails === 0;

  return NextResponse.json({
    ready,
    summary: ready
      ? `LAUNCH READY — ${passes} pass, ${warns} warnings`
      : `NOT READY — ${fails} failures, ${warns} warnings`,
    checks,
    timestamp: new Date().toISOString(),
  }, {
    status: ready ? 200 : 503,
    headers: { 'Cache-Control': 'no-store' },
  });
}
