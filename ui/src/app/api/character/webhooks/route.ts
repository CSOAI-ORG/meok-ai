/**
 * MEOK AI LABS — Character Webhook System
 * 
 * Webhooks for character events
 * 
 * POST /api/character/webhooks - Register webhook
 * GET /api/character/webhooks - List webhooks
 * DELETE /api/character/webhooks - Remove webhook
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface Webhook {
  id: string;
  characterId: string;
  userId: string;
  url: string;
  events: string[];
  secret?: string;
  enabled: boolean;
  createdAt: string;
  lastTriggered?: string;
}

const VALID_EVENTS = [
  'message_sent',
  'message_received',
  'mood_changed',
  'evolution_stage',
  'memory_created',
  'badge_earned',
  'daily_checkin',
  'inactive_days',
];

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const userId = searchParams.get('userId') || 'default';
  
  if (!characterId) {
    return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
  }
  
  try {
    const key = `meok:webhooks:${characterId}:${userId}`;
    const webhooks = (await kv.get<Webhook[]>(key)) || [];
    
    return NextResponse.json({
      characterId,
      webhooks: webhooks.filter(w => w.enabled),
    });
  } catch (error) {
    console.error('[character/webhooks] error:', error);
    return NextResponse.json({ error: 'Failed to fetch webhooks' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterId, userId = 'default', url, events, secret, action } = body;
    
    if (!characterId || !url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    if (action === 'test') {
      try {
        await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'test',
            characterId,
            timestamp: new Date().toISOString(),
          }),
        });
        return NextResponse.json({ success: true, message: 'Test webhook sent' });
      } catch {
        return NextResponse.json({ error: 'Webhook URL not reachable' }, { status: 400 });
      }
    }
    
    const invalidEvents = (events || []).filter((e: string) => !VALID_EVENTS.includes(e));
    if (invalidEvents.length > 0) {
      return NextResponse.json({ error: `Invalid events: ${invalidEvents.join(', ')}` }, { status: 400 });
    }
    
    const key = `meok:webhooks:${characterId}:${userId}`;
    const webhooks = (await kv.get<Webhook[]>(key)) || [];
    
    const webhook: Webhook = {
      id: `wh_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      characterId,
      userId,
      url,
      events: events || VALID_EVENTS,
      secret,
      enabled: true,
      createdAt: new Date().toISOString(),
    };
    
    webhooks.push(webhook);
    await kv.set(key, webhooks);
    
    return NextResponse.json({
      success: true,
      webhookId: webhook.id,
    });
  } catch (error) {
    console.error('[character/webhooks] POST error:', error);
    return NextResponse.json({ error: 'Failed to register webhook' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const characterId = searchParams.get('characterId');
    const userId = searchParams.get('userId') || 'default';
    const webhookId = searchParams.get('webhookId');
    
    if (!characterId || !webhookId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const key = `meok:webhooks:${characterId}:${userId}`;
    const webhooks = (await kv.get<Webhook[]>(key)) || [];
    const filtered = webhooks.filter(w => w.id !== webhookId);
    
    await kv.set(key, filtered);
    
    return NextResponse.json({ success: true, message: 'Webhook removed' });
  } catch (error) {
    console.error('[character/webhooks] DELETE error:', error);
    return NextResponse.json({ error: 'Failed to remove webhook' }, { status: 500 });
  }
}

async function triggerWebhook(characterId: string, userId: string, event: string, data: Record<string, unknown>): Promise<void> {
  const key = `meok:webhooks:${characterId}:${userId}`;
  const webhooks = (await kv.get<Webhook[]>(key)) || [];
  
  for (const webhook of webhooks) {
    if (!webhook.enabled || !webhook.events.includes(event)) continue;
    
    try {
      await fetch(webhook.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(webhook.secret ? { 'X-MEOK-Secret': webhook.secret } : {}),
        },
        body: JSON.stringify({
          event,
          characterId,
          userId,
          data,
          timestamp: new Date().toISOString(),
        }),
      });
      
      webhook.lastTriggered = new Date().toISOString();
    } catch (e) {
      console.error(`[webhook] Failed to trigger ${webhook.url}:`, e);
    }
  }
  
  await kv.set(key, webhooks);
}