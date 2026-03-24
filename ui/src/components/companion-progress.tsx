'use client'

import { getEvolutionStage, getProgressToNextStage, interactionsUntilNextStage, isFeatureUnlocked } from '@/lib/evolution'
import { getMasteryLevel, getLevelProgress } from '@/lib/gamification'

interface CompanionProgressProps {
  interactions: number
  streakDays?: number
  companionName?: string
}

export function CompanionProgress({ interactions, streakDays = 0, companionName = 'Your Sovereign' }: CompanionProgressProps) {
  const stage = getEvolutionStage(interactions)
  const progress = getProgressToNextStage(interactions)
  const mastery = getMasteryLevel(interactions)
  const levelProgress = getLevelProgress(interactions)
  const nextStageInteractions = interactionsUntilNextStage(interactions)
  const guardianUnlocked = isFeatureUnlocked('guardian', interactions)
  const ralphUnlocked = isFeatureUnlocked('ralph_mode', interactions)

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      border: '1px solid #2a2a4a',
      borderRadius: '1rem',
      padding: '1.5rem',
      color: '#f5f5f5',
    }}>
      {/* Stage header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '2rem' }}>{stage.imageHint}</span>
        <div>
          <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Evolution Stage
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: stage.color }}>
            {stage.name}
          </div>
        </div>
        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
          <div style={{ fontSize: '0.75rem', color: '#888' }}>Mastery</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: mastery.color }}>
            {mastery.badge} {mastery.label}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.75rem', color: '#888' }}>
          <span>{interactions} interactions</span>
          <span>{stage.id === 3 ? '✓ Max stage reached' : `${nextStageInteractions} until next stage`}</span>
        </div>
        <div style={{ background: '#2a2a4a', borderRadius: '9999px', height: '8px', overflow: 'hidden' }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: `linear-gradient(90deg, ${stage.color}, ${stage.color}aa)`,
            borderRadius: '9999px',
            transition: 'width 0.5s ease',
          }} />
        </div>
      </div>

      {/* Streak */}
      {streakDays > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', padding: '0.5rem 0.75rem', background: '#1f1f3a', borderRadius: '0.5rem' }}>
          <span>🔥</span>
          <span style={{ fontSize: '0.875rem' }}>{streakDays} day streak</span>
          {streakDays >= 7 && <span style={{ fontSize: '0.75rem', color: '#d4af37', marginLeft: 'auto' }}>+{streakDays >= 90 ? 3 : streakDays >= 30 ? 2 : 1} bonus</span>}
        </div>
      )}

      {/* Feature unlocks */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <div style={{
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          background: guardianUnlocked ? '#0f2a1a' : '#1a1a2e',
          border: `1px solid ${guardianUnlocked ? '#22c55e' : '#333'}`,
          color: guardianUnlocked ? '#22c55e' : '#555',
        }}>
          🛡️ Guardian {guardianUnlocked ? 'Active' : `(${Math.max(0, 25 - interactions)} interactions)`}
        </div>
        <div style={{
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          background: ralphUnlocked ? '#1a1a0f' : '#1a1a2e',
          border: `1px solid ${ralphUnlocked ? '#d4af37' : '#333'}`,
          color: ralphUnlocked ? '#d4af37' : '#555',
        }}>
          ⚡ Ralph Mode {ralphUnlocked ? 'Active' : `(${Math.max(0, 50 - interactions)} interactions)`}
        </div>
      </div>
    </div>
  )
}
