'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

// ── Brand constants ───────────────────────────────────────────────────────────
const DEEP    = '#0d0c18'
const SURFACE = '#13121f'
const GOLD    = '#c9a84c'
const BORDER  = 'rgba(255,255,255,0.07)'

// ── Types ─────────────────────────────────────────────────────────────────────

interface MarketplaceCharacter {
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
  downloadCount: number
  avgRating: number | null
  priceCents: number | null
}

interface MarketplaceResponse {
  characters: MarketplaceCharacter[]
  total: number
  offset: number
  limit: number
  sort: string
}

type SortOption = 'popular' | 'rating' | 'newest'

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'popular',  label: '🔥 Most popular' },
  { value: 'rating',   label: '⭐ Top rated' },
  { value: 'newest',   label: '✨ Newest' },
]

const ARCHETYPES = [
  'challenger', 'nurturer', 'explorer', 'sage',
  'seeker', 'creator', 'trickster', 'rebel', 'innocent',
]

// ── Sub-components ────────────────────────────────────────────────────────────

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150 capitalize whitespace-nowrap"
      style={{
        background: active ? GOLD : 'rgba(255,255,255,0.05)',
        color:      active ? DEEP : 'rgba(255,255,255,0.6)',
        border:     `1px solid ${active ? GOLD : BORDER}`,
      }}
    >
      {label}
    </button>
  )
}

function StarRating({ rating }: { rating: number | null }) {
  if (rating === null) return null
  const stars = Math.round(rating * 5) / 5
  return (
    <span className="text-xs font-medium" style={{ color: GOLD }}>
      {'★'.repeat(Math.floor(stars))}{'☆'.repeat(5 - Math.floor(stars))} {rating.toFixed(1)}
    </span>
  )
}

function MarketplaceCard({ character }: { character: MarketplaceCharacter }) {
  const isFree = !character.priceCents || character.priceCents === 0

  return (
    <Link href={`/characters/${character.id}`} className="block group">
      <div
        className="h-full rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 group-hover:translate-y-[-2px]"
        style={{
          background:  SURFACE,
          border:      `1px solid ${BORDER}`,
          boxShadow:   `0 0 0 0 transparent`,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 20px ${character.color}22`
          ;(e.currentTarget as HTMLDivElement).style.borderColor = `${character.color}44`
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 0 transparent'
          ;(e.currentTarget as HTMLDivElement).style.borderColor = BORDER
        }}
      >
        {/* Header */}
        <div className="flex items-start gap-3">
          <span className="text-3xl flex-shrink-0">{character.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-white text-base leading-tight truncate">
                {character.name}
              </h3>
              {isFree && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                  style={{ background: 'rgba(34,197,94,0.15)', color: '#4ade80' }}
                >
                  Free
                </span>
              )}
            </div>
            <p className="text-xs mt-0.5 truncate" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {character.title}
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm leading-relaxed line-clamp-2 flex-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {character.tagline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          <span
            className="text-xs px-2 py-0.5 rounded-full capitalize font-medium"
            style={{ background: `${character.color}22`, color: character.color }}
          >
            {character.archetype}
          </span>
          {character.personality.slice(0, 2).map(trait => (
            <span
              key={trait}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
            >
              {trait}
            </span>
          ))}
        </div>

        {/* Footer: stats */}
        <div className="flex items-center justify-between pt-1 border-t" style={{ borderColor: BORDER }}>
          <div className="flex items-center gap-3">
            {character.avgRating !== null ? (
              <StarRating rating={character.avgRating} />
            ) : (
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>No ratings yet</span>
            )}
          </div>
          {character.downloadCount > 0 && (
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {character.downloadCount.toLocaleString()} uses
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl p-5 animate-pulse" style={{ background: SURFACE, border: `1px solid ${BORDER}`, height: 200 }}>
      <div className="flex gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-white/10" />
        <div className="flex-1">
          <div className="h-4 bg-white/10 rounded mb-2 w-3/4" />
          <div className="h-3 bg-white/05 rounded w-1/2" />
        </div>
      </div>
      <div className="h-3 bg-white/08 rounded mb-2" />
      <div className="h-3 bg-white/06 rounded w-4/5" />
    </div>
  )
}

// ── Main client component ─────────────────────────────────────────────────────

export default function MarketplaceClient() {
  const [characters, setCharacters] = useState<MarketplaceCharacter[]>([])
  const [total, setTotal]           = useState(0)
  const [loading, setLoading]       = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [sort, setSort]             = useState<SortOption>('popular')
  const [archetype, setArchetype]   = useState<string | null>(null)
  const [offset, setOffset]         = useState(0)
  const PAGE_SIZE = 24

  const fetchCharacters = useCallback(async (
    newSort: SortOption,
    newArchetype: string | null,
    newOffset: number,
    append: boolean
  ) => {
    if (newOffset === 0) setLoading(true)
    else setLoadingMore(true)

    try {
      const params = new URLSearchParams({
        sort:   newSort,
        limit:  String(PAGE_SIZE),
        offset: String(newOffset),
      })
      if (newArchetype) params.set('archetype', newArchetype)

      const res = await fetch(`/api/characters/marketplace?${params}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: MarketplaceResponse = await res.json()

      setCharacters(prev => append ? [...prev, ...data.characters] : data.characters)
      setTotal(data.total)
    } catch (err) {
      console.error('[marketplace] fetch error:', err)
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [])

  useEffect(() => {
    setOffset(0)
    fetchCharacters(sort, archetype, 0, false)
  }, [sort, archetype, fetchCharacters])

  const handleLoadMore = () => {
    const next = offset + PAGE_SIZE
    setOffset(next)
    fetchCharacters(sort, archetype, next, true)
  }

  const handleSort = (s: SortOption) => {
    setSort(s)
    setOffset(0)
  }

  const handleArchetype = (a: string | null) => {
    setArchetype(a)
    setOffset(0)
  }

  const hasMore = characters.length < total

  return (
    <section className="px-4 py-10" style={{ background: DEEP }}>
      <div className="max-w-6xl mx-auto">

        {/* Controls */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Sort tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {SORT_OPTIONS.map(opt => (
              <FilterChip
                key={opt.value}
                label={opt.label}
                active={sort === opt.value}
                onClick={() => handleSort(opt.value)}
              />
            ))}
          </div>

          {/* Archetype filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <FilterChip
              label="All archetypes"
              active={archetype === null}
              onClick={() => handleArchetype(null)}
            />
            {ARCHETYPES.map(a => (
              <FilterChip
                key={a}
                label={a}
                active={archetype === a}
                onClick={() => handleArchetype(archetype === a ? null : a)}
              />
            ))}
          </div>
        </div>

        {/* Results count */}
        {!loading && (
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {total.toLocaleString()} characters
            {archetype ? ` · ${archetype}` : ''}
          </p>
        )}

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : characters.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-white font-semibold mb-2">No characters found</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Try a different archetype filter
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {characters.map(c => (
                <MarketplaceCard key={c.id} character={c} />
              ))}
            </div>

            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 disabled:opacity-50"
                  style={{
                    background:   'rgba(255,255,255,0.06)',
                    color:        'rgba(255,255,255,0.7)',
                    border:       `1px solid ${BORDER}`,
                  }}
                >
                  {loadingMore ? 'Loading…' : `Load more (${total - characters.length} remaining)`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
