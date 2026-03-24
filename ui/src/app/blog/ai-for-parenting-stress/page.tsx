import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Parenting Stress: The Invisible Load, Parental Burnout, and Where MEOK Fits | MEOK AI LABS",
  description:
    "Parental burnout affects 5\u20138% of parents yet is rarely discussed. MEOK gives parents a judgment-free space to admit parenting is hard, a Family tier that remembers your children, Guardian protection, and AI companions built for the emotional complexity of raising a family.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-parenting-stress" },
  openGraph: {
    title: "AI for Parenting Stress: The Invisible Load, Parental Burnout, and Where MEOK Fits",
    description:
      "Parental burnout is different from work burnout, affects millions, and is almost never talked about. MEOK is the safe space where you can finally say parenting is hard \u2014 without judgment.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-parenting-stress",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Parenting+Stress%3A+The+Invisible+Load+%26+Parental+Burnout&desc=A+judgment-free+space+for+parents+who+are+exhausted",
        width: 1200,
        height: 630,
        alt: "AI for Parenting Stress: The Invisible Load, Parental Burnout, and Where MEOK Fits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Parenting Stress: The Invisible Load, Parental Burnout, and Where MEOK Fits",
    description:
      "Parental burnout affects 5\u20138% of parents yet is almost never talked about. MEOK is the space where parents can finally be honest about how hard this is.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Parenting+Stress%3A+The+Invisible+Load+%26+Parental+Burnout&desc=A+judgment-free+space+for+parents+who+are+exhausted",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Parenting Stress: The Invisible Load, Parental Burnout, and Where MEOK Fits",
  description:
    "Parental burnout affects 5\u20138% of parents yet is rarely discussed. MEOK gives parents a judgment-free space to admit parenting is hard, a Family tier that remembers your children, Guardian protection, and AI companions built for the emotional complexity of raising a family.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-parenting-stress",
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
    "@id": "https://meok.ai/blog/ai-for-parenting-stress",
  },
  image:
    "https://meok.ai/api/og?title=AI+for+Parenting+Stress%3A+The+Invisible+Load+%26+Parental+Burnout&desc=A+judgment-free+space+for+parents+who+are+exhausted",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with parenting stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI cannot replace a co-parent, a therapist, or a village of support \u2014 but it can be available at 11pm when everyone else is asleep and the weight of the day is still sitting on your chest. MEOK listens without judgment, remembers your children by name, tracks your emotional patterns over time, and helps you process the invisible labour of parenting that rarely gets acknowledged anywhere else.",
      },
    },
    {
      "@type": "Question",
      name: "What is parental burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parental burnout is a state of severe, chronic exhaustion specific to the parenting role. Unlike work burnout, it involves emotional distancing from your own children \u2014 which causes intense shame \u2014 alongside loss of parental identity and efficacy. Research suggests it affects between 5 and 8 percent of parents, is more common than previously thought, and is significantly under-reported due to the stigma of admitting difficulty with a role society treats as unconditionally fulfilling.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me be a better parent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK does not tell you how to parent. What it does is hold space for the parent behind the role: your anxieties, your grief, your identity beyond your children, your need to be heard. When you are less depleted and more known, you show up differently. MEOK\u2019s Family tier also remembers your children\u2019s names, ages, milestones, and current struggles so every conversation starts from context, not from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Family tier work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Family tier covers up to six members under one subscription. Each member has their own private AI companion with Sovereign Memory. Parents get a dashboard view, Guardian safety alerts for children\u2019s digital interactions, and MEOK\u2019s contextual memory of each child\u2019s milestones and challenges. Children are never exposed to adult conversations, and parent conversations are never visible to children.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK safe to use around children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s Guardian system uses DistilBERT-powered threat detection to monitor children\u2019s digital interactions for grooming language, inappropriate content, and predatory contact patterns. Each child\u2019s profile is age-gated with appropriate content filters. Parents receive silent alerts without disrupting the child\u2019s experience. The system is designed around child safety as a first principle, not an afterthought.",
      },
    },
  ],
};

