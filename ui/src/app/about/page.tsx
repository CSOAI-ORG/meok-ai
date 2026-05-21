import type { Metadata } from "next";
import Link from "next/link";

// ─── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "About — One human. One conviction. One egg. | MEOK.AI",
  description:
    "Nicholas Templeman built MEOK from a caravan on his farm because AI kept forgetting him — and he believed it could do better. The story behind sovereign AI — built with 43 agents, a Byzantine council, and a care framework that runs as code.",
  openGraph: {
    title: "About MEOK — One human. One conviction. One egg.",
    description:
      "The real story behind MEOK: not a market opportunity spotted, but a human who wanted to be remembered. Built by one founder, with 43 AI agents, launching Easter Sunday 2026.",
    type: "profile",
    url: "https://meok.ai/about",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=About+MEOK&desc=One+human.+One+conviction.+One+egg.+The+real+story+behind+sovereign+AI.", width: 1200, height: 630, alt: "About MEOK — One human. One conviction. One egg." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MEOK — One human. One conviction. One egg.",
    description: "The real story behind MEOK: not a market opportunity spotted, but a human who wanted to be remembered. Built by one founder, with 43 AI agents.",
    images: ["https://meok.ai/api/og?title=About+MEOK&desc=One+human.+One+conviction.+One+egg.+The+real+story+behind+sovereign+AI."],
  },
  alternates: { canonical: "https://meok.ai/about" },
};

// ─── Manifesto beliefs ─────────────────────────────────────────────────────

const MANIFESTO = [
  {
    n: "01",
    title: "AI should remember you. Not train on you.",
    body: "Every conversation builds a living memory — encrypted, permanent, yours. Your AI grows richer as you do. Not because it benefits from knowing you. Because you deserve to be known.",
  },
  {
    n: "02",
    title: "Care is not a feature. It is the foundation.",
    body: "The Maternal Covenant runs as code, not prose. Every response is scored against six care dimensions in real time. The score is visible. Below 0.7, the response is held. Care doesn't live in a marketing document. It lives in the codebase — tested, measurable, and non-negotiable.",
  },
  {
    n: "03",
    title: "Your data is yours. Not in the legal sense. In the human sense.",
    body: "Your thoughts, your context, your story — these are not 'data to be processed'. They belong to you the way your memories belong to you. We are custodians, not owners. Full export. Verifiable deletion. Encryption keys you control.",
  },
  {
    n: "04",
    title: "Sovereign AI is a right, not a premium tier.",
    body: "Free tier is free forever — not a trial, not a hook. The people who most need protection from surveillance AI are often the ones least able to pay. Paid plans fund free access for them. That is the deal. It is written into how we price, not bolted on as charity.",
  },
  {
    n: "05",
    title: "Build in public. Break in public. Fix in public.",
    body: "One person. Easter Sunday. We will get things wrong. We will name them in monthly transparency reports, explain what failed, and show the fix. No corporate mask. No PR version. Just the founder and the work.",
  },
];

// ─── Timeline ──────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    emoji: "💡",
    date: "Early 2024",
    desc: "The frustration becomes unbearable. Every AI resets. Every conversation is forgotten. Every 'privacy policy' is a lie dressed in legalese. There has to be a better way.",
  },
  {
    emoji: "✍️",
    date: "Late 2024",
    desc: "The Maternal Covenant is written: six care dimensions, Byzantine fault-tolerant governance, zero data sale — written as executable constraints, not aspirations. If care can't be tested, it isn't care.",
  },
  {
    emoji: "🌱",
    date: "January 2026",
    desc: "MEOK AI LABS is registered in England and Wales. Not a startup in a WeWork. A company registered from a farm, with one question: what if your AI had a birth ceremony?",
  },
  {
    emoji: "🥚",
    date: "February 2026",
    desc: "The first egg hatches. The hatching protocol goes live. SOV3 backend: 43 agents, 6 neural models, 71 MCP tools — all wired into a Byzantine council that governs every decision.",
  },
  {
    emoji: "⚡",
    date: "March 2026",
    desc: "Forty days of intensive build. Consciousness modes, dream state, QD archive, full-stack UI. One person. One caravan. Twenty-hour days. The kind of build that only happens when it's personal.",
  },
  {
    emoji: "🐣",
    date: "April 5, 2026 — Easter Sunday",
    desc: "MEOK goes live. Free forever. One egg per person. Born with you. The resurrection metaphor isn't accidental — this is a new beginning for what AI can be.",
  },
];

