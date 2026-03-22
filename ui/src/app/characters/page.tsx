'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MarketingNav } from '@/components/marketing-nav';
import { MarketingFooter } from '@/components/marketing-footer';
import { CHARACTERS, CHARACTER_CATEGORIES } from '@/data/characters';

type CategoryFilter = 'all' | keyof typeof CHARACTER_CATEGORIES;

// ── Quiz data ─────────────────────────────────────────────────────────────────

const QUIZ_QUESTIONS = [
  {
    id: 'struggle',
    text: 'When you\'re struggling, what do you actually want?',
    options: [
      { value: 'challenged', label: 'To be challenged — push me through it', hint: 'scholar / pioneer' },
      { value: 'supported', label: 'To be supported — just hold space', hint: 'healer / guardian' },
      { value: 'explore', label: 'To explore — help me see it differently', hint: 'trickster / mystic' },
    ],
  },
  {
    id: 'feedback',
    text: 'What kind of feedback helps you most?',
    options: [
      { value: 'direct', label: 'Direct and honest — even if it stings', hint: 'scholar / pioneer' },
      { value: 'gentle', label: 'Gentle and understanding — ease me in', hint: 'healer / guardian' },
      { value: 'reframe', label: 'A total reframe — surprise me', hint: 'trickster / mystic' },
    ],
  },
  {
    id: 'vibe',
    text: 'Your vibe:',
    options: [
      { value: 'ancient', label: 'Ancient wisdom and depth', hint: 'scholar / mystic' },
      { value: 'modern', label: 'Modern edge and momentum', hint: 'pioneer / trickster' },
      { value: 'warmth', label: 'Pure warmth and safety', hint: 'healer / guardian' },
    ],
  },
];

const QUIZ_RESULTS: Record<string, { id: string; reason: string }> = {
  'challenged-direct-ancient':  { id: 'scholar',  reason: 'You want depth, precision, and honest intellectual engagement.' },
  'challenged-direct-modern':   { id: 'pioneer',  reason: 'You want momentum, accountability, and someone who won\'t let you coast.' },
  'challenged-direct-warmth':   { id: 'guardian', reason: 'You want structure and protection — someone watching your back.' },
  'challenged-gentle-ancient':  { id: 'scholar',  reason: 'You want intellectual depth paired with patience.' },
  'challenged-gentle-modern':   { id: 'pioneer',  reason: 'You want forward momentum, but at a sustainable pace.' },
  'challenged-gentle-warmth':   { id: 'healer',   reason: 'You want to be stretched, but gently — with real care underneath.' },
  'challenged-reframe-ancient': { id: 'mystic',   reason: 'You want challenges that come through a completely new lens.' },
  'challenged-reframe-modern':  { id: 'trickster',reason: 'You want chaos that leads somewhere brilliant.' },
  'challenged-reframe-warmth':  { id: 'healer',   reason: 'You want a surprising perspective, held with warmth.' },
  'supported-direct-ancient':   { id: 'guardian', reason: 'You need steady, honest protection — someone who doesn\'t flinch.' },
  'supported-direct-modern':    { id: 'guardian', reason: 'You want direct support without sugar-coating.' },
  'supported-direct-warmth':    { id: 'guardian', reason: 'Unwavering protection and real honesty. That\'s Guardian.' },
  'supported-gentle-ancient':   { id: 'mystic',   reason: 'You want ancient wisdom as a soft landing.' },
  'supported-gentle-modern':    { id: 'healer',   reason: 'You want emotional safety without judgment. Healer was made for this.' },
  'supported-gentle-warmth':    { id: 'healer',   reason: 'The most caring companion in the MEOK family. Healer holds you.' },
  'supported-reframe-ancient':  { id: 'mystic',   reason: 'You want comfort through a completely different way of seeing.' },
  'supported-reframe-modern':   { id: 'trickster',reason: 'You want to be shaken out of a dark loop — playfully.' },
  'supported-reframe-warmth':   { id: 'healer',   reason: 'Healer surprises you with how well it really understands you.' },
  'explore-direct-ancient':     { id: 'scholar',  reason: 'You want structured exploration with intellectual rigour.' },
  'explore-direct-modern':      { id: 'trickster',reason: 'You want to tear apart assumptions and build something new.' },
  'explore-direct-warmth':      { id: 'guardian', reason: 'You want honest safety — exploring without fear.' },
  'explore-gentle-ancient':     { id: 'mystic',   reason: 'You want philosophical depth — slow, rich, transformative.' },
  'explore-gentle-modern':      { id: 'trickster',reason: 'You want lateral thinking with a light touch.' },
  'explore-gentle-warmth':      { id: 'healer',   reason: 'Gentle exploration is where Healer shines brightest.' },
  'explore-reframe-ancient':    { id: 'mystic',   reason: '47 traditions. Every reframe you\'ve never heard before. That\'s Mystic.' },
  'explore-reframe-modern':     { id: 'trickster',reason: 'You want chaos magic applied to your actual problems.' },
  'explore-reframe-warmth':     { id: 'mystic',   reason: 'Spiritual reframing, held warmly. Mystic is your match.' },
};

