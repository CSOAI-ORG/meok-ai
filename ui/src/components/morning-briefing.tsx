'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Sun, Moon, Cloud, Sparkles, MessageSquare, BookOpen, Heart, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// ─────────────────────────────────────────────────────────────────────────────
// Types & Helpers
// ─────────────────────────────────────────────────────────────────────────────

interface MorningBriefingProps {
  companionName?: string
  companionEmoji?: string
  userName?: string
  currentStreak?: number
  lastMood?: string
  dreamInsight?: string
  careSignals?: Array<{ message: string; type: 'motivation' | 'reminder' | 'celebration' }>
}

function getTimeOfDay(): { period: 'morning' | 'afternoon' | 'evening' | 'night'; icon: React.ReactNode; greeting: string } {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return {
      period: 'morning',
      icon: <Sun className="w-5 h-5 text-yellow-400" />,
      greeting: 'Good morning',
    }
  }
  if (hour >= 12 && hour < 17) {
    return {
      period: 'afternoon',
      icon: <Cloud className="w-5 h-5 text-blue-300" />,
      greeting: 'Good afternoon',
    }
  }
  if (hour >= 17 && hour < 21) {
    return {
      period: 'evening',
      icon: <Moon className="w-5 h-5 text-purple-400" />,
      greeting: 'Good evening',
    }
  }
  return {
    period: 'night',
    icon: <Moon className="w-5 h-5 text-indigo-400" />,
    greeting: 'Good night',
  }
}

function getGreetingVariant(streak?: number): string {
  if (!streak) return ''
  if (streak < 3) return ''
  if (streak < 7) return " You're on a roll!"
  if (streak < 14) return ' Week strong!'
  if (streak < 30) return ' Incredible consistency!'
  return " You're unstoppable!"
}

function getBackgroundGradient(period: 'morning' | 'afternoon' | 'evening' | 'night'): string {
  switch (period) {
    case 'morning':
      return 'from-amber-900/30 via-orange-900/20 to-[#0d0c18]'
    case 'afternoon':
      return 'from-sky-900/30 via-blue-900/20 to-[#0d0c18]'
    case 'evening':
      return 'from-purple-900/30 via-indigo-900/20 to-[#0d0c18]'
    case 'night':
      return 'from-indigo-950/30 via-slate-900/20 to-[#0d0c18]'
  }
}

function getBorderColor(period: 'morning' | 'afternoon' | 'evening' | 'night'): string {
  switch (period) {
    case 'morning':
      return 'border-yellow-700/30'
    case 'afternoon':
      return 'border-blue-700/30'
    case 'evening':
      return 'border-purple-700/30'
    case 'night':
      return 'border-indigo-700/30'
  }
}

// Example dream insights (would come from dream-cycle processing in real implementation)
const DREAM_INSIGHTS = [
  'You seem to be processing a recent conversation about resilience.',
  'Your dreams centered around growth and new beginnings.',
  "There's a theme of connection running through your recent memories.",
  "You've been exploring creative solutions in your sleep thinking.",
  'Your mind is synthesizing several conversations into new insights.',
]

// Example care signals
const CARE_SIGNALS = [
  { message: "You've logged 5 conversations this week. Great consistency!", type: 'celebration' as const },
  { message: "Remember to take a break if you need one. I'm here whenever you're ready.", type: 'reminder' as const },
  { message: "Your kindness toward yourself yesterday didn't go unnoticed.", type: 'motivation' as const },
  { message: 'New perspective unlocked: Your latest conversation showed real growth.', type: 'celebration' as const },
]

// ─────────────────────────────────────────────────────────────────────────────
// Components
// ─────────────────────────────────────────────────────────────────────────────

interface CareSignalProps {
  message: string
  type: 'motivation' | 'reminder' | 'celebration'
}

function CareSignalCard({ message, type }: CareSignalProps) {
  const iconMap = {
    motivation: <Sparkles className="w-4 h-4 text-blue-400" />,
    reminder: <Heart className="w-4 h-4 text-pink-400" />,
    celebration: <Sparkles className="w-4 h-4 text-amber-400" />,
  }

  const bgMap = {
    motivation: 'from-blue-900/20 to-slate-900/10',
    reminder: 'from-pink-900/20 to-slate-900/10',
    celebration: 'from-amber-900/20 to-slate-900/10',
  }

  return (
    <div className={`
      rounded-lg p-4 border border-gray-700/50 bg-gradient-to-r ${bgMap[type]}
      flex items-start gap-3
    `}>
      <div className="mt-1 flex-shrink-0">
        {iconMap[type]}
      </div>
      <p className="text-sm text-gray-200 flex-1">
        {message}
      </p>
    </div>
  )
}

