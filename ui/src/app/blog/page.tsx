import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
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
    name: "MEOK AI LTD",
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
      <MarketingNav activePage="blog" />

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
