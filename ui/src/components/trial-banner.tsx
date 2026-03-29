'use client';

import { useState, useEffect } from 'react';
import { X, Zap } from 'lucide-react';

const LS_KEY = 'meok_trial_banner_dismissed';

interface TrialBannerProps {
  daysLeft: number;
  totalDays: number;
}

export function TrialBanner({ daysLeft, totalDays }: TrialBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(LS_KEY) === 'true') {
      setDismissed(true);
    }
    setMounted(true);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    localStorage.setItem(LS_KEY, 'true');
  };

  if (!mounted || dismissed) return null;

  const usedDays = totalDays - daysLeft;
  const pct = Math.min(100, Math.round((usedDays / totalDays) * 100));
  const isUrgent = daysLeft <= 3;

  return (
    <div
      role="status"
      aria-live="polite"
      className="w-full rounded-xl px-5 py-3.5 mb-4"
      style={{
        background: 'linear-gradient(135deg, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0.04) 100%)',
        border: '1px solid rgba(201,168,76,0.25)',
      }}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left: icon + text + progress */}
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: 'rgba(201,168,76,0.15)',
              border: '1px solid rgba(201,168,76,0.25)',
            }}
          >
            <Zap className="w-4 h-4" style={{ color: '#c9a84c' }} />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-white/90">
              {isUrgent
                ? `Only ${daysLeft} day${daysLeft === 1 ? '' : 's'} left in your trial`
                : `${daysLeft} day${daysLeft === 1 ? '' : 's'} left in your trial`}
            </p>
            <div className="flex items-center gap-2 mt-1.5">
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  width: '120px',
                }}
              >
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${pct}%`,
                    background: isUrgent
                      ? 'linear-gradient(90deg, #c9a84c, #f0d878)'
                      : 'linear-gradient(90deg, rgba(201,168,76,0.6), #c9a84c)',
                  }}
                />
              </div>
              <span className="text-white/30 text-xs shrink-0">{pct}% used</span>
            </div>
          </div>
        </div>

        {/* Right: CTA + dismiss */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            className="text-xs font-bold px-4 py-1.5 rounded-lg transition-all hover:opacity-90 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
              color: '#0d0c18',
            }}
          >
            Upgrade now
          </button>
          <button
            onClick={dismiss}
            aria-label="Dismiss trial banner"
            className="text-white/20 hover:text-white/50 transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
