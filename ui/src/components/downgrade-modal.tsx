'use client';

import { AlertTriangle, X } from 'lucide-react';

interface DowngradeModalProps {
  fromPlan: string;
  toPlan: string;
  onKeep: () => void;
  onDowngrade: () => void;
}

/**
 * Feature loss bullets derived by comparing fromPlan → toPlan.
 * Returns exactly 3 strings representing the most impactful losses.
 */
function getLossBullets(fromPlan: string, toPlan: string): string[] {
  const from = fromPlan.toLowerCase();
  const to = toPlan.toLowerCase();

  // Pro/Enterprise → Companion
  if (
    (from.includes('pro') || from.includes('enterprise')) &&
    (to.includes('companion') || to.includes('free') || to.includes('explorer'))
  ) {
    return [
      'Unlimited AI messages — reduced to 50/month on your new plan',
      'Guardian threat detection — disabled until you upgrade again',
      'Priority model access (Claude 3.5, GPT-4o) — reverts to standard tier',
    ];
  }

  // Companion → Explorer / Free
  if (
    from.includes('companion') &&
    (to.includes('explorer') || to.includes('free'))
  ) {
    return [
      'Long-term memory — your companion forgets context after each session',
      'Voice & sensory personalisation settings — reset to defaults',
      'Advanced companion evolution — XP progression paused',
    ];
  }

  // Enterprise → Pro
  if (from.includes('enterprise') && to.includes('pro')) {
    return [
      'Team workspace & shared memory pools — removed',
      'Dedicated support SLA and onboarding — no longer included',
      'Custom model fine-tuning access — disabled on Pro tier',
    ];
  }

  // Generic fallback
  return [
    `All features exclusive to ${fromPlan} will be immediately removed`,
    'Any data tied to higher-tier features may become inaccessible',
    'You can upgrade again at any time to restore full access',
  ];
}

export function DowngradeModal({
  fromPlan,
  toPlan,
  onKeep,
  onDowngrade,
}: DowngradeModalProps) {
  const bullets = getLossBullets(fromPlan, toPlan);

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(13,12,24,0.80)', backdropFilter: 'blur(6px)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="downgrade-title"
    >
      <div
        className="w-full max-w-md rounded-2xl p-6 shadow-2xl"
        style={{
          background: '#13121f',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div
              className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: 'rgba(239,68,68,0.10)',
                border: '1px solid rgba(239,68,68,0.22)',
              }}
            >
              <AlertTriangle className="w-5 h-5" style={{ color: '#f87171' }} />
            </div>
            <div>
              <h2 id="downgrade-title" className="text-white font-bold text-base">
                Before you downgrade
              </h2>
              <p className="text-white/35 text-xs mt-0.5">
                {fromPlan} → {toPlan}
              </p>
            </div>
          </div>
          <button
            onClick={onKeep}
            aria-label="Close"
            className="text-white/20 hover:text-white/50 transition-colors p-1 -mt-1 -mr-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* What you'll lose */}
        <div
          className="rounded-xl p-4 mb-5 space-y-3"
          style={{
            background: 'rgba(239,68,68,0.05)',
            border: '1px solid rgba(239,68,68,0.12)',
          }}
        >
          <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">
            You will lose access to
          </p>
          <ul className="space-y-2.5">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{
                    background: 'rgba(239,68,68,0.15)',
                    border: '1px solid rgba(239,68,68,0.25)',
                    color: '#f87171',
                  }}
                >
                  {i + 1}
                </span>
                <span className="text-white/65 text-sm leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={onKeep}
            className="w-full py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90 active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
              color: '#0d0c18',
            }}
          >
            Keep {fromPlan}
          </button>
          <button
            onClick={onDowngrade}
            className="w-full py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-white/[0.05] active:scale-[0.98]"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            Downgrade anyway
          </button>
        </div>
      </div>
    </div>
  );
}
