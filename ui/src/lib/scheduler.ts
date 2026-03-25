/**
 * MEOK AI LABS — Background Task Scheduler
 *
 * Defines scheduled tasks for Vercel Cron. Each task maps to an API endpoint.
 * Configure in vercel.json: { "crons": [...] }
 */

export interface ScheduledTask {
  name: string;
  description: string;
  endpoint: string;
  schedule: string; // cron expression
  enabled: boolean;
}

/** All scheduled tasks for the MEOK AI platform */
export const SCHEDULED_TASKS: ScheduledTask[] = [
  {
    name: 'registry-update',
    description: 'Fetch latest AI models from OpenRouter, HuggingFace, Ollama',
    endpoint: '/api/cron/update-registry',
    schedule: '0 6 * * *', // Daily at 6 AM UTC
    enabled: true,
  },
  {
    name: 'memory-consolidation',
    description: 'Consolidate short-term memories, run dream cycles, update care signals',
    endpoint: '/api/cron/consolidate',
    schedule: '0 3 * * *', // Daily at 3 AM UTC
    enabled: true,
  },
  {
    name: 'care-signal-delivery',
    description: 'Check and deliver pending care signals to users',
    endpoint: '/api/cron/care-signals',
    schedule: '0 */4 * * *', // Every 4 hours
    enabled: true,
  },
  {
    name: 'streak-reset',
    description: 'Reset streaks for users who missed a day',
    endpoint: '/api/cron/streak-reset',
    schedule: '5 0 * * *', // Daily at 00:05 UTC
    enabled: true,
  },
  {
    name: 'weekly-care-summary',
    description: 'Generate weekly care summaries for family plan members',
    endpoint: '/api/cron/weekly-summary',
    schedule: '0 10 * * 1', // Mondays at 10 AM UTC
    enabled: true,
  },
];

/** Generate vercel.json crons config from SCHEDULED_TASKS */
export function generateVercelCronConfig(): { path: string; schedule: string }[] {
  return SCHEDULED_TASKS
    .filter(t => t.enabled)
    .map(t => ({ path: t.endpoint, schedule: t.schedule }));
}

/** Get task by name */
export function getTask(name: string): ScheduledTask | undefined {
  return SCHEDULED_TASKS.find(t => t.name === name);
}

/** Format next run time for display */
export function formatSchedule(cron: string): string {
  const parts = cron.split(' ');
  if (parts[1] === '*' && parts[2] === '*') return `Every ${parts[0] === '0' ? '' : parts[0] + ' minutes past '}hour`;
  if (parts[2] === '*' && parts[4] === '*') return `Daily at ${parts[1].padStart(2, '0')}:${parts[0].padStart(2, '0')} UTC`;
  if (parts[4] === '1') return `Weekly (Mondays) at ${parts[1].padStart(2, '0')}:${parts[0].padStart(2, '0')} UTC`;
  return cron;
}