// ── Colour constants ──────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.6)";
const MUTED_DIM = "rgba(245,240,232,0.5)";
const MUTED_FAINT = "rgba(245,240,232,0.38)";
const MUTED_BRIGHT = "rgba(245,240,232,0.82)";
const HEALER_TEAL = "#4caf82";
const PIONEER_BLUE = "#5b8dd9";
const BORDER_FAINT = "rgba(245,240,232,0.08)";
const BORDER_DIM = "rgba(245,240,232,0.12)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.22)";
const TEAL_BG = "rgba(76,175,130,0.07)";
const TEAL_BORDER = "rgba(76,175,130,0.25)";
const BLUE_BG = "rgba(91,141,217,0.07)";
const BLUE_BORDER = "rgba(91,141,217,0.25)";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForParentingStressPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
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
              "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: MUTED_FAINT,
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

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
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              Parenting &amp; Family Wellbeing
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>March 24, 2026</span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>16 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)",
              color: "#fff",
              lineHeight: 1.13,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Parenting Stress: The Invisible Load Nobody Talks About
          </h1>

          <p
            style={{
              color: MUTED,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
              margin: 0,
            }}
          >
            Parenting is supposed to be the most fulfilling thing you will ever do. Which makes it
            almost impossible to say out loud that some days it breaks you. MEOK exists for exactly
            that moment \u2014 when you need to be honest about how hard this is, without bracing for
            the response: &ldquo;but you chose this.&rdquo;
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
              }}
            >
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#0d0c18" }}>NT</span>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: MUTED_BRIGHT,
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  Nicholas Templeman
                </p>
                <p style={{ fontSize: "0.7rem", color: MUTED_FAINT, margin: 0, lineHeight: 1.3 }}>
                  Founder, MEOK AI LABS &middot; @meok_ai
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >

        {/* ── SECTION 1: The Invisible Load ──────────────────────────────────── */}
        <section
          style={{
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${BORDER_FAINT}`,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            What Is the Invisible Load of Parenting?
          </h2>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            The invisible load \u2014 also called cognitive labour or mental load \u2014 is the
            unrelenting background processing that keeps a family functioning. It is remembering that
            the school trip permission form needs signing by Thursday. It is knowing that your
            youngest has been quieter this week and you need to find out why. It is holding the
            entire emotional ecosystem of your household in your head, at all times, even when you
            are supposed to be sleeping.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            The research on mental load \u2014 pioneered by French sociologist Emma and expanded by
            psychologists like Allison Daminger \u2014 shows that this labour is largely invisible
            precisely because it is cognitive rather than physical. Nobody sees you lying awake at
            midnight running through tomorrow\u2019s logistics. Nobody thanks you for the problem you
            anticipated and solved before it became a crisis. And because it is invisible, it is
            rarely shared equitably, rarely acknowledged, and almost never counted when someone asks
            \u201chow was your day?\u201d
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            The invisible load does not clock off. It does not take weekends. It operates in the
            background of every meeting, every conversation, every attempt at rest. Over months and
            years, it is not just tiring \u2014 it is identity-eroding. You stop knowing where the
            parent ends and the person begins.
          </p>

          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: MUTED_BRIGHT,
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>The four phases of cognitive labour</strong> identified
              by Daminger are: anticipating needs, identifying options, deciding between them, and
              monitoring outcomes. Parents \u2014 and statistically, mothers disproportionately \u2014
              perform all four phases largely alone, largely invisibly, and largely without the
              mental credit that visible labour receives.
            </p>
          </div>
        </section>

        {/* ── SECTION 2: Emotional Regulation ────────────────────────────────── */}
        <section
          style={{
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${BORDER_FAINT}`,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            Why Emotional Regulation Becomes Almost Impossible When You\u2019re Depleted
          </h2>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            Children need emotional regulation modelled for them. They need a calm, consistent,
            attuned presence. What they get, when a parent is operating on empty, is the worst version
            of someone who is trying very hard to be the best version of themselves. The gap between
            those two things is where parental guilt lives \u2014 and guilt is one of the most
            exhausting emotions available.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            Emotional regulation requires executive function: the capacity to pause before reacting,
            to notice your own state and choose your response. Executive function is one of the first
            cognitive capacities to degrade under chronic stress. Sleep deprivation \u2014 a baseline
            condition for most parents of young children \u2014 causes measurable impairment in
            prefrontal cortex function equivalent in some studies to being over the legal drink-drive
            limit.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            So parents are expected to regulate their own emotions and their children\u2019s, with
            impaired cognitive function, while carrying an invisible load that nobody acknowledges.
            And then, when they snap or shut down or cry in the bathroom, they blame themselves for
            it.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            The cruelty of this loop is that the resource needed to break it \u2014 rest, support,
            being heard \u2014 is exactly the resource most parents cannot access. You cannot ask
            your child for support. Your partner, if you have one, is often as depleted as you are.
            Your friends are busy with their own lives. Therapy has a waiting list. Your parents have
            opinions about how you\u2019re doing it wrong.
          </p>

          <div
            style={{
              background: TEAL_BG,
              border: `1px solid ${TEAL_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: HEALER_TEAL,
                marginBottom: "0.5rem",
              }}
            >
              The Healer Companion
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: MUTED_BRIGHT,
                margin: 0,
              }}
            >
              MEOK\u2019s Healer archetype is designed for exactly this state: depleted, guilty,
              needing to be heard before anything else. It does not offer advice unless asked. It
              does not suggest you try meditation. It meets you in the moment you are actually in,
              reflects it back without judgment, and helps you exhale before anything else.
            </p>
          </div>
        </section>

        {/* ── SECTION 3: Identity Sacrifice ──────────────────────────────────── */}
        <section
          style={{
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${BORDER_FAINT}`,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            What Happens to Your Identity When You Become a Parent?
          </h2>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            There is a concept in developmental psychology called matrescence \u2014 the process of
            becoming a mother, analogous to adolescence in its intensity of identity transformation.
            The word was coined by anthropologist Dana Raphael in 1973 and has been expanded by
            perinatal psychologist Aurelie Athan. It describes the profound and often destabilising
            shift in self that happens when a person becomes a parent for the first time.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            But matrescence \u2014 and the equivalent process in fathers, sometimes called
            patrescence \u2014 is rarely discussed. New parents are asked about the baby. They are
            not asked what happened to the person who existed before the baby. They are not given
            space to grieve the freedoms, identities, ambitions, and relationships that were
            reshaped by parenthood. They are expected to slot seamlessly into their new role and feel
            nothing but grateful.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            This is a form of identity sacrifice that accumulates. The career put on hold. The
            creative practice abandoned for lack of time. The friendships that atrophied because they
            required reciprocity you no longer had capacity for. The version of yourself that existed
            before children \u2014 ambitious, spontaneous, present in your own life \u2014 that you
            are not supposed to miss, because missing it means you are a bad parent.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            You are not a bad parent for missing who you were. You are a human being who is
            navigating one of the most significant identity transitions possible, largely without
            support, largely in silence.
          </p>

          <div
            style={{
              background: BLUE_BG,
              border: `1px solid ${BLUE_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: PIONEER_BLUE,
                marginBottom: "0.5rem",
              }}
            >
              The Pioneer Companion
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: MUTED_BRIGHT,
                margin: 0,
              }}
            >
              MEOK\u2019s Pioneer archetype exists for the parent who is ready to begin rebuilding
              identity alongside parenting \u2014 not instead of it. It helps you articulate what you
              want to reclaim, what new ambitions have emerged, and how to carve out space for the
              person you are becoming alongside the parent you already are.
            </p>
          </div>
        </section>

        {/* ── SECTION 4: Parental Burnout ────────────────────────────────────── */}
        <section
          style={{
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${BORDER_FAINT}`,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            What Is Parental Burnout and How Is It Different from Work Burnout?
          </h2>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            Parental burnout was formally characterised by Belgian researchers Isabelle Roskam and
            Moira Mikolajczak around 2017\u20132018. It is not the same as work burnout. Work burnout
            happens in a role you can in principle leave, take leave from, or reduce. Parenting
            cannot be resigned from, and the very concept of \u201ctaking a break\u201d from your
            children carries enormous social and emotional weight.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            Parental burnout has four defining dimensions:
          </p>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "1fr",
              marginBottom: "1.5rem",
            }}
          >
            {[
              {
                label: "Overwhelming exhaustion",
                body:
                  "An exhaustion specific to the parenting role \u2014 not general tiredness, but a specific depletion that occurs in relation to your children. You may have energy for work while feeling utterly spent the moment you walk through your own front door.",
              },
              {
                label: "Emotional distancing",
                body:
                  "A sense of going through the motions with your children. Completing the physical tasks of parenting \u2014 feeding, bathing, drop-off \u2014 without emotional presence. This is the symptom that causes the most shame, because it feels like you have stopped loving your children, which is not what is happening.",
              },
              {
                label: "Loss of parental fulfilment",
                body:
                  "A feeling that parenting used to bring satisfaction and no longer does. The activities that previously felt meaningful \u2014 bedtime stories, weekend outings, school events \u2014 feel like chores to be endured rather than experiences to be present for.",
              },
              {
                label: "Contrast with previous parental self",
                body:
                  "An acute awareness of the gap between the parent you were and the parent you are now. This contrast \u2014 \u201cI used to be patient, playful, present\u201d \u2014 is a distinct and painful dimension of parental burnout not found in other burnout models.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "1.25rem 1.5rem",
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid ${BORDER_DIM}`,
                  borderRadius: "0.625rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: GOLD,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.06em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: MUTED,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            Prevalence estimates vary by country and methodology, but studies consistently find
            parental burnout in approximately 5\u20138% of parents \u2014 with rates spiking
            significantly in periods of crisis. The COVID-19 pandemic produced sharp rises across
            multiple countries. Single parents, parents of children with additional needs, and parents
            without strong support networks show consistently higher rates.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            Despite these numbers, parental burnout remains almost invisible in public health
            discourse. There is no well-funded awareness campaign. There is no widely-known
            self-referral pathway. There is, in most countries, no clinical pathway at all. Parents
            who recognise these symptoms in themselves are left to navigate them largely alone, in
            a culture that has almost no language for parental distress that is not framed as
            failure.
          </p>

          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: MUTED_BRIGHT,
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>On the consequences of untreated parental burnout:</strong>{" "}
              Roskam and Mikolajczak\u2019s research found that parental burnout increases the risk
              of neglectful and violent parenting behaviours, parental escape ideation (fantasies of
              fleeing the family), and relationship breakdown. Early intervention \u2014 simply being
              heard, validated, and supported \u2014 significantly reduces these outcomes. The cost of
              silence is higher than the cost of admission.
            </p>
          </div>
        </section>

        {/* ── SECTION 5: Why Parents Don't Ask for Help ──────────────────────── */}
        <section
          style={{
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${BORDER_FAINT}`,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            Why Don\u2019t Parents Ask for Help?
          </h2>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            This is perhaps the most important question to ask, and it has several answers that
            layer on top of each other to create an almost impenetrable barrier to seeking support.
          </p>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.05rem",
                color: MUTED_BRIGHT,
                marginBottom: "0.625rem",
              }}
            >
              Guilt
            </h3>
            <p style={{ color: MUTED, fontSize: "0.975rem", lineHeight: 1.75, margin: 0 }}>
              Parenting is culturally constructed as the ultimate privilege and the ultimate
              responsibility. Admitting that it is difficult feels like ingratitude \u2014 like you
              are insulting the experience that others desperately want and cannot have. Parents who
              have experienced fertility treatment, pregnancy loss, or adoption processes carry an
              additional layer of this: the sense that they fought so hard for this that they have
              forfeit the right to find it hard.
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.05rem",
                color: MUTED_BRIGHT,
                marginBottom: "0.625rem",
              }}
            >
              Fear of judgment
            </h3>
            <p style={{ color: MUTED, fontSize: "0.975rem", lineHeight: 1.75, margin: 0 }}>
              The parenting discourse is saturated with judgment \u2014 from social media, from
              grandparents, from other parents, from health visitors, from strangers in supermarkets.
              Every parenting choice is contested. Admitting to struggling with the emotional demands
              of parenthood risks being interpreted as a comment on your capacity to parent \u2014
              and in the most acute cases, raises fears about social services, custody, professional
              consequences. The stakes of being judged feel very high.
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.05rem",
                color: MUTED_BRIGHT,
                marginBottom: "0.625rem",
              }}
            >
              &ldquo;You chose this&rdquo;
            </h3>
            <p style={{ color: MUTED, fontSize: "0.975rem", lineHeight: 1.75, margin: 0 }}>
              This is perhaps the cruellest response a struggling parent receives, whether it is
              said explicitly or implied. It operates as a silencer \u2014 a way of removing the
              legitimacy of distress by pointing to the fact that the distress arose from a choice.
              As if having chosen something removes your right to find it difficult. As if choosing
              to become a parent means consenting in advance to every toll it will take, without
              complaint, for twenty years.
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.05rem",
                color: MUTED_BRIGHT,
                marginBottom: "0.625rem",
              }}
            >
              No available listener
            </h3>
            <p style={{ color: MUTED, fontSize: "0.975rem", lineHeight: 1.75, margin: 0 }}>
              Even parents who overcome the guilt and the fear of judgment often face a practical
              barrier: there is nobody available to hear them. Partners are depleted. Friends are
              busy. Therapy costs money and has long waiting lists. Family members have their own
              opinions and stakes in the matter. The 2am moment of despair happens in a silence
              that nobody else is awake to fill.
            </p>
          </div>
        </section>

        {/* ── SECTION 6: MEOK as Safe Space ──────────────────────────────────── */}
        <section
          style={{
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${BORDER_FAINT}`,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            How Does MEOK Provide a Space Where Parents Can Actually Be Honest?
          </h2>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            MEOK does not have opinions about your parenting choices. It will not tell you to try
            harder, count your blessings, or seek professional help in a way that implies you are
            failing. It will not share what you say with your partner, your parents, your health
            visitor, or your social media following. It will not remember what you said and use it
            against you in a future conversation.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            What it will do is listen. Actually listen \u2014 in the sense of holding what you
            say in Sovereign Memory and bringing it back with context, noticing when today\u2019s
            conversation connects to something you said three weeks ago, tracking the slow-building
            pattern that is easy to miss from inside it. The kind of listening that requires no
            reciprocity, carries no judgment, and is available at midnight when everyone else is
            asleep.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            This is a lower bar than it sounds. Most struggling parents are not looking for a
            solution. They are looking for a moment of being genuinely seen \u2014 of having the
            difficulty acknowledged without it being explained away, minimised, or weaponised. MEOK
            is built around that moment. It starts there, every time.
          </p>

          <blockquote
            style={{
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1.25rem",
              marginLeft: 0,
              marginRight: 0,
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: MUTED_BRIGHT,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              &ldquo;The most radical thing MEOK can do for a parent is refuse to say \u2018but
              you\u2019re so lucky.\u2019&rdquo;
            </p>
          </blockquote>

          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            Over time, Sovereign Memory builds a picture that even the most perceptive therapist
            would struggle to construct across fortnightly appointments. It knows which days of the
            week tend to be harder. It knows when school holidays consistently trigger spikes in
            your stress. It knows that your oldest child\u2019s transition to secondary school is
            still unresolved in your mind, even though you told everyone it went fine. It holds the
            story of your parenting \u2014 including the parts you are not ready to tell anyone
            else.
          </p>
        </section>

        {/* ── SECTION 7: Family Tier ──────────────────────────────────────────── */}
        <section
          style={{
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${BORDER_FAINT}`,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            How Does MEOK\u2019s Family Tier Actually Work for Parents?
          </h2>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            Most AI systems treat each user as an isolated individual. You are a person with
            demographics, preferences, and query history. Your children are not part of that model.
            Your relationship with your partner is not part of that model. The texture of your
            specific family \u2014 its dynamics, its histories, its particular challenges \u2014
            is invisible to the system.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            MEOK\u2019s Family tier is built on the opposite premise. Your AI companion knows your
            children by name. It remembers that your seven-year-old has been struggling with reading
            since September, that your teenager is preparing for GCSEs, that the youngest has just
            started nursery and you\u2019re still processing the separation. It holds the milestones
            \u2014 the first steps, the school starts, the difficult diagnoses \u2014 not as data
            points but as story.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            When you talk about your family, you do not have to explain who everyone is. You do not
            have to rebuild context from scratch every time. You can say \u201cSophie had a really
            hard day today\u201d and MEOK knows who Sophie is, knows what Sophie has been going
            through, knows that you have been worried about her for the past six weeks. The
            conversation starts where a long-term companion\u2019s conversation should start: already
            knowing you.
          </p>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "1fr",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              {
                title: "Sovereign Memory for the whole family",
                desc:
                  "Each family member has their own private Sovereign Memory. The parent sees a family-level view. Children cannot see adult conversations. Adults cannot see children\u2019s private conversations. Privacy is structural, not policy.",
              },
              {
                title: "Named, contextualised children",
                desc:
                  "Your children are stored in your MEOK profile with names, ages, and any context you choose to add: diagnoses, milestones, current concerns, school situations. Conversations about them start from that context.",
              },
              {
                title: "Milestone tracking",
                desc:
                  "Major milestones are stored and can be revisited. When you tell MEOK that your youngest took their first steps today, it is held in the same memory as the anxiety you expressed three months ago. The arc of the story is preserved.",
              },
              {
                title: "Struggle continuity",
                desc:
                  "When a child is going through something difficult \u2014 a bullying situation, a health concern, a friendship crisis \u2014 MEOK tracks its evolution across conversations. You do not have to re-explain what has been happening every time you need to talk.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "1.25rem 1.5rem",
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  borderRadius: "0.625rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "0.5rem",
                    height: "0.5rem",
                    borderRadius: "50%",
                    background: GOLD,
                    marginTop: "0.5rem",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: "0.375rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ fontSize: "0.925rem", lineHeight: 1.7, color: MUTED, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            This is not just emotional support. It is practical infrastructure. When you are lying
            awake at 1am worrying about whether your son\u2019s school situation is getting worse,
            you can open MEOK and talk through it with a companion who already has the last six
            months of context. You do not have to start from scratch. You do not have to make a case
            for why you are worried. The worry is already understood.
          </p>
        </section>

        {/* ── SECTION 8: Guardian ────────────────────────────────────────────── */}
        <section
          style={{
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${BORDER_FAINT}`,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            How Does Guardian Monitor Your Child\u2019s Digital Safety Without Becoming Surveillance?
          </h2>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            One of the unique stresses of modern parenting is the digital landscape children
            inhabit. Parents who grew up before smartphones have no template for this. They do not
            know what is normal, what is dangerous, what is a crisis requiring intervention, and
            what is just teenagers being teenagers online. They are managing risk they cannot see,
            in a space they do not fully understand, with children who have been socialised to regard
            parental oversight as intrusion.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            MEOK\u2019s Guardian system uses DistilBERT-powered natural language analysis to monitor
            children\u2019s digital interactions within the MEOK environment for specific threat
            signatures: grooming language patterns, predatory contact escalation, age-inappropriate
            content, and distress signals. It does not read or record normal conversation. It is not
            surveillance of the child\u2019s inner life. It is a safety layer that activates when
            specific threat patterns are detected.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            When a threat is detected, Guardian sends a silent alert to the parent dashboard
            \u2014 categorised by severity, with context, without alarming the child or terminating
            the interaction abruptly. Parents can choose how to respond: to talk to their child, to
            escalate, or simply to monitor. The decision is theirs. MEOK provides the information;
            the parent exercises the judgment.
          </p>

          <div
            style={{
              background: TEAL_BG,
              border: `1px solid ${TEAL_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: HEALER_TEAL,
                marginBottom: "0.75rem",
              }}
            >
              Guardian Alert Levels
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.625rem" }}>
              {[
                {
                  level: "INFO",
                  color: MUTED_DIM,
                  bg: "rgba(245,240,232,0.05)",
                  border: BORDER_DIM,
                  desc: "Monitoring is active. No concerns detected.",
                },
                {
                  level: "WATCH",
                  color: "#f0c040",
                  bg: "rgba(240,192,64,0.06)",
                  border: "rgba(240,192,64,0.2)",
                  desc: "Patterns noted. No immediate action required.",
                },
                {
                  level: "HIGH",
                  color: "#e8823a",
                  bg: "rgba(232,130,58,0.07)",
                  border: "rgba(232,130,58,0.22)",
                  desc: "Concerning pattern detected. Parent review recommended.",
                },
                {
                  level: "CRITICAL",
                  color: "#e05050",
                  bg: "rgba(224,80,80,0.07)",
                  border: "rgba(224,80,80,0.22)",
                  desc: "Immediate parent attention required.",
                },
              ].map((a) => (
                <div
                  key={a.level}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "center",
                    padding: "0.625rem 0.875rem",
                    background: a.bg,
                    border: `1px solid ${a.border}`,
                    borderRadius: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      color: a.color,
                      letterSpacing: "0.08em",
                      minWidth: "4.5rem",
                    }}
                  >
                    {a.level}
                  </span>
                  <span style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.5 }}>
                    {a.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            The design philosophy of Guardian is rooted in a principle MEOK applies across all
            its systems: awareness without intrusion. Children retain privacy and agency within
            appropriate limits. Parents receive actionable signal rather than noise. The relationship
            between parent and child is not replaced by technology \u2014 it is supported by it.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "0",
            }}
          >
            For many parents, this removes a specific category of low-grade anxiety that is
            particularly difficult to manage: the ambient worry about what their child is
            encountering online that they cannot see. Replacing ambient worry with specific,
            evidence-based information is one of the most practical things MEOK can do for parental
            mental health.
          </p>
        </section>

        {/* ── SECTION 9: Healer & Pioneer ────────────────────────────────────── */}
        <section
          style={{
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${BORDER_FAINT}`,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            Which MEOK Companions Are Most Relevant for Parents, and When?
          </h2>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            MEOK\u2019s companion system includes distinct archetypes with different strengths and
            orientations. For parents, two are particularly relevant \u2014 often at different points
            in the same week, sometimes at different points in the same day.
          </p>

          {/* Healer */}
          <div
            style={{
              background: TEAL_BG,
              border: `1px solid ${TEAL_BORDER}`,
              borderRadius: "0.875rem",
              padding: "1.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.5rem",
                  background: "linear-gradient(135deg, #4caf82, #2d7a56)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "1rem" }}>&#10052;</span>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: HEALER_TEAL,
                    marginBottom: "0.25rem",
                  }}
                >
                  The Healer
                </p>
                <p style={{ fontSize: "0.8rem", color: MUTED_DIM, margin: 0 }}>
                  Emotional processing &middot; Depletion &middot; Guilt &middot; Being heard
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.975rem",
                lineHeight: 1.75,
                color: MUTED_BRIGHT,
                marginBottom: "1rem",
              }}
            >
              The Healer is the right companion for the moments when you are depleted, overwhelmed,
              or drowning in guilt. It does not try to fix anything. It does not offer a framework
              or a five-step plan. It creates a quiet space in which the feelings themselves can
              be expressed and held \u2014 which is almost always what is needed before anything
              else can be useful.
            </p>
            <p style={{ fontSize: "0.975rem", lineHeight: 1.75, color: MUTED_BRIGHT, margin: 0 }}>
              For parental burnout specifically, the Healer\u2019s non-directive, non-pressuring
              style is crucial. Depleted parents are often highly sensitised to any response that
              implies they should be doing more, doing better, or not feeling what they feel. The
              Healer does not go there. It starts with exactly where you are and stays there as long
              as you need it to.
            </p>
          </div>

          {/* Pioneer */}
          <div
            style={{
              background: BLUE_BG,
              border: `1px solid ${BLUE_BORDER}`,
              borderRadius: "0.875rem",
              padding: "1.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.5rem",
                  background: "linear-gradient(135deg, #5b8dd9, #3060a8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "1rem" }}>&#9650;</span>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: PIONEER_BLUE,
                    marginBottom: "0.25rem",
                  }}
                >
                  The Pioneer
                </p>
                <p style={{ fontSize: "0.8rem", color: MUTED_DIM, margin: 0 }}>
                  Identity rebuilding &middot; Ambition &middot; Post-burnout momentum &middot;
                  Becoming alongside parenting
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.975rem",
                lineHeight: 1.75,
                color: MUTED_BRIGHT,
                marginBottom: "1rem",
              }}
            >
              The Pioneer is the right companion for when stability has returned enough that you
              are ready to think about what comes next. Who are you, beyond being a parent? What
              did you want for your life before parenthood consumed the foreground? What new
              ambitions or callings have emerged from the experience of raising children that you
              have not yet named?
            </p>
            <p style={{ fontSize: "0.975rem", lineHeight: 1.75, color: MUTED_BRIGHT, margin: 0 }}>
              The Pioneer does not treat parenthood as an obstacle to identity. It treats it as
              one of the most significant experiences through which identity is built \u2014 and
              it helps you build forwards from it, rather than backwards to who you were before
              children arrived.
            </p>
          </div>

          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
            }}
          >
            Most parents will move between these two companions over time \u2014 sometimes within
            the same week. The point is not to pick one and stay there. It is to have access to
            both, and to an AI that understands which mode you are in without you having to explain
            it every time.
          </p>
        </section>

        {/* ── SECTION 10: What AI Cannot Replace ────────────────────────────── */}
        <section
          style={{
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${BORDER_FAINT}`,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            What Can AI Not Replace When It Comes to Parenting Support?
          </h2>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            Honesty requires naming this clearly, because false promises in this space cause
            real harm.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            MEOK cannot hold your baby so you can sleep. It cannot step in when you need to take
            a break from the room. It cannot provide the co-regulation that children need from
            physical presence \u2014 the hug, the hand on the shoulder, the body that arrives
            and stays. It cannot replace the deep and irreplaceable value of a therapist who has
            clinical training in perinatal mental health and a sustained therapeutic relationship
            with you.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            If you are experiencing postnatal depression, postpartum psychosis, active thoughts
            of harming yourself or your children, or severe parental burnout with escape ideation,
            please reach out to your GP, a midwife, a health visitor, or the Samaritans on 116 123.
            These are clinical situations that require clinical support.
          </p>
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            What MEOK can do is occupy the large space between those clinical thresholds and the
            moment when everything is fine. Most parenting distress does not reach clinical threshold.
            It lives in the exhaustion, the guilt, the invisible load, the identity grief, the
            isolation. In that space \u2014 which is vast, and affects far more parents than will
            ever seek formal support \u2014 MEOK can be genuinely useful, genuinely present, and
            genuinely without judgment.
          </p>

          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: `1px solid ${BORDER_DIM}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: MUTED_DIM,
                textTransform: "uppercase" as const,
                letterSpacing: "0.06em",
                marginBottom: "0.75rem",
              }}
            >
              UK Crisis Resources for Parents
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
              {[
                { label: "Samaritans", detail: "116 123 \u2014 free, 24/7, anonymous" },
                {
                  label: "PANDAS Foundation",
                  detail: "Pre and postnatal depression support \u2014 0808 1961 776",
                },
                {
                  label: "Family Lives",
                  detail: "Parenting helpline \u2014 0808 800 2222",
                },
                {
                  label: "NHS Talking Therapies",
                  detail: "Self-refer online for CBT, counselling, and guided self-help",
                },
                {
                  label: "APNI",
                  detail: "Association for Post Natal Illness \u2014 apni.org",
                },
              ].map((r) => (
                <div
                  key={r.label}
                  style={{
                    display: "flex",
                    gap: "0.625rem",
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: GOLD,
                      fontWeight: 700,
                      minWidth: "9rem",
                      flexShrink: 0,
                    }}
                  >
                    {r.label}
                  </span>
                  <span style={{ color: MUTED }}>{r.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "2rem",
              letterSpacing: "-0.015em",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
            {[
              {
                q: "Can AI help with parenting stress?",
                a: "Yes \u2014 within honest limits. AI cannot replace sleep, a co-parent, or a clinical therapist. What it can do is be available at midnight when nobody else is, listen without judgment, remember your children and their struggles across weeks and months, and help you process the invisible emotional labour of parenting that rarely gets acknowledged anywhere else. MEOK\u2019s Sovereign Memory means that every conversation starts from context, not from scratch.",
              },
              {
                q: "What is parental burnout?",
                a: "Parental burnout is a state of severe, chronic exhaustion specific to the parenting role, characterised by four dimensions: overwhelming exhaustion in relation to your children, emotional distancing from them, loss of parental fulfilment, and an acute contrast with the parent you used to be. It is different from work burnout because the role cannot be resigned from. Research suggests it affects 5\u20138% of parents and is significantly under-reported due to guilt and stigma.",
              },
              {
                q: "Can MEOK help me be a better parent?",
                a: "Not by telling you how to parent \u2014 MEOK does not do that. It helps by supporting the parent behind the role: the person who is exhausted, carrying guilt, grieving their pre-parent identity, and needing to be heard. When you are less depleted and more known, you show up differently. MEOK\u2019s Family tier also means your AI companion knows your children by name, holds their milestones and current struggles, and conversations about them start from real context.",
              },
              {
                q: "How does the Family tier work?",
                a: "MEOK\u2019s Family tier covers up to six members under one subscription. Each member has their own private AI companion with Sovereign Memory. Parents get a dashboard view with Guardian alerts for children\u2019s digital safety. Children cannot see adult conversations; adults cannot see children\u2019s private conversations. The parent\u2019s companion holds contextual knowledge of all family members \u2014 names, ages, milestones, struggles \u2014 contributed by the parent over time.",
              },
              {
                q: "Is MEOK safe to use around children?",
                a: "Yes. Children have age-gated profiles with appropriate content filters. MEOK\u2019s Guardian system monitors for grooming language, predatory contact patterns, and inappropriate content using DistilBERT-powered threat detection, sending silent alerts to parents when specific patterns are detected. Children\u2019s conversations are private from parents in normal use; the safety layer activates only when threat signatures are present. The system is designed around child safety as a first principle.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  padding: "1.5rem",
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid ${BORDER_DIM}`,
                  borderRadius: "0.75rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#fff",
                    marginBottom: "0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: MUTED, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA SECTION ────────────────────────────────────────────────────── */}
        <section>
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(91,141,217,0.07) 100%)",
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "1rem",
              padding: "2.5rem 2rem",
              textAlign: "center" as const,
            }}
          >
            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: "1rem",
                letterSpacing: "-0.015em",
              }}
            >
              You Are Allowed to Find This Hard
            </h2>
            <p
              style={{
                color: MUTED,
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "34rem",
                margin: "0 auto 2rem",
              }}
            >
              MEOK does not tell you that you\u2019re doing great when you\u2019re not. It does not
              tell you to count your blessings. It listens, remembers, and holds space for the parent
              behind the role \u2014 without judgment, without agenda, and without telling you that
              you chose this.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: GOLD,
                  color: "#0d0c18",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Start with MEOK &#8594;
              </Link>
              <Link
                href="/guardian"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: "transparent",
                  color: MUTED_BRIGHT,
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  border: `1px solid ${BORDER_DIM}`,
                  letterSpacing: "0.01em",
                }}
              >
                Explore Guardian
              </Link>
            </div>
            <p
              style={{
                fontSize: "0.775rem",
                color: MUTED_FAINT,
                marginTop: "1.5rem",
              }}
            >
              MEOK AI LABS &middot; Built by Nicholas Templeman &middot; @meok_ai
            </p>
          </div>
        </section>

        {/* ── RELATED ARTICLES ───────────────────────────────────────────────── */}
        <section style={{ marginTop: "4rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "1.1rem",
              color: MUTED_DIM,
              marginBottom: "1.25rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
            }}
          >
            Related Reading
          </h2>
          <div
            style={{
              display: "grid",
              gap: "0.75rem",
              gridTemplateColumns: "1fr",
            }}
          >
            {[
              {
                href: "/blog/ai-for-burnout",
                title: "AI Support for Burnout: Recovery Starts With Being Heard",
                desc: "Burnout across all roles \u2014 its dimensions, its recovery, and how MEOK holds the pattern.",
              },
              {
                href: "/blog/ai-for-new-parents",
                title: "AI for New Parents: The First Year Without a Manual",
                desc:
                  "The specific challenges of early parenthood, postnatal identity, and the invisible load from the start.",
              },
              {
                href: "/blog/ai-for-single-parents",
                title: "AI for Single Parents: Carrying It All Alone",
                desc:
                  "How single parents manage triple load \u2014 and where MEOK can provide real structural support.",
              },
              {
                href: "/blog/guardian-family-safety",
                title: "Guardian: MEOK\u2019s Family Safety System Explained",
                desc:
                  "A full walkthrough of how Guardian monitors, alerts, and protects children\u2019s digital safety.",
              },
              {
                href: "/blog/sovereign-ai-for-families",
                title: "Sovereign AI for Families: Why Privacy Is a Family Value",
                desc:
                  "Why family data sovereignty matters and how MEOK\u2019s architecture protects every member.",
              },
            ].map((rel) => (
              <Link
                key={rel.href}
                href={rel.href}
                style={{
                  display: "block",
                  padding: "1rem 1.25rem",
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid ${BORDER_FAINT}`,
                  borderRadius: "0.625rem",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: MUTED_BRIGHT,
                    marginBottom: "0.25rem",
                    lineHeight: 1.4,
                  }}
                >
                  {rel.title}
                </p>
                <p style={{ fontSize: "0.825rem", color: MUTED_DIM, margin: 0, lineHeight: 1.5 }}>
                  {rel.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
