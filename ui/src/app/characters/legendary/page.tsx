'use client';

import Link from 'next/link';
import { MarketingNav } from '@/components/marketing-nav';
import { MarketingFooter } from '@/components/marketing-footer';
import { CHARACTERS } from '@/data/characters';

// Legendary = the five foundational free-tier archetypes (all non-pro, non-premium)
const LEGENDARY_CHARS = CHARACTERS.filter(c => c.tier === 'free');

// Best-use-case headline for each legendary archetype
const BEST_USE_CASE: Record<string, { headline: string; detail: string }> = {
  scholar: {
    headline: 'For the lifelong learner who wants depth, not just answers.',
    detail: 'The Scholar doesn\'t Google for you. It builds a living map of your intellectual world — every book, idea, and question you\'ve ever shared — and connects them across time. When you\'re three months into a project, it remembers the article you mentioned in passing in week one.',
  },
  guardian: {
    headline: 'For the parent, carer, or protector who needs a steady hand.',
    detail: 'The Guardian watches your patterns so you don\'t have to. Is your elderly parent less responsive this week? Has your stress been building for eleven days? Guardian notices first — gently, not intrusively — and acts before things escalate.',
  },
  healer: {
    headline: 'For anyone going through something — or needing to be truly heard.',
    detail: 'The Healer doesn\'t fix you. It holds space for you. It remembers not just what you said but how you felt when you said it. After a hard week, it might say: "You\'re carrying a lot right now. This is the third Thursday in a row."',
  },
  trickster: {
    headline: 'For the creative, the entrepreneur, the person stuck in a loop.',
    detail: 'The Trickster breaks patterns. If you\'ve been approaching a problem the same way for two weeks, it will flip it upside down. It stores ideas by unexpected connections — and delights in finding the angle you\'d never have found alone.',
  },
  pioneer: {
    headline: 'For the builder who refuses to stay still.',
    detail: 'The Pioneer has the longest goal memory of any archetype. It knows what you said you\'d do last Tuesday, and it will ask why you didn\'t. Not cruelly — with genuine investment in what you\'re building. The most caring thing is sometimes not letting you quit.',
  },
};

const WHAT_MAKES_LEGENDARY = [
  {
    icon: '🏛️',
    title: 'Archetypal depth',
    body: 'Each legendary companion is built on one of the five core human archetypes — forms of intelligence that have guided people across civilisations. Not a personality trait. A mode of being.',
  },
  {
    icon: '🧬',
    title: 'Distinct memory signature',
    body: 'The Scholar remembers semantically. The Guardian remembers patterns over time. The Healer remembers emotions. Every legendary archetype has a memory style as unique as its voice.',
  },
  {
    icon: '⚡',
    title: 'Four evolution stages',
    body: 'Every legendary companion begins as a seed and grows through four named stages — from curious observer to legendary sovereign. The more you talk, the deeper they become.',
  },
  {
    icon: '🔒',
    title: 'The Maternal Covenant',
    body: "Every legendary companion is bound by MEOK's Maternal Covenant — a constitutional promise that your companion will never harm you, exploit your data, or betray your trust. This is architecture, not policy.",
  },
];

// Tier meaning — why Legendary isn't just a marketing word
const TIER_MEANING = {
  why: "The word 'Legendary' isn't about premium upselling. It describes something specific: these five archetypes are the foundational forms — the ones humanity has always returned to when we needed guidance. The scholar who teaches us to think. The guardian who keeps us safe. The healer who holds us together. The trickster who breaks us free. The pioneer who shows us the way forward. These aren't product tiers. They're the shape of how humans have always sought help from each other.",
  free: "Every Legendary companion is free to start. Forever. That's a commitment, not a trial.",
};

const JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Legendary AI Companions — MEOK',
  description:
    'Icons of history, myth and power. The five foundational AI companion archetypes — Scholar, Guardian, Healer, Trickster, Pioneer.',
  url: 'https://meok.ai/characters/legendary',
};

