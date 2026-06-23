'use client';

import { useState, useEffect, useCallback } from 'react';

const GOLD = '#c9a84c';
const SURFACE = '#13121f';
const BORDER = 'rgba(255,255,255,0.07)';

const STORAGE_KEY = 'meok-sensory-settings';

export interface SensorySettings {
  reduceAnimations: boolean;
  highContrast: boolean;
  fontSize: number;         // 14-24
  dyslexiaFont: boolean;
}

const DEFAULTS: SensorySettings = {
  reduceAnimations: false,
  highContrast: false,
  fontSize: 16,
  dyslexiaFont: false,
};

function loadSettings(): SensorySettings {
  if (typeof window === 'undefined') return DEFAULTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULTS;
  }
}

function saveSettings(s: SensorySettings): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

/** Apply settings to the DOM — CSS custom property + body classes. */
function applySettingsToDOM(s: SensorySettings): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const body = document.body;

  // Font size via CSS custom property
  root.style.setProperty('--meok-font-size', `${s.fontSize}px`);

  // Reduce animations: add class that CSS can target, also set media-query override
  if (s.reduceAnimations) {
    body.classList.add('reduce-motion');
  } else {
    body.classList.remove('reduce-motion');
  }

  // High contrast
  if (s.highContrast) {
    body.classList.add('high-contrast');
  } else {
    body.classList.remove('high-contrast');
  }

  // Dyslexia font
  if (s.dyslexiaFont) {
    body.classList.add('dyslexia-font');
  } else {
    body.classList.remove('dyslexia-font');
  }
}

/** Hook to read sensory settings from any component. Also applies them to DOM. */
export function useSensorySettings(): SensorySettings {
  const [settings, setSettings] = useState<SensorySettings>(DEFAULTS);

  useEffect(() => {
    const loaded = loadSettings();
    setSettings(loaded);
    applySettingsToDOM(loaded);

    // Listen for changes from the settings panel
    function handleChange(e: Event) {
      const detail = (e as CustomEvent<SensorySettings>).detail;
      setSettings(detail);
      applySettingsToDOM(detail);
    }
    window.addEventListener('meok-sensory-change', handleChange);
    return () => window.removeEventListener('meok-sensory-change', handleChange);
  }, []);

  return settings;
}

/** Full sensory settings panel component. */
export function SensorySettingsPanel() {
  const [settings, setSettings] = useState<SensorySettings>(DEFAULTS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const loaded = loadSettings();
    setSettings(loaded);
    applySettingsToDOM(loaded);
    setMounted(true);
  }, []);

  const update = useCallback((patch: Partial<SensorySettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      saveSettings(next);
      applySettingsToDOM(next);
      window.dispatchEvent(new CustomEvent('meok-sensory-change', { detail: next }));
      return next;
    });
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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
        Sensory Settings
      </h3>

      {/* Toggle: Reduce animations */}
      <ToggleRow
        label="Reduce animations"
        description="Minimise motion for comfort"
        checked={settings.reduceAnimations}
        onChange={(v) => update({ reduceAnimations: v })}
      />

      {/* Toggle: High contrast */}
      <ToggleRow
        label="High contrast"
        description="Increase text and border contrast"
        checked={settings.highContrast}
        onChange={(v) => update({ highContrast: v })}
      />

      {/* Toggle: Dyslexia-friendly font */}
      <ToggleRow
        label="Dyslexia-friendly font"
        description="Switch to OpenDyslexic typeface"
        checked={settings.dyslexiaFont}
        onChange={(v) => update({ dyslexiaFont: v })}
      />

      {/* Slider: Font size */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          padding: '12px 14px',
          background: SURFACE,
          border: `1px solid ${BORDER}`,
          borderRadius: 10,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
            Font size
          </span>
          <span style={{ fontSize: 12, color: GOLD, fontWeight: 600 }}>
            {settings.fontSize}px
          </span>
        </div>
        <input
          type="range"
          min={14}
          max={24}
          step={1}
          value={settings.fontSize}
          onChange={(e) => update({ fontSize: Number(e.target.value) })}
          aria-label="Font size"
          style={{
            width: '100%',
            accentColor: GOLD,
            cursor: 'pointer',
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 10,
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          <span>14px</span>
          <span>24px</span>
        </div>
        <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
          {[14, 16, 18, 20, 24].map((size) => (
            <button type="button"
              key={size}
              onClick={() => update({ fontSize: size })}
              aria-label={`Set font size to ${size}px`}
              style={{
                flex: 1,
                padding: '4px 0',
                fontSize: 10,
                fontWeight: settings.fontSize === size ? 700 : 500,
                background: settings.fontSize === size ? `${GOLD}25` : 'rgba(255,255,255,0.04)',
                color: settings.fontSize === size ? GOLD : 'rgba(255,255,255,0.4)',
                border: `1px solid ${settings.fontSize === size ? `${GOLD}40` : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 6,
                cursor: 'pointer',
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Internal toggle component                                         */
/* ------------------------------------------------------------------ */

function ToggleRow({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 14px',
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        cursor: 'pointer',
        outline: 'none',
        width: '100%',
        textAlign: 'left',
      }}
    >
      <div>
        <div style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
          {label}
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>
          {description}
        </div>
      </div>

      {/* Toggle pill */}
      <div
        style={{
          width: 40,
          height: 22,
          borderRadius: 11,
          background: checked ? GOLD : 'rgba(255,255,255,0.12)',
          position: 'relative',
          transition: 'background 0.2s ease',
          flexShrink: 0,
          marginLeft: 12,
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: '#fff',
            position: 'absolute',
            top: 3,
            left: checked ? 21 : 3,
            transition: 'left 0.2s ease',
          }}
        />
      </div>
    </button>
  );
}