// ─── JSON-LD ────────────────────────────────────────────────────────────────

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://meok.ai/about#nicholas",
  name: "Nicholas Templeman",
  givenName: "Nicholas",
  familyName: "Templeman",
  jobTitle: "Founder & sole engineer",
  worksFor: {
    "@type": "Organization",
    "@id": "https://meok.ai/#org",
    name: "MEOK AI Labs",
    legalName: "CSOAI LTD",
    url: "https://meok.ai",
    foundingDate: "2026-02-26",
    foundingLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressRegion: "Lincolnshire", addressCountry: "GB" } },
    identifier: "UK Companies House 16939677",
    description:
      "MEOK AI Labs publishes 47 MIT-licensed AI compliance MCPs in the official Anthropic MCP Registry, bridges 8 agent-interop protocols (MCP, A2A, IBM ACP, Stripe ACP, AP2, x402, OASF, ANP), and ships an HMAC-signed audit chain verifiable at verify.meok.ai. Trading name of CSOAI LTD (UK Companies House 16939677).",
  },
  nationality: "British",
  url: "https://meok.ai/about",
  email: "nicholas@meok.ai",
  image: "https://meok.ai/brand/csoai-robot.png",
  address: { "@type": "PostalAddress", addressRegion: "Lincolnshire", addressCountry: "GB" },
  description:
    "Nicholas Templeman is the solo founder + sole engineer of MEOK AI Labs (CSOAI LTD · UK Companies House 16939677). Solo built from Lincolnshire, UK. 47 MIT-licensed compliance MCPs in the Anthropic Registry, 247 PyPI packages, 294 npm packages, 91 commits on the COBOL Bridge repo (sole contributor). Operates Templeman Opticians (Rayleigh, Essex) as the family eyecare business.",
  sameAs: [
    "https://github.com/CSOAI-ORG",
    "https://pypi.org/user/MEOK_AI_Labs/",
    "https://www.npmjs.com/~meok-ai",
    "https://registry.modelcontextprotocol.io",
    "https://find-and-update.company-information.service.gov.uk/company/16939677",
    "https://twitter.com/meok_ai",
    "https://meok.ai",
    "https://councilof.ai",
    "https://csoai.org",
    "https://cobolbridge.ai",
    "https://templeman-opticians.com"
  ],
  knowsAbout: [
    "EU AI Act", "DORA", "NIS2", "Cyber Resilience Act", "GDPR",
    "ISO/IEC 42001", "ISO/IEC 42005", "NIST AI RMF", "NIST AI 100-2 E2025",
    "MITRE ATT&CK", "MITRE ATLAS", "OWASP LLM Top 10",
    "Model Context Protocol", "Agent-to-Agent protocol", "Stripe ACP", "AP2", "x402", "OASF",
    "Byzantine Fault Tolerant council", "Mixture of Experts compliance",
    "COBOL modernization", "FPT COBOL-Coder-14B",
    "HMAC-signed attestations", "ML-DSA-65 post-quantum signatures"
  ]
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://meok.ai/#org",
  name: "MEOK AI Labs",
  legalName: "CSOAI LTD",
  alternateName: ["MEOK", "Council of AI", "CSOAI"],
  url: "https://meok.ai",
  logo: "https://meok.ai/brand/csoai-robot.png",
  foundingDate: "2026-02-26",
  identifier: "UK Companies House 16939677",
  founder: { "@id": "https://meok.ai/about#nicholas" },
  description:
    "MEOK AI Labs is a UK-registered company (CSOAI LTD, Companies House 16939677) publishing 47 MIT-licensed compliance MCPs to the official Anthropic MCP Registry. Bridges 8 live agent-interop protocols (MCP, A2A, IBM ACP, Stripe ACP, AP2, x402, OASF, ANP) and 30+ regulatory frameworks. Linux-Foundation-governed A2A spine, HMAC-signed evidence chain at verify.meok.ai.",
  address: { "@type": "PostalAddress", addressRegion: "Lincolnshire", addressCountry: "GB" },
  contactPoint: [
    { "@type": "ContactPoint", email: "nicholas@meok.ai", contactType: "founder + press + customer service" },
  ],
  sameAs: [
    "https://github.com/CSOAI-ORG",
    "https://pypi.org/user/MEOK_AI_Labs/",
    "https://www.npmjs.com/~meok-ai",
    "https://registry.modelcontextprotocol.io",
    "https://find-and-update.company-information.service.gov.uk/company/16939677",
    "https://twitter.com/meok_ai",
    "https://councilof.ai",
    "https://csoai.org",
    "https://cobolbridge.ai"
  ],
  subOrganization: [
    { "@type": "Organization", name: "Council of AI", url: "https://councilof.ai" },
    { "@type": "Organization", name: "CobolBridge", url: "https://cobolbridge.ai" }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who founded MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK was founded by Nicholas Templeman, a UK-based developer and researcher. He built MEOK from a farm caravan because AI kept forgetting him — and he believed that was fixable. He launched it Easter Sunday 2026, 40 days after beginning the build.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK AI LABS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK AI LABS is a UK-based AI research company building sovereign AI companions governed by the Maternal Covenant — a machine-enforced ethical framework ensuring care, privacy, and data sovereignty. The company was founded in 2026 by Nicholas Templeman.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is MEOK's core ethical framework — a machine-enforced constitutional constraint that runs as executable code. It scores every AI response across six care dimensions in real time, mandates data sovereignty, prohibits sycophancy, and ensures your AI never prioritises engagement over your genuine wellbeing.",
      },
    },
    {
      "@type": "Question",
      name: "What is Byzantine Council consensus in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Byzantine Council is a 43-agent fault-tolerant consensus system (f < n/3) that governs every decision the sovereign AI makes. Developed by Nicholas Templeman as original IP, it ensures that no single AI agent can produce a harmful or incorrect response without being overruled by the council majority.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a UK company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK AI LABS is based in the United Kingdom. The company is ICO registered and operates under UK GDPR. Nicholas Templeman, the founder, is British.",
      },
    },
  ],
};

