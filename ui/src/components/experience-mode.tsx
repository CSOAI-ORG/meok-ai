'use client';

import { useState, useEffect, createContext, useContext } from 'react';

/**
 * Experience Mode Selector — 3 modes affecting the entire UI.
 *
 * Simple:   Large text, plain language, max guidance, no jargon
 * Standard: Default experience
 * Power:    Sovereign Display on, API refs, technical depth
 *
 * Persisted in localStorage. Respects neurodivergent-first design.
 */

export type ExperienceMode = 'simple' | 'standard' | 'power';

interface ExperienceModeContext {
  mode: ExperienceMode;
  setMode: (mode: ExperienceMode) => void;
}

const ExperienceModeCtx = createContext<ExperienceModeContext>({
  mode: 'standard',
  setMode: () => {},
});

export function useExperienceMode() {
  return useContext(ExperienceModeCtx);
}

export function ExperienceModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ExperienceMode>('standard');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('meok-experience-mode') as ExperienceMode | null;
    if (saved && ['simple', 'standard', 'power'].includes(saved)) {
      setModeState(saved);
    }
    setMounted(true);
  }, []);

  const setMode = (m: ExperienceMode) => {
    setModeState(m);
    localStorage.setItem('meok-experience-mode', m);
  };

  if (!mounted) return <>{children}</>;

  return (
    <ExperienceModeCtx.Provider value={{ mode, setMode }}>
      {children}
    </ExperienceModeCtx.Provider>
  );
}

/** Inline mode selector widget — compact pill toggle. */
export function ExperienceModeSelector() {
  const { mode, setMode } = useExperienceMode();

  const modes: { value: ExperienceMode; label: string; desc: string }[] = [
    { value: 'simple', label: 'Simple', desc: 'Larger text, plain language' },
    { value: 'standard', label: 'Standard', desc: 'Default experience' },
    { value: 'power', label: 'Power', desc: 'Technical detail, Sovereign Display' },
  ];

  return (
    <div className="flex items-center gap-1 p-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
      {modes.map((m) => (
        <button type="button"
          key={m.value}
          onClick={() => setMode(m.value)}
          className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
          style={{
            background: mode === m.value ? '#c9a84c' : 'transparent',
            color: mode === m.value ? '#1a1a2e' : 'rgba(255,255,255,0.4)',
          }}
          title={m.desc}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
