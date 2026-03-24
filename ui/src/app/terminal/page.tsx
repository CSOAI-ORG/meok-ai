"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Terminal,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Code2,
  Keyboard,
  Zap,
} from "lucide-react";

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MEOK Terminal",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS, Linux, Windows",
  description:
    "CLI for your sovereign AI. meok remember, meok brief, meok search, meok export — control your AI from the terminal.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    description: "Free with MEOK account",
  },
};

// ── Terminal commands data ─────────────────────────────────────────────────────

const COMMANDS = [
  {
    cmd: 'meok remember "today I launched the new connect page"',
    output: "✓  Remembered. Stored in semantic memory with timestamp.",
    desc: "Capture a memory instantly from any terminal session.",
    icon: "💾",
  },
  {
    cmd: "meok brief",
    output:
      "◆  Good morning, Nick. You have 3 tasks from yesterday, a call at 11am,\n   and your sleep score was 82. Your AI suggests: clear email first.",
    desc: "Get your personalised morning brief — calendar, tasks, health.",
    icon: "☀️",
  },
  {
    cmd: 'meok search "what did I say about fundraising"',
    output:
      '→  Found 4 memories (March 2026)\n   "Decided to bootstrap for now — VCs want too much equity"\n   "Met James at seedcamp — interesting but wrong timing"\n   ...',
    desc: "Semantic search across your entire memory vault.",
    icon: "🔍",
  },
  {
    cmd: "meok character --switch aria",
    output:
      "✓  Switched to Aria (Mystic archetype)\n   Your previous character state has been saved.",
    desc: "Switch between your AI characters mid-session.",
    icon: "🎭",
  },
  {
    cmd: "meok export",
    output:
      "◆  Exporting sovereign vault...\n   ✓  1,284 memories · 3 characters · 47 journal entries\n   Saved to ~/meok-export-2026-03-21.zip (encrypted, AES-256)",
    desc: "Export your entire vault — memories, characters, journals — in a portable encrypted archive. Your data, always.",
    icon: "📦",
  },
  {
    cmd: "meok status",
    output:
      "◆  MEOK v2.4.1 — sovereign vault: online\n   Memory: 1,284 entries  · Characters: 3  · Care score: 91\n   Last sync: 2 minutes ago",
    desc: "Check your AI system status, memory count, and care score.",
    icon: "📊",
  },
];

// ── Terminal mockup interactions ───────────────────────────────────────────────

const MOCK_SESSION = [
  { type: "prompt", text: "~ meok brief" },
  {
    type: "output",
    text: "◆  Good morning, Nick. 9:04am · Tuesday · London",
    color: "#4ade80",
  },
  { type: "output", text: "   📅  3 tasks open · Call with James at 11am", color: "#a0a0b8" },
  { type: "output", text: "   💤  Sleep score: 82 · HRV normal", color: "#a0a0b8" },
  { type: "output", text: "   ✉️   4 unread emails (1 flagged as important)", color: "#a0a0b8" },
  { type: "output", text: "   ◆  Aria suggests: clear your inbox before the call.", color: "#c9a84c" },
  { type: "spacer", text: "" },
  { type: "prompt", text: '~ meok remember "decided to go open-source on the vault"' },
  { type: "output", text: "✓  Remembered — stored in episodic memory.", color: "#4ade80" },
  { type: "spacer", text: "" },
  { type: "prompt", text: '~ meok search "open source"', active: true },
  { type: "cursor", text: "▌", color: "#4ade80" },
];

// ── Personas ───────────────────────────────────────────────────────────────────

