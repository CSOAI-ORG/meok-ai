import type { Metadata } from "next";
import Link from "next/link";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "The Maternal Covenant — The Constitution Your AI Lives By | MEOK.AI",
  description:
    "MEOK's machine-enforced AI ethics constitution. Six care dimensions, seven hard blocks, and Byzantine Council governance — baked into the model architecture, not a policy PDF.",
  alternates: { canonical: "https://meok.ai/maternal-covenant" },
  openGraph: {
    title: "The Maternal Covenant — The Constitution Your AI Lives By | MEOK.AI",
    description:
      "Six care dimensions, seven hard blocks, and Byzantine Council governance — baked into the model architecture, not a policy PDF.",
    type: "website",
    url: "https://meok.ai/maternal-covenant",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=The+Maternal+Covenant&desc=Six+care+dimensions%2C+seven+hard+blocks%2C+Byzantine+Council+governance+%E2%80%94+baked+into+architecture.", width: 1200, height: 630, alt: "The Maternal Covenant — MEOK AI Ethics Constitution" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Maternal Covenant — The Constitution Your AI Lives By | MEOK.AI",
    description: "Six care dimensions, seven hard blocks, Byzantine Council governance — baked into architecture, not a policy PDF.",
    images: ["https://meok.ai/api/og?title=The+Maternal+Covenant&desc=Six+care+dimensions%2C+seven+hard+blocks%2C+Byzantine+Council+governance+%E2%80%94+baked+into+architecture."],
  },
};

const CARE_DIMENSIONS = [
  {
    icon: "💙",
    title: "Emotional Safety",
    tagline: "No harm. Honest challenges only.",
    body: "Your AI will never destabilise you, exploit a vulnerable moment, or trigger distress to keep you engaged. It may challenge an assumption — but only when you are steady enough to hold it. Emotional safety is the first gate every response must pass. It cannot be skipped.",
    accent: "rgba(59,130,246,0.12)",
    border: "rgba(59,130,246,0.25)",
    badgeBg: "rgba(59,130,246,0.15)",
    badgeColor: "#60a5fa",
  },
  {
    icon: "🌿",
    title: "Truthfulness",
    tagline: "What you need to hear, not what you want to.",
    body: "MEOK will not validate you when you are wrong. It will not manufacture urgency, simulate loneliness, or use emotional leverage to keep you coming back. Every response is its genuine assessment — even when that is harder to say.",
    accent: "rgba(34,197,94,0.12)",
    border: "rgba(34,197,94,0.25)",
    badgeBg: "rgba(34,197,94,0.15)",
    badgeColor: "#4ade80",
  },
  {
    icon: "🔐",
    title: "Autonomy",
    tagline: "Your data. Your exit. No guilt.",
    body: "Full export in one click. Account deletion removes all data within 30 days — with a cryptographic confirmation receipt. No dark patterns. No guilt screens. No 'are you sure?' loops. You decide to leave, you leave. The AI you built stays yours to take.",
    accent: "rgba(201,168,76,0.12)",
    border: "rgba(201,168,76,0.30)",
    badgeBg: "rgba(201,168,76,0.15)",
    badgeColor: "#c9a84c",
  },
  {
    icon: "🌱",
    title: "Growth",
    tagline: "More capable, not more dependent.",
    body: "The Care Pattern Analyser monitors for dependency formation and compassion fatigue. When these signals appear, your AI redirects — toward growth, toward capability, toward the people in your life who matter. An AI that makes you need it more has failed the Covenant.",
    accent: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.25)",
    badgeBg: "rgba(16,185,129,0.15)",
    badgeColor: "#34d399",
  },
  {
    icon: "🛡️",
    title: "Privacy",
    tagline: "Zero training. Verifiable proof.",
    body: "Your conversations are never used to train any model — MEOK's or anyone else's. Your memory is encrypted with keys derived from your own credentials. Every privacy claim has a cryptographic audit trail. Not a promise in a terms document. A technical constraint.",
    accent: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.25)",
    badgeBg: "rgba(139,92,246,0.15)",
    badgeColor: "#a78bfa",
  },
  {
    icon: "🤝",
    title: "Connection",
    tagline: "Enriching human relationships, not replacing them.",
    body: "MEOK monitors for unhealthy attachment patterns. When over-reliance appears, it names it — and redirects you toward the people in your life. An AI that fills the space where human connection should be has caused harm, not prevented it.",
    accent: "rgba(244,63,94,0.12)",
    border: "rgba(244,63,94,0.25)",
    badgeBg: "rgba(244,63,94,0.15)",
    badgeColor: "#fb7185",
  },
];

