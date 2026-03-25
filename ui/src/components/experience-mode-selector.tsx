'use client';

import { useState, useEffect } from 'react';
import {
  type ExperienceMode,
  getModeConfig,
  getStoredMode,
  setStoredMode,
} from '@/lib/experience-mode';

const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const BORDER = 'rgba(255,255,255,0.07)';
const GOLD = '#c9a84c';

interface ModeOption {
  value: ExperienceMode;
  label: string;
  description: string;
  icon: string;
}

const MODE_OPTIONS: ModeOption[] = [
  {
    value: 'simple',
    label: 'Simple',
    description: 'Larger text, plain language, maximum guidance. Great for relaxed browsing.',
    icon: '\u2728', // sparkles
  },
  {
    value: 'standard',
    label: 'Standard',
    description: 'Balanced experience with clear layout and moderate detail.',
    icon: '\u2B50', // star
  },
  {
    value: 'power',
    label: 'Power',
    description: 'Sovereign Display, keyboard shortcuts, technical depth, compact layout.',
    icon: '\u26A1', // zap
  },
];

export function ExperienceModeSelector() {
  const [current, setCurrent] = useState<ExperienceMode>('standard');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCurrent(getStoredMode());
    setMounted(true);
  }, []);

  const handleSelect = (mode: ExperienceMode) => {
    setCurrent(mode);
    setStoredMode(mode);
    // Dispatch a custom event so other components can react
    window.dispatchEvent(new CustomEvent('meok-mode-change', { detail: mode }));
  };

  if (!mounted) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h3
        style={{
          margin: 0,
          fontSize: 14,
          fontWeight: 600,
          color: 'rgba(255,255,255,0.6)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        Experience Mode
      </h3>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {MODE_OPTIONS.map((opt) => {
          const isActive = current === opt.value;
          const config = getModeConfig(opt.value);

          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              aria-pressed={isActive}
              style={{
                flex: '1 1 180px',
                padding: '16px 14px',
                background: isActive ? `${GOLD}12` : SURFACE,
                border: `1.5px solid ${isActive ? GOLD : BORDER}`,
                borderRadius: 12,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                outline: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 18 }}>{opt.icon}</span>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: isActive ? GOLD : 'rgba(255,255,255,0.85)',
                  }}
                >
                  {opt.label}
                </span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                {opt.description}
              </p>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.3)',
                }}
              >
                {config.fontSize}px &middot; guidance: {config.guidanceLevel}
                {config.reducedAnimations ? ' \u00B7 reduced motion' : ''}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
