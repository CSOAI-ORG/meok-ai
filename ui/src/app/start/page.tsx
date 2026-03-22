"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Data ──────────────────────────────────────────────────────────────────────

const START_PATHS = [
  {
    icon: "🥚",
    title: "Find my AI companion",
    description:
      "Take a 7-question quiz. Your companion finds you. Hatch them free in 3 minutes.",
    cta: "Take the quiz",
    href: "/hatch",
    color: "#c9a84c",
    tag: "Most popular · Free to start",
  },
  {
    icon: "🧠",
    title: "Set up my Personal OS",
    description:
      "Memory, morning briefings, care scoring. AI that knows your life — not just your last message.",
    cta: "Explore Personal OS",
    href: "/personal",
    color: "#3B82F6",
    tag: "For individuals",
  },
  {
    icon: "🛡️",
    title: "Protect my family",
    description:
      "Guardian for your children, your elderly parents, your whole household. 24/7 AI safety.",
    cta: "Explore Family OS",
    href: "/family",
    color: "#7BC47F",
    tag: "For families",
  },
  {
    icon: "⚡",
    title: "Transform how I work",
    description:
      "Documents, email, research — with an AI that remembers every project. Work OS changes everything.",
    cta: "Explore Work OS",
    href: "/work",
    color: "#FB923C",
    tag: "For professionals",
  },
] as const;

// ── Page ──────────────────────────────────────────────────────────────────────

export default function StartPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <MarketingNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/50 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Find your starting point
          </span>
          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
          >
            Where do you want to start?
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Four ways in. Pick the one that fits where you are right now — you can always explore the
            others once you&apos;re up and running.
          </p>
        </div>
      </section>

      {/* ── Path cards ────────────────────────────────────────────────────── */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {START_PATHS.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="group relative rounded-3xl p-8 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `2px solid rgba(255,255,255,0.08)`,
                  borderTop: `3px solid ${path.color}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.border = `2px solid ${path.color}45`;
                  (e.currentTarget as HTMLAnchorElement).style.borderTop = `3px solid ${path.color}`;
                  (e.currentTarget as HTMLAnchorElement).style.background = `${path.color}08`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.border = "2px solid rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.borderTop = `3px solid ${path.color}`;
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                {/* Tag */}
                <span
                  className="self-start px-3 py-1 rounded-full text-[10px] font-bold tracking-wide"
                  style={{
                    background: `${path.color}15`,
                    color: path.color,
                    border: `1px solid ${path.color}30`,
                  }}
                >
                  {path.tag}
                </span>

                {/* Icon */}
                <span className="text-5xl leading-none select-none">{path.icon}</span>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-xl font-black text-white mb-3 leading-snug">
                    {path.title}
                  </h2>
                  <p className="text-sm text-white/55 leading-relaxed">{path.description}</p>
                </div>

                {/* CTA */}
                <div
                  className="inline-flex items-center gap-2 font-black text-sm rounded-full px-5 py-2.5 self-start transition-all group-hover:gap-3"
                  style={{
                    background: `${path.color}15`,
                    color: path.color,
                    border: `1px solid ${path.color}30`,
                  }}
                >
                  {path.cta} <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>

          {/* Not sure CTA */}
          <div className="mt-10 text-center">
            <div
              className="inline-block rounded-2xl px-8 py-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-white/45 text-sm mb-3">
                Still not sure which path is right for you?
              </p>
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 font-bold text-sm text-[#c9a84c] hover:text-white transition-colors"
              >
                Talk to MEOK <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What all products share ────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">
              In every MEOK product
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}
            >
              Three things that never change.
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🧠",
                title: "Sovereign Memory",
                desc: "Every product is backed by the same encrypted memory vault. Nothing is forgotten. Nothing is shared.",
                color: "#c9a84c",
              },
              {
                icon: "🔐",
                title: "Your data, your keys",
                desc: "MEOK cannot train on your conversations. Architecturally enforced. Not a promise in terms of service.",
                color: "#A78BFA",
              },
              {
                icon: "💛",
                title: "The Maternal Covenant",
                desc: "Every response is scored across 6 care dimensions before it reaches you. Your wellbeing over your engagement.",
                color: "#7BC47F",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-black text-white text-base mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-5xl mb-5 select-none" aria-hidden="true">🥚</div>
          <h2
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
          >
            Free to start. Always.
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            No credit card. No commitment. Three minutes to hatch. The companion you start with can
            grow with you for years.
          </p>
          <Link
            href="/hatch"
            className="inline-flex items-center gap-2 font-black rounded-full px-10 py-4 text-base transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: "#c9a84c",
              color: "#1a1a2e",
              boxShadow: "0 8px 32px rgba(201,168,76,0.20)",
            }}
          >
            Hatch your AI free <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-white/20 text-xs mt-5">
            Free forever · Sovereign by design · 3 minutes to hatch
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
