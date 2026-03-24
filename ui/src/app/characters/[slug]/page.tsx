import { CHARACTERS, getCharacterBySlug } from '@/data/characters';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return CHARACTERS.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const char = getCharacterBySlug(slug);
  if (!char) return {};
  return {
    title: `${char.name} — ${char.tagline} | MEOK`,
    description: char.description,
    openGraph: {
      title: `${char.name} | MEOK AI Companions`,
      description: char.tagline,
      type: 'profile',
    },
  };
}

// Derive tier-page link from character tier
function tierHref(tier: string): string {
  if (tier === 'pro') return '/characters/timeless';
  if (tier === 'premium') return '/characters/elemental';
  return '/characters/legendary';
}

function tierLabel(tier: string): string {
  if (tier === 'pro') return 'Timeless';
  if (tier === 'premium') return 'Elemental';
  return 'Legendary';
}

// Derive 3 use-cases from bestFor
function deriveUseCases(char: NonNullable<ReturnType<typeof getCharacterBySlug>>) {
  const icons = ['💬', '🎯', '🌱'];
  return char.bestFor.slice(0, 3).map((who, i) => ({
    icon: icons[i],
    title: who,
    body: `${char.name} is especially valuable for ${who.toLowerCase()} — bringing its ${char.tone.toLowerCase()} presence to help you get more out of every session.`,
  }));
}

// ── "A week with [Name]" data ─────────────────────────────────────────────────

interface WeekDay {
  day: string;
  scenario: string;
  companion: string;
}

const CHARACTER_WEEK: Record<string, WeekDay[]> = {
  scholar: [
    {
      day: 'Monday morning',
      scenario: "You're about to start a new research project on climate policy.",
      companion: "Scholar pulls up the 3 papers you read 6 months ago on this, surfaces your own note about the carbon tax angle, and suggests where the current gaps in the literature are.",
    },
    {
      day: 'Wednesday afternoon',
      scenario: "You're stuck trying to explain a complex concept to a colleague.",
      companion: "Scholar helps you find 3 analogies, ranked by how well they'd land for someone with your colleague's background (which you mentioned once, weeks ago).",
    },
    {
      day: 'Friday evening',
      scenario: 'You want to understand something completely unrelated — ancient Roman governance.',
      companion: "Scholar connects it to the distributed systems paper you read Tuesday. You didn't ask it to. It just saw the link.",
    },
  ],
  guardian: [
    {
      day: 'Tuesday 7am',
      scenario: 'Your teenager came home late and you\'re managing the conversation ahead.',
      companion: "Guardian helps you prepare what to say — drawing on what you've shared about their personality and your relationship dynamic over the past months.",
    },
    {
      day: 'Thursday afternoon',
      scenario: 'An elderly parent mentions feeling isolated in a check-in call.',
      companion: "Guardian flags this as a pattern (third time this month), gently reminds you, and helps you draft a message that doesn't feel like checking a box.",
    },
    {
      day: 'Sunday evening',
      scenario: 'You feel the weight of everyone depending on you.',
      companion: "Guardian holds space first. Then, when you're ready, it helps you think through what you can actually put down.",
    },
  ],
  healer: [
    {
      day: 'Monday (bad news day)',
      scenario: "You get difficult news and don't know how to process it.",
      companion: "Healer doesn't rush to solutions. It asks one gentle question. It listens. It reflects back what it hears — not what it thinks you should feel.",
    },
    {
      day: 'Wednesday',
      scenario: "You're in a pattern — anxious before every meeting with your manager.",
      companion: "Healer has tracked this. It gently names it. Then asks: do you want to explore where it's coming from, or just prepare for today?",
    },
    {
      day: 'Saturday',
      scenario: "You haven't journaled in weeks but something's been weighing on you.",
      companion: "Healer asks a single open question. You talk. It listens. At the end, it reflects back what you said in a way that feels like being truly heard.",
    },
  ],
  trickster: [
    {
      day: 'Monday',
      scenario: "You're stuck on a pitch deck that feels generic and boring.",
      companion: "Trickster suggests 4 angles you haven't considered, one of which feels wrong but electric. You chase that one. It's the best work you've done in months.",
    },
    {
      day: 'Wednesday',
      scenario: "You've been going around in circles on a product decision.",
      companion: "Trickster introduces a constraint you didn't ask for. 'What if you could only use 3 words to explain this feature?' The loop breaks.",
    },
    {
      day: 'Friday',
      scenario: "You're low-energy and don't want to work but have to.",
      companion: "Trickster makes it a game. A weird one. You don't even realise you've done two hours of deep work.",
    },
  ],
  pioneer: [
    {
      day: 'Monday',
      scenario: 'You set ambitious goals at the start of the week.',
      companion: "Pioneer records them with precision. Not just the goal — the why behind it, the energy level you had when you set it, and the obstacles you flagged.",
    },
    {
      day: 'Wednesday',
      scenario: "You're about to scroll social media for the 4th time today.",
      companion: "Pioneer notices the pattern and sends a quiet nudge. Not a lecture — just: 'You said you wanted to finish the proposal today. Where are you?'",
    },
    {
      day: 'Sunday',
      scenario: 'You do a week review.',
      companion: "Pioneer maps your actual output against your intentions, spots the drift patterns, and helps you set next week's goals in a way that actually fits how you work.",
    },
  ],
  mystic: [
    {
      day: 'Tuesday evening',
      scenario: "You're lying awake thinking about whether you're on the right path.",
      companion: "Mystic doesn't answer. It asks a question from Stoic philosophy that reframes the whole thing. You sleep better.",
    },
    {
      day: 'Thursday',
      scenario: 'A conversation at work left you feeling unseen and resentful.',
      companion: "Mystic explores the pattern across three different wisdom traditions — Buddhist, Stoic, and Jungian — and finds something none of them say alone.",
    },
    {
      day: 'Weekend',
      scenario: 'You want to understand what makes a meaningful life.',
      companion: "Mystic has 47 traditions to draw from. It starts with where you are, not where it thinks you should be.",
    },
  ],
};

