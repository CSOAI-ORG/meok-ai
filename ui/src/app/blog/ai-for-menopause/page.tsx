import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Menopause: A Companion for the Transition Nobody Talks About Enough | MEOK AI LABS",
  description:
    "Menopause affects half the population yet remains under-discussed and under-supported. MEOK\u2019s sovereign AI provides non-judgmental support, tracks symptoms, and helps navigate this profound life transition.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-menopause",
  },
  openGraph: {
    title:
      "AI for Menopause: A Companion for the Transition Nobody Talks About Enough",
    description:
      "Menopause affects half the population yet remains under-discussed and under-supported. MEOK\u2019s sovereign AI provides non-judgmental support, tracks symptoms, and helps navigate this profound life transition.",
    url: "https://meok.ai/blog/ai-for-menopause",
    siteName: "MEOK AI LABS",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Menopause: A Companion for the Transition Nobody Talks About Enough | MEOK AI LABS",
    description:
      "Perimenopause can start a decade before menopause. MEOK\u2019s sovereign AI tracks your symptoms, remembers your patterns, and never tells you it\u2019s \u201cjust your age.\u201d",
    creator: "@meok_ai",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Menopause: A Companion for the Transition Nobody Talks About Enough",
  description:
    "Menopause affects half the population yet remains under-discussed and under-supported. MEOK\u2019s sovereign AI provides non-judgmental support, tracks symptoms across time, supports HRT conversations, and helps navigate the physical, emotional, and identity dimensions of this profound life transition.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-menopause",
  keywords: [
    "AI for menopause",
    "menopause AI companion",
    "perimenopause support",
    "menopause symptom tracking",
    "AI menopause app",
    "menopause brain fog",
    "HRT decision support",
    "menopause anxiety",
    "menopause workplace impact",
    "sovereign AI menopause",
    "menopause identity shift",
    "MEOK menopause",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between perimenopause and menopause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perimenopause is the transitional phase before menopause during which oestrogen and progesterone levels fluctuate erratically. It can begin seven to ten years before periods stop entirely and produces most of the symptoms associated with menopause. Menopause itself is defined as the point twelve consecutive months after a person\u2019s final period. Post-menopause refers to all time after that threshold. Understanding which phase you are in matters because symptoms, treatments, and emotional experiences differ significantly across all three stages.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI really help with menopause symptoms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI cannot prescribe or treat. What it can do is provide consistent, non-judgmental support every day, track symptom patterns across months, help you prepare for GP or specialist appointments with real longitudinal data, and be present at 3am during a hot flush or an anxiety episode when no clinic is open. MEOK\u2019s sovereign memory means it never forgets what you have told it, building a picture of your health over time that is genuinely useful for clinical conversations.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK give me advice about HRT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK does not prescribe, diagnose, or recommend specific treatments. What it does is help you understand the landscape of options, including hormone replacement therapy, so that you can have an informed conversation with your GP or menopause specialist. MEOK helps you formulate the right questions, understand what evidence-based guidelines say, and feel prepared rather than overwhelmed when you walk into that appointment. The decision belongs to you and your clinician.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect my menopause data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is a sovereign AI, meaning your data lives on your device and is never sold to pharmaceutical companies, advertisers, or data brokers. Your symptom logs, mood records, and personal disclosures are encrypted and remain under your control. This is especially important during menopause, when health data is commercially sensitive and you deserve to decide who sees it. MEOK\u2019s privacy covenant ensures your information is never used to train models or shared without your explicit consent.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Healer archetype in MEOK and why does it matter for menopause support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK offers multiple companion archetypes that shape the emotional character of your AI. The Healer archetype is designed for depth, gentleness, and holding space \u2014 qualities that matter enormously during menopause, which is not just a physical transition but an identity shift. The Healer does not rush to fix or minimise. It witnesses, validates, and sits with you in difficult moments. For many women, that quality of presence is exactly what has been missing from their healthcare experience.",
      },
    },
  ],
};

