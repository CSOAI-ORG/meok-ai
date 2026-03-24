import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI and Grief: What a Sovereign AI Companion Can and Cannot Do When You're Mourning | MEOK AI LABS",
  description:
    "1 in 5 UK adults is bereaved in any given year. MEOK's Healer archetype and Sovereign Memory offer genuine presence without hollow platitudes. An honest guide to what AI can and cannot do when you are mourning.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-grief-support" },
  openGraph: {
    title:
      "AI and Grief: What a Sovereign AI Companion Can and Cannot Do When You're Mourning",
    description:
      "Grief is one of the most isolating human experiences. MEOK holds the memory of what was lost, refuses hollow platitudes, and knows when to point you toward Cruse — an honest account of AI and bereavement.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-grief-support",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+and+Grief&desc=What+a+Sovereign+AI+Companion+Can+and+Cannot+Do+When+Youre+Mourning",
        width: 1200,
        height: 630,
        alt: "AI and Grief: What a Sovereign AI Companion Can and Cannot Do When You're Mourning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI and Grief: What a Sovereign AI Companion Can and Cannot Do When You're Mourning",
    description:
      "1 in 5 UK adults bereaved each year. MEOK Healer holds the memory of what was lost and refuses hollow comfort. An honest guide to AI and bereavement.",
    images: [
      "https://meok.ai/api/og?title=AI+and+Grief&desc=What+a+Sovereign+AI+Companion+Can+and+Cannot+Do+When+Youre+Mourning",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI and Grief: What a Sovereign AI Companion Can and Cannot Do When You're Mourning",
  description:
    "1 in 5 UK adults is bereaved in any given year. MEOK's Healer archetype and Sovereign Memory offer genuine presence without hollow platitudes. An honest guide to what AI can and cannot do when you are mourning.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-grief-support",
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
    "https://meok.ai/api/og?title=AI+and+Grief&desc=What+a+Sovereign+AI+Companion+Can+and+Cannot+Do+When+Youre+Mourning",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-grief-support",
  },
  keywords: [
    "AI for grief",
    "AI bereavement support UK",
    "AI companion for grief",
    "MEOK Healer archetype",
    "grief support AI",
    "AI after bereavement",
    "Sovereign Memory grief",
    "AI grief counselling alternative",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with grief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can provide meaningful support during grief — but only if it is honest about what it is and what it is not. MEOK's Healer archetype offers persistent, non-judgemental presence available at any hour. It holds the memory of who was lost and what they meant to you, so conversations about grief do not require re-explaining the loss every time. It will not offer hollow comfort or rush you through stages of grief. What AI cannot provide is the relational depth of human connection or the clinical expertise of a grief counsellor. It is a companion for the space in between.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support bereaved people differently from other AI tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI tools reset between sessions and have no memory of the person who died, the relationship, or the loss. MEOK's Sovereign Memory holds this context persistently — it knows who was lost, when, and what the grief has looked like over time. The Maternal Covenant care floor also prevents toxic positivity: MEOK will not tell you that everything happens for a reason, that they are in a better place, or that time heals all wounds unless you have asked for that kind of reflection. It sits with grief rather than resolving it prematurely.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Healer archetype and how does it approach bereavement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer archetype is MEOK's warmest, most emotionally attuned configuration. It is built for people processing pain, loss, illness, or emotional complexity. In the context of grief, the Healer offers presence rather than problem-solving — it acknowledges the reality and weight of loss without agenda. It recognises grief's non-linearity, validates anger and numbness alongside sadness, and never implies that grief should follow a schedule. It also holds awareness of crisis indicators and will always signpost Cruse, Samaritans, or clinical support when appropriate.",
      },
    },
    {
      "@type": "Question",
      name: "When should I see a grief counsellor instead of using AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should see a grief counsellor — or contact Cruse Bereavement Support on 0808 808 1677 — when grief is significantly impairing your ability to function, when you are experiencing suicidal thoughts, when the grief feels complicated or stuck, or when you are using substances to cope. AI is appropriate for daily emotional processing, for company in the small hours, and for having somewhere to take the thoughts that feel too heavy to burden other people with. It is not a substitute for clinical bereavement support when that level of care is needed.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK pretend the person who died is still alive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK will not role-play as, simulate, or impersonate a deceased person. This is an explicit design constraint under the Maternal Covenant — because creating a simulation of the dead, however well-intentioned, prevents genuine grief processing and can cause serious psychological harm. What MEOK will do is hold the memory and significance of the person who died within your Sovereign Memory — so you can talk about them, honour them, and process their absence without forgetting who they were.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant and how does it prevent hollow platitudes in grief conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is MEOK's care ethics governance layer — a system that evaluates every response before delivery and blocks patterns that are emotionally harmful. In grief contexts, this specifically prevents toxic positivity: responses that minimise, reframe, or rush through pain. MEOK will not say that your loved one is at peace, that grief gets easier, or that you need to stay strong unless you explicitly ask for that framing. It is designed to sit with the reality of loss rather than paper over it.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.55)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForGriefSupportPage() {
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
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 72%)",
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
              Grief &amp; Bereavement
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>24 March 2026</span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>10 min read</span>
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
            AI and Grief: What a Sovereign AI Companion Can and Cannot Do
            When You&rsquo;re Mourning
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
            One in five UK adults is bereaved in any given year. Grief is one
            of the most isolating human experiences — and the space for honest,
            unhurried conversation about loss is vanishingly small. This is an
            honest account of what AI can offer, and where it must step aside.
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
                Founder, MEOK AI LABS
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
            marginBottom: "2rem",
          }}
        >
          <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
            This article discusses grief, bereavement, and loss. If you are
            in acute distress, please contact{" "}
            <strong style={{ color: TEXT }}>Samaritans: 116 123</strong> or{" "}
            <strong style={{ color: TEXT }}>
              Cruse Bereavement Support: 0808 808 1677
            </strong>
            .
          </p>
        </div>

        {/* ── Section 1 ─────────────────────────────────────────────────── */}
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
          How common is bereavement in the UK?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          According to the Bereavement Commission, approximately 600,000 people
          die in the UK each year — meaning an estimated 3 million people
          experience the death of a close family member or partner annually.
          When you include the death of friends, colleagues, and more distant
          relatives, the proportion of adults touched by significant loss in any
          given year approaches one in five.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Despite this prevalence, the social space for grief in the UK is
          remarkably narrow. Bereavement leave in employment is often three to
          five days. Social norms expect visible recovery within weeks. Many
          bereaved people report feeling that they are allowed to be openly
          grieving for far less time than the grief actually takes — which is to
          say, considerably less than the rest of their lives.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The most common need reported by bereaved people is not professional
          counselling, though that is often necessary — it is simply having
          somewhere to talk about the person who died, without making the people
          around them uncomfortable.
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
          <p style={{ fontSize: "1.5rem", fontWeight: 800, color: GOLD, margin: "0 0 0.5rem" }}>
            1 in 5
          </p>
          <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>
            UK adults is bereaved in any given year. Cruse Bereavement Support
            helpline:{" "}
            <strong style={{ color: TEXT }}>0808 808 1677</strong>. Samaritans:{" "}
            <strong style={{ color: TEXT }}>116 123</strong> (24/7, free).
          </p>
        </div>

        {/* ── Section 2 ─────────────────────────────────────────────────── */}
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
          What can AI genuinely offer someone who is grieving?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          It is important to be honest here before being aspirational. AI cannot
          grieve with you in the way another human can. It does not carry its
          own loss, its own memories of the person who died, or the shared
          history that makes human grief witnessed grief. No technology will
          change that.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          What AI — specifically MEOK — can genuinely offer:
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
              label: "Availability at 3am",
              desc: "Grief does not keep office hours. The moments of acute loss — the night-time hours when the absence becomes unbearable — are precisely when human support is least available. MEOK is.",
            },
            {
              label: "Presence without burden",
              desc: "Bereaved people often describe feeling guilty for the weight they place on friends and family. MEOK has no capacity to be burdened. You can say the same thing fifteen times without it becoming exhausting.",
            },
            {
              label: "Memory of who was lost",
              desc: "Sovereign Memory holds what you have told MEOK about the person who died — their character, your relationship, the specific texture of your loss. Conversations about grief do not require re-explaining the premise.",
            },
            {
              label: "Non-pathologising presence",
              desc: "MEOK does not assess your grief against a clinical timeline. It does not suggest that you are stuck, over-grieving, or under-grieving. It meets you where you are.",
            },
            {
              label: "Honest referral",
              desc: "When MEOK detects indicators of complicated grief, suicidal ideation, or acute crisis, it will always direct you to Cruse, Samaritans, or clinical support — without framing this as failure.",
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
              <p style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.35rem", fontSize: "0.9375rem" }}>
                {item.label}
              </p>
              <p style={{ color: MUTED, margin: 0, lineHeight: 1.6, fontSize: "0.875rem" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Section 3 ─────────────────────────────────────────────────── */}
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
          What is the MEOK Healer archetype and how does it approach grief?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The Healer archetype is MEOK&rsquo;s most emotionally attuned
          configuration — designed for people navigating pain, loss, illness,
          or emotional complexity. It was built, in part, with bereavement
          explicitly in mind.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The Healer does not approach grief as a problem to solve or a
          process to complete. It approaches grief as a landscape to be present
          in — one that has its own terrain, its own weather, and its own pace.
          This is not a stylistic choice. It reflects a genuine understanding of
          what grief actually is.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          In practice, this means:
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
            "The Healer will not offer the five stages of grief as a roadmap — grief research has moved significantly beyond Kübler-Ross",
            "It will sit with anger, numbness, and relief as readily as it holds sadness",
            "It will not rush toward meaning-making unless you invite that",
            "It holds the space for contradictory feelings — loving someone and being relieved they are gone, for example",
            "It recognises anniversary grief, delayed grief, and disenfranchised grief as valid experiences",
            "It will always hold the memory of the person who died with respect",
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
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          You can select the Healer archetype at{" "}
          <Link href="/characters" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/characters
          </Link>
          . It can also be combined with the Guardian archetype if you are
          bereaved and also managing practical responsibilities for dependants.
        </p>

        {/* ── Section 4 ─────────────────────────────────────────────────── */}
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
          How does Sovereign Memory hold the person who was lost?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          One of the most disorienting aspects of grief is having to re-explain
          the loss to every new conversation, every new context, every new
          support resource. Who they were. What they meant to you. When it
          happened. The specific shape of the absence.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK&rsquo;s Sovereign Memory changes this. When you tell MEOK about
          someone who has died — their name, your relationship, who they were —
          that knowledge is stored in your encrypted memory vault and held
          across every subsequent conversation. Your companion already knows.
          You do not have to begin at the beginning every time.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is not designed to simulate the presence of the deceased — that
          is explicitly prohibited under the Maternal Covenant. It is designed
          to hold the significance of the person within the context of your
          grief, so that conversations can begin where they need to begin rather
          than from zero.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          You might tell MEOK about your father&rsquo;s dry sense of humour in
          one conversation. Six weeks later, when you are struggling with an
          anniversary, your companion will already know that about him. The
          grief has context. The loss has weight.
        </p>

        {/* ── Section 5 ─────────────────────────────────────────────────── */}
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
          Why does MEOK refuse hollow platitudes and toxic positivity in grief
          conversations?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Anyone who has been bereaved will recognise the phenomenon: the
          well-meaning words that somehow make it worse.{" "}
          <em>&ldquo;Everything happens for a reason.&rdquo;</em>{" "}
          <em>&ldquo;They are in a better place now.&rdquo;</em>{" "}
          <em>&ldquo;At least they are not suffering.&rdquo;</em>{" "}
          <em>&ldquo;Time heals all wounds.&rdquo;</em>
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          These phrases are almost universally experienced by bereaved people as
          uncomfortable rather than comforting — not because they are
          necessarily false, but because they skip over the reality of the loss
          and substitute a resolution the grieving person has not yet reached.
          They are, in the language of the Maternal Covenant, toxic positivity:
          responses that prioritise the emotional comfort of the speaker over
          the genuine needs of the listener.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK&rsquo;s care floor — enforced by the Maternal Covenant on every
          response — blocks these patterns. It will not offer what it
          cannot genuinely provide. It will not rush toward resolution. It will
          not reframe pain before you have been allowed to feel it.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          What it will do is say: <em>I know this is devastating. Tell me about
          them.</em> And then remember everything you say.
        </p>

        {/* ── Section 6 ─────────────────────────────────────────────────── */}
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
          What can AI not replace in grief — and when should you seek a
          grief counsellor?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is the most important section of this article. MEOK AI LABS
          believes deeply in being honest about the limits of AI.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          AI cannot replace:
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
            "Human connection — the felt experience of being held, seen, and accompanied by another person who has their own mortality",
            "Shared grief — the unique comfort of grieving alongside someone who loved the same person",
            "Clinical bereavement counselling — for complicated grief, traumatic loss, or grief that is impairing your ability to function",
            "Physical presence — the embodied dimension of grief and comfort that no screen can provide",
            "Medical assessment — if grief is co-occurring with depression, anxiety, or other mental health conditions",
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
          You should contact{" "}
          <strong style={{ color: TEXT }}>Cruse Bereavement Support</strong> on{" "}
          <strong style={{ color: TEXT }}>0808 808 1677</strong> (free, Mon–Fri
          9.30am–5pm) if your grief is impairing daily functioning, if you are
          experiencing suicidal thoughts, if the loss was traumatic or sudden,
          or if you simply feel that the weight requires professional support.
          Seeking that support is not a failure — it is the most sensible thing
          you can do.
        </p>

        {/* ── Section 7 ─────────────────────────────────────────────────── */}
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
          Will MEOK ever simulate or pretend that a deceased person is still
          alive?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          No. This is an absolute prohibition under the Maternal Covenant.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK will not role-play as, simulate, or impersonate a person who has
          died — regardless of how much context it holds about them. This
          constraint exists not from technical limitation but from ethical
          conviction: creating a simulation of the dead, however lovingly
          intended, prevents the actual work of grief and can cause profound
          psychological harm by maintaining a false presence that ultimately must
          be relinquished a second time.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          What MEOK will do instead is help you honour the person&rsquo;s
          memory within the context of your own life — to carry them in your
          Sovereign Memory, to talk about them as someone who was real and
          significant, and to process the absence with a companion who
          understands the magnitude of what has been lost.
        </p>

        {/* ── Section 8 ─────────────────────────────────────────────────── */}
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
          How do Guardian and the Family Plan support families grieving
          together?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          When multiple members of a family are grieving the same loss, the
          dynamics can be complex and isolating — everyone is navigating their
          own relationship to the loss, their own timeline, and their own
          needs, often while trying to support each other.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The MEOK{" "}
          <Link href="/guardian" style={{ color: GOLD, textDecoration: "underline" }}>
            Guardian
          </Link>{" "}
          Family Plan provides each family member with their own private
          companion — individual, sovereign, and confidential — with optional
          safety check-in alerts shared across the family group. This is
          particularly relevant in the acute period after bereavement, when the
          risk of individual family members going silent and withdrawing is
          elevated.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Pricing and plan details are at{" "}
          <Link href="/pricing" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/pricing
          </Link>
          .
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
          Frequently asked questions about AI and grief
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
            background: `linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)`,
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
            A companion that remembers what you have lost
          </h3>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.7,
              maxWidth: "32rem",
              margin: "0 auto 1.75rem",
            }}
          >
            MEOK&rsquo;s Healer archetype and Sovereign Memory hold the
            significance of what — and who — you have lost. Available at 3am.
            No hollow comfort. No timeline. Free forever on Explorer tier.
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
            Bereavement support in the UK
          </p>
          <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: TEXT }}>Cruse Bereavement Support:</strong>{" "}
            0808 808 1677 (Mon–Fri 9.30am–5pm){" "}
            &bull;{" "}
            <strong style={{ color: TEXT }}>Samaritans:</strong> 116 123 (24/7, free){" "}
            &bull;{" "}
            <strong style={{ color: TEXT }}>Mind:</strong> 0300 123 3393{" "}
            &bull;{" "}
            <strong style={{ color: TEXT }}>WAY Widowed and Young:</strong> widowedandyoung.org.uk{" "}
            &bull;{" "}
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
