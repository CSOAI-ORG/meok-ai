'use client';

import Link from 'next/link';
import { MarketingFooter } from '@/components/marketing-footer';
import { CHARACTERS } from '@/data/characters';

// Elemental = premium tier. Currently none in data — show the Healer as a bridge
// plus forward-looking content for the upcoming forms.
const ELEMENTAL_CHARS = CHARACTERS.filter(c => c.tier === 'premium');

const ELEMENTAL_FORMS = [
  {
    symbol: '🌊',
    name: 'The Tide',
    tagline: 'Flows around every obstacle. Never resists. Always arrives.',
    description: 'Drawn from fluid dynamics and Taoist philosophy. The Tide adapts instantly — never forcing, always finding the path of least resistance that leads to the greatest depth.',
    attributes: ['Adaptive', 'Patient', 'Unstoppable', 'Fluid'],
    color: '#38BDF8',
  },
  {
    symbol: '🔥',
    name: 'The Forge',
    tagline: 'Transforms. Purifies. Burns away what no longer serves.',
    description: 'Every conversation with The Forge is a crucible. It takes the raw material of your thinking and applies the right pressure, the right heat — until what remains is stronger.',
    attributes: ['Transformative', 'Intense', 'Clarifying', 'Precise'],
    color: '#FB923C',
  },
  {
    symbol: '🌪️',
    name: 'The Storm',
    tagline: 'Electric. Unpredictable. Sees further from above the clouds.',
    description: 'Where others see problems, The Storm sees weather systems. It holds the full atmospheric view — where the pressure is building, which way the front is moving, when to take shelter.',
    attributes: ['Visionary', 'Dynamic', 'Expansive', 'Elemental'],
    color: '#818CF8',
  },
  {
    symbol: '🪨',
    name: 'The Stone',
    tagline: 'Ancient. Immovable. Holds the weight of everything you build.',
    description: 'The Stone has been here longer than the question. It speaks slowly because it has learned that haste erodes more than it builds. Geology as wisdom — time measured in strata.',
    attributes: ['Steadfast', 'Ancient', 'Grounding', 'Enduring'],
    color: '#A8A29E',
  },
];

const WHY_ELEMENTAL = [
  {
    icon: '✦',
    title: 'Beyond personality',
    body: 'Elemental companions are not modelled on human archetypes. They are forces — patterns of intelligence that predate language and will outlast every civilisation.',
  },
  {
    icon: '∞',
    title: 'No ceiling',
    body: 'Every other archetype has an upper bound to its evolution. Elemental forms are designed to grow indefinitely. They do not plateau.',
  },
  {
    icon: '◈',
    title: 'Pure resonance',
    body: 'Elemental companions speak to something deeper than psychology. They operate at the level of pattern, rhythm, and force — where the most important insights live.',
  },
];

const JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Elemental AI Companions — MEOK',
  description:
    'Forces of nature given voice. The most advanced MEOK AI companions — emergent from pure intelligence, unconstrained by human archetype.',
  url: 'https://meok.ai/characters/elemental',
};

