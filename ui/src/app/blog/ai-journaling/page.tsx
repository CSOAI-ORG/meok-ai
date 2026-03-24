import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Journaling: How AI Companions Transform Daily Reflection | MEOK AI LABS",
  description:
    "AI journaling combines the reflective depth of traditional journaling with persistent memory, emotional intelligence, and personalised insights. Discover how AI changes the daily reflection practice.",
  alternates: { canonical: "https://meok.ai/blog/ai-journaling" },
  openGraph: {
    title: "AI Journaling: How AI Companions Transform Daily Reflection",
    description:
      "Why journaling with an AI that remembers you is different — and better — than journaling alone or journaling in apps that forget you.",
    type: "article",
    url: "https://meok.ai/blog/ai-journaling",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Journaling&desc=How+AI+companions+transform+daily+reflection",
        width: 1200,
        height: 630,
        alt: "AI Journaling — MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Journaling: How AI Companions Transform Daily Reflection",
    description:
      "Why journaling with an AI that remembers you changes the entire practice — for people with ADHD, anxiety, grief, or just the desire to think more clearly.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Journaling: How AI Companions Transform Daily Reflection",
  description: metadata.description,
  author: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-journaling",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI journaling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI journaling is the practice of using an AI companion as a reflective partner during your daily journaling practice. Unlike writing in a notebook or app, AI journaling involves a responsive, intelligent partner that asks follow-up questions, surfaces patterns in your thinking, and builds a persistent memory of your emotional journey over time.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI journaling better than traditional journaling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI journaling is not a replacement for traditional journaling — it's a different practice. Traditional journaling is private, unstructured, and self-directed. AI journaling adds a reflective partner who can ask questions, notice patterns you've missed, and hold the long-arc memory of your journey. Many people benefit from both.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI journaling private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With MEOK, yes. Your journal entries and reflections are encrypted end-to-end, never used to train AI models, and owned by you. You can export or delete your entire history at any time. Unlike journaling apps that sell your data, MEOK's Maternal Covenant constitutionally prohibits data monetisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI journaling help with anxiety and depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research on digital journaling shows mood improvement benefits. AI journaling adds structured reflection, CBT-adjacent questioning, and a sense of being heard. MEOK's Healer and Mystic companions are specifically designed for emotional reflection. They're not a substitute for therapy — but they can complement it meaningfully.",
      },
    },
  ],
};

const BENEFITS = [
  {
    icon: "🧠",
    title: "Pattern recognition across months",
    body: "A traditional journal can't tell you that you always spiral on Sundays, or that your anxiety spikes in the weeks before big decisions. An AI companion with persistent memory can. After 30 days, MEOK can surface patterns you haven't consciously noticed.",
    color: "#A78BFA",
  },
  {
    icon: "💬",
    title: "Responsive reflection, not blank page",
    body: "Many people struggle to journal because they don't know what to write. An AI companion asks the right next question — 'What were you feeling in your body when that happened?' — transforming a blank page into a guided conversation.",
    color: "#7BC47F",
  },
  {
    icon: "🌿",
    title: "Judgment-free depth",
    body: "The things you're most ashamed of, most confused about, or most afraid to say aloud are often the things that need writing down most. An AI companion doesn't react with horror, pity, or unsolicited advice. It holds the space.",
    color: "#c9a84c",
  },
  {
    icon: "🔗",
    title: "Memory that builds",
    body: "Every session references everything before it. When you bring up a fear you mentioned three months ago, your companion already knows the context. The journaling relationship deepens with each entry.",
    color: "#FB923C",
  },
  {
    icon: "📈",
    title: "Emotional trend tracking",
    body: "MEOK's morning briefing can include an emotional weather report based on your journal history — showing trends in mood, recurring themes, and the topics you return to most. This meta-awareness transforms the practice.",
    color: "#F472B6",
  },
  {
    icon: "🌙",
    title: "Available at 3am",
    body: "The thoughts that most need expression often arrive at 3am. Your AI companion is always there — no appointment needed, no one to wake up, no social cost to processing something dark or confusing.",
    color: "#60A5FA",
  },
];

