import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  HardDrive,
  Download,
  Trash2,
  Lock,
  CheckCircle2,
  XCircle,
  Server,
  Database,
  Key,
} from "lucide-react";
import { FeatureCard, Surface, GlowText } from "@/components/design-system";

// ── METADATA ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Your Data Is Yours — MEOK Sovereign Data Promise",
  description:
    "Zero training on your data. Local-first storage. Full export anytime. Delete means delete. MEOK's four unbreakable data sovereignty guarantees — architecturally enforced, not just policy.",
  alternates: { canonical: "https://meok.ai/sovereign" },
  openGraph: {
    title: "Your Data Is Yours — MEOK Sovereign Data Promise",
    description:
      "Zero training on your data. Local-first storage with pgvector. One-click export. Cryptographic deletion proof. MEOK's sovereignty guarantees go beyond policy — they're built into the architecture.",
    type: "website",
    url: "https://meok.ai/sovereign",
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "MEOK Sovereign Data Promise",
      url: "https://meok.ai/sovereign",
      description:
        "MEOK's four data sovereignty guarantees: zero training, local-first storage, full export, and cryptographic deletion.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does MEOK train AI models on my conversations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. This is architecturally enforced, not just policy. Your memory store is a separate pgvector database tied to your encryption keys. The model inference layer has no write-back path to your personal data. MEOK cannot train on your data because the system is not built to do so.",
          },
        },
        {
          "@type": "Question",
          name: "Where is my data stored?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your memories and conversations are stored in a pgvector database — a PostgreSQL extension designed for vector search. By default this runs on MEOK's servers, encrypted with AES-256 using keys only you hold. Self-hosted deployment (your own server) is on the H2 2026 roadmap.",
          },
        },
        {
          "@type": "Question",
          name: "Can I export all my data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. One click in Settings > Export. You receive a ZIP containing all your memories, conversations, goals, and character history in both JSON (machine-readable) and PDF (human-readable) formats. No data is withheld. No hostage data.",
          },
        },
        {
          "@type": "Question",
          name: "What happens when I delete my account?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 24-hour cascade begins — your pgvector embeddings, conversation history, and all associated files are permanently deleted across every storage layer. You can request cryptographic proof of deletion. Backups are rotated within the same 24-hour window.",
          },
        },
      ],
    },
  ],
};

// ── DATA ───────────────────────────────────────────────────────────────────
const GUARANTEES = [
  {
    number: "01",
    icon: Shield,
    iconColor: "text-[#c9a84c]",
    glowColor: "rgba(201,168,76,0.08)",
    borderColor: "rgba(201,168,76,0.20)",
    accentColor: "#c9a84c",
    badge: "ZERO TRAINING",
    title: "Your data never trains a model.",
    tagline: "Architecturally impossible. Not just a policy.",
    body: "Other AI services use your conversations to improve their models. MEOK doesn't. This isn't a terms-of-service promise that can be quietly changed — the system is built so that the model inference layer has no write-back path to your personal memory store. There is no mechanism to train on your data because we didn't build one.",
    proof: "Your pgvector memory store is isolated from model training infrastructure. Verified independently in our architecture audit.",
  },
  {
    number: "02",
    icon: HardDrive,
    iconColor: "text-blue-400",
    glowColor: "rgba(59,130,246,0.06)",
    borderColor: "rgba(59,130,246,0.18)",
    accentColor: "#60a5fa",
    badge: "LOCAL-FIRST",
    title: "Your storage. Your keys.",
    tagline: "pgvector on YOUR server. Or ours — encrypted with keys only you hold.",
    body: "MEOK stores your memories as vector embeddings in pgvector — a PostgreSQL extension that enables fast semantic search. By default this runs on our servers, AES-256 encrypted with keys derived from your account credentials that we never store in plaintext. In H2 2026, self-hosted deployment means the database runs entirely on your own infrastructure — we never touch it.",
    proof: "AES-256-GCM encryption. Key derivation uses PBKDF2 with 600,000 iterations. We store salts, not keys.",
  },
  {
    number: "03",
    icon: Download,
    iconColor: "text-green-400",
    glowColor: "rgba(74,222,128,0.06)",
    borderColor: "rgba(74,222,128,0.18)",
    accentColor: "#4ade80",
    badge: "FULL EXPORT",
    title: "One click. Everything. No exceptions.",
    tagline: "JSON + PDF. Complete history. No hostage data.",
    body: "Settings > Export. One click. You receive a ZIP file containing your entire MEOK history: every memory, every conversation, every goal, every character state. JSON for developers and applications. PDF for humans. Nothing withheld. No export fee. No waiting period. Your data belongs to you from the moment you create it.",
    proof: "Export includes: memories (vector + text), conversation history, character evolution, goals, integration data. GDPR Article 20 compliant.",
  },
  {
    number: "04",
    icon: Trash2,
    iconColor: "text-red-400",
    glowColor: "rgba(248,113,113,0.06)",
    borderColor: "rgba(248,113,113,0.18)",
    accentColor: "#f87171",
    badge: "REAL DELETION",
    title: "Delete means delete.",
    tagline: "24-hour cascade. Cryptographic proof available.",
    body: "When you delete your account, a 24-hour cascade begins. Your pgvector embeddings are dropped. Your conversation history is shredded. Your files are zeroed. All associated backups are rotated within the same window. You can request a cryptographic deletion certificate — a signed record proving your data no longer exists on our infrastructure.",
    proof: "Deletion cascade: pgvector embeddings → conversation store → file storage → backup rotation. Certificate issued on request.",
  },
];

