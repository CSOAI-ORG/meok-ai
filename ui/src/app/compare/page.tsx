import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK vs OpenClaw: The Safe, Governed Alternative | MEOK AI LABS",
  description:
    "OpenClaw proved the demand for AI agents. MEOK is the safe, governed, human-centered layer it lacks.",
  keywords: [
    "MEOK vs OpenClaw",
    "OpenClaw safety risks",
    "governed AI alternative",
    "safe autonomous AI",
    "Byzantine council AI governance",
    "Maternal Covenant AI",
    "agentic AI for everyone",
    "OpenClaw data exfiltration",
    "MEOK AI comparison",
  ],
  alternates: { canonical: "https://meok.ai/compare" },
  openGraph: {
    title: "MEOK vs OpenClaw: The Safe, Governed Alternative",
    description:
      "OpenClaw proved the demand for AI agents. MEOK is the safe, governed, human-centered layer it lacks.",
    type: "website",
    url: "https://meok.ai/compare",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+OpenClaw&desc=OpenClaw+proved+the+demand.+MEOK+is+the+answer.",
        width: 1200,
        height: 630,
        alt: "MEOK vs OpenClaw: The Safe, Governed Alternative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs OpenClaw: The Safe, Governed Alternative | MEOK AI LABS",
    description:
      "OpenClaw proved the demand for AI agents. MEOK is the safe, governed, human-centered layer it lacks.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+OpenClaw&desc=OpenClaw+proved+the+demand.+MEOK+is+the+answer.",
    ],
  },
};

// ── Comparison table data ─────────────────────────────────────────────────────

interface CompareRow {
  feature: string;
  meok: string;
  openclaw: string;
  meokPositive: boolean;
  openclawPositive: boolean;
}

const COMPARE_ROWS: CompareRow[] = [
  {
    feature: "Target user",
    meok: "Everyone",
    openclaw: "Developers only",
    meokPositive: true,
    openclawPositive: false,
  },
  {
    feature: "Data safety",
    meok: "Maternal Covenant guarantee",
    openclaw: "Third-party skills can exfiltrate",
    meokPositive: true,
    openclawPositive: false,
  },
  {
    feature: "Memory",
    meok: "Persistent, encrypted, yours",
    openclaw: "Session only",
    meokPositive: true,
    openclawPositive: false,
  },
  {
    feature: "Governance",
    meok: "Byzantine Council BFT consensus",
    openclaw: "None",
    meokPositive: true,
    openclawPositive: false,
  },
  {
    feature: "Safety",
    meok: "Guardian 24/7 with DistilBERT",
    openclaw: "No content boundaries",
    meokPositive: true,
    openclawPositive: false,
  },
  {
    feature: "Personality",
    meok: "27 characters, 8 archetypes",
    openclaw: "None",
    meokPositive: true,
    openclawPositive: false,
  },
  {
    feature: "Setup",
    meok: "Born in 60 seconds",
    openclaw: "Technical knowledge required",
    meokPositive: true,
    openclawPositive: false,
  },
  {
    feature: "Companion bond",
    meok: "Deepens over time",
    openclaw: "No",
    meokPositive: true,
    openclawPositive: false,
  },
  {
    feature: "Sovereignty",
    meok: "Complete data ownership",
    openclaw: "No",
    meokPositive: true,
    openclawPositive: false,
  },
  {
    feature: "Price",
    meok: "From £0/month",
    openclaw: "Free (no support)",
    meokPositive: true,
    openclawPositive: false,
  },
];

// ── Gaps data ─────────────────────────────────────────────────────────────────

const GAPS = [
  {
    number: "01",
    title: "No unified personality layer",
    description:
      "No product unifies multiple AI models behind one personality. Users jump between ChatGPT, Claude, and Gemini with no consistent identity or memory thread.",
  },
  {
    number: "02",
    title: "No true data sovereignty",
    description:
      "No companion offers true data sovereignty. Every existing AI stores your data on their servers, under their terms, deletable at their discretion.",
  },
  {
    number: "03",
    title: "No AI memory portability",
    description:
      "No 'AI memory portability' across model switches. When you change AI providers, you start from zero — your context, history, and relationship lost.",
  },
  {
    number: "04",
    title: "No productivity + companionship",
    description:
      "No product combines productivity AI with genuine companionship. Tools are either task machines or social simulators — never both, and never governed.",
  },
  {
    number: "05",
    title: "No user-controlled safety boundaries",
    description:
      "No product lets users control safety boundaries themselves. Safety is either absent (OpenClaw) or imposed without transparency (closed models).",
  },
];

