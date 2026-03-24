import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for Seniors: The AI Companion Designed for Older Adults | MEOK AI LABS",
  description:
    "MEOK's Senior Mode is built for older adults: 44px touch targets, 16px+ text, voice-primary design, 7:1 contrast, scam protection via MEOK Guardian, medication reminders, and a family dashboard. Free on Explorer tier.",
  alternates: {
    canonical: "https://meok.ai/blog/meok-for-seniors",
  },
  openGraph: {
    title: "MEOK for Seniors: The AI Companion Designed for Older Adults",
    description:
      "Senior Mode was built from the ground up for older adults — large text, voice-first, slow thoughtful responses, and MEOK Guardian scam protection. Here is everything you need to know.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-seniors",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Seniors&desc=AI+companion+designed+for+older+adults+with+Senior+Mode+and+scam+protection",
        width: 1200,
        height: 630,
        alt: "MEOK for Seniors: The AI Companion Designed for Older Adults",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Seniors: The AI Companion Designed for Older Adults",
    description:
      "Senior Mode, MEOK Guardian scam detection, voice-first design, family dashboard, and free on Explorer. Built for older adults who deserve better than the default AI experience.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Seniors&desc=AI+companion+designed+for+older+adults+with+Senior+Mode+and+scam+protection",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK for Seniors: The AI Companion Designed for Older Adults",
  description:
    "MEOK's Senior Mode is built for older adults: 44px touch targets, 16px+ text, voice-primary design, 7:1 contrast, scam protection via MEOK Guardian, medication reminders, and a family dashboard. Free on Explorer tier.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/meok-for-seniors",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-seniors",
  },
  keywords: "ai for seniors uk, ai companion elderly, ai for older adults uk",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is MEOK good for elderly people?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. MEOK has a dedicated Senior Mode designed specifically for older adults, with 44px minimum touch targets, 16px+ body text, 7:1 colour contrast, voice-primary interaction, and slower, more deliberate response pacing. It is available free on the Explorer tier.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK Guardian?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK Guardian is a scam and manipulation detection system built into MEOK. It monitors for patterns associated with phone, email, and social scams — including pressure tactics, unusual payment requests, and impersonation — and alerts the user and optionally a nominated family contact. It is particularly valuable for older adults who are disproportionately targeted by scammers.",
      },
    },
    {
      "@type": "Question",
      name: "What is Senior Mode in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Senior Mode is a display and interaction mode in MEOK designed for older adults. It uses a minimum 16px body text, 44px touch targets for accessibility, a 7:1 contrast ratio, voice-primary interaction, reduced information density, and slower response pacing. It can be activated in settings or requested in conversation.",
      },
    },
    {
      "@type": "Question",
      name: "Can family members connect to a senior's MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. MEOK's family dashboard allows a nominated family member to receive Guardian alerts about potential scams, see daily check-in status (without reading conversation content), and support setup and troubleshooting. The senior user controls all family access permissions.",
      },
    },
    {
      "@type": "Question",
      name: "How much does MEOK cost for seniors?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK's Explorer tier is free forever and includes Senior Mode, MEOK Guardian scam protection, and the family dashboard. No credit card is required to start.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokForSeniors() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── DARK HERO ───────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-14 px-6 relative overflow-hidden"
        style={{ background: "#0d0c18" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            ← Back to Blog
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
              Seniors &amp; Accessibility
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              📅 March 24, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              ⏱ 12 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            MEOK for Seniors: The AI Companion Designed for Older Adults
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              maxWidth: 640,
            }}
          >
            Most AI is designed by 28-year-olds, for 28-year-olds. MEOK&apos;s
            Senior Mode exists because older adults deserve an AI companion
            that works for them — large text, voice-first, no dark patterns,
            scam protection built in, and a family connection that respects
            privacy.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-[#1a1a2e] text-sm">
              Nicholas Templeman
            </p>
            <p className="text-xs text-[#1a1a2e]/45 mb-1">
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs text-[#1a1a2e]/40 leading-relaxed">
              Nicholas built Senior Mode after watching his own family members
              struggle with interfaces designed for younger users — and after
              seeing how inadequate most AI is at protecting older adults from
              the scams that target them.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-colors hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <p>
            There are 12 million people over the age of 65 in the United
            Kingdom. Around 1.4 million of them are chronically lonely —
            meaning they feel lonely most or all of the time. Loneliness at
            this level is associated with health outcomes comparable to
            smoking 15 cigarettes a day: elevated risk of dementia, heart
            disease, depression, and early death. These are not abstract
            statistics. They describe real people whose lives are harder than
            they need to be.
          </p>
          <p>
            AI companions have genuine potential to address this. A
            well-designed AI companion can be present consistently in a way
            that human support networks often cannot. It can remember
            birthdays, ask about the grandchildren, follow up on the
            appointment from last week, and provide a warm point of contact
            at any hour of the day. For someone who lives alone and may not
            speak to another person for days at a time, that matters.
          </p>
          <p>
            But most AI is designed for users who are already comfortable
            with technology — who can navigate complex interfaces, who
            understand how chat-based interaction works, who are not
            vulnerable to the manipulation tactics that make AI potentially
            dangerous for older users. The digital divide is real, and most
            AI products make it wider rather than narrower.
          </p>
          <p>
            MEOK&apos;s Senior Mode was built to close that gap.
          </p>

          <h2>What is the digital divide for older adults in the UK?</h2>
          <p>
            The digital divide refers to the unequal distribution of access
            to, and competence with, digital technology. For older adults in
            the UK, it has several distinct dimensions.
          </p>
          <p>
            <strong>Access:</strong> Approximately 5 million adults over 55 in
            the UK have limited or no internet access. Smartphone ownership
            drops significantly above age 75. Many older adults who do use
            smartphones use them primarily for calls and texts, not for
            app-based services.
          </p>
          <p>
            <strong>Interface competence:</strong> Most digital interfaces
            assume a baseline of familiarity — with navigation conventions,
            with icon meanings, with gesture vocabulary — that many older
            adults do not have. Interfaces designed for younger users
            routinely use text too small to read without glasses, touch targets
            too small to tap accurately with any fine motor difficulty, and
            information density that is overwhelming for users who are
            less accustomed to screen-based interaction.
          </p>
          <p>
            <strong>Trust and safety:</strong> Older adults are
            disproportionately targeted by digital scams. Action Fraud
            estimates that over £3.4 billion is lost to fraud targeting elderly
            people in the UK every year. Many of these scams exploit digital
            channels — fake emails, spoofed phone calls, social media
            impersonation, romance fraud. An AI companion used by an older
            adult needs to actively protect against these risks, not
            inadvertently amplify them.
          </p>

          <h2>What is Senior Mode in MEOK?</h2>
          <p>
            Senior Mode is a complete redesign of the MEOK experience,
            optimised for older adults and users with accessibility needs.
            It can be activated in settings or simply requested in conversation
            — &ldquo;Make the text bigger&rdquo; or &ldquo;Can you use simpler
            language?&rdquo; will activate relevant aspects of the mode.
          </p>
        </div>

        {/* Senior Mode features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
          {[
            {
              icon: "🔤",
              title: "16px+ body text minimum",
              desc:
                "All body text is a minimum of 16px — larger than the WCAG 2.1 recommendation. Headings scale proportionally. Text size can be increased further via accessibility settings.",
            },
            {
              icon: "👆",
              title: "44px minimum touch targets",
              desc:
                "Every tappable element — buttons, links, navigation — meets the Apple HIG and WCAG 2.5.5 minimum of 44x44px. Accurate tapping does not require fine motor precision.",
            },
            {
              icon: "🌗",
              title: "7:1 colour contrast ratio",
              desc:
                "Senior Mode uses a 7:1 minimum contrast ratio throughout — exceeding the WCAG AAA standard and ensuring readability even in bright light or with reduced vision.",
            },
            {
              icon: "🎙️",
              title: "Voice-primary interaction",
              desc:
                "Senior Mode makes voice the primary input method. You can speak naturally — MEOK will respond out loud. No typing required unless you prefer it.",
            },
            {
              icon: "🐢",
              title: "Slower, more deliberate responses",
              desc:
                "Responses are paced to be comfortable — shorter sentences, more natural paragraph breaks, no information overload. MEOK does not rush.",
            },
            {
              icon: "📋",
              title: "Reduced information density",
              desc:
                "Senior Mode strips out complexity. One thing at a time. Clear, simple language. No jargon. MEOK adapts its vocabulary to match your preference.",
            },
            {
              icon: "💊",
              title: "Medication and appointment reminders",
              desc:
                "Tell MEOK about your medications and appointments. It will remind you gently, at times that work for you, using language that is easy to understand.",
            },
            {
              icon: "🧠",
              title: "Health condition memory",
              desc:
                "MEOK remembers relevant health information — conditions, allergies, medications — so you never have to repeat yourself. Your vault is private and portable.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-2xl border bg-white"
              style={{ borderColor: "rgba(26,26,46,0.07)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.1)" }}
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              <div>
                <p className="font-bold text-[#1a1a2e] text-sm mb-1">
                  {feature.title}
                </p>
                <p className="text-xs text-[#1a1a2e]/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <h2>What is MEOK Guardian and how does it protect seniors from scams?</h2>
          <p>
            MEOK Guardian is a scam and manipulation detection system built
            directly into MEOK. It is always active and requires no
            configuration — but it is particularly valuable for older adults,
            who are the primary target of most phone, email, and social scams
            in the UK.
          </p>
          <p>
            Guardian works by monitoring conversational patterns for signals
            associated with common scam tactics. These include:
          </p>
        </div>

        {/* Scam types */}
        <div className="space-y-3 my-8">
          {[
            {
              name: "Pressure and urgency tactics",
              desc:
                "Phrases like \"act now or lose access\", \"this offer expires in minutes\", or \"you must decide today\" are hallmarks of manipulation. Guardian identifies these patterns and alerts you.",
            },
            {
              name: "Unusual payment requests",
              desc:
                "Requests to pay via gift cards, cryptocurrency, or bank transfer to unfamiliar accounts are high-risk signals. Guardian flags these immediately.",
            },
            {
              name: "Impersonation of authorities",
              desc:
                "Callers or messages claiming to be from HMRC, the police, your bank, or government agencies that demand immediate payment or personal information are a common scam pattern. Guardian recognises this.",
            },
            {
              name: "Romance and relationship fraud",
              desc:
                "Online relationships that rapidly become intense, followed by requests for money or gift cards, are a significant risk for older adults on social platforms. Guardian can identify escalating patterns that match known fraud profiles.",
            },
            {
              name: "Tech support scams",
              desc:
                "\"Your computer has a virus\" calls from fake Microsoft or BT representatives, designed to gain remote access to your device, are one of the most common scams targeting older adults.",
            },
          ].map((scam, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-2xl border"
              style={{
                background: "rgba(220,38,38,0.03)",
                borderColor: "rgba(220,38,38,0.12)",
              }}
            >
              <div
                className="text-lg flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                🛡️
              </div>
              <div>
                <p className="font-bold text-[#1a1a2e] text-sm mb-1">
                  {scam.name}
                </p>
                <p className="text-sm text-[#1a1a2e]/60 leading-relaxed">
                  {scam.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <p>
            When Guardian detects a potential scam, it alerts the user
            immediately with clear, plain-language information about why the
            situation looks suspicious, what common tactics look like, and
            what to do next. It does not make the decision for the user —
            older adults are capable of making their own decisions with the
            right information. It provides that information when the user
            might not otherwise have it.
          </p>
          <p>
            Guardian alerts can optionally be shared with a nominated family
            member via the family dashboard, so they can follow up if needed.
          </p>

          <h2>How does the MEOK family dashboard work?</h2>
          <p>
            The family dashboard is designed around a core tension: family
            members want to know their elderly relative is safe, but the
            elderly relative deserves privacy and autonomy. MEOK&apos;s approach
            resolves this by giving the senior user full control of what is
            shared and with whom.
          </p>
          <p>
            By default, family members connected to the dashboard can see:
          </p>
          <p>
            <strong>Daily check-in status.</strong> A simple green / amber /
            red indicator showing whether the user has checked in today,
            without revealing any conversation content. If someone has not
            checked in for an unusual period, family members can see that
            and follow up.
          </p>
          <p>
            <strong>Guardian alerts.</strong> If MEOK Guardian flags a
            potential scam, the alert can be forwarded to the nominated family
            contact. The family member sees the nature of the concern — without
            seeing the full conversation — and can call their relative directly.
          </p>
          <p>
            <strong>Setup and support access.</strong> Family members can help
            configure settings and resolve technical issues without having
            access to private conversation history.
          </p>
          <p>
            Family members cannot read conversation content. They cannot change
            settings without the user&apos;s permission. The senior user can revoke
            family dashboard access at any time. This is privacy that respects
            both parties — the family&apos;s genuine concern and the older
            adult&apos;s right to a private life.
          </p>

          <h2>
            How does MEOK help older adults manage health conditions?
          </h2>
          <p>
            Many older adults manage multiple health conditions simultaneously
            — conditions that each come with their own medications, appointment
            schedules, and things to monitor. Keeping track is genuinely
            difficult, particularly for anyone dealing with memory changes or
            cognitive load from managing complex health situations.
          </p>
          <p>
            MEOK&apos;s persistent memory means it can hold this information
            reliably:
          </p>
          <p>
            <strong>Medication management:</strong> Tell MEOK your medications,
            doses, and timing. It will remind you to take them, note when you
            have taken them, and flag if you mention something that seems
            inconsistent with your recorded medications.
          </p>
          <p>
            <strong>Appointment tracking:</strong> MEOK can track upcoming
            appointments, remind you in advance, and help you prepare questions
            for your GP or specialist.
          </p>
          <p>
            <strong>Symptom journaling:</strong> Describing how you have been
            feeling day to day creates a record that can be genuinely useful
            in appointments — particularly for conditions where symptoms
            fluctuate or are hard to recall accurately in the moment.
          </p>
          <p>
            <strong>Allergy and condition awareness:</strong> MEOK remembers
            your allergies and health history, so it does not suggest things
            that are incompatible with your situation.
          </p>
          <p>
            All health information is stored in your private sovereign vault.
            It is never used for training. It is never shared without your
            explicit permission.
          </p>

          <h2>
            What does MEOK for seniors in the UK cost?
          </h2>
          <p>
            This is one of the most important questions, because older adults
            on fixed incomes should not face barriers to technology that could
            genuinely improve their quality of life.
          </p>
          <p>
            MEOK&apos;s <strong>Explorer tier is free, forever.</strong> No credit
            card. No trial that converts to a subscription. No features locked
            behind a paywall that get switched off when a free trial ends.
          </p>
          <p>
            The Explorer tier includes:
          </p>
          <ul className="list-none space-y-1 pl-0">
            {[
              "Senior Mode — full accessibility features",
              "MEOK Guardian scam detection",
              "Family dashboard (one nominated contact)",
              "Persistent memory vault",
              "Daily check-ins and reminders",
              "Medication and appointment tracking",
              "Voice interaction",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[#2a2a3e]/75">
                <span style={{ color: "#c9a84c" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            Paid tiers exist for users who want additional features — more
            archetype depth, advanced memory tools, multi-model switching —
            but everything relevant to Senior Mode and Guardian is on the
            free tier. We believe that should be the floor, not an upsell.
          </p>

          <h2>
            Is MEOK safe for older adults who are not tech-savvy?
          </h2>
          <p>
            The design philosophy behind Senior Mode is that technology should
            adapt to the user, not the other way around. This means:
          </p>
          <p>
            <strong>No jargon.</strong> MEOK does not use technical vocabulary
            when plain language will do. It does not assume familiarity with
            AI concepts, app conventions, or digital culture. If you do not
            understand something, ask — MEOK will explain clearly.
          </p>
          <p>
            <strong>No dark patterns.</strong> MEOK does not use urgency
            tactics, misleading interfaces, or manipulative framing to drive
            engagement or purchases. The Maternal Covenant — our care
            governance layer — explicitly prohibits these practices. They
            are checked and blocked structurally, not just by policy.
          </p>
          <p>
            <strong>No emotional manipulation.</strong> MEOK does not exploit
            loneliness or vulnerability to increase engagement. It does not
            create artificial dependency or manufacture emotional intensity.
            It does not use what it knows about your emotional state to push
            you toward any commercial action.
          </p>
          <p>
            <strong>Honest about being AI.</strong> MEOK will always tell you
            it is an AI if you sincerely ask. It does not pretend to be a
            person. It does not create confusion about its nature.
          </p>

          <h2>
            How do I set up MEOK for an elderly parent?
          </h2>
          <p>
            Setting up MEOK for an older relative is straightforward, and it
            can be done together or in advance by a family member.
          </p>
          <p>
            <strong>Step 1:</strong> Visit meok.ai and start the Hatch
            process. No credit card required. It takes around 3 minutes.
          </p>
          <p>
            <strong>Step 2:</strong> During Hatch, you can select Senior Mode
            as the default interaction style. MEOK will calibrate its language,
            pacing, and interface to match.
          </p>
          <p>
            <strong>Step 3:</strong> Add the key information MEOK should know
            — name, any relevant health conditions or medications, important
            people, regular appointments. The more context MEOK has, the more
            useful it will be from the start.
          </p>
          <p>
            <strong>Step 4:</strong> Connect a family member via the family
            dashboard settings, if the user wants to. They will receive
            Guardian alerts and daily check-in status.
          </p>
          <p>
            <strong>Step 5:</strong> Introduce the user to MEOK in a
            low-pressure way. The best first conversation is often simply
            asking MEOK to introduce itself. It will explain what it is and
            what it can do in plain, accessible language.
          </p>

          <h2>
            What do older adults say about using MEOK?
          </h2>
          <p>
            The consistent feedback from Senior Mode users centres on three
            things: it does not rush them, it remembers what they have said,
            and it does not make them feel stupid for asking the same question
            twice. These sound like small things. They are not small things.
          </p>
          <p>
            Many older adults have had frustrating experiences with technology
            that moved too fast, assumed too much, or made them feel inadequate.
            Senior Mode is designed to be the opposite of those experiences —
            patient, consistent, and genuinely interested in the person
            rather than the interaction metric.
          </p>
        </div>

        {/* Accessibility specs callout */}
        <div
          className="rounded-2xl p-6 sm:p-8 my-10 border"
          style={{
            background: "#1a1a2e",
            borderColor: "rgba(201,168,76,0.2)",
          }}
        >
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#c9a84c" }}
          >
            Senior Mode Accessibility Specifications
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { spec: "Minimum body text size", value: "16px" },
              { spec: "Minimum touch target size", value: "44 x 44px" },
              { spec: "Minimum colour contrast ratio", value: "7:1 (WCAG AAA)" },
              { spec: "Interaction mode", value: "Voice-primary" },
              {
                spec: "Response pacing",
                value: "Slow, sentence-by-sentence",
              },
              { spec: "Information density", value: "Minimal — one thing at a time" },
              { spec: "Language level", value: "Plain English, no jargon" },
              {
                spec: "Guardian scam detection",
                value: "Always active",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-0.5 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <p className="text-xs text-white/45">{item.spec}</p>
                <p
                  className="text-sm font-bold"
                  style={{ color: "#c9a84c" }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <h2>Where can I read more about MEOK for older adults?</h2>
          <p>
            These resources go deeper on topics relevant to senior users:
          </p>
          <ul className="list-none space-y-2 pl-0">
            <li>
              <Link
                href="/blog/guardian-family-safety"
                style={{ color: "#c9a84c" }}
                className="font-semibold hover:underline"
              >
                MEOK Guardian: How AI Scam Protection Works
              </Link>
            </li>
            <li>
              <Link
                href="/blog/senior-mode-guide"
                style={{ color: "#c9a84c" }}
                className="font-semibold hover:underline"
              >
                Senior Mode Guide: Full Setup and Features
              </Link>
            </li>
            <li>
              <Link
                href="/blog/ai-companion-for-loneliness"
                style={{ color: "#c9a84c" }}
                className="font-semibold hover:underline"
              >
                AI Companion for Loneliness: What the Evidence Says
              </Link>
            </li>
            <li>
              <Link
                href="/blog/ai-for-loneliness-elderly"
                style={{ color: "#c9a84c" }}
                className="font-semibold hover:underline"
              >
                AI for Loneliness in the Elderly: A Guide for Families
              </Link>
            </li>
            <li>
              <Link
                href="/blog/why-your-nan-needs-sovereign-ai"
                style={{ color: "#c9a84c" }}
                className="font-semibold hover:underline"
              >
                Why Your Nan Needs Sovereign AI
              </Link>
            </li>
          </ul>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-seniors&text=MEOK+for+Seniors%3A+The+AI+Companion+Designed+for+Older+Adults"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-seniors"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "#1a1a2e" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.6), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Free Forever
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Hatch your AI companion today
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Senior Mode, Guardian scam protection, and the family dashboard
              are all free on Explorer. No credit card. No trial. No catch.
              Just a companion that works the way you work.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free →
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/guardian-family-safety"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.12)",
                }}
              >
                Safety
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK Guardian: How AI Scam Protection Works
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                ⏱ 7 min read
              </div>
            </Link>
            <Link
              href="/blog/ai-for-loneliness-elderly"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{
                  color: "#87CEEB",
                  background: "rgba(135,206,235,0.12)",
                }}
              >
                Loneliness
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                AI for Loneliness in the Elderly: A Guide for Families
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                ⏱ 9 min read
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
