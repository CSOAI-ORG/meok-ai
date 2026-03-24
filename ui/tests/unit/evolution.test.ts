import { describe, it, expect } from '@jest/globals'
import {
  getEvolutionStage,
  getProgressToNextStage,
  interactionsUntilNextStage,
  isFeatureUnlocked,
  EVOLUTION_STAGES,
} from '../../src/lib/evolution'

describe('EVOLUTION_STAGES', () => {
  it('has exactly 4 stages', () => {
    expect(EVOLUTION_STAGES).toHaveLength(4)
  })

  it('stages ordered by minInteractions ascending', () => {
    const mins = EVOLUTION_STAGES.map((s) => s.minInteractions)
    expect(mins).toEqual([...mins].sort((a, b) => a - b))
  })

  it('stage IDs are 0,1,2,3', () => {
    const ids = EVOLUTION_STAGES.map((s) => s.id)
    expect(ids).toEqual([0, 1, 2, 3])
  })
})

describe('getEvolutionStage', () => {
  it('returns stage 0 for 0 interactions', () => {
    expect(getEvolutionStage(0).id).toBe(0)
  })

  it('returns stage 0 for 9 interactions (boundary)', () => {
    expect(getEvolutionStage(9).id).toBe(0)
  })

  it('returns stage 1 for exactly 10 interactions', () => {
    expect(getEvolutionStage(10).id).toBe(1)
  })

  it('returns stage 2 for exactly 25 interactions', () => {
    expect(getEvolutionStage(25).id).toBe(2)
  })

  it('returns stage 3 for exactly 50 interactions', () => {
    expect(getEvolutionStage(50).id).toBe(3)
  })

  it('returns stage 3 for 9999 interactions (max)', () => {
    expect(getEvolutionStage(9999).id).toBe(3)
  })

  it('returns stage 0 for -1 interactions (guard)', () => {
    // Negative counts fall through the loop and default to stage 0
    expect(getEvolutionStage(-1).id).toBe(0)
  })
})

describe('getProgressToNextStage', () => {
  it('returns 0 for 0 interactions (stage 0 start)', () => {
    // Stage 0: 0 to 10 → (0 - 0) / (10 - 0) * 100 = 0
    expect(getProgressToNextStage(0)).toBe(0)
  })

  it('returns 50 for 5 interactions (stage 0 midpoint)', () => {
    // (5 - 0) / (10 - 0) * 100 = 50
    expect(getProgressToNextStage(5)).toBe(50)
  })

  it('returns 90 for 9 interactions (stage 0 near end)', () => {
    // (9 - 0) / (10 - 0) * 100 = 90
    expect(getProgressToNextStage(9)).toBe(90)
  })

  it('returns 100 for 50+ interactions (max stage)', () => {
    expect(getProgressToNextStage(50)).toBe(100)
    expect(getProgressToNextStage(1000)).toBe(100)
  })
})

describe('interactionsUntilNextStage', () => {
  it('returns 10 for 0 interactions', () => {
    // Stage 0: next stage starts at 10; 10 - 0 = 10
    expect(interactionsUntilNextStage(0)).toBe(10)
  })

  it('returns 3 for 7 interactions', () => {
    // Stage 0: next stage starts at 10; 10 - 7 = 3
    expect(interactionsUntilNextStage(7)).toBe(3)
  })

  it('returns 0 for 50 interactions (max stage)', () => {
    expect(interactionsUntilNextStage(50)).toBe(0)
  })
})

describe('isFeatureUnlocked - guardian', () => {
  it('locked at 0 interactions', () => {
    expect(isFeatureUnlocked('guardian', 0)).toBe(false)
  })

  it('locked at 24 interactions', () => {
    expect(isFeatureUnlocked('guardian', 24)).toBe(false)
  })

  it('unlocked at 25 interactions', () => {
    expect(isFeatureUnlocked('guardian', 25)).toBe(true)
  })

  it('unlocked at 50 interactions', () => {
    expect(isFeatureUnlocked('guardian', 50)).toBe(true)
  })
})

describe('isFeatureUnlocked - ralph_mode', () => {
  it('locked at 0 interactions', () => {
    expect(isFeatureUnlocked('ralph_mode', 0)).toBe(false)
  })

  it('locked at 49 interactions', () => {
    expect(isFeatureUnlocked('ralph_mode', 49)).toBe(false)
  })

  it('unlocked at 50 interactions', () => {
    expect(isFeatureUnlocked('ralph_mode', 50)).toBe(true)
  })
})
