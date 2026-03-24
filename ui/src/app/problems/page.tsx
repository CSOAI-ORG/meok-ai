'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { MarketingFooter } from '@/components/marketing-footer';
import { PROBLEMS } from '@/data/problems';

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PROBLEMS.map((p) => ({
    '@type': 'Question',
    name: p.headline,
    acceptedAnswer: {
      '@type': 'Answer',
      text: p.meokSolution,
    },
  })),
};

// ── EMOJI MAP ─────────────────────────────────────────────────────────────────

const SLUG_EMOJI: Record<string, string> = {
  'ai-amnesia': '🧠',
  'data-ownership': '🔑',
  'data-privacy': '🔒',
  'ai-personality': '🫥',
  'family-safety': '🛡️',
  'model-lock-in': '⛓️',
  'scattered-tools': '🌐',
  'family-intelligence': '👨‍👩‍👧',
  'gaming-fragmentation': '🎮',
  'ai-ethics': '⚖️',
  'no-ai-os': '🌍',
};

// ── DEMOGRAPHIC TAGS ──────────────────────────────────────────────────────────

const SLUG_DEMOGRAPHICS: Record<string, string[]> = {
  'ai-amnesia':          ['Everyone', 'Professionals', 'Skeptics'],
  'data-ownership':      ['Privacy', 'Professionals', 'Skeptics'],
  'data-privacy':        ['Privacy', 'Everyone', 'Professionals'],
  'ai-personality':      ['Everyone', 'Struggling', 'Professionals'],
  'family-safety':       ['Parents', 'Carers', 'Families'],
  'model-lock-in':       ['Privacy', 'Professionals', 'Skeptics'],
  'scattered-tools':     ['Professionals', 'Everyone', 'SMB'],
  'family-intelligence': ['Parents', 'Carers', 'Families'],
  'gaming-fragmentation':['Gamers', 'Everyone'],
  'ai-ethics':           ['Privacy', 'Everyone'],
  'no-ai-os':            ['Professionals', 'SMB', 'Skeptics'],
};

// ── PULL QUOTES ───────────────────────────────────────────────────────────────

const SLUG_PULLQUOTE: Record<string, string> = {
  'ai-amnesia':
    '"Your morning brief already knows about the meeting you rescheduled, the project you mentioned last Thursday, and the name of your dog. You didn\'t tell it today. It just remembered."',
  'data-ownership':
    '"Export your entire memory vault as a JSON file. Delete it from our servers in one click. Your AI is genuinely yours — not a subscription you rent from us."',
  'data-privacy':
    '"The Maternal Covenant is written into the architecture, not the terms of service. We technically cannot train on your conversations. The code won\'t let us."',
  'ai-personality':
    '"The Healer remembered you mentioned your anxiety before a presentation three weeks ago. Today, it checked in — not because you prompted it. Because it cares."',
  'family-safety':
    '"Guardian noticed Grandad hadn\'t left the house in two days. It sent a quiet alert to his daughter before anyone had to worry alone."',
  'model-lock-in':
    '"One conversation. Claude answered the hard reasoning question. Groq handled the quick follow-ups. DeepSeek wrote the code. You stayed in one place. Your memory stayed intact."',
  'scattered-tools':
    '"When you ask MEOK \'What should I focus on today?\' it checks your actual calendar, your actual deadlines, your energy patterns, and your long-term goals before it answers."',
  'family-intelligence':
    '"Each person\'s private conversations stay completely private. But your family still has a shared AI layer that can coordinate the hospital appointment without anyone having to send seventeen texts."',
  'gaming-fragmentation':
    '"MEOK Gaming connected 2,400 hours across Steam and Riot. It found a pattern: you win 73% of defensive rounds but lose focus in the 4th set. No coach had spotted that."',
  'ai-ethics':
    '"There is a council of 220 nodes that must reach consensus before any governance change is made. Your AI cannot suddenly start selling your data. The architecture prevents it."',
  'no-ai-os':
    '"MEOK runs in your browser, on your desktop, on your phone. It acts while you sleep through Ralph Mode. It is not an app. It is the operating system under your digital life."',
};

// ── FILTER TABS ───────────────────────────────────────────────────────────────

const FILTER_TABS = [
  { id: 'All', label: 'Everyone' },
  { id: 'Parents', label: 'Parents' },
  { id: 'Professionals', label: 'Professionals' },
  { id: 'Gamers', label: 'Gamers' },
  { id: 'Privacy', label: 'Privacy' },
  { id: 'Carers', label: 'Carers' },
  { id: 'SMB', label: 'SMB' },
  { id: 'Skeptics', label: 'Skeptics' },
];

