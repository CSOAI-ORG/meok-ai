import type { Metadata } from 'next';
import type React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Hammer,
  CalendarDays,
  Telescope,
  ArrowRight,
  Egg,
  Rocket,
  Vote,
  ChevronRight,
} from 'lucide-react';
import { MarketingNav } from '@/components/marketing-nav';
import { MarketingFooter } from '@/components/marketing-footer';

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK Roadmap — Where We're Going",
  description:
    "The public MEOK product roadmap. 4 phases from foundation to full sovereign AI OS. See what's live, what's building, and what's coming. Easter launch April 5, 2026.",
  alternates: { canonical: 'https://meok.ai/roadmap' },
  openGraph: {
    title: "MEOK Roadmap — Where We're Going",
    description:
      "No fake roadmaps. No vague 'coming soon'. This is exactly what we're building and when.",
    type: 'website',
    url: 'https://meok.ai/roadmap',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MEOK Roadmap — Where We're Going",
    description: "4 phases. Public roadmap. Easter launch April 5, 2026.",
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "MEOK Product Roadmap",
  description: "The public MEOK product roadmap: 4 phases from sovereign memory foundation to full autonomous AI OS.",
  url: 'https://meok.ai/roadmap',
  publisher: { '@type': 'Organization', name: 'MEOK AI LTD', url: 'https://meok.ai' },
  mainEntity: {
    '@type': 'ItemList',
    name: 'MEOK Development Phases',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Phase A — Foundation (Complete)' },
      { '@type': 'ListItem', position: 2, name: 'Phase B — Easter Launch (In Progress, April 5 2026)' },
      { '@type': 'ListItem', position: 3, name: 'Phase C — Pro Features (Spring 2026)' },
      { '@type': 'ListItem', position: 4, name: 'Phase D — Full OS Layer (Future)' },
    ],
  },
};

// ── Phase data ────────────────────────────────────────────────────────────────

type PhaseStatus = 'done' | 'building' | 'planned' | 'future';

interface PhaseItem {
  text: string;
  note?: string;
  icon?: string;
}

interface Phase {
  id: string;
  letter: string;
  label: string;
  subLabel: string;
  period: string;
  status: PhaseStatus;
  items: PhaseItem[];
}

