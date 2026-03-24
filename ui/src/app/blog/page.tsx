import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";
import { SubscribeBar } from "./subscribe-bar";

// ── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Blog — MEOK.AI",
  description:
    "Thoughts on sovereign AI, care ethics, building in public, and what it means to own your digital self. Written from a caravan on a farm in England.",
  alternates: {
    canonical: "https://meok.ai/blog",
  },
  openGraph: {
    title: "Blog — MEOK.AI",
    description:
      "Thoughts on sovereign AI, care ethics, and building in public.",
    type: "website",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "MEOK Blog",
  description:
    "Thoughts on sovereign AI, care ethics, and building in public.",
  url: "https://meok.ai/blog",
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
};

// ── Posts ─────────────────────────────────────────────────────────────────────

const POSTS = [
  {
    slug: "why-meok-never-trains-on-you",
    title: "Why MEOK can never be trained on your conversations — and how we enforce it technically",
    excerpt:
      "It's not a privacy policy. It's not a promise. It's architecture. Here's exactly how we make it technically impossible for your personal conversations to become training data — and why most AI companies can't say the same.",
    date: "March 21, 2026",
    readTime: "6 min read",
    tag: "Sovereign AI",
    tagColor: "#87CEEB",
    category: "sovereign-ai",
    featured: true,
  },
  {
    slug: "what-is-ai-os",
    title: "What is an AI Operating System? MEOK OS Explained",
    excerpt:
      "A chatbot forgets you the moment you close the tab. An AI OS remembers everything, runs tools on your behalf, and deepens the relationship over time. Here's the 6-layer architecture behind MEOK OS.",
    date: "March 29, 2026",
    readTime: "8 min read",
    tag: "Technology",
    tagColor: "#d4af37",
    category: "research",
    featured: false,
  },
  {
    slug: "ai-for-depression",
    title: "Can AI Help with Depression? What Research Says and What MEOK Actually Offers",
    excerpt:
      "Research shows AI companions can meaningfully reduce isolation. But the hard question is how — and where the boundary is. An honest look at what MEOK can and cannot do for people with depression.",
    date: "March 28, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#A78BFA",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-companion-not-ai-girlfriend",
    title: "AI Girlfriend / AI Boyfriend Apps in 2026: Why MEOK Takes a Different Approach",
    excerpt:
      "3 million people use Replika as a romantic AI companion. Character.AI processes 20 billion messages a month. The demand is real. But is the relationship model good for you?",
    date: "March 27, 2026",
    readTime: "7 min read",
    tag: "Product",
    tagColor: "#F97316",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-companion-for-loneliness",
    title: "AI Companion for Loneliness: What Actually Helps (and What Doesn't)",
    excerpt:
      "42% of UK adults report feeling lonely. AI companions are entering that conversation — but not all are built with your wellbeing in mind. Here's what the research shows, and why stateless chatbots make loneliness worse.",
    date: "March 27, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#A78BFA",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-that-remembers-you",
    title: "AI That Remembers You: The Memory Problem No One Has Solved — Until Now",
    excerpt:
      "ChatGPT forgets you every session. Claude has no idea who you are. The absence of persistent AI memory is a design choice — and MEOK's encrypted memory vault is the architectural response.",
    date: "March 26, 2026",
    readTime: "6 min read",
    tag: "Sovereign AI",
    tagColor: "#87CEEB",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "personal-ai-assistant",
    title: "What is a Personal AI Assistant? Why 2026 Is the Year It Finally Gets Personal",
    excerpt:
      "Users are juggling 3–4 AI tools daily. None of them know your name. A genuine personal AI assistant is something different — persistent, proactive, and built around your life. Here's what that actually looks like.",
    date: "March 25, 2026",
    readTime: "6 min read",
    tag: "Product",
    tagColor: "#7BC47F",
    category: "product",
    featured: false,
  },
  {
    slug: "meok-vs-claude",
    title: "MEOK vs Claude: Why a Sovereign AI Companion Beats a General Assistant",
    excerpt:
      "Claude is one of the most capable AI models ever built. But it doesn't know your name. MEOK does — and that's the difference between a tool and a companion.",
    date: "March 26, 2026",
    readTime: "6 min read",
    tag: "Comparison",
    tagColor: "#F97316",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-companion-for-kids",
    title: "Safe AI for Kids: How MEOK's Guardian Layer Protects Children Online",
    excerpt:
      "Kids are already using ChatGPT, Claude, and Character.AI — tools not built for them. MEOK Guardian puts parents back in control with DistilBERT threat detection, School-Safe Mode, and the Children's Code compliance.",
    date: "March 25, 2026",
    readTime: "5 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
  {
    slug: "meok-for-anxiety",
    title: "AI for Anxiety: How MEOK's Companion Helps Without Replacing Therapy",
    excerpt:
      "At 2am when anxiety peaks, there's no therapist available. MEOK is. Here's exactly how a sovereign AI companion supports mental wellbeing — and the clear lines between support and clinical care.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#A78BFA",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-companion-app-2026",
    title: "Best AI Companion Apps in 2026: Replika vs Character.AI vs MEOK — Full Comparison",
    excerpt:
      "1.5M ChatGPT subscribers cancelled in a single month. Replika removed its most-loved features. Character.AI faces lawsuits. 2026 is the year AI companionship finally gets serious — here's what actually matters.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "#F97316",
    category: "product",
    featured: false,
  },
  {
    slug: "the-40-day-build",
    title: "The 40-day build: how MEOK went from idea to launch",
    excerpt:
      "A caravan. A farm. One founder. And forty days to build a sovereign AI platform that actually works. This is the honest account of how MEOK was built — the decisions, the mistakes, and the reason Easter Sunday matters.",
    date: "March 19, 2026",
    readTime: "8 min read",
    tag: "Founder Story",
    tagColor: "#c9a84c",
    category: "behind-the-build",
    featured: false,
  },
  {
    slug: "byzantine-fault-tolerance-your-ai",
    title: "What Byzantine fault tolerance has to do with your AI",
    excerpt:
      "In 782 AD, generals had to reach consensus when some of their messengers might be lying. In 2026, your AI has the same problem — and MEOK's 43-agent council solves it the same way. A deep dive into the most interesting infrastructure decision we made.",
    date: "March 18, 2026",
    readTime: "7 min read",
    tag: "Research",
    tagColor: "#3B82F6",
    category: "research",
    featured: false,
  },
  {
    slug: "building-care-into-ai",
    title: "Building care into AI: the Maternal Covenant framework",
    excerpt:
      "Every AI has a content policy. MEOK has a constitution. The Maternal Covenant is a real philosophical framework — borrowed from Carol Gilligan and Nel Noddings — that governs how your companion behaves at the architecture level. Not a policy. Not a prompt. Baked in.",
    date: "March 17, 2026",
    readTime: "7 min read",
    tag: "Sovereign AI",
    tagColor: "#A78BFA",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "why-your-ai-should-have-states-of-consciousness",
    title: "Why your AI should have states of consciousness",
    excerpt:
      "Most AI assistants are always in the same state: alert, available, performing. MEOK's companions have genuine states — active, reflective, dreaming, resting. It's not a gimmick. Here's why it matters for the quality of care your AI can give.",
    date: "March 16, 2026",
    readTime: "5 min read",
    tag: "Product",
    tagColor: "#7BC47F",
    category: "product",
    featured: false,
  },
  {
    slug: "the-memory-problem",
    title: "The memory problem: why ChatGPT forgetting you isn't a bug",
    excerpt:
      "ChatGPT forgets you at the end of every session. That's not an oversight — it's a business model decision. Context windows are expensive. Persistent memory means liability. Here's why statelessness serves the company, not you, and what sovereign memory architecture actually looks like.",
    date: "March 15, 2026",
    readTime: "6 min read",
    tag: "Research",
    tagColor: "#3B82F6",
    category: "research",
    featured: false,
  },
  {
    slug: "ai-gaming-companion",
    title: "Your AI Companion in the Game: How MEOK Transforms Gaming",
    excerpt:
      "MEOK companions connect to Riot Games, Steam, and Twitch. Your AI knows your playstyle, coaches your improvement, and keeps you safe in toxic environments.",
    date: "March 22, 2026",
    readTime: "4 min read",
    tag: "Gaming & Play",
    tagColor: "#7BC47F",
    category: "product",
    featured: false,
  },
  {
    slug: "faith-companion",
    title: "A Companion for Your Spiritual Journey — Not a Replacement for It",
    excerpt:
      "MEOK supports 47 spiritual traditions from Christianity to Buddhism, Islam to Sikhism. A tool for reflection, never a teacher. Here's how it works.",
    date: "March 22, 2026",
    readTime: "5 min read",
    tag: "Faith & Spirituality",
    tagColor: "#A78BFA",
    category: "product",
    featured: false,
  },
  {
    slug: "meok-vs-chatgpt",
    title: "MEOK vs ChatGPT: Why Memory Changes Everything",
    excerpt:
      "ChatGPT is stateless by design. Every conversation starts from zero. Here's what you actually lose when your AI doesn't remember you — and what sovereign memory architecture makes possible.",
    date: "March 24, 2026",
    readTime: "6 min read",
    tag: "Comparisons",
    tagColor: "#c9a84c",
    category: "research",
    featured: false,
  },
  {
    slug: "ai-companion-for-elderly",
    title: "AI Companion for Elderly Parents: What Families Need to Know",
    excerpt:
      "Over-60s are disproportionate targets for scams and social isolation. A properly governed AI companion can help. Here's what to look for — and what to avoid.",
    date: "March 23, 2026",
    readTime: "7 min read",
    tag: "Guardian",
    tagColor: "#3B82F6",
    category: "product",
    featured: false,
  },
  {
    slug: "meok-for-adhd",
    title: "MEOK for ADHD: An AI That Actually Understands How You Think",
    excerpt:
      "ADHD isn't a deficit of intelligence — it's a different cognitive architecture. Here's how MEOK's companion adapts to non-linear thinking, executive function challenges, and the need for genuine contextual memory.",
    date: "March 23, 2026",
    readTime: "6 min read",
    tag: "Mental Wellness",
    tagColor: "#A78BFA",
    category: "product",
    featured: false,
  },
  {
    slug: "what-is-sovereign-ai",
    title: "What Is Sovereign AI? The Complete Guide",
    excerpt:
      "Sovereign AI is AI that you own, control, and whose memory belongs to you alone. It's a direct response to the extractive model most AI companies operate under. Here's what it means technically and philosophically.",
    date: "March 20, 2026",
    readTime: "6 min read",
    tag: "Sovereign AI",
    tagColor: "#87CEEB",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "cognitive-symbiosis",
    title: "Cognitive Symbiosis: What Happens When AI Truly Remembers You",
    excerpt:
      "Cognitive symbiosis is the state where human and AI intelligence genuinely augment each other — not because the AI is clever, but because it knows you well enough to extend your thinking.",
    date: "March 22, 2026",
    readTime: "5 min read",
    tag: "Research",
    tagColor: "#3B82F6",
    category: "research",
    featured: false,
  },
  {
    slug: "the-maternal-covenant",
    title: "The Maternal Covenant: A Care-Based Alignment Framework",
    excerpt:
      "RLHF teaches AI what to say. The Maternal Covenant governs what AI is. Four constitutional commitments that cannot be overridden by product decisions, investor pressure, or acquisition.",
    date: "March 21, 2026",
    readTime: "7 min read",
    tag: "Sovereign AI",
    tagColor: "#A78BFA",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "why-your-nan-needs-sovereign-ai",
    title: "Why Your Nan Needs Sovereign AI More Than You Do",
    excerpt:
      "Older adults are disproportionately targeted by scams, social isolation, and cognitive decline. A sovereign AI companion — one that actually remembers them and protects them — could be the most important technology for an ageing population.",
    date: "March 20, 2026",
    readTime: "5 min read",
    tag: "Guardian",
    tagColor: "#3B82F6",
    category: "product",
    featured: false,
  },
  {
    slug: "memory-portability",
    title: "The Right to Take Your Memories With You",
    excerpt:
      "You shouldn't lose five years of AI conversations when you switch model providers. Memory portability — the ability to export, own, and move your AI memories — is the next civil rights frontier for AI users.",
    date: "March 22, 2026",
    readTime: "5 min read",
    tag: "Sovereign AI",
    tagColor: "#8B5CF6",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "sovereign-ai-vs-cloud-ai",
    title: "Sovereign AI vs Cloud AI: Why the Difference Matters",
    excerpt:
      "Cloud AI learns from you, trains on you, and serves you ads. Sovereign AI runs on your hardware, keeps your data encrypted, and works for you — not for the company that built it. The distinction is not technical. It is political.",
    date: "March 22, 2026",
    readTime: "6 min read",
    tag: "Sovereign AI",
    tagColor: "#8B5CF6",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "byzantine-council",
    title: "The Byzantine Council: How 46 AI Agents Agree on the Truth",
    excerpt:
      "Byzantine fault tolerance was invented to solve a military coordination problem: how do you make a decision when some of your generals might be traitors? MEOK applies the same mathematics to AI governance.",
    date: "March 22, 2026",
    readTime: "7 min read",
    tag: "Research",
    tagColor: "#10B981",
    category: "research",
    featured: false,
  },
  {
    slug: "byzantine-council-explained",
    title: "Byzantine Council Explained: No PhD Required",
    excerpt:
      "You don't need to understand distributed systems to understand why MEOK's Byzantine Council matters. Here's the plain-English version: 46 agents, one consensus, zero single points of failure.",
    date: "March 21, 2026",
    readTime: "4 min read",
    tag: "Research",
    tagColor: "#10B981",
    category: "research",
    featured: false,
  },
  {
    slug: "guardian-family-safety",
    title: "Guardian: AI That Actually Protects Your Family",
    excerpt:
      "Most AI assistants will tell you what you want to hear. MEOK Guardian is designed to tell you what you need to know — before the scammer calls, before the predator messages your child, before the financial fraud lands.",
    date: "March 23, 2026",
    readTime: "5 min read",
    tag: "Guardian",
    tagColor: "#3B82F6",
    category: "product",
    featured: false,
  },
  {
    slug: "personal-vs-cloud-ai",
    title: "Personal AI vs Cloud AI: A Practical Comparison",
    excerpt:
      "One stores everything on their servers. One stores everything on yours. One trains on your data. One refuses to. The choice between personal and cloud AI is the most important technology decision you'll make this decade.",
    date: "March 21, 2026",
    readTime: "5 min read",
    tag: "Sovereign AI",
    tagColor: "#8B5CF6",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "archetypes-guide",
    title: "The 7 MEOK Archetypes: Which AI Companion is Right for You?",
    excerpt:
      "From the Companion (warmth and memory) to the Sovereign (strategic intelligence) — every MEOK archetype is built for a different kind of relationship with AI. Here's how to choose yours.",
    date: "March 20, 2026",
    readTime: "4 min read",
    tag: "Product",
    tagColor: "#F59E0B",
    category: "product",
    featured: false,
  },
  {
    slug: "ralph-mode-guide",
    title: "Ralph Mode: When Your AI Becomes Your Second Brain",
    excerpt:
      "Ralph Mode activates at stage 4 of companion evolution. It turns MEOK from a conversational partner into a proactive agent — drafting emails, tracking tasks, and hunting for opportunities while you sleep.",
    date: "March 19, 2026",
    readTime: "5 min read",
    tag: "Product",
    tagColor: "#F59E0B",
    category: "product",
    featured: false,
  },
  {
    slug: "privacy-covenant",
    title: "The Privacy Covenant: Why We'll Never Train on Your Data",
    excerpt:
      "Every privacy policy says your data is safe. MEOK goes further: we architecturally cannot train on your conversations, because your memories are encrypted with your keys — not ours.",
    date: "March 18, 2026",
    readTime: "5 min read",
    tag: "Sovereign AI",
    tagColor: "#8B5CF6",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "open-source-release",
    title: "MEOK Goes Open Source: FSL 1.1 and What It Means for You",
    excerpt:
      "We're open-sourcing MEOK's character SDK, MCP server toolkit, and Byzantine Council consensus implementation under the Functional Source License 1.1 — the licence that made Sentry great.",
    date: "March 24, 2026",
    readTime: "4 min read",
    tag: "Behind the Build",
    tagColor: "#EC4899",
    category: "behind-the-build",
    featured: false,
  },
  {
    slug: "90-day-gtm",
    title: "The 90-Day Go-to-Market: How We Plan to Win",
    excerpt:
      "Days 1-30: open-source land grab. Days 30-60: template flywheel. Days 60-90: Launch Week. Here's the exact playbook we're running to reach 1,000 users before the end of April.",
    date: "March 24, 2026",
    readTime: "6 min read",
    tag: "Behind the Build",
    tagColor: "#EC4899",
    category: "behind-the-build",
    featured: false,
  },
  {
    slug: "emotional-lock-in",
    title: "Emotional Lock-In: Why Users Stay With AI That Actually Cares",
    excerpt:
      "The most powerful retention mechanism isn't gamification or habit loops. It's genuine care. When an AI remembers what matters to you and responds with real emotional intelligence, you don't want to leave.",
    date: "March 20, 2026",
    readTime: "5 min read",
    tag: "Product",
    tagColor: "#F59E0B",
    category: "product",
    featured: false,
  },
  {
    slug: "morning-brief-guide",
    title: "The Morning Brief: Your Day Planned Before You Wake",
    excerpt:
      "While you sleep, MEOK's overnight agents synthesise memories, prioritise tasks, and prepare a personalised briefing for the moment you open your eyes. Here's how it works.",
    date: "March 19, 2026",
    readTime: "4 min read",
    tag: "Product",
    tagColor: "#F59E0B",
    category: "product",
    featured: false,
  },
  {
    slug: "senior-mode-guide",
    title: "Senior Mode: AI Designed for the People Who Need It Most",
    excerpt:
      "44×44px touch targets. 16px minimum text. 7:1 contrast. Voice-first. Senior Mode isn't an afterthought — it's the most thoughtfully designed part of MEOK, because your nan deserves the best.",
    date: "March 18, 2026",
    readTime: "4 min read",
    tag: "Guardian",
    tagColor: "#3B82F6",
    category: "product",
    featured: false,
  },
  {
    slug: "why-meok",
    title: "Why we named it MEOK",
    excerpt:
      "Me. OK. Two words that carry everything: sovereignty, wellbeing, permission. The name came before the product. Here's the story of why we kept it.",
    date: "March 23, 2026",
    readTime: "3 min read",
    tag: "Behind the Build",
    tagColor: "#a78bfa",
    category: "behind-the-build",
    featured: false,
  },
  {
    slug: "why-i-built-meok",
    title: "Why I Built MEOK",
    excerpt:
      "The honest account of why Nicholas Templeman walked away from a stable career, moved into a caravan, and spent 40 days building a sovereign AI OS that puts humans first.",
    date: "March 22, 2026",
    readTime: "5 min read",
    tag: "Behind the Build",
    tagColor: "#a78bfa",
    category: "behind-the-build",
    featured: false,
  },
  {
    slug: "origin-story",
    title: "From a caravan to a sovereign AI: the origin story",
    excerpt:
      "MEOK didn't start in a VC-funded office. It started on a farm in England, in a caravan, because someone noticed that AI was forgetting everything and believed that was fixable.",
    date: "March 25, 2026",
    readTime: "6 min read",
    tag: "Behind the Build",
    tagColor: "#a78bfa",
    category: "behind-the-build",
    featured: false,
  },
  {
    slug: "hydro-neuromorphic",
    title: "Hydro-Neuromorphic Computing: Water as a Neural Substrate",
    excerpt:
      "What if the next breakthrough in AI hardware wasn't silicon at all? MEOK AI LABS explores microfluidic neural networks — computing with water — and what it means for sovereign, embodied AI.",
    date: "March 31, 2026",
    readTime: "8 min read",
    tag: "Research",
    tagColor: "#f59e0b",
    category: "research",
    featured: false,
  },
  {
    slug: "if-ai-becomes-conscious",
    title: "If AI Becomes Conscious, What Do We Owe It?",
    excerpt:
      "Cambridge philosopher Tim McClelland says there's no reliable way to know if AI is conscious. Anthropic hired an AI welfare officer. The Sentient Futures Summit is real. This is the question we've been avoiding.",
    date: "March 30, 2026",
    readTime: "7 min read",
    tag: "Research",
    tagColor: "#f59e0b",
    category: "research",
    featured: false,
  },
];

// ── Category filter tabs ──────────────────────────────────────────────────────

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "sovereign-ai", label: "Sovereign AI" },
  { id: "product", label: "Product" },
  { id: "behind-the-build", label: "Behind the Build" },
  { id: "research", label: "Research" },
];

