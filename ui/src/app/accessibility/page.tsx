import Link from "next/link";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility | MEOK",
  description:
    "MEOK's accessibility commitment. Built for clarity, neurodivergent-friendly design, WCAG 2.1 AA compliance, and zero manipulative UX.",
  openGraph: {
    title: "Accessibility at MEOK",
    description:
      "We built this for the people who needed it most. That means everyone.",
    url: "https://meok.ai/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <MarketingNav />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-6">
            Accessibility
          </span>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight mb-6">
            Accessibility{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              at MEOK
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-xl mx-auto">
            We built this for the people who needed it most.
            <br />
            That means everyone.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WCAG COMMITMENT
      ═══════════════════════════════════════════════ */}
      <section className="py-16 px-6 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.07), rgba(201,168,76,0.03))",
              border: "1.5px solid rgba(201,168,76,0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#c9a84c]/10 flex-shrink-0">
                <span className="text-lg">♿</span>
              </div>
              <h2 className="text-xl font-black text-white">
                Our WCAG commitment
              </h2>
            </div>
            <p className="text-white/60 leading-relaxed text-sm mb-4">
              We aim for{" "}
              <span className="text-[#c9a84c] font-bold">
                WCAG 2.1 AA compliance
              </span>{" "}
              across all MEOK web properties. This is a living standard — we
              review and improve our conformance with every major release.
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              WCAG 2.1 AA is the internationally recognised standard for
              accessible web content. It covers contrast ratios, keyboard
              navigation, screen reader support, and more.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          AVAILABLE NOW
      ═══════════════════════════════════════════════ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8">
            What&apos;s available now
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "⌨️",
                title: "Keyboard navigation",
                desc: "Every interactive element is reachable and operable with a keyboard. No mouse required.",
              },
              {
                icon: "🔊",
                title: "Screen reader support",
                desc: "Semantic HTML and ARIA labels are used throughout. Pages are structured for assistive technology.",
              },
              {
                icon: "🌓",
                title: "High contrast mode",
                desc: "The interface follows your system-level contrast preference automatically.",
              },
              {
                icon: "🎞️",
                title: "Reduced motion",
                desc: "Animations and transitions are suppressed when you have prefers-reduced-motion enabled.",
              },
              {
                icon: "📱",
                title: "Responsive at all screen sizes",
                desc: "Every page is fully functional from small mobile screens to large desktop displays.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] flex gap-4 items-start"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-black text-white text-sm mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/45 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          NEURODIVERGENT-FRIENDLY DESIGN
      ═══════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#1a1a2e] border-y border-white/[0.05]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-3">
              Intentional design
            </span>
            <h2 className="text-2xl font-black text-white">
              Neurodivergent-friendly by default
            </h2>
            <p className="text-white/40 text-sm mt-3 leading-relaxed max-w-lg">
              MEOK was built in part for people whose brains work differently.
              That shapes how we write, design, and build every feature.
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                title: "Plain language first",
                desc: "We write for clarity, not to sound impressive. Every feature, every setting, every error message is written in plain English.",
              },
              {
                title: "No dark patterns",
                desc: "We do not use deceptive UI tricks, hidden unsubscribe flows, or interfaces designed to confuse you into doing something you didn't intend.",
              },
              {
                title: "No manipulative UX",
                desc: "No guilt-based messaging, no shame cycles, no language designed to make you feel bad for not engaging more.",
              },
              {
                title: "No forced timers or urgency pressure",
                desc: "Countdown timers, artificial scarcity, and \"limited time\" pressure are not used to push decisions.",
              },
              {
                title: "Predictable navigation",
                desc: "Navigation structure is consistent across all pages. You always know where you are and how to get back.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]"
              >
                <span className="text-[#c9a84c] font-black flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="font-black text-white text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/45 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PLAIN LANGUAGE NOTE
      ═══════════════════════════════════════════════ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <span className="text-3xl block mb-5">📖</span>
            <h2 className="text-xl font-black text-white mb-4">
              Written for clarity, not complexity
            </h2>
            <p className="text-white/50 leading-relaxed text-sm max-w-lg mx-auto mb-6">
              Every page on MEOK is written to be understood on the first read.
              If something is confusing — a word choice, an instruction, a
              label — that&apos;s something we want to fix.
            </p>
            <p className="text-white/40 text-sm">
              Tell us what&apos;s unclear:{" "}
              <a
                href="mailto:accessibility@meok.ai"
                className="text-[#c9a84c] font-bold hover:underline"
              >
                accessibility@meok.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#0a0a0f] border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-4">
            Found an accessibility issue?
          </h2>
          <p className="text-white/50 leading-relaxed text-sm mb-6 max-w-lg">
            If you encounter a barrier — something that stops you from using
            MEOK or makes it harder than it should be — please let us know. We
            treat accessibility reports as high priority.
          </p>
          <div
            className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl"
            style={{
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <span className="text-[#c9a84c] text-lg">✉</span>
            <a
              href="mailto:accessibility@meok.ai"
              className="text-[#c9a84c] font-black text-sm hover:underline"
            >
              accessibility@meok.ai
            </a>
          </div>
          <p className="text-white/25 text-xs mt-5 leading-relaxed">
            We aim to acknowledge all accessibility reports within 2 business
            days. This page was last reviewed March 2026.
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
