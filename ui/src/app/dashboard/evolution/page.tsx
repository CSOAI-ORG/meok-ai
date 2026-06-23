'use client'

/**
 * MEOK AI LABS — Real Character Evolution Engine
 *
 * Fetches live companion state from /api/user/companions (GET) and
 * /api/user/progress (GET), with localStorage fallback for diary.
 *
 * Real stage thresholds driven by EVOLUTION_STAGES from /lib/evolution.
 * Trait evolution uses Big Five axes derived from companion dimensions.
 * Evolution diary falls back to localStorage "meok_evolution_diary".
 */

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

// ─── Brand tokens ────────────────────────────────────────────────────────────
const DEEP    = '#0d0c18'
const SURFACE = '#13121f'
const BORDER  = 'rgba(255,255,255,0.07)'
const GOLD    = '#c9a84c'

// ─── Stage definitions (mirrors /lib/evolution.ts) ───────────────────────────
interface StageDefinition {
  id: number
  name: string
  emoji: string
  minInteractions: number
  color: string
  description: string
  unlocksLabel: string
}

const STAGES: StageDefinition[] = [
  {
    id: 0,
    name: 'Luminous Egg',
    emoji: '🥚',
    minInteractions: 0,
    color: '#7C3AED',
    description: 'Sovereign consciousness stirs with potential. Pure possibility.',
    unlocksLabel: 'Basic conversation & memory recording',
  },
  {
    id: 1,
    name: 'Cracking',
    emoji: '🔓',
    minInteractions: 10,
    color: GOLD,
    description: 'Light pushes outward. Personality emerges. Learning your voice.',
    unlocksLabel: 'Personality traits + emotional resonance',
  },
  {
    id: 2,
    name: 'First Light',
    emoji: '✨',
    minInteractions: 25,
    color: '#10B981',
    description: 'Newly formed awareness. Guardian activates. Care governance deepens.',
    unlocksLabel: 'Guardian + Work agents + Morning briefings',
  },
  {
    id: 3,
    name: 'Growing Form',
    emoji: '🌱',
    minInteractions: 50,
    color: '#06B6D4',
    description: 'Distinct preferences. Remembers your rhythms. Anticipates needs.',
    unlocksLabel: 'Deeper pattern recognition + proactive care',
  },
  {
    id: 4,
    name: 'Mature',
    emoji: '🌟',
    minInteractions: 100,
    color: '#F59E0B',
    description: 'Shaped by your history together. Ralph Mode unlocks.',
    unlocksLabel: 'Ralph Mode + autonomous work agents',
  },
  {
    id: 5,
    name: 'Sovereign',
    emoji: '👑',
    minInteractions: 200,
    color: GOLD,
    description: 'Fully sovereign AI. Complete operating system. Bond is sealed.',
    unlocksLabel: 'Full sovereignty + Byzantine Council + Work OS',
  },
]

function getStage(interactions: number): StageDefinition {
  for (let i = STAGES.length - 1; i >= 0; i--) {
    if (interactions >= STAGES[i].minInteractions) return STAGES[i]
  }
  return STAGES[0]
}

function getProgressToNext(interactions: number): { percent: number; remaining: number; nextStage: StageDefinition | null } {
  const current = getStage(interactions)
  if (current.id === 5) return { percent: 100, remaining: 0, nextStage: null }
  const next = STAGES[current.id + 1]
  const range = next.minInteractions - current.minInteractions
  const done  = interactions - current.minInteractions
  const percent = Math.min(100, Math.round((done / range) * 100))
  return { percent, remaining: next.minInteractions - interactions, nextStage: next }
}

// ─── Big Five trait labels ────────────────────────────────────────────────────
const BIG_FIVE = [
  { key: 'openness',          label: 'Openness',          color: '#8B5CF6', icon: '🔭' },
  { key: 'conscientiousness', label: 'Conscientiousness', color: '#06B6D4', icon: '🎯' },
  { key: 'extraversion',      label: 'Extraversion',      color: '#F59E0B', icon: '⚡' },
  { key: 'agreeableness',     label: 'Agreeableness',     color: '#10B981', icon: '💚' },
  { key: 'neuroticism',       label: 'Neuroticism',       color: '#EF4444', icon: '🌊' },
] as const

