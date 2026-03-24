import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  ArrowRight,
  MessageSquare,
  Settings,
  ShieldCheck,
  Eye,
  Mail,
  HelpCircle,
  Sun,
} from "lucide-react";

// ─── METADATA ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Social Guardian: Neurodivergent AI Support | MEOK",
  description:
    "AI support designed for autistic, ADHD, and neurodivergent people who process social situations differently. Literal language mode, subtext explanation, comfort settings, and school-safe mode.",
  alternates: { canonical: "https://meok.ai/guardian/social" },
  openGraph: {
    title: "Social Guardian: Neurodivergent AI Support | MEOK",
    description:
      "AI support designed for autistic, ADHD, and neurodivergent people who process social situations differently.",
    type: "website",
    url: "https://meok.ai/guardian/social",
    siteName: "MEOK.AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Guardian: Neurodivergent AI Support | MEOK",
    description:
      "AI support designed for autistic, ADHD, and neurodivergent people who process social situations differently.",
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────

const USE_CASES = [
  {
    icon: MessageSquare,
    color: "#c9a84c",
    title: '"How do I respond to this message?"',
    description:
      "MEOK explains the subtext of what was said, why the other person may have said it, and suggests reply options in clear, direct language — no guessing required.",
  },
  {
    icon: Eye,
    color: "#60a5fa",
    title: '"What does this behaviour mean?"',
    description:
      "Pattern explanation without judgment. MEOK describes what the behaviour typically signals in neurotypical social contexts — stated plainly, never condescendingly.",
  },
  {
    icon: Mail,
    color: "#4ade80",
    title: '"Help me write this email"',
    description:
      "Tone calibration and appropriate formality detection. MEOK checks that your message reads the way you intend — and flags anything that might land differently than expected.",
  },
  {
    icon: HelpCircle,
    color: "#a78bfa",
    title: '"Am I reading this situation right?"',
    description:
      "Validation plus perspective. MEOK confirms what you observed, offers alternative interpretations if relevant, and never makes you feel wrong for asking.",
  },
];

const COMFORT_SETTINGS = [
  { label: "Reduced motion", desc: "All animations disabled site-wide" },
  { label: "Adjustable font size", desc: "12px to 24px in 2px increments" },
  { label: "High contrast mode", desc: "WCAG AAA compliant colour contrast" },
  { label: "Low-stimulation theme", desc: "Minimal colour, muted palette" },
  { label: "Layout density", desc: "Compact, comfortable, or spacious" },
  { label: "Response pacing", desc: "Control how quickly MEOK replies" },
  { label: "Senior Mode", desc: "Larger text, simplified navigation, slower pacing" },
  { label: "Colour scheme", desc: "8 accessible themes including dark, warm, and cool" },
];

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function SocialGuardianPage() {
  return (
    <div
      className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[600px] h-[500px] top-[-10%] left-[-10%]" />
          <div
            className="blob-blue w-[400px] h-[400px] bottom-[5%] right-[-5%]"
            style={{ opacity: 0.5, animationDelay: "3s" }}
          />
        </div>

        {/* Badge */}
        <div className="relative mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">
          <Brain size={12} />
          Guardian · Social Guardian
        </div>

        {/* H1 */}
        <h1
          className="relative text-[3rem] sm:text-6xl lg:text-7xl font-black text-center leading-[1.02] tracking-tight max-w-4xl mb-6 text-white"
          style={{ fontWeight: 900 }}
        >
          Navigate the Social World{" "}
          <span className="text-gradient-gold">With Confidence</span>
        </h1>

        {/* Subtitle */}
        <p className="relative text-lg sm:text-xl text-white/60 text-center max-w-2xl leading-relaxed mb-10">
          AI support designed for autistic, ADHD, and neurodivergent people who
          process social situations differently.
        </p>

        {/* CTAs */}
        <div className="relative flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/birth"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.45)] text-base"
          >
            Find Your Companion
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <p className="relative mt-5 text-xs text-white/25 font-mono">
          Built for neurodivergent users · Children&apos;s Code compliant ·
          School-safe
        </p>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 2. THE GAP ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              The gap in AI design
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              The Gap
            </h2>
          </div>

          <div
            className="rounded-2xl p-8 mb-8"
            style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <p className="text-base text-white/70 leading-relaxed mb-4">
              Neurotypical AI assistants assume sarcasm is obvious, idioms are
              clear, and social norms are universal. They are built by and for
              people who absorbed unwritten social rules without being taught
              them.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              For the{" "}
              <span className="text-[#c9a84c] font-bold">9.5 million neurodivergent people</span>{" "}
              in the UK — including autistic people, those with ADHD, dyslexia,
              dyspraxia, and sensory processing differences — this is not true.
              The social world runs on unwritten scripts nobody ever teaches.
              MEOK Social Guardian is built to close that gap.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                problem: "Sarcasm assumed obvious",
                solution: "MEOK identifies sarcasm and translates it explicitly",
                color: "#f87171",
              },
              {
                problem: "Idioms left unexplained",
                solution:
                  '"That\'s not rocket science" → "That\'s straightforward"',
                color: "#fbbf24",
              },
              {
                problem: "Social norms assumed universal",
                solution:
                  "MEOK explains the rule, its context, and why it exists",
                color: "#4ade80",
              },
            ].map((item) => (
              <div
                key={item.problem}
                className="premium-card rounded-2xl p-6 flex flex-col gap-3"
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: item.color }}
                >
                  Problem
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  {item.problem}
                </p>
                <div
                  className="w-full h-px"
                  style={{ background: `${item.color}25` }}
                />
                <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
                  MEOK
                </p>
                <p className="text-sm text-white/70 leading-relaxed font-mono">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 3. LITERAL LANGUAGE MODE ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              Core feature
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              Literal Language Mode
            </h2>
          </div>

          <div className="premium-card rounded-2xl p-8 mb-8">
            <p className="text-base text-white/65 leading-relaxed mb-6">
              When Literal Mode is enabled, MEOK strips figurative language from
              all communication. No idioms. No sarcasm. Direct, clear
              communication — always.
            </p>
            <ul className="space-y-3">
              {[
                {
                  before: '"That\'s not rocket science"',
                  after: '"That\'s straightforward"',
                },
                {
                  before: '"Break a leg"',
                  after: '"Good luck"',
                },
                {
                  before: '"Can you give me a hand?"',
                  after: '"Can you help me?"',
                },
                {
                  before: '"It\'s raining cats and dogs"',
                  after: '"It\'s raining very heavily"',
                },
              ].map((pair) => (
                <li
                  key={pair.before}
                  className="flex items-center gap-4 text-sm"
                >
                  <span className="text-white/35 font-mono flex-1">
                    {pair.before}
                  </span>
                  <span className="text-[#c9a84c] font-bold">→</span>
                  <span className="text-white/70 font-mono flex-1">
                    {pair.after}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-white/40 text-center leading-relaxed">
            Sarcasm is identified and flagged. Ambiguous phrasing is clarified
            before it reaches you. MEOK never assumes you already know what
            something &quot;really means&quot;.
          </p>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 4. SOCIAL SITUATION SUPPORT ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              Use cases
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              Social Situation Support
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {USE_CASES.map((uc) => {
              const Icon = uc.icon;
              return (
                <div
                  key={uc.title}
                  className="premium-card rounded-2xl p-7 hover:border-white/15 transition-all"
                  style={{ borderLeft: `3px solid ${uc.color}50` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${uc.color}15`,
                        border: `1px solid ${uc.color}30`,
                      }}
                    >
                      <Icon size={16} style={{ color: uc.color }} />
                    </div>
                    <h3
                      className="text-sm font-black font-mono"
                      style={{ color: uc.color }}
                    >
                      {uc.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {uc.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 5. COMFORT SETTINGS ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              Sensory & cognitive preferences
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              Comfort Settings
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              MEOK adapts to your preferences — not the other way around.
              Everything is adjustable, everything is persistent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {COMFORT_SETTINGS.map((setting) => (
              <div
                key={setting.label}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <Settings size={14} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white/85">
                    {setting.label}
                  </p>
                  <p className="text-xs text-white/40 mt-0.5">{setting.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Senior Mode callout */}
          <div
            className="rounded-2xl p-6 flex items-start gap-4"
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <Sun size={18} color="#c9a84c" className="flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-black text-[#c9a84c] mb-1">
                Senior Mode
              </p>
              <p className="text-sm text-white/55 leading-relaxed">
                Senior Mode enlarges all text, simplifies navigation to a single
                column, slows MEOK&apos;s response pacing, and disables all
                animations. Designed for older users or anyone who benefits from
                a calmer, less visually busy interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 6. GUARDIAN MODE FOR PARENTS ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              For families
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              Guardian Mode for Parents
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="premium-card rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={20} color="#4ade80" />
                <span className="text-[#4ade80] font-black text-sm uppercase tracking-widest">
                  Enhanced Protection
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Parents of neurodivergent children can activate enhanced
                protection. Predator detection alerts, contact risk scoring, and
                pattern monitoring run continuously — surfaced to parents in a
                calm, non-alarming dashboard format.
              </p>
            </div>

            <div className="premium-card rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <Brain size={20} color="#a78bfa" />
                <span className="text-[#a78bfa] font-black text-sm uppercase tracking-widest">
                  School-Safe Mode
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                School-Safe Mode activates strict content controls and removes
                all adult content. All social navigation features remain active,
                explained in language appropriate for younger users. This is an
                architectural boundary — not a setting that can be toggled by
                conversation.
              </p>
            </div>
          </div>

          <div
            className="rounded-2xl p-5 text-sm text-white/50 leading-relaxed text-center"
            style={{
              background: "rgba(167,139,250,0.06)",
              border: "1px solid rgba(167,139,250,0.2)",
            }}
          >
            <span className="text-[#a78bfa] font-bold">
              Children&apos;s Code compliant.{" "}
            </span>
            Built in full compliance with the UK Age Appropriate Design Code.
            Data minimisation, privacy by default, and best-interests assessments
            are built into every product decision.
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 7. CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="blob-gold w-[600px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: 0.55 }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 float-slow"
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.35)",
            }}
          >
            <Brain size={30} color="#c9a84c" strokeWidth={1.5} />
          </div>

          <h2
            className="text-4xl sm:text-5xl font-black leading-[0.95] mb-4 text-white"
            style={{ fontWeight: 900 }}
          >
            The social world makes more sense{" "}
            <span className="text-gradient-gold">
              with an AI that speaks your language.
            </span>
          </h2>

          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Literal Mode. Social situation support. Comfort settings. Guardian
            Mode for parents. MEOK Social Guardian was built for the way you
            actually think.
          </p>

          <Link
            href="/birth"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all text-sm hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
          >
            Find Your Companion
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <p className="mt-6 text-xs text-white/20 font-mono">
            Children&apos;s Code compliant · School-safe · No adult content
          </p>
        </div>
      </section>

    </div>
  );
}
