/**
 * MEOK A/B Testing - Experiment Assignment API
 */

import { NextRequest, NextResponse } from 'next/server';
import { ACTIVE_EXPERIMENTS, assignVariant } from '@/lib/ab-testing';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { experimentId, userId } = body;

    if (!experimentId) {
      return NextResponse.json(
        { error: 'Missing experimentId' },
        { status: 400 }
      );
    }

    const experiment = ACTIVE_EXPERIMENTS.find(e => e.id === experimentId);
    if (!experiment) {
      return NextResponse.json(
        { error: 'Experiment not found' },
        { status: 404 }
      );
    }

    const variant = assignVariant(experimentId, userId || 'anonymous', experiment);

    return NextResponse.json({
      experimentId,
      variant,
    });
  } catch (error) {
    console.error('[experiments/assignment] Error:', error);
    return NextResponse.json(
      { error: 'Failed to assign variant' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const experimentId = searchParams.get('experimentId');
    const userId = searchParams.get('userId');

    if (!experimentId) {
      return NextResponse.json(
        { error: 'Missing experimentId' },
        { status: 400 }
      );
    }

    const experiment = ACTIVE_EXPERIMENTS.find(e => e.id === experimentId);
    if (!experiment) {
      return NextResponse.json(
        { error: 'Experiment not found' },
        { status: 404 }
      );
    }

    const variant = assignVariant(experimentId, userId || 'anonymous', experiment);

    return NextResponse.json({
      experimentId,
      variant,
    });
  } catch (error) {
    console.error('[experiments/assignment] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch assignment' },
      { status: 500 }
    );
  }
}
