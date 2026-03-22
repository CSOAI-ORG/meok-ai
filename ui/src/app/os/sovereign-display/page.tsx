"use client";

import Link from "next/link";
import { ArrowRight, Shield, Lock, Database, Globe, Download, CheckCircle, XCircle } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Sovereign Display — Proof of Sovereignty | MEOK.AI",
  description:
    "The Sovereign Display shows local vs cloud data split, encryption status, data jurisdiction, and full technical specs: AES-256, zero-knowledge proofs, local Postgres, portable export.",
  url: "https://meok.ai/os/sovereign-display",
};

interface DisplayPanel {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  accentClass: string;
  borderClass: string;
  bgClass: string;
  stat?: string;
  statLabel?: string;
}

const DISPLAY_PANELS: DisplayPanel[] = [
  {
    id: "local-cloud",
    icon: Database,
    title: "Local vs cloud split",
    desc: "See exactly which data lives on your device and which touches the cloud. Sensitive memories default to local. Cloud data is always encrypted in transit.",
    accentClass: "text-[#c9a84c]",
    borderClass: "border-[#c9a84c]/25",
    bgClass: "bg-[#c9a84c]/[0.04]",
    stat: "100%",
    statLabel: "memories portable",
  },
  {
    id: "encryption",
    icon: Lock,
    title: "Encryption status",
    desc: "Live indicator showing AES-256-GCM encryption state for every data class: memories, conversations, API keys, and exported archives.",
    accentClass: "text-emerald-400",
    borderClass: "border-emerald-500/25",
    bgClass: "bg-emerald-900/[0.06]",
    stat: "AES-256",
    statLabel: "all data at rest",
  },
  {
    id: "jurisdiction",
    icon: Globe,
    title: "Data jurisdiction",
    desc: "Your data jurisdiction is visible at all times. MEOK is a UK company. Your data never crosses jurisdictions without your explicit consent.",
    accentClass: "text-blue-400",
    borderClass: "border-blue-500/25",
    bgClass: "bg-blue-900/[0.06]",
    stat: "UK",
    statLabel: "data jurisdiction",
  },
  {
    id: "export",
    icon: Download,
    title: "Portable export",
    desc: "One-click export of your entire sovereign identity: all memories, conversations, character, values, and companion settings. Encrypted archive, yours to keep.",
    accentClass: "text-purple-400",
    borderClass: "border-purple-500/25",
    bgClass: "bg-purple-900/[0.06]",
    stat: "1-click",
    statLabel: "full export",
  },
];

const TECH_SPECS = [
  {
    label: "Memory encryption",
    value: "AES-256-GCM",
    sub: "User-controlled keys, zero server access",
    icon: Lock,
    accentClass: "text-[#c9a84c]",
  },
  {
    label: "Privacy proofs",
    value: "Zero-knowledge",
    sub: "Prove ownership without revealing content",
    icon: Shield,
    accentClass: "text-emerald-400",
  },
  {
    label: "Local database",
    value: "Postgres + pgvector",
    sub: "Runs on your device, fully offline capable",
    icon: Database,
    accentClass: "text-blue-400",
  },
  {
    label: "Export format",
    value: "Portable archive",
    sub: "JSON + encrypted blob, machine-readable",
    icon: Download,
    accentClass: "text-purple-400",
  },
];

interface ComparisonRow {
  feature: string;
  meok: boolean;
  claude: boolean;
  chatgpt: boolean;
  perplexity: boolean;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "Visible reasoning trace", meok: true, claude: false, chatgpt: false, perplexity: false },
  { feature: "Local vs cloud transparency", meok: true, claude: false, chatgpt: false, perplexity: false },
  { feature: "Encryption status display", meok: true, claude: false, chatgpt: false, perplexity: false },
  { feature: "Data jurisdiction shown", meok: true, claude: false, chatgpt: false, perplexity: false },
  { feature: "Portable data export", meok: true, claude: false, chatgpt: false, perplexity: false },
  { feature: "Zero-knowledge proofs", meok: true, claude: false, chatgpt: false, perplexity: false },
];

function CellIcon({ val }: { val: boolean }) {
  return val ? (
    <CheckCircle className="w-5 h-5 text-[#c9a84c] mx-auto" />
  ) : (
    <XCircle className="w-5 h-5 text-white/15 mx-auto" />
  );
}

