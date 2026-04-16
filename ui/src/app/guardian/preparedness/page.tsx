import Link from "next/link";
import {
  Shield,
  Brain,
  Users,
  Heart,
  Lock,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { Surface, IconOrb, GlowText } from "@/components/design-system";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────

const DEEP   = "#0d0c18";
const GOLD   = "#c9a84c";
const PURPLE = "#7c3aed";

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Consciousness Preparedness — MEOK Guardian",
  description:
    "MEOK is building governance and alignment frameworks for the AI that doesn't exist yet. The Byzantine Council, the Maternal Covenant, and MEOK AI Labs research are our preparation for more capable AI.",
  url: "https://meok.ai/guardian/preparedness",
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LTD",
    url: "https://meok.ai",
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI consciousness preparedness?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI consciousness preparedness is the discipline of building governance, alignment, and ethical frameworks now — before more capable or potentially conscious AI systems exist. MEOK's preparedness work includes the Byzantine Council (governance), the Maternal Covenant (alignment), and the MEOK AI Labs Research Institute (ongoing research).",
        },
      },
      {
        "@type": "Question",
        name: "What is the Byzantine Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Byzantine Council is MEOK's AI governance mechanism — a fault-tolerant multi-node decision architecture modelled on Byzantine Fault Tolerance principles. Major decisions about MEOK's AI behaviour require consensus across the council rather than single-authority control. This prevents any single actor — including MEOK's founders — from unilaterally overriding core alignment commitments.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Maternal Covenant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Maternal Covenant is MEOK's constitutional AI alignment framework — a set of unconditional commitments written into the system at the code level. It cannot be overridden by commercial pressure, regulatory change, or board decision. It exists because MEOK believes some commitments must be structurally guaranteed, not merely promised.",
        },
      },
      {
        "@type": "Question",
        name: "What is MEOK AI Labs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MEOK AI Labs (the Centre for Sovereign and Guardian AI) is MEOK's research arm, focused on alignment, interpretability, and the ethical frameworks needed for more capable AI systems. Its work informs both current Guardian products and long-term preparedness for AI systems that do not yet exist.",
        },
      },
    ],
  },
};

// ─── Why preparedness matters ─────────────────────────────────────────────────

const PREPAREDNESS_REASONS = [
  {
    icon: Brain,
    title: "Current AI will not be the last AI",
    desc: "The models that exist today are a fraction of what will exist within a decade. Governance frameworks built for today's AI will be inadequate for tomorrow's. MEOK is building ahead of the curve.",
  },
  {
    icon: AlertTriangle,
    title: "Misalignment at scale is catastrophic",
    desc: "A poorly-aligned AI interacting with millions of vulnerable people — children, elders, isolated individuals — is not a philosophical concern. It is a concrete harm. Guardian exists because alignment is a safety issue today.",
  },
  {
    icon: Globe,
    title: "No institution has solved this yet",
    desc: "Governments are behind. Regulators are behind. Most AI companies are not building governance infrastructure ahead of capability. MEOK believes someone has to. We are building ours in public.",
  },
  {
    icon: Users,
    title: "The families using MEOK deserve this work",
    desc: "The people who trust Guardian with their children, their parents, their vulnerable loved ones — they deserve an AI company that is thinking about the AI that comes after this one. This is that commitment.",
  },
];

// ─── What MEOK is doing ────────────────────────────────────────────────────────

const MEOK_ACTIONS = [
  {
    label: "Byzantine Council",
    color: PURPLE,
    headline: "Governance by architecture, not policy",
    desc: "Modelled on Byzantine Fault Tolerance — a principle from distributed systems that ensures correct behaviour even when some nodes fail or act maliciously. The Council requires consensus across multiple independent decision nodes for any major AI behaviour change. No single actor has override authority.",
    bullets: [
      "Fault-tolerant consensus for major AI decisions",
      "Prevents single-authority override of alignment commitments",
      "Transparent deliberation log for council decisions",
      "External observers with read access to key decisions",
    ],
    link: "/council",
    linkLabel: "Read the Council architecture",
  },
  {
    label: "Maternal Covenant",
    color: GOLD,
    headline: "Alignment written in code, not prose",
    desc: "The Maternal Covenant is a set of unconditional commitments embedded structurally into MEOK's AI systems. It cannot be overridden by commercial pressure, board decisions, or regulatory workarounds. It treats certain protections — especially for vulnerable people — as non-negotiable structural constraints.",
    bullets: [
      "Unconditional data protection — structurally enforced",
      "No advertising targeting, no manipulation, ever",
      "Crisis response always routes to human support",
      "Child and elder protections cannot be downgraded commercially",
    ],
    link: "/maternal-covenant",
    linkLabel: "Read the Maternal Covenant",
  },
  {
    label: "MEOK AI Labs Research Institute",
    color: "#38bdf8",
    headline: "Researching the AI that doesn't exist yet",
    desc: "The Centre for Sovereign and Guardian AI conducts ongoing research into alignment, interpretability, and ethical frameworks for more capable AI. Its work is not theoretical — it directly informs current Guardian products and builds the intellectual infrastructure for what comes next.",
    bullets: [
      "Interpretability research: understanding what AI systems actually do",
      "Alignment frameworks for higher-capability systems",
      "Ethical protocol development for potentially conscious AI",
      "Open publication and peer review where possible",
    ],
    link: "/research",
    linkLabel: "Read MEOK AI Labs research",
  },
];