const PERSONAS = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "The Developer",
    desc: "You live in your terminal. MEOK Terminal integrates into your existing shell workflow — pipe to it, script it, call it from CI. Your sovereign AI as a Unix citizen.",
    tags: ["pipe-friendly", "scriptable", "silent mode"],
  },
  {
    icon: <Keyboard className="w-6 h-6" />,
    title: "The Power User",
    desc: "You hate clicking through UIs. meok brief on wake, meok journal before sleep. The CLI is your cockpit for everything that matters — your AI included.",
    tags: ["keyboard-first", "daily rituals", "no mouse"],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "The Keyboard Warrior",
    desc: "Every tool you use has a keyboard shortcut. MEOK Terminal gives you the same for your sovereign AI. Hotkey it, alias it, automate it. Speed is respect.",
    tags: ["hotkeys", "aliases", "automation"],
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────

const FAQ = [
  {
    q: "What platforms does MEOK Terminal support?",
    a: "macOS, Linux, and Windows (WSL recommended). The CLI is a standard Node.js binary distributed via npm. If you can run node, you can run meok.",
  },
  {
    q: "Does the CLI require an internet connection?",
    a: "For most commands, yes — your sovereign vault syncs with the cloud. But meok offline mode caches your last 100 memories and enables journal entry that syncs when you reconnect.",
  },
  {
    q: "Can I script or pipe MEOK Terminal commands?",
    a: "Yes. All commands support --json output for piping. You can script meok commands, add them to cron, or integrate them into your existing shell automation. meok export also works non-interactively — useful for automated backups.",
  },
  {
    q: "Is the CLI open source?",
    a: "Yes. The MEOK Terminal client is MIT-licensed and available on GitHub. You can inspect everything it sends and receives. We believe in transparent tooling.",
  },
];

// ── Copy button ────────────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-2 rounded-lg transition-all opacity-60 hover:opacity-100"
      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4 text-[#4ade80]" />
      ) : (
        <Copy className="w-4 h-4 text-[#a0a0b8]" />
      )}
    </button>
  );
}

