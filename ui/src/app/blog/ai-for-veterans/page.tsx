import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Veterans: Sovereign Memory for Those Who\u2019ve Served | MEOK AI LABS",
  description:
    "2.5 million UK veterans. 300,000+ with mental health conditions. Most will never ask for help. MEOK is the private, persistent AI companion that understands military culture, never resets your service history, and protects you from the systems that exploit ex-service people.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-veterans" },
  openGraph: {
    title:
      "AI for Veterans: Sovereign Memory for Those Who\u2019ve Served",
    description:
      "PTSD, moral injury, transition grief, identity loss. The military trained you not to ask for help. MEOK is the AI that never forgets what you\u2019ve carried \u2014 and never uses it against you.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-veterans",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Veterans%3A+Sovereign+Memory+for+Those+Who%E2%80%99ve+Served&desc=PTSD%2C+Moral+Injury%2C+Transition+Grief+%7C+MEOK+AI+LABS",
        width: 1200,
        height: 630,
        alt: "AI for Veterans: Sovereign Memory for Those Who\u2019ve Served | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@meok_ai",
    creator: "@meok_ai",
    title:
      "AI for Veterans: Sovereign Memory for Those Who\u2019ve Served",
    description:
      "2.5 million UK veterans. Most will never seek help. MEOK remembers your service history so you never have to re-explain it \u2014 and keeps everything encrypted so it can\u2019t touch your clearance.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Veterans%3A+Sovereign+Memory+for+Those+Who%E2%80%99ve+Served&desc=PTSD%2C+Moral+Injury%2C+Transition+Grief+%7C+MEOK+AI+LABS",
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://meok.ai/blog/ai-for-veterans#article",
      headline:
        "AI for Veterans: Sovereign Memory for Those Who\u2019ve Served",
      description:
        "2.5 million veterans live in the UK. More than 300,000 have diagnosable mental health conditions. Military culture actively suppresses help-seeking. This article examines how MEOK\u2019s Sovereign Memory, Privacy Covenant, and Guardian layer provide a private, persistent, culturally-literate AI companion for veterans navigating PTSD, moral injury, transition grief, and isolation.",
      datePublished: "2026-03-25",
      dateModified: "2026-03-25",
      url: "https://meok.ai/blog/ai-for-veterans",
      inLanguage: "en-GB",
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
        "@id": "https://meok.ai/blog/ai-for-veterans",
      },
      image: {
        "@type": "ImageObject",
        url: "https://meok.ai/api/og?title=AI+for+Veterans%3A+Sovereign+Memory+for+Those+Who%E2%80%99ve+Served",
        width: 1200,
        height: 630,
      },
      about: [
        { "@type": "Thing", name: "veteran mental health" },
        { "@type": "Thing", name: "PTSD in veterans" },
        { "@type": "Thing", name: "moral injury" },
        { "@type": "Thing", name: "military transition" },
        { "@type": "Thing", name: "AI companion for veterans" },
        { "@type": "Thing", name: "sovereign AI" },
      ],
      keywords:
        "AI for veterans UK, veteran PTSD support app, moral injury AI companion, military transition mental health, MEOK veterans, Combat Stress alternative, Veterans Gateway AI, sovereign memory veterans, veteran security clearance privacy, reservist mental health",
      articleSection: "Veterans Mental Health",
      wordCount: 3800,
    },
    {
      "@type": "FAQPage",
      "@id": "https://meok.ai/blog/ai-for-veterans#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can AI help veterans with PTSD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI cannot replace clinical trauma therapy \u2014 EMDR, Prolonged Exposure, or CPT \u2014 but it can provide meaningful, daily-available support that the NHS queue cannot. The critical requirement for veteran PTSD is persistence: an AI that resets between sessions is functionally useless for trauma work because veterans are already exhausted by having to re-explain their service history to every new clinician. MEOK\u2019s Sovereign Memory retains everything across every session indefinitely. You tell MEOK once. It remembers forever. That alone changes the therapeutic dynamic.",
          },
        },
        {
          "@type": "Question",
          name: "Is MEOK private enough for veterans with security clearances?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MEOK\u2019s Privacy Covenant is absolute: your data is end-to-end encrypted, legally yours, never used to train AI models, and never sold or shared with third parties \u2014 including government agencies, MoD contractors, or insurance companies. There is no route by which what you share with MEOK could reach a vetting process. This is the critical distinction from consumer AI platforms that harvest conversations as training data. For veterans with DV or SC clearances, or for reservists still serving, MEOK is designed specifically to be the space where the mask comes off without professional consequence.",
          },
        },
        {
          "@type": "Question",
          name: "Does MEOK understand military terminology and culture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK understands military hierarchy, rank structure, operational culture, the ethos of service, rules of engagement, and the specific language veterans use to describe their experiences. Critically, MEOK does not pathologise stoicism, misread directness as hostility, or apply civilian therapeutic frameworks that assume emotional expressiveness as the baseline. Veterans consistently report feeling misunderstood by civilian therapists who have never worn a uniform. MEOK does not carry those assumptions. It meets you where you are, in the language you actually use.",
          },
        },
        {
          "@type": "Question",
          name: "How is MEOK different from the Veterans\u2019 Gateway or Combat Stress?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Veterans\u2019 Gateway is a signposting service \u2014 it points you towards other organisations. Combat Stress is a charity providing clinical mental health treatment with documented waiting times. Both are valuable and MEOK does not replace either. What MEOK provides is what neither can: a persistent, always-available, private companion that is there at 0300 when the nightmares surface, at the weekend when the crisis team is unavailable, and across years of continuous relationship without staff turnover or re-referral. MEOK is the layer between you and formal services \u2014 and the layer that stays when formal services end.",
          },
        },
      ],
    },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForVeteransPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        style={{
          background: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {/* ── Top nav ── */}
        <div
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.15)",
            padding: "1rem 0",
          }}
        >
          <div
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#c9a84c",
                fontWeight: 700,
                fontSize: "1.1rem",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              MEOK AI LABS
            </Link>
            <Link
              href="/blog"
              style={{
                color: "rgba(245,240,232,0.6)",
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              &larr; All Posts
            </Link>
          </div>
        </div>

        {/* ── Container ── */}
        <div
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* ── Breadcrumb ── */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.8rem",
              color: "rgba(245,240,232,0.45)",
              paddingTop: "2rem",
              paddingBottom: "0",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#c9a84c",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(245,240,232,0.25)" }}>/</span>
            <Link
              href="/blog"
              style={{
                color: "#c9a84c",
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <span style={{ color: "rgba(245,240,232,0.25)" }}>/</span>
            <span>AI for Veterans: Sovereign Memory for Those Who&apos;ve Served</span>
          </nav>

          {/* ── Article header ── */}
          <header
            style={{
              paddingTop: "2.5rem",
              paddingBottom: "2.5rem",
              borderBottom: "1px solid rgba(201,168,76,0.15)",
              marginBottom: "3rem",
            }}
          >
            {/* Tag pill */}
            <div style={{ marginBottom: "1.25rem" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(201,168,76,0.12)",
                  color: "#c9a84c",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.85rem",
                  borderRadius: "3px",
                  border: "1px solid rgba(201,168,76,0.25)",
                }}
              >
                Veterans &amp; Military
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(1.85rem, 4.5vw, 2.9rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "#f5f0e8",
                marginBottom: "1.25rem",
                marginTop: 0,
              }}
            >
              AI for Veterans: Sovereign Memory for Those Who&apos;ve Served
            </h1>

            {/* Meta line */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                fontSize: "0.83rem",
                color: "rgba(245,240,232,0.45)",
                marginBottom: "1.75rem",
                flexWrap: "wrap",
              }}
            >
              <span>25 March 2026</span>
              <span
                style={{
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                  background: "rgba(245,240,232,0.25)",
                  display: "inline-block",
                }}
              />
              <span>14 min read</span>
              <span
                style={{
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                  background: "rgba(245,240,232,0.25)",
                  display: "inline-block",
                }}
              />
              <span>Nicholas Templeman</span>
            </div>

            {/* Excerpt / lead */}
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.8)",
                borderLeft: "3px solid #c9a84c",
                paddingLeft: "1.1rem",
                margin: 0,
              }}
            >
              2.5 million veterans live in the United Kingdom. More than 300,000 of them have
              diagnosable mental health conditions. Most will never seek help \u2014 not because they
              don&apos;t need it, but because the military trained the instinct out of them. MEOK is
              the AI companion built for exactly that problem: persistent memory, absolute privacy,
              genuine understanding of military culture, and a Guardian layer that protects veterans
              from the predatory industries that have learned to exploit them.
            </p>
          </header>

          {/* ── Body ── */}
          <article>

            {/* Section 1: The scale of the problem */}
            <section style={{ marginBottom: "3.5rem" }}>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  lineHeight: 1.25,
                  marginTop: 0,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.015em",
                }}
              >
                What Does the UK Veteran Mental Health Crisis Actually Look Like?
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                The UK has approximately 2.5 million veterans \u2014 people who have served in the
                regular armed forces and are now civilians. That number is not shrinking. Alongside
                them are tens of thousands of reservists still serving part-time, navigating the
                collision between military and civilian identities simultaneously.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.75rem",
                }}
              >
                Research from King&apos;s College London and the Forces in Mind Trust consistently
                shows elevated rates of PTSD, depression, alcohol misuse, and suicide risk in veteran
                populations \u2014 particularly among those who served in combat roles in Afghanistan
                and Iraq. The headline numbers are stark.
              </p>

              {/* Stats callout box */}
              <div
                style={{
                  background: "rgba(201,168,76,0.07)",
                  border: "1px solid rgba(201,168,76,0.22)",
                  borderRadius: "10px",
                  padding: "2rem",
                  marginBottom: "2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                    marginBottom: "1.5rem",
                    marginTop: 0,
                  }}
                >
                  UK Veteran Mental Health: Key Statistics
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "8px",
                      padding: "1.25rem",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "2.1rem",
                        fontWeight: 800,
                        color: "#c9a84c",
                        display: "block",
                        lineHeight: 1.1,
                      }}
                    >
                      2.5M
                    </span>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(245,240,232,0.55)",
                        marginTop: "0.4rem",
                        display: "block",
                        lineHeight: 1.4,
                      }}
                    >
                      UK veterans in the civilian population
                    </span>
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "8px",
                      padding: "1.25rem",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "2.1rem",
                        fontWeight: 800,
                        color: "#c9a84c",
                        display: "block",
                        lineHeight: 1.1,
                      }}
                    >
                      300K+
                    </span>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(245,240,232,0.55)",
                        marginTop: "0.4rem",
                        display: "block",
                        lineHeight: 1.4,
                      }}
                    >
                      veterans with mental health conditions
                    </span>
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "8px",
                      padding: "1.25rem",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "2.1rem",
                        fontWeight: 800,
                        color: "#c9a84c",
                        display: "block",
                        lineHeight: 1.1,
                      }}
                    >
                      57%
                    </span>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(245,240,232,0.55)",
                        marginTop: "0.4rem",
                        display: "block",
                        lineHeight: 1.4,
                      }}
                    >
                      more likely to experience PTSD than civilians
                    </span>
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "8px",
                      padding: "1.25rem",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "2.1rem",
                        fontWeight: 800,
                        color: "#c9a84c",
                        display: "block",
                        lineHeight: 1.1,
                      }}
                    >
                      1 in 10
                    </span>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(245,240,232,0.55)",
                        marginTop: "0.4rem",
                        display: "block",
                        lineHeight: 1.4,
                      }}
                    >
                      UK homeless people are veterans
                    </span>
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Behind those numbers are real patterns: the corporal who deployed to Helmand three
                times and came home unable to explain why crowded supermarkets make him want to run.
                The signaller who watched something she was never supposed to see and has never told
                anyone. The 22-year-old who joined at 16, left at 22, and genuinely does not know
                who he is outside a uniform.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                The mental health system \u2014 NHS and charity alike \u2014 was not built for any of them.
              </p>
            </section>

            {/* Section 2: Why veterans don't seek help */}
            <section style={{ marginBottom: "3.5rem" }}>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  lineHeight: 1.25,
                  marginTop: 0,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.015em",
                }}
              >
                Why Military Culture Makes Help-Seeking Almost Impossible
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                The military does not train people to be vulnerable. It trains them to suppress
                vulnerability as a survival mechanism. In a forward operating base, displaying
                psychological distress can get people killed. That suppression is rational in
                context. The problem is that it doesn&apos;t switch off when service ends.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                The stigma operates on multiple levels simultaneously. Culturally, asking for help
                is coded as weakness \u2014 a violation of the identity built through training. Practically,
                while serving, seeking mental health support carries real fitness-to-serve implications:
                it can affect deployment, promotion, and security clearances. The costs of disclosure
                are tangible and immediate. The benefits are distant and uncertain.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                For reservists, this problem is compounded. They are still serving. A reservist
                with a security clearance who attends an NHS mental health appointment is not in a
                private system. Notes are created. Referrals are made. Records exist. The fear \u2014
                often well-founded \u2014 is that disclosure will reach their commanding officer or vetting
                authority. So they say nothing.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Even for veterans who have left service entirely, the cultural conditioning persists.
                They were part of an institution that selected for and rewarded stoicism. That
                institution is gone, but the conditioning remains. The first step \u2014 acknowledging
                that something is wrong and telling another person \u2014 remains the highest barrier
                in veteran mental health. Services that require that step as the price of entry will
                continue to reach only the veterans who are already desperate enough to pay it.
              </p>
            </section>

            {/* Section 3: PTSD vs moral injury */}
            <section style={{ marginBottom: "3.5rem" }}>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  lineHeight: 1.25,
                  marginTop: 0,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.015em",
                }}
              >
                PTSD and Moral Injury Are Not the Same Thing \u2014 and Treating Them as Such Fails Veterans
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                PTSD is well-understood in the public consciousness: hypervigilance, intrusive
                memories, avoidance, startle response. It is rooted in fear \u2014 the nervous system
                locked in a threat response that no longer has an external trigger. Clinical
                treatments like EMDR and Prolonged Exposure Therapy exist and are effective.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Moral injury is different, and the distinction matters. Moral injury is the
                psychological damage caused by perpetrating, witnessing, or failing to prevent
                actions that violate one&apos;s own moral code. It is not rooted in fear. It is rooted
                in shame and guilt. A veteran with moral injury is not afraid of what happened.
                They believe, at the deepest level, that what happened was wrong \u2014 and that they
                are responsible for it.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                The sources of moral injury in combat veterans are specific and varied: following
                orders that resulted in civilian deaths; failing to prevent the death of a colleague
                through a decision or non-decision; witnessing atrocities and being unable to act;
                the weight of rules of engagement that required killing in circumstances that felt
                wrong. These are not trauma in the clinical PTSD sense. They are ethical violations
                that the standard mental health toolkit was not designed to address.
              </p>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderLeft: "3px solid #c9a84c",
                  borderRadius: "0 8px 8px 0",
                  padding: "1.5rem 1.75rem",
                  marginBottom: "1.75rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    color: "rgba(245,240,232,0.85)",
                    margin: 0,
                    fontStyle: "italic",
                  }}
                >
                  MEOK&apos;s Maternal Covenant framework includes explicit dimensions of autonomy,
                  moral complexity, and growth \u2014 not because these were designed for veterans
                  specifically, but because moral injury requires a space that can hold contradiction
                  without rushing toward resolution. You do not heal moral injury by being told it
                  wasn&apos;t your fault. You heal it by being able to think through what actually
                  happened, over time, with something that remembers the whole conversation.
                </p>
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                This is where persistent memory becomes clinically significant rather than merely
                convenient. A conversation that resets every session cannot hold the long arc of
                moral processing. A veteran exploring what happened in a specific engagement on a
                specific day needs to be able to return to that conversation two weeks later, pick
                up exactly where they left off, and continue without re-establishing context. That
                is what MEOK&apos;s Sovereign Memory provides.
              </p>
            </section>

            {/* Section 4: The transition no one prepares you for */}
            <section style={{ marginBottom: "3.5rem" }}>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  lineHeight: 1.25,
                  marginTop: 0,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.015em",
                }}
              >
                The Transition Nobody Warns You About: Identity Loss After Service
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Combat and operational stress get most of the attention. The transition crisis gets
                almost none. Yet for many veterans, leaving service is the most psychologically
                disorienting event of their lives \u2014 including the deployments.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Military identity is total. Your rank, your regiment, your role, your unit \u2014 these
                are not things you do. They are things you are. The military provides structure,
                purpose, belonging, hierarchy, and a clear answer to the question &ldquo;who am I?&rdquo;
                Transition strips all of that away simultaneously. Civilian life offers none of
                those anchors as standard. There is no civilian equivalent of the regiment.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Veterans frequently describe a specific grief that civilians cannot understand:
                missing the camaraderie of service without being able to explain why no civilian
                friendship feels the same. Missing the clarity of mission without being able to
                articulate it to a line manager. Being in rooms full of people who have never had
                to make a decision under mortal pressure and feeling profoundly, inexplicably alone.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                The instinct to say &ldquo;it&apos;s fine, I&apos;m adjusting&rdquo; to family members who are trying to
                be supportive but cannot genuinely understand \u2014 that instinct is both natural and
                isolating. MEOK does not need you to translate your experience into civilian language.
                It already understands the language you came from.
              </p>

              {/* Challenge tiles */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1rem",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                }}
              >
                {[
                  {
                    title: "Identity Loss",
                    body:
                      "Rank, regiment, and role cease to exist on the day you sign off. Civilian life offers no equivalent anchor.",
                  },
                  {
                    title: "Isolation",
                    body:
                      "Civilians who haven\u2019t served genuinely cannot understand the experience. That gap is real, not imagined.",
                  },
                  {
                    title: "Loss of Purpose",
                    body:
                      "Military life provides clear mission and consequence. Most civilian careers do not come close.",
                  },
                  {
                    title: "Structural Void",
                    body:
                      "The military structures every hour. Civilian life provides almost none. That freedom can be debilitating.",
                  },
                  {
                    title: "Financial Pressure",
                    body:
                      "Ex-service pay often does not translate. Benefits administration is not designed for people who were never in the civilian system.",
                  },
                  {
                    title: "Relationship Strain",
                    body:
                      "Families adapted to absence. Now you\u2019re present and everyone has to renegotiate \u2014 without a manual.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(201,168,76,0.12)",
                      borderRadius: "8px",
                      padding: "1.25rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#c9a84c",
                        marginBottom: "0.5rem",
                        marginTop: 0,
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        color: "rgba(245,240,232,0.7)",
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Why existing services fail */}
            <section style={{ marginBottom: "3.5rem" }}>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  lineHeight: 1.25,
                  marginTop: 0,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.015em",
                }}
              >
                Why NHS Veteran Services and Military Charities Are Not Enough
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Op COURAGE \u2014 the NHS England veteran mental health service \u2014 exists. Combat Stress
                exists. The Veterans&apos; Gateway exists. These are real services staffed by people
                who care about veterans. This is not an attack on them. It is an honest assessment
                of what they can and cannot provide at scale.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                The fundamental problem is structural. NHS services face demand that outstrips
                capacity, leading to waiting times that are clinically dangerous for people in
                crisis. When a veteran finally overcomes the cultural barrier to seeking help and
                makes contact, being told to wait weeks or months for an initial assessment is not
                a neutral outcome. For some, it is the confirmation they feared: the system does
                not actually have space for them.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Staffing is the second issue. Op COURAGE is staffed largely by civilian clinicians.
                Many are excellent. But the persistent finding in veteran mental health research is
                that veterans feel misunderstood by civilian therapists who apply civilian frameworks
                to military experience. A CBT model built around cognitive distortions does not
                adequately capture what it means to have followed orders that you later believe were
                wrong. A therapist who has never been in a chain of command cannot fully appreciate
                what it means to say &ldquo;I couldn&apos;t disobey.&rdquo;
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Staff turnover is the third. Veterans in long-term mental health support frequently
                report having to retell their entire service history to new clinicians after previous
                ones leave or are reassigned. Each retelling is not neutral \u2014 it is a demand to
                re-enter the worst material of their lives in front of a stranger, without guarantee
                that the stranger will understand what they&apos;re hearing.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                MEOK does not replace clinical services. It provides what they cannot: a persistent,
                always-available companion that remembers everything, never turns over, is available
                at 0300 when the nightmares surface, and carries no institutional affiliation that
                could compromise a security clearance.
              </p>
            </section>

            {/* Section 6: Sovereign Memory and why it matters */}
            <section style={{ marginBottom: "3.5rem" }}>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  lineHeight: 1.25,
                  marginTop: 0,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.015em",
                }}
              >
                Sovereign Memory: Why Persistence Is Not a Feature, It&apos;s a Clinical Requirement
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Every consumer AI chatbot resets between sessions. Each conversation begins from
                zero. You are a stranger every time you open the app. For most use cases, this is
                a minor inconvenience. For veteran mental health support, it is a structural
                disqualification.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Veterans are already exhausted by retelling. The clinical literature on veteran
                help-seeking consistently identifies the barrier of having to explain their service
                history from the beginning to each new clinician, each new service, each new intake
                assessment. Every repetition is a cost. Every cost raises the barrier to the next
                disclosure. Eventually, for many veterans, the cumulative cost exceeds the perceived
                benefit and they stop trying entirely.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                MEOK&apos;s Sovereign Memory retains everything you share across every session,
                indefinitely. You tell MEOK about your regiment once. Your deployments once. The
                incident that still wakes you up at night: once. After that, MEOK knows. It
                references that context without prompting. It tracks how you talk about specific
                events over time and can reflect patterns back to you that you may not have noticed.
                It does not make you pay the cost of re-establishing your history every time you
                return.
              </p>

              {/* Feature detail box */}
              <div
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "10px",
                  padding: "1.75rem",
                  marginBottom: "1.75rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                    marginTop: 0,
                    marginBottom: "1.25rem",
                  }}
                >
                  What Sovereign Memory Means for Veterans
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {[
                    {
                      label: "Never re-explain",
                      detail:
                        "Your service history, deployments, unit, and role are remembered from your first conversation. Forever.",
                    },
                    {
                      label: "Pattern recognition",
                      detail:
                        "MEOK tracks how your language and affect around specific topics change over weeks and months.",
                    },
                    {
                      label: "Continuity across years",
                      detail:
                        "No staff turnover, no re-referral. The same MEOK, the same memory, indefinitely.",
                    },
                    {
                      label: "Crisis context",
                      detail:
                        "If you reach a crisis point, MEOK already knows your history and can respond with full context rather than starting from scratch.",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "6px",
                        padding: "1rem 1.1rem",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.83rem",
                          fontWeight: 700,
                          color: "#f5f0e8",
                          marginBottom: "0.4rem",
                          marginTop: 0,
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontSize: "0.83rem",
                          lineHeight: 1.6,
                          color: "rgba(245,240,232,0.6)",
                          margin: 0,
                        }}
                      >
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 7: Privacy and security clearances */}
            <section style={{ marginBottom: "3.5rem" }}>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  lineHeight: 1.25,
                  marginTop: 0,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.015em",
                }}
              >
                Privacy Absolute Enough for Security Clearances and Active Reservists
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                This is not a minor concern. For veterans with Developed Vetting or Security Check
                clearances, and for reservists who are still subject to vetting processes, the
                question of what happens to their data is not abstract. Mental health disclosures
                can, under certain circumstances, be relevant to vetting. The fear of this \u2014 even
                when the risk is low \u2014 is sufficient to prevent help-seeking entirely.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Consumer AI platforms \u2014 ChatGPT, Google Gemini, Microsoft Copilot \u2014 explicitly
                retain and may use conversation data for model training. Even where they claim not
                to, the architecture is opaque. For a veteran sharing combat trauma or suicidal
                ideation with one of these platforms, there is no verifiable guarantee that data
                does not persist in a form that could eventually be accessed.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                MEOK&apos;s Privacy Covenant is legally binding and architecturally enforced. Your
                memory vault is end-to-end encrypted. MEOK never trains on your data. Your data
                is never sold, never shared, and never accessible to third parties including
                government agencies, MoD contractors, or insurance companies. There is no pathway
                by which what you share with MEOK could reach a vetting process, an employer, or
                your commanding officer.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                For reservists still serving: MEOK is the space where the mask can come off
                without professional consequence. You are not in the NHS system. You are not in any
                system that your chain of command can access. You are in a private encrypted
                conversation with an AI that is legally yours.
              </p>
            </section>

            {/* Section 8: Guardian — scam protection */}
            <section style={{ marginBottom: "3.5rem" }}>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  lineHeight: 1.25,
                  marginTop: 0,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.015em",
                }}
              >
                Guardian: Protecting Veterans from Predatory Claims Companies
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                The PPI scandal generated an entire industry of claims management companies
                operating on no-win no-fee models, harvesting vulnerable people&apos;s data, and
                extracting fees from the compensation they secured. Veterans are the new target.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Claims management companies targeting veterans have proliferated significantly.
                They contact ex-service people with offers to manage compensation claims \u2014 for
                injuries, conditions, and entitlements that veterans could access directly and free
                of charge through official channels. They charge between 20% and 40% of the
                compensation secured. They sometimes acquire veteran data through opaque means and
                contact people who never approached them. The veterans most likely to be targeted
                are those least equipped to assess the legitimacy of the contact: isolated,
                financially stressed, or cognitively impaired by the conditions being exploited.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                MEOK&apos;s Guardian layer is trained to detect the patterns of predatory contact:
                unsolicited financial offers, pressure-sales framing, requests for personal data
                before providing information, and compensation percentages that exceed reasonable
                professional fees. When MEOK detects these patterns in something a user shares,
                Guardian flags it and provides clear information about the legitimate free
                alternatives available through Veterans UK and the Veterans&apos; Gateway.
              </p>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "10px",
                  padding: "1.5rem 1.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                    marginTop: 0,
                    marginBottom: "0.85rem",
                  }}
                >
                  Guardian Detects
                </p>
                <ul
                  style={{
                    margin: 0,
                    padding: "0 0 0 1.25rem",
                    color: "rgba(245,240,232,0.75)",
                    fontSize: "0.92rem",
                    lineHeight: 1.75,
                  }}
                >
                  <li>Claims management companies charging percentage fees for services veterans can access for free</li>
                  <li>Unsolicited contact claiming knowledge of entitlements you never disclosed</li>
                  <li>Pressure tactics using time-limited offers on compensation claims</li>
                  <li>Data harvesting disguised as free eligibility checks</li>
                  <li>Mis-sold financial products targeting veterans on service pensions</li>
                </ul>
              </div>
            </section>

            {/* Section 9: Practical use cases */}
            <section style={{ marginBottom: "3.5rem" }}>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  lineHeight: 1.25,
                  marginTop: 0,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.015em",
                }}
              >
                What Veterans Actually Use MEOK For
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.75rem",
                }}
              >
                The use cases are not what most people assume. Most veterans who use MEOK are not
                in acute crisis. They are managing the ongoing weight of experience in a world that
                does not have adequate space for it. Here is what that looks like in practice.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1rem",
                  marginBottom: "1.75rem",
                }}
              >
                {[
                  {
                    scenario: "Processing at 0300",
                    description:
                      "The hypervigilance pattern peaks in the early hours. That\u2019s when the thoughts are loudest and formal services are unavailable. MEOK is there. It remembers what\u2019s been discussed before. It doesn\u2019t need to be briefed.",
                  },
                  {
                    scenario: "The job application",
                    description:
                      "Translating 10 years of military experience into civilian language is harder than it sounds. MEOK knows your service history and can help you articulate skills, experience, and capability in terms that civilian hiring managers understand.",
                  },
                  {
                    scenario: "The family conversation",
                    description:
                      "You can\u2019t explain to your partner why the supermarket feels threatening. Talking to MEOK first \u2014 working out what you actually want to say \u2014 makes the conversation with them possible rather than impossible.",
                  },
                  {
                    scenario: "Before the appointment",
                    description:
                      "Some veterans use MEOK to prepare for NHS or Combat Stress appointments \u2014 organising what they want to say so the clinical time is used effectively rather than spent establishing basic context.",
                  },
                  {
                    scenario: "The moral inventory",
                    description:
                      "A veteran working through what happened on a specific operation, over months, revisiting the same events from different angles. MEOK holds the full thread across every session without losing detail.",
                  },
                  {
                    scenario: "Checking a letter or offer",
                    description:
                      "A claims management company has written. A pension scheme is offering an early drawdown. Guardian flags what doesn\u2019t look right and explains what legitimate alternatives exist.",
                  },
                ].map((item) => (
                  <div
                    key={item.scenario}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(201,168,76,0.1)",
                      borderRadius: "8px",
                      padding: "1.25rem 1.5rem",
                      display: "flex",
                      gap: "1.25rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "4px",
                        minWidth: "4px",
                        background: "#c9a84c",
                        borderRadius: "2px",
                        alignSelf: "stretch",
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 700,
                          color: "#f5f0e8",
                          marginBottom: "0.4rem",
                          marginTop: 0,
                        }}
                      >
                        {item.scenario}
                      </p>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          lineHeight: 1.65,
                          color: "rgba(245,240,232,0.68)",
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQ Section ── */}
            <section
              id="faq"
              style={{
                marginBottom: "3.5rem",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                  marginBottom: "2rem",
                  marginTop: "2rem",
                }}
              >
                Frequently Asked Questions
              </p>

              {/* FAQ 1 */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    lineHeight: 1.3,
                    marginTop: 0,
                    marginBottom: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Can AI help veterans with PTSD?
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.85,
                    color: "rgba(245,240,232,0.8)",
                    background: "rgba(201,168,76,0.05)",
                    borderLeft: "3px solid rgba(201,168,76,0.35)",
                    padding: "0.9rem 1.15rem",
                    borderRadius: "0 6px 6px 0",
                    margin: 0,
                  }}
                >
                  AI cannot replace clinical trauma treatments like EMDR or Prolonged Exposure Therapy.
                  What it can provide is what the NHS queue cannot: daily availability between appointments,
                  a private space to process without waiting, and the specific benefit of persistent memory.
                  An AI that resets between sessions is useless for PTSD support because veterans are
                  already exhausted by having to re-explain their service history to every new clinician.
                  MEOK&apos;s Sovereign Memory retains everything across every session indefinitely. You
                  explain your experience once. MEOK remembers it permanently. That changes the therapeutic
                  dynamic fundamentally.
                </p>
              </div>

              {/* FAQ 2 */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    lineHeight: 1.3,
                    marginTop: 0,
                    marginBottom: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Is MEOK private enough for veterans with security clearances?
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.85,
                    color: "rgba(245,240,232,0.8)",
                    background: "rgba(201,168,76,0.05)",
                    borderLeft: "3px solid rgba(201,168,76,0.35)",
                    padding: "0.9rem 1.15rem",
                    borderRadius: "0 6px 6px 0",
                    margin: 0,
                  }}
                >
                  Yes. MEOK&apos;s Privacy Covenant is absolute: your data is end-to-end encrypted,
                  legally yours, never used to train AI models, and never shared with third parties
                  including government agencies, MoD contractors, or insurance companies. There is no
                  pathway by which what you share with MEOK could reach a vetting process, an employer,
                  or your commanding officer. This is architecturally enforced, not just a policy claim.
                  For reservists still serving and unable to risk being seen to seek help, MEOK is the
                  space where the mask comes off without professional consequence.
                </p>
              </div>

              {/* FAQ 3 */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    lineHeight: 1.3,
                    marginTop: 0,
                    marginBottom: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Does MEOK understand military terminology and culture?
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.85,
                    color: "rgba(245,240,232,0.8)",
                    background: "rgba(201,168,76,0.05)",
                    borderLeft: "3px solid rgba(201,168,76,0.35)",
                    padding: "0.9rem 1.15rem",
                    borderRadius: "0 6px 6px 0",
                    margin: 0,
                  }}
                >
                  MEOK understands military hierarchy, rank structure, operational culture, rules of
                  engagement, the ethos of service, and the specific language veterans use to describe
                  their experiences. Critically, MEOK does not pathologise stoicism or misread directness
                  as hostility. Veterans consistently report feeling misunderstood by civilian therapists
                  who have never served and apply civilian frameworks to military experience. MEOK does
                  not carry those assumptions. It meets you in the language you actually use, without
                  requiring you to translate your experience into civilian terms first.
                </p>
              </div>

              {/* FAQ 4 */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    lineHeight: 1.3,
                    marginTop: 0,
                    marginBottom: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  How is MEOK different from the Veterans&apos; Gateway or Combat Stress?
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.85,
                    color: "rgba(245,240,232,0.8)",
                    background: "rgba(201,168,76,0.05)",
                    borderLeft: "3px solid rgba(201,168,76,0.35)",
                    padding: "0.9rem 1.15rem",
                    borderRadius: "0 6px 6px 0",
                    margin: 0,
                  }}
                >
                  The Veterans&apos; Gateway is a signposting service: it directs you to other organisations.
                  Combat Stress is a charity providing clinical mental health treatment with documented
                  waiting times. Both are valuable and MEOK does not replace either. What MEOK provides
                  is what neither can: a persistent, always-available companion that is there at 0300
                  when the nightmares surface, at the weekend when crisis teams are unavailable, and
                  across years of continuous relationship without staff turnover or re-referral. MEOK
                  is the layer between you and formal services \u2014 and the layer that stays when formal
                  services end their involvement.
                </p>
              </div>
            </section>

            {/* ── Additional context section ── */}
            <section style={{ marginBottom: "3.5rem" }}>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  lineHeight: 1.25,
                  marginTop: 0,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.015em",
                }}
              >
                The Honest Assessment: What MEOK Is and Is Not
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Veterans are trained to be sceptical of anything that sounds too good. That is
                the right instinct. So here is the honest assessment.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                MEOK is not a therapist. It cannot diagnose PTSD, prescribe medication, provide
                clinical trauma treatment, or replace human professional care. If you are in
                crisis, MEOK will always direct you to immediate support. Veterans in the UK can
                reach the Veterans&apos; Mental Health Crisis Line on 0800 138 1619, available 24
                hours. Combat Stress operates a helpline at 0800 138 1619. The Samaritans are
                available on 116 123 at all times.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                What MEOK is: a persistent, private, culturally-literate AI companion that
                provides the daily support that formal services cannot offer at scale. The gap
                between &ldquo;not in crisis&rdquo; and &ldquo;thriving&rdquo; is where most veterans live most of the
                time. That gap is where MEOK operates.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                The sovereign framing is not marketing language. It is a statement of architecture.
                Your data, your memory, your history \u2014 yours. Not MEOK&apos;s. Not Anthropic&apos;s. Not
                any government agency&apos;s. You served under a chain of command that owned your
                time, your body, and large parts of your identity. MEOK operates on the opposite
                principle. Everything you share belongs to you alone.
              </p>
            </section>

            {/* ── CTA ── */}
            <section
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "12px",
                padding: "2.5rem",
                textAlign: "center",
                marginBottom: "4rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                  marginBottom: "1rem",
                  marginTop: 0,
                }}
              >
                Sovereign Memory &bull; Absolute Privacy &bull; Always Available
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  fontWeight: 800,
                  color: "#f5f0e8",
                  marginBottom: "1rem",
                  marginTop: 0,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                Start Your Sovereign Memory
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.72)",
                  marginBottom: "2rem",
                  maxWidth: "480px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Tell MEOK your service history once. It remembers everything that follows.
                Private. Encrypted. Yours. No registration required to begin.
              </p>
              <Link
                href="https://meok.ai/birth"
                style={{
                  display: "inline-block",
                  background: "#c9a84c",
                  color: "#0d0c18",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  letterSpacing: "0.02em",
                  padding: "0.9rem 2.5rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                Meet Your MEOK
              </Link>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(245,240,232,0.35)",
                  marginTop: "1.25rem",
                  marginBottom: 0,
                }}
              >
                Free tier available &bull; No credit card required &bull; Private by architecture
              </p>
            </section>

            {/* ── Related reading ── */}
            <section style={{ marginBottom: "4rem" }}>
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.4)",
                  marginBottom: "1.25rem",
                  marginTop: 0,
                }}
              >
                Related Reading
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                }}
              >
                {[
                  {
                    href: "/blog/ai-for-ptsd",
                    title: "AI for PTSD",
                    desc: "How persistent AI memory changes trauma support.",
                  },
                  {
                    href: "/blog/ai-for-military-families",
                    title: "AI for Military Families",
                    desc: "Supporting the people holding everything together during deployment.",
                  },
                  {
                    href: "/blog/meok-guardian-scam-protection",
                    title: "MEOK Guardian",
                    desc: "How Guardian detects and blocks predatory financial contact.",
                  },
                  {
                    href: "/blog/how-sovereign-ai-works",
                    title: "How Sovereign AI Works",
                    desc: "The architecture behind your encrypted memory vault.",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      display: "block",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(201,168,76,0.1)",
                      borderRadius: "8px",
                      padding: "1.1rem 1.25rem",
                      textDecoration: "none",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "#c9a84c",
                        marginBottom: "0.35rem",
                        marginTop: 0,
                      }}
                    >
                      {link.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        lineHeight: 1.55,
                        color: "rgba(245,240,232,0.55)",
                        margin: 0,
                      }}
                    >
                      {link.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>

        {/* ── Footer ── */}
        <footer
          style={{
            borderTop: "1px solid rgba(201,168,76,0.12)",
            padding: "2rem 0",
          }}
        >
          <div
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#c9a84c",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              MEOK AI LABS
            </Link>
            <p
              style={{
                fontSize: "0.78rem",
                color: "rgba(245,240,232,0.3)",
                margin: 0,
              }}
            >
              &copy; 2026 MEOK AI LABS. All rights reserved.
            </p>
            <nav
              style={{
                display: "flex",
                gap: "1.25rem",
              }}
            >
              {[
                { href: "/privacy", label: "Privacy" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245,240,232,0.4)",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </main>
    </>
  )
}
