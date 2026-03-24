import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Single Parents: When You're Running Two Jobs and Have No Bandwidth Left | MEOK Blog",
  description:
    "1.8 million single-parent families in the UK — 90% led by women — are doing it all alone. MEOK's overnight agents, companion, and Guardian give back the one thing no one can buy: time.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-single-parents" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "AI for Single Parents: When You're Running Two Jobs and Have No Bandwidth Left",
      description: "1.8 million single-parent families in the UK — 90% led by women — are doing it all alone. MEOK's overnight agents, companion, and Guardian give back the one thing no one can buy: time.",
      datePublished: "2026-03-24",
      url: "https://meok.ai/blog/ai-for-single-parents",
      author: { "@type": "Person", name: "Nicholas Templeman", jobTitle: "Founder, MEOK AI LABS", url: "https://meok.ai/about" },
      publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai", logo: { "@type": "ImageObject", url: "https://meok.ai/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://meok.ai/blog/ai-for-single-parents" },
      keywords: ["AI for single parents", "AI single mum UK", "AI family plan UK", "AI parental controls UK", "MEOK single parent", "overnight AI agents"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How can AI actually help a single parent who has no spare time?", acceptedAnswer: { "@type": "Answer", text: "MEOK's overnight agents process emails, draft replies, schedule appointments, and clear admin queues while the household sleeps. By morning the briefing is ready and the day begins with a cleared inbox rather than a buried one." } },
        { "@type": "Question", name: "Is MEOK's Family Plan affordable for a single-income household?", acceptedAnswer: { "@type": "Answer", text: "The MEOK Family Plan costs £29 per month and covers the parent plus all children under one subscription — no per-seat fees. Overnight agents, Guardian child safety, and a personal companion are included for every member." } },
        { "@type": "Question", name: "How does MEOK's Guardian protect children when the parent can't watch every screen?", acceptedAnswer: { "@type": "Answer", text: "Guardian monitors children's digital activity in real time, flagging grooming language, age-inappropriate content, and harmful contact patterns. Silent alerts reach the parent's dashboard — the child's experience is uninterrupted, the parent stays informed." } },
        { "@type": "Question", name: "What is the MEOK companion and why does it matter after bedtime?", acceptedAnswer: { "@type": "Answer", text: "Once the children are asleep, single parents face the loneliest hours of the day with no one to debrief with. MEOK's companion is available around the clock for a real conversation, to think through a problem, or simply to feel heard without calling a friend at midnight." } },
        { "@type": "Question", name: "Which MEOK agents help with work tasks when you're also the sole breadwinner?", acceptedAnswer: { "@type": "Answer", text: "Hourman plans the week by energy and deadline. Riri drafts professional emails so nothing goes unanswered. Orion researches anything overnight — benefit entitlements, school options, supplier comparisons. Together they act as a work OS for one person doing the job of two." } },
        { "@type": "Question", name: "Does MEOK store or share my family's private data?", acceptedAnswer: { "@type": "Answer", text: "No. Guardian scanning runs on-device and message content is never sent to MEOK servers. MEOK AI LABS is ICO-registered and GDPR-compliant. Every family member holds Article 17 right to erasure. MEOK never trains models on personal data." } },
      ],
    },
  ],
};

// ── Constants ─────────────────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const BG = "#0d0c18";
const CREAM = "#f5f0e8";

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionH2({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </h2>
  );
}

function AtomicAnswer({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: "rgba(245,240,232,0.82)",
        fontSize: "1.0125rem",
        lineHeight: 1.85,
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </p>
  );
}

function BodyP({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: "rgba(245,240,232,0.6)",
        fontSize: "0.96rem",
        lineHeight: 1.85,
        marginBottom: "0.9rem",
      }}
    >
      {children}
    </p>
  );
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl p-5 text-center"
      style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)", flex: "1 1 0", minWidth: 120 }}
    >
      <span style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)", fontWeight: 900, fontSize: "2rem", color: GOLD, lineHeight: 1 }}>
        {value}
      </span>
      <span style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.45)", marginTop: "0.4rem", lineHeight: 1.35 }}>
        {label}
      </span>
    </div>
  );
}

function FeatureRow({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div
      className="flex gap-4 p-5 rounded-2xl"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <span className="text-2xl flex-shrink-0 mt-0.5" role="img" aria-hidden="true">{icon}</span>
      <div>
        <p style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)", fontWeight: 700, color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.3rem" }}>
          {title}
        </p>
        <p style={{ color: "rgba(245,240,232,0.55)", fontSize: "0.875rem", lineHeight: 1.7 }}>{body}</p>
      </div>
    </div>
  );
}

