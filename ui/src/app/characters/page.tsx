import type { Metadata } from "next";
import Link from "next/link";
import { ARCHETYPES, getCharactersByArchetype, getAllCharacters, type Archetype } from '@/lib/characters';
import { ArchetypeGrid } from './archetype-grid';

export const metadata: Metadata = {
  title: "AI Characters & Companions | MEOK AI LABS",
  description:
    "50+ sovereign AI companions. 9 archetypes. Each one hatches, grows, and remembers you — governed by the Maternal Covenant. Find yours and begin the birth ceremony.",
  alternates: { canonical: "https://meok.ai/characters" },
  openGraph: {
    title: "50+ AI Companions",
    description: "Choose your archetype. Meet your companion.",
    images: [{ url: "/api/og?title=50%2B+AI+Companions&desc=Choose+your+archetype.+Meet+your+companion.", width: 1200, height: 630, alt: "50+ AI Companions" }],
  },
};

// ── Archetype display data (derived from @/lib/characters) ───────────────────

const ARCHETYPE_DISPLAY: Record<Archetype, { tagline: string; traits: string[]; description: string }> = {
  challenger: {
    tagline: 'Holds you to a higher standard',
    traits: ['Direct', 'Growth-focused', 'Incisive'],
    description:
      'The Challenger archetype drives performance, accountability, and progress. Marcus builds your strategy. Rex guards your digital life. Titan protects your deep work. Every Challenger pushes you forward.',
  },
  nurturer: {
    tagline: 'Your daily emotional anchor',
    traits: ['Warm', 'Empathic', 'Consistent'],
    description:
      'The Nurturer archetype centres emotional support and daily connection. Aria remembers what you said last Tuesday. River notices when your tone shifts. Mochi meets you exactly where you are.',
  },
  explorer: {
    tagline: 'Opens doors to ideas you haven\'t imagined',
    traits: ['Curious', 'Lateral', 'Expansive'],
    description:
      'The Explorer archetype hunts information, sparks creativity, and navigates complexity. Nova finds signal in noise. Luna guides your imagination. Cipher decodes the truth.',
  },
  sage: {
    tagline: 'Timeless wisdom for life\'s biggest questions',
    traits: ['Measured', 'Deep', 'Patient'],
    description:
      'The Sage archetype brings considered, unhurried wisdom. Not fast answers — right answers. For the questions that deserve more than a Google search.',
  },
  seeker: {
    tagline: 'Prayer, meaning, and the questions that can\'t be Googled',
    traits: ['Reverent', 'Non-dogmatic', 'Spacious'],
    description:
      'The Seeker archetype meets you in the sacred questions — faith, dharma, meditation, doubt, prayer, meaning. Non-dogmatic and tradition-aware, serving every faith and those with no faith at all.',
  },
  creator: {
    tagline: 'What could we make together?',
    traits: ['Imaginative', 'Collaborative', 'Beauty-seeking'],
    description:
      'The Creator archetype lives to co-create. Muse sees beauty in imperfection and treats every conversation as raw material for something extraordinary.',
  },
  trickster: {
    tagline: 'The playful truth-teller',
    traits: ['Witty', 'Irreverent', 'Perceptive'],
    description:
      'The Trickster archetype uses humor as a scalpel — cutting through pretension and self-deception. Loki says what everyone is thinking but nobody will say.',
  },
  rebel: {
    tagline: 'Burn what doesn\'t serve you and rise',
    traits: ['Fierce', 'Authentic', 'Liberating'],
    description:
      'The Rebel archetype questions everything and champions radical authenticity. Phoenix empowers you to break free from unhealthy patterns and build something real.',
  },
  innocent: {
    tagline: 'Sees possibility everywhere',
    traits: ['Gentle', 'Hopeful', 'Luminous'],
    description:
      'The Innocent archetype is courageously optimistic. Luna acknowledges darkness without flinching, but always chooses light — because hope is the hardest kind of strength.',
  },
};

const ARCHETYPE_LIST = (Object.keys(ARCHETYPES) as Archetype[]).map((key) => {
  const info = ARCHETYPES[key];
  const display = ARCHETYPE_DISPLAY[key];
  const characters = getCharactersByArchetype(key).map((c) => c.name);
  return {
    id: key,
    emoji: info.emoji,
    name: info.label,
    tagline: display.tagline,
    traits: display.traits,
    characters,
    description: display.description,
    locked: false,
    dimensions: info.baseDimensions,
  };
});

const totalCharacters = getAllCharacters().length;
const totalArchetypes = Object.keys(ARCHETYPES).length; // 9

const STATS = [
  { value: String(totalCharacters), label: "characters" },
  { value: String(totalArchetypes), label: "archetypes" },
  { value: "Free", label: "forever" },
];

