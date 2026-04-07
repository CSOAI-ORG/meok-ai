/**
 * MEOK AI LABS — Department Agents API
 * 
 * GET /api/departments - Get status of all departments
 * POST /api/departments - Delegate task to a department
 * 
 * Returns status of all 6 department agents (Content, Sales, Finance, Support, Research, Operations)
 * with task queues and sub-agent status.
 * 
 * Requires authentication.
 * Uses caching for performance.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';
import { checkRateLimit } from '@/lib/rate-limit';
import { apiCache, cacheControl } from '@/lib/cache';

const MCP_SERVER = process.env.MCP_SERVER_URL || 'http://localhost:3200';
const DEPARTMENTS = ['content', 'sales', 'finance', 'support', 'research', 'operations'] as const;

interface MCPResponse {
  result?: {
    content?: Array<{ text: string }>;
  };
}

async function callMCPTool(
  toolName: string, 
  args: Record<string, unknown> = {},
  timeoutMs = 5000
): Promise<unknown> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(`${MCP_SERVER}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: `dept_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        method: 'tools/call',
        params: { name: toolName, arguments: args },
      }),
    });

    if (!res.ok) {
      throw new Error(`MCP HTTP ${res.status}`);
    }

    const data = await res.json() as MCPResponse;
    const text = data?.result?.content?.[0]?.text;
    return text ? JSON.parse(text) : null;
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      console.warn(`[departments] Tool ${toolName} timed out`);
      return null;
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const requestId = crypto.randomUUID().slice(0, 8);
  const startTime = Date.now();

  try {
    // Auth check
    const userId = await getAuthUserId();
    if (!userId) {
      return NextResponse.json(
        { error: 'UNAUTHORIZED', message: 'Authentication required' },
        { status: 401, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    // Rate limit check
    const { allowed, remaining, resetAt } = checkRateLimit(userId, 'sovereign');
    if (!allowed) {
      return NextResponse.json(
        { error: 'RATE_LIMITED', message: 'Too many requests' },
        { 
          status: 429, 
          headers: { 
            'Cache-Control': 'no-store',
            'Retry-After': String(Math.ceil((resetAt - Date.now()) / 1000)),
          }
        }
      );
    }

    // Check cache
    const cacheKey = `departments:${userId}`;
    const cached = await apiCache.get(cacheKey);
    if (cached && !cached.stale) {
      const response = NextResponse.json(cached.data, {
        headers: {
          'Cache-Control': 'public, max-age=30, stale-while-revalidate=60',
          'X-Cache': 'HIT',
          'X-Request-ID': requestId,
        },
      });
      return response;
    }

    // Parallel fetch for performance
    const fetchStart = Date.now();
    const [status, ...queues] = await Promise.all([
      callMCPTool('get_department_status').catch(() => ({})),
      ...DEPARTMENTS.map(dept => 
        callMCPTool('get_department_task_queue', { department: dept }).catch(() => ({ tasks: [] }))
      ),
    ]);

    const fetchTime = Date.now() - fetchStart;

    // Build response
    const departmentData = DEPARTMENTS.map((dept, i) => {
      const deptStatus = (status as Record<string, unknown>)?.[dept] as Record<string, unknown> | undefined;
      const queue = queues[i] as { tasks?: unknown[] } | null;
      
      return {
        name: dept.charAt(0).toUpperCase() + dept.slice(1),
        id: dept,
        status: {
          pending: (deptStatus?.pending as number) ?? 0,
          in_progress: (deptStatus?.in_progress as number) ?? 0,
          completed: (deptStatus?.completed as number) ?? 0,
          sub_agents: (deptStatus?.sub_agents as string[]) ?? [],
        },
        tasks: (queue?.tasks ?? []).slice(0, 5), // Limit to 5 recent tasks
      };
    });

    const responseData = {
      departments: departmentData,
      totalTasks: departmentData.reduce(
        (sum, d) => sum + (d.status.pending + d.status.in_progress), 
        0
      ),
      fetchTime,
      cached: !!cached,
      timestamp: new Date().toISOString(),
    };

    // Cache the result
    await apiCache.set(cacheKey, responseData, { ttl: 30 });

    return NextResponse.json(responseData, {
      headers: {
        'Cache-Control': cacheControl({ maxAge: 30, staleWhileRevalidate: 60 }),
        'X-Cache': cached ? 'STALE' : 'MISS',
        'X-Request-ID': requestId,
        'X-Response-Time': `${Date.now() - startTime}ms`,
        'X-RateLimit-Remaining': String(remaining),
      },
    });

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error(`[departments/GET ${requestId}] Error:`, errorMessage);

    return NextResponse.json(
      { 
        error: 'INTERNAL_ERROR', 
        message: 'Failed to fetch department status',
        requestId: process.env.NODE_ENV === 'development' ? requestId : undefined,
      },
      { 
        status: 500, 
        headers: { 
          'Cache-Control': 'no-store',
          'X-Request-ID': requestId,
        } 
      }
    );
  }
}

export async function POST(request: NextRequest) {
  const requestId = crypto.randomUUID().slice(0, 8);
  const startTime = Date.now();

  try {
    // Auth check
    const userId = await getAuthUserId();
    if (!userId) {
      return NextResponse.json(
        { error: 'UNAUTHORIZED', message: 'Authentication required' },
        { status: 401 }
      );
    }

    // Rate limit
    const { allowed, remaining, resetAt } = checkRateLimit(userId, 'sovereign');
    if (!allowed) {
      return NextResponse.json(
        { error: 'RATE_LIMITED', message: 'Too many requests' },
        { 
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((resetAt - Date.now()) / 1000)) },
        }
      );
    }

    // Parse and validate body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'BAD_REQUEST', message: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    // Type guard for body
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'BAD_REQUEST', message: 'Request body required' },
        { status: 400 }
      );
    }

    const { department, task, priority = 5 } = body as Record<string, unknown>;

    // Validation
    if (!department || typeof department !== 'string') {
      return NextResponse.json(
        { error: 'BAD_REQUEST', message: 'Missing or invalid department' },
        { status: 400 }
      );
    }

    if (!task || typeof task !== 'string' || task.trim().length === 0) {
      return NextResponse.json(
        { error: 'BAD_REQUEST', message: 'Missing or empty task' },
        { status: 400 }
      );
    }

    if (task.length > 500) {
      return NextResponse.json(
        { error: 'BAD_REQUEST', message: 'Task too long (max 500 chars)' },
        { status: 400 }
      );
    }

    const validPriority = typeof priority === 'number' ? Math.min(10, Math.max(1, priority)) : 5;

    if (!DEPARTMENTS.includes(department as typeof DEPARTMENTS[number])) {
      return NextResponse.json(
        { 
          error: 'BAD_REQUEST', 
          message: `Invalid department. Valid: ${DEPARTMENTS.join(', ')}` 
        },
        { status: 400 }
      );
    }

    // Delegate task via MCP with timeout
    const result = await callMCPTool('delegate_to_department', {
      department,
      task: task.trim(),
      priority: validPriority,
    }, 10000);

    // Invalidate cache for this user
    await apiCache.delete(`departments:${userId}`);

    return NextResponse.json({
      success: true,
      department,
      task: task.trim(),
      priority: validPriority,
      result: result ?? 'Task delegated (no response)',
      timestamp: new Date().toISOString(),
    }, {
      headers: {
        'X-Request-ID': requestId,
        'X-Response-Time': `${Date.now() - startTime}ms`,
        'X-RateLimit-Remaining': String(remaining),
      },
    });

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error(`[departments/POST ${requestId}] Error:`, errorMessage);

    return NextResponse.json(
      { 
        error: 'INTERNAL_ERROR', 
        message: 'Failed to delegate task',
        requestId: process.env.NODE_ENV === 'development' ? requestId : undefined,
      },
      { 
        status: 500, 
        headers: { 'X-Request-ID': requestId } 
      }
    );
  }
}