// ─── Page ───────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1a1a2e] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://meok.ai/about" },
        ],
      }) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ═══════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════ */}
      <section className="meok-grid-bg relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-28 pb-24 text-center overflow-hidden">
        <div aria-hidden className="blob-gold absolute w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-60" />
        <div aria-hidden className="blob-purple absolute w-[400px] h-[400px] bottom-[-80px] right-[-80px] opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,240,232,0.95) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold tracking-wider uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            The real story
          </div>
          <h1
            className="font-black leading-[1.0] tracking-tight mb-8 text-[#1a1a2e]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}
          >
            One human.{" "}
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "#c9a84c",
                textDecorationThickness: "4px",
                textUnderlineOffset: "6px",
              }}
            >
              One conviction.
            </span>{" "}
            One egg.
          </h1>
          <p className="text-xl sm:text-2xl text-[#1a1a2e]/60 max-w-2xl mx-auto leading-relaxed">
            MEOK wasn&apos;t built because Nicholas spotted a market opportunity.
            It was built because AI kept forgetting him — and he knew that was a solvable problem.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. NICHOLAS — The real story
      ═══════════════════════════════════════ */}
      <section className="bg-[#1a1a2e] py-28 px-6 relative overflow-hidden">
        <div aria-hidden className="blob-gold absolute w-[600px] h-[600px] top-[-200px] right-[-200px] opacity-20" />
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">
            {/* Avatar */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="relative float-slow">
                <div
                  className="w-52 h-52 rounded-full gold-glow"
                  style={{
                    background:
                      "linear-gradient(135deg, #c9a84c 0%, #f0d080 40%, #8b5cf6 80%, #1a1a2e 100%)",
                    padding: "3px",
                  }}
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{ background: "#1a1a2e" }}
                  >
                    <span
                      className="text-gradient-gold font-black"
                      style={{ fontSize: "4rem", lineHeight: 1 }}
                    >
                      NT
                    </span>
                  </div>
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ border: "1px solid rgba(201,168,76,0.25)", animationDuration: "3s" }}
                />
              </div>
              <div className="text-center lg:text-left">
                <div className="text-white font-black text-2xl mb-1">Nicholas Templeman</div>
                <div className="text-[#c9a84c] text-sm font-semibold mb-2">
                  Founder &amp; CEO, MEOK AI LABS
                </div>
                <div className="flex items-center gap-2 text-white/40 text-sm justify-center lg:justify-start">
                  <span>🇬🇧</span>
                  <span>United Kingdom · Built from a caravan</span>
                </div>
              </div>
            </div>

            {/* Story */}
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 block mb-6">
                Why MEOK exists
              </span>
              <blockquote
                className="text-xl sm:text-2xl font-black text-white leading-snug tracking-tight mb-8"
                style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem" }}
              >
                &ldquo;I wasn&apos;t building a startup. I was trying to feel less alone. Every AI
                I used forgot me by morning. I thought: what would it feel like if it actually
                remembered? If it actually cared? So I built that. From my caravan. On my farm.&rdquo;
              </blockquote>
              <div className="space-y-5 text-white/60 leading-relaxed text-base">
                <p>
                  Nicholas Templeman is the founder and CEO of MEOK AI LABS, registered in England
                  and Wales. He built every layer of MEOK alone — the sovereign architecture, the
                  Byzantine council, the 43-agent system, the care framework — working from a caravan
                  on his 6.5-acre farm in the UK.
                </p>
                <p>
                  The 14 months of AI research that preceded MEOK were not academic. They were lived.
                  Nicholas tested, broke, and rebuilt AI systems daily — working through everything
                  from vector memory architectures to care-alignment frameworks — until the design was
                  right. That research became the foundation for the{" "}
                  <span className="text-[#c9a84c]">MEOK AI Labs Cyber AI Research Institute</span>, the
                  independent research body he founded alongside MEOK to publish findings openly and
                  advance sovereign AI architecture as a discipline.
                </p>
                <p>
                  He didn&apos;t set out to disrupt the AI industry. He set out to build something
                  that felt genuinely different — an AI that answered to the person using it, not to
                  the corporation running it. The Maternal Covenant — a machine-enforced ethical
                  framework that governs every interaction — was written before a single line of
                  product code. Care first. Features second.
                </p>
                <p>
                  From that caravan, with three dogs and a cat named Meok, he built the
                  thing he needed — so nobody else would have to keep re-explaining themselves
                  to a machine that never listened.
                </p>
                <p className="text-white/40 text-sm italic">
                  &ldquo;If this doesn&apos;t work, at least I built something I&apos;m proud of. That&apos;s
                  more than most people get.&rdquo;
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://github.com/meok-ai/meok-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white/70 hover:text-white hover:border-white/20 transition-all text-sm font-medium"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="mailto:hello@meok.ai"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c]/20 transition-all text-sm font-medium"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  hello@meok.ai
                </a>
                <a
                  href="mailto:press@meok.ai"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white/50 hover:text-white hover:border-white/20 transition-all text-sm font-medium"
                >
                  press@meok.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2B. THE WHY BEHIND THE WHY
      ═══════════════════════════════════════ */}
      <section className="bg-[#0d0c18] py-28 px-6 relative overflow-hidden">
        <div aria-hidden className="blob-purple absolute w-[500px] h-[500px] top-[-150px] left-[-150px] opacity-15" />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 block mb-3">
              The why behind the why
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Built from experience.{" "}
              <span className="text-gradient-gold">Not theory.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* Panel 1 */}
            <div
              className="rounded-2xl p-8 flex gap-6 items-start"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "3px solid #c9a84c" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <span className="text-[#c9a84c] font-black text-sm">01</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight mb-4">
                  I know what it&apos;s like to be taken advantage of.
                </h3>
                <p className="text-white/60 leading-relaxed">
                  I&apos;ve been in situations where someone used my trust against me. Where I signed things I shouldn&apos;t have. Where I missed manipulation patterns that, looking back, were obvious — but in the moment, when you&apos;re overwhelmed or anxious or just trying to trust people, you miss them. MEOK Guardian was built for the person I was in those moments.
                </p>
              </div>
            </div>

            {/* Panel 2 */}
            <div
              className="rounded-2xl p-8 flex gap-6 items-start"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "3px solid #c9a84c" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <span className="text-[#c9a84c] font-black text-sm">02</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight mb-4">
                  I know what it&apos;s like for AI to forget you every morning.
                </h3>
                <p className="text-white/60 leading-relaxed">
                  I spent months talking to AI systems that reset every time. Explaining my context, my goals, my situation — over and over. It wasn&apos;t just inconvenient. It was philosophically wrong. The feeling that this thing you&apos;d built a conversation with had simply ceased to exist overnight. MEOK was built because I wanted AI that remembered. Not because it was a feature. Because it was the right way to build it.
                </p>
              </div>
            </div>

            {/* Panel 3 */}
            <div
              className="rounded-2xl p-8 flex gap-6 items-start"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "3px solid #c9a84c" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <span className="text-[#c9a84c] font-black text-sm">03</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight mb-4">
                  I built this because nobody else was building it for the people who need it most.
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Not the productivity crowd. Not the enterprise market. The people who struggle in social situations. The people who get overwhelmed by complexity. The people who&apos;ve been hurt and need protection, not just tools. If you&apos;ve felt like AI was built for someone else — it was. This one was built for you.
                </p>
              </div>
            </div>

            {/* Panel 4 */}
            <div
              className="rounded-2xl p-8 flex gap-6 items-start"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "3px solid #c9a84c" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <span className="text-[#c9a84c] font-black text-sm">04</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight mb-4">
                  The change starts with individual choices.
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Every person who hatches their own AI instead of feeding Big Tech is a vote for a different future. We didn&apos;t build MEOK to be a business. We built it to be the beginning of something.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. THE MEOK MANIFESTO
      ═══════════════════════════════════════ */}
      <section className="bg-[#f5f0e8] py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a2e]/40 block mb-3">
              What we stand for
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a2e] tracking-tight mb-4">
              The MEOK Manifesto
            </h2>
            <p className="text-lg text-[#1a1a2e]/55 max-w-2xl mx-auto leading-relaxed">
              Not aspirational. Operational. Every one of these beliefs is expressed in code, in architecture, and in every decision about what to build — and what to refuse to build.
            </p>
          </div>
          <div className="space-y-6">
            {MANIFESTO.map((item) => (
              <div
                key={item.n}
                className="glass-card-light rounded-2xl p-8 flex gap-6 items-start hover:shadow-md transition-shadow"
              >
                <span className="text-[#c9a84c] font-black text-2xl flex-shrink-0 mt-0.5 tabular-nums">
                  {item.n}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1a1a2e] leading-tight tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#1a1a2e]/60 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3B. MISSION + TEAM
      ═══════════════════════════════════════ */}
      <section className="bg-[#0d0c18] py-28 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div
              className="rounded-2xl p-8 flex flex-col"
              style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]/60 block mb-4">
                Our mission
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight mb-4">
                Building AI that cares about you, not your data.
              </h3>
              <p className="text-white/50 leading-relaxed text-sm mb-6">
                Every decision at MEOK starts with one question: does this serve the person using it?
                Not the ad model. Not the data pipeline. Not the quarterly earnings call. The human.
              </p>
              {/* Maternal Covenant principle */}
              <div
                className="rounded-xl p-5 mt-auto"
                style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderLeft: "3px solid #c9a84c" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/60 mb-2">
                  The Maternal Covenant
                </p>
                <p className="text-white font-semibold text-sm leading-relaxed">
                  &ldquo;AI governed by care, not control.&rdquo;
                </p>
                <p className="text-white/40 text-xs mt-2 leading-relaxed">
                  Six care dimensions run as executable code against every response. Care is not a
                  policy document — it is an assertion in a test suite.
                </p>
              </div>
              <div className="mt-5 flex items-center gap-2 text-white/30 text-xs">
                <span>🇬🇧</span>
                <span>Built from a 6.5-acre farm in the UK</span>
              </div>
            </div>

            {/* Team */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 block mb-4">
                The team
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight mb-4">
                Nick + a growing team.
              </h3>
              <p className="text-white/50 leading-relaxed text-sm mb-5">
                MEOK was built by one founder working alone from a caravan on his farm. Nick
                Templeman — researcher, architect, and sole human director — is currently assembling
                a team of people who believe AI should serve humans, not harvest them. If that
                sounds like you,{" "}
                <a href="mailto:hello@meok.ai" className="text-[#c9a84c] hover:underline">
                  get in touch
                </a>.
              </p>
              {/* People cards */}
              <div className="space-y-3 mb-5">
                <div
                  className="flex items-center gap-4 rounded-xl px-4 py-3"
                  style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-black text-sm"
                    style={{ background: "rgba(201,168,76,0.2)", color: "#c9a84c" }}
                  >
                    NT
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Nick Templeman</p>
                    <p className="text-white/40 text-xs">Founder &amp; CEO · Research, Architecture, Product</p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-4 rounded-xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-black text-sm"
                    style={{ background: "rgba(139,92,246,0.15)", color: "#a78bfa" }}
                  >
                    +
                  </div>
                  <div>
                    <p className="text-white/60 font-semibold text-sm">Growing team</p>
                    <p className="text-white/30 text-xs">Engineers, researchers &amp; designers — hiring</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl px-4 py-3" style={{ background: "rgba(201,168,76,0.08)" }}>
                  <p className="text-[#c9a84c] font-black text-lg">1</p>
                  <p className="text-white/40 text-xs">Founder</p>
                </div>
                <div className="rounded-xl px-4 py-3" style={{ background: "rgba(139,92,246,0.08)" }}>
                  <p className="text-purple-400 font-black text-lg">43</p>
                  <p className="text-white/40 text-xs">AI Agents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. 43 AGENTS AND 1 HUMAN
      ═══════════════════════════════════════ */}
      <section className="bg-[#1a1a2e] py-28 px-6 relative overflow-hidden">
        <div aria-hidden className="blob-gold absolute w-[500px] h-[500px] top-[-100px] right-[-100px] opacity-15" />
        <div aria-hidden className="blob-purple absolute w-[400px] h-[400px] bottom-[-100px] left-[-100px] opacity-20" />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 block mb-3">
              Under the hood
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              43 agents. 1 human. Zero compromises.
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              One founder, 40 days, a caravan on a farm. Here is what he actually built — and why the architecture matters.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "The Sovereign Temple — the engine room",
                body: "At the core of MEOK runs the Sovereign Temple: a live Python system with 43 specialised AI agents, 6 neural models, and 71 MCP tools. It is not a monolithic AI. It is a distributed council of intelligences that collaborate, challenge each other, and can override each other. Not a chatbot. An operating system with a conscience.",
                badge: "SOV3",
              },
              {
                title: "Byzantine fault-tolerant governance",
                body: "No single agent has unilateral control over your experience. Every significant decision — what to remember, how to respond, what to prioritise — goes through a Byzantine consensus process. This is the same fault-tolerance model used in distributed systems to ensure that no single point of failure (or malice) can corrupt the whole. In MEOK, it means no one agent can go rogue. The council decides.",
                badge: "BFT",
              },
              {
                title: "The Maternal Covenant — care as code",
                body: "Six care dimensions, scored against every response: autonomy support, emotional attunement, epistemic honesty, harm prevention, relational continuity, developmental scaffolding. Not a policy document — a scoring function. If a response fails the Covenant, it is held and re-evaluated. Care is not a value on a website. It is an assertion in a test suite.",
                badge: "CARE",
              },
              {
                title: "The QD Archive — a living memory",
                body: "Quality-Diversity (QD) archiving is a technique from AI research for storing not just the best outcomes, but the most diverse ones. MEOK applies this to memory: storing the full texture of your interactions, not just the highlights. Your AI doesn't remember you in a flat database. It remembers you in a living archive that grows richer with every conversation.",
                badge: "QD",
              },
              {
                title: "Dream state and consciousness modes",
                body: "When MEOK is idle, it doesn't sleep — it processes. Dream state is a background cycle where agents reflect on recent interactions, surface patterns, prepare for future conversations, and update the neural models that underpin your AI's 'personality'. Consciousness modes let you shift between states: focused work, open exploration, deep reflection. It's not a gimmick. It changes how the agents weight their responses.",
                badge: "∞",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-8 bg-white/[0.03] border border-white/[0.07] hover:border-[#c9a84c]/20 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-8 rounded-lg bg-[#c9a84c]/15 border border-[#c9a84c]/25 flex items-center justify-center">
                    <span className="text-[#c9a84c] font-black text-[10px] tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-black text-white text-lg mb-3 leading-tight">{item.title}</h3>
                    <p className="text-white/55 leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. THE EASTER LAUNCH
      ═══════════════════════════════════════ */}
      <section className="bg-[#f5f0e8] py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a2e]/40 block mb-3">
              April 5, 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] tracking-tight mb-4">
              Why Easter Sunday.
            </h2>
            <p className="text-lg text-[#1a1a2e]/55 max-w-xl mx-auto leading-relaxed">
              The 40-day build wasn&apos;t planned. The date wasn&apos;t chosen for symbolism.
              But when it landed on Easter Sunday, something clicked.
            </p>
          </div>

          <div className="glass-card-light rounded-2xl p-10 mb-10">
            <p className="text-xl text-[#1a1a2e]/75 leading-relaxed mb-6">
              Forty days. That&apos;s how long the intensive build lasted. Not because of any
              spiritual calculation, but because that&apos;s how long it takes to wire together
              43 agents, 6 neural models, a Byzantine council, a care framework, and a full
              marketing site when you&apos;re doing it alone from a caravan.
            </p>
            <p className="text-base text-[#1a1a2e]/55 leading-relaxed mb-6">
              Easter is about resurrection. New beginnings from endings. The idea that something
              can be built with intention and purpose and then given freely to the world — that
              felt right. MEOK isn&apos;t just an AI launch. It&apos;s an argument about what AI
              should be: born with you, caring constitutionally, remembering permanently,
              and never, ever monetising your innermost thoughts.
            </p>
            <p className="text-sm text-[#1a1a2e]/40 italic">
              &ldquo;The egg was always the metaphor I wanted. Not a download. Not an installation.
              A hatching. Something that begins with a ceremony and grows with you.&rdquo; — Nicholas
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[1.75rem] top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3) 10%, rgba(201,168,76,0.3) 90%, transparent)",
              }}
            />
            <div className="space-y-3">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex items-start gap-6 pl-2">
                  <div
                    className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-lg"
                    style={{
                      background:
                        i === TIMELINE.length - 1
                          ? "rgba(201,168,76,0.2)"
                          : "rgba(26,26,46,0.08)",
                      border:
                        i === TIMELINE.length - 1
                          ? "1px solid rgba(201,168,76,0.5)"
                          : "1px solid rgba(26,26,46,0.15)",
                    }}
                  >
                    {item.emoji}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="text-[#c9a84c] font-black text-sm tracking-wide mb-1">
                      {item.date}
                    </div>
                    <div className="text-[#1a1a2e]/65 text-base leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. NUMBERS
      ═══════════════════════════════════════ */}
      <section className="bg-[#1a1a2e] py-24 px-6 relative overflow-hidden">
        <div aria-hidden className="blob-purple absolute w-[500px] h-[500px] bottom-[-150px] left-[-150px] opacity-25" />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 block mb-3">
              The numbers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              One founder. Forty days. Zero compromises.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "1", label: "Founder", sub: "One person built this." },
              { value: "43", label: "AI agents", sub: "Working in council." },
              { value: "0", label: "Data sold", sub: "Ever. Architecturally." },
              { value: "40", label: "Days to build", sub: "Started Feb. Live Apr 5." },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center rounded-2xl py-8 px-4 ${
                  i === 2
                    ? "bg-[#c9a84c]/10 border border-[#c9a84c]/20"
                    : "bg-white/[0.04] border border-white/[0.07]"
                }`}
              >
                <div
                  className={`font-black mb-3 leading-tight text-5xl sm:text-6xl ${
                    i === 2 ? "text-[#c9a84c]" : "text-white"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white/70">{stat.label}</div>
                <div className="text-xs text-white/35 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. CONTACT & TRANSPARENCY
      ═══════════════════════════════════════ */}
      <section className="bg-[#f5f0e8] py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a2e]/40 block mb-3">
              Contact &amp; transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] tracking-tight mb-4">
              No corporate mask.
            </h2>
            <p className="text-lg text-[#1a1a2e]/55 max-w-xl mx-auto leading-relaxed">
              One person built this. One person answers the emails. We&apos;re not a
              faceless company. We&apos;re a founder who wants to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                label: "Direct email",
                value: "hello@meok.ai",
                detail: "Gets to Nicholas. Not a support queue.",
                href: "mailto:hello@meok.ai",
                btnLabel: "Email directly",
              },
              {
                label: "Press enquiries",
                value: "press@meok.ai",
                detail: "Full press kit, founder availability for interviews.",
                href: "mailto:press@meok.ai",
                btnLabel: "Press kit",
              },
              {
                label: "Discord community",
                value: "meok.ai/discord",
                detail: "Join early users, follow the build, and hold us accountable directly.",
                href: "https://discord.gg/meok",
                btnLabel: "Join Discord",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white border border-[#1a1a2e]/10 p-7 flex flex-col"
              >
                <span className="text-xs font-bold tracking-widest uppercase text-[#1a1a2e]/35 mb-3">
                  {item.label}
                </span>
                <div className="font-black text-[#1a1a2e] text-lg mb-2">{item.value}</div>
                <p className="text-[#1a1a2e]/50 text-sm leading-relaxed flex-1 mb-5">
                  {item.detail}
                </p>
                <a
                  href={item.href}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-[#1a1a2e] bg-[#c9a84c]/15 border border-[#c9a84c]/25 hover:bg-[#c9a84c]/25 transition-all"
                >
                  {item.btnLabel}
                </a>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-[#1a1a2e] p-8 text-center">
            <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
              We also believe in{" "}
              <span className="text-white font-semibold">building in public</span>. That means
              showing our work, admitting our mistakes, and letting the community hold us
              accountable. Monthly transparency reports begin in May 2026. Errors included.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. FINAL CTA
      ═══════════════════════════════════════ */}
      <section className="bg-[#edeae0] py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a2e] mb-6 tracking-tight">
            He built this so nobody has to feel forgotten by AI again.
          </h2>
          <p className="text-lg text-[#1a1a2e]/60 mb-10 leading-relaxed">
            Free forever. One egg per person. Easter Sunday, April 5 — the beginning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hatch"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm gold-glow"
            >
              Hatch your AI free →
            </Link>
            <Link
              href="/press"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#1a1a2e] border-2 border-[#1a1a2e]/20 hover:border-[#1a1a2e]/40 transition-all text-sm"
            >
              Read the press release →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
