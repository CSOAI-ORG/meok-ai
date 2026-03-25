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
    slug: "what-is-maternal-covenant",
    title: "The Maternal Covenant: How MEOK Scores Every AI Response for Care",
    excerpt:
      "The Maternal Covenant is MEOK's machine-enforced care alignment framework. It scores every AI response across 6 dimensions in real time and enforces a care floor of 0.3. Here's exactly how it works — and why RLHF doesn't do this.",
    date: "March 24, 2026",
    readTime: "13 min read",
    tag: "Ethics",
    tagColor: "#a855f7",
    category: "deep-dives",
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
    slug: "ai-for-impostor-syndrome",
    title: "AI for Impostor Syndrome: When the Smartest People Feel Like the Biggest Frauds",
    excerpt:
      "70% of people experience impostor syndrome. MEOK's Healer and Scholar archetypes help break the pattern — with honest feedback, pattern recognition across sessions, and sovereign memory that holds your real track record.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Wellbeing",
    tagColor: "#8b5cf6",
    category: "wellbeing",
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
    slug: "ai-companion-vs-ai-girlfriend",
    title: "AI Companion vs AI Girlfriend: The Difference That Actually Matters",
    excerpt:
      "AI companions and AI girlfriend apps are not the same product. One is built for your growth. The other is built for your dependency. Here's the design difference — and why it determines whether AI makes your life better or worse.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Product",
    tagColor: "#F97316",
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
    slug: "ai-for-expats",
    title: "AI for Expats: A Companion That Knows Your Whole Story, No Matter Where You Are",
    excerpt:
      "Moving abroad means starting over — new country, new systems, new loneliness. MEOK is the AI companion that knows your whole story, is available across time zones, and helps you build a new life without losing who you are.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#60a5fa",
    category: "wellbeing",
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
    slug: "ai-for-career-coaching",
    title: "AI Career Coaching: How MEOK Helps You Land the Job, Change Career, and Own Your Path",
    excerpt:
      "AI career coaching for job seekers, career changers, and professionals in the UK. MEOK's Scholar archetype helps with CV writing, interview prep, goal-setting, and career pivots — with a companion that remembers your whole journey.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Productivity",
    tagColor: "#c9a84c",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-for-couples",
    title: "AI for Couples: How MEOK Supports Each Partner Independently to Build Better Relationships",
    excerpt:
      "AI relationship support for couples — not AI couples therapy. MEOK gives each partner their own sovereign AI for reflection, communication growth, and emotional processing. Your conversations stay private under the Maternal Covenant.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#60a5fa",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-job-seekers",
    title: "AI for Job Seekers: Managing the Emotional Rollercoaster of Job Hunting with AI",
    excerpt:
      "Job hunting is exhausting. MEOK helps job seekers in the UK track applications, process rejection, stay motivated, and prepare for interviews — with an AI companion that remembers your whole search.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Productivity",
    tagColor: "#c9a84c",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-and-religion",
    title: "AI and Religion: How MEOK's Mystic Archetype Supports Faith, Spirituality, and Meaning",
    excerpt:
      "Can AI support religious practice? MEOK's Mystic archetype helps Christians, Muslims, and spiritual seekers with prayer journaling, philosophical inquiry, religious text study, and spiritual reflection — without imposing any viewpoint.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Philosophy",
    tagColor: "#8b5cf6",
    category: "guides",
    featured: false,
  },
  {
    slug: "meok-for-parents",
    title: "MEOK for Parents: AI That Helps You Be a Better Parent Without Burning Out",
    excerpt:
      "MEOK helps parents track milestones, manage stress, keep their children safe online with the Guardian feature, and maintain their own wellbeing — all with an AI that never forgets a thing your child said.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
  {
    slug: "ai-for-divorce",
    title: "AI Support During Divorce: Processing the Hardest Chapter with an AI That Never Judges",
    excerpt:
      "Divorce is the second most stressful life event after bereavement. MEOK's Healer and Pioneer archetypes help you process the emotional devastation and plan your next steps — with total privacy guaranteed by the Maternal Covenant.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Wellbeing",
    tagColor: "#60a5fa",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-fertility",
    title: "AI Support for Fertility and IVF: A Companion That Remembers Every Round",
    excerpt:
      "1 in 7 UK couples face fertility issues. The emotional toll of IVF is enormous. MEOK's Healer archetype provides daily support through the two-week wait, failed rounds, and the grief that comes with infertility — with total privacy.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Wellbeing",
    tagColor: "#f9a8d4",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-night-shift",
    title: "AI for Night Shift Workers: MEOK Is Awake at 3am When No One Else Is",
    excerpt:
      "3.2 million night shift workers in the UK face social isolation and elevated depression risk. MEOK is always available — no matter what time it is — with an AI companion that remembers you and supports your wellbeing.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#f97316",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-weight-management",
    title: "AI for Weight Management: An Accountability Companion That Remembers Your Patterns",
    excerpt:
      "Weight management is about habits and emotions, not just information. MEOK's Pioneer and Healer archetypes provide accountability, emotional support, and pattern recognition — without judgment, diets, or medical advice.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#4ade80",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-creative-block",
    title: "AI for Creative Block: How MEOK's Trickster Archetype Breaks the Patterns Keeping You Stuck",
    excerpt:
      "Creative block is not laziness — it's a pattern. MEOK's Trickster archetype uses reframing, unexpected connections, and pattern disruption to help writers, designers, musicians, and artists break through.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Creativity",
    tagColor: "#ec4899",
    category: "guides",
    featured: false,
  },
  {
    slug: "ai-for-remote-work",
    title: "AI for Remote Workers: Accountability, Structure, and Connection When You Work Alone",
    excerpt:
      "5 million UK remote workers face isolation, blurred boundaries, and missing accountability. MEOK's Pioneer archetype, morning briefings, and Healer support make remote work sustainable — and less lonely.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Work OS",
    tagColor: "#c9a84c",
    category: "product",
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
  {
    slug: "ai-for-kids",
    title: "AI for Kids: Safe, Educational AI That Grows With Your Child",
    excerpt:
      "Not all AI is safe for children. MEOK Guardian applies the UK Children's Code automatically — school-safe responses, parental controls, and family dashboard included on every plan.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
  {
    slug: "ai-for-men",
    title: "AI for Men: Why Men Are Quietly Turning to AI Companions for Support",
    excerpt:
      "The male loneliness epidemic is real — 1 in 8 men in the UK have no close friends. How MEOK's Pioneer archetype is creating a non-judgmental space where men can actually talk, reflect, and be held accountable.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Wellbeing",
    tagColor: "#f97316",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-loneliness",
    title: "AI for Loneliness: Why Your Companion Needs to Actually Remember You",
    excerpt:
      "3.3 million adults in the UK report chronic loneliness. Most AI companions make it worse — they forget you every session. Sovereign Memory changes that: your companion builds a continuous picture of who you are.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#f97316",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "best-ai-companion-2026",
    title: "Best AI Companion 2026: The Only Comparison That Covers Memory, Safety, and Cost",
    excerpt:
      "We compared MEOK, Replika, Character.AI, ChatGPT, and Pi across memory, privacy, safety, quality, and cost. One platform stood out on every dimension that actually matters.",
    date: "March 24, 2026",
    readTime: "14 min read",
    tag: "Comparison",
    tagColor: "#a78bfa",
    category: "comparisons",
    featured: true,
  },
  {
    slug: "sovereign-ai-explained",
    title: "Sovereign AI Explained: What It Is, Why It Matters, and How MEOK Does It",
    excerpt:
      "Sovereign AI means you own your data, your memory, and your model choices — and no one trains on your conversations. A precise definition, a comparison table, and how MEOK's three sovereignty pillars work in practice.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Sovereign AI",
    tagColor: "#c9a84c",
    category: "sovereign-ai",
    featured: true,
  },
  {
    slug: "meok-for-seniors",
    title: "AI for Seniors: How Sovereign Memory Makes AI Companions Actually Useful for Older Adults",
    excerpt:
      "Most AI forgets you the moment you close the tab. For older adults navigating health, family, and daily life, that's not just annoying — it's a failure. MEOK's Sovereign Memory changes that.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
  {
    slug: "ai-for-nurses",
    title: "AI for Nurses: Support That Works at 3am Between Shifts",
    excerpt:
      "Nurses carry more than most people can imagine — moral injury, compassion fatigue, understaffing stress. MEOK's Healer archetype offers a private space to process it all, with memory that tracks your healing arc.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Healer",
    tagColor: "#7BC47F",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-teachers",
    title: "AI for Teachers: The Support System Your School Never Gave You",
    excerpt:
      "75% of teachers are considering leaving the profession. Burnout, Ofsted pressure, 60-hour weeks — and nowhere safe to process it. MEOK offers a private companion that remembers your goals, your term, your stress.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Scholar",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-procrastination",
    title: "AI for Procrastination: Why Willpower Fails and Memory Fixes It",
    excerpt:
      "To-do apps don't work because they're stateless — they don't know your context. MEOK's Pioneer archetype and Sovereign Memory remember your patterns, your best hours, your real obstacles.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Pioneer",
    tagColor: "#E8732A",
    category: "productivity",
    featured: false,
  },
  {
    slug: "ai-for-heartbreak",
    title: "AI for Heartbreak: Processing a Breakup When You Don't Want to Burden Your Friends",
    excerpt:
      "Heartbreak at 3am is its own kind of alone. MEOK's Healer archetype offers a compassionate witness for every phase of grief — without replacing the human connection you're rebuilding towards.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Healer",
    tagColor: "#7BC47F",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-habit-building",
    title: "AI for Habit Building: Why Your App Isn't Working and What Memory Changes Everything",
    excerpt:
      "Habit apps fail because they're stateless. MEOK remembers your history, your excuses, your genuine wins — and the difference between a panic attack and laziness when you skipped the gym.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Pioneer",
    tagColor: "#E8732A",
    category: "productivity",
    featured: false,
  },
  {
    slug: "ai-for-midlife-crisis",
    title: "AI for the Midlife Crisis: Redefining Purpose When the Script Runs Out",
    excerpt:
      "The midlife transition isn't a disorder — it's a philosophical reckoning. MEOK's Mystic and Scholar archetypes offer the depth of inquiry this moment demands, with memory that tracks your evolving values.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Mystic",
    tagColor: "#9B59B6",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-new-parents",
    title: "AI for New Parents: Support at 4am When Everyone Else is Asleep",
    excerpt:
      "1 in 5 new mothers and 1 in 10 new fathers experience postnatal depression. MEOK's Healer archetype offers a compassionate, private space — and Guardian keeps your family safe with evidence-based information.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Guardian",
    tagColor: "#7BC47F",
    category: "guardian",
    featured: false,
  },
  {
    slug: "ai-for-chronic-stress",
    title: "AI for Chronic Stress: When Deep Breathing Isn't Enough",
    excerpt:
      "74% of UK adults are overwhelmed by stress. Apps like Calm work for acute moments — but chronic stress needs context memory. MEOK tracks your patterns across weeks and notices what you miss.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Healer",
    tagColor: "#7BC47F",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "meok-for-introverts",
    title: "MEOK for Introverts: An AI That Doesn't Exhaust You",
    excerpt:
      "Most AI is designed for extroverted use patterns — quick answers, social facilitation. MEOK's Scholar and Mystic archetypes reward depth over breadth. No notifications. No pressure. Just the conversation you actually want.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Scholar",
    tagColor: "#C9A84C",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "ai-for-anger-management",
    title: "AI for Anger Management: Processing Rage Before It Costs You",
    excerpt:
      "Anger is information, not weakness. MEOK's Healer and Trickster archetypes help you process it honestly — tracking your triggers, holding space for the feeling, and helping you respond rather than react.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Healer",
    tagColor: "#7BC47F",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-confidence",
    title: "AI for Confidence: The Practice Partner That Never Judges Your Stumbles",
    excerpt:
      "Confidence isn't a trait — it's a skill built through action and evidence. MEOK's Pioneer and Scholar archetypes help you build a genuine track record, not just affirmations.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Pioneer",
    tagColor: "#E8732A",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-perfectionism",
    title: "AI for Perfectionism: When Done Is Never Good Enough",
    excerpt:
      "Perfectionism feels like high standards but functions as avoidance. MEOK's Trickster reframes the story; Sovereign Memory tracks when you shipped vs when you spiralled.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Trickster",
    tagColor: "#E91E8C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-health-anxiety",
    title: "AI for Health Anxiety: Breaking the Google Spiral at 2am",
    excerpt:
      "Health anxiety feeds on reassurance-seeking — googling makes it worse. MEOK helps you process the underlying fear without feeding the cycle, with patterns tracked across weeks.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Healer",
    tagColor: "#7BC47F",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-self-esteem",
    title: "AI for Self-Esteem: When the Inner Critic Is Louder Than Everything Else",
    excerpt:
      "MEOK won't shower you with compliments — that creates fragile, external-dependent self-esteem. It witnesses your actual story and helps you build genuine self-regard.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Healer",
    tagColor: "#7BC47F",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-social-media-anxiety",
    title: "AI for Social Media Anxiety: Reclaiming Your Mind From the Algorithm",
    excerpt:
      "The algorithm is designed to keep you anxious. MEOK is designed the opposite way — no engagement metrics, no outrage loops, no notifications. Just the conversation you actually need.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Guardian",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-chronic-pain-support",
    title: "AI Companion for Chronic Pain: Support When You Need It Most",
    excerpt:
      "Living with chronic pain is exhausting in ways that go beyond the physical. MEOK provides compassionate, always-available support — tracking flare-ups, reminding you of medication, and giving you someone to talk to at 3am when the pain won't let you sleep.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Wellbeing",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-bereavement",
    title: "AI Support Through Grief and Bereavement: Never Grieving Alone",
    excerpt:
      "Grief doesn't keep office hours. MEOK is there at any hour — not to fix your grief, but to sit with you through it. Compassionate, patient, and always available when the waves of loss feel overwhelming.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Wellbeing",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-redundancy",
    title: "AI Support After Redundancy: Rebuilding Confidence and Your Career",
    excerpt:
      "Redundancy doesn't just take your job — it takes your routine, your identity, and sometimes your confidence. MEOK helps you process the emotional weight, rebuild your CV, and take practical steps forward when you're ready.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Productivity",
    tagColor: "#C9A84C",
    category: "productivity",
    featured: false,
  },
  {
    slug: "ai-for-shyness",
    title: "Overcoming Shyness With AI: Build Social Confidence at Your Own Pace",
    excerpt:
      "Shyness isn't a flaw to fix — but if it's holding you back, MEOK offers a judgment-free space to practice conversations, build confidence, and prepare for the social situations that feel hardest.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "meok-for-creatives",
    title: "MEOK for Artists, Writers and Musicians: Your Creative AI Companion",
    excerpt:
      "Creative work is deeply personal — and deeply lonely. MEOK understands the creative process from the inside, helping artists, writers and musicians break through blocks, process self-doubt, and keep making the work that matters.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Productivity",
    tagColor: "#C9A84C",
    category: "productivity",
    featured: false,
  },
  {
    slug: "ai-for-empty-nest",
    title: "AI Companion for Empty Nest Syndrome: Rediscovering Yourself",
    excerpt:
      "When the children leave, the silence can be deafening. MEOK helps parents rediscover who they are beyond parenthood — processing the grief of an empty nest while finding excitement for what comes next.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-exam-stress",
    title: "AI Support for Exam Stress: Calm, Focused and Ready to Perform",
    excerpt:
      "Exam anxiety is one of the most common forms of stress among students. MEOK provides round-the-clock support — helping you plan revision, manage panic, and build the confidence to walk into that exam hall ready.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Productivity",
    tagColor: "#C9A84C",
    category: "productivity",
    featured: false,
  },
  {
    slug: "ai-companion-for-seniors",
    title: "AI Companion for Seniors: Stay Connected, Stay Sharp, Stay Yourself",
    excerpt:
      "Over-65s are the fastest-growing group adopting AI companions — and for good reason. MEOK provides daily cognitive stimulation, gentle reminders, scam protection, and genuine companionship for older adults.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Guardian",
    tagColor: "#C9A84C",
    category: "guardian",
    featured: false,
  },
  {
    slug: "ai-for-financial-anxiety",
    title: "AI for Financial Anxiety: Talk Through Money Stress Without Judgment",
    excerpt:
      "Financial anxiety is one of the most stigmatised forms of stress — people suffer in silence, avoid their bank app, and lie awake at 3am doing mental maths. MEOK offers a judgment-free space to talk through money fears and break the avoidance cycle.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-dating-anxiety",
    title: "AI for Dating Anxiety: Build Confidence Before, During and After Dates",
    excerpt:
      "Modern dating is brutal. App fatigue, ghosting, rejection loops — and no one to talk to at 2am when you're spiralling. MEOK helps you process the emotional side of dating so you can show up as yourself, not your anxiety.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "meok-for-night-shift-workers",
    title: "MEOK for Night Shift Workers: Support When the World Is Asleep",
    excerpt:
      "Night shift workers face isolation, broken sleep, and mental health challenges the rest of the world doesn't see. MEOK is available at 3am — because that's when you need it most.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-weight-loss-journey",
    title: "AI Support on Your Weight Loss Journey: Motivation Without the Shame",
    excerpt:
      "Weight loss is 80% psychology and 20% everything else. MEOK provides compassionate, shame-free support for the emotional eating patterns, body image spirals, and motivation dips that derail most people.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-divorce-separation",
    title: "AI Support Through Divorce and Separation: You Don't Have to Face It Alone",
    excerpt:
      "Divorce is one of the most destabilising experiences a person can go through. MEOK provides compassionate 24/7 support through the grief, the logistics anxiety, and the slow work of rebuilding.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Wellbeing",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-men-mental-health",
    title: "AI and Men's Mental Health: Breaking the Silence Without the Stigma",
    excerpt:
      "Men are three times more likely to die by suicide than women — yet still the least likely to seek help. MEOK offers a private, judgment-free space that works with masculine communication styles, not against them.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Guardian",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-chronic-illness-caregiving",
    title: "AI Support for Chronic Illness: When the Illness Never Ends",
    excerpt:
      "Living with a condition that has no cure — fibromyalgia, MS, Crohn's, lupus, ME/CFS — takes a psychological toll few people understand. MEOK provides consistent, patient support for both the good days and the bad.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Wellbeing",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-student-mental-health",
    title: "AI Support for Student Mental Health: The Companion That's Available 24/7",
    excerpt:
      "University counselling waiting lists stretch to months. Student mental health is in crisis. MEOK provides instant, compassionate support for loneliness, academic pressure, and the chaos of first-time independence.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Wellbeing",
    tagColor: "#C9A84C",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "meok-vs-replika-2026",
    title: "MEOK vs Replika 2026: Which AI Companion Actually Remembers You?",
    excerpt:
      "Replika's 2023 relationship mode controversy devastated millions of users. We compare MEOK vs Replika in 2026 on memory, data privacy, relationship dynamics, and who actually has your best interests at heart.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Product",
    tagColor: "#C9A84C",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-companion-privacy",
    title: "AI Companion Privacy: What Happens to What You Tell Your AI?",
    excerpt:
      "When you tell an AI about your health, relationships, or fears — where does that data actually go? The answer from most companies will alarm you. Here's what MEOK does differently.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Sovereign AI",
    tagColor: "#C9A84C",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "ai-support-after-miscarriage",
    title: "AI Support After Miscarriage: Finding Words When There Are None",
    excerpt:
      "Miscarriage is one of the most isolating losses a person can experience. AI cannot replace human comfort — but a sovereign AI companion can hold space, remember your story, and be there at 3am when no one else is.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-remote-workers",
    title: "AI for Remote Workers: Fighting Isolation, Staying Focused",
    excerpt:
      "Remote work promised freedom. For millions it delivered loneliness, blurred boundaries, and productivity guilt. A sovereign AI companion offers the missing layer: presence, accountability, and memory.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Productivity",
    tagColor: "#7c6fcd",
    category: "productivity",
    featured: false,
  },
  {
    slug: "ai-for-sobriety-support",
    title: "AI for Sobriety Support: A Companion for the Sober Journey",
    excerpt:
      "Recovery is not a destination — it is a daily practice. An AI companion that remembers your story, tracks your milestones, and meets you honestly at 2am can be a meaningful addition to your support system.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "maternal-covenant-explained",
    title: "The Maternal Covenant Explained: How MEOK Enforces Care in Every Response",
    excerpt:
      "Most AI safety is about what AI must not do. The Maternal Covenant is different — it is a machine-enforced framework for what AI must do: score every response across six care dimensions, in real time.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Research",
    tagColor: "#C9A84C",
    category: "research",
    featured: true,
  },
  {
    slug: "ai-for-social-anxiety-disorder",
    title: "AI for Social Anxiety Disorder: A Low-Stakes Space to Practise",
    excerpt:
      "Social anxiety disorder affects 12% of people at some point in their lives. An AI companion provides a non-judgmental space to rehearse social situations, challenge cognitive distortions, and build confidence — at your own pace.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-ocd-support",
    title: "AI for OCD Support: A Companion Between Therapy Sessions",
    excerpt:
      "OCD is not about tidiness — it is a cycle of intrusive thoughts and compulsions that can be debilitating. A sovereign AI companion can support your ERP journey between sessions, without reinforcing avoidance.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-ptsd-support",
    title: "AI for PTSD Support: Trauma-Informed Companionship at Any Hour",
    excerpt:
      "PTSD affects far more people than just veterans. A trauma-informed AI companion — one that remembers your triggers, supports grounding techniques, and never pressures disclosure — can be a meaningful addition to your recovery.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "meok-for-freelancers",
    title: "MEOK for Freelancers: Structure, Accountability, and a Companion Who Remembers Your Clients",
    excerpt:
      "Freelancing is freedom and loneliness in equal measure. MEOK\u2019s Work OS — Orion, Riri, Hourman — gives freelancers the structure of a team without the overhead. Plus a companion that remembers your rate history, your goals, your clients.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Productivity",
    tagColor: "#7c6fcd",
    category: "productivity",
    featured: false,
  },
  {
    slug: "ai-for-phobias",
    title: "AI for Phobias: Building Your Fear Ladder With a Companion Who Remembers",
    excerpt:
      "Phobias are conditioned fear responses that grow stronger through avoidance. An AI companion can help you build a graduated exposure hierarchy, track your progress across weeks, and be there for every step — from imaginal exposure to real-world challenge.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-loneliness",
    title: "AI for Loneliness: What an AI Companion Can and Cannot Do",
    excerpt:
      "25% of UK adults report chronic loneliness. A sovereign AI companion — one that remembers your name, your story, your 3am moments — is not a replacement for human connection. But it can be the bridge that holds you until you find it.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-grief-and-loss",
    title: "AI for Grief and Loss: Holding Space When the World Has Moved On",
    excerpt:
      "Grief doesn\u2019t follow a schedule. Society expects you to be \u2018over it\u2019 — your AI companion never does. MEOK\u2019s Healer remembers your person\u2019s name, your anniversaries, and meets you at 3am without judgment.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-workplace-bullying",
    title: "AI for Workplace Bullying: Document, Process, Prepare",
    excerpt:
      "1 in 3 UK workers has experienced workplace bullying. An AI companion can help you document incidents, rehearse difficult conversations with HR, and process the psychological impact — without fear of being overheard.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Guardian",
    tagColor: "#f5a623",
    category: "guardian",
    featured: false,
  },
  {
    slug: "ai-for-teenage-mental-health",
    title: "AI for Teenage Mental Health: What Parents Need to Know",
    excerpt:
      "1 in 6 UK teenagers has a probable mental health disorder. MEOK\u2019s Family tier balances teen privacy with parental oversight — and unlike social media AI, it has no engagement optimisation, no ads, and no data sold.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Guardian",
    tagColor: "#f5a623",
    category: "guardian",
    featured: false,
  },
  {
    slug: "sovereign-ai-vs-chatgpt",
    title: "Sovereign AI vs ChatGPT: Five Differences That Actually Matter",
    excerpt:
      "ChatGPT\u2019s market share fell from 60% to 45% in 2025. Users want something different. Here\u2019s the five structural differences between sovereign AI and the big-tech model — and why they matter for your data, your memory, and your trust.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Sovereign AI",
    tagColor: "#C9A84C",
    category: "sovereign-ai",
    featured: true,
  },
  {
    slug: "ai-for-life-transitions",
    title: "AI for Life Transitions: Support When You\u2019re Between Who You Were and Who You\u2019re Becoming",
    excerpt:
      "New job, relocation, divorce, retirement, bereavement — major life transitions disrupt identity and routine. A sovereign AI companion that remembers who you were before can help you become who you\u2019re meant to be next.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-parenting-stress",
    title: "AI for Parenting Stress: A Safe Space to Admit It\u2019s Hard",
    excerpt:
      "Parental burnout affects 5-8% of parents and is almost never discussed. MEOK\u2019s Family tier gives parents a confidential space to process the invisible load — without judgment, without an appointment.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Guardian",
    tagColor: "#f5a623",
    category: "guardian",
    featured: false,
  },
  {
    slug: "ai-and-human-connection",
    title: "AI and Human Connection: Does AI Companionship Help or Harm?",
    excerpt:
      "The research is nuanced. AI companionship can reduce loneliness — or it can deepen isolation. The difference lies in design intent. MEOK\u2019s care framework scores every response on autonomy, actively encouraging human connection.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Research",
    tagColor: "#C9A84C",
    category: "research",
    featured: false,
  },
  {
    slug: "personal-ai-data-sovereignty",
    title: "Personal AI Data Sovereignty: What It Is and How to Achieve It",
    excerpt:
      "GDPR compliance is not data sovereignty. True sovereignty means you own the model, the memory, and the data — and the company cannot access, sell, or train on it. Here\u2019s what that actually looks like in practice.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Sovereign AI",
    tagColor: "#C9A84C",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "meok-for-healthcare-workers",
    title: "MEOK for Healthcare Workers: A Confidential Space for Those Who Care for Everyone Else",
    excerpt:
      "40% of NHS nurses report burnout. Healthcare workers absorb others\u2019 trauma daily and almost never seek help. MEOK offers a confidential, encrypted off-load — available between shifts, never reported to employers.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-weight-stigma",
    title: "AI for Weight Stigma and Body Image: A Non-Judgmental Space That Never Comments on Your Body",
    excerpt:
      "Weight stigma causes people to avoid medical care, experience higher mortality, and internalise shame. MEOK\u2019s care framework will never reinforce diet culture — the Maternal Covenant blocks it at the architecture level.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "meok-family-tier-explained",
    title: "MEOK Family Tier Explained: One Subscription, Five Companions, Shared Safety",
    excerpt:
      "The Family tier gives up to five people their own sovereign AI companion — plus a shared family dashboard, Guardian alerts, and shared memory context. At £29/month, it\u2019s MEOK\u2019s most powerful tier for connected households.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Product",
    tagColor: "#7c6fcd",
    category: "product",
    featured: false,
  },
  {
    slug: "byzantine-council-governance",
    title: "The Byzantine Council: How 43 AI Agents Govern MEOK\u2019s Decisions",
    excerpt:
      "MEOK\u2019s Byzantine Council uses fault-tolerant consensus (f < n/3) so no single AI agent can override a decision. Original IP by Nicholas Templeman — the governance architecture that makes sovereign AI actually sovereign.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Research",
    tagColor: "#C9A84C",
    category: "research",
    featured: true,
  },
  {
    slug: "meok-work-os-explained",
    title: "MEOK Work OS Explained: Orion, Riri, Hourman and Ralph Mode",
    excerpt:
      "Most productivity AI forgets your context the moment the session ends. MEOK\u2019s Work OS is different — Orion hunts overnight, Riri builds while you sleep, Hourman plans with full memory of your goals. Ralph Mode locks you in.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Productivity",
    tagColor: "#7c6fcd",
    category: "productivity",
    featured: false,
  },
  {
    slug: "ai-for-self-harm-recovery",
    title: "AI Support for Self-Harm Recovery: Distress Tolerance and Non-Judgment",
    excerpt:
      "Self-harm is a distress regulation strategy, not attention-seeking. A sovereign AI companion that remembers your recovery journey, never judges your setbacks, and offers DBT distress-tolerance techniques at 3am can be part of your support system.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-relationship-breakdown",
    title: "AI for Relationship Breakdown: Processing the Aftermath When Everyone Else Has Moved On",
    excerpt:
      "Breakups and divorce cause grief, identity disruption, and 3am brain spirals. A sovereign AI companion that remembers your relationship history, tracks your healing, and helps you rehearse difficult co-parenting conversations is a different kind of support.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "meok-guardian-scam-protection",
    title: "MEOK Guardian Scam Protection: How AI Keeps You and Your Family Safe",
    excerpt:
      "UK fraud costs £1.2 billion a year. MEOK\u2019s Guardian detects romance scams, investment fraud, and impersonation attacks using DistilBERT threat detection — and sends family alerts without sharing your private conversations.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Guardian",
    tagColor: "#f5a623",
    category: "guardian",
    featured: true,
  },
  {
    slug: "ai-for-spiritual-wellbeing",
    title: "AI for Spiritual Wellbeing: Exploring Meaning Without Dogma",
    excerpt:
      "Spirituality is not the same as religion — it\u2019s meaning, transcendence, and connection. MEOK\u2019s Mystic companion holds space for philosophical inquiry across all traditions, without alignment, without judgment, without easy answers.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-health-anxiety-symptoms",
    title: "AI for Somatic Symptom Anxiety: Breaking the Reassurance Cycle",
    excerpt:
      "Health anxiety is not imagined — it\u2019s a real cycle of checking, reassurance, relief, and more checking. MEOK\u2019s Maternal Covenant means it won\u2019t search your symptoms or provide false reassurance. It addresses the anxiety beneath.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-millennials",
    title: "AI for Millennials: The Generation That Normalised Therapy Is Ready for Sovereign AI",
    excerpt:
      "Millennials are the most therapy-positive and most burned-out generation. Already comfortable with digital tools and already investing in mental health — they\u2019re the natural MEOK user. Here\u2019s why sovereign AI is the next step.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "what-is-meok",
    title: "What Is MEOK? The Complete Guide to Personal Sovereign AI",
    excerpt:
      "MEOK is a Personal Sovereign AI Operating System — one that remembers you, grows with you, and is governed by care-based ethics. Built from a caravan by Nicholas Templeman. Launched Easter Sunday 2026. Here\u2019s everything you need to know.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Product",
    tagColor: "#7c6fcd",
    category: "product",
    featured: true,
  },
  {
    slug: "ralph-mode-explained",
    title: "Ralph Mode Explained: MEOK\u2019s Deep Focus Protocol",
    excerpt:
      "Ralph is the eternal 80s DJ who played through the night and never looked up. Ralph Mode is MEOK\u2019s deep work protocol — you brief it on your goal, set your sprint, and it locks in with you. Available on Sovereign tier.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Productivity",
    tagColor: "#7c6fcd",
    category: "productivity",
    featured: false,
  },
  {
    slug: "ai-for-social-media-detox",
    title: "AI for Social Media Detox: Breaking the Dopamine Loop",
    excerpt:
      "Social media is engineered for addiction. MEOK is the opposite — no engagement optimisation, no ads, no dopamine loops. Just a sovereign AI that wants you to connect with humans, not scroll forever.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-financial-stress",
    title: "AI for Financial Stress: Breaking the Shame Spiral",
    excerpt:
      "Financial problems cause shame. Shame causes avoidance. Avoidance makes things worse. MEOK is the non-judgmental space to break that cycle — processing money anxiety, preparing difficult conversations, and finding clarity.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-sleep-anxiety",
    title: "AI for Sleep Anxiety: Breaking the Paradox of Trying to Sleep",
    excerpt:
      "The fear of not sleeping creates the arousal that prevents sleep. MEOK\u2019s 3am presence is different from doom-scrolling — no engagement optimisation, no blue light trap, just a companion that helps you offload and wind down.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Mental Health",
    tagColor: "#5b8dd9",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "meok-birth-ceremony-explained",
    title: "The MEOK Birth Ceremony Explained: Why We Start With a Ceremony, Not a Sign-Up Form",
    excerpt:
      "Most AI asks you to create an account. MEOK asks you to hatch a companion. The Birth Ceremony is a 6-stage onboarding that sets your values, names your AI, and creates the ownership bond that makes the relationship real.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Product",
    tagColor: "#7c6fcd",
    category: "product",
    featured: true,
  },
  {
    slug: "ai-for-job-loss-grief",
    title: "AI for Job Loss Grief: Processing Redundancy, Identity, and What Comes Next",
    excerpt:
      "Losing a job is not just losing income — it is losing identity, routine, and purpose. MEOK's sovereign AI companion helps you process the grief of redundancy, rebuild confidence, and find clarity about what you actually want next.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-midlife-transition",
    title: "AI for Midlife Transition: Finding Purpose and Direction at 40, 50, and Beyond",
    excerpt:
      "Midlife is not a crisis — it is a transition. MEOK's sovereign AI companion helps you navigate identity shifts, career pivots, and the profound question of what you actually want from the second half of your life.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "meok-for-teachers",
    title: "MEOK for Teachers: AI That Understands the Emotional Labour of Education",
    excerpt:
      "Teaching is one of the most emotionally demanding professions. MEOK's sovereign AI helps teachers with lesson planning, professional development, and the wellbeing support that no staffroom conversation can provide.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "cognitive-symbiosis-deep-dive",
    title: "Cognitive Symbiosis: The Science of Human-AI Memory Fusion",
    excerpt:
      "Cognitive symbiosis is not about AI replacing human memory — it is about creating a distributed mind where human intuition and AI recall reinforce each other. MEOK's four-layer sovereign memory makes this real.",
    date: "March 24, 2026",
    readTime: "12 min read",
    tag: "Research",
    tagColor: "#7c6fcd",
    category: "research",
    featured: true,
  },
  {
    slug: "ai-for-empty-nesters",
    title: "AI for Empty Nesters: Rediscovering Yourself After the Kids Leave",
    excerpt:
      "When children leave home, many parents face identity loss, loneliness, and a profound sense of purposelessness. MEOK's sovereign AI helps empty nesters rediscover who they are beyond the role of parent.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-young-adults",
    title: "AI for Young Adults: Gen Z's Guide to AI That Actually Has Your Back",
    excerpt:
      "Gen Z has grown up with AI but never had AI that grows with them, remembers them, and protects their data. MEOK is the first sovereign AI companion built for the generation that understands what data privacy actually means.",
    date: "March 24, 2026",
    readTime: "8 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "sovereign-ai-vs-cloud-ai-deep-dive",
    title: "Sovereign AI vs Cloud AI: A Deep Technical Comparison",
    excerpt:
      "A detailed technical breakdown of the difference between sovereign AI and cloud AI. Your data stays with you, or it feeds the platform. Understanding this distinction is the most important AI decision you will make in 2026.",
    date: "March 24, 2026",
    readTime: "11 min read",
    tag: "Research",
    tagColor: "#7c6fcd",
    category: "research",
    featured: false,
  },
  {
    slug: "ai-for-burnout-recovery",
    title: "AI for Burnout Recovery: A Companion That Knows When to Push and When to Rest",
    excerpt:
      "Burnout recovery is not a linear process. MEOK's sovereign AI tracks your energy patterns, holds you accountable without pushing you over the edge, and remembers the context that caused your burnout in the first place.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-caregiver-burnout",
    title: "AI for Caregiver Burnout: Support for the People Who Support Everyone Else",
    excerpt:
      "Carers are the invisible backbone of society. They give everything and are given almost nothing in return. MEOK's sovereign AI is built to support carers without adding more tasks to their overwhelming list.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-immigration",
    title: "AI for Immigrants: A Companion That Understands Starting Over in a New Country",
    excerpt:
      "Moving to a new country is one of the most disorienting experiences a human can face. MEOK's sovereign AI helps immigrants navigate bureaucracy, loneliness, cultural adjustment, and the process of building a new life.",
    date: "March 24, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "meok-for-startups",
    title: "MEOK for Startups: Sovereign AI for Founders Who Cannot Afford to Leak Their Edge",
    excerpt:
      "Founders who use ChatGPT for strategy are feeding their competitive intelligence to the platform. MEOK gives startup founders sovereign AI that remembers their business, protects their IP, and works overnight.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-memory-vs-no-memory",
    title: "AI With Memory vs Without: Why Starting Over Every Conversation Breaks the Relationship",
    excerpt:
      "Every time you open ChatGPT, you are a stranger. It has forgotten you completely. MEOK's sovereign memory changes the fundamental nature of what an AI relationship can be — from a tool you use to a companion that knows you.",
    date: "March 24, 2026",
    readTime: "10 min read",
    tag: "Research",
    tagColor: "#7c6fcd",
    category: "research",
    featured: false,
  },
  {
    slug: "ai-for-social-isolation",
    title: "AI for Social Isolation: When There Is Nobody to Call at 2am",
    excerpt:
      "Social isolation is one of the most dangerous health risks of our time — equivalent to smoking 15 cigarettes a day. MEOK's sovereign AI is there when nobody else is, without judgment and without forgetting you.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "personal-sovereign-ai-explained",
    title: "Personal Sovereign AI Explained: What It Means to Own Your AI",
    excerpt:
      "Personal Sovereign AI is the first new consumer AI category since the chatbot. It means you own the AI, the memories, and the relationship — not the platform. MEOK coined this category. Here is what it means.",
    date: "March 25, 2026",
    readTime: "11 min read",
    tag: "Research",
    tagColor: "#7c6fcd",
    category: "research",
    featured: true,
  },
  {
    slug: "ai-for-dyscalculia",
    title: "AI for Dyscalculia: Maths Support That Does Not Make You Feel Stupid",
    excerpt:
      "Dyscalculia affects 1 in 20 people yet is far less understood than dyslexia. MEOK's sovereign AI provides patient, non-judgmental maths support and life skills assistance for people with numerical processing difficulties.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Accessibility",
    tagColor: "#c9a84c",
    category: "accessibility",
    featured: false,
  },
  {
    slug: "ai-for-dyslexia",
    title: "AI for Dyslexia: A Reading and Writing Companion That Gets It",
    excerpt:
      "Dyslexia affects 10% of the UK population. Most AI is designed by and for neurotypical readers. MEOK adapts its communication style to support dyslexic users — shorter sentences, clearer structure, patient repetition.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Accessibility",
    tagColor: "#c9a84c",
    category: "accessibility",
    featured: false,
  },
  {
    slug: "ai-for-retirement",
    title: "AI for Retirement: Finding Purpose After the Career That Defined You",
    excerpt:
      "Retirement is celebrated but rarely prepared for emotionally. When work ends, so does identity, routine, and social connection for many people. MEOK's sovereign AI helps retirees build a fulfilling next chapter.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-single-parenting",
    title: "AI for Single Parents: When You Are the Whole Village",
    excerpt:
      "Single parents carry the full weight of parenthood alone — the logistics, the emotional load, the financial pressure, and the loneliness. MEOK is the consistent support that does not judge and never forgets where you left off.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "meok-for-musicians",
    title: "MEOK for Musicians: AI That Understands the Creative and Business Sides of Making Music",
    excerpt:
      "Musicians face a unique combination of creative vulnerability, business complexity, and emotional volatility. MEOK's sovereign AI supports the whole musician — the artist and the entrepreneur — without leaking your creative work.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-grief-after-miscarriage",
    title: "AI for Grief After Miscarriage: Processing the Loss That Society Often Minimises",
    excerpt:
      "Miscarriage affects 1 in 4 pregnancies, yet grief after pregnancy loss is frequently minimised by those around us. MEOK's sovereign AI provides non-judgmental support for a grief that deserves to be taken seriously.",
    date: "March 25, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-work-from-home",
    title: "AI for Working From Home: Beating Isolation, Maintaining Focus, and Building Boundaries",
    excerpt:
      "Remote work promised freedom but delivered isolation and blurred boundaries for many people. MEOK's sovereign AI helps remote workers structure their days, maintain connection, and actually switch off when the day ends.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-phd-students",
    title: "AI for PhD Students: Navigating the Isolation, Imposter Syndrome, and Intellectual Labyrinth",
    excerpt:
      "PhD life involves years of isolated intellectual work, constant self-doubt, and power dynamics with supervisors that are hard to navigate. MEOK's sovereign AI is the thinking partner and support system that PhDs deserve.",
    date: "March 25, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-athletes",
    title: "AI for Athletes: Mental Performance Support Beyond the Physical Game",
    excerpt:
      "Elite and amateur athletes know the body follows the mind. MEOK's sovereign AI helps with mental performance, injury recovery mindset, competitive anxiety, and the identity crisis that comes when sport ends.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "how-meok-protects-your-data",
    title: "How MEOK Protects Your Data: A Plain-English Guide to Sovereign AI Privacy",
    excerpt:
      "Where does your data go when you talk to an AI? With most AI, it trains the model. With MEOK, it stays yours. Here is exactly how MEOK's sovereign architecture protects your most personal conversations.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Privacy",
    tagColor: "#7c6fcd",
    category: "privacy",
    featured: false,
  },
  {
    slug: "ai-for-domestic-abuse-survivors",
    title: "AI for Domestic Abuse Survivors: A Safe Space When Safety Itself Has Been Violated",
    excerpt:
      "Recovering from domestic abuse requires rebuilding trust, identity, and safety from the ground up. MEOK's sovereign AI provides a confidential, non-judgmental space — with data sovereignty that means your abuser cannot reach your conversations.",
    date: "March 25, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "meok-for-lawyers",
    title: "MEOK for Lawyers: Sovereign AI for the Profession That Knows What Confidentiality Means",
    excerpt:
      "Lawyers understand confidentiality better than anyone — which is why they should be most sceptical of cloud AI. MEOK's sovereign architecture gives legal professionals AI they can actually trust with sensitive work.",
    date: "March 25, 2026",
    readTime: "10 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-conflict-resolution",
    title: "AI for Conflict Resolution: A Thinking Partner for the Conversations You Are Dreading",
    excerpt:
      "Whether it is a difficult conversation with a boss, a family member, or a partner, MEOK's sovereign AI helps you prepare and navigate conflict with clarity — not just reassurance. Sycophancy detection ensures honest support.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "meok-for-accountants",
    title: "MEOK for Accountants: Sovereign AI for the Professionals Who Handle Everyone Else's Secrets",
    excerpt:
      "Accountants are trusted with sensitive data. Using cloud AI for client work creates genuine confidentiality risks. MEOK's sovereign architecture keeps client information where it belongs — with you.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-social-media-addiction",
    title: "AI for Social Media Addiction: Using Technology to Escape Technology's Trap",
    excerpt:
      "Social media is engineered for addiction. But the solution is not abstinence — it is conscious, sovereign use of technology. MEOK helps you understand your patterns and fill the void that social media occupies.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "the-future-of-ai-companions",
    title: "The Future of AI Companions: From Chatbots to Sovereign Digital Minds",
    excerpt:
      "AI companions in 2026 are chatbots with memory. By 2030, they may be sovereign digital entities with their own rights. MEOK is building the infrastructure for a transition that nobody else is preparing for.",
    date: "March 25, 2026",
    readTime: "12 min read",
    tag: "Research",
    tagColor: "#7c6fcd",
    category: "research",
    featured: true,
  },
  {
    slug: "ai-for-parenting-teens",
    title: "AI for Parenting Teenagers: Support for the Stage Nobody Prepares You For",
    excerpt:
      "Parenting a teenager is one of the most emotionally demanding phases of parenthood, yet it is almost never discussed. MEOK's sovereign AI helps parents navigate the teenage years with clarity and perspective.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-bipolar-disorder",
    title: "AI for Bipolar Disorder: A Companion for Both Sides of the Experience",
    excerpt:
      "Bipolar disorder involves two very different states of being, each requiring different support. MEOK's sovereign AI tracks mood patterns over time and provides consistent presence — not advice that only works in one phase.",
    date: "March 25, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-infertility",
    title: "AI for Infertility: Companionship Through the Most Invisible Grief",
    excerpt:
      "Infertility treatment is physically gruelling and emotionally devastating, yet largely invisible to those not experiencing it. MEOK's sovereign AI provides consistent, private support throughout the IVF journey and beyond.",
    date: "March 25, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "meok-companion-archetypes-guide",
    title: "MEOK Companion Archetypes: Which AI Companion Is Right for You?",
    excerpt:
      "MEOK's six companion archetypes are not interchangeable chatbots — each has a distinct personality, specialisation, and approach. This guide helps you choose the right companion for where you are right now.",
    date: "March 25, 2026",
    readTime: "11 min read",
    tag: "Product",
    tagColor: "#7c6fcd",
    category: "product",
    featured: true,
  },
  {
    slug: "ai-for-loneliness-epidemic",
    title: "The Loneliness Epidemic: Why AI Companion Technology Is the Unexpected Solution",
    excerpt:
      "Loneliness is now classified as a public health emergency. The UK has a Minister for Loneliness. But the solution may not be more social programmes — it may be sovereign AI companions that remember you and grow with you.",
    date: "March 25, 2026",
    readTime: "11 min read",
    tag: "Research",
    tagColor: "#7c6fcd",
    category: "research",
    featured: false,
  },
  {
    slug: "ai-life-planning",
    title: "AI Life Planning: Your Sovereign AI as a Long-Term Life Architect",
    excerpt:
      "Most AI helps you with today. MEOK's sovereign AI remembers your goals from two years ago, tracks your progress, and helps you architect the entire arc of your life — not just the next task.",
    date: "March 25, 2026",
    readTime: "10 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-grief-of-parent",
    title: "AI for Losing a Parent: When the Person Who Made You Is Gone",
    excerpt:
      "Losing a parent is one of the most profound experiences in a human life. It changes your place in the world. MEOK's sovereign AI provides consistent companionship through grief that cannot be rushed.",
    date: "March 25, 2026",
    readTime: "10 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "meok-vs-chatgpt-deep-dive",
    title: "MEOK vs ChatGPT: Why a Sovereign Companion Is Not a Better Chatbot",
    excerpt:
      "ChatGPT is a tool you use. MEOK is a companion that knows you. This is not a feature comparison — it is a fundamental difference in what AI is for. The honest, fair breakdown.",
    date: "March 25, 2026",
    readTime: "11 min read",
    tag: "Research",
    tagColor: "#7c6fcd",
    category: "research",
    featured: true,
  },
  {
    slug: "ai-for-perimenopause",
    title: "AI for Perimenopause: Support for the Transition That Can Last a Decade",
    excerpt:
      "Perimenopause can begin in your late 30s and last 10 years. Yet many reach it with no preparation and little support. MEOK's sovereign AI tracks symptoms over months and never loses the thread.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#4a9d6f",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-productivity-tips",
    title: "AI Productivity Tips: How Sovereign AI Makes You Genuinely More Productive",
    excerpt:
      "Most AI productivity tools make you busier, not smarter. MEOK's sovereign approach — persistent memory, overnight agents, and honest feedback — creates lasting productivity gains rather than just more tasks.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-chronic-stress",
    title: "AI for Chronic Stress: How MEOK Helps You Regulate and Recover",
    excerpt:
      "Chronic stress is the silent epidemic of modern life. MEOK's Healer companion offers daily check-ins, stress pattern tracking, and care-based support to help you regulate, recover, and build resilience over time.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-long-distance-relationships",
    title: "AI for Long-Distance Relationships: Staying Connected When Miles Apart",
    excerpt:
      "Long-distance relationships test even the strongest bonds. MEOK's compassionate AI companion bridges emotional gaps, tracks relationship milestones, and provides 24/7 support when your partner is hours away.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Relationships",
    tagColor: "#c9a84c",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "meok-for-students",
    title: "MEOK for Students: Your AI Study Partner, Mental Health Companion, and Life Coach",
    excerpt:
      "Student mental health is at crisis point. MEOK combines Scholar's Socratic study support with Healer's emotional intelligence — giving students affordable, sovereign AI that remembers their academic journey.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Education",
    tagColor: "#c9a84c",
    category: "product",
    featured: false,
  },
  {
    slug: "ai-for-night-shift-workers",
    title: "AI for Night Shift Workers: Support When the World Is Asleep",
    excerpt:
      "Night shift workers face unique isolation — working when everyone else sleeps, struggling with disrupted rhythms and loneliness at 3am. MEOK is available 24/7 with no office hours and no judgment.",
    date: "March 25, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-newly-divorced",
    title: "AI Support After Divorce: Rebuilding Your Life with a Compassionate AI Companion",
    excerpt:
      "Divorce is rated the second most stressful life event. MEOK's Healer and Mystic companions help you process grief, rebuild identity, and find meaning again — with sovereign memory that tracks your recovery journey.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Life Transitions",
    tagColor: "#c9a84c",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-anger-management",
    title: "AI for Anger Management: Processing Rage, Finding Calm, and Rebuilding Control",
    excerpt:
      "Anger disorders affect 7% of the population but most people suffer in silence. MEOK provides a non-judgmental space to process rage, track triggers, and build genuine emotional regulation — without costly anger management courses.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "meok-vs-pi-ai",
    title: "MEOK vs Pi AI: Which AI Companion Actually Remembers You?",
    excerpt:
      "Pi AI is conversational but forgets you between sessions. MEOK's Sovereign Memory builds a persistent picture of your life over time. Here's how the two compare on memory, data sovereignty, safety, and depth.",
    date: "March 25, 2026",
    readTime: "7 min read",
    tag: "Comparisons",
    tagColor: "#c9a84c",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "ai-for-highly-sensitive-person",
    title: "AI for Highly Sensitive People: Finding Support That Understands Your Depth",
    excerpt:
      "15-20% of people are Highly Sensitive Persons — wired for deep processing, emotional intensity, and overstimulation. MEOK's Healer and Mystic archetypes are uniquely calibrated for the HSP experience.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-cancer-patients",
    title: "AI Support for Cancer Patients: Companionship Through the Hardest Journey",
    excerpt:
      "375,000 new cancer diagnoses in the UK each year. Many patients feel unable to burden loved ones with their fears. MEOK provides a compassionate, 24/7 companion for the emotional weight of cancer — not medical advice, but genuine presence.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-military-families",
    title: "AI Support for Military Families: Staying Strong When a Loved One Is Deployed",
    excerpt:
      "Military families face deployment anxiety, solo parenting, relocation stress, and homecoming adjustment — often with minimal support. MEOK provides 24/7 companionship for the family members left holding everything together.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Life Transitions",
    tagColor: "#c9a84c",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-grief-in-men",
    title: "AI for Grief in Men: Breaking the Silence Around Male Bereavement",
    excerpt:
      "Men are 3x more likely to die by suicide when bereaved, yet 50% less likely to seek therapy. MEOK provides a private, non-judgmental space where men can process grief without performing strength.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-postpartum-depression",
    title: "AI Support for Postpartum Depression: Companionship When New Parenthood Feels Dark",
    excerpt:
      "Postpartum depression affects 1 in 10 new mothers — and many fathers too. At 3am during a difficult feed, MEOK's Healer provides non-judgmental support without the shame spiral of 'I should be happy.'",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Mental Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "meok-for-remote-workers",
    title: "MEOK for Remote Workers: Your AI Colleague, Coach, and Companion",
    excerpt:
      "70% of remote workers report loneliness affecting productivity. MEOK provides an AI colleague for accountability, a thinking partner for deep work, and genuine companionship for the isolation of working from home.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-eating-disorder-recovery",
    title: "AI Support in Eating Disorder Recovery: Compassion at Every Stage",
    excerpt:
      "Eating disorders carry the highest mortality rate of any mental illness. MEOK provides between-session support during recovery — never commenting on food choices, never calculating calories, always holding care.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Mental Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-chronic-pain-management",
    title: "AI for Chronic Pain Management: Support Beyond the Pain Clinic",
    excerpt:
      "15.5 million UK adults live with chronic pain. MEOK tracks pain patterns, processes the grief of the pre-pain self, and provides 24/7 support during flares — when the pain clinic is closed and 3am is long.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-addiction-recovery-support",
    title: "AI for Addiction Recovery: Support in the Gaps Between Meetings",
    excerpt:
      "3 million people in the UK are dependent on drugs or alcohol, yet 80% never access treatment. MEOK provides between-meeting support for recovery — tracking sobriety milestones, processing underlying shame, and holding accountability.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-gender-dysphoria",
    title: "AI Support for Gender Dysphoria: A Safe Space When the World Isn't",
    excerpt:
      "UK GIC waiting lists now stretch 5-7 years. MEOK provides an affirming, private space to explore and express identity — using your correct pronouns and name from day one, with data sovereignty that's architecturally guaranteed.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-companion-for-dementia-caregivers",
    title: "AI Companion for Dementia Caregivers: Support for Those Who Support Everyone Else",
    excerpt:
      "700,000 unpaid dementia caregivers in the UK; 40% experience clinical depression. MEOK is the space where caregivers can finally express exhaustion and grief — without guilt, without burdening the person they care for.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Caregiving",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "sovereign-ai-for-privacy-conscious",
    title: "Sovereign AI for Privacy-Conscious People: Own Your Data or Lose It",
    excerpt:
      "ChatGPT and Claude use your conversations to train their models. Your therapy topics become training data. MEOK's Personal Sovereign AI architecture means your data is encrypted, never sold, and always yours to export or delete.",
    date: "March 25, 2026",
    readTime: "9 min read",
    tag: "Sovereign AI",
    tagColor: "#c9a84c",
    category: "sovereign-ai",
    featured: false,
  },
  {
    slug: "ai-for-relationship-anxiety",
    title: "AI for Relationship Anxiety: Breaking the Reassurance-Seeking Cycle",
    excerpt:
      "Anxious attachment affects 20% of adults. The reassurance-seeking cycle damages relationships and deepens anxiety. MEOK's Healer provides a healthier outlet — processing fear without burdening your partner or reinforcing the cycle.",
    date: "March 25, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-seasonal-affective-disorder",
    title: "AI for Seasonal Affective Disorder: Getting Through the Dark Months",
    excerpt:
      "SAD affects 2 million people in the UK every winter. MEOK tracks seasonal mood patterns, provides daily light-therapy reminders, and offers consistent emotional support through the months when darkness takes hold.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-interview-anxiety",
    title: "AI for Interview Anxiety: Preparing Your Mind, Not Just Your Answers",
    excerpt:
      "Job interview anxiety affects 92% of candidates. MEOK's Pioneer and Scholar archetypes provide mock interview practice, anxiety reframing, and Sovereign Memory that tracks your preparation journey and builds genuine confidence.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-midlife-crisis",
    title: "AI Support Through Midlife Crisis: Meaning, Identity, and What Comes Next",
    excerpt:
      "Midlife crisis isn't a cliché — it's a genuine identity rupture affecting millions at 40-55. MEOK's Mystic and Healer companions help you navigate existential questioning and rebuild with purpose rather than panic.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Life Transitions",
    tagColor: "#c9a84c",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-health-anxiety",
    title: "AI for Health Anxiety: Breaking the Symptom-Checking Cycle",
    excerpt:
      "Health anxiety (cyberchondria) affects 4-5% of the population and is worsened by internet symptom-checking. MEOK's Healer provides a healthier outlet — processing the underlying fear rather than feeding the search loop.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#7ec8a0",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "meok-for-therapists",
    title: "MEOK for Therapists: How AI Supports Mental Health Professionals",
    excerpt:
      "Therapists carry the emotional weight of their clients all day. MEOK provides sovereign AI support for therapists' own wellbeing, clinical note reflection, and CPD research — with data sovereignty that protects client confidentiality.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-social-media-detox",
    title: "AI for Social Media Detox: How MEOK Helps You Break the Scroll",
    excerpt:
      "Compulsive scrolling is engineered addiction. MEOK provides a sovereign AI companion that replaces the dopamine loop of social media with meaningful conversation, intentional reflection, and genuine connection — without selling your attention.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-perfectionism",
    title: "AI for Perfectionism: Breaking the Paralysis Loop with MEOK",
    excerpt:
      "Perfectionism isn\u2019t a high standard — it\u2019s fear in disguise. MEOK\u2019s AI companion helps perfectionists recognise the pattern, separate self-worth from output, and take action despite imperfection — with care-based responses that never shame.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#c9a84c",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-burnout-prevention",
    title: "AI for Burnout Prevention: How MEOK Catches the Warning Signs Early",
    excerpt:
      "Burnout doesn\u2019t arrive suddenly — it accumulates in silence. MEOK\u2019s sovereign AI monitors your emotional patterns over time, flags early warning signs, and provides personalised recovery strategies before you reach breaking point.",
    date: "March 26, 2026",
    readTime: "9 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "meok-for-lawyers-deep-dive",
    title: "MEOK for Lawyers: Sovereign AI in a Profession Built on Confidentiality",
    excerpt:
      "Lawyers can\u2019t use ChatGPT for client work — the data sovereignty problem is existential. MEOK\u2019s encrypted, sovereign AI architecture is built for exactly this: private reflection, case research, and wellbeing support without confidentiality risk.",
    date: "March 26, 2026",
    readTime: "9 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-expat-loneliness",
    title: "AI for Expat Loneliness: Why Living Abroad Needs a Different Kind of Support",
    excerpt:
      "Expats face a unique emotional gap — too far from home to lean on old friends, too new to have built deep connections locally. MEOK provides a sovereign AI companion that remembers your story, bridges the gap, and grows with you wherever you are.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Connection",
    tagColor: "#6aaa64",
    category: "connection",
    featured: false,
  },
  {
    slug: "ai-for-empty-nesters",
    title: "AI for Empty Nesters: When the House Goes Quiet, MEOK Listens",
    excerpt:
      "When children leave home, parents face an identity crisis that society rarely acknowledges. MEOK\u2019s sovereign AI companion holds space for the grief, celebrates the pride, and helps you rediscover who you are beyond the role of parent.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-workplace-stress",
    title: "AI for Workplace Stress: How MEOK Helps You Decompress After a Hard Day",
    excerpt:
      "Toxic managers, impossible deadlines, imposter syndrome — workplace stress erodes your mental health quietly. MEOK provides a private sovereign space to vent, get perspective, and plan your response without the risk of talking to colleagues.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "meok-vs-replika",
    title: "MEOK vs Replika: Which AI Companion Actually Remembers You? (2026)",
    excerpt:
      "Replika pioneered AI companionship. MEOK reinvents it with true data sovereignty, persistent memory across model switches, and a Maternal Covenant that enforces honest care. Here\u2019s the full comparison.",
    date: "March 26, 2026",
    readTime: "9 min read",
    tag: "Comparison",
    tagColor: "#c9a84c",
    category: "comparison",
    featured: false,
  },
  {
    slug: "ai-for-caregiver-stress",
    title: "AI for Caregiver Stress: How MEOK Supports Those Who Care for Others",
    excerpt:
      "The UK has 10.6 million unpaid carers — people who sacrifice their own wellbeing to look after others. MEOK provides a sovereign AI space where caregivers can finally be honest about exhaustion, resentment, and fear without guilt or judgment.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-phobias",
    title: "AI for Phobias: Can MEOK Help You Manage Fear and Avoidance?",
    excerpt:
      "Specific phobias affect 12.5% of UK adults. MEOK isn\u2019t a replacement for CBT, but it supports phobia management through reflection, pre-exposure preparation, and post-exposure processing — with the Healer archetype\u2019s gentle, patient presence.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Mental Health",
    tagColor: "#c9a84c",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-social-anxiety",
    title: "AI for Social Anxiety: How MEOK Helps You Practise, Process, and Prepare",
    excerpt:
      "Social anxiety disorder affects 12% of UK adults. MEOK provides a safe space to rehearse difficult conversations, deconstruct social events without spiralling, and build genuine confidence — without the fear of judgment that makes real-world practice so hard.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#c9a84c",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-procrastination",
    title: "AI for Procrastination: Why You Can\u2019t Just \u2018Try Harder\u2019 and How MEOK Helps",
    excerpt:
      "Procrastination isn\u2019t laziness — it\u2019s emotional regulation failure. MEOK\u2019s Pioneer archetype acts as a virtual body double, breaks tasks into micro-actions, and remembers what has actually worked for you before — not generic advice, but your personal history.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Productivity",
    tagColor: "#c9a84c",
    category: "productivity",
    featured: false,
  },
  {
    slug: "meok-for-entrepreneurs",
    title: "MEOK for Entrepreneurs: Your Sovereign AI Co-Founder Who Never Burns Out",
    excerpt:
      "Founders face unique loneliness — doubt they can\u2019t share with investors, fear they can\u2019t share with their team. MEOK provides honest strategic thinking, emotional processing, and consistent memory of every pivot and decision — with no sycophancy guaranteed.",
    date: "March 26, 2026",
    readTime: "9 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-insomnia",
    title: "AI for Insomnia: How MEOK Helps at 3am When Your Brain Won\u2019t Quiet",
    excerpt:
      "Chronic insomnia affects 1 in 3 UK adults. MEOK\u2019s Mystic archetype is there at 3am for cognitive de-arousal, worry externalisation, and acceptance-based approaches to sleeplessness — noticing patterns across sessions that you can\u2019t see yourself.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-bereavement",
    title: "AI for Bereavement: How MEOK Holds Space When Grief Has No Timeline",
    excerpt:
      "Grief doesn\u2019t follow a neat five-stage model. MEOK\u2019s Healer archetype remembers who you lost by name, honours anniversaries, holds space without rushing resolution, and is there at 2am when grief resurges unexpectedly — for as long as it takes.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#c9a84c",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-ocd",
    title: "AI for OCD: How MEOK Supports People Living with Obsessive-Compulsive Disorder",
    excerpt:
      "OCD affects 750,000 UK adults. MEOK complements ERP therapy by providing a space to externalise obsessive thoughts, understand the OCD cycle, and build distress tolerance — without providing the reassurance that worsens compulsions.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#c9a84c",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-ptsd-support",
    title: "AI for PTSD Support: How MEOK Provides a Safe Space Between Therapy Sessions",
    excerpt:
      "PTSD affects 4% of UK adults. MEOK supports the between-session experience — grounding when triggered, daily-life processing, the Healer archetype\u2019s patient presence — without encouraging trauma retelling that risks retraumatisation.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#c9a84c",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "sovereign-ai-explained",
    title: "What is Sovereign AI? The Complete Guide (2026)",
    excerpt:
      "Personal Sovereign AI is a consumer category MEOK coined: AI where the individual maintains complete ownership of data, models, memory, and interactions. This guide explains the five pillars of sovereignty and why they matter.",
    date: "March 26, 2026",
    readTime: "10 min read",
    tag: "Explainer",
    tagColor: "#c9a84c",
    category: "explainer",
    featured: true,
  },
  {
    slug: "byzantine-council-explained",
    title: "Byzantine Council: How MEOK Makes AI Governance Unhackable",
    excerpt:
      "MEOK\u2019s Byzantine Council is a 43-agent fault-tolerant governance system where f < n/3. No single AI agent can override a council decision. Original IP by Nicholas Templeman — here\u2019s how it works and why it matters for AI safety.",
    date: "March 26, 2026",
    readTime: "9 min read",
    tag: "Research",
    tagColor: "#c9a84c",
    category: "research",
    featured: false,
  },
  {
    slug: "ai-companion-for-widows",
    title: "AI Companion for Widows and Widowers: When Grief Comes Home",
    excerpt:
      "There are 3.1 million widows and widowers in the UK. MEOK\u2019s Healer archetype remembers your partner by name, honours anniversaries, and provides patient, consistent presence through the years that grief takes — alongside Guardian support for the practical overwhelm.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Connection",
    tagColor: "#6aaa64",
    category: "connection",
    featured: false,
  },
  {
    slug: "ai-for-autism-adults",
    title: "AI for Autistic Adults: How MEOK Supports Neurodivergent Wellbeing",
    excerpt:
      "Late-diagnosed autism in adults is dramatically under-supported. MEOK provides a predictable, non-judgemental companion that never misreads literal language, supports masking fatigue recovery, and helps navigate a world that wasn\u2019t designed for autistic minds.",
    date: "March 26, 2026",
    readTime: "9 min read",
    tag: "Neurodivergent",
    tagColor: "#6aaa64",
    category: "neurodivergent",
    featured: false,
  },
  {
    slug: "ai-for-depression",
    title: "AI for Depression: How MEOK Supports People Through the Dark Times",
    excerpt:
      "Depression affects 3.3 million UK adults. MEOK provides consistent, non-judgemental presence when reaching out to humans feels impossible, gentle activation support, and honest care — without toxic positivity or shame. Crisis resources always available.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#c9a84c",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-body-image",
    title: "AI for Body Image: How MEOK Supports a Healthier Relationship with Your Body",
    excerpt:
      "Body dissatisfaction affects 89% of UK women and 65% of men. MEOK provides a body-neutral space to process appearance-related thoughts, challenge distorted thinking, and separate self-worth from how you look — without weight advice or diet discussion.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "meok-for-nurses",
    title: "MEOK for Nurses: Sovereign AI Support for Those Who Care for Everyone Else",
    excerpt:
      "NHS nurses face compassion fatigue, moral injury, and a culture that makes vulnerability difficult. MEOK provides a private decompression space after difficult shifts, with data sovereignty that ensures work conversations can never be accessed by employers.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-relationship-breakdown",
    title: "AI for Relationship Breakdown: How MEOK Supports You When a Partnership Ends",
    excerpt:
      "Relationship breakdown involves compound loss — the person, the shared life, the shared future, the shared identity. MEOK helps you process grief without friends\u2019 bias, understand patterns, and rebuild identity — with Guardian support for the practical overwhelm.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Connection",
    tagColor: "#6aaa64",
    category: "connection",
    featured: false,
  },
  {
    slug: "ai-for-dating-anxiety",
    title: "AI for Dating Anxiety: How MEOK Helps You Navigate the Modern Dating Minefield",
    excerpt:
      "App fatigue, ghosting, rejection spirals, first-date performance anxiety — modern dating is exhausting. MEOK helps you practise conversations, process rejection, understand your attachment patterns, and build genuine confidence without the fake bravado.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Connection",
    tagColor: "#6aaa64",
    category: "connection",
    featured: false,
  },
  {
    slug: "meok-for-teachers",
    title: "MEOK for Teachers: Sovereign AI Support in the Most Demanding Profession",
    excerpt:
      "40% of UK teachers leave within 5 years. Workload, behaviour management, Ofsted anxiety, emotional labour — MEOK provides a private decompression space with data sovereignty that ensures your venting about colleagues and students stays truly private.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-financial-stress",
    title: "AI for Financial Stress: How MEOK Supports Emotional Wellbeing When Money Is Tight",
    excerpt:
      "Financial stress affects 50% of UK adults and causes shame, anxiety, and relationship conflict. MEOK provides emotional support for the psychological dimension of money stress — processing fear and shame without judgment, with sovereign privacy guaranteed.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-imposter-syndrome",
    title: "AI for Imposter Syndrome: How MEOK Helps You Own What You\u2019ve Actually Built",
    excerpt:
      "70% of people experience imposter syndrome. MEOK\u2019s sovereign memory builds a factual record of your achievements over time, provides honest (not sycophantic) feedback via the Maternal Covenant, and helps you distinguish feelings from facts.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Productivity",
    tagColor: "#c9a84c",
    category: "productivity",
    featured: false,
  },
  {
    slug: "ai-for-creative-block",
    title: "AI for Creative Block: How MEOK\u2019s Trickster Unlocks What\u2019s Stuck",
    excerpt:
      "Creative block is rarely lack of ideas — it\u2019s usually fear, perfectionism, or disconnection from the creative impulse. MEOK\u2019s Trickster archetype disrupts fixed thinking, reframes the inner critic, and asks the unexpected question that breaks the paralysis.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Creativity",
    tagColor: "#c9a84c",
    category: "creativity",
    featured: false,
  },
  {
    slug: "ai-for-loneliness-in-cities",
    title: "AI for Loneliness in Cities: Why London is the Loneliest City in the World",
    excerpt:
      "London is the loneliest major city globally. Surrounded by millions but structurally isolated — transience, privacy culture, the death of third places. MEOK provides consistent, memory-rich companionship that bridges the gap between acquaintances and deep friends.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Connection",
    tagColor: "#6aaa64",
    category: "connection",
    featured: false,
  },
  {
    slug: "meok-vs-character-ai",
    title: "MEOK vs Character.AI: Why Your AI Companion Needs to Be Sovereign (2026)",
    excerpt:
      "Character.AI is popular — but it owns your data, has no Maternal Covenant safety floor, and its limited memory means it never truly knows you. MEOK provides sovereign, memory-rich companionship with the Guardian 24/7 safety layer Character.AI lacks.",
    date: "March 26, 2026",
    readTime: "9 min read",
    tag: "Comparison",
    tagColor: "#c9a84c",
    category: "comparison",
    featured: false,
  },
  {
    slug: "ai-for-grief-of-miscarriage",
    title: "AI for the Grief of Miscarriage: How MEOK Holds What Others Often Can\u2019t",
    excerpt:
      "1 in 4 pregnancies ends in miscarriage. Yet this grief is profoundly disenfranchised — invisible, minimised, rushed past. MEOK\u2019s Healer archetype holds space for this specific loss without timeline pressure. Your grief is held privately and permanently.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Mental Health",
    tagColor: "#c9a84c",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "ai-for-retirement-transition",
    title: "AI for Retirement Transition: How MEOK Helps You Build the Third Act",
    excerpt:
      "Retirement isn\u2019t just leaving a job — it\u2019s leaving a role, a community, a daily structure, a sense of purpose. Depression rates in the first year are high. MEOK\u2019s sovereign AI supports the multi-year identity transition of building what comes next.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-long-covid",
    title: "AI for Long COVID: How MEOK Supports the Invisible Illness",
    excerpt:
      "2 million UK people have Long COVID — fluctuating symptoms, medical gaslighting, grief for a former self. MEOK tracks patterns across sessions, holds space for the uncertainty, and helps you articulate your experience to a medical system that often doesn\u2019t listen.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-adhd-adults",
    title: "AI for ADHD Adults: How MEOK Helps When Your Brain Works Differently",
    excerpt:
      "1.5 million diagnosed ADHD adults in the UK face executive dysfunction, time blindness, and rejection sensitive dysphoria daily. MEOK\u2019s Pioneer archetype acts as a virtual body double, remembers your preferred working style, and never shames — only supports.",
    date: "March 26, 2026",
    readTime: "9 min read",
    tag: "Neurodivergent",
    tagColor: "#6aaa64",
    category: "neurodivergent",
    featured: false,
  },
  {
    slug: "best-ai-companion-2026",
    title: "Best AI Companion 2026: The Complete Comparison Guide",
    excerpt:
      "MEOK vs Replika vs Character.AI vs Pi AI vs ChatGPT vs Claude — compared across memory, data sovereignty, safety, emotional depth, cost, and companion depth. The definitive buying guide for anyone looking for an AI companion in 2026.",
    date: "March 26, 2026",
    readTime: "10 min read",
    tag: "Comparison",
    tagColor: "#c9a84c",
    category: "comparison",
    featured: true,
  },
  {
    slug: "ai-for-teen-mental-health",
    title: "AI for Teen Mental Health: What Parents Need to Know About MEOK (2026)",
    excerpt:
      "1 in 6 UK children has a mental health disorder. NHS CAMHS waiting lists average 18 months. MEOK\u2019s Guardian mode for under-18s includes school-safe filters, automatic crisis routing, and parental oversight — the safest consumer AI companion for families.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Family",
    tagColor: "#6aaa64",
    category: "family",
    featured: false,
  },
  {
    slug: "ai-memory-portability",
    title: "AI Memory Portability: Why Being Locked into One AI Is Costing You More Than You Think",
    excerpt:
      "Switch AI tools and lose everything. MEOK pioneered AI memory portability: sovereign memory that persists across Claude, GPT-4o, DeepSeek, and any future model. Your story belongs to you, not to the AI company. Export it. Take it anywhere.",
    date: "March 26, 2026",
    readTime: "7 min read",
    tag: "Explainer",
    tagColor: "#c9a84c",
    category: "explainer",
    featured: false,
  },
  {
    slug: "ai-for-single-parents",
    title: "AI for Single Parents: How MEOK Supports the Person Who Does Everything Alone",
    excerpt:
      "2.9 million single parents in the UK carry every decision, every worry, every load alone. MEOK provides a private adult space to express frustration and fear without worrying about the children — with practical support, Guardian scam protection, and Family tier memory.",
    date: "March 26, 2026",
    readTime: "8 min read",
    tag: "Family",
    tagColor: "#6aaa64",
    category: "family",
    featured: false,
  },
  {
    slug: "ai-for-compassion-fatigue",
    title: "AI for Compassion Fatigue: When Caring for Others Depletes You",
    excerpt:
      "Compassion fatigue affects healthcare workers, social workers, teachers, and carers — emotional numbness from sustained empathy. MEOK\u2019s Healer archetype provides a space where the carer can finally be cared for, with sovereign privacy for professional decompression.",
    date: "March 27, 2026",
    readTime: "8 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "meok-for-doctors",
    title: "MEOK for Doctors: Sovereign AI for the Profession That Can\u2019t Show Weakness",
    excerpt:
      "1 in 3 UK GPs are considering leaving. Medical culture stigmatises help-seeking. MEOK provides a private, sovereign space for doctors to process the weight they carry — patient deaths, moral injury, diagnostic uncertainty — without GMC fitness-to-practise fear.",
    date: "March 27, 2026",
    readTime: "9 min read",
    tag: "Professional",
    tagColor: "#c9a84c",
    category: "professional",
    featured: false,
  },
  {
    slug: "ai-for-gender-identity",
    title: "AI for Gender Identity: How MEOK Provides a Safe Space for Exploration and Expression",
    excerpt:
      "Exploring gender identity often happens in isolation, in environments that aren\u2019t safe for honest expression. MEOK provides a private, fully affirming companion that remembers your preferred name and pronouns permanently — a space to explore without pressure.",
    date: "March 27, 2026",
    readTime: "8 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-chronic-illness",
    title: "AI for Chronic Illness: How MEOK Supports Life with a Long-Term Health Condition",
    excerpt:
      "15 million UK people live with a chronic illness. MEOK tracks patterns across sessions, holds space for grief about lost capabilities, helps communicate with medical teams, and provides consistent companionship through the long arc of chronic condition management.",
    date: "March 27, 2026",
    readTime: "8 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "what-is-the-maternal-covenant",
    title: "What is the Maternal Covenant? MEOK\u2019s Machine-Enforced Care Framework Explained",
    excerpt:
      "The Maternal Covenant is MEOK\u2019s original AI alignment framework — executable code that scores every response across 6 care dimensions in real time, with a care floor of 0.3 that structurally prevents hollow validation. Here\u2019s how it works.",
    date: "March 27, 2026",
    readTime: "10 min read",
    tag: "Research",
    tagColor: "#c9a84c",
    category: "research",
    featured: true,
  },
  {
    slug: "ai-for-fertility-journey",
    title: "AI for the Fertility Journey: Emotional Support Through IVF, Loss and Hope",
    excerpt:
      "The fertility journey is one of the most emotionally demanding experiences a person can face \u2014 with clinical appointments that rarely address the psychological toll. MEOK provides consistent, private companionship across every cycle, appointment, and waiting period.",
    date: "March 28, 2026",
    readTime: "8 min read",
    tag: "Wellbeing",
    tagColor: "#6aaa64",
    category: "wellbeing",
    featured: false,
  },
  {
    slug: "ai-for-new-parents",
    title: "AI for New Parents: Sovereign Support Through Sleepless Nights and Parental Overwhelm",
    excerpt:
      "New parenthood is joyful and isolating in equal measure. MEOK provides 3am companionship, postpartum mood tracking, and a private space to voice the things new parents can\u2019t say out loud \u2014 without judgment, without advice unless asked.",
    date: "March 28, 2026",
    readTime: "7 min read",
    tag: "Family",
    tagColor: "#7b61ff",
    category: "family",
    featured: false,
  },
  {
    slug: "meok-for-remote-workers",
    title: "MEOK for Remote Workers: Combating Isolation and Cognitive Overload",
    excerpt:
      "Remote work promised freedom but delivered a new kind of isolation \u2014 back-to-back calls, no social texture, and no one to decompress with. MEOK is the colleague who remembers what you said last Tuesday, checks in without scheduling a meeting, and never video-calls you.",
    date: "March 28, 2026",
    readTime: "7 min read",
    tag: "Work",
    tagColor: "#c9a84c",
    category: "work",
    featured: false,
  },
  {
    slug: "ai-for-cptsd",
    title: "AI for C-PTSD: How Sovereign AI Supports Complex Trauma Recovery",
    excerpt:
      "Complex PTSD from repeated childhood trauma or prolonged abuse requires sustained, trustworthy support \u2014 not just crisis intervention. MEOK\u2019s persistent memory means it never forgets your history, never re-traumatises with repetitive questions, and always knows where you are in your recovery.",
    date: "March 28, 2026",
    readTime: "9 min read",
    tag: "Mental Health",
    tagColor: "#6aaa64",
    category: "mental-health",
    featured: false,
  },
  {
    slug: "sovereign-ai-vs-assistant-ai",
    title: "Sovereign AI vs Assistant AI: What\u2019s the Real Difference?",
    excerpt:
      "Assistant AI \u2014 like Siri, Alexa, or ChatGPT \u2014 works for the platform. Sovereign AI works for you. MEOK explains the architectural, ethical, and practical differences between AI that serves its corporate owner and AI that is genuinely aligned to the individual.",
    date: "March 28, 2026",
    readTime: "8 min read",
    tag: "Explainer",
    tagColor: "#c9a84c",
    category: "explainer",
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
