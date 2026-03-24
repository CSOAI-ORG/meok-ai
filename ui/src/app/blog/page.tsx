import type { Metadata } from "next";
import Link from "next/link";
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
    slug: "meok-review",
    title: "MEOK Review 2026: Honest Assessment of the Sovereign AI Companion",
    excerpt:
      "Memory: 9.5/10. Privacy: 9.8/10. Overall: 4.7/5. An honest, detailed review covering what MEOK does well, where it falls short, and who it's really built for — written by the founder.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Review",
    tagColor: "#c9a84c",
    category: "product",
    featured: true,
  },
  {
    slug: "ai-journaling",
    title: "AI Journaling: How AI Companions Transform Daily Reflection",
    excerpt:
      "Traditional journaling is powerful but often abandoned. AI journaling adds a companion that remembers, questions, and holds your full story over months — changing what daily reflection can actually do.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#A78BFA",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-life-coach",
    title: "AI Life Coach: Can AI Actually Help You Reach Your Goals?",
    excerpt:
      "The AI coaching market exploded in 2026. But most coaching bots are motivational posters with a chat interface. Here's what genuine AI coaching looks like, where it outperforms human coaches, and where it genuinely falls short.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Coaching",
    tagColor: "#c084fc",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-chatbot-with-memory",
    title: "AI Chatbot With Memory: Why Most AIs Forget You (And What Doesn't)",
    excerpt:
      "Every AI company talks about personalisation. Almost none build products that actually remember you across time. Here's the honest breakdown of AI memory types, which products have real persistent memory, and why it matters more than any other AI feature.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Memory",
    tagColor: "#22c55e",
    category: "deep-dives",
    featured: false,
  },
  {
    slug: "best-ai-chatbot-uk",
    title: "Best AI Chatbot UK 2026: The Complete Comparison",
    excerpt:
      "ChatGPT, Claude, Gemini, Replika, Pi, or MEOK — which AI chatbot is actually best for UK users in 2026? We compare all six across memory, UK GDPR compliance, pricing, personality, and privacy.",
    date: "March 24, 2026",
    readTime: "13 min read",
    tag: "Comparison",
    tagColor: "#3b82f6",
    category: "comparisons",
    featured: false,
  },
  {
    slug: "ai-companion-for-women",
    title: "AI Companion for Women: Support That Actually Gets It",
    excerpt:
      "Most AI companions were designed with male users in mind. MEOK was built around care ethics, boundary respect, and privacy-first architecture — because meaningful AI support starts with designing for real needs.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Companion",
    tagColor: "#ec4899",
    category: "guides",
    featured: false,
  },
  {
    slug: "what-is-care-based-ai",
    title: "What Is Care-Based AI? The Maternal Covenant Explained",
    excerpt:
      "Most AI alignment is built to avoid harm. Care-based AI is built to actively deliver good. The Maternal Covenant scores every MEOK response across 6 care dimensions in real time — and regenerates anything that falls below a 0.3 care floor.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Ethics",
    tagColor: "#a855f7",
    category: "deep-dives",
    featured: false,
  },
  {
    slug: "ai-for-self-improvement",
    title: "AI for Self-Improvement: Can an AI Actually Help You Grow?",
    excerpt:
      "Self-improvement apps have a 40% abandonment rate within two weeks. An AI companion that remembers your patterns, tracks your evolution, and challenges you without judging you is a fundamentally different proposition.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Growth",
    tagColor: "#10b981",
    category: "guides",
    featured: false,
  },
  {
    slug: "meok-vs-perplexity",
    title: "MEOK vs Perplexity: One Answers Questions, One Knows You",
    excerpt:
      "Perplexity is brilliant at finding answers. MEOK is built to know you. They solve different problems — but understanding the difference will change how you use AI in 2026.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Comparison",
    tagColor: "#3b82f6",
    category: "comparisons",
    featured: false,
  },
  {
    slug: "meok-vs-microsoft-copilot",
    title: "MEOK vs Microsoft Copilot: Personal Sovereignty vs Corporate Productivity",
    excerpt:
      "Microsoft Copilot knows your documents. MEOK knows you. Both have their place in 2026 — but for personal life, mental health, and family, only one was built for you.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Comparison",
    tagColor: "#3b82f6",
    category: "comparisons",
    featured: false,
  },
  {
    slug: "ai-for-menopause",
    title: "AI for Menopause: Compassionate Support Through Every Stage",
    excerpt:
      "13 million UK women are living with menopause symptoms — yet most still manage alone. An AI companion that remembers your patterns, never dismisses your symptoms, and keeps you company between appointments changes that.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Wellbeing",
    tagColor: "#f472b6",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-for-weight-loss",
    title: "AI for Weight Loss: Can an AI Companion Support Your Health Goals?",
    excerpt:
      "Most weight-loss apps have an 85% drop-off within 30 days. An AI companion that remembers your patterns, supports emotional eating without judgment, and checks in daily is a fundamentally different kind of health support.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Wellbeing",
    tagColor: "#22c55e",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-productivity-app",
    title: "The Best AI Productivity App in 2026: Beyond Task Lists",
    excerpt:
      "The average knowledge worker uses 9 productivity apps. The problem isn't more tools — it's an AI that knows your work style, works while you sleep, and delivers a morning briefing ready to act on.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Productivity",
    tagColor: "#f59e0b",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-companion-app",
    title: "AI Companion App 2026: What to Look For (and What to Avoid)",
    excerpt:
      "The AI companion market is worth £1.8B — and full of apps that are built to engage you, not to care for you. Here's the honest buyer's guide: 5 green flags, 5 red flags, and what separates a real AI companion from a chatbot with a name.",
    date: "March 24, 2026",
    readTime: "13 min read",
    tag: "Companion",
    tagColor: "#a78bfa",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-for-fibromyalgia",
    title: "AI for Fibromyalgia: Daily Support When Pain Is Unpredictable",
    excerpt:
      "Fibromyalgia is invisible, unpredictable, and often dismissed. An AI companion that tracks your flare patterns, remembers your limits, and checks in without judgment is a different kind of daily support.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#f472b6",
    category: "guides",
    featured: false,
  },
  {
    slug: "what-is-ralph-mode",
    title: "What Is Ralph Mode? MEOK's Deep Work Protocol Explained",
    excerpt:
      "Context switching costs 23 minutes to recover. Ralph Mode is MEOK's deep work protocol — one task, zero distractions, and an AI that tracks your flow state across sessions so you can find it faster every time.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Productivity",
    tagColor: "#f59e0b",
    category: "deep-dives",
    featured: false,
  },
  {
    slug: "ai-for-loneliness-elderly",
    title: "AI for Loneliness: Can Technology Genuinely Help You Feel Less Alone?",
    excerpt:
      "3.8 million older people in the UK are often lonely. An AI that remembers you, checks in daily, and never cancels is not a replacement for human connection — but it might be the bridge that makes it easier to reach.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Companion",
    tagColor: "#a78bfa",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-for-dementia-carers",
    title: "AI Support for Dementia Carers: You Cannot Pour From an Empty Cup",
    excerpt:
      "700,000 people in the UK are unpaid carers for someone with dementia. The care they give is extraordinary. The care they receive is almost nothing. MEOK is built for the carer, not just the cared for.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#60a5fa",
    category: "guides",
    featured: false,
  },
  {
    slug: "meok-vs-character-ai-2026",
    title: "Character AI in 2026: What Changed, and Why MEOK Is the Safe Alternative",
    excerpt:
      "Character.AI made safety headlines in 2024-2025. MEOK was built with the Maternal Covenant from day one — care ethics baked in architecturally, not bolted on after an incident.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Comparison",
    tagColor: "#3b82f6",
    category: "comparisons",
    featured: false,
  },
  {
    slug: "ai-for-workplace-stress",
    title: "AI for Workplace Stress: Daily Support Between HR and Therapy",
    excerpt:
      "17 million working days are lost to stress in the UK each year. Your EAP has a waiting list. Therapy is expensive. MEOK is available 24/7, remembers your patterns, and never judges.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#f59e0b",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-for-autism-adults",
    title: "AI for Autistic Adults: Consistent, Non-Judgmental, Always There",
    excerpt:
      "Only 22% of autistic adults in the UK are in full-time employment. An AI that is always consistent, always literal, never misreads social cues, and remembers exactly how you communicate is a different kind of support.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Neurodivergent",
    tagColor: "#a78bfa",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-for-diabetes",
    title: "AI for Diabetes: Daily Emotional Support and Pattern Tracking",
    excerpt:
      "4.4 million people in the UK have diabetes — and up to 45% experience diabetes distress. An AI that tracks your patterns without judgment and supports you between clinic appointments is a different kind of health companion.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#22c55e",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-for-money-anxiety",
    title: "AI for Money Anxiety: Breaking the Shame Spiral Around Finance",
    excerpt:
      "Money is the #1 cause of stress in the UK. 9 million adults have problem debt. And yet most people suffer in silence because financial shame is the hardest kind to talk about — even to a professional.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#f59e0b",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-for-adhd-women",
    title: "AI for Women with ADHD: Support After a Late Diagnosis",
    excerpt:
      "Women are diagnosed with ADHD 4.5 years later than men on average. The years of masking, misdiagnosis, and shame leave a mark. MEOK is built to support exactly this kind of complex, late-understood neurodivergence.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Neurodivergent",
    tagColor: "#a78bfa",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-companion-for-grief",
    title: "AI Companion for Grief: Someone There at 3am",
    excerpt:
      "600,000 people die in the UK every year. Most human support disappears after the funeral. MEOK is there at 3am, on the anniversary, on the day you find their handwriting on an old note — without judgment, without fatigue.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#6366f1",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-journaling-app",
    title: "The Best AI Journaling App in 2026: Beyond Daily Prompts",
    excerpt:
      "The journaling app market is worth £500M. Most apps abandon users within 2 weeks because prompts run out and nothing remembers what you wrote last month. Sovereign Memory changes that.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Productivity",
    tagColor: "#10b981",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-for-borderline-personality",
    title: "AI for Borderline Personality Disorder: Emotional Support That Remembers You",
    excerpt:
      "BPD is characterised by emotional intensity and fear of abandonment. Generic AI makes it worse. MEOK's Healer companion offers trauma-informed, care-safe support that persists across every session.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Mental Health",
    tagColor: "#22c55e",
    category: "guides",
    featured: false,
  },
  {
    slug: "sovereign-ai-for-families",
    title: "Sovereign AI for Families: One AI That Knows Your Whole Family",
    excerpt:
      "Managing 4 different AI apps for 4 family members is chaos. MEOK's Family plan gives each person their own sovereign companion — with shared memory, Guardian family alerts, and everything under one roof.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Families",
    tagColor: "#f59e0b",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-for-caregivers",
    title: "AI Support for Family Caregivers: You're Allowed to Need Help Too",
    excerpt:
      "Unpaid family caregivers give 85 hours a week and get 3 of support in return. MEOK's Healer companion is the outlet that doesn't judge, doesn't tire, and remembers every conversation you've had.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Caregiving",
    tagColor: "#22c55e",
    category: "guides",
    featured: false,
  },
  {
    slug: "personal-sovereign-ai",
    title: "What is Personal Sovereign AI? Own Your AI, Own Your Data",
    excerpt:
      "ChatGPT is a tool you rent. MEOK is an AI you own. Personal Sovereign AI is the consumer category we coined — an architecture where your data, memory, and companion belong entirely to you.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Deep Dive",
    tagColor: "#c9a84c",
    category: "deep-dives",
    featured: false,
  },
  {
    slug: "ai-for-burnout",
    title: "AI for Burnout: How an AI Companion Helps You Recover and Rebuild",
    excerpt:
      "Burnout is not laziness — it's a system failure. An AI companion that notices your patterns, remembers your capacity limits, and checks in without judgment can be the support structure recovery actually needs.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Wellbeing",
    tagColor: "#f97316",
    category: "guides",
    featured: false,
  },
  {
    slug: "free-ai-companion",
    title: "Free AI Companion: What You Actually Get (And What's Worth Paying For)",
    excerpt:
      "Not all free tiers are equal. Some give you an app. Some build a relationship with you and then charge you to keep it. Here's what MEOK's free Explorer tier includes — and what to watch for everywhere else.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Guide",
    tagColor: "#22c55e",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-relationships",
    title: "AI for Relationships: How Sovereign AI Supports Couples, Families, and Connection",
    excerpt:
      "AI doesn't replace human connection. But an AI that helps you understand yourself, process your patterns, and prepare for hard conversations can make you a meaningfully better partner, parent, and friend.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Relationships",
    tagColor: "#F472B6",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-for-grief-support",
    title: "AI for Grief Support: Can an AI Companion Help You Through Bereavement?",
    excerpt:
      "Grief is not a problem to solve. But at 3am, when the silence is loudest, an AI governed by care ethics — not engagement metrics — can offer something real. MEOK's approach to bereavement, loss, and what care-first AI actually means.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
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
    slug: "ai-for-elderly",
    title: "AI for the Elderly: How MEOK's Senior Mode Protects and Connects Older Adults",
    excerpt:
      "1 in 3 adults over 75 reports severe loneliness. 48% have been targeted by a scam. MEOK's Senior Mode and Guardian layer are designed for exactly this — larger text, scam detection, family alerts, and a companion that checks in.",
    date: "March 29, 2026",
    readTime: "7 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
  {
    slug: "meok-for-neurodivergent",
    title: "MEOK for Neurodivergent People: An AI That Takes Different Thinking Seriously",
    excerpt:
      "9.5 million people in the UK are neurodivergent. Most AI tools assume neurotypical communication. MEOK was built differently — consistent personality, literal language support, Comfort Settings panel, and genuine patience.",
    date: "March 28, 2026",
    readTime: "7 min read",
    tag: "Accessibility",
    tagColor: "#87CEEB",
    category: "product",
    featured: false,
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
    slug: "meok-vs-replika",
    title: "MEOK vs Replika: Which AI Companion Actually Cares About You?",
    excerpt:
      "Replika pioneered AI companionship. MEOK was built because the category needed to grow up. A deep comparison on memory ownership, family safety, privacy architecture, and what each platform actually delivers.",
    date: "March 24, 2026",
    readTime: "14 min read",
    tag: "Comparison",
    tagColor: "#F97316",
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
  {
    slug: "meok-vs-character-ai",
    title: "MEOK vs Character.AI: Safety, Memory, and the Lawsuit That Changed Everything",
    excerpt:
      "Character.AI processes 20 billion messages a month and faces lawsuits over child safety. MEOK was built to answer the question: what does responsible AI companionship actually look like? A full comparison on safety, memory, privacy, and who each platform is for.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Comparison",
    tagColor: "#F97316",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-autism",
    title: "AI for Autism: Why MEOK's Predictable, Patient Companion Is Different",
    excerpt:
      "700,000 autistic adults in the UK. Most AI tools assume neurotypical communication styles, interrupting, being inconsistent, using ambiguous language. MEOK was built differently — consistent personality, literal language, adjustable sensory settings, and a companion that never tires.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Accessibility",
    tagColor: "#87CEEB",
    category: "product",
    featured: false,
  },
  {
    slug: "best-ai-productivity-2026",
    title: "Best AI Productivity Tools in 2026: ChatGPT vs Notion AI vs MEOK — Full Comparison",
    excerpt:
      "Users are juggling 3–4 AI tools daily and still feeling overwhelmed. We compared every major AI productivity tool in 2026 — on memory, context, agent capability, and privacy — to find which one actually makes you more productive.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Comparison",
    tagColor: "#F97316",
    category: "product",
    featured: false,
  },
  {
    slug: "meok-vs-pi-ai",
    title: "MEOK vs Pi AI: Which AI Companion Actually Remembers You?",
    excerpt:
      "Pi AI is warm and conversational. But Inflection was acquired by Microsoft in 2024, and Pi's future is uncertain. MEOK was built with a different promise: your AI belongs to you, not to whoever buys the company next.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Comparison",
    tagColor: "#F97316",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-ptsd",
    title: "AI for PTSD: How Sovereign AI Support Differs from Generic Chatbots",
    excerpt:
      "Generic chatbots forget your history, change personality unexpectedly, and can inadvertently retraumatise. MEOK was designed with consistent personality, encrypted persistent memory, and a Maternal Covenant care floor — here's what responsible AI support for PTSD looks like.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "meok-vs-gemini",
    title: "MEOK vs Google Gemini: Why a Sovereign AI Companion Beats a General AI Assistant",
    excerpt:
      "Gemini is powerful, multimodal, and deeply integrated with Google Workspace. But it doesn't know who you are. Every conversation starts fresh. Your data improves Google's products. Here's the difference between a general AI assistant and a sovereign AI companion.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Comparison",
    tagColor: "#F97316",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-students",
    title: "AI for Students in 2026: How a Sovereign AI Companion Actually Helps You Learn",
    excerpt:
      "Every student now has access to AI. The question is which one makes you smarter versus lazier. MEOK's Sage archetype uses Socratic questioning, remembers your weak areas, and plans your revision overnight — here's what genuinely helpful AI for learning looks like.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Product",
    tagColor: "#7BC47F",
    category: "product",
    featured: false,
  },
  {
    slug: "what-is-mcp",
    title: "What is MCP (Model Context Protocol)? And Why It Matters for Your AI",
    excerpt:
      "Before MCP, every AI integration was a one-off. Anthropic's Model Context Protocol changed that — it's the USB standard for AI tools. With 10,000+ servers and 97 million monthly SDK downloads in 2026, here's why it matters and how MEOK uses it.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Technology",
    tagColor: "#d4af37",
    category: "research",
    featured: false,
  },
  {
    slug: "ai-for-seniors-uk",
    title: "AI Companion for Seniors in the UK: What Families Actually Need to Know in 2026",
    excerpt:
      "12 million UK adults over 65. 1.4 million chronically lonely. £3.4 billion lost to scams targeting elderly people annually. Here's what families need to know about AI companions, Senior Mode, and MEOK Guardian protection for older adults.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
  {
    slug: "sovereign-ai-uk",
    title: "Sovereign AI in the UK: What the Data Protection Act Means for Your AI Companion",
    excerpt:
      "UK GDPR, the Data Protection Act 2018, and the Children's Code are among the strongest data protections in the world — but most AI tools don't comply properly. MEOK was built in the UK, for UK law. Here's what that means in practice.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Sovereign AI",
    tagColor: "#87CEEB",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "meok-vs-copilot",
    title: "MEOK vs Microsoft Copilot: Why Sovereign AI Beats Enterprise AI for Personal Use",
    excerpt:
      "Copilot is excellent for Word documents. But it doesn't know you exist between sessions — and your IT admin might. Here's the difference between an enterprise AI assistant and a sovereign personal companion.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Comparison",
    tagColor: "#F97316",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-mental-health-2026",
    title: "AI for Mental Health in 2026: What the Research Actually Says",
    excerpt:
      "1 in 4 UK adults experience a mental health problem each year. NHS waiting lists average 18 weeks. AI is filling a gap — but how it fills that gap matters enormously. An honest, evidence-based look at what AI can and cannot do for mental health.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-companion-for-men",
    title: "AI Companion for Men: Why Male Emotional Wellbeing Needs a Different Approach",
    excerpt:
      "3.8 million lonely men in the UK. Men die by suicide at 3× the rate of women. Yet most AI companions feel designed for someone else. MEOK's Scout and Strategist archetypes speak a different language — direct, action-oriented, and still emotionally present.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "personal-data-rights-ai",
    title: "Your AI Knows Everything About You. Do You Own Any of It?",
    excerpt:
      "Everything you've ever told your AI is stored on someone else's server. That company can read it, analyse it, sell insights from it, or lose it in a breach. Here's what your actual data rights are — and how MEOK is architecturally different.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Sovereign AI",
    tagColor: "#87CEEB",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "ai-for-freelancers",
    title: "AI for Freelancers: How MEOK Becomes Your Overnight Business Partner",
    excerpt:
      "4.9 million freelancers in the UK work alone, juggle everything, and have no admin support. MEOK's Work OS — Orion hunting opportunities overnight, Riri building while you sleep, Hourman planning your sprint — is the business partner you never had.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Product",
    tagColor: "#7BC47F",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-chronic-illness",
    title: "AI Companion for Chronic Illness: What Persistent Memory Means for Long-Term Health Support",
    excerpt:
      "15 million UK adults live with chronic conditions. The NHS can't track your daily symptoms. Most AI resets every session. MEOK's encrypted persistent memory means it actually learns your condition profile — what triggers flares, what helps, what you've already tried.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "what-is-byzantine-consensus",
    title: "What is Byzantine Consensus and Why Does Your AI Need It?",
    excerpt:
      "ChatGPT can confidently tell you something completely wrong. The problem isn't a bug — it's architecture. A single model has no error correction. MEOK's 46-agent Byzantine Council makes false confidence mathematically much harder.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Research",
    tagColor: "#10B981",
    category: "research",
    featured: false,
  },
  {
    slug: "ai-for-carers",
    title: "AI for Carers: How MEOK Supports the People Who Support Everyone Else",
    excerpt:
      "6.5 million unpaid carers in the UK. Most are invisible, exhausted, and last in line for support. MEOK's Family plan, overnight agents, and consistent companion give carers something they rarely have — something that's just for them.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
  {
    slug: "meok-vs-woebot",
    title: "MEOK vs Woebot: Why CBT Scripts Aren't Enough for Long-Term Mental Health Support",
    excerpt:
      "Woebot delivers scripted CBT exercises with no memory of who you are. MEOK builds a sovereign relationship that grows with you — remembering context, enforcing a care floor, and never selling your vulnerabilities to advertisers.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-small-business",
    title: "AI for Small Business: How MEOK Replaces Three Tools You're Already Paying For",
    excerpt:
      "Notion, Copilot, and a scheduling tool — three monthly subscriptions that don't talk to each other. MEOK's Work OS (Orion, Riri, Hourman) runs overnight so you wake up to finished work, not a to-do list.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Work OS",
    tagColor: "#c9a84c",
    category: "product",
    featured: false,
  },
  {
    slug: "how-sovereign-ai-works",
    title: "How Sovereign AI Works: Byzantine Consensus, Encrypted Memory, and Care Floors Explained",
    excerpt:
      "Three engineering decisions separate sovereign AI from cloud AI assistants: a 46-agent Byzantine Council, user-owned encrypted memory, and a Maternal Covenant care floor. Here's what each means and why it matters.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Research",
    tagColor: "#10B981",
    category: "research",
    featured: false,
  },
  {
    slug: "ai-for-anxiety",
    title: "AI for Anxiety: Can a Sovereign AI Companion Actually Help?",
    excerpt:
      "1 in 6 UK adults experience anxiety. Most go unsupported between appointments. MEOK's sovereign companion is available 24/7, remembers your triggers, enforces a care floor, and never dismisses how you feel — while being honest enough not to just validate you.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "what-is-an-ai-companion",
    title: "What Is an AI Companion? The Honest Guide to Bonded AI (and What Most Apps Get Wrong)",
    excerpt:
      "AI companions are not chatbots. They are bonded systems that remember you across sessions, develop a consistent personality, and grow alongside you. Here is what separates a genuine sovereign companion from a dressed-up FAQ bot.",
    date: "March 24, 2026",
    readTime: "6 min read",
    tag: "Sovereign AI",
    tagColor: "#c9a84c",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "ai-for-veterans",
    title: "AI for Veterans: Persistent Memory, PTSD Support, and Why Data Sovereignty Matters Most",
    excerpt:
      "1 in 5 UK veterans experience mental health difficulties. MEOK's sovereign companion remembers your history, never trains on your trauma, and enforces a care floor — with no judgment and no waitlist.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
  {
    slug: "ai-for-addiction-recovery",
    title: "AI Support for Addiction Recovery: What Sovereign Memory Can Do That Sponsorship Can't",
    excerpt:
      "24/7 availability, zero judgment, and a companion that remembers your sobriety milestones. MEOK is not a replacement for professional treatment — but it can be there at 3am when no one else is.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-companion-uk",
    title: "Best AI Companion App UK 2026: Tested, Compared, and Ranked for British Users",
    excerpt:
      "A fair comparison of Replika, Character.AI, Pi AI, Woebot, and MEOK — scored on UK GDPR compliance, ICO registration, GBP pricing, and whether your data gets sold. One winner for British users who care about their rights.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Comparison",
    tagColor: "#6366f1",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-companion-vs-therapist",
    title: "AI Companion vs Therapist: What AI Can and Cannot Do for Your Mental Health",
    excerpt:
      "AI companions are available at 3am, never cancel appointments, and remember every session. Therapists provide clinical diagnosis, regulated treatment, and genuine human care. Here is the honest guide to using both.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-memory-explained",
    title: "AI Memory Explained: Why Most AI Forgets You (and How MEOK Doesn't)",
    excerpt:
      "Context windows reset. Stateless APIs forget everything between sessions. Here is why most AI has no memory, how MEOK's 4-layer architecture solves this, and what it means for your relationship with your AI.",
    date: "March 24, 2026",
    readTime: "6 min read",
    tag: "Research",
    tagColor: "#10B981",
    category: "research",
    featured: false,
  },
  {
    slug: "data-sovereignty-ai",
    title: "Data Sovereignty in AI: Who Really Owns Your Conversations with ChatGPT, Claude, and Replika?",
    excerpt:
      "Most AI companies own your data, use it for training, and make it hard to delete. Under UK GDPR Articles 17 and 20, you have the right to erasure and portability. Here is what the major AI tools actually do with your conversations.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Privacy",
    tagColor: "#6366f1",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "ai-for-insomnia",
    title: "AI for Insomnia: Can a Sovereign AI Companion Help You Sleep Better?",
    excerpt:
      "1 in 3 UK adults has sleep problems. Most are rooted in anxiety and unprocessed thoughts. MEOK's companion as a pre-sleep check-in tool — brain dump, process the day, and know that your work is handled by overnight agents.",
    date: "March 24, 2026",
    readTime: "6 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-teens",
    title: "AI for Teenagers: Safe Companions, School Support, and Why Sovereignty Matters for Young People",
    excerpt:
      "AI companions for teens need stronger safeguards, not weaker ones. MEOK's Guardian mode, UK Children's Code compliance, and parental dashboard put safety first — while giving teenagers a private space to be honest.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
  {
    slug: "ai-for-parents",
    title: "AI for Parents: How MEOK's Family Plan Protects Every Generation Under One Roof",
    excerpt:
      "MEOK's Family plan (£29/mo) covers up to 6 family members with Guardian 24/7 protection, child-safe filters, scam detection for elderly relatives, and overnight agents that handle admin so you can be present.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
  {
    slug: "ai-for-relationship-anxiety",
    title: "AI Companion for Relationship Anxiety: Processing Attachment, Not Replacing Connection",
    excerpt:
      "Relationship anxiety affects millions of UK adults. MEOK's sovereign companion helps you process anxious thoughts between therapy sessions — and unlike some chatbots, MEOK's sycophancy detector won't just validate every fear.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "meok-for-remote-workers",
    title: "MEOK for Remote Workers: The AI That Understands Isolation, Handles Your Admin, and Keeps You Sharp",
    excerpt:
      "4.2 million remote workers in the UK. Most miss having a trusted colleague to think with. MEOK's sovereign companion knows your work context, while overnight agents ensure you start each day ahead rather than behind.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Work OS",
    tagColor: "#c9a84c",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-companion-for-menopause",
    title: "AI Companion for Menopause: Persistent Support Through the Transition No One Talks About",
    excerpt:
      "13 million women in perimenopause or menopause in the UK. Most are navigating it without adequate support. MEOK's companion tracks symptom patterns over months, remembers what you've tried, and never forgets your history.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "sovereignty-explained",
    title: "Digital Sovereignty Explained: What It Really Means to Own Your AI Data",
    excerpt:
      "Sovereignty is not a marketing word. It means AES-256 encryption, exportable JSON, UK GDPR Article 17 erasure rights, and no training on your conversations. Here is what it looks like in practice.",
    date: "March 24, 2026",
    readTime: "5 min read",
    tag: "Privacy",
    tagColor: "#6366f1",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "ai-for-entrepreneurs",
    title: "AI for Entrepreneurs: How a Sovereign AI Replaces Your EA, Strategist, and Sounding Board",
    excerpt:
      "Built from a caravan, MEOK was made for founders who work alone. Orion researches overnight, Riri builds while you sleep, Hourman plans your sprints — and your companion remembers every decision you've made.",
    date: "March 24, 2026",
    readTime: "6 min read",
    tag: "Work OS",
    tagColor: "#c9a84c",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-single-parents",
    title: "AI for Single Parents: When You're Running Two Jobs and Have No Bandwidth Left",
    excerpt:
      "1.8 million single parent families in the UK. MEOK's overnight agents handle admin while the kids sleep. The Family plan covers your whole household. And your companion is there after bedtime — for the grown-up hours.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
  {
    slug: "ai-for-chronic-fatigue",
    title: "AI Companion for Chronic Fatigue Syndrome: Consistent Support When Energy Is the Scarcest Resource",
    excerpt:
      "250,000 people have ME/CFS in the UK. Persistent memory means MEOK remembers your pacing history, what you tried last month, and how you felt — so you never have to explain yourself again from scratch on a bad day.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-creative-professionals",
    title: "AI for Creative Professionals: Feedback That Grows With Your Work, Not Generic Suggestions",
    excerpt:
      "Generic AI feedback ignores your style, your history, and what you're actually trying to achieve. MEOK knows your creative brief from six months ago. And its sycophancy detector will push back on weak work, not just validate it.",
    date: "March 24, 2026",
    readTime: "6 min read",
    tag: "Product",
    tagColor: "#c9a84c",
    category: "product",
    featured: false,
  },
  {
    slug: "meok-vs-notion-ai",
    title: "MEOK vs Notion AI: When Your Productivity Tool Becomes a Sovereign Companion",
    excerpt:
      "Notion AI is a smart document tool. MEOK is a sovereign operating system with overnight agents, a bonded companion, and family Guardian protection. They solve different problems — and one of them knows who you are.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "#6366f1",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-bipolar",
    title: "AI Companion for Bipolar Disorder: Tracking Patterns, Staying Grounded Between Episodes",
    excerpt:
      "MEOK's persistent memory tracks mood patterns over months — things you said before a previous episode, how you described feeling, what helped. A stable consistent companion that's there before, during, and after.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "meok-for-students",
    title: "MEOK for Students: Your Sovereign AI Study Partner, Mental Health Support, and Deadline Manager",
    excerpt:
      "1 in 5 UK students has a mental health problem. MEOK's Explorer tier is free (50 messages/day), doesn't sell your data to universities, and guides your thinking with Socratic mode rather than doing the work for you.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Product",
    tagColor: "#c9a84c",
    category: "product",
    featured: false,
  },
  {
    slug: "what-is-morning-briefing",
    title: "What is Morning Briefing? How MEOK Starts Your Day Before You Even Open Your Eyes",
    excerpt:
      "Every morning, MEOK's overnight agents compile what they found, what's on your calendar, and what your companion knows matters to you. It arrives as a personalised briefing — context and focus before the noise begins.",
    date: "March 24, 2026",
    readTime: "5 min read",
    tag: "Work OS",
    tagColor: "#c9a84c",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-grief-counselling",
    title: "AI for Grief: How Persistent Memory Supports Long-Term Bereavement (Without Replacing Human Connection)",
    excerpt:
      "600,000 people are bereaved each year in the UK. Grief is non-linear and can last for years — but most support doesn't. MEOK remembers the person you lost, significant dates, and how you described them, session after session.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-companion-for-autism",
    title: "AI Companion for Autism: Predictable, Patient, and Always Available",
    excerpt:
      "700,000 autistic people in the UK. MEOK's companion behaves consistently, never expresses frustration, and can rehearse social scripts safely. Persistent memory tracks sensory preferences and communication needs across every session.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-home-workers",
    title: "AI for Home Workers: The Companion That Understands the Kitchen Table Commute",
    excerpt:
      "The home office is productive and isolating in equal measure. MEOK's sovereign companion is a thinking partner who knows your work, never reports to your employer, and leaves overnight agents to handle the backlog while you rest.",
    date: "March 24, 2026",
    readTime: "6 min read",
    tag: "Work OS",
    tagColor: "#c9a84c",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-ocd",
    title: "AI Companion for OCD: Consistent Support Between ERP Therapy Sessions",
    excerpt:
      "750,000 people in the UK have OCD. MEOK's sycophancy detector will not provide the reassurance that reinforces compulsions. What it will do: journal patterns over months, maintain a stable presence, and never cancel on a bad day.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-social-anxiety",
    title: "AI Companion for Social Anxiety: Practicing Real Conversations in a Low-Stakes Space",
    excerpt:
      "Social anxiety affects 1 in 8 people in the UK. MEOK gives you a private space to rehearse difficult conversations — job interviews, awkward family talks, first dates — with a companion that never judges and always remembers.",
    date: "March 24, 2026",
    readTime: "6 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-chronic-pain",
    title: "AI Companion for Chronic Pain: Memory That Helps When Every Day Is Different",
    excerpt:
      "28 million UK adults live with chronic pain. MEOK tracks your pain diary over months, remembers triggers and what helped, and maintains a consistent compassionate presence — without dismissing or minimising how you feel.",
    date: "March 24, 2026",
    readTime: "6 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-eating-disorders",
    title: "AI Companion for Eating Disorder Recovery: Support Between Appointments, Not a Diet Plan",
    excerpt:
      "1.25 million people in the UK are affected by eating disorders. MEOK never discusses food, calories, or weight. What it does: provide consistent, non-judgmental support between clinical appointments, with a care floor that won't enable harm.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#8B5CF6",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-older-adults",
    title: "AI Companion for Older Adults: Combating Isolation, Scam Protection, and Senior Mode Explained",
    excerpt:
      "1.4 million older people in the UK are often or always lonely. MEOK's Senior Mode (large text, high contrast, voice-primary) makes it accessible. Guardian's real-time scam detection protects against fraud before the damage is done.",
    date: "March 24, 2026",
    readTime: "7 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
];

// ── Category filter tabs ──────────────────────────────────────────────────────

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "sovereign-ai", label: "Sovereign AI" },
  { id: "product", label: "Product" },
  { id: "guardian", label: "Guardian" },
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
          Read article →
        </Link>
      </div>
    </article>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogIndex({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params?.category ?? "all";
  const filteredPosts =
    activeCategory === "all"
      ? POSTS
      : POSTS.filter((p) => p.category === activeCategory);
  const featured = (filteredPosts.find((p) => p.featured) ?? filteredPosts[0])!;
  const rest = filteredPosts.filter((p) => p !== featured);

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
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <Link
                key={cat.id}
                href={cat.id === "all" ? "/blog" : `/blog?category=${cat.id}`}
                className="px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:opacity-90"
                style={
                  isActive
                    ? { background: "#c9a84c", color: "#0d0c18", borderColor: "#c9a84c" }
                    : { background: "transparent", color: "rgba(245,240,232,0.55)", borderColor: "rgba(245,240,232,0.15)" }
                }
              >
                {cat.label}
              </Link>
            );
          })}
        </div>

        {/* Featured post */}
        {featured && (
          <div className="mb-8">
            '*'
          </div>
        )}

        {/* Article grid */}
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {rest.map((post) => (
              '*'
            ))}
          </div>
        ) : !featured ? (
          <div className="text-center py-16 mb-16" style={{ color: "rgba(245,240,232,0.4)" }}>
            <p className="text-lg">No posts in this category yet.</p>
            <Link href="/blog" className="text-sm mt-2 inline-block" style={{ color: "#c9a84c" }}>View all posts →</Link>
          </div>
        ) : (
          <div className="mb-16" />
        )}

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

    </div>
  );
}