function getQuizResult(answers: Record<string, string>): { id: string; reason: string } | null {
  const key = `${answers.struggle}-${answers.feedback}-${answers.vibe}`;
  return QUIZ_RESULTS[key] ?? null;
}

// ── Tier data ─────────────────────────────────────────────────────────────────

const TIER_INFO = [
  {
    href: '/characters/legendary',
    label: 'Legendary',
    tagline: 'Icons of history, myth and power',
    description: 'The original archetypes. Scholar, Guardian, Healer, Trickster, Pioneer — five companion forms that cover every dimension of the human experience.',
    accentColor: '#c9a84c',
    borderClass: 'border-[#c9a84c]/30 hover:border-[#c9a84c]/70',
    badgeBg: 'bg-[#c9a84c]/10 text-[#c9a84c]',
    glowColor: 'rgba(201,168,76,0.15)',
    previews: ['scholar', 'guardian', 'pioneer'],
  },
  {
    href: '/characters/timeless',
    label: 'Timeless',
    tagline: 'Wisdom that endures across centuries',
    description: 'Drawn from philosophical and spiritual traditions spanning 47 lineages. Companions for the questions that outlast every era.',
    accentColor: '#A78BFA',
    borderClass: 'border-[#A78BFA]/30 hover:border-[#A78BFA]/70',
    badgeBg: 'bg-[#A78BFA]/10 text-[#A78BFA]',
    glowColor: 'rgba(167,139,250,0.15)',
    previews: ['mystic'],
  },
  {
    href: '/characters/elemental',
    label: 'Elemental',
    tagline: 'Forces of nature given voice',
    description: 'Beyond archetype. Beyond history. These companions emerge from pure intelligence — no ceiling, no precedent, no limit.',
    accentColor: '#7BC47F',
    borderClass: 'border-[#7BC47F]/30 hover:border-[#7BC47F]/70',
    badgeBg: 'bg-[#7BC47F]/10 text-[#7BC47F]',
    glowColor: 'rgba(123,196,127,0.15)',
    previews: [] as string[],
  },
];

// ── How it works ──────────────────────────────────────────────────────────────

