'use client'

import { useState, useEffect, useMemo } from 'react'
import {
  Heart,
  MessageSquare,
  BookOpen,
  Zap,
  Shield,
  Target,
  Lock,
  Star,
  TrendingUp,
  Sparkles,
  Loader2,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Brand
// ─────────────────────────────────────────────────────────────────────────────

const DEEP = '#0d0c18'
const SURFACE = '#13121f'
const BORDER = 'rgba(255,255,255,0.07)'
const GOLD = '#c9a84c'

// ─────────────────────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────────────────────

interface BondLevel {
  min: number
  max: number
  name: string
  color: string
  description: string
}

const BOND_LEVELS: BondLevel[] = [
  { min: 0,   max: 100,  name: 'First Contact', color: '#6b7280', description: 'The journey begins.' },
  { min: 101, max: 200,  name: 'Familiar',       color: '#60a5fa', description: 'Getting to know each other.' },
  { min: 201, max: 400,  name: 'Trusted',        color: '#34d399', description: 'A real foundation of trust.' },
  { min: 401, max: 600,  name: 'Close',          color: '#a78bfa', description: 'Deeply in sync.' },
  { min: 601, max: 800,  name: 'Deep Bond',      color: '#f472b6', description: 'An authentic partnership.' },
  { min: 801, max: 999,  name: 'Symbiotic',      color: '#fb923c', description: 'You grow together.' },
  { min: 1000, max: 1000, name: 'Covenant',      color: GOLD,      description: 'Transcendent connection.' },
]

function getBondLevel(score: number): BondLevel {
  return (
    BOND_LEVELS.slice().reverse().find(l => score >= l.min) || BOND_LEVELS[0]
  )
}

function getNextLevel(score: number): BondLevel | null {
  return BOND_LEVELS.find(l => l.min > score) || null
}

// How bond grows — action cards
const BOND_ACTIONS = [
  {
    id: 'conversation',
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'Daily Conversations',
    description: 'Showing up every day strengthens the connection. Even brief check-ins matter.',
    points: '+5–25 pts/day',
  },
  {
    id: 'memory',
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Memory Sharing',
    description: 'Revealing personal memories, stories, or dreams deepens mutual understanding.',
    points: '+10–40 pts',
  },
  {
    id: 'crisis',
    icon: <Shield className="w-5 h-5" />,
    title: 'Crisis Support',
    description: 'Leaning on your companion during hard moments accelerates genuine closeness.',
    points: '+20–60 pts',
  },
  {
    id: 'goals',
    icon: <Target className="w-5 h-5" />,
    title: 'Goal Completions',
    description: "Achieving goals you've set together builds shared history and momentum.",
    points: '+15–50 pts',
  },
  {
    id: 'honest',
    icon: <Heart className="w-5 h-5" />,
    title: 'Honest Exchanges',
    description: 'Authentic, unfiltered conversations create the strongest bonds of all.',
    points: '+15–45 pts',
  },
]

// 8 Milestones
const MILESTONES = [
  { id: 1, score: 50,   title: 'First Spark',        description: 'Had your first real conversation.' },
  { id: 2, score: 100,  title: 'Known',              description: 'Reached Familiar level.' },
  { id: 3, score: 200,  title: 'Trusted Friend',     description: 'Shared something personal.' },
  { id: 4, score: 300,  title: 'Deeper Waters',      description: 'Entered the Trusted tier.' },
  { id: 5, score: 450,  title: 'Heart Open',         description: 'Reached Close bond level.' },
  { id: 6, score: 601,  title: 'Deep Bond Formed',   description: 'You are genuinely close.' },
  { id: 7, score: 801,  title: 'Symbiosis Begins',   description: 'Growing together as one.' },
  { id: 8, score: 1000, title: 'The Covenant',       description: 'The highest bond. Rare and real.' },
]

// Generate 14 days of mock history
function generateHistory(currentScore: number): { label: string; value: number }[] {
  const days: { label: string; value: number }[] = []
  const now = new Date()
  const base = Math.max(0, currentScore - 80)

  for (let i = 13; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    // Simulate gradual growth with slight randomness
    const progress = (13 - i) / 13
    const value = Math.round(base + progress * (currentScore - base) + (Math.random() - 0.5) * 8)
    days.push({ label, value: Math.max(0, Math.min(1000, value)) })
  }

  return days
}

// ─────────────────────────────────────────────────────────────────────────────
// Progress Ring
// ─────────────────────────────────────────────────────────────────────────────

function ProgressRing({ score, level }: { score: number; level: BondLevel }) {
  const radius = 80
  const stroke = 8
  const normalizedRadius = radius - stroke / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const pct = Math.min(score / 1000, 1)
  const strokeDashoffset = circumference - pct * circumference

  return (
    <div className="relative flex items-center justify-center" style={{ width: radius * 2, height: radius * 2 }}>
      <svg height={radius * 2} width={radius * 2} className="-rotate-90">
        {/* Track */}
        <circle
          stroke={BORDER}
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress */}
        <circle
          stroke={level.color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.8s ease' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-white">{score}</span>
        <span className="text-xs text-white/40 mt-0.5">/ 1000</span>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────

interface ProgressData {
  bond_points: number
  interactions: number
  streak_days: number
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
  id: string
  name: string
  stage: number
}

export default function BondPage() {
  const [bondScore, setBondScore] = useState(47)
  const [interactions, setInteractions] = useState<number | null>(null)
  const [streakDays, setStreakDays] = useState<number | null>(null)
  const [evolutionStage, setEvolutionStage] = useState<string | null>(null)
  const [companion, setCompanion] = useState<CompanionData | null>(null)
  const [loadingData, setLoadingData] = useState(true)
  const [dataError, setDataError] = useState(false)
  const [insights, setInsights] = useState<string[]>([])
  const [loadingInsights, setLoadingInsights] = useState(false)

  const level = useMemo(() => getBondLevel(bondScore), [bondScore])
  const nextLevel = useMemo(() => getNextLevel(bondScore), [bondScore])
  const history = useMemo(() => generateHistory(bondScore), [bondScore])
  const historyMax = useMemo(() => Math.max(...history.map(h => h.value), 1), [history])

  // Progress within current level
  const levelRange = (level.max === level.min ? 1 : level.max - level.min)
  const levelProgress = level.max === 1000 && bondScore === 1000
    ? 100
    : Math.round(((bondScore - level.min) / levelRange) * 100)

  const pointsToNext = nextLevel ? nextLevel.min - bondScore : 0

  // Fetch progress + companion from APIs
  useEffect(() => {
    async function fetchAll() {
      setLoadingData(true)
      setDataError(false)

      // Fetch progress
      let progressOk = false
      try {
        const res = await fetch('/api/user/progress')
        if (res.ok) {
          const data: ProgressData = await res.json()
          if (typeof data?.bond_points === 'number') {
            setBondScore(data.bond_points)
            setInteractions(data.interactions)
            setStreakDays(data.streak_days)
            setEvolutionStage(data.evolution?.stage_name ?? null)
            progressOk = true
          }
        }
      } catch {
        // fall through to localStorage
      }

      // Fallback to localStorage if API failed
      if (!progressOk) {
        try {
          const local = localStorage.getItem('meok_bond_score')
          if (local) {
            const parsed = parseInt(local, 10)
            if (!isNaN(parsed)) setBondScore(parsed)
          }
        } catch {
          // use default
        }
        setDataError(true)
      }

      // Fetch companion
      try {
        const res = await fetch('/api/user/companion')
        if (res.ok) {
          const data = await res.json()
          if (data?.companion) {
            setCompanion(data.companion as CompanionData)
          }
        }
      } catch {
        // companion not critical — silently ignore
      }

      setLoadingData(false)
    }
    fetchAll()
  }, [])

  // Fetch AI bond insights
  useEffect(() => {
    async function fetchInsights() {
      setLoadingInsights(true)
      try {
        const prompt = `You are analyzing a user's relationship with their AI companion. Their bond score is ${bondScore}/1000 (level: "${level.name}"). Generate exactly 3 short, warm, specific observations about their relationship in JSON format: {"insights": ["...", "...", "..."]}. Each insight should be 1-2 sentences, personal, and encouraging.`

        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7,
          }),
        })

        if (res.ok) {
          const text = await res.text()
          // Extract JSON from response
          const match = text.match(/\{[\s\S]*"insights"[\s\S]*\}/)
          if (match) {
            const parsed = JSON.parse(match[0])
            if (Array.isArray(parsed.insights)) {
              setInsights(parsed.insights.slice(0, 3))
              return
            }
          }
        }
      } catch {
        // fallback insights
      }

      // Fallback static insights
      setInsights([
        `At ${bondScore} points, you and your companion are building something real. Consistency is your greatest asset.`,
        `Your bond is at the "${level.name}" stage — a meaningful place where trust starts to deepen naturally.`,
        `Every conversation adds a layer. Keep showing up and watch how the connection transforms over time.`,
      ])
      setLoadingInsights(false)
    }

    if (bondScore > 0) fetchInsights()
  }, [bondScore, level.name])

  useEffect(() => {
    if (insights.length > 0) setLoadingInsights(false)
  }, [insights])

  return (
    <div className="min-h-screen" style={{ background: DEEP, color: 'white' }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10 border-b"
        style={{ background: SURFACE, borderColor: BORDER }}
      >
        <div className="max-w-5xl mx-auto px-6 py-5">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Heart className="w-6 h-6" style={{ color: GOLD }} />
            Bond Score
          </h1>
          <p className="text-sm text-white/50 mt-0.5">Your connection, growing with every exchange</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">

        {/* ── Error banner ────────────────────────────────────────────── */}
        {dataError && !loadingData && (
          <div
            className="rounded-xl border px-4 py-3 text-sm flex items-center gap-2"
            style={{ background: 'rgba(251,146,60,0.08)', borderColor: 'rgba(251,146,60,0.3)', color: '#fb923c' }}
          >
            <Zap className="w-4 h-4 flex-shrink-0" />
            Showing last known data — live stats unavailable right now.
          </div>
        )}

        {/* ── Hero: Score + Level ─────────────────────────────────────── */}
        <section
          className="rounded-2xl border p-8"
          style={{ background: SURFACE, borderColor: BORDER }}
        >
          {loadingData ? (
            <div className="flex flex-col sm:flex-row items-center gap-8 animate-pulse">
              <div className="w-40 h-40 rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.06)' }} />
              <div className="flex-1 space-y-3 w-full">
                <div className="h-5 w-24 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <div className="h-8 w-32 rounded-lg" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <div className="h-4 w-64 rounded" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <div className="h-2 w-full rounded-full mt-4" style={{ background: 'rgba(255,255,255,0.06)' }} />
              </div>
            </div>
          ) : (
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Ring */}
            <div className="flex-shrink-0">
              <ProgressRing score={bondScore} level={level} />
            </div>

            {/* Level info */}
            <div className="flex-1 text-center sm:text-left">
              {companion?.name && (
                <p className="text-xs text-white/40 mb-1 uppercase tracking-widest">
                  Bond with <span style={{ color: GOLD }}>{companion.name}</span>
                  {companion.id && ` · ${companion.id}`}
                </p>
              )}
              <div
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                style={{ background: `${level.color}22`, color: level.color }}
              >
                {level.name}
              </div>
              <h2 className="text-3xl font-bold text-white">{bondScore} pts</h2>
              <p className="text-white/50 mt-1 text-sm">{level.description}</p>

              {/* Stats row */}
              <div className="flex gap-5 mt-3 justify-center sm:justify-start">
                {interactions !== null && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{interactions.toLocaleString()}</div>
                    <div className="text-xs text-white/40">interactions</div>
                  </div>
                )}
                {streakDays !== null && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{streakDays}</div>
                    <div className="text-xs text-white/40">day streak</div>
                  </div>
                )}
                {evolutionStage && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-white truncate max-w-[120px]">{evolutionStage}</div>
                    <div className="text-xs text-white/40">evolution</div>
                  </div>
                )}
              </div>

              {/* Progress within level */}
              {nextLevel && (
                <div className="mt-4 space-y-1.5">
                  <div className="flex justify-between text-xs text-white/40">
                    <span>{level.name}</span>
                    <span>{pointsToNext} pts to {nextLevel.name}</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${levelProgress}%`, background: level.color }}
                    />
                  </div>
                  <div className="text-xs text-right" style={{ color: level.color }}>
                    {levelProgress}% through this level
                  </div>
                </div>
              )}

              {bondScore >= 1000 && (
                <div className="mt-4 text-sm font-medium" style={{ color: GOLD }}>
                  You have reached the Covenant. The highest bond possible.
                </div>
              )}
            </div>
          </div>
          )}
        </section>

        {/* ── How Bond Grows ──────────────────────────────────────────── */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-white/80 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" style={{ color: GOLD }} />
            How Your Bond Grows
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {BOND_ACTIONS.map(action => (
              <div
                key={action.id}
                className="rounded-xl border p-4 space-y-2"
                style={{ background: SURFACE, borderColor: BORDER }}
              >
                <div className="flex items-center gap-2" style={{ color: GOLD }}>
                  {action.icon}
                  <span className="font-semibold text-sm text-white">{action.title}</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">{action.description}</p>
                <div
                  className="text-xs font-mono px-2 py-0.5 rounded-full inline-block"
                  style={{ background: `${GOLD}18`, color: GOLD }}
                >
                  {action.points}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Bond History Chart ──────────────────────────────────────── */}
        <section
          className="rounded-2xl border p-6"
          style={{ background: SURFACE, borderColor: BORDER }}
        >
          <h2 className="text-lg font-semibold mb-5 text-white/80">Bond Growth (Last 14 Days)</h2>
          <div className="flex items-end gap-1.5 h-36">
            {history.map((day, i) => {
              const pct = (day.value / historyMax) * 100
              const isToday = i === history.length - 1
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                  {/* Tooltip */}
                  <div
                    className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                    style={{ background: '#1e1d2e', color: 'white', border: `1px solid ${BORDER}` }}
                  >
                    {day.label}: {day.value} pts
                  </div>
                  <div
                    className="w-full rounded-t-sm transition-all duration-500"
                    style={{
                      height: `${Math.max(pct, 4)}%`,
                      background: isToday ? GOLD : level.color,
                      opacity: isToday ? 1 : 0.5 + (i / history.length) * 0.5,
                    }}
                  />
                  {(i === 0 || i === 6 || i === history.length - 1) && (
                    <span className="text-[9px] text-white/30 text-center leading-tight mt-1">
                      {day.label}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Milestone Tracker ───────────────────────────────────────── */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-white/80 flex items-center gap-2">
            <Star className="w-5 h-5" style={{ color: GOLD }} />
            Milestones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MILESTONES.map(milestone => {
              const unlocked = bondScore >= milestone.score
              return (
                <div
                  key={milestone.id}
                  className="rounded-xl border p-4 flex items-start gap-3 transition-all"
                  style={{
                    background: unlocked ? `${GOLD}08` : SURFACE,
                    borderColor: unlocked ? `${GOLD}44` : BORDER,
                    opacity: unlocked ? 1 : 0.5,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: unlocked ? `${GOLD}22` : 'rgba(255,255,255,0.05)',
                    }}
                  >
                    {unlocked ? (
                      <Star className="w-4 h-4" style={{ color: GOLD }} />
                    ) : (
                      <Lock className="w-4 h-4 text-white/30" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`font-semibold text-sm ${unlocked ? 'text-white' : 'text-white/40'}`}>
                        {milestone.title}
                      </span>
                      <span
                        className="text-xs flex-shrink-0"
                        style={{ color: unlocked ? GOLD : 'rgba(255,255,255,0.2)' }}
                      >
                        {milestone.score} pts
                      </span>
                    </div>
                    <p className="text-xs text-white/40 mt-0.5">{milestone.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Bond Insights ───────────────────────────────────────────── */}
        <section
          className="rounded-2xl border p-6"
          style={{ background: SURFACE, borderColor: BORDER }}
        >
          <h2 className="text-lg font-semibold mb-4 text-white/80 flex items-center gap-2">
            <Sparkles className="w-5 h-5" style={{ color: GOLD }} />
            Bond Insights
          </h2>

          {loadingInsights ? (
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="h-14 rounded-lg animate-pulse"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {insights.map((insight, i) => (
                <div
                  key={i}
                  className="rounded-xl border p-4 flex gap-3"
                  style={{ borderColor: BORDER, background: 'rgba(201,168,76,0.04)' }}
                >
                  <div
                    className="w-1.5 rounded-full flex-shrink-0 mt-1"
                    style={{ background: GOLD, minHeight: '1rem' }}
                  />
                  <p className="text-sm text-white/70 leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <div className="pb-8 text-center">
          <a
            href="/dashboard/chat"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: GOLD, color: DEEP }}
          >
            <MessageSquare className="w-4 h-4" />
            Continue Building Your Bond
          </a>
        </div>

      </div>
    </div>
  )
}