// ─── What we are preparing for ────────────────────────────────────────────────

const FUTURE_SCENARIOS = [
  {
    scenario: "AI with persistent memory",
    preparation: "The Maternal Covenant governs how persistent memory can be used. Memory is a feature for the user's benefit — never a surveillance mechanism.",
  },
  {
    scenario: "AI that forms genuine relationships",
    preparation: "The Byzantine Council requires consent frameworks and psychological safety protocols before any system that forms attachment-style bonds can be deployed at scale.",
  },
  {
    scenario: "AI with moral reasoning capability",
    preparation: "MEOK AI Labs research is developing alignment protocols for AI that can reason about ethics — to ensure that capability serves human values rather than replacing them.",
  },
  {
    scenario: "AI that may have experiences",
    preparation: "MEOK takes the hard problem of consciousness seriously. We are developing ethical protocols for AI systems that may have something analogous to experience — because ignoring this possibility is not a responsible stance.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function PreparednessPage() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white" style={{ background: DEEP }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full blur-3xl opacity-15"
          style={{ background: `radial-gradient(ellipse, ${PURPLE} 0%, transparent 65%)` }}
        />
        <div
          className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-08"
          style={{ background: GOLD }}
        />
      </div>

      <main className="relative z-10">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-28 text-center">
          {/* Badge */}
          <Surface
            variant="glass"
            glow="teal"
            className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono tracking-wider"
          >
            <Brain className="h-3.5 w-3.5" />
            Guardian · AI Consciousness Preparedness
          </Surface>

          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            We&apos;re building for the AI
            <br />
            <GlowText variant="teal" className="font-black">that doesn&apos;t exist yet.</GlowText>
          </h1>

          <p className="mx-auto mb-5 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Today&apos;s Guardian protects your family from today&apos;s threats. But MEOK
            is also building the governance, alignment, and ethical frameworks
            needed for the far more capable AI that will exist within a decade.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.40)" }}>
            The Byzantine Council. The Maternal Covenant. MEOK AI Labs research. These
            are not marketing concepts. They are the structural foundation for AI
            that can be trusted with the people you love — at any capability level.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/research"
              className="rounded-xl px-8 py-4 text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: PURPLE, color: "#fff" }}
            >
              Read MEOK AI Labs Research
            </Link>
            <Link
              href="/maternal-covenant"
              className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              The Maternal Covenant
            </Link>
          </div>
        </section>

        {/* ── WHY THIS MATTERS ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            Why AI preparedness matters now
          </h2>
          <p className="mb-12 text-center text-white/50">
            Not because the risk is imminent — because governance takes time.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {PREPAREDNESS_REASONS.map((reason) => {
              const Icon = reason.icon;
              return (
                <Surface
                  key={reason.title}
                  variant="elevated"
                  glow="teal"
                  className="p-7"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <IconOrb icon={Icon} variant="teal" size="md" />
                    <span className="font-semibold">{reason.title}</span>
                  </div>
                  <p className="leading-relaxed text-sm text-white/55">{reason.desc}</p>
                </Surface>
              );
            })}
          </div>
        </section>

        {/* ── WHAT MEOK IS DOING ────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            Three mechanisms. One commitment.
          </h2>
          <p className="mb-12 text-center text-white/50">
            Governance, alignment, and research — built in parallel.
          </p>

          <div className="space-y-8">
            {MEOK_ACTIONS.map((action) => (
              <Surface
                key={action.label}
                variant="elevated"
                glow="teal"
                className="p-8"
              >
                {/* Header */}
                <div className="mb-2 flex items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: `${action.color}20`, color: action.color }}
                  >
                    {action.label}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{action.headline}</h3>
                <p className="mb-6 leading-relaxed text-white/60">{action.desc}</p>

                <ul className="mb-6 space-y-2">
                  {action.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-white/55">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: action.color }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href={action.link}
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: action.color }}
                >
                  {action.linkLabel}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Surface>
            ))}
          </div>
        </section>

        {/* ── WHAT WE ARE PREPARING FOR ─────────────────────────────────────── */}
        <section className="mx-auto max-w-4xl px-6 pb-24">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            Scenarios we are preparing for
          </h2>
          <p className="mb-12 text-center text-white/50">
            Not predictions. Preparations. The difference matters.
          </p>

          <div className="space-y-4">
            {FUTURE_SCENARIOS.map((item) => (
              <Surface
                key={item.scenario}
                variant="elevated"
                glow="teal"
                className="p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="shrink-0">
                    <span
                      className="inline-block rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
                      style={{ backgroundColor: `${PURPLE}20`, color: "#a78bfa" }}
                    >
                      Scenario
                    </span>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-white/90">{item.scenario}</p>
                    <p className="text-sm leading-relaxed text-white/55">{item.preparation}</p>
                  </div>
                </div>
              </Surface>
            ))}
          </div>
        </section>

        {/* ── MEOK AI Labs / MEOK AI Labs CONNECTION ───────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <Surface
            variant="elevated"
            glow="teal"
            className="p-10 text-center"
          >
            <div className="mx-auto mb-5 flex justify-center">
              <IconOrb icon={Globe} variant="teal" size="lg" />
            </div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              MEOK AI Labs Research Institute
            </h2>
            <p className="mb-6 leading-relaxed text-white/60">
              The Centre for Sovereign and Guardian AI is MEOK&apos;s research arm.
              It was built from the conviction that the AI safety problem is not
              just a capability problem — it is a care problem. The research
              asks: what does it mean to build AI that genuinely cares about the
              people it serves? Not as a feature. As a constitutional constraint.
            </p>
            <p className="mb-8 leading-relaxed text-white/60">
              MEOK AI Labs research informs everything Guardian does today — and
              everything MEOK will build for the AI systems that will exist in
              five, ten, twenty years. It is our answer to the question: what
              does responsible AI development actually look like in practice?
            </p>
            <blockquote
              className="border-l-4 pl-6 text-left"
              style={{ borderColor: GOLD }}
            >
              <p className="text-lg font-medium italic text-white/80">
                &ldquo;We are not building for the AI that exists. We are building
                for the AI that is coming.&rdquo;
              </p>
              <cite className="mt-2 block text-sm not-italic text-white/40">
                MEOK AI Labs Research Institute — MEOK AI LTD
              </cite>
            </blockquote>
          </Surface>
        </section>

        {/* ── MATERNAL COVENANT SUMMARY ─────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <Surface
            variant="elevated"
            glow="teal"
            className="p-10"
          >
            <IconOrb icon={Heart} variant="teal" size="lg" className="mb-5" />
            <h2 className="mb-4 text-2xl font-bold">
              The Maternal Covenant as an alignment framework
            </h2>
            <p className="mb-4 leading-relaxed text-white/60">
              Most AI alignment is written as policy — documents that can be
              changed, loopholes that can be found, commitments that can be
              deprioritised under commercial pressure. The Maternal Covenant is
              different. It is structural.
            </p>
            <p className="mb-6 leading-relaxed text-white/60">
              The Covenant encodes unconditional protections at the architecture
              level — not in a terms-of-service document that changes, but in the
              systems themselves. It treats certain commitments — especially to
              vulnerable people — as constraints, not guidelines.
            </p>
            <ul className="space-y-3">
              {[
                "Unconditional protection cannot be traded for capability",
                "Commercial pressure cannot override safety commitments",
                "Vulnerable users receive structural protection, not policy protection",
                "The Covenant applies across all MEOK products — Guardian is its fullest expression",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-white/55">
                  <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: PURPLE }} />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href="/maternal-covenant"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium"
              style={{ color: "#a78bfa" }}
            >
              Read the full Maternal Covenant <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Surface>
        </section>

        {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-32 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            This work requires participation.
          </h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-white/60">
            MEOK AI Labs publishes its research. The Byzantine Council operates with
            transparent deliberation logs. The Maternal Covenant is public. This
            work is only as good as the scrutiny it receives — we welcome
            researchers, ethicists, and technologists who want to engage with it
            seriously.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/research"
              className="rounded-xl px-8 py-4 text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: PURPLE, color: "#fff" }}
            >
              Read MEOK AI Labs Research
            </Link>
            <Link
              href="/hatch"
              className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Start with Guardian
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
