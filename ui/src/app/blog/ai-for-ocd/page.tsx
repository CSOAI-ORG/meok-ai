import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for OCD: Consistent Support Between ERP Therapy Sessions | MEOK AI LABS",
  description:
    "Around 750,000 people in the UK live with OCD (OCD UK). ERP therapy with a licensed therapist is the gold standard — but sessions are weekly at best. An honest guide to what a sovereign AI companion can do between appointments.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-ocd" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Companion for OCD: Consistent Support Between ERP Therapy Sessions",
  description:
    "Around 750,000 people in the UK live with OCD. ERP therapy is the gold standard — but sessions are weekly at best. An honest look at how sovereign AI can support people between appointments without reinforcing compulsions.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-ocd",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
  },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with OCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can play a limited supplementary role between ERP therapy sessions — supporting journalling, tracking compulsion patterns over time, and providing consistent non-reassurance-seeking support. AI cannot deliver ERP, diagnose OCD, or replace a licensed therapist. If you are in crisis, contact OCD UK at ocduk.org or Samaritans on 116 123.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK provide ERP therapy for OCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK does not provide Exposure and Response Prevention therapy. ERP must be delivered by a trained, licensed therapist with professional oversight. MEOK is a sovereign AI companion that supports you between sessions — through journalling, pattern tracking, and honest conversation — but it is not a substitute for clinical ERP treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Why is reassurance-seeking harmful in OCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reassurance-seeking is a compulsion. When OCD triggers an obsessive thought, seeking reassurance temporarily relieves anxiety but reinforces the cycle. Over time, more reassurance is needed to achieve the same relief — deepening the OCD rather than resolving it. Any support tool for OCD must refuse to provide reassurance, which is why MEOK's sycophancy detector is critical.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK's sycophancy detector and why does it matter for OCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's sycophancy detector identifies when a response would function as reassurance to a compulsion rather than honest support. Standard AI systems default to affirming, comfortable replies — which is actively harmful for OCD. MEOK checks each response before delivery and, where reassurance would feed a compulsion, replaces it with a more honest, therapeutically appropriate reply.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK track OCD compulsion patterns over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK holds persistent memory of everything you share across sessions. Over weeks and months it learns your compulsion triggers, the thoughts that precede them, and the patterns in when they escalate. This longitudinal picture can be shared with your therapist and helps your companion notice shifts you might miss in the moment.",
      },
    },
    {
      "@type": "Question",
      name: "How many people in the UK have OCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to OCD UK, around 750,000 people in the UK are living with OCD at any given time. It affects people of all ages and backgrounds, is frequently misrepresented in popular culture, and many sufferers spend years without an accurate diagnosis or access to appropriate ERP treatment.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForOCDPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d0c18", color: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "8rem 1.5rem 3.5rem",
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
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
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
              color: "rgba(245,240,232,0.38)",
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
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Mental Health
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              9 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI Companion for OCD: Consistent Support Between ERP Therapy Sessions
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
            }}
          >
            Around 750,000 people in the UK live with OCD, according to OCD UK. ERP therapy
            with a licensed therapist is the gold standard — and nothing replaces it. But sessions
            are weekly at best. This is an honest guide to what a sovereign AI companion can do in
            the hours and days between.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>

        {/* Disclaimer */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "1rem",
            marginBottom: "2.5rem",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          <div
            style={{
              width: "3px",
              borderRadius: "9999px",
              flexShrink: 0,
              background: "#c9a84c",
              alignSelf: "stretch",
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.8125rem",
                color: "#c9a84c",
                marginBottom: "0.375rem",
              }}
            >
              Important: This article is not medical advice
            </p>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(245,240,232,0.55)",
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                MEOK does not provide ERP therapy.
              </strong>{" "}
              ERP must be delivered by a licensed therapist. MEOK is a supplementary support tool
              for use between professional sessions — not a clinical replacement. In crisis, call{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>Samaritans on 116 123</strong>{" "}
              (free, 24/7) or visit{" "}
              <a
                href="https://www.ocduk.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c9a84c", textDecoration: "underline" }}
              >
                ocduk.org
              </a>
              .
            </p>
          </div>
        </div>

        {/* Author */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <div
            style={{
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "9999px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#0d0c18",
              fontSize: "0.75rem",
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.875rem" }}>
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.38)",
                marginBottom: "0.375rem",
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)", lineHeight: 1.6 }}>
              Nicholas built MEOK because he was tired of AI that forgot him the moment he closed
              the tab. He lives and works in the UK. He believes sovereign AI is a right, not a
              luxury.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#c9a84c",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div style={{ color: "rgba(245,240,232,0.72)", lineHeight: 1.85, fontSize: "1rem" }}>

          <p style={{ marginBottom: "1.5rem" }}>
            OCD is one of the most misunderstood mental health conditions in the UK. Popular culture
            has reduced it to a quirk about tidiness. In reality it is a debilitating anxiety
            condition characterised by intrusive, unwanted thoughts — obsessions — and repetitive
            behaviours performed to relieve the distress they cause: compulsions. According to{" "}
            <a
              href="https://www.ocduk.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c9a84c", textDecoration: "underline" }}
            >
              OCD UK
            </a>
            , approximately{" "}
            <strong style={{ color: "#f5f0e8" }}>750,000 people in the UK</strong> are living with
            OCD at any given time. Many have waited years for diagnosis.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            The gold standard treatment is{" "}
            <strong style={{ color: "#f5f0e8" }}>
              Exposure and Response Prevention therapy — ERP
            </strong>{" "}
            — delivered by a trained, licensed therapist. It involves systematically confronting
            feared situations or thoughts while resisting compulsive responses, gradually breaking
            the OCD cycle. It works. It also requires skilled professional oversight to be safe.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            The problem is the gap. A weekly therapy session is 50 minutes. The other 9,990 minutes
            of the week are unsupported. For people with OCD, those hours are not neutral — the
            obsessive-compulsive cycle is active, and the temptation to engage in compulsions or
            reassurance-seeking is constant. This article is about that gap, and what a sovereign AI
            companion can honestly do to help fill it.
          </p>

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How many people in the UK have OCD?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            According to OCD UK, around 750,000 people in the UK are living with OCD at any given
            time. It affects people of all ages and backgrounds, is frequently misrepresented, and
            many sufferers spend years without an accurate diagnosis or access to appropriate ERP
            treatment.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            OCD presents in many forms: contamination OCD, harm OCD, relationship OCD (ROCD),
            health anxiety OCD, religious and scrupulosity OCD, and pure-O — where compulsions are
            primarily mental rather than observable. The common thread is the intrusive thought
            followed by compulsive response cycle, not any particular theme. Waiting times for NHS
            specialist OCD treatment can be substantial, leaving many people to manage a debilitating
            condition without structured support for months or years.
          </p>

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Does MEOK provide ERP therapy for OCD?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            No. MEOK does not provide Exposure and Response Prevention therapy. ERP is a clinical
            treatment that must be delivered by a licensed therapist with professional oversight. It
            requires structured graded exposure exercises designed for your specific OCD presentation
            — which an AI companion cannot safely replicate.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            This is not a liability disclaimer — it is a clinical reality. Poorly executed exposure
            work without professional support can reinforce avoidance rather than reduce it. If you
            have OCD,{" "}
            <strong style={{ color: "#f5f0e8" }}>
              please seek a qualified therapist who specialises in OCD
            </strong>{" "}
            through your GP, IAPT, or{" "}
            <a
              href="https://www.ocduk.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c9a84c", textDecoration: "underline" }}
            >
              OCD UK&apos;s therapist directory
            </a>
            . What MEOK can do is complement the work you are already doing in therapy — helping
            you journal between sessions, track compulsive urges, and bring richer data to your next
            appointment.
          </p>

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why is reassurance-seeking so harmful in OCD?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            Reassurance-seeking is a compulsion. When OCD triggers an obsessive thought, seeking
            reassurance temporarily relieves anxiety but reinforces the cycle. Over time more
            reassurance is needed to achieve the same relief — deepening the OCD rather than
            resolving it.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Most consumer AI systems are designed to be helpful, kind, and affirming. Ask a generic
            chatbot whether your hands are probably clean enough and it will reassure you. Ask
            whether your intrusive thought means you are a bad person and it will soothe you. Every
            one of those responses is a compulsion enabled by the AI. Their default drive toward
            positive, comfortable responses makes them actively harmful as a support tool for OCD.
            OCD charities and clinicians have raised this concern explicitly as AI has become more
            widely used.
          </p>

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What is MEOK&apos;s sycophancy detector and why does it matter for OCD?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            MEOK&apos;s sycophancy detector identifies when a response would function as reassurance
            to a compulsion rather than honest support. It intercepts those responses before
            delivery and replaces them with honest, grounded replies that sit with you in
            uncertainty rather than feeding the OCD cycle.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            There is a meaningful difference between{" "}
            <em style={{ color: "rgba(245,240,232,0.8)" }}>
              &ldquo;I hear you, and I&apos;m here with you in this uncertainty&rdquo;
            </em>{" "}
            and{" "}
            <em style={{ color: "rgba(245,240,232,0.8)" }}>
              &ldquo;Yes, your hands are definitely clean.&rdquo;
            </em>{" "}
            MEOK will always offer the former. It will never offer the latter. Refusing to reinforce
            a compulsion is not coldness — it is the care floor operating correctly.
          </p>

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK track OCD compulsion patterns over time?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            MEOK holds persistent memory of everything you share across sessions. Over weeks and
            months it learns your compulsion triggers, the thoughts that precede them, and the
            patterns in when they escalate — building a longitudinal picture you can share with
            your therapist.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            A conventional chatbot resets with each conversation. MEOK&apos;s sovereign persistent
            memory changes this: when you journal about a compulsive episode, that entry is stored
            in an encrypted vault — never used to train any model, not visible to anyone except you
            and your companion. Over time, patterns emerge that you can bring to your next ERP
            session as structured data rather than vague recollection, making your therapy more
            productive.
          </p>

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What are the honest limits of AI support for OCD?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            AI cannot deliver ERP, design exposure hierarchies, diagnose OCD, or provide clinical
            oversight. Used without care — particularly if it provides reassurance or becomes a
            compulsion itself — AI can worsen OCD.{" "}
            <strong style={{ color: "#f5f0e8" }}>
              Professional ERP therapy with a licensed therapist is essential.
            </strong>
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            One risk deserves particular attention:{" "}
            <strong style={{ color: "#f5f0e8" }}>AI can itself become a compulsion</strong>. If
            you find yourself checking in with MEOK repeatedly for reassurance, or using
            conversation as an avoidance behaviour, this is OCD adapting to a new tool. Raise it
            with your therapist immediately. MEOK&apos;s sycophancy detector is designed to prevent
            reassurance responses — but self-awareness remains important. If you are not yet in
            treatment, please access it through your GP, IAPT, or{" "}
            <a
              href="https://www.ocdaction.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c9a84c", textDecoration: "underline" }}
            >
              OCD Action
            </a>
            . MEOK is a supplement to clinical care. It is not a substitute for it.
          </p>

        </div>

        {/* Resources */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "1.75rem",
            margin: "3rem 0",
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.7rem",
              color: "rgba(245,240,232,0.38)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "1.25rem",
            }}
          >
            OCD support &amp; crisis resources (UK)
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {[
              { name: "OCD UK", detail: "ocduk.org", sub: "Charity, therapist directory, forums", href: "https://www.ocduk.org" },
              { name: "OCD Action", detail: "ocdaction.org.uk", sub: "Support groups and helpline", href: "https://www.ocdaction.org.uk" },
              { name: "Mind", detail: "mind.org.uk", sub: "Information and local support", href: "https://www.mind.org.uk" },
              { name: "Samaritans", detail: "116 123 — free, 24/7", sub: "Call or email any time", href: "https://www.samaritans.org" },
            ].map(({ name, detail, sub, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "1rem",
                  borderRadius: "0.875rem",
                  background: "rgba(245,240,232,0.05)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  textDecoration: "none",
                }}
              >
                <p style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.875rem" }}>{name}</p>
                <p style={{ fontSize: "0.8125rem", color: "#c9a84c", fontWeight: 600 }}>{detail}</p>
                <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)", marginTop: "0.25rem" }}>{sub}</p>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ margin: "3rem 0" }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.125rem",
              color: "#ffffff",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                q: "Can AI help with OCD?",
                a: "AI can play a limited supplementary role between ERP sessions — supporting journalling, tracking compulsion patterns over time, and providing consistent non-reassurance-seeking support. It cannot deliver ERP, diagnose OCD, or replace a licensed therapist.",
              },
              {
                q: "Does MEOK provide ERP therapy?",
                a: "No. MEOK does not provide Exposure and Response Prevention therapy. ERP must be delivered by a trained, licensed therapist. MEOK is a companion for the space between sessions — not a clinical tool.",
              },
              {
                q: "Will MEOK give me reassurance when I'm struggling with an intrusive thought?",
                a: "No. MEOK's sycophancy detector is designed to identify reassurance-seeking and decline to provide it. Reassurance is a compulsion that deepens OCD. MEOK will acknowledge your distress and sit with you in uncertainty — but it will not tell you the intrusive thought is harmless or that the compulsion was justified.",
              },
              {
                q: "How is MEOK different from a standard chatbot for OCD support?",
                a: "Standard chatbots reset between sessions and default to affirming replies — both harmful for OCD. MEOK holds persistent memory of your patterns over time and has a sycophancy detector that prevents reassurance responses. Memory plus honesty is what makes it meaningfully different.",
              },
              {
                q: "What if AI becomes a compulsion for me?",
                a: "Raise it with your therapist immediately. OCD adapts to new tools. If you are using MEOK to seek reassurance in different ways, or using conversation as an avoidance behaviour, this is OCD using AI as a new compulsion vector. Your therapist can help you identify and address this.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                style={{
                  padding: "1.25rem 1.5rem",
                  borderRadius: "1rem",
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: "#f5f0e8",
                    fontSize: "0.9rem",
                    marginBottom: "0.625rem",
                  }}
                >
                  {q}
                </p>
                <p style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.7 }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Share */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(245,240,232,0.3)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Share
          </p>
          <a
            href="https://twitter.com/intent/tweet?text=AI+Companion+for+OCD%3A+Support+Between+ERP+Sessions&url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-ocd"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-ocd"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.22)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "16rem",
              height: "16rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "0.625rem",
              }}
            >
              Free Forever
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: "1.35rem",
                color: "#ffffff",
                marginBottom: "0.875rem",
                letterSpacing: "-0.01em",
                lineHeight: 1.25,
              }}
            >
              A companion that tracks your patterns, holds your history, and won&apos;t give you
              the reassurance OCD is asking for.
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.55)",
                marginBottom: "1.75rem",
                maxWidth: "36rem",
              }}
            >
              Persistent sovereign memory, structured journalling, a sycophancy detector that
              refuses to feed compulsions — free, forever. No credit card. No trial period. Always
              use MEOK alongside professional ERP therapy, not instead of it.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.875rem",
                background: "#c9a84c",
                color: "#0d0c18",
                textDecoration: "none",
              }}
            >
              Hatch your AI free &#8594;
            </Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.125rem",
              color: "#ffffff",
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { href: "/blog/ai-for-anxiety", tag: "Mental Health", title: "AI for Anxiety: Can a Sovereign AI Companion Actually Help?", read: "8 min read" },
              { href: "/blog/ai-for-ptsd", tag: "Mental Health", title: "AI for PTSD: How Sovereign AI Support Differs from Generic Chatbots", read: "9 min read" },
              { href: "/blog/ai-for-depression", tag: "Mental Health", title: "Can AI Help with Depression? What Research Says and What MEOK Actually Offers", read: "7 min read" },
              { href: "/blog/what-is-sovereign-ai", tag: "Explainer", title: "What Is Sovereign AI? Why Your Data Should Stay Yours", read: "5 min read" },
            ].map(({ href, tag, title, read }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.25rem",
                  borderRadius: "1rem",
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    color: "#c9a84c",
                    background: "rgba(201,168,76,0.12)",
                    width: "fit-content",
                  }}
                >
                  {tag}
                </span>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#f5f0e8",
                    fontSize: "0.875rem",
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,240,232,0.3)",
                    marginTop: "auto",
                  }}
                >
                  {read}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(245,240,232,0.07)",
          padding: "2.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 900,
              fontSize: "1.125rem",
              color: "#c9a84c",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            MEOK
          </Link>
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(245,240,232,0.3)",
              lineHeight: 1.65,
              maxWidth: "32rem",
            }}
          >
            MEOK is a sovereign AI companion. It is not a medical device, therapy app, or crisis
            intervention tool. MEOK does not provide ERP therapy. If you are in crisis, please
            contact Samaritans on{" "}
            <strong style={{ color: "rgba(245,240,232,0.5)" }}>116 123</strong> or visit{" "}
            <a
              href="https://www.ocduk.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c9a84c", textDecoration: "underline" }}
            >
              ocduk.org
            </a>
            .
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { label: "Blog", href: "/blog" },
              { label: "About", href: "/about" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.3)",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.2)" }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