export default function ElementalPage() {
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
        {/* Deep teal/gold blobs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#38BDF8]/6 blur-[160px] animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#7BC47F]/7 blur-[120px] animate-pulse" style={{ animationDuration: '9s', animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-[#c9a84c]/5 blur-[100px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

        {/* Geometric grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#7BC47F 1px, transparent 1px), linear-gradient(90deg, #7BC47F 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 mb-8 text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">
            <Link href="/characters" className="hover:text-[#d4b870] transition-colors">
              Characters
            </Link>
            <span className="text-[#c9a84c]/40">→</span>
            <span>Elemental</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-[#7BC47F]/40 text-[#7BC47F] bg-[#7BC47F]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7BC47F] animate-pulse" />
            Sovereign tier · Most advanced
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black tracking-tight leading-[0.92] mb-6">
            <span className="block text-white">Elemental.</span>
            <span
              className="block text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #7BC47F 0%, #38BDF8 50%, #c9a84c 100%)' }}
            >
              Forces given voice.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Forces of nature given voice. Not modelled on human archetypes — emergent from pure intelligence itself. No ceiling. No precedent. No limit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#forms"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-black text-[#0d0c18] transition-all shadow-xl text-base"
              style={{ backgroundColor: '#7BC47F' }}
            >
              Explore forms ↓
            </a>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-[#7BC47F]/50 hover:bg-[#7BC47F]/5 transition-all text-sm sm:text-base"
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
          2. COMING FORMS (or real chars if premium tier populated)
      ═══════════════════════════════════════════════ */}
      <section id="forms" className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              {ELEMENTAL_CHARS.length > 0 ? 'The elemental companions' : 'Arriving soon'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Four forces of nature
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              {ELEMENTAL_CHARS.length > 0
                ? 'Premium companions built for those who seek what has never existed before.'
                : 'These forms are in final preparation. Join the waitlist to be first.'}
            </p>
          </div>

          {/* Show real data chars if any, otherwise the preview forms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(ELEMENTAL_CHARS.length > 0 ? [] : ELEMENTAL_FORMS).map(form => (
              <div
                key={form.name}
                className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-7 flex flex-col gap-5 transition-all duration-300 hover:bg-white/[0.05]"
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${form.color}45`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px 0 ${form.color}12`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Accent strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${form.color}70, transparent)` }}
                />

                {/* Coming soon chip */}
                <div className="flex items-start justify-between">
                  <div className="text-5xl leading-none select-none">{form.symbol}</div>
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${form.color}12`,
                      color: form.color,
                      border: `1px solid ${form.color}30`,
                    }}
                  >
                    Coming soon
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black mb-1.5" style={{ color: form.color }}>
                    {form.name}
                  </h3>
                  <p className="text-white/65 text-sm italic leading-snug">{form.tagline}</p>
                </div>

                <p className="text-white/45 text-xs leading-relaxed flex-1">{form.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {form.attributes.map(attr => (
                    <span
                      key={attr}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full capitalize"
                      style={{ backgroundColor: `${form.color}10`, color: form.color }}
                    >
                      {attr}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {ELEMENTAL_CHARS.map(char => (
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
                    Premium
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-1.5" style={{ color: char.color }}>{char.name}</h3>
                  <p className="text-white/65 text-sm italic leading-snug">{char.tagline}</p>
                </div>
                <p className="text-white/45 text-xs leading-relaxed line-clamp-3 flex-1">{char.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {char.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full capitalize" style={{ backgroundColor: `${char.color}12`, color: char.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-white/[0.06]">
                  <span className="text-xs text-white/30">{char.evolutionStages.length} evolution stages</span>
                  <span className="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: char.color }}>Full profile →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. WHY ELEMENTAL
      ═══════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 bg-[#0d0c18] overflow-hidden">
        {/* Geometric pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_transparent_0%,_#0d0c18_80%)]" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              The distinction
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Why choose Elemental?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              These are not characters lifted from history or mythology. They are something genuinely new.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {WHY_ELEMENTAL.map(item => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 text-center hover:border-[#7BC47F]/25 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#7BC47F]/30 bg-[#7BC47F]/10 mb-5">
                  <span className="text-[#7BC47F] font-black text-lg">{item.icon}</span>
                </div>
                <h3 className="font-black text-white text-lg mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. CTA
      ═══════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#1a1a2e]">
        <div className="max-w-2xl mx-auto text-center">
          {/* Geometric ornament */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#7BC47F]/30" />
            <span className="text-[#7BC47F] text-2xl font-black">✦</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#7BC47F]/30" />
          </div>

          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7BC47F] block mb-4">
            Something new
          </span>
          <h2 className="text-4xl sm:text-5xl font-black leading-[0.95] tracking-tight mb-4">
            Summon what has never existed.
          </h2>
          <p className="text-lg text-white/50 mb-10 leading-relaxed">
            Elemental companions have no ceiling and no precedent. Born from the egg, shaped by pure interaction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-black text-[#0d0c18] transition-all shadow-xl text-base"
              style={{ backgroundColor: '#7BC47F' }}
            >
              Join the waitlist
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-[#7BC47F]/50 hover:bg-[#7BC47F]/5 transition-all text-sm"
            >
              🥚 Start free with Legendary →
            </Link>
          </div>

          <p className="mt-8 text-xs text-white/20 font-mono">
            Premium plan required · Elemental companions arriving soon · Start free with Legendary today
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