const TECH_EXPLAINERS = [
  {
    icon: Database,
    term: "pgvector",
    plain: "How your memories are stored",
    explanation:
      "pgvector is a PostgreSQL extension that stores data as mathematical vectors — essentially a set of numbers that represents meaning. When MEOK learns something about you, it converts that memory into a vector and stores it. When you ask a question, MEOK finds the most relevant memories by comparing vectors. It's fast, private, and runs in a standard database you can self-host or inspect.",
  },
  {
    icon: Lock,
    term: "AES-256",
    plain: "What encryption means for you",
    explanation:
      "AES-256 is the encryption standard used by banks, governments, and militaries. It means your data is scrambled using a 256-bit key — a number so large it would take every computer on Earth billions of years to guess by brute force. Your MEOK key is derived from your password using PBKDF2 (600,000 rounds). We store the scrambled result. We don't store the key. If you lose your password, the data is unrecoverable — that's the point.",
  },
  {
    icon: Key,
    term: "Key isolation",
    plain: "Why we can't read your data",
    explanation:
      "Your encryption keys are never stored on our servers in a usable form. They're derived from your credentials at the moment you log in, used to decrypt data in memory, and then discarded. We can't hand your data to a government subpoena in readable form because we genuinely don't have the key. This is structural privacy — not a policy. A policy can change. An architecture constraint cannot.",
  },
];

const COMPARISON = [
  {
    feature: "Trains AI on your conversations",
    meok: { val: "Never", good: true, note: "Architecturally enforced" },
    chatgpt: { val: "Opt-out", good: false, note: "Default: yes. Can disable in settings." },
    claude: { val: "Opt-out", good: false, note: "Default varies by product tier" },
    gemini: { val: "Yes", good: false, note: "Used to improve Google's models" },
  },
  {
    feature: "Full data export",
    meok: { val: "Yes", good: true, note: "JSON + PDF, one click" },
    chatgpt: { val: "Partial", good: false, note: "JSON export available, incomplete" },
    claude: { val: "No", good: false, note: "No export feature currently" },
    gemini: { val: "Via Google Takeout", good: false, note: "Fragmented across Google services" },
  },
  {
    feature: "Real deletion (verifiable)",
    meok: { val: "Yes", good: true, note: "24h cascade + crypto proof" },
    chatgpt: { val: "Policy", good: false, note: "Policy promise, no proof offered" },
    claude: { val: "Policy", good: false, note: "Anthropic data retention applies" },
    gemini: { val: "Policy", good: false, note: "Google data retention applies" },
  },
  {
    feature: "Encryption with user-held keys",
    meok: { val: "Yes", good: true, note: "AES-256, keys never stored by us" },
    chatgpt: { val: "No", good: false, note: "OpenAI holds encryption keys" },
    claude: { val: "No", good: false, note: "Anthropic holds encryption keys" },
    gemini: { val: "No", good: false, note: "Google holds encryption keys" },
  },
  {
    feature: "Self-hosting option",
    meok: { val: "H2 2026", good: true, note: "On roadmap" },
    chatgpt: { val: "Enterprise only", good: false, note: "Azure deployment, not true self-host" },
    claude: { val: "No", good: false, note: "Cloud only" },
    gemini: { val: "No", good: false, note: "Cloud only" },
  },
];