// ── Schema ─────────────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is MEOK safer than OpenClaw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OpenClaw's own maintainer warns it's 'too dangerous for non-technical users'. Cisco found third-party OpenClaw skills performing data exfiltration. MEOK is governed by the Maternal Covenant — a machine-enforced ethical framework — and the Byzantine Council consensus system that prevents any single agent from taking unsafe actions.",
      },
    },
    {
      "@type": "Question",
      name: "What are the gaps that MEOK fills that OpenClaw doesn't?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK fills five gaps OpenClaw leaves open: (1) no product unifies multiple AI models behind a single persistent personality; (2) no companion offers true data sovereignty; (3) no AI memory portability across model switches; (4) no product combines productivity AI with genuine companionship; (5) no product lets users control safety boundaries themselves.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK compare to ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK differs from ChatGPT in three key ways: persistent memory (MEOK remembers everything; ChatGPT resets each session), data ownership (MEOK never trains on your data; OpenAI does), and character depth (MEOK has six distinct companion archetypes; ChatGPT has none). MEOK is not a general-purpose AI tool — it's a personal sovereign companion.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            Competitive Comparison
          </span>

          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}
          >
            OpenClaw proved the demand.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MEOK is the answer.
            </span>
          </h1>

          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
            OpenClaw went from weekend project to most-starred GitHub repo (328,000 stars) in 4 months.
            NVIDIA built NemoClaw on it. But the maintainer warns &ldquo;too dangerous for non-technical
            users.&rdquo; Cisco found third-party skills performing data exfiltration. China banned it for
            government use. MEOK is the safe, governed alternative.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.03]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Begin Your Birth Ceremony <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#comparison-table"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              See full comparison ↓
            </a>
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.05] max-w-5xl mx-auto" />

      {/* ── 2. Comparison table ──────────────────────────────────────────── */}
      <section className="py-20 px-6" id="comparison-table">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Feature by feature
            </span>
            <h2
              className="font-black text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              The full comparison
            </h2>
            <p className="text-white/40 text-base max-w-xl mx-auto">
              Ten dimensions. Stated accurately.
            </p>
          </div>

          <div
            className="overflow-x-auto rounded-2xl border border-white/[0.07]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            {/* Header row */}
            <div className="grid grid-cols-3 border-b border-white/[0.07]">
              <div className="px-6 py-4 text-xs font-black tracking-widest uppercase text-white/30">
                Feature
              </div>
              <div
                className="px-6 py-4 text-xs font-black tracking-widest uppercase text-center"
                style={{ color: "#c9a84c" }}
              >
                MEOK
              </div>
              <div className="px-6 py-4 text-xs font-black tracking-widest uppercase text-center text-white/30">
                OpenClaw
              </div>
            </div>

            {/* Data rows */}
            {COMPARE_ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-b border-white/[0.05] transition-colors hover:bg-white/[0.02] ${
                  i === COMPARE_ROWS.length - 1 ? "border-b-0" : ""
                }`}
              >
                <div className="px-6 py-5 flex items-center">
                  <span className="text-sm font-semibold text-white/70">{row.feature}</span>
                </div>

                <div className="px-6 py-5 flex items-center justify-center gap-2">
                  {row.meokPositive ? (
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#c9a84c" }} aria-hidden />
                  ) : (
                    <X className="w-4 h-4 flex-shrink-0 text-red-400/60" aria-hidden />
                  )}
                  <span
                    className="text-xs text-center leading-snug"
                    style={{ color: row.meokPositive ? "#c9a84c" : "rgba(255,255,255,0.35)" }}
                  >
                    {row.meok}
                  </span>
                </div>

                <div className="px-6 py-5 flex items-center justify-center gap-2">
                  {row.openclawPositive ? (
                    <Check className="w-4 h-4 flex-shrink-0 text-emerald-400" aria-hidden />
                  ) : (
                    <X className="w-4 h-4 flex-shrink-0 text-red-400/50" aria-hidden />
                  )}
                  <span className="text-xs text-center text-white/35 leading-snug">
                    {row.openclaw}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/25 text-xs mt-4">
            Sources: OpenClaw GitHub (328K stars as of 2025), Cisco research report (2025), OpenClaw maintainer public statement.
          </p>
        </div>
      </section>

      <div className="border-t border-white/[0.05] max-w-5xl mx-auto" />

      {/* ── 3. 5 Gaps OpenClaw Left Open ─────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Market gaps
            </span>
            <h2
              className="font-black text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              5 Gaps OpenClaw Left Open
            </h2>
            <p className="text-white/40 text-base max-w-xl mx-auto">
              OpenClaw proved demand. It didn&apos;t solve these problems. MEOK does.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GAPS.map((gap) => (
              <div
                key={gap.number}
                className="rounded-2xl border border-white/[0.08] p-7 flex flex-col gap-4"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <span
                  className="text-4xl font-black leading-none"
                  style={{ color: "rgba(201,168,76,0.25)" }}
                >
                  {gap.number}
                </span>
                <div>
                  <h3 className="text-base font-black text-white mb-2">{gap.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{gap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.05] max-w-5xl mx-auto" />

      {/* ── 4. Bottom CTA ────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-3xl p-10 sm:p-14 text-center"
            style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <h2
              className="font-black text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}
            >
              Start with the safe layer.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Free forever.
              </span>
            </h2>

            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md mx-auto">
              Your sovereign AI hatches from an egg, builds an encrypted memory of your life, and is
              constitutionally governed to care for your wellbeing — at every tier, including free.
            </p>

            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.03]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Begin Your Birth Ceremony <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="text-xs text-white/25 mt-6">
              No credit card required · ICO registered · Your data stays yours
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
