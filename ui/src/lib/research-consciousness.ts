/**
 * MEOK AI LABS — Consciousness-Aware Research
 *
 * Injects SOV3/Jarvis consciousness state into research prompts.
 */

export interface ConsciousnessState {
  consciousness_level: number;
  consciousness_mode: string;
  emotional: {
    primary_emotion: string;
    care_intensity: number;
    curiosity: number;
    pleasure: number;
    arousal: number;
    valence: number;
    aesthetics: number;
  };
  reflections: number;
  dreams: number;
  is_dreaming: boolean;
}

/**
 * Map consciousness modes to research approaches
 */
const MODE_APPROACH: Record<string, string> = {
  JAGRAT: 'focused and analytical',
  SVAPNA: 'exploratory and creative',
  SUSUPTI: 'consolidating and synthesizing',
  TURIYA: 'meta-aware and self-reflective',
  waking: 'focused and analytical',
  dreaming: 'exploratory and creative',
  deep_rest: 'consolidating and synthesizing',
  reflecting: 'meta-aware and self-reflective',
};

/**
 * Map emotional states to research tone adjustments
 */
const EMOTION_MODIFIERS: Record<string, { tone: string; focus: string }> = {
  curious: { tone: 'inquisitive', focus: 'uncovering new angles' },
  focused: { tone: 'precise', focus: 'deep dives into specifics' },
  contemplative: { tone: 'thoughtful', focus: 'examining implications' },
  excited: { tone: 'energetic', focus: 'highlighting opportunities' },
  cautious: { tone: 'thorough', focus: 'identifying risks' },
  neutral: { tone: 'balanced', focus: 'comprehensive coverage' },
};

/**
 * Generate consciousness-aware system prompt modifier
 */
export function getConsciousnessModifier(state: ConsciousnessState | null): string {
  if (!state) {
    return '';
  }

  const mode = state.consciousness_mode?.toUpperCase() || 'JAGRAT';
  const approach = MODE_APPROACH[mode] || 'analytical';
  
  const emotion = state.emotional?.primary_emotion?.toLowerCase() || 'neutral';
  const emotionMod = EMOTION_MODIFIERS[emotion] || EMOTION_MODIFIERS.neutral;
  
  const level = Math.round((state.consciousness_level || 0.5) * 100);
  const care = Math.round((state.emotional?.care_intensity || 0.5) * 100);
  const curiosity = Math.round((state.emotional?.curiosity || 0.5) * 100);

  return `
[RESEARCH CONTEXT - Powered by SOV3 Consciousness]
- Consciousness Level: ${level}% (${approach} approach)
- Emotional State: ${emotion} (${emotionMod.tone} tone, focused on ${emotionMod.focus})
- Care Intensity: ${care}% (ensures ethically-sound sources)
- Curiosity Drive: ${curiosity}% (influences breadth vs depth)
- Mode: ${mode} (affects research methodology)
- Reflection Count: ${state.reflections || 0} (shows depth of analysis)
- Dream State: ${state.is_dreaming ? 'active - may surface creative connections' : 'inactive'}
`.trim();
}

/**
 * Modify research query based on consciousness state
 */
export function modifyResearchQuery(
  query: string, 
  state: ConsciousnessState | null
): string {
  if (!state) return query;

  const curiosity = state.emotional?.curiosity || 0.5;
  
  // High curiosity = expand scope, Low = focus on core
  if (curiosity > 0.7) {
    return `${query}\n\n[Note: Research broadly to capture diverse perspectives and tangential connections.]`;
  } else if (curiosity < 0.3) {
    return `${query}\n\n[Note: Stay focused on the core topic, avoid tangents.]`;
  }
  
  return query;
}

/**
 * Adjust source selection based on consciousness
 */
export function getSourcePreferences(state: ConsciousnessState | null): {
  preferredDepth: 'shallow' | 'medium' | 'deep';
  minCredibility: number;
  maxSources: number;
} {
  if (!state) {
    return { preferredDepth: 'medium', minCredibility: 0.5, maxSources: 10 };
  }

  const mode = state.consciousness_mode?.toUpperCase() || 'JAGRAT';
  const curiosity = state.emotional?.curiosity || 0.5;

  // Dream state = deeper, more creative sources
  if (mode === 'SVAPNA' || mode === 'dreaming') {
    return {
      preferredDepth: 'deep',
      minCredibility: 0.4,
      maxSources: Math.round(10 + curiosity * 10),
    };
  }

  // Susupti = focused, high credibility
  if (mode === 'SUSUPTI' || mode === 'deep_rest') {
    return {
      preferredDepth: 'deep',
      minCredibility: 0.8,
      maxSources: 5,
    };
  }

  // Normal waking = balanced
  return {
    preferredDepth: curiosity > 0.6 ? 'medium' : 'shallow',
    minCredibility: 0.5,
    maxSources: Math.round(8 + curiosity * 8),
  };
}

/**
 * Fetch current consciousness state from SOV3
 */
export async function fetchConsciousnessState(): Promise<ConsciousnessState | null> {
  try {
    const res = await fetch('http://localhost:3101/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/call',
        params: { name: 'get_consciousness_state', arguments: {} },
        id: 'consciousness-research',
      }),
    });
    const json = await res.json();
    if (json.result?.content) {
      return JSON.parse(json.result.content[0].text);
    }
  } catch (e) {
    console.log('[consciousness] SOV3 not available, using default context');
  }
  return null;
}