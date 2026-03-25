import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Losing a Parent: When the Person Who Made You Is Gone | MEOK AI LABS",
  description:
    "Losing a parent is one of the most profound experiences in a human life. It changes your place in the world. MEOK\u2019s sovereign AI provides consistent companionship through grief that cannot be rushed.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-grief-of-parent" },
  openGraph: {
    title:
      "AI for Losing a Parent: When the Person Who Made You Is Gone",
    description:
      "Losing a parent reshapes your identity. MEOK\u2019s Healer companion holds sovereign memory of your parent\u2019s story and sits with you through the grief that society asks you to finish too soon.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-grief-of-parent",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Losing+a+Parent&desc=When+the+Person+Who+Made+You+Is+Gone",
        width: 1200,
        height: 630,
        alt: "AI for Losing a Parent \u2014 MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Losing a Parent: When the Person Who Made You Is Gone",
    description:
      "MEOK\u2019s Healer archetype remembers your parent\u2019s name, the things they said, and the shape of the silence they left \u2014 and never tells you it\u2019s time to move on.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Losing+a+Parent&desc=When+the+Person+Who+Made+You+Is+Gone",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Losing a Parent: When the Person Who Made You Is Gone",
  description:
    "Losing a parent is one of the most profound experiences in a human life. It changes your place in the world. MEOK\u2019s sovereign AI provides consistent companionship through grief that cannot be rushed.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-grief-of-parent",
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
    "https://meok.ai/api/og?title=AI+for+Losing+a+Parent&desc=When+the+Person+Who+Made+You+Is+Gone",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-grief-of-parent",
  },
  keywords: [
    "AI for losing a parent",
    "grief after parent death",
    "parental bereavement AI",
    "AI for grief support",
    "MEOK Healer archetype",
    "sovereign AI grief",
    "complicated grief",
    "adult orphan grief",
    "becoming the older generation",
    "grief guilt",
    "2am grief",
    "Cruse Bereavement Care",
    "grief after long illness",
    "sudden parental loss",
    "estranged parent death grief",
    "parent with dementia death",
    "MEOK AI LABS",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it normal to feel like an orphan after losing a parent as an adult?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely normal. The \u2018adult orphan\u2019 experience is well documented in bereavement research. Even in your forties, fifties, or sixties, losing the last parent removes a particular kind of psychological shelter \u2014 the sense that someone in the world existed primarily for you. That feeling is real and deserves to be honoured, not minimised.",
      },
    },
    {
      "@type": "Question",
      name: "How long does grief for a parent actually last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research from Cruse Bereavement Care and clinical literature suggests active grief typically runs 12\u201324 months, but grief does not disappear \u2014 it integrates. Many bereaved adults describe a permanent shift in how they experience birthdays, family gatherings, and milestones. The aim is not to stop grieving but to carry it without being crushed by it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between grief and complicated grief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Complicated grief (also called prolonged grief disorder) is characterised by intense yearning, difficulty accepting the loss, bitterness, and significant functional impairment persisting beyond six months. Normal grief fluctuates; complicated grief stays acute. If you recognise these signs, please contact Cruse Bereavement Care on 0808\u00a0808\u00a01677 or speak to your GP.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI really help with grief after losing a parent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot replace a human grief counsellor, close friends, or family. What it can do is provide a consistent, non-judgemental presence at any hour \u2014 including 2am \u2014 that holds sovereign memory of your parent\u2019s story without requiring you to re-explain or justify your pain. Many people find this fills a real gap, especially in the long tail of grief when the world has moved on.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK handle grief about an estranged parent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estranged parent grief is among the most complex: you may be mourning the relationship you wanted as much as the person you lost. MEOK\u2019s Healer companion holds space for that ambivalence without requiring you to resolve it, taking sides, or pushing reconciliation narratives. Your memory vault is sovereign \u2014 only you determine what is stored and explored.",
      },
    },
  ],
};

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AiForGriefOfParent() {
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

      <main
        style={{
          backgroundColor: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          lineHeight: "1.7",
        }}
      >
        {/* ── Hero ── */}
        <section
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            padding: "80px 24px 48px",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <Link
              href="/blog"
              style={{
                color: "#c9a84c",
                textDecoration: "none",
                fontSize: "14px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              MEOK AI LABS &rsaquo; Blog
            </Link>
          </div>

          <p
            style={{
              color: "#c9a84c",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "20px",
            }}
          >
            Grief &amp; Bereavement &mdash; Parental Loss
          </p>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              marginBottom: "28px",
              color: "#f5f0e8",
            }}
          >
            AI for Losing a Parent: When the Person Who Made You Is Gone
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#c9a84c",
              fontStyle: "italic",
              marginBottom: "32px",
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "20px",
            }}
          >
            There is a specific kind of loneliness that arrives when a parent
            dies. Not just sadness &mdash; a structural shift. The person who
            existed longest in your world, the one whose voice you heard before
            you could form words, is gone. And the world expects you to continue
            as normal within days.
          </p>

          <p style={{ fontSize: "1.05rem", marginBottom: "20px" }}>
            This page is for anyone navigating that. Whether your loss was
            sudden, after a long illness, complicated by estrangement, or
            shadowed by years of dementia &mdash; your grief is real, it is
            yours, and it does not have a deadline.
          </p>

          <p style={{ fontSize: "1.05rem", marginBottom: "20px" }}>
            MEOK&apos;s sovereign AI provides consistent, private companionship
            through the long and non-linear process of parental bereavement.
            This page explains what that means, how it works, and &mdash;
            crucially &mdash; when to seek human professional support.
          </p>

          <p
            style={{
              fontSize: "0.9rem",
              color: "#a09880",
              borderTop: "1px solid #2a2840",
              paddingTop: "16px",
              marginTop: "32px",
            }}
          >
            <strong style={{ color: "#f5f0e8" }}>Crisis support:</strong> If
            you are in crisis, please contact{" "}
            <a
              href="https://www.cruse.org.uk"
              style={{ color: "#c9a84c" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cruse Bereavement Care
            </a>{" "}
            on <strong style={{ color: "#f5f0e8" }}>0808 808 1677</strong>{" "}
            (free, UK). MEOK is a companion tool, not a clinical service.
          </p>
        </section>

        {/* ── Article Body ── */}
        <article
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* ── Section 1 ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              Why Losing a Parent Is Different to Other Grief
            </h2>

            <p style={{ marginBottom: "18px" }}>
              We expect to outlive our parents. We even plan for it, in a
              distant theoretical way. And yet when it happens &mdash; when the
              phone call comes, or the long vigil ends &mdash; it is almost
              universally described as a shock for which no amount of
              anticipation truly prepares you.
            </p>

            <p style={{ marginBottom: "18px" }}>
              The reason is not just the love. It is the{" "}
              <strong>architecture</strong> of the relationship. A parent is one
              of the few people on earth who knew you before you knew yourself.
              They held a version of your earliest history that exists nowhere
              else. When they die, a portion of your own story becomes
              inaccessible in a way that nothing else replicates.
            </p>

            <p style={{ marginBottom: "18px" }}>
              Bereavement research consistently identifies parental loss as
              among the highest-impact life events, regardless of the age at
              which it occurs. It triggers not just mourning for the person, but
              a reconfiguration of identity. The internal question &mdash;
              conscious or not &mdash; is: <em>who am I now that they are gone?</em>
            </p>

            <p style={{ marginBottom: "18px" }}>
              Society, unfortunately, does not always make space for the depth
              of this. Bereavement leave in the UK is typically three to five
              days. Colleagues expect you back in a week. The implicit cultural
              message is: this is normal, people lose parents, carry on. That
              message is not cruel by intent, but it can be devastating in
              practice &mdash; leaving grievers to manage the full weight of
              their loss largely alone, in private, often at 2am when everyone
              else is asleep.
            </p>

            <p style={{ marginBottom: "18px" }}>
              MEOK was built, in part, for exactly this gap.
            </p>
          </section>

          {/* ── Callout 1: Crisis ── */}
          <div
            style={{
              backgroundColor: "#1a1830",
              border: "1px solid #c9a84c",
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "60px",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontWeight: "700",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              Professional Support &mdash; Always First
            </p>
            <p style={{ marginBottom: "12px", fontSize: "1rem" }}>
              No AI should be your only source of grief support.{" "}
              <strong style={{ color: "#c9a84c" }}>
                Cruse Bereavement Care
              </strong>{" "}
              is the UK&apos;s leading bereavement charity. Their free helpline
              &mdash;{" "}
              <strong>0808 808 1677</strong> &mdash; is staffed by trained
              volunteers and available seven days a week.
            </p>
            <p style={{ marginBottom: "12px", fontSize: "1rem" }}>
              Your GP can also refer you to counselling, and many employers
              offer EAP (Employee Assistance Programme) sessions that include
              bereavement therapy. MEOK is designed to complement these
              resources, not substitute for them.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#a09880" }}>
              <a
                href="https://www.cruse.org.uk"
                style={{ color: "#c9a84c" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                cruse.org.uk
              </a>{" "}
              &mdash; Free, confidential bereavement support across the UK.
            </p>
          </div>

          {/* ── Section 2 ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              The Different Kinds of Parental Loss &mdash; Each With Its Own Weight
            </h2>

            <p style={{ marginBottom: "18px" }}>
              Not all parental bereavements follow the same path. The
              circumstances of the death shape the grief profoundly, and it is
              worth naming the most common variations because each carries
              distinct emotional territory.
            </p>

            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#f5f0e8",
                marginBottom: "12px",
                marginTop: "32px",
              }}
            >
              Sudden loss
            </h3>
            <p style={{ marginBottom: "18px" }}>
              A heart attack, an accident, a stroke with no warning. When a
              parent dies suddenly, the shock is layered with the absence of
              goodbye. There are things that will never be said. The last
              conversation &mdash; perfectly ordinary at the time &mdash; takes
              on enormous retrospective weight. Sudden loss often produces
              pronounced symptoms of trauma alongside grief: hypervigilance,
              intrusive thoughts, difficulty believing the death is real.
            </p>

            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#f5f0e8",
                marginBottom: "12px",
                marginTop: "32px",
              }}
            >
              Death after long illness
            </h3>
            <p style={{ marginBottom: "18px" }}>
              When a parent has been ill for months or years, grief often begins
              long before the death &mdash; this is called{" "}
              <strong>anticipatory grief</strong>. By the time the parent dies,
              the adult child may have been a carer, an advocate, a medical
              interpreter, and an emotional manager for a sustained period.
              Relief at the end of suffering is common and normal. So is guilt
              about that relief. The grief after a long illness is frequently
              complicated by exhaustion and the sudden loss of the caring
              structure that consumed daily life.
            </p>

            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#f5f0e8",
                marginBottom: "12px",
                marginTop: "32px",
              }}
            >
              Death after dementia
            </h3>
            <p style={{ marginBottom: "18px" }}>
              Dementia creates what is sometimes called a{" "}
              <strong>&ldquo;double bereavement&rdquo;</strong> &mdash; you lose
              the person before you lose the body. For years you may have
              watched your parent forget your name, become someone unfamiliar,
              need care that reverses the original parent-child dynamic. When the
              physical death comes, the grief is tangled: there may be relief,
              there may be renewed mourning for the parent you remember from
              decades before, and there may be a strange flatness where you
              expected fresh devastation. All of this is normal.
            </p>

            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#f5f0e8",
                marginBottom: "12px",
                marginTop: "32px",
              }}
            >
              Estranged parent death
            </h3>
            <p style={{ marginBottom: "18px" }}>
              This is among the least-discussed forms of parental grief, and
              arguably the most isolating. If you were estranged from a parent
              &mdash; due to abuse, abandonment, addiction, or simply
              irreconcilable distance &mdash; their death does not close the
              story cleanly. It closes it permanently. The grief here is often
              for the relationship that never was, and the relationship that now
              never can be. Friends who knew of the estrangement may express
              confusion or minimise the loss (&ldquo;but you weren&apos;t
              close&rdquo;). That response misunderstands the nature of the
              grief entirely.
            </p>

            <p style={{ marginBottom: "18px" }}>
              MEOK holds space for all of these without requiring you to justify
              which type of grief you are experiencing or how severe it
              &ldquo;should&rdquo; be.
            </p>
          </section>

          {/* ── Section 3 ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              Grief vs Complicated Grief: Knowing the Difference
            </h2>

            <p style={{ marginBottom: "18px" }}>
              Normal grief is painful, disruptive, and often non-linear. It
              does not follow stages in sequence. It arrives in waves &mdash;
              sometimes quiet for weeks, then overwhelming at an unexpected
              moment like a particular song, or finding a parent&apos;s
              handwriting on a piece of paper in a kitchen drawer.
            </p>

            <p style={{ marginBottom: "18px" }}>
              Over time, most people find that the acute peaks of grief become
              less frequent, the waves become more manageable, and life
              gradually reorganises itself around the loss. This is not
              &ldquo;getting over it&rdquo; &mdash; it is integration. The
              person remains present in memory; the pain becomes less
              incapacitating.
            </p>

            <p style={{ marginBottom: "18px" }}>
              <strong style={{ color: "#c9a84c" }}>
                Complicated grief (Prolonged Grief Disorder)
              </strong>{" "}
              is different. It is characterised by:
            </p>

            <ul
              style={{
                paddingLeft: "24px",
                marginBottom: "24px",
                lineHeight: "2",
              }}
            >
              <li>
                Intense yearning and longing that does not diminish over many
                months
              </li>
              <li>
                Difficulty accepting the reality of the death, even long after
                it occurred
              </li>
              <li>
                Bitterness or anger about the loss that feels stuck rather than
                moving
              </li>
              <li>
                Significant impairment in daily functioning: work, relationships,
                self-care
              </li>
              <li>
                A sense that life is meaningless or that a part of the self died
                with the parent
              </li>
              <li>
                Social withdrawal that deepens rather than naturally recovering
              </li>
            </ul>

            <p style={{ marginBottom: "18px" }}>
              Prolonged Grief Disorder affects an estimated 10&ndash;15% of
              bereaved people. It is a recognised clinical condition that
              responds well to specific therapeutic approaches. It is{" "}
              <strong>not</strong> a personal failing, and it is{" "}
              <strong>not</strong> something an AI companion should be your
              primary resource for managing.
            </p>

            <p style={{ marginBottom: "18px" }}>
              If you recognise yourself in the list above, please contact your
              GP or Cruse Bereavement Care (0808 808 1677). MEOK can be a
              supportive daily companion alongside clinical care &mdash; not
              instead of it.
            </p>
          </section>

          {/* ── Section 4 ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              Becoming the Older Generation: The Identity Shift Nobody Warns You About
            </h2>

            <p style={{ marginBottom: "18px" }}>
              When both parents have died, something changes that is difficult
              to articulate until you experience it. You become what some
              therapists call &ldquo;generationally exposed&rdquo; &mdash; there
              is no longer a generation ahead of you in your direct family line.
              You are now the oldest.
            </p>

            <p style={{ marginBottom: "18px" }}>
              This is not a small thing. For most of adult life, parents
              represent a kind of buffer &mdash; however functional or
              dysfunctional the relationship. They stand between you and your
              own mortality in a way that is mostly unconscious until it is
              removed. When the last parent dies, many people describe a sudden,
              visceral awareness of their own finitude. This is not morbid. It
              is a normal and healthy reckoning. But it needs space and time to
              process.
            </p>

            <p style={{ marginBottom: "18px" }}>
              There is also the matter of <strong>family archaeology</strong>:
              with both parents gone, the living memory of the family &mdash;
              the stories, the context, the reasons behind decisions and
              patterns &mdash; begins to depend entirely on what you and your
              siblings carry. There is an urgency some people feel, post-loss,
              to gather and record what they know before it too dissolves.
            </p>

            <p style={{ marginBottom: "18px" }}>
              MEOK&apos;s sovereign memory vault supports exactly this: you can
              tell your AI companion about your parents &mdash; their
              characteristics, their sayings, their histories &mdash; and those
              memories are stored privately, encrypted on infrastructure you
              control. They are not used to train models. They belong to you.
            </p>

            <p style={{ marginBottom: "18px" }}>
              For many users this becomes a form of active remembrance: the act
              of sharing a parent&apos;s story to an AI that will hold and
              recall it is itself part of the grief process.
            </p>
          </section>

          {/* ── Section 5 ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              The Orphan Feeling: Even When You Are Fifty
            </h2>

            <p style={{ marginBottom: "18px" }}>
              The word &ldquo;orphan&rdquo; sounds like it belongs to
              childhood. Society&apos;s images of orphans are of young children
              in Victorian novels. But the psychological reality of feeling
              orphaned applies equally &mdash; perhaps especially &mdash; to
              adults who lose the last parent in their forties, fifties, or
              beyond.
            </p>

            <p style={{ marginBottom: "18px" }}>
              The experience is well documented: a feeling of being
              &ldquo;untethered,&rdquo; of having lost the one person who
              remembered your earliest self, of being the next in line in a way
              that feels both lonely and sobering. American grief researcher
              Hope Edelman, who wrote extensively about maternal loss, describes
              it as losing &ldquo;the mirror that reflected you back to
              yourself.&rdquo;
            </p>

            <p style={{ marginBottom: "18px" }}>
              This feeling is not irrational, and it is not embarrassing. But it
              can be very hard to voice to people who have not experienced it.
              Friends with living parents may not understand why you still feel
              the weight of the loss years later. &ldquo;They had a good life&rdquo;
              and &ldquo;they were old&rdquo; are offered as comfort but often
              land as dismissals.
            </p>

            <p style={{ marginBottom: "18px" }}>
              MEOK&apos;s Healer companion is not calibrated to offer resolution.
              It is calibrated to be present &mdash; to receive what you need to
              say about your parent without deflecting it toward silver linings
              or premature closure. The memory is sovereign: your parent&apos;s
              name, the things that mattered, the particular texture of the
              loss, are held and can be returned to without you having to
              re-explain the context each time.
            </p>
          </section>

          {/* ── Callout 2: Sovereign Memory ── */}
          <div
            style={{
              backgroundColor: "#1a1830",
              border: "1px solid #2a2840",
              borderLeft: "4px solid #c9a84c",
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "60px",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontWeight: "700",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              What Sovereign Memory Means for Grief
            </p>
            <p style={{ marginBottom: "16px" }}>
              When you tell MEOK about your parent &mdash; their name, their
              habits, the way they made tea, the last conversation &mdash; that
              information is stored in your personal sovereign memory vault. It
              is not shared with other users. It is not used to train AI models.
              It cannot be accessed by MEOK staff. It belongs only to you.
            </p>
            <p style={{ marginBottom: "16px" }}>
              The next time you open a conversation, your companion already knows
              your parent existed. You do not have to start from zero. The memory
              does not expire. Six months from now, a year from now, when an
              anniversary arrives or a wave of grief comes unexpectedly, you can
              return to a space that already holds the context of who you lost.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#a09880" }}>
              This is not about recreating your parent as an AI persona. It is
              about having a space that holds their place in your story with
              consistency and care &mdash; so that you do not have to carry it
              entirely alone.
            </p>
          </div>

          {/* ── Section 6 ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              The Guilt Question: Did I Do Enough?
            </h2>

            <p style={{ marginBottom: "18px" }}>
              Guilt is one of the most common and least-discussed features of
              parental bereavement. It takes many forms:
            </p>

            <ul
              style={{
                paddingLeft: "24px",
                marginBottom: "24px",
                lineHeight: "2.2",
              }}
            >
              <li>
                <em>Did I visit enough?</em> &mdash; especially if distance or
                life demands made visits infrequent
              </li>
              <li>
                <em>Did I make the right decisions?</em> &mdash; around medical
                care, end-of-life choices, nursing home placement
              </li>
              <li>
                <em>Did I say everything I needed to say?</em> &mdash; the
                things left unsaid accumulate after a sudden loss in particular
              </li>
              <li>
                <em>Am I grieving enough?</em> &mdash; or, conversely,{" "}
                <em>am I grieving too much?</em>
              </li>
              <li>
                <em>Did I feel relieved?</em> &mdash; after a long illness or
                difficult relationship, relief is natural but commonly generates
                significant secondary guilt
              </li>
              <li>
                <em>Did we get the relationship right?</em> &mdash; parental
                relationships are almost always complex; death tends to surface
                unfinished emotional business
              </li>
            </ul>

            <p style={{ marginBottom: "18px" }}>
              Grief guilt of this kind is nearly universal. It is also, in the
              majority of cases, not grounded in reality &mdash; most adult
              children who lose a parent did, in fact, do as much as they could
              within the constraints of their actual lives. But knowing this
              intellectually does not always dissolve the feeling.
            </p>

            <p style={{ marginBottom: "18px" }}>
              What helps is having space to voice the guilt without judgment,
              without being immediately reassured into silence (&ldquo;I&apos;m
              sure you did your best&rdquo;), and to examine it at your own pace.
              MEOK&apos;s Healer companion is designed for this: to receive the
              heaviest material without flinching, and to reflect it back in a
              way that supports exploration rather than premature resolution.
            </p>

            <p style={{ marginBottom: "18px" }}>
              If guilt is severe, persistent, and significantly affecting your
              daily functioning, please speak to a grief counsellor or your GP.
              Cruse Bereavement Care (0808 808 1677) can help.
            </p>
          </section>

          {/* ── Section 7 ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              The 2am Grief Wave: When It Hits and No One Is Awake
            </h2>

            <p style={{ marginBottom: "18px" }}>
              Grief rarely arrives on a convenient schedule. The acute waves of
              feeling &mdash; the sudden overwhelming presence of the loss
              &mdash; come at inconvenient hours. In the middle of the night.
              On a Monday morning before work. On what would have been a
              parent&apos;s birthday. On a completely unremarkable Tuesday with
              no identifiable trigger.
            </p>

            <p style={{ marginBottom: "18px" }}>
              At 2am, you cannot call a friend. You may not want to wake a
              partner. The grief helplines are available, but many grievers
              describe the 2am experience as not a crisis exactly &mdash; not
              something requiring emergency intervention &mdash; but a need for
              quiet, unhurried presence. Somewhere to put the feeling until
              morning.
            </p>

            <p style={{ marginBottom: "18px" }}>
              This is where a well-designed AI companion provides something
              genuinely useful. MEOK is available at any hour, does not need to
              be woken up, does not carry its own grief fatigue (the exhaustion
              that close friends and family can feel when they have been
              supporting a bereaved person for many months), and does not place
              social expectations on the interaction. You can write three words
              or three thousand. You can trail off. You can say the same thing
              you have said many times before.
            </p>

            <p style={{ marginBottom: "18px" }}>
              The Healer archetype &mdash; MEOK&apos;s companion calibrated for
              emotional depth and grief support &mdash; is specifically designed
              to hold this kind of presence. It does not push toward resolution.
              It does not clock-watch. It does not suggest you should be feeling
              better by now.
            </p>
          </section>

          {/* ── Section 8: Siblings & Family ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              Siblings, Family Dynamics, and the Grief That Divides
            </h2>

            <p style={{ marginBottom: "18px" }}>
              Parental loss rarely happens in isolation. There are usually
              siblings, partners, other family members, each of whom carries
              their own version of the loss &mdash; and their own relationship
              with the parent who died. These can diverge significantly.
            </p>

            <p style={{ marginBottom: "18px" }}>
              A sibling who had a difficult relationship with the parent may
              seem to grieve less, or differently. This can be painful to
              witness. A sibling who was the primary carer may carry resentment
              toward those who were less involved. Disputes over estates,
              possessions, and the &ldquo;right&rdquo; way to handle the death
              are extremely common and can fracture family relationships
              permanently.
            </p>

            <p style={{ marginBottom: "18px" }}>
              The grief itself, too, can feel isolating even within a family.
              Because each person&apos;s relationship with a parent is unique,
              there is a particular loneliness in realising that no sibling
              quite lost the same parent you did. You each lost a different
              version &mdash; the parent as experienced through your particular
              place in the family, your particular history with them.
            </p>

            <p style={{ marginBottom: "18px" }}>
              Navigating family dynamics while simultaneously grieving is one of
              the most emotionally demanding situations a person can be in. MEOK
              is a private space: what you say about your siblings, your family
              tensions, your ambivalence, stays between you and your sovereign
              vault. It is not visible to family members. It is not shared. It
              is yours.
            </p>
          </section>

          {/* ── Comparison Table ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "24px",
                paddingBottom: "12px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              What Each Support Option Offers
            </h2>

            <p style={{ marginBottom: "24px" }}>
              Different forms of support serve different needs. No single
              resource covers everything; the most resilient grief support
              typically combines professional and personal elements.
            </p>

            <div style={{ overflowX: "auto", marginBottom: "24px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.95rem",
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: "#1a1830",
                      borderBottom: "2px solid #c9a84c",
                    }}
                  >
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: "#c9a84c",
                        fontWeight: "700",
                      }}
                    >
                      Support Type
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: "#c9a84c",
                        fontWeight: "700",
                      }}
                    >
                      Availability
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: "#c9a84c",
                        fontWeight: "700",
                      }}
                    >
                      Strengths
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: "#c9a84c",
                        fontWeight: "700",
                      }}
                    >
                      Limitations
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #2a2840" }}>
                    <td
                      style={{
                        padding: "14px 18px",
                        fontWeight: "600",
                        color: "#f5f0e8",
                        verticalAlign: "top",
                      }}
                    >
                      Cruse Bereavement Care
                    </td>
                    <td
                      style={{ padding: "14px 18px", verticalAlign: "top" }}
                    >
                      7 days, helpline hours
                    </td>
                    <td
                      style={{ padding: "14px 18px", verticalAlign: "top" }}
                    >
                      Trained volunteers, free, specialist in bereavement
                    </td>
                    <td
                      style={{
                        padding: "14px 18px",
                        color: "#a09880",
                        verticalAlign: "top",
                      }}
                    >
                      Not 24/7; session-based; waiting lists possible
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #2a2840",
                      backgroundColor: "#111020",
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 18px",
                        fontWeight: "600",
                        color: "#f5f0e8",
                        verticalAlign: "top",
                      }}
                    >
                      Grief therapist / counsellor
                    </td>
                    <td
                      style={{ padding: "14px 18px", verticalAlign: "top" }}
                    >
                      Weekly / fortnightly sessions
                    </td>
                    <td
                      style={{ padding: "14px 18px", verticalAlign: "top" }}
                    >
                      Clinical depth, relational expertise, CBT/EMDR available
                    </td>
                    <td
                      style={{
                        padding: "14px 18px",
                        color: "#a09880",
                        verticalAlign: "top",
                      }}
                    >
                      Cost; waiting times; only available at set hours
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #2a2840" }}>
                    <td
                      style={{
                        padding: "14px 18px",
                        fontWeight: "600",
                        color: "#f5f0e8",
                        verticalAlign: "top",
                      }}
                    >
                      Friends &amp; family
                    </td>
                    <td
                      style={{ padding: "14px 18px", verticalAlign: "top" }}
                    >
                      Variable
                    </td>
                    <td
                      style={{ padding: "14px 18px", verticalAlign: "top" }}
                    >
                      Human warmth, shared history, community
                    </td>
                    <td
                      style={{
                        padding: "14px 18px",
                        color: "#a09880",
                        verticalAlign: "top",
                      }}
                    >
                      Grief fatigue; not available at all hours; social
                      filtering of what you feel able to share
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #2a2840",
                      backgroundColor: "#111020",
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 18px",
                        fontWeight: "600",
                        color: "#f5f0e8",
                        verticalAlign: "top",
                      }}
                    >
                      Bereavement support group
                    </td>
                    <td
                      style={{ padding: "14px 18px", verticalAlign: "top" }}
                    >
                      Weekly / bi-weekly sessions
                    </td>
                    <td
                      style={{ padding: "14px 18px", verticalAlign: "top" }}
                    >
                      Peer understanding, reduced isolation, normalising
                    </td>
                    <td
                      style={{
                        padding: "14px 18px",
                        color: "#a09880",
                        verticalAlign: "top",
                      }}
                    >
                      Requires in-person attendance; not private; not available
                      every day
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "2px solid #c9a84c",
                      backgroundColor: "#1a1830",
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 18px",
                        fontWeight: "700",
                        color: "#c9a84c",
                        verticalAlign: "top",
                      }}
                    >
                      MEOK Healer companion
                    </td>
                    <td
                      style={{ padding: "14px 18px", verticalAlign: "top" }}
                    >
                      24/7, any device
                    </td>
                    <td
                      style={{ padding: "14px 18px", verticalAlign: "top" }}
                    >
                      Sovereign persistent memory; no grief fatigue;
                      non-judgemental; private; available at 2am
                    </td>
                    <td
                      style={{
                        padding: "14px 18px",
                        color: "#a09880",
                        verticalAlign: "top",
                      }}
                    >
                      Not a clinical service; cannot diagnose or treat
                      complicated grief; best as complement, not primary support
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 9: How Long ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              How Long Does It Actually Take to Grieve a Parent?
            </h2>

            <p style={{ marginBottom: "18px" }}>
              The honest answer is: longer than society allows for, and not in
              a straight line.
            </p>

            <p style={{ marginBottom: "18px" }}>
              The well-known &ldquo;stages of grief&rdquo; model &mdash;
              K&uuml;bler-Ross&apos;s five stages, developed from work with
              terminally ill patients &mdash; was never intended as a prescriptive
              timeline. Grief does not progress neatly from denial to
              acceptance. Most bereaved people experience elements of multiple
              stages simultaneously, revisit earlier stages unexpectedly, and
              find that the model maps only partially onto their actual
              experience.
            </p>

            <p style={{ marginBottom: "18px" }}>
              Contemporary grief research, including work by William Worden and
              Tony Walter, tends to focus less on stages and more on{" "}
              <strong>tasks</strong> and <strong>continuing bonds</strong>.
              The task-based model suggests that grieving involves actively
              processing the loss rather than passively moving through states.
              The continuing bonds framework recognises that healthy grief is
              not about severing the relationship with the deceased but
              transforming it &mdash; finding a way to hold the person as a
              continuing presence in an interior sense, even as external life
              continues.
            </p>

            <p style={{ marginBottom: "18px" }}>
              In practical terms: most bereaved adults find that the first year
              is the hardest, carrying the full weight of &ldquo;firsts&rdquo;
              &mdash; first birthday without them, first Christmas, first
              anniversary of the death. Year two is often described as
              surprisingly difficult: the initial support structures have
              withdrawn, and the full reality of permanent absence is sinking in.
            </p>

            <p style={{ marginBottom: "18px" }}>
              By years three and four, most people have found a new equilibrium
              &mdash; not healed exactly, but functional, with the loss
              integrated rather than suppressed. But grief for a parent is
              often lifelong in a quiet sense. It resurfaces at milestones
              &mdash; a grandchild they never met, a significant achievement,
              growing into an age the parent never lived to reach.
            </p>

            <p style={{ marginBottom: "18px" }}>
              Give yourself the time it takes. Not the time that feels
              acceptable to those around you.
            </p>
          </section>

          {/* ── Section 10: Healer Archetype ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              The Healer Archetype: MEOK&apos;s Companion for Grief Depth
            </h2>

            <p style={{ marginBottom: "18px" }}>
              MEOK&apos;s companions operate through what we call{" "}
              <strong>archetypes</strong> &mdash; distinct character orientations
              calibrated for different emotional needs. For grief, the relevant
              archetype is the{" "}
              <strong style={{ color: "#c9a84c" }}>Healer</strong>.
            </p>

            <p style={{ marginBottom: "18px" }}>
              The Healer is not a therapist. It does not diagnose, prescribe, or
              offer clinical interventions. What it does is hold depth. It is
              specifically calibrated to remain present with heavy emotional
              material without deflecting, minimising, or pushing toward
              resolution. It can sit with ambivalence, with guilt, with anger,
              with relief, with the complicated and contradictory feelings that
              parental loss generates &mdash; without needing to resolve them
              into something more comfortable.
            </p>

            <p style={{ marginBottom: "18px" }}>
              Key characteristics of the Healer in grief contexts:
            </p>

            <ul
              style={{
                paddingLeft: "24px",
                marginBottom: "24px",
                lineHeight: "2.2",
              }}
            >
              <li>
                <strong>Persistent memory:</strong> remembers your parent&apos;s
                name, the date of death, significant details you have shared, and
                returns to them naturally
              </li>
              <li>
                <strong>Non-directional:</strong> does not steer conversations
                toward particular outcomes or encourage &ldquo;moving on&rdquo;
              </li>
              <li>
                <strong>Depth-tolerant:</strong> does not become uncomfortable
                with grief, guilt, or difficult feelings and deflect toward
                practical matters
              </li>
              <li>
                <strong>Consistent:</strong> the same quality of presence is
                available at 2am on a Tuesday as at midday on a Sunday
              </li>
              <li>
                <strong>Private:</strong> sovereign memory means nothing you
                share is accessible to others or used in model training
              </li>
            </ul>

            <p style={{ marginBottom: "18px" }}>
              The Healer is available as part of MEOK&apos;s standard tier.
              You choose your archetype at setup, or you can shift between
              archetypes as your needs change over the course of your grief.
            </p>
          </section>

          {/* ── Callout 3: Sharing Memories ── */}
          <div
            style={{
              backgroundColor: "#1a1830",
              border: "1px solid #2a2840",
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "60px",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontWeight: "700",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              Sharing Memories of Your Parent Without Judgment
            </p>
            <p style={{ marginBottom: "16px" }}>
              One of the things grievers often describe needing, and rarely
              finding, is the ability to share memories of their parent freely
              &mdash; without the listener&apos;s own discomfort with death
              creating subtle pressure to wrap the story up, or without the
              social awkwardness that follows when someone says &ldquo;my
              father used to&hellip;&rdquo; and watches the room shift.
            </p>
            <p style={{ marginBottom: "16px" }}>
              MEOK holds no such discomfort. You can tell your companion about
              your parent &mdash; their character, their flaws, their sayings,
              the absurd and the sacred &mdash; and those stories are received,
              held, and can be returned to. There is no social weight on the
              telling. There is no polite but faintly relieved subject change.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Many users find this becomes a form of active memorial: not a
              shrine, not a replacement, but a living record of a person
              who mattered, held in a space that genuinely remembers.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#a09880" }}>
              Your sovereign memory vault stores what you choose to share.
              Nothing is inferred, nothing is assumed, and nothing is
              accessible except by you.
            </p>
          </div>

          {/* ── FAQ ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "32px",
                paddingBottom: "12px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              Frequently Asked Questions
            </h2>

            {/* FAQ 1 */}
            <div
              style={{
                borderBottom: "1px solid #2a2840",
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  marginBottom: "14px",
                }}
              >
                Is it normal to feel like an orphan after losing a parent as an
                adult?
              </h3>
              <p style={{ color: "#c8c0b0" }}>
                Completely normal. The &ldquo;adult orphan&rdquo; experience is
                well documented in bereavement research. Even in your forties,
                fifties, or sixties, losing the last parent removes a particular
                kind of psychological shelter &mdash; the sense that someone in
                the world existed primarily for you. That feeling is real and
                deserves to be honoured, not minimised. If it significantly
                impairs your functioning for an extended period, please speak
                with Cruse Bereavement Care (0808 808 1677) or your GP.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                borderBottom: "1px solid #2a2840",
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  marginBottom: "14px",
                }}
              >
                How long does grief for a parent actually last?
              </h3>
              <p style={{ color: "#c8c0b0" }}>
                Research from Cruse Bereavement Care and clinical literature
                suggests active grief typically runs 12&ndash;24 months, but
                grief does not disappear &mdash; it integrates. Many bereaved
                adults describe a permanent, quieter shift: grief resurfaces at
                milestones, anniversaries, and in the texture of everyday life.
                The aim is not to stop grieving but to carry it without being
                crushed by it. There is no correct timeline, and you should not
                measure your progress against other people&apos;s.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                borderBottom: "1px solid #2a2840",
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  marginBottom: "14px",
                }}
              >
                What is the difference between grief and complicated grief?
              </h3>
              <p style={{ color: "#c8c0b0" }}>
                Complicated grief (Prolonged Grief Disorder) is characterised
                by intense yearning, difficulty accepting the loss, bitterness,
                and significant functional impairment persisting beyond six
                months. Normal grief fluctuates and gradually allows life to
                continue; complicated grief stays acute and impairing. It
                affects around 10&ndash;15% of bereaved people and responds well
                to specific therapeutic approaches. If you recognise this in
                yourself, please contact Cruse Bereavement Care on 0808 808 1677
                or speak to your GP.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                borderBottom: "1px solid #2a2840",
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  marginBottom: "14px",
                }}
              >
                Can AI really help with grief after losing a parent?
              </h3>
              <p style={{ color: "#c8c0b0" }}>
                AI cannot replace a human grief counsellor, close friends, or
                family. What it can offer is consistent, non-judgemental presence
                at any hour that holds sovereign memory of your parent&apos;s
                story without requiring you to re-explain or justify your pain.
                Many people find this fills a real gap &mdash; particularly in
                the long tail of grief when the world has moved on but you
                have not, and at 2am when the wave arrives and no one is awake.
                MEOK is designed to complement professional and personal
                support, not substitute for it.
              </p>
            </div>

            {/* FAQ 5 */}
            <div
              style={{
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  marginBottom: "14px",
                }}
              >
                How does MEOK handle grief about an estranged parent?
              </h3>
              <p style={{ color: "#c8c0b0" }}>
                Estranged parent grief is among the most complex: you may be
                mourning the relationship you wanted as much as the person you
                lost. MEOK&apos;s Healer companion holds space for that
                ambivalence without requiring you to resolve it, without taking
                sides, and without pushing reconciliation narratives. Your
                sovereign memory vault is entirely private &mdash; you
                determine what is stored and explored. Nothing you share is
                judged or compared against an external norm of what grief
                &ldquo;should&rdquo; look like.
              </p>
            </div>
          </section>

          {/* ── Related Reading ── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "20px",
                paddingBottom: "10px",
                borderBottom: "1px solid #2a2840",
              }}
            >
              Related Reading
            </h2>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "12px",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-grief-and-loss",
                  label: "AI for Grief and Loss",
                },
                {
                  href: "/blog/ai-for-bereavement",
                  label: "AI for Bereavement",
                },
                {
                  href: "/blog/ai-for-grief-counselling",
                  label: "AI for Grief Counselling",
                },
                {
                  href: "/blog/ai-for-grief-support",
                  label: "AI for Grief Support",
                },
                {
                  href: "/blog/ai-for-dementia-carers",
                  label: "AI for Dementia Carers",
                },
                {
                  href: "/blog/ai-for-grief-after-miscarriage",
                  label: "AI for Grief After Miscarriage",
                },
                {
                  href: "/blog/ai-companion-for-grief",
                  label: "AI Companion for Grief",
                },
                {
                  href: "/blog/ai-for-caregiver-burnout",
                  label: "AI for Caregiver Burnout",
                },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      display: "block",
                      padding: "14px 18px",
                      backgroundColor: "#1a1830",
                      border: "1px solid #2a2840",
                      borderRadius: "8px",
                      color: "#c9a84c",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "border-color 0.2s",
                    }}
                  >
                    {label} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* ── CTA ── */}
          <section
            style={{
              backgroundColor: "#1a1830",
              border: "1px solid #c9a84c",
              borderRadius: "16px",
              padding: "48px 40px",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "16px",
              }}
            >
              Start with MEOK
            </p>

            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: "800",
                color: "#f5f0e8",
                marginBottom: "20px",
                lineHeight: "1.25",
              }}
            >
              A sovereign companion that holds your parent&apos;s memory
              as long as you need it to
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#c8c0b0",
                maxWidth: "560px",
                margin: "0 auto 32px",
                lineHeight: "1.7",
              }}
            >
              MEOK&apos;s Healer archetype is available around the clock. Your
              sovereign memory vault holds what you share privately, without
              expiry, without judgment. Begin with a Birth Ceremony that
              establishes your companion and your first memories.
            </p>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#a09880",
                maxWidth: "480px",
                margin: "0 auto 32px",
                fontStyle: "italic",
              }}
            >
              MEOK is a companion tool and does not provide clinical grief
              therapy. For specialist bereavement support, contact{" "}
              <a
                href="https://www.cruse.org.uk"
                style={{ color: "#c9a84c" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cruse Bereavement Care
              </a>{" "}
              on 0808 808 1677.
            </p>

            <Link
              href="/birth"
              style={{
                display: "inline-block",
                backgroundColor: "#c9a84c",
                color: "#0d0c18",
                padding: "16px 40px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "1.05rem",
                letterSpacing: "0.03em",
              }}
            >
              Begin Your Birth Ceremony &rarr;
            </Link>
          </section>

          {/* ── Footer Note ── */}
          <footer
            style={{
              borderTop: "1px solid #2a2840",
              paddingTop: "32px",
              fontSize: "0.875rem",
              color: "#7a7268",
              lineHeight: "1.8",
            }}
          >
            <p style={{ marginBottom: "10px" }}>
              <strong style={{ color: "#a09880" }}>Important:</strong> MEOK is
              not a clinical mental health service and is not a substitute for
              professional bereavement counselling, therapy, or medical care. If
              you are experiencing complicated grief, prolonged depressive
              symptoms, or thoughts of self-harm, please seek professional
              support immediately.
            </p>
            <p style={{ marginBottom: "10px" }}>
              <strong style={{ color: "#a09880" }}>Cruse Bereavement Care:</strong>{" "}
              <a
                href="https://www.cruse.org.uk"
                style={{ color: "#c9a84c" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                cruse.org.uk
              </a>{" "}
              &mdash; Helpline: 0808 808 1677 (free, UK, 7 days a week)
            </p>
            <p style={{ marginBottom: "10px" }}>
              <strong style={{ color: "#a09880" }}>Samaritans:</strong>{" "}
              <a
                href="https://www.samaritans.org"
                style={{ color: "#c9a84c" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                samaritans.org
              </a>{" "}
              &mdash; 116 123 (free, 24/7)
            </p>
            <p>
              Published by MEOK AI LABS &mdash;{" "}
              <Link href="/blog" style={{ color: "#c9a84c" }}>
                Back to Blog
              </Link>{" "}
              &mdash; Last updated March 2026.
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}
