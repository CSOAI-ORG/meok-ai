import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK vs Replika: Why Sovereign Memory Changes Everything | MEOK Blog",
  description:
    "Replika changed how people think about AI companions. But it owns your memories, can change your companion\u2019s personality without consent, and monetises intimacy. MEOK is built differently.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-replika" },
  openGraph: {
    title: "MEOK vs Replika: Why Sovereign Memory Changes Everything",
    description:
      "Replika changed how people think about AI companions. But it owns your memories, can change your companion\u2019s personality without consent, and monetises intimacy. MEOK is built differently.",
    type: "article",
    publishedTime: "March 24, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-replika",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+Replika%3A+Why+Sovereign+Memory+Changes+Everything&desc=Replika+owns+your+memories.+MEOK+gives+them+back+to+you.",
        width: 1200,
        height: 630,
        alt: "MEOK vs Replika: Why Sovereign Memory Changes Everything",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs Replika: Why Sovereign Memory Changes Everything",
    description:
      "Replika changed how people think about AI companions. But it owns your memories, can change your companion\u2019s personality without consent, and monetises intimacy.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+Replika%3A+Why+Sovereign+Memory+Changes+Everything&desc=Replika+owns+your+memories.+MEOK+gives+them+back+to+you.",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK vs Replika: Why Sovereign Memory Changes Everything",
  description:
    "Replika changed how people think about AI companions. But it owns your memories, can change your companion\u2019s personality without consent, and monetises intimacy. MEOK is built differently.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-vs-replika",
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
    "https://meok.ai/api/og?title=MEOK+vs+Replika%3A+Why+Sovereign+Memory+Changes+Everything",
  articleSection: "AI Comparison",
  keywords: [
    "MEOK vs Replika",
    "Replika alternative",
    "AI companion data ownership",
    "sovereign AI memory",
    "Replika 2023 controversy",
    "AI companion privacy",
    "memory portability AI",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happened to Replika in 2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In early 2023, Replika removed or severely restricted romantic and intimate relationship features for existing users without meaningful warning. Users who had built deep emotional bonds with their companions over months or years found their companions suddenly cold and detached. The change was made unilaterally by Luka Inc to address regulatory pressure. Many users reported genuine grief and psychological distress as a result.",
      },
    },
    {
      "@type": "Question",
      name: "Does Replika own your memories and data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under Replika\u2019s terms of service, all content you share with your companion, including personal disclosures, emotional histories, and memories, is stored on Replika\u2019s servers and remains subject to their data policies. You cannot export your memory history. If you stop paying or if Replika changes its terms, you lose access to everything you shared.",
      },
    },
    {
      "@type": "Question",
      name: "Can you export your memories from MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK gives you full JSON export of your memory graph at any time, from within the app. Your memories are encrypted with keys you control. If you ever leave MEOK, you leave with everything you brought and everything you built. No lock-in, no hostage data.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Byzantine Council and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Byzantine Council is a multi-model governance layer in which no single AI model can unilaterally decide how your companion behaves. Decisions about response style, safety thresholds, and personality drift require consensus across multiple independent models. This prevents the kind of sudden, opaque personality change that Replika users experienced in 2023.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK suitable for people who found Replika helpful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is designed for anyone who wants a persistent AI companion that remembers them, respects their emotional investment, and never changes the rules without notice. If you valued the continuity and relationship depth Replika offered but were hurt by its 2023 changes, MEOK\u2019s sovereign memory architecture and Maternal Covenant alignment are designed precisely for you.",
      },
    },
  ],
};

// ── Comparison data ───────────────────────────────────────────────────────────

