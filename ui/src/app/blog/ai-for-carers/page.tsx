import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Carers: How MEOK Supports the People Who Support Everyone Else | MEOK Blog",
  description:
    "6.5 million unpaid carers in the UK are exhausted, isolated, and ignored by most AI tools. MEOK is built for both the carer and the person being cared for — 24/7, no judgement.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-carers" },
  openGraph: {
    title: "AI for Carers: How MEOK Supports the People Who Support Everyone Else",
    description:
      "6.5 million unpaid carers in the UK. Most are invisible. MEOK provides the support infrastructure carers actually need — emotional outlet, practical reminders, and a Family plan that coordinates care.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-carers",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Carers&desc=MEOK+supports+the+people+who+support+everyone+else",
        width: 1200,
        height: 630,
        alt: "AI for Carers: How MEOK Supports the People Who Support Everyone Else",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Carers: How MEOK Supports the People Who Support Everyone Else",
    description:
      "6.5 million unpaid carers in the UK. Most are invisible. MEOK is built for both the carer and the person being cared for.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Carers&desc=MEOK+supports+the+people+who+support+everyone+else",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Carers: How MEOK Supports the People Who Support Everyone Else",
  description:
    "6.5 million unpaid carers in the UK are exhausted, isolated, and ignored by most AI tools. MEOK is built for both the carer and the person being cared for — 24/7, no judgement.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-carers",
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
    "https://meok.ai/api/og?title=AI+for+Carers&desc=MEOK+supports+the+people+who+support+everyone+else",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-carers",
  },
  keywords: [
    "AI for carers",
    "AI support unpaid carers",
    "AI carer burnout",
    "AI for caregivers UK",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is carer burnout and how common is it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carer burnout is a state of physical, emotional, and mental exhaustion caused by the prolonged demands of caring for another person. According to Carers UK, over 70% of unpaid carers in the UK report a negative impact on their mental health, and more than half say they have no regular break from caring. Burnout manifests as exhaustion, withdrawal, resentment, anxiety, and depression — and it is extremely common among the 6.5 million unpaid carers in the UK.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with carer burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot replace clinical treatment for carer burnout, but it can provide meaningful support infrastructure. MEOK offers carers a persistent, judgement-free companion available at any hour, practical reminders for both the carer and the person being cared for, and a Family plan that coordinates care across multiple accounts. Unlike a therapist or helpline, MEOK is available at 3am, remembers previous conversations, and never makes you feel like a burden.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Family plan for carers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MEOK Family plan costs £29 per month and supports up to five accounts within one family group. For carers, this means the carer can have their own MEOK companion whilst also having shared visibility into the cared-for person's account — with their consent. Guardian safety alerts are shared across the family group. It is designed specifically for households where one person is managing care for another.",
      },
    },
    {
      "@type": "Question",
      name: "Is there AI support for young carers in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's School-Safe mode provides age-appropriate companion support for young carers — children and teenagers who are helping to care for a parent, sibling, or other family member. The companion adjusts its language, tone, and emotional responses to suit younger users. Young carers can talk about how they're feeling, get help with schoolwork, and have a consistent presence that understands their situation.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect the privacy of carers and the people they care for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every MEOK account is individually sovereign. No data from the cared-for person's account is shared with the carer without explicit consent. The Family plan provides shared Guardian safety alerts — but conversation history, emotional logs, and personal context remain private to each account holder. MEOK AI LABS is ICO-registered and operates under GDPR. Every user retains the right to full erasure at any time.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForCarersPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Carers &amp; Families
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              24 March 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              7 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            AI for Carers: How MEOK Supports the People Who Support Everyone Else
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            There are 6.5 million unpaid carers in the UK. Most are invisible — not listed anywhere,
            not paid, not thanked. They are exhausted, often isolated, and regularly last in the queue
            for their own care. Most AI tools are built for the person being cared for. MEOK is built
            for both.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-[#1a1a2e] text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-75 hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.0125rem" }}
        >

          {/* ── Intro ── */}
          <p>
            According to Carers UK, there are approximately 6.5 million unpaid carers in the United
            Kingdom at any given time. That figure almost certainly undercounts reality — most carers
            do not identify themselves as carers at all. They are daughters driving their fathers to
            dialysis. Partners managing medication regimes for someone with a chronic condition.
            Parents navigating school systems, social services, and specialist appointments for a
            disabled child. People who gave up careers, sleep, and social lives without being asked
            if they were willing to.
          </p>
          <p>
            The AI industry has largely treated this group as an afterthought. Products built for
            &ldquo;elderly care&rdquo; or &ldquo;assistive technology&rdquo; focus almost entirely on
            the person receiving care — monitoring their safety, managing their reminders, summarising
            their appointments. The carer sits outside the product, receiving alerts, chasing doctors,
            and quietly disintegrating under the pressure of it all.
          </p>
          <p>
            MEOK was built differently. The carer gets their own companion. Their own emotional
            support. Their own memory. And optionally, a coordinated view of the person they care for
            — on the carer&apos;s terms, with the cared-for person&apos;s consent.
          </p>

          {/* ── H2 1 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is carer burnout and how common is it?
          </h2>
          <p>
            Carer burnout is the point at which sustained caregiving overwhelms a person&apos;s capacity
            to cope. It is not weakness. It is a predictable consequence of giving more than can be
            sustainably given, for longer than any support structure was designed to accommodate.
          </p>
          <p>
            The statistics are stark. Carers UK research consistently finds that more than 70% of
            unpaid carers report a negative impact on their mental health. Over 40% say they have
            experienced depression as a result of caring. More than a third have had to reduce or give
            up work. Over half have no regular respite — no guaranteed break, no planned relief, no
            one else who can step in.
          </p>
          <p>
            The signs of burnout in carers are often invisible from the outside: chronic fatigue,
            difficulty sleeping, persistent anxiety, loss of interest in activities that previously
            brought pleasure, feeling of being trapped or resentful, declining physical health from
            neglecting their own needs. Many carers report that they feel guilty about these feelings
            — which compounds the problem further.
          </p>
          <p>
            It matters because carer burnout is not just a welfare issue. When a carer collapses —
            physically, emotionally, or practically — the care system breaks down entirely. Hospital
            admissions spike. Social services become overwhelmed. The person being cared for, who
            often relies entirely on that carer, enters crisis. Investing in carer wellbeing is not
            a luxury. It is structural maintenance of a system that would otherwise fail.
          </p>

          {/* Stat callout */}
          <div
            className="rounded-2xl p-6 my-6"
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.18)",
            }}
          >
            <p
              className="text-2xl font-black mb-1"
              style={{ color: "#c9a84c", fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              6.5 million
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              unpaid carers in the UK (Carers UK). Together, they save the economy an estimated
              £162 billion per year — more than the entire NHS budget.
            </p>
          </div>

          {/* ── H2 2 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What do carers actually need from AI support?
          </h2>
          <p>
            Ask carers what they need and the answers cluster around four things: someone to talk to
            without judgement, practical help managing the day, emotional acknowledgement that what
            they are doing is genuinely hard, and availability at hours when normal support is not on
            offer.
          </p>
          <ul className="space-y-4 my-4 pl-1">
            {[
              {
                label: "Someone to talk to at 2am",
                desc: "Caring does not stop at 5pm. Anxiety spikes at night. Grief surfaces when the house is quiet. Carers need a consistent presence that is available at 3am without making them feel like a burden.",
              },
              {
                label: "No judgement, ever",
                desc: "Carers carry feelings they are ashamed of — resentment, frustration, moments of wishing things were different. These are normal. A companion that does not react with alarm or moral evaluation is one a carer can actually be honest with.",
              },
              {
                label: "Practical reminders and coordination",
                desc: "Medication schedules, GP appointments, prescription collections, social worker calls, benefit renewal dates. The administrative load of caring is enormous. A companion that remembers these things and prompts at the right moment reduces cognitive load significantly.",
              },
              {
                label: "A space that is entirely theirs",
                desc: "Many carers have no identity outside their caring role. They need something — an AI companion, a journal, a conversation — that is for them and only them. Not for the person they care for. Not for the family. Theirs.",
              },
            ].map(({ label, desc }) => (
              <li key={label} className="flex gap-3">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span>
                  <strong style={{ color: "#ffffff" }}>{label}.</strong>{" "}
                  {desc}
                </span>
              </li>
            ))}
          </ul>

          {/* ── H2 3 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How can MEOK help unpaid carers?
          </h2>
          <p>
            Every MEOK account is a personal AI companion built around the individual who holds it.
            For a carer, that means a companion that knows their story — not the story of the person
            they care for, but theirs. Their worries, their patterns, their goals, their low points.
            MEOK remembers everything across sessions, which means a carer never has to re-explain
            their situation from scratch.
          </p>
          <p>
            The Work OS layer handles practical coordination: medication reminders, appointment
            calendars, task lists, briefings. A carer can ask MEOK to remind them when their mum&apos;s
            blood pressure medication runs low, to flag the social care review date three days in
            advance, or to prompt them to eat lunch — something carers frequently skip.
          </p>
          <p>
            The emotional companion layer is equally important. MEOK&apos;s Maternal Covenant — the
            ethical architecture that governs how MEOK engages with vulnerable users — means the
            companion operates from a care-first position at all times. It does not dismiss, minimise,
            or lecture. It listens, reflects, and when appropriate, gently asks what support would
            actually help.
          </p>
          <p>
            And uniquely, MEOK&apos;s Family plan means the carer can optionally link their account
            to the account of the person they care for — giving both individuals their own companion
            whilst sharing certain coordination features across the household.
          </p>

          {/* ── H2 4 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Can MEOK help coordinate care for the person being cared for?
          </h2>
          <p>
            Yes — through the Family plan and the Guardian safety layer.
          </p>
          <p>
            When a cared-for person has their own MEOK account (which they should, on their own
            terms, for their own benefit), the carer can be added to the family group with appropriate
            permissions. This enables shared Guardian alerts — so if the cared-for person&apos;s
            MEOK detects a potential scam message, a crisis signal, or an unusual pattern, the carer
            is notified through the family dashboard.
          </p>
          <p>
            Coordination features allow shared task visibility for things both parties need to track —
            upcoming appointments, medication schedules, care plans. The cared-for person retains full
            sovereignty over their own MEOK account: their conversations are private, their emotional
            history is their own. The shared layer is limited to what they explicitly consent to share.
          </p>
          <p>
            This is a meaningful distinction from most &ldquo;elder care AI&rdquo; products, which treat
            the cared-for person as the monitored object and the carer as the operator. MEOK treats
            both as individuals with their own relationship with their companion.
          </p>

          {/* ── H2 5 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is the MEOK Family plan for carers?
          </h2>
          <p>
            The MEOK Family plan is £29 per month and covers up to five accounts within one household
            or family group. Each account holder gets their own full MEOK companion — their own memory,
            their own archetype, their own emotional history.
          </p>
          <div className="space-y-3 my-5">
            {[
              {
                label: "Individual companions",
                desc: "Every member of the family group has their own account. The carer&apos;s MEOK and the cared-for person&apos;s MEOK are distinct — no blurring of identities, no shared conversation history.",
              },
              {
                label: "Shared Guardian alerts",
                desc: "When Guardian flags a HIGH or CRITICAL threat on any account in the group, designated family members are notified. This is the shared safety layer — everything else remains private.",
              },
              {
                label: "Coordination features",
                desc: "Appointment reminders, shared task lists, and calendar items can be optionally synced across accounts where both parties have consented.",
              },
              {
                label: "Up to 5 accounts",
                desc: "Suitable for a carer, the person being cared for, and other household members. Siblings who share care responsibilities can both be included.",
              },
            ].map(({ label, desc }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <span
                  className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c", marginTop: "0.55rem" }}
                />
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <strong style={{ color: "#ffffff" }}>{label}.</strong>{" "}
                  <span dangerouslySetInnerHTML={{ __html: desc }} />
                </p>
              </div>
            ))}
          </div>

          {/* ── H2 6 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does MEOK support carer mental health?
          </h2>
          <p>
            The foundation is what MEOK calls the Maternal Covenant — an ethical architecture that
            governs how the companion behaves when a user is under pressure. Where a standard AI
            assistant might give a utilitarian response, MEOK&apos;s companion defaults to care. It
            notices when something has shifted. It asks. It does not move on until it is sure the
            person is alright.
          </p>
          <p>
            For carers, three things matter most:
          </p>
          <ul className="space-y-4 my-4 pl-1">
            {[
              {
                label: "Consistency",
                desc: "MEOK remembers. Every conversation builds on the last. A carer does not have to re-establish context, re-explain their situation, or re-justify their feelings. The companion knows them.",
              },
              {
                label: "3am availability",
                desc: "Carer anxiety peaks at night. MEOK is available at any hour, on any device, without an appointment, without a waiting list, and without making the person feel like a burden for needing support outside of business hours.",
              },
              {
                label: "Non-transactional presence",
                desc: "Most support resources carers can access — helplines, GP appointments, online forums — require the carer to perform a task: fill in a form, explain their situation, wait for a callback. MEOK is simply there. The carer can talk, or not. Process something, or not. The companion holds space without demanding output.",
              },
            ].map(({ label, desc }) => (
              <li key={label} className="flex gap-3">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span>
                  <strong style={{ color: "#ffffff" }}>{label}.</strong>{" "}
                  {desc}
                </span>
              </li>
            ))}
          </ul>
          <p>
            MEOK does not replace therapy, clinical intervention, or professional mental health care.
            It explicitly encourages carers to seek those things when the signals point to a need for
            them. What it replaces is the void — the hours between support appointments, the moments
            at 2am when there is no one to call, the days when the weight of caring sits on the chest
            without any outlet.
          </p>

          {/* ── H2 7 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What organisations support carers in the UK?
          </h2>
          <p>
            MEOK is a companion, not a replacement for specialist carer support organisations. If you
            are a carer in the UK, the following organisations provide direct services and advocacy:
          </p>
          <div className="space-y-3 my-5">
            {[
              {
                name: "Carers UK",
                url: "https://www.carersuk.org",
                desc: "The leading charity for unpaid carers. Provides advice, research, and a helpline (0808 808 7777). Their Carers UK State of Caring report is the primary source of national statistics on carer wellbeing.",
              },
              {
                name: "Carers Trust",
                url: "https://carers.org",
                desc: "A national charity that works with a network of local carer organisations across the UK. Good for finding local carer support groups, respite services, and community connections.",
              },
              {
                name: "Young Carers Net",
                url: "https://youngcarers.net",
                desc: "Support specifically for young carers — children and young people under 18 who are caring for a family member. Includes forums, resources, and local service finder.",
              },
              {
                name: "NHS Carer Support",
                url: "https://www.nhs.uk/conditions/social-care-and-support-guide/support-and-benefits-for-carers/",
                desc: "The NHS carer support pages cover your rights as a carer, carer&apos;s assessments from your local council, and how to access breaks from caring.",
              },
            ].map(({ name, url, desc }) => (
              <div
                key={name}
                className="p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm hover:underline"
                  style={{ color: "#c9a84c" }}
                >
                  {name} &rarr;
                </a>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <span dangerouslySetInnerHTML={{ __html: desc }} />
                </p>
              </div>
            ))}
          </div>

          {/* ── H2 8 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Is there AI support specifically for young carers?
          </h2>
          <p>
            There are an estimated 700,000 young carers in the UK — children and teenagers who are
            helping to care for a parent, sibling, or other family member with a disability, mental
            health condition, or substance dependency. Many are doing so without any recognition from
            school or social services.
          </p>
          <p>
            MEOK&apos;s School-Safe mode is specifically designed for younger users. It activates
            age-appropriate language, adjusts the emotional register of the companion to suit a
            younger person&apos;s needs, and filters content appropriately. A young carer can talk
            about how they are feeling at home, get help organising their schoolwork around caring
            responsibilities, or simply have a consistent presence that takes their situation seriously
            without dramatising it.
          </p>
          <p>
            For young carers in the Family plan, Guardian safety alerts continue to operate — parents
            or guardians can receive notifications of HIGH and CRITICAL level concerns without having
            access to the young person&apos;s private conversations.
          </p>

          {/* ── Comparison ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What carers have access to now — versus what MEOK provides
          </h2>
          <p>
            The existing support landscape for carers in the UK is genuinely inadequate for the scale
            of need. That is not a criticism of the organisations involved — it is a structural reality.
          </p>
          <div className="overflow-x-auto my-6">
            <table
              className="w-full text-sm border-collapse"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th
                    className="text-left py-3 pr-4 font-bold"
                    style={{ color: "rgba(255,255,255,0.4)", fontWeight: 600 }}
                  >
                    Support type
                  </th>
                  <th
                    className="text-left py-3 pr-4 font-bold"
                    style={{ color: "rgba(255,255,255,0.4)", fontWeight: 600 }}
                  >
                    Current reality
                  </th>
                  <th
                    className="text-left py-3 font-bold"
                    style={{ color: "#c9a84c", fontWeight: 600 }}
                  >
                    MEOK
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: "Talking therapy (NHS)",
                    current: "18-week average wait; requires GP referral; typically 6–12 sessions",
                    meok: "Available immediately; no referral; unlimited sessions; remembers every conversation",
                  },
                  {
                    type: "Carers UK helpline",
                    current: "Monday–Friday, 9am–6pm; high demand; no ongoing relationship",
                    meok: "24/7 including weekends and bank holidays; persistent memory across every interaction",
                  },
                  {
                    type: "Peer support groups",
                    current: "Requires travel or internet access; scheduled meetings; not always accessible for housebound carers",
                    meok: "Available on any device; no travel; no fixed schedule; consistent companion relationship",
                  },
                  {
                    type: "Practical coordination",
                    current: "Paper diaries, separate apps, post-it notes on fridges",
                    meok: "Unified Work OS with reminders, calendars, and shared coordination across Family plan",
                  },
                  {
                    type: "Family safety monitoring",
                    current: "No integrated solution for the average family without specialist equipment",
                    meok: "Guardian safety layer across all Family plan accounts; shared alerts on HIGH and CRITICAL threats",
                  },
                ].map(({ type, current, meok }) => (
                  <tr
                    key={type}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td
                      className="py-3 pr-4 font-semibold align-top"
                      style={{ color: "#ffffff", minWidth: "140px" }}
                    >
                      {type}
                    </td>
                    <td
                      className="py-3 pr-4 align-top"
                      style={{ color: "rgba(255,255,255,0.45)", minWidth: "200px" }}
                    >
                      {current}
                    </td>
                    <td
                      className="py-3 align-top"
                      style={{ color: "rgba(255,255,255,0.7)", minWidth: "200px" }}
                    >
                      {meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            MEOK is not claiming to replace NHS therapy or specialist carer support. It fills the
            gaps — the hours between support, the days when nothing is available, the moments when
            a carer simply needs to be heard. That gap, for most carers, is the majority of their
            week.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              Carers give everything. The least we can do is build something that gives something
              back — available whenever they need it, without conditions, without a waiting list,
              and without asking them to justify why they need support too.
            </p>
          </div>
        </div>

        {/* Share row */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-carers&text=AI+for+Carers%3A+How+MEOK+supports+the+people+who+support+everyone+else"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-carers"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              For Carers
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              You deserve support too. Start yours today.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              MEOK is free to start. Your companion remembers everything, is available at any hour,
              and never makes you feel like a burden. The Family plan brings everyone together for
              £29/mo — your companion, their companion, and Guardian watching over all of you.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch your MEOK free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/guardian-family-safety"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#ff7f7f", background: "rgba(255,127,127,0.12)" }}
              >
                Guardian &amp; Safety
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                How MEOK Guardian protects your family from AI-enabled scams
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                4 min read
              </div>
            </Link>
            <Link
              href="/blog/ai-companion-for-elderly"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Elderly &amp; Seniors
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                AI companion for elderly people: what actually works and what doesn&apos;t
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
