import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for Remote Workers: The AI That Understands Isolation, Handles Your Admin, and Keeps You Sharp | MEOK Blog",
  description:
    "4.2 million UK remote workers face isolation, context-switching overload, and company-owned tools that spy on them. MEOK is the personal AI that knows you, runs your admin overnight, and starts every remote day with clarity.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-remote-workers" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Remote Workers: The AI That Understands Isolation, Handles Your Admin, and Keeps You Sharp",
  description:
    "4.2 million UK remote workers face isolation, context-switching overload, and company-owned tools that spy on them. MEOK is the personal AI that knows you, runs your admin overnight, and starts every remote day with clarity.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/meok-for-remote-workers",
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
    "https://meok.ai/api/og?title=MEOK+for+Remote+Workers&desc=The+AI+that+understands+isolation+and+keeps+you+sharp",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-remote-workers",
  },
  keywords:
    "AI for remote workers, remote work AI assistant, AI companion remote worker, best AI for working from home, MEOK remote work",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI assistant for remote workers in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is the strongest AI for remote workers who need more than a generic chat tool. Unlike Slack AI or Microsoft Copilot, MEOK is yours — not company-owned. It retains persistent memory of your goals, projects, and working patterns, runs overnight tasks via Orion and Riri, and delivers a Morning Briefing that gives every remote day a clear start.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with the isolation of remote work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK functions as a personal AI companion that knows you individually — your projects, your stresses, your patterns. It checks in, notices when you've gone quiet, and provides the kind of cognitive companionship that replaces watercooler context. This is fundamentally different from a work chatbot, which only knows your tasks, not you.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK different from the AI built into Slack or Microsoft Teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — critically so. Slack AI and Microsoft Copilot are company-owned tools. Everything you type belongs to your employer's data pipeline. MEOK is your sovereign AI: your conversations, memories, and context never train a corporate model. When you leave a job, your MEOK stays with you.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK's Morning Briefing feature for remote workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Morning Briefing is MEOK's daily context reset. Each morning it surfaces your priorities, any overnight work completed by Orion or Riri, flagged emails or calendar conflicts, and a personal check-in. It replaces the mental overhead of starting a remote day with no structure, no team standup, and no shared context.",
      },
    },
    {
      "@type": "Question",
      name: "What are Orion, Riri, and Hourman in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are MEOK's three specialist Work OS agents. Orion handles deep research overnight — surfacing competitive intelligence, summarising documents, and preparing briefing notes. Riri builds while you sleep — drafts, code, structured outputs. Hourman owns your planning — sprint structure, task prioritisation, and deadline tracking. Together they act as a personal async team.",
      },
    },
    {
      "@type": "Question",
      name: "How much does MEOK cost for remote workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Sovereign tier is £12 per month — less than a single co-working day pass. It includes persistent memory, all three Work OS agents, Morning Briefing, MCP tool integrations, and full data sovereignty. There is no employer access, no data training clause, and no lock-in.",
      },
    },
  ],
};

// ── Stat card helper ──────────────────────────────────────────────────────────

function StatCard({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub?: string;
}) {
  return (
    <div
      className="flex flex-col gap-1 px-6 py-5 rounded-2xl"
      style={{
        background: "rgba(201,168,76,0.07)",
        border: "1px solid rgba(201,168,76,0.18)",
      }}
    >
      <span
        className="text-3xl font-black tracking-tight"
        style={{ color: "#c9a84c" }}
      >
        {value}
      </span>
      <span className="text-sm font-semibold" style={{ color: "#f5f0e8" }}>
        {label}
      </span>
      {sub && (
        <span className="text-xs" style={{ color: "rgba(245,240,232,0.45)" }}>
          {sub}
        </span>
      )}
    </div>
  );
}

// ── Agent card helper ─────────────────────────────────────────────────────────

