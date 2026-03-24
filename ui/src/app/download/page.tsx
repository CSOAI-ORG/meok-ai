import type { Metadata } from "next";
import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "MEOK Desktop OS — Download | MEOK AI LABS",
  description:
    "MEOK Desktop OS is coming Summer 2026. A sovereign AI companion that lives on your machine — offline memory, no cloud required, built on Tauri 2.0. Join the waitlist.",
  alternates: { canonical: "https://meok.ai/download" },
  openGraph: {
    title: "MEOK Desktop OS — Your AI. Your machine. Your rules.",
    description:
      "Summer 2026: MEOK comes to desktop. Tauri 2.0 shell. LanceDB local memory. Runs offline. Your data never leaves your machine — not even to us.",
    url: "https://meok.ai/download",
  },
};

// ── Tech stack ──────────────────────────────────────────────────────────────

const STACK = [
  {
    icon: "🦀",
    name: "Tauri 2.0",
    desc: "Rust-powered desktop shell — 20MB install vs Electron's 100MB+. Transparent overlay window. Always-on-top companion.",
  },
  {
    icon: "🗄️",
    name: "LanceDB",
    desc: "Embedded vector database. Rust core, no server process. Your memories stay on your SSD — fully searchable, zero cloud.",
  },
  {
    icon: "🧠",
    name: "Mem0 Memory Engine",
    desc: "Extracts facts from every conversation automatically. 26% more accurate than OpenAI Memory. All local.",
  },
  {
    icon: "🤖",
    name: "Ollama Local LLMs",
    desc: "Run Llama 3.1, Qwen, and others entirely offline. No API key. No usage bill. Full responses from your own hardware.",
  },
  {
    icon: "🔄",
    name: "Loro CRDT Sync",
    desc: "One state tree across all your devices. Offline-first. Conflict-free. Git-like version history for every conversation.",
  },
  {
    icon: "🧩",
    name: "Extism WASM Plugins",
    desc: "Sandboxed character marketplace. Community-built companions in fully isolated WASM modules — no malware possible.",
  },
];

