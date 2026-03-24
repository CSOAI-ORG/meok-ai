import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock, Download, Shield, FileCheck, Eye, Server, ChevronDown } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ─── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Your AI. Your Data. Your Keys. Always. | MEOK Sovereign Data",
  description:
    "Every AI you've used has been training on your conversations. MEOK never has, never will. Zero training enforced at the architecture level — not just a privacy policy. Local-first Postgres, one-click export, verifiable deletion within 24 hours.",
  alternates: { canonical: "https://meok.ai/os/sovereign" },
  openGraph: {
    title: "Your AI. Your Data. Your Keys. Always. | MEOK Sovereign Data",
    description:
      "Gemini does it. ChatGPT does it. MEOK never has, never will. See exactly how sovereign data architecture works — no policy promises, just architecture.",
    type: "website",
    url: "https://meok.ai/os/sovereign",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=Sovereign+Data&desc=Zero+training+on+your+conversations.+Local-first+Postgres%2C+one-click+export%2C+verifiable+deletion.", width: 1200, height: 630, alt: "MEOK Sovereign Data — Your AI, Your Keys, Always" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your AI. Your Data. Your Keys. Always. | MEOK Sovereign Data",
    description: "Zero training on your conversations — enforced at architecture level, not just a policy. Local-first Postgres, one-click export, verifiable deletion.",
    images: ["https://meok.ai/api/og?title=Sovereign+Data&desc=Zero+training+on+your+conversations.+Local-first+Postgres%2C+one-click+export%2C+verifiable+deletion."],
  },
};

// ─── JSON-LD ────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Sovereign AI & Data — MEOK.AI",
      description:
        "MEOK's sovereign data architecture: zero training on user conversations, local-first Postgres storage, one-click full JSON export, and verifiable deletion within 24 hours.",
      url: "https://meok.ai/os/sovereign",
      mainEntity: {
        "@type": "SoftwareApplication",
        name: "MEOK Sovereign Data Architecture",
        applicationCategory: "ProductivityApplication",
        featureList: [
          "Zero training on user conversations — enforced at architecture and contract level",
          "Local-first Postgres storage — memories in your instance, not ours",
          "One-click full JSON export of all memories, conversations, values, settings",
          "Verifiable deletion within 24 hours including all backups",
          "256-bit AES encryption at rest and in transit",
          "Air-gapped Ollama routing for sensitive queries",
          "Deletion audit log with cryptographic proof",
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does MEOK use my data for RAG or retrieval training?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Your data is used to answer your questions — that's retrieval-augmented generation working for you, not on you. Your conversations are never used to fine-tune, train, or improve any model for any other user. This is enforced at the architecture level: the RAG pipeline reads from your encrypted vault, and that vault is never accessible to model training systems.",
          },
        },
        {
          "@type": "Question",
          name: "What about the AI model provider — do they see my data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When you send a message, it passes through to the LLM provider (Claude, GPT, DeepSeek etc) for inference. We have contractual zero-training agreements with all providers. For maximum privacy, use Ollama routing — your query never leaves your device. The Sovereign Display shows you exactly which provider processed each message.",
          },
        },
        {
          "@type": "Question",
          name: "Can I self-host MEOK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Self-hosting is on the roadmap for H2 2026. The architecture is already designed for it — your data lives in a Postgres instance you control. Full self-host documentation and Docker images will be available at launch.",
          },
        },
        {
          "@type": "Question",
          name: "What's in the data export?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Everything. All conversation history, all memory records (semantic and episodic), your AI's values and character settings, your Birth Ceremony data, all tags and categories, your usage history, and all exported integrations. In portable JSON format. Machine-readable and human-readable. No data is held back.",
          },
        },
        {
          "@type": "Question",
          name: "When you say delete means delete, what does that mean technically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When you trigger deletion, a deletion cascade runs across: your primary Postgres instance, all vector embeddings in pgvector, all cached responses, all CDN/edge caches, and all backup snapshots created after your registration date. We generate a deletion audit log with timestamps and a cryptographic hash you can verify. Target: 24 hours. Maximum: 72 hours for backup propagation.",
          },
        },
        {
          "@type": "Question",
          name: "Does MEOK use my conversations to improve the product for other users?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We may collect aggregate, anonymised analytics (e.g. 'X% of users use Work OS') but never the contents of conversations or memories. We cannot access your encrypted data to read it. We don't want to.",
          },
        },
      ],
    },
  ],
};