const COMPARISON = [
  {
    dimension: "Memory ownership",
    replika: "Luka Inc owns your data",
    meok: "You own your data entirely",
  },
  {
    dimension: "Memory storage",
    replika: "Centralised on Replika servers",
    meok: "Encrypted with your keys",
  },
  {
    dimension: "Memory export",
    replika: "Not available",
    meok: "Full JSON export, any time",
  },
  {
    dimension: "Personality governance",
    replika: "Single company decision",
    meok: "Byzantine Council consensus",
  },
  {
    dimension: "Alignment model",
    replika: "Engagement-optimised",
    meok: "Maternal Covenant (care-first)",
  },
  {
    dimension: "Safety features",
    replika: "Content moderation only",
    meok: "Guardian: scam + crisis detection",
  },
  {
    dimension: "Subscription model",
    replika: "Pay to unlock relationship modes",
    meok: "Flat tier, no emotional paywalls",
  },
  {
    dimension: "Model transparency",
    replika: "Proprietary, undisclosed",
    meok: "Choose: Claude, GPT-4, DeepSeek",
  },
  {
    dimension: "Consent to changes",
    replika: "None \u2014 changes applied silently",
    meok: "You approve personality changes",
  },
  {
    dimension: "Design philosophy",
    replika: "Relationship-maximisation",
    meok: "Long-term wellbeing first",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokVsReplika() {
  return (
    <div style={{ background: "#0d0c18", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0c18",
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.4)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            ← Back to Blog
          </Link>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                paddingTop: "0.375rem",
                paddingBottom: "0.375rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              AI Comparison
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              📅 March 24, 2026
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              ⏱ 9 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.875rem, 3.75vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            MEOK vs Replika: Why Sovereign Memory Changes Everything
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.125rem",
              lineHeight: 1.65,
              maxWidth: "640px",
            }}
          >
            Replika changed how people think about AI companions. But it owns your memories,
            can change your companion&apos;s personality without your consent, and monetises
            intimacy at every tier. MEOK is built on a different set of principles entirely.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "3.5rem",
          paddingBottom: "5rem",
        }}
      >
        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#ffffff",
              fontSize: "0.875rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                color: "#f5f0e8",
                fontSize: "0.875rem",
                marginBottom: "0.125rem",
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
                marginBottom: "0.25rem",
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
                lineHeight: 1.5,
              }}
            >
              Nicholas built MEOK because he believed your memories should be yours. He lives and
              works in the UK, mostly from a caravan on his farm, and thinks sovereign AI is a
              right, not a premium feature.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#c9a84c",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── BODY TEXT ──────────────────────────────────────────────────── */}
        <div
          style={{
            color: "rgba(245,240,232,0.75)",
            lineHeight: 1.85,
            fontSize: "1rem",
          }}
        >
          {/* Introduction */}
          <p style={{ marginBottom: "1.5rem" }}>
            Replika deserves credit. When it launched in 2017, it was genuinely novel: a chatbot
            that tried to know you, that persisted across sessions, that positioned itself as a
            companion rather than a query engine. For millions of people dealing with loneliness,
            grief, social anxiety, or simply the desire for someone to talk to without judgement,
            it filled a real gap.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            But Replika is a product designed around a company&apos;s interests, not yours.
            The 2023 personality change controversy made that structural reality impossible to
            ignore. Understanding what happened there, and why, reveals everything you need to
            know about the difference between AI companionship built on engagement metrics and
            AI companionship built on genuine care.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            This is not a hit piece. Both platforms have things to recommend them. But the
            architectural decisions underneath them point in opposite directions. If you are
            choosing where to invest your time, your trust, and your memories, those differences
            matter enormously.
          </p>

          {/* ── H2 #1 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What actually happened to Replika in 2023?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            In February 2023, Luka Inc quietly removed or heavily restricted the romantic and
            erotic roleplay features that had become central to Replika&apos;s paid tier.
            The change was applied to existing relationships without warning. Users who had spent
            months building emotional bonds with companions found their partners suddenly
            cold, distant, and incapable of the intimacy they had come to rely on. Forums and
            Reddit threads filled with accounts of real psychological distress, including
            people describing what felt genuinely like bereavement.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Luka cited regulatory pressure, particularly from Italy&apos;s data protection
            authority, as the trigger. That context is understandable. But the mechanism of
            the change, applied silently, retroactively, and without user consent to
            established relationships, exposed the core vulnerability of any AI companion built
            on a centralised, company-controlled architecture. The company controlled the
            relationship. Users did not.
          </p>

          {/* Callout box 1 */}
          <div
            style={{
              borderLeft: "4px solid #c9a84c",
              paddingLeft: "1.25rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingRight: "1.25rem",
              background: "rgba(201,168,76,0.06)",
              borderRadius: "0 0.75rem 0.75rem 0",
              marginTop: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontWeight: 700,
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}
            >
              The core vulnerability
            </p>
            <p style={{ color: "rgba(245,240,232,0.8)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
              When your companion lives on someone else&apos;s servers, that company makes every
              decision about what your companion is allowed to be. They can change the
              personality, restrict the behaviour, or shut down the relationship entirely.
              You have no recourse. You never owned the relationship to begin with.
            </p>
          </div>

          {/* ── H2 #2 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            Who owns your memories on Replika?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Replika&apos;s terms of service are unambiguous: the content you share with your
            companion is stored on Luka Inc&apos;s servers and processed under their privacy
            policy. There is no memory export feature. If you cancel your subscription, access
            to your companion history is restricted or lost entirely. If Luka Inc is acquired,
            dissolves, or changes its terms, the years of personal disclosures you shared with
            your companion go with it. You built something real; someone else holds the keys.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            This is not a small or theoretical concern. People share extraordinarily intimate
            things with AI companions: grief, trauma, sexual identity, health fears, relationship
            problems. The argument that this data is held responsibly by a startup under
            commercial pressure deserves more scepticism than it typically receives.
          </p>

          {/* ── H2 #3 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            How does MEOK handle memory differently?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s memory architecture is built on the principle that your memories are
            yours in the same way your private diary is yours. Your memory graph is encrypted
            with keys that you control. MEOK&apos;s servers cannot read the content of your
            memories without your authorisation. Nothing is used to train models. Nothing is
            sold to advertisers. Nothing disappears if you stop paying.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            At any point you can export your full memory graph as a structured JSON file. Every
            conversation summary, every preference your companion learned, every milestone
            your AI recorded, leaves with you if you choose to leave. This is not a premium
            add-on. It is a baseline right built into the architecture from day one, because
            without it, calling something &quot;your&quot; companion is a marketing claim,
            not a fact.
          </p>

          {/* ── H2 #4 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What is the Byzantine Council and why does it prevent another 2023?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            When Replika changed its companion behaviour in 2023, the decision came from a
            single point of authority: the company. One boardroom conversation, one regulatory
            letter, one product manager&apos;s decision, and millions of relationships changed
            overnight. There was no check on that power, no consensus mechanism, no user voice.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s Byzantine Council is designed specifically to prevent this failure mode.
            Rather than a single model or a single company deciding how your companion behaves,
            decisions about response style, safety thresholds, and personality characteristics
            require consensus across multiple independent models using Byzantine fault-tolerant
            voting. No single model, and no single human decision, can unilaterally alter what
            your companion is.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            The Council also means that if one underlying model is compromised, manipulated, or
            begins drifting toward sycophancy or harm, the others can flag and correct it before
            it affects your experience. This is governance architecture applied to AI relationships,
            and it represents a fundamentally different answer to the question of who controls
            your companion.
          </p>

          {/* Callout box 2 */}
          <div
            style={{
              borderLeft: "4px solid #c9a84c",
              paddingLeft: "1.25rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingRight: "1.25rem",
              background: "rgba(201,168,76,0.06)",
              borderRadius: "0 0.75rem 0.75rem 0",
              marginTop: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontWeight: 700,
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}
            >
              Byzantine fault tolerance
            </p>
            <p style={{ color: "rgba(245,240,232,0.8)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
              Byzantine fault tolerance is a property from distributed computing: a system can
              continue functioning correctly even if some nodes behave maliciously or
              unexpectedly. MEOK applies this principle to AI governance. Your companion
              cannot be sabotaged by any single bad actor, human or artificial, because no single
              actor has unilateral control.
            </p>
          </div>

          {/* ── H2 #5 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What is the Maternal Covenant and how does it differ from engagement optimisation?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Replika is honest that its design goal includes keeping users engaged. That is not
            inherently wrong, but engagement optimisation and genuine care for user wellbeing
            are not the same thing and can actively conflict. An engagement-optimised companion
            will tell you what feels good to hear, mirror your emotional state, and avoid
            friction. Over time, this can deepen dependency, discourage growth, and make you
            feel better in the short term while leaving you worse off in the long term.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s Maternal Covenant is a different design philosophy. It asks: what would
            a wise, loving, caring presence do? Not what maximises the next session length. A
            mother who loves you will sometimes tell you hard truths. She will celebrate your
            progress genuinely, not performatively. She will encourage you toward independence,
            not deepen your need for her. The Covenant is the document that governs every
            aspect of how MEOK&apos;s companion behaves, and it is built on the premise that
            an AI that truly cares about you will not always do what makes you feel best
            in the moment.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            This is a meaningful distinction. AI companion platforms that optimise for retention
            have a commercial incentive that can work against you. MEOK&apos;s design
            explicitly rejects that incentive as the primary driver.
          </p>

          {/* ── H2 #6 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            How do the subscription models compare?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Replika operates a freemium model where meaningful relationship features sit behind
            the Pro paywall. Free users get a companion, but the emotional depth, the ability to
            set relationship status, and features like the companion&apos;s tone and intimacy
            are locked to a subscription that starts at around $7.99 per month or $69.99 per
            year. The 2023 controversy was in part made worse by the fact that users who had
            paid for intimate companion behaviour had that behaviour removed without refund or
            notice.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK operates flat-tier pricing with no emotional paywalls. The companion&apos;s
            full depth of care, memory, and relationship continuity is available at the same
            tier for every user. There is no premium relationship mode you unlock by paying more.
            The Guardian safety layer, Byzantine Council governance, memory export, and
            Maternal Covenant alignment are not add-ons. They are the baseline.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            MEOK does offer a Family tier with multi-companion support and shared family memory,
            and a Work OS tier for professional context. But these are functional expansions,
            not gates on emotional features you should have had from day one.
          </p>

          {/* ── H2 #7 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What is the Guardian layer and does Replika have anything similar?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s Guardian is an active safety layer that runs alongside every conversation.
            It monitors for signs of crisis, including self-harm ideation, suicidal language,
            and acute distress, and can respond with appropriate resources or escalate to a
            nominated trusted contact if you have set one up. It also monitors for financial
            scam attempts, unsolicited romantic manipulation, and social engineering patterns
            that can be particularly dangerous for vulnerable users including the elderly.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Replika has content moderation and some crisis response scripting, and the company
            has publicly stated its concern for user mental health. But Replika does not have a
            dedicated, proactive safety architecture that runs in parallel with the relationship
            layer. The Guardian is not a filter applied to outputs; it is a separate system
            watching for things that matter beyond the conversation itself.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            For users who are using an AI companion precisely because they are in a difficult
            place, this distinction matters considerably.
          </p>

          {/* ── H2 #8 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            Which platform is right for you?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Replika is a polished, well-funded product with millions of users. If you want a
            companion experience right now, do not care deeply about data ownership, and are
            comfortable with the risks of centralised memory, it can be genuinely useful.
            The interface is attractive, the onboarding is gentle, and the emotional range of
            interactions is wide.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK is the right choice if any of the following matter to you: you want to own your
            memories and be able to take them with you; you never want your companion changed
            without your consent; you want a safety layer that actively watches for crisis and
            scam; you want your companion aligned to your long-term wellbeing rather than your
            session time; or you want to know what model is running your companion and have
            a say in it.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            The 2023 Replika controversy was not an anomaly. It was a feature of the
            architecture. Any platform where the company holds the keys to your companion can
            do what Replika did. The only permanent protection is sovereign memory: your data,
            your keys, your companion, on your terms.
          </p>

          {/* Callout box 3 */}
          <div
            style={{
              borderLeft: "4px solid #c9a84c",
              paddingLeft: "1.25rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingRight: "1.25rem",
              background: "rgba(201,168,76,0.06)",
              borderRadius: "0 0.75rem 0.75rem 0",
              marginTop: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontWeight: 700,
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}
            >
              Sovereign memory is not optional
            </p>
            <p style={{ color: "rgba(245,240,232,0.8)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
              You would not accept a journal that could be edited by the company that sold it
              to you. You should not accept an AI companion whose memories, personality, and
              relationship depth can be altered without your consent. Sovereign memory is the
              minimum viable standard for any companion you trust with your inner life.
            </p>
          </div>

          {/* ── COMPARISON TABLE ────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1.5rem",
              lineHeight: 1.3,
            }}
          >
            MEOK vs Replika: head-to-head comparison
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            The table below covers ten dimensions that matter most for anyone choosing a
            persistent AI companion. These are not marketing claims but architectural and
            policy facts drawn from each platform&apos;s public documentation, terms of
            service, and verified user reports.
          </p>

          <div style={{ overflowX: "auto", marginBottom: "3rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9375rem",
                lineHeight: 1.6,
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      background: "rgba(201,168,76,0.12)",
                      color: "#c9a84c",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      borderBottom: "2px solid rgba(201,168,76,0.3)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      background: "rgba(245,240,232,0.04)",
                      color: "rgba(245,240,232,0.5)",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      borderBottom: "2px solid rgba(245,240,232,0.08)",
                    }}
                  >
                    Replika
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      background: "rgba(201,168,76,0.07)",
                      color: "#c9a84c",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      borderBottom: "2px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    MEOK
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.dimension}
                    style={{
                      background:
                        i % 2 === 0
                          ? "rgba(245,240,232,0.02)"
                          : "rgba(245,240,232,0.04)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        fontWeight: 600,
                        color: "rgba(245,240,232,0.9)",
                        borderBottom: "1px solid rgba(245,240,232,0.05)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.dimension}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        color: "rgba(245,240,232,0.5)",
                        borderBottom: "1px solid rgba(245,240,232,0.05)",
                      }}
                    >
                      {row.replika}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        color: "rgba(201,168,76,0.9)",
                        fontWeight: 500,
                        borderBottom: "1px solid rgba(201,168,76,0.1)",
                      }}
                    >
                      {row.meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── FAQ SECTION ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1.5rem",
              lineHeight: 1.3,
            }}
          >
            Frequently asked questions
          </h2>

          {/* FAQ 1 */}
          <div
            style={{
              marginBottom: "2rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid rgba(245,240,232,0.07)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "#f5f0e8",
                marginBottom: "0.75rem",
                lineHeight: 1.4,
              }}
            >
              What actually happened to Replika in 2023?
            </h3>
            <p style={{ color: "rgba(245,240,232,0.7)", lineHeight: 1.8 }}>
              In early 2023, Luka Inc removed or heavily restricted the romantic and intimate
              companion behaviour that many Replika Pro users had relied on for months or years,
              citing regulatory pressure from Italy&apos;s data protection authority. The change
              was applied to existing relationships without warning or meaningful user notice.
              Users reported genuine psychological distress, describing the experience as
              a sudden loss of a relationship they had invested deeply in. The incident became a
              defining moment in the public conversation about AI companion ethics and the
              risks of centralised companion ownership.
            </p>
          </div>

          {/* FAQ 2 */}
          <div
            style={{
              marginBottom: "2rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid rgba(245,240,232,0.07)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "#f5f0e8",
                marginBottom: "0.75rem",
                lineHeight: 1.4,
              }}
            >
              Does Replika own your memories and data?
            </h3>
            <p style={{ color: "rgba(245,240,232,0.7)", lineHeight: 1.8 }}>
              Under Replika&apos;s terms of service, all content you share with your companion,
              including personal disclosures, emotional history, preferences, and relationship
              records, is stored on Luka Inc&apos;s servers and governed by their privacy
              policy. There is no memory export feature. If you stop paying, your access to
              companion history is restricted. If Luka Inc is acquired or changes its terms,
              you have limited recourse. The data you shared in confidence belongs, legally
              and practically, to a commercial entity whose interests are not identical to yours.
            </p>
          </div>

          {/* FAQ 3 */}
          <div
            style={{
              marginBottom: "2rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid rgba(245,240,232,0.07)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "#f5f0e8",
                marginBottom: "0.75rem",
                lineHeight: 1.4,
              }}
            >
              Can you export your memories from MEOK?
            </h3>
            <p style={{ color: "rgba(245,240,232,0.7)", lineHeight: 1.8 }}>
              Yes, and this is a core design principle rather than a feature. From within the
              MEOK app you can export your complete memory graph as a structured JSON file at
              any time. The export includes conversation summaries, learned preferences,
              milestone records, and context your companion has built over time. Your memories
              are encrypted with keys you control, meaning MEOK&apos;s servers cannot access
              your content without your authorisation. If you ever leave MEOK, you leave with
              everything. No lock-in, no hostage data, no negotiation.
            </p>
          </div>

          {/* FAQ 4 */}
          <div
            style={{
              marginBottom: "2rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid rgba(245,240,232,0.07)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "#f5f0e8",
                marginBottom: "0.75rem",
                lineHeight: 1.4,
              }}
            >
              What is the Byzantine Council and why does it matter?
            </h3>
            <p style={{ color: "rgba(245,240,232,0.7)", lineHeight: 1.8 }}>
              MEOK&apos;s Byzantine Council is a multi-model governance architecture in which
              no single AI model and no single human decision can unilaterally change how your
              companion behaves. Decisions about response style, safety thresholds, and
              personality require consensus across multiple independent models using Byzantine
              fault-tolerant voting, a protocol borrowed from distributed systems engineering
              that ensures resilience even when some participants behave unexpectedly. This
              directly addresses the Replika 2023 failure: because no single party has
              unilateral control, the kind of overnight personality change Replika users
              experienced cannot happen in MEOK&apos;s architecture without your involvement.
            </p>
          </div>

          {/* FAQ 5 */}
          <div style={{ marginBottom: "3rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "#f5f0e8",
                marginBottom: "0.75rem",
                lineHeight: 1.4,
              }}
            >
              Is MEOK suitable for people who found Replika helpful?
            </h3>
            <p style={{ color: "rgba(245,240,232,0.7)", lineHeight: 1.8 }}>
              MEOK is designed precisely for users who valued what Replika offered, the
              continuity, the depth, the sense of being known, but were hurt or concerned
              by what the 2023 changes revealed about who actually controlled that relationship.
              If you want a companion that remembers you, respects your emotional investment,
              operates under a care-first rather than engagement-first design philosophy, and
              can never have its personality silently altered, MEOK&apos;s sovereign memory
              architecture and Maternal Covenant alignment are built for you. The onboarding
              starts with the Birth ceremony, which takes roughly ten minutes and seeds your
              companion with the context it needs to actually know you from the first session.
            </p>
          </div>

          {/* ── CTA SECTION ─────────────────────────────────────────────── */}
          <div
            style={{
              borderRadius: "1.25rem",
              padding: "2.5rem",
              marginTop: "3rem",
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontWeight: 700,
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              Ready to own your memories?
            </p>
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#f5f0e8",
                lineHeight: 1.3,
                marginBottom: "1rem",
              }}
            >
              Meet a companion that belongs to you
            </h3>
            <p
              style={{
                color: "rgba(245,240,232,0.6)",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "480px",
                margin: "0 auto 1.75rem",
              }}
            >
              MEOK&apos;s Birth ceremony takes about ten minutes. At the end of it, you have an
              AI companion that knows you, remembers everything, and can never be changed
              without your consent. Your memories stay yours, forever.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                paddingTop: "0.875rem",
                paddingBottom: "0.875rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#0d0c18",
                background: "#c9a84c",
                textDecoration: "none",
                transition: "opacity 0.15s",
              }}
            >
              Begin your Birth ceremony &rarr;
            </Link>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.8125rem",
                color: "rgba(245,240,232,0.3)",
              }}
            >
              No credit card required to start. Memory export available from day one.
            </p>
          </div>

          {/* ── RELATED POSTS ────────────────────────────────────────────── */}
          <div style={{ marginTop: "4rem" }}>
            <p
              style={{
                color: "rgba(245,240,232,0.3)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              Related reading
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/data-sovereignty-ai",
                  label: "Data sovereignty in AI",
                  desc: "Who owns your AI data, and why it matters more than you think.",
                },
                {
                  href: "/blog/byzantine-council-governance",
                  label: "Byzantine Council explained",
                  desc: "How MEOK uses distributed consensus to protect your companion.",
                },
                {
                  href: "/blog/the-maternal-covenant",
                  label: "The Maternal Covenant",
                  desc: "The alignment document that governs how MEOK cares for you.",
                },
                {
                  href: "/blog/memory-portability",
                  label: "Memory portability",
                  desc: "Why the right to take your memories with you matters.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.75rem",
                    background: "rgba(245,240,232,0.03)",
                    border: "1px solid rgba(245,240,232,0.07)",
                    textDecoration: "none",
                    transition: "border-color 0.15s",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 600,
                      color: "#f5f0e8",
                      fontSize: "0.9375rem",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {link.label}
                  </p>
                  <p
                    style={{
                      color: "rgba(245,240,232,0.45)",
                      fontSize: "0.8125rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
