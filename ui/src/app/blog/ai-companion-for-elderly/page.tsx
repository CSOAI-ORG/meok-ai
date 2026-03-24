import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Companion for Elderly Parents: What Families Need to Know | MEOK Blog",
  description:
    "50% of elderly adults are targeted by scammers. An AI companion that detects fraud, flags isolation, and provides 24/7 support — without surveillance. Here's how MEOK protects your family.",
  alternates: { canonical: "https://meok.ai/blog/ai-companion-for-elderly" },
  openGraph: {
    title: "AI Companion for Elderly Parents: What Families Need to Know",
    description:
      "50% of elderly adults are targeted by scammers. An AI companion that detects fraud, flags isolation, and provides 24/7 support — without surveillance. Here's how MEOK protects your family.",
    type: "article",
    publishedTime: "March 24, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-for-elderly",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+for+Elderly+Parents&desc=50%25+of+elderly+adults+are+targeted+by+scammers.+Here%27s+how+MEOK+protects+your+family.",
        width: 1200,
        height: 630,
        alt: "AI Companion for Elderly Parents: What Families Need to Know",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion for Elderly Parents: What Families Need to Know",
    description:
      "50% of elderly adults are targeted by scammers. An AI companion that detects fraud, flags isolation, and provides 24/7 support — without surveillance. Here's how MEOK protects your family.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+for+Elderly+Parents&desc=50%25+of+elderly+adults+are+targeted+by+scammers.+Here%27s+how+MEOK+protects+your+family.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Companion for Elderly Parents: What Families Need to Know",
  description:
    "50% of elderly adults are targeted by scammers. An AI companion that detects fraud, flags isolation, and provides 24/7 support — without surveillance. Here's how MEOK protects your family.",
  datePublished: "March 24, 2026",
  url: "https://meok.ai/blog/ai-companion-for-elderly",
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

export default function AICompanionForElderly() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── DARK HERO ───────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(123,196,127,0.14) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#7BC47F",
                background: "rgba(123,196,127,0.12)",
                border: "1px solid rgba(123,196,127,0.3)",
              }}
            >
              Guardian
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 24, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Clock className="w-3.5 h-3.5" />
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
            AI Companion for Elderly Parents: What Families Need to Know
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
            One in two elderly adults is actively targeted by scammers each year. The scripts are
            AI-generated. The voices are cloned. And the people being targeted are the ones least
            likely to have anyone watching out for them — until now.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ background: "#f5f0e8", color: "#2a2a3e" }}
      >
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
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not
              a luxury.
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
            My nan was nearly scammed on a Tuesday. The caller knew her bank&apos;s name, her
            postcode, and sounded entirely plausible. She&apos;s sharp. She still nearly fell for
            it. The call was AI-generated. The script was trained on thousands of successful frauds.
            She had nothing watching out for her except her own instincts — and those instincts were
            being outgunned by technology built to defeat them.
          </p>
          <p>
            That experience is not unusual. In the UK, elderly people are 50% more likely to be
            targeted by scammers than the general population. Over £2.3 billion is lost to fraud
            every year. Two-thirds of those victims are over 65. And almost no AI product on the
            market was built to help them.
          </p>

          <h2>What is an AI companion for elderly people?</h2>
          <p>
            An AI companion for elderly people is a personal AI assistant designed around the needs,
            pace, and priorities of older adults — providing conversation, reminders, document
            support, and protection from fraud. Unlike general-purpose AI tools, it is built for
            accessibility, trust, and safety rather than productivity or entertainment.
          </p>

          <h2>How can AI help elderly people live independently?</h2>
          <p>
            AI can support independent living by providing 24/7 assistance without burdening family
            members — reading documents, flagging unusual messages, setting medication reminders,
            and offering conversation. The key distinction is that a good AI companion works
            <em> for</em> the elderly person, not as a monitoring tool for their relatives.
          </p>

          <h2>Can AI detect elder fraud and scams?</h2>
          <p>
            Yes. MEOK&apos;s ScamStop module monitors incoming messages and calls in real time,
            flagging romance scam patterns, HMRC impersonation attempts, and gift card fraud before
            the person engages. It builds a baseline of normal communication patterns and alerts
            when something diverges — acting as a witness the person always has with them.
          </p>

          <h3>The scams MEOK ScamStop catches</h3>
          <p>
            The three most common fraud vectors targeting elderly people in the UK are romance scams
            (which average £8,000 per victim), HMRC impersonation calls claiming overdue tax, and
            gift card scams where a &ldquo;family member in trouble&rdquo; requests urgent payment
            by voucher. All three follow recognisable linguistic and behavioural patterns that
            ScamStop is trained to flag.
          </p>

          <h2>What is Senior Mode in MEOK?</h2>
          <p>
            Senior Mode is MEOK&apos;s accessibility profile built for older users. It enforces a
            minimum 16px font size, 44&times;44 pixel touch targets, a 7:1 contrast ratio (exceeding
            WCAG AA), and voice-first interaction so the person never needs to type if they
            don&apos;t want to. The interface simplifies to the essentials without condescending.
          </p>

          <h3>Voice-first by design</h3>
          <p>
            For many elderly users, voice is the most natural and accessible interface. MEOK&apos;s
            voice mode does not require wake words, does not time out aggressively, and responds at
            a pace set by the user. It is designed for people who did not grow up with smartphones —
            not for people who already know how to use them.
          </p>

          <h2>Is an AI companion safe for elderly users?</h2>
          <p>
            MEOK is UK GDPR compliant, ICO registered, and does not sell user data to third parties.
            Data is stored on UK servers. The AI operates under MEOK&apos;s Maternal Covenant — a
            care-based alignment framework that prioritises the wellbeing of the person using it
            over engagement metrics, advertising revenue, or any third-party interest.
          </p>

          <h3>Privacy without surveillance</h3>
          <p>
            The most important principle is that the AI works <strong>for</strong> the elderly
            person, not their family. Family members do not receive access to conversations by
            default. They receive only summaries the elderly person chooses to share. An AI that
            reports on someone to their relatives without consent is not a companion — it is
            surveillance with a friendly interface.
          </p>

          <h2>How does MEOK&apos;s Guardian protect elderly family members?</h2>
          <p>
            MEOK Guardian combines ScamStop fraud detection with a Family Dashboard that generates
            alerts when unusual activity is detected — not a surveillance feed, but a curated
            summary of flagged events. In a crisis, the AI automatically routes to pre-configured
            emergency contacts, including GPs, family members, and emergency services where
            appropriate.
          </p>

          <h3>The Family Dashboard</h3>
          <p>
            Family members with permission can view a weekly digest of anything the AI flagged as
            worth discussing. This is not a transcript. It is a structured summary — designed to
            provide connection without control. The elderly person sets what is shared and can
            revoke access at any time.
          </p>

          <h3>Crisis response</h3>
          <p>
            If the AI detects signs of a medical emergency, expressions of severe distress, or an
            active fraud attempt in progress, it escalates immediately. It prompts the person to
            contact emergency services, notifies the family emergency contact, and logs the
            interaction for review. Speed matters more than elegance in a crisis.
          </p>

          <h2>How do I set up MEOK for my elderly parent?</h2>
          <p>
            Setup takes approximately 10 minutes and is designed to be done together — you and your
            parent, side by side. The Hatching Ceremony walks through naming the AI, setting
            communication preferences, adding trusted contacts (bank, GP, family), and enabling
            ScamStop. Your parent owns the AI from the first minute. You are the person who
            introduced them.
          </p>

          <h3>What to prepare before you begin</h3>
          <p>
            Have the following ready: your parent&apos;s bank name (not account number), their
            GP&apos;s surgery phone number, two trusted family contacts, and a preference for voice
            or text. The setup does not ask for financial information, National Insurance numbers,
            or passwords. If any AI setup ever asks for those things, stop immediately.
          </p>
        </div>

        {/* Closing pull quote */}
        <div
          className="my-10 rounded-2xl p-8"
          style={{
            background: "#0d0c18",
            borderLeft: "3px solid #7BC47F",
          }}
        >
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            The people who most need AI protection are the ones being actively excluded from AI
            products. Your CTO has five AI tools. Your nan has a landline and a pension that
            scammers know the exact size of.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            MEOK is the AI built for the people the industry forgot. Sovereign, private, and on
            their side.
          </p>
          <p
            className="text-sm mt-4 font-semibold"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            — Nicholas Templeman, Founder
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-companion-for-elderly&text=AI+Companion+for+Elderly+Parents%3A+What+Families+Need+to+Know"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-companion-for-elderly"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            LinkedIn
          </a>
        </div>

        {/* CTA — Guardian focused */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-10 relative overflow-hidden"
          style={{ background: "#0d0c18" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(123,196,127,0.6), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#7BC47F" }}
            >
              Guardian
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Protect the people who need it most.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              MEOK Guardian is free, built for the people AI forgot, and takes 10 minutes to set
              up. Her AI. Her sovereignty. Her protection.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guardian"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
                style={{ background: "#7BC47F", color: "#0d0c18" }}
              >
                Learn about Guardian
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/hatch"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all border"
                style={{
                  color: "rgba(245,240,232,0.7)",
                  borderColor: "rgba(245,240,232,0.15)",
                }}
              >
                Hatch her AI free
              </Link>
            </div>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/why-your-nan-needs-sovereign-ai"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#7BC47F", background: "rgba(123,196,127,0.12)" }}
              >
                Guardian
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                Why Your Nan Needs Sovereign AI More Than Your CTO Does
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                6 min read
              </div>
            </Link>
            <Link
              href="/blog/meok-for-adhd"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Neurodivergent
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK for ADHD: An AI That Actually Understands How You Think
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                7 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
