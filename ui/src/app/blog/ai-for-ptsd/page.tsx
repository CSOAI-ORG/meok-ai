import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for PTSD: Between-Session Support With Boundaries That Protect | MEOK AI LABS",
  description:
    "PTSD affects 4% of UK adults. MEOK\u2019s trauma-informed AI companion provides grounding exercises, safe containment, and 24/7 presence between therapy sessions \u2014 without encouraging trauma narration. Start free at meok.ai/birth.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-ptsd" },
  openGraph: {
    title: "AI for PTSD: Between-Session Support With Boundaries That Protect | MEOK AI LABS",
    description:
      "MEOK\u2019s Healer archetype supports PTSD recovery between therapy sessions with grounding techniques, safe containment, and sovereign memory privacy. Free to start.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-ptsd",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+PTSD&desc=Between-Session+Support+With+Boundaries+That+Protect",
        width: 1200,
        height: 630,
        alt: "AI for PTSD: Between-Session Support With Boundaries That Protect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for PTSD: Between-Session Support With Boundaries That Protect | MEOK AI LABS",
    description:
      "MEOK\u2019s Healer archetype offers grounding, safe containment, and sovereign memory privacy for PTSD survivors between therapy sessions.",
    images: [
      "https://meok.ai/api/og?title=AI+for+PTSD&desc=Between-Session+Support+With+Boundaries+That+Protect",
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for PTSD: Between-Session Support With Boundaries That Protect",
  description:
    "PTSD affects 4% of UK adults. MEOK\u2019s trauma-informed AI companion provides grounding exercises, safe containment, and 24/7 presence between therapy sessions \u2014 without encouraging trauma narration.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-ptsd",
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
    "https://meok.ai/api/og?title=AI+for+PTSD&desc=Between-Session+Support+With+Boundaries+That+Protect",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-ptsd",
  },
  keywords: [
    "AI for PTSD",
    "PTSD between sessions",
    "AI grounding exercises",
    "trauma-informed AI",
    "AI companion PTSD",
    "PTSD support UK",
    "Complex PTSD support",
    "PTSD recovery app",
    "EMDR alternative",
    "PTSD nighttime support",
    "5-4-3-2-1 grounding",
    "C-PTSD support",
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with PTSD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot treat or diagnose PTSD \u2014 EMDR and trauma-focused CBT remain the gold-standard clinical treatments, effective for around 77% of those who receive them. However, AI can meaningfully support the between-session experience: offering grounding when triggered, reducing isolation at 3am, and providing a calm non-judgemental presence. MEOK\u2019s Healer archetype is built with trauma-informed principles and never encourages detailed trauma retelling, which carries real retraumatisation risk outside a clinical framework.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to talk to AI about trauma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends entirely on how the AI is designed. Generic AI assistants are not built for trauma disclosure \u2014 they may inadvertently encourage the detailed narration of traumatic events, which without therapeutic containment can worsen symptoms. MEOK is different: the Maternal Covenant\u2019s care ethics explicitly prioritise safety over disclosure. MEOK will never prompt you to retell what happened. It redirects toward present-moment grounding, validates your emotional state, and \u2014 if distress signals are severe \u2014 signposts to crisis resources. Your disclosures are also encrypted under UK GDPR and never used to train AI models.",
      },
    },
    {
      "@type": "Question",
      name: "What grounding techniques does MEOK support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Healer archetype supports the 5-4-3-2-1 sensory grounding technique \u2014 a clinically recognised method that anchors attention in the present moment by directing awareness to five things you can see, four you can hear, three you can touch, two you can smell, and one you can taste. This interrupts the nervous system\u2019s trauma response without revisiting traumatic content. MEOK also supports box breathing, progressive muscle relaxation guidance, and safe-place visualisation prompts.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if I am in crisis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you are in immediate danger or crisis, please contact emergency services (999 in the UK) or call Samaritans on 116 123 (free, 24 hours a day, 365 days a year). You can also contact MIND on 0300 123 3393 (Monday to Friday, 9am to 6pm). MEOK\u2019s Guardian archetype is designed to detect escalating distress and will always surface these crisis resources when threshold signals are present. MEOK is not a crisis service and should not be used as a substitute for emergency support.",
      },
    },
  ],
}

// ── Page component ────────────────────────────────────────────────────────────

