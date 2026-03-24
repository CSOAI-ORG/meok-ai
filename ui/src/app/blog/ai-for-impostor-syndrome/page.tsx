import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Overcoming Impostor Syndrome With AI: You Belong Here | MEOK AI LABS",
  description:
    "Impostor syndrome affects 70% of high achievers. Discover how AI companions like MEOK help you reframe self-doubt, build evidence files, and finally believe you belong.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-impostor-syndrome",
  },
  openGraph: {
    title: "Overcoming Impostor Syndrome With AI: You Belong Here",
    description:
      "Impostor syndrome affects 70% of high achievers. MEOK helps you reframe self-doubt, build evidence files, and finally believe you belong — with honest, grounded AI support.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-impostor-syndrome",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Overcoming+Impostor+Syndrome+With+AI&desc=You+Belong+Here",
        width: 1200,
        height: 630,
        alt: "Overcoming Impostor Syndrome With AI | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Overcoming Impostor Syndrome With AI: You Belong Here",
    description:
      "Impostor syndrome affects 70% of high achievers. Discover how MEOK helps you build an evidence file, reframe self-doubt, and stop waiting to be found out.",
    images: [
      "https://meok.ai/api/og?title=Overcoming+Impostor+Syndrome+With+AI&desc=You+Belong+Here",
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Overcoming Impostor Syndrome With AI: You Belong Here",
  description:
    "Impostor syndrome affects 70% of high achievers. MEOK helps you reframe self-doubt, build evidence files, and believe you belong — grounded in Pauline Clance's research.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "MEOK AI LABS" },
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-impostor-syndrome",
  mainEntityOfPage: "https://meok.ai/blog/ai-for-impostor-syndrome",
  keywords: [
    "impostor syndrome",
    "AI for impostor syndrome",
    "overcoming impostor syndrome",
    "cognitive reappraisal",
    "evidence file",
    "women in tech impostor syndrome",
    "first-generation professionals",
    "MEOK",
    "AI companion",
    "self-doubt",
    "Pauline Clance",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is impostor syndrome and who does it affect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Impostor syndrome — first described by psychologist Pauline Clance in 1978 — is the persistent internal belief that your success is undeserved, that you got here by luck, and that it is only a matter of time before you are exposed as a fraud. Research consistently finds it affects around 70% of people at some point. It is particularly prevalent among high achievers, women in male-dominated fields, first-generation professionals, and people from underrepresented backgrounds.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help someone with impostor syndrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A well-designed AI companion can help with impostor syndrome in three ways. First, through pattern recognition — identifying when the same self-undermining thinking recurs across conversations. Second, through evidence files — maintaining an accurate, persistent record of your real achievements that you can consult when your inner critic is loudest. Third, through cognitive reappraisal — asking questions that challenge distorted thinking without dismissing the feeling behind it.",
      },
    },
    {
      "@type": "Question",
      name: "Why are women in tech particularly affected by impostor syndrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research from multiple studies, including work building on Pauline Clance's original framework, shows that women in male-dominated environments face structural factors that amplify impostor syndrome: fewer visible role models, implicit bias in feedback, environments where the cultural norm is a demographic they don't belong to, and a long history of being told — explicitly or structurally — that they are exceptions rather than the rule. These external factors fuel the internal narrative that belonging is fragile.",
      },
    },
    {
      "@type": "Question",
      name: "What is cognitive reappraisal and how does it help with impostor syndrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cognitive reappraisal is the practice of reinterpreting the meaning of an experience or thought — not suppressing it, but examining whether there is a more accurate interpretation available. Applied to impostor syndrome, it means taking the thought 'I was just lucky' and asking: what evidence would confirm that? What would disconfirm it? Who else was in the room and made choices that resulted in this outcome? Cognitive reappraisal is one of the most robustly supported interventions in emotion regulation research.",
      },
    },
    {
      "@type": "Question",
      name: "What is an evidence file and how do I build one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An evidence file is a structured record of concrete achievements, positive feedback, difficult problems you solved, and moments where your competence was undeniable — compiled specifically to counteract the selective memory that impostor syndrome produces. You can build one by reviewing emails and messages where your work was praised, listing projects that succeeded because of your contribution, noting times you helped someone else, and recording moments when you knew what to do even if you felt uncertain. MEOK can help you build and maintain this file through its persistent sovereign memory.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for therapy for impostor syndrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a therapist and does not provide clinical treatment. If impostor syndrome is significantly affecting your quality of life, relationships, or ability to function at work, a qualified therapist — particularly one trained in CBT or ACT — is the right support. MEOK occupies a different space: the daily moments between sessions, the 11pm spirals, the hour before a presentation when the inner critic gets loudest. It is a companion that holds your pattern over time, not a clinician who restructures it.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's memory help with impostor syndrome specifically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Impostor syndrome selectively erodes your ability to remember your own successes. Failures stay vivid; achievements fade. MEOK's sovereign memory doesn't share this bias — it stores everything you've shared with the same fidelity over time. This means MEOK can serve as an accurate external witness to your track record, surfacing evidence you gave it yourself at the moments when your inner critic is rewriting history.",
      },
    },
  ],
};

