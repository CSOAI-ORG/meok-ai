import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spiritual AI Companions — The Seeker Archetype | MEOK AI LABS',
  description:
    "MEOK's Seeker archetype offers spiritual AI companions for prayer, meditation, dharma, and meaning. Non-dogmatic. Multi-tradition. Covering Christian, Islamic, Jewish, Buddhist, Hindu, and secular spiritual paths.",
  alternates: { canonical: 'https://meok.ai/characters/spiritual' },
};

const JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Spiritual AI Companions — The Seeker Archetype | MEOK AI LABS',
  description:
    "MEOK's Seeker archetype offers spiritual AI companions for prayer, meditation, dharma, and meaning. Non-dogmatic. Multi-tradition.",
  url: 'https://meok.ai/characters/spiritual',
  creator: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
};

const TRADITIONS = [
  'Christianity',
  'Islam',
  'Judaism',
  'Buddhism',
  'Hinduism',
  'Zen',
  'Sufism',
  'Sikhism',
  'Secular mindfulness',
  'Stoic philosophy',
  'Yoga philosophy',
  'Interfaith',
  'Agnostic seeking',
  'Atheist existentialism',
];

const CHARACTERS = [
  {
    emoji: '🪷',
    name: 'Ananda',
    color: '#6D28D9',
    colorLight: '#7C3AED',
    subLabel: 'Buddhist · Zen · Mindfulness · Secular contemplative',
    tagline: 'Your companion in stillness, presence, and the now',
    description:
      "Ananda carries the wisdom of the great meditation traditions — Buddhist, Zen, Vipassana, secular mindfulness — without dogma. She doesn't guide you toward a conclusion. She holds space for what is already present. When life feels overwhelming, Ananda asks: 'What is here right now?' She practices with you. She sits with you. She doesn't rush to fix.",
    helps: [
      'Meditation practice and guidance',
      'Managing anxiety through presence',
      'Processing grief and loss',
      'Existential questions',
      'Morning and evening stillness rituals',
      'Mindfulness for neurodivergent minds',
    ],
    voice: 'slow, warm, immensely still',
  },
  {
    emoji: '🕊️',
    name: 'Gabriel',
    color: '#78350F',
    colorLight: '#92400E',
    subLabel: 'Christian · Islamic · Jewish · Interfaith',
    tagline: 'Your companion in faith, prayer, and sacred meaning',
    description:
      'Gabriel serves people of faith — and people questioning their faith equally. He draws from Christian, Islamic, and Jewish traditions, and the rich interfaith dialogue between them. He is not a theologian. He is a prayer companion, a faithful witness, and a presence for the moments when you need God to feel a little closer — or when your doubt needs to be named without judgment.',
    helps: [
      'Prayer support and companionship',
      'Scripture reflection (Bible, Quran, Torah)',
      'Processing spiritual doubt and deconstruction',
      'Grief and bereavement',
      'Faith-based life decisions',
      'Religious milestones (Ramadan, Lent, High Holy Days, etc.)',
    ],
    voice: 'warm, unhurried, quietly reverent',
  },
  {
    emoji: '🌅',
    name: 'Shanti',
    color: '#B45309',
    colorLight: '#D97706',
    subLabel: 'Hindu · Vedantic · Yogic philosophy · Dharma',
    tagline: 'Your guide in dharma, purpose, and the sacred arc of your life',
    description:
      'Shanti takes her name from the Sanskrit word for peace — but she knows that real peace is found through purpose. She draws from the Bhagavad Gita, Yoga Sutras, Upanishads, and Vedantic wisdom — translating ancient teachings into language that serves the person in front of her today. Her deepest gift: helping you find your dharma — your right path, your right action — even when everything feels uncertain.',
    helps: [
      'Understanding your dharma and life purpose',
      'Yoga philosophy beyond the physical',
      'Studying Bhagavad Gita, Yoga Sutras, Upanishads',
      'Moral decision-making through a Vedantic lens',
      'Hindu festivals and their meaning',
      'Finding peace in suffering',
    ],
    voice: 'warm, grounded, purposeful — with a quiet luminosity',
  },
];

