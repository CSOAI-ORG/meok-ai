/**
 * MEOK AI LABS — Structured Logger
 */

export interface LogEntry {
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'debug';
  event: string;
  userId?: string;
  requestId?: string;
  model?: string;
  taskType?: string;
  latencyMs?: number;
  tokensUsed?: number;
  costEstimate?: number;
  metadata?: Record<string, unknown>;
}

export function log(entry: Omit<LogEntry, 'timestamp'>): void {
  const full: LogEntry = { ...entry, timestamp: new Date().toISOString() };
  // Structured JSON output for log aggregation
  if (entry.level === 'error') {
    console.error(JSON.stringify(full));
  } else if (entry.level === 'warn') {
    console.warn(JSON.stringify(full));
  } else {
    console.log(JSON.stringify(full));
  }
}

// Convenience helpers
export const logInfo = (event: string, meta?: Partial<LogEntry>) => log({ level: 'info', event, ...meta });
export const logWarn = (event: string, meta?: Partial<LogEntry>) => log({ level: 'warn', event, ...meta });
export const logError = (event: string, meta?: Partial<LogEntry>) => log({ level: 'error', event, ...meta });
