import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Connect Your Memory — Import from ChatGPT, Claude & Notion | MEOK.AI",
  description:
    "Import your memory from ChatGPT, Claude, Notion, and every AI you use. Everything you've ever told any AI, now unified in one sovereign memory layer.",
  alternates: { canonical: "https://meok.ai/memory/connect" },
};

const IMPORT_SOURCES = [
  {
    icon: "🟢",
    name: "ChatGPT",
    subtitle: "OpenAI",
    howLong: "~5 minutes",
    steps: [
      "Go to ChatGPT → Settings → Data Controls → Export Data.",
      "Download the ZIP file — your full conversation history is inside.",
      "In MEOK: Settings → Memory → Import → ChatGPT, then upload the ZIP.",
      "MEOK extracts your memories, preferences, and patterns — not raw transcripts.",
    ],
    note: "ChatGPT exports your full history. MEOK ingests only the meaningful signals — goals, preferences, recurring topics — not every word.",
    available: true,
  },
  {
    icon: "🟣",
    name: "Claude",
    subtitle: "Anthropic",
    howLong: "~3 minutes",
    steps: [
      "Go to Claude → Settings → Privacy → Export Conversations.",
      "Download your conversation history as JSON.",
      "In MEOK: Settings → Memory → Import → Claude, then upload the file.",
      "MEOK parses your Claude history for patterns, values, and memory signals.",
    ],
    note: "Claude Projects integration coming soon for persistent system prompt injection.",
    available: true,
  },
  {
    icon: "📝",
    name: "Notion",
    subtitle: "Your notes and pages",
    howLong: "~10 minutes",
    steps: [
      "In Notion: Settings → Settings & Members → Export All Workspace Content.",
      "Export as Markdown & CSV.",
      "In MEOK: Settings → Memory → Import → Notion, then upload the ZIP.",
      "MEOK reads your pages, journals, and notes to build a richer picture of you.",
    ],
    note: "Notion imports are treated as context, not commands. MEOK reads your writing to understand you — not to copy it.",
    available: true,
  },
  {
    icon: "🔵",
    name: "DeepSeek",
    subtitle: "DeepSeek AI",
    howLong: "~3 minutes",
    steps: [
      "Install the MEOK Memory browser extension.",
      "Sign in with your MEOK account.",
      "Navigate to chat.deepseek.com — context is injected automatically.",
      "Adjust injection length in MEOK Settings → Memory → DeepSeek.",
    ],
    note: null,
    available: true,
  },
  {
    icon: "🔴",
    name: "Gemini",
    subtitle: "Google",
    howLong: "~3 minutes",
    steps: [
      "Install the MEOK Memory browser extension.",
      "Sign in with your MEOK account.",
      "Navigate to gemini.google.com — context is injected at conversation start.",
      "Gemini Advanced supported. Gems integration in beta.",
    ],
    note: null,
    available: true,
  },
  {
    icon: "⚫",
    name: "Ollama (Local)",
    subtitle: "Your device",
    howLong: "~10 minutes",
    steps: [
      "Install the MEOK Memory CLI: npm install -g @meok/memory-cli",
      "Authenticate: meok-memory login",
      "Use the MEOK wrapper: meok-memory run ollama run llama3",
      "Memory context is injected as a system message on every run.",
    ],
    note: "Ollama integration keeps all context local — nothing leaves your machine except the encrypted vault sync.",
    available: true,
  },
  {
    icon: "🟠",
    name: "Groq",
    subtitle: "Groq API",
    howLong: "~5 minutes",
    steps: [
      "Install the MEOK Memory browser extension.",
      "Navigate to console.groq.com or groq.com.",
      "MEOK Memory injects context into the system message automatically.",
      "For API usage: use the MEOK Memory SDK to pull context programmatically.",
    ],
    note: "Groq API integration is ideal for mobile and fast-inference workflows.",
    available: true,
  },
  {
    icon: "✨",
    name: "Custom API",
    subtitle: "Any OpenAI-compatible endpoint",
    howLong: "~15 minutes",
    steps: [
      "Retrieve your memory context via the MEOK Memory API: GET /v1/memory/context",
      "The API returns a compressed, relevance-ranked context string ready to inject.",
      "Prepend the context string to your system message in any OpenAI-compatible API call.",
      "Full SDK available for JavaScript, Python, and Rust.",
    ],
    note: "API keys available in your MEOK dashboard under Settings → Developer → Memory API.",
    available: true,
  },
];

