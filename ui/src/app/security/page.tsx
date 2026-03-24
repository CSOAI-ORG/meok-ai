import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Architecture | MEOK AI LABS",
  description:
    "How MEOK AI LABS protects your data: prompt injection defense, tool sandboxing, zero-knowledge memory, and the Maternal Covenant constitutional constraint.",
  alternates: { canonical: "https://meok.ai/security" },
  openGraph: {
    title: "Security Architecture | MEOK AI LABS",
    description:
      "How MEOK AI LABS protects your data: prompt injection defense, tool sandboxing, zero-knowledge memory, and the Maternal Covenant constitutional constraint.",
    url: "https://meok.ai/security",
  },
};

// ── Threat model cards ───────────────────────────────────────────────────────

const THREATS = [
  {
    icon: "🛡️",
    name: "Prompt Injection",
    desc: "User messages are sanitised before LLM injection. The Maternal Covenant system prompt is locked — it cannot be overridden by user input.",
  },
  {
    icon: "🔒",
    name: "Data Exfiltration",
    desc: "Every database query includes a user_id filter. User A can never read User B's data. Family groups share only explicitly flagged content.",
  },
  {
    icon: "🚫",
    name: "Sycophancy Attacks",
    desc: "The sycophancy detector scores every response (0.0–1.0). Scores above 0.6 trigger honest qualifier injection. AI cannot gaslight or mislead.",
  },
  {
    icon: "🧬",
    name: "Toxicity & Grooming",
    desc: "DistilBERT-powered safety classifier runs on every message. Score > 0.85 triggers Guardian webhook. Children's content has an additional guardrails layer.",
  },
];

// ── Data sovereignty cards ───────────────────────────────────────────────────

const DATA_STORAGE = [
  {
    icon: "🌐",
    name: "Web App",
    desc: "Encrypted at rest on EU-hosted infrastructure. Zero third-party analytics. No training on your conversations.",
  },
  {
    icon: "🧠",
    name: "Memory",
    desc: "pgvector semantic search. Your memories are scoped to your user ID — never visible to other users, never used to train models.",
  },
  {
    icon: "💻",
    name: "Desktop OS (Summer 2026)",
    desc: "Entirely local. LanceDB on your SSD. LLM runs on your hardware via Ollama. Nothing leaves your machine unless you explicitly sync.",
  },
];

// ── GDPR rows ────────────────────────────────────────────────────────────────

const GDPR_ITEMS = [
  {
    label: "Data export",
    detail: "GET /api/user/export",
    desc: "Download everything MEOK holds about you — memories, conversations, preferences — in JSON.",
  },
  {
    label: "Full deletion",
    detail: "DELETE /api/user",
    desc: "Permanently wipes your account, memories, and all associated data. Irreversible. Instant.",
  },
  {
    label: "ICO registered",
    detail: "UK GDPR",
    desc: "Registered with the Information Commissioner's Office. UK GDPR and Children's Code aligned.",
  },
  {
    label: "Processor agreements",
    detail: "Anthropic & OpenAI",
    desc: "Data processor agreements in place with all third-party LLM providers. Your data is never used for their training.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#0d0c18] text-white">
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4">
        {/* Background blob */}
        <div
          className="blob-gold"
          style={{ width: 600, height: 600, top: -200, left: "50%", transform: "translateX(-55%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-[#c9a84c] text-sm font-medium mb-8">
            🔐 Security Architecture
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Your data is yours.{" "}
            <br />
            <span className="text-gradient-gold">Our architecture</span>
            <br />
            enforces it.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            Security isn&apos;t a promise in a privacy policy. It&apos;s wired into every layer of
            the MEOK stack.
          </p>

          <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Built secure. Governed by covenant.
          </p>
        </div>
      </section>

      {/* ── Threat model ─────────────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-16" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            What threats does MEOK protect against?
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Four attack surfaces. Four layers of defence — built into the runtime, not bolted on
            afterwards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {THREATS.map((threat) => (
              <div key={threat.name} className="premium-card p-6">
                <div className="text-3xl mb-3" aria-hidden="true">
                  {threat.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{threat.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{threat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Maternal Covenant as code ─────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-16" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            How does the Maternal Covenant enforce security?
          </h2>
          <div
            className="premium-card p-8 md:p-10"
            style={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "rgba(201,168,76,0.7)" }}
            >
              Constitutional constraint
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              The Maternal Covenant isn&apos;t a brand promise — it&apos;s a{" "}
              <span className="text-[#c9a84c] font-semibold">
                constitutional constraint embedded in the system prompt
              </span>{" "}
              of every LLM call MEOK makes. It cannot be removed, overridden, or bypassed by user
              input.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.12)] p-5">
                <p className="text-[#c9a84c] font-bold text-xl mb-1">0.3</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Care floor enforced on every response. Scores below 0.3 are rejected before
                  streaming.
                </p>
              </div>
              <div className="rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.12)] p-5">
                <p className="text-[#c9a84c] font-bold text-xl mb-1">0.6</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sycophancy ceiling. Above this threshold, honest qualifiers are injected
                  automatically.
                </p>
              </div>
              <div className="rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.12)] p-5">
                <p className="text-[#c9a84c] font-bold text-xl mb-1">Crisis</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Self-harm and suicidal ideation detection routes to safety resources — never to an
                  AI response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Data sovereignty ─────────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-16" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Where is my data stored?
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            The answer changes depending on which MEOK product you use — and in every case, you
            remain the owner.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DATA_STORAGE.map((item) => (
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

      {/* ── GDPR compliance ──────────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="section-divider mb-16" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Is MEOK GDPR compliant?
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Yes. Compliance isn&apos;t a checkbox — it&apos;s built into the API surface.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GDPR_ITEMS.map((item) => (
              <div
                key={item.label}
                className="premium-card p-6 flex flex-col gap-2"
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-white font-semibold text-sm">{item.label}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] text-[#c9a84c] text-xs font-mono font-medium">
                    {item.detail}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Responsible disclosure ───────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div
            className="premium-card p-8 md:p-10 text-center"
            style={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div className="text-4xl mb-4" aria-hidden="true">
              🔍
            </div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "rgba(201,168,76,0.7)" }}
            >
              Responsible Disclosure
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
              Found a vulnerability?
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-lg mx-auto">
              Email{" "}
              <a
                href="mailto:security@meok.ai"
                className="text-[#c9a84c] hover:text-[#f0d080] transition-colors font-medium"
              >
                security@meok.ai
              </a>
              . We&apos;ll respond within 48 hours and credit you in our hall of fame.
            </p>
            <a
              href="mailto:security@meok.ai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(201,168,76,0.3)] text-[#c9a84c] font-semibold text-sm hover:bg-[rgba(201,168,76,0.08)] transition-colors duration-200"
            >
              Report a vulnerability →
            </a>
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
            Security you can inspect. Sovereignty you can own.
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            MEOK is built from the ground up with your data, your privacy, and your safety as
            non-negotiable constraints — not features.
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
              href="/privacy"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[rgba(201,168,76,0.3)] text-[#c9a84c] font-semibold text-lg hover:bg-[rgba(201,168,76,0.08)] transition-colors duration-200"
            >
              Read Privacy Policy
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
