import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "How MEOK Guardian protects your family from AI-enabled scams | MEOK Blog",
  description:
    "MEOK Guardian scans every message for scam patterns, coercive control, and crisis signals before they reach your loved ones — with family alerts on HIGH and CRITICAL threats.",
  alternates: { canonical: "https://meok.ai/blog/guardian-family-safety" },
  openGraph: {
    title: "How MEOK Guardian protects your family from AI-enabled scams",
    description:
      "24/7 AI safety layer scanning every message for scam patterns and crisis signals. Family alerts on HIGH and CRITICAL threats.",
    type: "article",
    publishedTime: "April 2, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/guardian-family-safety",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+Guardian%3A+Family+Safety&desc=24%2F7+AI+scam+protection+for+your+loved+ones",
        width: 1200,
        height: 630,
        alt: "How MEOK Guardian protects your family from AI-enabled scams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How MEOK Guardian protects your family from AI-enabled scams",
    description:
      "24/7 AI safety layer scanning every message for scam patterns and crisis signals. Family alerts on HIGH and CRITICAL threats.",
    images: [
      "https://meok.ai/api/og?title=MEOK+Guardian%3A+Family+Safety&desc=24%2F7+AI+scam+protection+for+your+loved+ones",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How MEOK Guardian protects your family from AI-enabled scams",
  description:
    "MEOK Guardian scans every message for scam patterns, coercive control, and crisis signals before they reach your loved ones — with family alerts on HIGH and CRITICAL threats.",
  datePublished: "2026-04-02",
  url: "https://meok.ai/blog/guardian-family-safety",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://meok.ai/logo.png",
    },
  },
  image:
    "https://meok.ai/api/og?title=MEOK+Guardian%3A+Family+Safety&desc=24%2F7+AI+scam+protection+for+your+loved+ones",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/guardian-family-safety",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GuardianFamilySafetyPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#ff7f7f",
                background: "rgba(255,127,127,0.12)",
                border: "1px solid rgba(255,127,127,0.3)",
              }}
            >
              Guardian &amp; Safety
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              April 2, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              4 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            How MEOK Guardian protects your family from AI-enabled scams
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            AI-generated scam messages are now indistinguishable from genuine contact. They
            know your name, your bank, your family members&apos; names. MEOK Guardian was built for
            exactly this threat — an always-on safety layer that sits between the message and
            the person you love.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-[#1a1a2e] text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-75 hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.0125rem" }}
        >

          {/* ── Q1 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is MEOK Guardian?
          </h2>
          <p>
            MEOK Guardian is a 24/7 AI-powered safety layer that watches every message for scam
            patterns, coercive control signals, and crisis indicators before it reaches the user.
            Every message is scanned and scored from 0 to 100 for threat level. When a message
            scores HIGH or CRITICAL, the family dashboard is notified immediately — before the
            user has a chance to act on it. Guardian never sleeps and never misses a shift.
          </p>

          {/* ── Q2 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does MEOK detect scams in real time?
          </h2>
          <p>
            Guardian runs a multi-layer detection pipeline on every inbound message. Keyword
            pattern matching flags known scam phrases and coercive language structures. Companies
            House verification checks whether any business named in the message is registered
            and active. Phone number risk scoring cross-references reported fraud numbers. Urgency
            language detection identifies manufactured pressure designed to override rational
            decision-making. The entire pipeline completes in under 3 seconds per message — fast
            enough that the user never notices the scan before seeing the message.
          </p>

          {/* ── Q3 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Who does MEOK Guardian protect most?
          </h2>
          <p>
            Guardian was designed with three groups at particular risk:
          </p>
          <ul className="space-y-4 my-4 pl-1">
            {[
              {
                label: "Elderly users",
                desc: "Fraud against older adults cost the UK £2.35 billion in 2025 alone. Guardian&apos;s pattern library is continuously updated with the latest pension scams, NHS impersonation attempts, and romance fraud scripts.",
              },
              {
                label: "Neurodivergent adults",
                desc: "Research consistently shows neurodivergent adults are approximately 50% more vulnerable to fraud. Guardian&apos;s plain-language alerts are designed to be clear and non-alarmist — explaining the threat without creating anxiety.",
              },
              {
                label: "Children",
                desc: "School-safe mode activates age-appropriate filters for grooming detection, inappropriate contact patterns, and predatory language. Parents receive silent alerts — no disruption to the child&apos;s experience.",
              },
            ].map(({ label, desc }) => (
              <li key={label} className="flex gap-3">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#ff7f7f" }}
                />
                <span>
                  <strong style={{ color: "#ffffff" }}>{label}.</strong>{" "}
                  <span dangerouslySetInnerHTML={{ __html: desc }} />
                </span>
              </li>
            ))}
          </ul>

          {/* ── Q4 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What happens when MEOK detects a threat?
          </h2>
          <p>
            Guardian uses a four-tier severity system:
          </p>
          <div className="space-y-3 my-5">
            {[
              { level: "LOW", color: "#6adb8f", bg: "rgba(106,219,143,0.1)", desc: "Message flagged, logged, and labelled in-app. No alert sent." },
              { level: "MEDIUM", color: "#f5c842", bg: "rgba(245,200,66,0.1)", desc: "In-app warning shown to the user with context on why it was flagged." },
              { level: "HIGH", color: "#ff9a4d", bg: "rgba(255,154,77,0.1)", desc: "Family dashboard notification sent. User sees a warning before the message." },
              { level: "CRITICAL", color: "#ff5f5f", bg: "rgba(255,95,95,0.1)", desc: "Message blocked. User must click \"I&apos;ve reported this\" before the block is dismissed. Family alerted immediately." },
            ].map(({ level, color, bg, desc }) => (
              <div
                key={level}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ background: bg, border: `1px solid ${color}30` }}
              >
                <span
                  className="text-xs font-black px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5"
                  style={{ color, background: `${color}20` }}
                >
                  {level}
                </span>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <span dangerouslySetInnerHTML={{ __html: desc }} />
                </p>
              </div>
            ))}
          </div>

          {/* ── Q5 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Is Guardian surveillance? How is privacy protected?
          </h2>
          <p>
            Guardian is not surveillance. All detection runs locally on-device — no message content
            is transmitted to MEOK servers for scanning. Nothing is shared outside your family
            group without your explicit consent. MEOK AI LABS is registered with the ICO and
            operates under GDPR. Every user has the full right to erasure under Article 17 —
            including all Guardian scan logs — at any time, with immediate effect.
          </p>
          <p>
            The distinction matters: a surveillance system collects data about you to serve
            someone else&apos;s interests. Guardian collects signals to serve yours. You own the
            scan history. You decide who in your family group can see alerts. You can turn it
            off entirely. It is a tool for your protection, not a data source for ours.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              The best protection is invisible until it&apos;s needed. Guardian works quietly until
              the moment it matters — and then it acts faster than any human could.
            </p>
          </div>
        </div>

        {/* Share row */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fguardian-family-safety&text=How+MEOK+Guardian+protects+your+family+from+AI-enabled+scams"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fguardian-family-safety"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Protect Your Family
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Put Guardian between your family and the next scam
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Every MEOK companion includes Guardian by default. No extra subscription. No setup.
              It activates the moment your companion hatches and watches every message from that
              point forward.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch your MEOK free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/byzantine-council"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Architecture &amp; Governance
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                What is the Byzantine Council and why does your AI need one?
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                5 min read
              </div>
            </Link>
            <Link
              href="/blog/archetypes-guide"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c084fc", background: "rgba(192,132,252,0.12)" }}
              >
                Characters &amp; Companions
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                The 8 MEOK archetypes: which AI companion is right for you?
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