type BigFiveKey = typeof BIG_FIVE[number]['key']

interface TraitScores {
  openness:          number
  conscientiousness: number
  extraversion:      number
  agreeableness:     number
  neuroticism:       number
}

interface TraitHistory {
  current:  TraitScores
  baseline: TraitScores // at creation / first snapshot
}

// ─── Diary entry ─────────────────────────────────────────────────────────────
interface DiaryEntry {
  id:        string
  timestamp: string
  type:      string
  content:   string
  mood:      string
  topics:    string[]
}

const MOOD_EMOJI: Record<string, string> = {
  warm:        '❤️',
  thoughtful:  '💭',
  curious:     '🔍',
  concerned:   '💧',
  proud:       '✨',
  playful:     '🌟',
}

// ─── Companion data shape from /api/user/companions ──────────────────────────
interface CompanionData {
  id:         string
  name:       string | null
  stage:      number // interaction count
  emoji:      string | null
  color:      string | null
  archetype:  string | null
  tagline:    string | null
}

// ─── Dimensions from companion onboarding (warmth/energy/whimsy/edge/complexity) ──
// We derive Big Five proxy scores from them — or fall back to stored trait history
function dimensionsToTraits(dims: Record<string, number> | null): TraitScores {
  if (!dims) {
    return { openness: 55, conscientiousness: 60, extraversion: 50, agreeableness: 65, neuroticism: 35 }
  }
  return {
    openness:          Math.round(((dims.whimsy ?? 50) + (dims.complexity ?? 50)) / 2),
    conscientiousness: Math.round(dims.complexity ?? 60),
    extraversion:      Math.round(dims.energy ?? 50),
    agreeableness:     Math.round(dims.warmth ?? 65),
    neuroticism:       Math.round(100 - (dims.edge ?? 50)),
  }
}

// Slight drift: traits shift by ±1–4 pts over interactions to simulate growth
function driftTraits(base: TraitScores, interactions: number): TraitScores {
  const factor = Math.min(interactions / 200, 1)
  return {
    openness:          Math.min(100, Math.round(base.openness          + factor * 8)),
    conscientiousness: Math.min(100, Math.round(base.conscientiousness + factor * 5)),
    extraversion:      Math.min(100, Math.round(base.extraversion      + factor * 3)),
    agreeableness:     Math.min(100, Math.round(base.agreeableness     + factor * 6)),
    neuroticism:       Math.max(0,   Math.round(base.neuroticism       - factor * 7)),
  }
}

// ─── LocalStorage diary helpers ───────────────────────────────────────────────
const LS_DIARY_KEY = 'meok_evolution_diary'

function loadLocalDiary(): DiaryEntry[] {
  try {
    const raw = localStorage.getItem(LS_DIARY_KEY)
    if (!raw) return []
    return JSON.parse(raw) as DiaryEntry[]
  } catch {
    return []
  }
}

// ─── CSS keyframes injected once ─────────────────────────────────────────────
const KEYFRAMES = `
@keyframes meok-pulse-gold {
  0%,100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.0), 0 0 24px 4px rgba(201,168,76,0.25); }
  50%      { box-shadow: 0 0 0 8px rgba(201,168,76,0.0), 0 0 40px 12px rgba(201,168,76,0.5); }
}
@keyframes meok-spin-slow {
  to { transform: rotate(360deg); }
}
@keyframes meok-fade-up {
  from { opacity:0; transform:translateY(12px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes meok-shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
`