const WHAT_MEOK_DOES = [
  {
    icon: "🔍",
    title: "Extracts what matters",
    desc: "MEOK doesn't ingest raw transcripts. It reads your history and extracts meaningful signals — your goals, preferences, recurring frustrations, things you care about, patterns you don't notice yourself.",
  },
  {
    icon: "🔗",
    title: "Unifies across sources",
    desc: "Your ChatGPT history and your Claude conversations and your Notion journals — combined into a single memory graph. Connections appear that were invisible when your knowledge lived in silos.",
  },
  {
    icon: "🔒",
    title: "Treats it all as sovereign",
    desc: "Imported memory gets the same treatment as everything you tell MEOK directly. AES-256-GCM encrypted. Stored under the Maternal Covenant. Never shared, never sold, never used to train models.",
  },
];

const FAQS = [
  {
    q: "What happens to my data when I import it?",
    a: "Imported data is processed once to extract memory signals, then encrypted with AES-256-GCM and stored in your sovereign memory vault. The raw import files are deleted after processing. Your memory vault is governed by the Maternal Covenant — the same guarantees as everything else.",
  },
  {
    q: "Does MEOK read my raw conversations?",
    a: "No. MEOK runs an extraction pass to identify meaningful patterns — goals, preferences, values, recurring topics — and stores those as structured memory. Your raw transcripts are not retained. MEOK doesn't store what you said to ChatGPT last year; it stores what it learned about you from reading it.",
  },
  {
    q: "Can I delete imported memories?",
    a: "Yes. All imported memory is visible in Settings → Memory → Sources, and any import can be deleted completely. Deletion is permanent and immediate — there's no archive.",
  },
  {
    q: "What if I don't want to import anything?",
    a: "You don't have to. MEOK builds your memory from your ongoing conversations. Importing accelerates the process — especially if you've had thousands of conversations with other AIs — but it's entirely optional.",
  },
  {
    q: "Can I export my MEOK memory later?",
    a: "Yes. Settings → Memory → Export generates a full JSON export of your memory vault. You own it completely. MEOK stores it on your behalf — it's not held hostage.",
  },
  {
    q: "Can I connect a live feed from other AIs — not just a one-time import?",
    a: "Yes, via the browser extension. Once installed, MEOK Memory reads every conversation you have on supported platforms in real time — updating your memory vault as you go. The import flow is for your historical data; the extension handles everything from here on.",
  },
];