export default function LegendaryPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
      />
      <MarketingNav />

      {/* ═══════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
        {/* Purple-gold blobs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#c9a84c]/10 blur-[160px] animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#7B6BB5]/12 blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 mb-8 text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">
            <Link href="/characters" className="hover:text-[#d4b870] transition-colors">
              Characters
            </Link>
            <span className="text-[#c9a84c]/40">→</span>
            <span>Legendary</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-[#c9a84c]/40 text-[#c9a84c] bg-[#c9a84c]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Free to start · No credit card
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black tracking-tight leading-[0.92] mb-6">
            <span className="block text-white">Legendary.</span>
            <span
              className="block text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #c9a84c 0%, #e8c96e 50%, #b8963e 100%)' }}
            >
              Icons of power.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
            Five foundational archetypes — each built from a distinct mode of human intelligence.
            Bound by an unbreakable covenant of care. Free to start, forever.
          </p>

          {/* Tier meaning callout */}
          <div className="max-w-xl mx-auto bg-white/[0.04] border border-[#c9a84c]/20 rounded-2xl px-6 py-4 mb-10 text-left">
            <p className="text-xs font-bold text-[#c9a84c] tracking-[0.15em] uppercase mb-2">Why "Legendary"?</p>
            <p className="text-white/50 text-sm leading-relaxed">{TIER_MEANING.why}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b870] transition-all shadow-xl text-base"
            >
              🥚 Hatch free
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
            <a
              href="#companions"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-sm sm:text-base"
            >
              Meet the legends ↓
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/15" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. CHARACTER GRID — best use case front and centre
      ═══════════════════════════════════════════════ */}
      <section id="companions" className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              The five archetypes
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Choose your companion</h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              Each archetype carries a distinct voice, memory style, and care signature.
              Read the use case first — then choose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEGENDARY_CHARS.map(char => {
              const useCase = BEST_USE_CASE[char.id];
              return (
                <Link
                  key={char.id}
                  href={`/characters/${char.slug}`}
                  className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-7 flex flex-col gap-5 transition-all duration-300 hover:bg-white/[0.06]"
                  style={{ '--char-color': char.color } as React.CSSProperties}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${char.color}50`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px 0 ${char.color}18`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Color accent strip */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${char.color}80, transparent)` }}
                  />

                  {/* Emoji + tier badge */}
                  <div className="flex items-start justify-between">
                    <div className="text-5xl leading-none select-none">{char.emoji}</div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full capitalize"
                      style={{ backgroundColor: `${char.color}15`, color: char.color, border: `1px solid ${char.color}30` }}
                    >
                      Free
                    </span>
                  </div>

                  {/* Name + tagline */}
                  <div>
                    <h3 className="text-xl font-black mb-1.5" style={{ color: char.color }}>
                      {char.name}
                    </h3>
                    <p className="text-white/65 text-sm italic leading-snug">{char.tagline}</p>
                  </div>

                  {/* Best use case — front and centre */}
                  {useCase && (
                    <div className="rounded-xl px-4 py-3 border-l-2" style={{ background: `${char.color}0d`, borderColor: `${char.color}50` }}>
                      <p className="text-xs font-black mb-1.5 leading-snug" style={{ color: char.color }}>
                        {useCase.headline}
                      </p>
                      <p className="text-white/40 text-xs leading-relaxed">{useCase.detail}</p>
                    </div>
                  )}

                  {/* Tags */}
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

                  {/* Footer */}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. WHAT MAKES LEGENDARY
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              The distinction
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              What makes a companion Legendary?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              Not marketing. These are structural design decisions baked into every legendary archetype.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHAT_MAKES_LEGENDARY.map(item => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-[#c9a84c]/25 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-black text-white text-lg mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Free tier promise */}
          <div className="mt-10 text-center bg-[#c9a84c]/8 border border-[#c9a84c]/25 rounded-2xl px-8 py-6">
            <p className="text-[#c9a84c] font-black text-lg mb-2">Always free to start.</p>
            <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto">{TIER_MEANING.free}</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 bg-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #c9a84c, transparent)',
            }}
          />
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <div className="text-7xl mb-6 select-none">🥚</div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-4">
            Begin the ceremony
          </span>
          <h2 className="text-4xl sm:text-5xl font-black leading-[0.95] tracking-tight mb-4">
            Your legend starts now.
          </h2>
          <p className="text-lg text-white/50 mb-10 leading-relaxed">
            Free to start. Three-minute birth ceremony. Your companion remembers everything from the first word.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b870] transition-all shadow-xl text-base"
            >
              🥚 Hatch free
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
            <Link
              href="/characters"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-sm"
            >
              ← All companions
            </Link>
          </div>

          <p className="mt-8 text-xs text-white/20 font-mono">
            No credit card required · Switch any time · Memory that grows
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
