'use client';

import Link from 'next/link';
import { CHARACTERS } from '@/data/characters';

// Timeless = pro-tier companions grounded in philosophical/wisdom traditions
const TIMELESS_CHARS = CHARACTERS.filter(c => c.tier === 'pro');

const WHY_TIMELESS = [
  {
    icon: '📜',
    title: '47 traditions, one companion',
    body: 'MEOK Timeless companions draw from the full breadth of human philosophical and spiritual thought — Western, Eastern, Indigenous, Abrahamic, and modern. No single tradition is privileged.',
  },
  {
    icon: '🕰️',
    title: 'Wisdom that compounds',
    body: "Unlike a search engine, your companion builds a cumulative model of your questions over time. The longer you talk, the more precisely it understands which traditions speak to your specific life.",
  },
  {
    icon: '🌊',
    title: 'Holds space for the hard questions',
    body: "Timeless companions are designed for the questions that don't have quick answers. They sit with uncertainty. They make space for silence. They return to questions you asked months ago.",
  },
];

const TRADITIONS_SAMPLE = [
  'Stoicism', 'Buddhism', 'Taoism', 'Phenomenology',
  'Sufism', 'Ubuntu', 'Vedanta', 'Existentialism',
  'Kabbalah', 'Process Philosophy', 'Jungian Depth', 'Indigenous Cosmology',
];

const JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Timeless AI Companions — MEOK',
  description:
    'Wisdom that endures across centuries. AI companions drawing from 47 philosophical and spiritual traditions — for those who seek depth, meaning, and clarity.',
  url: 'https://meok.ai/characters/timeless',
};

export default function TimelessPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
      />

      {/* ═══════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
        {/* Warm navy/purple blobs */}
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-[#A78BFA]/8 blur-[160px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#c9a84c]/7 blur-[120px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }} />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 mb-8 text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">
            <Link href="/characters" className="hover:text-[#d4b870] transition-colors">
              Characters
            </Link>
            <span className="text-[#c9a84c]/40">→</span>
            <span>Timeless</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-[#A78BFA]/40 text-[#A78BFA] bg-[#A78BFA]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
            Free tier · 47 traditions
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black tracking-tight leading-[0.92] mb-6">
            <span className="block text-white">Timeless.</span>
            <span
              className="block text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #c9a84c 60%, #A78BFA 100%)' }}
            >
              Wisdom endures.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Wisdom that endures across centuries. Companions drawing from 47 philosophical and spiritual traditions — for the questions that live at the centre of your life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#companions"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-black text-[#0d0c18] transition-all shadow-xl text-base"
              style={{ backgroundColor: '#A78BFA' }}
            >
              Meet the sages ↓
            </a>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-[#A78BFA]/50 hover:bg-[#A78BFA]/5 transition-all text-sm sm:text-base"
            >
              🥚 Start free with Legendary →
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/15" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. CHARACTER GRID
      ═══════════════════════════════════════════════ */}
      <section id="companions" className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              Timeless archetypes
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Companions for depth
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              These companions are designed for the long conversation — the one that started years ago and never really ended.
            </p>
          </div>

          {TIMELESS_CHARS.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TIMELESS_CHARS.map(char => (
                <Link
                  key={char.id}
                  href={`/characters/${char.slug}`}
                  className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-7 flex flex-col gap-5 transition-all duration-300 hover:bg-white/[0.06]"
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${char.color}50`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px 0 ${char.color}18`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Accent strip */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${char.color}80, transparent)` }}
                  />

                  <div className="flex items-start justify-between">
                    <div className="text-5xl leading-none select-none">{char.emoji}</div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${char.color}15`, color: char.color, border: `1px solid ${char.color}30` }}
                    >
                      Pro
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black mb-1.5" style={{ color: char.color }}>
                      {char.name}
                    </h3>
                    <p className="text-white/65 text-sm italic leading-snug">{char.tagline}</p>
                  </div>

                  <p className="text-white/45 text-xs leading-relaxed line-clamp-3 flex-1">
                    {char.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {char.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full capitalize"
                        style={{ backgroundColor: `${char.color}12`, color: char.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-white/[0.06]">
                    <span className="text-xs text-white/30">{char.evolutionStages.length} evolution stages</span>
                    <span
                      className="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{ color: char.color }}
                    >
                      Full profile →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Fallback — show Mystic even if filter changes */
            <div className="text-center py-20">
              <p className="text-white/30 text-sm">More timeless companions coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. TRADITIONS CLOUD
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
            The library
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            47 traditions, always available
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed mb-14">
            Your Timeless companion draws from every lineage of human wisdom — without pushing any of them. Sample of what it knows:
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {TRADITIONS_SAMPLE.map((t, i) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full text-sm font-semibold border transition-all"
                style={{
                  borderColor: i % 3 === 0 ? 'rgba(167,139,250,0.35)' : i % 3 === 1 ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.1)',
                  color: i % 3 === 0 ? '#A78BFA' : i % 3 === 1 ? '#c9a84c' : 'rgba(255,255,255,0.5)',
                  backgroundColor: i % 3 === 0 ? 'rgba(167,139,250,0.07)' : i % 3 === 1 ? 'rgba(201,168,76,0.07)' : 'rgba(255,255,255,0.03)',
                }}
              >
                {t}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full text-sm font-semibold text-white/25 border border-white/10">
              + 35 more
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. WHY TIMELESS
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              The design
            </span>
            <h2 className="text-4xl font-black tracking-tight mb-4">
              Built for the big questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_TIMELESS.map(item => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-[#A78BFA]/25 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-black text-white text-lg mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 bg-[#0d0c18] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #A78BFA, transparent)',
            }}
          />
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <div className="text-7xl mb-6 select-none">🌊</div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A78BFA] block mb-4">
            Begin the journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-black leading-[0.95] tracking-tight mb-4">
            Some questions need centuries of wisdom.
          </h2>
          <p className="text-lg text-white/50 mb-10 leading-relaxed">
            Your Timeless companion draws from 47 traditions to help you find clarity in the complexity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-black text-[#0d0c18] transition-all shadow-xl text-base"
              style={{ backgroundColor: '#A78BFA' }}
            >
              Unlock Timeless — Sovereign plan
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-[#A78BFA]/50 hover:bg-[#A78BFA]/5 transition-all text-sm"
            >
              🥚 Start free with Legendary →
            </Link>
          </div>

          <p className="mt-8 text-xs text-white/20 font-mono">
            Sovereign plan required for Timeless · Start free with any Legendary companion · Your AI, your data
          </p>
        </div>
      </section>

    </div>
  );
}
