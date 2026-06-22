/**
 * MEOK AI LABS — Workflow Scheduler API
 * 
 * Automated workflow execution:
 * - Scheduled workflows
 * - Cron-like scheduling
 * - Event-triggered workflows
 * - Workflow history
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface ScheduledWorkflow {
  id: string;
  name: string;
  workflow: string;
  schedule: string;
  timezone: string;
  enabled: boolean;
  lastRun?: string;
  nextRun?: string;
  status: 'active' | 'paused' | 'completed' | 'error';
  history: WorkflowRun[];
}

interface WorkflowRun {
  id: string;
  scheduledId: string;
  startedAt: string;
  completedAt?: string;
  status: 'running' | 'completed' | 'failed' | 'cancelled';
  result?: Record<string, unknown>;
  error?: string;
}

interface WorkflowTrigger {
  id: string;
  name: string;
  workflow: string;
  event: string;
  conditions?: Record<string, unknown>;
  enabled: boolean;
}

const DEFAULT_SCHEDULES = [
  { name: 'Daily Security Scan', workflow: 'parallel_security_scan', schedule: '0 2 * * *', timezone: 'UTC' },
  { name: 'Weekly Compliance Audit', workflow: 'enterprise_compliance_full', schedule: '0 3 * * 0', timezone: 'UTC' },
  { name: 'Monthly HIPAA Review', workflow: 'hipaa_compliance', schedule: '0 4 1 * *', timezone: 'UTC' },
  { name: 'Daily Health Check', workflow: 'healthcare_compliance_full', schedule: '0 6 * * *', timezone: 'UTC' },
];

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  
  try {
    switch (action) {
      case 'scheduled': {
        const workflows = await getScheduledWorkflows();
        return NextResponse.json({ workflows });
      }
      
      case 'triggers': {
        const triggers = await getTriggers();
        return NextResponse.json({ triggers });
      }
      
      case 'history': {
        const limit = parseInt(searchParams.get('limit') || '50');
        const history = await getRunHistory(limit);
        return NextResponse.json({ history });
      }
      
      case 'next_runs': {
        const runs = await getNextScheduledRuns();
        return NextResponse.json({ runs });
      }
      
      case 'defaults': {
        return NextResponse.json({ schedules: DEFAULT_SCHEDULES });
      }
      
      case 'status': {
        const status = await getSchedulerStatus();
        return NextResponse.json(status);
      }
      
      default: {
        return NextResponse.json({
          message: 'Workflow Scheduler API',
          actions: ['scheduled', 'triggers', 'history', 'next_runs', 'defaults', 'status'],
        });
      }
    }
  } catch (error) {
    console.error('[scheduler] error:', error);
    return NextResponse.json({ error: 'Scheduler error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { action, schedule, trigger, workflowId } = body;
    
    switch (action) {
      case 'schedule': {
        if (!schedule?.name || !schedule?.workflow || !schedule?.schedule) {
          return NextResponse.json({ error: 'Missing schedule details' }, { status: 400 });
        }
        const scheduled = await scheduleWorkflow(schedule);
        return NextResponse.json({ success: true, scheduled });
      }
      
      case 'unschedule': {
        if (!workflowId) {
          return NextResponse.json({ error: 'Missing workflowId' }, { status: 400 });
        }
        await unscheduleWorkflow(workflowId);
        return NextResponse.json({ success: true });
      }
      
      case 'pause': {
        if (!workflowId) {
          return NextResponse.json({ error: 'Missing workflowId' }, { status: 400 });
        }
        await pauseWorkflow(workflowId);
        return NextResponse.json({ success: true });
      }
      
      case 'resume': {
        if (!workflowId) {
          return NextResponse.json({ error: 'Missing workflowId' }, { status: 400 });
        }
        await resumeWorkflow(workflowId);
        return NextResponse.json({ success: true });
      }
      
      case 'run_now': {
        if (!workflowId) {
          return NextResponse.json({ error: 'Missing workflowId' }, { status: 400 });
        }
        const run = await runWorkflowNow(workflowId);
        return NextResponse.json({ success: true, run });
      }
      
      case 'create_trigger': {
        if (!trigger?.name || !trigger?.workflow || !trigger?.event) {
          return NextResponse.json({ error: 'Missing trigger details' }, { status: 400 });
        }
        const newTrigger = await createTrigger(trigger);
        return NextResponse.json({ success: true, trigger: newTrigger });
      }
      
      case 'delete_trigger': {
        if (!body.triggerId) {
          return NextResponse.json({ error: 'Missing triggerId' }, { status: 400 });
        }
        await deleteTrigger(body.triggerId);
        return NextResponse.json({ success: true });
      }
      
      case 'import_defaults': {
        const imported = await importDefaultSchedules();
        return NextResponse.json({ success: true, imported });
      }
      
      default: {
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
      }
    }
  } catch (error) {
    console.error('[scheduler] POST error:', error);
    return NextResponse.json({ error: 'Scheduler operation failed' }, { status: 500 });
  }
}

async function getScheduledWorkflows(): Promise<ScheduledWorkflow[]> {
  const key = 'meok:scheduler:scheduled';
  return (await kv.get<ScheduledWorkflow[]>(key)) || [];
}

async function getTriggers(): Promise<WorkflowTrigger[]> {
  const key = 'meok:scheduler:triggers';
  return (await kv.get<WorkflowTrigger[]>(key)) || [];
}

async function getRunHistory(limit: number): Promise<WorkflowRun[]> {
  const key = 'meok:scheduler:history';
  const history = (await kv.get<WorkflowRun[]>(key)) || [];
  return history.slice(-limit).reverse();
}

async function getNextScheduledRuns(): Promise<Array<{id: string; name: string; nextRun: string}>> {
  const schedules = await getScheduledWorkflows();
  const now = Date.now();
  
  return schedules
    .filter(s => s.enabled && s.nextRun)
    .sort((a, b) => new Date(a.nextRun || 0).getTime() - new Date(b.nextRun || 0).getTime())
    .slice(0, 10)
    .map(s => ({
      id: s.id,
      name: s.name,
      nextRun: s.nextRun || '',
    }));
}

async function getSchedulerStatus(): Promise<Record<string, unknown>> {
  const schedules = await getScheduledWorkflows();
  const triggers = await getTriggers();
  const history = await getRunHistory(100);
  
  const today = new Date().toDateString();
  const runsToday = history.filter(r => new Date(r.startedAt).toDateString() === today).length;
  
  return {
    activeSchedules: schedules.filter(s => s.enabled).length,
    pausedSchedules: schedules.filter(s => !s.enabled).length,
    totalTriggers: triggers.filter(t => t.enabled).length,
    runsToday,
    nextScheduledRun: schedules
      .filter(s => s.enabled && s.nextRun)
      .sort((a, b) => new Date(a.nextRun || 0).getTime() - new Date(b.nextRun || 0).getTime())[0]?.nextRun,
    uptime: process.uptime(),
  };
}

async function scheduleWorkflow(data: Partial<ScheduledWorkflow>): Promise<ScheduledWorkflow> {
  const schedule: ScheduledWorkflow = {
    id: `scheduled_${Date.now()}`,
    name: data.name || 'Unnamed Schedule',
    workflow: data.workflow || '',
    schedule: data.schedule || '0 0 * * *',
    timezone: data.timezone || 'UTC',
    enabled: true,
    nextRun: calculateNextRun(data.schedule || '0 0 * * *'),
    status: 'active',
    history: [],
  };
  
  const key = 'meok:scheduler:scheduled';
  const schedules = (await kv.get<ScheduledWorkflow[]>(key)) || [];
  schedules.push(schedule);
  await kv.set(key, schedules);
  
  return schedule;
}

async function unscheduleWorkflow(id: string): Promise<void> {
  const key = 'meok:scheduler:scheduled';
  const schedules = (await kv.get<ScheduledWorkflow[]>(key)) || [];
  const filtered = schedules.filter(s => s.id !== id);
  await kv.set(key, filtered);
}

async function pauseWorkflow(id: string): Promise<void> {
  const key = 'meok:scheduler:scheduled';
  const schedules = (await kv.get<ScheduledWorkflow[]>(key)) || [];
  const index = schedules.findIndex(s => s.id === id);
  if (index !== -1) {
    schedules[index].enabled = false;
    schedules[index].status = 'paused';
    await kv.set(key, schedules);
  }
}

async function resumeWorkflow(id: string): Promise<void> {
  const key = 'meok:scheduler:scheduled';
  const schedules = (await kv.get<ScheduledWorkflow[]>(key)) || [];
  const index = schedules.findIndex(s => s.id === id);
  if (index !== -1) {
    schedules[index].enabled = true;
    schedules[index].status = 'active';
    schedules[index].nextRun = calculateNextRun(schedules[index].schedule);
    await kv.set(key, schedules);
  }
}

async function runWorkflowNow(workflowId: string): Promise<WorkflowRun> {
  const schedules = await getScheduledWorkflows();
  const schedule = schedules.find(s => s.id === workflowId);
  
  if (!schedule) {
    throw new Error('Schedule not found');
  }
  
  const run: WorkflowRun = {
    id: `run_${Date.now()}`,
    scheduledId: workflowId,
    startedAt: new Date().toISOString(),
    status: 'running',
  };
  
  // Simulate execution
  await new Promise(resolve => setTimeout(resolve, 100));
  
  run.completedAt = new Date().toISOString();
  run.status = 'completed';
  run.result = { workflow: schedule.workflow, executed: true };
  
  // Update schedule
  const key = 'meok:scheduler:scheduled';
  const index = schedules.findIndex(s => s.id === workflowId);
  if (index !== -1) {
    schedules[index].lastRun = run.startedAt;
    schedules[index].nextRun = calculateNextRun(schedule.schedule);
    schedules[index].history = [...(schedules[index].history || []), run].slice(-50);
    await kv.set(key, schedules);
  }
  
  // Add to history
  const historyKey = 'meok:scheduler:history';
  const history = (await kv.get<WorkflowRun[]>(historyKey)) || [];
  history.push(run);
  await kv.set(historyKey, history.slice(-1000));
  
  return run;
}

async function createTrigger(data: Partial<WorkflowTrigger>): Promise<WorkflowTrigger> {
  const trigger: WorkflowTrigger = {
    id: `trigger_${Date.now()}`,
    name: data.name || 'Unnamed Trigger',
    workflow: data.workflow || '',
    event: data.event || '',
    conditions: data.conditions,
    enabled: true,
  };
  
  const key = 'meok:scheduler:triggers';
  const triggers = (await kv.get<WorkflowTrigger[]>(key)) || [];
  triggers.push(trigger);
  await kv.set(key, triggers);
  
  return trigger;
}

async function deleteTrigger(id: string): Promise<void> {
  const key = 'meok:scheduler:triggers';
  const triggers = (await kv.get<WorkflowTrigger[]>(key)) || [];
  const filtered = triggers.filter(t => t.id !== id);
  await kv.set(key, filtered);
}

async function importDefaultSchedules(): Promise<number> {
  let imported = 0;
  
  for (const defaultSchedule of DEFAULT_SCHEDULES) {
    await scheduleWorkflow(defaultSchedule);
    imported++;
  }
  
  return imported;
}

function calculateNextRun(cron: string): string {
  const parts = cron.split(' ');
  if (parts.length < 5) return new Date().toISOString();
  
  const now = new Date();
  const next = new Date(now);
  
  // Simple calculation - in production use a proper cron parser
  next.setMinutes(0);
  next.setSeconds(0);
  next.setHours(next.getHours() + 1);
  
  return next.toISOString();
}