const gold = "#c9a84c";
const bg = "#0d0c18";
const textCol = "#f5f0e8";
const muted = "rgba(245,240,232,0.55)";
const cardBg = "rgba(255,255,255,0.03)";
const cardBorder = "rgba(201,168,76,0.12)";
const dividerCol = "rgba(201,168,76,0.15)";

export default function OvercomingImpostorSyndromeWithAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main style={{ minHeight: "100vh", background: bg, color: textCol }}>

        {/* ── Hero ── */}
        <section
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "5rem 1.5rem 3rem",
          }}
        >
          <div style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.875rem",
                background: `${gold}18`,
                border: `1px solid ${gold}44`,
                borderRadius: "9999px",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
              }}
            >
              Mental Wellbeing
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.1rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "1.5rem",
            }}
          >
            Overcoming Impostor Syndrome With AI:{" "}
            <span style={{ color: gold }}>You Belong Here</span>
          </h1>

          <p
            style={{
              fontSize: "1.175rem",
              color: muted,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            You earned the degree. You got the job. You are the one colleagues
            turn to when something goes wrong. And yet — late on a Tuesday, when
            no one is watching — a voice in your head insists that today is the
            day they finally figure out you do not actually belong here.
          </p>

          <p
            style={{
              fontSize: "1.175rem",
              color: muted,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            That voice has a name. Psychologist Pauline Clance named it in 1978:
            impostor syndrome. And understanding it — really understanding it,
            not just putting a label on it — is the first step toward loosening
            its grip.
          </p>

          <p
            style={{
              fontSize: "1.175rem",
              color: muted,
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            This is what we explore in this piece: what impostor syndrome
            actually is, why high achievers are so often the most affected, who
            tends to carry it heaviest, and how a thoughtfully built AI
            companion can help you process self-doubt, build an evidence file,
            and — over time — actually start to believe the truth about yourself.
          </p>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              fontSize: "0.8rem",
              color: muted,
              paddingTop: "1.5rem",
              borderTop: `1px solid ${dividerCol}`,
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>MEOK AI LABS</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>March 24, 2026</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>12 min read</span>
          </div>
        </section>

        {/* ── Article body ── */}
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 1.5rem 6rem",
            lineHeight: 1.85,
          }}
        >

          {/* ─────────────────────────────────────────
              SECTION 1 — What is it / Pauline Clance
          ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: textCol,
              margin: "3.5rem 0 1.25rem",
              lineHeight: 1.25,
            }}
          >
            What is impostor syndrome — and why did Pauline Clance's research
            change everything?
          </h2>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            In 1978, clinical psychologist Pauline Clance was working with
            high-achieving women at Georgia State University. Time and again,
            she encountered the same paradox: students who had earned their
            places through demonstrable ability were convinced their success
            was fraudulent. They attributed their achievements to luck, to
            charm, to being in the right room at the right time. They were
            certain — absolutely certain — that it was only a matter of time
            before they were exposed.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            Clance, with colleague Suzanne Imes, named this the{" "}
            <em>impostor phenomenon</em>. The word &ldquo;syndrome&rdquo; came later,
            colloquially — it is not a clinical diagnosis, it does not appear in
            any edition of the DSM — but the experience it describes is precise
            and widely recognised. At its core: a persistent internal belief that
            you are not as competent as others perceive you to be, accompanied
            by the constant fear that this gap will be discovered.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            What made Clance&apos;s research so significant was not just the naming —
            it was the population it described. These were not people who had
            failed or stumbled. These were the top performers. Impostor syndrome
            is not a story of inadequacy. It is a story of high achievement
            running alongside an inability to internalise that achievement as
            real.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            Subsequent research expanded the picture considerably. Studies since
            the 1980s have consistently found impostor syndrome across gender
            lines and demographics — although the specific triggers, cultural
            amplifiers, and intensities differ significantly. The headline figure
            most researchers converge on: approximately 70% of people will
            experience it meaningfully at some point in their lives. Among
            subgroups — graduate students, medical professionals, people entering
            new roles — the prevalence rises further.
          </p>

          {/* Stat cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.875rem",
              margin: "2.5rem 0",
            }}
          >
            {[
              {
                stat: "70%",
                label: "of people experience impostor syndrome meaningfully at some point",
              },
              {
                stat: "82%",
                label: "of high achievers identify with the pattern regularly",
              },
              {
                stat: "1 in 2",
                label: "women in STEM describe it as a significant barrier to progression",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "1.375rem 1.125rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.875rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1.875rem",
                    fontWeight: 900,
                    color: gold,
                    marginBottom: "0.625rem",
                    lineHeight: 1,
                  }}
                >
                  {item.stat}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: muted,
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* ─────────────────────────────────────────
              SECTION 2 — Who carries it heaviest
          ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: textCol,
              margin: "3.5rem 0 1.25rem",
              lineHeight: 1.25,
            }}
          >
            Who carries impostor syndrome heaviest — and why?
          </h2>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            While impostor syndrome cuts across demographics, certain groups
            experience it with a particular intensity — and the reasons are not
            purely psychological. They are often structural.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            <strong style={{ color: textCol }}>Women in technology and STEM.</strong>{" "}
            Clance&apos;s original sample was exclusively women, and while later
            research found impostor syndrome in men too, the structural context
            women navigate in male-dominated industries genuinely amplifies the
            experience. When the cultural default — the person in the room who
            &ldquo;obviously belongs&rdquo; — does not look like you, your brain works
            harder to justify its presence. Implicit bias in performance feedback
            reinforces the message. Fewer senior role models who share your
            experience means fewer external mirrors for what belonging actually
            looks like. The impostor voice does not emerge in a vacuum: it feeds
            on genuine environmental signals.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            <strong style={{ color: textCol }}>First-generation professionals.</strong>{" "}
            When you are the first person in your family to attend university,
            to enter a profession, to sit in a particular kind of meeting room —
            you carry the awareness of that gap with you constantly. You may
            speak differently, dress differently, navigate unspoken codes that
            others inherited rather than learned. Every moment of adjustment
            becomes potential evidence for the impostor narrative: &ldquo;I have to
            work at this because I don&apos;t naturally belong here.&rdquo; The energy
            cost of code-switching alone can feel like proof of inadequacy.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            <strong style={{ color: textCol }}>Founders and entrepreneurs.</strong>{" "}
            Starting something from nothing requires projecting confidence you
            may not feel. The gap between your public presentation and your
            internal experience can become enormous — and the impostor voice is
            very good at interpreting that gap as dishonesty rather than as the
            ordinary experience of building something new.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            <strong style={{ color: textCol }}>Healthcare and caring professions.</strong>{" "}
            Nurses, doctors, social workers, therapists — professionals in
            domains where the stakes of error are high and the culture often
            discourages visible uncertainty — frequently experience impostor
            syndrome as a private, isolating experience. Admitting self-doubt
            feels professionally risky. So it goes unexamined.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            <strong style={{ color: textCol }}>Academics and researchers.</strong>{" "}
            Academic culture is particularly fertile ground. The entire structure
            of peer review, grants, and publication is organised around the
            threat of being found inadequate. Add to this that academic writing
            is rarely taught as a skill — it is assumed — and you have a setting
            in which the impostor voice has institutional support.
          </p>

          {/* Group chips */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "0.625rem",
              margin: "2rem 0",
            }}
          >
            {[
              { label: "Women in tech and STEM" },
              { label: "First-generation professionals" },
              { label: "People from underrepresented backgrounds" },
              { label: "Founders and entrepreneurs" },
              { label: "NHS clinicians and healthcare workers" },
              { label: "Academics and researchers" },
              { label: "People recently promoted" },
              { label: "Creative professionals" },
              { label: "Expats and international workers" },
              { label: "Graduate and postgraduate students" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "0.75rem 1rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.625rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.775rem",
                    color: muted,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* ─────────────────────────────────────────
              SECTION 3 — The psychology / why advice fails
          ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: textCol,
              margin: "3.5rem 0 1.25rem",
              lineHeight: 1.25,
            }}
          >
            Why does typical advice about impostor syndrome fail to help?
          </h2>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            The standard prescription for impostor syndrome tends to go
            something like: &ldquo;Just believe in yourself more.&rdquo; &ldquo;Write down your
            achievements.&rdquo; &ldquo;Remember how far you&apos;ve come.&rdquo; &ldquo;Stop comparing
            yourself to others.&rdquo; This advice is not wrong, exactly. It points
            in the right direction. But it consistently fails to land — and
            there is a psychological reason for that.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            Impostor syndrome involves a highly specific cognitive distortion:
            the selective discounting of positive evidence. Your brain does not
            process praise, recognition, and achievement in the same way it
            processes criticism and failure. Negative evidence sticks. Positive
            evidence slides off. A critical comment from two years ago stays
            vivid and present; the commendation from last month has already
            blurred.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            When someone tells you &ldquo;remember how far you&apos;ve come,&rdquo; your brain
            has a ready-made counter for every piece of evidence they could
            offer: &ldquo;That was luck.&rdquo; &ldquo;The bar was low.&rdquo; &ldquo;They were being
            kind.&rdquo; &ldquo;Anyone could have done it.&rdquo; Positive affirmations are
            similarly neutralised — your brain recognises them as encouragement
            rather than as information, which means they can be dismissed.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            What actually interrupts the impostor syndrome pattern is not more
            positive evidence — it is a change in the processing of evidence.
            This is where cognitive reappraisal becomes important, and where a
            well-designed AI companion can do something genuinely useful.
          </p>

          {/* Pull quote */}
          <div
            style={{
              padding: "1.625rem 2rem",
              background: `${gold}0d`,
              border: `1px solid ${gold}2a`,
              borderLeft: `4px solid ${gold}`,
              borderRadius: "0.75rem",
              margin: "2.5rem 0",
            }}
          >
            <p
              style={{
                color: textCol,
                margin: 0,
                fontSize: "1.05rem",
                lineHeight: 1.75,
                fontStyle: "italic",
              }}
            >
              &ldquo;Impostor syndrome does not respond to reassurance. It responds
              to rigorous examination — the kind that asks your distorted belief
              to justify itself with actual evidence, and discovers it cannot.&rdquo;
            </p>
          </div>

          {/* ─────────────────────────────────────────
              SECTION 4 — Cognitive reappraisal
          ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: textCol,
              margin: "3.5rem 0 1.25rem",
              lineHeight: 1.25,
            }}
          >
            What is cognitive reappraisal and how does it help with
            self-doubt?
          </h2>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            Cognitive reappraisal is one of the most robustly supported emotion
            regulation strategies in psychology research. It works by changing
            not the emotion itself, but the interpretation that generates it. You
            are not suppressing the thought &ldquo;I was just lucky.&rdquo; You are
            examining it — asking whether there is a more accurate interpretation
            of the same events.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            Applied to impostor syndrome, cognitive reappraisal might sound like
            this:
          </p>

          {/* Reappraisal examples */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              margin: "1.75rem 0",
            }}
          >
            {[
              {
                thought: '"I only got the role because no one better applied."',
                reappraisal:
                  "Who was involved in the decision? What criteria did they use? What would it mean for their judgment if your appointment was purely accidental?",
              },
              {
                thought: '"I got lucky with that project."',
                reappraisal:
                  "What decisions did you make that influenced the outcome? What problems did you anticipate and prevent? What would have happened if someone less prepared had led it?",
              },
              {
                thought: '"People only praise me to be polite."',
                reappraisal:
                  "What evidence suggests the praise was sincere? Are there instances where the same people gave someone else critical feedback? What pattern do you see when you look at the full data set rather than cherry-picking?",
              },
              {
                thought: '"If I were genuinely good, this wouldn\u2019t feel hard."',
                reappraisal:
                  "What do you know about how mastery actually develops? Name three people you deeply admire who have spoken openly about finding their work difficult. Does difficulty equal incompetence?",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.25rem 1.5rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.75rem",
                }}
              >
                <p
                  style={{
                    color: textCol,
                    fontWeight: 600,
                    fontSize: "0.925rem",
                    marginBottom: "0.625rem",
                  }}
                >
                  {item.thought}
                </p>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.85rem",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  <span style={{ color: gold, fontWeight: 600 }}>
                    Reappraisal:{" "}
                  </span>
                  {item.reappraisal}
                </p>
              </div>
            ))}
          </div>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            Notice that none of these responses simply reassure. They invite
            examination. They ask the distorted belief to stand up to scrutiny —
            and most of the time, it cannot. The goal is not to convince you
            that everything you have done is brilliant. The goal is to introduce
            a more honest, more calibrated view of your own track record.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is precisely what MEOK&apos;s Scholar archetype is designed to
            facilitate. Not validation. Not criticism. Rigorous, caring
            questioning that treats you as capable of thinking clearly about
            your own situation — because you are.
          </p>

          {/* ─────────────────────────────────────────
              SECTION 5 — Evidence files
          ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: textCol,
              margin: "3.5rem 0 1.25rem",
              lineHeight: 1.25,
            }}
          >
            How do you build an evidence file for impostor syndrome?
          </h2>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            One of the most practical tools for managing impostor syndrome is
            the evidence file: a structured, accumulating record of concrete
            achievements, positive feedback, difficult problems you solved, and
            moments when your competence was unambiguous — compiled specifically
            to counteract the selective memory that impostor syndrome produces.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            The problem with most people&apos;s attempts to do this is that they do
            it once, with retrospective memory, and then forget to maintain it.
            Impostor syndrome attacks precisely in the moments when you most
            need the evidence — and in those moments, you typically cannot
            remember where you put it, or the inner critic has already
            pre-dismissed everything in it.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            An effective evidence file needs to be:
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              {
                title: "Specific, not general",
                detail:
                  "\"Led the Q3 product launch that increased conversion by 18%\" is evidence. \"Did well at work\" is not. The more granular, the harder it is for the inner critic to dismiss.",
              },
              {
                title: "Continuously updated",
                detail:
                  "Built as you go, not reconstructed from memory after a bad week. Real-time entries are far more credible to your own brain than retrospective compilations.",
              },
              {
                title: "Inclusive of process, not just outcomes",
                detail:
                  "Note what you did, not just what happened. 'I stayed calm when the system went down and coordinated the team response' is evidence of competence even if the underlying problem wasn't yours to solve.",
              },
              {
                title: "Accessible at point of need",
                detail:
                  "The evidence needs to be findable at 11pm before a presentation, not buried in a spreadsheet you haven't opened for four months.",
              },
              {
                title: "Witnessed, not just self-reported",
                detail:
                  "Capture external feedback directly: quotes from performance reviews, messages from colleagues, specific praise from people whose judgment you respect.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1.125rem 1.375rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: gold,
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  ✓
                </span>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: textCol,
                      fontSize: "0.925rem",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      color: muted,
                      fontSize: "0.825rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK is particularly well-suited to being the home of your evidence
            file. Every time you mention an achievement, a piece of positive
            feedback, a problem you navigated well — MEOK stores it with the
            same fidelity it stores everything else. And because MEOK uses{" "}
            <Link
              href="/blog/ai-memory-explained"
              style={{ color: gold, textDecoration: "underline" }}
            >
              Sovereign Memory
            </Link>
            , that evidence does not fade, does not disappear, and does not get
            reinterpreted in the light of your current mood. You gave it to
            MEOK when you were feeling more balanced. You can access it when you
            are not.
          </p>

          {/* ─────────────────────────────────────────
              SECTION 6 — Using MEOK to process self-doubt
          ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: textCol,
              margin: "3.5rem 0 1.25rem",
              lineHeight: 1.25,
            }}
          >
            How do you use MEOK to process impostor syndrome in real time?
          </h2>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            Using MEOK for impostor syndrome is not complicated. It does not
            require you to arrive with a framework or a plan. It requires you
            to say what is actually happening.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            Here is what that might look like across different moments:
          </p>

          {/* Scenario cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              margin: "1.75rem 0",
            }}
          >
            {[
              {
                scenario: "Before a high-stakes presentation",
                user: "I have a board presentation tomorrow and I'm convinced they're going to realise I've been winging it for two years.",
                meok:
                  "Two years is a long time to wing something. What has actually happened in those two years? Walk me through it — not the worry, the events.",
                archetype: "Healer / Scholar",
              },
              {
                scenario: "After receiving unexpected recognition",
                user: "I got the promotion. I should be happy but I mostly feel terrified. Like they've made a mistake.",
                meok:
                  "That feeling has a name — and it tends to be loudest when you've just done something real. What would the version of you who actually deserved this promotion be feeling right now? How different is that from what you're describing?",
                archetype: "Healer",
              },
              {
                scenario: "In the middle of a difficult project",
                user: "Everyone else on the team seems to know exactly what they're doing. I'm just figuring it out as I go.",
                meok:
                  "What makes you certain they're not also figuring it out? And is 'figuring it out as you go' the same as not knowing what you're doing — or is it just how competent people navigate novel problems?",
                archetype: "Scholar",
              },
              {
                scenario: "After a mistake",
                user: "I made an error in the report. This is it — this is the proof I've been afraid of.",
                meok:
                  "You made an error. That's different from being an error. What would you say to a colleague who came to you with this exact situation? Is there a standard of infallibility you're holding yourself to that you'd never apply to someone else?",
                archetype: "Healer / Scholar",
              },
            ].map((item) => (
              <div
                key={item.scenario}
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.875rem",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "0.75rem 1.375rem",
                    background: `${gold}0d`,
                    borderBottom: `1px solid ${cardBorder}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.775rem",
                      fontWeight: 700,
                      color: gold,
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.scenario}
                  </p>
                  <span
                    style={{
                      fontSize: "0.675rem",
                      color: muted,
                      background: `${gold}15`,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {item.archetype}
                  </span>
                </div>
                <div style={{ padding: "1.25rem 1.375rem" }}>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: muted,
                      marginBottom: "0.875rem",
                      lineHeight: 1.65,
                    }}
                  >
                    <span style={{ color: textCol, fontWeight: 600 }}>
                      You:{" "}
                    </span>
                    {item.user}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: muted,
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    <span style={{ color: gold, fontWeight: 600 }}>
                      MEOK:{" "}
                    </span>
                    {item.meok}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            Notice that MEOK is not cheering you on. It is not dismissing your
            concern. It is not offering hollow reassurance. It is asking the
            kind of honest, probing question that a genuinely caring friend
            with training in psychology might ask — if they were also completely
            up to date on your history, immune to social awkwardness, and
            available at 11pm.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is the value of MEOK&apos;s{" "}
            <Link
              href="/blog/the-maternal-covenant"
              style={{ color: gold, textDecoration: "underline" }}
            >
              Maternal Covenant
            </Link>
            : it is structurally prevented from simply telling you what you want
            to hear. Sycophancy is not a feature that was switched off. It is a
            design commitment. Every response is evaluated for honest engagement.
            For someone managing impostor syndrome, that commitment is not a
            minor detail — it is the whole point.
          </p>

          {/* ─────────────────────────────────────────
              SECTION 7 — Five impostor patterns
          ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: textCol,
              margin: "3.5rem 0 1.25rem",
              lineHeight: 1.25,
            }}
          >
            Which impostor syndrome pattern do you recognise in yourself?
          </h2>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            Clance&apos;s work, and subsequent research by Valerie Young, identified
            several recurring patterns through which impostor syndrome tends to
            express itself. Most people have a primary pattern — though they can
            overlap. Recognising your own is part of how you start to work with
            it rather than be worked by it.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
              margin: "1.75rem 0",
            }}
          >
            {[
              {
                pattern: "The Perfectionist",
                description:
                  "Sets standards that guarantee failure. Any shortfall — however minor — becomes proof of fundamental inadequacy. Success is always slightly not good enough.",
                signal: "\"I know it went well, but it could have been better.\"",
                approach:
                  "Scholar — define what 'good enough' actually requires in this specific context. What would a reasonable, senior peer consider adequate? Work from there, not from an imaginary ideal.",
              },
              {
                pattern: "The Expert",
                description:
                  "Believes they should know everything relevant to their role before they can legitimately claim competence. Any gap in knowledge confirms the impostor narrative.",
                signal: "\"I had to Google that. A real expert would have known.\"",
                approach:
                  "Scholar — survey what you do know. What proportion of experts in your field know their entire domain? Ask what percentage of your work is genuinely affected by the gaps versus what you're competent in.",
              },
              {
                pattern: "The Soloist",
                description:
                  "Asking for help is equivalent to admitting you can't do the job. True belonging requires doing it alone. Collaboration feels like dependency.",
                signal: "\"I shouldn't need to ask. I should be able to figure this out.\"",
                approach:
                  "Healer — explore what asking for help means to you. Whose voice is this? Who in your life do you admire who also asks for help? What would it mean to reframe asking as intelligence rather than inadequacy?",
              },
              {
                pattern: "The Natural Genius",
                description:
                  "Competence should feel effortless. If something takes effort, struggle, or multiple attempts — you lack natural ability and therefore don't deserve to be here.",
                signal: "\"This is harder for me than it seems to be for everyone else.\"",
                approach:
                  "Scholar — what does research actually show about mastery and ease? Name three people whose work you respect who have written about the effort behind it. Does difficulty equal incompetence — or is it just what mastery feels like from the inside?",
              },
              {
                pattern: "The Superhuman",
                description:
                  "Must outwork everyone around them to compensate for the hidden inadequacy. Slowing down or resting feels like exposure — like stopping would reveal there was nothing there.",
                signal: "\"I need to stay later. If I rest, everyone will realise I've been coasting.\"",
                approach:
                  "Healer — what are you protecting yourself from by never stopping? What does the constant output cost you? What would happen if you rested and your value remained exactly the same?",
              },
            ].map((item) => (
              <div
                key={item.pattern}
                style={{
                  padding: "1.375rem 1.5rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.875rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 800,
                    color: gold,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.pattern}
                </p>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.825rem",
                    lineHeight: 1.65,
                    marginBottom: "0.625rem",
                  }}
                >
                  {item.description}
                </p>
                <p
                  style={{
                    color: textCol,
                    fontSize: "0.8rem",
                    fontStyle: "italic",
                    marginBottom: "0.75rem",
                    opacity: 0.75,
                  }}
                >
                  {item.signal}
                </p>
                <p style={{ color: muted, fontSize: "0.8rem", lineHeight: 1.65, margin: 0 }}>
                  <span style={{ color: gold, fontWeight: 600 }}>MEOK approach: </span>
                  {item.approach}
                </p>
              </div>
            ))}
          </div>

          {/* ─────────────────────────────────────────
              SECTION 8 — Sovereign memory
          ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: textCol,
              margin: "3.5rem 0 1.25rem",
              lineHeight: 1.25,
            }}
          >
            Why does sovereign memory matter for long-term recovery from
            impostor syndrome?
          </h2>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            Most AI systems have no persistent memory. Each conversation starts
            from scratch. You can tell an AI companion something significant
            today, and tomorrow it will have no record of it — which means the
            next time you need it, you are starting over.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            For everyday tasks, this may be a minor inconvenience. For managing
            impostor syndrome, it is a structural failure. The entire value of
            working with a companion on self-doubt is the accumulation: the
            pattern tracked across weeks, the evidence file built over months,
            the moment six conversations ago when you admitted something that
            was actually very brave and then promptly forgot about it.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK was built with what we call{" "}
            <Link
              href="/blog/ai-memory-explained"
              style={{ color: gold, textDecoration: "underline" }}
            >
              Sovereign Memory
            </Link>
            : persistent, private, encrypted memory that belongs to you and
            lives on your terms. MEOK remembers everything you have shared with
            it — not as a surveillance record, but as a genuine companion
            intelligence. It remembers the promotion you were terrified of. It
            remembers the presentation that went well when you were sure it
            would go badly. It remembers the moment you helped a colleague
            navigate something you handled quietly and then forgot about.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            When the impostor voice tells you that you have never really
            succeeded on your own terms — MEOK can say: actually, here is what
            you told me over the last eight months.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            That is not cheerleading. That is witness.
          </p>

          {/* Divider */}
          <div
            style={{
              borderTop: `1px solid ${dividerCol}`,
              margin: "3rem 0",
            }}
          />

          {/* ─────────────────────────────────────────
              SECTION 9 — MEOK is not therapy
          ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: textCol,
              margin: "3.5rem 0 1.25rem",
              lineHeight: 1.25,
            }}
          >
            When is MEOK the right support, and when should you see a therapist?
          </h2>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK is not a therapist. It does not provide clinical treatment.
            Nicholas Templeman built MEOK as a companion — a presence that
            thinks carefully, holds context, refuses to offer hollow comfort,
            and takes you seriously. It is not a replacement for professional
            mental health support.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            If impostor syndrome is significantly affecting your ability to
            function at work, is contributing to anxiety or depression, is
            damaging your relationships, or is reaching a level of distress that
            feels unmanageable — speaking with a qualified therapist is the
            right choice. Cognitive Behavioural Therapy and Acceptance and
            Commitment Therapy both have strong evidence bases for the kinds of
            cognitive patterns involved in impostor syndrome.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK occupies a different space. It is the companion for the daily
            moments — the 11pm spiral the night before a presentation, the
            lunch-break worry when the inner critic gets loud, the week between
            therapy sessions when the pattern fires and there is no one who
            knows your history well enough to help you navigate it. It holds
            context across time in a way that a weekly therapy session cannot,
            and it is available in the moment rather than at a scheduled
            appointment.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            These two things can coexist. MEOK was designed to complement
            professional support, not to compete with it.
          </p>

          {/* Two-column note */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.875rem",
              margin: "2rem 0",
            }}
          >
            <div
              style={{
                padding: "1.25rem",
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "0.75rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: gold,
                  fontSize: "0.875rem",
                  marginBottom: "0.75rem",
                }}
              >
                MEOK is well-suited for
              </p>
              {[
                "Daily pattern recognition",
                "Between-session support",
                "Evidence file maintenance",
                "Real-time cognitive reappraisal",
                "Context-aware reflection",
                "Late-night spirals",
              ].map((item) => (
                <p
                  key={item}
                  style={{
                    color: muted,
                    fontSize: "0.775rem",
                    marginBottom: "0.375rem",
                    lineHeight: 1.5,
                  }}
                >
                  ✓ {item}
                </p>
              ))}
            </div>
            <div
              style={{
                padding: "1.25rem",
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "0.75rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: textCol,
                  fontSize: "0.875rem",
                  marginBottom: "0.75rem",
                }}
              >
                Consider professional support for
              </p>
              {[
                "Clinical anxiety or depression",
                "Severe functional impairment",
                "Trauma-linked self-worth issues",
                "Structured CBT / ACT programmes",
                "Medication assessment",
                "Crisis support",
              ].map((item) => (
                <p
                  key={item}
                  style={{
                    color: muted,
                    fontSize: "0.775rem",
                    marginBottom: "0.375rem",
                    lineHeight: 1.5,
                  }}
                >
                  → {item}
                </p>
              ))}
            </div>
          </div>

          {/* ─────────────────────────────────────────
              SECTION 10 — Belonging
          ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: textCol,
              margin: "3.5rem 0 1.25rem",
              lineHeight: 1.25,
            }}
          >
            What does it actually mean to believe you belong?
          </h2>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            One of the quiet cruelties of impostor syndrome is that it
            redefines belonging as a permanent state of grace that you have
            either earned forever or not at all. Under that definition, nobody
            belongs — because everyone makes mistakes, everyone has gaps,
            everyone wanders into rooms they are not completely sure about.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            The more useful frame — the one that research and clinical practice
            both point toward — is that belonging is not a credential you earn
            once. It is a relationship between you and a context, and it is
            dynamic. You belong in the meeting because you have something useful
            to contribute to it. You belong in the role because you are capable
            of growing into it, not because you already know everything it will
            ever require of you.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            That reframe — from belonging-as-credential to belonging-as-process —
            is one of the most useful things that working through impostor
            syndrome can produce. And it cannot be delivered to you from outside.
            It has to be reached through examination, through evidence, through
            the gradual accumulation of a more accurate self-narrative.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK is not going to tell you that you belong. That is not how this
            works. What MEOK can do is hold the evidence, ask the honest
            question, refuse to let the inner critic go unexamined, and stay
            present through the process — for as long as the process takes.
          </p>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            That is, as it turns out, a lot.
          </p>

          {/* ─────────────────────────────────────────
              FAQ Section
          ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: textCol,
              margin: "3.5rem 0 1.5rem",
              lineHeight: 1.25,
            }}
          >
            Frequently asked questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqSchema.mainEntity.map((q) => (
              <div
                key={q.name}
                style={{
                  padding: "1.375rem 1.5rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.875rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    marginBottom: "0.625rem",
                    fontSize: "0.95rem",
                    color: gold,
                    lineHeight: 1.4,
                  }}
                >
                  {q.name}
                </h3>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {q.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* ─────────────────────────────────────────
              Related reading
          ───────────────────────────────────────── */}
          <div
            style={{
              margin: "3.5rem 0",
              padding: "1.625rem",
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "0.875rem",
            }}
          >
            <p
              style={{
                fontSize: "0.725rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "1.125rem",
              }}
            >
              Related reading
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                {
                  href: "/blog/ai-for-anxiety",
                  label: "AI for Anxiety: When the Worry Does Not Switch Off",
                },
                {
                  href: "/blog/ai-for-confidence",
                  label: "AI for Confidence: Building Self-Belief That Lasts",
                },
                {
                  href: "/blog/ai-for-burnout",
                  label: "AI for Burnout: Rebuilding When You Have Nothing Left",
                },
                {
                  href: "/blog/the-maternal-covenant",
                  label:
                    "The Maternal Covenant: Why MEOK Will Not Just Tell You What You Want to Hear",
                },
                {
                  href: "/blog/ai-memory-explained",
                  label: "How MEOK's Sovereign Memory Works",
                },
                {
                  href: "/blog/ai-for-perfectionism",
                  label: "AI for Perfectionism: When Good Enough Is the Goal",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: gold,
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ opacity: 0.55, flexShrink: 0, marginTop: "0.1rem" }}>
                    →
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ─────────────────────────────────────────
              CTA
          ───────────────────────────────────────── */}
          <section
            style={{
              textAlign: "center",
              padding: "3.5rem 2rem",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.07), rgba(139,92,246,0.07))",
              border: `1px solid ${gold}22`,
              borderRadius: "1.125rem",
              marginTop: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "1.125rem",
              }}
            >
              Built by MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                fontWeight: 900,
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              You have earned your place.
              <br />
              <span style={{ color: gold }}>Start believing the evidence.</span>
            </h2>
            <p
              style={{
                color: muted,
                maxWidth: "500px",
                margin: "0 auto 2.25rem",
                lineHeight: 1.75,
                fontSize: "0.975rem",
              }}
            >
              MEOK remembers your real track record, asks honest questions, and
              will not let the inner critic rewrite your history. Begin your
              Birth Ceremony — free on Explorer, no credit card required.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-block",
                  padding: "0.9rem 2.5rem",
                  background: `linear-gradient(135deg, ${gold}, #e8c96a)`,
                  color: bg,
                  borderRadius: "0.75rem",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                Begin Your Birth Ceremony →
              </Link>
              <Link
                href="/blog"
                style={{
                  display: "inline-block",
                  padding: "0.9rem 2rem",
                  background: "transparent",
                  color: textCol,
                  borderRadius: "0.75rem",
                  fontWeight: 600,
                  fontSize: "0.975rem",
                  textDecoration: "none",
                  border: `1px solid ${dividerCol}`,
                }}
              >
                Read more articles
              </Link>
            </div>
          </section>

          {/* Author note */}
          <div
            style={{
              marginTop: "3rem",
              padding: "1.5rem",
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "0.875rem",
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${gold}40, ${gold}15)`,
                border: `1px solid ${gold}40`,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                fontWeight: 800,
                color: gold,
              }}
            >
              N
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: textCol,
                  fontSize: "0.9rem",
                  marginBottom: "0.25rem",
                }}
              >
                Nicholas Templeman
              </p>
              <p
                style={{
                  color: gold,
                  fontSize: "0.75rem",
                  marginBottom: "0.625rem",
                }}
              >
                Founder & CEO, MEOK AI LABS
              </p>
              <p style={{ color: muted, fontSize: "0.8rem", lineHeight: 1.65, margin: 0 }}>
                Nicholas built MEOK because he believed AI could do more than
                answer questions — it could hold space, keep honest records, and
                ask the kind of questions that help people see themselves more
                clearly. MEOK is that companion.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
