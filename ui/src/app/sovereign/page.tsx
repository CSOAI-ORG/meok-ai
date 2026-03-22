import type { Metadata } from "next";
import Link from "next/link";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import {
  ArrowRight,
  Shield,
  Globe,
  Lock,
  Server,
  CheckCircle2,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sovereign AI for Nations & Governments — MEOK.AI",
  description:
    "AI that stays in your jurisdiction, reflects your national values, and never extracts data to foreign servers. MEOK deploys as a sovereign AI platform for governments, nations, and public institutions.",
  alternates: { canonical: "https://meok.ai/sovereign" },
  openGraph: {
    title: "Sovereign AI for Nations & Governments — MEOK.AI",
    description:
      "Data residency, national values alignment, air-gapped deployment, and full regulatory compliance. The AI platform built for government procurement.",
    type: "website",
    url: "https://meok.ai/sovereign",
  },
};

const TEMPLE_PRINCIPLES = [
  {
    icon: "◈",
    iconClass: "icon-gold",
    title: "No single point of failure",
    desc: "Decisions require consensus across 220 nodes. No one person — including the founder — can unilaterally change how MEOK behaves. The code governs.",
  },
  {
    icon: "✦",
    iconClass: "icon-purple",
    title: "Byzantine fault tolerance",
    desc: "Up to one-third of nodes can be compromised, go offline, or act maliciously — and the council still reaches the right decision. Inspired by distributed systems research.",
  },
  {
    icon: "♡",
    iconClass: "icon-gold",
    title: "The Maternal Covenant",
    desc: "A constitutional document embedded into every node. It defines care ethics, user sovereignty, and the limits of what MEOK can ever be instructed to do.",
  },
];

const HOW_IT_GOVERNS = [
  {
    step: "01",
    title: "A change is proposed",
    desc: "Any modification to MEOK's core behaviour — values, memory policy, model selection — must be submitted as a council proposal. No silent updates.",
  },
  {
    step: "02",
    title: "Nodes deliberate",
    desc: "Each of the 220 nodes independently evaluates the proposal against the Maternal Covenant and accumulated ethical precedent. Votes are cryptographically signed.",
  },
  {
    step: "03",
    title: "Supermajority required",
    desc: "Proposals pass only with a two-thirds supermajority — 147 of 220 nodes. Anything touching user sovereignty requires unanimous consent.",
  },
  {
    step: "04",
    title: "Changes are transparent",
    desc: "Every vote, every result, every change is logged on an immutable audit trail. You can read the council's decisions in real time at /council.",
  },
];

const WHY_IT_MATTERS = [
  {
    title: "Your AI can't be secretly updated against your interests",
    desc: "Every major behavioural change requires council approval. The council is bound by the Maternal Covenant — which is bound to your sovereignty.",
  },
  {
    title: "No regulatory capture",
    desc: "A government, a corporation, or an investor cannot instruct MEOK to change how it treats you without a supermajority of the council agreeing — and that council is bound by the Covenant.",
  },
  {
    title: "The founder is not above the law",
    desc: "Nicholas Templeman, MEOK's founder, holds one vote in the council. Not 220. Not a veto. One vote. The architecture protects users even from the people who built it.",
  },
];

const WHY_NATIONS_NEED_SOVEREIGN_AI = [
  {
    icon: Server,
    title: "Data residency",
    desc: "Your citizens' data never leaves your jurisdiction. MEOK deploys on infrastructure you control, in your country, under your law. No foreign cloud. No extraterritorial exposure.",
  },
  {
    icon: Globe,
    title: "National values alignment",
    desc: "AI reflects the values of whoever built it. MEOK's values framework is configurable per deployment — so Canada's MEOK reflects Canadian values, UAE's MEOK reflects Emirati values, and so on.",
  },
  {
    icon: Lock,
    title: "No foreign data extraction",
    desc: "Every major AI platform today routes your data through servers in other jurisdictions. MEOK doesn't. Air-gapped deployment means zero outbound data transfer by design.",
  },
  {
    icon: Users,
    title: "National security assurance",
    desc: "Sovereign AI must be resilient against foreign influence, corporate capture, and infrastructure failure. MEOK's 220-node Byzantine council architecture provides constitutional governance that cannot be unilaterally overridden.",
  },
];