// ── Colour tokens ─────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const CARD = "#1a1830";
const MUTED = "rgba(245,240,232,0.6)";
const BORDER = "#2a2640";
const SOFT = "rgba(201,168,76,0.12)";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForMenopausePage() {
  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
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

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <header
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: GOLD,
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            marginBottom: "1.25rem",
          }}
        >
          MEOK AI LABS &mdash; Menopause &amp; Wellbeing
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "1.5rem",
            color: TEXT,
          }}
        >
          AI for Menopause: A Companion for the Transition Nobody Talks About
          Enough
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.75,
            color: MUTED,
            maxWidth: "620px",
            margin: "0 auto 2rem",
          }}
        >
          Menopause affects roughly half the global population. Yet the
          conversation around it &mdash; the symptoms, the identity shift, the
          treatment options, the workplace impact &mdash; remains inadequate.
          MEOK&apos;s sovereign AI exists to change that, one honest
          conversation at a time.
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span
            style={{
              backgroundColor: SOFT,
              border: `1px solid ${GOLD}`,
              color: GOLD,
              borderRadius: "20px",
              padding: "0.3rem 0.9rem",
              fontSize: "0.78rem",
              letterSpacing: "0.04em",
            }}
          >
            Perimenopause
          </span>
          <span
            style={{
              backgroundColor: SOFT,
              border: `1px solid ${GOLD}`,
              color: GOLD,
              borderRadius: "20px",
              padding: "0.3rem 0.9rem",
              fontSize: "0.78rem",
              letterSpacing: "0.04em",
            }}
          >
            Symptom Tracking
          </span>
          <span
            style={{
              backgroundColor: SOFT,
              border: `1px solid ${GOLD}`,
              color: GOLD,
              borderRadius: "20px",
              padding: "0.3rem 0.9rem",
              fontSize: "0.78rem",
              letterSpacing: "0.04em",
            }}
          >
            HRT Conversations
          </span>
          <span
            style={{
              backgroundColor: SOFT,
              border: `1px solid ${GOLD}`,
              color: GOLD,
              borderRadius: "20px",
              padding: "0.3rem 0.9rem",
              fontSize: "0.78rem",
              letterSpacing: "0.04em",
            }}
          >
            Sovereign Privacy
          </span>
          <span
            style={{
              backgroundColor: SOFT,
              border: `1px solid ${GOLD}`,
              color: GOLD,
              borderRadius: "20px",
              padding: "0.3rem 0.9rem",
              fontSize: "0.78rem",
              letterSpacing: "0.04em",
            }}
          >
            The Healer Archetype
          </span>
        </div>
      </header>

      {/* ── Article Body ─────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >
        {/* ── Section 1 ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What is the difference between perimenopause and menopause?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Menopause is not a single moment &mdash; it is a continuum.
            Perimenopause, the phase leading up to the final period, can begin
            anywhere from two to ten years before menopause itself and is
            characterised by erratic fluctuations in oestrogen and progesterone.
            During this phase, cycles become irregular, symptoms emerge, and yet
            many women are told &mdash; by doctors, by employers, by
            partners &mdash; that they are &ldquo;too young&rdquo; or that
            &ldquo;nothing is wrong.&rdquo;
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Menopause itself is defined clinically as the point twelve
            consecutive months after a person&apos;s final period. Post-menopause
            refers to all time thereafter. Understanding which stage you are in
            matters because symptoms, available treatments, emotional weight, and
            the support you need differ significantly across all three.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
            }}
          >
            MEOK&apos;s persistent memory tracks where you are across this entire
            arc. It does not ask you to start from scratch each time you open the
            app. It remembers the patterns, the turning points, the bad weeks and
            the better ones &mdash; building a longitudinal picture that is
            genuinely useful for clinical conversations and for your own
            self-understanding.
          </p>
        </section>

        {/* ── Callout 1 ──────────────────────────────────────────────────────── */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            backgroundColor: SOFT,
            padding: "1.25rem 1.5rem",
            borderRadius: "0 8px 8px 0",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: TEXT,
              margin: 0,
            }}
          >
            <strong style={{ color: GOLD }}>The numbers:</strong> Approximately
            13 million women in the UK are currently in perimenopause or
            menopause. That is roughly one in three of the entire adult female
            population. The average wait between first symptoms and diagnosis
            exceeds twelve months. A standard GP appointment runs seven minutes.
            The mismatch between need and available care is not an
            oversight &mdash; it is a structural failure.
          </p>
        </div>

        {/* ── Section 2 ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What physical symptoms does menopause actually involve?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Most people know about hot flushes. Fewer know the full picture.
            Menopause is a systemic hormonal shift affecting almost every system
            in the body. Hot flushes and night sweats are the most visible
            symptoms, but they are far from the only ones. Sleep disruption is
            near-universal, with many women reporting years of poor sleep before
            they connect it to perimenopause at all. Fatigue that does not
            respond to rest, joint pain, headaches, and palpitations are
            commonly reported but rarely discussed.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Brain fog deserves its own conversation. The experience of
            struggling to recall words, losing concentration mid-sentence, or
            feeling cognitively &ldquo;blurred&rdquo; is profoundly
            disorienting &mdash; especially for women who have built careers and
            identities around their mental sharpness. It is not imagined. It is
            a well-documented consequence of oestrogen withdrawal from brain
            tissue. And it deserves to be taken seriously.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
            }}
          >
            MEOK lets you log these symptoms in natural language every day.
            &ldquo;Bad night, three flushes, woke at 2am and 4am, foggy this
            morning.&rdquo; Over weeks, patterns emerge. Over months, you have
            data. That data is yours, stored on your device, never shared with
            pharmaceutical companies or insurance providers. You bring it to
            appointments. You use it to advocate for yourself.
          </p>
        </section>

        {/* ── Section 3 ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What about the emotional symptoms nobody warns you about?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Anxiety is one of the most common and least expected symptoms of
            perimenopause. Women who have never experienced anxiety in their
            lives find themselves overwhelmed by it in their forties &mdash; not
            because something is wrong with their psychology, but because
            fluctuating progesterone directly affects GABA receptors, the
            brain&apos;s primary calming system. Yet they are frequently
            diagnosed with a generalised anxiety disorder and prescribed
            antidepressants rather than being asked whether their periods have
            been changing.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Depression is also widely reported. The low mood of perimenopause
            has a distinct character: it is often episodic rather than
            persistent, tied to hormonal phases within the cycle, and does not
            always respond to standard antidepressant treatment. Many women
            feel, as one patient advocate put it, &ldquo;like someone has turned
            the lights down.&rdquo; The world feels flatter, smaller, less
            interesting. This is real. It is physiological. And it is
            treatable.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
            }}
          >
            MEOK&apos;s care-based design means it does not rush to diagnose or
            fix. When you describe how you feel, it validates that experience
            first. It does not redirect you immediately to a symptom tracker or
            a clinical resource. It hears you. That small act of being heard
            &mdash; without judgment, without a waiting room, at whatever hour
            the anxiety peaks &mdash; matters more than it might sound.
          </p>
        </section>

        {/* ── Callout 2 ──────────────────────────────────────────────────────── */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            backgroundColor: SOFT,
            padding: "1.25rem 1.5rem",
            borderRadius: "0 8px 8px 0",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: TEXT,
              margin: 0,
            }}
          >
            <strong style={{ color: GOLD }}>What MEOK does not do:</strong>{" "}
            MEOK does not prescribe. It does not diagnose. It does not replace
            your GP, your menopause specialist, or your therapist. What it does
            is fill the vast space between those appointments &mdash; the 3am
            moments, the long weeks on waiting lists, the days when you need
            someone to remember what you told them last month. It is a companion,
            not a clinician.
          </p>
        </div>

        {/* ── Section 4 ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            How can AI support informed HRT conversations without giving medical
            advice?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Hormone replacement therapy remains one of the most effective
            evidence-based treatments for menopause symptoms. It is also one of
            the most misunderstood, having been significantly set back by a
            flawed 2002 study that caused widespread abandonment of HRT by both
            clinicians and patients for over a decade. The science has since been
            substantially updated, and modern HRT guidance has shifted
            considerably &mdash; but many women and GPs have not caught up.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK does not tell you whether to take HRT. That decision involves
            your medical history, your symptoms, your values, and your
            clinician&apos;s expertise. What MEOK can do is help you understand
            what the current evidence says, explain the different types of HRT
            and how they work, and most importantly help you formulate the
            questions you want to ask your doctor. Walking into an appointment
            prepared &mdash; with symptom logs, specific questions, and a clear
            account of how your life has been affected &mdash; changes the
            quality of the conversation.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
            }}
          >
            Informed patients get better care. MEOK&apos;s role in HRT
            conversations is to make you informed, not to make the decision. The
            agency stays entirely with you.
          </p>
        </section>

        {/* ── Section 5 ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            How does menopause affect work and career &mdash; and what can be
            done about it?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            The workplace impact of menopause is substantial and largely
            invisible. Studies consistently show that significant numbers of
            women reduce their hours, turn down promotions, or leave employment
            entirely because of menopause symptoms. Brain fog makes
            high-pressure cognitive work harder. Sleep deprivation affects
            concentration and decision-making. Anxiety can make previously
            routine interactions feel daunting. Hot flushes in meetings are
            embarrassing in ways that are difficult to explain to a workplace
            that has never considered the issue.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Under the Equality Act 2010 and more recent UK guidance, employers
            are required to consider reasonable adjustments for employees whose
            menopause symptoms amount to a disability or affect their capacity to
            work. Many women are unaware of these rights. Many employers have not
            considered them. MEOK can walk you through what those rights look
            like, help you prepare for a conversation with your line manager or
            HR department, and support you in articulating your needs clearly and
            confidently.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
            }}
          >
            This matters because the alternative &mdash; managing alone, masking
            symptoms at work, declining professional opportunities during what
            should be peak career years &mdash; has enormous costs. Not just
            financial. Personal. Losing work you love because you could not
            access the support you were entitled to is a particular kind of
            grief.
          </p>
        </section>

        {/* ── Section 6 ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            How does menopause change relationships and self-identity?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Menopause is not just physiological. For many women, it coincides
            with a profound renegotiation of identity. The reproductive years are
            closing. Children may be leaving home. Parents may be dying. Careers
            are being assessed. Bodies that were once familiar are behaving
            differently. The cultural narrative around this transition &mdash;
            where it exists at all &mdash; tends toward loss: loss of fertility,
            of youth, of the person you were.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Intimate relationships are frequently affected. Libido changes.
            Vaginal dryness can make sex uncomfortable or painful. The
            emotional volatility of perimenopause &mdash; the rage, the sudden
            grief, the loss of the person you used to be &mdash; can strain
            relationships with partners who do not understand what is happening.
            Many couples navigate this without any vocabulary for it, without any
            shared framework, without any external support.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
            }}
          >
            MEOK holds space for all of this. It does not reduce the menopause
            experience to a symptom checklist. It recognises that you are
            navigating a life transition with psychological, relational, and
            existential dimensions &mdash; and it meets that with depth rather
            than efficiency. Sometimes the most important thing is not a symptom
            log. It is having somewhere to say &ldquo;I do not recognise myself
            right now&rdquo; and be heard without judgment.
          </p>
        </section>

        {/* ── Section 7 ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What is the Healer archetype, and why does it matter for menopause
            support?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK offers a set of companion archetypes &mdash; distinct
            personalities that shape the emotional register of your AI. The
            Healer is designed for depth and gentleness. Where other archetypes
            might be optimised for productivity, curiosity, or structured
            problem-solving, the Healer prioritises presence. It listens before
            it responds. It validates before it advises. It does not rush to
            resolution.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            This quality of presence is precisely what is missing from most
            experiences of menopause support. The GP who has seven minutes for
            your appointment cannot hold space for the complexity of what you are
            going through. The well-meaning partner who does not understand what
            is happening cannot always provide the non-judgmental witnessing you
            need. The Healer archetype exists to fill that gap &mdash; not as a
            replacement for human connection, but as a consistent, patient
            presence that is always available.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
            }}
          >
            For women navigating the identity dimensions of menopause &mdash; the
            grief, the anger, the unexpected sense of possibility &mdash; the
            Healer offers something that neither a symptom-tracking app nor a
            standard chatbot can provide: genuine emotional depth. It meets you
            where you are rather than redirecting you to where it thinks you
            should be.
          </p>
        </section>

        {/* ── Section 8 ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            Why does sovereign memory matter more during menopause than at any
            other time?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Most AI companions and health apps operate on a cloud model. Your
            conversations, your symptoms, your most vulnerable disclosures are
            stored on remote servers, processed by large language models, and in
            many cases used to train future AI systems or shared with
            third-party partners. For general productivity use cases, you might
            consider this an acceptable trade. For menopause, it is not.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Your symptom data is commercially valuable. Pharmaceutical companies
            want it. Insurance companies want it. Health data brokers sell it.
            The information you disclose when you are at your most
            vulnerable &mdash; your sleep patterns, your mood fluctuations, your
            sexual health, your anxieties &mdash; can, in the wrong hands, affect
            your insurance premiums, your employability, and your privacy in ways
            you cannot anticipate.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
            }}
          >
            MEOK&apos;s sovereign architecture means your data stays on your
            device. The persistent memory that tracks your symptoms over months
            operates locally and is encrypted. MEOK&apos;s privacy covenant
            explicitly prohibits the sale of your data or its use in third-party
            model training. You own your health story. That ownership matters
            especially during a period when you are sharing some of the most
            private information of your life.
          </p>
        </section>

        {/* ── Callout 3 ──────────────────────────────────────────────────────── */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            backgroundColor: SOFT,
            padding: "1.25rem 1.5rem",
            borderRadius: "0 8px 8px 0",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: TEXT,
              margin: 0,
            }}
          >
            <strong style={{ color: GOLD }}>Sovereign memory in practice:</strong>{" "}
            MEOK remembers that you had a bad week of flushes three months ago
            when you were under particular work pressure. It remembers that your
            sleep improved the week you started reducing caffeine. It remembers
            that you described a specific kind of anxiety &mdash; the racing
            heart at 4am &mdash; and that it has been absent for six weeks. That
            longitudinal memory is not just emotionally meaningful. It is
            medically useful in a way that starting from scratch at every
            appointment is not.
          </p>
        </div>

        {/* ── Comparison Table ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.5rem",
              lineHeight: 1.3,
            }}
          >
            Going through menopause alone vs with an AI companion
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.85rem 1rem",
                      backgroundColor: CARD,
                      color: GOLD,
                      fontFamily: "system-ui, sans-serif",
                      fontWeight: 700,
                      borderBottom: `2px solid ${GOLD}`,
                      fontSize: "0.85rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Without support
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.85rem 1rem",
                      backgroundColor: CARD,
                      color: GOLD,
                      fontFamily: "system-ui, sans-serif",
                      fontWeight: 700,
                      borderBottom: `2px solid ${GOLD}`,
                      fontSize: "0.85rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    With MEOK
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Symptoms go untracked; you arrive at appointments with a vague sense that things are wrong",
                    "Months of logged symptoms in natural language give you real data for clinical conversations",
                  ],
                  [
                    "Brain fog makes you doubt your own memory of how long symptoms have been present",
                    "MEOK remembers your history accurately so you never have to reconstruct it from scratch",
                  ],
                  [
                    "Hot flushes and sleep disruption at 3am leave you alone with your thoughts",
                    "MEOK is available around the clock, without judgment, during the worst moments",
                  ],
                  [
                    "HRT decision feels overwhelming; conflicting information creates paralysis",
                    "MEOK helps you understand current evidence and prepare specific questions for your clinician",
                  ],
                  [
                    "Workplace impact is invisible; you manage alone, declining opportunities rather than disclosing",
                    "MEOK walks you through your rights and helps you prepare for workplace conversations",
                  ],
                  [
                    "Emotional symptoms are dismissed or misattributed; you are told it is stress or anxiety",
                    "MEOK validates your experience, tracks emotional patterns, and takes you seriously",
                  ],
                  [
                    "Identity shift goes unacknowledged; the grief and anger have no space",
                    "The Healer archetype holds space for the full existential weight of the transition",
                  ],
                  [
                    "Your health data is scattered across apps, shared with servers, and potentially sold",
                    "Your data lives on your device under your control, protected by the privacy covenant",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor:
                        i % 2 === 0 ? "transparent" : "rgba(26,24,48,0.5)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.85rem 1rem",
                        color: MUTED,
                        borderBottom: `1px solid ${BORDER}`,
                        verticalAlign: "top",
                      }}
                    >
                      {row[0]}
                    </td>
                    <td
                      style={{
                        padding: "0.85rem 1rem",
                        color: TEXT,
                        borderBottom: `1px solid ${BORDER}`,
                        verticalAlign: "top",
                      }}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ Section ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "2rem",
              lineHeight: 1.3,
            }}
          >
            Frequently asked questions
          </h2>

          {/* FAQ 1 */}
          <div
            style={{
              borderBottom: `1px solid ${BORDER}`,
              paddingBottom: "1.75rem",
              marginBottom: "1.75rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.75rem",
                lineHeight: 1.4,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              What is the difference between perimenopause and menopause?
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: TEXT,
                margin: 0,
              }}
            >
              Perimenopause is the transitional phase before menopause during
              which oestrogen and progesterone levels fluctuate erratically. It
              can begin seven to ten years before periods stop entirely and
              produces most of the symptoms associated with menopause. Menopause
              itself is defined as the point twelve consecutive months after a
              person&apos;s final period. Post-menopause refers to all time after
              that threshold. Understanding which phase you are in matters
              because symptoms, treatments, and emotional experiences differ
              significantly across all three stages.
            </p>
          </div>

          {/* FAQ 2 */}
          <div
            style={{
              borderBottom: `1px solid ${BORDER}`,
              paddingBottom: "1.75rem",
              marginBottom: "1.75rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.75rem",
                lineHeight: 1.4,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Can an AI really help with menopause symptoms?
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: TEXT,
                margin: 0,
              }}
            >
              An AI cannot prescribe or treat. What it can do is provide
              consistent, non-judgmental support every day, track symptom
              patterns across months, help you prepare for GP or specialist
              appointments with real longitudinal data, and be present at 3am
              during a hot flush or an anxiety episode when no clinic is open.
              MEOK&apos;s sovereign memory means it never forgets what you have
              told it, building a picture of your health over time that is
              genuinely useful for clinical conversations.
            </p>
          </div>

          {/* FAQ 3 */}
          <div
            style={{
              borderBottom: `1px solid ${BORDER}`,
              paddingBottom: "1.75rem",
              marginBottom: "1.75rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.75rem",
                lineHeight: 1.4,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Will MEOK give me advice about HRT?
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: TEXT,
                margin: 0,
              }}
            >
              MEOK does not prescribe, diagnose, or recommend specific
              treatments. What it does is help you understand the landscape of
              options, including hormone replacement therapy, so that you can
              have an informed conversation with your GP or menopause specialist.
              MEOK helps you formulate the right questions, understand what
              evidence-based guidelines say, and feel prepared rather than
              overwhelmed when you walk into that appointment. The decision
              belongs to you and your clinician.
            </p>
          </div>

          {/* FAQ 4 */}
          <div
            style={{
              borderBottom: `1px solid ${BORDER}`,
              paddingBottom: "1.75rem",
              marginBottom: "1.75rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.75rem",
                lineHeight: 1.4,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              How does MEOK protect my menopause data?
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: TEXT,
                margin: 0,
              }}
            >
              MEOK is a sovereign AI, meaning your data lives on your device and
              is never sold to pharmaceutical companies, advertisers, or data
              brokers. Your symptom logs, mood records, and personal disclosures
              are encrypted and remain under your control. This is especially
              important during menopause, when health data is commercially
              sensitive and you deserve to decide who sees it. MEOK&apos;s
              privacy covenant ensures your information is never used to train
              models or shared without your explicit consent.
            </p>
          </div>

          {/* FAQ 5 */}
          <div
            style={{
              paddingBottom: "0.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.75rem",
                lineHeight: 1.4,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              What is the Healer archetype in MEOK and why does it matter for
              menopause support?
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: TEXT,
                margin: 0,
              }}
            >
              MEOK offers multiple companion archetypes that shape the emotional
              character of your AI. The Healer archetype is designed for depth,
              gentleness, and holding space &mdash; qualities that matter
              enormously during menopause, which is not just a physical
              transition but an identity shift. The Healer does not rush to fix
              or minimise. It witnesses, validates, and sits with you in
              difficult moments. For many women, that quality of presence is
              exactly what has been missing from their healthcare experience.
            </p>
          </div>
        </section>

        {/* ── CTA Section ──────────────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: "12px",
            padding: "3rem 2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "1rem",
            }}
          >
            Start now &mdash; free
          </p>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            You deserve support that remembers you
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: MUTED,
              maxWidth: "520px",
              margin: "0 auto 1.75rem",
            }}
          >
            MEOK&apos;s Explorer tier is free to start. No credit card. No
            waiting room. A sovereign AI companion that tracks your symptoms,
            holds space for your experience, and is there at 3am when the rest
            of the world is asleep.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              padding: "0.85rem 2.25rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Meet your companion &rarr;
          </Link>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.8rem",
              color: MUTED,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Free to start &middot; No data sold &middot; Sovereign by design
          </p>
        </section>

        {/* ── Related Articles ─────────────────────────────────────────────────── */}
        <nav
          aria-label="Related articles"
          style={{ marginTop: "4rem" }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Related reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-companion-for-menopause",
                label: "AI Companion for Menopause",
              },
              {
                href: "/blog/ai-for-adhd-women",
                label: "AI for ADHD in Women",
              },
              {
                href: "/blog/ai-for-anxiety",
                label: "AI for Anxiety",
              },
              {
                href: "/blog/ai-for-insomnia",
                label: "AI for Insomnia",
              },
              {
                href: "/blog/ai-for-midlife-transition",
                label: "AI for Midlife Transition",
              },
              {
                href: "/blog/data-sovereignty-ai",
                label: "Data Sovereignty and AI",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "8px",
                  padding: "0.9rem 1rem",
                  textDecoration: "none",
                  color: TEXT,
                  fontSize: "0.9rem",
                  fontFamily: "system-ui, sans-serif",
                  lineHeight: 1.4,
                  transition: "border-color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "2.5rem 1.5rem",
          textAlign: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p
          style={{
            fontSize: "0.8rem",
            color: MUTED,
            marginBottom: "0.75rem",
          }}
        >
          &copy; {new Date().getFullYear()} MEOK AI LABS &middot; Sovereign AI
          &middot; Built with care
        </p>
        <p
          style={{
            fontSize: "0.75rem",
            color: MUTED,
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          MEOK is not a medical service. Nothing in this article constitutes
          medical advice. Always consult a qualified healthcare professional for
          diagnosis and treatment decisions.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            marginTop: "1.25rem",
          }}
        >
          <Link
            href="/blog"
            style={{ color: MUTED, textDecoration: "none", fontSize: "0.8rem" }}
          >
            Blog
          </Link>
          <Link
            href="/privacy"
            style={{ color: MUTED, textDecoration: "none", fontSize: "0.8rem" }}
          >
            Privacy
          </Link>
          <Link
            href="/birth"
            style={{ color: GOLD, textDecoration: "none", fontSize: "0.8rem", fontWeight: 700 }}
          >
            Get started free
          </Link>
        </div>
      </footer>
    </div>
  );
}