export function MorningBriefing({
  companionName = 'The Scholar',
  companionEmoji = '🏛️',
  userName = 'there',
  currentStreak = 5,
  lastMood,
  dreamInsight,
  careSignals = [],
}: MorningBriefingProps) {
  const timeOfDay = useMemo(() => getTimeOfDay(), [])
  const [dismissedDream, setDismissedDream] = useState(false)
  const [dismissedSignals, setDismissedSignals] = useState(false)

  // Select random insights if not provided
  const selectedDreamInsight = useMemo(
    () => dreamInsight || DREAM_INSIGHTS[Math.floor(Math.random() * DREAM_INSIGHTS.length)],
    [dreamInsight]
  )

  const selectedCareSignals = useMemo(
    () => careSignals.length > 0 ? careSignals : CARE_SIGNALS.slice(0, 2),
    [careSignals]
  )

  const backgroundColor = `bg-gradient-to-br ${getBackgroundGradient(timeOfDay.period)}`
  const borderColor = `border ${getBorderColor(timeOfDay.period)}`

  return (
    <div className={`rounded-xl ${backgroundColor} ${borderColor} overflow-hidden`}>
      {/* Header Section */}
      <div className="p-6 space-y-4">
        {/* Greeting */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {timeOfDay.icon}
            <div>
              <h2 className="text-xl font-semibold text-gray-100">
                {timeOfDay.greeting}, {userName}
              </h2>
              <p className="text-sm text-gray-400">
                {companionEmoji} {companionName} is ready for the day
              </p>
            </div>
          </div>

          {/* Streak badge */}
          {currentStreak > 0 && (
            <Badge className="bg-amber-900/40 text-amber-200 border border-amber-700/50 whitespace-nowrap">
              <span className="mr-1">🔥</span>
              {currentStreak}-day streak{getGreetingVariant(currentStreak)}
            </Badge>
          )}
        </div>

        {/* Mood indicator */}
        {lastMood && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Current vibe:</span>
            <Badge variant="outline" className="bg-gray-900 border-gray-700">
              {lastMood}
            </Badge>
          </div>
        )}
      </div>

      {/* Dream Insight Section */}
      {!dismissedDream && (
        <div className="px-6 py-4 border-t border-gray-800 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-100 mb-1">Today's Insight</h3>
                <p className="text-sm text-gray-300">
                  {selectedDreamInsight}
                </p>
              </div>
            </div>
            <button type="button"
              onClick={() => setDismissedDream(true)}
              className="text-gray-500 hover:text-gray-300 flex-shrink-0 text-sm"
              aria-label="Dismiss insight"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Care Signals Section */}
      {!dismissedSignals && selectedCareSignals.length > 0 && (
        <div className="px-6 py-4 border-t border-gray-800 space-y-3">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-100 flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              Care Signals
            </h3>
            <button type="button"
              onClick={() => setDismissedSignals(true)}
              className="text-gray-500 hover:text-gray-300 text-sm"
              aria-label="Dismiss all"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2">
            {selectedCareSignals.map((signal, idx) => (
              <CareSignalCard key={idx} {...signal} />
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="px-6 py-4 border-t border-gray-800 flex flex-wrap gap-2">
        <Link href="/dashboard/chat">
          <Button size="sm" variant="outline" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            Chat
          </Button>
        </Link>
        <Link href="/dashboard/journal">
          <Button size="sm" variant="outline" className="gap-2">
            <BookOpen className="w-4 h-4" />
            Journal
          </Button>
        </Link>
        <button className="text-xs text-gray-400 hover:text-gray-200 py-2 px-3">
          More <ChevronRight className="w-3 h-3 inline" />
        </button>
      </div>
    </div>
  )
}

// Standalone page version (can be used as /dashboard/morning or integrated elsewhere)
export function MorningBriefingPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18]">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-100 mb-2">Today's Briefing</h1>
          <p className="text-gray-400">Personalized insights and care signals from your companion</p>
        </div>

        <MorningBriefing
          companionName="The Scholar"
          companionEmoji="🏛️"
          userName="Nicholas"
          currentStreak={5}
          lastMood="focused"
        />

        {/* Additional briefing sections could go here */}
        <div className="mt-12 pt-8 border-t border-gray-800 space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-100 mb-4">Your Focus Today</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-400 text-sm mb-4">
                Based on your recent conversations, you seem focused on research and synthesis.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Continue researching Byzantine governance patterns
                </div>
                <div className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Draw connections to modern distributed systems
                </div>
                <div className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Consider writing up your synthesis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