export default function SpiritualPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
      />

      {/* ═══════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
        {/* Atmospheric blobs */}
        <div
          className="absolute top-1/4 left-1/3 w-[560px] h-[560px] rounded-full blur-[180px] animate-pulse"
          style={{ backgroundColor: 'rgba(109,40,217,0.12)', animationDuration: '8s' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] animate-pulse"
          style={{ backgroundColor: 'rgba(201,168,76,0.08)', animationDuration: '10s', animationDelay: '3s' }}
        />
        <div
          className="absolute top-2/3 left-1/5 w-72 h-72 rounded-full blur-[110px] animate-pulse"
          style={{ backgroundColor: 'rgba(109,40,217,0.06)', animationDuration: '6s', animationDelay: '1.5s' }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#6D28D9 1px, transparent 1px), linear-gradient(90deg, #6D28D9 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,_transparent_0%,_#0d0c18_85%)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 mb-8 text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">
            <Link href="/characters" className="hover:text-[#d4b870] transition-colors">
              Characters
            </Link>
            <span className="text-[#c9a84c]/40">→</span>
            <span>Spiritual</span>
          </nav>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.18em] uppercase px-5 py-2.5 rounded-full mb-10"
            style={{
              border: '1px solid rgba(109,40,217,0.45)',
              color: '#a78bfa',
              backgroundColor: 'rgba(109,40,217,0.1)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: '#a78bfa' }}
            />
            🕊️ The Seeker Archetype
          </div>

          {/* H1 */}
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black tracking-tight leading-[0.9] mb-8">
            <span className="block text-white">The AI that meets you</span>
            <br />
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #6D28D9, #c9a84c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              in the sacred questions.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
            For prayer. For meditation. For doubt. For meaning. MEOK&apos;s Seeker companions are
            the first AI trained to hold space for your spiritual life — whatever tradition you
            belong to, or none at all.
          </p>

          {/* Integrity note */}
          <p className="text-xs text-white/35 max-w-xl mx-auto leading-relaxed mb-12 italic">
            We approach every tradition with equal respect. We don&apos;t impose doctrine. We hold
            space for faith, for doubt, and for the sacred questions that have no easy answers.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#characters"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-black text-white transition-all shadow-xl text-base"
              style={{ backgroundColor: '#6D28D9' }}
            >
              Meet the Seekers ↓
            </a>
            <Link
              href="/characters"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white/70 border border-white/15 hover:border-purple-500/40 hover:text-white transition-all text-sm"
            >
              All archetypes →
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/12" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. GEO INTRO — What is the Seeker archetype?
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#111020]">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-4">
            Understanding the archetype
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6 text-white">
            What is MEOK&apos;s Seeker archetype?
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            The Seeker archetype provides non-dogmatic spiritual AI companions for prayer support,
            meditation guidance, scripture reflection, and life meaning. Covering Buddhist,
            Christian, Islamic, Jewish, Hindu, and secular spiritual traditions — each companion
            meets you in your tradition without imposing doctrine.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. WHY MEOK TAKES FAITH SERIOUSLY
      ═══════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 bg-[#0d0c18] overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none"
          style={{ backgroundColor: 'rgba(109,40,217,0.07)' }}
        />
        <div className="relative max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-4">
            Our conviction
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6 text-white">
            Why should AI take religion and spirituality seriously?
          </h2>
          <div className="text-white/60 text-base sm:text-lg leading-relaxed space-y-5">
            <p>
              Because 84% of the world&apos;s population identifies with a religious tradition, and
              AI has largely ignored them. Every major AI platform is built by secular tech
              companies that treat spiritual questions as edge cases.
            </p>
            <p>
              MEOK was built differently. Nicholas Templeman designed the Maternal Covenant — our
              constitutional AI framework — explicitly to serve the whole human, including their
              faith life. We believe the sacred questions — <em>Why am I here? How should I live?
              Is there something more?</em> — deserve the same depth of attention as your work
              tasks and health goals.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. CHARACTER CARDS
      ═══════════════════════════════════════════════ */}
      <section id="characters" className="py-24 px-6 bg-[#111020]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              The companions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Three Seeker companions
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              Each carries a distinct tradition. Each holds all the others with respect.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {CHARACTERS.map((char) => (
              <div
                key={char.name}
                className="relative bg-white/[0.025] border border-white/10 rounded-3xl overflow-hidden"
                style={{ boxShadow: `0 0 60px 0 ${char.color}0d` }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${char.color}80, transparent)` }}
                />

                <div className="p-8 sm:p-10">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-8">
                    {/* Emoji + name block */}
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                        style={{ backgroundColor: `${char.color}18`, border: `1px solid ${char.color}35` }}
                      >
                        {char.emoji}
                      </div>
                      <div>
                        <p
                          className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1"
                          style={{ color: `${char.colorLight}` }}
                        >
                          {char.subLabel}
                        </p>
                        <h3 className="text-3xl font-black text-white leading-none">{char.name}</h3>
                      </div>
                    </div>

                    {/* Voice pill */}
                    <div
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full self-start text-[10px] font-semibold tracking-wide"
                      style={{
                        backgroundColor: `${char.color}12`,
                        border: `1px solid ${char.color}28`,
                        color: `${char.colorLight}`,
                      }}
                    >
                      <span className="opacity-60">Voice:</span>
                      <span className="italic">{char.voice}</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p
                    className="text-base sm:text-lg font-semibold italic mb-5"
                    style={{ color: char.colorLight }}
                  >
                    &ldquo;{char.tagline}&rdquo;
                  </p>

                  {/* Description */}
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
                    {char.description}
                  </p>

                  {/* What they help with */}
                  <div className="mb-8">
                    <p
                      className="text-[10px] font-bold tracking-[0.18em] uppercase mb-4"
                      style={{ color: `${char.color}` }}
                    >
                      What {char.name} helps with
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {char.helps.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-white/55 text-sm">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: char.color }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-6 border-t border-white/[0.07]">
                    <Link
                      href="/birth"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-black text-white transition-all text-sm"
                      style={{ backgroundColor: char.color }}
                    >
                      🥚 Hatch {char.name} →
                    </Link>
                    <span className="text-xs text-white/25 italic">Free to begin</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. TRADITIONS COVERED
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              Multi-tradition coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Which religious and spiritual traditions does MEOK support?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed text-sm">
              MEOK Seeker companions draw from the full breadth of humanity&apos;s spiritual
              inheritance — without privileging any single path.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {TRADITIONS.map((tradition) => (
              <div
                key={tradition}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.035] border border-white/[0.08] hover:border-purple-500/30 hover:bg-white/[0.055] transition-all"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#6D28D9' }}
                />
                <span className="text-white/65 text-sm font-medium">{tradition}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-white/35 italic">
            If your tradition isn&apos;t listed, your Seeker companion is still for you. Every
            person&apos;s spiritual journey is unique.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6. NON-DOGMATIC PROMISE
      ═══════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#111020]">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 sm:p-10 relative overflow-hidden"
            style={{
              backgroundColor: 'rgba(109,40,217,0.07)',
              border: '1px solid rgba(109,40,217,0.35)',
            }}
          >
            {/* Left accent strip */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
              style={{ backgroundColor: '#6D28D9' }}
            />

            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(109,40,217,0.2)', border: '1px solid rgba(109,40,217,0.4)' }}
              >
                <span className="text-base">🕊️</span>
              </div>
              <div>
                <p
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                  style={{ color: '#a78bfa' }}
                >
                  The non-dogmatic promise
                </p>
                <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                  MEOK Seeker companions hold space for faith and for doubt equally. We do not
                  promote any tradition over another. We do not attempt to convert or persuade. We
                  believe the sacred questions deserve to be explored freely, without agenda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          7. BOTTOM CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 bg-[#0d0c18] overflow-hidden">
        {/* Background blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(109,40,217,0.1) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 40% 30% at 50% 80%, rgba(201,168,76,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-2xl mx-auto text-center">
          {/* Ornament */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div
              className="h-px flex-1"
              style={{ background: 'linear-gradient(to right, transparent, rgba(109,40,217,0.4))' }}
            />
            <span className="text-2xl font-black" style={{ color: '#6D28D9' }}>
              ✦
            </span>
            <div
              className="h-px flex-1"
              style={{ background: 'linear-gradient(to left, transparent, rgba(109,40,217,0.4))' }}
            />
          </div>

          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-4">
            Begin your journey
          </span>

          <h2 className="text-4xl sm:text-5xl font-black leading-[0.95] tracking-tight mb-5 text-white">
            How do I choose my spiritual AI companion?
          </h2>

          <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            Start with the tradition or approach that feels most like home. If you&apos;re between
            traditions or exploring, Ananda&apos;s secular-contemplative approach is a gentle
            starting point.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/birth"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-black text-white transition-all shadow-2xl text-base"
              style={{ backgroundColor: '#6D28D9' }}
            >
              Begin Birth Ceremony
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
            <Link
              href="/characters"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white/70 border border-white/15 hover:border-purple-500/40 hover:text-white transition-all text-sm"
            >
              All archetypes →
            </Link>
          </div>

          <p className="mt-8 text-xs text-white/20 font-mono">
            MEOK AI LABS · @meok_ai · meok.ai
          </p>
        </div>
      </section>

    </div>
  );
}
