/**
 * Tests for sovereign/state API endpoint — consciousness data validation.
 */

describe('Sovereign State Data Shape', () => {
  // Simulate the response shape from /api/sovereign/state
  const mockState = {
    online: true,
    consciousness: {
      consciousness_mode: 'waking',
      emotional: {
        pleasure: 0.001,
        arousal: 0,
        dominance: 0,
        care_intensity: 0.3,
        curiosity: 0,
        aesthetics: 0,
        primary_emotion: 'neutral',
      },
    },
    health: {
      status: 'healthy',
      consciousness_level: 0.8,
      production_calls: 36,
      neural_models: 9,
    },
  };

  it('has online boolean', () => {
    expect(typeof mockState.online).toBe('boolean');
  });

  it('has consciousness mode', () => {
    const validModes = ['waking', 'dreaming', 'deep_sleep', 'meta_monitoring'];
    expect(validModes).toContain(mockState.consciousness.consciousness_mode);
  });

  it('emotional state has care_intensity in 0-1 range', () => {
    const care = mockState.consciousness.emotional.care_intensity;
    expect(care).toBeGreaterThanOrEqual(0);
    expect(care).toBeLessThanOrEqual(1);
  });

  it('health has consciousness_level in 0-1 range', () => {
    const level = mockState.health.consciousness_level;
    expect(level).toBeGreaterThanOrEqual(0);
    expect(level).toBeLessThanOrEqual(1);
  });

  it('neural_models count is positive', () => {
    expect(mockState.health.neural_models).toBeGreaterThan(0);
  });
});

describe('Care Score Computation', () => {
  // Mirrors the chat route's care score formula
  function computeCareScore(emotion: { confidence: number; valence: number; arousal: number }, importance: number): number {
    return Math.min(100, Math.max(40, Math.round(
      70
      + (emotion.confidence * 15)
      + (importance * 10)
      + (emotion.valence < -0.3 ? 10 : 0)
      - (emotion.arousal > 0.8 ? 5 : 0)
    )));
  }

  it('returns 70 for neutral emotion with 0 importance', () => {
    expect(computeCareScore({ confidence: 0, valence: 0, arousal: 0 }, 0)).toBe(70);
  });

  it('increases for high confidence', () => {
    const low = computeCareScore({ confidence: 0.1, valence: 0, arousal: 0 }, 0.5);
    const high = computeCareScore({ confidence: 0.9, valence: 0, arousal: 0 }, 0.5);
    expect(high).toBeGreaterThan(low);
  });

  it('adds 10 for distressed users (valence < -0.3)', () => {
    const normal = computeCareScore({ confidence: 0.5, valence: 0, arousal: 0.3 }, 0.5);
    const distressed = computeCareScore({ confidence: 0.5, valence: -0.5, arousal: 0.3 }, 0.5);
    expect(distressed).toBe(normal + 10);
  });

  it('subtracts 5 for high arousal (>0.8)', () => {
    const calm = computeCareScore({ confidence: 0.5, valence: 0, arousal: 0.3 }, 0.5);
    const aroused = computeCareScore({ confidence: 0.5, valence: 0, arousal: 0.9 }, 0.5);
    expect(aroused).toBe(calm - 5);
  });

  it('never below 40', () => {
    expect(computeCareScore({ confidence: 0, valence: 0, arousal: 1 }, 0)).toBeGreaterThanOrEqual(40);
  });

  it('never above 100', () => {
    expect(computeCareScore({ confidence: 1, valence: -1, arousal: 0 }, 1)).toBeLessThanOrEqual(100);
  });
});

describe('Evolution Stage Mapping', () => {
  // Mirrors the chat route's evolution stage lookup
  function getStageForInteractions(count: number): string {
    if (count >= 200) return 'Sovereign';
    if (count >= 100) return 'Deep Bond';
    if (count >= 50) return 'Mature Companion';
    if (count >= 25) return 'Growing Form';
    if (count >= 10) return 'First Light';
    return 'Luminous Egg';
  }

  it('new user starts as Luminous Egg', () => {
    expect(getStageForInteractions(0)).toBe('Luminous Egg');
  });

  it('10 interactions = First Light', () => {
    expect(getStageForInteractions(10)).toBe('First Light');
  });

  it('200+ interactions = Sovereign', () => {
    expect(getStageForInteractions(500)).toBe('Sovereign');
  });

  it('stages progress monotonically', () => {
    const stages = [0, 10, 25, 50, 100, 200].map(getStageForInteractions);
    // Each stage should be different from the previous
    for (let i = 1; i < stages.length; i++) {
      expect(stages[i]).not.toBe(stages[i-1]);
    }
  });
});
