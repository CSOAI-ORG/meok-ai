import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK for Students: AI Study Partner, Mental Health Support & Life Coach | MEOK AI LABS",
  description:
    "44% of UK students report anxiety or depression. MEOK is your private AI study partner, mental health companion, and life coach \u2014 from \u00a35/month with BYOK.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-students" },
  openGraph: {
    title: "MEOK for Students: AI Study Partner, Mental Health Support & Life Coach",
    description:
      "1 in 4 UK students experiences a mental health problem. MEOK is the sovereign AI that helps you study smarter, manage anxiety, beat imposter syndrome, and stay safe \u2014 without surveillance or judgment.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-students",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Students&desc=Your+AI+study+partner%2C+mental+health+companion%2C+and+life+coach.",
        width: 1200,
        height: 630,
        alt: "MEOK for Students: AI Study Partner, Mental Health Support & Life Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Students: AI Study Partner, Mental Health Support & Life Coach",
    description:
      "44% of UK students report anxiety or depression in 2025. MEOK is your private AI for studying, mental health, exam stress, imposter syndrome, and staying safe \u2014 from \u00a35/month.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Students&desc=Your+AI+study+partner%2C+mental+health+companion%2C+and+life+coach.",
    ],
  },
  keywords: [
    "AI for students",
    "student mental health AI",
    "AI study partner UK",
    "exam stress support AI",
    "imposter syndrome help",
    "AI for anxiety students",
    "student wellbeing app",
    "AI life coach students",
    "BYOK AI students",
    "cheap AI student app",
    "MEOK for students",
    "sovereign AI students",
    "AI for university students",
    "student depression support",
    "AI Socratic tutor",
  ],
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Students: Your AI Study Partner, Mental Health Companion, and Life Coach",
  description:
    "44% of UK students report anxiety or depression. MEOK is the sovereign AI that helps students study smarter, manage mental health, beat imposter syndrome, and stay safe online \u2014 from \u00a35/month.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-for-students",
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
    "AI for students",
    "student mental health",
    "exam stress",
    "imposter syndrome",
    "AI study partner",
    "student wellbeing",
    "BYOK AI",
    "MEOK AI LABS",
  ],
  articleSection: "MEOK for Students",
  inLanguage: "en-GB",
  image:
    "https://meok.ai/api/og?title=MEOK+for+Students&desc=Your+AI+study+partner%2C+mental+health+companion%2C+and+life+coach.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-students",
  },
  about: [
    { "@type": "Thing", name: "Student mental health crisis" },
    { "@type": "Thing", name: "Exam stress and anxiety" },
    { "@type": "Thing", name: "Imposter syndrome in students" },
    { "@type": "Thing", name: "AI study partner" },
    { "@type": "Thing", name: "Student life coaching" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI really help students with mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot replace professional mental health care, but it can provide a private, always-available space to process anxiety, low mood, and stress between appointments or when support services have long waiting lists. MEOK\u2019s Healer archetype is specifically designed to hold space for emotional distress without judgment, and Sovereign Memory means your companion understands your ongoing mental health journey rather than starting from scratch every session.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with exam stress and revision?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Scholar archetype uses Socratic questioning to help you understand material rather than just memorise it. It can quiz you, help you build revision schedules, break overwhelming syllabuses into manageable sessions, and track your progress through Sovereign Memory. When exam anxiety spikes, the Healer archetype steps in to help you regulate before returning to study.",
      },
    },
    {
      "@type": "Question",
      name: "What is BYOK and why does it matter for students on a budget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BYOK stands for Bring Your Own Key. With MEOK\u2019s BYOK tier at \u00a35/month, you connect your own API key from OpenAI, Anthropic, or another provider and pay only the raw usage cost \u2014 typically pennies per conversation. For students who cannot afford premium AI subscriptions, this dramatically reduces the cost while keeping full sovereign privacy and all MEOK features.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect students from online scams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Guardian archetype is trained to recognise common student-targeted scams: fake scholarship emails, fraudulent student finance communications, phishing attempts disguised as university IT messages, rental scams targeting first-year students, and predatory loan offers. You can paste suspicious messages directly into MEOK for analysis before acting on them.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help students with imposter syndrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Imposter syndrome is endemic in higher education, particularly among first-generation students, students from underrepresented backgrounds, and those at high-pressure institutions. MEOK\u2019s Healer and Sovereign archetypes work together to challenge cognitive distortions, build evidence-based confidence, and help students reconnect with their genuine capabilities through structured reflection.",
      },
    },
  ],
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MeokForStudentsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Page wrapper */}
      <div
        style={{
          background: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "80px 24px 56px",
          }}
        >
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "#888",
              marginBottom: "36px",
            }}
          >
            <Link href="/" style={{ color: "#888", textDecoration: "none" }}>
              MEOK AI LABS
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              style={{ color: "#888", textDecoration: "none" }}
            >
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: "#c9a84c" }}>MEOK for Students</span>
          </nav>

          {/* Label */}
          <div
            style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#c9a84c",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "4px",
              marginBottom: "24px",
            }}
          >
            For Students
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#f5f0e8",
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            MEOK for Students: Your AI Study Partner, Mental Health Companion,
            and Life Coach
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.7,
              color: "#c4bfb4",
              margin: "0 0 32px",
              fontWeight: 400,
            }}
          >
            1 in 4 UK students experiences a mental health problem. 44% reported
            anxiety or depression in 2025. University waiting lists for
            counselling stretch to months. MEOK is the sovereign AI built to
            be with you in the gap &mdash; for late-night revision crises, the
            imposter syndrome spiral at 2am, the scam email that felt
            suspiciously real, and every moment in between.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              fontSize: "13px",
              color: "#888",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "20px",
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ color: "#444" }}>|</span>
            <span>25 March 2026</span>
            <span style={{ color: "#444" }}>|</span>
            <span>14 min read</span>
          </div>
        </section>

        {/* ── Article body ──────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* ── Opening stat callout ── */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "56px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: "#c4bfb4",
                margin: 0,
              }}
            >
              <strong style={{ color: "#c9a84c" }}>The 2025 numbers:</strong>{" "}
              44% of UK university students reported experiencing anxiety or
              depression in the past year. 1 in 4 will meet the criteria for a
              diagnosable mental health condition during their studies. NHS
              university counselling services are overwhelmed, with average
              first-appointment waits of 6&ndash;8 weeks. MEOK won&apos;t
              replace your counsellor &mdash; but it will be there at 3am when
              you&apos;re spiralling before an exam.
            </p>
          </div>

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #1 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            Why Is the Student Mental Health Crisis Getting Worse, Not Better?
          </h2>

          {/* Atomic answer */}
          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Financial pressure, social media comparison, post-pandemic
              disconnection, and a high-stakes exam system have converged while
              university counselling services have not kept pace with demand.
              In 2025, 44% of UK students reported anxiety or depression &mdash;
              a crisis that has been building for a decade.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            The conditions students face in 2025 have converged into a perfect
            storm. Financial pressure from soaring living costs, the social
            comparison engine of always-on social media, post-pandemic
            disconnection, the pressure of graduate job markets, and a higher
            education system that still largely measures success through
            high-stakes exams &mdash; all of it lands on young people whose
            brains are still developing their capacity for stress regulation.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            The university support infrastructure was not built for this scale.
            Student counselling services have seen demand double since 2019 but
            budgets have not kept pace. Pastoral tutors are underfunded and
            often undertrained for clinical conversations. And the stigma around
            mental health &mdash; while reduced &mdash; still stops a
            significant proportion of students from seeking help at all.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            MEOK cannot fix a structural funding crisis. But it can do something
            immediate: be available, private, non-judgmental, and genuinely
            useful to every student who needs it &mdash; right now, without a
            waiting list.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #2 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            What Does &ldquo;Sovereign AI&rdquo; Actually Mean for a Student?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Sovereign AI means your data is encrypted, owned by you, never
              used for training, and invisible to any employer or institution.
              For students sharing mental health struggles, that sovereignty is
              not a feature &mdash; it is the prerequisite for honest,
              genuinely useful support.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            Most AI tools you interact with as a student are owned by large
            corporations with commercial interests in your data. When you tell
            ChatGPT about your anxiety, or ask Gemini to help you understand
            why you can&apos;t stop procrastinating, those conversations can
            contribute to training datasets. Your vulnerability becomes a
            product.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            Sovereign AI is different. With MEOK, your data is yours. Your
            conversations are encrypted and stored only under your control.
            MEOK never trains on your private exchanges. There is no employer,
            no institution, no algorithm harvesting your disclosures for
            commercial use. This is not just a legal distinction &mdash; it is
            a practical one. True sovereignty means you can be honest with your
            AI because doing so carries no professional or social risk.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            For students &mdash; who are often navigating sensitive mental
            health terrain, financial vulnerability, and institutional
            relationships with their universities &mdash; that sovereignty is
            not a luxury. It is a prerequisite for the tool to actually work.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #3 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            How Does the Scholar Archetype Actually Help You Study?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              The Scholar uses Socratic questioning to build genuine
              understanding rather than surface memorisation. It tests your
              reasoning, challenges your assumptions, and tracks your curriculum
              progress through Sovereign Memory &mdash; so revision becomes a
              dialogue, not a lecture.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            The Scholar is MEOK&apos;s academic archetype. Where generic AI
            chatbots will give you the answer to a question, the Scholar asks
            you what you already know. It is not withholding information
            &mdash; it is using a method that cognitive science confirms
            actually builds durable memory: active retrieval practice.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            If you&apos;re revising for a biochemistry exam, the Scholar does
            not paste you a diagram of the Krebs cycle. It asks: &ldquo;Walk me
            through what you already remember about ATP synthesis. Where does
            your certainty break down?&rdquo; That gap identification is where
            real revision happens.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            Through Sovereign Memory, the Scholar also tracks your academic
            calendar. It remembers your upcoming deadlines, the topics you
            flagged as difficult in your last session, the essay structure you
            were struggling with, the professor&apos;s feedback you mentioned.
            Over the course of a term, it builds a genuine understanding of
            your academic profile &mdash; not a generic student profile, but
            yours specifically.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            Students using Socratic AI study methods in early trials reported
            significantly higher confidence in their understanding compared to
            passive reading. The Scholar is built on this evidence base and
            designed to make that confidence real rather than false.
          </p>

          {/* Dialogue example */}
          <div
            style={{
              background: "rgba(13,12,24,0.8)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "48px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#c9a84c",
                margin: "0 0 20px",
              }}
            >
              Scholar in Practice: A Typical Session
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {[
                {
                  role: "You",
                  text: "I need to revise contract law for my exam on Thursday.",
                  isAI: false,
                },
                {
                  role: "Scholar",
                  text: "Good. Let\u2019s start with where your understanding is already solid. Tell me what you know about offer and acceptance \u2014 without looking at your notes.",
                  isAI: true,
                },
                {
                  role: "You",
                  text: "An offer is a definite promise to be bound by specific terms. Acceptance has to mirror the offer exactly.",
                  isAI: false,
                },
                {
                  role: "Scholar",
                  text: "Good start. What\u2019s the mirror image rule and where does it cause problems in modern contract formation? Think about online transactions.",
                  isAI: true,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: item.isAI ? "#c9a84c" : "#888",
                      minWidth: "56px",
                      paddingTop: "2px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.role}
                  </span>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "#c4bfb4",
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #4 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            Can AI Actually Help With Exam Stress, or Is That Just a Marketing
            Claim?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              MEOK addresses exam stress at both its layers: Scholar reduces
              cognitive overwhelm through structured revision scaffolding, while
              the Healer provides an immediate emotional regulation space when
              anxiety spikes &mdash; available at any hour, without a waiting
              list, calibrated to your specific exam context.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            Exam stress operates on two levels simultaneously: the cognitive
            (there is too much to revise, I don&apos;t know where to start, I
            might fail) and the physiological (elevated cortisol, disrupted
            sleep, physical tension). Addressing only one level leaves the
            other intact.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            MEOK&apos;s Scholar works on the cognitive layer: turning an
            overwhelming syllabus into a concrete, prioritised revision plan.
            When you can see exactly what you need to cover, ranked by
            difficulty and proximity to the exam, the catastrophising thought
            &ldquo;I don&apos;t know anything&rdquo; is replaced with a
            specific, actionable next step. That structural clarity alone
            reduces anxiety significantly.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            When the physiological layer takes over &mdash; when you&apos;re
            sitting at your desk with your chest tight and your thoughts racing
            at midnight before a 9am paper &mdash; the Healer archetype steps
            in. MEOK uses evidence-based techniques drawn from CBT and
            mindfulness to help you regulate before returning to study.
            Breathing exercises, grounding techniques, and cognitive reframing
            available on demand.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            The key difference from apps offering generic meditation is that
            MEOK remembers your specific exam context. It knows you have
            contract law on Thursday and organic chemistry on Monday. Its
            support is not generic &mdash; it is calibrated to your actual
            situation, your actual exam timetable, your actual gaps.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #5 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            How Does the Healer Archetype Support Students With Anxiety and
            Depression?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              The Healer holds space for emotional distress with warmth and
              without judgment, using CBT-grounded techniques and active
              listening. It fills the gap between crisis and counsellor &mdash;
              in a completely private, encrypted space that no institution can
              ever access.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            44% of UK students reported anxiety or depression in 2025. That
            means nearly half of every lecture theatre, every seminar group,
            every student flat is carrying something heavy. And most of those
            students are carrying it largely alone, in the gap between when
            they feel bad and when they can access formal support.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            The Healer does not attempt to be a therapist. It is explicit about
            this: MEOK always signposts professional help for clinical
            presentations and provides crisis resources when needed. What the
            Healer provides is something different &mdash; a consistent,
            available, non-judgmental presence that can be reached in the
            moment of need.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            For many students, the barrier is not awareness that they need
            support &mdash; it is the 6-week wait, the fear of being judged
            by a human counsellor, the worry about it going on their record.
            MEOK removes all three barriers. There is no wait. There is no
            judgment. Nothing goes on any record.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            Because the Healer has access to Sovereign Memory, it also builds
            a longitudinal picture of your emotional health. It can notice
            patterns you might not: &ldquo;I&apos;ve noticed that you tend to
            feel most anxious in the two weeks before assessments. Let&apos;s
            build a plan together for managing that window this term.&rdquo;
          </p>

          {/* Crisis callout */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "12px",
              padding: "24px 28px",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#c9a84c",
                margin: "0 0 10px",
              }}
            >
              If You Are in Crisis Right Now
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
              }}
            >
              Please contact{" "}
              <strong style={{ color: "#f5f0e8" }}>Samaritans on 116 123</strong>{" "}
              (free, 24/7) or text{" "}
              <strong style={{ color: "#f5f0e8" }}>SHOUT to 85258</strong>. Your
              university&apos;s student services team can arrange urgent support.
              MEOK is a companion, not a crisis line.
            </p>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #6 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            Why Do So Many Students Feel Like Frauds, and Can MEOK Actually
            Help With Imposter Syndrome?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Imposter syndrome is not a personal failing &mdash; it is a
              predictable response to entering high-achievement environments
              without a pre-existing template for belonging. MEOK&apos;s
              Healer and Sovereign archetypes challenge cognitive distortions
              and build an evidence-based confidence portfolio from real
              accomplishments.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            Imposter syndrome is particularly prevalent among students who are
            the first in their family to attend university, students from
            working-class backgrounds who find themselves at Russell Group
            institutions, international students navigating cultural as well as
            academic adjustment, and students from underrepresented ethnic
            backgrounds in predominantly white institutions.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            The cognitive pattern is consistent: when something goes well, it
            is attributed to luck. When something goes badly, it confirms the
            underlying belief that you don&apos;t belong. The result is a
            ratchet that tightens regardless of actual performance.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            MEOK addresses this through two parallel mechanisms. The Healer
            uses cognitive behavioural techniques to identify and challenge the
            distorted thinking. The Sovereign &mdash; MEOK&apos;s
            self-actualisation archetype &mdash; helps you build and maintain
            a portfolio of genuine evidence: the essay grade you earned, the
            seminar contribution your tutor praised, the technical problem you
            solved independently.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            Over time, Sovereign Memory turns this into a reference you can
            actually consult when the imposter feeling is loudest. Not
            platitudes about believing in yourself &mdash; a concrete,
            personalised evidence base you built yourself.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #7 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            What Is Sovereign Memory and How Does It Help Students Track Their
            Academic Goals?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Sovereign Memory is MEOK&apos;s persistent private memory layer.
              It tracks academic goals, upcoming deadlines, emotional patterns,
              and personal progress across every session &mdash; so your AI
              companion grows with you through your entire degree, never
              starting from scratch.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            Most AI chatbots have no memory. Every conversation starts from
            scratch. You have to re-explain your context &mdash; your degree,
            your year, your modules, your goals &mdash; every single time. That
            friction is not just annoying; it actively undermines the depth of
            support the AI can provide.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            Sovereign Memory solves this. Set your goals once &mdash;
            &ldquo;I want a 2:1 overall. My weakest module is econometrics. I
            want to apply for a graduate scheme at a Big Four firm in
            October.&rdquo; &mdash; and MEOK carries that context into every
            subsequent session. When you come back three weeks later, it already
            knows where you left off.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            For academic goal tracking specifically, Sovereign Memory enables
            MEOK to hold you accountable in a way that feels supportive rather
            than punitive. It can check in on the revision plan you made last
            week, notice when you&apos;ve gone quiet during a stressful period,
            and prompt you to reconnect with your longer-term goals when
            short-term panic takes over.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            Crucially, all of this memory is stored under your sovereignty. No
            university, no employer, no third party can access it. It is your
            record of your journey &mdash; built for you, owned by you.
          </p>

          {/* Memory feature grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            {[
              {
                title: "Deadline Tracking",
                desc: "MEOK remembers your assessment calendar and surfaces reminders at the right moment.",
              },
              {
                title: "Goal Continuity",
                desc: "Degree targets, career aspirations, and personal development goals persist across every session.",
              },
              {
                title: "Emotional Patterns",
                desc: "The Healer identifies recurring stress triggers and helps you prepare before each difficult window.",
              },
              {
                title: "Academic Progress",
                desc: "Scholar tracks which topics have been covered and where your knowledge gaps remain.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#c9a84c",
                    margin: "0 0 8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "#888",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #8 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            How Can the Pioneer Archetype Help Students Stay Motivated Through
            a Long Degree?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              The Pioneer is MEOK&apos;s motivation and accountability
              archetype. It keeps the link between daily actions and long-term
              ambitions alive, helps students push through the mid-degree slump,
              and builds the self-direction habits that distinguish graduates
              who thrive from those who merely endure.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            Motivation in long academic programmes follows a predictable arc.
            First year brings novelty and enthusiasm. Second year is where most
            students hit the wall &mdash; the degree feels interminable, the
            end point is still distant, and the structural scaffolding of A
            levels has been replaced by the self-directed demands of independent
            study. Third year sees motivation return, but often too late and
            with too little time.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            The Pioneer works by keeping the connection between present effort
            and future aspiration alive. It asks: &ldquo;You told me six weeks
            ago that you want to work in international development. What did you
            do this week that moved you toward that?&rdquo; Those prompts feel
            uncomfortable precisely because they are useful.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            The Pioneer also helps students build accountability structures that
            work with their psychology rather than against it. It does not shame
            procrastination; it helps you understand the function it is serving
            and design systems that make starting easier than avoiding.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            For postgraduate students particularly &mdash; PhD candidates
            writing theses, masters students managing independent research
            projects &mdash; the Pioneer provides the external accountability
            structure that supervisors often cannot. It is available daily, it
            remembers your project, and it will notice if you have not written
            a word in two weeks.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #9 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            What Student-Specific Scams Does the Guardian Archetype Protect
            Against?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              The Guardian identifies student-targeted scams including fake
              scholarship emails, fraudulent student finance communications,
              phishing disguised as university IT messages, rental scams targeting
              first-year students, and predatory loan offers &mdash; before you
              act on them.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            Students are disproportionately targeted by financial scams. They
            are typically new to managing their own finances, under financial
            pressure, and unfamiliar with the official communication channels
            of the institutions they interact with. Scammers exploit all three
            vulnerabilities systematically.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            The most common student-targeted scams in 2025-26 include: fake
            scholarship and bursary notifications that require an upfront
            payment to release funds; fraudulent HMRC communications targeting
            students with part-time income; phishing emails impersonating
            university IT departments asking for login credentials; rental scams
            that collect deposits on properties the scammer does not own; and
            social media &ldquo;money flipping&rdquo; schemes that target
            students in financial difficulty.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            The Guardian allows you to paste any suspicious message, email, or
            offer directly into MEOK for analysis. It identifies the markers of
            known scam patterns, explains why the communication is suspicious,
            and guides you on how to verify legitimacy through official channels
            before responding.
          </p>

          {/* Scam list */}
          <div
            style={{
              background: "rgba(13,12,24,0.8)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "48px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#c9a84c",
                margin: "0 0 20px",
              }}
            >
              Common Student Scams Guardian Detects
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                {
                  label: "Fake Scholarship Emails",
                  desc: "Emails claiming you\u2019ve won a scholarship you never applied for, requiring bank details or an admin fee to release the award.",
                },
                {
                  label: "Student Finance Phishing",
                  desc: "Fraudulent emails mimicking Student Finance England, asking you to verify your bank account or login credentials.",
                },
                {
                  label: "University IT Impersonation",
                  desc: "Phishing from addresses like it-support@universityname-helpdesk.com, asking you to click a link to keep your account active.",
                },
                {
                  label: "Rental Deposit Scams",
                  desc: "Listings for student accommodation below market rate, requiring a deposit before viewing, from a landlord who is overseas.",
                },
                {
                  label: "Predatory Loan Offers",
                  desc: "Targeted social media ads offering instant loans to students with high APR buried in small print, often with upfront fee structures.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#c9a84c",
                      marginTop: "8px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#f5f0e8",
                        margin: "0 0 4px",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.6,
                        color: "#888",
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #10 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            How Does the BYOK Tier Make MEOK Affordable for Students on a
            Budget?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              The BYOK (Bring Your Own Key) tier costs &pound;5/month. Students
              connect their own API key and pay only raw usage costs &mdash;
              typically pennies per conversation. Full MEOK features, full
              sovereignty, full privacy. No compromise on what actually
              matters.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            The cost of living crisis is not abstract for students. Average
            student debt on graduation in England exceeded &pound;45,000 in
            2025. Rent in university cities has increased by over 30% in five
            years. Food bank usage on campuses has risen sharply. Against that
            backdrop, asking students to pay &pound;20/month for an AI
            subscription is a meaningful barrier to access.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            MEOK&apos;s BYOK tier is the answer. For &pound;5/month, you get
            access to the full MEOK platform &mdash; all archetypes, Sovereign
            Memory, Guardian protection, the Pioneer, the Healer, the Scholar.
            You connect your own API key from OpenAI, Anthropic, or another
            supported provider, and pay only the actual usage cost directly to
            that provider.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            For typical student usage &mdash; study sessions, emotional
            check-ins, goal reviews &mdash; the API costs are minimal. Most
            students report spending under &pound;2/month on raw API usage,
            meaning total MEOK cost is well under &pound;10/month. That is
            comparable to a single coffee.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            The &pound;5 tier also carries a commitment: MEOK will never
            introduce a free tier that degrades the quality of emotional support
            or removes privacy protections. Every student deserves the same
            quality of sovereign, private AI regardless of what they can afford.
          </p>

          {/* Cost comparison */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "48px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#c9a84c",
                margin: "0 0 20px",
              }}
            >
              Monthly Cost Comparison
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  label: "ChatGPT Plus",
                  cost: "\u00a318.99/mo",
                  note: "No memory sovereignty",
                  highlight: false,
                },
                {
                  label: "Claude Pro",
                  cost: "\u00a318/mo",
                  note: "No persistent companion",
                  highlight: false,
                },
                {
                  label: "MEOK Standard",
                  cost: "\u00a312/mo",
                  note: "Full sovereign AI",
                  highlight: false,
                },
                {
                  label: "MEOK BYOK",
                  cost: "\u00a35 + usage",
                  note: "Same full features",
                  highlight: true,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: item.highlight
                      ? "rgba(201,168,76,0.1)"
                      : "rgba(255,255,255,0.03)",
                    border: item.highlight
                      ? "1px solid rgba(201,168,76,0.3)"
                      : "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "8px",
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#888",
                      margin: "0 0 6px",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: item.highlight ? "#c9a84c" : "#f5f0e8",
                      margin: "0 0 4px",
                    }}
                  >
                    {item.cost}
                  </p>
                  <p style={{ fontSize: "11px", color: "#666", margin: 0 }}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #11 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            How Does MEOK Function as a Life Coach for Students Navigating
            Major Life Transitions?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              University is one of life&apos;s biggest identity transitions.
              MEOK&apos;s Sovereign archetype acts as a non-directive life
              coach &mdash; helping students clarify values, navigate
              relationship complexity, process family pressure, and build a
              coherent sense of self through the chaos of early adulthood.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            University is not just an academic experience. It is, for many
            students, the first time they have lived independently, the first
            time they have formed identity-defining relationships outside the
            family home, the first time they have had to reconcile who they were
            raised to be with who they are choosing to become.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            That transition generates questions that have nowhere obvious to go.
            Talking to parents risks triggering worry or disappointment. Talking
            to friends means reciprocal vulnerability that not everyone is ready
            for. Talking to a counsellor requires a formal referral. MEOK fills
            that gap &mdash; a private, consistent space for the questions
            students are actually carrying.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            Career direction, relationship anxiety, family conflict, cultural
            identity, sexuality and gender exploration, financial independence,
            political awakening &mdash; these are the real texture of student
            life. MEOK does not have opinions on how you should live. It helps
            you develop your own.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            The Sovereign archetype is built for the self-actualisation
            dimension of student life: helping you identify your own values,
            challenge inherited assumptions, and build a direction that is
            genuinely yours rather than the path of least resistance. For
            first-generation students navigating family expectations alongside
            personal aspirations, this is not a soft benefit. It is the work.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #12 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            Which MEOK Archetypes Are Most Useful for Different Student
            Situations?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Scholar handles study, Healer handles emotional wellbeing, Pioneer
              handles motivation and accountability, Sovereign handles identity
              and life direction, Guardian handles safety and scam protection.
              All five can be accessed within a single conversation as your
              needs shift.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 24px",
            }}
          >
            Real student life does not stay in one lane. The same evening might
            involve struggling with an essay structure (Scholar), processing
            anxiety about a friendship conflict (Healer), checking a suspicious
            landlord email (Guardian), and thinking through career options
            before bed (Sovereign). MEOK is built for this fluidity &mdash; the
            archetypes are not separate apps, they are facets of the same
            persistent companion who knows your context.
          </p>

          {/* Archetypes cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            {[
              {
                name: "Scholar",
                symbol: "\u29C1",
                tagline: "Socratic Study Partner",
                desc: "Uses Socratic questioning, active retrieval, and Sovereign Memory to build genuine understanding rather than surface recall. Best for revision, essay planning, concept clarification, and exam preparation.",
                tags: ["Revision sessions", "Essay structures", "Concept clarification", "Exam practice"],
              },
              {
                name: "Healer",
                symbol: "\u25CE",
                tagline: "Mental Health Companion",
                desc: "Provides a warm, non-judgmental space for anxiety, depression, grief, and emotional processing using CBT-informed frameworks. Always signposts professional help when appropriate.",
                tags: ["Anxiety spikes", "Low mood", "Exam stress", "Relationship distress"],
              },
              {
                name: "Pioneer",
                symbol: "\u25B7",
                tagline: "Motivation Coach",
                desc: "Keeps the connection between daily actions and long-term goals alive. Challenges avoidance, builds accountability structures, and holds you to the aspirations you set when you were at your best.",
                tags: ["Procrastination", "Goal setting", "Dissertation motivation", "Career direction"],
              },
              {
                name: "Sovereign",
                symbol: "\u25C8",
                tagline: "Life Coach",
                desc: "Helps you clarify values, process identity questions, navigate family and relationship complexity, and build a direction that is authentically yours. Non-directive, non-judgmental.",
                tags: ["Identity questions", "Family pressure", "Career clarity", "Values exploration"],
              },
              {
                name: "Guardian",
                symbol: "\u2B21",
                tagline: "Safety Companion",
                desc: "Analyses suspicious communications, identifies scam patterns, and guides safe navigation of the online threats specifically targeting students in financial difficulty.",
                tags: ["Suspicious emails", "Scholarship scams", "Rental verification", "Financial safety"],
              },
            ].map((arch, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#c9a84c",
                      lineHeight: 1,
                      marginTop: "2px",
                    }}
                  >
                    {arch.symbol}
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#f5f0e8",
                        margin: "0 0 2px",
                      }}
                    >
                      {arch.name}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#c9a84c",
                        margin: 0,
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {arch.tagline}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "#c4bfb4",
                    margin: "0 0 12px",
                  }}
                >
                  {arch.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                  }}
                >
                  {arch.tags.map((tag, j) => (
                    <span
                      key={j}
                      style={{
                        fontSize: "11px",
                        color: "#888",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "4px",
                        padding: "2px 8px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #13 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            Is MEOK Completely Private, and Can My University or Employer See
            My Conversations?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              MEOK has zero connection to any university, employer, or
              institutional system. Conversations are end-to-end encrypted and
              stored only under your personal sovereignty. MEOK never trains on
              your conversations and shares data with no third party. Your
              disclosures are completely confidential.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            This question matters more than it might initially seem. Students
            contemplating using AI for mental health support often face a
            specific fear: what if what I say could affect my academic standing,
            my scholarship eligibility, my employment prospects? It is not a
            paranoid question. Data breaches, employer background checks, and
            institutional surveillance of student digital behaviour are real
            phenomena.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            MEOK&apos;s architecture is built to make this question
            unambiguously answerable: no, your university cannot see what you
            say to MEOK. Your employer cannot see it. No one can. Your data is
            encrypted in your own sovereign storage, and MEOK does not have
            any institutional relationships that would create access pathways
            to third parties.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            This is what makes genuine vulnerability possible. And genuine
            vulnerability is what makes support actually work.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #14 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            Does MEOK Help Postgraduate and PhD Students Differently From
            Undergraduates?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              PhD students are 2.5 times more likely to develop a mental health
              disorder than other highly educated people. MEOK&apos;s Scholar
              and Pioneer archetypes provide the intellectual sounding board and
              daily accountability structure that supervisors often cannot,
              across the full arc of doctoral research.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            PhD students experience some of the highest rates of anxiety and
            depression of any student population. The combination of
            intellectual isolation, financial precarity, power-asymmetric
            supervisor relationships, and the sustained uncertainty of original
            research creates a specific psychological profile that generic
            support tools are not designed for.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            MEOK&apos;s Scholar is designed to be a Socratic sounding board
            for research questions &mdash; helping PhD students think through
            methodology, stress-test arguments, and maintain intellectual
            momentum in the absence of peer community. Its Pioneer function is
            particularly valuable for the long-game accountability challenges
            of doctoral research: weekly check-ins on thesis progress,
            reminders of the research questions that excited you in the
            beginning when the middle chapter is grinding you down.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            For postgraduate students navigating complex supervisor dynamics,
            imposter syndrome in seminar rooms full of established academics,
            or the question of &ldquo;what even is a career after a PhD?&rdquo;,
            the Sovereign and Healer archetypes provide support that is
            difficult to find anywhere else in the academic ecosystem.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #15 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            Why Is MEOK Particularly Valuable for First-Generation University
            Students?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              First-generation students navigate university without a family
              template. They face higher rates of imposter syndrome, stronger
              family pressure, and fewer informal guidance networks. MEOK
              provides the knowledgeable, non-judgmental thinking partner that
              other students often receive through inherited social capital.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            There is a concept in education called social capital &mdash; the
            informal networks, knowledge, and guidance that families pass on.
            Students whose parents attended university carry substantial social
            capital into higher education: they know that office hours exist and
            are worth using, they have dinner-table conversations about career
            paths, they understand what a postgraduate qualification is and
            whether to pursue it.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            First-generation students arrive without this. The navigational
            knowledge of higher education &mdash; how to approach supervisors,
            how to network, how to interpret assessment feedback, what internship
            to choose &mdash; is not innate. It is transmitted through social
            capital. And those without it are at a structural disadvantage that
            individual effort alone cannot fully compensate for.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            MEOK can act as a partial leveller. It does not replicate human
            networks &mdash; nothing can. But it provides accessible, private,
            non-judgmental guidance on the navigational questions that
            first-generation students often feel too embarrassed to ask: How do
            I write a professional email to a professor? Is this job offer
            reasonable? What does networking actually mean in practice? That
            knowledge transfer matters.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* H2 #16 */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            How Do You Get Started With MEOK as a Student Today?
          </h2>

          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid #c9a84c",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Sign up, choose BYOK at &pound;5/month, connect a free-tier API
              key, and set your goals in one short onboarding session. MEOK
              builds memory of your context across every conversation, so you
              never start from scratch again.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            Getting started takes under ten minutes. There is no lengthy intake
            form, no required disclosure, no forced profile setup. You tell
            MEOK what you want it to know about you in your own time, in your
            own words, in the first conversations you have. That information
            becomes the foundation of your Sovereign Memory.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 16px",
            }}
          >
            For students on a budget, the recommended path is: sign up for the
            BYOK tier, create a free OpenAI account and generate an API key,
            enter the key in MEOK settings, and begin your first session. The
            onboarding will guide you through choosing which archetype to start
            with based on what is most pressing right now.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 40px",
            }}
          >
            If you are in the middle of exam season, start with Scholar. If you
            have been struggling with anxiety, start with Healer. If you are
            feeling directionless, start with Pioneer. The archetypes are not
            boxes &mdash; MEOK will move between them naturally as your needs
            shift within a conversation.
          </p>

          {/* CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "16px",
              padding: "40px 36px",
              marginBottom: "56px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 12px",
                letterSpacing: "-0.02em",
              }}
            >
              Start for &pound;5/month
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: "0 auto 28px",
                maxWidth: "480px",
              }}
            >
              Full MEOK &mdash; Scholar, Healer, Pioneer, Sovereign, Guardian,
              Sovereign Memory &mdash; for the price of a coffee. No
              surveillance. No training on your data. No waiting list.
            </p>
            <Link
              href="https://meok.ai/signup"
              style={{
                display: "inline-block",
                background: "#c9a84c",
                color: "#0d0c18",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Get started with BYOK
            </Link>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* FAQ */}
          {/* ─────────────────────────────────────────────────────────────────── */}

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 32px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginBottom: "56px",
            }}
          >
            {[
              {
                q: "Can AI really help students with mental health?",
                a: "AI cannot replace professional mental health care, but it provides a private, always-available space to process anxiety, low mood, and stress between appointments or when support services have long waiting lists. MEOK\u2019s Healer archetype is designed to hold space for emotional distress without judgment, and Sovereign Memory means your companion understands your ongoing mental health journey rather than starting from scratch every session.",
              },
              {
                q: "How does MEOK help with exam stress and revision?",
                a: "MEOK\u2019s Scholar archetype uses Socratic questioning to help you understand material rather than just memorise it. It can quiz you, help build revision schedules, break overwhelming syllabuses into manageable sessions, and track your progress through Sovereign Memory. When exam anxiety spikes, the Healer archetype steps in to help you regulate before returning to study.",
              },
              {
                q: "What is BYOK and why does it matter for students on a budget?",
                a: "BYOK stands for Bring Your Own Key. With MEOK\u2019s BYOK tier at \u00a35/month, you connect your own API key from OpenAI, Anthropic, or another provider and pay only the raw usage cost \u2014 typically pennies per conversation. This dramatically reduces the cost while keeping full sovereign privacy and all MEOK features intact.",
              },
              {
                q: "How does MEOK protect students from online scams?",
                a: "MEOK\u2019s Guardian archetype is trained to recognise common student-targeted scams: fake scholarship emails, fraudulent student finance communications, phishing attempts disguised as university IT messages, rental scams targeting first-year students, and predatory loan offers. You can paste suspicious messages directly into MEOK for analysis before acting on them.",
              },
              {
                q: "Can MEOK help students with imposter syndrome?",
                a: "Yes. Imposter syndrome is endemic in higher education, particularly among first-generation students and those from underrepresented backgrounds. MEOK\u2019s Healer and Sovereign archetypes work together to challenge cognitive distortions, build evidence-based confidence, and help students reconnect with their genuine capabilities through structured reflection.",
              },
              {
                q: "Does MEOK work for international students?",
                a: "Absolutely. International students often face compounded pressures: cultural adjustment, language challenges, distance from family support networks, and the financial weight of international tuition fees. MEOK is available around the clock \u2014 essential when your family is in a different time zone and university support offices are closed.",
              },
              {
                q: "Can I use MEOK for help with job applications and graduate schemes?",
                a: "Yes. The Pioneer and Sovereign archetypes are well-suited to career navigation: reviewing CV drafts and cover letter structures, helping you clarify what you actually want through Sovereign, holding you accountable to application deadlines through Pioneer, and checking unsolicited opportunity emails for scam markers through Guardian.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "10px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#f5f0e8",
                    margin: "0 0 10px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#c4bfb4",
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ── Related posts ──────────────────────────────────────────────── */}

          <div style={{ marginBottom: "56px" }}>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#c9a84c",
                margin: "0 0 24px",
              }}
            >
              Continue Reading
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
                  title: "AI for Student Mental Health",
                  href: "/blog/ai-for-student-mental-health",
                  label: "Mental Health",
                },
                {
                  title: "AI for Exam Stress",
                  href: "/blog/ai-for-exam-stress",
                  label: "Academic",
                },
                {
                  title: "AI for Imposter Syndrome",
                  href: "/blog/ai-for-impostor-syndrome",
                  label: "Wellbeing",
                },
                {
                  title: "MEOK for PhD Students",
                  href: "/blog/ai-for-phd-students",
                  label: "Postgraduate",
                },
                {
                  title: "MEOK Guardian: Scam Protection",
                  href: "/blog/meok-guardian-scam-protection",
                  label: "Safety",
                },
                {
                  title: "Sovereign Memory Explained",
                  href: "/blog/ai-memory-explained",
                  label: "Feature",
                },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  style={{
                    display: "block",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    padding: "18px 20px",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#c9a84c",
                      marginBottom: "6px",
                    }}
                  >
                    {post.label}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#f5f0e8",
                      lineHeight: 1.4,
                    }}
                  >
                    {post.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Back to blog */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "16px",
            }}
          >
            <Link
              href="/blog"
              style={{
                fontSize: "14px",
                color: "#888",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                paddingBottom: "2px",
              }}
            >
              &larr; Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}
