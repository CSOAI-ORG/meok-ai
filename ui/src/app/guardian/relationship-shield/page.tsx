import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  ArrowRight,
  Lock,
  Phone,
  Heart,
  AlertTriangle,
  Eye,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ─── METADATA ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Relationship Shield | MEOK Guardian",
  description:
    "AI-powered pattern detection for coercive control, manipulation, and toxic dynamics. MEOK Relationship Shield recognises the signs before they escalate.",
  alternates: { canonical: "https://meok.ai/guardian/relationship-shield" },
  openGraph: {
    title: "Relationship Shield | MEOK Guardian",
    description:
      "AI-powered pattern detection for coercive control, manipulation, and toxic dynamics.",
    type: "website",
    url: "https://meok.ai/guardian/relationship-shield",
    siteName: "MEOK.AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relationship Shield | MEOK Guardian",
    description:
      "AI-powered pattern detection for coercive control, manipulation, and toxic dynamics.",
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────

const DETECTION_CATEGORIES = [
  {
    icon: AlertTriangle,
    color: "#f87171",
    title: "Manipulation",
    examples: [
      '"If you loved me…"',
      '"You owe me"',
      '"You\'re worthless without me"',
      '"No one else would put up with you"',
    ],
    description:
      "Phrases designed to exploit emotional attachment, create debt, or undermine your sense of worth.",
  },
  {
    icon: MapPin,
    color: "#fb923c",
    title: "Isolation Tactics",
    examples: [
      '"Your friends are toxic"',
      '"Only I understand you"',
      '"Why do you need to see them?"',
      '"I thought it was just us"',
    ],
    description:
      "Systematic erosion of your support network — reframing relationships as threats or distractions.",
  },
  {
    icon: Eye,
    color: "#facc15",
    title: "Gaslighting",
    examples: [
      '"You\'re crazy"',
      '"That never happened"',
      '"You\'re too sensitive"',
      '"You\'re imagining things"',
    ],
    description:
      "Reality-denial and memory revision designed to make you question your own perception and sanity.",
  },
  {
    icon: Shield,
    color: "#a78bfa",
    title: "Coercion",
    examples: [
      '"I\'ll hurt myself if you leave"',
      '"You made me do this"',
      '"You\'ll regret this"',
      '"I know where you are"',
    ],
    description:
      "Threats, self-harm leverage, and blame-shifting used to control your behaviour and prevent you from leaving.",
  },
];

const RESOURCES = [
  {
    name: "Refuge",
    contact: "0808 2000 247",
    detail:
      "Free, 24/7. Run by Refuge for women and children experiencing domestic abuse. Calls are free from landlines and most mobiles.",
    href: "https://www.refuge.org.uk",
    color: "#f87171",
    icon: Phone,
  },
  {
    name: "National Domestic Abuse Helpline",
    contact: "nationaldahelpline.org.uk",
    detail:
      "Free and confidential 24/7 support. Specialist staff. Available by phone, email, and live chat.",
    href: "https://www.nationaldahelpline.org.uk",
    color: "#60a5fa",
    icon: Heart,
  },
  {
    name: "Men's Advice Line",
    contact: "0808 801 0327",
    detail:
      "Confidential support for men experiencing domestic abuse. Run by Respect. Monday to Friday, 10am–8pm.",
    href: "https://mensadviceline.org.uk",
    color: "#4ade80",
    icon: Shield,
  },
  {
    name: "GALOP",
    contact: "0800 999 5428",
    detail:
      "The UK's LGBTQ+ anti-violence charity. Specialist support for LGBT+ people experiencing domestic abuse, hate crime, or sexual violence.",
    href: "https://galop.org.uk",
    color: "#a78bfa",
    icon: Heart,
  },
];

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function RelationshipShieldPage() {
  return (
    <div
      className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[600px] h-[500px] top-[-10%] left-[-10%]" />
          <div
            className="blob-gold w-[400px] h-[350px] bottom-[10%] right-[-5%]"
            style={{ animationDelay: "3s" }}
          />
        </div>

        {/* Badge */}
        <div className="relative mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">
          <Shield size={12} />
          Guardian · Relationship Shield
        </div>

        {/* H1 */}
        <h1
          className="relative text-[3rem] sm:text-6xl lg:text-7xl font-black text-center leading-[1.02] tracking-tight max-w-4xl mb-6 text-white"
          style={{ fontWeight: 900 }}
        >
          Recognise the Signs{" "}
          <span className="text-gradient-gold">Before They Escalate</span>
        </h1>

        {/* Subtitle */}
        <p className="relative text-lg sm:text-xl text-white/60 text-center max-w-2xl leading-relaxed mb-10">
          AI-powered pattern detection for coercive control, manipulation, and
          toxic dynamics.
        </p>

        {/* CTAs */}
        <div className="relative flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/birth"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.45)] text-base"
          >
            Activate Guardian
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <p className="relative mt-5 text-xs text-white/25 font-mono">
          Detection happens locally · Nothing shared without your consent
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
                stat: "2.4M",
                label: "Adults experience domestic abuse annually in England and Wales",
                color: "#f87171",
                detail:
                  "That is roughly 1 in 20 adults every year. The majority of cases involve coercive control — sustained patterns of behaviour, not single incidents.",
              },
              {
                stat: "Criminal",
                label: "Coercive control is now a criminal offence in the UK",
                color: "#fbbf24",
                detail:
                  "The Serious Crime Act 2015 made coercive and controlling behaviour in intimate or family relationships a criminal offence carrying up to 5 years imprisonment.",
              },
              {
                stat: "Often subtle",
                label: "It starts slowly — one comment, one rewrite of reality at a time",
                color: "#a78bfa",
                detail:
                  "Coercive control rarely looks dramatic at first. It builds through repetition until the pattern becomes normalised. MEOK tracks what is hard to see from the inside.",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="premium-card rounded-2xl p-7 flex flex-col gap-3"
                style={{ borderTop: `2px solid ${item.color}30` }}
              >
                <p
                  className="text-4xl font-black leading-none"
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

      {/* ─── 3. WHAT WE DETECT ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              Detection categories
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              What Relationship Shield Detects
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Four categories of coercive behaviour, each with example phrases
              and dedicated detection models.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DETECTION_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="premium-card rounded-2xl p-7 hover:border-white/15 transition-all"
                  style={{ borderLeft: `3px solid ${cat.color}50` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${cat.color}15`,
                        border: `1px solid ${cat.color}30`,
                      }}
                    >
                      <Icon size={16} style={{ color: cat.color }} />
                    </div>
                    <h3
                      className="text-base font-black"
                      style={{ color: cat.color }}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-sm text-white/55 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <div>
                    <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-2">
                      Example phrases
                    </p>
                    <ul className="space-y-1">
                      {cat.examples.map((ex) => (
                        <li
                          key={ex}
                          className="text-xs text-white/45 font-mono flex gap-2"
                        >
                          <span style={{ color: cat.color }}>›</span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 4. HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              Detection process
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                step: "01",
                title: "Passive monitoring",
                body: "You choose which messages to share with Relationship Shield. MEOK analyses communication patterns passively — you are never required to share anything.",
                color: "#c9a84c",
              },
              {
                step: "02",
                title: "Pattern map builds over time",
                body: "MEOK builds a pattern map across conversations. Individual phrases may seem minor — it is the accumulation and repetition that reveals coercive patterns.",
                color: "#60a5fa",
              },
              {
                step: "03",
                title: "Discreet alert + resources",
                body: "When a threshold is reached, you receive a discreet alert with links to specialist resources including Refuge and the National Domestic Abuse Helpline.",
                color: "#4ade80",
              },
            ].map((item) => (
              <div key={item.step} className="premium-card rounded-2xl p-6 flex flex-col gap-3">
                <span
                  className="inline-block text-xs font-black px-2.5 py-0.5 rounded self-start"
                  style={{
                    background: `${item.color}18`,
                    color: item.color,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  {item.step}
                </span>
                <h3 className="text-base font-black text-white">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 5. ALWAYS PRIVATE ────────────────────────────────────────────── */}
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
                Always Private
              </h3>
              <ul className="space-y-2 text-sm text-white/60 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#c9a84c] flex-shrink-0">·</span>
                  Detection is local-first. Pattern scores never leave your
                  device.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c9a84c] flex-shrink-0">·</span>
                  There is no database of your relationships on MEOK servers.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c9a84c] flex-shrink-0">·</span>
                  Your companion holds space — not surveillance. MEOK is a
                  witness, not a warden.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c9a84c] flex-shrink-0">·</span>
                  Nothing is shared with family, third parties, or authorities
                  without your explicit consent.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 6. RESOURCES ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              You are not alone
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              Resources
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Free, confidential support available now — for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {RESOURCES.map((resource) => {
              const Icon = resource.icon;
              return (
                <a
                  key={resource.name}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-card rounded-2xl p-6 flex flex-col gap-3 hover:border-white/20 transition-all group"
                  style={{ borderTop: `2px solid ${resource.color}40` }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${resource.color}15`,
                      border: `1px solid ${resource.color}30`,
                    }}
                  >
                    <Icon size={16} style={{ color: resource.color }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white mb-1 group-hover:text-[#c9a84c] transition-colors">
                      {resource.name}
                    </h3>
                    <p
                      className="text-xs font-bold mb-2"
                      style={{ color: resource.color }}
                    >
                      {resource.contact}
                    </p>
                    <p className="text-xs text-white/45 leading-relaxed">
                      {resource.detail}
                    </p>
                  </div>
                  <ExternalLink
                    size={12}
                    className="text-white/20 group-hover:text-[#c9a84c] transition-colors mt-auto self-end"
                  />
                </a>
              );
            })}
          </div>

          <div
            className="rounded-2xl p-5 text-sm text-white/50 leading-relaxed text-center"
            style={{
              background: "rgba(248,113,113,0.05)",
              border: "1px solid rgba(248,113,113,0.15)",
            }}
          >
            <span className="text-[#fca5a5] font-bold">
              If you are in immediate danger, call 999.{" "}
            </span>
            If you cannot speak safely, dial 999 and press 5 or cough twice. The
            operator will understand.
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── 7. CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="blob-gold w-[600px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: 0.55 }}
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
            <Shield size={30} color="#c9a84c" strokeWidth={1.5} />
          </div>

          <h2
            className="text-4xl sm:text-5xl font-black leading-[0.95] mb-4 text-white"
            style={{ fontWeight: 900 }}
          >
            When something feels wrong,{" "}
            <span className="text-gradient-gold">trust that feeling.</span>
          </h2>

          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            MEOK Relationship Shield exists because coercive control is real, it
            is common, and it is hard to see from the inside.
          </p>

          <Link
            href="/birth"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all text-sm hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
          >
            Activate Guardian
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <p className="mt-6 text-xs text-white/20 font-mono">
            Private · Local detection · Your consent, always
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
