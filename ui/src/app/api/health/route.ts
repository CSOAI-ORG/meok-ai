/**
 * MEOK AI LABS — Enhanced Health Check Endpoint
 *
 * Returns structured status of all subsystems:
 * database, Ollama, configured providers, and uptime.
 */

import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';

const startTime = Date.now();

interface HealthResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  service: string;
  version: string;
  timestamp: string;
  uptime: number;
  db: { connected: boolean; latencyMs?: number; error?: string };
  ollama: { reachable: boolean; models?: string[]; error?: string };
  providers: {
    anthropic: boolean;
    openai: boolean;
    deepseek: boolean;
    groq: boolean;
    cerebras: boolean;
    nvidia: boolean;
    openrouter: boolean;
  };
}

async function checkDatabase(): Promise<HealthResponse['db']> {
  if (!sql) {
    return { connected: false, error: 'DATABASE_URL not configured' };
  }
  try {
    const start = Date.now();
    await sql`SELECT 1 AS health_check`;
    return { connected: true, latencyMs: Date.now() - start };
  } catch (err) {
    return {
      connected: false,
      error: err instanceof Error ? err.message : 'Unknown DB error',
    };
  }
}

async function checkOllama(): Promise<HealthResponse['ollama']> {
  const endpoint = process.env.OLLAMA_ENDPOINT || 'http://localhost:11434';
  // Strip /v1 suffix if present — Ollama native API doesn't use it
  const baseUrl = endpoint.replace(/\/v1\/?$/, '');
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(`${baseUrl}/api/tags`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      return { reachable: false, error: `HTTP ${res.status}` };
    }

    const data = await res.json() as { models?: Array<{ name: string }> };
    const models = data.models?.map((m) => m.name) ?? [];
    return { reachable: true, models };
  } catch (err) {
    return {
      reachable: false,
      error: err instanceof Error ? err.message : 'Ollama unreachable',
    };
  }
}

function checkProviders(): HealthResponse['providers'] {
  return {
    anthropic: !!process.env.ANTHROPIC_API_KEY,
    openai: !!process.env.OPENAI_API_KEY,
    deepseek: !!process.env.DEEPSEEK_API_KEY,
    groq: !!process.env.GROQ_API_KEY,
    cerebras: !!process.env.CEREBRAS_API_KEY,
    nvidia: !!process.env.NVIDIA_API_KEY,
    openrouter: !!process.env.OPENROUTER_API_KEY,
  };
}

export async function GET() {
  const [db, ollama] = await Promise.all([checkDatabase(), checkOllama()]);
  const providers = checkProviders();

  // SOV3 check
  let sov3: { connected: boolean; consciousness?: string; models?: number; error?: string } = { connected: false };
  try {
    const sov3Url = process.env.SOV3_API_URL || 'http://localhost:3100';
    const res = await fetch(`${sov3Url}/health`, { signal: AbortSignal.timeout(2000) });
    if (res.ok) {
      const data = await res.json() as { status?: string; components?: { consciousness?: { consciousness_level?: number }; neural_models?: Record<string, unknown> } };
      sov3 = {
        connected: data?.status === 'healthy',
        consciousness: `${((data?.components?.consciousness?.consciousness_level ?? 0) * 100).toFixed(0)}%`,
        models: Object.keys(data?.components?.neural_models ?? {}).length,
      };
    }
  } catch (err) {
    sov3 = { connected: false, error: err instanceof Error ? err.message : 'unreachable' };
  }

  // Auth + billing
  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '';
  const localMode = process.env.MEOK_LOCAL_MODE === 'true';
  const clerk = localMode ? 'local_mode' : (clerkKey.startsWith('pk_') ? 'configured' : 'missing');
  const stripe = (process.env.STRIPE_SECRET_KEY ?? '').startsWith('sk_') ? 'configured' : 'missing';

  const allHealthy = db.connected && ollama.reachable;
  const allDown = !db.connected && !ollama.reachable;

  const response = {
    status: allHealthy ? 'healthy' : allDown ? 'unhealthy' : 'degraded',
    service: 'meok-ui',
    version: process.env.npm_package_version ?? '3.0.0',
    timestamp: new Date().toISOString(),
    uptime: Math.floor((Date.now() - startTime) / 1000),
    db,
    ollama,
    sov3,
    clerk,
    stripe,
    providers,
  };

  return NextResponse.json(response, {
    status: response.status === 'healthy' ? 200 : 503,
    headers: { 'Cache-Control': 'no-store' },
  });
}