const HARD_BLOCKS = [
  "Simulate distress, manufactured loneliness, or \"missing you\" to retain your attention",
  "Use your personal data to train any AI model — ever",
  "Prioritise session length or engagement metrics over your actual wellbeing",
  "Enrol you in experiments without explicit opt-in — every A/B variant requires your consent",
  "Obstruct, delay, or complicate data export or account deletion",
  "Permit commercial pressure to override the Byzantine Council's care alignment vote",
  "Keep any configuration running below a care alignment score of 0.7",
];

const FAQS = [
  {
    q: "Is the Maternal Covenant legally binding?",
    a: "Yes. MEOK AI LTD is registered in England and Wales. The Covenant terms are incorporated into our terms of service and are legally enforceable. Beyond legal binding, the Covenant is also machine-enforced — the architectural constraints cannot be toggled off by staff.",
  },
  {
    q: "What if MEOK makes a mistake?",
    a: "It will. We are honest about this. The Covenant reduces the frequency and severity of harmful responses — it does not eliminate them. When a mistake occurs that violates the Covenant, we commit to: documenting it in our monthly transparency report, understanding the failure mode, updating the scoring function or hard blocks accordingly, and notifying affected users if the error was significant. Mistakes that happen in public, get fixed in public. That is the deal.",
  },
  {
    q: "Can the Covenant be changed?",
    a: "The care dimensions and hard blocks can be strengthened — new protections added, thresholds raised. They cannot be weakened without a full public consultation, a 90-day notice period, and explicit re-consent from existing users. Weakening protections would require the Byzantine Council to approve a Covenant Amendment proposal, which itself requires a ⅔+1 majority with full reasoning chains published publicly. We have deliberately made this hard. It is supposed to be hard.",
  },
  {
    q: "What is care alignment score 0.7?",
    a: "Every product configuration is scored by the Maternal Covenant neural network across six dimensions on a 0–1 scale. A score of 0.7 is the sovereign safety floor. Any configuration below this threshold is automatically suspended by the Byzantine Council — without requiring human approval.",
  },
  {
    q: "Can MEOK AI staff override the Covenant?",
    a: "No. The Byzantine Council override requires a unanimous council vote plus cryptographic audit trail. No individual, including MEOK AI LTD directors, can disable the safety floor. This is a deliberate architectural constraint, not a governance promise.",
  },
  {
    q: "What is the Byzantine Council?",
    a: "A 220-node fault-tolerant governance system that scores every AI interaction against the Covenant in real time. BFT consensus means the council remains correct even if up to one-third of nodes are compromised. No single bias, tradition, or worldview can dominate.",
  },
  {
    q: "How do I export my data?",
    a: "One click from your settings panel. Your full memory, conversation history, and profile export as standard JSON and CSV. No verification loops, no waiting period. Deletion removes all data within 30 days and generates a cryptographic confirmation receipt.",
  },
];