const DEPLOYMENT_FEATURES = [
  {
    title: "White-label deployment",
    detail: "Deploy as your nation's own AI platform. Your branding, your domain, your identity.",
  },
  {
    title: "Air-gapped option",
    detail: "Fully isolated deployment with zero outbound internet traffic. Designed for classified and high-security environments.",
  },
  {
    title: "Custom values framework",
    detail: "Define the ethical, cultural, and operational values that govern how the AI behaves for your citizens and staff.",
  },
  {
    title: "Multi-language",
    detail: "Deployed in the languages your citizens and civil servants use. Not English-first.",
  },
  {
    title: "Regulatory compliance",
    detail: "GDPR, EU AI Act, and national equivalents. Compliance documentation and DPA included for every government deployment.",
  },
  {
    title: "Audit & transparency",
    detail: "Full decision audit trail. Every AI output logged, attributable, and available for parliamentary scrutiny.",
  },
];

const COMPLIANCE_ITEMS = [
  { standard: "GDPR", detail: "Full data subject rights, DPA provided, EU/UK residency by default." },
  { standard: "EU AI Act (Aug 2026)", detail: "Audit logs, risk classification, human oversight, transparency — built in." },
  { standard: "National equivalents", detail: "Deployment architecture adapts to local regulatory frameworks on request." },
  { standard: "ISO 27001-aligned", detail: "Security architecture aligned with international information security standards." },
];

