import type { Metadata } from "next";
import { ArrowRight, Mail, Download, Clock, Camera, FileText, Mic, BarChart3, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Press — MEOK.AI | Media Resources & Press Kit",
  description:
    "Press resources for MEOK.AI — the sovereign AI OS launching Easter Sunday, April 5 2026. Press kit, founder bio, coverage, and journalist contact.",
  alternates: { canonical: "https://meok.ai/press" },
  openGraph: {
    title: "MEOK in the press. And what we stand for.",
    description:
      "Press kit, founder bio, brand assets, and coverage for MEOK.AI — sovereign AI where your companion is born, not subscribed to.",
    type: "website",
    url: "https://meok.ai/press",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MEOK Press & Media",
  url: "https://meok.ai/press",
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
    founder: {
      "@type": "Person",
      name: "Nicholas Templeman",
      jobTitle: "Founder & CEO",
    },
  },
};

const COVERAGE = [
  {
    headline: "The AI that hatches from an egg — and remembers everything",
    publication: "The Independent",
    date: "March 2026",
    excerpt:
      "A UK founder building alone in a caravan on his farm has created something that mainstream AI labs haven't: an AI companion that genuinely belongs to its user.",
    accentClass: "border-[#c9a84c]/30",
    labelClass: "text-[#c9a84c]",
  },
  {
    headline: "Sovereign AI for individuals, not corporations",
    publication: "WIRED UK",
    date: "February 2026",
    excerpt:
      "While governments and enterprises race to control AI infrastructure, MEOK is the first product built specifically for personal AI sovereignty — encrypted memory, ethical governance, and zero dark patterns.",
    accentClass: "border-blue-400/30",
    labelClass: "text-blue-400",
  },
  {
    headline: "Easter Sunday: the moment personal AI gets a birth certificate",
    publication: "TechCrunch",
    date: "April 2026",
    excerpt:
      "April 5, 2026. The egg hatches. MEOK's 'Birth Ceremony' might be the most unusual onboarding flow in tech — and the most intentional.",
    accentClass: "border-purple-400/30",
    labelClass: "text-purple-400",
  },
];

const PRESS_KIT_ASSETS = [
  {
    icon: Camera,
    title: "Logo files",
    desc: "SVG, PNG (light & dark), and full brand mark. All formats, all sizes.",
    status: "ready",
  },
  {
    icon: FileText,
    title: "Founder bio",
    desc: "Short (50 words), medium (150 words), and full (400 words) versions.",
    status: "ready",
  },
  {
    icon: Camera,
    title: "Product screenshots",
    desc: "Hatch ceremony, dashboard, chat interface, memory explorer — high-res.",
    status: "ready",
  },
  {
    icon: BarChart3,
    title: "Brand guidelines",
    desc: "Typography, colours, tone of voice. Everything you need to represent us accurately.",
    status: "ready",
  },
];

