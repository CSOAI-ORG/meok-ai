import { NextResponse } from 'next/server'

// EU AI Act compliance declaration for MEOK AI LABS
// MEOK falls under "Limited Risk AI Systems" (Article 52) — chatbot disclosure required
// Guardian child safety features fall under "High Risk" (Annex III, point 1b) — registration required

export async function GET() {
  return NextResponse.json({
    system: 'MEOK AI LABS Sovereign AI Platform',
    version: '1.0.0',
    risk_classification: {
      primary: 'limited_risk',
      article: 'Article 52 EU AI Act',
      reason: 'AI system that interacts with natural persons (conversational AI)',
      disclosure_required: true,
      disclosure_text: 'You are interacting with an AI system. MEOK AI companions are artificial intelligence, not human.'
    },
    high_risk_components: [
      {
        component: 'Guardian Child Safety',
        article: 'Annex III, point 1b',
        reason: 'AI used in safety-critical applications involving minors',
        status: 'registration_planned',
        dpia_required: true
      }
    ],
    transparency: {
      ai_disclosure_in_ui: true,
      training_data_disclosed: 'partial',
      model_providers: ['Anthropic', 'OpenAI', 'DeepSeek'],
      data_not_used_for_training: true
    },
    conformity: {
      standard: 'EU AI Act 2024/1689',
      status: 'self_assessment',
      last_reviewed: '2026-03-22',
      next_review: '2026-09-22'
    },
    contact: 'compliance@meok.ai'
  })
}
