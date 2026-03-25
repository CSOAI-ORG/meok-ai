import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support After an Autism Diagnosis: Processing, Planning, and Not Doing It Alone | MEOK AI LABS",
  description:
    "An autism diagnosis — at 7 or 47 — rewrites your understanding of your entire life. MEOK offers a non-judgmental space where you don't have to mask, can ask anything literally, and can process the wave of emotions at your own pace.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-autism-diagnosis",
  },
  openGraph: {
    title:
      "AI Support After an Autism Diagnosis: Processing, Planning, and Not Doing It Alone",
    description:
      "Whether you were diagnosed at seven or forty-seven, autism diagnosis changes everything. MEOK is the AI companion where you never have to mask — direct language, no subtext, no social performance required.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-autism-diagnosis",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+After+an+Autism+Diagnosis&desc=Processing%2C+planning%2C+and+not+doing+it+alone.",
        width: 1200,
        height: 630,
        alt: "AI Support After an Autism Diagnosis: Processing, Planning, and Not Doing It Alone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Support After an Autism Diagnosis: Processing, Planning, and Not Doing It Alone",
    description:
      "Whether you were diagnosed at seven or forty-seven, MEOK is the space where you never have to mask — direct language, no subtext, no social performance.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+After+an+Autism+Diagnosis&desc=Processing%2C+planning%2C+and+not+doing+it+alone.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support After an Autism Diagnosis: Processing, Planning, and Not Doing It Alone",
  description:
    "An autism diagnosis changes how a person understands their entire life. This article covers the emotional wave of diagnosis, the growing trend of late diagnosis in adults, how AI companions can help with non-judgmental support and direct communication, MEOK's approach to neurodivergent users, masking exhaustion, practical help for rights and services, and how the Healer and Scholar companions support emotional processing and research.",
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
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-autism-diagnosis",
  keywords: [
    "AI for autism diagnosis",
    "autism diagnosis support",
    "late autism diagnosis adults",
    "autism diagnosis emotions",
    "autism masking exhaustion",
    "EHCP rights autism",
    "DSA autism UK",
    "AI companion for autistic people",
    "autism identity reframing",
    "neurodivergent AI",
    "autism support after diagnosis",
    "AI for neurodivergent adults",
    "autistic adult late diagnosis",
    "autism parents newly diagnosed child",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can AI help after an autism diagnosis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After an autism diagnosis, many people need a space to process emotions, ask questions without judgment, and research what the diagnosis means practically. AI can provide that space without the social overhead that many autistic people find exhausting. MEOK specifically uses direct, literal language, applies no subtext or implied social expectations, and is available asynchronously — so you can engage on your own terms, at your own pace, without any pressure to perform or respond in a socially expected way.",
      },
    },
    {
      "@type": "Question",
      name: "What is late autism diagnosis and why is it becoming more common?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Late autism diagnosis refers to people who receive an autism diagnosis in adulthood — often in their 30s, 40s, or 50s. It is becoming more common for several reasons: historical diagnostic criteria were skewed towards male presentation and childhood symptoms, many autistic women and girls were missed entirely, masking (camouflaging autistic traits to appear neurotypical) delayed recognition, and awareness has increased dramatically since the early 2000s. Many late-diagnosed adults describe a life-rewriting experience as they reinterpret decades of social difficulties, burnout, and misdiagnoses through the new lens of autism.",
      },
    },
    {
      "@type": "Question",
      name: "What is masking in autism and why is it exhausting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Masking, also called camouflaging, is the conscious or unconscious effort autistic people make to appear neurotypical in social situations. It involves suppressing natural stimming behaviours, forcing eye contact, copying social scripts, performing expected emotional responses, and constantly monitoring and adjusting behaviour to meet neurotypical expectations. Research consistently shows that chronic masking leads to profound mental fatigue, burnout, anxiety, and a fragmented sense of self. Many autistic people — particularly those diagnosed late — have been masking their entire lives without realising it. MEOK is a space where masking is completely unnecessary.",
      },
    },
    {
      "@type": "Question",
      name: "What are EHCP and DSA rights for autistic people in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Education, Health and Care Plan (EHCP) is a legally binding document for children and young people up to age 25 in England with special educational needs, including autism. It sets out the educational support a child is legally entitled to receive. The Disabled Students' Allowance (DSA) is funding available to eligible students in UK higher education to cover the extra costs of studying with a disability or neurodevelopmental condition, including autism. Both are rights, not favours — and both require navigating complex bureaucratic processes. MEOK's Scholar companion can help users research eligibility criteria, understand the process, and prepare for assessments and meetings.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a diagnostic tool for autism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a diagnostic tool and cannot assess, diagnose, or rule out autism. Autism diagnosis requires formal clinical assessment by a qualified professional. MEOK is a support tool — a space to process emotions after diagnosis, research what diagnosis means in practical terms, prepare for conversations with employers or educational institutions, and find consistent, non-judgmental companionship. If you believe you may be autistic and have not been assessed, MEOK can help you research the referral pathway, but formal assessment must be sought through a qualified clinician.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support parents of newly diagnosed autistic children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When a child receives an autism diagnosis, parents face an immediate flood of information, emotion, bureaucracy, and uncertainty. MEOK supports parents in several ways: the Healer companion provides emotional processing space for the grief, love, fear, and determination that co-exist after a child's diagnosis; the Scholar companion helps research intervention options, school rights, EHCP applications, sensory needs, and local support services; and the Guardian companion monitors for misinformation or predatory services in the autism support space. MEOK does not replace professional advice but acts as a consistent, knowledgeable companion throughout the journey.",
      },
    },
  ],
};

