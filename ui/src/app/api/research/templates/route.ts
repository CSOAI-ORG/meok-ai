/**
 * MEOK AI LABS — Research Templates API
 *
 * GET /api/research/templates - List all research templates
 * POST /api/research/templates - Run research with a specific template
 */

import { type NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';
import { RESEARCH_TEMPLATES, type ResearchTemplate } from '@/lib/research-templates';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// GET: List all templates
export async function GET(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const templates = RESEARCH_TEMPLATES.map(t => ({
    id: t.id,
    name: t.name,
    description: t.description,
    icon: t.icon,
    color: t.color,
    defaultQuery: t.defaultQuery,
  }));

  return NextResponse.json({ templates });
}

// POST: Run research with a template
export async function POST(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { templateId?: string; query?: string; customQuery?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { templateId, query, customQuery } = body;

  if (!templateId) {
    return NextResponse.json({ error: 'Missing templateId' }, { status: 400 });
  }

  const template = RESEARCH_TEMPLATES.find(t => t.id === templateId);
  if (!template) {
    return NextResponse.json({ error: 'Invalid templateId' }, { status: 400 });
  }

  const finalQuery = customQuery || query || template.defaultQuery;

  // Return template configuration for client to use
  return NextResponse.json({
    template: {
      id: template.id,
      name: template.name,
      systemPrompt: template.systemPrompt,
      subQuestions: template.subQuestions,
    },
    query: finalQuery,
  });
}