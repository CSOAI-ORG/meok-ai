/**
 * MEOK A/B Testing - Experiment Assignment API
 * 
 * Records user assignments to experiments for accurate analytics
 */

import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { getAuthUserId } from '@/lib/api-auth';

interface AssignmentPayload {
  experimentId: string;
  variant: string;
  userId?: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: AssignmentPayload = await req.json();
    const { experimentId, variant, userId, timestamp, metadata } = body;

    if (!experimentId || !variant) {
      return NextResponse.json(
        { error: 'Missing experimentId or variant' },
        { status: 400 }
      );
    }

    // Get authenticated user ID if not provided
    const authUserId = await getAuthUserId();
    const finalUserId = userId || authUserId;

    // Store assignment in database
    await sql`
      INSERT INTO experiment_assignments (
        experiment_id,
        variant,
        user_id,
        assigned_at,
        metadata
      ) VALUES (
        ${experimentId},
        ${variant},
        ${finalUserId || 'anonymous'},
        ${timestamp || new Date().toISOString()},
        ${metadata ? JSON.stringify(metadata) : null}
      )
      ON CONFLICT (experiment_id, user_id) DO UPDATE SET
        variant = EXCLUDED.variant,
        assigned_at = EXCLUDED.assigned_at,
        metadata = EXCLUDED.metadata
    `;

    return NextResponse.json({
      success: true,
      experimentId,
      variant,
    });
  } catch (error) {
    console.error('[experiments/assignment] Error:', error);
    return NextResponse.json(
      { error: 'Failed to record assignment' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
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

    const authUserId = await getAuthUserId();
    const finalUserId = userId || authUserId;

    // Query database
    const result = await sql`
      SELECT variant FROM experiment_assignments
      WHERE experiment_id = ${experimentId}
      AND user_id = ${finalUserId || 'anonymous'}
      ORDER BY assigned_at DESC
      LIMIT 1
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'No assignment found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      experimentId,
      variant: result[0].variant,
    });
  } catch (error) {
    console.error('[experiments/assignment] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch assignment' },
      { status: 500 }
    );
  }
}
