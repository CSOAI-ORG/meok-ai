import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Zap,
  BookOpen,
  Brain,
  Activity,
  Shield,
  Lock,
  Briefcase,
  Heart,
  Home,
  Users,
  Phone,
} from "lucide-react";

// ── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Social Guardian — AI Social Coaching for Neurodivergent Minds | MEOK AI LABS",
  description:
    "Navigate social situations with confidence. Meeting prep, real-time coaching, emotional translation, and sensory load management. Built for ADHD, autism, and social anxiety. Your AI companion by your side.",
  alternates: { canonical: "https://meok.ai/guardian/social-guardian" },
  openGraph: {
    title: "Social Guardian — AI Social Coaching | MEOK AI LABS",
    description:
      "Navigate social situations with confidence. Meeting prep, real-time coaching, emotional translation. Built for neurodivergent minds.",
    url: "https://meok.ai/guardian/social-guardian",
    type: "website",
  },
};

// ── Feature cards ─────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Meeting Prep",
    description:
      "Practice conversations before they happen. Run through scenarios, rehearse openers, and build a game plan so you walk in ready — not spiralling.",
    tag: "Preparation",
  },
  {
    icon: Zap,
    title: "Real-Time Coaching",
    description:
      "In-the-moment guidance delivered via text. Discreet prompts when the conversation stalls, when you need to redirect, or when you just need someone in your corner.",
    tag: "Live support",
  },
  {
    icon: Brain,
    title: "Emotional Translation",
    description:
      "Understand what people really mean. Social Guardian decodes subtext, tone shifts, and unspoken expectations — the stuff that neurotypical people take for granted.",
    tag: "Understanding",
  },
  {
    icon: BookOpen,
    title: "Scripts Library",
    description:
      "Pre-built responses for common situations. Small talk templates, boundary-setting phrases, polite exits, and disagreement scripts you can customise and own.",
    tag: "Ready-made",
  },
  {
    icon: Activity,
    title: "Sensory Load Manager",
    description:
      "Track and manage sensory overwhelm in real time. Log your load, get exit cues before you crash, and build a personal sensory profile that learns what drains you.",
    tag: "Self-care",
  },
];

// ── Use cases ─────────────────────────────────────────────────────────────