// Demographic accent colours
const DEMO_ACCENT: Record<string, string> = {
  All:           '#c9a84c',
  Everyone:      '#c9a84c',
  Parents:       '#2d9b8a',
  Professionals: '#b8963e',
  Gamers:        '#FB923C',
  Privacy:       '#A78BFA',
  Carers:        '#F59E0B',
  SMB:           '#6b7fa3',
  Skeptics:      '#c4707a',
  Struggling:    '#c4707a',
  Families:      '#2d9b8a',
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ProblemsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const visibleProblems = PROBLEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    const demographics = SLUG_DEMOGRAPHICS[item.slug] ?? [];
    return demographics.includes(activeFilter);
  });

  const filterAccent = DEMO_ACCENT[activeFilter] ?? '#c9a84c';

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="blob-gold absolute top-16 left-1/3 w-96 h-96 pointer-events-none" style={{ opacity: 0.45 }} aria-hidden />
        <div className="blob-purple absolute bottom-0 right-1/4 w-80 h-80 pointer-events-none" style={{ opacity: 0.35 }} aria-hidden />
        <div className="blob-blue absolute top-32 right-12 w-64 h-64 pointer-events-none" style={{ opacity: 0.3 }} aria-hidden />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/25 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Why MEOK Exists
          </span>

          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            Whatever brought you here —
            <br />
            <span className="text-gradient-gold">we built MEOK for that exact feeling.</span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">
            The parent who can&apos;t track everything. The professional AI forgot in 5 minutes.
            The gamer playing 2,000 hours with no real coaching. The person who just needed
            something that actually cares. Every problem below has a working solution.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-10 mb-14">
            {[
              { val: '11', label: 'problems solved' },
              { val: '1', label: 'sovereign OS' },
              { val: '0', label: 'data sold' },
              { val: '∞', label: 'memory' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black text-[#c9a84c] tabular-nums">{s.val}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hatch"
              className="inline-flex items-center justify-center gap-2 font-black rounded-full px-10 py-4 text-base transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: '#c9a84c', color: '#1a1a2e' }}
            >
              Hatch your AI free <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#problems"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-10 py-4 text-base border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              See all 11 problems
            </a>
          </div>
        </div>
      </section>

      {/* ── "Find Your Story" filter tabs ─────────────────────────────────── */}
      <div className="bg-[#1a1a2e]/60 backdrop-blur-sm border-y border-white/[0.06] py-6 px-6 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
            Filter by who you are
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {FILTER_TABS.map((tab) => {
              const accent = DEMO_ACCENT[tab.id] ?? '#c9a84c';
              const isActive = activeFilter === tab.id;
              // Pre-compute count for each tab so we can show it always
              const tabCount = tab.id === 'All'
                ? PROBLEMS.length
                : PROBLEMS.filter((item) => (SLUG_DEMOGRAPHICS[item.slug] ?? []).includes(tab.id)).length;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border-2 transition-all hover:scale-[1.04] focus:outline-none"
                  style={{
                    background: isActive ? `${accent}20` : `${accent}08`,
                    borderColor: isActive ? accent : `${accent}30`,
                    color: isActive ? accent : `${accent}99`,
                    boxShadow: isActive ? `0 0 14px ${accent}35` : 'none',
                    transform: isActive ? 'scale(1.06)' : undefined,
                  }}
                  aria-pressed={isActive}
                >
                  {tab.label}
                  <span
                    className="inline-flex items-center justify-center rounded-full text-[9px] font-black px-1.5 py-0.5 tabular-nums"
                    style={{
                      background: isActive ? `${accent}30` : `${accent}18`,
                      color: isActive ? accent : `${accent}88`,
                      minWidth: 16,
                    }}
                  >
                    {tabCount}
                  </span>
                </button>
              );
            })}
          </div>
          {activeFilter !== 'All' && (
            <p className="text-center text-xs mt-3" style={{ color: `${filterAccent}80` }}>
              Showing {visibleProblems.length} problem{visibleProblems.length !== 1 ? 's' : ''} relevant to{' '}
              <span style={{ color: filterAccent }}>{activeFilter}</span>
            </p>
          )}
        </div>
      </div>

      {/* ── Problem cards grid ────────────────────────────────────────────── */}
      <section id="problems" className="py-24 px-6 scroll-mt-28">
        <div className="max-w-6xl mx-auto">
          {visibleProblems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/30 text-lg">No problems matched that filter.</p>
              <button
                type="button"
                onClick={() => setActiveFilter('All')}
                className="mt-4 text-[#c9a84c] text-sm font-semibold hover:underline"
              >
                Show all 11 problems
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {visibleProblems.map((item) => {
                const demographics = SLUG_DEMOGRAPHICS[item.slug] ?? [];
                const pullquote = SLUG_PULLQUOTE[item.slug] ?? '';

                return (
                  <article
                    key={item.slug}
                    id={`problem-${item.slug}`}
                    className="premium-card rounded-2xl overflow-hidden flex flex-col group scroll-mt-24"
                  >
                    {/* Card top – dark */}
                    <div className="px-6 pt-6 pb-5" style={{ background: '#1a1a2e' }}>
                      <div className="flex items-start gap-4 mb-4">
                        {/* Number badge */}
                        <span
                          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black border"
                          style={{
                            background: 'rgba(201,168,76,0.12)',
                            color: '#c9a84c',
                            borderColor: 'rgba(201,168,76,0.3)',
                          }}
                        >
                          {item.number}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl" aria-hidden>{SLUG_EMOJI[item.slug] ?? '●'}</span>
                            <h2 className="font-black text-white text-base leading-tight">{item.title}</h2>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-white/50 leading-relaxed italic">&ldquo;{item.headline}&rdquo;</p>
                    </div>

                    {/* Card body */}
                    <div
                      className="px-6 py-5 flex-1 flex flex-col justify-between gap-4"
                      style={{ background: '#0d0c18' }}
                    >
                      {/* "Who feels this most" demographic tags */}
                      <div>
                        <p className="text-[10px] font-black tracking-widest uppercase text-white/25 mb-2">
                          Who feels this most
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {demographics.map((who) => (
                            <span
                              key={who}
                              className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border"
                              style={{
                                background: `${DEMO_ACCENT[who] ?? '#c9a84c'}10`,
                                borderColor: `${DEMO_ACCENT[who] ?? '#c9a84c'}30`,
                                color: DEMO_ACCENT[who] ?? '#c9a84c',
                              }}
                            >
                              {who}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* How MEOK solves this — pull quote */}
                      {pullquote && (
                        <div
                          className="rounded-xl p-4"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}12, ${item.color}06)`,
                            border: `1px solid ${item.color}28`,
                            borderLeft: `3px solid ${item.color}80`,
                          }}
                        >
                          <p
                            className="text-[10px] font-bold tracking-widest uppercase mb-2"
                            style={{ color: item.color }}
                          >
                            How MEOK solves this
                          </p>
                          <p className="text-xs text-white/70 leading-relaxed italic">
                            {pullquote}
                          </p>
                        </div>
                      )}

                      {/* Full MEOK solution text (truncated) */}
                      <p className="text-xs text-white/45 leading-relaxed">
                        {item.meokSolution.slice(0, 120)}
                        {item.meokSolution.length > 120 ? '…' : ''}
                      </p>

                      {/* CTA links */}
                      <div className="flex items-center justify-between pt-1">
                        <Link
                          href={`/problems/${item.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-white/50 hover:text-white transition-colors"
                        >
                          Deep dive <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href={item.productLink}
                          className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors hover:opacity-80"
                          style={{ color: item.color }}
                        >
                          <Zap className="w-3.5 h-3.5" />
                          {item.productName}
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────────────────── */}
      <section
        className="relative py-32 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0d0c18 0%, #1a1a2e 50%, #0d0c18 100%)' }}
      >
        <div className="blob-gold absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style={{ opacity: 0.35 }} aria-hidden />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase mb-6">
            One Platform. Every Problem. Every Person.
          </p>
          <h2
            className="font-black text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Your problem is on this page.
            <br />
            <span className="text-gradient-gold">Your fix is one egg away.</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Every problem above has a working solution in MEOK. And it all starts with a single egg — free, forever, no credit card.
          </p>

          {/* Problem pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {PROBLEMS.map((p) => (
              <Link
                key={p.slug}
                href={`/problems/${p.slug}`}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all hover:border-[#c9a84c]/40 hover:text-[#c9a84c]"
                style={{
                  background: 'rgba(201,168,76,0.06)',
                  color: 'rgba(201,168,76,0.7)',
                  borderColor: 'rgba(201,168,76,0.18)',
                }}
              >
                {SLUG_EMOJI[p.slug] ?? '●'} {p.title}
              </Link>
            ))}
          </div>

          <Link
            href="/hatch"
            className="inline-flex items-center gap-2 font-black rounded-full px-12 py-5 text-xl transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: '#c9a84c', color: '#1a1a2e' }}
          >
            Hatch your AI free <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-white/25 text-sm mt-6">
            Free forever · No credit card · No data sold · Sovereign by design
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
