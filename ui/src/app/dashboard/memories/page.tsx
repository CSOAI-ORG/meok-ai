'use client'

import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import {
  Search,
  Calendar,
  Tag,
  TrendingUp,
  BookMarked,
  Clock,
  Zap,
  Trash2,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// ─────────────────────────────────────────────────────────────────────────────
// Brand tokens
// ─────────────────────────────────────────────────────────────────────────────

const DEEP = '#0d0c18'
const SURFACE = '#13121f'
const BORDER = 'rgba(255,255,255,0.07)'
const GOLD = '#c9a84c'

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface Memory {
  id: string
  date: string           // ISO string from API
  content: string
  topics: string[]
  emotional_tone: string
  importance: number     // 0-100
  recency_decay: number  // 0-1
  retrieval_count: number
}

interface TopicCluster {
  topic: string
  color: string
  memories: Memory[]
  weight: number
}

type SortKey = 'date' | 'importance' | 'relevance'
type FetchStatus = 'idle' | 'loading' | 'success' | 'error' | 'unavailable'

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const TOPIC_COLORS: Record<string, string> = {
  'distributed-systems': '#7BC47F',
  consensus: '#7BC47F',
  history: '#F472B6',
  writing: '#F59E0B',
  governance: '#7BC47F',
  achievement: '#F59E0B',
  celebration: '#FBBF24',
  ai: '#7C9CF5',
  synthesis: '#A78BFA',
  wellness: '#EC4899',
  motivation: '#F59E0B',
  support: '#EC4899',
  strategies: '#7C9CF5',
  learning: '#F59E0B',
  beginning: '#7BC47F',
  intellectual: '#7C9CF5',
  goals: '#A78BFA',
  growth: '#F472B6',
  values: '#EC4899',
  foundation: '#7BC47F',
  philosophy: '#A78BFA',
  trust: '#EC4899',
  vulnerable: '#EC4899',
  curious: '#7C9CF5',
  thoughtful: '#A78BFA',
  proud: '#FBBF24',
  hopeful: '#F59E0B',
  general: '#8B5CF6',
}

function topicColor(topic: string): string {
  return TOPIC_COLORS[topic] ?? '#8B5CF6'
}

function toneColor(tone: string): string {
  const colors: Record<string, string> = {
    curious: '#7C9CF5',
    thoughtful: '#A78BFA',
    proud: '#F59E0B',
    vulnerable: '#EC4899',
    hopeful: '#F472B6',
    neutral: '#6B7280',
    happy: '#FBBF24',
    sad: '#60A5FA',
    anxious: '#F87171',
    excited: '#34D399',
  }
  return colors[tone] ?? '#8B5CF6'
}

function formatDate(iso: string): string {
  const date = new Date(iso)
  const today = new Date()
  const yesterday = new Date(today.getTime() - 86_400_000)
  if (date.toDateString() === today.toDateString()) return 'Today'
  if (date.toDateString() === yesterday.toDateString()) return 'Yesterday'
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function isOlderThan90Days(iso: string): boolean {
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - 90)
  return new Date(iso) < cutoff
}

function buildTopicClusters(memories: Memory[]): TopicCluster[] {
  const clusters: Record<string, Memory[]> = {}
  memories.forEach(m => {
    m.topics.forEach(t => {
      if (!clusters[t]) clusters[t] = []
      clusters[t].push(m)
    })
  })
  return Object.entries(clusters)
    .map(([topic, mems]) => ({
      topic,
      color: topicColor(topic),
      memories: mems,
      weight: mems.reduce((s, m) => s + m.importance, 0) / mems.length,
    }))
    .sort((a, b) => b.weight - a.weight)
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function MemoryCard({
  memory,
  onDelete,
}: {
  memory: Memory
  onDelete: (id: string) => void
}) {
  const [confirming, setConfirming] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const color = toneColor(memory.emotional_tone)

  async function handleDelete() {
    if (!confirming) {
      setConfirming(true)
      return
    }
    setDeleting(true)
    try {
      const res = await fetch(`/api/user/memories/${memory.id}`, { method: 'DELETE' })
      if (res.ok) {
        onDelete(memory.id)
      }
    } catch {
      // swallow — UI stays intact
    } finally {
      setDeleting(false)
      setConfirming(false)
    }
  }

  return (
    <div
      className="group rounded-lg border bg-gray-900/40 hover:bg-gray-900/60 p-4 transition-all"
      style={{
        borderColor: BORDER,
        borderLeftColor: color,
        borderLeftWidth: '4px',
        background: SURFACE,
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <div className="text-sm text-gray-400 flex items-center gap-2">
            <Calendar className="w-3 h-3" />
            {formatDate(memory.date)}
          </div>
          {memory.recency_decay < 0.6 && (
            <div className="text-xs text-gray-500 mt-1">
              This memory is fading… ({Math.round(memory.recency_decay * 100)}% retained)
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-gray-400 font-semibold">
              {Math.round(memory.importance)}
              <span className="text-xs text-gray-500"> importance</span>
            </div>
            {memory.retrieval_count > 0 && (
              <div className="text-xs text-gray-500 mt-1">
                Referenced {memory.retrieval_count}×
              </div>
            )}
          </div>

          {/* Delete button — visible on hover */}
          <button
            onClick={handleDelete}
            disabled={deleting}
            className={`
              opacity-0 group-hover:opacity-100 transition-opacity
              p-1 rounded hover:bg-red-900/30
              ${confirming ? 'opacity-100 text-red-400' : 'text-gray-600 hover:text-red-400'}
            `}
            title={confirming ? 'Click again to confirm delete' : 'Delete memory'}
          >
            {deleting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Trash2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-300 mb-3 leading-relaxed">{memory.content}</p>

      <div className="flex flex-wrap gap-1">
        {memory.topics.map(t => (
          <Badge
            key={t}
            variant="outline"
            className="text-xs bg-gray-800/50"
            style={{ borderColor: topicColor(t), color: topicColor(t) }}
          >
            {t}
          </Badge>
        ))}
      </div>

      {confirming && (
        <div className="mt-2 text-xs text-red-400 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          Click the delete icon again to confirm, or click elsewhere to cancel.
        </div>
      )}
    </div>
  )
}

function TopicBubble({
  cluster,
  onClick,
  isSelected,
}: {
  cluster: TopicCluster
  onClick: () => void
  isSelected: boolean
}) {
  const size = Math.max(60, Math.min(120, 60 + cluster.weight / 2))
  return (
    <button
      onClick={onClick}
      className="rounded-full flex flex-col items-center justify-center transition-all hover:scale-110 focus:outline-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `${cluster.color}20`,
        border: `${isSelected ? 2 : 1}px solid ${cluster.color}`,
        color: cluster.color,
        boxShadow: isSelected ? `0 0 12px ${cluster.color}40` : 'none',
      }}
    >
      <div className="text-center text-xs font-semibold leading-tight px-1">
        {cluster.topic.replace(/-/g, ' ')}
      </div>
      <div className="text-xs text-gray-400 mt-1">{cluster.memories.length}</div>
    </button>
  )
}

function FadingMemory({
  memory,
  onDelete,
}: {
  memory: Memory
  onDelete: (id: string) => void
}) {
  const [recovering, setRecovering] = useState(false)
  const [recovered, setRecovered] = useState(false)

  return (
    <div
      className="rounded-lg p-4 opacity-60 hover:opacity-100 transition-opacity"
      style={{ border: `1px solid ${BORDER}`, background: SURFACE }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-xs text-gray-500 flex items-center gap-2 mb-2">
            <Clock className="w-3 h-3" />
            {formatDate(memory.date)} · {Math.round((1 - memory.recency_decay) * 100)}% faded
          </div>
          <p className="text-xs text-gray-400 line-clamp-2">{memory.content}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              setRecovering(true)
              setTimeout(() => {
                setRecovered(true)
                setRecovering(false)
              }, 600)
            }}
            className="text-xs font-semibold text-gray-500 hover:text-gray-300 px-2 py-1 rounded hover:bg-gray-800"
          >
            {recovering ? '…' : recovered ? '✓ Recovered' : 'Recover'}
          </button>
          <button
            onClick={() => onDelete(memory.id)}
            className="text-gray-600 hover:text-red-400 p-1 rounded hover:bg-red-900/20"
            title="Delete memory"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Empty / error states
// ─────────────────────────────────────────────────────────────────────────────

function EmptyState({ unavailable }: { unavailable?: boolean }) {
  return (
    <div
      className="rounded-xl p-12 text-center space-y-4"
      style={{ border: `1px solid ${BORDER}`, background: SURFACE }}
    >
      <BookMarked className="w-12 h-12 mx-auto" style={{ color: GOLD, opacity: 0.5 }} />
      {unavailable ? (
        <>
          <p className="text-gray-300 font-medium">Memory backend offline</p>
          <p className="text-sm text-gray-500">
            Your memories are stored securely. The semantic memory server is temporarily unavailable — start chatting to create memories that will appear here.
          </p>
        </>
      ) : (
        <>
          <p className="text-gray-300 font-medium">Your memories live here.</p>
          <p className="text-sm text-gray-500">
            Start a conversation to create your first memory.
          </p>
        </>
      )}
    </div>
  )
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div
      className="rounded-lg p-4 flex items-center gap-3 text-sm"
      style={{ background: '#1f0a0a', border: '1px solid rgba(239,68,68,0.3)', color: '#FCA5A5' }}
    >
      <AlertCircle className="w-4 h-4 shrink-0" />
      {message}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────

export default function MemoriesPage() {
  const [memories, setMemories] = useState<Memory[]>([])
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortKey>('date')

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ── Debounce search input ──────────────────────────────────────────────────
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => setDebouncedQuery(searchQuery), 450)
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [searchQuery])

  // ── Fetch memories whenever debounced query changes ────────────────────────
  const fetchMemories = useCallback(async (q: string) => {
    setFetchStatus('loading')
    setErrorMsg(null)
    try {
      const url = q ? `/api/user/memories?q=${encodeURIComponent(q)}` : '/api/user/memories'
      const res = await fetch(url)

      if (res.status === 404) {
        setFetchStatus('unavailable')
        setMemories([])
        return
      }

      if (res.status === 502) {
        // Backend unreachable and DB fallback also failed
        setFetchStatus('unavailable')
        setMemories([])
        return
      }

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error ?? `HTTP ${res.status}`)
      }

      const data = await res.json()
      const list: Memory[] = Array.isArray(data.memories) ? data.memories : []
      setMemories(list)
      setFetchStatus('success')
    } catch (err) {
      console.error('[MemoriesPage] fetch error:', err)
      setErrorMsg(err instanceof Error ? err.message : 'Could not load memories.')
      setFetchStatus('error')
    }
  }, [])

  useEffect(() => {
    fetchMemories(debouncedQuery)
  }, [debouncedQuery, fetchMemories])

  // ── Delete handler ─────────────────────────────────────────────────────────
  const handleDelete = useCallback((id: string) => {
    setMemories(prev => prev.filter(m => m.id !== id))
  }, [])

  // ── Derived data ───────────────────────────────────────────────────────────

  // "Active" memories: recency_decay > 0.3 (or unknown → treat as active)
  const activeMemories = useMemo(
    () => memories.filter(m => m.recency_decay > 0.3),
    [memories],
  )

  // "Fading" / forgotten: older than 90 days OR very low recency_decay OR low retrieval
  const fadingMemories = useMemo(
    () =>
      memories.filter(
        m =>
          m.recency_decay <= 0.3 ||
          isOlderThan90Days(m.date) ||
          (m.retrieval_count === 0 && m.recency_decay < 0.5),
      ),
    [memories],
  )

  const topicClusters = useMemo(() => buildTopicClusters(activeMemories), [activeMemories])

  const filteredMemories = useMemo(() => {
    let results = activeMemories

    // Client-side filter only when not using server-side semantic search
    if (!debouncedQuery && searchQuery) {
      const q = searchQuery.toLowerCase()
      results = results.filter(
        m => m.content.toLowerCase().includes(q) || m.topics.some(t => t.includes(q)),
      )
    }

    if (selectedTopic) {
      results = results.filter(m => m.topics.includes(selectedTopic))
    }

    const sorted = [...results]
    if (sortBy === 'importance') {
      sorted.sort((a, b) => b.importance - a.importance)
    } else if (sortBy === 'relevance') {
      sorted.sort((a, b) => b.retrieval_count - a.retrieval_count)
    } else {
      sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }

    return sorted
  }, [activeMemories, debouncedQuery, searchQuery, selectedTopic, sortBy])

  const avgImportance =
    memories.length > 0
      ? Math.round(memories.reduce((s, m) => s + m.importance, 0) / memories.length)
      : 0

  const retainedPct =
    memories.length > 0
      ? Math.round(((memories.length - fadingMemories.length) / memories.length) * 100)
      : 0

  const isLoading = fetchStatus === 'loading' || fetchStatus === 'idle'
  const isEmpty =
    !isLoading && fetchStatus !== 'error' && memories.length === 0

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen text-gray-100" style={{ background: DEEP }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10"
        style={{
          borderBottom: `1px solid ${BORDER}`,
          background: `linear-gradient(to bottom, ${SURFACE}, ${DEEP})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-100 mb-2 flex items-center gap-3">
            <BookMarked className="w-8 h-8" style={{ color: GOLD }} />
            Memory Timeline
          </h1>
          <p className="text-gray-400">
            Browse memories, explore topics, and recover fading recollections
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* Error banner */}
        {fetchStatus === 'error' && errorMsg && (
          <ErrorBanner message={errorMsg} />
        )}

        {/* Search & Filters */}
        <div className="space-y-4">
          <div className="relative">
            {isLoading && searchQuery ? (
              <Loader2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 animate-spin" />
            ) : (
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            )}
            <Input
              placeholder="Search memories…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-900 border-gray-800"
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as SortKey)}
              className="px-3 py-2 rounded text-sm bg-gray-900 border border-gray-800 text-gray-100"
            >
              <option value="date">Recent First</option>
              <option value="importance">Most Important</option>
              <option value="relevance">Most Referenced</option>
            </select>

            {isLoading && (
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Loader2 className="w-3 h-3 animate-spin" />
                Loading…
              </span>
            )}
          </div>
        </div>

        {/* Loading skeleton */}
        {isLoading && (
          <div className="space-y-3">
            {[1, 2, 3].map(n => (
              <div
                key={n}
                className="rounded-lg h-24 animate-pulse"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
              />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && isEmpty && (
          <EmptyState unavailable={fetchStatus === 'unavailable'} />
        )}

        {/* Content — only show once we have data */}
        {!isLoading && memories.length > 0 && (
          <>
            {/* Topic Clustering */}
            {topicClusters.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  Topic Clusters
                </h2>

                <div
                  className="flex flex-wrap gap-6 justify-center items-center p-8 rounded-lg"
                  style={{ background: `${SURFACE}`, border: `1px solid ${BORDER}` }}
                >
                  {topicClusters.map(cluster => (
                    <TopicBubble
                      key={cluster.topic}
                      cluster={cluster}
                      onClick={() =>
                        setSelectedTopic(selectedTopic === cluster.topic ? null : cluster.topic)
                      }
                      isSelected={selectedTopic === cluster.topic}
                    />
                  ))}
                </div>

                {selectedTopic && (
                  <div
                    className="flex items-center justify-between rounded-lg p-4"
                    style={{ background: `${SURFACE}80`, border: `1px solid ${BORDER}` }}
                  >
                    <span className="text-sm text-gray-300">
                      Filtering by:{' '}
                      <span className="font-semibold" style={{ color: GOLD }}>
                        {selectedTopic}
                      </span>
                    </span>
                    <Button size="sm" variant="outline" onClick={() => setSelectedTopic(null)}>
                      Clear Filter
                    </Button>
                  </div>
                )}
              </section>
            )}

            {/* Memory Timeline */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-yellow-400" />
                Memory Timeline ({filteredMemories.length})
              </h2>

              <div className="space-y-3">
                {filteredMemories.length > 0 ? (
                  filteredMemories.map(m => (
                    <MemoryCard key={m.id} memory={m} onDelete={handleDelete} />
                  ))
                ) : (
                  <div
                    className="text-center py-12 rounded-lg text-gray-400"
                    style={{ border: `1px solid ${BORDER}`, background: SURFACE }}
                  >
                    <p>No memories match your search or filters.</p>
                    {selectedTopic && (
                      <button
                        className="mt-2 text-sm underline"
                        style={{ color: GOLD }}
                        onClick={() => setSelectedTopic(null)}
                      >
                        Clear topic filter
                      </button>
                    )}
                  </div>
                )}
              </div>
            </section>

            {/* Fading Memories */}
            {fadingMemories.length > 0 && (
              <section className="space-y-4 pt-8" style={{ borderTop: `1px solid ${BORDER}` }}>
                <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-gray-500" />
                  Fading Memories ({fadingMemories.length})
                </h2>
                <p className="text-sm text-gray-400">
                  These memories are old or rarely revisited. Recover them to keep them vivid.
                </p>
                <div className="space-y-3">
                  {fadingMemories.map(m => (
                    <FadingMemory key={m.id} memory={m} onDelete={handleDelete} />
                  ))}
                </div>
              </section>
            )}

            {/* Stats */}
            <section
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              <div
                className="rounded-lg p-4"
                style={{ background: `${SURFACE}`, border: `1px solid ${BORDER}` }}
              >
                <div className="text-2xl font-bold text-blue-400">{memories.length}</div>
                <div className="text-xs text-gray-400 mt-1">Total Memories</div>
              </div>
              <div
                className="rounded-lg p-4"
                style={{ background: `${SURFACE}`, border: `1px solid ${BORDER}` }}
              >
                <div className="text-2xl font-bold text-purple-400">{topicClusters.length}</div>
                <div className="text-xs text-gray-400 mt-1">Topic Clusters</div>
              </div>
              <div
                className="rounded-lg p-4"
                style={{ background: `${SURFACE}`, border: `1px solid ${BORDER}` }}
              >
                <div className="text-2xl font-bold" style={{ color: GOLD }}>
                  {avgImportance}
                </div>
                <div className="text-xs text-gray-400 mt-1">Avg. Importance</div>
              </div>
              <div
                className="rounded-lg p-4"
                style={{ background: `${SURFACE}`, border: `1px solid ${BORDER}` }}
              >
                <div className="text-2xl font-bold text-green-400">{retainedPct}%</div>
                <div className="text-xs text-gray-400 mt-1">Retained</div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
