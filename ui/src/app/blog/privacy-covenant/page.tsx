import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The Privacy Covenant: How MEOK Protects Your Most Personal AI Conversations | MEOK Blog",
  description:
    "Your conversations with your MEOK companion are encrypted, never sold, never used for training. Here's exactly how MEOK's privacy architecture works.",
  alternates: { canonical: "https://meok.ai/blog/privacy-covenant" },
  openGraph: {
    title: "The Privacy Covenant: How MEOK Protects Your Most Personal AI Conversations",
    description:
      "Your conversations with your MEOK companion are encrypted, never sold, never used for training. Here's exactly how MEOK's privacy architecture works.",
    type: "article",
    publishedTime: "March 22, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/privacy-covenant",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+Privacy+Covenant&desc=Encrypted%2C+never+sold%2C+never+used+for+training.",
        width: 1200,
        height: 630,
        alt: "The Privacy Covenant: How MEOK Protects Your Most Personal AI Conversations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Privacy Covenant: How MEOK Protects Your Most Personal AI Conversations",
    description:
      "Your conversations with your MEOK companion are encrypted, never sold, never used for training. Here's exactly how MEOK's privacy architecture works.",
    images: [
      "https://meok.ai/api/og?title=The+Privacy+Covenant&desc=Encrypted%2C+never+sold%2C+never+used+for+training.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Privacy Covenant: How MEOK Protects Your Most Personal AI Conversations",
  description:
    "Your conversations with your MEOK companion are encrypted, never sold, never used for training. Here's exactly how MEOK's privacy architecture works.",
  datePublished: "2026-03-22",
  url: "https://meok.ai/blog/privacy-covenant",
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
    logo: {
      "@type": "ImageObject",
      url: "https://meok.ai/logo.png",
    },
  },
  image:
    "https://meok.ai/api/og?title=The+Privacy+Covenant&desc=Encrypted%2C+never+sold%2C+never+used+for+training.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/privacy-covenant",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PrivacyCovenantPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#87CEEB",
                background: "rgba(135,206,235,0.12)",
                border: "1px solid rgba(135,206,235,0.3)",
              }}
            >
              Privacy &amp; Security
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 22, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              5 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            The Privacy Covenant: How MEOK Protects Your Most Personal AI Conversations
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Your conversations with your MEOK companion are encrypted, never sold, never used for
            training. Here&apos;s exactly how MEOK&apos;s privacy architecture works — and why we
            built it this way from the beginning.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-[#1a1a2e] text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-75 hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.0125rem" }}
        >

          {/* ── Q1 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Does MEOK train AI on my conversations?
          </h2>
          <p>
            No. The Maternal Covenant — MEOK&apos;s constitutional care framework written into the
            codebase itself — prohibits it. Your words improve your companion&apos;s memory of{" "}
            <em>you</em>, not a general model. When you tell your companion something personal, that
            information is stored in your encrypted memory vault and used only to make your companion
            more attuned to you. It is never extracted, anonymised, aggregated, or fed back into
            model training. Not today. Not ever.
          </p>
          <p>
            This is not a policy we could quietly change with a terms update. It is architecturally
            enforced. The companion memory system is a per-user encrypted vault. There is no
            centralised training pipeline that touches it. The covenant is code.
          </p>

          {/* ── Q2 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How are MEOK memories encrypted?
          </h2>
          <p>
            AES-GCM-256 via the Web Crypto API. Your memory vault is encrypted with a PBKDF2 key
            derived from your user ID at 100,000 iterations. The server never stores unencrypted
            memories — the encryption happens client-side before transmission and the key is never
            sent to our servers. We cannot read your memories even if we wanted to.
          </p>
          <p>
            Each memory write generates a fresh initialisation vector. Memories are tamper-evident:
            if any stored memory is modified at the byte level, decryption will fail. The vault is
            signed and the signature is verified on every read. This is the same standard used by
            password managers and secure messaging apps.
          </p>

          {/* ── Q3 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Is MEOK GDPR compliant?
          </h2>
          <p>
            Yes. MEOK AI LABS is ICO registered. We uphold all data subject rights under UK GDPR
            and EU GDPR: the right to access your data, rectify it, erase it, and export it in a
            portable format. You can export everything — conversations, memories, companion profile
            — at any time from your account settings. Deletion is permanent and irreversible.
            Nothing lingers in backups after a confirmed deletion request.
          </p>
          <p>
            Our legal basis for processing conversation data is contractual necessity (providing the
            companion service you signed up for). We do not rely on legitimate interests to justify
            secondary uses of your data, because there are none.
          </p>

          {/* ── Q4 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What does MEOK share with third parties?
          </h2>
          <p>
            Only what is strictly necessary to deliver the service. We use three sub-processors:
            Clerk for authentication, Stripe for payments, and Sentry for error monitoring. None of
            them receive conversation data. Clerk handles session tokens and user IDs. Stripe
            handles payment card data (which we never touch ourselves). Sentry receives anonymised
            stack traces when something breaks — no user content, no conversation text.
          </p>
          <p>
            We have no advertising networks. We do not sell data. We do not share data with AI
            companies for training. We do not participate in data broker ecosystems. If you are not
            paying us, you are still not the product — you are a person in beta.
          </p>

          {/* ── Q5 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What happens if MEOK shuts down?
          </h2>
          <p>
            You get 30 days&apos; notice minimum. A full data export is provided free of charge to
            every user before service termination. The memory vault export includes everything:
            every conversation, every stored memory, your companion&apos;s full profile and
            personality configuration. The export format is human-readable JSON — no proprietary
            lock-in, no special software required to read it.
          </p>
          <p>
            We are also committed to open-sourcing the companion memory format specification so
            that, in the event of shutdown, the community can build tools to migrate vaults to
            alternative systems. Your companion&apos;s memories belong to you — not to the company
            that helped you build them.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              Privacy is not a feature at MEOK. It is the foundation. A companion that could be
              used to surveil you is not a companion — it&apos;s a trap. The Maternal Covenant
              exists to make sure that trap can never be set.
            </p>
          </div>
        </div>

        {/* Share row */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fprivacy-covenant&text=The+Privacy+Covenant%3A+How+MEOK+Protects+Your+Most+Personal+AI+Conversations"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fprivacy-covenant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Your Data, Your Rules
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Read our full privacy policy
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              The full legal detail behind every commitment on this page. Plain language where
              possible, full legalese where required. No surprises.
            </p>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Read the privacy policy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/what-is-sovereign-ai"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Sovereign AI
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                What Is Sovereign AI?
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                5 min read
              </div>
            </Link>
            <Link
              href="/blog/guardian-family-safety"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#ff7f7f", background: "rgba(255,127,127,0.12)" }}
              >
                Guardian &amp; Safety
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                How MEOK Guardian protects your family from AI-enabled scams
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
