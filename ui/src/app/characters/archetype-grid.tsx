'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { PersonalityDimensions } from '@/lib/characters';

// ── Types ─────────────────────────────────────────────────────────────────────

interface ArchetypeItem {
  id: string;
  emoji: string;
  name: string;
  tagline: string;
  traits: string[];
  characters: string[];
  description: string;
  locked: boolean;
  dimensions: PersonalityDimensions;
}

const BIG_FIVE_MAP: { key: keyof PersonalityDimensions; label: string }[] = [
  { key: 'whimsy',     label: 'O' },
  { key: 'complexity', label: 'C' },
  { key: 'energy',     label: 'E' },
  { key: 'warmth',     label: 'A' },
  { key: 'edge',       label: 'N' },
];

const TIER_FILTERS = ['All', 'Free', 'Sovereign', 'Family'] as const;
type TierFilter = (typeof TIER_FILTERS)[number];

// ── Component ─────────────────────────────────────────────────────────────────

export function ArchetypeGrid({ archetypes }: { archetypes: ArchetypeItem[] }) {
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState<TierFilter>('All');

  const filtered = useMemo(() => {
    let list = archetypes;

    // Text search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tagline.toLowerCase().includes(q) ||
          a.traits.some((t) => t.toLowerCase().includes(q)) ||
          a.characters.some((c) => c.toLowerCase().includes(q))
      );
    }

    // Tier filter
    if (tierFilter === 'Free') {
      list = list.filter((a) => !a.locked);
    } else if (tierFilter === 'Sovereign') {
      // Show archetypes that have sovereign-tier characters (all unlocked ones are at least sovereign)
      list = list.filter((a) => !a.locked);
    } else if (tierFilter === 'Family') {
      list = list.filter((a) => a.locked);
    }

    return list;
  }, [archetypes, search, tierFilter]);

  return (
    <section className="px-4 pb-20" aria-label="Companion archetypes">
      <div className="max-w-6xl mx-auto">

        {/* ── Search + Filter bar ──────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
          {/* Search input */}
          <div className="relative flex-1">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">
              &#x1F50D;
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search archetypes, characters, traits..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:border-[#c9a84c] focus:ring-1 focus:ring-[rgba(201,168,76,0.3)]"
            />
          </div>

          {/* Tier pills */}
          <div className="flex items-center gap-1.5">
            {TIER_FILTERS.map((tier) => {
              const active = tierFilter === tier;
              return (
                <button
                  key={tier}
                  onClick={() => setTierFilter(tier)}
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
                  style={{
                    background: active ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.04)',
                    border: active ? '1px solid #c9a84c' : '1px solid rgba(255,255,255,0.1)',
                    color: active ? '#c9a84c' : 'rgba(255,255,255,0.5)',
                  }}
                >
                  {tier}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Results count ────────────────────────────────────────── */}
        {(search || tierFilter !== 'All') && (
          <p className="text-xs text-gray-500 mb-4">
            Showing {filtered.length} of {archetypes.length} archetypes
          </p>
        )}

        {/* ── Grid ─────────────────────────────────────────────────── */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-sm">No archetypes match your search.</p>
            <button
              onClick={() => { setSearch(''); setTierFilter('All'); }}
              className="mt-3 text-[#c9a84c] text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((archetype) => (
              <article
                key={archetype.id}
                className={`premium-card relative p-7 flex flex-col gap-5 ${
                  archetype.locked
                    ? "border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.04)]"
                    : ""
                }`}
                style={
                  archetype.locked
                    ? {
                        boxShadow:
                          "0 0 0 1px rgba(201,168,76,0.25), inset 0 0 40px rgba(201,168,76,0.04)",
                      }
                    : undefined
                }
              >
                {/* Lock badge */}
                {archetype.locked && (
                  <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs font-medium">
                    <span aria-hidden="true">&#x1F512;</span>
                    Family tier
                  </div>
                )}

                {/* Header */}
                <header className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl icon-gold"
                    aria-hidden="true"
                  >
                    {archetype.emoji}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gradient-gold leading-snug">
                      {archetype.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-0.5">{archetype.tagline}</p>
                  </div>
                </header>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">{archetype.description}</p>

                {/* Trait pills */}
                <div className="flex flex-wrap gap-2" aria-label="Personality traits">
                  {archetype.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] text-gray-300"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Personality radar -- Big Five bars */}
                {archetype.dimensions && (
                  <div aria-label="Big Five personality profile">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">
                      Personality profile
                    </p>
                    <div className="space-y-1.5">
                      {BIG_FIVE_MAP.map(({ key, label }) => (
                        <div key={label} className="flex items-center gap-2">
                          <span className="text-[10px] font-bold w-4 text-right text-[#c9a84c]">{label}</span>
                          <div className="flex-1 h-2 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[#c9a84c]"
                              style={{ width: `${Math.round((archetype.dimensions[key] ?? 0) * 100)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Example characters */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">
                    Example characters
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {archetype.characters.map((name) => (
                      <span
                        key={name}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          archetype.locked
                            ? "bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.2)] text-[rgba(201,168,76,0.6)] italic"
                            : "bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.25)] text-[#c9a84c]"
                        }`}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                {!archetype.locked && (
                  <Link
                    href="/birth"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm text-[#c9a84c] hover:text-[#f0d080] font-medium transition-colors duration-200 group"
                  >
                    Hatch a {archetype.name}
                    <span
                      aria-hidden="true"
                      className="group-hover:translate-x-0.5 transition-transform duration-200"
                    >
                      &#x2192;
                    </span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