export default function SovereignPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <MarketingNav activePage="sovereign" />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 px-6 overflow-hidden">
        {/* Background blobs */}
        <div
          aria-hidden
          className="blob-gold pointer-events-none absolute"
          style={{ width: 800, height: 600, top: "-15%", left: "50%", transform: "translateX(-50%)" }}
        />
        <div
          aria-hidden
          className="blob-purple pointer-events-none absolute"
          style={{ width: 500, height: 500, top: "20%", left: "-5%" }}
        />
        <div
          aria-hidden
          className="blob-blue pointer-events-none absolute"
          style={{ width: 400, height: 400, bottom: "5%", right: "-5%" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-semibold tracking-wide">
              ◈ 220 AI nodes · Byzantine fault tolerant
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-wide">
              <Globe className="w-3 h-3" /> Government &amp; Nations deployment
            </div>
          </div>

          {/* Temple SVG icon */}
          <div className="mb-8 flex justify-center">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden>
              {/* Outer ring */}
              <circle cx="40" cy="40" r="36" stroke="#c9a84c" strokeWidth="1" strokeOpacity="0.3" />
              <circle cx="40" cy="40" r="28" stroke="#c9a84c" strokeWidth="1" strokeOpacity="0.2" />
              {/* Node dots around ring */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
                const x = 40 + 36 * Math.cos(angle);
                const y = 40 + 36 * Math.sin(angle);
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="2.5"
                    fill="#c9a84c"
                    fillOpacity={i % 3 === 0 ? 0.9 : 0.35}
                  />
                );
              })}
              {/* Centre diamond */}
              <polygon
                points="40,20 55,40 40,60 25,40"
                fill="#c9a84c"
                fillOpacity="0.15"
                stroke="#c9a84c"
                strokeWidth="1.5"
              />
              <circle cx="40" cy="40" r="4" fill="#c9a84c" />
            </svg>
          </div>

          <h1
            className="font-black text-white tracking-tight leading-[1.0] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            AI that belongs to your nation.
            <br />
            <span className="text-[#c9a84c]">Not to Silicon Valley.</span>
          </h1>

          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
            MEOK deploys as a fully sovereign AI platform for governments and nations.
            Your data stays in your jurisdiction. Your values govern the AI.
            Your citizens are never exposed to foreign data extraction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@meok.ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black text-base transition-all hover:scale-105 bg-[#c9a84c] text-[#0d0c18] hover:bg-[#b8963e]"
            >
              Talk to our team
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/roadmap"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base border border-white/20 text-white/70 hover:bg-white/[0.05] hover:text-white transition-colors"
            >
              See the Toronto presentation
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION DIVIDER ──────────────────────────────────────────── */}
      <div className="px-6" aria-hidden>
        <div className="max-w-4xl mx-auto section-divider" />
      </div>

      {/* ── WHY NATIONS NEED SOVEREIGN AI ───────────────────────────── */}
      <section className="py-28 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Why sovereign AI matters
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Every nation needs AI on its own terms.
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
              The world&apos;s largest AI platforms are built in one country, governed by one company,
              and route your citizens&apos; data through foreign servers. That is a sovereignty problem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {WHY_NATIONS_NEED_SOVEREIGN_AI.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl p-8 bg-white/[0.03] border border-white/[0.07] hover:border-[#c9a84c]/20 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <h3 className="font-black text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* National values pull-quote */}
          <div className="rounded-2xl border border-[#c9a84c]/20 bg-[#c9a84c]/[0.04] p-8 text-center">
            <p className="text-xl sm:text-2xl font-black text-white leading-snug mb-3">
              &ldquo;Canada&apos;s MEOK reflects Canadian values.
              <br />
              UAE&apos;s MEOK reflects Emirati values.&rdquo;
            </p>
            <p className="text-white/35 text-sm max-w-xl mx-auto">
              The values framework that governs AI behaviour is configurable at the deployment level.
              No two national deployments are identical, and none share data.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION DIVIDER ──────────────────────────────────────────── */}
      <div className="px-6" aria-hidden>
        <div className="max-w-4xl mx-auto section-divider" />
      </div>

      {/* ── DEPLOYMENT FEATURES ──────────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Deployment capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Built for government procurement.
            </h2>
            <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
              Sovereignty, resilience, and compliance are not optional add-ons — they are the foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {DEPLOYMENT_FEATURES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.07] hover:border-[#c9a84c]/20 transition-all flex gap-4 items-start"
              >
                <div className="w-8 h-8 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div>
                  <h3 className="font-black text-white text-sm mb-1.5">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Data residency callout */}
          <div className="rounded-2xl border border-blue-500/20 bg-blue-900/[0.06] p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Server className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-black text-white text-xl mb-3">
                  Data residency: your country, your jurisdiction.
                </h3>
                <p className="text-white/50 leading-relaxed mb-4">
                  Every byte of data generated by your government&apos;s MEOK deployment stays within your
                  country&apos;s infrastructure. No replication to foreign data centres. No third-party
                  sub-processors in other jurisdictions. Full sovereignty over the data your citizens
                  and civil servants generate.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["On-premise", "National cloud", "Air-gapped", "Hybrid"].map((opt) => (
                    <span
                      key={opt}
                      className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold"
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION DIVIDER ──────────────────────────────────────────── */}
      <div className="px-6" aria-hidden>
        <div className="max-w-4xl mx-auto section-divider" />
      </div>

      {/* ── COMPLIANCE ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Regulatory compliance
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Compliant by default.
            </h2>
            <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
              MEOK is designed to meet the strictest regulatory environments. Not retrofitted — built this way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {COMPLIANCE_ITEMS.map((item) => (
              <div
                key={item.standard}
                className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.07] hover:border-emerald-500/20 transition-all flex gap-4 items-start"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-black text-white text-sm mb-1.5">{item.standard}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Government CTA strip */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-black text-white text-lg mb-1">
                Presenting in Toronto · May 26, 2026
              </h3>
              <p className="text-white/40 text-sm">
                Nick Templeman is presenting MEOK to government procurement audiences in Toronto.
                Book a conversation before the presentation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="mailto:hello@meok.ai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-black text-sm bg-[#c9a84c] text-[#0d0c18] hover:bg-[#b8963e] transition-all whitespace-nowrap"
              >
                Talk to our team
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/roadmap"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-white/20 text-white/70 hover:bg-white/[0.05] hover:text-white transition-colors whitespace-nowrap"
              >
                See the presentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION DIVIDER ──────────────────────────────────────────── */}
      <div className="px-6" aria-hidden>
        <div className="max-w-4xl mx-auto section-divider" />
      </div>

      {/* ── WHAT IS THE SOVEREIGN TEMPLE ─────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              What is the Sovereign Temple
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              The most interesting architecture in AI.
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
              Every major AI is controlled by a single company. One CEO, one boardroom, one
              decision can change how your AI behaves overnight. MEOK is different by design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEMPLE_PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="premium-card rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8"
              >
                <div className={`w-12 h-12 rounded-xl ${p.iconClass} flex items-center justify-center text-xl mb-5`}>
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-3">{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Differentiation note */}
          <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex-shrink-0 w-9 h-9 rounded-xl border border-[#c9a84c]/30 bg-[#c9a84c]/10 flex items-center justify-center text-sm text-[#c9a84c]">
              ◈
            </div>
            <div>
              <p className="text-white/70 text-sm font-semibold mb-1">
                The Sovereign Temple is not the same as your personal companion&apos;s council.
              </p>
              <p className="text-white/35 text-sm leading-relaxed">
                Your <span className="text-white/55">personal council</span> (at{" "}
                <Link href="/council" className="text-[#c9a84c]/80 hover:text-[#c9a84c] underline underline-offset-2">
                  /council
                </Link>
                ) is the feed of decisions your own AI companion makes on your behalf — who it listens to,
                what it prioritises. The <span className="text-white/55">Sovereign Temple</span> is the
                infrastructure layer above that: the 220-node Byzantine council that governs MEOK itself,
                binding every instance of the platform to the Maternal Covenant. One is yours. The other
                protects you even from us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION DIVIDER ──────────────────────────────────────────── */}
      <div className="px-6" aria-hidden>
        <div className="max-w-4xl mx-auto section-divider" />
      </div>

      {/* ── 220-NODE NETWORK VISUALISATION ───────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
            The council at a glance
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
            220 nodes. Every decision. No exceptions.
          </h2>
          <p className="text-white/40 text-sm max-w-xl mx-auto mb-12 leading-relaxed">
            Each dot represents one AI council node. Every node independently evaluates
            every proposal against the Maternal Covenant. A ⅔ supermajority — 147 of 220 — is
            required for any change to pass.
          </p>

          {/* 220-node SVG grid */}
          <div className="relative w-full overflow-x-hidden">
            <svg
              viewBox="0 0 660 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              className="w-full max-w-2xl mx-auto block"
              aria-label="220 council nodes visualisation"
            >
              {/* Connection lines — sparse sample for visual interest */}
              {Array.from({ length: 40 }).map((_, i) => {
                const col1 = (i * 7) % 22;
                const row1 = (i * 3) % 10;
                const col2 = (col1 + 1 + (i % 3)) % 22;
                const row2 = (row1 + 1 + (i % 2)) % 10;
                const x1 = 15 + col1 * 30;
                const y1 = 15 + row1 * 28;
                const x2 = 15 + col2 * 30;
                const y2 = 15 + row2 * 28;
                return (
                  <line
                    key={`line-${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(201,168,76,0.07)"
                    strokeWidth="0.75"
                  />
                );
              })}

              {/* 220 node dots — 22 columns × 10 rows */}
              {Array.from({ length: 220 }).map((_, i) => {
                const col = i % 22;
                const row = Math.floor(i / 22);
                const cx = 15 + col * 30;
                const cy = 15 + row * 28;
                // Vary opacity and size for visual depth
                const isActive = i % 7 !== 0;
                const isPulse = i % 23 === 0;
                const opacity = isPulse ? 0.9 : isActive ? 0.55 : 0.2;
                const r = isPulse ? 3.5 : 2.5;
                const dur = `${1.5 + (i % 4) * 0.4}s`;
                return (
                  <circle
                    key={`node-${i}`}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="#c9a84c"
                    fillOpacity={opacity}
                  >
                    {isPulse && (
                      <animate
                        attributeName="fillOpacity"
                        values={`${opacity};0.3;${opacity}`}
                        dur={dur}
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>
                );
              })}

              {/* Highlight ring around 9 "specialist" nodes */}
              {[10, 33, 56, 79, 102, 132, 154, 176, 198].map((idx) => {
                const col = idx % 22;
                const row = Math.floor(idx / 22);
                const cx = 15 + col * 30;
                const cy = 15 + row * 28;
                return (
                  <circle
                    key={`ring-${idx}`}
                    cx={cx}
                    cy={cy}
                    r={6}
                    stroke="#c9a84c"
                    strokeWidth="0.75"
                    strokeOpacity="0.35"
                    fill="none"
                  />
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-white/40">
            <span className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#c9a84c] opacity-90" />
              Active node
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#c9a84c] opacity-25" />
              Standby node
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-3.5 h-3.5 rounded-full border border-[#c9a84c]/50" />
              Specialist cluster (33 total)
            </span>
          </div>

          <p className="text-white/25 text-xs mt-5 font-mono">
            Total: 220 nodes · 33 specialist clusters · 147/220 required to pass
          </p>
        </div>
      </section>

      {/* ── SECTION DIVIDER ──────────────────────────────────────────── */}
      <div className="px-6" aria-hidden>
        <div className="max-w-4xl mx-auto section-divider" />
      </div>

      {/* ── HOW IT GOVERNS MEOK ──────────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              How it governs MEOK
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Every decision is a vote.
            </h2>
            <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
              No silent updates. No unilateral changes. Every modification to MEOK&apos;s
              core behaviour goes through the council.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-5 top-5 bottom-5 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.5), rgba(201,168,76,0.05))" }}
              aria-hidden
            />

            <div className="space-y-10">
              {HOW_IT_GOVERNS.map((item) => (
                <div key={item.step} className="flex gap-8 relative">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 flex items-center justify-center text-xs font-black text-[#c9a84c] z-10"
                  >
                    {item.step}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/council"
              className="inline-flex items-center gap-2 text-[#c9a84c] font-bold hover:text-[#d4b463] transition-colors text-sm"
            >
              Watch the council vote in real time →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS FOR YOU ─────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Why this matters for you
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Your AI cannot be turned against you.
            </h2>
          </div>

          <div className="space-y-6">
            {WHY_IT_MATTERS.map((item, i) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex gap-5">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 flex items-center justify-center text-xs font-black text-[#c9a84c] mt-0.5"
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION DIVIDER ──────────────────────────────────────────── */}
      <div className="px-6" aria-hidden>
        <div className="max-w-4xl mx-auto section-divider" />
      </div>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "220", label: "Council nodes" },
              { value: "⅔", label: "Supermajority required" },
              { value: "100%", label: "Audit transparency" },
              { value: "1", label: "Founder vote (not more)" },
            ].map((stat) => (
              <div key={stat.label} className="premium-card rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
                <div className="text-3xl font-black text-[#c9a84c] mb-2">{stat.value}</div>
                <div className="text-xs text-white/40 font-medium leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS TO DEEPER PAGES ────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-white/25 text-xs uppercase tracking-widest mb-10">
            Go deeper
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Link
              href="/maternal-covenant"
              className="group glass-card rounded-2xl p-6 hover:border-[#c9a84c]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl icon-gold flex items-center justify-center text-lg mb-4">
                ♡
              </div>
              <h3 className="font-bold text-white mb-1 group-hover:text-[#c9a84c] transition-colors">
                The Maternal Covenant →
              </h3>
              <p className="text-white/35 text-sm leading-relaxed">
                The constitutional document that governs every node and protects every user.
              </p>
            </Link>

            <Link
              href="/council"
              className="group glass-card rounded-2xl p-6 hover:border-[#c9a84c]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl icon-purple flex items-center justify-center text-lg mb-4">
                ◈
              </div>
              <h3 className="font-bold text-white mb-1 group-hover:text-[#c9a84c] transition-colors">
                Live Council Feed →
              </h3>
              <p className="text-white/35 text-sm leading-relaxed">
                Watch the 220 nodes deliberate and vote in real time. Full transparency, always.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="py-28 px-6 text-center bg-[#0d0c18] border-t border-white/[0.05] relative overflow-hidden">
        <div
          aria-hidden
          className="blob-gold pointer-events-none absolute"
          style={{ width: 500, height: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">
            AI sovereignty starts with a conversation.
          </h2>
          <p className="text-white/40 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            Whether you&apos;re a government department, a national institution, or a procurement team
            — we&apos;d like to talk about what sovereign AI looks like for your context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@meok.ai"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-black text-base transition-all hover:scale-105 bg-[#c9a84c] text-[#0d0c18] hover:bg-[#b8963e]"
            >
              Talk to our team
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/hatch"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-base border border-white/20 text-white/70 hover:bg-white/[0.05] hover:text-white transition-colors"
            >
              Try MEOK free →
            </Link>
          </div>
          <p className="mt-5 text-xs text-white/20">
            No credit card · No ads · No compromises
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
