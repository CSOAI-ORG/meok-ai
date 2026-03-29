/**
 * MEOK AI LABS — Guardian API Validation Schemas
 * Zod schemas for all guardian endpoints with confidence thresholds
 */

import { z } from 'zod';

// ── Severity Types ────────────────────────────────────────────────────────

export type ScanMessageSeverity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type CheckPersonRiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

// ── Confidence Thresholds ─────────────────────────────────────────────────
// Lower threshold = more confident in flagging
export const CONFIDENCE_THRESHOLDS = {
  SCAN_MESSAGE: {
    CRITICAL: 0.85,
    HIGH: 0.65,
    MEDIUM: 0.40,
    LOW: 0.0,
  },
  CHECK_PERSON: {
    HIGH: 0.6,
    MEDIUM: 0.35,
    LOW: 0.0,
  },
} as const;

// ── Scan Message Validation ───────────────────────────────────────────────

export const ScanMessageRequestSchema = z.object({
  message: z
    .string()
    .min(1, 'message cannot be empty')
    .max(10000, 'message exceeds maximum length')
    .describe('The message to scan for threats'),
  user_id: z
    .string()
    .uuid('user_id must be a valid UUID')
    .describe('ID of the user performing the scan'),
  context: z
    .string()
    .max(2000, 'context exceeds maximum length')
    .optional()
    .describe('Additional context about the message (optional)'),
  confidence_threshold: z
    .number()
    .min(0)
    .max(1)
    .optional()
    .default(CONFIDENCE_THRESHOLDS.SCAN_MESSAGE.MEDIUM)
    .describe('Custom confidence threshold (0-1, default 0.4)'),
});

export type ScanMessageRequest = z.infer<typeof ScanMessageRequestSchema>;

export const ScanMessageResponseSchema = z.object({
  severity: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
  scores: z.record(z.string(), z.number()),
  flagged: z.boolean(),
  recommended_action: z.string(),
  safe_to_deliver: z.boolean(),
  confidence: z.number().min(0).max(1),
  crisis_resources: z.array(z.object({
    title: z.string(),
    url: z.string().url(),
  })).optional(),
  cognitive_analysis: z.object({
    detected_patterns: z.array(z.string()),
    risk_factors: z.array(z.string()),
  }).optional(),
});

export type ScanMessageResponse = z.infer<typeof ScanMessageResponseSchema>;

// ── Check Person Validation ───────────────────────────────────────────────

export const CheckPersonRequestSchema = z.object({
  name: z
    .string()
    .min(2, 'name must be at least 2 characters')
    .max(200, 'name exceeds maximum length')
    .describe('Name of the person to check'),
  company: z
    .string()
    .max(200, 'company name exceeds maximum length')
    .optional()
    .describe('Company name (optional)'),
  phone: z
    .string()
    .max(20, 'phone number exceeds maximum length')
    .optional()
    .describe('Phone number (optional)'),
  context: z
    .string()
    .max(2000, 'context exceeds maximum length')
    .optional()
    .describe('Additional context (optional)'),
  user_id: z
    .string()
    .uuid('user_id must be a valid UUID')
    .optional()
    .describe('User ID for audit logging'),
  confidence_threshold: z
    .number()
    .min(0)
    .max(1)
    .optional()
    .default(CONFIDENCE_THRESHOLDS.CHECK_PERSON.MEDIUM)
    .describe('Custom confidence threshold (0-1, default 0.35)'),
});

export type CheckPersonRequest = z.infer<typeof CheckPersonRequestSchema>;

export const CheckPersonResponseSchema = z.object({
  risk_score: z.number().min(0).max(1),
  risk_level: z.enum(['LOW', 'MEDIUM', 'HIGH']),
  signals: z.array(z.string()),
  recommendation: z.string(),
  confidence: z.number().min(0).max(1),
  companies_house_url: z.string().url().optional(),
  signal_details: z.array(z.object({
    type: z.enum(['phone', 'company', 'urgency', 'other']),
    message: z.string(),
    severity: z.enum(['low', 'medium', 'high']),
  })).optional(),
});

export type CheckPersonResponse = z.infer<typeof CheckPersonResponseSchema>;

// ── Family Alert Validation ───────────────────────────────────────────────

export const ScamAnalysisSchema = z.object({
  riskLevel: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
  scamType: z.string().optional(),
  totalScore: z.number().min(0).max(1),
  signals: z.array(z.string()),
  recommendedAction: z.string(),
});

export const FamilyAlertRequestSchema = z.object({
  userId: z
    .string()
    .uuid('userId must be a valid UUID')
    .describe('ID of the user receiving the alert'),
  alertType: z
    .enum(['scam', 'grooming', 'self_harm', 'toxic', 'manipulation'])
    .describe('Type of alert'),
  scamAnalysis: ScamAnalysisSchema
    .describe('Detailed analysis result'),
  message: z
    .string()
    .max(10000, 'message exceeds maximum length')
    .describe('The message that triggered the alert'),
  severity: z
    .enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
    .optional()
    .describe('Override severity level'),
});

export type FamilyAlertRequest = z.infer<typeof FamilyAlertRequestSchema>;

export const FamilyAlertResponseSchema = z.object({
  ok: z.boolean(),
  alert_id: z.string().uuid(),
  risk_level: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
  stored_at: z.string().datetime().optional(),
});

export type FamilyAlertResponse = z.infer<typeof FamilyAlertResponseSchema>;

// ── Helper Functions ──────────────────────────────────────────────────────

/**
 * Validate request and return parsed data or error response
 */
export function validateRequest<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: string } {
  try {
    const parsed = schema.parse(data);
    return { success: true, data: parsed };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const messages = error.issues.map(e => `${e.path.join('.')}: ${e.message}`);
      return { success: false, error: messages.join('; ') };
    }
    return { success: false, error: 'Validation failed' };
  }
}

/**
 * Check if score meets confidence threshold
 */
export function meetsConfidenceThreshold(
  score: number,
  threshold: number
): boolean {
  return score >= threshold;
}

/**
 * Get severity level based on score and confidence threshold
 */
export function determineSeverity(
  score: number,
  thresholds: typeof CONFIDENCE_THRESHOLDS.SCAN_MESSAGE
): ScanMessageSeverity {
  if (score >= thresholds.CRITICAL) return 'CRITICAL';
  if (score >= thresholds.HIGH) return 'HIGH';
  if (score >= thresholds.MEDIUM) return 'MEDIUM';
  return 'LOW';
}
