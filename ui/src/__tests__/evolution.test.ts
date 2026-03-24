import {
  EVOLUTION_STAGES,
  getEvolutionStage,
  getProgressToNextStage,
  interactionsUntilNextStage,
  isFeatureUnlocked,
} from '@/lib/evolution'

// ── EVOLUTION_STAGES sanity checks ─────────────────────────────────────────

describe('EVOLUTION_STAGES data integrity', () => {
  it('has exactly 4 stages', () => {
    expect(EVOLUTION_STAGES).toHaveLength(4)
  })

  it('stage ids are 0–3 in order', () => {
    EVOLUTION_STAGES.forEach((stage, i) => {
      expect(stage.id).toBe(i)
    })
  })

  it('stage 0 starts at 0 interactions', () => {
    expect(EVOLUTION_STAGES[0].minInteractions).toBe(0)
  })

  it('stage 3 has null maxInteractions (no ceiling)', () => {
    expect(EVOLUTION_STAGES[3].maxInteractions).toBeNull()
  })

  it('only stage 2 and 3 unlock Guardian', () => {
    expect(EVOLUTION_STAGES[0].unlocksGuardian).toBe(false)
    expect(EVOLUTION_STAGES[1].unlocksGuardian).toBe(false)
    expect(EVOLUTION_STAGES[2].unlocksGuardian).toBe(true)
    expect(EVOLUTION_STAGES[3].unlocksGuardian).toBe(true)
  })

  it('only stage 3 unlocks Ralph Mode', () => {
    expect(EVOLUTION_STAGES[0].unlocksRalphMode).toBe(false)
    expect(EVOLUTION_STAGES[1].unlocksRalphMode).toBe(false)
    expect(EVOLUTION_STAGES[2].unlocksRalphMode).toBe(false)
    expect(EVOLUTION_STAGES[3].unlocksRalphMode).toBe(true)
  })
})

// ── getEvolutionStage ──────────────────────────────────────────────────────

describe('getEvolutionStage', () => {
  it('returns stage 0 for 0 interactions', () => {
    expect(getEvolutionStage(0).id).toBe(0)
  })

  it('returns stage 0 for negative interaction count (fallback)', () => {
    expect(getEvolutionStage(-5).id).toBe(0)
  })

  it('returns stage 0 at the top of its range (9 interactions)', () => {
    expect(getEvolutionStage(9).id).toBe(0)
  })

  it('returns stage 1 at exactly 10 interactions', () => {
    expect(getEvolutionStage(10).id).toBe(1)
  })

  it('returns stage 1 in the middle of its range (17 interactions)', () => {
    expect(getEvolutionStage(17).id).toBe(1)
  })

  it('returns stage 1 at the top of its range (24 interactions)', () => {
    expect(getEvolutionStage(24).id).toBe(1)
  })

  it('returns stage 2 at exactly 25 interactions', () => {
    expect(getEvolutionStage(25).id).toBe(2)
  })

  it('returns stage 2 at the top of its range (49 interactions)', () => {
    expect(getEvolutionStage(49).id).toBe(2)
  })

  it('returns stage 3 at exactly 50 interactions', () => {
    expect(getEvolutionStage(50).id).toBe(3)
  })

  it('returns stage 3 for very large interaction counts', () => {
    expect(getEvolutionStage(10_000).id).toBe(3)
  })

  it('returns the full stage object (not just the id)', () => {
    const stage = getEvolutionStage(25)
    expect(stage.name).toBe('Sacred Hatchling')
    expect(stage.unlocksGuardian).toBe(true)
  })
})

// ── getProgressToNextStage ────────────────────────────────────────────────

describe('getProgressToNextStage', () => {
  it('returns 0 at the start of stage 0', () => {
    expect(getProgressToNextStage(0)).toBe(0)
  })

  it('returns 50 at the midpoint of stage 0 (5/10 interactions)', () => {
    expect(getProgressToNextStage(5)).toBe(50)
  })

  it('returns 90 at 9 interactions through stage 0 (9/10)', () => {
    expect(getProgressToNextStage(9)).toBe(90)
  })

  it('returns 0 at the start of stage 1 (10 interactions)', () => {
    expect(getProgressToNextStage(10)).toBe(0)
  })

  it('returns 100 when already at max stage (stage 3)', () => {
    expect(getProgressToNextStage(50)).toBe(100)
    expect(getProgressToNextStage(9999)).toBe(100)
  })

  it('never exceeds 100', () => {
    for (const count of [0, 5, 12, 25, 49, 50, 500]) {
      expect(getProgressToNextStage(count)).toBeLessThanOrEqual(100)
    }
  })

  it('is never negative', () => {
    for (const count of [0, 1, 10, 25, 50]) {
      expect(getProgressToNextStage(count)).toBeGreaterThanOrEqual(0)
    }
  })
})

// ── interactionsUntilNextStage ────────────────────────────────────────────

describe('interactionsUntilNextStage', () => {
  it('returns 10 from 0 interactions (stage 0 → stage 1 at 10)', () => {
    expect(interactionsUntilNextStage(0)).toBe(10)
  })

  it('returns 1 at 9 interactions (one away from stage 1)', () => {
    expect(interactionsUntilNextStage(9)).toBe(1)
  })

  it('returns 15 at 10 interactions (stage 1 → stage 2 at 25)', () => {
    expect(interactionsUntilNextStage(10)).toBe(15)
  })

  it('returns 0 when already at max stage', () => {
    expect(interactionsUntilNextStage(50)).toBe(0)
    expect(interactionsUntilNextStage(1000)).toBe(0)
  })

  it('is never negative', () => {
    for (const count of [0, 9, 10, 24, 25, 49, 50, 51]) {
      expect(interactionsUntilNextStage(count)).toBeGreaterThanOrEqual(0)
    }
  })
})

// ── isFeatureUnlocked ─────────────────────────────────────────────────────

describe('isFeatureUnlocked', () => {
  describe('guardian', () => {
    it('is locked before stage 2 (0–24 interactions)', () => {
      expect(isFeatureUnlocked('guardian', 0)).toBe(false)
      expect(isFeatureUnlocked('guardian', 24)).toBe(false)
    })

    it('is unlocked at stage 2 (25 interactions)', () => {
      expect(isFeatureUnlocked('guardian', 25)).toBe(true)
    })

    it('remains unlocked at stage 3', () => {
      expect(isFeatureUnlocked('guardian', 50)).toBe(true)
      expect(isFeatureUnlocked('guardian', 999)).toBe(true)
    })
  })

  describe('ralph_mode', () => {
    it('is locked before stage 3 (0–49 interactions)', () => {
      expect(isFeatureUnlocked('ralph_mode', 0)).toBe(false)
      expect(isFeatureUnlocked('ralph_mode', 49)).toBe(false)
    })

    it('is unlocked at stage 3 (50 interactions)', () => {
      expect(isFeatureUnlocked('ralph_mode', 50)).toBe(true)
    })

    it('remains unlocked at very high counts', () => {
      expect(isFeatureUnlocked('ralph_mode', 10_000)).toBe(true)
    })
  })
})
