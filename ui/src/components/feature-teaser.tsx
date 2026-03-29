'use client';

import { Lock } from 'lucide-react';

interface FeatureTeaserProps {
  isLocked: boolean;
  featureName: string;
  requiredPlan: string;
  children: React.ReactNode;
}

export function FeatureTeaser({
  isLocked,
  featureName,
  requiredPlan,
  children,
}: FeatureTeaserProps) {
  if (!isLocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative rounded-xl overflow-hidden">
      {/* Blurred content */}
      <div
        className="select-none pointer-events-none"
        style={{ filter: 'blur(6px)', opacity: 0.4 }}
        aria-hidden="true"
      >
        {children}
      </div>

      {/* Locked overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(13,12,24,0.75) 0%, rgba(19,18,31,0.85) 100%)',
          backdropFilter: 'blur(2px)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Lock icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{
            background: 'rgba(201,168,76,0.10)',
            border: '1px solid rgba(201,168,76,0.25)',
          }}
        >
          <Lock className="w-5 h-5" style={{ color: '#c9a84c' }} />
        </div>

        {/* Labels */}
        <div className="text-center px-4">
          <p className="text-white/90 text-sm font-semibold">{featureName}</p>
          <p className="text-white/35 text-xs mt-0.5">Available on {requiredPlan} and above</p>
        </div>

        {/* CTA */}
        <button
          className="text-xs font-bold px-5 py-2 rounded-lg transition-all hover:opacity-90 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
            color: '#0d0c18',
          }}
        >
          Unlock with {requiredPlan}
        </button>
      </div>
    </div>
  );
}
