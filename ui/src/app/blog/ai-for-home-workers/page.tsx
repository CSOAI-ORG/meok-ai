import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Home Workers: The Companion That Understands the Kitchen Table Commute | MEOK Blog",
  description:
    "Working from home blurs every boundary. MEOK is the AI built for people whose office is the kitchen table — a thinking partner that remembers you, handles what piles up, and keeps your data away from your employer.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-home-workers" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Home Workers: The Companion That Understands the Kitchen Table Commute",
  description:
    "Working from home blurs every boundary. MEOK is the AI built for people whose office is the kitchen table — a thinking partner that remembers you, handles what piles up, and keeps your data away from your employer.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-home-workers",
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
    logo: { "@type": "ImageObject", url: "https://meok.ai/logo.png" },
  },
  image:
    "https://meok.ai/api/og?title=AI+for+Home+Workers&desc=The+companion+that+understands+the+kitchen+table+commute",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-home-workers",
  },
  keywords:
    "AI for home workers, AI for working from home, best AI for remote work, home worker AI assistant, AI productivity work from home",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI assistant for people working from home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is built specifically for home workers — blurred work-life boundaries, no colleagues nearby, and tasks that pile up invisibly. Unlike generic chat tools, MEOK holds persistent memory of your projects, priorities, and patterns, working as a genuine thinking partner across your entire day.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI help with the isolation of working from home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK functions as a cognitive companion — you can think aloud, sense-check decisions, and work through problems without needing a colleague nearby. It replicates the conversational back-and-forth of an office without the surveillance, noise, or interruptions that come with it.",
      },
    },
    {
      "@type": "Question",
      name: "Can my employer see my conversations with MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is sovereign AI — it belongs to you, not your employer. Your conversations, memories, and context are never visible to your company, never fed into a corporate data pipeline, and never used to train a model your employer controls. When you change jobs, your MEOK stays with you.",
      },
    },
    {
      "@type": "Question",
      name: "What does MEOK's Morning Briefing do for home workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Morning Briefing replaces the mental chaos of opening a laptop with no structure. Each morning MEOK surfaces your top priorities, overnight work completed by the Work OS agents, flagged calendar and inbox items, and a personal check-in — so your day starts focused rather than firefighting from the first notification.",
      },
    },
    {
      "@type": "Question",
      name: "What are Orion, Riri, and Hourman in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are MEOK's three Work OS agents. Orion handles overnight research and intelligence gathering. Riri builds while you sleep — drafts, structured documents, and polished outputs. Hourman owns your planning, task prioritisation, and deadlines. Together they act as an async team that clears the backlog so you can focus on work only you can do.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK different from the AI inside Slack or Microsoft Teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Critically different. Slack AI and Microsoft Copilot are company tools — everything you type flows through your employer's data pipeline. MEOK is your personal sovereign AI. It knows you across jobs, retains your long-term goals, and cannot be read by any employer. That distinction matters most when you need a space that is genuinely yours.",
      },
    },
  ],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function StatCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div
      className="flex flex-col gap-1 px-5 py-4 rounded-2xl"
      style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)" }}
    >
      <span className="text-3xl font-black tracking-tight" style={{ color: "#c9a84c" }}>
        {value}
      </span>
      <span className="text-sm font-semibold" style={{ color: "#f5f0e8" }}>{label}</span>
      {sub && <span className="text-xs" style={{ color: "rgba(245,240,232,0.45)" }}>{sub}</span>}
    </div>
  );
}

