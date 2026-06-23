"use client";

import Link from "next/link";
import { useState } from "react";
import { Share2, Twitter, Linkedin, Link2, Check } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  tagColor: string;
  category?: string;
  featured?: boolean;
}

// ── Reading time badge ────────────────────────────────────────────────────────

function calcReadTime(excerpt: string): string {
  const wordCount = Math.ceil((excerpt.length * 5) / 200);
  return `${wordCount} min read`;
}

// ── Share overlay ─────────────────────────────────────────────────────────────

function ShareRow({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${slug}`
      : `https://meok.ai/blog/${slug}`;
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleLink(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLink}
        title="Share on X / Twitter"
        className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:scale-110"
        style={{ background: "rgba(201,168,76,0.12)", color: "#c9a84c" }}
      >
        <Twitter size={13} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLink}
        title="Share on LinkedIn"
        className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:scale-110"
        style={{ background: "rgba(201,168,76,0.12)", color: "#c9a84c" }}
      >
        <Linkedin size={13} />
      </a>
      <button type="button"
        onClick={handleCopy}
        title="Copy link"
        className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:scale-110"
        style={{ background: "rgba(201,168,76,0.12)", color: "#c9a84c" }}
      >
        {copied ? <Check size={13} /> : <Link2 size={13} />}
      </button>
    </div>
  );
}

// ── Post card ─────────────────────────────────────────────────────────────────

export function PostCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const estimatedReadTime = calcReadTime(post.excerpt);

  return (
    <article
      className={`group rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col ${featured ? "md:flex-row" : ""}`}
      style={{ background: "#1a1a2e", border: "1px solid rgba(245,240,232,0.07)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
          {/* 90.3 Reading time estimate badge */}
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{
              color: "rgba(201,168,76,0.85)",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.18)",
            }}
          >
            {estimatedReadTime}
          </span>
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

        {/* Bottom row: read link + share buttons */}
        <div className="flex items-center justify-between mt-auto gap-3">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold transition-all group-hover:gap-3"
            style={{ color: "#c9a84c" }}
          >
            Read article →
          </Link>

          {/* 90.4 Share buttons — visible on hover */}
          <div
            className="transition-all duration-200"
            style={{ opacity: hovered ? 1 : 0, pointerEvents: hovered ? "auto" : "none" }}
          >
            <ShareRow slug={post.slug} title={post.title} />
          </div>
        </div>
      </div>
    </article>
  );
}
