import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  ArrowRight,
  Smartphone,
  ScanLine,
  Bell,
  CreditCard,
  BadgeCheck,
  Trophy,
  Gift,
  Bitcoin,
  Lock,
  Users,
} from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ─── METADATA ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "ScamStop: AI Fraud Protection | MEOK Guardian",
  description:
    "Real-time message scanning powered by DistilBERT AI — protecting the most vulnerable from wire transfer fraud, impersonation scams, romance fraud, and more.",
  alternates: { canonical: "https://meok.ai/guardian/scam-stop" },
  openGraph: {
    title: "ScamStop: AI Fraud Protection | MEOK Guardian",
    description:
      "Real-time message scanning powered by DistilBERT AI — protecting the most vulnerable.",
    type: "website",
    url: "https://meok.ai/guardian/scam-stop",
    siteName: "MEOK.AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScamStop: AI Fraud Protection | MEOK Guardian",
    description:
      "Real-time message scanning powered by DistilBERT AI — protecting the most vulnerable.",
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────

const SCAM_TYPES = [
  {
    icon: CreditCard,
    color: "#f87171",
    title: "Wire Transfer / Bank Scams",
    description:
      "Fraudulent requests to transfer money, change bank details, or make urgent payments. MEOK detects bank-impersonation language and unexpected transfer requests.",
  },
  {
    icon: BadgeCheck,
    color: "#fb923c",
    title: "IRS / HMRC / Police Impersonation",
    description:
      "Authority figures threatening arrest, fines, or legal action unless immediate payment is made. MEOK flags official-sounding intimidation language instantly.",
  },
  {
    icon: Users,
    color: "#f472b6",
    title: "Romance Fraud Patterns",
    description:
      "Trust-building followed by investment pressure or money requests. Detected through relationship progression markers and financial ask patterns.",
  },
  {
    icon: Bitcoin,
    color: "#facc15",
    title: "Investment / Crypto Fraud",
    description:
      '"Guaranteed returns", unsolicited investment offers, and crypto scheme language. MEOK catches risk-free profit claims and high-pressure investment tactics.',
  },
  {
    icon: Trophy,
    color: "#4ade80",
    title: "Lottery / Inheritance Scams",
    description:
      "You've won a prize or inherited money you didn't know about — but must pay fees first. MEOK detects windfall-with-a-catch patterns and upfront fee requests.",
  },
  {
    icon: Gift,
    color: "#a78bfa",
    title: "Gift Card Scams",
    description:
      "No legitimate authority ever requests payment via gift cards. MEOK flags all gift card payment requests with an immediate HIGH severity alert.",
  },
];

const SEVERITY_LEVELS = [
  {
    level: "LOW",
    color: "#71717a",
    bg: "rgba(113,113,122,0.12)",
    border: "rgba(113,113,122,0.25)",
    action: "Monitor — message passes through with a silent log entry.",
  },
  {
    level: "MEDIUM",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.10)",
    border: "rgba(251,191,36,0.25)",
    action: "Warn user — gentle in-app alert explaining what was detected.",
  },
  {
    level: "HIGH",
    color: "#f97316",
    bg: "rgba(249,115,22,0.10)",
    border: "rgba(249,115,22,0.25)",
    action: "Warn + notify family — alert sent to user and trusted family circle.",
  },
  {
    level: "CRITICAL",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.10)",
    border: "rgba(239,68,68,0.25)",
    action: "Block + alert + emergency contact — message blocked, family alerted, emergency contact notified.",
  },
];