export default function ConnectPage() {
  return (
    <div className="min-h-screen text-[#f5f0e8]" style={{ background: "#0d0c18" }}>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-[0.2em] mb-8"
            style={{ borderColor: "rgba(201,168,76,0.35)", color: "#c9a84c", background: "rgba(201,168,76,0.08)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Unified Memory
          </div>

          <h1
            className="font-black text-white mb-6 tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)", lineHeight: 1.05 }}
          >
            Everything you&apos;ve ever told any AI.{" "}
            <span className="text-gradient-gold">Now connected.</span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-4" style={{ color: "rgba(245,240,232,0.65)" }}>
            You&apos;ve been building context for years — in ChatGPT, in Claude, in Notion, in
            conversations that disappeared the moment you closed the tab. That history doesn&apos;t
            have to disappear. Import it once. MEOK turns it into a living memory you actually own.
          </p>
          <p className="text-sm mb-10" style={{ color: "rgba(245,240,232,0.35)" }}>
            Import from ChatGPT, Claude, and Notion in under 10 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/hatch"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch and start importing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/memory"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-sm border transition-all"
              style={{ borderColor: "rgba(245,240,232,0.2)", color: "rgba(245,240,232,0.75)", background: "transparent" }}
            >
              ← Back to Memory
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHAT MEOK DOES WITH IMPORTED MEMORIES ──────────────── */}
      <section className="py-20 px-6" style={{ background: "#1a1a2e" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Your memory, unified
            </p>
            <h2
              className="font-black text-white tracking-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              What MEOK does with everything you import.
            </h2>
            <p className="text-[#f5f0e8]/45 max-w-xl mx-auto text-sm leading-relaxed">
              Not a raw archive. A living understanding of who you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHAT_MEOK_DOES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-8"
                style={{
                  background: "rgba(245,240,232,0.02)",
                  border: "1px solid rgba(245,240,232,0.07)",
                }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-black text-white text-base mb-3">{item.title}</h3>
                <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Privacy callout */}
          <div
            className="mt-8 rounded-2xl p-6 text-center"
            style={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <p className="text-[#c9a84c] font-semibold text-sm mb-1">
              Imported data gets the same sovereign treatment as everything else.
            </p>
            <p className="text-[#f5f0e8]/45 text-sm">
              AES-256-GCM encrypted. Governed by the Maternal Covenant. Never used to train models. Yours to export or delete at any time.
            </p>
          </div>
        </div>
      </section>

      {/* ─── IMPORT GUIDES ────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#0d0c18" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Step-by-step guides
            </p>
            <h2
              className="font-black text-white tracking-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Connect every AI you use.
            </h2>
            <p className="text-[#f5f0e8]/45 max-w-xl mx-auto text-sm">
              One memory layer. Every platform. No more starting over.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {IMPORT_SOURCES.map((platform) => (
              <div
                key={platform.name}
                className="p-8 rounded-2xl flex flex-col gap-5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{platform.icon}</span>
                  <div>
                    <h2 className="font-bold text-white text-base leading-tight">{platform.name}</h2>
                    <span className="text-xs" style={{ color: "rgba(245,240,232,0.40)" }}>
                      {platform.subtitle}
                    </span>
                  </div>
                  <div className="ml-auto flex flex-col items-end gap-1">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(201,168,76,0.12)",
                        color: "#c9a84c",
                        border: "1px solid rgba(201,168,76,0.25)",
                      }}
                    >
                      Available
                    </span>
                    <span className="text-[10px]" style={{ color: "rgba(245,240,232,0.30)" }}>
                      {platform.howLong}
                    </span>
                  </div>
                </div>

                {/* Steps */}
                <ol className="flex flex-col gap-3">
                  {platform.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black mt-0.5"
                        style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.65)" }}>
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>

                {/* Optional note */}
                {platform.note && (
                  <div
                    className="text-xs p-4 rounded-xl leading-relaxed"
                    style={{
                      background: "rgba(201,168,76,0.06)",
                      color: "rgba(245,240,232,0.5)",
                      border: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    {platform.note}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Coming soon */}
          <div
            className="mt-10 p-6 rounded-2xl text-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p className="text-sm font-semibold mb-1" style={{ color: "rgba(245,240,232,0.5)" }}>
              Coming soon
            </p>
            <p className="text-base font-bold" style={{ color: "rgba(245,240,232,0.3)" }}>
              Cursor &nbsp;&middot;&nbsp; GitHub Copilot &nbsp;&middot;&nbsp; Replit &nbsp;&middot;&nbsp; Windsurf &nbsp;&middot;&nbsp; Mistral Le Chat
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#1a1a2e" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-black text-white tracking-tight mb-4"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)" }}
            >
              Questions about importing
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl"
                style={{
                  background: "rgba(245,240,232,0.02)",
                  border: "1px solid rgba(245,240,232,0.07)",
                }}
              >
                <h3 className="font-bold text-[#f5f0e8] mb-3 text-sm">{faq.q}</h3>
                <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "#0d0c18", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-xl mx-auto">
          <div className="text-4xl mb-6">🧠</div>
          <h2
            className="font-black text-white mb-4 tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}
          >
            Your memory is waiting to be unified.
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(245,240,232,0.6)" }}>
            Hatch your companion, then connect every AI you&apos;ve ever used — in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/hatch"
              className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full font-bold text-sm transition-all"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/memory"
              className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full font-bold text-sm border transition-all"
              style={{ borderColor: "rgba(245,240,232,0.2)", color: "rgba(245,240,232,0.7)" }}
            >
              Learn about MEOK Memory
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
