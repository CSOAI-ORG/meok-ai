import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Accessibility | MEOK AI LABS",
  description:
    "WCAG 2.1 AA compliance, Senior Mode, and neurodivergent-first design. MEOK is built for every mind.",
  keywords: [
    "MEOK accessibility",
    "WCAG 2.1 AA",
    "neurodivergent AI",
    "senior mode AI",
    "accessible AI companion",
    "Age Appropriate Design Code",
    "AI for elderly",
  ],
  alternates: { canonical: "https://meok.ai/accessibility" },
  openGraph: {
    title: "Accessibility | MEOK AI LABS",
    description:
      "WCAG 2.1 AA compliance, Senior Mode, and neurodivergent-first design. MEOK is built for every mind.",
    type: "website",
    url: "https://meok.ai/accessibility",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Accessibility&desc=Built+for+every+mind.+Every+age.+Every+ability.",
        width: 1200,
        height: 630,
        alt: "MEOK Accessibility — Built for Every Mind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility | MEOK AI LABS",
    description:
      "WCAG 2.1 AA compliance, Senior Mode, and neurodivergent-first design. MEOK is built for every mind.",
    images: [
      "https://meok.ai/api/og?title=Accessibility&desc=Built+for+every+mind.+Every+age.+Every+ability.",
    ],
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const WCAG_FEATURES = [
  "Full keyboard navigation — all interactive elements reachable without a mouse",
  "Screen reader support with comprehensive ARIA labels and roles",
  "7:1 contrast ratio in Senior Mode (exceeds WCAG AA minimum of 4.5:1)",
  "Minimum 44×44 px touch targets on all interactive elements",
  "No auto-playing audio on any page",
  "Clearly visible focus indicators meeting 3:1 contrast ratio minimum",
];

const SENIOR_MODE_FEATURES = [
  {
    label: "44×44 px touch targets",
    detail: "Every tappable element meets WCAG 2.5.5 Target Size. No missed taps.",
  },
  {
    label: "16 px minimum text",
    detail: "Body text never drops below 16 px. Headings scale proportionally.",
  },
  {
    label: "7:1 contrast ratio",
    detail: "AAA-level contrast so text is readable in any lighting condition.",
  },
  {
    label: "Voice-primary interface",
    detail: "Voice is the default in Senior Mode. Type if you prefer — but you never have to.",
  },
  {
    label: "Simplified navigation",
    detail: "One column. Larger spacing. No sidebar clutter. Information you need, without noise.",
  },
  {
    label: "No dark patterns",
    detail: "No hidden fees, no confusing cancellation flows, no manipulative defaults.",
  },
];

const NEURODIVERGENT_FEATURES = [
  {
    label: "Literal language mode",
    detail:
      "No idioms, no sarcasm, no figurative language when this mode is active. Every message means exactly what it says.",
  },
  {
    label: "Adjustable motion and animation",
    detail:
      "Reduce or eliminate all motion. Respects prefers-reduced-motion at the OS level automatically.",
  },
  {
    label: "Customisable layout density",
    detail:
      "Compact, standard, or spacious layouts. Control how much visual information appears on screen at once.",
  },
  {
    label: "Font size controls",
    detail:
      "Scale text independently from the browser. Your preference is remembered across sessions.",
  },
  {
    label: "Reduced visual noise option",
    detail:
      "Hide decorative elements, gradients, and ambient effects. Clean text-first interface available.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            Accessibility
          </span>

          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}
          >
            Built for Every Mind
          </h1>

          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            WCAG 2.1 AA compliance, Senior Mode, and neurodivergent-first design
          </p>
        </div>
      </section>

      <div className="border-t border-white/[0.05] max-w-5xl mx-auto" />

      {/* ── 2. Our Commitment ────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-black text-white mb-6 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
          >
            Our Commitment
          </h2>

          <div
            className="rounded-2xl border border-white/[0.08] p-8 sm:p-10"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <p className="text-white/60 text-base leading-relaxed mb-5">
              MEOK is designed for all cognitive abilities. In the UK, 9.5 million people are neurodivergent
              — and research shows they are{" "}
              <strong className="text-white/80">50% more likely to be fraud victims</strong>. MEOK Guardian
              protects them with 24/7 threat detection powered by DistilBERT safety models trained to
              identify scam language, grooming patterns, and coercive control signals.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Senior Mode provides larger text, higher contrast, and voice-first interaction for older adults
              and anyone who benefits from a calmer, clearer interface. Accessibility is not a compliance
              checkbox at MEOK — it is a founding design constraint.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.05] max-w-5xl mx-auto" />

      {/* ── 3. WCAG 2.1 AA Features ──────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-black text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
          >
            WCAG 2.1 AA Features
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            MEOK AI LABS is committed to conforming to the Web Content Accessibility Guidelines (WCAG)
            2.1 at Level AA and the UK Equality Act 2010.
          </p>

          <ul className="space-y-3">
            {WCAG_FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-4"
              >
                <span className="flex-shrink-0 mt-0.5 text-[#c9a84c] font-black text-base">✓</span>
                <span className="text-sm text-white/65 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="border-t border-white/[0.05] max-w-5xl mx-auto" />

      {/* ── 4. Senior Mode ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]/40">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/8 px-3 py-1.5 text-xs font-semibold text-[#c9a84c] mb-5">
            Coming Q2 2026
          </div>

          <h2
            className="font-black text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
          >
            Senior Mode
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            Purpose-built for older adults and anyone who benefits from a calmer, clearer interface. Not a
            simplified version — MEOK with every design decision optimised for age-related usability needs.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {SENIOR_MODE_FEATURES.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5"
              >
                <p className="font-black text-white text-sm mb-1.5">{item.label}</p>
                <p className="text-xs text-white/45 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.05] max-w-5xl mx-auto" />

      {/* ── 5. Neurodivergent Support ─────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-black text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
          >
            Neurodivergent Support
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            Built with neurodivergent people in mind as a founding design constraint — not added after
            the fact. These are core features, not accessibility add-ons.
          </p>

          <div className="space-y-4">
            {NEURODIVERGENT_FEATURES.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-5"
              >
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#c9a84c] mt-2" />
                <div>
                  <p className="font-black text-white text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-white/45 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.05] max-w-5xl mx-auto" />

      {/* ── 6. Children's Code ───────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]/40">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-black text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
          >
            Children&apos;s Code
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-8">
            Guardian mode complies with the Age Appropriate Design Code (UK Children&apos;s Code). Children&apos;s
            accounts are architecturally distinct from adult accounts.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "No targeted suggestions",
                detail:
                  "Children's accounts receive no personalised recommendations based on behavioural profiling.",
              },
              {
                title: "Minimal data collection",
                detail:
                  "Only data strictly necessary for the service is collected for users under 18.",
              },
              {
                title: "Enhanced safety scanning",
                detail:
                  "Guardian's DistilBERT model runs on every message in children's accounts — no threshold required.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201,168,76,0.05), rgba(255,255,255,0.02))",
                }}
              >
                <p className="font-black text-white text-sm mb-2">{item.title}</p>
                <p className="text-xs text-white/45 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.05] max-w-5xl mx-auto" />

      {/* ── 7. Report an Issue ───────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-black text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
          >
            Report an Issue
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-xl">
            If you encounter an accessibility barrier — something that prevents you from using MEOK or
            makes it harder than it should be — please tell us. We treat accessibility reports as high
            priority and aim to acknowledge every report within 5 business days.
          </p>

          <div
            className="inline-flex items-center gap-3 rounded-xl px-5 py-4 mb-6"
            style={{
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <span className="text-[#c9a84c] text-lg">✉</span>
            <a
              href="mailto:accessibility@meok.ai"
              className="text-[#c9a84c] font-black text-sm hover:underline"
            >
              accessibility@meok.ai
            </a>
          </div>

          <div className="space-y-2 text-sm text-white/35 leading-relaxed">
            <p>
              We acknowledge reports within{" "}
              <span className="text-white/60">5 business days</span>.
            </p>
            <p>
              If your concern is not resolved to your satisfaction, you may escalate to the{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c]/70 hover:text-[#c9a84c] hover:underline"
              >
                Information Commissioner&apos;s Office (ICO)
              </a>{" "}
              or the Equality and Human Rights Commission.
            </p>
            <p className="pt-2 text-white/25">
              This statement was last reviewed March 2026.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. Bottom CTA ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="font-black text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}
          >
            Sovereign AI built for everyone.
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Accessibility, safety, and dignity as first-class requirements — at every tier,
            including free.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/birth"
              className="rounded-xl px-8 py-4 text-base font-semibold text-[#0d0c18] transition-opacity hover:opacity-90"
              style={{ background: "#c9a84c" }}
            >
              Start your MEOK
            </Link>
            <Link
              href="/guardian"
              className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Explore Guardian
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
