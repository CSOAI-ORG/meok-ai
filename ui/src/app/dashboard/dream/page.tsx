'use client'

import { useState, useCallback, useEffect } from 'react'
import {
  Moon,
  Sparkles,
  Network,
  Clock,
  RefreshCw,
  Loader2,
  AlertCircle,
  BookOpen,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { DreamInsight } from '@/lib/dream'

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface DreamData {
  insights: DreamInsight[]
  themes: string[]
  processed_at: string
  has_data: boolean
}

type FetchStatus = 'idle' | 'loading' | 'success' | 'error'

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function formatProcessedAt(iso: string): string {
  const date = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60_000)
  const diffHours = Math.floor(diffMs / 3_600_000)

  if (diffMins < 1) return 'just now'
  if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`
  if (diffHours < 24)
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function DreamInsightCard({ insight, index }: { insight: DreamInsight; index: number }) {
  const confidencePercent = Math.round(insight.confidence * 100)
  return (
    <div
      className="rounded-lg border border-purple-700/30 bg-gradient-to-r from-purple-900/20 to-indigo-900/10 p-4 space-y-3"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-100 capitalize mb-1">{insight.pattern}</h4>
          <p className="text-sm text-gray-300 leading-relaxed">{insight.insight}</p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-lg font-semibold text-purple-300">{confidencePercent}%</div>
          <div className="text-xs text-gray-400">confidence</div>
        </div>
      </div>

      {insight.connections.length > 0 && (
        <div className="flex flex-wrap gap-1 pt-2 border-t border-purple-700/20">
          {insight.connections.map((conn) => (
            <Badge
              key={conn}
              variant="outline"
              className="text-xs bg-purple-900/30 text-purple-200 border-purple-700/30"
            >
              {conn}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}

function ThemeChip({ theme, index }: { theme: string; index: number }) {
  const hues = ['#7C9CF5', '#A78BFA', '#F472B6', '#34D399', '#F59E0B', '#60A5FA', '#FBBF24', '#EC4899']
  const color = hues[index % hues.length]
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
    >
      {theme}
    </span>
  )
}

function EmptyState() {
  return (
    <div className="rounded-xl p-12 text-center space-y-4 border border-dashed border-purple-800/40 bg-purple-950/10">
      <Moon className="w-12 h-12 mx-auto text-purple-400 opacity-50" />
      <p className="text-gray-300 font-medium">No dream insights yet</p>
      <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
        Your companion analyses your conversations each night to find patterns and insights.
        Start chatting to generate your first dream cycle, or click &quot;Process now&quot; to run it manually.
      </p>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className="rounded-lg h-24 animate-pulse"
          style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)' }}
        />
      ))}
    </div>
  )
}

function ErrorBanner({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="rounded-lg p-4 flex items-center justify-between gap-3 text-sm"
      style={{ background: '#1f0a0a', border: '1px solid rgba(239,68,68,0.3)', color: '#FCA5A5' }}>
      <div className="flex items-center gap-2">
        <AlertCircle className="w-4 h-4 shrink-0" />
        {message}
      </div>
      <Button size="sm" variant="outline" onClick={onRetry} className="shrink-0 text-xs">
        Retry
      </Button>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────

export default function DreamPage() {
  const [data, setData] = useState<DreamData | null>(null)
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)

  const fetchDreams = useCallback(async () => {
    setFetchStatus('loading')
    setErrorMsg(null)
    try {
      const res = await fetch('/api/user/dreams')
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error((body as { error?: string }).error ?? `HTTP ${res.status}`)
      }
      const json: DreamData = await res.json()
      setData(json)
      setFetchStatus('success')
    } catch (err) {
      console.error('[DreamPage] fetch error:', err)
      setErrorMsg(err instanceof Error ? err.message : 'Could not load dream insights.')
      setFetchStatus('error')
    }
  }, [])

  useEffect(() => {
    fetchDreams()
  }, [fetchDreams])

  const handleProcessNow = useCallback(async () => {
    setProcessing(true)
    try {
      const res = await fetch('/api/user/dreams')
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error((body as { error?: string }).error ?? `HTTP ${res.status}`)
      }
      const json: DreamData = await res.json()
      setData(json)
      setFetchStatus('success')
      setErrorMsg(null)
    } catch (err) {
      console.error('[DreamPage] process error:', err)
      setErrorMsg(err instanceof Error ? err.message : 'Could not process dream cycle.')
      setFetchStatus('error')
    } finally {
      setProcessing(false)
    }
  }, [])

  const isLoading = fetchStatus === 'idle' || fetchStatus === 'loading'
  const hasData = data?.has_data && (data.insights.length > 0 || data.themes.length > 0)

  return (
    <div className="min-h-screen bg-[#0d0c18]">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <Moon className="w-6 h-6 text-purple-400" />
              <h1 className="text-3xl font-bold text-gray-100">Dream Cycle</h1>
            </div>
            <p className="text-gray-400">
              Overnight insights from analysing your conversations — patterns that emerge when your mind synthesises.
            </p>
          </div>

          <Button
            onClick={handleProcessNow}
            disabled={processing || isLoading}
            variant="outline"
            className="shrink-0 gap-2"
          >
            {processing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing…
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                Process now
              </>
            )}
          </Button>
        </div>

        {/* Last processed */}
        {data?.processed_at && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock className="w-3.5 h-3.5" />
            Last processed: {formatProcessedAt(data.processed_at)}
          </div>
        )}

        {/* Error banner */}
        {fetchStatus === 'error' && errorMsg && (
          <ErrorBanner message={errorMsg} onRetry={fetchDreams} />
        )}

        {/* Loading skeleton */}
        {isLoading && <LoadingSkeleton />}

        {/* Empty state */}
        {!isLoading && fetchStatus === 'success' && !hasData && <EmptyState />}

        {/* Content */}
        {!isLoading && hasData && (
          <>
            {/* Insights */}
            {data!.insights.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <h2 className="text-lg font-semibold text-gray-100">Dream Insights</h2>
                  <span className="text-xs text-gray-500 ml-1">
                    {data!.insights.length} pattern{data!.insights.length !== 1 ? 's' : ''} detected
                  </span>
                </div>

                <div className="space-y-3">
                  {data!.insights.map((insight, idx) => (
                    <DreamInsightCard key={`${insight.pattern}-${idx}`} insight={insight} index={idx} />
                  ))}
                </div>

                <div className="text-sm text-gray-400 pt-1 border-t border-gray-700/30">
                  {data!.insights.length} recurring pattern{data!.insights.length !== 1 ? 's' : ''} detected
                  across{' '}
                  {data!.insights.reduce((sum, i) => sum + i.connections.length, 0)} interconnected topics
                </div>
              </section>
            )}

            {/* Recurring themes */}
            {data!.themes.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Network className="w-5 h-5 text-blue-400" />
                  <h2 className="text-lg font-semibold text-gray-100">Recurring Themes</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {data!.themes.map((theme, idx) => (
                    <ThemeChip key={theme} theme={theme} index={idx} />
                  ))}
                </div>

                <p className="text-sm text-gray-500">
                  {data!.themes.length} major theme{data!.themes.length !== 1 ? 's' : ''} extracted from your conversations
                </p>
              </section>
            )}

            {/* How it works */}
            <section className="border-t border-gray-800 pt-8 space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <h3 className="text-sm font-semibold text-gray-200">How Dream Cycles Work</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-gray-300 font-medium">Overnight Processing</p>
                  <p className="text-gray-400">
                    Each night, your companion analyses recent conversations to extract themes and patterns.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-300 font-medium">Connection Discovery</p>
                  <p className="text-gray-400">
                    The system finds unexpected bridges between your interests and recurring preoccupations.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-300 font-medium">Theme Tracking</p>
                  <p className="text-gray-400">
                    Your major themes are tracked over time, showing what matters most to you.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-300 font-medium">Insight Surfacing</p>
                  <p className="text-gray-400">
                    Morning briefings include a curated dream insight to spark the day&apos;s conversation.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
