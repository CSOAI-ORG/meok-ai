/**
 * MEOK AI LABS — Guardian Family Alert API
 * POST endpoint to store guardian alerts for dashboard display.
 */

import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import type { ScamAnalysis } from '@/lib/guardian/scam-detection';
import { FamilyAlertRequestSchema } from '@/lib/guardian/validation';
import { guardianRateLimit, attachRateLimitHeaders } from '@/lib/guardian/rate-limit';
import { logGuardianAction } from '@/lib/guardian/audit-log';

// ── Types ──────────────────────────────────────────────────────────────────

interface FamilyAlertBody {
  userId: string;
  alertType: string;
  scamAnalysis: ScamAnalysis;
  message: string;
}

// ── Route handler ──────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  const startTime = Date.now();
  let statusCode = 500;

  try {
    // 0. Rate limiting check
    const rateLimitResponse = await guardianRateLimit(req, 'FAMILY_ALERT');
    if (rateLimitResponse) {
      return rateLimitResponse;
    }

    // 1. Parse and validate body using Zod schema
    const body = await req.json();
    const validation = FamilyAlertRequestSchema.safeParse(body);

    if (!validation.success) {
      statusCode = 400;
      return NextResponse.json(
        { error: validation.error.issues.map(e => e.message).join('; ') },
        { status: 400 }
      );
    }

    const { userId, alertType, scamAnalysis, message, severity } = validation.data;

    // 2. Build alert record
    const alert = {
      id: crypto.randomUUID(),
      type: alertType,
      risk_level: severity || scamAnalysis.riskLevel,
      scam_type: scamAnalysis.scamType ?? null,
      total_score: scamAnalysis.totalScore,
      signals_count: scamAnalysis.signals.length,
      recommended_action: scamAnalysis.recommendedAction,
      message_excerpt: message.slice(0, 200),
      created_at: new Date().toISOString(),
    };

    // 3. Store in guardian_alerts JSONB column on the user row
    if (sql) {
      await sql`
        UPDATE users
        SET guardian_alerts = COALESCE(guardian_alerts, '[]'::jsonb) || ${JSON.stringify([alert])}::jsonb,
            updated_at = NOW()
        WHERE id = ${userId}
      `;
    } else {
      // Database not configured — log for development
      console.warn('[guardian/family-alert] DATABASE_URL not set, alert not persisted:', alert);
    }

    statusCode = 200;
    const duration = Date.now() - startTime;
    logGuardianAction(req, '/api/guardian/family-alert', {
      status: 200,
      severity: alert.risk_level,
      signals: scamAnalysis.signals,
    }, duration);

    const jsonResponse = NextResponse.json({
      ok: true,
      alert_id: alert.id,
      risk_level: alert.risk_level,
      stored_at: alert.created_at,
    });

    return attachRateLimitHeaders(jsonResponse, 'FAMILY_ALERT',
      req.headers.get('x-forwarded-for')?.split(',')[0] || (req as any).ip || '0.0.0.0',
      userId
    );
  } catch (err) {
    statusCode = 500;
    const duration = Date.now() - startTime;
    logGuardianAction(req, '/api/guardian/family-alert', {
      status: 500,
      error: err instanceof Error ? err.message : 'Unknown error',
    }, duration);

    console.error('[guardian/family-alert] Error:', err);
    return NextResponse.json(
      { error: 'Failed to create family alert' },
      { status: 500 },
    );
  }
}
