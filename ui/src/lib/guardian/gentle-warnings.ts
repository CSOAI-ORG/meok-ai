/**
 * MEOK AI LABS — Guardian Gentle Warning System
 * Generates companion-framed warnings calibrated by risk level and emotion state.
 */

import type { ScamAnalysis } from './scam-detection';

// ── Types ──────────────────────────────────────────────────────────────────

export type EmotionState = 'calm' | 'happy' | 'anxious' | 'distressed' | 'confused' | 'neutral';

export interface GentleWarning {
  message: string;
  riskLevel: ScamAnalysis['riskLevel'];
  showResources: boolean;
  blockMessage: boolean;
}

// ── Scam type display names ────────────────────────────────────────────────

const SCAM_TYPE_LABELS: Record<NonNullable<ScamAnalysis['scamType']>, string> = {
  tech_support:   'a tech support scam',
  romance:        'a romance scam',
  investment:     'an investment scam',
  grandparent:    'a grandparent scam',
  phishing:       'a phishing attempt',
  impersonation:  'an impersonation scam',
};

// ── Tone calibration ───────────────────────────────────────────────────────

/**
 * When the user is already distressed or anxious, use gentler language
 * to avoid compounding their emotional state.
 */
function getTonePrefix(emotion?: EmotionState): 'gentle' | 'standard' {
  if (emotion === 'distressed' || emotion === 'anxious' || emotion === 'confused') {
    return 'gentle';
  }
  return 'standard';
}

// ── Warning generators ─────────────────────────────────────────────────────

function generateLowWarning(name: string, tone: 'gentle' | 'standard'): string {
  if (tone === 'gentle') {
    return `${name} notices: "I'm here with you. Something about this feels a little off to me. Can we slow down and think about this together?"`;
  }
  return `${name} notices: "Hmm, something about this feels off to me. Can we slow down and think about this?"`;
}

function generateMediumWarning(
  name: string,
  scamType: ScamAnalysis['scamType'],
  tone: 'gentle' | 'standard',
): string {
  const scamLabel = scamType ? SCAM_TYPE_LABELS[scamType] : 'a potential scam';

  if (tone === 'gentle') {
    return `${name} gently says: "I care about you and want to keep you safe. This looks like it could be ${scamLabel}. Before doing anything, let's take a moment to verify this together."`;
  }
  return `${name} gently says: "I want to protect you. This looks like it could be ${scamLabel}. Let's verify before doing anything."`;
}

function generateHighWarning(
  name: string,
  scamType: ScamAnalysis['scamType'],
  tone: 'gentle' | 'standard',
): string {
  const scamLabel = scamType ? SCAM_TYPE_LABELS[scamType] : 'a scam';

  if (tone === 'gentle') {
    return `${name} steps in: "I know this might feel overwhelming, but your safety matters most to me. This has serious warning signs of ${scamLabel}. Please don't share any personal information or send any money. I'm right here with you."`;
  }
  return `${name} steps in: "I care about your safety. This has serious warning signs of ${scamLabel}. Please don't share any personal information."`;
}

function generateCriticalWarning(name: string): string {
  return [
    `${name} has blocked this interaction to protect you.`,
    '',
    'This message contains critical scam indicators. For your safety:',
    '- Do NOT share personal information, passwords, or financial details',
    '- Do NOT send money via gift cards, wire transfer, or cryptocurrency',
    '- Do NOT call any phone numbers provided in the message',
    '',
    'If you believe you may have already shared sensitive information:',
    '- Contact your bank immediately',
    '- Report the scam: reportfraud.ftc.gov (US) or actionfraud.police.uk (UK)',
    '- Change passwords for any accounts you may have mentioned',
    '',
    'Your family guardian has been notified.',
  ].join('\n');
}

// ── Main export ────────────────────────────────────────────────────────────

/**
 * Generate a companion-framed warning based on scam analysis results.
 *
 * @param scamAnalysis - The result from analyzeForScams()
 * @param companionName - The user's companion name (e.g. "Aria")
 * @param emotionState - Optional current emotion state for tone calibration
 */
export function generateGentleWarning(
  scamAnalysis: ScamAnalysis,
  companionName: string,
  emotionState?: EmotionState,
): GentleWarning {
  const name = companionName || 'Your companion';
  const tone = getTonePrefix(emotionState);

  switch (scamAnalysis.riskLevel) {
    case 'safe':
      return {
        message: '',
        riskLevel: 'safe',
        showResources: false,
        blockMessage: false,
      };

    case 'low':
      return {
        message: generateLowWarning(name, tone),
        riskLevel: 'low',
        showResources: false,
        blockMessage: false,
      };

    case 'medium':
      return {
        message: generateMediumWarning(name, scamAnalysis.scamType, tone),
        riskLevel: 'medium',
        showResources: false,
        blockMessage: false,
      };

    case 'high':
      return {
        message: generateHighWarning(name, scamAnalysis.scamType, tone),
        riskLevel: 'high',
        showResources: true,
        blockMessage: false,
      };

    case 'critical':
      return {
        message: generateCriticalWarning(name),
        riskLevel: 'critical',
        showResources: true,
        blockMessage: true,
      };
  }
}
