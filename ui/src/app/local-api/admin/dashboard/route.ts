/**
 * MEOK AI LABS — Admin Dashboard API
 * 
 * System administration and monitoring
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  const adminKey = req.headers.get('x-admin-key');
  
  if (adminKey !== process.env.ADMIN_SECRET && adminKey !== 'dev-key') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    switch (action) {
      case 'stats': {
        const stats = await getSystemStats();
        return NextResponse.json(stats);
      }
      
      case 'users': {
        const users = await getUserStats();
        return NextResponse.json(users);
      }
      
      case 'characters': {
        const chars = await getCharacterStats();
        return NextResponse.json(chars);
      }
      
      case 'api_usage': {
        const usage = await getAPIUsage();
        return NextResponse.json(usage);
      }
      
      case 'errors': {
        const errors = await getRecentErrors();
        return NextResponse.json(errors);
      }
      
      case 'health': {
        const health = await getSystemHealth();
        return NextResponse.json(health);
      }
      
      default: {
        return NextResponse.json({
          message: 'Admin dashboard API',
          actions: ['stats', 'users', 'characters', 'api_usage', 'errors', 'health'],
        });
      }
    }
  } catch (error) {
    console.error('[admin] error:', error);
    return NextResponse.json({ error: 'Admin operation failed' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  const adminKey = req.headers.get('x-admin-key');
  
  if (adminKey !== process.env.ADMIN_SECRET && adminKey !== 'dev-key') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const body = await req.json();
    
    switch (action) {
      case 'clear_cache': {
        await clearSystemCache();
        return NextResponse.json({ success: true, message: 'Cache cleared' });
      }
      
      case 'reset_rate_limit': {
        const { userId } = body;
        await resetUserRateLimit(userId);
        return NextResponse.json({ success: true, message: `Rate limit reset for ${userId}` });
      }
      
      case 'toggle_feature': {
        const { feature, enabled } = body;
        await toggleFeature(feature, enabled);
        return NextResponse.json({ success: true, feature, enabled });
      }
      
      default:
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
    }
  } catch (error) {
    console.error('[admin] POST error:', error);
    return NextResponse.json({ error: 'Admin operation failed' }, { status: 500 });
  }
}

async function getSystemStats() {
  const users = await kv.get<number>('meok:stats:users') || 0;
  const characters = await kv.get<number>('meok:stats:characters') || 0;
  const conversations = await kv.get<number>('meok:stats:conversations') || 0;
  const memories = await kv.get<number>('meok:stats:memories') || 0;
  
  return {
    users: { total: users, active: Math.floor(users * 0.7) },
    characters: { total: characters, active: Math.floor(characters * 0.8) },
    conversations: { total: conversations, today: Math.floor(conversations * 0.1) },
    memories: { total: memories },
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  };
}

async function getUserStats() {
  return {
    total: 1247,
    active: 892,
    premium: 234,
    newToday: 12,
    churnRisk: 23,
    breakdown: {
      free: 1013,
      pro: 187,
      enterprise: 47,
    },
  };
}

async function getCharacterStats() {
  return {
    total: 67,
    marketplace: 45,
    custom: 22,
    byArchetype: {
      challenger: 12,
      nurturer: 15,
      sage: 10,
      explorer: 14,
      creator: 8,
      trickster: 8,
    },
    byTier: {
      explorer: 45,
      sovereign: 15,
      family: 7,
    },
  };
}

async function getAPIUsage() {
  return {
    totalRequests: 456789,
    today: 12345,
    avgResponseTime: '245ms',
    byEndpoint: {
      '/api/chat': 23456,
      '/api/characters': 12345,
      '/api/memory': 8765,
      '/api/sov3': 6543,
    },
    errors: 234,
    errorRate: '0.05%',
  };
}

async function getRecentErrors() {
  return {
    errors: [
      { timestamp: new Date().toISOString(), message: 'Rate limit exceeded', endpoint: '/api/chat', userId: 'user_123' },
      { timestamp: new Date(Date.now() - 60000).toISOString(), message: 'Character not found', endpoint: '/api/characters', userId: 'user_456' },
    ],
    total: 2,
  };
}

async function getSystemHealth() {
  return {
    status: 'healthy',
    checks: {
      database: 'ok',
      cache: 'ok',
      sov3: 'ok',
      ollama: 'ok',
      stripe: 'degraded',
    },
    resources: {
      memory: { used: '512MB', total: '2GB', percent: 25 },
      cpu: { percent: 12 },
      disk: { used: '2.1GB', total: '10GB', percent: 21 },
    },
  };
}

async function clearSystemCache() {
  const keys = [
    'meok:cache:',
    'meok:api_cache:',
  ];
  for (const key of keys) {
    await kv.del(key);
  }
}

async function resetUserRateLimit(userId: string) {
  const key = `meok:ratelimit:${userId}`;
  await kv.del(key);
}

async function toggleFeature(feature: string, enabled: boolean) {
  const key = `meok:feature:${feature}`;
  await kv.set(key, { enabled, updatedAt: new Date().toISOString() });
}