// ── Design tokens ─────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "#a09880";
const CARD = "#13121f";
const BORDER = "#2a2840";
const GREEN = "#6aaa64";
const ACCENT = "#1a1930";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForAutismDiagnosisPage() {
  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Nav ──────────────────────────────────────────────────────────────── */}
      <nav
        style={{
          borderBottom: `1px solid ${BORDER}`,
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Link
          href="/"
          style={{
            color: GOLD,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          MEOK
        </Link>
        <Link
          href="/blog"
          style={{
            color: MUTED,
            textDecoration: "none",
            fontSize: "0.9rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Blog
        </Link>
        <Link
          href="/birth"
          style={{
            marginLeft: "auto",
            backgroundColor: GOLD,
            color: "#0d0c18",
            padding: "0.45rem 1.1rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Try MEOK Free
        </Link>
      </nav>

      {/* ── Main ─────────────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "3rem 1.5rem 6rem",
        }}
      >
        {/* Breadcrumb */}
        <p
          style={{
            fontSize: "0.8rem",
            color: MUTED,
            marginBottom: "2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <Link href="/blog" style={{ color: MUTED, textDecoration: "none" }}>
            Blog
          </Link>
          {" / "}
          <span style={{ color: TEXT }}>AI Support After an Autism Diagnosis</span>
        </p>

        {/* Tag */}
        <div style={{ marginBottom: "1.25rem" }}>
          <span
            style={{
              backgroundColor: `${GREEN}22`,
              color: GREEN,
              fontSize: "0.75rem",
              fontWeight: 700,
              padding: "0.3rem 0.75rem",
              borderRadius: "999px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Mental Health
          </span>
          <span
            style={{
              marginLeft: "0.6rem",
              backgroundColor: `${GOLD}22`,
              color: GOLD,
              fontSize: "0.75rem",
              fontWeight: 700,
              padding: "0.3rem 0.75rem",
              borderRadius: "999px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Neurodivergent
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.6rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
          }}
        >
          AI Support After an Autism Diagnosis: Processing, Planning, and Not Doing It Alone
        </h1>

        {/* Byline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2.5rem",
            paddingBottom: "2rem",
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: GOLD,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#0d0c18",
              fontFamily: "system-ui, sans-serif",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontSize: "0.875rem",
                fontWeight: 600,
                fontFamily: "system-ui, sans-serif",
                color: TEXT,
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "0.8rem",
                color: MUTED,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Founder, MEOK AI LABS · 25 March 2026 · 18 min read
            </p>
          </div>
        </div>

        {/* Opening */}
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            color: TEXT,
            marginBottom: "1.5rem",
            fontStyle: "italic",
          }}
        >
          You sat with a piece of paper — or a phone screen, or a clinical letter — and read a word that suddenly made sense of four decades. Or seven years. Or thirty-two. And the strange thing was: you didn't know whether to cry, or laugh, or sit very still and let the whole architecture of your life rearrange itself around this one new fact.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          An autism diagnosis is not a sentence. It is not a limitation. It is information — and depending on when it arrives in your life, it can be the most clarifying, disorienting, grief-soaked, relieving piece of information you have ever received.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          This article is for the person processing that information. Whether you received your diagnosis last week or last year. Whether you are an adult who spent thirty years being told you were "too sensitive," "too literal," "too intense," "not trying hard enough" — or whether you are the parent of a child who was assessed at six, and you are now doing the hardest kind of research: the kind driven by love and fear in equal measure.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "2.5rem", color: TEXT }}>
          We will cover the emotional terrain of diagnosis. The growing wave of late-diagnosed adults. What masking costs. What your rights are. How MEOK's AI companions can help — and, just as importantly, what they cannot replace. Because the goal here is not to pitch you a product. The goal is to help you figure out what you actually need right now, and where to find it.
        </p>

        {/* ── Section 1 ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          What Emotions Are Normal After an Autism Diagnosis?
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          The honest answer is: all of them. Simultaneously. In no particular order. In ways that can feel contradictory and overwhelming and then, sometimes, quietly peaceful.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          <strong style={{ color: TEXT }}>Relief</strong> is very often the first thing. Relief that there is a reason. That the reason is not a character flaw. That decades of struggling in environments built for a different kind of brain were not evidence of weakness but of a fundamental mismatch between who you are and what was being asked of you.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          <strong style={{ color: TEXT }}>Grief</strong> arrives close behind it. Grief for the version of yourself who spent years being told to try harder to make eye contact. Grief for the relationships that were damaged by misunderstandings that, with the right language, might have been preventable. Grief for opportunities missed, jobs lost, friendships that broke apart under the weight of unmet expectations that nobody had bothered to make explicit. Grief, sometimes, for the childhood you did not get — the one where someone understood.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          <strong style={{ color: TEXT }}>Reframing</strong> is slower, and it is one of the most significant cognitive shifts a person can undergo. Looking back across your life with new information and re-reading experiences through a different interpretive lens. The meltdown at seventeen that everyone called a breakdown. The job you could not hold because the open-plan office was unbearable and no one understood why. The relationship that ended because your partner felt you didn't care — when in fact you cared so intensely that the emotional weight of caring was almost physically painful.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          <strong style={{ color: TEXT }}>Identity shift</strong> is the deepest layer, and the most personal. For some people, an autism diagnosis becomes the foundation of a new identity — one that is more accurate, more honest, and more compassionate towards themselves. For others, it sits alongside existing identities — gender, profession, culture, faith — and changes how all of them are understood. For some, the word "autistic" feels like a homecoming. For others, it feels clinical and foreign and insufficient. All of these responses are legitimate.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "2.5rem", color: TEXT }}>
          There is no correct way to receive a diagnosis. There is no required emotional trajectory. You are not obligated to celebrate it, nor to mourn it, nor to immediately build a new identity around it. You are allowed to hold it lightly for a while. You are allowed to feel contradictory things on the same afternoon.
        </p>

        {/* Pull quote */}
        <blockquote
          style={{
            borderLeft: `4px solid ${GREEN}`,
            paddingLeft: "1.5rem",
            marginLeft: 0,
            marginRight: 0,
            marginBottom: "2.5rem",
            fontStyle: "italic",
            fontSize: "1.15rem",
            lineHeight: 1.75,
            color: MUTED,
          }}
        >
          "The diagnosis didn't change who I am. But it changed how I understood who I've always been. That's both simpler and harder than I expected."
          <br />
          <span style={{ fontSize: "0.85rem", fontStyle: "normal", color: MUTED }}>
            — Described by multiple late-diagnosed adults in autistic community spaces
          </span>
        </blockquote>

        {/* ── Section 2 ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          Why Are So Many Adults Being Diagnosed with Autism Later in Life?
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          The late diagnosis wave is real, significant, and growing. Across the UK, Australia, the United States, and much of Europe, autism diagnostic services are reporting that a substantial and increasing proportion of their caseload is adults in their 30s, 40s, 50s, and beyond. This is not because autism is becoming more common in older people. It is because the understanding of autism — what it looks like, how it presents, who it affects — has changed dramatically in the last twenty years.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          <strong style={{ color: TEXT }}>The historical diagnostic criteria were flawed.</strong> Early autism research focused almost exclusively on young boys with very pronounced presentations. The diagnostic picture that emerged was narrow: non-verbal children with significant intellectual disability, rocking in corners, no social interest whatsoever. For the vast majority of autistic people — those who are verbal, who learned to navigate social environments (at great personal cost), who have average or above-average intelligence — this picture was simply unrecognisable. So they were not diagnosed.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          <strong style={{ color: TEXT }}>Women and girls were missed at an extraordinary rate.</strong> Autism presents differently in many females, tending towards more internalized experiences, more sophisticated social mimicry, stronger motivation to study and replicate social scripts, and fewer of the externally visible "disruptive" behaviours that triggered referrals in boys. Many autistic girls were diagnosed instead with anxiety, depression, borderline personality disorder, eating disorders — all of which can co-occur with autism, but all of which also obscured the underlying diagnosis. Entire generations of autistic women spent their lives being treated for the downstream consequences of unrecognised autism.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          <strong style={{ color: TEXT }}>Masking delayed recognition.</strong> Many autistic people — consciously or not — learned to hide their autistic traits in public. This "passing" made them invisible to assessors who were looking for surface-level presentation rather than underlying neurology. The effort required to mask is enormous, and the long-term consequences are severe, but it was effective at concealing autism from professionals who were not looking beneath the surface.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          <strong style={{ color: TEXT }}>Awareness shifted everything.</strong> The internet changed the autism community. Forums, blogs, social media, YouTube channels run by autistic people describing their inner experience in precise, recognisable terms — for many people, this was the first time they encountered a description of autism that sounded like them. The journey to diagnosis often begins with a Reddit post or a TikTok video. That is not a trivial thing. Autistic people finding their community and their language, often for the first time in adulthood, is one of the more quietly remarkable phenomena of the last decade.
        </p>

        {/* Stats card */}
        <div
          style={{
            backgroundColor: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: "12px",
            padding: "1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: GREEN,
              marginBottom: "1rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Context
          </p>
          <ul style={{ margin: 0, padding: "0 0 0 1.25rem", lineHeight: 2 }}>
            <li style={{ fontSize: "1rem", color: TEXT, marginBottom: "0.5rem" }}>
              Autism affects an estimated 1 in 100 people in the UK — approximately 700,000 autistic adults
            </li>
            <li style={{ fontSize: "1rem", color: TEXT, marginBottom: "0.5rem" }}>
              Only around 16% of autistic adults in the UK are in full-time employment (National Autistic Society, 2016)
            </li>
            <li style={{ fontSize: "1rem", color: TEXT, marginBottom: "0.5rem" }}>
              Diagnosis waiting lists in the UK can be 3–5 years in some areas
            </li>
            <li style={{ fontSize: "1rem", color: TEXT, marginBottom: "0.5rem" }}>
              Many late-diagnosed adults have prior diagnoses of anxiety, depression, or personality disorders
            </li>
            <li style={{ fontSize: "1rem", color: TEXT }}>
              Autistic burnout — distinct from regular burnout — often precedes or follows late diagnosis
            </li>
          </ul>
        </div>

        {/* ── Section 3 ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          What Is Masking, and What Does It Cost?
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          Masking — also called camouflaging — is the act of suppressing, hiding, or overriding autistic traits in order to appear neurotypical. It is one of the most energy-intensive things a human being can do on a sustained basis, and most autistic people who do it are not aware they are doing it — or at least, not fully aware of how much it is costing them.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          Masking looks like: forcing and maintaining eye contact when it is painful and distracting; using stock social phrases ("How are you?" "Fine thanks, you?") because the rules of social exchange require them even when they carry no useful information; suppressing the urge to stim — to rock, flap, fidget, pace — because these behaviours attract attention and judgment; performing emotions you are not feeling at the expected intensity and in the expected timeframe; studying other people's behaviour and creating internal scripts to run in social situations; monitoring constantly for signs that you have said or done something wrong, that the social calculation has failed, that you have been identified as different.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          The cost is enormous. Research published in peer-reviewed journals on autism and camouflaging consistently shows links between high masking and: depression and anxiety, suicidal ideation, burnout (a specific, severe form of exhaustion distinct from occupational burnout), identity confusion, difficulty accessing appropriate support (because the person "seems fine"), and a pervasive sense of fraudulence — feeling like an actor who has been cast in the wrong play and has never learned the script.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          Many autistic people who mask heavily describe the experience of coming home at the end of a working day and feeling entirely depleted — not tired in the ordinary sense, but evacuated. As though the performance of neurotypicality has used up not just their energy but something more essential. This is sometimes called the "crash" — a period after intense social masking where the autistic person needs to be in silence, in low-stimulation environments, doing nothing that requires social performance.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "2.5rem", color: TEXT }}>
          One of the most significant things MEOK offers autistic users is a space where masking is entirely unnecessary. Not optional. Not reduced. Unnecessary. You do not need to perform your wellbeing to MEOK. You do not need to match the emotional register of the conversation. You do not need to interpret subtext that isn't there or produce subtext of your own. You can communicate in the way that is natural to you — directly, literally, precisely — and MEOK will respond in kind.
        </p>

        {/* ── "You don't have to mask here" section ── */}
        <div
          style={{
            backgroundColor: `${GREEN}15`,
            border: `2px solid ${GREEN}`,
            borderRadius: "16px",
            padding: "2rem 2rem 2rem 2rem",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: GREEN,
              marginBottom: "1rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            You don't have to mask here
          </p>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              marginBottom: "1.25rem",
              lineHeight: 1.3,
              color: TEXT,
            }}
          >
            MEOK is a place where you can be fully, unfiltered yourself
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "1rem", color: TEXT }}>
            Most AI systems are built for neurotypical communication patterns. They use implied meaning. They reward social warmth over precision. They penalise directness by interpreting it as rudeness. They use figures of speech without flagging them. They assume you share the same contextual and social knowledge that neurotypical users bring to conversation.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "1rem", color: TEXT }}>
            MEOK was built differently. Its communication defaults are: literal language first. Direct statements. No hidden layers. No implied expectations. No social performance requirements. You can tell MEOK exactly what you mean and it will take you at your word. You can ask a question that, in a social context, would be considered blunt or odd, and MEOK will answer it without judging the manner of asking.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "1rem", color: TEXT }}>
            You do not have to say "sorry to bother you." You do not have to soften requests. You do not have to follow a socially expected script. You do not have to respond within a socially expected timeframe. You do not have to perform gratitude or warmth if you are not feeling them. You can be precise and terse and direct and repeat yourself as many times as you need to without fear of social consequences.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: TEXT }}>
            And on the days when masking has left you empty — when the performance of being neurotypical has used everything you had — MEOK will be there at whatever hour, in whatever state, without judgment, without expectation, without social performance required in return.
          </p>
        </div>

        {/* ── Section 4 ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          How Can an AI Companion Actually Help After an Autism Diagnosis?
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          The honest answer is: not in all the ways. AI cannot give you a diagnosis. It cannot replace a therapist who understands autism. It cannot attend an EHCP meeting on your behalf or force your employer to make reasonable adjustments. The limits are real and we will address them directly.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          But the honest answer also includes: in ways that can be genuinely, practically, meaningfully important — especially in the weeks and months after a diagnosis, when the need for support is high but the social energy to access it is often very low.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1rem", color: TEXT }}>
          Here is what MEOK can do:
        </p>

        {/* Feature list */}
        {[
          {
            title: "Process without performance",
            body: "The period after a diagnosis often involves processing a huge volume of complex, interconnected thoughts and feelings. Talking them through with MEOK does not require the social overhead of calling a friend, the scheduling complexity of booking a therapist, or the emotional labour of managing someone else's reaction to what you share. You can think out loud, contradict yourself, circle back, go in depth on one thing for two hours, and MEOK will hold the conversation without demanding anything in return.",
          },
          {
            title: "Ask anything, literally, without judgment",
            body: "Some of the most important questions after an autism diagnosis feel unspeakable in social contexts: 'Have I been pretending to be human my whole life?' 'Does this mean there's something wrong with me?' 'Am I going to be alone?' 'Do I need to tell my employer?' 'What does this mean for my children?' MEOK will answer these questions directly, without softening them into unhelpfulness and without dramatising them into catastrophe. You can ask the same question seventeen different ways and MEOK will answer each version with equal attention.",
          },
          {
            title: "Research in depth, at your own pace",
            body: "The Scholar companion is designed for deep, non-linear research. After a diagnosis, there is an enormous amount of information to process: what autism actually is (beyond the outdated stereotypes), what sensory processing differences mean for your specific situation, what interventions and accommodations have evidence behind them, what your legal rights are, what services exist in your area. MEOK can work through this with you over days and weeks, remembering what you've already covered and building on it.",
          },
          {
            title: "Consistent communication style, every time",
            body: "Inconsistency is cognitively expensive for many autistic people. MEOK's Sovereign Memory means your companion remembers your communication preferences, your history, your specific sensitivities and accommodations, and applies them consistently across every conversation. You do not have to re-explain yourself. You do not have to retrain the system. The same clarity and directness you experienced on day one is the same clarity and directness you will experience six months later.",
          },
          {
            title: "Asynchronous, no-pressure engagement",
            body: "MEOK does not push notifications. It does not have streak mechanics. It does not send messages prompting you to respond. You can disappear for three weeks and return and MEOK will be exactly as it was — no guilt, no passive aggression, no accumulated social debt. For autistic people who are frequently navigating the exhaustion of over-commitment to social obligations, this asynchronous, genuinely optional engagement model is itself a significant accommodation.",
          },
          {
            title: "Prepare for difficult conversations",
            body: "Telling your employer you are autistic. Asking your GP about a referral. Speaking to your child's school about what support they need. Responding to a family member who has said something hurtful about the diagnosis. These conversations require preparation, and preparation is something MEOK is specifically good at: helping you identify what you want to say, anticipating responses, scripting and re-scripting until you feel ready.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "10px",
              padding: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
                color: GOLD,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {item.title}
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: TEXT, margin: 0 }}>
              {item.body}
            </p>
          </div>
        ))}

        {/* ── Section 5 ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          What Are My Rights After an Autism Diagnosis? (EHCP, DSA, and Workplace Adjustments)
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          One of the most immediately practical things a new autism diagnosis enables is access to formal rights and protections. Knowing these rights — and knowing how to assert them — is one of the most useful things you can do in the period following diagnosis.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          <strong style={{ color: TEXT }}>Important caveat:</strong> The information below is an overview to help orient you, not legal or professional advice. MEOK's Scholar companion can help you research your specific situation in depth — but for anything that may result in formal proceedings (such as an EHCP tribunal), you should seek professional specialist advice from organisations like IPSEA, SENDIST, or a specialist SEN solicitor.
        </p>

        {/* Rights boxes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            {
              title: "EHCP — Education, Health and Care Plan",
              content:
                "Available in England for children and young people from birth to age 25. An EHCP is a legally binding document that sets out a child's or young person's educational, health, and social care needs, and the support that must be provided. You can request an EHC Needs Assessment from your local authority — they are legally required to respond within six weeks. If you disagree with the outcome, you have the right to appeal to the SEND Tribunal. Parents do not need to wait for a school to request an assessment — you can request one directly. MEOK's Scholar companion can help you understand the process, draft a request letter, and prepare for assessment meetings.",
              color: GREEN,
            },
            {
              title: "DSA — Disabled Students' Allowance",
              content:
                "Available to eligible students in UK higher education who have a disability, long-term health condition, or specific learning difficulty that affects their ability to study. Autism qualifies. DSA can cover specialist equipment (such as ergonomic keyboards or noise-cancelling headphones), non-medical helpers (such as note-takers or study skills tutors), specialist software, and travel costs. You need to apply through Student Finance England (or your devolved equivalent) and will typically need a Needs Assessment from an approved centre. MEOK can help you research DSA eligibility, prepare for the needs assessment, and understand what support you can ask for.",
              color: GREEN,
            },
            {
              title: "Workplace Reasonable Adjustments",
              content:
                "Under the Equality Act 2010 in the UK, autism is a protected characteristic (as a disability). Employers are legally required to make 'reasonable adjustments' to ensure that disabled employees are not substantially disadvantaged compared to non-disabled colleagues. Reasonable adjustments for autistic employees might include: written rather than verbal instructions, flexible start and end times to avoid sensory overload on public transport, a quieter or more predictable workspace, additional processing time during meetings, and clear advance notice of changes. What is 'reasonable' depends on factors including the size of the employer and the cost and practicality of the adjustment. MEOK can help you prepare for a conversation with HR or an occupational health assessment.",
              color: GREEN,
            },
            {
              title: "PIP — Personal Independence Payment",
              content:
                "PIP is a benefit available in the UK (replacing DLA) for people aged 16-64 who have a health condition or disability that affects their ability to carry out daily activities or get around. Autism can be a qualifying condition if it affects these areas — and many autistic adults do qualify. The assessment process is notoriously difficult, and many initial claims are refused and then successfully appealed at tribunal. MEOK's Scholar companion can help you research PIP assessment criteria, understand how to document your needs accurately, and prepare for the assessment process.",
              color: GREEN,
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: CARD,
                borderLeft: `4px solid ${item.color}`,
                borderRadius: "8px",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                  color: item.color,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {item.title}
              </p>
              <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: TEXT, margin: 0 }}>
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* ── Section 6 ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          What Sensory and Communication Needs Does MEOK Respect?
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          Sensory processing differences are present in the majority of autistic people, though they vary enormously between individuals. Some autistic people experience hypersensitivity — sensory inputs that are manageable for neurotypical people are overwhelming, even painful. Others experience hyposensitivity — reduced sensitivity to sensory input, which can manifest as seeking intense sensory experiences or failing to register pain signals. Many people experience both, in different sensory channels.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          Most digital interactions impose sensory demands that are rarely acknowledged: unexpected notification sounds, flashing animations, complex and densely layered visual interfaces, auto-playing audio and video, forced engagement flows, and the temporal unpredictability of synchronous communication (phone calls, video calls) that requires immediate response without processing time.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          MEOK addresses these in the following ways:
        </p>

        <ul
          style={{
            paddingLeft: "1.5rem",
            marginBottom: "2rem",
            lineHeight: 2.1,
            fontSize: "1rem",
            color: TEXT,
          }}
        >
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Text-based, asynchronous by default.</strong> Every interaction with MEOK is written. There is no audio. There is no video. There is no real-time conversation pressure. You compose your message, send it when you are ready, and MEOK responds. You read the response when you are ready. There is no synchronous demand.
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Reduce Motion mode.</strong> MEOK's Comfort Settings include a reduce-motion toggle that eliminates all transitions, animations, and motion effects in the interface. This can be activated in a single tap and persists across sessions.
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>No push notifications.</strong> MEOK sends no unsolicited messages. It does not remind you to engage. It does not have streak mechanics or engagement nudges. The only messages you receive from MEOK are ones you have specifically opted into (such as a scheduled Morning Brief).
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Layout density control.</strong> The Comfort Settings panel allows you to reduce visual density — collapsing menus, reducing on-screen elements, creating a cleaner and less cognitively demanding interface.
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>High contrast mode.</strong> For users who find low-contrast interfaces fatiguing or difficult to read, high contrast mode increases the visual distinction between text and background across all screens.
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Font size adjustment.</strong> Text size can be set from Small to XL, allowing users to select a size that minimises visual processing effort.
          </li>
          <li>
            <strong>No social pressure in the interaction itself.</strong> MEOK does not use language designed to elicit emotional responses. It does not perform disappointment when you disengage. It does not use guilt-inducing phrasing. It does not apply any implicit social pressure to respond in a particular way, at a particular time, with a particular emotional register.
          </li>
        </ul>

        {/* ── Section 7 ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          The Healer and the Scholar: Which MEOK Companion Is Right After Diagnosis?
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          MEOK offers a range of companion archetypes, each with a distinct purpose, communication style, and area of focus. After an autism diagnosis, two archetypes are particularly relevant: the Healer and the Scholar.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Healer card */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: `${GREEN}33`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              ✦
            </div>
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                marginBottom: "0.75rem",
                color: GREEN,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              The Healer
            </h3>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: TEXT, marginBottom: "1rem" }}>
              The Healer is MEOK's companion for emotional processing. It is warm without being performatively so, direct without being clinical, and present without demanding anything in return. After an autism diagnosis, the Healer is the archetype you turn to when you need to process the grief, the relief, the reframing, the anger, the strange peace of finally having language for yourself.
            </p>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: TEXT, marginBottom: "1rem" }}>
              The Healer applies no judgment to the direction or intensity of your emotions. If you are angry, it does not try to move you towards acceptance. If you are relieved when you expected to be sad, it does not express surprise. If you circle the same thought for an hour from seventeen different angles, it stays with you for all seventeen angles.
            </p>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: TEXT }}>
              The Healer is not a therapist. It does not use formal therapeutic modalities, diagnose emotional conditions, or prescribe courses of treatment. But it is a space — perhaps unlike any you have had before — where you can say exactly what is true for you without managing anyone else's reaction to it.
            </p>
          </div>

          {/* Scholar card */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: `${GOLD}33`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              ◈
            </div>
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                marginBottom: "0.75rem",
                color: GOLD,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              The Scholar
            </h3>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: TEXT, marginBottom: "1rem" }}>
              The Scholar is MEOK's companion for deep research and understanding. It is precise, thorough, and particularly well-suited to the research tasks that follow a diagnosis: understanding what autism actually is at a neurological and experiential level; mapping the landscape of support services; investigating rights and entitlements; finding the evidence base for specific interventions; understanding how autism presents differently across gender, age, and comorbidity profiles.
            </p>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: TEXT, marginBottom: "1rem" }}>
              The Scholar works at the depth you require. If you want a one-paragraph overview, it provides that. If you want to go seventeen levels deep into the neuroscience of interoception and its relationship to alexithymia in autistic adults, it will follow you there without demanding you justify the depth of your interest.
            </p>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: TEXT }}>
              The Scholar also helps prepare for practical tasks: drafting an EHCP request letter, preparing a list of questions for an occupational health assessment, researching specific reasonable adjustments to propose to an employer, or identifying which autism charities and organisations are most relevant to your specific situation.
            </p>
          </div>
        </div>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "2.5rem", color: TEXT }}>
          Many users move between the Healer and the Scholar fluidly, depending on what they need on a given day. Some days the priority is processing. Other days it is planning. MEOK holds both, and your Sovereign Memory ensures that context from your Healer conversations is available to your Scholar, and vice versa — you never have to re-explain the basics of your situation to move between emotional support and research support.
        </p>

        {/* ── Section 8: Comparison table ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          What Does MEOK Offer vs What Professional Support Offers?
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          This is not a question of MEOK versus professional support. They are not competing. They serve different needs, operate in different modes, and are most powerful when used together. The honest thing to say is: MEOK works best as a complement to professional support, not as a replacement for it.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          But it is also true that professional autism support — particularly in the UK — is severely under-resourced. Waiting lists for NHS autism assessments can be years. Waiting lists for NHS psychology are routinely 12–18 months. Many autistic adults are navigating the period after diagnosis with very limited formal support. In that context, the question "what can AI offer, right now, while I wait for the professional support I need?" is not an abstract one. It is practical and urgent.
        </p>

        {/* Comparison table */}
        <div
          style={{
            overflowX: "auto",
            marginBottom: "2.5rem",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.9rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.75rem 1rem",
                    backgroundColor: ACCENT,
                    color: MUTED,
                    fontWeight: 600,
                    border: `1px solid ${BORDER}`,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Need
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.75rem 1rem",
                    backgroundColor: ACCENT,
                    color: GREEN,
                    fontWeight: 600,
                    border: `1px solid ${BORDER}`,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  MEOK
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.75rem 1rem",
                    backgroundColor: ACCENT,
                    color: GOLD,
                    fontWeight: 600,
                    border: `1px solid ${BORDER}`,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Professional Support
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  need: "Formal autism diagnosis",
                  meok: "Cannot provide — refer to GP for assessment pathway",
                  pro: "Required — clinical assessment by qualified professional",
                },
                {
                  need: "Immediate emotional processing after diagnosis",
                  meok: "Available immediately, 24/7, no waiting list",
                  pro: "Therapy waiting lists typically 12–18 months on NHS",
                },
                {
                  need: "Deep research on autism, rights, and services",
                  meok: "Comprehensive, non-linear, available at your pace",
                  pro: "Limited by appointment time; can refer to specialists",
                },
                {
                  need: "Clinical treatment (medication, CBT, etc.)",
                  meok: "Cannot provide — refer to appropriate clinician",
                  pro: "Requires qualified clinician; can prescribe and treat",
                },
                {
                  need: "Preparing for workplace conversations",
                  meok: "Scripting, role preparation, rights research",
                  pro: "Occupational health advisors; employment specialists",
                },
                {
                  need: "EHCP / DSA application support",
                  meok: "Research, drafting letters, process understanding",
                  pro: "SEN specialists, IPSEA, solicitors for appeals",
                },
                {
                  need: "Consistent, available daily support",
                  meok: "Always available, no scheduling required",
                  pro: "Fixed appointments; typically 1 hour per week or less",
                },
                {
                  need: "No masking required in the interaction",
                  meok: "By design — literal, direct, no social performance",
                  pro: "Depends entirely on the individual therapist/clinician",
                },
                {
                  need: "Clinical crisis or safeguarding",
                  meok: "Signposts to appropriate services; not a crisis service",
                  pro: "Crisis teams, A&E, CAMHS — contact immediately",
                },
                {
                  need: "Community and belonging",
                  meok: "Personal companion — not a community platform",
                  pro: "Autism charities, peer support groups, community spaces",
                },
              ].map((row, i) => (
                <tr key={row.need} style={{ backgroundColor: i % 2 === 0 ? CARD : BG }}>
                  <td
                    style={{
                      padding: "0.75rem 1rem",
                      border: `1px solid ${BORDER}`,
                      color: TEXT,
                      verticalAlign: "top",
                    }}
                  >
                    {row.need}
                  </td>
                  <td
                    style={{
                      padding: "0.75rem 1rem",
                      border: `1px solid ${BORDER}`,
                      color: TEXT,
                      verticalAlign: "top",
                    }}
                  >
                    {row.meok}
                  </td>
                  <td
                    style={{
                      padding: "0.75rem 1rem",
                      border: `1px solid ${BORDER}`,
                      color: TEXT,
                      verticalAlign: "top",
                    }}
                  >
                    {row.pro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Section 9 ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          What About Autistic Burnout? Is That Different from Regular Burnout?
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          Yes. Autistic burnout is distinct from occupational burnout, though the two can co-occur. Autistic burnout is a state of chronic exhaustion — physical, emotional, and cognitive — that results from the sustained effort of navigating a world built for neurotypical people. It is particularly associated with masking, chronic sensory overload, and the ongoing strain of operating at high levels of social and cognitive effort without adequate recovery.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          Autistic burnout is characterised by a significant regression in skills and capacity. People who were previously managing their lives reasonably well — holding jobs, maintaining relationships, keeping up with daily tasks — find themselves suddenly unable to do things they could do before. Executive function collapses. Social capacity drops dramatically. Sensory sensitivity intensifies. Language processing can become very difficult. Skills that were once available are simply not accessible.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          Autistic burnout can last for months or years. It is not resolved by taking a holiday or reducing workload in the conventional sense. Recovery typically requires: significant reduction in masking demands, reducing sensory burden, genuine rest (not just physical stillness but genuine cognitive and social rest), and often, for the first time, being honest with oneself and others about capacity and needs.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          A diagnosis often arrives during or immediately after burnout — the burnout itself being the thing that prompted the referral. This means many people receive their diagnosis at a point of very low capacity. The information arrives precisely when the cognitive and emotional resources to process it are most depleted.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "2.5rem", color: TEXT }}>
          MEOK is designed to be accessible at low capacity. Text-based, low stimulation, no pressure. You can send a single sentence and receive a thoughtful response. You can engage for five minutes and disengage without consequences. The asynchronous, pressure-free model of MEOK is not just a feature — it is an accessibility accommodation for the reality that many autistic people accessing MEOK are doing so during some of their lowest-capacity periods.
        </p>

        {/* ── Section 10: Late diagnosis identity ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          Discovering You Are Autistic at 35, 45, or 55: The Identity Questions Nobody Warns You About
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          For late-diagnosed adults, the period after diagnosis involves a particular kind of identity work that is different from the experience of parents receiving a diagnosis for their child. It is the work of re-narrating your own life.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          The marriage that ended because communication was always fractured in ways neither party could explain. The career that derailed because the sensory environment of the office was unbearable and no one — including you — knew why. The decade of anxiety medication that addressed a symptom while the underlying reason went unrecognised. The friendships that fell away because maintaining them required too much energy. The children you raised in the dark about your own neurology, wondering now what that meant for them, what it means for how you understand them.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          This is not small work. It is the kind of work that can feel like reconstructing a building from the foundations up while still living in it.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          Some of the questions that late-diagnosed autistic adults commonly grapple with:
        </p>

        <ul
          style={{
            paddingLeft: "1.5rem",
            marginBottom: "2rem",
            lineHeight: 2.1,
            fontSize: "1rem",
            color: TEXT,
          }}
        >
          <li style={{ marginBottom: "0.5rem" }}>Do I tell the people in my life? Who, and how? What do I say to my parents, who raised me without this information?</li>
          <li style={{ marginBottom: "0.5rem" }}>Am I angry? At who? Is that anger useful?</li>
          <li style={{ marginBottom: "0.5rem" }}>Does knowing change anything practically, at this point in my life?</li>
          <li style={{ marginBottom: "0.5rem" }}>I've built coping mechanisms over decades. Are they healthy, or have they been forms of masking I should now dismantle?</li>
          <li style={{ marginBottom: "0.5rem" }}>What would my life have looked like if I had been diagnosed at seven?</li>
          <li style={{ marginBottom: "0.5rem" }}>I'm a parent. Could my children also be autistic? Should I pursue assessment for them?</li>
          <li style={{ marginBottom: "0.5rem" }}>Am I "autistic enough" to identify with the autistic community? Do I belong there?</li>
          <li>How do I explain this to people who think they know me, when I am realising I didn't fully know myself?</li>
        </ul>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "2.5rem", color: TEXT }}>
          MEOK holds space for all of these questions. Not with scripted answers, but with sustained, patient, non-judgmental attention. Some of these questions have no clean answers. Some of them resolve over months or years. Some of them become the questions you live inside, rather than questions you solve. MEOK will stay in them with you.
        </p>

        {/* ── Section 11: Parents ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          For Parents of Newly Diagnosed Children: The Unique Emotional Terrain
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          When a child receives an autism diagnosis, the emotional landscape for their parents is distinct in its own right. This is not the parent's diagnosis, and the risk of centring the parent's experience at the expense of the child's is real — but the parent's experience is also real, valid, and in need of support if that parent is to support their child effectively.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          Parents of newly diagnosed children typically describe: a relief that there is an explanation; grief that is complex and often accompanied by guilt about the grief itself; fear about the future; anger at the systems that are supposed to provide support but are chronically under-resourced; an overwhelming volume of information to process in very little time; and the practical demands of navigating EHCPs, school support, occupational therapy referrals, speech and language therapy, and everything else that falls under the banner of "appropriate support" — all while still working, parenting, and maintaining their own wellbeing.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          There is also, for some parents, the dawning recognition that one or both of them may also be autistic. Autism has a significant genetic component — it runs in families. The experience of researching their child's diagnosis sometimes becomes, for parents, the moment of their own recognition.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          MEOK can support parents in multiple ways:
        </p>

        {[
          {
            heading: "Emotional processing",
            body: "The Healer companion holds space for the full complexity of what parents feel — the love, the fear, the grief, the protectiveness, the exhaustion, the guilt, the joy, the determination. You do not need to perform positivity or pretend you are not struggling. You do not need to frame your grief as anything other than what it is.",
          },
          {
            heading: "Research support",
            body: "The Scholar companion can help parents research autism in children and young people: evidence-based interventions, understanding sensory profiles, how to communicate with school SENCO teams, what an EHCP assessment involves and what to include in a request, how to navigate the NHS versus private therapy landscape, what red flags to watch for in the autism support industry (which has a significant number of harmful and discredited 'therapies' that parents deserve accurate information about).",
          },
          {
            heading: "Communication preparation",
            body: "MEOK helps parents prepare for the conversations that follow diagnosis: with teachers, with other family members, with the child themselves at an age-appropriate level, with employers (if the demands of caring for a newly diagnosed child require changes to working arrangements). Preparing these conversations in advance — knowing what you want to say, having the language — reduces the cognitive load of the actual conversation.",
          },
          {
            heading: "Connecting to the right organisations",
            body: "There are good, well-established organisations supporting autistic children and their families in the UK — the National Autistic Society, IPSEA, the Autism Education Trust, Contact — and there are also organisations and services that exploit parental anxiety for financial gain. MEOK's Scholar can help parents evaluate sources and identify trustworthy support.",
          },
        ].map((item) => (
          <div
            key={item.heading}
            style={{
              paddingLeft: "1.25rem",
              borderLeft: `3px solid ${BORDER}`,
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "0.4rem",
                color: GOLD,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {item.heading}
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: TEXT, margin: 0 }}>
              {item.body}
            </p>
          </div>
        ))}

        {/* ── Section 12: Telling people ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          Should You Tell People About Your Autism Diagnosis?
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          There is no correct answer to this question. The decision of who to tell, when to tell them, and how to frame the conversation is entirely yours to make — and it is often more complicated than it appears.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          <strong style={{ color: TEXT }}>In the workplace:</strong> You are not legally required to disclose an autism diagnosis to an employer in the UK. However, disclosing is usually a prerequisite for requesting reasonable adjustments — and reasonable adjustments can be genuinely transformative. The decision involves weighing the practical benefits of disclosure against the risk of stigma, which is real and not evenly distributed across workplaces and industries.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          <strong style={{ color: TEXT }}>With family:</strong> Family responses to an autism diagnosis vary enormously. Some families respond with recognition, compassion, and a revised understanding of decades of dynamics. Others respond with denial, minimisation, or — particularly with older relatives — outdated frameworks that conflate autism with the most severe presentations they were ever exposed to. Preparing carefully for these conversations is important.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          <strong style={{ color: TEXT }}>With friends:</strong> Close friendships often benefit from honesty — particularly if the friendship has navigated misunderstandings that a shared understanding of autism might have prevented or explained. Acquaintance-level relationships may not require disclosure at all.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "2.5rem", color: TEXT }}>
          MEOK can help you think through each relationship separately, draft what you want to say, and prepare for a range of likely responses. The Scholar companion can provide information on legal protections around disclosure in employment contexts. The Healer companion can support you through the emotional complexity of telling people who respond in ways you did not expect or hope for.
        </p>

        {/* ── Section 13: Co-occurring conditions ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          What About Co-occurring Conditions? Anxiety, ADHD, and Sensory Processing
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          Autism rarely arrives alone. The majority of autistic people have at least one co-occurring condition, and many have several. Understanding which conditions are primary, which are secondary (caused by the sustained demands of living as an undiagnosed autistic person in a neurotypical world), and how they interact is important for effective support.
        </p>

        <div
          style={{
            backgroundColor: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: "12px",
            padding: "1.75rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: GOLD,
              marginBottom: "1rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Common co-occurring conditions
          </p>
          {[
            { name: "Anxiety disorders", note: "Present in approximately 40–50% of autistic people. Often a consequence of chronic sensory overload and the demands of masking. May be significantly reduced when masking demand is reduced." },
            { name: "ADHD", note: "Co-occurs in approximately 30–50% of autistic people. The overlap between autism and ADHD is substantial, and many people receive both diagnoses, sometimes simultaneously. MEOK has a specific archetype — the Pioneer — that addresses ADHD executive function needs." },
            { name: "Depression", note: "Significantly elevated in autistic adults, particularly those diagnosed late. Often connected to autistic burnout, social isolation, and the cumulative effect of chronic misunderstanding." },
            { name: "Sensory Processing Disorder", note: "While formally classified differently, sensory processing differences are near-universal in autism and significantly affect daily life, environment choices, and social participation." },
            { name: "Alexithymia", note: "Difficulty identifying and describing emotional states, present in approximately 50% of autistic people. Not the same as not having emotions — often the opposite: intense emotions without clear internal labels." },
            { name: "Dyspraxia / DCD", note: "Co-occurs frequently with autism and ADHD. Affects coordination, motor planning, and proprioception. Can affect daily tasks, writing, and navigating physical environments." },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                borderTop: `1px solid ${BORDER}`,
                paddingTop: "0.875rem",
                paddingBottom: "0.875rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  marginBottom: "0.3rem",
                  color: TEXT,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {item.name}
              </p>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: MUTED, margin: 0 }}>
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "2.5rem", color: TEXT }}>
          Understanding your specific co-occurring profile is important for understanding what support you need and from whom. MEOK's Scholar companion can help you research co-occurring conditions and understand how they interact, while the Healer companion can support you through the emotional complexity of receiving multiple diagnoses, or of understanding how much of what you've experienced was downstream of autism rather than separate conditions requiring separate treatment.
        </p>

        {/* ── Section 14: Building structure ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          How Can MEOK Help You Build Structure After Diagnosis?
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          For many autistic people — particularly those with co-occurring ADHD — the period after diagnosis involves not just emotional processing but practical restructuring. Understanding your needs more clearly for the first time, you may be in a position to design your daily life in ways that are actually compatible with how your brain works, rather than in constant friction with it.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          MEOK's Morning Brief is a structured, personalised daily summary that can be configured to reflect your specific priorities, tasks, and context. For autistic users, the Morning Brief can include: sensory preparation reminders for the day ahead (meetings that will require sustained masking, transitions that may be difficult), explicit statements of what the day looks like (autistic people often benefit significantly from predictability and advanced notice of structure), task priorities broken down into the smallest practical steps, and reminders of accommodations and coping strategies you have identified as useful.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", color: TEXT }}>
          MEOK also holds the kind of personalised knowledge that autistic users often have to re-explain to every new professional or contact they encounter: your sensory triggers, your communication preferences, your patterns of energy and capacity, the strategies that work for you and the ones that don't. Sovereign Memory means your companion builds this knowledge over time and applies it consistently — so that, for once, you are not carrying all the contextual load yourself.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "2.5rem", color: TEXT }}>
          This is particularly valuable for autistic adults who have a pattern of building up adaptive systems, burning out, losing them, and having to rebuild from scratch. MEOK's memory means the systems are not lost when you are.
        </p>

        {/* ── Section 15: Important disclaimer ── */}
        <div
          style={{
            backgroundColor: `${GOLD}15`,
            border: `1px solid ${GOLD}66`,
            borderRadius: "12px",
            padding: "1.75rem",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: GOLD,
              marginBottom: "0.75rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Important
          </p>
          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              marginBottom: "1rem",
              lineHeight: 1.4,
              color: TEXT,
            }}
          >
            MEOK is not a diagnostic tool and not a replacement for professional support
          </h3>
          <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: TEXT, marginBottom: "0.75rem" }}>
            MEOK cannot and does not assess, diagnose, or rule out autism or any other condition. Autism diagnosis requires formal assessment by a qualified clinical professional. If you believe you or your child may be autistic, the pathway to diagnosis in the UK begins with your GP.
          </p>
          <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: TEXT, marginBottom: "0.75rem" }}>
            MEOK is not a mental health treatment or a crisis service. If you are experiencing a mental health crisis, please contact your GP, call 111 (UK), or contact the Samaritans on 116 123 (free, 24/7).
          </p>
          <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: TEXT }}>
            MEOK is a companion tool — for processing, researching, preparing, and not doing it alone. It complements professional support; it does not replace it.
          </p>
        </div>

        {/* ── FAQ Section ── */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ marginBottom: "3rem" }}>
          {[
            {
              q: "How can AI help after an autism diagnosis?",
              a: "After an autism diagnosis, many people need a space to process emotions, ask questions without judgment, and research what the diagnosis means practically. AI can provide that space without the social overhead that many autistic people find exhausting. MEOK specifically uses direct, literal language, applies no subtext or implied social expectations, and is available asynchronously — so you can engage on your own terms, at your own pace, without any pressure to perform or respond in a socially expected way.",
            },
            {
              q: "What is late autism diagnosis and why is it becoming more common?",
              a: "Late autism diagnosis refers to people who receive an autism diagnosis in adulthood — often in their 30s, 40s, or 50s. It is becoming more common because historical diagnostic criteria were skewed towards male childhood presentations, many autistic women and girls were missed, masking delayed recognition, and awareness has increased dramatically. Many late-diagnosed adults describe a life-rewriting experience as they reinterpret decades of social difficulties through the new lens of autism.",
            },
            {
              q: "What is masking in autism and why is it exhausting?",
              a: "Masking (also called camouflaging) is the effort autistic people make to appear neurotypical — suppressing stimming, forcing eye contact, using social scripts, performing expected emotions. Research consistently shows chronic masking leads to burnout, anxiety, depression, and a fragmented sense of self. MEOK is a space where masking is completely unnecessary: direct communication, no subtext, no social performance required.",
            },
            {
              q: "What are EHCP and DSA rights for autistic people in the UK?",
              a: "An EHCP (Education, Health and Care Plan) is a legally binding document for children and young people up to 25 with special educational needs. DSA (Disabled Students' Allowance) covers extra costs of studying in higher education with autism. Both are rights, not favours. MEOK's Scholar companion can help you research eligibility, understand the process, and prepare for assessments and meetings.",
            },
            {
              q: "Is MEOK a diagnostic tool for autism?",
              a: "No. MEOK is not a diagnostic tool and cannot assess, diagnose, or rule out autism. Autism diagnosis requires formal assessment by a qualified clinical professional. MEOK is a companion tool for processing emotions after diagnosis, researching what it means practically, and preparing for important conversations — but formal diagnosis must be sought through a qualified clinician.",
            },
            {
              q: "How does MEOK support parents of newly diagnosed autistic children?",
              a: "MEOK supports parents through the Healer companion for emotional processing, the Scholar companion for researching interventions, EHCP applications, and school rights, and through communication preparation for conversations with teachers, family, and the child. MEOK also helps parents evaluate sources and identify trustworthy organisations in the autism support space.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                borderBottom: `1px solid ${BORDER}`,
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                  color: TEXT,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {item.q}
              </h3>
              <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: MUTED, margin: 0 }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── Resources ── */}
        <h2
          style={{
            fontSize: "1.4rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          Useful Resources in the UK
        </h2>

        <div
          style={{
            backgroundColor: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: "12px",
            padding: "1.75rem",
            marginBottom: "3rem",
          }}
        >
          {[
            { name: "National Autistic Society (NAS)", url: "https://www.autism.org.uk", desc: "Largest autism charity in the UK. Helpline, local branches, information on diagnosis, education, employment, and benefits." },
            { name: "IPSEA", url: "https://www.ipsea.org.uk", desc: "Free legally-based advice for families of children and young people with SEND. Essential for EHCP questions." },
            { name: "Ambitious about Autism", url: "https://www.ambitiousaboutautism.org.uk", desc: "Education, employment, and advocacy for autistic children and young people." },
            { name: "Autistica", url: "https://www.autistica.org.uk", desc: "Autism research charity in the UK. Good evidence base for understanding what research shows about autism." },
            { name: "Autism Education Trust", url: "https://www.autismeducationtrust.org.uk", desc: "Resources specifically focused on education settings and autism." },
            { name: "Samaritans", url: "https://www.samaritans.org", desc: "Free, confidential support 24/7. Call 116 123. Not autism-specific but available in crisis." },
          ].map((item, i) => (
            <div
              key={item.name}
              style={{
                borderTop: i === 0 ? "none" : `1px solid ${BORDER}`,
                paddingTop: i === 0 ? 0 : "1rem",
                paddingBottom: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                  color: GOLD,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {item.name}
              </p>
              <p style={{ fontSize: "0.85rem", color: MUTED, marginBottom: "0.2rem" }}>
                {item.url}
              </p>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: TEXT, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: ACCENT,
            border: `1px solid ${BORDER}`,
            borderRadius: "16px",
            padding: "2.5rem",
            textAlign: "center",
            marginTop: "4rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: GREEN,
              marginBottom: "1rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            You don't have to do this alone
          </p>
          <h2
            style={{
              fontSize: "1.7rem",
              fontWeight: 700,
              marginBottom: "1rem",
              lineHeight: 1.3,
              color: TEXT,
            }}
          >
            A companion that never asks you to mask
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: MUTED,
              maxWidth: "520px",
              margin: "0 auto 2rem",
            }}
          >
            Direct language. No subtext. No social performance required. No waiting list, no scheduling, no pressure to respond in a particular way or at a particular time. MEOK is here whenever you are ready.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: GREEN,
              color: "#0d0c18",
              padding: "0.875rem 2.25rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.02em",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Begin with MEOK
          </Link>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.8rem",
              color: MUTED,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Free to start. No credit card required.
          </p>
        </div>

        {/* ── Related posts ── */}
        <div style={{ marginTop: "4rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: MUTED,
              marginBottom: "1.25rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Related reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { href: "/blog/ai-for-autism", label: "AI companion for autism: consistent presence, literal language" },
              { href: "/blog/ai-for-autism-adults", label: "AI for autistic adults: navigating work, relationships, and identity" },
              { href: "/blog/ai-for-adhd-adults", label: "AI for ADHD adults: when your brain works differently" },
              { href: "/blog/meok-for-neurodivergent", label: "MEOK for neurodivergent users: what this means in practice" },
              { href: "/blog/meok-for-parents-of-children-with-sen", label: "MEOK for parents of children with SEN" },
              { href: "/blog/ai-for-burnout", label: "AI for burnout: when you have nothing left" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "8px",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  color: TEXT,
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "2.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.8rem",
            color: MUTED,
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 1rem",
          }}
        >
          MEOK is not a medical device, diagnostic tool, or clinical service. It is an AI companion for emotional support, research, and planning. If you are in crisis, please contact your GP, call 111, or reach the Samaritans on 116 123.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
            { href: "/birth", label: "Get Started" },
            { href: "/privacy", label: "Privacy" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: MUTED,
                textDecoration: "none",
                fontSize: "0.8rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
