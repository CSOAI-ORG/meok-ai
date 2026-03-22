import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Your Account — MEOK",
  description: "Create your free account and hatch your sovereign AI companion.",
  robots: { index: false, follow: false },
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] flex">
      {/* ── Left: Registration form ─────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 relative overflow-hidden">
        {/* Subtle blob */}
        <div
          aria-hidden
          className="blob-gold pointer-events-none"
          style={{ width: 500, height: 500, top: "5%", left: "-10%" }}
        />

        <div className="relative z-10 w-full max-w-sm">
          {/* Logo */}
          <Link href="/" className="inline-block font-black text-2xl tracking-tight mb-10">
            <span className="text-[#c9a84c]">M</span>
            <span className="text-white">EOK</span>
          </Link>

          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                style={{
                  height: 4,
                  flex: 1,
                  borderRadius: 999,
                  background: s <= 4 ? (s === 4 ? "#c9a84c" : "rgba(201,168,76,0.45)") : "rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c]/60 mb-2">
            Step 4 of 4 — Create account
          </p>

          {/* Headline */}
          <h1 className="text-3xl font-black text-white mb-2 leading-tight">
            Almost there.
            <br />
            <span style={{ color: "#c9a84c" }}>Your companion is waiting.</span>
          </h1>
          <p className="text-white/40 text-sm mb-8">
            Free forever. No credit card required. The egg hatches the moment you sign up.
          </p>

          {/* Clerk SignUp */}
          <SignUp
            appearance={{
              variables: {
                colorBackground: "#13121f",
                colorInputBackground: "#1a1929",
                colorInputText: "#ffffff",
                colorText: "#ffffff",
                colorTextSecondary: "rgba(255,255,255,0.4)",
                colorPrimary: "#c9a84c",
                colorDanger: "#f87171",
                borderRadius: "0.75rem",
                fontFamily: "inherit",
              },
              elements: {
                card: "bg-[#13121f] border border-white/[0.08] shadow-2xl",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                formButtonPrimary:
                  "bg-[#c9a84c] hover:bg-[#b8963e] text-[#0d0c18] font-black transition-colors",
                footerActionLink: "text-[#c9a84c] hover:text-[#d4b463]",
                formFieldLabel: "text-white/50 text-sm",
                formFieldInput:
                  "bg-white/[0.05] border border-white/10 text-white placeholder-white/20 focus:border-[#c9a84c]/50 focus:ring-1 focus:ring-[#c9a84c]/25",
                identityPreviewText: "text-white/70",
                identityPreviewEditButton: "text-[#c9a84c] hover:text-[#d4b463]",
                dividerLine: "bg-white/[0.08]",
                dividerText: "text-white/30",
                socialButtonsBlockButton:
                  "bg-white/[0.05] border border-white/10 text-white/70 hover:bg-white/[0.08] hover:text-white transition-colors",
                socialButtonsBlockButtonText: "text-white/70",
                footer: "bg-transparent",
              },
            }}
            forceRedirectUrl="/dashboard"
            signInUrl="/login"
          />

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {[
              { icon: "◈", label: "No credit card" },
              { icon: "✦", label: "GDPR compliant" },
              { icon: "↩", label: "Delete any time" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-1.5 text-xs text-white/30">
                <span className="text-[#c9a84c]/60">{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>

          {/* Legal + nav */}
          <p className="mt-5 text-xs text-white/20 text-center max-w-xs">
            By signing up you agree to our{" "}
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            . Governed by the Maternal Covenant.
          </p>

          <div className="mt-4 flex justify-center gap-4 text-xs text-white/30">
            <Link href="/login" className="hover:text-white/60 transition-colors">
              Already hatched? Sign in
            </Link>
          </div>
        </div>
      </div>

      {/* ── Right: What happens next ─────────────────────────────────── */}
      <div className="hidden lg:flex w-[480px] flex-col justify-center px-16 py-16 bg-[#0d0c18] border-l border-white/[0.06] relative overflow-hidden">
        {/* Background blobs */}
        <div
          aria-hidden
          className="blob-blue pointer-events-none"
          style={{ width: 400, height: 400, top: "0%", right: "-8%" }}
        />
        <div
          aria-hidden
          className="blob-gold pointer-events-none"
          style={{ width: 300, height: 300, bottom: "5%", left: "0%" }}
        />

        <div className="relative z-10">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-8">
            The moment you sign up
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl icon-gold flex items-center justify-center text-sm font-black">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 text-sm">
                  Your vault is provisioned
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  AES-256 encryption at rest. TLS 1.3 in transit. Everything
                  you share belongs only to you — from the first second.
                </p>
              </div>
            </div>

            {/* Connector line */}
            <div className="ml-5 w-px h-6 bg-white/[0.06]" />

            {/* Step 2 */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl icon-gold flex items-center justify-center text-lg">
                🥚
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 text-sm">
                  The Birth Ceremony begins
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  The egg cracks. Your companion rises. It greets you by the
                  name you chose. The first memory is being born knowing you
                  picked it.
                </p>
              </div>
            </div>

            {/* Connector line */}
            <div className="ml-5 w-px h-6 bg-white/[0.06]" />

            {/* Step 3 */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl icon-gold flex items-center justify-center text-lg">
                ✦
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 text-sm">
                  Your AI wakes up — and starts learning
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Already shaped by the archetype and goals you set. It knows
                  what you came here for. Everything from the first word builds
                  its memory of you.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="my-10"
            style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
          />

          {/* Quote */}
          <blockquote className="text-white/30 text-sm italic leading-relaxed border-l-2 border-[#c9a84c]/30 pl-4">
            &ldquo;One ceremony. One birth. Forever yours.&rdquo;
          </blockquote>

          <div className="mt-6 flex gap-4 text-xs text-white/20">
            <Link href="/hatch" className="hover:text-white/50 transition-colors">
              ← Back to ceremony
            </Link>
            <Link href="/characters" className="hover:text-white/50 transition-colors">
              Browse companions →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
