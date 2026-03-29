/**
 * Ralph Mode Projects API
 *
 * POST /api/ralph/projects — Submit a project goal → decompose into agent tasks
 * GET  /api/ralph/projects — List projects with task counts
 */

import { type NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';
import { sql } from '@/lib/db';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const userId = await getAuthUserId();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!sql) return NextResponse.json({ error: 'Database not available' }, { status: 503 });

  try {
    const body = await req.json() as { goal: string; title?: string };
    if (!body.goal) return NextResponse.json({ error: 'goal required' }, { status: 400 });

    // Create project
    const projRows = await sql`
      INSERT INTO ralph_projects (user_id, title, goal)
      VALUES (${userId}, ${body.title ?? body.goal.slice(0, 80)}, ${body.goal})
      RETURNING id, created_at
    `;
    const project = (projRows as unknown[])[0] as { id: string; created_at: string };

    // Decompose into tasks using a simple heuristic
    // (In production, this would call the 671B LLM for intelligent decomposition)
    const tasks = decomposeGoal(body.goal);

    // Insert tasks
    for (const task of tasks) {
      await sql`
        INSERT INTO ralph_tasks (user_id, project_id, title, description, agent, priority)
        VALUES (${userId}, ${project.id}, ${task.title}, ${task.description}, ${task.agent}, ${task.priority})
      `;
    }

    // Update project task count
    await sql`UPDATE ralph_projects SET task_count = ${tasks.length} WHERE id = ${project.id}`;

    return NextResponse.json({
      project_id: project.id,
      tasks: tasks.length,
      decomposition: tasks.map(t => ({ title: t.title, agent: t.agent, priority: t.priority })),
    }, { status: 201 });
  } catch (err) {
    console.error('[ralph/projects] POST error:', err);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const userId = await getAuthUserId();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!sql) return NextResponse.json({ projects: [] });

  try {
    const rows = await sql`
      SELECT p.id, p.title, p.goal, p.status, p.task_count, p.completed_count, p.created_at,
             (SELECT count(*) FROM ralph_tasks t WHERE t.project_id = p.id AND t.status = 'complete')::int AS done,
             (SELECT count(*) FROM ralph_tasks t WHERE t.project_id = p.id AND t.status = 'running')::int AS running,
             (SELECT count(*) FROM ralph_tasks t WHERE t.project_id = p.id AND t.status = 'queued')::int AS queued
      FROM ralph_projects p
      WHERE p.user_id = ${userId}
      ORDER BY p.updated_at DESC
      LIMIT 20
    `;
    return NextResponse.json({ projects: rows });
  } catch (err) {
    console.error('[ralph/projects] GET error:', err);
    return NextResponse.json({ projects: [] });
  }
}

/** Simple task decomposition heuristic (replaced by LLM in production) */
function decomposeGoal(goal: string): Array<{ title: string; description: string; agent: string; priority: number }> {
  const lower = goal.toLowerCase();
  const tasks: Array<{ title: string; description: string; agent: string; priority: number }> = [];

  // Research phase (Orion)
  tasks.push({
    title: `Research: ${goal.slice(0, 60)}`,
    description: `Orion researches best practices, competitors, and approaches for: ${goal}`,
    agent: 'orion',
    priority: 4,
  });

  // Build phase (Riri)
  if (lower.includes('build') || lower.includes('create') || lower.includes('make') || lower.includes('design') || lower.includes('write')) {
    tasks.push({
      title: `Build: ${goal.slice(0, 60)}`,
      description: `Riri builds the deliverable for: ${goal}`,
      agent: 'riri',
      priority: 3,
    });
  }

  // Code-specific tasks
  if (lower.includes('code') || lower.includes('api') || lower.includes('page') || lower.includes('feature') || lower.includes('fix')) {
    tasks.push({
      title: `Implement: ${goal.slice(0, 60)}`,
      description: `Riri implements the code changes for: ${goal}`,
      agent: 'riri',
      priority: 4,
    });
    tasks.push({
      title: `Test: ${goal.slice(0, 60)}`,
      description: `Verify implementation works correctly`,
      agent: 'riri',
      priority: 2,
    });
  }

  // Planning phase (Hourman)
  tasks.push({
    title: `Plan & schedule: ${goal.slice(0, 60)}`,
    description: `Hourman creates execution timeline and sprint plan for: ${goal}`,
    agent: 'hourman',
    priority: 3,
  });

  // Review phase (Sovereign)
  tasks.push({
    title: `Care review: ${goal.slice(0, 60)}`,
    description: `Sovereign validates all outputs against Maternal Covenant care dimensions`,
    agent: 'sovereign',
    priority: 5,
  });

  return tasks;
}
