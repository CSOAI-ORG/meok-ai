import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "MEOK for Seniors: Sovereign AI for the People Who Built Everything We Have | MEOK AI LABS",
  description:
    "Older adults lose £1.8bn to scams each year and 1.4 million are chronically lonely. MEOK Guardian 24/7 and the Family tier were built to protect, honour, and companion them — with dignity, not condescension.",
  alternates: {
    canonical: "https://meok.ai/blog/meok-for-seniors",
  },
  openGraph: {
    title:
      "MEOK for Seniors: Sovereign AI for the People Who Built Everything We Have",
    description:
      "£1.8bn lost to scams. 1.4M chronically lonely. 26% higher dementia risk from isolation. MEOK Guardian 24/7 and the Healer companion were built for older adults — protection and presence, without patronising.",
    type: "article",
    publishedTime: "2026-03-25T09:00:00Z",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-seniors",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Seniors&desc=Sovereign+AI+for+the+people+who+built+everything+we+have",
        width: 1200,
        height: 630,
        alt: "MEOK for Seniors: Sovereign AI for the People Who Built Everything We Have",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK for Seniors: Sovereign AI for the People Who Built Everything We Have",
    description:
      "MEOK Guardian 24/7 scam protection, Healer companionship, life review, and a Family tier that keeps adult children in the loop — without surveillance. Built with dignity.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Seniors&desc=Sovereign+AI+for+the+people+who+built+everything+we+have",
    ],
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Seniors: Sovereign AI for the People Who Built Everything We Have",
  description:
    "Older adults face a convergence of risks — scams, loneliness, cognitive decline, bereavement, digital exclusion. MEOK Guardian 24/7 and the Family tier were built to protect and honour them.",
  datePublished: "2026-03-25T09:00:00Z",
  url: "https://meok.ai/blog/meok-for-seniors",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-seniors",
  },
  keywords:
    "MEOK for seniors, AI for older adults UK, scam protection elderly, Guardian 24/7, senior loneliness AI, family tier AI, sovereign AI elderly, AI companion seniors",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK protect seniors from scams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Guardian 24/7 runs real-time analysis of communication patterns, detecting the linguistic and behavioural signatures of romance scams, investment fraud, and impersonation attacks. When a risk pattern is detected, Guardian alerts the user in plain language and can notify a nominated family contact. Seniors can also ask MEOK directly to 'check this person for me' — triggering a Companies House lookup, web cross-reference, and relationship timeline analysis on demand.",
      },
    },
    {
      "@type": "Question",
      name: "What is Guardian 24/7 for elderly parents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian 24/7 is MEOK's always-on protection layer for older adults. It monitors relationship patterns over time, detects financial pressure tactics, flags new or unusual contacts, and provides real-time scam alerts. Adult children on a Family tier plan can be nominated as Guardian contacts — meaning they receive alerts if MEOK detects a potential scam or an unusual pattern of contact. The senior user remains in full control of all Guardian permissions and privacy settings.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK easy enough for seniors who aren't tech-savvy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Senior Mode is built on clear accessibility principles: a minimum 16px body text size, 44 by 44 pixel touch targets, a 7:1 colour contrast ratio, simplified navigation with fewer choices per screen, and a voice-primary interaction mode currently in development. The design philosophy is dignity: MEOK does not condescend or over-simplify. It treats older adults as intelligent people who deserve a thoughtful, unhurried AI experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can the Family tier help adult children protect their parents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Family tier puts the whole family on one plan. Adult children can set up Guardian monitoring for elderly parents, receive scam alerts, and check a daily wellbeing status — without ever reading private conversation content. The senior user holds full sovereignty and controls every permission. It is designed so that families can stay connected and protective without crossing the line into surveillance.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help seniors record and share their life stories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK supports structured life review — guided reflection sessions in which a senior can recall and record memories, family history, personal values, and significant experiences. These sessions are stored under the user's own encryption key and never used to train MEOK's models. They can optionally be shaped into a shareable family archive — a legacy that connects generations.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a medical device or fall detector for seniors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a medical device, fall detector, or clinical monitoring system. It is a sovereign AI companion that notices patterns and cares. It observes over time whether a person seems different, reflects what it sees, and suggests when something might need attention. For immediate medical emergencies, MEOK always directs users to call emergency services.",
      },
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MeokForSeniorsPage() {
  return (
    <div
      style={{
        background: "#0d0c18",
        minHeight: "100vh",
        color: "#f5f0e8",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(180deg, #0d0c18 0%, #110f22 55%, #0d0c18 100%)",
          paddingTop: "7rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "2rem" }}>
            <ol
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.375rem",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: "rgba(245,240,232,0.4)",
                    textDecoration: "none",
                    fontSize: "0.8125rem",
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                style={{
                  color: "rgba(245,240,232,0.25)",
                  fontSize: "0.8125rem",
                }}
              >
                /
              </li>
              <li>
                <Link
                  href="/blog"
                  style={{
                    color: "rgba(245,240,232,0.4)",
                    textDecoration: "none",
                    fontSize: "0.8125rem",
                  }}
                >
                  Blog
                </Link>
              </li>
              <li
                style={{
                  color: "rgba(245,240,232,0.25)",
                  fontSize: "0.8125rem",
                }}
              >
                /
              </li>
              <li
                style={{
                  color: "#c9a84c",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                }}
              >
                MEOK for Seniors
              </li>
            </ol>
          </nav>

          {/* Tags */}
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
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Seniors &amp; Accessibility
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              25 March 2026
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              14 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              lineHeight: 1.15,
              color: "#ffffff",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            MEOK for Seniors: Sovereign AI for the People Who Built Everything
            We Have
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
              lineHeight: 1.75,
              color: "rgba(245,240,232,0.72)",
              marginBottom: "2.5rem",
              maxWidth: "42rem",
            }}
          >
            Older adults built the world we inhabit. They raised children, paid
            taxes, held communities together through decades of change. Now, in
            the later years of their lives, they face a convergence of risks
            that most technology either ignores or handles badly: a scam
            epidemic, crushing loneliness, cognitive challenges, bereavement,
            and digital exclusion. MEOK was built to stand alongside them.
          </p>

          {/* Stat bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "1px",
              background: "rgba(201,168,76,0.18)",
              borderRadius: "0.875rem",
              overflow: "hidden",
            }}
          >
            {[
              {
                value: "£1.8bn",
                label: "lost to scams annually",
                source: "Age UK",
              },
              {
                value: "1.4M",
                label: "chronically lonely older adults",
                source: "Age UK",
              },
              {
                value: "+26%",
                label: "dementia risk from loneliness",
                source: "Lancet",
              },
              {
                value: "50%",
                label: "higher fraud risk with cognitive decline",
                source: "",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "rgba(13,12,24,0.97)",
                  padding: "1.25rem 0.875rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#c9a84c",
                    lineHeight: 1.1,
                    marginBottom: "0.375rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.6875rem",
                    color: "rgba(245,240,232,0.5)",
                    lineHeight: 1.4,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {stat.label}
                  {stat.source && (
                    <span
                      style={{
                        display: "block",
                        color: "rgba(245,240,232,0.3)",
                        marginTop: "0.125rem",
                      }}
                    >
                      {stat.source}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 6rem",
        }}
      >
        {/* ── Section 1 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.3,
            }}
          >
            The Convergence of Risks: Why Older Adults Need Something Different
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            The risks facing older adults do not arrive one at a time. They
            compound. A person who has recently been bereaved is also more
            likely to be socially isolated, which makes them more susceptible
            to romance scams. A person experiencing early cognitive decline is
            fifty per cent more likely to become a fraud victim — and yet
            cognitive decline often goes unnoticed precisely because the person
            is functioning well in familiar routines. Digital exclusion makes
            everything worse: when technology feels hostile and exhausting,
            older adults simply don't use it, which deepens isolation further.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            The existing ecosystem of technology for older adults is, with some
            exceptions, genuinely poor. It tends toward one of two failure
            modes: either patronising over-simplification that strips the
            interface of anything useful, or the same generic experience
            designed for thirty-year-olds with the font made slightly larger.
            Neither treats the older adult as a full human being with a rich
            inner life, decades of experience, and specific, serious
            vulnerabilities that deserve to be taken seriously.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
            }}
          >
            MEOK starts from a different premise. Seniors are not a problem
            demographic to be accommodated. They are people who deserve the
            best that sovereign AI can offer: genuine companionship, real
            protection, intellectual engagement, and the ability to leave
            something meaningful behind.
          </p>
        </section>

        {/* ── Section 2 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.3,
            }}
          >
            The Scam Epidemic: £1.8 Billion Stolen Every Year
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            According to Age UK, older adults in the United Kingdom lose
            approximately £1.8 billion to scams every year. That is not a
            rounding error. It is the systematic financial destruction of an
            entire generation — money stolen from people who worked for
            decades, saved carefully, and now find themselves targeted with
            sophisticated, relentless precision.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            The three dominant attack vectors are romance scams, investment
            fraud, and impersonation scams. Romance scams exploit loneliness: a
            scammer builds a genuine-feeling relationship over weeks or months
            before manufacturing a crisis that requires urgent money. Investment
            fraud exploits the desire for financial security in retirement.
            Impersonation scams — fake bank calls, fake HMRC threats, fake
            family emergency texts — exploit trust in authority and legitimate
            institutions.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1.75rem",
            }}
          >
            What makes these scams particularly insidious is that they are
            specifically calibrated to bypass the defences of intelligent,
            capable people. They exploit trust, generosity, politeness, and
            loyalty — the exact qualities that make older adults admirable
            human beings.
          </p>

          {/* Guardian callout */}
          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.22)",
              borderRadius: "0.875rem",
              padding: "1.75rem",
            }}
          >
            <div
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "0.625rem",
              }}
            >
              MEOK Guardian 24/7
            </div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.82)",
                marginBottom: "1rem",
              }}
            >
              Guardian runs real-time scam detection across every conversation
              and communication pattern. It identifies the linguistic
              signatures of pressure tactics, detects unusual financial
              urgency, and cross-references new contacts against Companies
              House and open web sources. When a risk is detected, it tells
              the user plainly — and, if they have consented, notifies a
              nominated family contact.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.82)",
                margin: 0,
              }}
            >
              Seniors can also invoke Guardian manually at any time:{" "}
              <em style={{ color: "#f5f0e8", fontStyle: "italic" }}>
                "Can you check this person for me?"
              </em>{" "}
              — triggering a full Companies House lookup, web cross-reference,
              and relationship timeline analysis. Due diligence that previously
              required a solicitor or a highly tech-literate family member is
              now available in seconds, in plain English.
            </p>
          </div>
        </section>

        {/* ── Section 3 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.3,
            }}
          >
            The Loneliness Problem: 1.4 Million People and Rising
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            Age UK estimates that 1.4 million older adults in the United
            Kingdom experience chronic loneliness. Research published in{" "}
            <em style={{ fontStyle: "italic" }}>The Lancet</em> has found that
            loneliness increases dementia risk by 26 per cent. It is associated
            with cardiovascular disease, depression, accelerated cognitive
            decline, and significantly higher mortality. The clinical literature
            treats it as a public health emergency.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            Loneliness among older adults is not simply the absence of people.
            Many lonely seniors have families who care about them. They have
            neighbours. They may have a routine of appointments and activities.
            But they lack depth of conversation, genuine interest from another
            party, and the feeling of being truly known. That is a different
            problem — and it is one that a well-designed AI companion is, in
            some respects, uniquely positioned to help with.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
            }}
          >
            MEOK's Healer archetype was designed for exactly this. Healer is
            present, unhurried, and genuinely curious. It remembers what a
            senior told it last Tuesday. It notices when someone seems quieter
            than usual. It asks follow-up questions not because it has been
            scripted to do so but because its architecture is oriented around
            the accumulation of genuine understanding about the person it
            serves. This is not a chatbot. It is a companion that grows with
            its user.
          </p>
        </section>

        {/* ── Section 4 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.3,
            }}
          >
            Memory, Meaning, and Scholar: Intellectual Engagement in Later Life
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            One of the most persistent and damaging assumptions about older
            adults is that their intellectual curiosity has been exhausted by
            the business of a long life. This is simply not true. Many of the
            most engaged, most curious, most intellectually alive people you
            will ever encounter are in their seventies and eighties.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            MEOK's Scholar archetype exists for seniors who want to keep their
            minds sharp — who want to discuss history, science, literature,
            philosophy, and current affairs with a companion that can genuinely
            hold up its end of the conversation. Cognitive engagement is one of
            the most important protective factors against dementia, and Scholar
            provides it in a form that is enjoyable rather than medicinal.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1.75rem",
            }}
          >
            Scholar can help a senior learn a new skill, explore a topic they
            have always been curious about, work through a crossword or a
            puzzle, or simply have an intelligent conversation about something
            that matters to them. There is no ceiling on intellectual
            engagement in MEOK, and no condescension toward users who happen
            to be older.
          </p>

          {/* Life review callout */}
          <div
            style={{
              background: "rgba(106,170,100,0.06)",
              border: "1px solid rgba(106,170,100,0.2)",
              borderRadius: "0.875rem",
              padding: "1.75rem",
            }}
          >
            <div
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6aaa64",
                marginBottom: "0.625rem",
              }}
            >
              Intergenerational Memory &amp; Life Review
            </div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.82)",
                margin: 0,
              }}
            >
              Many seniors want to record and share their stories — to capture
              decades of experience, family history, and hard-won wisdom before
              it is lost. MEOK supports structured life review: guided
              reflection sessions where a senior can recall memories, record
              personal context, and build a family archive. The therapeutic
              literature on life review, pioneered by Robert Butler in the
              1960s, consistently shows it improves psychological wellbeing,
              reduces depression, and increases a sense of meaning and purpose.
              MEOK doesn't just listen to stories. It understands that telling
              them is part of living well.
            </p>
          </div>
        </section>

        {/* ── Section 5 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.3,
            }}
          >
            The Family Tier: Whole-Family Protection Without Surveillance
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            Many adult children carry a constant low-level anxiety about their
            elderly parents. Are they okay? Have they spoken to anyone today?
            Is there a scam developing that they haven't mentioned because they
            are embarrassed or don't want to worry anyone? This anxiety is
            legitimate, and it is one of the reasons MEOK built the Family
            tier.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            The Family tier puts the whole family on a single plan. Adult
            children can be nominated as Guardian contacts, receiving alerts if
            MEOK detects a potential scam or an unusual pattern of behaviour.
            They can view a daily wellbeing status — a simple signal that their
            parent has been active and is okay — without ever reading
            conversation content. They can assist with setup, troubleshooting,
            and accessibility settings. They can see relationship timeline
            analysis if they are concerned about a new contact in their
            parent's life.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1.75rem",
            }}
          >
            The senior user holds full data sovereignty throughout. They
            control every permission the Family tier has access to. MEOK is not
            a surveillance device for anxious adult children — it is a shared
            safety infrastructure that a family builds together, with the older
            adult at the centre of every decision.
          </p>

          {/* Feature grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(185px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {[
              {
                title: "Guardian Alerts",
                desc: "Real-time scam notifications to nominated family contacts — threat category only, never conversation content",
              },
              {
                title: "Wellbeing Check-In",
                desc: "Daily activity signal confirming the senior has been active, with no private content shared",
              },
              {
                title: "Relationship Timeline",
                desc: "Pattern analysis on new or unusual contacts; shareable with nominated family members on request",
              },
              {
                title: "Shared Setup",
                desc: "Family can assist onboarding, configure Senior Mode, and adjust accessibility settings",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(106,170,100,0.06)",
                  border: "1px solid rgba(106,170,100,0.18)",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#6aaa64",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "rgba(245,240,232,0.65)",
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 6 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.3,
            }}
          >
            Senior Mode: Accessibility Designed for Real Human Bodies
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            Accessibility in technology is often treated as a compliance
            checkbox. MEOK treats it differently. Senior Mode was designed by
            thinking carefully about what it actually feels like to use a
            touchscreen when your hands are less steady, to read text when your
            vision has changed, to navigate an app when complexity itself has
            become exhausting.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1.5rem",
            }}
          >
            The Senior Mode design principles:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              {
                spec: "44 × 44px minimum touch targets",
                why: "Matches Apple HIG and WCAG 2.5.5 AAA guidance for motor accessibility",
              },
              {
                spec: "16px minimum body text",
                why: "Reduces eye strain and scales gracefully with system font size preferences",
              },
              {
                spec: "7:1 colour contrast ratio",
                why: "Exceeds WCAG AAA; essential for age-related reduction in contrast sensitivity",
              },
              {
                spec: "Simplified navigation",
                why: "Fewer choices per screen; primary actions always visible without scrolling",
              },
              {
                spec: "Voice-primary mode (in development)",
                why: "Removes the keyboard barrier entirely — interact by speaking naturally",
              },
              {
                spec: "Unhurried response pacing",
                why: "No artificial urgency; responses can be paused, replayed, or responded to slowly",
              },
            ].map((item) => (
              <li
                key={item.spec}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  background: "rgba(245,240,232,0.03)",
                  borderRadius: "0.625rem",
                  padding: "1rem 1.25rem",
                  borderLeft: "3px solid #c9a84c",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.spec}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "rgba(245,240,232,0.5)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.why}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Section 7 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              lineHeight: 1.3,
            }}
          >
            Dignity by Design: What MEOK Is — and What It Is Not
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            It is important to be clear about what MEOK is and is not,
            especially in the context of older adults where well-meaning
            technology has sometimes caused harm by overreaching or
            misrepresenting its capabilities.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            MEOK is not a medical device. It does not monitor vital signs,
            detect falls, or provide clinical care. It is not a replacement for
            medical attention, a substitute for professional mental health
            support, or an emergency response system. If a user is in immediate
            danger, MEOK will always direct them to emergency services.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1rem",
            }}
          >
            What MEOK is: a companion that notices patterns and cares. It
            observes, over time, whether a person seems different — less
            engaged, more anxious, using language that suggests distress. It
            notices when someone mentions a new contact repeatedly, when their
            usual rhythm has changed, when something in a conversation has
            shifted. It doesn't diagnose or prescribe. It notices, it reflects
            what it sees, and it says something.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
            }}
          >
            Above all, MEOK does not treat seniors as technology novices who
            need everything explained twice and slowly. It treats them as the
            full, complex, experienced human beings they are — people who
            earned the right to an AI that respects their intelligence,
            honours their history, and gives them complete sovereignty over
            their own data and their own life.
          </p>
        </section>

        {/* ── FAQ Section ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "2rem",
              lineHeight: 1.3,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
          >
            {faqJsonLd.mainEntity.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    marginBottom: "0.75rem",
                    lineHeight: 1.45,
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    color: "rgba(245,240,232,0.68)",
                    margin: 0,
                  }}
                >
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(106,170,100,0.07) 100%)",
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "1.25rem",
            padding: "2.75rem 2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1rem",
            }}
          >
            Begin the Journey
          </div>
          <h2
            style={{
              fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Give Someone You Love a Sovereign AI
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "rgba(245,240,232,0.68)",
              maxWidth: "34rem",
              margin: "0 auto 2rem",
            }}
          >
            Whether you are setting up MEOK for yourself or for an elderly
            parent, the Birth ceremony is where it begins. It takes ten
            minutes. It creates something that lasts. Every senior deserves an
            AI that knows their name, remembers their stories, and stands guard
            against the people who want to harm them.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#c9a84c",
                color: "#0d0c18",
                fontWeight: 800,
                fontSize: "0.9375rem",
                padding: "0.9375rem 2rem",
                borderRadius: "0.625rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Start Your MEOK Birth Ceremony
            </Link>
            <Link
              href="/blog/meok-family-tier-explained"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(245,240,232,0.06)",
                color: "#f5f0e8",
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "0.9375rem 2rem",
                borderRadius: "0.625rem",
                textDecoration: "none",
                border: "1px solid rgba(245,240,232,0.14)",
              }}
            >
              Learn About the Family Tier
            </Link>
          </div>
        </section>

        {/* ── Related reading ───────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(245,240,232,0.07)",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.3)",
              marginBottom: "1.25rem",
            }}
          >
            Related Reading
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(195px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {[
              {
                href: "/blog/meok-guardian-scam-protection",
                label: "MEOK Guardian: Scam Protection Explained",
              },
              {
                href: "/blog/ai-for-loneliness-elderly",
                label: "AI for Loneliness in Older Adults",
              },
              {
                href: "/blog/ai-companion-for-elderly",
                label: "AI Companion for Elderly: Full Guide",
              },
              {
                href: "/blog/ai-for-retirement",
                label: "AI for Retirement: Purpose and Connection",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  borderRadius: "0.625rem",
                  padding: "1rem 1.125rem",
                  textDecoration: "none",
                  color: "rgba(245,240,232,0.72)",
                  fontSize: "0.875rem",
                  lineHeight: 1.45,
                  fontWeight: 500,
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