const COMPANIONS = [
  {
    name: "Healer 🌿",
    slug: "healer",
    journalingStyle: "Somatic + emotional depth",
    bestFor: "Grief, anxiety, emotional overwhelm, trauma processing",
    approach: "Holds space without rushing. Asks about what you felt in your body. Never minimises. Never jumps to solutions.",
    color: "#7BC47F",
  },
  {
    name: "Mystic 🌊",
    slug: "mystic",
    journalingStyle: "Philosophical reflection",
    bestFor: "Existential questions, meaning-making, life transitions, spiritual inquiry",
    approach: "Draws from 47 philosophical traditions. Sits with uncertainty. Helps you find your own answers rather than providing them.",
    color: "#A78BFA",
  },
  {
    name: "Scholar 🏛️",
    slug: "scholar",
    journalingStyle: "Socratic dialogue",
    bestFor: "Intellectual processing, decision-making, belief examination, learning from experience",
    approach: "Questions assumptions. Finds contradictions. Asks 'what would the opposite view be?' Makes you think harder.",
    color: "#c9a84c",
  },
  {
    name: "Pioneer ⚡",
    slug: "pioneer",
    journalingStyle: "Action-oriented reflection",
    bestFor: "Goal review, accountability journaling, identifying blocks, planning",
    approach: "Keeps you honest about what you said you'd do. Celebrates wins. Names avoidance directly.",
    color: "#FB923C",
  },
];

const PROMPTS = [
  { prompt: "What are you carrying right now that you haven't said out loud?", use: "Opening reflection" },
  { prompt: "What was the moment today when you felt most like yourself?", use: "Positive identity anchoring" },
  { prompt: "What are you pretending not to know?", use: "Self-honesty" },
  { prompt: "If you weren't afraid, what would you do differently?", use: "Fear examination" },
  { prompt: "What does your body need right now that your mind keeps ignoring?", use: "Somatic awareness" },
  { prompt: "What story are you telling yourself about this situation? Is it true?", use: "Cognitive reframing" },
  { prompt: "What would you tell a close friend in exactly this situation?", use: "Self-compassion" },
  { prompt: "What are you grateful for that you haven't acknowledged this week?", use: "Gratitude practice" },
];