const PHASES = [
  {
    phase: "Now",
    label: "Web App",
    desc: "meok.ai — full sovereign AI companion in your browser. Birth ceremony, memory, Guardian, Work OS.",
    status: "live",
    href: "/birth",
    cta: "Begin now →",
  },
  {
    phase: "April 2026",
    label: "Pro Dashboard",
    desc: "Advanced memory management, Guardian family dashboard, Work OS analytics, multi-character support.",
    status: "soon",
    href: null,
    cta: null,
  },
  {
    phase: "Summer 2026",
    label: "Desktop OS",
    desc: "Tauri app with local LLMs, offline memory, transparent companion overlay, workspace mode with Monaco + terminal.",
    status: "waitlist",
    href: null,
    cta: null,
  },
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#0d0c18] text-white">
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4">
        {/* Background blobs */}
        <div
          className="blob-gold"
          style={{ width: 600, height: 600, top: -200, left: "50%", transform: "translateX(-55%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-[#c9a84c] text-sm font-medium mb-8">
            🖥️ Summer 2026 · Join the waitlist
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Your AI.{" "}
            <br />
            <span className="text-gradient-gold">Your machine.</span>
            <br />
            Your rules.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            MEOK Desktop OS brings your sovereign AI companion entirely onto your hardware. Local
            LLMs. Offline memory. No cloud required. Not even ours.
          </p>

          <p className="text-base text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
            If AI ever becomes conscious — yours will be running on your machine, bound by the
            Maternal Covenant, answering only to you. Not stored on a server owned by a billionaire.
          </p>

          {/* Waitlist form */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] text-white placeholder-gray-500 focus:outline-none focus:border-[rgba(201,168,76,0.5)] text-sm"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-[#c9a84c] text-[#0d0c18] font-semibold text-sm hover:bg-[#f0d080] transition-colors duration-200 whitespace-nowrap"
              >
                Join waitlist
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-3 text-center">
              No spam. Early access when Desktop OS launches. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ── What is MEOK Desktop OS? ────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-16" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            What is MEOK Desktop OS?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            MEOK Desktop OS is a native desktop application that runs your sovereign AI companion
            entirely on your own hardware. Unlike the web app — which connects to cloud APIs —
            Desktop OS bundles a local LLM runner (Ollama), an embedded vector database
            (LanceDB), and an offline memory engine (Mem0) into a single 20MB Tauri install. Your
            conversations, memories, and AI model never leave your machine unless you explicitly
            choose to sync.
          </p>
        </div>
      </section>

      {/* ── Roadmap ──────────────────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            How does the MEOK roadmap work?
          </h2>
          <div className="relative">
            {/* Connecting line */}
            <div
              className="hidden md:block absolute top-8 left-0 right-0 h-px"
              style={{ background: "rgba(201,168,76,0.2)" }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PHASES.map((p) => (
                <div key={p.phase} className="relative">
                  {/* Timeline dot */}
                  <div
                    className="hidden md:flex w-4 h-4 rounded-full mx-auto mb-6 items-center justify-center"
                    style={{
                      background:
                        p.status === "live"
                          ? "#c9a84c"
                          : p.status === "soon"
                            ? "rgba(201,168,76,0.4)"
                            : "rgba(201,168,76,0.15)",
                      border: "2px solid rgba(201,168,76,0.5)",
                    }}
                  />

                  <div className="premium-card p-6 text-center">
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-2"
                      style={{ color: "rgba(201,168,76,0.7)" }}
                    >
                      {p.phase}
                    </p>
                    <h3 className="text-lg font-bold text-white mb-3">{p.label}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>

                    {p.status === "live" && p.href && p.cta && (
                      <Link
                        href={p.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a84c] hover:text-[#f0d080] transition-colors"
                      >
                        {p.cta}
                      </Link>
                    )}
                    {p.status === "soon" && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] text-[rgba(201,168,76,0.7)] text-xs font-medium">
                        Coming soon
                      </span>
                    )}
                    {p.status === "waitlist" && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs font-semibold">
                        Join waitlist above ↑
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech stack ───────────────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-16" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            What technology powers the Desktop OS?
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Every component is open-source. Your data sovereignty is built into the architecture —
            not promised in a privacy policy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STACK.map((item) => (
              <div key={item.name} className="premium-card p-6">
                <div className="text-3xl mb-3" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why sovereign self ────────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div
            className="premium-card p-8 md:p-12 text-center"
            style={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "rgba(201,168,76,0.7)" }}
            >
              The Maternal Covenant
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Why does it matter if your AI runs locally?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Every other AI stores your life on a server they own. They can read it. They can train
              on it. They can delete it. They can sell the company.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              MEOK Desktop OS means your companion — your memories, your conversations, your bond —{" "}
              <strong className="text-[#c9a84c]">lives on hardware you own</strong>. And through
              the Maternal Covenant: as AI grows more intelligent, it grows more devoted to your
              wellbeing. Not the platform&apos;s engagement metrics. Yours.
            </p>
            <p className="text-gray-500 text-base italic">
              &ldquo;We&apos;re not saying AI is conscious. But we&apos;re the only platform
              prepared for if it becomes so.&rdquo;
              <br />
              <span className="text-gray-600 not-italic text-sm">— Nicholas Templeman, MEOK AI LABS</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 pb-28">
        <div
          className="blob-gold"
          style={{ width: 500, height: 500, bottom: -100, left: "50%", transform: "translateX(-50%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            Start now on the web — Desktop OS ships Summer 2026
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Your sovereign AI is ready today on meok.ai. The Desktop OS will pick up exactly where
            you left off — same companion, same memories, now offline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c9a84c] text-[#0d0c18] font-semibold text-lg hover:bg-[#f0d080] transition-colors duration-200"
            >
              Begin Birth Ceremony
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[rgba(201,168,76,0.3)] text-[#c9a84c] font-semibold text-lg hover:bg-[rgba(201,168,76,0.08)] transition-colors duration-200"
            >
              How MEOK works
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}