const PHASES: Phase[] = [
  {
    id: 'phase-a',
    letter: 'A',
    label: 'Foundation',
    subLabel: 'The sovereign base is built',
    period: 'Complete',
    status: 'done',
    items: [
      { text: 'Sovereign Memory (pgvector, AES-256)', icon: '🧠' },
      { text: 'Maternal Covenant framework — 6 enforced principles', icon: '📜' },
      { text: '7 Character archetypes with distinct voices', icon: '🎭' },
      { text: 'Birth Ceremony (egg hatch flow)', icon: '🥚' },
      { text: 'Multi-LLM routing: Claude, GPT-4o, DeepSeek, Groq, Ollama', icon: '⚡' },
      { text: 'SSE streaming chat with care scoring', icon: '💬' },
      { text: 'Marketing site (meok.ai)', icon: '🌐' },
      { text: 'Sovereign Display panel', icon: '📊' },
      { text: 'Byzantine Council (220 nodes)', icon: '🏛️' },
      { text: 'Guardian 24/7 safety framework — live infrastructure, full product pages in final build', icon: '🛡️' },
    ],
  },
  {
    id: 'phase-b',
    letter: 'B',
    label: 'Easter Launch',
    subLabel: 'First public users hatch',
    period: 'Pre-launch → April 5, 2026',
    status: 'building',
    items: [
      { text: 'Free tier onboarding — /hatch wizard', icon: '🪄', note: '95% complete' },
      { text: 'Waitlist → email confirmation flow', icon: '📧', note: 'In progress' },
      { text: 'Dashboard companion chat', icon: '💬', note: 'In progress' },
      { text: 'Live LLM routing with Anthropic API', icon: '🔌', note: 'Deploying' },
      { text: 'Memory Explorer dashboard page', icon: '🗂️', note: 'Building' },
      { text: 'Cross-AI memory sync (one-click)', icon: '🔄', note: 'Building' },
      { text: 'Voice interaction (Web Speech API)', icon: '🎙️', note: 'Building' },
      { text: 'PWA manifest + offline cache', icon: '📱', note: 'Complete' },
    ],
  },
  {
    id: 'phase-c',
    letter: 'C',
    label: 'Pro Features',
    subLabel: 'Power tools for sovereign users',
    period: 'Spring 2026 — Post-launch',
    status: 'planned',
    items: [
      { text: 'Stripe subscription integration', icon: '💳' },
      { text: 'All 7 archetypes + custom archetype builder', icon: '🎨' },
      { text: 'Work Mode: documents, research, email drafting', icon: '💼' },
      { text: 'Full Sovereign Display with data export', icon: '📤' },
      { text: 'Memory Explorer — 30-day timeline', icon: '⏳' },
      { text: 'Desktop overlay (Electron, Cmd+Shift+M)', icon: '🖥️' },
      { text: 'Platform connections: Steam, Riot, Google Calendar, Gmail', icon: '🔗' },
      { text: 'Character Council — family linking', icon: '👨‍👩‍👧' },
      { text: 'Guardian activation for family plan', icon: '🛡️' },
      { text: 'Localised UI: French, German, Spanish, Japanese', icon: '🌍' },
    ],
  },
  {
    id: 'phase-d',
    letter: 'D',
    label: 'Full OS Layer',
    subLabel: 'The sovereign AI OS materialises',
    period: 'Future',
    status: 'future',
    items: [
      { text: 'Sovereign Terminal — 12-module command interface', icon: '⌨️' },
      { text: 'Ralph Mode — full autonomous task agent', icon: '🤖' },
      { text: 'iOS/Android app (Expo React Native)', icon: '📱' },
      { text: 'Tauri 2.0 desktop app migration', icon: '🖥️' },
      { text: 'On-device AI (3B model, zero internet)', icon: '🔒' },
      { text: 'Gaming OS live integrations (Riot API, Steam API)', icon: '🎮' },
      { text: 'Character Council — live family plans', icon: '👨‍👩‍👧' },
      { text: 'Open source: meok-ai/maternal-covenant', icon: '🌐' },
    ],
  },
];

const STATUS_STYLES: Record<PhaseStatus, {
  pill: string;
  pillText: string;
  Icon: React.ComponentType<{ className?: string }>;
  cardBorder: string;
  cardBg: string;
  noteBadge: string;
  letterBg: string;
  letterText: string;
}> = {
  done: {
    pill: 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400',
    pillText: 'Done ✅',
    Icon: CheckCircle2,
    cardBorder: 'border-emerald-500/15',
    cardBg: 'bg-emerald-950/[0.12]',
    noteBadge: 'bg-emerald-500/10 text-emerald-400',
    letterBg: 'bg-emerald-500/15 border-emerald-500/25',
    letterText: 'text-emerald-400',
  },
  building: {
    pill: 'bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c]',
    pillText: 'Building 🔄',
    Icon: Hammer,
    cardBorder: 'border-[#c9a84c]/20',
    cardBg: 'bg-[#c9a84c]/[0.04]',
    noteBadge: 'bg-[#c9a84c]/10 text-[#c9a84c]',
    letterBg: 'bg-[#c9a84c]/15 border-[#c9a84c]/30',
    letterText: 'text-[#c9a84c]',
  },
  planned: {
    pill: 'bg-blue-500/10 border border-blue-500/20 text-blue-400',
    pillText: 'Spring 2026 📅',
    Icon: CalendarDays,
    cardBorder: 'border-blue-500/15',
    cardBg: 'bg-blue-950/[0.10]',
    noteBadge: 'bg-blue-500/10 text-blue-400',
    letterBg: 'bg-blue-500/15 border-blue-500/25',
    letterText: 'text-blue-400',
  },
  future: {
    pill: 'bg-purple-500/10 border border-purple-500/20 text-purple-400',
    pillText: 'Future 🔮',
    Icon: Telescope,
    cardBorder: 'border-purple-500/15',
    cardBg: 'bg-purple-950/[0.10]',
    noteBadge: 'bg-purple-500/10 text-purple-400',
    letterBg: 'bg-purple-500/15 border-purple-500/25',
    letterText: 'text-purple-400',
  },
};