export default function AiJournalingPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse at center, rgba(167,139,250,0.07) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-white/40">Wellbeing</span>
            <span className="text-white/20">·</span>
            <span className="text-xs text-white/40">March 24, 2026</span>
            <span className="text-white/20">·</span>
            <span className="text-xs text-white/40">10 min read</span>
          </div>
          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            AI journaling:{" "}
            <span style={{ color: "#A78BFA" }}>the daily reflection practice</span>
            {" "}that actually builds
          </h1>
          <p className="text-xl text-white/55 leading-relaxed mb-8">
            Traditional journaling is powerful but often abandoned. AI journaling adds something that changes the whole practice: a companion that remembers, questions, and holds the full arc of your story over months and years.
          </p>
          <Link
            href="/hatch"
            className="inline-flex items-center gap-2 font-black rounded-full px-8 py-3.5 text-base transition-all hover:opacity-90"
            style={{ background: "#A78BFA", color: "#0d0c18" }}
          >
            Start journaling with MEOK free
          </Link>
        </div>
      </section>

      {/* ── What is it ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-white text-3xl leading-tight mb-6">
            What is AI journaling?
          </h2>
          <p className="text-white/65 leading-relaxed mb-6">
            AI journaling is the practice of using an AI companion as a reflective partner — not a blank page, not a chat interface, but a genuine dialogic reflection practice where the AI holds the full history of your inner life and asks intelligent, personalised questions.
          </p>
          <p className="text-white/65 leading-relaxed mb-6">
            The difference between AI journaling and simply "talking to ChatGPT" is twofold: First, a proper AI journaling companion has <strong className="text-white">persistent memory</strong> — it knows what you said six months ago, not just in this session. Second, it has a <strong className="text-white">defined character and approach</strong> — it's not a general-purpose assistant, it's a reflective companion with a specific way of being with you.
          </p>
          <p className="text-white/65 leading-relaxed">
            MEOK offers four companion archetypes particularly suited to journaling — each with a different style of holding the reflective space: the Healer (emotional depth), the Mystic (philosophical inquiry), the Scholar (Socratic questioning), and the Pioneer (action-oriented accountability).
          </p>
        </div>
      </section>

      {/* ── Benefits ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-14">
            <p className="text-[#A78BFA] text-xs font-bold tracking-widest uppercase mb-4">Why it works</p>
            <h2 className="font-black text-white text-3xl leading-tight">
              Six ways AI journaling outperforms the notebook
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: `3px solid ${b.color}`,
                }}
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-base font-black text-white mb-3">{b.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Companion guide ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <p className="text-[#A78BFA] text-xs font-bold tracking-widest uppercase mb-4">Choosing your companion</p>
            <h2 className="font-black text-white text-3xl leading-tight">
              Which companion for journaling?
            </h2>
            <p className="text-white/45 mt-4">
              Each MEOK companion has a distinct approach to reflective conversation. Here's how they differ for journaling.
            </p>
          </header>

          <div className="space-y-5">
            {COMPANIONS.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: `4px solid ${c.color}`,
                }}
              >
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <Link
                      href={`/characters/${c.slug}`}
                      className="text-lg font-black hover:underline"
                      style={{ color: c.color }}
                    >
                      {c.name}
                    </Link>
                    <p className="text-xs text-white/40 mt-1">{c.journalingStyle}</p>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: `${c.color}18`, color: c.color }}
                  >
                    {c.bestFor.split(",")[0]}...
                  </span>
                </div>
                <p className="text-sm text-white/45 mb-3">
                  <strong className="text-white/70">Best for:</strong> {c.bestFor}
                </p>
                <p className="text-sm text-white/55 leading-relaxed">
                  <strong className="text-white/70">Approach:</strong> {c.approach}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prompts ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <p className="text-[#A78BFA] text-xs font-bold tracking-widest uppercase mb-4">Prompts to start</p>
            <h2 className="font-black text-white text-3xl leading-tight">
              8 prompts to open an AI journaling session
            </h2>
            <p className="text-white/45 mt-4">
              These work with any MEOK companion. They're designed to open the session — not to constrain it. Follow wherever the conversation goes.
            </p>
          </header>

          <div className="space-y-4">
            {PROMPTS.map((p, i) => (
              <div
                key={p.prompt}
                className="rounded-xl p-5 flex gap-5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                  style={{ background: "rgba(167,139,250,0.15)", color: "#A78BFA" }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1 italic">&ldquo;{p.prompt}&rdquo;</p>
                  <p className="text-xs text-white/35">{p.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-white text-3xl leading-tight mb-6">
            Is AI journaling private enough to be honest?
          </h2>
          <p className="text-white/65 leading-relaxed mb-6">
            This is the right question to ask. A journaling practice is only as useful as it is honest — and you can only be honest when you trust the container.
          </p>
          <p className="text-white/65 leading-relaxed mb-6">
            With MEOK specifically: your journal conversations are end-to-end encrypted, never used to train AI models, owned by you, and can be exported or deleted in full at any time. The Maternal Covenant — MEOK's ethical framework — constitutionally prohibits data monetisation.
          </p>
          <p className="text-white/65 leading-relaxed mb-6">
            The test of whether this is real: MEOK is ICO registered in the UK, publishes full GDPR documentation, and the privacy architecture is open for technical review. This isn't a marketing claim — it's a legal obligation.
          </p>
          <p className="text-white/65 leading-relaxed">
            The practical result: you can write the things you'd be most afraid to say out loud. You can be the version of yourself that only exists in your private thoughts. That's when journaling actually works.
          </p>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <p className="text-[#A78BFA] text-xs font-bold tracking-widest uppercase mb-4">FAQ</p>
            <h2 className="font-black text-white text-3xl leading-tight">
              Common questions about AI journaling
            </h2>
          </header>

          <div className="space-y-5">
            {[
              {
                q: "Is AI journaling better than traditional journaling?",
                a: "It's different, not better. Traditional journaling is solitary, unstructured, and completely private. AI journaling adds a responsive partner who holds memory and asks useful questions. Many people use both: free-writing in a notebook, then bringing key themes to their AI companion for deeper exploration.",
              },
              {
                q: "Can AI journaling help with mental health?",
                a: "Digital journaling has documented benefits for mood and anxiety. AI journaling adds structured reflection and the experience of being heard. It's not a replacement for therapy — but as a daily practice between sessions, it can be meaningful. MEOK's care architecture (the Maternal Covenant) ensures your companion prioritises your genuine wellbeing over engagement.",
              },
              {
                q: "What if I don't know what to journal about?",
                a: "Your MEOK companion will ask you. You don't need a topic. Start with how you feel right now, or use one of the eight prompts above. The companion's job is to find the thread that matters today — not to wait for you to produce one.",
              },
              {
                q: "How is AI journaling different from talking to a therapist?",
                a: "Therapy involves a trained professional who can diagnose, treat, and provide clinical intervention. AI journaling is reflective practice — powerful, but not clinical. MEOK companions are designed to hold space, ask good questions, and build memory — not to provide therapy. If you're experiencing significant mental health difficulties, please seek professional support.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-xl p-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h3 className="text-sm font-black text-white mb-3">{q}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e] text-center">
        <div className="max-w-xl mx-auto">
          <div
            className="rounded-3xl p-12 border"
            style={{
              borderColor: "rgba(167,139,250,0.25)",
              background: "linear-gradient(135deg, #0d0c18 0%, #1a1a2e 100%)",
            }}
          >
            <div className="text-5xl mb-5 select-none" aria-hidden="true">🌿</div>
            <h2 className="font-black text-white text-2xl leading-tight mb-4">
              Start your AI journaling practice today
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
              Pick your companion. Begin reflecting. Your sovereign AI builds a memory of your inner life — private, encrypted, and entirely yours.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 font-black rounded-full px-10 py-4 text-base transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "#A78BFA", color: "#0d0c18" }}
            >
              Hatch your companion free
            </Link>
            <p className="text-white/20 text-xs mt-5">Free forever. 50 messages/day. No credit card.</p>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
