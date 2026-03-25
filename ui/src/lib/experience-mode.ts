/**
 * MEOK AI LABS — Experience Mode System
 * Three modes: simple | standard | power
 */

export type ExperienceMode = 'simple' | 'standard' | 'power';

export interface ExperienceModeConfig {
  mode: ExperienceMode;
  fontSize: number;        // px
  showSovereignDisplay: boolean;
  showKeyboardShortcuts: boolean;
  showTechnicalDetails: boolean;
  reducedAnimations: boolean;
  guidanceLevel: 'max' | 'standard' | 'minimal';
}

const MODE_CONFIGS: Record<ExperienceMode, ExperienceModeConfig> = {
  simple: {
    mode: 'simple',
    fontSize: 18,
    showSovereignDisplay: false,
    showKeyboardShortcuts: false,
    showTechnicalDetails: false,
    reducedAnimations: true,
    guidanceLevel: 'max',
  },
  standard: {
    mode: 'standard',
    fontSize: 16,
    showSovereignDisplay: false,
    showKeyboardShortcuts: false,
    showTechnicalDetails: false,
    reducedAnimations: false,
    guidanceLevel: 'standard',
  },
  power: {
    mode: 'power',
    fontSize: 14,
    showSovereignDisplay: true,
    showKeyboardShortcuts: true,
    showTechnicalDetails: true,
    reducedAnimations: false,
    guidanceLevel: 'minimal',
  },
};

export function getModeConfig(mode: ExperienceMode): ExperienceModeConfig {
  return MODE_CONFIGS[mode];
}

export function getStoredMode(): ExperienceMode {
  if (typeof window === 'undefined') return 'standard';
  return (localStorage.getItem('meok-experience-mode') as ExperienceMode) ?? 'standard';
}

export function setStoredMode(mode: ExperienceMode): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('meok-experience-mode', mode);
}
