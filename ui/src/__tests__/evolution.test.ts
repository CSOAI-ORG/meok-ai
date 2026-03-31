import {
  EVOLUTION_STAGES,
  getEvolutionStage,
  getProgressToNextStage,
  interactionsUntilNextStage,
  isFeatureUnlocked,
} from '@/lib/evolution'

// ── EVOLUTION_STAGES sanity checks ─────────────────────────────────────────

describe('EVOLUTION_STAGES data integrity', () => {
  it('has exactly 6 stages', () => {
    expect(EVOLUTION_STAGES).toHaveLength(6)
  })

  it('stage ids are 0–5 in order', () => {
    EVOLUTION_STAGES.forEach((stage, i) => {
      expect(stage.id).toBe(i)
    })
  })

  it('stage 0 starts at 0 interactions', () => {
    expect(EVOLUTION_STAGES[0].minInteractions).toBe(0)
  })

  it('last stage has null maxInteractions (no ceiling)', () => {
    expect(EVOLUTION_STAGES[5].maxInteractions).toBeNull()
  })

  it('Guardian unlocks at stage 2', () => {
    expect(EVOLUTION_STAGES[0].unlocksGuardian).toBe(false)
    expect(EVOLUTION_STAGES[1].unlocksGuardian).toBe(false)
    expect(EVOLUTION_STAGES[2].unlocksGuardian).toBe(true)
    expect(EVOLUTION_STAGES[3].unlocksGuardian).toBe(true)
    expect(EVOLUTION_STAGES[4].unlocksGuardian).toBe(true)
    expect(EVOLUTION_STAGES[5].unlocksGuardian).toBe(true)
  })

  it('Ralph Mode unlocks at stage 4', () => {
    expect(EVOLUTION_STAGES[0].unlocksRalphMode).toBe(false)
    expect(EVOLUTION_STAGES[1].unlocksRalphMode).toBe(false)
    expect(EVOLUTION_STAGES[2].unlocksRalphMode).toBe(false)
    expect(EVOLUTION_STAGES[3].unlocksRalphMode).toBe(false)
    expect(EVOLUTION_STAGES[4].unlocksRalphMode).toBe(true)
    expect(EVOLUTION_STAGES[5].unlocksRalphMode).toBe(true)
  })

  it('every stage has a promptModifier', () => {
    EVOLUTION_STAGES.forEach(stage => {
      expect(stage.promptModifier).toBeDefined()
      expect(typeof stage.promptModifier).toBe('string')
      expect(stage.promptModifier.length).toBeGreaterThan(10)
    })
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

  it('returns stage 2 at exactly 25 interactions', () => {
    expect(getEvolutionStage(25).id).toBe(2)
  })

  it('returns stage 3 at exactly 50 interactions', () => {
    expect(getEvolutionStage(50).id).toBe(3)
  })

  it('returns stage 4 at exactly 100 interactions', () => {
    expect(getEvolutionStage(100).id).toBe(4)
  })

  it('returns stage 5 at exactly 200 interactions', () => {
    expect(getEvolutionStage(200).id).toBe(5)
  })

  it('returns stage 5 for very large interaction counts', () => {
    expect(getEvolutionStage(10_000).id).toBe(5)
  })

  it('returns the full stage object with name and unlock flags', () => {
    const stage = getEvolutionStage(25)
    expect(stage.name).toBeDefined()
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

  it('returns 0 at the start of stage 1 (10 interactions)', () => {
    expect(getProgressToNextStage(10)).toBe(0)
  })

  it('returns 100 when already at max stage (stage 5)', () => {
    expect(getProgressToNextStage(200)).toBe(100)
    expect(getProgressToNextStage(9999)).toBe(100)
  })

  it('never exceeds 100', () => {
    for (const count of [0, 5, 12, 25, 49, 50, 100, 200, 500]) {
      expect(getProgressToNextStage(count)).toBeLessThanOrEqual(100)
    }
  })

  it('is never negative', () => {
    for (const count of [0, 1, 10, 25, 50, 100, 200]) {
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
    expect(interactionsUntilNextStage(200)).toBe(0)
    expect(interactionsUntilNextStage(1000)).toBe(0)
  })

  it('is never negative', () => {
    for (const count of [0, 9, 10, 24, 25, 49, 50, 99, 100, 199, 200, 201]) {
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

    it('remains unlocked at all higher stages', () => {
      expect(isFeatureUnlocked('guardian', 50)).toBe(true)
      expect(isFeatureUnlocked('guardian', 200)).toBe(true)
    })
  })

  describe('ralph_mode', () => {
    it('is locked before stage 4 (0–99 interactions)', () => {
      expect(isFeatureUnlocked('ralph_mode', 0)).toBe(false)
      expect(isFeatureUnlocked('ralph_mode', 99)).toBe(false)
    })

    it('is unlocked at stage 4 (100 interactions)', () => {
      expect(isFeatureUnlocked('ralph_mode', 100)).toBe(true)
    })

    it('remains unlocked at very high counts', () => {
      expect(isFeatureUnlocked('ralph_mode', 10_000)).toBe(true)
    })
  })
})
