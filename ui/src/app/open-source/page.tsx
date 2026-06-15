import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Source | MEOK AI LABS",
  description:
    "MEOK AI LABS open-source components, FSL 1.1 licensing, plugin SDK, and how to contribute to sovereign AI.",
  alternates: { canonical: "https://meok.ai/open-source" },
};

// ── Structured data ──────────────────────────────────────────────────────────

const OS_BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Open Source", item: "https://meok.ai/open-source" },
  ],
};

const OS_SOFTWARE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "MEOK AI Labs open-source components",
  description: "MEOK core components (Character SDK, MCP Server Toolkit, Byzantine Council, MCP Mesh Network) under the Functional Source License 1.1, converting to Apache 2.0 after two years. Client libraries and plugin SDKs are MIT licensed.",
  url: "https://meok.ai/open-source",
  codeRepository: "https://github.com/meok-ai",
  license: "https://fsl.software/",
  programmingLanguage: "Python",
};

const OS_FAQ = [
  { q: "What licence does MEOK use?", a: "MEOK core components are released under the Functional Source License 1.1 (FSL 1.1). You can read, audit, fork, and contribute from day one. FSL 1.1 prohibits competing commercial products from using the same functionality for two years — after which all code automatically converts to Apache 2.0. Client libraries and plugin SDKs are released under the fully permissive MIT licence." },
  { q: "Which MEOK components are open source?", a: "FSL 1.1 covers the Character SDK, MCP Server Toolkit, SOV3 Byzantine Council, and the MCP Mesh Network. The MIT-licensed components include the MCP servers, client libraries, and plugin scaffolding. FSL components are open to read, audit, fork, and contribute, and convert to Apache 2.0 after two years; MIT components can be used in any project, commercial or personal, without restriction." },
  { q: "How does the MEOK plugin marketplace work?", a: "Community-built companions and integrations run inside fully isolated WASM modules via Extism, sandboxed at the runtime level so a rogue plugin cannot read your filesystem, phone home, or touch another plugin's memory. Submit your plugin via a GitHub pull request to the meok-ai organisation. Once merged, your companion or integration is live in the marketplace and earns a 70% creator revenue share on every subscription that uses it." },
  { q: "How do I contribute to MEOK?", a: "Four steps: (1) join the Discord and pick a working group; (2) pick a GitHub issue labelled 'bounty'; (3) fork, open a PR, and our maintainers review within 72 hours with all contributors credited in the changelog; (4) merged plugin contributions earn ongoing marketplace revenue share." },
];

const OS_FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: OS_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

// ── Data ─────────────────────────────────────────────────────────────────────

const FSL_COMPONENTS = [
  "Character SDK",
  "MCP Server Toolkit",
  "SOV3 Byzantine Council",
  "MCP Mesh Network",
];

const MIT_COMPONENTS = [
  "255 MCP servers",
  "Client libraries",
  "Plugin scaffolding",
];

const OPEN_SOURCE_CARDS = [
  {
    icon: "🧬",
    name: "Character SDK",
    desc: "Build your own companions. Define personality, voice, care style, and domain. Submit to the marketplace for a 70/30 revenue split — you keep 70%.",
    licence: "FSL 1.1",
  },
  {
    icon: "🔌",
    name: "MCP Server Toolkit",
    desc: "255 production-ready MCP servers. From AI safety to business automation — every server is MIT licensed, security audited, and ready for Claude, Cursor, and any MCP client.",
    licence: "FSL 1.1",
  },
  {
    icon: "⚖️",
    name: "Byzantine Council",
    desc: "The 33-agent fault-tolerant consensus system at the heart of SOV3. Open for academic use, research, and peer review.",
    licence: "FSL 1.1",
  },
];

