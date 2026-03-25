/**
 * MEOK AI LABS — Guardian Family Alert API
 * POST endpoint to store guardian alerts for dashboard display.
 */

import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import type { ScamAnalysis } from '@/lib/guardian/scam-detection';

// ── Types ──────────────────────────────────────────────────────────────────

interface FamilyAlertBody {
  userId: string;
  alertType: string;
  scamAnalysis: ScamAnalysis;
  message: string;
}

// ── Route handler ──────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // 1. Parse and validate body
    const body = (await req.json()) as Partial<FamilyAlertBody>;

    if (!body.userId || typeof body.userId !== 'string') {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }
    if (!body.alertType || typeof body.alertType !== 'string') {
      return NextResponse.json({ error: 'alertType is required' }, { status: 400 });
    }
    if (!body.scamAnalysis) {
      return NextResponse.json({ error: 'scamAnalysis is required' }, { status: 400 });
    }
    if (!body.message || typeof body.message !== 'string') {
      return NextResponse.json({ error: 'message is required' }, { status: 400 });
    }

    // 2. Build alert record
    const alert = {
      id: crypto.randomUUID(),
      type: body.alertType,
      risk_level: body.scamAnalysis.riskLevel,
      scam_type: body.scamAnalysis.scamType ?? null,
      total_score: body.scamAnalysis.totalScore,
      signals_count: body.scamAnalysis.signals.length,
      recommended_action: body.scamAnalysis.recommendedAction,
      message_excerpt: body.message.slice(0, 200),
      created_at: new Date().toISOString(),
    };

    // 3. Store in guardian_alerts JSONB column on the user row
    if (sql) {
      await sql`
        UPDATE users
        SET guardian_alerts = COALESCE(guardian_alerts, '[]'::jsonb) || ${JSON.stringify([alert])}::jsonb,
            updated_at = NOW()
        WHERE id = ${body.userId}
      `;
    } else {
      // Database not configured — log for development
      console.warn('[guardian/family-alert] DATABASE_URL not set, alert not persisted:', alert);
    }

    return NextResponse.json({
      ok: true,
      alert_id: alert.id,
      risk_level: alert.risk_level,
    });
  } catch (err) {
    console.error('[guardian/family-alert] Error:', err);
    return NextResponse.json(
      { error: 'Failed to create family alert' },
      { status: 500 },
    );
  }
}