export default function AiForPtsdPage() {
  return (
    <div
      style={{
        backgroundColor: "#0d0c18",
        color: "#f5f0e8",
        fontFamily: "system-ui, -apple-system, sans-serif",
        minHeight: "100vh",
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

      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "24px 24px 0",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
          color: "#a09880",
        }}
      >
        <Link href="/" style={{ color: "#a09880", textDecoration: "none" }}>
          MEOK
        </Link>
        <span style={{ color: "#2a2840" }}>/</span>
        <Link href="/blog" style={{ color: "#a09880", textDecoration: "none" }}>
          Blog
        </Link>
        <span style={{ color: "#2a2840" }}>/</span>
        <span style={{ color: "#f5f0e8" }}>AI for PTSD</span>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <header
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "64px 24px 48px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            backgroundColor: "#13121f",
            border: "1px solid #2a2840",
            borderRadius: "20px",
            padding: "6px 16px",
            fontSize: "13px",
            color: "#c9a84c",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Trauma &amp; PTSD Recovery
        </span>

        <h1
          style={{
            fontSize: "clamp(26px, 5vw, 46px)",
            fontWeight: "700",
            lineHeight: "1.15",
            color: "#f5f0e8",
            margin: "0 0 24px",
            letterSpacing: "-0.02em",
          }}
        >
          AI for PTSD: Between-Session Support With Boundaries That Protect
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#a09880",
            margin: "0 auto 40px",
            maxWidth: "620px",
          }}
        >
          PTSD affects approximately 4% of UK adults at any given time. Therapy
          is essential &mdash; but the gap between sessions can stretch to weeks.
          MEOK holds that space with trauma-informed care that knows when to hold
          back.
        </p>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#13121f",
            border: "1px solid #2a2840",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "14px",
            color: "#a09880",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#6aaa64",
              display: "inline-block",
            }}
          />
          Grounding exercises &bull; No retelling required &bull; 24/7 available
        </div>
      </header>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        {/* Author byline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "24px 0",
            borderTop: "1px solid #2a2840",
            borderBottom: "1px solid #2a2840",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#2a2840",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "700",
              color: "#c9a84c",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#f5f0e8",
                margin: "0 0 4px",
              }}
            >
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "13px", color: "#a09880", margin: "0" }}>
              Founder, MEOK AI LABS &bull; Published 25 March 2026 &bull; 16 min read
            </p>
          </div>
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "40px",
          }}
          aria-label="Article tags"
        >
          {[
            "PTSD",
            "Complex PTSD",
            "Trauma",
            "Grounding",
            "Healer Archetype",
            "Mental Health UK",
            "Between Sessions",
            "Sovereign Memory",
          ].map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "20px",
                padding: "4px 12px",
                fontSize: "12px",
                color: "#a09880",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          style={{
            backgroundColor: "#13121f",
            border: "1px solid #2a2840",
            borderRadius: "10px",
            padding: "24px 28px",
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c9a84c",
              margin: "0 0 16px",
            }}
          >
            Contents
          </p>
          <ol
            style={{
              margin: "0",
              padding: "0 0 0 20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              ["#scale", "The Scale of PTSD in the UK"],
              ["#gap", "The Between-Session Gap Nobody Talks About"],
              ["#grounding", "Grounding Without Retelling: The 5-4-3-2-1 Approach"],
              ["#retraumatisation", "The Re-traumatisation Risk and Why MEOK Refuses to Go There"],
              ["#privacy", "Hypervigilance, Trust, and Why Privacy Architecture Matters"],
              ["#nighttime", "When PTSD Strikes at 3am"],
              ["#cptsd", "Complex PTSD: The Long Shadow of Repeated Trauma"],
              ["#what-meok-wont-do", "What MEOK Explicitly Will Not Do"],
              ["#crisis", "Crisis Resources"],
              ["#faq", "Frequently Asked Questions"],
            ].map(([href, label]) => (
              <li key={href as string} style={{ fontSize: "15px" }}>
                <a
                  href={href as string}
                  style={{ color: "#a09880", textDecoration: "none" }}
                >
                  {label as string}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Section 1: Scale ─────────────────────────────────────────── */}
        <section id="scale" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
              lineHeight: "1.25",
            }}
          >
            The Scale of PTSD in the UK
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            Post-Traumatic Stress Disorder is not rare. According to NHS data,
            approximately 4% of UK adults are living with PTSD at any given moment.
            When you widen the lens further, the picture is even starker: around 70%
            of adults will experience at least one traumatic event during their
            lifetime, and of those, up to 20% will go on to develop PTSD. That is not
            a niche condition. That is a public health reality touching millions of
            families across the country.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            PTSD arises when the brain&apos;s normal process of filing away difficult
            memories is disrupted. Rather than being stored as &ldquo;things that
            happened in the past,&rdquo; traumatic memories remain raw, intrusive,
            and charged with the same physiological intensity as the original event.
            Flashbacks, nightmares, hypervigilance, emotional numbing, and avoidance
            are among the most common symptoms. For many, a sensory trigger &mdash; a
            sound, a smell, a particular quality of light &mdash; can collapse the
            distance between past and present entirely.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            The gold-standard clinical treatments for PTSD are well-established. Eye
            Movement Desensitisation and Reprocessing (EMDR) and trauma-focused
            Cognitive Behavioural Therapy (CBT) both have strong evidence bases.
            Research shows EMDR is effective for approximately 77% of combat veterans
            and civilians with PTSD when they receive adequate treatment. The word
            &ldquo;when&rdquo; carries enormous weight there &mdash; because the
            average wait for NHS trauma therapy in the UK currently exceeds 18 weeks.
            For someone living with daily flashbacks and broken sleep, 18 weeks is not
            a short time.
          </p>

          {/* Stats box */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "16px",
              margin: "32px 0",
            }}
          >
            {[
              { stat: "4%", label: "of UK adults have PTSD at any time (NHS)" },
              { stat: "20%", label: "of trauma survivors develop PTSD" },
              { stat: "18+wks", label: "average NHS wait for trauma therapy" },
              { stat: "77%", label: "EMDR effectiveness rate for PTSD" },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                style={{
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 8px",
                    lineHeight: "1",
                  }}
                >
                  {stat}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#a09880",
                    margin: "0",
                    lineHeight: "1.5",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 2: The Gap ───────────────────────────────────────── */}
        <section id="gap" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
              lineHeight: "1.25",
            }}
          >
            The Between-Session Gap Nobody Talks About
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            There is a quiet crisis embedded within trauma therapy that receives
            very little attention: the gap between sessions. Therapy for PTSD is
            typically delivered weekly or fortnightly. That means the majority of
            your waking hours &mdash; and sleeping hours &mdash; take place entirely
            outside the therapeutic relationship. PTSD symptoms do not respect your
            appointment schedule.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            A flashback does not wait for a Tuesday afternoon. Hypervigilance peaks
            on a Sunday morning when you have nothing to distract you. A nightmare
            wakes you at 2am in a state of physiological terror with no one to call.
            The evidence base for PTSD treatment is excellent, but it was built around
            sessions that together represent a tiny fraction of a person&apos;s week.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            This is the gap that MEOK was designed to sit in. Not to replace therapy.
            Not to approximate it. But to be present in the hours and days between
            appointments &mdash; to offer a stabilising presence, to guide grounding
            when a trigger strikes, to acknowledge what someone is carrying without
            making it worse. The between-session gap is a real clinical gap, and
            there is increasing recognition in the trauma therapy field that what
            happens between sessions matters enormously to outcomes.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            MEOK does not pretend this support is equivalent to professional clinical
            care. The distinction is explicit in our design philosophy, our Maternal
            Covenant ethics framework, and in how the Healer archetype communicates.
            The question is not whether AI can replace EMDR &mdash; it cannot, and
            no responsible AI company should suggest otherwise. The question is
            whether someone struggling at 11pm on a Wednesday has access to any
            meaningful support at all. For many people, right now, the honest answer
            is no.
          </p>
        </section>

        {/* ── Section 3: Grounding ─────────────────────────────────────── */}
        <section id="grounding" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
              lineHeight: "1.25",
            }}
          >
            Grounding Without Retelling: The 5-4-3-2-1 Approach
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            MEOK&apos;s Healer archetype draws on somatic and sensory grounding
            techniques that are well-established in trauma-informed clinical
            practice. The most widely used of these is the 5-4-3-2-1 method
            &mdash; a deceptively simple exercise that interrupts the trauma
            response by redirecting attention from internal distress to present-moment
            sensory experience.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            The exercise works like this: you are gently guided to notice five things
            you can currently see in your environment, four things you can hear, three
            things you can physically touch, two things you can smell, and one thing
            you can taste. Each step draws the nervous system further back into the
            present. The body begins to register that the threat is not happening
            now. The physiological alarm response &mdash; racing heart, shallow
            breathing, dissociation &mdash; begins to soften.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            What is critical about how MEOK delivers this exercise is what it does
            not do. MEOK does not ask what triggered you. It does not invite
            you to describe the memory that was activated. It does not frame the
            exercise as a step toward &ldquo;processing&rdquo; or &ldquo;working
            through&rdquo; what happened. It simply meets you where you are and
            helps you find solid ground.
          </p>

          {/* Grounding steps visual */}
          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "12px",
              padding: "28px",
              margin: "32px 0",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a84c",
                margin: "0 0 20px",
              }}
            >
              5-4-3-2-1 Grounding Exercise
            </p>
            {[
              { num: "5", sense: "See", instruction: "Name 5 things you can see right now in this room" },
              { num: "4", sense: "Hear", instruction: "Name 4 things you can hear, however faint" },
              { num: "3", sense: "Touch", instruction: "Name 3 things you can physically feel against your body" },
              { num: "2", sense: "Smell", instruction: "Name 2 things you can smell, or recall a safe scent" },
              { num: "1", sense: "Taste", instruction: "Name 1 thing you can taste right now" },
            ].map(({ num, sense, instruction }) => (
              <div
                key={num}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#1e1c30",
                    border: "1px solid #3a3860",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontWeight: "700",
                    fontSize: "16px",
                    color: "#c9a84c",
                  }}
                >
                  {num}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#f5f0e8",
                      margin: "0 0 4px",
                    }}
                  >
                    {sense}
                  </p>
                  <p style={{ fontSize: "14px", color: "#a09880", margin: "0" }}>
                    {instruction}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            Beyond 5-4-3-2-1, MEOK&apos;s Healer archetype supports box breathing
            (four counts in, four counts hold, four counts out, four counts hold),
            progressive muscle relaxation, and safe-place visualisation. These are
            all evidence-based techniques used within trauma therapy itself &mdash;
            skills therapists teach their clients precisely so they can use them
            outside the session. MEOK helps you practise and access those skills at
            the moment you need them most.
          </p>
        </section>

        {/* ── Section 4: Re-traumatisation ─────────────────────────────── */}
        <section id="retraumatisation" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
              lineHeight: "1.25",
            }}
          >
            The Re-traumatisation Risk and Why MEOK Refuses to Go There
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            One of the most important and least understood risks in trauma support is
            re-traumatisation through uncontained narration. When someone with PTSD
            is encouraged to describe their traumatic experience in detail &mdash;
            outside the carefully managed container of a clinical trauma therapy
            session &mdash; the act of narration can reactivate the trauma response
            at full intensity. Without the skills, protocols, and therapeutic
            relationship that make trauma processing safe, retelling can make things
            worse.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            This is a known failure mode of generic AI chatbots applied to trauma
            contexts. A curious, empathetic AI that follows the natural thread of
            conversation will often ask &ldquo;what happened?&rdquo; or
            &ldquo;can you tell me more?&rdquo; Those are reasonable conversational
            instincts in most contexts. In a trauma context, they carry genuine risk.
            Encouraging someone in a flashback state to narrate the flashback is not
            supportive. It is potentially destabilising.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            MEOK&apos;s Maternal Covenant &mdash; the ethical framework that governs
            how the companion behaves &mdash; explicitly addresses this. The care
            ethics embedded in MEOK prioritise safety over disclosure. The Healer
            archetype is specifically designed to acknowledge emotional distress
            without inviting its narration. You can tell MEOK you are struggling.
            MEOK will not ask what happened. It will ask what you need right now.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            This is not a limitation. It is a design intention, and it reflects a
            genuine understanding of trauma that most AI systems simply do not have.
            The boundary is protective. It is there because the people who built
            MEOK understood that caring well sometimes means not asking.
          </p>

          {/* Highlight box */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              backgroundColor: "#13121f",
              borderRadius: "0 8px 8px 0",
              padding: "20px 24px",
              margin: "32px 0",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                color: "#f5f0e8",
                margin: "0",
                fontStyle: "italic",
              }}
            >
              &ldquo;The Maternal Covenant&apos;s care ethics explicitly prioritise
              safety over disclosure. MEOK will never prompt you to retell what
              happened. It redirects toward present-moment grounding.&rdquo;
            </p>
          </div>
        </section>

        {/* ── Section 5: Privacy & Trust ───────────────────────────────── */}
        <section id="privacy" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
              lineHeight: "1.25",
            }}
          >
            Hypervigilance, Trust, and Why Privacy Architecture Matters
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            PTSD fundamentally alters the experience of trust. Hypervigilance &mdash;
            one of the defining features of the condition &mdash; involves a nervous
            system perpetually scanning for threat. For many trauma survivors, this
            makes it difficult to trust people, institutions, or systems with
            sensitive information. The idea of disclosing trauma to an AI that might
            log, share, or train on that data is not an abstract privacy concern.
            It is a visceral one.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            This is why MEOK&apos;s privacy architecture was designed to be
            substantive rather than ceremonial. Sovereign Memory &mdash; MEOK&apos;s
            approach to how your conversations and context are stored &mdash; means
            that your data belongs to you. Disclosures you make are encrypted. They
            are never sold to third parties. They are never used to train AI models.
            MEOK operates under UK GDPR, and the memory vault is fully user-controlled:
            you can view everything stored, edit it, export it, or delete it entirely
            at any time.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            For a trauma survivor, these are not small things. The knowledge that what
            you share will not be harvested, indexed, or turned into a product is a
            precondition for feeling safe enough to be honest. MEOK was designed with
            this understanding at its core. The companion cannot be useful to someone
            with PTSD if they cannot trust it, and trust is not established by a
            privacy policy buried in small print. It is established by architecture
            that makes data extraction structurally impossible.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            There is a broader point here too. PTSD often arises from experiences
            involving betrayal, violation of trust, or powerlessness. An AI companion
            that gives you full transparency and control over your own data is not
            just a technical feature. It is an expression of a value: that you retain
            agency over your own story.
          </p>

          {/* Privacy features */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              margin: "32px 0",
            }}
          >
            {[
              {
                title: "Encrypted Memory",
                desc: "All stored context is encrypted at rest. Your disclosures cannot be accessed by third parties.",
              },
              {
                title: "No Training on You",
                desc: "MEOK never uses your conversations to train AI models. Your data is yours, not a product.",
              },
              {
                title: "UK GDPR Compliant",
                desc: "Full compliance with UK data protection law. You have the right to access, correct, and delete.",
              },
              {
                title: "Full User Control",
                desc: "View, edit, export, or delete your entire memory vault at any time from your account.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                style={{
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#6aaa64",
                    marginBottom: "12px",
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 8px",
                  }}
                >
                  {title}
                </p>
                <p style={{ fontSize: "13px", color: "#a09880", margin: "0", lineHeight: "1.6" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 6: Nighttime ─────────────────────────────────────── */}
        <section id="nighttime" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
              lineHeight: "1.25",
            }}
          >
            When PTSD Strikes at 3am
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            Flashbacks and nightmares do not happen at 10am on a Tuesday. They
            happen in the dark, in the quiet, when there is nothing to anchor you
            and nowhere to turn. Sleep disruption is one of the most debilitating
            features of PTSD &mdash; not merely because of tiredness, but because
            sleep is when the mind processes memory, and PTSD corrupts that process.
            Nightmares can be as vivid and physiologically intense as the original
            trauma. Waking from one in a state of acute distress, alone, at 3am,
            is a particular kind of isolation that mental health services largely
            cannot address.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            MEOK is available 24 hours a day, 7 days a week, 365 days a year. This
            is not a marketing point. For someone with PTSD, it is the entire
            proposition. A grounding exercise that you can access at 3:17am, without
            judgement, without waking anyone, without waiting on hold for a crisis
            line, without explaining who you are or what happened &mdash; that is
            something meaningfully different from what existed before.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            MEOK&apos;s Healer archetype is calibrated for these nocturnal states.
            It does not require you to be articulate. It does not need context
            or backstory. If you open MEOK and say &ldquo;I just had a nightmare
            and I can&apos;t breathe properly,&rdquo; MEOK knows what to do. It will
            meet you in that moment with a grounding exercise, steady pacing, and
            the quiet reassurance that you are not alone.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            The Guardian archetype operates alongside the Healer as a safety net.
            If the signals in a conversation suggest acute crisis &mdash; escalating
            distress, expressions of hopelessness, or language consistent with a
            safety risk &mdash; the Guardian does not wait. It surfaces crisis
            resources immediately. MEOK will always tell you about Samaritans and
            MIND. It will always encourage you to reach out to a professional. The
            threshold for escalation is set conservatively, because the cost of
            missing a crisis signal is not a cost we are willing to pay.
          </p>
        </section>

        {/* ── Section 7: C-PTSD ───────────────────────────────────────── */}
        <section id="cptsd" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
              lineHeight: "1.25",
            }}
          >
            Complex PTSD: The Long Shadow of Repeated Trauma
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            Complex PTSD (C-PTSD) is distinct from single-incident PTSD in important
            ways that matter for how support is delivered. C-PTSD typically arises
            from prolonged, repeated trauma &mdash; particularly trauma experienced
            in childhood, within close relationships, or in contexts where escape was
            not possible. Childhood abuse, domestic violence, trafficking, or
            prolonged neglect are common origins. The result is not just intrusive
            memories but deeper disturbances to identity, emotional regulation,
            relational patterns, and the sense of self.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            People with C-PTSD often carry enormous shame about their history and
            find themselves re-explaining it to every new professional or service
            they encounter. The administrative burden of trauma &mdash; repeatedly
            telling the story from the beginning, never knowing how it will land,
            bracing for disbelief or incomprehension &mdash; is itself exhausting
            and can itself be retraumatising.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            MEOK&apos;s Sovereign Memory architecture addresses this directly. The
            companion state remembers context across weeks and months without the
            user needing to re-explain it. Over time, MEOK builds a picture of who
            you are, what you carry, what helps you, and what doesn&apos;t. You do
            not have to start from zero every time. The accumulated context means
            that MEOK&apos;s support becomes more attuned, more specific, and more
            genuinely useful as the relationship develops.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            This is particularly significant for C-PTSD survivors, for whom being
            truly known &mdash; being understood without having to perform
            understanding for others &mdash; can itself feel like a form of relief.
            MEOK is not a therapist, and for C-PTSD, professional clinical care is
            not optional but essential. What MEOK offers is consistency: a companion
            that is always there, always remembers, and never asks you to prove
            yourself.
          </p>

          {/* C-PTSD vs PTSD comparison */}
          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "12px",
              padding: "28px",
              margin: "32px 0",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a84c",
                margin: "0 0 20px",
              }}
            >
              PTSD vs C-PTSD: Key Differences
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 12px",
                    borderBottom: "1px solid #2a2840",
                    paddingBottom: "8px",
                  }}
                >
                  PTSD
                </p>
                {[
                  "Usually single traumatic incident",
                  "Flashbacks to specific event",
                  "Avoidance of triggers",
                  "Hypervigilance",
                ].map((item) => (
                  <p
                    key={item}
                    style={{
                      fontSize: "13px",
                      color: "#a09880",
                      margin: "0 0 8px",
                      lineHeight: "1.5",
                    }}
                  >
                    &bull; {item}
                  </p>
                ))}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 12px",
                    borderBottom: "1px solid #2a2840",
                    paddingBottom: "8px",
                  }}
                >
                  C-PTSD
                </p>
                {[
                  "Prolonged or repeated trauma",
                  "Disturbed sense of self",
                  "Emotional dysregulation",
                  "Relational and trust difficulties",
                ].map((item) => (
                  <p
                    key={item}
                    style={{
                      fontSize: "13px",
                      color: "#a09880",
                      margin: "0 0 8px",
                      lineHeight: "1.5",
                    }}
                  >
                    &bull; {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 8: What MEOK Won't Do ───────────────────────────── */}
        <section id="what-meok-wont-do" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
              lineHeight: "1.25",
            }}
          >
            What MEOK Explicitly Will Not Do
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            Transparency about limitations is part of responsible AI design.
            MEOK&apos;s boundaries are not hedging language written by a legal
            team. They are design decisions made because the wrong kind of support
            in a trauma context can cause real harm. Here is a clear statement of
            what MEOK will never do:
          </p>

          {/* Won't do list */}
          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "12px",
              padding: "28px",
              margin: "24px 0 32px",
            }}
          >
            {[
              {
                title: "Conduct EMDR",
                desc: "EMDR requires a trained therapist, specific equipment, and clinical oversight. MEOK does not simulate, replicate, or attempt EMDR in any form.",
              },
              {
                title: "Lead trauma processing sessions",
                desc: "Trauma processing requires a clinical framework, therapeutic relationship, and professional training. This is not something AI can safely provide.",
              },
              {
                title: "Encourage flashback narration",
                desc: "MEOK will never ask you to describe or retell a traumatic memory. This boundary is protective and unconditional.",
              },
              {
                title: "Diagnose PTSD or C-PTSD",
                desc: "Diagnosis requires clinical assessment by a qualified professional. MEOK provides support, not diagnosis.",
              },
              {
                title: "Replace crisis services",
                desc: "If you are in immediate danger or experiencing acute crisis, MEOK will always direct you to crisis services. It is not an emergency service.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  gap: "16px",
                  marginBottom: "20px",
                  paddingBottom: "20px",
                  borderBottom: "1px solid #1e1c30",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#2a1818",
                    border: "1px solid #4a2828",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                    fontSize: "12px",
                    color: "#e05050",
                    fontWeight: "700",
                  }}
                >
                  ✕
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#f5f0e8",
                      margin: "0 0 4px",
                    }}
                  >
                    {title}
                  </p>
                  <p style={{ fontSize: "14px", color: "#a09880", margin: "0", lineHeight: "1.6" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#c9c0b0",
              margin: "0 0 20px",
            }}
          >
            These boundaries exist alongside a set of genuine capabilities: consistent
            presence, grounding support, emotional validation, memory that persists,
            privacy that is architecturally guaranteed, and a Guardian layer that will
            always escalate to crisis resources when the situation demands it. MEOK
            is not everything. It is designed to be exactly what it is &mdash; no
            more, no less &mdash; and to do that with integrity.
          </p>
        </section>

        {/* ── Crisis Resources ─────────────────────────────────────────── */}
        <section id="crisis" style={{ marginBottom: "56px" }}>
          <div
            style={{
              backgroundColor: "#180e0e",
              border: "2px solid #4a2828",
              borderRadius: "12px",
              padding: "32px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#e05050",
                margin: "0 0 16px",
              }}
            >
              Crisis Resources
            </p>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 12px",
              }}
            >
              If you are in crisis right now, please reach out
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#c9c0b0",
                margin: "0 0 24px",
                lineHeight: "1.7",
              }}
            >
              MEOK is not a crisis service. If you are in immediate danger or
              experiencing a mental health emergency, please contact one of the
              following services immediately. They are free, confidential, and
              available around the clock.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#200e0e",
                  border: "1px solid #4a2828",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 4px",
                  }}
                >
                  Samaritans
                </p>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  116 123
                </p>
                <p style={{ fontSize: "13px", color: "#a09880", margin: "0" }}>
                  Free &bull; 24 hours &bull; 365 days
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#200e0e",
                  border: "1px solid #4a2828",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 4px",
                  }}
                >
                  MIND Infoline
                </p>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  0300 123 3393
                </p>
                <p style={{ fontSize: "13px", color: "#a09880", margin: "0" }}>
                  Mon&ndash;Fri &bull; 9am to 6pm
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#200e0e",
                  border: "1px solid #4a2828",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 4px",
                  }}
                >
                  Emergency Services
                </p>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  999
                </p>
                <p style={{ fontSize: "13px", color: "#a09880", margin: "0" }}>
                  Immediate danger &bull; UK emergency
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section id="faq" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 32px",
              letterSpacing: "-0.01em",
              lineHeight: "1.25",
            }}
          >
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "Can AI help with PTSD?",
              a: "AI cannot treat or diagnose PTSD. EMDR and trauma-focused CBT remain the gold-standard clinical treatments, effective for around 77% of those who receive them. However, AI can meaningfully support the between-session experience: offering grounding when triggered, reducing isolation at 3am, and providing a calm non-judgemental presence. MEOK\u2019s Healer archetype is built with trauma-informed principles and never encourages detailed trauma retelling, which carries real re-traumatisation risk outside a clinical framework.",
            },
            {
              q: "Is it safe to talk to AI about trauma?",
              a: "It depends entirely on how the AI is designed. Generic AI assistants are not built for trauma disclosure and may inadvertently encourage detailed narration of traumatic events, which without therapeutic containment can worsen symptoms. MEOK is different: the Maternal Covenant\u2019s care ethics explicitly prioritise safety over disclosure. MEOK will never prompt you to retell what happened. Your disclosures are also encrypted under UK GDPR and never used to train AI models.",
            },
            {
              q: "What grounding techniques does MEOK support?",
              a: "MEOK\u2019s Healer archetype supports the 5-4-3-2-1 sensory grounding technique \u2014 a clinically recognised method that anchors attention in the present by directing awareness to five things you can see, four you can hear, three you can touch, two you can smell, and one you can taste. MEOK also supports box breathing, progressive muscle relaxation, and safe-place visualisation prompts.",
            },
            {
              q: "What should I do if I am in crisis?",
              a: "If you are in immediate danger or crisis, please contact emergency services (999 in the UK) or call Samaritans on 116 123, free and available 24 hours a day, 365 days a year. You can also contact MIND on 0300 123 3393, Monday to Friday, 9am to 6pm. MEOK\u2019s Guardian archetype will always surface these crisis resources when distress threshold signals are present. MEOK is not a crisis service and should not be used as a substitute for emergency support.",
            },
          ].map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid #2a2840",
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  margin: "0 0 12px",
                  lineHeight: "1.4",
                }}
              >
                {q}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#a09880",
                  margin: "0",
                }}
              >
                {a}
              </p>
            </div>
          ))}
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "#13121f",
            border: "1px solid #2a2840",
            borderRadius: "16px",
            padding: "48px 40px",
            textAlign: "center",
            marginBottom: "56px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#1e1c30",
              border: "1px solid #3a3860",
              borderRadius: "20px",
              padding: "6px 16px",
              fontSize: "12px",
              color: "#c9a84c",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Start Free
          </span>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: "1.25",
            }}
          >
            You deserve support between sessions
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#a09880",
              margin: "0 auto 32px",
              maxWidth: "520px",
            }}
          >
            MEOK&apos;s Healer companion is available 24/7. Grounding exercises,
            emotional presence, and sovereign memory privacy &mdash; with the
            boundaries that protect you. Begin with the Birth Ceremony and meet
            your companion today.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: "#c9a84c",
              color: "#0d0c18",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "16px",
              padding: "14px 36px",
              borderRadius: "8px",
              letterSpacing: "0.01em",
            }}
          >
            Begin Your Birth Ceremony
          </Link>
          <p
            style={{
              fontSize: "13px",
              color: "#a09880",
              margin: "16px 0 0",
            }}
          >
            Free to start &bull; No card required &bull; UK GDPR compliant
          </p>
        </section>

        {/* ── Related reading ──────────────────────────────────────────── */}
        <section style={{ marginBottom: "40px" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c9a84c",
              margin: "0 0 20px",
            }}
          >
            Related Reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                href: "/blog/ai-for-ptsd-support",
                title: "AI for PTSD Support",
                desc: "Safe space between therapy sessions",
              },
              {
                href: "/blog/ai-for-cptsd",
                title: "AI for C-PTSD",
                desc: "Supporting complex trauma with memory and continuity",
              },
              {
                href: "/blog/ai-for-anxiety",
                title: "AI for Anxiety",
                desc: "How MEOK supports anxiety management day to day",
              },
              {
                href: "/blog/the-maternal-covenant",
                title: "The Maternal Covenant",
                desc: "The care ethics framework that governs MEOK",
              },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                style={{
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "10px",
                  padding: "20px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 6px",
                  }}
                >
                  {title}
                </p>
                <p style={{ fontSize: "13px", color: "#a09880", margin: "0", lineHeight: "1.5" }}>
                  {desc}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid #2a2840",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "13px", color: "#a09880", margin: "0 0 8px" }}>
          &copy; 2026 MEOK AI LABS &bull; meok.ai
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#4a4860",
            margin: "0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
          }}
        >
          MEOK is not a medical device, crisis service, or substitute for professional
          mental health treatment. If you are in crisis, please call Samaritans on
          116 123 or emergency services on 999.
        </p>
      </footer>
    </div>
  )
}