const STEPS = [
  {
    icon: Smartphone,
    number: "01",
    title: "You receive a suspicious message",
    body: "A phone call, email, or text arrives claiming to be from a bank, authority, or someone you trust.",
    color: "#c9a84c",
  },
  {
    icon: ScanLine,
    number: "02",
    title: "Guardian scans it instantly",
    body: "DistilBERT threat classification runs alongside pattern matching across 15 fraud indicator categories — before you read a single word.",
    color: "#60a5fa",
  },
  {
    icon: Bell,
    number: "03",
    title: "Alert sent to you and trusted family",
    body: "Severity is rated LOW, MEDIUM, HIGH, or CRITICAL. HIGH and CRITICAL alerts go to your family circle immediately.",
    color: "#4ade80",
  },
];

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function ScamStopPage() {
  return (
    <div
      className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[700px] h-[600px] top-[-10%] left-[-10%]" />
          <div
            className="blob-gold w-[500px] h-[400px] bottom-[10%] right-[-5%]"
            style={{ animationDelay: "3s" }}
          />
        </div>

        {/* Badge */}
        <div className="relative mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">
          <Shield size={12} />
          Guardian · ScamStop
        </div>

        {/* H1 */}
        <h1
          className="relative text-[3rem] sm:text-6xl lg:text-7xl font-black text-center leading-[1.02] tracking-tight max-w-4xl mb-6 text-white"
          style={{ fontWeight: 900 }}
        >
          Stop Scams{" "}
          <span className="text-gradient-gold">Before They Start</span>
        </h1>

        {/* Subtitle */}
        <p className="relative text-lg sm:text-xl text-white/60 text-center max-w-2xl leading-relaxed mb-10">
          Real-time message scanning powered by DistilBERT AI — protecting the
          most vulnerable.
        </p>

        {/* Stat pills */}
        <div className="relative flex flex-wrap justify-center gap-3 mb-10">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
            style={{
              background: "rgba(248,113,113,0.10)",
              border: "1px solid rgba(248,113,113,0.25)",
              color: "#fca5a5",
            }}
          >
            UK fraud costs £3.4 billion annually
          </span>
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
            style={{
              background: "rgba(251,191,36,0.10)",
              border: "1px solid rgba(251,191,36,0.25)",
              color: "#fbbf24",
            }}
          >
            Over-65s lose 3× more to phone/email scams
          </span>
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
            style={{
              background: "rgba(167,139,250,0.10)",
              border: "1px solid rgba(167,139,250,0.25)",
              color: "#a78bfa",
            }}
          >
            Neurodivergent people 50% more likely to be victims
          </span>
        </div>

        {/* CTAs */}
        <div className="relative flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/birth"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.45)] text-base"
          >
            Activate ScamStop
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <p className="relative mt-5 text-xs text-white/25 font-mono">
          Consent-first · Encrypted · 24/7 · Never sold
        </p>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 2. THE PROBLEM ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              The scale of the problem
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              The Problem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                stat: "£3.4bn",
                label: "Lost to fraud in the UK annually",
                color: "#f87171",
                detail:
                  "UK fraud now costs more per year than most medium-sized government departments. The overwhelming majority of victims never recover their losses.",
              },
              {
                stat: "3×",
                label: "More likely — over-65s targeted by phone/email scams",
                color: "#fbbf24",
                detail:
                  "Elderly people are disproportionately targeted because scammers know they are more trusting, less familiar with digital fraud tactics, and less likely to report.",
              },
              {
                stat: "50%",
                label: "More likely — neurodivergent people are victims",
                color: "#a78bfa",
                detail:
                  "The 9.5 million neurodivergent people in the UK often trust easily and struggle to detect social manipulation — traits scammers deliberately exploit.",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="premium-card rounded-2xl p-7 flex flex-col gap-3"
                style={{ borderTop: `2px solid ${item.color}30` }}
              >
                <p
                  className="text-5xl font-black leading-none"
                  style={{ color: item.color }}
                >
                  {item.stat}
                </p>
                <p className="text-sm font-bold text-white/80">{item.label}</p>
                <p className="text-xs text-white/45 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 3. HOW SCAMSTOP WORKS ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              Three-step protection
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              How ScamStop Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="premium-card rounded-2xl p-7 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-block text-xs font-black px-2.5 py-0.5 rounded"
                      style={{
                        background: `${step.color}18`,
                        color: step.color,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      {step.number}
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      <Icon size={17} style={{ color: step.color }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 4. WHAT WE DETECT ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              Threat library
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              What We Detect
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Six major fraud categories, each with dedicated detection models.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SCAM_TYPES.map((scam) => {
              const Icon = scam.icon;
              return (
                <div
                  key={scam.title}
                  className="premium-card rounded-2xl p-7 hover:border-white/15 transition-all"
                  style={{ borderLeft: `3px solid ${scam.color}50` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${scam.color}15`,
                      border: `1px solid ${scam.color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color: scam.color }} />
                  </div>
                  <h3
                    className="text-base font-black mb-2"
                    style={{ color: scam.color }}
                  >
                    {scam.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {scam.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 5. SEVERITY LEVELS ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              Response protocol
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              Severity Levels
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
                  {["Level", "Action Taken"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-6 py-4 font-bold text-white/30 uppercase tracking-widest"
                      style={{ fontSize: "10px" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SEVERITY_LEVELS.map((row, i) => (
                  <tr
                    key={row.level}
                    style={{
                      borderBottom:
                        i < SEVERITY_LEVELS.length - 1
                          ? "1px solid rgba(255,255,255,0.05)"
                          : "none",
                      background: row.bg,
                    }}
                  >
                    <td className="px-6 py-4 w-32">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black"
                        style={{ background: row.bg, color: row.color, border: `1px solid ${row.border}` }}
                      >
                        {row.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/65 leading-relaxed">
                      {row.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 6. PRIVACY FIRST ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 flex flex-col sm:flex-row gap-6"
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              <Lock size={22} color="#c9a84c" />
            </div>
            <div>
              <h3 className="text-base font-black text-white mb-3">
                Privacy First
              </h3>
              <ul className="space-y-2 text-sm text-white/60 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#c9a84c] flex-shrink-0">·</span>
                  Messages are scanned locally on-device. Nothing is stored on
                  MEOK servers.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c9a84c] flex-shrink-0">·</span>
                  Family members are only notified for HIGH or CRITICAL severity
                  events.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c9a84c] flex-shrink-0">·</span>
                  You control all notification settings, trusted contacts, and
                  alert thresholds.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c9a84c] flex-shrink-0">·</span>
                  ScamStop is consent-first. Protection only activates for
                  family members who have explicitly agreed.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 7. CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="blob-gold w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: 0.6 }}
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
            <Shield size={32} color="#c9a84c" strokeWidth={1.5} />
          </div>

          <h2
            className="text-4xl sm:text-5xl font-black leading-[0.95] mb-4 text-white"
            style={{ fontWeight: 900 }}
          >
            The people you love deserve{" "}
            <span className="text-gradient-gold">
              protection that works.
            </span>
          </h2>

          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            24/7 scam detection. DistilBERT AI. Family alerts. All running
            quietly — so your loved one never meets a scammer alone.
          </p>

          <Link
            href="/birth"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all text-sm hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
          >
            Activate ScamStop
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <p className="mt-6 text-xs text-white/20 font-mono">
            Consent-first · Encrypted · 24/7 monitoring · Never sold
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