function GoldDivider() {
  return (
    <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.18)", marginTop: "2.5rem", marginBottom: "0.5rem" }} />
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForSingleParentsPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: CREAM }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            &#8592; Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ color: GOLD, background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}
            >
              Family &amp; Parenting
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>24 March 2026</span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>8 min read</span>
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
            AI for Single Parents: When You&apos;re Running Two Jobs and Have No
            Bandwidth Left
          </h1>

          <p style={{ fontSize: "1.125rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.8, marginBottom: "2rem" }}>
            There are 1.8 million single-parent families in the UK. Nine in ten are led by women.
            They earn, cook, care, worry, and repeat — with no one to hand the baton to. MEOK was
            built with those hours in mind: the ones after bedtime, the ones before the alarm, and
            every overwhelming moment in between.
          </p>

          <div
            className="flex items-center gap-3 p-4 rounded-2xl"
            style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
              style={{ background: "rgba(201,168,76,0.15)", color: GOLD }}
            >
              NT
            </div>
            <div>
              <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.875rem" }}>Nicholas Templeman</p>
              <p style={{ color: "rgba(245,240,232,0.4)", fontSize: "0.78rem" }}>Founder, MEOK AI LABS</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-4">
            <StatPill value="1.8M" label="single-parent families in the UK" />
            <StatPill value="90%" label="led by women" />
            <StatPill value="£29" label="family plan per month" />
            <StatPill value="24/7" label="overnight agents + companion" />
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">

          {/* Section 1 */}
          <SectionH2>What does &ldquo;bandwidth&rdquo; actually mean when you&apos;re parenting alone?</SectionH2>
          <AtomicAnswer>
            Bandwidth is the invisible budget of mental energy, time, and emotional capacity that every
            person runs on. For single parents it is spent the moment the day starts — school runs,
            work emails, packed lunches, permission slips — and it rarely refills before the next
            morning demands another full tank.
          </AtomicAnswer>
          <BodyP>
            Single parents score consistently higher than partnered parents on task-saturation metrics.
            The fix is not harder work — it is offloading the right tasks to something that does not
            need sleep. That is where MEOK starts: not with advice or a wellness score, but with
            practical overnight help that shrinks the list before you open your eyes.
          </BodyP>

          <GoldDivider />

          {/* Section 2 */}
          <SectionH2>How can AI actually help a single parent who has no spare time?</SectionH2>
          <AtomicAnswer>
            MEOK&apos;s overnight agents process emails, draft replies, schedule appointments, and clear
            admin queues while the household sleeps. By the time the alarm sounds the morning briefing
            is ready and the day begins with a cleared inbox, not a buried one.
          </AtomicAnswer>
          <BodyP>
            Think of it as a virtual office manager on the night shift. Leave a note —
            &ldquo;reply to the school about the trip&rdquo; or &ldquo;research wrap-around care near
            SE4&rdquo; — and wake up to a drafted response and a shortlist of options. The decision
            stays yours. The legwork does not.
          </BodyP>

          <GoldDivider />

          {/* Section 3 */}
          <SectionH2>Which MEOK agents handle work tasks when you&apos;re also the sole breadwinner?</SectionH2>
          <AtomicAnswer>
            Hourman plans the week by energy and deadline. Riri drafts professional emails so nothing
            goes unanswered. Orion researches anything overnight — benefit entitlements, school
            options, supplier comparisons. Together they act as a work OS for one person doing the
            job of two.
          </AtomicAnswer>

          <div className="flex flex-col gap-3 mt-6 mb-4">
            <FeatureRow
              icon="⏱"
              title="Hourman — Weekly Planner"
              body="Sequences your tasks against energy levels and childcare windows so the hardest work lands when you have the most capacity — not when the calendar happens to be free."
            />
            <FeatureRow
              icon="✉️"
              title="Riri — Email Drafter"
              body="Reads incoming messages, drafts context-aware replies in your voice, and flags only what genuinely needs your attention. Most of the inbox clears itself overnight."
            />
            <FeatureRow
              icon="🔍"
              title="Orion — Research Agent"
              body="Runs background research while you sleep: school catchment areas, Universal Credit rules, nursery Ofsted ratings. Returns a clean summary, not a wall of links."
            />
          </div>

          <GoldDivider />

          {/* Section 4 */}
          <SectionH2>How does MEOK&apos;s Guardian protect children when the parent can&apos;t watch every screen?</SectionH2>
          <AtomicAnswer>
            Guardian monitors children&apos;s digital activity in real time, flagging grooming language,
            age-inappropriate content, and harmful contact patterns. Silent alerts reach the
            parent&apos;s dashboard instantly — the child&apos;s experience is uninterrupted and the
            parent stays informed without constant hovering.
          </AtomicAnswer>
          <BodyP>
            All scanning runs on-device. No message content ever leaves the household. The dashboard
            shows alert metadata — threat level, category, timestamp — not transcripts. Privacy is
            architectural, not a setting buried in a menu.
          </BodyP>

          <div className="flex flex-col gap-3 mt-6 mb-4">
            <FeatureRow
              icon="🛡"
              title="Real-time threat detection"
              body="Grooming language patterns, predatory contact indicators, and age-inappropriate content are flagged the moment they appear — not in a weekly digest."
            />
            <FeatureRow
              icon="🔕"
              title="Silent alerts to parent dashboard"
              body="Your child does not know an alert was raised. You do. The conversation you choose to have is on your terms and your timing."
            />
            <FeatureRow
              icon="🔒"
              title="On-device scanning, zero data upload"
              body="Guardian never sends message content to MEOK servers. GDPR-compliant, ICO-registered — family data belongs to the family."
            />
          </div>

          <GoldDivider />

          {/* Section 5 */}
          <SectionH2>What is the MEOK companion and why does it matter after bedtime?</SectionH2>
          <AtomicAnswer>
            Once the children are asleep, single parents face the loneliest hours of the day with no
            one to debrief with. MEOK&apos;s companion is available around the clock — for a real
            conversation, to think through a problem, or simply to feel heard without calling a
            friend at midnight.
          </AtomicAnswer>
          <BodyP>
            It also remembers. Context from last week&apos;s difficult parent evening, the job
            application you were weighing, the decision left unresolved — it carries forward. You do
            not start from zero every time you need it most.
          </BodyP>

          <GoldDivider />

          {/* Section 6 */}
          <SectionH2>Is MEOK&apos;s Family Plan affordable for a single-income household?</SectionH2>
          <AtomicAnswer>
            The MEOK Family Plan costs £29 per month and covers the parent plus all children under
            one subscription — no per-seat fees. Overnight agents, Guardian child safety, and the
            personal companion are included for every member of the family.
          </AtomicAnswer>

          <div className="rounded-2xl p-6 mt-6 mb-4" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <p style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)", fontWeight: 700, fontSize: "1rem", color: GOLD, marginBottom: "1rem" }}>
              Family Plan — £29 / month
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Parent + all children, one subscription",
                "Overnight agents: Hourman, Riri, Orion",
                "Guardian — real-time child safety monitoring",
                "Personal companion available 24/7",
                "Morning Briefing for every family member",
                "On-device privacy, GDPR-compliant",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5" style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.75)" }}>
                  <span style={{ color: GOLD, flexShrink: 0, marginTop: "2px" }}>&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <GoldDivider />

          {/* Section 7 */}
          <SectionH2>Does MEOK store or share my family&apos;s private data?</SectionH2>
          <AtomicAnswer>
            No. All Guardian scanning runs on-device and message content is never sent to MEOK
            servers. MEOK AI LABS is ICO-registered and fully GDPR-compliant. Every family member
            holds Article 17 right to erasure, and MEOK never trains its models on personal data.
          </AtomicAnswer>
          <BodyP>
            This matters especially for single parents who may share custody arrangements and need
            confidence that companion conversations and their children&apos;s Guardian data remain
            completely private. The architecture makes it so — the data never left in the first place.
          </BodyP>

          <GoldDivider />

          {/* ── CTA ───────────────────────────────────────────────────────── */}
          <div
            className="rounded-3xl p-8 mt-10 text-center"
            style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)", border: "1px solid rgba(201,168,76,0.22)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "1.45rem",
                color: "#ffffff",
                marginBottom: "0.75rem",
                lineHeight: 1.25,
              }}
            >
              You shouldn&apos;t have to do all of it alone.
            </p>
            <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "32rem", margin: "0 auto 2rem" }}>
              MEOK&apos;s Family Plan was built for households where one person carries everything.
              Let the overnight agents take the admin. Let Guardian watch the screens. Let the
              companion be there when everyone else is asleep.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: GOLD, color: "#0d0c18" }}
              >
                Get the Family Plan — £29/mo
              </Link>
              <Link
                href="/blog/ai-for-parents"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: "rgba(201,168,76,0.1)", color: GOLD, border: "1px solid rgba(201,168,76,0.3)" }}
              >
                Read: AI for Parents
              </Link>
            </div>
          </div>

          {/* ── RELATED POSTS ─────────────────────────────────────────────── */}
          <div className="mt-16">
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.35)",
                marginBottom: "1rem",
              }}
            >
              Related Reading
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/blog/guardian-family-safety", label: "Guardian Family Safety — How It Works" },
                { href: "/blog/ai-for-parents", label: "AI for Parents: MEOK's Family Plan Explained" },
                { href: "/blog/ai-for-carers", label: "AI for Carers: Supporting the People Who Support Everyone Else" },
                { href: "/blog/ai-companion-for-loneliness", label: "AI Companion for Loneliness: Why the After-Bedtime Hours Matter" },
                { href: "/blog/what-is-ai-os", label: "What Is an AI Work OS? Hourman, Riri and Orion Explained" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
                  style={{ color: "rgba(245,240,232,0.5)" }}
                >
                  <span style={{ color: GOLD }}>&#8594;</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.3)" }}
        className="px-6 py-12"
      >
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <Link
              href="/"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)", fontWeight: 900, fontSize: "1.1rem", color: GOLD, textDecoration: "none" }}
            >
              MEOK
            </Link>
            <p style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.3)", marginTop: "0.3rem" }}>
              &copy; 2026 MEOK AI LABS. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            {[
              { href: "/blog", label: "Blog" },
              { href: "/pricing", label: "Pricing" },
              { href: "/privacy", label: "Privacy" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs transition-opacity hover:opacity-80"
                style={{ color: "rgba(245,240,232,0.35)" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