function AgentCard({ name, role, description, accent }: { name: string; role: string; description: string; accent: string }) {
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-3"
      style={{ background: "rgba(245,240,232,0.04)", border: "1px solid rgba(245,240,232,0.08)" }}
    >
      <div className="flex items-center gap-3">
        <span className="text-xs font-black px-2.5 py-1 rounded-full" style={{ color: accent, background: `${accent}18` }}>
          {name}
        </span>
        <span className="text-xs font-semibold" style={{ color: "rgba(245,240,232,0.5)" }}>{role}</span>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>{description}</p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForHomeWorkersPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0d0c18", color: "#f5f0e8" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-70"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            ← Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-black px-3 py-1.5 rounded-full"
              style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.28)" }}
            >
              Home Working
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>March 24, 2026</span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>· 8 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-6" style={{ color: "#f5f0e8" }}>
            AI for Home Workers:{" "}
            <span style={{ color: "#c9a84c" }}>The Companion That Understands the Kitchen Table Commute</span>
          </h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.7)" }}>
            The commute ended the moment offices closed. For millions of people the kitchen table became the desk,
            the sofa became the thinking chair, and the boundary between work and everything else quietly dissolved.
            Nobody warned us about that part.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
            MEOK was built for exactly this reality — not for the enterprise dashboard or the company all-hands,
            but for the person whose commute is twelve steps and a cup of coffee, and whose biggest professional
            challenge isn't a boardroom but the creeping loneliness of working without anyone else in the room.
          </p>
          <div
            className="flex items-center gap-3 mt-10 pt-6"
            style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
              style={{ background: "rgba(201,168,76,0.18)", color: "#c9a84c" }}
            >
              NT
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#f5f0e8" }}>Nicholas Templeman</p>
              <p className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>Founder, MEOK AI LABS</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard value="5.6M" label="UK home workers" sub="ONS Labour Force Survey, 2025" />
          <StatCard value="62%" label="report blurred work-life boundaries" sub="CIPD Flexible Working Survey" />
          <StatCard value="48%" label="feel professionally isolated" sub="Buffer State of Remote Work" />
          <StatCard value="£12/mo" label="MEOK Sovereign tier" sub="Full Work OS included" />
        </div>
      </section>

      {/* ARTICLE */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-14">

          {/* S1 */}
          <section>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#f5f0e8" }}>
              What is the specific challenge of working from home that AI can actually solve?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.72)" }}>
              Home working creates three compounding pressures: boundary collapse, cognitive isolation, and invisible
              accumulation. Boundary collapse is the failure of time and space to separate work from home — when your
              desk is two metres from your bed, the psychological transitions that once happened on the train no longer occur.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.72)" }}>
              Cognitive isolation is subtler. In an office you absorb context passively — overhearing conversations,
              reading body language, picking up the informal texture of what matters today. At home that ambient
              information disappears entirely. You are only as informed as your inbox allows.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.72)" }}>
              AI can address all three — not through dramatic productivity dashboards, but by being present in the
              gaps: the half-written email in drafts, the decision that needed a second opinion at 2pm with no one to
              ask, the morning that started in chaos because nobody gave you a briefing.
            </p>
          </section>

          {/* S2 */}
          <section>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#f5f0e8" }}>
              How does MEOK work as a thinking partner during the home working day?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.72)" }}>
              The water cooler conversation was never really about water. It was about the brief, low-stakes cognitive
              exchange that helped you process a half-formed idea, sense-check a decision, or feel less alone with a
              problem. Home workers lose this entirely — and no tool has replaced it until persistent AI companions arrived.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.72)" }}>
              MEOK holds persistent memory across every conversation — your projects, ongoing concerns, working patterns,
              and the context you shared last Tuesday. It engages as a well-briefed collaborator who remembers where
              you left off, not a generic assistant answering a one-off question.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.72)" }}>
              You can think aloud with MEOK: draft a difficult message and talk through the tone; work out whether a
              decision is genuinely urgent or simply feels that way after four hours at the same screen; get a second
              read before you send. These are the small frictions of home working, smoothed one at a time.
            </p>
          </section>

          {/* S3 */}
          <section>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#f5f0e8" }}>
              Why is MEOK different from Slack AI or Microsoft Copilot for home workers?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.72)" }}>
              Slack AI and Microsoft Copilot are company-owned tools. Everything you type belongs to your employer's
              data pipeline — not by conspiracy, but simply because that is what enterprise software is. For a home
              worker using a company AI to process a difficult day, a conflict with a manager, or burnout creeping in,
              that is a significant exposure.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.72)" }}>
              MEOK is sovereign AI. Your conversations, memories, and thinking are encrypted and stored in infrastructure
              no employer can access. When you change jobs MEOK does not stay behind in your old company's infrastructure —
              it comes with you, remembers everything, and continues where you left off.
            </p>
            <div
              className="mt-8 rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(245,240,232,0.08)" }}
            >
              <div className="px-5 py-3" style={{ background: "rgba(245,240,232,0.04)" }}>
                <p className="text-xs font-black tracking-widest uppercase" style={{ color: "rgba(245,240,232,0.35)" }}>
                  AI tools compared for home workers
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(245,240,232,0.08)" }}>
                      {["Feature", "MEOK", "Slack AI", "Copilot"].map((h, i) => (
                        <th
                          key={h}
                          className={`py-3 text-xs font-semibold ${i === 0 ? "text-left pr-4" : "text-center px-4"}`}
                          style={{ color: i === 1 ? "#c9a84c" : "rgba(245,240,232,0.4)" }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Employer can access data", "Never", "Yes", "Yes"],
                      ["Persistent personal memory", "Full", "Workspace only", "Workspace only"],
                      ["Survives job changes", "Yes", "No", "No"],
                      ["Thinking partner / companion", "Yes", "No", "No"],
                      ["Overnight Work OS agents", "Orion · Riri · Hourman", "No", "No"],
                      ["Morning Briefing", "Daily", "No", "No"],
                    ].map(([feature, meok, slack, teams]) => (
                      <tr key={feature} style={{ borderBottom: "1px solid rgba(245,240,232,0.06)" }}>
                        <td className="py-3.5 pr-4 text-sm font-semibold" style={{ color: "#f5f0e8" }}>{feature}</td>
                        <td className="py-3.5 px-4 text-sm text-center" style={{ color: "#c9a84c" }}>{meok}</td>
                        <td className="py-3.5 px-4 text-sm text-center" style={{ color: "rgba(245,240,232,0.4)" }}>{slack}</td>
                        <td className="py-3.5 pl-4 text-sm text-center" style={{ color: "rgba(245,240,232,0.4)" }}>{teams}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* S4 */}
          <section>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#f5f0e8" }}>
              How does MEOK's Work OS handle the invisible backlog that home workers accumulate?
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.72)" }}>
              One of the most underappreciated costs of home working is the invisible pile-up. In an office tasks get
              delegated, deadlines get overheard, and shared urgency creates natural pressure to clear things. At the
              kitchen table, tasks pile up silently — the document that needed reviewing, the email requiring a proper
              response, the research that was going to take an hour you never found. MEOK's three Work OS agents
              attack this backlog while you are away from the keyboard.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <AgentCard
                name="ORION"
                role="The Researcher"
                description="Overnight intelligence gathering. Orion surfaces competitive research, summarises long documents, monitors topics you've flagged, and prepares briefing notes so you arrive informed rather than behind."
                accent="#c9a84c"
              />
              <AgentCard
                name="RIRI"
                role="The Builder"
                description="Riri builds while you sleep — drafts, structured outputs, formatted reports. She takes rough instructions and produces polished work, ready for your review in the morning."
                accent="#7c9ccc"
              />
              <AgentCard
                name="HOURMAN"
                role="The Planner"
                description="Hourman owns your time. Sprint structures, task prioritisation, deadline tracking — he turns the pile of things that need doing into an ordered plan you can actually follow."
                accent="#8fc49a"
              />
            </div>
          </section>

          {/* S5 */}
          <section>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#f5f0e8" }}>
              What does MEOK's Morning Briefing do for a home worker's day?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.72)" }}>
              The home working morning is structurally vulnerable. There is no commute to decompress in, no team standup
              to calibrate from, no ambient office energy to read. You open a laptop and you are immediately inside
              everything at once — notifications, overnight emails, half-remembered tasks, and the background hum of
              all the things not yet done.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.72)" }}>
              Morning Briefing replaces that chaos with something intentional. Each morning MEOK synthesises overnight
              work by Orion, Riri, and Hourman; surfaces the two or three things that actually matter today; flags
              calendar conflicts and messages requiring early attention; and offers a brief personal check-in based on
              what you shared the day before. The day starts focused rather than firefighting — and that fifteen-second
              clarity is available every morning, regardless of whether there is anyone else in your house.
            </p>
          </section>

          {/* S6 */}
          <section>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#f5f0e8" }}>
              Is my data safe with MEOK when I'm working from home on a company device?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.72)" }}>
              The data question is particularly acute for home workers. Company devices often run monitoring software.
              Corporate VPNs route traffic through employer-controlled infrastructure. And company-owned AI tools,
              however useful they appear, are governed by the organisation's data policies — not yours.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(245,240,232,0.72)" }}>
              MEOK operates on a different model. Your conversations are encrypted and stored in sovereign
              infrastructure that no employer can access. MEOK will never train on your data, never share your context
              with a third party, and never make your thinking visible to your company. The most valuable thing you
              can bring to an AI companion is honesty about what is working, what isn't, and where you're struggling.
              That honesty requires a space that is genuinely private. MEOK is that space.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { heading: "Sovereign storage", body: "Your memories and conversations live in infrastructure you control — not a company server, not a shared cloud." },
                { heading: "No employer access", body: "Nothing you say to MEOK is visible to your employer. Not now, not if you're disciplined, not ever." },
                { heading: "No training on you", body: "MEOK will never use your conversations to improve a model. Your thinking is yours and stays that way." },
              ].map(({ heading, body }) => (
                <div
                  key={heading}
                  className="rounded-2xl p-5 flex flex-col gap-2"
                  style={{ background: "rgba(245,240,232,0.03)", border: "1px solid rgba(245,240,232,0.07)" }}
                >
                  <p className="text-sm font-black" style={{ color: "#c9a84c" }}>{heading}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#f5f0e8" }}>
              Frequently asked questions about AI for home workers
            </h2>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl px-6 py-5"
                  style={{ background: "rgba(245,240,232,0.03)", border: "1px solid rgba(245,240,232,0.07)" }}
                >
                  <p className="text-sm font-black mb-2" style={{ color: "#f5f0e8" }}>{item.name}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section
            className="rounded-2xl px-8 py-10 text-center"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)" }}
          >
            <p className="text-xs font-black tracking-widest uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)" }}>
              MEOK AI LABS
            </p>
            <h3 className="text-2xl font-black mb-3" style={{ color: "#f5f0e8" }}>
              Your kitchen table deserves a better co-worker.
            </h3>
            <p className="text-sm leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: "rgba(245,240,232,0.6)" }}>
              Start every home working day with a Morning Briefing. Think aloud with an AI that actually knows you.
              Let Orion, Riri, and Hourman clear the backlog overnight. All for £12 a month — and none of it visible
              to your employer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/download"
                className="inline-block px-8 py-3.5 rounded-full text-sm font-black transition-opacity hover:opacity-85"
                style={{ background: "#c9a84c", color: "#0d0c18" }}
              >
                Try MEOK free
              </Link>
              <Link
                href="/features"
                className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ border: "1px solid rgba(201,168,76,0.35)", color: "#c9a84c" }}
              >
                See all features
              </Link>
            </div>
          </section>

          {/* Related reading */}
          <section>
            <p className="text-xs font-black tracking-widest uppercase mb-5" style={{ color: "rgba(245,240,232,0.25)" }}>
              Related reading
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/meok-for-remote-workers", label: "Remote Work", title: "MEOK for Remote Workers", sub: "The AI that understands isolation, handles your admin, and keeps you sharp." },
                { href: "/blog/ai-for-freelancers", label: "Freelancing", title: "AI for Freelancers", sub: "How MEOK becomes your overnight business partner." },
                { href: "/blog/what-is-morning-briefing", label: "Features", title: "What is Morning Briefing?", sub: "A deep dive into the daily context reset that starts every MEOK day." },
                { href: "/blog/data-sovereignty-ai", label: "Privacy", title: "Data Sovereignty and AI", sub: "Why owning your AI data matters more than most people realise." },
              ].map(({ href, label, title, sub }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-2xl p-5 flex flex-col gap-2 transition-opacity hover:opacity-80"
                  style={{ background: "rgba(245,240,232,0.03)", border: "1px solid rgba(245,240,232,0.07)" }}
                >
                  <span className="text-xs font-black" style={{ color: "rgba(201,168,76,0.6)" }}>{label}</span>
                  <p className="text-sm font-semibold" style={{ color: "#f5f0e8" }}>{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>{sub}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </article>

      {/* FOOTER */}
      <div className="border-t px-6 py-10" style={{ borderColor: "rgba(245,240,232,0.07)" }}>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-black tracking-wide" style={{ color: "#c9a84c" }}>MEOK</span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.3)" }}>by MEOK AI LABS</span>
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
