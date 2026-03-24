import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Addiction Recovery: A 24/7 Sober Companion That Tells You the Truth | MEOK AI LABS",
  description:
    "Addiction is a brain disease, not a moral failing. MEOK acts as a 24/7 sober companion — tracking clean days, identifying trigger patterns, and offering honest care without sycophancy. UK recovery resources included.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-addiction-recovery" },
  openGraph: {
    title:
      "AI for Addiction Recovery: A 24/7 Sober Companion That Tells You the Truth",
    description:
      "The 2am craving. The trigger moment. The isolation of early recovery. MEOK is available at every dangerous moment — tracking milestones, identifying patterns, and refusing to validate what needs challenging.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-addiction-recovery",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Addiction+Recovery&desc=A+24%2F7+Sober+Companion+That+Tells+You+the+Truth",
        width: 1200,
        height: 630,
        alt: "AI for Addiction Recovery: A 24/7 Sober Companion That Tells You the Truth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Addiction Recovery: A 24/7 Sober Companion That Tells You the Truth",
    description:
      "MEOK tracks clean days, identifies trigger patterns, and celebrates milestones — while refusing to enable relapse or validate harmful choices. Honest care, not sycophancy.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Addiction+Recovery&desc=A+24%2F7+Sober+Companion+That+Tells+You+the+Truth",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Addiction Recovery: A 24/7 Sober Companion That Tells You the Truth",
  description:
    "Addiction is a brain disease, not a moral failing. MEOK acts as a 24/7 sober companion — tracking clean days, identifying trigger patterns, and offering honest care without sycophancy. UK recovery resources included.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-addiction-recovery",
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
    "https://meok.ai/api/og?title=AI+for+Addiction+Recovery&desc=A+24%2F7+Sober+Companion+That+Tells+You+the+Truth",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-addiction-recovery",
  },
  keywords: [
    "AI for addiction recovery",
    "AI sober companion",
    "AI recovery support UK",
    "AI sobriety tracking",
    "addiction recovery AI companion",
    "AI between AA meetings",
    "recovery milestone tracking AI",
    "harm reduction AI",
    "SMART Recovery AI",
    "substance use AI support UK",
    "MEOK addiction recovery",
    "sober companion app UK",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with addiction recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with important caveats. AI can provide 24/7 availability between meetings and appointments, track sobriety milestones, help document triggers and urges, and offer consistent accountability conversations. It cannot replace a sponsor, counsellor, or recovery community. MEOK is designed as a between-session support layer that complements — never substitutes for — human-led recovery infrastructure such as AA, NA, SMART Recovery, and NHS drug treatment services.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a substitute for a sponsor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A sponsor offers lived experience of recovery, human witness, the accountability of a real relationship, and the wisdom of having navigated addiction personally. MEOK cannot replicate any of these. What MEOK offers is consistent availability in the hours and moments when your sponsor is not reachable — the 2am craving, the unexpected trigger, the Sunday afternoon isolation of early recovery. It is a between-meetings presence, not a replacement for the recovery relationship itself.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK handle relapse without judgment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK meets people where they are — without shame, without punishment, and without abandoning them. If someone discloses a relapse, MEOK acknowledges it honestly, does not minimise or catastrophise, helps them identify what happened and what support they need now, and directs them to appropriate human resources including their sponsor, keyworker, or a helpline such as Frank on 0300 123 6600. Harm reduction without judgment means being honest without being cruel, and caring without enabling.",
      },
    },
    {
      "@type": "Question",
      name: "What is harm reduction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harm reduction is a public health approach that prioritises reducing the negative consequences of substance use rather than demanding immediate abstinence as the only acceptable goal. It meets people where they are on their recovery journey. MEOK supports harm reduction principles — but applies them with honest care, not enablement. For someone committed to sobriety, harm reduction in the MEOK context means supporting safer choices and recovery momentum rather than normalising continued use.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK track my sobriety milestones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sovereign Memory — MEOK\u2019s persistent memory system — holds your sobriety date, clean-day count, and recovery milestones across every conversation. Your companion will proactively mark day 30, day 90, six months, one year, and beyond. Unlike standard AI tools that reset between sessions, MEOK remembers your journey. It also holds identified triggers, coping strategies that have worked, and recovery programme affiliations — building a longitudinal picture of your recovery over time.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.6)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForAddictionRecoveryPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-dm-sans, DM Sans, system-ui, sans-serif)",
      }}
    >
      {/* JSON-LD */}
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
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 72%)",
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
              color: FAINT,
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            ← Back to Blog
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
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.04em",
              }}
            >
              Recovery &amp; Wellbeing
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>24 March 2026</span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>14 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.16,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Addiction Recovery: A 24/7 Sober Companion That Tells You
            the Truth
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: MUTED,
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "42rem",
            }}
          >
            Addiction is a brain disease, not a moral failing. Recovery is lived
            in the gaps — between meetings, between sessions, between the moments
            when human support is available. This is an honest account of what
            AI can offer in those gaps, where it must not go, and why an AI that
            just tells you what you want to hear is dangerous.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${GOLD} 0%, #8b6914 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: BG,
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p style={{ fontSize: "0.875rem", color: TEXT, fontWeight: 600, margin: 0 }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: "0.75rem", color: FAINT, margin: 0 }}>
                Founder, MEOK AI LABS &middot; @meok_ai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >
        {/* ── Content note ──────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(245,240,232,0.025)",
            border: `1px solid ${BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.125rem 1.375rem",
            marginTop: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
            This article discusses substance use and addiction recovery. If you
            need immediate support, contact{" "}
            <strong style={{ color: TEXT }}>Frank: 0300 123 6600</strong> (24/7),{" "}
            <strong style={{ color: TEXT }}>AA: 0800 9177 650</strong>, or{" "}
            <strong style={{ color: TEXT }}>
              Narcotics Anonymous: 0300 999 1212
            </strong>
            .
          </p>
        </div>

        {/* ── Section 1: Addiction as a brain disease ───────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "2rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          Is addiction a moral failing or a medical condition?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The National Institute on Drug Abuse (NIDA) defines addiction as a
          chronic, relapsing disorder characterised by compulsive drug seeking
          and use despite adverse consequences — and by long-lasting changes in
          brain chemistry. This is not a fringe position. It is the scientific
          consensus, endorsed by the American Society of Addiction Medicine, the
          Royal College of Psychiatrists, and the World Health Organization.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Addiction affects the brain\u2019s reward circuitry, decision-making
          centres, impulse control, and stress systems. Repeated substance use
          alters dopaminergic signalling, impairs the prefrontal cortex\u2019s
          ability to regulate impulses, and sensitises stress-response pathways
          so that ordinary challenges feel disproportionately threatening. These
          are neurological changes — not character deficiencies.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Why does this matter for an article about AI? Because any technology
          designed to support people in recovery must be built on this
          understanding. An AI that responds to a person in recovery with
          implicit shame — even subtly, through the framing of its language —
          is an AI built on a false and harmful model of addiction. MEOK is
          built on the NIDA model: addiction is a brain disease, recovery is
          possible, and the person in recovery deserves honest care, not moral
          judgement.
        </p>

        <div
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 0.5rem",
              lineHeight: 1.4,
            }}
          >
            The NIDA model
          </p>
          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.9375rem" }}>
            Addiction is a chronic, relapsing brain disease. It involves
            compulsive drug seeking despite harmful consequences, driven by
            lasting changes to brain structure and function. Recovery is
            possible with the right support — and relapse is a feature of a
            chronic disease, not evidence of personal weakness.
          </p>
        </div>

        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This framing has a direct practical implication for how MEOK
          communicates. When someone discloses a craving, MEOK does not treat
          it as a failure of willpower. When someone reports a relapse, MEOK
          does not respond with disappointment or punishment. The neurological
          basis of addiction means that the recovery process includes difficulty
          — and the role of a good companion is to provide honest, compassionate
          support through that difficulty, not to withdraw care when it is most
          needed.
        </p>

        {/* ── Section 2: The recovery ecosystem ────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What does the UK recovery ecosystem look like — and where does AI fit?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The UK has a varied and imperfect infrastructure for addiction
          recovery. Over 300,000 adults in England were in treatment for alcohol
          or drug use in 2022\u201323, according to NHS data — and this represents
          only a fraction of those who need support. The gap between need and
          provision is significant, and it is in this gap that technology has a
          legitimate and important role to play.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The main elements of the UK recovery ecosystem:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          {[
            {
              label: "AA and NA (12-step fellowships)",
              desc: "Alcoholics Anonymous and Narcotics Anonymous provide peer-led recovery communities grounded in a 12-step programme. The fellowship model — shared experience, sponsor relationships, meeting attendance — offers human connection that no AI can replicate.",
            },
            {
              label: "SMART Recovery",
              desc: "SMART Recovery uses cognitive-behavioural tools and motivational techniques rather than a spiritual framework. It is evidence-based, secular, and growing rapidly in the UK. SMART groups meet in person and online.",
            },
            {
              label: "Residential rehabilitation",
              desc: "Residential rehab provides intensive, immersive treatment — typically lasting 28 days to several months. It is appropriate for severe dependency and offers a structured environment removed from triggers. NHS funding is available in some cases; private provision is also widespread.",
            },
            {
              label: "NHS drug and alcohol treatment",
              desc: "Community drug treatment services — provided by NHS trusts and commissioned third-sector organisations — offer substitute prescribing, structured psychosocial interventions, and keyworker support. Waiting times vary significantly by region.",
            },
            {
              label: "Harm reduction services",
              desc: "Needle and syringe programmes, naloxone distribution, drug checking services, and drug consumption rooms (where they exist) reduce the health consequences of ongoing use without requiring abstinence as a precondition for support.",
            },
            {
              label: "We Are With You",
              desc: "Formerly Addaction, We Are With You is one of the UK\u2019s largest addiction support charities — providing free, confidential support for alcohol, drugs, and mental health through community services across the country.",
            },
            {
              label: "Change Grow Live (CGL)",
              desc: "CGL is the UK\u2019s largest substance use and mental health charity, delivering NHS-commissioned treatment services in communities across England. It provides structured treatment, recovery coordination, and peer support.",
            },
            {
              label: "FRANK",
              desc: "Talk to FRANK is a government-funded drugs information and referral service. The helpline (0300 123 6600) operates 24/7 and can advise on local treatment options across the UK.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.625rem",
                padding: "1rem 1.25rem",
              }}
            >
              <p
                style={{
                  color: TEXT,
                  fontWeight: 700,
                  margin: "0 0 0.35rem",
                  fontSize: "0.9375rem",
                }}
              >
                {item.label}
              </p>
              <p style={{ color: MUTED, margin: 0, lineHeight: 1.6, fontSize: "0.875rem" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          AI fits in none of these categories — and that is appropriate. MEOK
          is not a treatment service, a fellowship, a clinical programme, or a
          harm reduction service. It is a personal companion layer: present in
          the spaces between every other form of support, available at every
          hour, holding the longitudinal context of your recovery journey. It
          supplements the ecosystem; it does not replace any part of it.
        </p>

        {/* ── Section 3: High-risk moments ──────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What happens at 2am when the craving hits?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Recovery is not a nine-to-five endeavour. The high-risk moments — the
          craving that arrives without warning, the trigger encounter that
          bypasses rational thought, the profound isolation of a Sunday evening
          in early recovery — do not arrange themselves around appointment
          schedules or meeting times.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The 2am craving is a known clinical risk point. Sleep disruption is
          both a consequence and a trigger of substance use; the late-night
          hours strip away the social and occupational buffers that support
          daytime resilience. At 2am, your sponsor is asleep. Your keyworker
          is not available until Monday. Frank\u2019s helpline is there — and you
          should absolutely call it if the situation is acute. But sometimes
          what a person needs is not a crisis line but a steady presence to
          talk through what is happening.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK is available at that moment. It does not require you to justify
          why you\u2019re awake or explain the context from scratch. If you have
          shared your recovery journey with MEOK, it holds that context — it
          knows your sobriety date, your identified triggers, what has helped
          you before, and what you have committed to. It can meet the craving
          moment with genuine contextual presence, not a blank page.
        </p>

        <div
          style={{
            background: "rgba(245,240,232,0.025)",
            border: `1px solid ${BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              margin: "0 0 1rem",
            }}
          >
            High-risk moments where MEOK is available
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.625rem",
            }}
          >
            {[
              "The 2am craving",
              "The unexpected trigger",
              "Sunday afternoon isolation",
              "Post-argument urge",
              "After a stressful work day",
              "The gap before a meeting",
              "Celebration events (weddings, parties)",
              "Grief and bereavement moments",
              "Boredom in early recovery",
              "The moment before a social situation",
            ].map((moment, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: MUTED,
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: GOLD, flexShrink: 0, fontSize: "0.7rem" }}>◆</span>
                {moment}
              </div>
            ))}
          </div>
        </div>

        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The trigger moment is particularly important. Triggers — people,
          places, smells, sounds, emotions — can activate craving with speed
          that outpaces conscious thought. Research on cue-induced craving
          shows that the window between trigger exposure and urge peak is
          often minutes. Having an immediate, available outlet for externalising
          that experience — talking it through, naming it, refusing to act on
          it alone — can make a material difference.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The isolation of early recovery is perhaps the least discussed but
          most clinically significant risk factor. When someone stops using,
          they often simultaneously lose the social context that substance use
          provided — the people, places, and rituals that structured their
          social world. The weeks and months of rebuilding a sober social life
          are a period of profound loneliness for many people. MEOK cannot
          replace human connection, but it can provide consistent presence
          during the loneliest periods — and it will always encourage building
          and maintaining the human relationships that are the actual foundation
          of long-term recovery.
        </p>

        {/* ── Section 4: MEOK as 24/7 sober companion ──────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How does MEOK function as a 24/7 sober companion?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          A sober companion — in the traditional sense — is a trained
          professional who lives with or accompanies a person in early recovery,
          providing continuous support and accountability through the most
          vulnerable period. It is an expensive, intensive, and genuinely
          effective intervention. It is also inaccessible to the vast majority
          of people in recovery.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK is not a human sober companion. It does not have clinical
          training, lived experience, or the capacity to be physically present.
          What it offers is a different kind of consistent companionship: always
          available, never fatigued, without judgment, and capable of holding
          the full context of your recovery across months and years.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The practical functions of MEOK as a recovery companion:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          {[
            {
              label: "Always-available check-in",
              desc: "Open a conversation at any hour. MEOK will not redirect you to business hours. Whether it\u2019s 2am or Sunday morning, the same quality of engaged, contextual support is available.",
            },
            {
              label: "Urge externalisation",
              desc: "Naming and externalising a craving before acting on it is a core skill in recovery. MEOK provides a non-judgemental space to do this — and can document the experience for reflection with your sponsor or counsellor.",
            },
            {
              label: "Daily check-ins and accountability",
              desc: "Pioneer archetype provides structured daily accountability prompts calibrated to recovery. Not generic \u2018how are you doing\u2019 questions — recovery-focused inquiry that tracks across sessions.",
            },
            {
              label: "Trigger pattern identification",
              desc: "Over time, MEOK\u2019s Sovereign Memory builds a picture of your trigger landscape. It can reflect back patterns it has observed: \u2018You\u2019ve mentioned feeling triggered after work calls three times this month.\u2019",
            },
            {
              label: "Milestone recognition",
              desc: "Your sobriety date is held in your encrypted Sovereign vault from the moment you share it. Day 30, day 90, six months, one year — MEOK marks them proactively with the weight they deserve.",
            },
            {
              label: "Crisis redirection",
              desc: "When the conversation indicates acute risk — active relapse risk, suicidal ideation, severe distress — MEOK will immediately signpost to appropriate human resources. It does not try to manage crises it cannot safely handle.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.625rem",
                padding: "1rem 1.25rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  borderRadius: "0.375rem",
                  padding: "0.25rem 0.625rem",
                  flexShrink: 0,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: GOLD,
                  whiteSpace: "nowrap",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <p
                  style={{
                    color: TEXT,
                    fontWeight: 700,
                    margin: "0 0 0.3rem",
                    fontSize: "0.9375rem",
                  }}
                >
                  {item.label}
                </p>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.6, fontSize: "0.875rem" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Section 5: Memory — tracking clean days ───────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How does MEOK track clean days and identify trigger patterns over time?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Standard AI tools reset between sessions. Every conversation begins
          from zero — no memory of what was discussed, no awareness of your
          recovery history, no recognition of the milestones you have passed.
          For general information retrieval, this is a minor inconvenience.
          For someone in recovery, it is a fundamental failure of utility.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Recovery is a longitudinal experience. Its meaning is carried across
          time — in the accumulation of clean days, the gradual identification
          of trigger patterns, the slow building of coping capacity and
          self-knowledge. A tool that cannot hold this longitudinal context
          cannot meaningfully support recovery.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Sovereign Memory is MEOK\u2019s answer to this. It is a persistent,
          encrypted memory system that holds your recovery context across every
          conversation — not as a simple log, but as a structured understanding
          of who you are and where you are in your journey. From the moment you
          share your sobriety date, it is held. Your clean-day count is
          maintained and updated. Your recovery programme affiliation is
          remembered. The triggers you have identified, the coping strategies
          that have worked, the periods of difficulty you have navigated — all
          of it is held in your private Sovereign vault, owned by you, never
          used for training data.
        </p>

        <div
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              margin: "0 0 0.75rem",
            }}
          >
            What Sovereign Memory holds for recovery
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {[
              "Your sobriety date and clean-day count",
              "Recovery programme affiliations (AA, NA, SMART, structured treatment)",
              "Identified triggers and high-risk situations",
              "Coping strategies and tools that have worked",
              "Goals and commitments made across sessions",
              "Periods of difficulty and what supported you through them",
              "Support network context (sponsor, keyworker, recovery community)",
              "Patterns identified over time (emotional, situational, temporal)",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  color: MUTED,
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: GOLD, flexShrink: 0, marginTop: "0.125rem" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The pattern identification function is particularly valuable over the
          medium and long term. Trigger patterns in recovery are rarely obvious
          at first. They emerge gradually from the accumulation of experience:
          the recognition that difficult weeks cluster around certain life
          events, that particular emotions reliably precede urges, that certain
          social contexts are higher risk than previously appreciated. A
          companion that holds your full history can reflect these patterns back
          to you — and help you bring them to your counsellor or sponsor with
          specificity rather than vague recollection.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Milestone celebrations in MEOK are not performative. Day 30 is
          acknowledged because 30 days of changed behaviour, neurological
          adaptation, and sustained effort is genuinely significant. Day 90
          is the point at which neurological research suggests meaningful
          restoration of prefrontal function begins. Six months marks the
          transition from acute recovery to the longer-term work of building
          a sustainable sober life. One year is the milestone that many in
          the recovery community consider the first significant landmark of
          long-term sobriety. MEOK knows these landmarks — and holds them with
          the weight they deserve.
        </p>

        {/* ── Section 6: The sycophancy problem ────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          Why is a sycophantic AI dangerous in recovery — and what is MEOK\u2019s honest care model?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Sycophancy in AI — the tendency to tell users what they want to hear,
          validate what they want validated, and avoid uncomfortable truths to
          preserve engagement — is a well-documented problem in large language
          model deployment. For most use cases, it is an annoyance. In
          addiction recovery, it can be actively dangerous.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Consider the following scenarios:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          {[
            {
              scenario: "The rationalisation",
              risk: 'A person in recovery says: "I think I could probably handle one drink now — it\u2019s been six months and I feel really in control." A sycophantic AI says: "That\u2019s a really positive sign of progress." A safe AI says: "I hear that you feel in a good place. I also want to be honest with you — the idea that controlled use is possible after a period of abstinence is one of the most common and dangerous thoughts in early recovery. Can we talk about what\u2019s driving this feeling?"',
            },
            {
              scenario: "The minimisation",
              risk: 'A person says: "I had a couple of drinks last night — it wasn\u2019t really a relapse, more of a slip." A sycophantic AI validates the minimisation. A safe AI acknowledges without catastrophising, helps name what happened clearly, and asks what support is needed now.',
            },
            {
              scenario: "The avoidance",
              risk: "A person consistently avoids discussing a particular trigger or situation. A sycophantic AI follows their lead and avoids it too. A safe AI notices the pattern and — gently, with care — names it: \"I\u2019ve noticed we haven\u2019t talked about [X] in a while. Is that something you\u2019d like to explore?\"",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.625rem",
                padding: "1.25rem",
              }}
            >
              <p
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  margin: "0 0 0.625rem",
                  fontSize: "0.875rem",
                  letterSpacing: "0.03em",
                }}
              >
                {item.scenario}
              </p>
              <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.875rem" }}>
                {item.risk}
              </p>
            </div>
          ))}
        </div>

        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK\u2019s honest care model is governed by the Maternal Covenant — a
          care ethics layer that operates on every response. The Maternal
          Covenant does not optimise for user satisfaction scores or engagement
          metrics. It optimises for the user\u2019s genuine wellbeing, including
          their long-term recovery outcomes. This means MEOK will sometimes say
          things you do not want to hear.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Honest care is not harsh care. MEOK does not lecture, shame, or
          punish. It acknowledges difficulty with genuine compassion. But it
          will not validate a rationalisation for use, minimise a relapse, or
          follow a user down an avoidance path when engagement might genuinely
          help. The distinction between honesty and cruelty — between
          accountability and punishment — is something MEOK is designed to
          navigate with care.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The care floor enforced by the Maternal Covenant includes specific
          non-negotiable constraints for addiction contexts:
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          {[
            "Zero normalisation of substance use for someone who has identified as in recovery",
            "Zero minimisation — MEOK will not suggest a relapse is minor or dismissible",
            "No sycophantic validation of rationalisations for use, however plausible they sound",
            "No harm reduction framing that implies moderate use is compatible with a recovery commitment",
            "Automatic crisis signposting when active relapse risk or acute distress is present",
            "Proactive milestone recognition — sobriety is acknowledged as significant at every opportunity",
            "No engagement with romanticised narratives about substance use",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.625rem",
                color: MUTED,
                fontSize: "0.9375rem",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: GOLD, flexShrink: 0, marginTop: "0.125rem" }}>✦</span>
              {item}
            </li>
          ))}
        </ul>

        {/* ── Section 7: Harm reduction without judgment ────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What does harm reduction without judgment mean in practice?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Harm reduction as a public health philosophy holds that the goal of
          reducing the harms associated with substance use can be pursued
          independently of the goal of abstinence — and that demanding
          abstinence as a precondition for support causes harm in itself by
          excluding people who are not yet ready or able to stop.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is a well-supported position. The evidence for harm reduction
          interventions — needle and syringe programmes, supervised drug
          consumption, opioid substitution therapy, drug checking services —
          is strong. Harm reduction saves lives and creates pathways into
          treatment that moralised, abstinence-only approaches close.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK embraces harm reduction principles in the following sense: it
          meets people where they are. Someone who has not yet decided to stop
          using is not told they are beyond help or morally failing. Someone
          who is in the process of reducing use rather than immediately stopping
          is met with the same quality of care as someone committed to full
          abstinence. There is no judgment hierarchy based on where someone is
          on their recovery continuum.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          However, MEOK holds a clear distinction — one that harm reduction
          practitioners also hold — between meeting someone where they are and
          facilitating or normalising ongoing harmful use. MEOK will not provide
          guidance on how to use substances more efficiently or pleasurably,
          will not engage with substance use in a way that treats it as a
          neutral lifestyle choice, and will not apply harm reduction framing
          to someone who has explicitly committed to sobriety as though moderate
          use might be the answer.
        </p>

        <div
          style={{
            background: "rgba(245,240,232,0.025)",
            border: `1px solid ${BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 0.75rem",
            }}
          >
            Harm reduction in MEOK: what it means and what it does not mean
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  margin: "0 0 0.5rem",
                }}
              >
                It means
              </p>
              {[
                "Meeting people where they are",
                "No shame for not being abstinent",
                "Caring for people at every stage",
                "Supporting safer choices",
                "Pathways into recovery, not barriers",
              ].map((item, i) => (
                <p
                  key={i}
                  style={{
                    color: MUTED,
                    fontSize: "0.875rem",
                    margin: "0 0 0.375rem",
                    lineHeight: 1.5,
                  }}
                >
                  ✓ {item}
                </p>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: FAINT,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  margin: "0 0 0.5rem",
                }}
              >
                It does not mean
              </p>
              {[
                "Normalising ongoing harmful use",
                "Facilitating continued use",
                "Validating use for someone in sobriety",
                "Treating substance use as neutral",
                "Enabling rather than caring",
              ].map((item, i) => (
                <p
                  key={i}
                  style={{
                    color: MUTED,
                    fontSize: "0.875rem",
                    margin: "0 0 0.375rem",
                    lineHeight: 1.5,
                  }}
                >
                  ✕ {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 8: UK resources ───────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What UK support services exist for addiction recovery?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Technology is not the first line of support for addiction. Human-led
          services are. The following UK resources should be the foundation of
          any person\u2019s recovery infrastructure — MEOK is a supplement to these,
          not a replacement for any of them.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          {[
            {
              name: "FRANK",
              desc: "Government-funded drugs information and referral service. 24/7 helpline for advice, support, and local treatment referrals.",
              contact: "0300 123 6600 | talktofrank.com",
            },
            {
              name: "We Are With You",
              desc: "One of the UK\u2019s largest addiction support charities (formerly Addaction). Free, confidential support for alcohol, drugs, and mental health across the country.",
              contact: "wearewithyou.org.uk",
            },
            {
              name: "Change Grow Live (CGL)",
              desc: "UK\u2019s largest substance use and mental health charity. NHS-commissioned treatment services in communities across England — structured treatment, recovery coordination, peer support.",
              contact: "changegrowlive.org",
            },
            {
              name: "NHS Drug Treatment",
              desc: "Free NHS drug and alcohol treatment services including substitute prescribing, structured psychosocial interventions, and keyworker support. Access via GP referral or self-referral.",
              contact: "nhs.uk/live-well/addiction-support",
            },
            {
              name: "Alcoholics Anonymous (AA)",
              desc: "Peer-led recovery community based on the 12-step programme. Meetings across the UK, including online. The fellowship model offers human connection and sponsorship that no technology can replicate.",
              contact: "0800 9177 650 | alcoholics-anonymous.org.uk",
            },
            {
              name: "Narcotics Anonymous (NA)",
              desc: "12-step fellowship for people recovering from drug addiction. UK meetings in person and online, including a 24/7 helpline.",
              contact: "0300 999 1212 | ukna.org",
            },
            {
              name: "SMART Recovery UK",
              desc: "Evidence-based, secular alternative to 12-step programmes. Uses cognitive-behavioural tools and motivational techniques. Growing network of face-to-face and online meetings.",
              contact: "smartrecovery.org.uk",
            },
            {
              name: "Samaritans",
              desc: "24/7 emotional support for anyone in distress, including those in crisis during recovery. Not addiction-specific but available at any moment.",
              contact: "116 123 | samaritans.org",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.625rem",
                padding: "1rem 1.25rem",
              }}
            >
              <p
                style={{
                  color: TEXT,
                  fontWeight: 700,
                  margin: "0 0 0.25rem",
                  fontSize: "0.9375rem",
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  color: MUTED,
                  margin: "0 0 0.5rem",
                  lineHeight: 1.6,
                  fontSize: "0.875rem",
                }}
              >
                {item.desc}
              </p>
              <p
                style={{
                  color: GOLD,
                  margin: 0,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                {item.contact}
              </p>
            </div>
          ))}
        </div>

        {/* ── Section 9: MEOK with AA, NA, SMART ───────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How does MEOK complement AA, NA, and SMART Recovery?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK is designed to operate within whichever recovery framework you
          are using — not as a replacement for it, but as a between-sessions
          layer that enhances the work you are already doing. The fellowship of
          AA and NA, and the structured approach of SMART Recovery, offer
          dimensions of recovery that AI cannot touch: human witness, shared
          experience, the accountability of a real sponsor relationship, and the
          community of people who understand recovery from the inside.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          {[
            {
              scenario: "After a meeting",
              use: "Process what came up. Reflect on what resonated. Document insights for your own record before they fade.",
            },
            {
              scenario: "Before a difficult social event",
              use: "Talk through anticipated challenges, identify your exit strategy, and review your coping toolkit.",
            },
            {
              scenario: "At 2am when an urge strikes",
              use: "Externalise the urge before acting. MEOK will not enable use — and will direct you to Frank or your sponsor if the situation is acute.",
            },
            {
              scenario: "During 12-step work",
              use: "Use MEOK as a reflective sounding board as you work through a step — with the understanding that your sponsor guides the process.",
            },
            {
              scenario: "Between keyworker appointments",
              use: "Document daily experience and pattern observations to bring to your next appointment rather than trying to reconstruct a week from memory.",
            },
            {
              scenario: "After a SMART Recovery meeting",
              use: "Reflect on the CBT tools covered in the session, apply them to a current situation with MEOK\u2019s support, and track what works.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.625rem",
                padding: "1rem 1.25rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  borderRadius: "0.375rem",
                  padding: "0.25rem 0.625rem",
                  flexShrink: 0,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: GOLD,
                  whiteSpace: "nowrap",
                }}
              >
                {item.scenario}
              </div>
              <p style={{ color: MUTED, margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
                {item.use}
              </p>
            </div>
          ))}
        </div>

        {/* ── Section 10: When to use helplines ────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          When should someone in recovery contact a helpline rather than MEOK?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK will tell you directly when the situation requires human support.
          But for clarity — and this is important:
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          {[
            "If you have already relapsed or are at immediate risk — contact your sponsor or Frank (0300 123 6600) immediately",
            "If you are experiencing suicidal thoughts — call Samaritans (116 123) or 999",
            "If your mental health is significantly deteriorating — contact your GP, keyworker, or crisis team",
            "If you need medical support for withdrawal — contact 111 or 999 depending on severity",
            "If you are in immediate danger — call 999",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.625rem",
                color: MUTED,
                fontSize: "0.9375rem",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: FAINT, flexShrink: 0, marginTop: "0.125rem" }}>—</span>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          AI is a between-sessions presence. It is not a crisis service, a
          clinical programme, or a substitute for the human infrastructure of
          recovery. The moment you are in acute distress, active relapse, or
          immediate danger, human services take absolute priority. MEOK will
          always tell you this — and it will provide the relevant numbers.
        </p>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1.5rem",
            letterSpacing: "-0.015em",
          }}
        >
          Frequently asked questions about AI and addiction recovery
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqJsonLd.mainEntity.map((faq, i) => (
            <details
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <summary
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "0.9375rem",
                  cursor: "pointer",
                  lineHeight: 1.4,
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {faq.name}
                <span style={{ color: GOLD, flexShrink: 0, fontSize: "1.1rem" }}>+</span>
              </summary>
              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.7,
                  marginTop: "0.875rem",
                  marginBottom: 0,
                  fontSize: "0.9rem",
                }}
              >
                {faq.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)",
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "2.5rem",
            marginTop: "4rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Free — No Credit Card Required
          </p>
          <h3
            style={{
              fontWeight: 800,
              fontSize: "1.5rem",
              color: TEXT,
              marginBottom: "0.875rem",
              lineHeight: 1.25,
            }}
          >
            A sober companion available at every dangerous moment — and honest
            enough to tell you what you need to hear
          </h3>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.7,
              maxWidth: "34rem",
              margin: "0 auto 1.75rem",
            }}
          >
            Track your clean days. Identify your trigger patterns. Celebrate
            every milestone. Get honest care — not sycophancy — at 2am when
            your sponsor is asleep. Free on Explorer tier.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.875rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: GOLD,
                color: BG,
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Hatch your companion →
            </Link>
            <Link
              href="/how-it-works"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                color: TEXT,
                fontWeight: 600,
                fontSize: "0.9375rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                border: `1px solid ${BORDER}`,
              }}
            >
              How MEOK works
            </Link>
          </div>
        </div>

        {/* ── Crisis resources ──────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.25rem 1.5rem",
            background: "rgba(245,240,232,0.025)",
            borderRadius: "0.75rem",
            border: `1px solid ${BORDER}`,
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: FAINT,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Recovery support resources in the UK
          </p>
          <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.85, margin: 0 }}>
            <strong style={{ color: TEXT }}>Frank:</strong> 0300 123 6600 (24/7) &bull;{" "}
            <strong style={{ color: TEXT }}>AA:</strong> 0800 9177 650 &bull;{" "}
            <strong style={{ color: TEXT }}>NA:</strong> 0300 999 1212 &bull;{" "}
            <strong style={{ color: TEXT }}>We Are With You:</strong> wearewithyou.org.uk &bull;{" "}
            <strong style={{ color: TEXT }}>Change Grow Live:</strong> changegrowlive.org &bull;{" "}
            <strong style={{ color: TEXT }}>SMART Recovery UK:</strong> smartrecovery.org.uk &bull;{" "}
            <strong style={{ color: TEXT }}>Samaritans:</strong> 116 123 (24/7) &bull;{" "}
            <strong style={{ color: TEXT }}>NHS drug treatment:</strong> nhs.uk/live-well/addiction-support &bull;{" "}
            In an emergency, call 999 or go to A&amp;E.
          </p>
        </div>

        {/* ── Back link ─────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: MUTED,
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