// ── FAQ accordion item ─────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl border transition-all"
      style={{
        borderColor: open ? "rgba(74,222,128,0.3)" : "rgba(255,255,255,0.07)",
        background: open ? "rgba(74,222,128,0.03)" : "rgba(255,255,255,0.02)",
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-mono text-sm font-semibold" style={{ color: "rgba(245,240,232,0.85)" }}>{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: "#4ade80" }} />
        ) : (
          <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)" }} />
        )}
      </button>
      {open && (
        <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>{a}</p>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function TerminalPage() {
  const installCmd = "npm install -g meok-cli";

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#0a0f0a", color: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Green ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(74,222,128,0.08) 0%, transparent 70%)" }}
        />

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left: heading */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit" style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.25)" }}>
                <Terminal className="w-3.5 h-3.5" style={{ color: "#4ade80" }} />
                <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#4ade80" }}>MEOK Terminal</span>
              </div>

              <h1 style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05, color: "#ffffff" }}>
                Your sovereign AI,<br />
                <span style={{ color: "#4ade80" }}>in your shell.</span>
              </h1>

              <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: 480 }}>
                The MEOK Terminal is a full-featured CLI for your sovereign AI companion.
                Capture memories, run briefs, search your vault — all without leaving the keyboard.
              </p>

              {/* Install block */}
              <div className="relative rounded-xl overflow-hidden" style={{ background: "#0d1a0d", border: "1px solid rgba(74,222,128,0.2)" }}>
                <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: "rgba(74,222,128,0.1)" }}>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="text-xs ml-2" style={{ color: "rgba(74,222,128,0.5)" }}>install</span>
                </div>
                <div className="px-5 py-4 flex items-center gap-3">
                  <span style={{ color: "#4ade80", fontFamily: "monospace" }}>$</span>
                  <code className="flex-1 text-sm font-mono" style={{ color: "#f5f0e8" }}>{installCmd}</code>
                  <CopyButton text={installCmd} />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/hatch"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
                  style={{ background: "#4ade80", color: "#0a0f0a" }}
                >
                  Get started free
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://github.com/meok-ai/meok-cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border transition-all"
                  style={{ borderColor: "rgba(74,222,128,0.25)", color: "rgba(245,240,232,0.6)" }}
                >
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Right: terminal mockup */}
            <div className="flex-1 w-full max-w-lg">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#0d150d", border: "1px solid rgba(74,222,128,0.15)" }}>
                {/* Window chrome */}
                <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "rgba(74,222,128,0.1)", background: "#0a110a" }}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-xs font-mono" style={{ color: "rgba(74,222,128,0.4)" }}>meok-cli — zsh</span>
                  <div className="w-12" />
                </div>
                {/* Lines */}
                <div className="p-5 font-mono text-sm space-y-1">
                  {MOCK_SESSION.map((line, i) => {
                    if (line.type === "spacer") return <div key={i} className="h-2" />;
                    if (line.type === "cursor") return (
                      <span key={i} className="terminal-cursor" style={{ color: line.color }}>{line.text}</span>
                    );
                    if (line.type === "prompt") return (
                      <div key={i} className="flex items-center gap-2">
                        <span style={{ color: "#4ade80" }}>❯</span>
                        <span style={{ color: "rgba(245,240,232,0.9)" }}>{line.text}</span>
                      </div>
                    );
                    return (
                      <div key={i} style={{ color: line.color ?? "rgba(245,240,232,0.7)", paddingLeft: "1.25rem" }}>
                        {line.text}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMANDS ────────────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "#050a05" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(74,222,128,0.6)" }}>Commands</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              6 commands. <span style={{ color: "#4ade80" }}>Endless use cases.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMMANDS.map((cmd) => (
              <div
                key={cmd.cmd}
                className="rounded-2xl overflow-hidden transition-all group"
                style={{ background: "#0d150d", border: "1px solid rgba(74,222,128,0.1)" }}
              >
                {/* Command line */}
                <div className="px-5 py-3 flex items-center gap-2 border-b" style={{ borderColor: "rgba(74,222,128,0.08)", background: "#0a110a" }}>
                  <span style={{ color: "#4ade80", fontFamily: "monospace" }}>❯</span>
                  <code className="text-xs sm:text-sm font-mono flex-1 truncate" style={{ color: "rgba(245,240,232,0.9)" }}>{cmd.cmd}</code>
                </div>
                {/* Output */}
                <div className="px-5 py-3 border-b font-mono" style={{ borderColor: "rgba(74,222,128,0.05)" }}>
                  <pre className="text-xs leading-relaxed whitespace-pre-wrap" style={{ color: "#4ade80", fontFamily: "monospace" }}>{cmd.output}</pre>
                </div>
                {/* Description */}
                <div className="px-5 py-4 flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{cmd.icon}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>{cmd.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS TERMINAL FOR ─────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "#0a0f0a" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(74,222,128,0.6)" }}>Who it&apos;s for</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Built for people who live in terminals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PERSONAS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-6 flex flex-col gap-4 transition-all hover:scale-[1.01]"
                style={{ background: "#0d150d", border: "1px solid rgba(74,222,128,0.1)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(74,222,128,0.1)", color: "#4ade80" }}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-black text-white text-lg mb-1">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>{p.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-mono" style={{ background: "rgba(74,222,128,0.08)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.2)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL INSTALL BLOCK ──────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "#050a05" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white tracking-tight">Get started in 30 seconds</h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(245,240,232,0.45)" }}>Node.js 18+ required. Works on macOS, Linux, and Windows (WSL).</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#0d150d", border: "1px solid rgba(74,222,128,0.2)" }}>
            <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: "rgba(74,222,128,0.1)", background: "#0a110a" }}>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="text-xs font-mono ml-2" style={{ color: "rgba(74,222,128,0.4)" }}>setup.sh</span>
            </div>
            <div className="p-6 space-y-3 font-mono text-sm">
              {[
                { comment: "# Install the CLI", cmd: null },
                { comment: null, cmd: "npm install -g meok-cli" },
                { comment: "# Authenticate", cmd: null },
                { comment: null, cmd: "meok auth login" },
                { comment: "# Test it — get your morning brief", cmd: null },
                { comment: null, cmd: "meok brief" },
              ].map((line, i) => (
                <div key={i} className="relative flex items-center gap-3">
                  {line.comment ? (
                    <span style={{ color: "rgba(74,222,128,0.35)" }}>{line.comment}</span>
                  ) : (
                    <>
                      <span style={{ color: "#4ade80" }}>$</span>
                      <span style={{ color: "rgba(245,240,232,0.9)" }}>{line.cmd}</span>
                      {line.cmd && <CopyButton text={line.cmd} />}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/hatch"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#4ade80", color: "#0a0f0a" }}
            >
              Create your free account first
            </Link>
            <a
              href="https://github.com/meok-ai/meok-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border transition-all"
              style={{ borderColor: "rgba(74,222,128,0.25)", color: "rgba(245,240,232,0.6)" }}
            >
              View source on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "#0a0f0a" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-white text-center mb-8">FAQ</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>


      <style>{`
        @keyframes termCursorBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .terminal-cursor { animation: termCursorBlink 1s step-end infinite; }
      `}</style>
    </div>
  );
}