const CONTRIBUTE_STEPS = [
  {
    step: "01",
    label: "Join the Discord",
    desc: "Introduce yourself, pick a working group — character builders, protocol engineers, or research.",
    href: "#discord",
    cta: "Join Discord →",
  },
  {
    step: "02",
    label: "Pick a bounty",
    desc: "Browse GitHub Issues labelled bounty. From docs fixes to new MCP connectors — every level welcome.",
    href: "https://github.com/meok-ai",
    cta: "View GitHub Issues →",
  },
  {
    step: "03",
    label: "Fork → PR → review",
    desc: "Standard GitHub flow. Our maintainers review within 72 hours. All contributors are credited in the changelog.",
    href: null,
    cta: null,
  },
  {
    step: "04",
    label: "Earn rev-share",
    desc: "Merged plugin contributions earn ongoing marketplace rev-share. Open-source work that pays.",
    href: null,
    cta: null,
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function OpenSourcePage() {
  return (
    <main className="min-h-screen bg-[#0d0c18] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(OS_BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(OS_SOFTWARE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(OS_FAQ_JSONLD) }} />
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4">
        {/* Background blob */}
        <div
          className="blob-gold"
          style={{ width: 600, height: 600, top: -200, left: "50%", transform: "translateX(-55%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-[#c9a84c] text-sm font-medium mb-8">
                Open Source
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Built in the open.{" "}
                <br />
                <span className="text-gradient-gold">Governed by covenant.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                MEOK&apos;s core tools are open-source. Not because we have to be — because{" "}
                <span className="text-white/80">sovereignty requires transparency</span>.
              </p>
            </div>

            {/* Right: CSOAI Robot */}
            <div className="w-full max-w-sm lg:max-w-md">
              <img
                src="/brand/csoai-robot.png"
                alt="CSOAI Robot Mascot — Corporate Sovereign Open AI"
                className="w-full h-auto rounded-2xl"
                style={{
                  filter: "drop-shadow(0 0 40px rgba(201,168,76,0.2))",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Licence philosophy ───────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="section-divider mb-16" />

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            What licence does MEOK use?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            MEOK core components are released under the{" "}
            <span className="text-[#c9a84c] font-semibold">
              Functional Source License 1.1 (FSL 1.1)
            </span>
            . You can read, audit, fork, and contribute from day one. FSL 1.1 prohibits competing
            commercial products from using the same functionality for two years — after which all
            code automatically converts to{" "}
            <span className="text-white/80 font-medium">Apache 2.0</span>. Client libraries and
            plugin SDKs are released under the fully permissive{" "}
            <span className="text-[#c9a84c] font-semibold">MIT licence</span>.
          </p>
          <p className="text-gray-500 text-base mb-12">
            This is the same model used by Sentry, HashiCorp, and Elastic. Open enough to build on.
            Fair enough to sustain.
          </p>

          {/* Two-col licence split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              className="premium-card p-6"
              style={{ border: "1px solid rgba(201,168,76,0.25)" }}
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "rgba(201,168,76,0.7)" }}
              >
                FSL 1.1 Components
              </p>
              <ul className="space-y-3">
                {FSL_COMPONENTS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-xs mt-5 leading-relaxed">
                Open to read, audit, fork, and contribute. Converts to Apache 2.0 after 2 years.
              </p>
            </div>

            <div
              className="premium-card p-6"
              style={{ border: "1px solid rgba(201,168,76,0.12)" }}
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "rgba(201,168,76,0.5)" }}
              >
                MIT Components
              </p>
              <ul className="space-y-3">
                {MIT_COMPONENTS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-400 text-sm">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "rgba(201,168,76,0.4)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-xs mt-5 leading-relaxed">
                Fully permissive. Use in any project, commercial or personal, without restriction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open source stats ──────────────────────────────────────────────── */}
      <section className="px-4 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="premium-card p-6 text-center">
              <p className="text-3xl font-bold text-[#c9a84c] mb-1">255</p>
              <p className="text-gray-400 text-sm">GitHub Repos</p>
            </div>
            <div className="premium-card p-6 text-center">
              <p className="text-3xl font-bold text-[#c9a84c] mb-1">39K+</p>
              <p className="text-gray-400 text-sm">Lines of MCP Code</p>
            </div>
            <div className="premium-card p-6 text-center">
              <p className="text-3xl font-bold text-[#c9a84c] mb-1">100%</p>
              <p className="text-gray-400 text-sm">Open Source</p>
            </div>
            <div className="premium-card p-6 text-center">
              <p className="text-3xl font-bold text-[#c9a84c] mb-1">MIT</p>
              <p className="text-gray-400 text-sm">Licensed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Which components are open source? ───────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-16" />

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Which MEOK components are open source?
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            The infrastructure of sovereign AI — readable, forkable, improvable by anyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {OPEN_SOURCE_CARDS.map((card) => (
              <div key={card.name} className="premium-card p-6">
                <div className="text-3xl mb-3" aria-hidden="true">
                  {card.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-base font-bold text-white">{card.name}</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] text-[rgba(201,168,76,0.8)] text-xs font-medium">
                    {card.licence}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plugin marketplace ───────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-16" />

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            How does the MEOK plugin marketplace work?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Community-built companions and integrations run inside fully isolated{" "}
            <span className="text-[#c9a84c] font-semibold">WASM modules</span> via{" "}
            <span className="text-white/80">Extism</span>. Sandboxed at the runtime level — no
            malware possible. Unlike VS Code extensions, a rogue plugin cannot read your filesystem,
            phone home, or touch another plugin&apos;s memory.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            <div
              className="premium-card p-6 text-center"
              style={{ border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <p className="text-3xl font-bold text-[#c9a84c] mb-2">70%</p>
              <p className="text-gray-400 text-sm">Creator revenue share</p>
            </div>
            <div className="premium-card p-6 text-center">
              <p className="text-3xl font-bold text-white mb-2">WASM</p>
              <p className="text-gray-400 text-sm">Sandboxed runtime — zero malware surface</p>
            </div>
            <div className="premium-card p-6 text-center">
              <p className="text-3xl font-bold text-white mb-2">GitHub</p>
              <p className="text-gray-400 text-sm">Submit via PR — reviewed within 72h</p>
            </div>
          </div>

          <p className="text-gray-500 text-base leading-relaxed">
            Submit your plugin via a GitHub pull request to the{" "}
            <Link
              href="https://github.com/meok-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a84c] hover:text-[#f0d080] transition-colors"
            >
              meok-ai organisation
            </Link>
            . Once merged, your companion or integration is live in the marketplace and earning
            revenue share on every subscription that uses it.
          </p>
        </div>
      </section>

      {/* ── MCP Marketplace CTA ─────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-16" />
          <div className="rounded-2xl p-8 border text-center" style={{ background: '#13121f', borderColor: 'rgba(167,139,250,0.25)' }}>
            <div className="text-4xl mb-4">🔌</div>
            <h2 className="text-2xl font-bold text-white mb-3">MCP Marketplace</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Explore 255 production-ready MCP servers. AI safety, business automation, healthcare, robotics, and more.
              Every server is MIT licensed, security audited, and ready for Claude, Cursor, and any MCP-compatible client.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://csoai-org.github.io/mcp-servers/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: '#A78BFA', color: '#0d0c18' }}
              >
                Browse 255 MCP Servers →
              </a>
              <a
                href="https://github.com/CSOAI-ORG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contribute ───────────────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="section-divider mb-16" />

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            How do I contribute to MEOK?
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Four steps from lurker to contributor with skin in the game.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CONTRIBUTE_STEPS.map((s) => (
              <div key={s.step} className="premium-card p-6">
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "rgba(201,168,76,0.6)" }}
                >
                  Step {s.step}
                </p>
                <h3 className="text-base font-bold text-white mb-2">{s.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                {s.href && s.cta && (
                  <Link
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a84c] hover:text-[#f0d080] transition-colors"
                  >
                    {s.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-16" />

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Frequently asked
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {OS_FAQ.map((f) => (
              <details key={f.q} className="premium-card p-6">
                <summary className="text-base font-bold text-white cursor-pointer">
                  {f.q}
                </summary>
                <p className="text-gray-400 text-sm leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── GitHub CTA ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 pb-28">
        <div
          className="blob-gold"
          style={{ width: 500, height: 500, bottom: -100, left: "50%", transform: "translateX(-50%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div
            className="premium-card p-8 md:p-12 text-center"
            style={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <div className="text-5xl mb-5" aria-hidden="true">
              ⭐
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Star us on GitHub
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Every star funds open-source sovereign AI. The more visible we are, the more
              contributors we attract, the faster the ecosystem grows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://github.com/meok-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c9a84c] text-[#0d0c18] font-semibold text-lg hover:bg-[#f0d080] transition-colors duration-200"
              >
                View meok-ai on GitHub
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/download"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[rgba(201,168,76,0.3)] text-[#c9a84c] font-semibold text-lg hover:bg-[rgba(201,168,76,0.08)] transition-colors duration-200"
              >
                Desktop OS →
              </Link>
            </div>
            <p className="text-gray-600 text-sm mt-6">
              The meok-ai GitHub organisation may not be publicly visible yet — we&apos;re staging
              the open-source release. Star this page and we&apos;ll notify you when repos go live.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