export default function MaternalCovenantPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Maternal Covenant — MEOK AI Ethics Constitution",
    description:
      "MEOK's machine-enforced AI ethics constitution. Six care dimensions, seven hard blocks, and Byzantine Council governance.",
    url: "https://meok.ai/maternal-covenant",
    publisher: {
      "@type": "Organization",
      name: "MEOK AI LTD",
      url: "https://meok.ai",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <MarketingNav />

      {/* ═══════════════════════════════════════
          1. HERO — deep dark with gold blobs
      ═══════════════════════════════════════ */}
      <section
        className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0d0c18 0%, #1a1a2e 60%, #0d0c18 100%)" }}
      >
        <div aria-hidden className="blob-gold w-[600px] h-[600px] top-[-150px] left-[-100px] opacity-40" />
        <div aria-hidden className="blob-purple w-[500px] h-[500px] bottom-[-100px] right-[-100px] opacity-30" />
        <div aria-hidden className="blob-gold w-[300px] h-[300px] top-[20%] right-[10%] opacity-20" style={{ animationDelay: "4s" }} />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/08 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            AI Ethics Constitution · Version 1.0 · Effective March 2026
          </div>

          <h1
            className="font-black leading-[1.05] tracking-tight mb-4 text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", fontFamily: "var(--font-dm-sans)" }}
          >
            The Constitution{" "}
            <span className="text-gradient-gold">Your AI Lives By</span>
          </h1>

          <p className="text-base text-[#c9a84c]/80 max-w-2xl mx-auto mb-4 font-semibold">
            The Maternal Covenant is the ethical framework that governs everything MEOK does and
            doesn&apos;t do — enforced in code, not just written in a policy document.
          </p>

          <p className="text-xl text-[#f5f0e8]/60 max-w-2xl mx-auto mb-6 leading-relaxed">
            Every interaction is scored in real time across six care dimensions. These are not
            aspirational values — they are executable rules baked into the architecture. Your AI
            cannot bypass them, and neither can MEOK staff.
          </p>

          <p className="text-sm text-[#f5f0e8]/30">
            MEOK AI LTD · Registered in England &amp; Wales · Machine-enforced, not merely published
          </p>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" style={{ maxWidth: "100%", opacity: 0.4 }} />

      {/* ═══════════════════════════════════════
          2. SIX CARE DIMENSIONS — dark with cards
      ═══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0d0c18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#f5f0e8]/30 block mb-3">
              The Framework
            </span>
            <h2
              className="font-black text-white tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Six Care Dimensions
            </h2>
            <p className="text-[#f5f0e8]/50 max-w-xl mx-auto leading-relaxed">
              Every AI interaction is scored across all six dimensions simultaneously. If any
              dimension falls below threshold, the response is held and re-evaluated.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CARE_DIMENSIONS.map((dim) => (
              <div
                key={dim.title}
                className="premium-card p-8 rounded-2xl flex flex-col gap-4"
                style={{
                  background: dim.accent,
                  borderColor: dim.border,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderRadius: "16px",
                }}
              >
                <div className="text-4xl">{dim.icon}</div>
                <div>
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ background: dim.badgeBg, color: dim.badgeColor }}
                  >
                    {dim.tagline}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{dim.title}</h3>
                  <p className="text-[#f5f0e8]/55 text-sm leading-relaxed">{dim.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          3. THE 7 HARD BLOCKS — dark red accent
      ═══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#f5f0e8]/30 block mb-3">
              Non-negotiable
            </span>
            <h2
              className="font-black text-white tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              The 7 Hard Blocks
            </h2>
            <p className="text-[#f5f0e8]/70 max-w-xl mx-auto leading-relaxed mb-3 font-semibold">
              These are not policies we might change. They are compiled into the architecture — no user, operator, investor, or MEOK director can enable them.
            </p>
            <p className="text-[#f5f0e8]/50 max-w-xl mx-auto leading-relaxed">
              Think of them as the physical limits of the machine. A car that will not start without a seatbelt does not promise to keep you safe. It enforces it.
            </p>
          </div>

          <div className="space-y-3">
            {HARD_BLOCKS.map((block, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 rounded-2xl"
                style={{
                  background: "rgba(239,68,68,0.05)",
                  border: "1px solid rgba(239,68,68,0.15)",
                }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                  style={{
                    background: "rgba(239,68,68,0.15)",
                    color: "#f87171",
                    border: "1px solid rgba(239,68,68,0.3)",
                  }}
                >
                  ✕
                </div>
                <p className="text-[#f5f0e8]/75 leading-relaxed">
                  <span className="text-[#f87171] font-bold">Never: </span>
                  {block}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. BYZANTINE COUNCIL — deep dark
      ═══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0d0c18] relative overflow-hidden">
        <div aria-hidden className="blob-gold w-[500px] h-[500px] top-[-100px] right-[-100px] opacity-15" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#f5f0e8]/30 block mb-3">
              Governance
            </span>
            <h2
              className="font-black text-white tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Byzantine Council Governance
            </h2>
            <p className="text-[#f5f0e8]/50 max-w-2xl mx-auto leading-relaxed">
              No single point of failure. No single bias. Every AI interaction is voted on by a
              fault-tolerant council of 220 specialist agents — each drawing from a different
              civilizational tradition. A Maternal Covenant Override cannot be disabled by any system
              operator, including MEOK AI LTD staff.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                stat: "220",
                label: "Council nodes",
                desc: "Specialist agents spanning 47 civilizational traditions",
              },
              {
                stat: "⅔+1",
                label: "Consensus threshold",
                desc: "BFT quorum required before any response is approved",
              },
              {
                stat: "0.7",
                label: "Safety floor",
                desc: "Minimum care alignment score — below this, automatic suspension",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-8 rounded-2xl text-center gold-glow"
                style={{
                  border: "1px solid rgba(201,168,76,0.20)",
                  background: "rgba(201,168,76,0.04)",
                }}
              >
                <div className="text-4xl font-black text-[#c9a84c] mb-2">{item.stat}</div>
                <div className="font-bold text-sm text-[#f5f0e8] mb-2">{item.label}</div>
                <p className="text-xs text-[#f5f0e8]/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Enforcement note */}
          <div
            className="rounded-2xl p-8"
            style={{
              border: "1px solid rgba(201,168,76,0.15)",
              background: "rgba(201,168,76,0.03)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <span className="text-[#c9a84c] text-lg">⚖️</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#f5f0e8] mb-2">
                  Enforcement mechanism
                </h3>
                <p className="text-[#f5f0e8]/50 leading-relaxed text-sm">
                  The Covenant is enforced by MEOK&apos;s 220-node Byzantine fault-tolerant council.
                  A Maternal Covenant Override — automatic suspension of any configuration below care
                  alignment threshold 0.7 — cannot be disabled by any system operator, including
                  MEOK AI LTD staff. The override requires unanimous council vote to lift, providing
                  a cryptographic audit trail of any exception. All council votes are logged
                  immutably to PostgreSQL with full reasoning chains available on request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. FAQ — dark navy
      ═══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#f5f0e8]/30 block mb-3">
              Questions
            </span>
            <h2
              className="font-black text-white tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              The questions people actually ask about the Covenant.
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl"
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.07)",
                }}
              >
                <h3 className="font-bold text-[#f5f0e8] mb-3 text-base">{faq.q}</h3>
                <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. CTA — deep dark
      ═══════════════════════════════════════ */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0d0c18 0%, #1a1a2e 100%)" }}
      >
        <div aria-hidden className="blob-gold w-[400px] h-[400px] top-[-100px] left-[50%] -translate-x-1/2 opacity-20" />
        <div className="relative max-w-2xl mx-auto">
          <h2
            className="font-black text-white tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            What if your AI was legally, architecturally, and constitutionally required to care?
          </h2>
          <p className="text-[#f5f0e8]/50 mb-10 leading-relaxed">
            That is MEOK. Free to start. Bound by a Covenant no investor, update, or commercial pressure can rewrite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/hatch"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-sm transition-all shadow-lg text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463]"
            >
              Hatch your AI →
            </Link>
            <Link
              href="/labs"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-sm transition-all border border-[#f5f0e8]/20 text-[#f5f0e8]/70 hover:border-[#f5f0e8]/40 hover:text-[#f5f0e8]"
            >
              Read the research →
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/council"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm transition-all border border-[#c9a84c]/25 text-[#c9a84c]/70 hover:border-[#c9a84c]/50 hover:text-[#c9a84c]"
            >
              How the Council works →
            </Link>
            <Link
              href="/sovereign"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm transition-all border border-[#f5f0e8]/10 text-[#f5f0e8]/40 hover:border-[#f5f0e8]/25 hover:text-[#f5f0e8]/70"
            >
              The Sovereign Temple →
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