const USE_CASES = [
  { icon: Briefcase, label: "Job interviews", detail: "Prep answers, practice eye contact cues, manage anxiety" },
  { icon: Heart, label: "First dates", detail: "Conversation starters, reading signals, graceful exits" },
  { icon: Home, label: "Family gatherings", detail: "Navigate tricky relatives, set boundaries, manage energy" },
  { icon: Users, label: "Workplace meetings", detail: "Follow agendas, know when to speak, decode office politics" },
  { icon: Phone, label: "Phone calls", detail: "Scripts for calls you dread, real-time text support while talking" },
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function SocialGuardianPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="blob-gold absolute -top-40 -left-40 h-[600px] w-[600px] opacity-20" />
        <div className="blob-purple absolute top-1/3 -right-60 h-[500px] w-[500px] opacity-15" />
        <div className="blob-gold absolute bottom-0 left-1/3 h-[400px] w-[400px] opacity-10" />
      </div>

      <main className="relative z-10">
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-28 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm">
            <Shield className="h-4 w-4 text-[#c9a84c]" />
            <span className="text-white/70">Guardian &mdash; social protection</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Social
            <br />
            <span className="text-gradient-gold">Guardian</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            Navigate social situations with confidence. Your AI companion
            by your side.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/hatch"
              className="rounded-xl bg-[#c9a84c] px-8 py-4 text-base font-semibold text-[#0d0c18] transition-opacity hover:opacity-90"
            >
              Get your social co-pilot
            </Link>
            <a
              href="#features"
              className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              See how it works
            </a>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────────────── */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Five tools. <span className="text-[#c9a84c]">One companion.</span>
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-white/50">
            Each feature is designed to reduce cognitive load, not add to it.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/[0.07] bg-[#13121f] p-7 transition-colors hover:border-[#c9a84c]/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c9a84c]/10">
                    <f.icon className="h-5 w-5 text-[#c9a84c]" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs text-white/40">
                    {f.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── NEURODIVERGENT-FRIENDLY ──────────────────────────────────── */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-2xl border border-[#c9a84c]/20 bg-[#13121f] p-10 md:p-14">
            <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
              Built for how <span className="text-[#c9a84c]">YOUR</span> brain works
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-center text-lg leading-relaxed text-white/60">
              ADHD. Autism. Social anxiety. These aren&apos;t flaws to fix &mdash;
              they&apos;re operating systems that deserve better tools.
            </p>

            <div className="mx-auto mb-10 max-w-2xl space-y-4 text-white/50">
              <p className="leading-relaxed">
                Social Guardian doesn&apos;t try to make you &ldquo;normal.&rdquo; It
                meets you where you are. If you mask all day and crash at night,
                it helps you conserve energy. If you miss subtext, it fills in the
                gaps. If phone calls make your heart race, it gives you a script
                and stays in your pocket.
              </p>
              <p className="leading-relaxed">
                We talked to hundreds of neurodivergent adults while building this.
                The number one request? &ldquo;Don&apos;t pathologise me. Just help
                me.&rdquo;
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-[#0d0c18] px-8 py-6 text-center">
              <p className="text-lg font-medium italic text-white/70">
                &ldquo;Not a fix. A tool. Like glasses for social vision.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ── USE CASES ────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Where Social Guardian <span className="text-[#c9a84c]">shows up</span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-white/50">
            Real situations. Real support. No judgement.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((uc) => (
              <div
                key={uc.label}
                className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-[#13121f] p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c9a84c]/10">
                  <uc.icon className="h-5 w-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{uc.label}</h3>
                  <p className="text-sm text-white/45">{uc.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRIVACY ──────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/[0.07] bg-[#13121f] p-10 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a84c]/10">
              <Lock className="h-8 w-8 text-[#c9a84c]" />
            </div>
            <div>
              <h2 className="mb-2 text-2xl font-bold">Your conversations. Your business.</h2>
              <p className="text-white/50">
                Coaching stays between you and your companion. Social Guardian
                never shares, sells, or trains on your conversations. End-to-end
                encrypted. No third-party access. What you say stays with you.
              </p>
            </div>
          </div>
        </section>

        {/* ── SCRIPTS LIBRARY PREVIEW ──────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Scripts <span className="text-[#c9a84c]">Library</span> Preview
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-white/50">
            Ready-made scripts you can practise with your companion until they feel natural.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Saying no to a social invitation",
                opening: "\"Thanks so much for thinking of me. I'm going to sit this one out, but I hope you all have a great time.\"",
              },
              {
                title: "Asking for help at work",
                opening: "\"I want to make sure I get this right. Could I get your input on something? It would really help me move forward.\"",
              },
              {
                title: "Setting a boundary with family",
                opening: "\"I love you and I need to be honest. When that happens, it's hard for me. Can we find a way that works for both of us?\"",
              },
              {
                title: "Starting a conversation at an event",
                opening: "\"How do you know the host? I'm still figuring out who everyone is — figured I'd start with the friendliest face.\"",
              },
            ].map((script) => (
              <div
                key={script.title}
                className="group rounded-2xl border border-white/[0.07] bg-[#13121f] p-7 transition-colors hover:border-[#c9a84c]/30"
              >
                <h3 className="mb-3 text-lg font-semibold text-white">{script.title}</h3>
                <p className="mb-5 text-sm italic leading-relaxed text-white/45">
                  {script.opening}
                </p>
                <Link
                  href="/hatch"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a84c] transition-opacity hover:opacity-80"
                >
                  Practice with your companion
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-28 pt-10 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready for a <span className="text-[#c9a84c]">social co-pilot</span>?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-white/50">
            Stop white-knuckling every interaction. Social Guardian gives you
            the backup your brain has been asking for.
          </p>
          <Link
            href="/hatch"
            className="inline-block rounded-xl bg-[#c9a84c] px-10 py-4 text-lg font-semibold text-[#0d0c18] transition-opacity hover:opacity-90"
          >
            Get your social co-pilot
          </Link>
        </section>
      </main>
    </div>
  );
}