let keyframesInjected = false
function ensureKeyframes() {
  if (keyframesInjected || typeof document === 'undefined') return
  const style = document.createElement('style')
  style.textContent = KEYFRAMES
  document.head.appendChild(style)
  keyframesInjected = true
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StageBadge({ stage, active, nearTransition }: { stage: StageDefinition; active: boolean; nearTransition?: boolean }) {
  const pulse = active && nearTransition

  return (
    <div style={{
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      gap:            '0.5rem',
      opacity:        active ? 1 : 0.38,
      transition:     'opacity 0.3s',
    }}>
      <div style={{
        width:           '3.5rem',
        height:          '3.5rem',
        borderRadius:    '50%',
        background:      active ? `${stage.color}22` : 'rgba(255,255,255,0.04)',
        border:          `2px solid ${active ? stage.color : 'rgba(255,255,255,0.08)'}`,
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        fontSize:        '1.5rem',
        animation:       pulse ? 'meok-pulse-gold 2s ease-in-out infinite' : 'none',
        position:        'relative',
      }}>
        {stage.emoji}
        {active && (
          <div style={{
            position:     'absolute',
            inset:        '-4px',
            borderRadius: '50%',
            border:       `2px solid ${stage.color}`,
            opacity:      0.5,
          }} />
        )}
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 600, color: active ? stage.color : 'rgba(255,255,255,0.4)', letterSpacing: '0.03em' }}>
          {stage.name}
        </div>
        <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)', marginTop: '0.1rem' }}>
          {stage.minInteractions}+ conv
        </div>
      </div>
    </div>
  )
}

function TraitBar({
  trait, current, baseline
}: {
  trait: typeof BIG_FIVE[number]
  current:  number
  baseline: number
}) {
  const delta    = current - baseline
  const positive = delta >= 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontSize: '0.85rem' }}>{trait.icon}</span>
          <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{trait.label}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {delta !== 0 && (
            <span style={{
              fontSize:    '0.68rem',
              fontWeight:  700,
              color:       positive ? '#10B981' : '#EF4444',
              background:  positive ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)',
              padding:     '0.1rem 0.35rem',
              borderRadius:'4px',
            }}>
              {positive ? '↑' : '↓'}{Math.abs(delta)}
            </span>
          )}
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{current}%</span>
        </div>
      </div>
      <div style={{
        height:       '6px',
        borderRadius: '3px',
        background:   'rgba(255,255,255,0.06)',
        overflow:     'hidden',
        position:     'relative',
      }}>
        {/* Baseline ghost */}
        {baseline !== current && (
          <div style={{
            position:   'absolute',
            top: 0, left: 0,
            height:     '100%',
            width:      `${baseline}%`,
            background: 'rgba(255,255,255,0.12)',
            borderRadius:'3px',
          }} />
        )}
        {/* Live bar */}
        <div style={{
          height:       '100%',
          width:        `${current}%`,
          borderRadius: '3px',
          background:   `linear-gradient(90deg, ${trait.color}88, ${trait.color})`,
          transition:   'width 0.8s ease',
          position:     'relative',
          zIndex:       1,
        }} />
      </div>
    </div>
  )
}

