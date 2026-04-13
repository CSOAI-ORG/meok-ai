/**
 * MEOK AI LABS — Character Scheduling System
 * 
 * Schedule character interactions and reminders
 * 
 * GET /api/character/schedule - Get scheduled items
 * POST /api/character/schedule - Create schedule
 * DELETE /api/character/schedule - Remove schedule
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface ScheduledItem {
  id: string;
  characterId: string;
  userId: string;
  type: 'checkin' | 'reminder' | 'prompt' | 'dream' | 'morning_brief' | 'meditation';
  schedule: {
    time: string;
    timezone: string;
    days?: string[];
  };
  config: {
    message?: string;
    enabled: boolean;
  };
  nextRun?: string;
  lastRun?: string;
  createdAt: string;
}

const DEFAULT_SCHEDULES: Record<string, Partial<ScheduledItem>> = {
  morning_brief: {
    type: 'morning_brief',
    schedule: { time: '07:00', timezone: 'UTC', days: ['mon', 'tue', 'wed', 'thu', 'fri'] },
    config: { enabled: true },
  },
  evening_checkin: {
    type: 'checkin',
    schedule: { time: '20:00', timezone: 'UTC', days: ['mon', 'tue', 'wed', 'thu', 'fri'] },
    config: { enabled: true },
  },
  midnight_dream: {
    type: 'dream',
    schedule: { time: '00:00', timezone: 'UTC', days: ['sat', 'sun'] },
    config: { enabled: false },
  },
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const userId = searchParams.get('userId') || 'default';
  
  if (!characterId) {
    return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
  }
  
  try {
    const key = `meok:schedule:${characterId}:${userId}`;
    const schedules = (await kv.get<ScheduledItem[]>(key)) || [];
    
    const withNextRun = schedules.map(item => ({
      ...item,
      nextRun: calculateNextRun(item.schedule),
    }));
    
    return NextResponse.json({
      characterId,
      schedules: withNextRun,
    });
  } catch (error) {
    console.error('[character/schedule] error:', error);
    return NextResponse.json({ error: 'Failed to fetch schedules' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterId, userId = 'default', type, schedule, config, action } = body;
    
    if (!characterId) {
      return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
    }
    
    const key = `meok:schedule:${characterId}:${userId}`;
    const schedules = (await kv.get<ScheduledItem[]>(key)) || [];
    
    if (action === 'enable' || action === 'disable') {
      const item = schedules.find(s => s.type === type);
      if (item) {
        item.config.enabled = action === 'enable';
        await kv.set(key, schedules);
        return NextResponse.json({ success: true, type, enabled: item.config.enabled });
      }
      return NextResponse.json({ error: 'Schedule not found' }, { status: 404 });
    }
    
    if (action === 'preset' && type && DEFAULT_SCHEDULES[type]) {
      const newItem: ScheduledItem = {
        id: `sched_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        characterId,
        userId,
        type: type as ScheduledItem['type'],
        schedule: DEFAULT_SCHEDULES[type]!.schedule!,
        config: DEFAULT_SCHEDULES[type]!.config!,
        createdAt: new Date().toISOString(),
      };
      
      schedules.push(newItem);
      await kv.set(key, schedules);
      
      return NextResponse.json({
        success: true,
        schedule: newItem,
      });
    }
    
    const newItem: ScheduledItem = {
      id: `sched_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      characterId,
      userId,
      type: type || 'reminder',
      schedule: schedule || { time: '09:00', timezone: 'UTC' },
      config: config || { enabled: true },
      createdAt: new Date().toISOString(),
    };
    
    schedules.push(newItem);
    await kv.set(key, schedules);
    
    return NextResponse.json({
      success: true,
      schedule: {
        ...newItem,
        nextRun: calculateNextRun(newItem.schedule),
      },
    });
  } catch (error) {
    console.error('[character/schedule] POST error:', error);
    return NextResponse.json({ error: 'Failed to create schedule' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const characterId = searchParams.get('characterId');
    const userId = searchParams.get('userId') || 'default';
    const scheduleId = searchParams.get('scheduleId');
    const type = searchParams.get('type');
    
    if (!characterId) {
      return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
    }
    
    const key = `meok:schedule:${characterId}:${userId}`;
    let schedules = (await kv.get<ScheduledItem[]>(key)) || [];
    
    if (scheduleId) {
      schedules = schedules.filter(s => s.id !== scheduleId);
    } else if (type) {
      schedules = schedules.filter(s => s.type !== type);
    } else {
      return NextResponse.json({ error: 'Specify scheduleId or type' }, { status: 400 });
    }
    
    await kv.set(key, schedules);
    
    return NextResponse.json({ success: true, message: 'Schedule removed' });
  } catch (error) {
    console.error('[character/schedule] DELETE error:', error);
    return NextResponse.json({ error: 'Failed to remove schedule' }, { status: 500 });
  }
}

function calculateNextRun(schedule: ScheduledItem['schedule']): string {
  const [hours, minutes] = (schedule.time || '09:00').split(':').map(Number);
  const now = new Date();
  const next = new Date(now);
  next.setHours(hours, minutes, 0, 0);
  
  if (next <= now) {
    next.setDate(next.getDate() + 1);
  }
  
  if (schedule.days && schedule.days.length > 0) {
    const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    while (!schedule.days.includes(dayNames[next.getDay()])) {
      next.setDate(next.getDate() + 1);
    }
  }
  
  return next.toISOString();
}