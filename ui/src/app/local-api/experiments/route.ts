/**
 * MEOK A/B Testing - Experiments List API
 * 
 * Returns active experiments and their configurations
 */

import { NextRequest, NextResponse } from 'next/server';
import { ACTIVE_EXPERIMENTS } from '@/lib/ab-testing';

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    
    // Filter to only return active experiments (not ended)
    const now = new Date().toISOString();
    const activeExperiments = ACTIVE_EXPERIMENTS.filter((exp) => {
      if (exp.endDate && exp.endDate < now) return false;
      if (exp.startDate > now) return false;
      return true;
    });

    // Sanitize for public API (remove internal config)
    const sanitized = activeExperiments.map((exp) => ({
      id: exp.id,
      name: exp.name,
      description: exp.description,
      variants: Object.keys(exp.variants),
      weights: exp.weights,
      metrics: exp.metrics,
    }));

    return NextResponse.json({
      experiments: sanitized,
      total: sanitized.length,
      timestamp: now,
    });
  } catch (error) {
    console.error('[experiments] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch experiments' },
      { status: 500 }
    );
  }
}

// Admin endpoint to create new experiments
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Verify admin access
    const apiKey = req.headers.get('x-api-key');
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    // In production, this would validate and store new experiments
    // For now, experiments are code-defined in lib/ab-testing.ts

    return NextResponse.json({
      success: true,
      message: 'Experiments are code-defined. Update lib/ab-testing.ts to add new experiments.',
    });
  } catch (error) {
    console.error('[experiments] Error:', error);
    return NextResponse.json(
      { error: 'Failed to create experiment' },
      { status: 500 }
    );
  }
}
