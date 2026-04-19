/**
 * MEOK A/B Testing - Experiment Event Tracking API
 * 
 * Records conversion events for experiment analysis
 */

import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

interface EventPayload {
  experimentId: string;
  variant: string;
  event: string;
  value?: number;
  userId?: string;
  timestamp?: string;
  metadata?: Record<string, unknown>;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: EventPayload = await req.json();
    const {
      experimentId,
      variant,
      event,
      value,
      userId,
      timestamp,
      metadata,
    } = body;

    if (!experimentId || !variant || !event) {
      return NextResponse.json(
        { error: 'Missing required fields: experimentId, variant, event' },
        { status: 400 }
      );
    }

    // Store event in database
    await sql`
      INSERT INTO experiment_events (
        experiment_id,
        variant,
        event_name,
        event_value,
        user_id,
        occurred_at,
        metadata
      ) VALUES (
        ${experimentId},
        ${variant},
        ${event},
        ${value || 1},
        ${userId || 'anonymous'},
        ${timestamp || new Date().toISOString()},
        ${metadata ? JSON.stringify(metadata) : null}
      )
    `;

    return NextResponse.json({
      success: true,
      experimentId,
      variant,
      event,
    });
  } catch (error) {
    console.error('[experiments/event] Error:', error);
    return NextResponse.json(
      { error: 'Failed to record event' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const experimentId = searchParams.get('experimentId');

    if (!experimentId) {
      return NextResponse.json(
        { error: 'Missing experimentId' },
        { status: 400 }
      );
    }

    // Get aggregated results
    const results = await sql`
      SELECT 
        variant,
        event_name,
        COUNT(*) as event_count,
        COUNT(DISTINCT user_id) as unique_users,
        SUM(event_value) as total_value
      FROM experiment_events
      WHERE experiment_id = ${experimentId}
      GROUP BY variant, event_name
      ORDER BY variant, event_name
    `;

    return NextResponse.json({
      experimentId,
      results,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('[experiments/event] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch results' },
      { status: 500 }
    );
  }
}
