/**
 * Ralph Mode Task Queue API
 *
 * POST /api/ralph/tasks — Submit a task to the overnight queue
 * GET  /api/ralph/tasks — List tasks (filter by status, agent, project)
 * PATCH /api/ralph/tasks — Update task status (approve, cancel, re-run)
 */

import { type NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';
import { sql } from '@/lib/db';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const userId = await getAuthUserId();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!sql) return NextResponse.json({ error: 'Database not available' }, { status: 503 });

  try {
    const body = await req.json() as {
      title: string;
      description?: string;
      agent: 'orion' | 'riri' | 'hourman' | 'sovereign';
      project_id?: string;
      priority?: number;
      input_data?: Record<string, unknown>;
      requires_approval?: boolean;
    };

    if (!body.title || !body.agent) {
      return NextResponse.json({ error: 'title and agent required' }, { status: 400 });
    }

    const rows = await sql`
      INSERT INTO ralph_tasks (user_id, title, description, agent, project_id, priority, input_data, requires_approval)
      VALUES (${userId}, ${body.title}, ${body.description ?? null}, ${body.agent},
              ${body.project_id ?? null}, ${body.priority ?? 3}, ${JSON.stringify(body.input_data ?? {})},
              ${body.requires_approval ?? false})
      RETURNING id, status, created_at
    `;

    const row = (rows as unknown[])[0] as { id: string; status: string; created_at: string };

    // Update project task count if linked
    if (body.project_id) {
      await sql`UPDATE ralph_projects SET task_count = task_count + 1, updated_at = NOW() WHERE id = ${body.project_id}`.catch(() => {});
    }

    return NextResponse.json({ id: row.id, status: row.status, created_at: row.created_at }, { status: 201 });
  } catch (err) {
    console.error('[ralph/tasks] POST error:', err);
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const userId = await getAuthUserId();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!sql) return NextResponse.json({ tasks: [] });

  const status = req.nextUrl.searchParams.get('status');
  const agent = req.nextUrl.searchParams.get('agent');
  const projectId = req.nextUrl.searchParams.get('project_id');

  try {
    const rows = await sql`
      SELECT id, title, description, agent, status, priority, care_score,
             output_data, error_message, requires_approval, approved_at,
             started_at, completed_at, created_at, project_id
      FROM ralph_tasks
      WHERE user_id = ${userId}
        AND (${status ?? null}::TEXT IS NULL OR status = ${status ?? null})
        AND (${agent ?? null}::TEXT IS NULL OR agent = ${agent ?? null})
        AND (${projectId ?? null}::TEXT IS NULL OR project_id = ${projectId ?? null})
      ORDER BY
        CASE status WHEN 'running' THEN 0 WHEN 'queued' THEN 1 WHEN 'blocked' THEN 2 ELSE 3 END,
        priority DESC, created_at DESC
      LIMIT 100
    `;

    return NextResponse.json({ tasks: rows });
  } catch (err) {
    console.error('[ralph/tasks] GET error:', err);
    return NextResponse.json({ tasks: [] });
  }
}

export async function PATCH(req: NextRequest): Promise<NextResponse> {
  const userId = await getAuthUserId();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!sql) return NextResponse.json({ error: 'Database not available' }, { status: 503 });

  try {
    const body = await req.json() as {
      id: string;
      status?: string;
      output_data?: Record<string, unknown>;
      care_score?: number;
      error_message?: string;
    };

    if (!body.id) return NextResponse.json({ error: 'id required' }, { status: 400 });

    // Handle approval
    if (body.status === 'complete' || body.status === 'running') {
      const now = body.status === 'running' ? 'started_at' : 'completed_at';
      await sql`
        UPDATE ralph_tasks
        SET status = ${body.status},
            output_data = COALESCE(${body.output_data ? JSON.stringify(body.output_data) : null}::JSONB, output_data),
            care_score = COALESCE(${body.care_score ?? null}, care_score),
            error_message = COALESCE(${body.error_message ?? null}, error_message),
            ${body.status === 'running' ? sql`started_at = NOW()` : sql`completed_at = NOW()`}
        WHERE id = ${body.id} AND user_id = ${userId}
      `;
    } else {
      await sql`
        UPDATE ralph_tasks
        SET status = COALESCE(${body.status ?? null}, status),
            output_data = COALESCE(${body.output_data ? JSON.stringify(body.output_data) : null}::JSONB, output_data),
            care_score = COALESCE(${body.care_score ?? null}, care_score),
            error_message = COALESCE(${body.error_message ?? null}, error_message)
        WHERE id = ${body.id} AND user_id = ${userId}
      `;
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[ralph/tasks] PATCH error:', err);
    return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
  }
}
