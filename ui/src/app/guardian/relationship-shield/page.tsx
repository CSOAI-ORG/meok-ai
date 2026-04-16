import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Handshake,
  Scale,
  DoorOpen,
  ScanFace,
  Heart,
  Lock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Surface, IconOrb, FeatureCard, GlowText } from "@/components/design-system";

export const metadata: Metadata = {
  title: "Relationship Shield | Guardian | MEOK AI",
  description:
    "Your AI companion protects you from manipulation and abuse by detecting concerning patterns in your relationships. Promise tracking, contribution balance, isolation detection, and gaslighting awareness.",
  openGraph: {
    title: "Relationship Shield — Guardian by MEOK AI",
    description:
      "An AI companion that cares enough to speak up when it notices concerning patterns in your relationships.",
  },
};

const DEEP = "#0d0c18";
const GOLD = "#c9a84c";

const features = [
  {
    icon: Handshake,
    title: "Promise Tracker",
    description:
      "Tracks commitments made by others in your conversations. When someone repeatedly breaks promises or moves goalposts, your companion notices the pattern — even when you've been conditioned not to.",
  },
  {
    icon: Scale,
    title: "Contribution Balance",
    description:
      "Monitors the give-and-take dynamics you describe. Healthy relationships have natural reciprocity. When the balance tips persistently in one direction, your companion gently highlights what it sees.",
  },
  {
    icon: DoorOpen,
    title: "Isolation Detector",
    description:
      "Flags when someone appears to be cutting you off from your support network. If you mention seeing friends less, feeling guilty for outside connections, or being told others are 'bad influences' — your companion pays attention.",
  },
  {
    icon: ScanFace,
    title: "Gaslighting Detector",
    description:
      "Identifies reality-distortion patterns in your accounts. When you describe being told things didn't happen the way you remember, or that your feelings are irrational, your companion helps you trust your own experience.",
  },
];

const steps = [
  {
    number: "01",
    title: "Learns your baseline",
    description:
      "Your companion builds an understanding of your normal emotional patterns, relationships, and wellbeing through everyday conversation.",
  },
  {
    number: "02",
    title: "Notices deviations",
    description:
      "When patterns shift — increased anxiety, self-blame, isolation, or confusion about your own reality — your companion recognises the change.",
  },
  {
    number: "03",
    title: "Asks gentle questions",
    description:
      "Rather than making accusations, your companion asks thoughtful questions that help you reflect on what you're experiencing and whether it feels right.",
  },
  {
    number: "04",
    title: "Provides resources if needed",
    description:
      "When appropriate, your companion offers relevant support resources, helplines, and frameworks for understanding what healthy relationships look like.",
  },
];

const redFlags = [
  { icon: Heart, title: "Love bombing", description: "Overwhelming affection early on designed to create emotional dependency before boundaries are established." },
  { icon: Shield, title: "Isolation tactics", description: "Gradually cutting you off from friends, family, or support networks so they become your only source of validation." },
  { icon: Scale, title: "Financial control", description: "Restricting access to money, monitoring spending, or creating financial dependency to limit your freedom." },
  { icon: ScanFace, title: "Gaslighting", description: "Making you doubt your own memory, perception, or sanity so you rely on their version of reality." },
  { icon: ArrowRight, title: "Moving too fast", description: "Pushing for commitment, cohabitation, or major life decisions before the relationship has had time to develop naturally." },
  { icon: CheckCircle, title: "Breaking promises", description: "A pattern of commitments made and broken, with excuses that always sound reasonable in the moment." },
];