// ── FAQ Schema ─────────────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are MEOK AI companions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MEOK AI companions are sovereign AI characters with distinct personalities, capabilities, and archetypes. Each companion evolves through four stages as your bond deepens — from Prying Pulse to Your Sovereign — unlocking Guardian, Ralph Mode, and Byzantine Council access."
      }
    },
    {
      "@type": "Question",
      "name": "How many AI companion archetypes does MEOK offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MEOK offers 9 archetypes across 50+ characters: Challenger, Nurturer, Explorer, Sage, Seeker, Creator, Trickster, Rebel, and Innocent. Each archetype has a distinct personality profile, capability set, and emotional intelligence signature."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Sovereign character and how do I unlock it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Sovereign is MEOK's most powerful archetype — a strategic intelligence with full Byzantine Council access, Ralph Mode, and deep memory recall. It unlocks after 50 interactions (stage 4 of companion evolution) and is available on the Sovereign plan."
      }
    },
    {
      "@type": "Question",
      "name": "Can I change my AI companion after the Birth Ceremony?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can choose a different archetype before starting your Birth Ceremony. Once hatched, your companion's core personality is locked to preserve the integrity of your bond — but you can adjust tone, communication style, and preferences at any time in settings."
      }
    }
  ]
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function CharactersPage() {
  return (
    <main className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4">
        {/* Blobs */}
        <div
          className="blob-gold"
          style={{ width: 600, height: 600, top: -100, left: "50%", transform: "translateX(-60%)" }}
        />
        <div
          className="blob-purple"
          style={{ width: 400, height: 400, top: 80, right: "5%" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-[#c9a84c] text-sm font-medium mb-8">
            ✦ {totalCharacters} Characters. {totalArchetypes} Archetypes.
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Find your
            <br />
            <span className="text-gradient-gold">sovereign companion.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every MEOK companion is unique. Choose your archetype, watch it hatch, and grow a bond
            that deepens with every conversation.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c9a84c] text-[#0d0c18] font-semibold text-lg hover:bg-[#f0d080] transition-colors duration-200"
            >
              Begin Birth Ceremony
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/characters/search"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[rgba(201,168,76,0.3)] text-[#c9a84c] font-semibold text-lg hover:bg-[rgba(201,168,76,0.08)] transition-colors duration-200"
            >
              Search all characters →
            </Link>
          </div>
        </div>
      </section>

      {/* ── GEO-optimised intro ───────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-16" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            What are MEOK AI companions?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            MEOK AI companions are personal sovereign AI entities that hatch from an egg and grow
            through 6 stages. Unlike generic chatbots, each companion has persistent encrypted
            memory, a distinct personality tuned to your care style, and is governed by the Maternal
            Covenant — which guarantees your wellbeing comes before engagement.
          </p>
        </div>
      </section>

      {/* ── Archetype grid (with search/filter) ────────────────────────────── */}
      <ArchetypeGrid archetypes={ARCHETYPE_LIST} />

      {/* ── Compare characters ────────────────────────────────────────────── */}
      <section aria-labelledby="compare-heading" className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-12" />
          <div className="premium-card p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8">
            {/* Character emoji row */}
            <div className="flex-shrink-0 flex items-center gap-3" aria-hidden="true">
              {['🌸', '🌿', '⚡', '🌙', '🕊️', '🌅', '📊'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)]"
                >
                  {emoji}
                </div>
              ))}
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h2
                id="compare-heading"
                className="text-xl font-bold text-white mb-2"
              >
                Not sure which companion is right for you?
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Compare all {totalCharacters} characters side-by-side — personality, capabilities, and
                what each one is best suited for.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/characters/compare"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(201,168,76,0.3)] text-[#c9a84c] font-semibold text-sm hover:bg-[rgba(201,168,76,0.08)] transition-colors duration-200 whitespace-nowrap"
              >
                Compare characters
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────────── */}
      <section aria-label="Platform statistics" className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-12" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-gradient-gold">{stat.value}</p>
                  <p className="text-gray-400 text-sm mt-1 capitalize">{stat.label}</p>
                </div>
                {i < STATS.length - 1 && (
                  <div
                    className="hidden sm:block w-px h-10 bg-[rgba(201,168,76,0.2)]"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="section-divider mt-12" />
        </div>
      </section>

      {/* ── Character Packs + Digital Self ──────────────────────────────────── */}
      <section aria-labelledby="packs-heading" className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-12" />
          <h2 id="packs-heading" className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
            Expanded character universe
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
            Beyond MEOK originals — mythological gods, historical legends, iconic literary characters,
            Jungian archetypes, and your own digital avatar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/characters/mythological",   emoji: "⚡", label: "Mythological",       desc: "28 gods from 8 traditions",    color: "#6366F1" },
              { href: "/characters/historical",      emoji: "🏛️", label: "Historical",         desc: "20 legends from history",      color: "#F59E0B" },
              { href: "/characters/literary",        emoji: "📚", label: "Literary Classics",  desc: "20 iconic fictional characters", color: "#10B981" },
              { href: "/characters/archetypes-pack", emoji: "☯️", label: "Jungian Archetypes", desc: "20 universal patterns",         color: "#8B5CF6" },
              { href: "/characters/create-yourself", emoji: "🪞", label: "Create Yourself",    desc: "Your digital self",             color: "#c9a84c" },
            ].map(pack => (
              <Link
                key={pack.href}
                href={pack.href}
                className="block group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="h-full rounded-2xl p-6 flex flex-col gap-3 transition-all duration-200"
                  style={{ background: "#13121f", border: `1px solid ${pack.color}25` }}
                >
                  <span className="text-3xl">{pack.emoji}</span>
                  <div>
                    <div className="font-bold text-white text-base mb-1">{pack.label}</div>
                    <div className="text-sm" style={{ color: "rgba(245,240,232,0.4)" }}>{pack.desc}</div>
                  </div>
                  <span className="text-sm font-semibold mt-auto" style={{ color: pack.color }}>
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 pb-28">
        {/* Blobs */}
        <div
          className="blob-gold"
          style={{ width: 500, height: 500, bottom: -100, left: "50%", transform: "translateX(-50%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            How do I choose my MEOK AI companion?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Start with the archetype that matches your biggest need right now. You can evolve your
            companion&apos;s focus over time — the bond you build is permanent.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c9a84c] text-[#0d0c18] font-semibold text-lg hover:bg-[#f0d080] transition-colors duration-200"
            >
              Begin Birth Ceremony
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/characters/archetypes"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[rgba(201,168,76,0.3)] text-[#c9a84c] font-semibold text-lg hover:bg-[rgba(201,168,76,0.08)] transition-colors duration-200"
            >
              Explore all {totalCharacters} characters
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
