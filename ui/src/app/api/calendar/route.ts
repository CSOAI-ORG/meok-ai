/**
 * MEOK AI LABS — Compliance Calendar & Reminders API
 * 
 * - Scheduled compliance checks
 * - Deadline reminders
 * - Recurring audits
 * - Calendar events
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  type: 'audit' | 'reminder' | 'deadline' | 'review' | 'expiry';
  framework?: string;
  scheduledAt: string;
  repeat?: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  reminderBefore?: number;
  status: 'scheduled' | 'completed' | 'cancelled' | 'overdue';
  createdAt: string;
  metadata?: Record<string, unknown>;
}

interface Reminder {
  id: string;
  eventId: string;
  type: 'email' | 'push' | 'webhook';
  scheduledFor: string;
  sent: boolean;
}

const DEFAULT_FRAMEWORK_SCHEDULES = [
  { framework: 'hipaa', name: 'HIPAA Annual Audit', interval: 'yearly', months: 0 },
  { framework: 'gdpr', name: 'GDPR Review', interval: 'quarterly', months: 3 },
  { framework: 'soc2', name: 'SOC 2 Audit', interval: 'yearly', months: 12 },
  { framework: 'iso27001', name: 'ISO 27001 Assessment', interval: 'yearly', months: 12 },
  { framework: 'pci_dss', name: 'PCI DSS Assessment', interval: 'yearly', months: 12 },
  { framework: 'eu_ai_act', name: 'EU AI Act Conformity', interval: 'quarterly', months: 3 },
];

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  
  try {
    switch (action) {
      case 'events': {
        const events = await getEvents(from, to);
        return NextResponse.json({ events });
      }
      
      case 'upcoming': {
        const limit = parseInt(searchParams.get('limit') || '10');
        const events = await getUpcomingEvents(limit);
        return NextResponse.json({ events });
      }
      
      case 'overdue': {
        const events = await getOverdueEvents();
        return NextResponse.json({ events });
      }
      
      case 'reminders': {
        const reminders = await getPendingReminders();
        return NextResponse.json({ reminders });
      }
      
      case 'frameworks': {
        return NextResponse.json({ schedules: DEFAULT_FRAMEWORK_SCHEDULES });
      }
      
      case 'calendar': {
        const calendar = await getCalendarView(from, to);
        return NextResponse.json(calendar);
      }
      
      default: {
        return NextResponse.json({
          message: 'Compliance Calendar API',
          actions: ['events', 'upcoming', 'overdue', 'reminders', 'frameworks', 'calendar'],
        });
      }
    }
  } catch (error) {
    console.error('[calendar] error:', error);
    return NextResponse.json({ error: 'Calendar error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { action, event, reminder } = body;
    
    switch (action) {
      case 'create_event': {
        if (!event?.title || !event?.scheduledAt) {
          return NextResponse.json({ error: 'Missing title or scheduledAt' }, { status: 400 });
        }
        const newEvent = await createEvent(event);
        return NextResponse.json({ success: true, event: newEvent });
      }
      
      case 'update_event': {
        if (!event?.id) {
          return NextResponse.json({ error: 'Missing event id' }, { status: 400 });
        }
        const updated = await updateEvent(event.id, event);
        return NextResponse.json({ success: true, event: updated });
      }
      
      case 'delete_event': {
        if (!body.eventId) {
          return NextResponse.json({ error: 'Missing eventId' }, { status: 400 });
        }
        await deleteEvent(body.eventId);
        return NextResponse.json({ success: true });
      }
      
      case 'complete_event': {
        if (!body.eventId) {
          return NextResponse.json({ error: 'Missing eventId' }, { status: 400 });
        }
        const completed = await completeEvent(body.eventId);
        return NextResponse.json({ success: true, event: completed });
      }
      
      case 'schedule_audit': {
        if (!body.framework || !body.scheduledAt) {
          return NextResponse.json({ error: 'Missing framework or scheduledAt' }, { status: 400 });
        }
        const auditEvent = await scheduleAudit(body.framework, body.scheduledAt, body.metadata);
        return NextResponse.json({ success: true, event: auditEvent });
      }
      
      case 'set_reminder': {
        if (!reminder?.eventId || !reminder?.scheduledFor) {
          return NextResponse.json({ error: 'Missing reminder details' }, { status: 400 });
        }
        const newReminder = await setReminder(reminder);
        return NextResponse.json({ success: true, reminder: newReminder });
      }
      
      case 'generate_schedule': {
        const events = await generateScheduledEvents(body.year);
        return NextResponse.json({ success: true, events });
      }
      
      default: {
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
      }
    }
  } catch (error) {
    console.error('[calendar] POST error:', error);
    return NextResponse.json({ error: 'Calendar operation failed' }, { status: 500 });
  }
}

async function getEvents(from?: string, to?: string): Promise<CalendarEvent[]> {
  const key = 'meok:calendar:events';
  let events = (await kv.get<CalendarEvent[]>(key)) || [];
  
  if (from) {
    const fromTime = new Date(from).getTime();
    events = events.filter(e => new Date(e.scheduledAt).getTime() >= fromTime);
  }
  if (to) {
    const toTime = new Date(to).getTime();
    events = events.filter(e => new Date(e.scheduledAt).getTime() <= toTime);
  }
  
  return events.sort((a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime());
}

async function getUpcomingEvents(limit: number): Promise<CalendarEvent[]> {
  const now = Date.now();
  const events = await getEvents();
  return events
    .filter(e => new Date(e.scheduledAt).getTime() > now && e.status === 'scheduled')
    .slice(0, limit);
}

async function getOverdueEvents(): Promise<CalendarEvent[]> {
  const now = Date.now();
  const events = await getEvents();
  return events.filter(e => new Date(e.scheduledAt).getTime() < now && e.status === 'scheduled');
}

async function getPendingReminders(): Promise<Reminder[]> {
  const key = 'meok:calendar:reminders';
  const reminders = (await kv.get<Reminder[]>(key)) || [];
  const now = Date.now();
  
  return reminders
    .filter(r => !r.sent && new Date(r.scheduledFor).getTime() <= now)
    .slice(0, 50);
}

async function getCalendarView(from?: string, to?: string): Promise<Record<string, CalendarEvent[]>> {
  const events = await getEvents(from, to);
  const calendar: Record<string, CalendarEvent[]> = {};
  
  for (const event of events) {
    const date = event.scheduledAt.split('T')[0];
    if (!calendar[date]) calendar[date] = [];
    calendar[date].push(event);
  }
  
  return calendar;
}

async function createEvent(data: Partial<CalendarEvent>): Promise<CalendarEvent> {
  const event: CalendarEvent = {
    id: `event_${Date.now()}`,
    title: data.title || 'Untitled Event',
    description: data.description,
    type: data.type || 'reminder',
    framework: data.framework,
    scheduledAt: data.scheduledAt || new Date().toISOString(),
    repeat: data.repeat,
    reminderBefore: data.reminderBefore,
    status: 'scheduled',
    createdAt: new Date().toISOString(),
    metadata: data.metadata,
  };
  
  const key = 'meok:calendar:events';
  const events = (await kv.get<CalendarEvent[]>(key)) || [];
  events.push(event);
  await kv.set(key, events);
  
  return event;
}

async function updateEvent(id: string, updates: Partial<CalendarEvent>): Promise<CalendarEvent | null> {
  const key = 'meok:calendar:events';
  const events = (await kv.get<CalendarEvent[]>(key)) || [];
  const index = events.findIndex(e => e.id === id);
  
  if (index === -1) return null;
  
  events[index] = { ...events[index], ...updates };
  await kv.set(key, events);
  
  return events[index];
}

async function deleteEvent(id: string): Promise<void> {
  const key = 'meok:calendar:events';
  const events = (await kv.get<CalendarEvent[]>(key)) || [];
  const filtered = events.filter(e => e.id !== id);
  await kv.set(key, filtered);
}

async function completeEvent(id: string): Promise<CalendarEvent | null> {
  const event = await updateEvent(id, { status: 'completed' });
  
  if (event?.repeat) {
    const nextDate = calculateNextDate(event.scheduledAt, event.repeat);
    await createEvent({
      ...event,
      id: undefined,
      scheduledAt: nextDate,
      status: 'scheduled',
    });
  }
  
  return event;
}

async function scheduleAudit(framework: string, scheduledAt: string, metadata?: Record<string, unknown>): Promise<CalendarEvent> {
  const fw = COMPLIANCE_FRAMEWORKS.find(f => f.id === framework);
  return createEvent({
    title: `${fw?.name || framework} Compliance Audit`,
    type: 'audit',
    framework,
    scheduledAt,
    reminderBefore: 7 * 24 * 60 * 60 * 1000,
    metadata,
  });
}

async function setReminder(data: Partial<Reminder>): Promise<Reminder> {
  const reminder: Reminder = {
    id: `reminder_${Date.now()}`,
    eventId: data.eventId || '',
    type: data.type || 'push',
    scheduledFor: data.scheduledFor || new Date().toISOString(),
    sent: false,
  };
  
  const key = 'meok:calendar:reminders';
  const reminders = (await kv.get<Reminder[]>(key)) || [];
  reminders.push(reminder);
  await kv.set(key, reminders);
  
  return reminder;
}

async function generateScheduledEvents(year?: number): Promise<CalendarEvent[]> {
  const currentYear = year || new Date().getFullYear();
  const events: CalendarEvent[] = [];
  
  for (const schedule of DEFAULT_FRAMEWORK_SCHEDULES) {
    let date = new Date(currentYear, 0, 1);
    
    for (let i = 0; i < 4; i++) {
      const event = await createEvent({
        title: schedule.name,
        type: 'audit',
        framework: schedule.framework,
        scheduledAt: date.toISOString(),
        repeat: 'yearly',
        reminderBefore: 7 * 24 * 60 * 60 * 1000,
      });
      events.push(event);
      
      date = new Date(date);
      date.setMonth(date.getMonth() + schedule.months || 12);
    }
  }
  
  return events;
}

function calculateNextDate(from: string, repeat: string): string {
  const date = new Date(from);
  
  switch (repeat) {
    case 'daily':
      date.setDate(date.getDate() + 1);
      break;
    case 'weekly':
      date.setDate(date.getDate() + 7);
      break;
    case 'monthly':
      date.setMonth(date.getMonth() + 1);
      break;
    case 'quarterly':
      date.setMonth(date.getMonth() + 3);
      break;
    case 'yearly':
      date.setFullYear(date.getFullYear() + 1);
      break;
  }
  
  return date.toISOString();
}

const COMPLIANCE_FRAMEWORKS = [
  { id: 'hipaa', name: 'HIPAA' },
  { id: 'gdpr', name: 'GDPR' },
  { id: 'soc2', name: 'SOC 2' },
  { id: 'iso27001', name: 'ISO 27001' },
  { id: 'pci_dss', name: 'PCI DSS' },
  { id: 'eu_ai_act', name: 'EU AI Act' },
];
