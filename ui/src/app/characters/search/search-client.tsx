'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'

// ── Brand constants ──────────────────────────────────────────────────────────
const DEEP = '#0d0c18'
const SURFACE = '#13121f'
const GOLD = '#c9a84c'
const BORDER = 'rgba(255,255,255,0.07)'

// ── Types ────────────────────────────────────────────────────────────────────

interface CharacterResult {
  id: string
  name: string
  title: string
  tagline: string
  archetype: string
  tier: string
  emoji: string
  color: string
  personality: string[]
  tags: string[]
  license: string | null
  score: number
}

interface SearchResponse {
  results: CharacterResult[]
  total: number
  matched: number
  query: string | null
  filters: {
    archetype: string | null
    tier: string | null
    pack: string | null
  }
}

// ── Filter options ────────────────────────────────────────────────────────────

const ARCHETYPES = [
  'challenger',
  'nurturer',
  'explorer',
  'sage',
  'seeker',
  'creator',
  'trickster',
  'rebel',
  'innocent',
] as const

const PACKS = [
  { id: 'original',      label: 'MEOK Originals' },
  { id: 'mythological',  label: 'Mythological' },
  { id: 'historical',    label: 'Historical' },
  { id: 'literary',      label: 'Literary' },
  { id: 'archetypes',    label: 'Archetypes' },
] as const

// ── Sub-components ────────────────────────────────────────────────────────────

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150 capitalize whitespace-nowrap"
      style={{
        background: active ? GOLD : 'rgba(255,255,255,0.05)',
        color: active ? DEEP : 'rgba(255,255,255,0.6)',
        border: `1px solid ${active ? GOLD : BORDER}`,
      }}
    >
      {label}
    </button>
  )
}

function CharacterCard({ character }: { character: CharacterResult }) {
  return (
    <Link href={`/characters/${character.id}`} className="block group">
      <div
        className="h-full rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 group-hover:translate-y-[-2px]"
        style={{
          background: SURFACE,
          border: `1px solid ${BORDER}`,
          boxShadow: '0 0 0 0 transparent',
        }}
      >
        {/* Emoji + name row */}
        <div className="flex items-start gap-3">
          <span className="text-3xl flex-shrink-0">{character.emoji}</span>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-white text-base leading-tight truncate">
              {character.name}
            </h3>
            <p className="text-xs mt-0.5 truncate" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {character.title}
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {character.tagline}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-auto">
          <span
            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize"
            style={{ background: 'rgba(201,168,76,0.12)', color: GOLD, border: `1px solid rgba(201,168,76,0.25)` }}
          >
            {character.archetype}
          </span>
          {character.tier && (
            <span
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize"
              style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)', border: `1px solid ${BORDER}` }}
            >
              {character.tier}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="h-40 rounded-2xl animate-pulse"
          style={{ background: SURFACE }}
        />
      ))}
    </div>
  )
}

function EmptyState({ query, hasFilters }: { query: string; hasFilters: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <span className="text-5xl mb-4">🔍</span>
      <h3 className="text-lg font-semibold text-white mb-2">No characters found</h3>
      <p className="text-sm max-w-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
        {query
          ? `No results for "${query}"${hasFilters ? ' with the current filters' : ''}.`
          : 'No characters match the selected filters.'}
        {' '}Try adjusting your search or clearing filters.
      </p>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function CharacterSearchClient() {
  const [query, setQuery] = useState('')
  const [selectedArchetype, setSelectedArchetype] = useState<string | null>(null)
  const [selectedPack, setSelectedPack] = useState<string | null>(null)
  const [results, setResults] = useState<CharacterResult[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const fetchResults = useCallback(async (q: string, archetype: string | null, pack: string | null) => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (q) params.set('q', q)
      if (archetype) params.set('archetype', archetype)
      if (pack) params.set('pack', pack)
      params.set('limit', '48')

      const res = await fetch(`/api/characters/search?${params.toString()}`)
      if (!res.ok) throw new Error('Search failed')
      const data: SearchResponse = await res.json()
      setResults(data.results)
      setTotal(data.matched)
    } catch {
      setResults([])
      setTotal(0)
    } finally {
      setLoading(false)
      setInitialLoad(false)
    }
  }, [])

  // Debounce query changes, instant filter changes
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      fetchResults(query, selectedArchetype, selectedPack)
    }, query ? 300 : 0)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [query, selectedArchetype, selectedPack, fetchResults])

  const hasFilters = !!(selectedArchetype || selectedPack)
  const clearFilters = () => {
    setSelectedArchetype(null)
    setSelectedPack(null)
  }

  return (
    <div style={{ background: DEEP, minHeight: '100vh', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Search input */}
        <div className="max-w-2xl mx-auto mb-10">
          <div
            className="flex items-center gap-3 rounded-2xl px-5 py-4"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <span className="text-xl flex-shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }}>🔍</span>
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by name, personality, or trait…"
              autoFocus
              className="flex-1 bg-transparent outline-none text-white placeholder:text-[rgba(255,255,255,0.3)] text-base"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs px-2 py-1 rounded-full transition-colors"
                style={{ color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)' }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Archetype filters */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Archetype
          </p>
          <div className="flex flex-wrap gap-2">
            {ARCHETYPES.map(archetype => (
              <FilterChip
                key={archetype}
                label={archetype}
                active={selectedArchetype === archetype}
                onClick={() => setSelectedArchetype(selectedArchetype === archetype ? null : archetype)}
              />
            ))}
          </div>
        </div>

        {/* Pack filters */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Pack
          </p>
          <div className="flex flex-wrap gap-2">
            {PACKS.map(pack => (
              <FilterChip
                key={pack.id}
                label={pack.label}
                active={selectedPack === pack.id}
                onClick={() => setSelectedPack(selectedPack === pack.id ? null : pack.id)}
              />
            ))}
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150"
                style={{ color: 'rgba(255,255,255,0.4)', border: `1px solid ${BORDER}` }}
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Results summary */}
        {!initialLoad && !loading && (
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
            {total === 0
              ? 'No characters found'
              : `${total} character${total !== 1 ? 's' : ''} found`}
          </p>
        )}

        {/* Results */}
        {loading || initialLoad ? (
          <LoadingGrid />
        ) : results.length === 0 ? (
          <EmptyState query={query} hasFilters={hasFilters} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {results.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