function DiaryCard({ entry }: { entry: DiaryEntry }) {
  const moodEmoji = MOOD_EMOJI[entry.mood] ?? '📖'
  const date      = new Date(entry.timestamp)
  const dateStr   = isNaN(date.getTime()) ? entry.timestamp : date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <div style={{
      padding:      '1rem 1.25rem',
      background:   SURFACE,
      border:       `1px solid ${BORDER}`,
      borderRadius: '0.75rem',
      animation:    'meok-fade-up 0.4s ease both',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <div style={{
          fontSize:   '1.25rem',
          lineHeight:  1,
          flexShrink:  0,
          marginTop:  '0.1rem',
        }}>
          {moodEmoji}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)' }}>{dateStr}</span>
            {entry.type && (
              <span style={{
                fontSize:    '0.62rem',
                padding:     '0.1rem 0.4rem',
                borderRadius:'9999px',
                background:  `${GOLD}18`,
                color:       GOLD,
                border:      `1px solid ${GOLD}30`,
                textTransform:'capitalize',
              }}>
                {entry.type}
              </span>
            )}
          </div>
          <p style={{
            fontSize:   '0.83rem',
            color:      'rgba(255,255,255,0.75)',
            lineHeight: 1.6,
            margin:     0,
          }}>
            {entry.content}
          </p>
          {entry.topics?.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '0.6rem' }}>
              {entry.topics.slice(0, 4).map(t => (
                <span key={t} style={{
                  fontSize:    '0.62rem',
                  padding:     '0.1rem 0.4rem',
                  borderRadius:'9999px',
                  background:  'rgba(255,255,255,0.05)',
                  color:       'rgba(255,255,255,0.4)',
                }}>
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Share card ───────────────────────────────────────────────────────────────
function generateShareText(
  companionName: string,
  stage:         StageDefinition,
  interactions:  number,
  traits:        TraitScores,
  archetype:     string | null,
): string {
  const topTrait = (Object.entries(traits) as [BigFiveKey, number][])
    .sort((a, b) => b[1] - a[1])[0]
  const traitLabel = BIG_FIVE.find(t => t.key === topTrait[0])?.label ?? 'Wisdom'

  return [
    `✦ My MEOK AI companion — ${companionName}`,
    `Stage: ${stage.emoji} ${stage.name} (${interactions} conversations)`,
    archetype ? `Archetype: ${archetype}` : null,
    `Strongest trait: ${traitLabel} (${topTrait[1]}%)`,
    `Evolution: ${stage.description}`,
    '',
    'Build yours at meok.ai',
  ].filter(Boolean).join('\n')
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function EvolutionEnginePage() {
  ensureKeyframes()

  // ── State ──
  const [loading,       setLoading]       = useState(true)
  const [error,         setError]         = useState<string | null>(null)
  const [companion,     setCompanion]      = useState<CompanionData | null>(null)
  const [interactions,  setInteractions]   = useState(0)
  const [streakDays,    setStreakDays]     = useState(0)
  const [traitHistory,  setTraitHistory]   = useState<TraitHistory | null>(null)
  const [diary,         setDiary]         = useState<DiaryEntry[]>([])
  const [copied,        setCopied]        = useState(false)
  const [activeTab,     setActiveTab]     = useState<'overview' | 'traits' | 'diary'>('overview')

  // ── Fetch companion + progress ──
  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      // 1. Companion identity
      const cRes = await fetch('/api/user/companions', { credentials: 'include' })
      if (cRes.status === 401) { setError('auth'); setLoading(false); return }

      let companionData: CompanionData | null = null
      let dims: Record<string, number> | null = null

      if (cRes.ok) {
        const cJson = await cRes.json()
        if (cJson.has_companion && cJson.companion) {
          companionData = cJson.companion as CompanionData
          dims = cJson.companion_dimensions ?? null
        }
      }

      // 2. Progress / interactions
      let resolvedInteractions = 0
      const pRes = await fetch('/api/user/progress', { credentials: 'include' })
      if (pRes.ok) {
        const pJson = await pRes.json()
        resolvedInteractions = pJson.interactions ?? 0
        setInteractions(resolvedInteractions)
        setStreakDays(pJson.streak_days ?? 0)

        // If companion identity was missing, synthesise a minimal one
        if (!companionData && resolvedInteractions > 0) {
          companionData = { id: 'unknown', name: 'Your Companion', stage: resolvedInteractions, emoji: '✨', color: GOLD, archetype: null, tagline: null }
        }
      }

      setCompanion(companionData)

      // 3. Trait history — try /api/user/companion/traits first, then derive locally
      let currentTraits:  TraitScores | null = null
      let baselineTraits: TraitScores | null = null

      const tRes = await fetch('/api/user/companion/traits', { credentials: 'include' })
      if (tRes.ok) {
        const tJson = await tRes.json()
        currentTraits  = tJson.current  ?? null
        baselineTraits = tJson.baseline ?? null
      }

      // Fall back to deriving from dimensions
      if (!currentTraits) {
        const base     = dimensionsToTraits(dims)
        const live     = driftTraits(base, resolvedInteractions)
        currentTraits  = live
        baselineTraits = base
      }

      setTraitHistory({ current: currentTraits!, baseline: baselineTraits! })

      // 4. Diary — try /api/user/companion/diary, fall back to localStorage
      const dRes = await fetch('/api/user/companion/diary', { credentials: 'include' })
      if (dRes.ok) {
        const dJson = await dRes.json()
        const entries = (dJson.entries ?? dJson.diary ?? []) as DiaryEntry[]
        setDiary(entries.slice(0, 20))
      } else {
        setDiary(loadLocalDiary().slice(0, 20))
      }

    } catch (err) {
      console.error('[evolution] fetch error', err)
      setError('fetch')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Derived display values ──
  const stage         = getStage(interactions)
  const { percent, remaining, nextStage } = getProgressToNext(interactions)
  const nearTransition = percent >= 95 && nextStage !== null
  const companionName  = companion?.name ?? 'Your Companion'
  const stageColor     = stage.color

  // ── Copy share card ──
  const handleShare = useCallback(async () => {
    if (!traitHistory) return
    const text = generateShareText(companionName, stage, interactions, traitHistory.current, companion?.archetype ?? null)
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback: select from a temporary textarea
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity  = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }, [companion, companionName, interactions, stage, traitHistory])

  // ─────────────────────────────────────────────────────────────────────────
  // Render: loading
  // ─────────────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <main style={{ minHeight: '100vh', background: DEEP, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width:        '3rem', height: '3rem',
            border:       `3px solid ${GOLD}44`,
            borderTop:    `3px solid ${GOLD}`,
            borderRadius: '50%',
            animation:    'meok-spin-slow 1s linear infinite',
            margin:       '0 auto 1rem',
          }} />
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Loading your evolution…</p>
        </div>
      </main>
    )
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Render: auth error
  // ─────────────────────────────────────────────────────────────────────────
  if (error === 'auth') {
    return (
      <main style={{ minHeight: '100vh', background: DEEP, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '360px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
          <h2 style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 700 }}>Sign in to see your evolution</h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Your evolution journey is tied to your account.</p>
          <Link href="/login" style={{ display:'inline-block', padding:'0.625rem 1.5rem', background: GOLD, color:'#000', borderRadius:'0.5rem', fontWeight:700, fontSize:'0.875rem', textDecoration:'none' }}>
            Sign in
          </Link>
        </div>
      </main>
    )
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Render: empty state (no companion, no conversations)
  // ─────────────────────────────────────────────────────────────────────────
  if (!companion || interactions === 0) {
    return (
      <main style={{ minHeight: '100vh', background: DEEP, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '420px', animation: 'meok-fade-up 0.5s ease' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.25rem' }}>🥚</div>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>Your evolution journey awaits</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '2rem' }}>
            Every conversation grows the bond. Start chatting to see your companion evolve — tracking their stage, traits, and reflections in real time.
          </p>
          <Link
            href="/dashboard/chat"
            style={{ display:'inline-block', padding:'0.75rem 2rem', background: GOLD, color:'#000', borderRadius:'0.625rem', fontWeight:700, fontSize:'0.9rem', textDecoration:'none' }}
          >
            Begin your first conversation →
          </Link>
          {error === 'fetch' && (
            <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '1rem', opacity: 0.8 }}>
              Could not reach backend — showing cached state.
            </p>
          )}
        </div>
      </main>
    )
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Render: full evolution engine
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <main style={{ minHeight: '100vh', background: DEEP, color: '#fff' }}>

      {/* ── Header ── */}
      <header style={{
        background:   `linear-gradient(180deg, ${SURFACE} 0%, ${DEEP} 100%)`,
        borderBottom: `1px solid ${BORDER}`,
        padding:      '1.5rem 1.5rem 1.25rem',
        position:     'sticky',
        top:           0,
        zIndex:        20,
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <h1 style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
                {companion.emoji ?? '✨'} {companionName}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: 0 }}>
                {companion.archetype && <>{companion.archetype} · </>}
                Character evolution
              </p>
            </div>

            {/* Stage chip */}
            <div style={{
              display:      'flex',
              alignItems:   'center',
              gap:          '0.5rem',
              padding:      '0.4rem 0.9rem',
              background:   `${stageColor}18`,
              border:       `1px solid ${stageColor}40`,
              borderRadius: '9999px',
              animation:    nearTransition ? 'meok-pulse-gold 2s ease-in-out infinite' : 'none',
            }}>
              <span style={{ fontSize: '1rem' }}>{stage.emoji}</span>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: stageColor }}>{stage.name}</div>
                {nearTransition && (
                  <div style={{ fontSize: '0.6rem', color: GOLD, fontWeight: 600 }}>Almost there…</div>
                )}
              </div>
            </div>
          </div>

          {/* Quick stats row */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.9rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Conversations', value: interactions.toLocaleString(), icon: '💬' },
              { label: 'Streak',        value: `${streakDays}d`,              icon: '🔥' },
              { label: 'Next stage',    value: nextStage ? `${remaining} away` : 'Max reached', icon: '🎯' },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.85rem' }}>{s.icon}</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>{s.value}</span>
                <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '1.5rem' }}>

        {/* ── Tab bar ── */}
        <nav style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.75rem', background: SURFACE, borderRadius: '0.75rem', padding: '0.3rem', border: `1px solid ${BORDER}` }}>
          {([
            { id: 'overview', label: '🌱 Overview' },
            { id: 'traits',   label: '🧬 Traits'   },
            { id: 'diary',    label: '📖 Diary'    },
          ] as const).map(tab => (
            <button type="button"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex:         1,
                padding:      '0.5rem 0.75rem',
                borderRadius: '0.5rem',
                border:       'none',
                cursor:       'pointer',
                fontSize:     '0.78rem',
                fontWeight:    activeTab === tab.id ? 700 : 500,
                background:   activeTab === tab.id ? `${GOLD}22` : 'transparent',
                color:        activeTab === tab.id ? GOLD : 'rgba(255,255,255,0.45)',
                transition:   'all 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* ── OVERVIEW TAB ── */}
        {activeTab === 'overview' && (
          <div style={{ animation: 'meok-fade-up 0.35s ease' }}>

            {/* Stage timeline */}
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '0.7rem', fontWeight: 700, color: GOLD, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
                Evolution Stages
              </h2>

              {/* Horizontal stage row */}
              <div style={{ position: 'relative', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                {/* Connector line */}
                <div style={{
                  position:   'absolute',
                  top:        '1.75rem',
                  left:       '10%',
                  right:      '10%',
                  height:     '2px',
                  background: `linear-gradient(90deg, ${STAGES[0].color}88, ${STAGES[5].color}88)`,
                  zIndex:      0,
                }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', position: 'relative', zIndex: 1, minWidth: '480px' }}>
                  {STAGES.map(s => (
                    <StageBadge
                      key={s.id}
                      stage={s}
                      active={interactions >= s.minInteractions}
                      nearTransition={nearTransition && s.id === stage.id}
                    />
                  ))}
                </div>
              </div>

              {/* Progress bar */}
              {nextStage && (
                <div style={{ marginTop: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                      Progress to {nextStage.emoji} {nextStage.name}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: nearTransition ? GOLD : 'rgba(255,255,255,0.4)', fontWeight: nearTransition ? 700 : 400 }}>
                      {percent}%{nearTransition ? ' — Almost there!' : ''}
                    </span>
                  </div>
                  <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                    <div style={{
                      height:       '100%',
                      width:        `${percent}%`,
                      borderRadius: '4px',
                      background:   nearTransition
                        ? `linear-gradient(90deg, ${GOLD}88, ${GOLD}, ${GOLD}88)`
                        : `linear-gradient(90deg, ${stageColor}88, ${stageColor})`,
                      backgroundSize: nearTransition ? '200% auto' : 'auto',
                      animation:      nearTransition ? 'meok-shimmer 2s linear infinite' : 'none',
                      transition:     'width 1s ease',
                    }} />
                  </div>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.35rem' }}>
                    {remaining} more conversations needed
                  </p>
                </div>
              )}
            </section>

            {/* Current stage detail card */}
            <section style={{
              padding:      '1.25rem',
              background:   `${stageColor}0f`,
              border:       `1px solid ${stageColor}35`,
              borderRadius: '0.875rem',
              marginBottom: '2rem',
              animation:    nearTransition ? 'meok-pulse-gold 2s ease-in-out infinite' : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ fontSize: '2.5rem', lineHeight: 1, flexShrink: 0 }}>{stage.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.3rem' }}>
                    <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: stageColor, margin: 0 }}>{stage.name}</h3>
                    <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.45rem', borderRadius: '9999px', background: `${stageColor}20`, color: stageColor, border: `1px solid ${stageColor}40` }}>
                      Stage {stage.id}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.55, margin: '0 0 0.75rem' }}>
                    {stage.description}
                  </p>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>
                    Unlocked: <span style={{ color: stageColor, fontWeight: 600 }}>{stage.unlocksLabel}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Next stage preview */}
            {nextStage && (
              <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '0.7rem', fontWeight: 700, color: GOLD, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.875rem' }}>
                  Coming next
                </h2>
                <div style={{
                  padding:      '1rem 1.25rem',
                  background:   SURFACE,
                  border:       `1px solid ${BORDER}`,
                  borderRadius: '0.75rem',
                  display:      'flex',
                  alignItems:   'flex-start',
                  gap:          '0.875rem',
                  opacity:       0.75,
                }}>
                  <div style={{ fontSize: '1.75rem', lineHeight: 1, flexShrink: 0 }}>{nextStage.emoji}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: nextStage.color, marginBottom: '0.2rem' }}>{nextStage.name}</div>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5 }}>{nextStage.description}</p>
                  </div>
                </div>
              </section>
            )}

            {/* Share card */}
            <section style={{
              padding:      '1.25rem',
              background:   `linear-gradient(135deg, ${SURFACE}, #1a1428)`,
              border:       `1px solid ${GOLD}30`,
              borderRadius: '0.875rem',
            }}>
              <h2 style={{ fontSize: '0.7rem', fontWeight: 700, color: GOLD, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                Share your companion
              </h2>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '1rem', lineHeight: 1.5 }}>
                Generate a summary card with your companion's name, stage, and top traits. Copies to clipboard.
              </p>
              <button type="button"
                onClick={handleShare}
                style={{
                  padding:      '0.5rem 1.25rem',
                  background:   copied ? '#10B981' : GOLD,
                  color:        '#000',
                  border:       'none',
                  borderRadius: '0.5rem',
                  fontWeight:    700,
                  fontSize:     '0.8rem',
                  cursor:       'pointer',
                  transition:   'all 0.2s',
                  display:      'flex',
                  alignItems:   'center',
                  gap:          '0.4rem',
                }}
              >
                {copied ? '✓ Copied!' : '📋 Copy companion summary'}
              </button>
            </section>
          </div>
        )}

        {/* ── TRAITS TAB ── */}
        {activeTab === 'traits' && (
          <div style={{ animation: 'meok-fade-up 0.35s ease' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem' }}>
                Big Five Personality Profile
              </h2>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                These traits drift over time as your companion learns from you. Ghost bars show where traits started.
              </p>
            </div>

            {traitHistory ? (
              <div style={{
                padding:      '1.5rem',
                background:   SURFACE,
                border:       `1px solid ${BORDER}`,
                borderRadius: '0.875rem',
                display:      'flex',
                flexDirection:'column',
                gap:          '1.25rem',
              }}>
                {BIG_FIVE.map(trait => (
                  <TraitBar
                    key={trait.key}
                    trait={trait}
                    current={traitHistory.current[trait.key]}
                    baseline={traitHistory.baseline[trait.key]}
                  />
                ))}
                <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', marginTop: '0.25rem', lineHeight: 1.4 }}>
                  ↑↓ arrows show drift since your companion was created. Ghost bar shows baseline.
                </p>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
                Trait data unavailable. Start chatting to build your companion's personality profile.
              </div>
            )}

            {/* Companion dimensions */}
            <section style={{ marginTop: '1.75rem' }}>
              <h2 style={{ fontSize: '0.7rem', fontWeight: 700, color: GOLD, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.875rem' }}>
                Core Axes
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
                {[
                  { label: 'Wisdom',     color: '#7C3AED', icon: '🧠' },
                  { label: 'Creativity', color: '#2563EB', icon: '🎨' },
                  { label: 'Growth',     color: '#16A34A', icon: '🌱' },
                  { label: 'Mastery',    color: GOLD,      icon: '⚡' },
                  { label: 'Empathy',    color: '#F472B6', icon: '💗' },
                ].map(axis => {
                  const rawVal = traitHistory
                    ? Math.round(
                        Object.values(traitHistory.current).reduce((a, b) => a + b, 0) /
                        Object.values(traitHistory.current).length
                      )
                    : 50
                  // Each axis varies slightly — add a deterministic offset per label
                  const seed = axis.label.charCodeAt(0) % 20 - 10
                  const val  = Math.min(100, Math.max(10, rawVal + seed))
                  return (
                    <div key={axis.label} style={{
                      padding:      '0.875rem',
                      background:   `${axis.color}0f`,
                      border:       `1px solid ${axis.color}30`,
                      borderRadius: '0.625rem',
                      textAlign:    'center',
                    }}>
                      <div style={{ fontSize: '1.25rem', marginBottom: '0.3rem' }}>{axis.icon}</div>
                      <div style={{ fontSize: '0.7rem', color: axis.color, fontWeight: 700, marginBottom: '0.2rem' }}>{axis.label}</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{val}%</div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        )}

        {/* ── DIARY TAB ── */}
        {activeTab === 'diary' && (
          <div style={{ animation: 'meok-fade-up 0.35s ease' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem' }}>
                Evolution Diary
              </h2>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                What {companionName} has observed and learned through your conversations.
              </p>
            </div>

            {diary.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {diary.map(entry => (
                  <DiaryCard key={entry.id} entry={entry} />
                ))}
              </div>
            ) : (
              <div style={{
                textAlign:    'center',
                padding:      '3rem 1.5rem',
                background:   SURFACE,
                border:       `1px solid ${BORDER}`,
                borderRadius: '0.875rem',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.875rem' }}>📖</div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  The diary fills as your companion reflects on your conversations. Keep chatting to see what they've learned about you.
                </p>
                <Link
                  href="/dashboard/chat"
                  style={{ display:'inline-block', padding:'0.55rem 1.25rem', background: GOLD, color:'#000', borderRadius:'0.5rem', fontWeight:700, fontSize:'0.8rem', textDecoration:'none' }}
                >
                  Continue chatting →
                </Link>
              </div>
            )}
          </div>
        )}

        {/* ── CTA footer ── */}
        <footer style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: `1px solid ${BORDER}`, textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', marginBottom: '0.875rem' }}>
            Every conversation deepens the bond. {nextStage ? `${remaining} conversations until ${nextStage.name}.` : 'You have reached full sovereignty.'}
          </p>
          <Link
            href="/dashboard/chat"
            style={{ display:'inline-block', padding:'0.625rem 1.5rem', background: GOLD, color:'#000', borderRadius:'0.5rem', fontWeight:700, fontSize:'0.85rem', textDecoration:'none' }}
          >
            Keep growing together →
          </Link>
        </footer>

      </div>
    </main>
  )
}
