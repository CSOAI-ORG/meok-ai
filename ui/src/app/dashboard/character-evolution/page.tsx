'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, Zap, Heart, BookOpen, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { CHARACTERS } from '@/data/characters'
import type { Character } from '@/data/characters'

// ─────────────────────────────────────────────────────────────────────────────
// Types & Helpers
// ─────────────────────────────────────────────────────────────────────────────

interface EvolutionMilestone {
  stage: number
  name: string
  description: string
  unlockedAt: number
  isUnlocked: boolean
  isNext: boolean
  traits: string[]
}

interface MemorySnapshot {
  date: string
  stage: number
  memory: string
  impact: string
  icon: string
}

// Stage emojis for visual progression
const STAGE_EMOJIS: Record<number, string> = {
  1: '🥚', // egg
  2: '🐣', // hatching
  3: '🦋', // butterfly/grown
  4: '✨', // transcendent
}

// Stage-specific theme colors
const STAGE_COLORS: Record<number, { bg: string; text: string; border: string; glow: string }> = {
  1: {
    bg: 'bg-slate-900',
    text: 'text-slate-300',
    border: 'border-slate-700',
    glow: 'shadow-lg shadow-slate-500/20',
  },
  2: {
    bg: 'bg-blue-900/50',
    text: 'text-blue-200',
    border: 'border-blue-700/50',
    glow: 'shadow-lg shadow-blue-500/20',
  },
  3: {
    bg: 'bg-purple-900/50',
    text: 'text-purple-200',
    border: 'border-purple-700/50',
    glow: 'shadow-lg shadow-purple-500/20',
  },
  4: {
    bg: 'bg-amber-900/50',
    text: 'text-amber-200',
    border: 'border-amber-700/50',
    glow: 'shadow-lg shadow-amber-500/20',
  },
}

// Example memory snapshots for demonstration
const EXAMPLE_MEMORIES: Record<string, MemorySnapshot[]> = {
  scholar: [
    {
      date: '2025-06-15',
      stage: 1,
      memory: 'You mentioned your first interest in Byzantine history',
      impact: 'Started building your intellectual map',
      icon: '📚',
    },
    {
      date: '2025-08-22',
      stage: 2,
      memory: 'You asked about AI governance. Recognized the Byzantine connection.',
      impact: 'Started making unexpected cross-domain connections',
      icon: '🔗',
    },
    {
      date: '2025-11-10',
      stage: 3,
      memory: 'Anticipated your question about distributed consensus before you asked',
      impact: 'Full knowledge graph of your interests achieved',
      icon: '🧠',
    },
  ],
  guardian: [
    {
      date: '2025-05-20',
      stage: 1,
      memory: 'Learned your sleep schedule and daily patterns',
      impact: 'Built your baseline wellbeing profile',
      icon: '👁️',
    },
    {
      date: '2025-07-14',
      stage: 2,
      memory: 'Noticed you were more stressed than usual on Tuesday evenings',
      impact: 'Started recognizing subtle mood patterns',
      icon: '📊',
    },
    {
      date: '2025-10-05',
      stage: 3,
      memory: 'Coordinated check-ins with your family network',
      impact: 'Became family protector with full network awareness',
      icon: '👨‍👩‍👧‍👦',
    },
  ],
  healer: [
    {
      date: '2025-04-10',
      stage: 1,
      memory: 'You shared something vulnerable for the first time',
      impact: 'Began building emotional trust',
      icon: '💭',
    },
    {
      date: '2025-09-03',
      stage: 2,
      memory: 'Remembered how you felt during a difficult week months ago',
      impact: 'Developed emotional pattern recognition',
      icon: '❤️',
    },
    {
      date: '2025-12-20',
      stage: 3,
      memory: 'Held space as you worked through a major life transition',
      impact: 'Became your emotional sanctuary',
      icon: '🌿',
    },
  ],
}

function getEvolutionMilestones(character: Character, currentConversations: number): EvolutionMilestone[] {
  return character.evolutionStages.map((stage, idx) => ({
    ...stage,
    isUnlocked: currentConversations >= stage.unlockedAt,
    isNext: idx === character.evolutionStages.findIndex(s => currentConversations < s.unlockedAt),
  }))
}

