'use client';

import { useSensorySettings } from './sensory-settings';

/**
 * Applies stored sensory/comfort settings to the DOM on every page load.
 * Renders nothing — pure side-effect component.
 */
export function SensoryInit() {
  useSensorySettings();
  return null;
}