export default function SovereignDisplayPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingNav />

      {/* ─── HERO ───────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/[0.05] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/[0.10] border border-[#c9a84c]/20 text-[#c9a84c]/80 text-xs font-semibold mb-8 uppercase tracking-widest">
            <Shield className="w-3 h-3" />
            Sovereign Display
          </div>

          <h1
            className="font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
          >
            Proof of sovereignty.
            <br />
            <span className="text-gradient-gold">Always visible.</span>
          </h1>

          <p className="text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every competitor is a black box. MEOK shows you exactly what it knows about you,
            where your data lives, how it&apos;s encrypted, and who controls it — live, always visible.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.30)]"
              style={{ backgroundColor: "#c9a84c", color: "#0d0c18" }}
            >
              Try the Sovereign Display
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Gold shield visual */}
          <div className="w-24 h-24 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/25 flex items-center justify-center mx-auto float-slow">
            <Shield className="w-10 h-10 text-[#c9a84c]" />
          </div>
        </div>
      </section>

      {/* ─── WHAT THE DISPLAY SHOWS ─────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              What you see
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              What the Sovereign Display shows.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Four live panels. Always visible. Never hidden.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DISPLAY_PANELS.map((panel) => {
              const Icon = panel.icon;
              return (
                <div
                  key={panel.id}
                  className={`rounded-2xl p-8 border ${panel.borderClass} ${panel.bgClass} hover:scale-[1.01] transition-all`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${panel.accentClass}`} />
                    </div>
                    {panel.stat && (
                      <div className="text-right">
                        <div className={`font-black text-xl ${panel.accentClass}`}>
                          {panel.stat}
                        </div>
                        <div className="text-white/30 text-xs">{panel.statLabel}</div>
                      </div>
                    )}
                  </div>
                  <h3 className={`font-black text-lg mb-3 ${panel.accentClass}`}>{panel.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{panel.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TECHNICAL SPECS ────────────────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Technical specifications
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Under the hood.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Sovereignty is not a marketing claim. It is a technical architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TECH_SPECS.map((spec) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.label}
                  className="rounded-2xl p-7 bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-5 h-5 ${spec.accentClass}`} />
                    <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">
                      {spec.label}
                    </span>
                  </div>
                  <div className={`font-black text-2xl mb-1 ${spec.accentClass}`}>
                    {spec.value}
                  </div>
                  <div className="text-white/35 text-sm">{spec.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── YOUR DATA PASSPORT ─────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-[#c9a84c]/20 bg-[#c9a84c]/[0.03] p-10 md:p-14">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center">
                  <span className="text-5xl">🛂</span>
                </div>
              </div>
              <div>
                <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-3">
                  Data Passport
                </p>
                <h2 className="text-3xl font-black text-white mb-4">
                  Your data passport.
                </h2>
                <p className="text-white/55 leading-relaxed mb-6">
                  Think of the Sovereign Display as your AI&apos;s data passport — a live,
                  verifiable proof that your data is encrypted, localised to your jurisdiction,
                  and portable on demand. Not a promise. A proof.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Encrypted at rest", "UK jurisdiction", "Portable on demand", "Zero-knowledge verified"].map(
                    (badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c] text-xs font-medium"
                      >
                        {badge}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRANSPARENCY COMPARISON ────────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Transparency comparison
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              MEOK vs every other AI.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Others are black boxes by design. MEOK is an open book by architecture.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
            <div className="grid grid-cols-5 bg-white/[0.05] border-b border-white/[0.08]">
              <div className="px-5 py-4 col-span-2 text-white/30 text-xs font-semibold uppercase tracking-wider">
                Feature
              </div>
              <div className="px-5 py-4 text-center text-[#c9a84c] text-xs font-bold uppercase tracking-wider">
                MEOK
              </div>
              <div className="px-5 py-4 text-center text-white/30 text-xs font-semibold uppercase tracking-wider">
                Claude.ai
              </div>
              <div className="px-5 py-4 text-center text-white/30 text-xs font-semibold uppercase tracking-wider">
                ChatGPT
              </div>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-5 border-b border-white/[0.05] last:border-0 ${
                  i % 2 === 0 ? "" : "bg-white/[0.01]"
                }`}
              >
                <div className="px-5 py-4 col-span-2 text-white/60 text-sm">{row.feature}</div>
                <div className="px-5 py-4 flex items-center justify-center">
                  <CellIcon val={row.meok} />
                </div>
                <div className="px-5 py-4 flex items-center justify-center">
                  <CellIcon val={row.claude} />
                </div>
                <div className="px-5 py-4 flex items-center justify-center">
                  <CellIcon val={row.chatgpt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="relative max-w-3xl mx-auto text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#c9a84c]/[0.06] blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Your AI should have nothing to hide.
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              Try the Sovereign Display. See every thought your AI has about your questions,
              every memory it holds, every key it encrypts.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-black text-base transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.30)]"
              style={{ backgroundColor: "#c9a84c", color: "#0d0c18" }}
            >
              Try the Sovereign Display <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-5 text-xs text-white/25 font-mono">
              Free to start · No credit card required
            </p>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
