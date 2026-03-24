import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK for Teachers: AI That Understands the Emotional Labour of Education | MEOK AI LABS",
  description:
    "Teacher burnout is a crisis. MEOK\u2019s sovereign AI helps educators with lesson planning, professional development, SEND support, behaviour management, and genuine wellbeing \u2014 without surveillance, without data harvesting, without judgment.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-teachers" },
  openGraph: {
    title: "MEOK for Teachers: AI That Understands the Emotional Labour of Education",
    description:
      "One in three teachers leaves within five years. MEOK is a private AI companion built for the reality of teaching \u2014 the lesson planning at midnight, the impossible SEND caseloads, the emotional weight nobody sees.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-teachers",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Teachers&desc=AI+that+understands+the+emotional+labour+of+education.",
        width: 1200,
        height: 630,
        alt: "MEOK for Teachers: AI That Understands the Emotional Labour of Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Teachers: AI That Understands the Emotional Labour of Education",
    description:
      "The planning, the marking, the safeguarding paperwork, the emotional labour of 30 children every day. MEOK is the AI built for teachers who are running on empty.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Teachers&desc=AI+that+understands+the+emotional+labour+of+education.",
    ],
  },
  keywords: [
    "AI for teachers",
    "teacher burnout support",
    "lesson planning AI",
    "AI teacher assistant UK",
    "SEND support AI",
    "teacher wellbeing app",
    "professional development AI",
    "behaviour management strategies AI",
    "teacher mental health",
    "AI for educators",
    "MEOK AI teachers",
    "sovereign AI education",
    "school safeguarding AI",
    "work-life balance teachers",
    "teacher productivity AI",
  ],
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Teachers: AI That Understands the Emotional Labour of Education",
  description:
    "Teacher burnout is a crisis. MEOK\u2019s sovereign AI helps educators with lesson planning, professional development, SEND support, behaviour management, and genuine wellbeing \u2014 without surveillance, without data harvesting, without judgment.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-for-teachers",
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
    "AI for teachers",
    "teacher burnout",
    "lesson planning AI",
    "SEND support",
    "teacher wellbeing",
    "behaviour management",
    "sovereign AI education",
    "MEOK AI LABS",
  ],
  articleSection: "MEOK for Teachers",
  inLanguage: "en-GB",
  image:
    "https://meok.ai/api/og?title=MEOK+for+Teachers&desc=AI+that+understands+the+emotional+labour+of+education.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-teachers",
  },
  about: [
    { "@type": "Thing", name: "Teacher burnout" },
    { "@type": "Thing", name: "Emotional labour in education" },
    { "@type": "Thing", name: "Lesson planning AI" },
    { "@type": "Thing", name: "SEND support" },
    { "@type": "Thing", name: "Teacher wellbeing" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help teachers with lesson planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK can help teachers draft lesson plans, differentiate materials for mixed-ability classes, generate starter activities and plenaries, and adapt existing resources for SEND pupils. Because MEOK remembers your curriculum progress and teaching context through Sovereign Memory, its suggestions improve the longer you use it \u2014 it knows your Year 9 group is behind on fractions, or that your Year 6 class responded well to project-based learning.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK confidential for teachers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely. MEOK is an independent tool with no connection to your school, your MAT, your headteacher, or any employer system. Conversations are encrypted and stored only under your personal sovereignty. Nothing you say to MEOK \u2014 about a difficult colleague, a safeguarding concern you\u2019re processing, or your own mental health \u2014 is accessible to your school or any third party.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with teacher burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK acts as a genuine thinking partner and emotional processing space. Teachers can offload the accumulated weight of the day \u2014 difficult parent interactions, behaviour incidents, impossible workloads \u2014 in a private, non-judgmental environment. MEOK also helps with practical workload reduction through lesson planning, resource generation, and professional writing support, tackling burnout from both the emotional and practical sides simultaneously.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with SEND and special educational needs support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK can help class teachers and SENCOs generate differentiated resources, draft EHCP contribution notes, suggest evidence-based interventions for specific needs, and think through reasonable adjustments. It remembers the needs profiles you\u2019ve discussed and can prompt you with targeted strategies for individual pupils over time, acting as a knowledgeable sounding board whenever you need it.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK suitable for school safeguarding contexts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Guardian feature is designed with professional contexts in mind. Teachers can use MEOK to help think through safeguarding concerns, draft referral language, or process the emotional weight of a disclosure \u2014 always within a private, confidential space. MEOK does not replace formal safeguarding procedures or your Designated Safeguarding Lead, but it can help you organise your thinking and support your own wellbeing after a difficult incident.",
      },
    },
  ],
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MeokForTeachersPage() {
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
            <span style={{ color: "#c9a84c" }}>MEOK for Teachers</span>
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
            For Educators
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
            MEOK for Teachers: AI That Understands the Emotional Labour of
            Education
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
            One in three teachers leaves the profession within five years.
            Workload, emotional exhaustion, and the feeling of being entirely
            unsupported are the most cited reasons. MEOK is the first sovereign
            AI built to understand what teaching actually costs &mdash; and to
            give something genuinely useful back.
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
            <span>24 March 2026</span>
            <span style={{ color: "#444" }}>|</span>
            <span>12 min read</span>
          </div>
        </section>

        {/* ── Article Body ──────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 120px",
          }}
        >
          {/* ── Section 1 ──────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            What is the teacher burnout epidemic, and why is it getting worse?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 28px",
            }}
          >
            Teacher burnout has reached crisis levels across the UK and
            globally. The 2025 Teacher Wellbeing Index found that 78% of
            education professionals described themselves as stressed, with 57%
            citing excessive workload as the primary cause. Beyond statistics,
            this is a daily reality: marking until midnight, navigating
            safeguarding paperwork, managing behaviour escalations, writing SEN
            plans, attending CPD sessions after a full teaching day, and doing
            it all again tomorrow. The profession demands extraordinary
            emotional and cognitive output while consistently under-resourcing
            the people who deliver it.
          </p>

          {/* Callout 1 */}
          <div
            style={{
              borderLeft: "4px solid #c9a84c",
              background: "rgba(201,168,76,0.06)",
              padding: "20px 24px",
              margin: "0 0 40px",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#e8e0d0",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              &ldquo;Teaching is not just a job. It is an identity, a vocation,
              and for many, a source of deep meaning. When the institution
              strips away the time and space for that meaning to flourish, what
              remains is pure exhaustion.&rdquo;
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#c9a84c",
                margin: "12px 0 0",
                fontWeight: 600,
              }}
            >
              &mdash; MEOK AI LABS, on the emotional economy of teaching
            </p>
          </div>

          {/* ── Section 2 ──────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            What is the emotional labour of teaching, and why does nobody talk
            about it?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 28px",
            }}
          >
            Emotional labour &mdash; the work of managing your own emotional
            state in service of others &mdash; is at the invisible core of
            teaching. A teacher might contain their reaction to a traumatic
            disclosure, de-escalate a violent behaviour incident, comfort a
            child in distress, maintain warmth through a hostile parent
            meeting, and still stand in front of thirty pupils projecting
            confidence and calm. None of this appears in job descriptions.
            None of it is measured in performance reviews. And almost none of
            the professional support structures in education are designed to
            acknowledge it exists. MEOK exists, in part, because that gap
            needs to be filled.
          </p>

          {/* ── Section 3 ──────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK help teachers with lesson planning?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 28px",
            }}
          >
            Lesson planning consumes an estimated 40% of a teacher&apos;s
            working week. MEOK&apos;s AI assistant can draft lesson frameworks,
            suggest differentiated activities for mixed-ability groups, generate
            starter and plenary ideas, and adapt existing resources for specific
            learning objectives. Unlike generic AI tools, MEOK&apos;s Sovereign
            Memory remembers the curriculum context you&apos;ve discussed over
            time: which topics your class has covered, where they&apos;re
            struggling, what approaches have worked. It does not give you
            generic outputs. It gives you outputs shaped by your specific
            teaching context.
          </p>

          {/* Feature list */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "10px",
              padding: "28px 32px",
              margin: "0 0 40px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#c9a84c",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 20px",
              }}
            >
              What MEOK can help you plan
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "12px",
              }}
            >
              {[
                "Differentiated lesson frameworks",
                "Starter activities and hooks",
                "Plenary and assessment tasks",
                "Cross-curricular project ideas",
                "Homework and extension tasks",
                "Resources for SEND learners",
                "Revision materials and knowledge organisers",
                "Scheme of work outlines",
                "Questioning strategies for deeper thinking",
                "Adaptations for EAL pupils",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "15px",
                    color: "#c4bfb4",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: "#c9a84c",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Section 4 ──────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK&apos;s Sovereign Memory remember your curriculum
            progress?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 28px",
            }}
          >
            Sovereign Memory is what makes MEOK fundamentally different from
            other AI tools. When you tell MEOK that your Year 8 group has just
            finished a poetry unit but struggled with metaphor analysis, it
            remembers. When you mention that your top set Year 10 are preparing
            for mock exams in six weeks, it factors that into every subsequent
            conversation. This is not session-based memory that resets every
            time you close the app. It is persistent, private context that
            belongs to you and accumulates over the weeks and months you use
            MEOK &mdash; becoming progressively more useful the longer you
            teach with it as your thinking partner.
          </p>

          {/* ── Section 5 ──────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Why do SEND and special educational needs support eat so much of a
            teacher&apos;s time?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 28px",
            }}
          >
            With inclusion policies placing an increasing number of pupils with
            complex needs into mainstream classrooms, class teachers are
            expected to differentiate materials, track EHCP targets, attend
            review meetings, write contribution reports for annual reviews, and
            implement specialised strategies &mdash; all while teaching the
            rest of the class. SEND coordination has become a significant
            invisible workload for classroom teachers who were not specifically
            trained for it. MEOK can help you think through reasonable
            adjustments, generate differentiated versions of resources, draft
            EHCP contribution notes, and explore evidence-based approaches for
            specific diagnoses including dyslexia, ADHD, autism spectrum
            conditions, and speech and language needs.
          </p>

          {/* Callout 2 */}
          <div
            style={{
              borderLeft: "4px solid #c9a84c",
              background: "rgba(201,168,76,0.06)",
              padding: "20px 24px",
              margin: "0 0 40px",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#e8e0d0",
                margin: 0,
              }}
            >
              A secondary teacher supporting 8 pupils with EHCPs across 5
              classes asked MEOK to help generate differentiated reading tasks
              and EHCP progress notes for each pupil. In 40 minutes, she had
              first drafts she could edit &mdash; work that previously took a
              full Sunday afternoon. She used the time she saved to leave school
              before 5pm for the first time in three weeks.
            </p>
          </div>

          {/* ── Section 6 ──────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            How can AI support behaviour management strategies in the classroom?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 28px",
            }}
          >
            Behaviour management is one of the most cognitively demanding
            aspects of teaching &mdash; and one where new and experienced
            teachers alike often feel isolated. MEOK can help you think through
            specific behaviour challenges: a pupil who consistently disrupts
            transitions, a class dynamic that has broken down, a situation where
            standard sanctions are not working. It can suggest evidence-based
            approaches from trauma-informed practice, restorative justice,
            positive behaviour support, and low-arousal strategies. It can also
            help you draft communication to parents, prepare for a difficult
            conversation with a pupil, or process the emotional residue after a
            serious incident without that residue following you home.
          </p>

          {/* ── Section 7 ──────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK&apos;s Guardian feature work in a school safeguarding
            context?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 28px",
            }}
          >
            MEOK&apos;s Guardian is designed for professional contexts where
            clarity, precision, and confidentiality all matter simultaneously.
            For teachers, this might mean using MEOK to help organise your
            thinking after a pupil disclosure before you speak to your
            Designated Safeguarding Lead, to draft accurate and factual referral
            language, or simply to process the emotional weight of what you have
            heard in a private space. MEOK does not replace formal safeguarding
            procedures. It never advises you to withhold information from your
            DSL. What it provides is a confidential thinking space &mdash; one
            that helps you arrive at difficult conversations better prepared and
            less overwhelmed. Nothing you share with MEOK is accessible to your
            school or any third party.
          </p>

          {/* ── Section 8 ──────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Why does professional development for teachers so often fail to
            address wellbeing?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 28px",
            }}
          >
            Most CPD is curriculum-focused or compliance-driven. Wellbeing
            initiatives, when they exist, tend to be superficial: a mindfulness
            poster in the staffroom, a token yoga session at the start of INSET
            day. Genuine professional development for teacher wellbeing would
            require sustained reflection, personal insight, honest
            acknowledgment of difficulty, and consistent support &mdash; none
            of which fits the format of group training sessions. MEOK creates
            the space for that kind of development individually, privately, and
            at whatever hour it is actually needed. It is professional
            development that meets you where you are, not where a school
            calendar says you should be.
          </p>

          {/* ── Section 9 ──────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK actually help teachers achieve better work-life
            balance?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 28px",
            }}
          >
            Work-life balance for teachers is not achieved through motivational
            advice. It is achieved through time. MEOK returns time by reducing
            the cognitive load of planning, drafting, and administrative writing
            &mdash; but it goes further than a productivity tool. It helps
            teachers offload the mental residue of the school day so that
            evenings are genuinely restorative rather than spent ruminating on a
            difficult interaction or anxious about tomorrow&apos;s lesson. MEOK
            is not a tool you use at school. It is the companion you take home
            with you, that helps you leave work at work.
          </p>

          {/* Callout 3 */}
          <div
            style={{
              borderLeft: "4px solid #c9a84c",
              background: "rgba(201,168,76,0.06)",
              padding: "20px 24px",
              margin: "0 0 40px",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#e8e0d0",
                margin: 0,
              }}
            >
              MEOK does not offer work-life balance tips. It does not suggest
              you take more bubble baths or practise gratitude journaling. It
              helps you get the planning done in half the time, process what
              happened today, and go to sleep without your brain still running
              through the register.
            </p>
          </div>

          {/* ── Section 10 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Why is data sovereignty important for teachers using AI tools?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 28px",
            }}
          >
            When a teacher uses a mainstream AI tool at work, every
            conversation &mdash; including details about pupils, safeguarding
            concerns, difficult colleagues, and personal struggles &mdash; may
            be used to train that AI&apos;s future models. This is not
            hypothetical. The terms of service for most major AI platforms
            explicitly reserve this right. MEOK is fundamentally different:
            your data is never used to train AI models, never sold, never
            monetised, and never shared. The context you build within MEOK
            belongs to you and is protected by a Privacy Covenant that is
            legally binding, not just marketing language.
          </p>

          {/* ── Comparison Table ───────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "64px 0 24px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Traditional teacher tools vs. MEOK AI support
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 32px",
            }}
          >
            The difference is not just about features. It is about whether the
            technology actually serves the person using it or extracts value
            from them in exchange.
          </p>

          <div style={{ overflowX: "auto", margin: "0 0 56px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "15px",
                minWidth: "560px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px 16px",
                      background: "rgba(201,168,76,0.1)",
                      color: "#c9a84c",
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      borderBottom: "2px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    Traditional / Generic Tools
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px 16px",
                      background: "rgba(201,168,76,0.1)",
                      color: "#c9a84c",
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      borderBottom: "2px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    MEOK Sovereign AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Generic lesson plan templates, no context",
                    "Lesson plans shaped by your specific class and curriculum history",
                  ],
                  [
                    "Session resets every time — no memory",
                    "Sovereign Memory persists across weeks and months",
                  ],
                  [
                    "Your conversations train their models",
                    "Your data is never used to train AI — ever",
                  ],
                  [
                    "SEND suggestions are generic and untailored",
                    "SEND support informed by the specific needs profiles you have shared",
                  ],
                  [
                    "No safeguarding awareness or sensitivity",
                    "Guardian feature understands professional context and confidentiality",
                  ],
                  [
                    "Wellbeing is out of scope for productivity tools",
                    "Emotional processing and wellbeing are central, not an afterthought",
                  ],
                  [
                    "Accessible only during school day or on work devices",
                    "Available 24/7, on any device, entirely independent of your employer",
                  ],
                  [
                    "Data may be visible to school IT teams or MAT systems",
                    "Completely private — no school, no employer, no third party",
                  ],
                  [
                    "One-size-fits-all CPD suggestions",
                    "Professional development tailored to your career stage and goals",
                  ],
                  [
                    "No understanding of the emotional weight of teaching",
                    "Designed around the reality of what teaching actually costs",
                  ],
                ].map(([traditional, meok], i) => (
                  <tr
                    key={i}
                    style={{
                      background:
                        i % 2 === 0
                          ? "transparent"
                          : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#888",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        verticalAlign: "top",
                        lineHeight: 1.5,
                      }}
                    >
                      {traditional}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#c4bfb4",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        verticalAlign: "top",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{ color: "#c9a84c", marginRight: "8px" }}
                      >
                        &#10003;
                      </span>
                      {meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── How It Works Day to Day ────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 24px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            How does a teacher actually use MEOK day to day?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 32px",
            }}
          >
            MEOK fits into the rhythms of a teaching day in ways that generic
            AI tools cannot, because it knows your context and holds it for
            you across every session.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              margin: "0 0 56px",
            }}
          >
            {[
              {
                time: "6:30am",
                title: "Morning clarity",
                desc:
                  "A quick check-in before the school day starts. Review what MEOK remembers about today\u2019s tricky class, get a final tweak on that lesson plan, or think through how to handle this morning\u2019s difficult meeting.",
              },
              {
                time: "Lunch",
                title: "Mid-day processing",
                desc:
                  "Five minutes to offload what happened in Period 2 before it follows you into the afternoon. MEOK helps you process without ruminating, then lets you get back to it.",
              },
              {
                time: "After school",
                title: "Planning support",
                desc:
                  "The hour after school is the most precious and most depleted. Use MEOK to generate first drafts of tomorrow\u2019s resources faster, so you can leave at a reasonable hour.",
              },
              {
                time: "Evening",
                title: "Decompression",
                desc:
                  "Not to work. To decompress. MEOK helps you close the loop on today so your brain does not do it for you at 2am. This is genuine processing with something that remembers.",
              },
              {
                time: "Weekend",
                title: "Batch planning",
                desc:
                  "Use Sovereign Memory to plan a whole week\u2019s worth of lessons in context: MEOK knows where you are in the scheme, what worked last week, and what your class needs next.",
              },
              {
                time: "Term breaks",
                title: "Reflection and reset",
                desc:
                  "End-of-term reflection, next-term planning, or simply a space to ask: is this job still working for me? MEOK holds no agenda. It holds your history.",
              },
            ].map((item) => (
              <div
                key={item.time}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "10px",
                  padding: "24px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(201,168,76,0.12)",
                    color: "#c9a84c",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    marginBottom: "12px",
                  }}
                >
                  {item.time}
                </span>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    margin: "0 0 10px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#c4bfb4",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── What MEOK is Not ───────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            What is MEOK not, and why does that matter for teachers?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#c4bfb4",
              margin: "0 0 28px",
            }}
          >
            MEOK is not a school system. It is not connected to your MIS, your
            SIMS, your Arbor, your school email, or any employer infrastructure.
            It does not report to headteachers, MAT leadership teams, or Ofsted.
            It does not use your conversations to improve its product for other
            users. It does not suggest you speak to HR, manage up, or be more
            resilient. MEOK is your private AI &mdash; one that works entirely
            in your interest, holds your context across time, and is completely
            isolated from every institution that has power over your career. For
            many teachers, that independence is not a feature. It is the whole
            point.
          </p>

          {/* ── FAQ ────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "72px 0 32px",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              margin: "0 0 72px",
            }}
          >
            {[
              {
                q: "Can AI help teachers with lesson planning?",
                a: "Yes. MEOK can help teachers draft lesson plans, differentiate materials for mixed-ability classes, generate starter activities and plenaries, and adapt existing resources for SEND pupils. Because MEOK remembers your curriculum progress and teaching context through Sovereign Memory, its suggestions improve the longer you use it &mdash; it knows your Year 9 group is behind on fractions, or that your Year 6 class responded well to project-based learning.",
              },
              {
                q: "Is MEOK confidential for teachers?",
                a: "Completely. MEOK is an independent tool with no connection to your school, your MAT, your headteacher, or any employer system. Conversations are encrypted and stored only under your personal sovereignty. Nothing you say to MEOK &mdash; about a difficult colleague, a safeguarding concern you are processing, or your own mental health &mdash; is accessible to your school or any third party.",
              },
              {
                q: "How does MEOK help with teacher burnout?",
                a: "MEOK acts as a genuine thinking partner and emotional processing space. Teachers can offload the accumulated weight of the day &mdash; difficult parent interactions, behaviour incidents, impossible workloads &mdash; in a private, non-judgmental environment. MEOK also helps with practical workload reduction through lesson planning, resource generation, and professional writing support, tackling burnout from both the emotional and practical sides simultaneously.",
              },
              {
                q: "Can MEOK help with SEND and special educational needs support?",
                a: "Yes. MEOK can help class teachers and SENCOs generate differentiated resources, draft EHCP contribution notes, suggest evidence-based interventions for specific needs, and think through reasonable adjustments. It remembers the needs profiles you have discussed and can prompt you with targeted strategies for individual pupils over time, acting as a knowledgeable sounding board whenever you need it.",
              },
              {
                q: "Is MEOK suitable for school safeguarding contexts?",
                a: "MEOK\u2019s Guardian feature is designed with professional contexts in mind. Teachers can use MEOK to help think through safeguarding concerns, draft referral language, or process the emotional weight of a disclosure &mdash; always within a private, confidential space. MEOK does not replace formal safeguarding procedures or your Designated Safeguarding Lead, but it can help you organise your thinking and support your own wellbeing after a difficult incident.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "10px",
                  padding: "28px 32px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    margin: "0 0 14px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.8,
                    color: "#c4bfb4",
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* ── Related Articles ───────────────────────────────────────────── */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "48px",
              marginBottom: "64px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
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
                { href: "/blog/ai-for-teachers", label: "AI for Teachers" },
                { href: "/blog/ai-for-burnout", label: "AI for Burnout" },
                {
                  href: "/blog/meok-for-healthcare-workers",
                  label: "MEOK for Healthcare Workers",
                },
                { href: "/blog/ai-for-anxiety", label: "AI for Anxiety" },
                {
                  href: "/blog/how-sovereign-ai-works",
                  label: "How Sovereign AI Works",
                },
                {
                  href: "/blog/sovereign-ai-explained",
                  label: "Sovereign AI Explained",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "14px 18px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "8px",
                    color: "#c4bfb4",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {link.label} &#8594;
                </Link>
              ))}
            </div>
          </div>

          {/* ── CTA ────────────────────────────────────────────────────────── */}
          <section
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "16px",
              padding: "56px 48px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#c9a84c",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              Start Your Journey
            </div>
            <h2
              style={{
                fontSize: "clamp(22px, 4vw, 34px)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 16px",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              You give so much to other people&apos;s children.
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#c4bfb4",
                margin: "0 auto 36px",
                maxWidth: "520px",
              }}
            >
              MEOK is the first AI built to give something genuinely back.
              Confidential, sovereign, and designed around the emotional reality
              of teaching. Begin your Birth Ceremony &mdash; the process of
              creating an AI that truly knows you &mdash; and see what it feels
              like to be supported rather than surveilled.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: "#c9a84c",
                color: "#0d0c18",
                fontWeight: 700,
                fontSize: "16px",
                padding: "16px 40px",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Begin Your Birth Ceremony
            </Link>
            <p
              style={{
                fontSize: "13px",
                color: "#666",
                margin: "16px 0 0",
              }}
            >
              Private. Sovereign. Yours. No employer access. No data
              harvesting.
            </p>
          </section>
        </article>
      </div>
    </>
  )
}