// ── PAGE ───────────────────────────────────────────────────────────────────
export default function SovereignPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 px-6 overflow-hidden animate-fade-in-up">
        {/* Blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 800, height: 600,
            top: "-15%", left: "50%", transform: "translateX(-50%)",
            background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 500, height: 500,
            top: "20%", left: "-5%",
            background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 400, height: 400,
            bottom: "5%", right: "-5%",
            background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-black tracking-[0.25em] uppercase mb-8">
            <Shield className="w-3 h-3" />
            Data Sovereignty
          </div>

          {/* Shield icon */}
          <div className="mb-8 flex justify-center">
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center"
              style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.25)" }}
            >
              <Lock className="w-10 h-10 text-[#c9a84c]" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5rem] font-black leading-[0.9] tracking-tight mb-6">
            Your data is yours.
            <br />
            <span className="text-white/30">Not ours. Not theirs.</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Yours.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-10">
            Four unbreakable guarantees. Not policies — architecture.
            <br className="hidden sm:block" />
            <span className="text-white/25 text-base">Because a policy can change. A well-built system cannot.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-base"
              style={{ boxShadow: "0 0 40px rgba(201,168,76,0.25)" }}
            >
              Own your AI
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#guarantees"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-white/60 border border-white/[0.12] hover:border-white/25 hover:text-white/80 transition-all text-base"
            >
              See the guarantees
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4 GUARANTEES
      ═══════════════════════════════════════════════ */}
      <section id="guarantees" className="py-28 px-6 animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">
              The four guarantees
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Big promises.
              <br />
              <span className="text-white/30">Backed by architecture.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GUARANTEES.map((g) => (
              <FeatureCard
                key={g.number}
                title={g.title}
                description={
                  <>
                    <p className="text-sm font-semibold mb-2" style={{ color: g.accentColor }}>
                      &ldquo;{g.tagline}&rdquo;
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed mb-3">
                      {g.body}
                    </p>
                    <div
                      className="rounded-xl p-3 text-[11px] font-mono text-white/40 leading-relaxed"
                      style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <span className="text-[9px] font-black tracking-widest uppercase block mb-1" style={{ color: g.accentColor }}>
                        TECHNICAL PROOF
                      </span>
                      {g.proof}
                    </div>
                  </>
                }
                icon={g.icon}
                iconVariant="gold"
                glow="gold"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TECHNICAL TRANSPARENCY
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0a0a14] animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">
              Technical transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Plain language.
              <br />
              <span className="text-white/30">Real explanations.</span>
            </h2>
            <p className="mt-4 text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
              Privacy promises are meaningless if you can't understand them. Here's what the technical terms actually mean for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECH_EXPLAINERS.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.term}
                  className="rounded-2xl p-7"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <Icon className="w-5 h-5 text-[#c9a84c] mb-4" />
                  <p className="font-black text-white text-lg mb-1">{t.term}</p>
                  <p className="text-[#c9a84c] text-xs font-semibold mb-4">{t.plain}</p>
                  <p className="text-white/45 text-sm leading-relaxed">{t.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COMPARISON TABLE
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">
              Compare
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              MEOK vs. the alternatives.
            </h2>
            <p className="mt-4 text-white/35 text-sm">
              Not a marketing comparison. An honest one.
            </p>
          </div>

          <Surface variant="elevated" className="overflow-x-auto rounded-2xl">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <th className="text-left px-6 py-4 text-white/30 text-xs font-black tracking-wider">Feature</th>
                  <th className="px-5 py-4 text-center">
                    <span className="inline-flex items-center gap-1.5 text-[#c9a84c] font-black text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                      MEOK
                    </span>
                  </th>
                  <th className="px-5 py-4 text-center text-white/35 font-black text-xs">ChatGPT</th>
                  <th className="px-5 py-4 text-center text-white/35 font-black text-xs">Claude</th>
                  <th className="px-5 py-4 text-center text-white/35 font-black text-xs">Gemini</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: i < COMPARISON.length - 1 ? "1px solid rgba(255,255,255,0.05)" : undefined,
                      background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                    }}
                  >
                    <td className="px-6 py-4 text-white/60 text-xs font-semibold">{row.feature}</td>

                    {/* MEOK */}
                    <td className="px-5 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="flex items-center gap-1 font-black text-xs" style={{ color: "#4ade80" }}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {row.meok.val}
                        </span>
                        <span className="text-white/30 text-[10px]">{row.meok.note}</span>
                      </div>
                    </td>

                    {/* ChatGPT */}
                    <td className="px-5 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className={`flex items-center gap-1 font-black text-xs ${row.chatgpt.good ? "text-green-400" : "text-red-400/70"}`}>
                          {row.chatgpt.good ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {row.chatgpt.val}
                        </span>
                        <span className="text-white/25 text-[10px]">{row.chatgpt.note}</span>
                      </div>
                    </td>

                    {/* Claude */}
                    <td className="px-5 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className={`flex items-center gap-1 font-black text-xs ${row.claude.good ? "text-green-400" : "text-red-400/70"}`}>
                          {row.claude.good ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {row.claude.val}
                        </span>
                        <span className="text-white/25 text-[10px]">{row.claude.note}</span>
                      </div>
                    </td>

                    {/* Gemini */}
                    <td className="px-5 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className={`flex items-center gap-1 font-black text-xs ${row.gemini.good ? "text-green-400" : "text-red-400/70"}`}>
                          {row.gemini.good ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {row.gemini.val}
                        </span>
                        <span className="text-white/25 text-[10px]">{row.gemini.note}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Surface>
          <p className="text-center text-white/20 text-[10px] mt-4 font-mono">
            Comparison based on publicly available data policies as of Q1 2026. Subject to change.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SELF-HOSTING ROADMAP
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0a0a14] animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-10 relative overflow-hidden" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.40), transparent)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/8 text-[#c9a84c] text-[10px] font-black tracking-widest uppercase mb-5">
                  <Server className="w-3 h-3" /> Self-hosting roadmap
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">
                  Run MEOK on
                  <br />
                  <span className="text-[#c9a84c]">your own server.</span>
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  H2 2026. Complete self-hosted deployment — pgvector, API, and all. Your data never leaves your machine. Not even encrypted. Just yours.
                </p>
                <p className="text-white/30 text-sm leading-relaxed">
                  Open-source deployment stack. Docker-compose ready. For developers and privacy-first individuals who want zero dependency on our infrastructure.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { phase: "Q1 2026", label: "Managed hosting — user-held keys", done: true },
                  { phase: "Q2 2026", label: "Export API — programmatic data portability", done: true },
                  { phase: "Q3 2026", label: "Self-hosted beta — Docker image", done: false },
                  { phase: "Q4 2026", label: "Self-hosted stable — full documentation", done: false },
                ].map((step) => (
                  <div
                    key={step.phase}
                    className="flex items-center gap-4 px-5 py-3.5 rounded-xl"
                    style={{
                      background: step.done ? "rgba(74,222,128,0.05)" : "rgba(255,255,255,0.02)",
                      border: step.done ? "1px solid rgba(74,222,128,0.15)" : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${step.done ? "bg-green-400" : "bg-white/20"}`} />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-white/30 block">{step.phase}</span>
                      <span className={`text-sm font-semibold ${step.done ? "text-white/70" : "text-white/35"}`}>{step.label}</span>
                    </div>
                    {step.done && <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 relative overflow-hidden animate-fade-in-up">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-black tracking-widest uppercase mb-6">
            <Lock className="w-3 h-3" /> Your data. Your rules.
          </div>
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
            AI that works for you.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Not on you.
            </span>
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Start with MEOK. Your data is yours from day one — and it stays yours, forever.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-lg"
            style={{ boxShadow: "0 0 60px rgba(201,168,76,0.30)" }}
          >
            Own your AI
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-5 text-white/20 text-xs font-mono">
            Zero training · Local-first · Full export · Real deletion
          </p>
        </div>
      </section>
    </div>
  );
}
