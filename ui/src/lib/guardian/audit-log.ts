/**
 * MEOK AI LABS — Guardian API Audit Logging
 * Structured logging for all guardian actions
 */

import { NextRequest } from 'next/server';

// ── Audit Log Types ───────────────────────────────────────────────────────

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  action: string;
  endpoint: string;
  userId: string | null;
  clientIP: string;
  request: {
    method: string;
    path: string;
    userAgent: string | null;
  };
  response: {
    status: number;
    duration: number; // milliseconds
  };
  data: {
    severity?: string;
    riskLevel?: string;
    flagged?: boolean;
    confidence?: number;
    signalCount?: number;
  };
  error?: string;
}

// ── Logging Configuration ─────────────────────────────────────────────────

const LOG_RETENTION_DAYS = 30;
const MAX_LOG_SIZE = 1000; // Keep most recent N entries in memory

// In-memory log for development (use database in production)
const auditLogs: AuditLogEntry[] = [];

// ── Logging Functions ─────────────────────────────────────────────────────

/**
 * Extract client IP from request
 */
function getClientIP(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : (req as any).ip || '0.0.0.0';
  return ip;
}

/**
 * Extract user ID from request (from Authorization header or x-user-id)
 */
function getUserID(req: NextRequest): string | null {
  const authHeader = req.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    // In real implementation, decode JWT
    return 'auth-user';
  }
  return req.headers.get('x-user-id');
}

/**
 * Log a guardian action
 */
export function logGuardianAction(
  req: NextRequest,
  endpoint: string,
  response: {
    status: number;
    severity?: string;
    riskLevel?: string;
    flagged?: boolean;
    confidence?: number;
    signals?: string[];
    error?: string;
  },
  durationMs: number
): AuditLogEntry {
  const entry: AuditLogEntry = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    action: `${req.method} ${endpoint}`,
    endpoint,
    userId: getUserID(req),
    clientIP: getClientIP(req),
    request: {
      method: req.method,
      path: new URL(req.url).pathname,
      userAgent: req.headers.get('user-agent'),
    },
    response: {
      status: response.status,
      duration: durationMs,
    },
    data: {
      severity: response.severity,
      riskLevel: response.riskLevel,
      flagged: response.flagged,
      confidence: response.confidence,
      signalCount: response.signals?.length,
    },
    error: response.error,
  };

  // Store in memory (rotate if too large)
  auditLogs.push(entry);
  if (auditLogs.length > MAX_LOG_SIZE) {
    auditLogs.shift();
  }

  // Log to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.log('[guardian-audit]', JSON.stringify(entry, null, 2));
  }

  return entry;
}

/**
 * Get audit logs for a specific user or within a date range
 */
export function getAuditLogs(filter?: {
  userId?: string;
  endpoint?: string;
  startDate?: Date;
  endDate?: Date;
  limit?: number;
}): AuditLogEntry[] {
  let results = [...auditLogs];

  if (filter?.userId) {
    results = results.filter(log => log.userId === filter.userId);
  }

  if (filter?.endpoint) {
    results = results.filter(log => log.endpoint === filter.endpoint);
  }

  if (filter?.startDate) {
    const startTime = filter.startDate.getTime();
    results = results.filter(log => new Date(log.timestamp).getTime() >= startTime);
  }

  if (filter?.endDate) {
    const endTime = filter.endDate.getTime();
    results = results.filter(log => new Date(log.timestamp).getTime() <= endTime);
  }

  // Sort by timestamp descending (newest first)
  results.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  if (filter?.limit) {
    results = results.slice(0, filter.limit);
  }

  return results;
}

/**
 * Get audit statistics
 */
export function getAuditStats(filter?: {
  userId?: string;
  startDate?: Date;
  endDate?: Date;
}): {
  totalActions: number;
  byEndpoint: Record<string, number>;
  byStatus: Record<number, number>;
  avgDuration: number;
  errors: number;
} {
  const logs = getAuditLogs(filter);

  const byEndpoint: Record<string, number> = {};
  const byStatus: Record<number, number> = {};
  let totalDuration = 0;
  let errorCount = 0;

  logs.forEach(log => {
    // Count by endpoint
    byEndpoint[log.endpoint] = (byEndpoint[log.endpoint] || 0) + 1;

    // Count by status
    byStatus[log.response.status] = (byStatus[log.response.status] || 0) + 1;

    // Sum durations
    totalDuration += log.response.duration;

    // Count errors
    if (log.error) errorCount += 1;
  });

  return {
    totalActions: logs.length,
    byEndpoint,
    byStatus,
    avgDuration: logs.length > 0 ? totalDuration / logs.length : 0,
    errors: errorCount,
  };
}

/**
 * Clear old audit logs (retention policy)
 */
export function cleanupAuditLogs(retentionDays: number = LOG_RETENTION_DAYS): number {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - retentionDays);

  const initialLength = auditLogs.length;
  const filtered = auditLogs.filter(log => new Date(log.timestamp) > cutoffDate);

  // Replace array in place
  auditLogs.splice(0, auditLogs.length, ...filtered);

  return initialLength - auditLogs.length;
}

// ── Periodic Cleanup ──────────────────────────────────────────────────────

// Run cleanup daily
setInterval(() => {
  const deleted = cleanupAuditLogs();
  if (deleted > 0) {
    console.log(`[guardian-audit] Cleaned up ${deleted} old entries`);
  }
}, 24 * 60 * 60 * 1000);

// ── Export for API Endpoint ───────────────────────────────────────────────

export interface AuditStatsResponse {
  totalActions: number;
  byEndpoint: Record<string, number>;
  byStatus: Record<number, number>;
  avgDuration: number;
  errors: number;
  logsCount: number;
}

export function getPublicAuditStats(): AuditStatsResponse {
  const stats = getAuditStats();
  return {
    ...stats,
    logsCount: auditLogs.length,
  };
}
