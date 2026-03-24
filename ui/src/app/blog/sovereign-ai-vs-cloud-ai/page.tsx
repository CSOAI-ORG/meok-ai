import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Sovereign AI vs Cloud AI: Who Really Controls Your Data? | MEOK Blog",
  description:
    "Cloud AI processes your data on distant servers you'll never audit. Sovereign AI keeps it yours. Here's what that distinction means for privacy, safety, and trust.",
  alternates: { canonical: "https://meok.ai/blog/sovereign-ai-vs-cloud-ai" },
  openGraph: {
    title: "Sovereign AI vs Cloud AI: Who Really Controls Your Data?",
    description:
      "Cloud AI processes your data on distant servers you'll never audit. Sovereign AI keeps it yours. Here's what that distinction means for privacy, safety, and trust.",
    type: "article",
    publishedTime: "March 24, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/sovereign-ai-vs-cloud-ai",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Sovereign+AI+vs+Cloud+AI&desc=Who+really+controls+your+data%3F+The+honest+answer+will+surprise+you.",
        width: 1200,
        height: 630,
        alt: "Sovereign AI vs Cloud AI: Who Really Controls Your Data?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign AI vs Cloud AI: Who Really Controls Your Data?",
    description:
      "Cloud AI processes your data on servers you can never audit. Sovereign AI keeps it yours. Here's the real difference.",
    images: [
      "https://meok.ai/api/og?title=Sovereign+AI+vs+Cloud+AI&desc=Who+really+controls+your+data%3F+The+honest+answer+will+surprise+you.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sovereign AI vs Cloud AI: Who Really Controls Your Data?",
  description:
    "Cloud AI processes your data on distant servers you'll never audit. Sovereign AI keeps it yours. Here's what that distinction means for privacy, safety, and trust.",
  datePublished: "March 24, 2026",
  url: "https://meok.ai/blog/sovereign-ai-vs-cloud-ai",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SovereignAIvsCloudAI() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── DARK HERO ───────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-14 px-6 relative overflow-hidden"
        style={{ background: "#0d0c18" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(135,206,235,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            ←
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#87CEEB",
                background: "rgba(135,206,235,0.12)",
                border: "1px solid rgba(135,206,235,0.3)",
              }}
            >
              Privacy
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              📅
              March 24, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              ⏱
              7 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Sovereign AI vs Cloud AI: Who Really Controls Your Data?
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              maxWidth: 640,
            }}
          >
            Cloud AI processes your data on distant servers you&apos;ll never audit. Sovereign AI keeps it
            yours. Here&apos;s what that distinction means for privacy, safety, and trust.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-[#1a1a2e] text-sm">Nicholas Templeman</p>
            <p className="text-xs text-[#1a1a2e]/45 mb-1">Founder, MEOK AI LABS</p>
            <p className="text-xs text-[#1a1a2e]/40 leading-relaxed">
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in the
              UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-colors hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <p>
            When you type a message into ChatGPT, Gemini, or Copilot, that text leaves your device
            immediately. It travels to a data centre in another country, gets processed by a model
            running on hardware you have no visibility into, and the resulting response travels back.
            At every point in that journey, the company controlling the infrastructure makes decisions
            about what to log, how long to retain it, and whether it contributes to future training.
            You agreed to this in the terms of service. Most people never read them.
          </p>

          <h2>What is sovereign AI?</h2>
          <p>
            Sovereign AI is any AI system where the individual user retains principal authority over
            their data, their memory, and their model choices. It means your conversations are not
            logged to a corporate server without your knowledge, your data is not used to train
            models you do not own, and you can export, delete, or migrate your history at will. The
            AI serves you — not the company that built it.
          </p>

          <h2>What is cloud AI and who controls it?</h2>
          <p>
            Cloud AI is AI delivered as a service over the internet, where computation happens on the
            provider&apos;s infrastructure rather than your device. The controlling party is whoever owns
            the servers: OpenAI for ChatGPT, Google for Gemini, Microsoft for Copilot. Those companies
            set the data retention policies, decide what gets logged, and determine whether your inputs
            contribute to future model training — often through opt-out settings buried in account
            preferences most users never find.
          </p>

          <h2>Is your ChatGPT data private?</h2>
          <p>
            By default, no — not in the way most people understand privacy. OpenAI&apos;s privacy policy
            permits them to use your conversations to improve their models unless you explicitly opt
            out in account settings. Your data is stored on OpenAI&apos;s servers, subject to OpenAI&apos;s
            data retention schedule, and accessible to OpenAI staff under certain conditions. It is
            not end-to-end encrypted. It is not local. It is not yours in any legally meaningful sense.
          </p>

          <h2>What data does MEOK collect?</h2>
          <p>
            MEOK collects only what is necessary to operate your sovereign vault: your conversations
            (encrypted at rest with <strong>AES-GCM-256</strong>), the semantic memories extracted
            from them, and your account credentials. MEOK does not sell data to third parties, does
            not train on your conversations without explicit consent, and is <strong>UK GDPR compliant</strong>
            and <strong>ICO registered</strong>. The Maternal Covenant governance layer independently
            ensures outputs meet care standards before they reach you.
          </p>

          <h2>Can sovereign AI run completely offline?</h2>
          <p>
            Yes — and MEOK is building exactly this. <strong>MEOK Desktop OS</strong>, arriving Summer
            2026, is built on <strong>Tauri 2.0</strong>, <strong>LanceDB</strong>, and <strong>Ollama</strong>
            for a fully local-first architecture. Your memory, your model inference, and your vault
            all run on your own hardware. No internet connection required for core functionality.
            This is the purest expression of sovereign AI: genuinely air-gapped personal intelligence.
          </p>

          <h2>What is the difference between sovereign AI and on-premise AI?</h2>
          <p>
            On-premise AI typically refers to enterprise deployments — a company running AI infrastructure
            on its own servers to keep corporate data inside its network. Sovereign AI is the individual
            equivalent: a person running AI that serves their interests alone, on hardware they control,
            with data they own. MEOK bridges both: it works as a cloud-based sovereign system today and
            will ship a fully local desktop version for users who want zero network dependency.
          </p>

          <h2>How does MEOK protect your data?</h2>
          <p>
            Protection operates at multiple layers. All stored memories are encrypted with
            <strong> AES-GCM-256</strong> at rest. Sensitive conversations route through your local
            Ollama instance before touching any network boundary. Row-level security at the database
            ensures no cross-user data access is architecturally possible. The <strong>Maternal Covenant</strong>
            evaluates every AI output against care and safety principles before delivery. MEOK is ICO
            registered in the UK, GDPR compliant, and provides a full data export endpoint so you
            can leave — with everything — at any time.
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fsovereign-ai-vs-cloud-ai&text=Sovereign+AI+vs+Cloud+AI%3A+Who+Really+Controls+Your+Data%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fsovereign-ai-vs-cloud-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "#1a1a2e" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.6), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Free Forever
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Take back control of your AI data.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              MEOK is the only AI OS built around individual sovereignty. Encrypted vault.
              GDPR compliant. Your data is yours — always. Hatch your AI free in under 3 minutes.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free
              →
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/what-is-sovereign-ai"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Sovereign AI
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                What Is Sovereign AI?
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                ⏱
                5 min read
              </div>
            </Link>
            <Link
              href="/blog/memory-portability"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Memory
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                AI Memory Portability: Own Your History, Switch Any Model
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                ⏱
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
