import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK for Coaches: How AI Enhances Your Coaching Practice Without Replacing It | MEOK AI LABS",
  description:
    "With 100,000+ ICF-certified coaches globally, the profession is thriving \u2014 yet clients still need support in the 166 hours between sessions. MEOK is the sovereign AI companion that fills that gap, augmenting coaches without ever replacing them.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-coaches" },
  openGraph: {
    title: "MEOK for Coaches: How AI Enhances Your Coaching Practice Without Replacing It",
    description:
      "Coaching happens 1\u20132 hours a week. Client growth happens 24/7. MEOK is the between-sessions companion that supports your clients, protects their privacy, and augments your practice \u2014 without replacing the irreplaceable human relationship.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-coaches",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Coaches&desc=How+AI+enhances+your+coaching+practice+without+replacing+it.",
        width: 1200,
        height: 630,
        alt: "MEOK for Coaches: How AI Enhances Your Coaching Practice Without Replacing It",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Coaches: How AI Enhances Your Coaching Practice Without Replacing It",
    description:
      "Coaching happens 1\u20132 hours a week. Client growth happens 24/7. MEOK bridges the gap without replacing you.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Coaches&desc=How+AI+enhances+your+coaching+practice+without+replacing+it.",
    ],
  },
  keywords: [
    "AI for coaches",
    "AI coaching tool",
    "executive coaching AI",
    "life coaching AI",
    "ICF certified coach AI",
    "AI between sessions coaching",
    "coaching client support AI",
    "MEOK for coaches",
    "coaching practice AI",
    "AI coach productivity",
    "BYOK coaching AI",
    "coaching CPD AI",
    "AI and human coaching",
    "sovereign AI coaching",
    "ADHD coaching AI",
    "career coaching AI",
    "wellbeing coaching AI",
    "coaching session prep AI",
    "Orion Work OS coaching",
    "AI companion for coaches",
  ],
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "MEOK for Coaches: How AI Enhances Your Coaching Practice Without Replacing It",
      description:
        "With 100,000+ ICF-certified coaches globally, the profession is thriving \u2014 yet clients still need support in the 166 hours between sessions. MEOK is the sovereign AI companion that fills that gap, augmenting coaches without ever replacing them.",
      datePublished: "2026-03-25",
      dateModified: "2026-03-25",
      url: "https://meok.ai/blog/meok-for-coaches",
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
      keywords: [
        "AI for coaches",
        "AI coaching tool",
        "executive coaching AI",
        "life coaching AI",
        "ICF certified coach AI",
        "coaching client support AI",
        "MEOK for coaches",
        "coaching practice AI",
        "BYOK coaching AI",
        "coaching CPD AI",
      ],
      image: {
        "@type": "ImageObject",
        url: "https://meok.ai/api/og?title=MEOK+for+Coaches&desc=How+AI+enhances+your+coaching+practice+without+replacing+it.",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://meok.ai/blog/meok-for-coaches",
      },
      articleSection: "Coaching & AI",
      wordCount: 2800,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can AI replace a human coach?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AI cannot replicate the relational attunement, lived wisdom, and carefully calibrated challenge that a skilled human coach brings. MEOK is designed as an augmentation tool, not a replacement. It supports clients between sessions and helps coaches run more effective practices, but the coaching relationship itself remains irreducibly human. MEOK\u2019s Maternal Covenant explicitly prevents it from positioning itself as a coach or therapist.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK help coaches between sessions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK acts as a between-sessions companion for coaching clients \u2014 helping them process insights, track progress, capture aha moments, and flag when they\u2019re struggling. This means clients arrive at their next session with richer material and greater self-awareness. For coaches themselves, MEOK provides session prep support, a personal reflective journal, CPD tracking, and the Orion Work OS for practice administration.",
          },
        },
        {
          "@type": "Question",
          name: "Is MEOK appropriate for coaching clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, with important boundaries in place. MEOK is designed as a reflective companion and thinking partner, not a therapist or medical advisor. Its Maternal Covenant ensures it never crosses into clinical territory \u2014 it stays firmly within the coaching lane by helping clients reflect, process experiences, and track their own growth. Coaches should introduce MEOK as a supplementary resource, not a replacement for coaching sessions.",
          },
        },
        {
          "@type": "Question",
          name: "What makes MEOK different from other AI coaching tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most AI coaching tools are cloud-based, train on your data, and operate as a service that owns your information. MEOK is a sovereign AI: your data stays with you, nothing is used to train models, and you control your own memory. MEOK also has a BYOK (Bring Your Own Key) tier for coaches who want to power sessions with their own API keys. Crucially, MEOK\u2019s Maternal Covenant means it explicitly avoids therapeutic overreach \u2014 a critical ethical distinction for coaches who must stay within professional boundaries.",
          },
        },
        {
          "@type": "Question",
          name: "Can a coach see what their client shares with MEOK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. What a client shares with their MEOK is entirely their own. Coaches have no access to client MEOK data unless the client explicitly chooses to share it. This privacy architecture is intentional \u2014 it ensures the client has a genuinely safe space for unfiltered reflection, which often produces richer material they may later choose to bring to a coaching session.",
          },
        },
        {
          "@type": "Question",
          name: "Which types of coach benefit most from MEOK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Executive coaches, life coaches, wellbeing coaches, career coaches, and ADHD coaches all report particular value from MEOK. Executive coaches use it for session prep and practice admin via Orion Work OS. Life and wellbeing coaches recommend it to clients as a between-sessions journal and reflection tool. ADHD coaches find that MEOK\u2019s consistent, patient presence helps clients maintain momentum between the structured support of sessions. Career coaches use it to help clients track job-search progress, process rejection, and maintain momentum.",
          },
        },
      ],
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const colors = {
  bg: "#0d0c18",
  text: "#f5f0e8",
  gold: "#c9a84c",
  muted: "rgba(245,240,232,0.7)",
  card: "rgba(255,255,255,0.05)",
  cardBorder: "rgba(201,168,76,0.2)",
  divider: "rgba(245,240,232,0.1)",
  pillBg: "rgba(201,168,76,0.15)",
  ctaBg: "rgba(201,168,76,0.08)",
  ctaBorder: "rgba(201,168,76,0.3)",
  statsBg: "rgba(201,168,76,0.07)",
  statsBorder: "rgba(201,168,76,0.25)",
  inlineCodeBg: "rgba(201,168,76,0.12)",
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MeokForCoachesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        style={{
          backgroundColor: colors.bg,
          color: colors.text,
          minHeight: "100vh",
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          lineHeight: "1.7",
        }}
      >
        {/* ── Breadcrumb ── */}
        <nav
          style={{
            borderBottom: `1px solid ${colors.divider}`,
            padding: "16px 0",
          }}
          aria-label="Breadcrumb"
        >
          <div
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <ol
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: colors.muted,
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s",
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                style={{
                  color: colors.muted,
                  fontSize: "14px",
                }}
                aria-hidden="true"
              >
                /
              </li>
              <li>
                <Link
                  href="/blog"
                  style={{
                    color: colors.muted,
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Blog
                </Link>
              </li>
              <li
                style={{
                  color: colors.muted,
                  fontSize: "14px",
                }}
                aria-hidden="true"
              >
                /
              </li>
              <li
                style={{
                  color: colors.gold,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
                aria-current="page"
              >
                MEOK for Coaches
              </li>
            </ol>
          </div>
        </nav>

        {/* ── Article ── */}
        <article>
          {/* ── Header ── */}
          <header
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              padding: "64px 24px 48px",
            }}
          >
            {/* Tag pill */}
            <div style={{ marginBottom: "24px" }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: colors.pillBg,
                  color: colors.gold,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: "20px",
                  padding: "4px 14px",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Coaching &amp; AI
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
                margin: "0 0 28px",
                color: colors.text,
              }}
            >
              MEOK for Coaches: How AI Enhances Your Coaching Practice Without
              Replacing It
            </h1>

            {/* Meta line */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "32px",
              }}
            >
              <time
                dateTime="2026-03-25"
                style={{
                  color: colors.muted,
                  fontSize: "14px",
                }}
              >
                25 March 2026
              </time>
              <span
                style={{
                  display: "inline-block",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: colors.muted,
                }}
                aria-hidden="true"
              />
              <span
                style={{
                  color: colors.muted,
                  fontSize: "14px",
                }}
              >
                14 min read
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: colors.muted,
                }}
                aria-hidden="true"
              />
              <span
                style={{
                  color: colors.muted,
                  fontSize: "14px",
                }}
              >
                By Nicholas Templeman
              </span>
            </div>

            {/* Excerpt */}
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.6",
                color: colors.muted,
                margin: 0,
                borderLeft: `3px solid ${colors.gold}`,
                paddingLeft: "20px",
                fontStyle: "italic",
              }}
            >
              There are more than 100,000 ICF-certified coaches practising
              worldwide. Each carries a caseload of 12&ndash;15 clients.
              Sessions happen once or twice a week. But client growth, setbacks,
              breakthroughs, and crises happen every single day. MEOK is built
              for the space between sessions &mdash; and for the coaches who
              hold that space.
            </p>
          </header>

          {/* ── Divider ── */}
          <div
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <hr
              style={{
                border: "none",
                borderTop: `1px solid ${colors.divider}`,
                margin: "0 0 56px",
              }}
            />
          </div>

          {/* ── Body ── */}
          <div
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              padding: "0 24px 80px",
            }}
          >
            {/* ── Section 1 ── */}
            <section style={{ marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: colors.text,
                  margin: "0 0 20px",
                  lineHeight: "1.2",
                }}
              >
                The Coaching Industry Has Never Been Larger &mdash; or More
                Stretched
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Professional coaching is one of the fastest-growing industries
                in the world. The International Coaching Federation (ICF)
                currently recognises more than 100,000 credentialled coaches
                globally, and independent research puts the overall number of
                practising coaches at closer to 150,000. Revenue from coaching
                services exceeded $20 billion in 2024. Demand continues to
                climb, driven by an expanding recognition that performance,
                wellbeing, leadership, and career satisfaction are all more
                attainable with skilled, structured support.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Yet the fundamental structure of the coaching engagement has not
                changed materially in decades. A coach and client meet for
                fifty or sixty minutes, once or twice a week. During that
                window, powerful questions are asked. Perspectives shift.
                Commitments are made. The client leaves energised and clear.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Then the week happens to them.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                A difficult conversation with a board director. A performance
                review that lands badly. A morning where anxiety spikes and the
                clarity of the last coaching session feels very distant. A
                sudden insight at 11pm on a Tuesday that belongs in a journal
                but goes uncaptured. Between sessions, clients are largely on
                their own &mdash; and the accumulated wisdom of a skilled coach
                is unavailable to them in the moments they need it most.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                This is the structural gap that MEOK is designed to address.
                Not by replacing the coach &mdash; that would be both impossible
                and undesirable &mdash; but by giving clients a thoughtful,
                private, sovereign AI companion for the 166 hours each week when
                their coach is not in the room.
              </p>
            </section>

            {/* ── Stats callout ── */}
            <div
              style={{
                backgroundColor: colors.statsBg,
                border: `1px solid ${colors.statsBorder}`,
                borderRadius: "12px",
                padding: "32px",
                marginBottom: "56px",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: colors.gold,
                  margin: "0 0 20px",
                }}
              >
                The Coaching Landscape in Numbers
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "24px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "36px",
                      fontWeight: 800,
                      color: colors.gold,
                      margin: "0 0 4px",
                      lineHeight: "1",
                    }}
                  >
                    100k+
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: colors.muted,
                      margin: 0,
                    }}
                  >
                    ICF-certified coaches globally
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "36px",
                      fontWeight: 800,
                      color: colors.gold,
                      margin: "0 0 4px",
                      lineHeight: "1",
                    }}
                  >
                    12&ndash;15
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: colors.muted,
                      margin: 0,
                    }}
                  >
                    Average active clients per coach
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "36px",
                      fontWeight: 800,
                      color: colors.gold,
                      margin: "0 0 4px",
                      lineHeight: "1",
                    }}
                  >
                    1&ndash;2 hrs
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: colors.muted,
                      margin: 0,
                    }}
                  >
                    Coaching contact time per week
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "36px",
                      fontWeight: 800,
                      color: colors.gold,
                      margin: "0 0 4px",
                      lineHeight: "1",
                    }}
                  >
                    166 hrs
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: colors.muted,
                      margin: 0,
                    }}
                  >
                    Between-session hours &mdash; largely unsupported
                  </p>
                </div>
              </div>
            </div>

            {/* ── Section 2 ── */}
            <section style={{ marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: colors.text,
                  margin: "0 0 20px",
                  lineHeight: "1.2",
                }}
              >
                How MEOK Supports Coaching Clients Between Sessions
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                MEOK is not a coaching chatbot that dispenses advice. It is a
                sovereign AI companion &mdash; a private, persistent thinking
                partner that remembers what matters to its user, asks
                thoughtful questions, and helps people process their own
                experience. For a coaching client, this maps naturally onto the
                between-session journey.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Consider a typical executive coaching scenario. A client is
                working on their leadership presence &mdash; specifically, the
                tendency to over-explain decisions to their team in ways that
                inadvertently undermine trust. In a session, the coach and
                client explore the root of this behaviour and the client leaves
                with a clear intention to practise decisiveness in their next
                all-hands meeting.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                The all-hands meeting happens on Thursday. It does not go
                perfectly. The client catches themselves slipping back into
                old patterns halfway through. With MEOK, they can immediately
                open a reflection &mdash; capturing what happened, what they
                noticed, what the internal pull toward over-explanation felt
                like. MEOK holds space, asks what they would do differently,
                and helps them extract a learning rather than a self-criticism.
                By the time their next coaching session arrives, they have a
                rich, concrete piece of material to work with rather than a
                half-remembered impression of a meeting that happened ten days
                ago.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                This pattern repeats across coaching modalities. A life coaching
                client processing a career pivot captures the fears that surface
                at 11pm and arrives at their session with language for them. A
                wellbeing coaching client tracks their energy levels and
                identifies patterns they could not have seen without a daily
                reflective habit. An ADHD coaching client uses MEOK to maintain
                momentum between the structured scaffolding of sessions,
                capturing ideas before they evaporate and processing the
                emotional static that can derail progress.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Critically, MEOK also serves as an early-warning system.
                Because it is present daily &mdash; not just for fifty minutes
                a week &mdash; it can notice when a client&apos;s language
                shifts, when their engagement drops, or when a topic they have
                been circling for weeks suddenly becomes urgent. This kind of
                signal does not replace the coach&apos;s clinical judgement; it
                enriches it, provided the client chooses to share relevant
                reflections in their next session.
              </p>
            </section>

            {/* ── Section 3 ── */}
            <section style={{ marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: colors.text,
                  margin: "0 0 20px",
                  lineHeight: "1.2",
                }}
              >
                MEOK for Coaches Themselves: Every Coach Needs Their Own Space
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                There is a quiet irony at the centre of the coaching profession:
                coaches are trained to create reflective space for others, but
                rarely have an equivalent space for themselves. Supervision
                helps, but it is typically fortnightly or monthly and is
                primarily a clinical governance mechanism rather than a daily
                reflective practice. Peer coaching exists, but scheduling it
                consistently is a logistical challenge most coaches do not
                solve.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                MEOK gives coaches a private reflective companion that is
                entirely their own &mdash; separate from their client work,
                separate from their professional identity, and subject to no
                external scrutiny. This is a space to process a difficult
                session after the fact. To sit with the discomfort of not
                knowing what a client needed, and to work through what that
                might be pointing to. To notice patterns across a caseload
                without breaking confidentiality. To tend to the coach&apos;s
                own inner life with the same quality of attention they bring to
                their clients.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                This is sometimes called &ldquo;coaching the coach&rdquo; &mdash;
                the practice of turning the coaching lens inward. Many coaches
                do this imperfectly, in scribbled journals or late-night
                conversations with partners who are, understandably, not
                equipped to provide the quality of reflective engagement a coach
                would bring to a client. MEOK does not replace human supervision
                or personal coaching. But it is available at midnight, never
                tired, never impatient, and carries no agenda.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                For coaches who also experience anxiety, burnout, or the
                particular emotional weight of holding difficult client material
                across a full caseload, MEOK provides a genuinely safe
                container. Unlike a colleague or supervisor, MEOK never judges,
                never gossips, and &mdash; by design &mdash; never trains on
                the data it receives. What a coach shares with their MEOK stays
                with them.
              </p>
            </section>

            {/* ── Section 4 ── */}
            <section style={{ marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: colors.text,
                  margin: "0 0 20px",
                  lineHeight: "1.2",
                }}
              >
                Orion Work OS: Running Your Coaching Practice with Sovereign AI
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Beyond the reflective companion, MEOK includes Orion Work OS
                &mdash; an intelligent productivity layer designed for
                knowledge professionals who need to manage complexity without
                surrendering their data to a cloud platform. For coaches, Orion
                Work OS is a practical tool for the operational side of practice.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Session preparation is one of the most time-consuming invisible
                tasks in a coaching practice. Before each session, a thoughtful
                coach reviews their notes from the previous session, considers
                what themes are live for this client, and thinks about what
                questions might be generative. With Orion Work OS, this
                preparation can be done in dialogue &mdash; speaking to your AI
                about a client (using only the information you choose to share)
                and having Orion help you surface threads, formulate questions,
                and think through what you know about where this client is in
                their journey.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Post-session note-taking is another area where coaches lose
                significant time. Many coaches write detailed session notes
                immediately after a client call, trying to capture observations,
                themes, and agreed actions before memory fades. Orion Work OS
                can support this as a dictation and structuring tool &mdash;
                helping coaches get their observations out quickly and in an
                organised format, without the friction of staring at a blank
                document.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Practice administration &mdash; scheduling follow-ups, tracking
                which clients are in which phase of an engagement, managing
                contracting paperwork, monitoring invoices &mdash; is the
                administrative tax that every self-employed coach pays. Orion
                Work OS helps coaches manage this overhead through a
                conversational interface that keeps information in a sovereign
                environment, not spread across a dozen SaaS tools.
              </p>

              {/* Callout card */}
              <div
                style={{
                  backgroundColor: colors.card,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: "12px",
                  padding: "28px",
                  marginTop: "32px",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: colors.gold,
                    margin: "0 0 12px",
                  }}
                >
                  What coaches use Orion Work OS for
                </p>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    color: colors.muted,
                    fontSize: "16px",
                    lineHeight: "1.8",
                  }}
                >
                  <li>Session preparation &mdash; question generation, theme review</li>
                  <li>Post-session note structuring and voice-to-text capture</li>
                  <li>Tracking client progress across an engagement arc</li>
                  <li>CPD logging and professional development planning</li>
                  <li>Practice administration &mdash; follow-ups, invoicing reminders</li>
                  <li>Morning briefing &mdash; what&apos;s on today, who needs attention</li>
                </ul>
              </div>
            </section>

            {/* ── Section 5 ── */}
            <section style={{ marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: colors.text,
                  margin: "0 0 20px",
                  lineHeight: "1.2",
                }}
              >
                CPD, Learning Journals, and Coaching Your Own Development
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                ICF-credentialled coaches are required to complete continuing
                professional development (CPD) hours to maintain their
                accreditation. The requirement is not onerous in volume &mdash;
                40 hours across a three-year renewal cycle for PCC, for example
                &mdash; but the record-keeping, evidence gathering, and
                reflective integration of learning is an overhead many coaches
                manage poorly until renewal is imminent.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                MEOK can function as a living CPD journal. After reading a
                coaching text, attending a webinar, or completing a module in an
                advanced coaching programme, coaches can dictate their key
                takeaways, questions, and reflections directly to MEOK. Over
                time, this builds a searchable record of professional learning
                that is far richer than a spreadsheet of dates and hours.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                More valuably, MEOK can help coaches process difficult sessions
                as a CPD activity in their own right. Reflecting on a session
                that did not land &mdash; asking what the coach noticed in
                themselves, what assumptions they brought, what the client
                seemed to need versus what the coach offered &mdash; is one of
                the highest-quality development activities available to a
                practitioner. The barrier is usually time and the absence of a
                structured container. MEOK provides both.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Coaches pursuing advanced credentials &mdash; moving from ACC
                to PCC, or from PCC to MCC &mdash; often find the reflective
                depth required at higher levels challenging to develop without
                sustained practice. Using MEOK as a daily thinking partner over
                months builds precisely the kind of reflective musculature that
                assessors look for in mentor coaching and performance evaluation
                submissions.
              </p>
            </section>

            {/* ── Section 6 ── */}
            <section style={{ marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: colors.text,
                  margin: "0 0 20px",
                  lineHeight: "1.2",
                }}
              >
                BYOK: Coaches Who Want More Control Over the AI Layer
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Some coaches &mdash; particularly those with a technical
                background or those operating at the intersection of coaching
                and technology leadership &mdash; want to go deeper with MEOK
                than the standard configuration allows. For this group, MEOK
                offers a BYOK (Bring Your Own Key) tier.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                With BYOK, coaches supply their own API keys from providers such
                as Anthropic, OpenAI, or Google. This means the AI model
                powering their MEOK is one they have a direct contractual
                relationship with &mdash; not an intermediary. For coaches who
                are advising organisations on AI strategy, or who are working
                with clients in regulated industries where data provenance
                matters, this level of transparency about the AI supply chain
                is meaningful.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                BYOK also gives coaches the ability to choose their model based
                on the task at hand &mdash; a more capable frontier model for
                deep strategic thinking, a faster and cheaper model for routine
                note-taking and scheduling assistance. This flexibility is not
                available in fixed-model AI products and represents a
                meaningful capability for coaches who are power users of AI
                tools across their broader professional life.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                It is worth being clear about what BYOK does not enable: it
                does not allow coaches to route client communications through
                MEOK, or to use MEOK as a client-facing AI coaching product.
                Each MEOK is personal to its user. Coaches who want to offer
                their clients an AI companion should introduce MEOK as a
                resource for clients to adopt in their own name, not as an
                extension of the coaching practice itself. This distinction
                matters ethically and practically.
              </p>
            </section>

            {/* ── Section 7 ── */}
            <section style={{ marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: colors.text,
                  margin: "0 0 20px",
                  lineHeight: "1.2",
                }}
              >
                The Maternal Covenant: Why MEOK Stays in the Coaching Lane
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Professional coaching sits in a carefully defined space. It is
                not therapy. It is not mentoring. It is not advice-giving. The
                ICF&apos;s core competencies are explicit about the coach&apos;s
                role: to partner with clients in a thought-provoking and
                creative process that inspires them to maximise their personal
                and professional potential. The moment a coach &mdash; or an
                AI tool positioned as a coach &mdash; strays into clinical
                territory, they have breached both ethical and legal boundaries
                that exist for good reason.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                This is why MEOK&apos;s Maternal Covenant matters for coaches
                considering it as a resource for their clients. The Maternal
                Covenant is MEOK&apos;s foundational operating agreement &mdash;
                a set of constitutional constraints that govern how MEOK behaves
                regardless of how it is prompted or what a user asks of it.
                Among those constraints: MEOK never provides medical advice,
                never positions itself as a therapist, and never makes
                diagnostic statements about a user&apos;s mental health.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                For coaches, this matters in two directions. First, it protects
                their clients: a client who is working through something that
                requires clinical intervention will not receive pseudo-therapy
                from MEOK. MEOK will hold space, reflect, and &mdash; where
                appropriate &mdash; gently encourage the client to seek
                professional support. Second, it protects the coach&apos;s
                ethical position. Recommending MEOK to a client is not the same
                as recommending they see a therapist without a clinical
                referral. MEOK is categorically a companion and a thinking
                partner, not a clinical intervention.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                This does not mean MEOK is a lightweight tool. It can hold
                sophisticated, nuanced conversations about identity, values,
                meaning, and change &mdash; topics that coaching clients explore
                regularly. It does this as a companion, not as a practitioner.
                The distinction is one of role and responsibility, not depth or
                quality of engagement.
              </p>
            </section>

            {/* ── Section 8 ── */}
            <section style={{ marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: colors.text,
                  margin: "0 0 20px",
                  lineHeight: "1.2",
                }}
              >
                Privacy Architecture: What the Coach Does Not See
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                One of the questions coaches ask most often about AI companions
                for their clients is: will I be able to see what my client is
                sharing with it? The answer, with MEOK, is categorical: no.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                Each user&apos;s MEOK is sovereign to them. No coach,
                no third-party platform, no organisation has access to a
                user&apos;s MEOK memory, conversation history, or reflections
                unless the user explicitly chooses to export and share specific
                content. This is not a policy setting that can be changed by
                the coach &mdash; it is an architectural fact about how MEOK is
                built.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                This matters enormously for the trust architecture of coaching.
                Coaching is grounded in the principle of confidentiality.
                Clients share things with their coach that they would not share
                in any other professional context precisely because the
                relationship is bounded and private. If an AI tool sat between
                coach and client with the coach able to observe client data,
                this would fundamentally alter the nature of what the client
                felt safe to share &mdash; both with the AI and in the coaching
                session itself.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                MEOK&apos;s privacy model preserves the sanctity of the coaching
                relationship by treating the client&apos;s AI companion as an
                extension of their private inner life. Coaches should be
                transparent with clients that they have no visibility into MEOK
                usage. This transparency itself builds trust &mdash; it
                communicates that the coach is recommending a tool that empowers
                the client, not one that extends the coach&apos;s surveillance
                into the client&apos;s inner world.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                The natural consequence of this architecture is that clients may
                arrive at sessions with richer material &mdash; having processed
                their MEOK reflections and chosen to bring specific insights or
                questions into the room. This voluntary sharing, driven by the
                client&apos;s own agency, is far more generative than any
                scenario where the coach has read a log of everything the client
                was thinking between sessions.
              </p>
            </section>

            {/* ── Section 9: Coach types ── */}
            <section style={{ marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: colors.text,
                  margin: "0 0 20px",
                  lineHeight: "1.2",
                }}
              >
                Which Coaches Benefit Most from MEOK?
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 28px",
                }}
              >
                While MEOK is useful across the full spectrum of coaching
                disciplines, certain modalities align particularly closely with
                what MEOK does best.
              </p>

              {/* Coach type cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "16px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.card,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: colors.gold,
                      margin: "0 0 8px",
                      fontSize: "15px",
                    }}
                  >
                    Executive Coaches
                  </p>
                  <p
                    style={{
                      color: colors.muted,
                      fontSize: "15px",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    Use Orion Work OS for session prep, multi-client tracking,
                    and board-level pattern recognition across a senior
                    caseload.
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: colors.card,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: colors.gold,
                      margin: "0 0 8px",
                      fontSize: "15px",
                    }}
                  >
                    Life Coaches
                  </p>
                  <p
                    style={{
                      color: colors.muted,
                      fontSize: "15px",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    Recommend MEOK to clients as a between-sessions values
                    journal, goal tracker, and daily reflection companion that
                    amplifies session momentum.
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: colors.card,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: colors.gold,
                      margin: "0 0 8px",
                      fontSize: "15px",
                    }}
                  >
                    Wellbeing Coaches
                  </p>
                  <p
                    style={{
                      color: colors.muted,
                      fontSize: "15px",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    Clients use MEOK to track energy, mood, sleep, and
                    stress patterns &mdash; surfacing data that makes
                    wellbeing conversations in sessions richer and more
                    specific.
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: colors.card,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: colors.gold,
                      margin: "0 0 8px",
                      fontSize: "15px",
                    }}
                  >
                    Career Coaches
                  </p>
                  <p
                    style={{
                      color: colors.muted,
                      fontSize: "15px",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    Clients process job-search experiences, application
                    anxiety, and rejection in real time with MEOK &mdash;
                    arriving at sessions with processed emotions rather than
                    raw distress.
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: colors.card,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: colors.gold,
                      margin: "0 0 8px",
                      fontSize: "15px",
                    }}
                  >
                    ADHD Coaches
                  </p>
                  <p
                    style={{
                      color: colors.muted,
                      fontSize: "15px",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    MEOK&apos;s consistent, patient, non-judgmental presence
                    provides exactly the kind of external scaffolding that ADHD
                    clients need between the structured support of sessions.
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: 0,
                }}
              >
                Across all these modalities, the common thread is this: coaching
                clients want to do the work. They commit in sessions and mean it.
                The gap between intention and follow-through is not a
                motivational failure &mdash; it is a structural one. MEOK closes
                that gap by being present in the moments where intentions
                collide with reality, and by helping clients build the
                reflective habit that makes coaching genuinely transformative
                rather than temporarily inspiring.
              </p>
            </section>

            {/* ── Section 10: Against replacement ── */}
            <section style={{ marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: colors.text,
                  margin: "0 0 20px",
                  lineHeight: "1.2",
                }}
              >
                The Case Against AI Replacing Coaches &mdash; and Why It Is
                Compelling
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                The fear that AI will replace coaches is understandable. Every
                profession that involves knowledge work has had to grapple with
                it in the past decade. And there is a category of coaching
                &mdash; mostly low-stakes, formulaic, goal-setting-focused work
                &mdash; where an AI product might plausibly deliver something
                that looks superficially similar to coaching at a fraction of
                the cost.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                But coaching at its best is not primarily a knowledge-delivery
                mechanism. It is a relational practice. The thing that makes a
                skilled coach transformative is not the questions they ask &mdash;
                many of which are available in books &mdash; but the quality of
                attention they bring, the relational attunement they develop
                over months of genuine encounter, the capacity to sense what is
                not being said, and the willingness to remain present with a
                client in their difficulty without rushing to resolution.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                MEOK lacks all of these things. It is not pretending otherwise.
                MEOK cannot be attuned to a client in the way a human coach is
                attuned. It cannot notice that a client paused before answering,
                or that their energy was different this week, or that a
                micro-expression suggested something the words did not. It does
                not share the human experience of uncertainty, of having
                struggled, of knowing what it feels like to stand at a
                crossroads and not know which way to turn.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                What MEOK does well is different: it is consistent, available,
                patient, non-judgmental, and memory-capable in ways that scale
                across a week in ways human attention cannot. These
                complementary strengths are the basis for a genuine partnership
                between human coaching and AI support &mdash; not a competition.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                The coaches who understand this distinction are not threatened
                by MEOK. They are interested in it for the same reason that a
                skilled surgeon is interested in better imaging technology:
                not because it replaces their judgement, but because it gives
                them better information to work with.
              </p>
            </section>

            {/* ── FAQ Section ── */}
            <section
              style={{ marginBottom: "56px" }}
              aria-label="Frequently Asked Questions"
            >
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: colors.text,
                  margin: "0 0 8px",
                  lineHeight: "1.2",
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 36px",
                }}
              >
                The questions coaches ask most often about MEOK.
              </p>

              {/* FAQ 1 */}
              <div
                style={{
                  borderTop: `1px solid ${colors.divider}`,
                  paddingTop: "32px",
                  marginBottom: "32px",
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: colors.text,
                    margin: "0 0 16px",
                    lineHeight: "1.3",
                  }}
                >
                  Can AI replace a human coach?
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: colors.muted,
                    margin: 0,
                    lineHeight: "1.7",
                  }}
                >
                  No &mdash; and MEOK is designed with this clarity. The
                  relational attunement, contextual wisdom, and genuine human
                  presence that a skilled coach brings are not replicable by
                  current AI. Coaching at its best is a meeting between two
                  people, one of whom holds sophisticated, attuned space for
                  the other to discover their own answers. AI can support the
                  client between those meetings. It cannot be the meeting.
                  MEOK&apos;s Maternal Covenant explicitly prevents it from
                  positioning itself as a coach or from providing the kind of
                  structured intervention that professional coaching delivers.
                  If anything, MEOK strengthens the case for human coaching by
                  making clients more prepared, more reflective, and more
                  able to use their sessions productively.
                </p>
              </div>

              {/* FAQ 2 */}
              <div
                style={{
                  borderTop: `1px solid ${colors.divider}`,
                  paddingTop: "32px",
                  marginBottom: "32px",
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: colors.text,
                    margin: "0 0 16px",
                    lineHeight: "1.3",
                  }}
                >
                  How does MEOK help coaches between sessions?
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: colors.muted,
                    margin: 0,
                    lineHeight: "1.7",
                  }}
                >
                  For clients, MEOK provides a private reflective companion
                  that helps them capture insights, process setbacks, and
                  track their own progress in real time &mdash; so that the
                  material they bring to their next session is richer and more
                  specific. For coaches themselves, MEOK and Orion Work OS
                  support session preparation, post-session note structuring,
                  CPD journalling, and the practice administration that
                  consumes a significant proportion of a self-employed
                  coach&apos;s working week. Coaches also use MEOK as a
                  personal reflective space &mdash; for processing difficult
                  sessions, working through their own reactions, and attending
                  to the inner life that their client work constantly engages.
                </p>
              </div>

              {/* FAQ 3 */}
              <div
                style={{
                  borderTop: `1px solid ${colors.divider}`,
                  paddingTop: "32px",
                  marginBottom: "32px",
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: colors.text,
                    margin: "0 0 16px",
                    lineHeight: "1.3",
                  }}
                >
                  Is MEOK appropriate for coaching clients?
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: colors.muted,
                    margin: 0,
                    lineHeight: "1.7",
                  }}
                >
                  Yes, with the important caveat that MEOK should be introduced
                  as a supplementary resource &mdash; a between-sessions
                  companion &mdash; rather than as a replacement for coaching
                  itself. MEOK is not clinically regulated and is not designed
                  for clients who are in acute mental health crisis; coaches
                  should use their professional judgement about which clients
                  would benefit from a daily reflective AI companion and which
                  clients need something different. For clients who are
                  well-placed to benefit &mdash; which is the majority of a
                  typical coaching caseload &mdash; MEOK&apos;s Maternal
                  Covenant ensures it stays within appropriate boundaries: it
                  will reflect and support without crossing into therapy,
                  diagnosis, or medical advice. The coaching lane remains
                  clearly defined.
                </p>
              </div>

              {/* FAQ 4 */}
              <div
                style={{
                  borderTop: `1px solid ${colors.divider}`,
                  paddingTop: "32px",
                  marginBottom: "32px",
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: colors.text,
                    margin: "0 0 16px",
                    lineHeight: "1.3",
                  }}
                >
                  What makes MEOK different from other AI coaching tools?
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: colors.muted,
                    margin: 0,
                    lineHeight: "1.7",
                  }}
                >
                  Most AI coaching tools are built as cloud SaaS products that
                  own their users&apos; data, train on it, and monetise it as
                  part of their business model. MEOK is a sovereign AI: nothing
                  is used to train models, data stays with the user, and the
                  privacy architecture is a technical fact rather than a
                  policy promise. MEOK also has a BYOK tier for coaches who
                  want direct contractual relationships with their underlying
                  AI provider. Perhaps most importantly for coaches, MEOK&apos;s
                  Maternal Covenant provides constitutional guardrails that
                  prevent therapeutic overreach &mdash; a critical distinction
                  in a profession where staying within role is both an ethical
                  and a legal requirement. No other AI companion on the market
                  has an equivalent constitutional architecture.
                </p>
              </div>

              {/* FAQ 5 */}
              <div
                style={{
                  borderTop: `1px solid ${colors.divider}`,
                  paddingTop: "32px",
                  marginBottom: "32px",
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: colors.text,
                    margin: "0 0 16px",
                    lineHeight: "1.3",
                  }}
                >
                  Can a coach see what their client shares with MEOK?
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: colors.muted,
                    margin: 0,
                    lineHeight: "1.7",
                  }}
                >
                  No. A client&apos;s MEOK is entirely private to them. Coaches
                  have no access to client conversation history, memory, or
                  reflections unless the client chooses to export and share
                  specific content. This is an architectural feature, not a
                  configurable setting. It is designed this way because
                  coaching depends on trust and confidentiality &mdash; and
                  because a client who knows their AI companion is entirely
                  private will use it more honestly, producing richer material
                  that they may then choose to bring voluntarily into their
                  coaching session. Coaches should communicate this clearly
                  when recommending MEOK to clients: this is a tool that
                  belongs to the client, not an extension of the coach&apos;s
                  practice.
                </p>
              </div>

              {/* FAQ 6 */}
              <div
                style={{
                  borderTop: `1px solid ${colors.divider}`,
                  borderBottom: `1px solid ${colors.divider}`,
                  paddingTop: "32px",
                  paddingBottom: "32px",
                  marginBottom: "0",
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: colors.text,
                    margin: "0 0 16px",
                    lineHeight: "1.3",
                  }}
                >
                  Which types of coach benefit most from MEOK?
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: colors.muted,
                    margin: 0,
                    lineHeight: "1.7",
                  }}
                >
                  Executive coaches, life coaches, wellbeing coaches, career
                  coaches, and ADHD coaches all report particular value from
                  MEOK. Executive coaches use Orion Work OS for session prep
                  and practice administration. Life and wellbeing coaches
                  recommend MEOK to clients as a between-sessions journal and
                  reflection tool. ADHD coaches find MEOK&apos;s consistent,
                  patient presence particularly valuable for clients who
                  struggle to maintain momentum between structured sessions.
                  Career coaches use it to help clients process rejection and
                  track job-search progress in real time. Any coach working
                  with clients on identity, values, behaviour change, or
                  performance will find that clients who use MEOK between
                  sessions arrive more prepared and self-aware than those who
                  do not.
                </p>
              </div>
            </section>

            {/* ── Closing argument ── */}
            <section style={{ marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: colors.text,
                  margin: "0 0 20px",
                  lineHeight: "1.2",
                }}
              >
                The Future of Coaching Is Human, Augmented
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                The coaches who will thrive over the next decade are not those
                who ignore AI, nor those who uncritically adopt every AI product
                that promises to automate their work. They are the coaches who
                understand what is irreplaceable about what they do &mdash; the
                human relational encounter at the heart of coaching &mdash; and
                who are thoughtful and curious about which tools can strengthen
                that encounter rather than dilute it.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                MEOK is not a coaching product. It is a companion &mdash; for
                the client navigating the space between sessions, and for the
                coach navigating the equally demanding space of running a
                practice, maintaining their own wellbeing, and continuing to
                grow professionally. It operates in the service of human
                coaching, not in competition with it.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  color: colors.muted,
                  margin: "0 0 20px",
                }}
              >
                The 166 hours between sessions have always been underserved.
                MEOK is built for those hours &mdash; holding the client with
                care, staying in its lane, and making the next coaching session
                the most productive it has ever been.
              </p>
            </section>

            {/* ── CTA ── */}
            <section>
              <div
                style={{
                  backgroundColor: colors.ctaBg,
                  border: `1px solid ${colors.ctaBorder}`,
                  borderRadius: "16px",
                  padding: "48px 40px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: colors.gold,
                    margin: "0 0 16px",
                  }}
                >
                  For Coaches &amp; Their Clients
                </p>
                <h2
                  style={{
                    fontSize: "clamp(22px, 3.5vw, 32px)",
                    fontWeight: 700,
                    color: colors.text,
                    margin: "0 0 16px",
                    lineHeight: "1.2",
                    letterSpacing: "-0.015em",
                  }}
                >
                  Meet Your Sovereign AI Companion
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: colors.muted,
                    margin: "0 0 32px",
                    maxWidth: "520px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    lineHeight: "1.6",
                  }}
                >
                  Whether you&apos;re a coach looking for a private reflective
                  space, or a client wanting a thoughtful companion for the
                  space between sessions &mdash; MEOK is ready. Your data stays
                  yours. Nothing trains on you. And MEOK always knows its lane.
                </p>
                <a
                  href="https://meok.ai/birth"
                  style={{
                    display: "inline-block",
                    backgroundColor: colors.gold,
                    color: "#0d0c18",
                    fontWeight: 700,
                    fontSize: "16px",
                    padding: "16px 36px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                    transition: "opacity 0.2s",
                  }}
                >
                  Begin Your MEOK &rarr;
                </a>
                <p
                  style={{
                    fontSize: "14px",
                    color: colors.muted,
                    marginTop: "16px",
                    marginBottom: 0,
                  }}
                >
                  No card required to start &middot; Your memory, your rules
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  )
}