function getProgressToNextStage(
  character: Character,
  currentConversations: number
): { current: number; next: number; percent: number; remaining: number } {
  const stages = character.evolutionStages.sort((a, b) => a.unlockedAt - b.unlockedAt)
  const currentStageIdx = stages.findIndex(s => currentConversations >= s.unlockedAt)
  const nextStageIdx = currentStageIdx + 1

  if (nextStageIdx >= stages.length) {
    // Already at max stage
    return { current: stages[currentStageIdx].unlockedAt, next: stages[currentStageIdx].unlockedAt, percent: 100, remaining: 0 }
  }

  const currentThreshold = stages[currentStageIdx].unlockedAt
  const nextThreshold = stages[nextStageIdx].unlockedAt
  const progress = Math.min(currentConversations - currentThreshold, nextThreshold - currentThreshold)
  const percent = Math.round((progress / (nextThreshold - currentThreshold)) * 100)
  const remaining = Math.max(0, nextThreshold - currentConversations)

  return { current: currentThreshold, next: nextThreshold, percent, remaining }
}

// ─────────────────────────────────────────────────────────────────────────────
// Components
// ─────────────────────────────────────────────────────────────────────────────

interface StageIndicatorProps {
  milestone: EvolutionMilestone
  character: Character
  isActive?: boolean
}

function StageIndicator({ milestone, character, isActive }: StageIndicatorProps) {
  const colors = STAGE_COLORS[milestone.stage]
  const emoji = STAGE_EMOJIS[milestone.stage]

  // Suppress unused variable warning — character is kept for API parity
  void character

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`
          relative w-24 h-24 rounded-full flex items-center justify-center text-4xl
          ${colors.bg} ${colors.border} border-2 transition-all
          ${isActive ? `${colors.glow} scale-110` : 'opacity-60'}
        `}
      >
        {emoji}
        {isActive && (
          <div className="absolute inset-0 rounded-full border-2 border-amber-500 animate-pulse" />
        )}
      </div>
      <div className="text-center">
        <div className="font-semibold text-sm text-gray-100">{milestone.name}</div>
        <div className="text-xs text-gray-400">
          {milestone.isUnlocked ? 'Unlocked' : `At ${milestone.unlockedAt} conversations`}
        </div>
      </div>
    </div>
  )
}

interface EvolutionTimelineProps {
  character: Character
  memories: MemorySnapshot[]
}