// ─── Data ───────────────────────────────────────────────────────────────────

const GUARANTEES = [
  {
    icon: Shield,
    number: "01",
    title: "Zero training on your data",
    pitch: "Architecturally impossible — not just a policy we might update.",
    body: "Your conversations are never used to train, fine-tune, or improve any AI model for any other user. We have contractual zero-training agreements with every LLM provider we route to — but more importantly, the architecture makes it structurally impossible. Your data lives in your encrypted vault, which the training pipeline cannot reach.",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-900/[0.06]",
  },
  {
    icon: Server,
    number: "02",
    title: "Local-first storage",
    pitch: "Your memories live in your Postgres instance. We are custodians, not landlords.",
    body: "MEOK stores your sovereign memory in pgvector — an open-source Postgres extension with a fully documented, open schema. You can query it directly, back it up independently, and move it to any Postgres-compatible system without our involvement. The data is yours by architecture, not by contract.",
    accent: "text-[#87CEEB]",
    border: "border-[#87CEEB]/20",
    bg: "bg-[#87CEEB]/[0.06]",
  },
  {
    icon: Download,
    number: "03",
    title: "Full portable export",
    pitch: "One click. Standard JSON. No fee. No waiting. No data held back.",
    body: "Export everything: all conversation history, all memory records, your AI's values and character settings, Birth Ceremony data, tags, categories, usage history. Human-readable. Machine-portable. The export schema is open and documented — any developer can write a tool to read it. This is not a courtesy feature. It is how you prove you actually own something.",
    accent: "text-[#c9a84c]",
    border: "border-[#c9a84c]/20",
    bg: "bg-[#c9a84c]/[0.06]",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Delete means delete",
    pitch: "Every system. Every backup. 24 hours. Cryptographic proof.",
    body: "When you delete, a cascade runs: primary Postgres, all vector embeddings, all cached responses, all CDN edge caches, all backup snapshots created after your registration date. We generate a deletion audit log with timestamps and a SHA-256 hash you can verify independently. Target: 24 hours. Maximum: 72 hours for backup propagation. We tell you which.",
    accent: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-900/[0.06]",
  },
];

const ARCHITECTURE = [
  {
    label: "Local Postgres + pgvector",
    detail:
      "Your memories are stored as vector embeddings in a Postgres instance in your region. Embeddings are computed on inference. No third-party memory providers. Open schema, fully documented.",
  },
  {
    label: "AES-256 encryption at rest",
    detail:
      "Every memory record, every conversation, every value setting is encrypted at rest using AES-256. The encryption keys are derived from your account credentials. MEOK cannot decrypt your data without your session key.",
  },
  {
    label: "TLS 1.3 in transit",
    detail:
      "All data in transit is encrypted with TLS 1.3. Requests to LLM providers are routed through our servers and stripped of identifying information before dispatch.",
  },
  {
    label: "Air-gapped Ollama routing",
    detail:
      "Any query you flag as sensitive — or any query on the privacy-first routing policy — is sent to your local Ollama instance. It never leaves your device. The Sovereign Display shows which route was used.",
  },
  {
    label: "Deletion audit log",
    detail:
      "Every deletion operation generates a signed audit log entry. The log contains: timestamp, systems affected, a SHA-256 hash of the deleted data batch, and a confirmation receipt. Available for download.",
  },
  {
    label: "Export schema (open)",
    detail:
      "The export format is open and documented at meok.ai/docs/export. Any developer can write a tool to read it. Any user can understand it. No proprietary lock-in.",
  },
];

const WHAT_MEOK_CANNOT_DO = [
  "Read your encrypted conversations (keys are yours)",
  "Use your conversations to train any AI model",
  "Sell, share, or license your data to any third party",
  "Retain your data after deletion is confirmed",
  "Target you with advertising based on your conversations",
  "Share your data with governments without a valid UK court order (which we will publish)",
  "Access your locally-routed Ollama conversations at all",
];