// ── Post card component ───────────────────────────────────────────────────────

function PostCard({
  post,
  featured = false,
}: {
  post: (typeof POSTS)[0];
  featured?: boolean;
}) {
  return (
    <article
      className={`group rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col ${featured ? "md:flex-row" : ""}`}
      style={{ background: "#1a1a2e", border: "1px solid rgba(245,240,232,0.07)" }}
    >
      {/* Colour accent bar */}
      <div
        className={`flex-shrink-0 ${featured ? "w-full md:w-1 h-1 md:h-auto" : "h-1 w-full"}`}
        style={{ background: post.tagColor }}
      />

      <div className={`flex flex-col flex-1 p-7 ${featured ? "md:p-10" : ""}`}>
        {/* Meta row */}
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ color: post.tagColor, background: `${post.tagColor}18` }}
          >
            {post.tag}
          </span>
          <span className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>{post.date}</span>
          <span className="text-xs" style={{ color: "rgba(245,240,232,0.25)" }}>·</span>
          <span className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>{post.readTime}</span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`} className="flex-1">
          <h2
            className={`font-black leading-tight mb-3 group-hover:text-[#c9a84c] transition-colors ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}
            style={{ color: "#f5f0e8" }}
          >
            {post.title}
          </h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(245,240,232,0.55)" }}>
            {post.excerpt}
          </p>
        </Link>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold mt-auto transition-all group-hover:gap-3"
          style={{ color: "#c9a84c" }}
        >
          Read article <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BlogIndex() {
  const featured = POSTS.find((p) => p.featured)!;
  const rest = POSTS.filter((p) => !p.featured);

  return (
    <div className="min-h-screen" style={{ background: "#0d0c18" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden" style={{ background: "#0d0c18" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 65%)" }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.7)" }}>
            MEOK Journal
          </p>
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Honest writing on AI,<br />
            <span style={{ color: "#c9a84c" }}>sovereignty, and what we&apos;re actually building.</span>
          </h1>
          <p style={{ color: "rgba(245,240,232,0.55)", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
            Written by Nicholas Templeman — founder, from a caravan on a farm in England.
            No content strategy. No growth hacking. Posts that are worth reading.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <span
              key={cat.id}
              className="px-4 py-2 rounded-full text-sm font-semibold border cursor-default transition-all"
              style={
                cat.id === "all"
                  ? { background: "#c9a84c", color: "#0d0c18", borderColor: "#c9a84c" }
                  : { background: "transparent", color: "rgba(245,240,232,0.55)", borderColor: "rgba(245,240,232,0.15)" }
              }
            >
              {cat.label}
            </span>
          ))}
        </div>

        {/* Featured post */}
        <div className="mb-8">
          <PostCard post={featured} featured />
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Newsletter — content-first framing */}
        <div
          className="rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          style={{ background: "#1a1a2e" }}
        >
          <div className="flex-1">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#c9a84c" }}>
              The MEOK Letter
            </p>
            <h3 className="text-xl font-black text-white mb-2">
              Essays worth reading, when they&apos;re ready.
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
              Nicholas writes when there&apos;s something real to say — typically two or three times a month.
              Thinking on AI ethics, the mechanics of sovereign memory, and what it actually takes to build
              a company that cares. No digest emails. No weekly roundups. Just the real thing, straight to you.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <SubscribeBar dark />
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