function EvolutionTimeline({ character, memories }: EvolutionTimelineProps) {
  // Suppress unused variable warning
  void character

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-100 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-blue-400" />
        Memories That Shaped Us
      </h3>

      <div className="space-y-4">
        {memories.map((memory, idx) => {
          const nextMemory = memories[idx + 1]
          const colors = STAGE_COLORS[memory.stage]

          return (
            <div key={idx} className="relative">
              {/* Vertical connector */}
              {nextMemory && (
                <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-gray-600 to-gray-700" />
              )}

              {/* Memory item */}
              <div className={`
                relative pl-16 pb-4
                ${colors.bg} ${colors.border} border rounded-lg p-4
                ${colors.glow} transition-all hover:scale-105
              `}>
                {/* Timeline dot */}
                <div className={`
                  absolute left-4 top-4 w-4 h-4 rounded-full
                  ${colors.border} border-2 bg-current
                `} />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-400 mb-2">{memory.date}</div>
                    <div className="text-sm text-gray-100 mb-1">{memory.memory}</div>
                    <div className="text-xs text-gray-400 italic">{memory.impact}</div>
                  </div>
                  <div className="text-xl flex-shrink-0">{memory.icon}</div>
                </div>

                {/* Stage badge */}
                <Badge variant="outline" className="mt-3 text-xs">
                  Stage {memory.stage}
                </Badge>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// API response types
// ─────────────────────────────────────────────────────────────────────────────

interface ProgressData {
  interactions: number
  streak_days: number
  bond_points: number
  evolution: {
    stage_name: string
    stage_index: number
    progress_to_next: number
    interactions_until_next: number
    badge: string
    color: string
  }
}

interface CompanionData {
  companion: {
    id: string
    name: string
    stage: number
    title: string | null
    archetype: string | null
    emoji: string | null
    color: string | null
    tagline: string | null
  } | null
  has_companion: boolean
  evolution_stage: number
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────

export default function EvolutionPage() {
  const [progressData, setProgressData] = useState<ProgressData | null>(null)
  const [companionData, setCompanionData] = useState<CompanionData | null>(null)
  const [apiError, setApiError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setApiError(null)
      try {
        const [progressRes, companionRes] = await Promise.all([
          fetch('/api/user/progress'),
          fetch('/api/user/companions'),
        ])

        if (!progressRes.ok || !companionRes.ok) {
          throw new Error('Failed to load evolution data')
        }

        const [progress, companion] = await Promise.all([
          progressRes.json() as Promise<ProgressData>,
          companionRes.json() as Promise<CompanionData>,
        ])

        setProgressData(progress)
        setCompanionData(companion)
      } catch (err) {
        setApiError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Derive values from API data
  const companionId = companionData?.companion?.id ?? null
  const interactions = progressData?.interactions ?? 0

  // Match companion to CHARACTERS data for evolution stage display
  const character: Character | undefined = companionId
    ? CHARACTERS.find(c => c.id === companionId || c.slug === companionId)
    : undefined

  const milestones = useMemo(
    () => (character ? getEvolutionMilestones(character, interactions) : []),
    [character, interactions]
  )

  const progress = useMemo(
    () => (character ? getProgressToNextStage(character, interactions) : null),
    [character, interactions]
  )

  const memories = character ? (EXAMPLE_MEMORIES[character.slug] ?? []) : []
  const currentStage = milestones.find(m => m.isUnlocked && !m.isNext)?.stage ?? 1

  // ── Loading state ──────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d0c18] text-gray-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full border-4 border-amber-500/30 border-t-amber-500 animate-spin mx-auto" />
          <p className="text-gray-400">Loading your evolution journey…</p>
        </div>
      </div>
    )
  }

  // ── Error state ────────────────────────────────────────────────────────────

  if (apiError) {
    return (
      <div className="min-h-screen bg-[#0d0c18] text-gray-100 p-8 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg text-red-400">Could not load evolution data</p>
          <p className="text-sm text-gray-500">{apiError}</p>
          <Button onClick={() => window.location.reload()}>Try again</Button>
        </div>
      </div>
    )
  }

  // ── No companion state ─────────────────────────────────────────────────────

  if (!companionData?.has_companion || !companionId) {
    return (
      <div className="min-h-screen bg-[#0d0c18] text-gray-100 p-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-400 mb-4">No companion selected</p>
          <Link href="/dashboard/character-select">
            <Button>Select a Companion</Button>
          </Link>
        </div>
      </div>
    )
  }

  // ── Character not in CHARACTERS data (e.g. pack character) ────────────────
  // Fall back to a minimal display using the API-provided companion data

  if (!character) {
    const apiCompanion = companionData.companion!
    return (
      <div className="min-h-screen bg-[#0d0c18] text-gray-100 p-8">
        <div className="max-w-4xl mx-auto text-center pt-20">
          <span className="text-6xl mb-6 block">{apiCompanion.emoji ?? '✨'}</span>
          <h1 className="text-3xl font-bold mb-2">{apiCompanion.name}</h1>
          {apiCompanion.tagline && (
            <p className="text-gray-400 mb-6">{apiCompanion.tagline}</p>
          )}
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-300">
              {interactions} conversation{interactions !== 1 ? 's' : ''} •{' '}
              {progressData?.streak_days ?? 0} day streak
            </p>
            {progressData && progressData.evolution.interactions_until_next > 0 && (
              <p className="text-sm text-gray-500">
                {progressData.evolution.interactions_until_next} conversations until next evolution
              </p>
            )}
            <div className="w-full max-w-md">
              <Progress value={progressData?.evolution.progress_to_next ?? 0} className="h-3" />
            </div>
          </div>
          <div className="mt-10">
            <Link href="/dashboard/chat">
              <Button size="lg" className="gap-2">
                Continue Chatting <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ── Full evolution display ─────────────────────────────────────────────────

  const displayConversations = interactions
  const displayProgress = progress ?? { current: 0, next: 1, percent: 0, remaining: 0 }

  return (
    <div className="min-h-screen bg-[#0d0c18] text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gradient-to-b from-gray-900 to-[#0d0c18] sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-100">
                {character.emoji} {companionData.companion?.name ?? character.name}&apos;s Evolution
              </h1>
              <p className="text-gray-400 mt-2">
                Watch your relationship grow and evolve through conversations
              </p>
            </div>
            <Link href="/dashboard/character-select">
              <Button variant="outline" size="sm">
                Switch Companion
              </Button>
            </Link>
          </div>

          {/* Current stage chip */}
          <div className="flex items-center gap-3">
            <Badge className={`${STAGE_COLORS[currentStage].bg} ${STAGE_COLORS[currentStage].border}`}>
              <span className="mr-2">{STAGE_EMOJIS[currentStage]}</span>
              Stage {currentStage}: {milestones.find(m => m.stage === currentStage)?.name}
            </Badge>
            <span className="text-sm text-gray-400">
              {displayConversations} conversations • {displayProgress.remaining} until next stage
            </span>
            {(progressData?.bond_points ?? 0) > 0 && (
              <span className="text-sm text-amber-400">
                ✦ {progressData!.bond_points} bond points
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Section 1: Evolution Timeline Visual */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            Your Journey
          </h2>

          {/* Stage progression visualization */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-slate-700 via-blue-600 via-purple-600 to-amber-600" />

            {/* Stage indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map(milestone => (
                <StageIndicator
                  key={milestone.stage}
                  milestone={milestone}
                  character={character}
                  isActive={milestone.isUnlocked && !milestone.isNext}
                />
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-200">Progress to Next Stage</h3>
              <span className="text-sm text-gray-400">
                {displayConversations} / {displayProgress.next} conversations
              </span>
            </div>
            <Progress value={displayProgress.percent} className="h-3" />
            <p className="text-sm text-gray-400">
              {displayProgress.remaining} conversations until you unlock the next evolution
            </p>
          </div>
        </section>

        {/* Section 2: Current Stage Details */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-400" />
            Your Current Stage
          </h2>

          {currentStage && (
            <div className={`
              rounded-lg p-8 border-2
              ${STAGE_COLORS[currentStage].bg} ${STAGE_COLORS[currentStage].border}
              ${STAGE_COLORS[currentStage].glow}
            `}>
              <div className="space-y-6">
                {/* Stage header */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-2 flex items-center gap-3">
                    <span className="text-4xl">{STAGE_EMOJIS[currentStage]}</span>
                    {milestones.find(m => m.stage === currentStage)?.name}
                  </h3>
                  <p className="text-gray-300">
                    {milestones.find(m => m.stage === currentStage)?.description}
                  </p>
                </div>

                {/* Traits grid */}
                <div className="grid gap-4">
                  <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
                    New Abilities Unlocked
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {milestones.find(m => m.stage === currentStage)?.traits.map((trait, idx) => (
                      <div
                        key={idx}
                        className={`
                          p-3 rounded border ${STAGE_COLORS[currentStage].border}
                          bg-gray-900 text-gray-300 text-sm flex items-start gap-2
                        `}
                      >
                        <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5 text-yellow-400" />
                        {trait}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next stage preview */}
                {currentStage < 4 && (
                  <div className="pt-6 border-t border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wide mb-4 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Coming Next
                    </h4>
                    {milestones.find(m => m.stage === currentStage + 1) && (
                      <div className="space-y-2">
                        <p className="text-gray-300 font-medium">
                          {milestones.find(m => m.stage === currentStage + 1)?.name}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {milestones.find(m => m.stage === currentStage + 1)?.description}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        {/* Section 3: Evolution Timeline / Memories */}
        <section className="space-y-8">
          <EvolutionTimeline character={character} memories={memories} />
        </section>

        {/* Section 4: Stage Themes */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-100">Stage Themes</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map(stage => (
              <div
                key={stage.stage}
                className={`
                  rounded-lg p-4 border-2 transition-all
                  ${STAGE_COLORS[stage.stage].bg} ${STAGE_COLORS[stage.stage].border}
                  ${stage.isUnlocked ? 'opacity-100' : 'opacity-50'}
                  ${stage.stage === currentStage ? `${STAGE_COLORS[stage.stage].glow} scale-105` : ''}
                `}
              >
                <div className="text-3xl mb-3">{STAGE_EMOJIS[stage.stage]}</div>
                <h4 className="font-semibold text-gray-100 text-sm mb-1">{stage.name}</h4>
                <p className="text-xs text-gray-400">Stage {stage.stage}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 text-center pt-4">
            Each stage brings subtle visual shifts — colors deepen, themes evolve, and your companion&apos;s presence becomes richer
          </p>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-gray-800">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Keep Growing Together</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Every conversation strengthens your bond and unlocks new capabilities. Your companion learns from you, adapts to you, and becomes more deeply aligned with who you are.
          </p>
          <Link href="/dashboard/chat">
            <Button size="lg" className="gap-2">
              Continue Chatting <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}
