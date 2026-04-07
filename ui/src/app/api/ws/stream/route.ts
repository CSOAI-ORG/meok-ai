/**
 * MEOK AI LABS — WebSocket Server for Real-time Events
 * 
 * Provides live streaming for:
 * - Audit events
 * - Compliance status changes
 * - Workflow execution updates
 * - Agent task updates
 * - System health alerts
 */

import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface WebSocketMessage {
  type: 'audit' | 'compliance' | 'workflow' | 'agent' | 'system' | 'heartbeat';
  event: string;
  data: Record<string, unknown>;
  timestamp: string;
}

interface SubscribedClient {
  id: string;
  subscriptions: string[];
  lastPing: number;
}

class EventBroadcaster {
  private clients: Map<string, SubscribedClient> = new Map();
  private eventQueue: WebSocketMessage[] = [];
  private maxQueueSize = 1000;

  constructor() {
    this.startHeartbeat();
    this.loadEventQueue();
  }

  private async loadEventQueue() {
    try {
      const queue = await kv.get<WebSocketMessage[]>('meok:ws:event_queue');
      if (queue) {
        this.eventQueue = queue;
      }
    } catch {}
  }

  private async saveEventQueue() {
    try {
      await kv.set('meok:ws:event_queue', this.eventQueue.slice(-this.maxQueueSize));
    } catch {}
  }

  private startHeartbeat() {
    setInterval(() => {
      const now = Date.now();
      for (const [id, client] of this.clients) {
        if (now - client.lastPing > 60000) {
          this.clients.delete(id);
        }
      }
      
      this.broadcast({
        type: 'heartbeat',
        event: 'ping',
        data: { timestamp: now },
        timestamp: new Date().toISOString(),
      });
    }, 30000);
  }

  subscribe(clientId: string, subscriptions: string[]) {
    this.clients.set(clientId, {
      id: clientId,
      subscriptions,
      lastPing: Date.now(),
    });
  }

  unsubscribe(clientId: string) {
    this.clients.delete(clientId);
  }

  ping(clientId: string) {
    const client = this.clients.get(clientId);
    if (client) {
      client.lastPing = Date.now();
    }
  }

  broadcast(message: WebSocketMessage) {
    this.eventQueue.push(message);
    if (this.eventQueue.length > this.maxQueueSize) {
      this.eventQueue = this.eventQueue.slice(-this.maxQueueSize);
    }
    this.saveEventQueue();
  }

  sendToClient(clientId: string, message: WebSocketMessage) {
    const client = this.clients.get(clientId);
    if (!client) return false;

    for (const sub of client.subscriptions) {
      if (message.type === sub || sub === '*') {
        return true;
      }
    }
    return false;
  }

  getQueuedEvents(since?: string): WebSocketMessage[] {
    if (!since) return this.eventQueue.slice(-50);
    
    const sinceTime = new Date(since).getTime();
    return this.eventQueue.filter(m => new Date(m.timestamp).getTime() > sinceTime);
  }

  getStats() {
    return {
      connectedClients: this.clients.size,
      queuedEvents: this.eventQueue.length,
      subscriptions: this.getSubscriptionCounts(),
    };
  }

  private getSubscriptionCounts(): Record<string, number> {
    const counts: Record<string, number> = {};
    for (const client of this.clients.values()) {
      for (const sub of client.subscriptions) {
        counts[sub] = (counts[sub] || 0) + 1;
      }
    }
    return counts;
  }
}

export const eventBroadcaster = new EventBroadcaster();

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  
  try {
    switch (action) {
      case 'stats': {
        return NextResponse.json(eventBroadcaster.getStats());
      }
      
      case 'queue': {
        const since = searchParams.get('since');
        const events = eventBroadcaster.getQueuedEvents(since || undefined);
        return NextResponse.json({ events });
      }
      
      case 'health': {
        return NextResponse.json({ status: 'healthy', uptime: process.uptime() });
      }
      
      default: {
        return NextResponse.json({
          message: 'WebSocket Event Stream API',
          actions: ['stats', 'queue', 'health'],
          websocket_info: {
            endpoint: '/api/ws',
            protocols: ['audit', 'compliance', 'workflow', 'agent', 'system'],
          },
        });
      }
    }
  } catch (error) {
    return NextResponse.json({ error: 'Stream error' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { action, type, event, data, clientId } = body;
    
    switch (action) {
      case 'subscribe': {
        if (!clientId) {
          return NextResponse.json({ error: 'Missing clientId' }, { status: 400 });
        }
        const subscriptions = body.subscriptions || [type || '*'];
        eventBroadcaster.subscribe(clientId, subscriptions);
        return NextResponse.json({ success: true, clientId });
      }
      
      case 'unsubscribe': {
        if (!clientId) {
          return NextResponse.json({ error: 'Missing clientId' }, { status: 400 });
        }
        eventBroadcaster.unsubscribe(clientId);
        return NextResponse.json({ success: true });
      }
      
      case 'ping': {
        if (!clientId) {
          return NextResponse.json({ error: 'Missing clientId' }, { status: 400 });
        }
        eventBroadcaster.ping(clientId);
        return NextResponse.json({ success: true });
      }
      
      case 'broadcast': {
        if (!type || !event) {
          return NextResponse.json({ error: 'Missing type or event' }, { status: 400 });
        }
        eventBroadcaster.broadcast({
          type,
          event,
          data: data || {},
          timestamp: new Date().toISOString(),
        });
        return NextResponse.json({ success: true });
      }
      
      default: {
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
      }
    }
  } catch (error) {
    return NextResponse.json({ error: 'Stream operation failed' }, { status: 500 });
  }
}