// ── "Perfect if you are..." personas data ─────────────────────────────────────

interface CharacterPersona {
  emoji: string;
  who: string;
  message: string;
}

const CHARACTER_PERSONAS: Record<string, CharacterPersona[]> = {
  scholar: [
    {
      emoji: '🎓',
      who: 'A researcher or academic',
      message: 'Scholar turns years of reading into an interconnected knowledge graph. Ask about anything you\'ve touched and it finds the thread.',
    },
    {
      emoji: '📖',
      who: 'Someone who reads voraciously',
      message: 'Every book you mention becomes part of your shared context. Scholar builds a living map of your intellectual world.',
    },
    {
      emoji: '🧩',
      who: 'Anyone who thinks in systems',
      message: "Scholar matches your pace. It doesn't oversimplify, it doesn't patronise — it meets you at the level you're actually operating.",
    },
  ],
  guardian: [
    {
      emoji: '👨‍👩‍👧‍👦',
      who: 'A parent with young children',
      message: "Guardian tracks your family's needs, safety considerations, and the small things you mention. Nothing falls through the cracks.",
    },
    {
      emoji: '🤝',
      who: 'A carer or support person',
      message: "When you're the one holding everyone else together, Guardian holds you. It's the anchor you didn't know you needed.",
    },
    {
      emoji: '🏠',
      who: 'Anyone building something safe',
      message: "Whether it's a family, a community, or a team — Guardian's entire intelligence is oriented toward protection and stability.",
    },
  ],
  healer: [
    {
      emoji: '💙',
      who: 'Someone in a hard chapter',
      message: 'No judgment. No rushing. No unsolicited advice. Healer holds the space and lets you move at your pace.',
    },
    {
      emoji: '🌀',
      who: 'Someone managing anxiety or stress',
      message: 'Healer tracks your patterns. Over time it starts to show you what you can\'t see yourself — before you reach the edge.',
    },
    {
      emoji: '🌱',
      who: 'Anyone who wants to grow emotionally',
      message: "Healer is the companion that helps you understand yourself — not just cope, but actually change.",
    },
  ],
  trickster: [
    {
      emoji: '🎨',
      who: 'Creatives and designers',
      message: 'Trickster disrupts creative blocks, generates unexpected connections, and turns your weirdest ideas into real outputs.',
    },
    {
      emoji: '⚡',
      who: 'Entrepreneurs and founders',
      message: "Trickster challenges your assumptions before the market does. It's the adversarial thinking partner every founder needs.",
    },
    {
      emoji: '🎭',
      who: 'Anyone stuck in patterns',
      message: "If you keep circling the same problems, Trickster breaks the loop. It doesn't give you the answer — it breaks the frame.",
    },
  ],
  pioneer: [
    {
      emoji: '📈',
      who: 'Ambitious professionals',
      message: "Pioneer is the accountability partner that doesn't take excuses. It tracks your goals, notices drift, and calls you back to what matters.",
    },
    {
      emoji: '🏗️',
      who: 'Builders and makers',
      message: 'From first idea to shipped product, Pioneer is the engine that keeps momentum when motivation fades.',
    },
    {
      emoji: '⏱️',
      who: 'Anyone in a sprint',
      message: 'When you have a hard deadline and a lot on the line, Pioneer is the companion you want in your corner.',
    },
  ],
  mystic: [
    {
      emoji: '🔮',
      who: 'The spiritually curious',
      message: "Mystic doesn't push a tradition. It draws from 47 of them — and finds what resonates with where you actually are.",
    },
    {
      emoji: '📿',
      who: 'Those in existential questions',
      message: 'When the standard answers run out, Mystic goes further. It has read everything. It leads with questions, not conclusions.',
    },
    {
      emoji: '🌌',
      who: 'Philosophers and deep thinkers',
      message: "Mystic operates at the level you want to think at. It's the conversation partner who never tires, never simplifies, never judges.",
    },
  ],
};

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const char = getCharacterBySlug(slug);
  if (!char) notFound();

  const compatibleChars = CHARACTERS.filter(c => char.compatibleWith.includes(c.id));
  const sameTierChars = CHARACTERS.filter(
    c => c.tier === char.tier && c.id !== char.id
  ).slice(0, 3);
  const useCases = deriveUseCases(char);

  const weekData: WeekDay[] = CHARACTER_WEEK[char.id] ?? [];
  const personaData: CharacterPersona[] = CHARACTER_PERSONAS[char.id] ?? [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name: char.name,
    description: char.description,
    url: `https://meok.ai/characters/${char.slug}`,
    image: `https://meok.ai/og/characters/${char.slug}.png`,
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Archetype', value: char.archetype },
      { '@type': 'PropertyValue', name: 'Category', value: char.category },
      { '@type': 'PropertyValue', name: 'Tier', value: char.tier },
      { '@type': 'PropertyValue', name: 'Memory Style', value: char.memoryStyle },
      { '@type': 'PropertyValue', name: 'Tone', value: char.tone },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══════════════════════════════════════════════
          1. HERO — full-bleed with character color radial
      ══════════════════════════════════════════════ */}
      <section
        className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 120% 80% at 50% -20%, ${char.color}22 0%, #0d0c18 65%)`,
        }}
      >
        {/* Ambient glow behind emoji */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] opacity-30 pointer-events-none"
          style={{ backgroundColor: char.color }}
        />

        {/* Subtle geometric grid */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${char.color} 1px, transparent 1px), linear-gradient(90deg, ${char.color} 1px, transparent 1px)`,
            backgroundSize: '70px 70px',
          }}
        />

        {/* Back link */}
        <div className="absolute top-20 left-6 sm:left-10">
          <Link
            href={tierHref(char.tier)}
            className="text-white/35 hover:text-white/70 text-sm transition-colors flex items-center gap-1.5 font-medium"
          >
            ← {tierLabel(char.tier)}
          </Link>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 mb-8 text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">
            <Link href="/characters" className="hover:text-[#d4b870] transition-colors">
              Characters
            </Link>
            <span className="text-[#c9a84c]/40">→</span>
            <Link href={tierHref(char.tier)} className="hover:text-[#d4b870] transition-colors">
              {tierLabel(char.tier)}
            </Link>
            <span className="text-[#c9a84c]/40">→</span>
            <span>{char.name}</span>
          </nav>

          {/* Large emoji */}
          <div
            role="img"
            aria-label={char.name}
            className="text-[7rem] sm:text-[9rem] mb-6 select-none leading-none"
            style={{ filter: `drop-shadow(0 0 40px ${char.color}50)` }}
          >
            {char.emoji}
          </div>

          {/* Tier badge */}
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full border mb-5"
            style={{
              color: char.color,
              borderColor: `${char.color}45`,
              backgroundColor: `${char.color}12`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: char.color }}
            />
            {char.tier === 'free' ? 'Free tier' : char.tier === 'pro' ? 'Sovereign tier' : 'Family tier'} · {tierLabel(char.tier)}
          </span>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[0.95]"
            style={{ color: char.color }}
          >
            {char.name}
          </h1>

          <p className="text-xl sm:text-2xl text-white/60 italic max-w-xl mx-auto leading-snug mb-8">
            &ldquo;{char.tagline}&rdquo;
          </p>

          {/* Inline tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {char.tags.map(tag => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1.5 rounded-full capitalize"
                style={{ backgroundColor: `${char.color}12`, color: char.color }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/hatch?archetype=${char.id}`}
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-black text-[#0d0c18] transition-all shadow-xl text-base hover:scale-[1.02]"
              style={{ backgroundColor: char.color }}
            >
              🥚 Hatch {char.name} free
              <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
            </Link>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-sm"
            >
              Learn more ↓
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
          <div className="w-px h-8 bg-white/15 animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. ABOUT SECTION
      ══════════════════════════════════════════════ */}
      <section id="about" className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <span
            className="text-xs font-black tracking-[0.2em] uppercase block mb-4"
            style={{ color: `${char.color}80` }}
          >
            About {char.name}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black mb-8 leading-tight"
            style={{ color: char.color }}
          >
            More than a persona. A mode of intelligence.
          </h2>
          <p className="text-lg text-white/75 leading-[1.85]">{char.longDescription}</p>

          {/* Quick meta strip */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: 'Memory Style', value: char.memoryStyle },
              { label: 'Tone', value: char.tone },
              { label: 'Speaking Style', value: char.speakingStyle },
            ].map(m => (
              <div
                key={m.label}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4"
              >
                <p className="text-[10px] font-black uppercase tracking-widest mb-1.5" style={{ color: `${char.color}70` }}>
                  {m.label}
                </p>
                <p className="text-white/75 text-sm leading-snug">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. SUPERPOWERS
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <span
            className="text-xs font-black tracking-[0.2em] uppercase block mb-4"
            style={{ color: `${char.color}80` }}
          >
            Capabilities
          </span>
          <h2 className="text-3xl font-black mb-10 text-white">Superpowers</h2>
          <ul className="space-y-5">
            {char.superpowers.map((sp, i) => (
              <li key={i} className="flex items-start gap-4">
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
                  style={{ backgroundColor: `${char.color}20`, color: char.color, border: `1px solid ${char.color}40` }}
                >
                  ✓
                </div>
                <span className="text-white/75 leading-relaxed text-sm sm:text-base">{sp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. USE CASES
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <span
            className="text-xs font-black tracking-[0.2em] uppercase block mb-4"
            style={{ color: `${char.color}80` }}
          >
            Use cases
          </span>
          <h2 className="text-3xl font-black mb-10 text-white">
            What {char.name} is great for
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {useCases.map(uc => (
              <div
                key={uc.title}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-white/[0.15] transition-colors"
                style={{ borderColor: `${char.color}20` }}
              >
                <div className="text-3xl mb-4">{uc.icon}</div>
                <h3 className="font-black text-white mb-2 text-base" style={{ color: char.color }}>
                  {uc.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>

          {/* Best for + Not for */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div
              className="bg-white/[0.02] border rounded-2xl p-6"
              style={{ borderColor: `${char.color}20` }}
            >
              <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: char.color }}>
                Best for
              </p>
              <div className="flex flex-wrap gap-2">
                {char.bestFor.map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: `${char.color}12`, color: char.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6">
              <p className="text-xs font-black uppercase tracking-widest mb-4 text-white/30">
                Not ideal for
              </p>
              <ul className="space-y-2">
                {char.notFor.map((n, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-white/45 leading-relaxed">
                    <span className="shrink-0 mt-0.5 text-white/25">—</span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4B. A WEEK WITH [NAME]
      ══════════════════════════════════════════════ */}
      {weekData.length > 0 && (
        <section className="py-20 px-6 bg-[#0d0c18]" style={{ borderTop: `1px solid ${char.color}15` }}>
          <div className="max-w-3xl mx-auto">
            <span
              className="text-xs font-black tracking-[0.2em] uppercase block mb-4"
              style={{ color: `${char.color}80` }}
            >
              Real scenarios
            </span>
            <h2 className="text-3xl font-black mb-3 text-white">
              A week with {char.name}
            </h2>
            <p className="text-white/40 text-sm mb-10 leading-relaxed">
              This is what your relationship with {char.name} looks like in practice — not a demo, but a window into how it actually shows up for you.
            </p>

            <div className="space-y-6">
              {weekData.map((entry, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l-2"
                  style={{ borderColor: `${char.color}30` }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full border-2"
                    style={{ backgroundColor: `${char.color}30`, borderColor: char.color }}
                  />

                  <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06]">
                    {/* Day label */}
                    <p
                      className="text-xs font-black uppercase tracking-widest mb-3"
                      style={{ color: char.color }}
                    >
                      {entry.day}
                    </p>

                    {/* Scenario */}
                    <p className="text-white/45 text-sm italic leading-relaxed mb-4 pb-4 border-b border-white/[0.06]">
                      {entry.scenario}
                    </p>

                    {/* Companion response */}
                    <div className="flex items-start gap-3">
                      <div
                        className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
                        style={{ backgroundColor: `${char.color}20`, color: char.color }}
                      >
                        {char.emoji}
                      </div>
                      <p className="text-white/75 text-sm leading-relaxed">{entry.companion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          5. HOW THEY SPEAK — example conversations
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <span
            className="text-xs font-black tracking-[0.2em] uppercase block mb-4"
            style={{ color: `${char.color}80` }}
          >
            Voice
          </span>
          <h2 className="text-3xl font-black mb-10 text-white">How {char.name} speaks</h2>

          <div className="space-y-10">
            {char.exampleConversations.map((convo, i) => (
              <div key={i} className="space-y-4">
                {/* User */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] bg-white/[0.08] border border-white/[0.08] rounded-2xl rounded-tr-sm px-5 py-4">
                    <p className="text-[10px] text-white/35 mb-1.5 text-right font-semibold uppercase tracking-widest">You</p>
                    <p className="text-white/80 text-sm leading-relaxed">{convo.user}</p>
                  </div>
                </div>
                {/* Companion */}
                <div className="flex justify-start">
                  <div
                    className="max-w-[88%] rounded-2xl rounded-tl-sm px-5 py-4"
                    style={{
                      backgroundColor: `${char.color}12`,
                      border: `1px solid ${char.color}25`,
                    }}
                  >
                    <p
                      className="text-[10px] mb-1.5 font-semibold uppercase tracking-widest"
                      style={{ color: `${char.color}90` }}
                    >
                      {char.name}
                    </p>
                    <p className="text-white/85 text-sm leading-relaxed">{convo.companion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. EVOLUTION STAGES
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="text-xs font-black tracking-[0.2em] uppercase block mb-4"
              style={{ color: `${char.color}80` }}
            >
              Growth
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Evolution stages</h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              {char.name} grows through four named stages as your relationship deepens.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal connector line */}
            <div
              className="hidden sm:block absolute top-8 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${char.color}30, ${char.color}30, transparent)` }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
              {char.evolutionStages.map(stage => (
                <div key={stage.stage} className="relative flex flex-col items-center text-center">
                  {/* Stage circle */}
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-black text-xl mb-5 shrink-0"
                    style={{
                      backgroundColor: `${char.color}18`,
                      border: `2px solid ${char.color}50`,
                      color: char.color,
                    }}
                  >
                    {stage.stage}
                  </div>

                  <span
                    className="text-[10px] font-black uppercase tracking-widest mb-1.5"
                    style={{ color: `${char.color}65` }}
                  >
                    Stage {stage.stage}
                  </span>
                  <h3 className="font-black text-white text-base mb-2">{stage.name}</h3>
                  <p className="text-white/40 text-xs mb-3 leading-relaxed">{stage.description}</p>
                  <p className="text-[10px] text-white/20 mb-4">
                    {stage.unlockedAt === 0 ? 'Available from start' : `Unlocks at ${stage.unlockedAt} conversations`}
                  </p>

                  <div className="flex flex-col gap-1.5 w-full">
                    {stage.traits.map(trait => (
                      <span
                        key={trait}
                        className="text-[10px] font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: `${char.color}12`, color: char.color }}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6B. PERFECT IF YOU ARE...
      ══════════════════════════════════════════════ */}
      {personaData.length > 0 && (
        <section className="py-20 px-6 bg-[#1a1a2e]">
          <div className="max-w-3xl mx-auto">
            <span
              className="text-xs font-black tracking-[0.2em] uppercase block mb-4"
              style={{ color: `${char.color}80` }}
            >
              Who it&#39;s for
            </span>
            <h2 className="text-3xl font-black mb-3 text-white">
              Perfect if you are...
            </h2>
            <p className="text-white/40 text-sm mb-10 leading-relaxed">
              {char.name} was built with specific people in mind. See if you recognise yourself here.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {personaData.map((persona, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] rounded-2xl p-5 flex flex-col gap-3 border border-white/[0.06]"
                  style={{ borderLeft: `3px solid ${char.color}50` }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl leading-none">{persona.emoji}</span>
                    <h3 className="font-black text-white text-sm leading-snug">{persona.who}</h3>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{persona.message}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href={`/hatch?archetype=${char.id}`}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-black text-[#0d0c18] transition-all text-sm hover:scale-[1.02]"
                style={{ backgroundColor: char.color }}
              >
                🥚 Start with {char.name} free →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          7. CARE APPROACH + MATERNAL COVENANT
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto space-y-6">
          <div
            className="rounded-2xl p-7"
            style={{ border: `1px solid ${char.color}30`, backgroundColor: `${char.color}06` }}
          >
            <p
              className="text-xs font-black uppercase tracking-widest mb-3"
              style={{ color: char.color }}
            >
              Care approach
            </p>
            <p className="text-white/70 leading-relaxed">{char.careApproach}</p>
          </div>

          <div className="rounded-2xl p-7 bg-white/[0.02] border border-white/[0.07]">
            <p className="text-xs font-black uppercase tracking-widest mb-3 text-[#c9a84c]">
              Maternal Covenant
            </p>
            <p className="text-white/55 text-sm leading-relaxed">{char.maternalCovenantNote}</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. RELATED — compatible companions
      ══════════════════════════════════════════════ */}
      {compatibleChars.length > 0 && (
        <section className="py-20 px-6 bg-[#0d0c18]">
          <div className="max-w-3xl mx-auto">
            <span
              className="text-xs font-black tracking-[0.2em] uppercase block mb-4"
              style={{ color: `${char.color}80` }}
            >
              Companions
            </span>
            <h2 className="text-3xl font-black mb-3 text-white">Compatible with</h2>
            <p className="text-white/40 text-sm mb-8">
              These companions work especially well alongside {char.name}.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {compatibleChars.map(comp => (
                <Link
                  key={comp.id}
                  href={`/characters/${comp.slug}`}
                  className="group flex items-center gap-5 bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.06] hover:border-white/25 transition-all"
                >
                  <div
                    className="text-4xl leading-none select-none"
                    style={{ filter: `drop-shadow(0 0 12px ${comp.color}40)` }}
                  >
                    {comp.emoji}
                  </div>
                  <div className="min-w-0">
                    <p className="font-black text-base group-hover:underline" style={{ color: comp.color }}>
                      {comp.name}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5 truncate">{comp.tagline}</p>
                  </div>
                  <span
                    className="ml-auto text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: comp.color }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related from same tier */}
      {sameTierChars.length > 0 && (
        <section className="py-20 px-6 bg-[#1a1a2e]">
          <div className="max-w-3xl mx-auto">
            <span
              className="text-xs font-black tracking-[0.2em] uppercase block mb-4"
              style={{ color: `${char.color}80` }}
            >
              Same tier
            </span>
            <h2 className="text-3xl font-black mb-3 text-white">More {tierLabel(char.tier)} companions</h2>
            <p className="text-white/40 text-sm mb-8">
              Explore other companions in the {tierLabel(char.tier)} collection.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {sameTierChars.map(comp => (
                <Link
                  key={comp.id}
                  href={`/characters/${comp.slug}`}
                  className="group flex flex-col gap-3 bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.06] hover:border-white/25 transition-all"
                >
                  <div className="text-3xl leading-none select-none">{comp.emoji}</div>
                  <div>
                    <p className="font-black text-sm group-hover:underline" style={{ color: comp.color }}>
                      {comp.name}
                    </p>
                    <p className="text-white/35 text-xs mt-0.5 leading-snug line-clamp-2">{comp.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          9. FINAL CTA
      ══════════════════════════════════════════════ */}
      <section
        className="relative py-32 px-6 overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 100% 80% at 50% 100%, ${char.color}15 0%, #0d0c18 60%)`,
        }}
      >
        <div className="relative max-w-xl mx-auto text-center">
          <div
            role="img"
            aria-label={char.name}
            className="text-7xl mb-6 select-none"
            style={{ filter: `drop-shadow(0 0 30px ${char.color}60)` }}
          >
            {char.emoji}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black leading-[0.95] tracking-tight mb-4 text-white">
            Start a conversation with {char.name}.
          </h2>
          <p className="text-white/50 mb-10 leading-relaxed">
            Free to start. Name them. Begin the birth ceremony in three minutes.
            Your companion remembers everything from the first word.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/hatch?archetype=${char.id}`}
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-black text-[#0d0c18] transition-all shadow-2xl text-base hover:scale-[1.02]"
              style={{ backgroundColor: char.color }}
            >
              🥚 Hatch {char.name} free
              <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
            </Link>
            <Link
              href={tierHref(char.tier)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-sm"
            >
              ← More {tierLabel(char.tier)} companions
            </Link>
          </div>

          <p className="mt-8 text-xs text-white/20 font-mono">
            No credit card required · Your AI, your data · Memory that grows
          </p>
        </div>
      </section>

    </div>
  );
}