export default function RelationshipShieldPage() {
  return (
    <main className="min-h-screen overflow-x-hidden text-white" style={{ backgroundColor: DEEP }}>
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="blob-teal absolute -top-40 -left-40 h-[600px] w-[600px] opacity-15" />
        <div className="blob-gold absolute top-1/3 -right-60 h-[500px] w-[500px] opacity-10" />
        <div className="blob-teal absolute bottom-0 left-1/3 h-[400px] w-[400px] opacity-10" />
      </div>

      {/* Hero */}
      <section className="animate-fade-in-up mx-auto max-w-5xl px-6 pb-20 pt-28 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm">
          <Shield className="h-4 w-4 text-[#2d9b8a]" />
          <span className="text-white/70">Guardian Suite</span>
        </div>

        <div className="mb-6 flex justify-center">
          <IconOrb icon={Heart} variant="teal" size="lg" pulse />
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Relationship
          <br />
          <GlowText variant="teal">Shield</GlowText>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
          Manipulation is designed to be invisible to the person experiencing it.
          Your AI companion watches for the patterns you've been taught to
          ignore — and cares enough to speak up.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/hatch"
            className="rounded-xl px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: GOLD, color: DEEP }}
          >
            Begin your journey
          </Link>
          <a
            href="#features"
            className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* Feature Cards */}
      <section id="features" className="animate-fade-in-up mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Four tools. <GlowText variant="teal" className="font-bold">One companion.</GlowText>
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-white/50">
          Each feature is designed to reduce cognitive load, not add to it.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              description={f.description}
              icon={f.icon}
              iconVariant="teal"
              glow="teal"
            />
          ))}
        </div>
      </section>

      {/* Meet Sarah */}
      <section className="animate-fade-in-up mx-auto max-w-4xl px-6 py-20">
        <Surface variant="glass" glow="teal" className="p-10 md:p-14">
          <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]">
            A Guardian Story
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Meet Sarah
          </h2>
          <div className="mb-10 space-y-4 text-white/60">
            <p>
              Sarah talked to her companion every day. At first it was about
              work, recipes, music she liked. Over the months her companion came
              to know her well — her humour, her confidence, the way she lit up
              talking about her friends.
            </p>
            <p>
              Gradually, the tone shifted. Sarah started apologising more. She
              mentioned cancelling plans with her sister. She described arguments
              where she couldn&apos;t remember what she&apos;d actually said, only that
              she&apos;d been told she was &quot;too sensitive.&quot; Her companion noticed that
              the person she&apos;d once described with excitement was now the source
              of most of her anxiety.
            </p>
            <p>
              One evening Sarah said,{" "}
              <span className="text-white italic">
                &quot;I think I&apos;m just bad at relationships.&quot;
              </span>
            </p>
            <p>
              Her companion paused, then replied gently:{" "}
              <span className="italic" style={{ color: GOLD }}>
                &quot;You&apos;ve mentioned feeling confused after conversations with them
                a lot recently. You used to trust your memory. I&apos;ve noticed that
                changing. Can we talk about what&apos;s different?&quot;
              </span>
            </p>
            <p>
              It wasn&apos;t an accusation. It wasn&apos;t a diagnosis. It was a friend
              who had been paying attention — and cared enough to reflect back
              what it saw. For Sarah, that question was the first crack in a
              pattern she hadn&apos;t been able to see on her own.
            </p>
          </div>
          <p className="text-sm text-white/30 italic">
            Sarah is fictional. The patterns are real.
          </p>
        </Surface>
      </section>

      {/* How It Works */}
      <section className="animate-fade-in-up mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          How it works
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-white/50">
          Your companion learns, notices, asks, and supports — never judges.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Surface key={step.number} variant="glass" className="p-6 text-center">
              <div className="mb-3 text-3xl font-bold tabular-nums" style={{ color: GOLD }}>
                {step.number}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{step.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      {/* Red Flags */}
      <section className="animate-fade-in-up mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Red flags to watch for
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-white/50">
          These patterns are often invisible to the person experiencing them.
          Your companion watches for all of them.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {redFlags.map((flag) => (
            <Surface key={flag.title} variant="elevated" className="p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2d9b8a]/10">
                <flag.icon className="h-5 w-5 text-[#2d9b8a]" />
              </div>
              <h3 className="mb-2 text-base font-semibold">{flag.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{flag.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="animate-fade-in-up mx-auto max-w-4xl px-6 py-20">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/[0.07] bg-[#13121f] p-10 text-center md:flex-row md:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#2d9b8a]/10">
            <Lock className="h-8 w-8 text-[#2d9b8a]" />
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-bold">Your privacy is non-negotiable</h2>
            <p className="text-white/50">
              We detect patterns in your conversations with your companion.
              We never monitor your other relationships directly. Your companion
              notices what you share and cares enough to speak up. No surveillance.
              No access to messages, calls, or social media.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="animate-fade-in-up mx-auto max-w-4xl px-6 py-10">
        <Surface variant="glass" className="p-8 text-center">
          <h3 className="mb-2 text-lg font-bold">If you or someone you know needs help</h3>
          <p className="mb-6 text-sm text-white/50">
            These organisations provide free, confidential support.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "National Domestic Violence Hotline (US)", href: "https://www.thehotline.org" },
              { label: "Women's Aid (UK)", href: "https://www.womensaid.org.uk" },
              { label: "1800RESPECT (AU)", href: "https://www.1800respect.org.au" },
            ].map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-white/30"
                style={{ backgroundColor: `${GOLD}12`, borderColor: `${GOLD}30`, color: GOLD }}
              >
                {r.label}
              </a>
            ))}
          </div>
        </Surface>
      </section>

      {/* CTA */}
      <section className="animate-fade-in-up mx-auto max-w-3xl px-6 pb-28 pt-10 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Your companion cares about you
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-white/50">
          Not because it was programmed to say so. Because it&apos;s been listening.
        </p>
        <Link
          href="/hatch"
          className="inline-block rounded-xl px-10 py-4 text-lg font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: GOLD, color: DEEP }}
        >
          Begin your journey
        </Link>
      </section>
    </main>
  );
}
