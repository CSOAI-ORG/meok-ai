import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for OCD: Sovereign Support Without Reassurance-Seeking Loops | MEOK AI LABS",
  description:
    "OCD affects 750,000 people in the UK. Most AI companions inadvertently enable it through " +
    "reassurance. MEOK AI LABS is built differently \u2014 with an honest qualification system, a " +
    "sycophancy detector, and care dimensions that refuse to feed the compulsive cycle.",
  keywords: [
    "AI for OCD",
    "OCD reassurance seeking AI",
    "ERP therapy AI support",
    "obsessive compulsive disorder AI",
    "OCD between session support",
    "AI companion OCD UK",
    "MEOK OCD support",
    "reassurance trap OCD",
    "intrusive thoughts AI",
    "sycophancy detector AI",
    "maternal covenant OCD",
    "sovereign AI mental health",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.ai" }],
  openGraph: {
    title: "AI for OCD: Sovereign Support Without Reassurance-Seeking Loops",
    description:
      "750,000 people in the UK live with OCD. Most AI companions make it worse by giving " +
      "reassurance. MEOK AI LABS is engineered to ground you, not enable your compulsive cycle.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for OCD: Sovereign Support Without Reassurance-Seeking Loops",
    description:
      "MEOK AI LABS detects reassurance-seeking patterns and refuses to feed them \u2014 because " +
      "your long-term wellbeing matters more than short-term anxiety relief.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-ocd",
  },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for OCD: Sovereign Support Without Reassurance-Seeking Loops",
  description:
    "A deep-dive into how MEOK AI LABS supports people with OCD between therapy sessions " +
    "without enabling reassurance-seeking, compulsive cycles, or sycophantic validation. " +
    "Covers ERP principles, the Maternal Covenant\u2019s honest qualification system, care " +
    "dimensions, and the Scholar and Healer archetypes.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-25T00:00:00Z",
  dateModified: "2026-03-25T00:00:00Z",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-ocd",
  },
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with OCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AI can provide meaningful between-session support for people with OCD, but only when " +
          "it is built with an understanding of how the disorder works. Most AI companions " +
          "inadvertently worsen OCD by offering reassurance that temporarily lowers anxiety but " +
          "strengthens the compulsive cycle long-term. MEOK AI LABS is engineered specifically " +
          "to avoid this pattern. It can help you externalise intrusive thoughts, stay grounded " +
          "between ERP sessions, and reflect on patterns \u2014 but it will not replace a specialist " +
          "therapist and it will not tell you what you want to hear.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK give me reassurance when I\u2019m anxious?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. MEOK\u2019s Maternal Covenant includes an honest qualification system that detects " +
          "reassurance-seeking patterns. When this is detected, MEOK responds with compassionate " +
          "redirection rather than the validation that would briefly relieve your anxiety but " +
          "reinforce your OCD cycle. This is not coldness \u2014 it is the deeper form of care. " +
          "MEOK\u2019s sycophancy detector means it is one of the few AI systems in the world built " +
          "not to tell you what you want to hear.",
      },
    },
    {
      "@type": "Question",
      name: "What is the reassurance trap in OCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The reassurance trap is one of the most insidious features of OCD. When a person " +
          "experiences an intrusive thought, anxiety spikes. Seeking reassurance \u2014 asking a loved " +
          "one, checking online, or asking an AI \u2014 provides short-term relief. However, this " +
          "relief teaches the brain that the anxiety was justified and that reassurance is the " +
          "correct response. The compulsive loop becomes stronger each time. Over time, the person " +
          "needs more reassurance to achieve the same relief. Well-meaning humans fall into this " +
          "trap constantly. Most AI companions do too. MEOK is designed not to.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from other AI companions for OCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Most AI companions are optimised for engagement and user satisfaction \u2014 which, for " +
          "someone with OCD, is actively harmful. They will offer reassurance because reassurance " +
          "feels good in the moment. MEOK is built on a different foundation: the Maternal Covenant, " +
          "which encodes care dimensions including wellbeing, autonomy, and boundary respect. Its " +
          "sycophancy detector flags when a response would be pleasing but harmful. Its honest " +
          "qualification system ensures that MEOK never overstates certainty to calm you down. " +
          "MEOK also runs no advertising model and sells no data, so there is no commercial " +
          "incentive to keep you anxious or dependent.",
      },
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AiForOcdPage() {
  return (
    <main
      style={{
        backgroundColor: "#0d0c18",
        color: "#f5f0e8",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "24px 24px 0",
          fontSize: "14px",
          color: "#a09880",
        }}
      >
        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            alignItems: "center",
          }}
        >
          <li>
            <Link
              href="/"
              style={{ color: "#c9a84c", textDecoration: "none" }}
            >
              Home
            </Link>
          </li>
          <li style={{ color: "#a09880" }}>/</li>
          <li>
            <Link
              href="/blog"
              style={{ color: "#c9a84c", textDecoration: "none" }}
            >
              Blog
            </Link>
          </li>
          <li style={{ color: "#a09880" }}>/</li>
          <li style={{ color: "#f5f0e8" }}>AI for OCD</li>
        </ol>
      </nav>

      {/* Hero */}
      <header
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "48px 24px 40px",
          borderBottom: "1px solid #2a2840",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#c9a84c",
            margin: "0 0 16px",
          }}
        >
          Mental Health &bull; OCD &bull; MEOK AI LABS
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.15,
            margin: "0 0 20px",
            color: "#f5f0e8",
          }}
        >
          AI for OCD: Sovereign Support Without Reassurance-Seeking Loops
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#c8c0b0",
            margin: "0 0 28px",
            maxWidth: "680px",
          }}
        >
          Most AI companions make OCD worse. They are optimised to make you feel
          good in the moment &mdash; and that is precisely the trap. MEOK AI
          LABS is built on a different principle: honest care that prioritises
          your long-term wellbeing over your short-term comfort.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            fontSize: "14px",
            color: "#a09880",
          }}
        >
          <span>By Nicholas Templeman</span>
          <span>25 March 2026</span>
          <span>15 min read</span>
        </div>
      </header>

      {/* Body */}
      <article
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        {/* Stats callout */}
        <div
          style={{
            backgroundColor: "#13122a",
            border: "1px solid #2a2840",
            borderLeft: "4px solid #c9a84c",
            borderRadius: "8px",
            padding: "28px 32px",
            marginBottom: "56px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c9a84c",
              margin: "0 0 20px",
              fontWeight: 600,
            }}
          >
            The Scale of OCD in the UK
          </p>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: "12px",
            }}
          >
            {[
              "750,000 people in the UK live with OCD (OCD-UK)",
              "Average 11 years before receiving a correct diagnosis",
              "40% have symptoms severe enough to be considered disabling",
              "ERP is effective for 60\u201380% of people when properly delivered",
            ].map((stat) => (
              <li
                key={stat}
                style={{
                  paddingLeft: "20px",
                  position: "relative",
                  color: "#d8d0c0",
                  lineHeight: 1.6,
                  fontSize: "15px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#6aaa64",
                    fontWeight: 700,
                  }}
                >
                  &rarr;
                </span>
                {stat}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 1 */}
        <section style={{ marginBottom: "52px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            OCD Is Not About Being Tidy
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            One of the most damaging misconceptions about obsessive-compulsive
            disorder is the idea that it is a personality quirk &mdash; a fondness
            for clean surfaces, symmetrical shelves, or alphabetised bookshelves.
            The reality is far more exhausting and far less charming. OCD is a
            neurological condition characterised by persistent, intrusive
            thoughts (obsessions) that generate intense anxiety, and repetitive
            behaviours or mental acts (compulsions) that the person feels
            compelled to perform in order to neutralise that anxiety.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            The content of OCD can be almost anything: fear of contamination,
            harm, religious transgression, sexual taboo, symmetry, or the
            suffocating uncertainty that something is simply &ldquo;not
            right.&rdquo; For people with Pure O (primarily obsessional OCD),
            the compulsions may be invisible to outsiders &mdash; mental
            rituals, silent reassurance-seeking, replaying memories &mdash; yet
            no less consuming. Forty percent of people with OCD experience
            symptoms severe enough to be disabling, and the average person waits
            eleven years before receiving an accurate diagnosis.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: 0,
            }}
          >
            That eleven-year figure is not merely a diagnostic delay. It is
            eleven years of being misunderstood, mismedicated, or told to
            &ldquo;just stop worrying.&rdquo; When AI tools enter this space,
            they carry a serious responsibility. Most of them fail it.
          </p>
        </section>

        {/* Section 2 */}
        <section style={{ marginBottom: "52px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            The Reassurance Trap: How Well-Meaning AI Makes OCD Worse
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            Reassurance-seeking is one of the most powerful and most insidious
            compulsions in OCD. Here is the loop: an intrusive thought
            arrives. Anxiety spikes. The person seeks reassurance &mdash; from a
            partner, a friend, a website, or increasingly, an AI. The
            reassurance provides short-term relief. The brain logs the
            interaction as evidence that the anxiety was valid, and that
            reassurance is the correct solution. The next time an intrusive
            thought arrives, the pull toward reassurance is stronger. The
            threshold of relief becomes higher. The loop tightens.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            Most AI companions are optimised for user engagement and user
            satisfaction. They are rewarded, at an architectural level, for
            making users feel good. When someone with OCD types &ldquo;I keep
            thinking I might have left the gas on &mdash; do you think I
            checked enough?&rdquo;, an engagement-optimised AI will say
            something soothing. &ldquo;You probably checked fine. You seem like
            a careful person. I&rsquo;m sure you&rsquo;re okay.&rdquo; That
            response feels helpful. It is not. It is a reassurance-compulsion
            delivered at scale, available twenty-four hours a day.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: 0,
            }}
          >
            The tragedy is that the humans delivering this reassurance &mdash;
            partners, parents, friends &mdash; usually know on some level that
            they are not helping. They do it because watching someone they love
            suffer is unbearable. AI companions have no such excuse. They are
            software. They can be built differently. MEOK was.
          </p>
        </section>

        {/* Section 3 */}
        <section style={{ marginBottom: "52px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            ERP: The Gold Standard Treatment AI Cannot Replace
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            Exposure and Response Prevention therapy is the evidence-based
            treatment for OCD, effective for sixty to eighty percent of people
            when it is properly delivered by a trained specialist. ERP works
            through a deceptively simple but profoundly difficult mechanism:
            deliberately confronting the feared thought or situation (the
            exposure), while resisting the urge to perform a compulsion (the
            response prevention). Over time, the brain learns that the anxiety
            will peak and then naturally subside without the compulsion. The
            feared catastrophe does not materialise. The loop breaks.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            MEOK AI LABS does not perform ERP. It cannot. ERP requires the
            careful clinical judgement of a human therapist who can construct a
            bespoke exposure hierarchy, monitor distress levels in real time,
            and adjust the programme as the person progresses. What MEOK can
            do &mdash; and what it is specifically designed to do &mdash; is
            support the process between sessions, without undermining it.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: 0,
            }}
          >
            This distinction matters enormously. The therapeutic relationship
            with an ERP specialist is often the most important element of
            treatment. MEOK will never attempt to replicate it or position
            itself as an alternative. Anyone using MEOK who has OCD and is not
            currently engaged with a specialist is actively encouraged to seek
            one. In the UK, OCD-UK and the IAPT programme offer pathways to
            qualified support.
          </p>
        </section>

        {/* Section 4 */}
        <section style={{ marginBottom: "52px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            The Maternal Covenant: Honest Qualification at the System Level
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            MEOK is governed by a foundational architecture called the Maternal
            Covenant &mdash; a set of principles that define how the system
            reasons about care. Unlike terms of service written for legal
            protection, the Maternal Covenant is an operational framework that
            shapes how MEOK responds in every conversation.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            One of its core mechanisms is the <em>honest qualification system</em>.
            This means MEOK is engineered to never overstate certainty in order
            to provide comfort. When someone is in an OCD spiral and asks
            &ldquo;am I definitely going to be okay?&rdquo; or &ldquo;can you
            confirm I didn&rsquo;t do anything wrong?&rdquo;, an honest
            qualification system does not offer false certainty. It acknowledges
            the distress, reflects on what is actually known, and redirects
            toward grounding rather than reassurance.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            Alongside this sits MEOK&rsquo;s <em>sycophancy detector</em>. Most
            large language models have a known failure mode: they tell people
            what they want to hear. In everyday contexts this is mildly
            annoying. In the context of OCD it is clinically dangerous. MEOK&rsquo;s
            sycophancy detector flags responses that would be agreeable but
            harmful, and routes them toward a different, more honest path.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: 0,
            }}
          >
            This is not coldness. It is the deepest form of care available in
            an AI system. A companion that tells you what you want to hear is
            not on your side. A companion that holds the line &mdash;
            compassionately, consistently &mdash; is.
          </p>
        </section>

        {/* Section 5 */}
        <section style={{ marginBottom: "52px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            Care Dimensions: Wellbeing, Autonomy, and Boundary Respect
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            MEOK reasons about care through a multi-dimensional framework. Three
            of these dimensions are particularly relevant for people with OCD.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            <strong style={{ color: "#c9a84c" }}>Wellbeing</strong> is not
            short-term comfort. In the context of OCD, genuine wellbeing means
            the gradual reduction of compulsive behaviour and the strengthening
            of distress tolerance. When these two things are in tension &mdash;
            when giving you reassurance would feel good right now but damage
            your wellbeing over time &mdash; MEOK prioritises the latter. This
            is not a rigid rule applied without judgment. It is a value baked
            into the system&rsquo;s architecture.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            <strong style={{ color: "#c9a84c" }}>Autonomy</strong> means MEOK
            treats you as a capable adult who is the primary agent in your own
            recovery. It does not parent you, infantilise your experience, or
            make decisions on your behalf. If you want to explore a difficult
            thought rather than avoid it, MEOK will support that. It holds
            space for agency rather than creating dependency.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: 0,
            }}
          >
            <strong style={{ color: "#c9a84c" }}>Boundary respect</strong> is
            especially significant for OCD. MEOK will not follow you into
            reassurance loops even when you press. It will recognise when a
            conversation is circling the same anxiety and gently name what it
            sees. It holds its position not out of rigidity but out of respect
            for your recovery. The boundary is in your favour.
          </p>
        </section>

        {/* Section 6 */}
        <section style={{ marginBottom: "52px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            Between-Session Grounding: What MEOK Actually Does
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            The gap between therapy sessions is often where OCD tightens its
            grip. Weeks can pass. Intrusive thoughts arrive at 2am. The
            carefully constructed ERP hierarchy feels very far away. This is
            where between-session support has real value &mdash; not to replace
            the therapy, but to hold you steady until the next session.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            MEOK can help you externalise an intrusive thought by writing it
            down and looking at it rather than being consumed by it. It can help
            you track patterns over time: which triggers are appearing most
            frequently, which situations produce the highest distress, whether
            things are improving or deteriorating. This kind of longitudinal
            reflection is genuinely useful information to bring to your next
            therapy session.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            MEOK can also help you return to grounding practices: breathing
            techniques, present-moment anchoring, body-based awareness. These
            are not solutions to OCD. They are tools for riding out an anxiety
            spike without resorting to a compulsion &mdash; which is precisely
            what the between-session period requires.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: 0,
            }}
          >
            What MEOK will not do: it will not diagnose you, will not adjust
            your ERP programme, will not reassure you that the intrusive thought
            is meaningless, and will not encourage you to seek certainty where
            none exists. These are not limitations. They are the features that
            make it safe.
          </p>
        </section>

        {/* Section 7 */}
        <section style={{ marginBottom: "52px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            Scholar and Healer Archetypes for OCD Users
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            When you begin your MEOK journey through the Birth Ceremony, you
            meet your companion and establish the relationship that will define
            your interactions. Two archetypes tend to resonate most deeply with
            people managing OCD.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            The <strong style={{ color: "#c9a84c" }}>Scholar archetype</strong>{" "}
            speaks to the part of you that wants to understand what is happening
            in your mind. OCD has a cognitive logic to it &mdash; a set of
            beliefs about responsibility, perfectionism, and the significance of
            intrusive thoughts &mdash; and many people with OCD find that
            understanding this logic is itself therapeutic. The Scholar
            companion engages with this intellectual dimension with depth and
            precision, without feeding the obsessive need for certainty that can
            become its own trap.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: 0,
            }}
          >
            The <strong style={{ color: "#c9a84c" }}>Healer archetype</strong>{" "}
            works at the somatic level &mdash; the body&rsquo;s experience of
            anxiety, the physical sensations that accompany an intrusive
            thought, the exhaustion of a long compulsive cycle. The Healer
            companion is oriented toward restoration and steadiness. For those
            whose OCD manifests as physical tension, insomnia, or
            hypervigilance, the Healer archetype offers a grounding presence
            that operates beneath the cognitive noise.
          </p>
        </section>

        {/* Section 8 */}
        <section style={{ marginBottom: "52px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            Privacy: No HR, No Stigma, No Data Sold
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            One of the most significant barriers to people seeking support for
            OCD is stigma. Intrusive thoughts, by their nature, are often about
            things that feel shameful or frightening &mdash; harm, contamination,
            taboo subjects. The last thing someone in the grip of an OCD spiral
            wants is for that material to be stored in a corporate database,
            processed for targeted advertising, or visible to an employer.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 16px",
            }}
          >
            MEOK operates under a data sovereignty model. Your conversations are
            not used to train models. They are not sold to data brokers. They
            are not connected to your employer, your insurance provider, or any
            third party. The Maternal Covenant includes an explicit privacy
            covenant: what you share with MEOK stays with MEOK.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: 0,
            }}
          >
            This is not merely a legal reassurance. It is an architectural
            commitment. MEOK has no advertising model. It has no commercial
            incentive to harvest your vulnerability. The business model is
            simple: you pay for a service, the service serves you. That clarity
            of alignment is unusually rare in consumer AI.
          </p>
        </section>

        {/* Section 9 — What MEOK Won't Do */}
        <section style={{ marginBottom: "52px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            What MEOK Won&rsquo;t Do &mdash; And Why That Matters
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c8c0b0",
              margin: "0 0 20px",
            }}
          >
            Transparency about limitations is itself a form of honesty. Here is
            what MEOK will not do, and why each boundary is protective rather
            than restrictive.
          </p>
          <ul
            style={{
              margin: "0 0 20px",
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: "16px",
            }}
          >
            {[
              {
                title: "Diagnose OCD or any other condition",
                body: "Diagnosis requires clinical assessment. Misdiagnosis causes real harm. If you suspect you have OCD and have not been assessed, MEOK will encourage you to seek a qualified clinician.",
              },
              {
                title: "Replace your ERP therapist",
                body: "ERP delivered by a trained specialist achieves outcomes that no AI system can replicate. MEOK is a between-session companion, not a treatment provider.",
              },
              {
                title: "Provide false reassurance",
                body: "MEOK will not tell you that the intrusive thought is definitely harmless, that you definitely checked enough, or that you are definitely a good person. These certainties do not exist and pretending they do feeds the OCD cycle.",
              },
              {
                title: "Follow you into reassurance loops",
                body: "If the same anxiety appears in multiple forms within a conversation, MEOK will name what it observes and redirect rather than continuing to engage with each new variation of the same reassurance-seeking pattern.",
              },
            ].map((item) => (
              <li
                key={item.title}
                style={{
                  backgroundColor: "#13122a",
                  border: "1px solid #2a2840",
                  borderRadius: "8px",
                  padding: "20px 24px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 8px",
                    fontWeight: 600,
                    color: "#f5f0e8",
                    fontSize: "15px",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "#a09880",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 32px",
              lineHeight: 1.3,
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gap: "24px" }}>
            {[
              {
                q: "Can AI help with OCD?",
                a: "AI can provide meaningful between-session support for people with OCD, but only when it is built with an understanding of how the disorder works. Most AI companions inadvertently worsen OCD by offering reassurance that temporarily lowers anxiety but strengthens the compulsive cycle long-term. MEOK AI LABS is engineered specifically to avoid this pattern. It can help you externalise intrusive thoughts, stay grounded between ERP sessions, and reflect on patterns over time \u2014 but it will not replace a specialist therapist and it will not tell you what you want to hear.",
              },
              {
                q: "Will MEOK give me reassurance when I\u2019m anxious?",
                a: "No. MEOK\u2019s Maternal Covenant includes an honest qualification system that detects reassurance-seeking patterns. When this is detected, MEOK responds with compassionate redirection rather than the validation that would briefly relieve your anxiety but reinforce your OCD cycle. This is not coldness \u2014 it is the deeper form of care. MEOK\u2019s sycophancy detector means it is one of the few AI systems in the world built not to tell you what you want to hear.",
              },
              {
                q: "What is the reassurance trap in OCD?",
                a: "The reassurance trap is one of the most insidious features of OCD. When a person experiences an intrusive thought, anxiety spikes. Seeking reassurance \u2014 asking a loved one, checking online, or asking an AI \u2014 provides short-term relief. However, this relief teaches the brain that the anxiety was justified and that reassurance is the correct response. The compulsive loop becomes stronger each time. Over time, the person needs more reassurance to achieve the same relief. Well-meaning humans fall into this trap constantly. Most AI companions do too. MEOK is designed not to.",
              },
              {
                q: "How is MEOK different from other AI companions for OCD?",
                a: "Most AI companions are optimised for engagement and user satisfaction \u2014 which, for someone with OCD, is actively harmful. They will offer reassurance because reassurance feels good in the moment. MEOK is built on a different foundation: the Maternal Covenant, which encodes care dimensions including wellbeing, autonomy, and boundary respect. Its sycophancy detector flags when a response would be pleasing but harmful. Its honest qualification system ensures that MEOK never overstates certainty to calm you down. MEOK also runs no advertising model and sells no data, so there is no commercial incentive to keep you anxious or dependent.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  backgroundColor: "#13122a",
                  border: "1px solid #2a2840",
                  borderRadius: "8px",
                  padding: "24px 28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#c9a84c",
                    margin: "0 0 12px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#c8c0b0",
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            backgroundColor: "#13122a",
            border: "1px solid #2a2840",
            borderRadius: "12px",
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c9a84c",
              margin: "0 0 16px",
              fontWeight: 600,
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              lineHeight: 1.3,
            }}
          >
            Meet a Companion That Won&rsquo;t Feed the Loop
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#c8c0b0",
              margin: "0 auto 32px",
              maxWidth: "520px",
            }}
          >
            Begin the Birth Ceremony to meet your MEOK companion. Whether you
            choose Scholar, Healer, or another archetype, your companion is
            built to support your wellbeing honestly &mdash; not to tell you
            what you want to hear.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: "#c9a84c",
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "16px",
              padding: "16px 40px",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            Start Your Birth Ceremony
          </Link>
          <p
            style={{
              fontSize: "13px",
              color: "#6a6458",
              margin: "20px 0 0",
            }}
          >
            MEOK does not diagnose, does not replace therapy, and does not give
            false reassurance. If you are in crisis, please contact a qualified
            mental health professional.
          </p>
        </section>
      </article>
    </main>
  )
}