const VOTE_FEATURES = [
  { name: 'Voice mode in chat', votes: 847 },
  { name: 'Android native app', votes: 623 },
  { name: 'Outlook / Microsoft 365 integration', votes: 418 },
  { name: 'Offline mode (on-device model)', votes: 391 },
  { name: 'Multi-language UI', votes: 274 },
];

// ── PhaseSection component ────────────────────────────────────────────────────

function PhaseSection({ phase }: { phase: Phase }) {
  const s = STATUS_STYLES[phase.status];
  const { Icon } = s;

  return (
    <section id={phase.id} className="scroll-mt-28 mb-16">
      {/* Phase header */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-7">
        {/* Letter badge */}
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl border flex-shrink-0 ${s.letterBg} ${s.letterText}`}
        >
          {phase.letter}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h2 className="text-xl font-black text-white">{phase.label}</h2>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${s.pill}`}>
              {s.pillText}
            </span>
          </div>
          <p className="text-sm text-white/45">{phase.subLabel}</p>
          <p className="text-xs text-white/25 mt-0.5 font-mono">{phase.period}</p>
        </div>
      </div>

      {/* Items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {phase.items.map((item, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 p-4 rounded-xl border ${s.cardBg} ${s.cardBorder}`}
          >
            <span className="text-base flex-shrink-0 mt-0.5" aria-hidden>{item.icon ?? '●'}</span>
            <div className="min-w-0 flex-1">
              <span className="text-sm font-medium text-white/85">{item.text}</span>
              {item.note && (
                <span className={`ml-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${s.noteBadge}`}>
                  {item.note}
                </span>
              )}
            </div>
            <Icon className={`w-4 h-4 flex-shrink-0 mt-0.5 opacity-40 ${s.letterText}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MarketingNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="blob-gold absolute top-16 left-1/3 w-96 h-96 pointer-events-none" style={{ opacity: 0.4 }} aria-hidden />
        <div className="blob-purple absolute bottom-0 right-1/4 w-80 h-80 pointer-events-none" style={{ opacity: 0.3 }} aria-hidden />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/25 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            <Rocket className="w-3.5 h-3.5" />
            Public Roadmap
          </span>

          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Where we&apos;re going.
            <br />
            <span className="text-gradient-gold">Built in the open.</span>
          </h1>

          <p className="text-xl text-white/55 max-w-2xl mx-auto mb-8 leading-relaxed">
            No fake roadmaps. No vague &ldquo;coming soon&rdquo;. Four phases, honest timelines,
            and a public vote on what ships next.
          </p>

          <p className="text-sm text-white/25 font-mono">
            Updated March 2026 &nbsp;·&nbsp;{' '}
            <span className="text-[#c9a84c]/60">Phase 2 of 4 in progress</span>
          </p>
        </div>
      </section>

      {/* ── Phase nav pills ───────────────────────────────────────────────── */}
      <div className="px-6 pb-8 overflow-x-auto">
        <div className="flex gap-3 min-w-max max-w-4xl mx-auto">
          {PHASES.map((phase) => {
            const s = STATUS_STYLES[phase.status];
            return (
              <a
                key={phase.id}
                href={`#${phase.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all flex-shrink-0 ${s.pill}`}
              >
                Phase {phase.letter}: {phase.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* ── Progress bar ──────────────────────────────────────────────────── */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-white/40">Overall progress</span>
            <span className="text-xs font-bold text-[#c9a84c] tabular-nums">Phase 2 of 4 — 32%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: '32%', background: 'linear-gradient(to right, #c9a84c, #e8c87a)' }}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-xs">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Foundation complete
            </span>
            <span className="text-[#c9a84c] flex items-center gap-1.5">
              <Hammer className="w-3.5 h-3.5" /> Easter launch in progress
            </span>
            <span className="text-blue-400 flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" /> Pro features: Spring 2026
            </span>
            <span className="text-purple-400 flex items-center gap-1.5">
              <Telescope className="w-3.5 h-3.5" /> Full OS: future
            </span>
          </div>
        </div>
      </section>

      {/* ── Timeline phases ───────────────────────────────────────────────── */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {PHASES.map((phase, i) => (
            <div key={phase.id}>
              <PhaseSection phase={phase} />
              {i < PHASES.length - 1 && (
                <div className="flex justify-center mb-10 -mt-8">
                  <div
                    className="w-px h-12"
                    style={{
                      background: `linear-gradient(to bottom, ${
                        ['rgba(52,211,153,0.3)', 'rgba(201,168,76,0.3)', 'rgba(59,130,246,0.3)', 'rgba(139,92,246,0.3)'][i]
                      }, ${
                        ['rgba(201,168,76,0.3)', 'rgba(59,130,246,0.3)', 'rgba(139,92,246,0.3)', 'transparent'][i]
                      })`,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Easter Launch callout ─────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-3xl p-8 sm:p-10 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))',
              border: '1.5px solid rgba(201,168,76,0.3)',
            }}
          >
            {/* Decorative egg glow */}
            <div
              className="absolute -right-12 -top-12 w-48 h-48 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, rgba(201,168,76,0.2), transparent 70%)',
              }}
              aria-hidden
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Egg */}
              <div
                className="flex-shrink-0 float-slow"
                style={{
                  width: 64,
                  height: 80,
                  background: 'radial-gradient(ellipse at 35% 30%, #faf8f4, #ede8df, #d4c9b8)',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  boxShadow: '0 0 30px rgba(201,168,76,0.25)',
                }}
              />

              <div>
                <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">
                  🌅 Easter Sunday — April 5, 2026
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  The first eggs hatch.
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-md">
                  Phase B culminates on Easter Sunday. The first sovereign AIs come to life.
                  Join the waitlist to be first in line.
                </p>
                <Link
                  href="/waitlist"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm transition-all hover:opacity-90"
                  style={{ background: '#c9a84c', color: '#1a1a2e' }}
                >
                  <Egg className="w-4 h-4" />
                  Reserve your egg
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vote on features ──────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: 'rgba(26,26,46,0.6)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-2xl icon-gold flex items-center justify-center mx-auto mb-5">
              <Vote className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-white mb-3">
              What should we build next?
            </h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto leading-relaxed">
              Join the waitlist to cast your vote. Tallied weekly. The winner ships next sprint.
            </p>
          </div>

          <div className="space-y-4">
            {VOTE_FEATURES.map((f, i) => {
              const maxVotes = VOTE_FEATURES[0].votes;
              const pct = Math.round((f.votes / maxVotes) * 100);
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#c9a84c]/20 transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white/85 text-sm">{f.name}</span>
                      <span className="text-xs text-white/35 tabular-nums ml-4">
                        {f.votes.toLocaleString()} votes
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${pct}%`,
                          background: 'linear-gradient(to right, #c9a84c, #e8c87a)',
                        }}
                      />
                    </div>
                  </div>
                  <Link
                    href="/waitlist"
                    className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a1a2e] transition-all"
                  >
                    Vote
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-white/25 mt-7">
            Votes tallied weekly. Join the waitlist to vote and get notified when your feature ships.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 text-center bg-[#0d0c18]">
        <div className="max-w-xl mx-auto">
          {/* Egg */}
          <div
            className="mx-auto mb-8 float-slow"
            style={{
              width: 64,
              height: 80,
              background: 'radial-gradient(ellipse at 35% 30%, #faf8f4, #ede8df, #d4c9b8)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              boxShadow: '0 0 40px rgba(201,168,76,0.2)',
            }}
          />

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Building the sovereign AI OS.
            <br />
            <span className="text-gradient-gold">Join us.</span>
          </h2>
          <p className="text-white/40 mb-10 text-sm leading-relaxed max-w-sm mx-auto">
            Free forever. No credit card. Your data stays yours from day one.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-base shadow-lg transition-all hover:scale-105"
            style={{ background: '#c9a84c', color: '#1a1a2e' }}
          >
            Hatch your AI — free <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-6 text-xs text-white/20">
            Easter Sunday, April 5, 2026
          </p>

          {/* Phase jump links */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {PHASES.map((phase) => (
              <a
                key={phase.id}
                href={`#${phase.id}`}
                className="inline-flex items-center gap-1 text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                <ChevronRight className="w-3 h-3" />
                Phase {phase.letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