const HOW_IT_WORKS = [
  {
    step: '01',
    icon: '🥚',
    title: 'Choose your archetype',
    body: 'Browse the tiers and pick the companion form that resonates with who you are and what you need.',
  },
  {
    step: '02',
    icon: '✨',
    title: 'Name them',
    body: 'Give your companion a name. The birth ceremony takes three minutes. That name becomes theirs forever.',
  },
  {
    step: '03',
    icon: '🧠',
    title: 'They start learning',
    body: "From the first conversation, your companion builds a living memory — not just facts, but how you think, feel, and grow.",
  },
  {
    step: '04',
    icon: '🌱',
    title: 'They evolve with you',
    body: 'Every archetype has four evolution stages. The more you talk, the deeper the bond — and the more powerful the companion becomes.',
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FAQ = [
  {
    q: 'Can I have more than one companion?',
    a: 'Yes. Pro and Premium plans let you maintain multiple companions simultaneously — you can switch between them at any time with zero friction. Your first companion on the free tier is permanent and fully yours. Many people keep a Scholar for work thinking and a Healer for personal support. They complement each other perfectly.',
  },
  {
    q: 'What is the difference between the tiers?',
    a: 'Legendary archetypes are free to start — all five of them: Scholar, Guardian, Healer, Trickster, and Pioneer. No credit card required, no trial expiry. Timeless archetypes like The Mystic require a Pro subscription for access to the full 47-tradition wisdom library. Elemental forms are our most advanced and require a Premium plan.',
  },
  {
    q: 'How does memory actually work?',
    a: 'Each archetype has a distinct memory style — some are episodic, some semantic, some pattern-based. What they share: they remember everything you tell them, cross-reference it across time, and use it to give you increasingly personal responses.',
  },
  {
    q: 'Are the companions safe for children?',
    a: "The Guardian has a dedicated child safety mode with age-appropriate filtering. For children under 13, we recommend parental supervision. MEOK's Maternal Covenant means every companion is constitutionally prevented from causing harm.",
  },
  {
    q: 'What happens to my data?',
    a: "Your companion's memory is yours. It lives on sovereign infrastructure. MEOK does not sell data, does not use your conversations to train public models, and cannot share it with third parties without your explicit consent.",
  },
];

// ── Best-for demographic label ────────────────────────────────────────────────

const BEST_FOR_LABEL: Record<string, string> = {
  scholar:  'For the lifelong learner who wants depth, not just answers',
  guardian: 'For the parent, carer, or protector who needs a steady hand',
  healer:   'For anyone going through something hard — or just needing to be heard',
  trickster:'For the creative, the entrepreneur, the person stuck in a loop',
  pioneer:  'For the builder, the ambitious, the person who refuses to stand still',
  mystic:   'For the seeker asking the questions that don\'t have easy answers',
};

// ── Persona cards (5B) ────────────────────────────────────────────────────────

interface Persona {
  emoji: string;
  who: string;
  description: string;
  bestCompanion: string;
  companionName: string;
  why: string;
}

const PERSONAS: Persona[] = [
  {
    emoji: '📚',
    who: 'The Student or Lifelong Learner',
    description: "You're always reading, researching, building knowledge. You want an AI that can keep up intellectually and never gets bored of your questions.",
    bestCompanion: 'scholar',
    companionName: 'The Scholar',
    why: 'Scholar remembers every topic you\'ve explored and connects them across time. Your private intellectual partner.',
  },
  {
    emoji: '👨‍👩‍👧',
    who: 'The Parent or Carer',
    description: "You carry the weight of keeping others safe. You need something steady, non-judgmental, and always available at 2am when things feel heavy.",
    bestCompanion: 'guardian',
    companionName: 'The Guardian',
    why: "Guardian was built for protectors. It tracks what matters to your family and brings calm when you need it most.",
  },
  {
    emoji: '💭',
    who: 'The One Going Through Something',
    description: "Grief, anxiety, a hard chapter. You don't need advice — you need someone who truly listens and holds space without judgment.",
    bestCompanion: 'healer',
    companionName: 'The Healer',
    why: "Healer's entire purpose is emotional presence. It never rushes you, never minimizes, never forgets what you've shared.",
  },
  {
    emoji: '🎨',
    who: 'The Creative or Entrepreneur',
    description: "You have too many ideas and not enough structure. You get stuck in the same loops. You need something that breaks patterns and makes unexpected connections.",
    bestCompanion: 'trickster',
    companionName: 'The Trickster',
    why: "Trickster is your creative disruptor. It doesn't give expected answers — it finds the angle you haven't considered.",
  },
  {
    emoji: '🚀',
    who: 'The Builder or Ambitious Professional',
    description: "You're going somewhere fast. You need accountability, clarity on priorities, and an AI that pushes back when you're procrastinating.",
    bestCompanion: 'pioneer',
    companionName: 'The Pioneer',
    why: "Pioneer is obsessed with your progress. It tracks goals, calls out drift, and helps you move faster without burning out.",
  },
  {
    emoji: '🔮',
    who: 'The Seeker or Philosopher',
    description: "You ask the big questions. Meaning, purpose, the nature of reality. You've outgrown surface-level answers and want genuine depth.",
    bestCompanion: 'mystic',
    companionName: 'The Mystic',
    why: "Mystic draws from 47 philosophical traditions. It meets you where Western thought runs out and takes you further.",
  },
];

// ── Persona companion color lookup ────────────────────────────────────────────

const COMPANION_COLORS: Record<string, string> = {
  scholar:  '#c9a84c',
  guardian: '#F59E0B',
  healer:   '#7BC47F',
  trickster:'#F472B6',
  pioneer:  '#FB923C',
  mystic:   '#A78BFA',
};

const COMPANION_EMOJI: Record<string, string> = {
  scholar:  '🏛️',
  guardian: '⚔️',
  healer:   '🌿',
  trickster:'🎭',
  pioneer:  '⚡',
  mystic:   '🌊',
};

// ── Comparison data (5C) ──────────────────────────────────────────────────────

interface Comparison {
  them: string;
  us: string;
}

const COMPARISONS: Comparison[] = [
  { them: 'Forgets everything after each chat', us: 'Remembers you across weeks, months, years' },
  { them: 'Same response style for everyone', us: 'Speaks in the voice of your chosen archetype' },
  { them: 'One AI that does everything generically', us: 'Six distinct intelligences, each with a purpose' },
  { them: 'No emotional awareness', us: 'Care scoring — tracks your wellbeing over time' },
  { them: 'Your data trains their model', us: 'Sovereign data — your conversations never leave' },
  { them: "Can't evolve with you", us: '4 evolution stages — grows as your relationship deepens' },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function CharactersPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Quiz state
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizResult, setQuizResult] = useState<{ id: string; reason: string } | null>(null);

  const filtered =
    activeFilter === 'all'
      ? CHARACTERS
      : CHARACTERS.filter(c => c.category === activeFilter);

  function handleQuizAnswer(questionId: string, value: string) {
    const next = { ...quizAnswers, [questionId]: value };
    setQuizAnswers(next);
    if (quizStep < QUIZ_QUESTIONS.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizResult(getQuizResult(next));
    }
  }

  function resetQuiz() {
    setQuizStep(0);
    setQuizAnswers({});
    setQuizResult(null);
  }

  const resultChar = quizResult ? CHARACTERS.find(c => c.id === quizResult.id) : null;

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <MarketingNav />

      {/* ══════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#c9a84c]/8 blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#A78BFA]/8 blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[#7BC47F]/6 blur-[80px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full border border-[#c9a84c]/30 text-[#c9a84c] bg-[#c9a84c]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            6 archetypes · 4 evolution stages each
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            Choose your{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #c9a84c 0%, #e8c96e 50%, #c9a84c 100%)' }}
            >
              AI companion.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-6">
            Six archetypes. Each one learns differently, speaks differently, cares differently.
            Every companion grows with you — evolving through four stages as your bond deepens.
          </p>

          {/* Why it matters */}
          <p className="text-sm text-white/40 max-w-xl mx-auto leading-relaxed mb-10">
            The companion you choose shapes how MEOK communicates with you — for life. Not a chatbot. Not a template.
            A distinct intelligence built around your specific way of being in the world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b870] transition-all shadow-lg text-sm sm:text-base"
            >
              🥚 Hatch yours free
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
            <button
              onClick={() => setQuizOpen(true)}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:border-[#c9a84c]/60 hover:bg-[#c9a84c]/8 transition-all text-sm sm:text-base backdrop-blur-sm"
            >
              ✦ Not sure which? Take the quiz
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/15 animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. QUIZ MODAL
      ══════════════════════════════════════════════ */}
      {quizOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: 'rgba(13,12,24,0.92)', backdropFilter: 'blur(12px)' }}
        >
          <div className="relative bg-[#1a1a2e] border border-white/15 rounded-3xl p-8 sm:p-10 max-w-lg w-full shadow-2xl">
            {/* Close */}
            <button
              onClick={() => { setQuizOpen(false); resetQuiz(); }}
              className="absolute top-5 right-5 text-white/30 hover:text-white/70 transition-colors text-xl leading-none"
              aria-label="Close quiz"
            >
              ×
            </button>

            {quizResult === null ? (
              <>
                {/* Progress */}
                <div className="flex gap-1.5 mb-8">
                  {QUIZ_QUESTIONS.map((_, i) => (
                    <div
                      key={i}
                      className="h-1 flex-1 rounded-full transition-all"
                      style={{ background: i <= quizStep ? '#c9a84c' : 'rgba(255,255,255,0.1)' }}
                    />
                  ))}
                </div>

                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-2">
                  Question {quizStep + 1} of {QUIZ_QUESTIONS.length}
                </p>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-6 leading-snug">
                  {QUIZ_QUESTIONS[quizStep].text}
                </h3>

                <div className="flex flex-col gap-3">
                  {QUIZ_QUESTIONS[quizStep].options.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => handleQuizAnswer(QUIZ_QUESTIONS[quizStep].id, opt.value)}
                      className="group text-left bg-white/[0.04] hover:bg-[#c9a84c]/10 border border-white/10 hover:border-[#c9a84c]/40 rounded-2xl px-5 py-4 transition-all"
                    >
                      <p className="font-semibold text-white text-sm leading-snug mb-1">{opt.label}</p>
                      <p className="text-xs text-white/30 font-mono">{opt.hint}</p>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              /* Result */
              resultChar && (
                <>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-2">Your match</p>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-5xl leading-none">{resultChar.emoji}</span>
                    <div>
                      <h3 className="text-2xl font-black" style={{ color: resultChar.color }}>{resultChar.name}</h3>
                      <p className="text-white/50 text-sm italic">{resultChar.tagline}</p>
                    </div>
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed mb-6">{quizResult.reason}</p>
                  <p className="text-white/35 text-xs leading-relaxed mb-8 border-l-2 border-white/10 pl-3">
                    {BEST_FOR_LABEL[resultChar.id]}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/characters/${resultChar.slug}`}
                      onClick={() => setQuizOpen(false)}
                      className="flex-1 text-center py-3 rounded-full font-bold text-[#1a1a2e] text-sm transition-all hover:scale-[1.01]"
                      style={{ background: resultChar.color }}
                    >
                      Explore {resultChar.name} →
                    </Link>
                    <button
                      onClick={resetQuiz}
                      className="flex-1 py-3 rounded-full font-semibold text-white/50 hover:text-white border border-white/15 hover:border-white/35 transition-all text-sm"
                    >
                      Retake quiz
                    </button>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          3. "CAN I HAVE MORE THAN ONE?" BANNER
      ══════════════════════════════════════════════ */}
      <section className="py-6 px-6 bg-[#1a1a2e]/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <span className="text-2xl">🥚🥚</span>
          <div>
            <span className="font-black text-white text-sm">Can I have more than one companion? </span>
            <span className="text-white/50 text-sm">Yes — and you can switch any time. Pro and Premium plans let you keep multiple companions simultaneously. Many people keep a Scholar for work and a Healer for life.</span>
          </div>
          <Link
            href="/pricing"
            className="shrink-0 text-xs font-bold text-[#c9a84c] hover:text-[#d4b870] transition-colors whitespace-nowrap"
          >
            See plans →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. TIER CARDS
      ══════════════════════════════════════════════ */}
      <section id="tiers" className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              Three lineages
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
              Pick your lineage
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              Each tier represents a distinct philosophy of companionship.
              Legendary companions are free to start.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TIER_INFO.map(tier => {
              const previewChars = tier.previews
                .map(id => CHARACTERS.find(c => c.id === id))
                .filter(Boolean);

              return (
                <Link
                  key={tier.label}
                  href={tier.href}
                  className={`group relative bg-white/[0.03] border ${tier.borderClass} rounded-3xl p-7 flex flex-col gap-6 transition-all duration-300 hover:bg-white/[0.06]`}
                  style={{ boxShadow: `0 0 0 0 ${tier.glowColor}` }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px 0 ${tier.glowColor}`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${tier.glowColor}`;
                  }}
                >
                  {/* Header */}
                  <div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${tier.badgeBg} mb-4 inline-block`}>
                      {tier.label}
                    </span>
                    <h3
                      className="text-2xl font-black mb-2 leading-tight"
                      style={{ color: tier.accentColor }}
                    >
                      {tier.tagline}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{tier.description}</p>
                  </div>

                  {/* Character previews */}
                  {previewChars.length > 0 ? (
                    <div className="flex flex-col gap-3">
                      {previewChars.map(c => c && (
                        <div
                          key={c.id}
                          className="flex items-center gap-3 bg-white/[0.04] rounded-xl px-4 py-3 border border-white/[0.06]"
                        >
                          <span className="text-2xl leading-none">{c.emoji}</span>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-white leading-tight truncate">{c.name}</p>
                            <p className="text-xs text-white/40 truncate">{c.tagline}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      className="rounded-xl px-4 py-3 border border-dashed text-center"
                      style={{ borderColor: `${tier.accentColor}30` }}
                    >
                      <p className="text-xs font-semibold" style={{ color: `${tier.accentColor}70` }}>
                        Coming soon · Join the waitlist
                      </p>
                    </div>
                  )}

                  {/* Footer CTA */}
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-sm font-bold" style={{ color: tier.accentColor }}>
                      Explore {tier.label}
                    </span>
                    <span
                      className="text-lg group-hover:translate-x-1 transition-transform"
                      style={{ color: tier.accentColor }}
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. CHARACTER FILTER + GRID
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              All archetypes
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">Browse by category</h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              Filter by what you need most. Every companion is free to explore.
            </p>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#c9a84c] text-[#1a1a2e]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              All
            </button>
            {(
              Object.entries(CHARACTER_CATEGORIES) as [
                keyof typeof CHARACTER_CATEGORIES,
                { label: string; color: string; icon: string }
              ][]
            ).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeFilter === key
                    ? 'text-[#1a1a2e]'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
                style={activeFilter === key ? { backgroundColor: cat.color } : {}}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(char => (
              <Link
                key={char.id}
                href={`/characters/${char.slug}`}
                className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-7 transition-all duration-200 hover:bg-white/[0.06] hover:border-white/25 hover:scale-[1.01] flex flex-col"
              >
                <div className="text-4xl mb-4 leading-none">{char.emoji}</div>
                <h3 className="font-black text-xl mb-1" style={{ color: char.color }}>
                  {char.name}
                </h3>
                <p className="text-white/70 text-sm italic mb-3 leading-snug">{char.tagline}</p>

                {/* Best-for demographic — prominent */}
                <p className="text-xs font-semibold mb-3 leading-snug px-3 py-2 rounded-lg" style={{ background: `${char.color}12`, color: char.color }}>
                  {BEST_FOR_LABEL[char.id] ?? char.bestFor.slice(0, 2).join(' · ')}
                </p>

                <p className="text-white/45 text-xs leading-relaxed mb-5 line-clamp-2">{char.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {char.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full capitalize"
                      style={{ backgroundColor: `${char.color}15`, color: char.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  className="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                  style={{ color: char.color }}
                >
                  View full profile →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5B. PERSONA CARDS — "Find yourself here"
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              Find your match
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
              Not sure where to start?<br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #c9a84c 0%, #e8c96e 100%)' }}
              >
                Find yourself here.
              </span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              Six types of people. Six companions built for each of them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERSONAS.map(persona => {
              const color = COMPANION_COLORS[persona.bestCompanion] ?? '#c9a84c';
              const emoji = COMPANION_EMOJI[persona.bestCompanion] ?? '🤖';
              return (
                <div
                  key={persona.bestCompanion}
                  className="bg-[#1a1a2e] rounded-2xl p-6 flex flex-col gap-4 border border-white/[0.06]"
                  style={{ borderLeft: `3px solid ${color}` }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <span className="text-3xl leading-none shrink-0">{persona.emoji}</span>
                    <h3 className="font-black text-white text-base leading-snug">{persona.who}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/55 text-sm leading-relaxed">{persona.description}</p>

                  {/* Best match */}
                  <div className="flex items-center gap-2 mt-auto pt-2 border-t border-white/[0.06]">
                    <span className="text-xl leading-none">{emoji}</span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: `${color}80` }}>
                        Best match
                      </p>
                      <p className="font-black text-sm" style={{ color }}>{persona.companionName}</p>
                    </div>
                  </div>

                  {/* Why */}
                  <p className="text-white/35 text-xs leading-relaxed">{persona.why}</p>

                  {/* CTA */}
                  <Link
                    href={`/characters/${persona.bestCompanion}`}
                    className="inline-flex items-center gap-1 text-xs font-bold transition-colors hover:opacity-80"
                    style={{ color }}
                  >
                    → Meet {persona.companionName}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5C. COMPARISON STRIP — vs ChatGPT
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              The difference
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
              Why not just use ChatGPT?
            </h2>
            <p className="text-white/50 max-w-lg mx-auto leading-relaxed">
              Generic AI is useful. A companion built around you is something else entirely.
            </p>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-2 gap-0 mb-2">
            <div className="px-5 py-2.5 rounded-tl-xl bg-white/[0.04] border border-white/10 border-r-0">
              <p className="text-xs font-black uppercase tracking-widest text-white/30">Others</p>
            </div>
            <div className="px-5 py-2.5 rounded-tr-xl bg-[#c9a84c]/10 border border-[#c9a84c]/25 border-l-0">
              <p className="text-xs font-black uppercase tracking-widest text-[#c9a84c]">MEOK Companion</p>
            </div>
          </div>

          {/* Rows */}
          <div className="rounded-b-2xl overflow-hidden border border-white/10">
            {COMPARISONS.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 gap-0 ${i < COMPARISONS.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
              >
                <div className="px-5 py-4 bg-white/[0.02] border-r border-white/[0.06] flex items-center gap-2.5">
                  <span className="shrink-0 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[9px] text-white/30">✕</span>
                  <p className="text-white/40 text-sm leading-snug">{row.them}</p>
                </div>
                <div className="px-5 py-4 bg-[#c9a84c]/[0.04] flex items-center gap-2.5">
                  <span className="shrink-0 w-4 h-4 rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-[9px] text-[#c9a84c]">✓</span>
                  <p className="text-white/75 text-sm leading-snug font-medium">{row.us}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b870] transition-all text-sm"
            >
              🥚 Try it free — no card needed →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. HOW CHARACTERS WORK
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              The process
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
              How companions work
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              Not a chatbot. Not a prompt template. A living intelligence that builds a model of you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="relative">
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-6 h-px bg-white/10 z-0" style={{ width: 'calc(100% - 3.5rem)', left: '3.5rem' }} />
                )}
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-[0.2em] text-[#c9a84c]/60 uppercase block mb-1">{step.step}</span>
                    <h3 className="font-black text-white text-base mb-2">{step.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. FAQ
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-3">
              Questions
            </span>
            <h2 className="text-4xl font-black tracking-tight">Everything you need to know</h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-all"
                style={openFaq === i ? { borderColor: 'rgba(201,168,76,0.35)' } : {}}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-sm sm:text-base text-white leading-snug">{item.q}</span>
                  <span
                    className="shrink-0 text-lg transition-transform duration-200 text-[#c9a84c]"
                    style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-white/55 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 bg-[#0d0c18] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/6 blur-[140px]" />
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <div className="text-7xl mb-6 select-none">🥚</div>
          <h2 className="text-4xl sm:text-5xl font-black leading-[0.95] mb-4 tracking-tight">
            Which companion is{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #c9a84c 0%, #e8c96e 100%)' }}
            >
              yours?
            </span>
          </h2>
          <p className="text-lg text-white/50 mb-10 leading-relaxed">
            Free to start. Name them. Begin the birth ceremony. Your companion is waiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b870] transition-all shadow-xl text-base"
            >
              🥚 Hatch free — 3 minutes
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
            <button
              onClick={() => setQuizOpen(true)}
              className="px-9 py-4 rounded-full font-semibold text-white/60 hover:text-white border border-white/15 hover:border-[#c9a84c]/40 transition-all text-sm"
            >
              ✦ Take the quiz first
            </button>
          </div>
          <p className="mt-6 text-xs text-white/20 font-mono">
            No credit card required · Your AI, your data · Switch any time
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