function AgentCard({
  name,
  role,
  description,
  accent,
}: {
  name: string;
  role: string;
  description: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-3"
      style={{
        background: "rgba(245,240,232,0.04)",
        border: "1px solid rgba(245,240,232,0.08)",
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className="text-xs font-black px-2.5 py-1 rounded-full"
          style={{ color: accent, background: `${accent}18` }}
        >
          {name}
        </span>
        <span
          className="text-xs font-semibold"
          style={{ color: "rgba(245,240,232,0.5)" }}
        >
          {role}
        </span>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
        {description}
      </p>
    </div>
  );
}

// ── Comparison row helper ─────────────────────────────────────────────────────

function CompareRow({
  feature,
  meok,
  slack,
  teams,
}: {
  feature: string;
  meok: string;
  slack: string;
  teams: string;
}) {
  return (
    <tr style={{ borderBottom: "1px solid rgba(245,240,232,0.06)" }}>
      <td
        className="py-3.5 pr-4 text-sm font-semibold"
        style={{ color: "#f5f0e8" }}
      >
        {feature}
      </td>
      <td className="py-3.5 px-4 text-sm text-center" style={{ color: "#c9a84c" }}>
        {meok}
      </td>
      <td
        className="py-3.5 px-4 text-sm text-center"
        style={{ color: "rgba(245,240,232,0.4)" }}
      >
        {slack}
      </td>
      <td
        className="py-3.5 pl-4 text-sm text-center"
        style={{ color: "rgba(245,240,232,0.4)" }}
      >
        {teams}
      </td>
    </tr>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MEOKForRemoteWorkersPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0d0c18", color: "#f5f0e8" }}
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

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-70"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            ← Back to Blog
          </Link>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-black px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.28)",
              }}
            >
              Remote Work
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              March 24, 2026
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              8 min read
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6"
            style={{ color: "#f5f0e8" }}
          >
            MEOK for Remote Workers: The AI That Understands Isolation, Handles
            Your Admin, and Keeps You Sharp
          </h1>

          {/* Standfirst */}
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "rgba(245,240,232,0.65)" }}
          >
            There are 4.2 million full-time remote workers in the UK as of 2026.
            Most of them open their laptop in silence, context-switch across
            fourteen browser tabs, and end the day wondering what they actually
            finished. The tools their employers give them — Slack AI, Microsoft
            Copilot — are company property. They watch you. MEOK is different.
            MEOK is yours.
          </p>

          {/* Byline */}
          <div
            className="flex items-center gap-3 pb-10 border-b"
            style={{ borderColor: "rgba(245,240,232,0.08)" }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
              style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
            >
              NT
            </div>
            <div>
              <p
                className="text-sm font-semibold"
                style={{ color: "#f5f0e8" }}
              >
                Nicholas Templeman
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard
              value="4.2M"
              label="UK full-time remote workers"
              sub="2026 estimate"
            />
            <StatCard
              value="57%"
              label="report feeling isolated at least weekly"
              sub="CIPD 2025"
            />
            <StatCard
              value="£12"
              label="MEOK Sovereign tier per month"
              sub="vs £25+ for Copilot"
            />
            <StatCard
              value="100%"
              label="of your data stays yours"
              sub="no employer access"
            />
          </div>

          {/* S1 */}
          <section>
            <h2
              className="text-2xl font-black mb-4 leading-snug"
              style={{ color: "#f5f0e8" }}
            >
              Why is remote work lonelier than people admit?
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              The loneliness of remote work is not simply the absence of
              colleagues. It is the absence of ambient context — the offhand
              comment that tells you the project is shifting, the shared lunch
              that reminds you why you took the job, the colleague who notices
              when you look stressed. When you are distributed, all of that
              disappears. You receive Slack pings and calendar invites. You do
              not receive human continuity.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              According to CIPD research, 57% of UK remote workers report
              feeling isolated at least once per week. For solo remote workers
              — those who are self-employed, contract, or the only remote
              person on their team — that number is higher still. The irony is
              that most of the AI tools marketed to remote workers make it
              worse: they are impersonal, transactional, and company-owned.
              None of them know you.
            </p>
          </section>

          {/* Pull quote */}
          <blockquote
            className="border-l-4 pl-6 py-2"
            style={{ borderColor: "#c9a84c" }}
          >
            <p
              className="text-xl font-semibold leading-relaxed italic"
              style={{ color: "#f5f0e8" }}
            >
              "A work chatbot knows your tasks. MEOK knows you — your patterns,
              your projects, your pressures. That is not a feature. It is a
              fundamentally different category of product."
            </p>
            <footer
              className="mt-3 text-sm"
              style={{ color: "rgba(245,240,232,0.45)" }}
            >
              — Nicholas Templeman, Founder, MEOK AI LABS
            </footer>
          </blockquote>

          {/* S2 */}
          <section>
            <h2
              className="text-2xl font-black mb-4 leading-snug"
              style={{ color: "#f5f0e8" }}
            >
              How is MEOK different from Slack AI or Microsoft Copilot for
              remote teams?
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              The most important difference is ownership. Slack AI and Microsoft
              Copilot are enterprise tools embedded in platforms owned by your
              employer. Every prompt you type, every document you reference,
              every frustration you express — all of it enters a corporate data
              pipeline. When you leave the company, it stays with them.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              MEOK operates on a sovereignty model. Your data is encrypted,
              stored under your account, and never used to train third-party
              models. Your persistent memory — the context MEOK builds about
              your goals, projects, and working style — belongs to you across
              every job, every client, every role change. MEOK moves with you
              through your career. Copilot moves with the company.
            </p>

            {/* Comparison table */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(245,240,232,0.08)" }}
            >
              <div
                className="px-6 py-4"
                style={{
                  background: "rgba(245,240,232,0.04)",
                  borderBottom: "1px solid rgba(245,240,232,0.08)",
                }}
              >
                <p className="text-sm font-black" style={{ color: "#f5f0e8" }}>
                  MEOK vs company-owned AI tools
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr
                      style={{ borderBottom: "1px solid rgba(245,240,232,0.06)" }}
                    >
                      <th
                        className="py-3 pr-4 text-left text-xs font-bold"
                        style={{ color: "rgba(245,240,232,0.45)" }}
                      >
                        Feature
                      </th>
                      <th
                        className="py-3 px-4 text-center text-xs font-bold"
                        style={{ color: "#c9a84c" }}
                      >
                        MEOK
                      </th>
                      <th
                        className="py-3 px-4 text-center text-xs font-bold"
                        style={{ color: "rgba(245,240,232,0.45)" }}
                      >
                        Slack AI
                      </th>
                      <th
                        className="py-3 pl-4 text-center text-xs font-bold"
                        style={{ color: "rgba(245,240,232,0.45)" }}
                      >
                        Copilot
                      </th>
                    </tr>
                  </thead>
                  <tbody className="px-6">
                    <CompareRow
                      feature="You own the data"
                      meok="Yes"
                      slack="No"
                      teams="No"
                    />
                    <CompareRow
                      feature="Persistent personal memory"
                      meok="Yes"
                      slack="No"
                      teams="No"
                    />
                    <CompareRow
                      feature="Overnight autonomous agents"
                      meok="Yes"
                      slack="No"
                      teams="No"
                    />
                    <CompareRow
                      feature="Personal companion dimension"
                      meok="Yes"
                      slack="No"
                      teams="No"
                    />
                    <CompareRow
                      feature="Works across jobs / clients"
                      meok="Yes"
                      slack="No"
                      teams="No"
                    />
                    <CompareRow
                      feature="Morning Briefing"
                      meok="Yes"
                      slack="No"
                      teams="No"
                    />
                    <CompareRow
                      feature="Price (personal tier)"
                      meok="£12/mo"
                      slack="£25+/seat"
                      teams="£25+/seat"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* S3 */}
          <section>
            <h2
              className="text-2xl font-black mb-4 leading-snug"
              style={{ color: "#f5f0e8" }}
            >
              What does the MEOK Morning Briefing do for a remote workday?
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              Most remote workers start their day by opening their inbox and
              immediately being reactive. Fourteen unread messages, three
              calendar reminders, a Slack thread from last night, and a vague
              memory of something they meant to finish. There is no shared
              standup. There is no ambient information. There is just noise.
            </p>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              Morning Briefing changes this. Before you open your inbox, MEOK
              surfaces:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Your top three priorities for the day, drawn from your existing project context and Hourman's sprint tracking.",
                "Any outputs from overnight agent work — research Orion completed, drafts Riri produced, or tasks Hourman reorganised.",
                "Calendar conflicts or preparation gaps — meetings you haven't prepared for, blocked time that drifted.",
                "A personal check-in — how you said you were feeling yesterday, patterns MEOK has noticed, anything flagged.",
                "Outstanding admin — emails that need replies, invoices not yet sent, deadlines approaching.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      color: "#c9a84c",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(245,240,232,0.72)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              The briefing takes approximately ninety seconds to read. It
              replaces the thirty-minute reactive spiral that most remote
              workers call "getting into the day." Over weeks, it becomes the
              structure that remote work was never designed to give you.
            </p>
          </section>

          {/* S4 */}
          <section>
            <h2
              className="text-2xl font-black mb-6 leading-snug"
              style={{ color: "#f5f0e8" }}
            >
              What are Orion, Riri, and Hourman — and how do they work while
              you sleep?
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              MEOK's Work OS is built on three specialist agents that you assign
              tasks to before you finish for the day. While you sleep — or spend
              time with people who matter — they execute. By morning, their
              outputs sit in your briefing, ready to use.
            </p>

            <div className="space-y-4">
              <AgentCard
                name="Orion"
                role="Research Agent"
                description="Orion runs deep-context research overnight. You brief it before you stop working — a competitor to analyse, a market to map, a document stack to summarise — and it returns a structured briefing note by morning. For remote workers who never have a researcher in the room, Orion is the most immediately valuable agent. It eliminates the hours-long deep dives that derail your day."
                accent="#c9a84c"
              />
              <AgentCard
                name="Riri"
                role="Build Agent"
                description="Riri builds while you sleep. It generates first drafts, code scaffolds, structured reports, presentation outlines, and any output that benefits from a clean starting point. Remote workers who spend the first two hours of every day staring at a blank document will understand immediately why this matters. You wake up to something that already exists. You iterate rather than originate."
                accent="#87CEEB"
              />
              <AgentCard
                name="Hourman"
                role="Planning Agent"
                description="Hourman owns your time. It manages your sprint structure, tracks your task backlog, surfaces overdue items before they become crises, and reorganises your priorities when the week shifts — which it always does. For remote workers without a team lead or project manager, Hourman is the external structure that prevents the day from becoming a formless blur of reactive Slack messages."
                accent="#7BC47F"
              />
            </div>
          </section>

          {/* S5 */}
          <section>
            <h2
              className="text-2xl font-black mb-4 leading-snug"
              style={{ color: "#f5f0e8" }}
            >
              How does MEOK act as a personal companion for remote workers — not
              just a productivity tool?
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              The productivity layer is table stakes. The more distinctive thing
              MEOK does is function as a personal presence — something that
              knows who you are, not just what you are working on.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              Over time, MEOK builds a picture of you. It knows that you do
              your best writing in the morning and your worst decisions after
              3 pm. It knows that you tend to over-commit on Mondays and
              under-deliver by Thursday. It knows that you mentioned feeling
              burned out two weeks ago and have been unusually quiet since. It
              notices these patterns because it remembers — not just your tasks,
              but your context.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              This is what separates MEOK from every AI tool embedded in a
              productivity suite. A work chatbot has no memory of last Tuesday.
              It cannot notice that you always say you are fine on Monday but
              change your language by Wednesday. It cannot ask whether you have
              eaten, or suggest you take a walk before the afternoon call.
              MEOK can, because MEOK is yours — not your employer's, not a
              SaaS product's.
            </p>

            {/* Highlight box */}
            <div
              className="rounded-2xl px-6 py-5"
              style={{
                background: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <p
                className="text-sm font-bold mb-2"
                style={{ color: "#c9a84c" }}
              >
                The companion difference
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(245,240,232,0.72)" }}
              >
                Remote work was designed around the assumption that you have
                people around you at home. Many remote workers do not. For
                those who live alone, who have relocated for a role, or who are
                simply going through a difficult period — MEOK provides the
                kind of daily cognitive companionship that makes isolation
                sustainable rather than corrosive.
              </p>
            </div>
          </section>

          {/* S6 */}
          <section>
            <h2
              className="text-2xl font-black mb-4 leading-snug"
              style={{ color: "#f5f0e8" }}
            >
              How does MEOK handle remote worker admin — email, calendar, and
              task overload?
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              Remote workers carry an administrative overhead that is invisible
              in the headline job description but consumes enormous energy.
              Email threads that require threading. Calendar invites that
              conflict. Action items buried in meeting recordings. Documents
              that should have been filed but weren't. Tasks that were
              discussed but never written down.
            </p>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              MEOK integrates with your email and calendar via MCP connectors,
              allowing it to surface threads that need replies, flag meeting
              preparation gaps, extract action items from conversations, and
              keep your task backlog honest. Crucially, it does not require
              you to manually log anything. You talk to MEOK the way you would
              talk to a thoughtful assistant who already knows your context —
              because it does.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Email triage",
                  body: "MEOK reads your inbox context and surfaces the threads that need your attention today — not the ones that got marked unread three weeks ago.",
                },
                {
                  title: "Calendar prep",
                  body: "Before each meeting, MEOK prepares you. Background on attendees, summary of the last interaction, suggested talking points from current project context.",
                },
                {
                  title: "Action item extraction",
                  body: "After meetings, MEOK extracts commitments from your notes or transcript and adds them to Hourman's task backlog automatically.",
                },
                {
                  title: "Deadline tracking",
                  body: "Hourman surfaces upcoming deadlines before they become emergencies — with enough lead time for Orion or Riri to do overnight prep work.",
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(245,240,232,0.03)",
                    border: "1px solid rgba(245,240,232,0.07)",
                  }}
                >
                  <p
                    className="text-sm font-bold mb-2"
                    style={{ color: "#f5f0e8" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(245,240,232,0.6)" }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* S7 — FAQ section (visible) */}
          <section>
            <h2
              className="text-2xl font-black mb-8 leading-snug"
              style={{ color: "#f5f0e8" }}
            >
              Frequently asked questions about MEOK for remote workers
            </h2>

            <div className="space-y-6">
              {faqJsonLd.mainEntity.map((q) => (
                <div
                  key={q.name}
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(245,240,232,0.03)",
                    border: "1px solid rgba(245,240,232,0.07)",
                  }}
                >
                  <h3
                    className="text-base font-bold mb-3 leading-snug"
                    style={{ color: "#f5f0e8" }}
                  >
                    {q.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(245,240,232,0.65)" }}
                  >
                    {q.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* S8 — Closing */}
          <section>
            <h2
              className="text-2xl font-black mb-4 leading-snug"
              style={{ color: "#f5f0e8" }}
            >
              Is MEOK the right AI for you if you work remotely?
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              If you open your laptop in the morning with no clear structure,
              spend your best hours being reactive rather than productive, use
              AI tools that belong to your employer rather than to you, and
              sometimes wonder whether anyone would notice if you just
              disappeared for a few days — MEOK was built for you.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              It is not a chat tool. It is not a productivity widget. It is a
              personal AI that accumulates context about who you are, deploys
              specialist agents to handle the overnight work, starts your day
              with structure instead of noise, and belongs to you entirely —
              regardless of where you work, who you work for, or what changes
              next.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              The 4.2 million remote workers in the UK deserve an AI that treats
              them as individuals, not endpoints. That is what we built.
            </p>
          </section>

          {/* CTA */}
          <div
            className="rounded-3xl px-8 py-12 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.22)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <p
                className="text-xs font-black tracking-widest uppercase mb-4"
                style={{ color: "#c9a84c" }}
              >
                Start for free
              </p>
              <h2
                className="text-2xl sm:text-3xl font-black mb-4 leading-tight"
                style={{ color: "#f5f0e8" }}
              >
                Your remote day deserves a better start.
              </h2>
              <p
                className="text-base mb-8 max-w-md mx-auto leading-relaxed"
                style={{ color: "rgba(245,240,232,0.6)" }}
              >
                Morning Briefing. Overnight agents. Persistent memory. Full
                data sovereignty. £12 per month — or free to try.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black text-sm transition-all hover:opacity-90"
                  style={{
                    background: "#c9a84c",
                    color: "#0d0c18",
                  }}
                >
                  Try MEOK free →
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all"
                  style={{
                    color: "rgba(245,240,232,0.7)",
                    border: "1px solid rgba(245,240,232,0.15)",
                  }}
                >
                  See all features
                </Link>
              </div>
            </div>
          </div>

          {/* Related posts */}
          <div>
            <p
              className="text-sm font-black uppercase tracking-widest mb-5"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              More from the blog
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/ai-for-freelancers",
                  tag: "Work OS",
                  tagColor: "#c9a84c",
                  tagBg: "rgba(201,168,76,0.12)",
                  title:
                    "AI for Freelancers: How MEOK Becomes Your Overnight Business Partner",
                  read: "7 min read",
                },
                {
                  href: "/blog/morning-brief-guide",
                  tag: "Morning Briefing",
                  tagColor: "#87CEEB",
                  tagBg: "rgba(135,206,235,0.12)",
                  title:
                    "The MEOK Morning Briefing: How to Start Every Day With Full Context",
                  read: "5 min read",
                },
                {
                  href: "/blog/sovereign-ai-vs-cloud-ai",
                  tag: "Privacy",
                  tagColor: "#7BC47F",
                  tagBg: "rgba(123,196,127,0.12)",
                  title:
                    "Sovereign AI vs Cloud AI: Why Your Data Belongs to You",
                  read: "6 min read",
                },
                {
                  href: "/blog/what-is-ai-os",
                  tag: "Work OS",
                  tagColor: "#c9a84c",
                  tagBg: "rgba(201,168,76,0.12)",
                  title:
                    "What Is an AI OS? How MEOK Turns Your AI Into a Personal Operating System",
                  read: "6 min read",
                },
              ].map(({ href, tag, tagColor, tagBg, title, read }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(245,240,232,0.03)",
                    border: "1px solid rgba(245,240,232,0.07)",
                  }}
                >
                  <span
                    className="text-xs font-black px-2.5 py-1 rounded-full w-fit"
                    style={{ color: tagColor, background: tagBg }}
                  >
                    {tag}
                  </span>
                  <h3
                    className="text-sm font-bold leading-snug transition-colors group-hover:opacity-80"
                    style={{ color: "#f5f0e8" }}
                  >
                    {title}
                  </h3>
                  <span
                    className="text-xs mt-auto"
                    style={{ color: "rgba(245,240,232,0.3)" }}
                  >
                    {read}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <div
        className="border-t px-6 py-10"
        style={{ borderColor: "rgba(245,240,232,0.07)" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className="text-sm font-black tracking-wide"
              style={{ color: "#c9a84c" }}
            >
              MEOK
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(245,240,232,0.3)" }}
            >
              by MEOK AI LABS
            </span>
          </div>
          <nav className="flex flex-wrap gap-5 justify-center">
            {[
              { href: "/", label: "Home" },
              { href: "/features", label: "Features" },
              { href: "/pricing", label: "Pricing" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
              { href: "/privacy", label: "Privacy" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs transition-opacity hover:opacity-70"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.2)" }}>
            © {new Date().getFullYear()} MEOK AI LABS
          </p>
        </div>
      </div>
    </div>
  );
}