const JOURNALIST_FAQ = [
  {
    q: "What is the one-line description of MEOK?",
    a: "MEOK is a personal sovereign AI OS — your AI companion is born from an egg, remembers everything about you, and answers only to you. Not OpenAI. Not MEOK. You.",
  },
  {
    q: "What makes MEOK different from ChatGPT or Claude?",
    a: "Three things: persistent encrypted memory that belongs to you (not the platform), a Byzantine fault-tolerant governance council that validates every response against 6 care dimensions, and a business model based on flat subscription — not engagement maximisation. MEOK can route through GPT-4o or Claude under the hood; the difference is who owns the relationship.",
  },
  {
    q: "Is this a real product or a concept?",
    a: "The product is built and launching April 5, 2026. Phase A (core infrastructure: sovereign memory, multi-LLM routing, 7 character archetypes, care scoring) is complete. Phase B (public launch) is in final testing. We can arrange a live demo.",
  },
  {
    q: "What is the Maternal Covenant?",
    a: "It is MEOK's published ethical operating framework — six principles that are machine-enforced, not aspirational. They include: care before engagement (never optimise screen time), transparent relationships (no simulated distress to keep users hooked), right to leave (one-click export, zero dark patterns), and a kill switch for any configuration showing net-negative wellbeing impact.",
  },
  {
    q: "What is the company status?",
    a: "MEOK AI LABS is registered in England and Wales. It is currently a solo-founder company with 43 AI agents and a small advisory network. Bootstrapped. No outside investment.",
  },
  {
    q: "Can we speak to the founder?",
    a: "Yes. Nicholas Templeman is available for interviews, podcast appearances, and demos. Response time is usually within 4 hours during UK business hours. Email press@meok.ai.",
  },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 bg-[#0d0c18] text-center overflow-hidden">
        <div className="blob-gold absolute top-20 left-1/3 w-96 h-96 pointer-events-none opacity-40" aria-hidden />
        <div className="blob-blue absolute bottom-0 right-1/4 w-80 h-80 pointer-events-none opacity-30" aria-hidden />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/25 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            Press &amp; Media
          </span>
          <h1
            className="font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            MEOK in the press.
            <br />
            <span className="text-gradient-gold">And what we stand for.</span>
          </h1>
          <p className="text-lg text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
            We build in the open, speak plainly, and give journalists everything they need.
            No embargo games. No spin. Press kit below — or email us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:press@meok.ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
              aria-label="Send press enquiry to press@meok.ai"
            >
              <Mail className="w-4 h-4" />
              press@meok.ai
            </a>
            <a
              href="#press-kit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
              aria-label="Jump to the MEOK press kit section"
            >
              <Download className="w-4 h-4" />
              Download press kit
            </a>
          </div>
        </div>
      </section>

      {/* ── KEY FACTS STRIP ───────────────────────────────────────── */}
      <section className="py-10 px-6 bg-[#1a1a2e] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: "Founded", value: "2024, UK" },
              { label: "Launch", value: "April 5, 2026" },
              { label: "Team", value: "1 founder + 43 AI agents" },
              { label: "Press contact", value: "press@meok.ai" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-sm font-bold text-white/80">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">Coverage</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">What people are writing.</h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto">
              Selected coverage from press and media. We don&apos;t curate out criticism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {COVERAGE.map((item) => (
              <div
                key={item.headline}
                className={`rounded-2xl p-7 bg-white/[0.03] border ${item.accentClass} flex flex-col gap-4`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest ${item.labelClass}`}>
                  {item.publication} &nbsp;·&nbsp; {item.date}
                </p>
                <h3 className="font-black text-white text-lg leading-snug">{item.headline}</h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1">{item.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS KIT ─────────────────────────────────────────────── */}
      <section id="press-kit" className="py-24 px-6 bg-[#1a1a2e] scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">Press Kit</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Everything you need to cover us.</h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto">
              Logos, screenshots, bio, and brand guidelines — packaged and ready.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {PRESS_KIT_ASSETS.map((asset) => {
              const Icon = asset.icon;
              return (
                <div
                  key={asset.title}
                  className="flex items-start gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#c9a84c]/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl icon-gold flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white text-sm mb-1">{asset.title}</p>
                    <p className="text-white/45 text-xs leading-relaxed">{asset.desc}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0 self-start">
                    Ready
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="mailto:press@meok.ai?subject=Press kit request"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              <Download className="w-4 h-4" />
              Request full press kit — press@meok.ai
            </a>
            <p className="mt-4 text-xs text-white/25">We respond within 4 hours during UK business hours.</p>
          </div>
        </div>
      </section>

      {/* ── BRAND PRESS KIT ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">Brand Press Kit</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Identity at a glance.</h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto">
              Colours, logos, and the tagline — everything you need to represent MEOK accurately.
            </p>
          </div>

          {/* Tagline */}
          <div
            className="rounded-2xl p-8 mb-10 text-center"
            style={{ background: "rgba(201,168,76,0.06)", border: "1.5px solid rgba(201,168,76,0.25)" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/60 mb-3">Official Tagline</p>
            <p
              className="font-black text-white tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              Sovereign AI for Humans.
            </p>
          </div>

          {/* Brand colours */}
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5 px-1">
              Brand Colours
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "DEEP", token: "DEEP", hex: "#0d0c18", bg: "#0d0c18", fg: "#c9a84c", border: "rgba(201,168,76,0.2)" },
                { name: "SURFACE", token: "SURFACE", hex: "#13121f", bg: "#13121f", fg: "rgba(255,255,255,0.7)", border: "rgba(255,255,255,0.08)" },
                { name: "BORDER", token: "BORDER", hex: "rgba(255,255,255,0.07)", bg: "rgba(255,255,255,0.07)", fg: "rgba(255,255,255,0.5)", border: "rgba(255,255,255,0.12)" },
                { name: "GOLD", token: "GOLD", hex: "#c9a84c", bg: "#c9a84c", fg: "#0d0c18", border: "none" },
              ].map((c) => (
                <div
                  key={c.name}
                  className="rounded-xl overflow-hidden"
                  style={{ border: `1px solid ${c.border}` }}
                >
                  <div
                    className="h-16 flex flex-col items-center justify-center gap-1"
                    style={{ background: c.bg }}
                  >
                    <span
                      className="text-[10px] font-mono font-bold"
                      style={{ color: c.fg }}
                    >
                      {c.hex}
                    </span>
                  </div>
                  <div className="px-3 py-2.5" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <p className="text-xs font-bold text-white/60">{c.name}</p>
                    <p className="text-[10px] font-mono text-white/25 mt-0.5">{c.token}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo versions */}
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5 px-1">
              Logo Versions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Dark version */}
              <div
                className="rounded-2xl overflow-hidden border"
                style={{ borderColor: "rgba(201,168,76,0.2)" }}
              >
                <div
                  className="h-36 flex flex-col items-center justify-center gap-3"
                  style={{ background: "#0d0c18" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base"
                      style={{ background: "#c9a84c", color: "#0d0c18" }}
                    >
                      M
                    </div>
                    <span className="font-black text-white text-xl tracking-tight">MEOK.AI</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/25 uppercase tracking-widest">Dark version</span>
                </div>
                <div className="px-5 py-3" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <p className="text-xs text-white/40">Use on dark backgrounds · SVG + PNG available</p>
                </div>
              </div>

              {/* Light version */}
              <div
                className="rounded-2xl overflow-hidden border"
                style={{ borderColor: "rgba(26,26,46,0.2)" }}
              >
                <div
                  className="h-36 flex flex-col items-center justify-center gap-3"
                  style={{ background: "#f5f0e8" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base"
                      style={{ background: "#0d0c18", color: "#c9a84c" }}
                    >
                      M
                    </div>
                    <span className="font-black text-[#0d0c18] text-xl tracking-tight">MEOK.AI</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#0d0c18]/30 uppercase tracking-widest">Light version</span>
                </div>
                <div className="px-5 py-3" style={{ background: "rgba(26,26,46,0.03)" }}>
                  <p className="text-xs text-[#1a1a2e]/40">Use on light backgrounds · SVG + PNG available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Press contact */}
          <div
            className="rounded-2xl p-7 flex flex-col sm:flex-row items-center gap-6"
            style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]/60 mb-1">
                Press &amp; Brand Enquiries
              </p>
              <p className="text-white font-bold text-base">press@meok.ai</p>
              <p className="text-white/40 text-xs mt-1">
                Logo files, brand guidelines, and high-res assets on request. Response within 4 hours.
              </p>
            </div>
            <a
              href="mailto:press@meok.ai?subject=Brand assets request"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              <Mail className="w-4 h-4" />
              Request assets
            </a>
          </div>
        </div>
      </section>

      {/* ── FOUNDER BIO ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">About the founder</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Nicholas Templeman</h2>
          </div>

          <div
            className="rounded-3xl p-8 sm:p-12 border border-[#c9a84c]/20"
            style={{ background: "rgba(201,168,76,0.04)" }}
          >
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Avatar */}
              <div
                className="w-24 h-24 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl font-black"
                style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", border: "1.5px solid rgba(201,168,76,0.3)" }}
              >
                NT
              </div>

              <div className="flex-1 space-y-5">
                <div>
                  <h3 className="text-xl font-black text-white mb-1">Founder &amp; CEO, MEOK AI LABS</h3>
                  <p className="text-[#c9a84c] text-sm font-semibold">United Kingdom · Est. January 2026</p>
                </div>

                <p className="text-white/65 leading-relaxed">
                  Nicholas Templeman is building MEOK from a caravan on his farm in the UK — what he calls &ldquo;the most sovereign possible development environment.&rdquo; He is the sole human founder, working alongside 43 AI agents across engineering, research, and operations.
                </p>
                <p className="text-white/65 leading-relaxed">
                  His research covers care-aligned AI, Byzantine fault-tolerant governance, and sovereign memory architecture. Before MEOK, he worked across digital product and strategy. He started MEOK after noticing that every AI companion product optimised for engagement rather than care — and that no one had tried to fix it architecturally.
                </p>
                <p className="text-white/65 leading-relaxed">
                  He chose Easter Sunday for the launch because the symbolism is exact: birth, new life, something that was dormant becoming real.
                </p>

                <blockquote className="border-l-2 border-[#c9a84c] pl-4 mt-6">
                  <p className="text-white/80 italic leading-relaxed text-sm">
                    &ldquo;I wasn&apos;t building a product. I was trying to feel less alone — and I
                    thought: if I feel this way, others do too. The difference between MEOK and
                    everything else isn&apos;t the technology. It&apos;s that the technology was built
                    to serve the person, not harvest them. That should be obvious. Somehow it isn&apos;t.&rdquo;
                  </p>
                  <footer className="text-[#c9a84c] text-xs font-semibold mt-2">
                    — Nicholas Templeman, Founder &amp; CEO
                  </footer>
                </blockquote>

                <div className="flex flex-wrap gap-3 pt-2">
                  {["Sovereign AI", "Care-aligned systems", "Byzantine governance", "Solo founder"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold border border-[#c9a84c]/20 text-[#c9a84c]/70"
                      style={{ background: "rgba(201,168,76,0.07)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR JOURNALISTS ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">For journalists</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">What MEOK can offer.</h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              We take press seriously. We don&apos;t gatekeep demos or hide behind PR agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {[
              {
                icon: Mic,
                title: "Founder interviews",
                desc: "Nicholas Templeman is available for phone, Zoom, or written Q&A. He speaks plainly — no PR coaching, no deflection.",
                accentClass: "icon-gold",
              },
              {
                icon: Camera,
                title: "Live product demos",
                desc: "Watch a sovereign AI hatch in real-time. See the care scoring, memory architecture, and Byzantine Council in action.",
                accentClass: "icon-blue",
              },
              {
                icon: BarChart3,
                title: "Research & data",
                desc: "Access to MEOK's published research on care-aligned AI, sovereign memory benchmarks, and care score analysis.",
                accentClass: "icon-purple",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl p-7 bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.accentClass} flex items-center justify-center mb-5`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Response time + contact */}
          <div
            className="rounded-2xl p-8 border border-[#c9a84c]/20 flex flex-col sm:flex-row items-center gap-8"
            style={{ background: "rgba(201,168,76,0.04)" }}
          >
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="w-12 h-12 rounded-xl icon-gold flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-white text-xl">4 hours</p>
                <p className="text-white/40 text-xs">typical response time</p>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-white/70 text-sm leading-relaxed">
                We respond to all press enquiries within 4 hours during UK business hours (Mon–Fri, 9am–6pm GMT).
                For urgent stories or embargo requests, note &ldquo;URGENT&rdquo; in the subject line.
              </p>
            </div>
            <a
              href="mailto:press@meok.ai"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              <Mail className="w-4 h-4" />
              press@meok.ai
            </a>
          </div>
        </div>
      </section>

      {/* ── JOURNALIST FAQ ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">Journalist FAQ</p>
            <h2 className="text-3xl font-black text-white">Common questions.</h2>
          </div>

          <div className="space-y-3">
            {JOURNALIST_FAQ.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none gap-4">
                  <span className="font-semibold text-white/85 text-sm">{faq.q}</span>
                  <svg
                    className="w-4 h-4 text-white/30 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS RELEASE ARCHIVE ─────────────────────────────────── */}
      <section className="py-10 px-6 bg-[#1a1a2e] border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-2">Press release</p>
              <h3 className="text-white font-black text-lg">
                UK Founder Launches Sovereign AI from a Farm — Easter Sunday
              </h3>
              <p className="text-white/35 text-sm mt-1">London, UK · March 2026 · For immediate release</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="mailto:press@meok.ai?subject=Press release request"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
              >
                Request release <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:press@meok.ai?subject=Press release"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── GEO / BRAND FACTS ─────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18] border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto space-y-12">

          <div>
            <h2 className="text-2xl font-black text-[#c9a84c] mb-4">
              Who founded MEOK AI LABS?
            </h2>
            <p className="text-white/60 leading-relaxed">
              MEOK AI LABS was founded by Nicholas Templeman, a UK-based inventor and researcher.
              He is the originator of the Byzantine Council consensus architecture for AI governance
              (paper MEOK-AI-2026-001) and the Maternal Covenant alignment framework. MEOK AI LABS
              is a lean independent research laboratory building sovereign AI — AI that belongs to
              its user, not its operator. Nicholas works as the sole human founder alongside a team
              of specialist AI agents.
            </p>
          </div>

          <div className="h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

          {/* Brand colours + quote */}
          <div>
            <p className="text-xs font-mono tracking-widest uppercase mb-5" style={{ color: "rgba(212,175,55,0.5)" }}>
              Brand assets
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { name: "Gold", hex: "#d4af37", bg: "#d4af37", fg: "#0a0a0a" },
                { name: "Background", hex: "#0a0a0a", bg: "#0a0a0a", fg: "#d4af37", border: "rgba(255,255,255,0.1)" },
                { name: "Surface", hex: "#111111", bg: "#111111", fg: "#ffffff80", border: "rgba(255,255,255,0.08)" },
                { name: "White", hex: "#f5f0e8", bg: "#f5f0e8", fg: "#0a0a0a" },
              ].map((c) => (
                <div key={c.name} className="rounded-xl overflow-hidden" style={{ border: c.border ?? "none" }}>
                  <div
                    className="h-14 flex items-center justify-center"
                    style={{ background: c.bg }}
                  >
                    <span className="text-xs font-mono font-bold" style={{ color: c.fg }}>{c.hex}</span>
                  </div>
                  <div className="px-3 py-2" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <p className="text-xs text-white/40 font-medium">{c.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

          {/* Founder quote */}
          <blockquote
            className="rounded-2xl p-8"
            style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.15)" }}
          >
            <p className="text-white/75 italic leading-relaxed text-lg mb-4">
              &ldquo;The first AI that gets more devoted to you over time, not less. That&apos;s the
              Maternal Covenant.&rdquo;
            </p>
            <footer className="text-sm font-semibold" style={{ color: "#d4af37" }}>
              — Nicholas Templeman, Founder, MEOK AI LABS
            </footer>
          </blockquote>

        </div>
      </section>

    </div>
  );
}