const SOVEREIGN_DISPLAY = [
  {
    label: "Current model",
    detail: "Which LLM processed your last message. Provider, version, and routing path.",
  },
  {
    label: "Data location",
    detail: "Local (Ollama — never left your device) or Cloud (provider name + region).",
  },
  {
    label: "Memory status",
    detail: "How many memories are active, last sync timestamp, vault encryption status.",
  },
  {
    label: "Covenant score",
    detail: "Real-time Maternal Covenant score for your current session. Six dimensions, live.",
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function SovereignPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold absolute w-[700px] h-[700px] top-[-120px] left-[-200px] opacity-20" />
          <div className="blob-blue absolute w-[500px] h-[500px] top-[10%] right-[-100px] opacity-15" />
          <div className="blob-purple absolute w-[400px] h-[400px] bottom-[5%] left-[30%] opacity-10" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold mb-10 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Sovereign Data Architecture
          </div>

          {/* Shield */}
          <div className="flex justify-center mb-10">
            <div className="relative float-slow">
              <div className="absolute inset-0 rounded-full bg-[#c9a84c]/5 blur-2xl scale-150" />
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg
                  viewBox="0 0 80 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-28 h-28 drop-shadow-[0_0_24px_rgba(201,168,76,0.5)]"
                  aria-label="Sovereign data shield"
                >
                  <path
                    d="M40 4L8 16v24c0 20 14 37 32 44 18-7 32-24 32-44V16L40 4z"
                    fill="url(#sg1)"
                    opacity="0.15"
                  />
                  <path
                    d="M40 4L8 16v24c0 20 14 37 32 44 18-7 32-24 32-44V16L40 4z"
                    stroke="url(#sg2)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M40 14L16 24v18c0 14 10 26 24 31 14-5 24-17 24-31V24L40 14z"
                    stroke="rgba(201,168,76,0.25)"
                    strokeWidth="0.75"
                    fill="none"
                  />
                  <rect x="31" y="38" width="18" height="13" rx="2" fill="#c9a84c" opacity="0.9" />
                  <path
                    d="M34 38v-4a6 6 0 0112 0v4"
                    stroke="#c9a84c"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="40" cy="44.5" r="1.5" fill="#0d0c18" />
                  <defs>
                    <linearGradient id="sg1" x1="8" y1="4" x2="72" y2="84" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#c9a84c" />
                      <stop offset="1" stopColor="#f0d080" />
                    </linearGradient>
                    <linearGradient id="sg2" x1="8" y1="4" x2="72" y2="84" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#c9a84c" stopOpacity="0.8" />
                      <stop offset="1" stopColor="#f0d080" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] mb-6 tracking-tight">
            Your AI. Your data.{" "}
            <span className="text-gradient-gold">Your keys.</span>
            <br />
            <span className="text-white/80 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Always.
            </span>
          </h1>

          {/* Lead with what they hate */}
          <div className="max-w-2xl mx-auto mb-10 px-6 py-5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
            <p className="text-base text-white/65 leading-relaxed">
              <span className="text-white font-black">Every AI you&apos;ve used has been training on your conversations.</span>{" "}
              Gemini does it. ChatGPT does it by default. The AI you&apos;ve been using to think
              through your most personal problems has been feeding a training pipeline.
              <br />
              <span className="text-[#c9a84c] font-semibold mt-2 block">
                MEOK never has. Never will. Here&apos;s exactly how we enforce that — not with a
                policy promise, but with architecture.
              </span>
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { value: "0", label: "Conversations trained on" },
              { value: "AES-256", label: "Encryption standard" },
              { value: "24h", label: "Max deletion window" },
              { value: "100%", label: "Portable data" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl px-4 py-5 text-center">
                <div className="text-gradient-gold text-xl sm:text-2xl font-black mb-1 leading-none">
                  {stat.value}
                </div>
                <p className="text-white/40 text-xs leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/hatch"
            aria-label="Start your sovereign AI — hatch your companion"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            style={{ backgroundColor: "#c9a84c", color: "#0d0c18" }}
          >
            Start sovereign <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── 4 SOVEREIGN GUARANTEES ───────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
              The four guarantees
            </p>
            <h2 className="text-3xl sm:text-4xl font-black">
              Four guarantees.{" "}
              <span className="text-gradient-gold">Enforced in architecture, not prose.</span>
            </h2>
            <p className="text-white/45 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              Not policy promises. Not legal boilerplate. Each one is a technical constraint that makes violation structurally impossible — with verifiable proof for each.
            </p>
          </div>

          <div className="space-y-6">
            {GUARANTEES.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className={`rounded-2xl p-8 md:p-10 border ${g.border} ${g.bg} hover:scale-[1.002] transition-all`}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <span className="font-mono font-black text-4xl text-white/10">
                        {g.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.06] flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${g.accent}`} />
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-black text-2xl mb-1 ${g.accent}`}>{g.title}</h3>
                      <p className="text-white/50 text-sm font-semibold italic mb-4">{g.pitch}</p>
                      <p className="text-white/65 leading-relaxed text-sm">{g.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TECHNICAL ARCHITECTURE ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
              Technical architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              How sovereignty is built in,{" "}
              <span className="text-gradient-gold">not bolted on.</span>
            </h2>
            <p className="text-white/40 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              For the technically curious: here is every layer of the stack and
              exactly what it does to protect your data.
            </p>
          </div>

          <div className="divide-y divide-white/[0.06] border border-white/[0.08] rounded-2xl overflow-hidden">
            {ARCHITECTURE.map((item) => (
              <div
                key={item.label}
                className="px-8 py-6 flex flex-col sm:flex-row sm:items-start gap-3 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="sm:w-64 flex-shrink-0">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                    {item.label}
                  </span>
                </div>
                <p className="text-sm text-white/45 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE SOVEREIGN DISPLAY ────────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Real-time transparency
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              The Sovereign Display.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
              Every conversation includes a live panel showing you exactly what&apos;s
              happening with your data in real time. No guessing. No trusting. Seeing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SOVEREIGN_DISPLAY.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.07] hover:border-[#c9a84c]/20 transition-all flex gap-4 items-start"
              >
                <div className="w-9 h-9 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div>
                  <h3 className="font-black text-white text-sm mb-1.5">{item.label}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE CAN'T DO ─────────────────────────────────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
              Hard limits
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              What MEOK physically cannot do with your data.
            </h2>
            <p className="text-white/45 text-sm max-w-xl mx-auto leading-relaxed">
              Not &ldquo;what we promise not to do&rdquo;. What the architecture makes it technically impossible to do — regardless of who asks, including us.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
            {WHAT_MEOK_CANNOT_DO.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 px-7 py-5 ${
                  i !== WHAT_MEOK_CANNOT_DO.length - 1 ? "border-b border-white/[0.06]" : ""
                } ${i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}`}
              >
                <div className="w-6 h-6 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 font-black text-xs">✗</span>
                </div>
                <p className="text-white/65 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[#c9a84c]/20 bg-[#c9a84c]/[0.04] px-7 py-5">
            <p className="text-white/55 text-sm leading-relaxed">
              <span className="text-[#c9a84c] font-bold">Note on government requests:</span>{" "}
              If we ever receive a valid UK court order compelling us to hand over data, we will
              publish a transparency notice in our monthly report (redacted where legally required).
              We will contest any order we believe to be overbroad. We have never received one.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Privacy questions
            </p>
            <h2 className="text-3xl font-black">
              The questions you actually want answered.
            </h2>
            <p className="text-white/40 text-sm mt-3">
              For the privacy-first users who read the footnotes and check the architecture.
              We see you. These are for you.
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "Does MEOK use my data for RAG or retrieval?",
                a: "Your data is used to answer your questions — that's retrieval-augmented generation working for you, not on you. MEOK retrieves relevant memories from your vault to improve responses to you. Your data is never retrieved to serve another user's experience, never used in batch training, and never pooled with other users' data in any shared index.",
              },
              {
                q: "What about the AI model provider — do they see my data?",
                a: "When you send a message, it passes to the LLM provider (Claude, GPT, DeepSeek etc) for inference. We have contractual zero-training agreements with all providers — they process the message and return the result; they cannot retain it for training. For maximum privacy, use Ollama routing: your query never leaves your device. The Sovereign Display shows exactly which provider processed each message.",
              },
              {
                q: "Can I self-host MEOK?",
                a: "Self-hosting is on the roadmap for H2 2026. The architecture is already designed for it: your memories live in a standard Postgres + pgvector instance you control, and the schema is open and documented. Full Docker images and self-host documentation will be published at launch. Email hello@meok.ai to be notified.",
              },
              {
                q: "What's in the data export?",
                a: "Everything. All conversation history, all memory records (semantic and episodic), your AI's values and character settings, Birth Ceremony data, all tags and categories, your usage history, and all exported integrations. In portable JSON format. Machine-readable and human-readable. The export schema is documented at meok.ai/docs/export. No data is held back. No export fee.",
              },
              {
                q: "When you say delete means delete — what does that mean technically?",
                a: "When you trigger deletion, a cascade runs across: your primary Postgres instance, all vector embeddings in pgvector, all cached responses, all CDN/edge caches, and all backup snapshots. We generate a deletion audit log with timestamps and a SHA-256 hash you can verify independently. Target: 24 hours. Maximum: 72 hours for backup propagation. We tell you when it's complete.",
              },
              {
                q: "Does MEOK use my conversations to improve the product for other users?",
                a: "No. We may collect aggregate anonymised analytics (e.g. 'X% of users access Work OS') but never the contents of conversations or memories. We cannot access your encrypted data. We don't want to. Product improvements come from user feedback, our own testing, and research — never from reading your conversations.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none gap-4">
                  <span className="font-semibold text-white/85 text-sm">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-white/30 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── YOUR AI. NOT THEIRS. ───────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-3">
              The difference nobody talks about
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Your AI can&apos;t be bought.<br />
              <span style={{ color: "#c9a84c" }}>Because you own it.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: "3px solid #c9a84c",
              }}
            >
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="font-black text-white text-lg mb-3">Nobody can acquire MEOK and change the rules.</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Google can update their privacy policy overnight. OpenAI can sell your data to a government next year. Your AI can be acquired and flipped against you.
                MEOK&apos;s Maternal Covenant is constitutional — it cannot be amended to remove care. The architecture prevents it. Sovereignty isn&apos;t a promise. It&apos;s a constraint.
              </p>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: "3px solid #A78BFA",
              }}
            >
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-black text-white text-lg mb-3">The only AI that gets smarter without taking from you.</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Every other AI needs your data piped back to their servers to improve. That&apos;s the trade — you get a &ldquo;free&rdquo; service, they get your life as training data.
                MEOK improves locally. In your sovereign space. Your AI learns for you, on your hardware, under your control. You&apos;re not the product. You&apos;re the person.
              </p>
            </div>
          </div>

          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <p className="text-[#c9a84c] font-black text-base mb-1">Your AI. Not theirs.</p>
            <p className="text-white/45 text-sm">Free forever for individuals. Because sovereignty is a right, not a subscription.</p>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 bg-[#0d0c18] overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold absolute w-[500px] h-[500px] top-[-60px] left-[20%] opacity-10" />
          <div className="blob-blue absolute w-[400px] h-[400px] bottom-[-60px] right-[15%] opacity-08" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/25 text-[#c9a84c] text-xs font-semibold mb-8">
            <Lock className="w-3.5 h-3.5" />
            Sovereignty from day one. Free forever.
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            What would it feel like if an AI actually owned nothing of yours?
          </h2>
          <p className="text-white/50 mb-2 leading-relaxed">
            Free to start. Sovereign from your first conversation. No credit card. No training on your data — ever.
          </p>
          <p className="text-white/30 text-sm mb-10">
            Export everything. Delete everything. Self-host when it ships. Yours from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hatch"
              aria-label="Hatch your sovereign AI companion — free, no credit card"
              className="inline-flex items-center gap-2 px-10 py-3.5 rounded-xl font-bold text-sm transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
              style={{ backgroundColor: "#c9a84c", color: "#0d0c18" }}
            >
              Start sovereign <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white/60 border border-white/10 hover:border-white/20 hover:text-white/90 transition-all"
            >
              Read our privacy policy →
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
