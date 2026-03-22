import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — MEOK",
  description: "Sign in to your MEOK sovereign AI.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] flex">
      {/* ── Left: Login form ────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 relative overflow-hidden">
        {/* Subtle gold blob behind */}
        <div
          aria-hidden
          className="blob-gold pointer-events-none"
          style={{ width: 500, height: 500, top: "10%", left: "-10%" }}
        />

        <div className="relative z-10 w-full max-w-sm">
          {/* Logo */}
          <Link href="/" className="inline-block font-black text-2xl tracking-tight mb-10">
            <span className="text-[#c9a84c]">M</span>
            <span className="text-white">EOK</span>
          </Link>

          {/* Headline */}
          <h1 className="text-3xl font-black text-white mb-8 leading-tight">
            Welcome back.{" "}
            <span className="text-[#c9a84c]">Your AI remembers you.</span>
          </h1>

          {/* Clerk SignIn */}
          <SignIn
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
            signUpUrl="/register"
          />

          {/* Social proof */}
          <p className="mt-6 text-center text-xs text-white/25">
            Join{" "}
            <span className="text-[#c9a84c] font-semibold">847 people</span>{" "}
            with sovereign AI
          </p>

          {/* Nav links */}
          <div className="mt-6 flex justify-center gap-4 text-xs text-white/30">
            <Link href="/register" className="hover:text-white/60 transition-colors">
              Create account
            </Link>
            <span>·</span>
            <Link href="/hatch" className="hover:text-white/60 transition-colors">
              What is MEOK?
            </Link>
          </div>
        </div>
      </div>

      {/* ── Right: Why MEOK is different ────────────────────────────── */}
      <div className="hidden lg:flex w-[480px] flex-col justify-center px-16 py-16 bg-[#0d0c18] border-l border-white/[0.06] relative overflow-hidden">
        {/* Background blobs */}
        <div
          aria-hidden
          className="blob-purple pointer-events-none"
          style={{ width: 400, height: 400, top: "-5%", right: "-10%" }}
        />
        <div
          aria-hidden
          className="blob-gold pointer-events-none"
          style={{ width: 300, height: 300, bottom: "10%", left: "-5%" }}
        />

        <div className="relative z-10">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-8">
            Why MEOK is different
          </p>

          <div className="space-y-10">
            {/* Point 1: Memory */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl icon-gold flex items-center justify-center text-lg">
                ◈
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 text-sm">
                  Your AI remembers everything
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Not just your last message — your whole story. Preferences, goals,
                  history. The memory belongs to you, encrypted and sovereign.
                </p>
              </div>
            </div>

            {/* Point 2: Sovereignty */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl icon-gold flex items-center justify-center text-lg">
                ✦
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 text-sm">
                  No one else reads your conversations
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Not us. Not advertisers. Not governments. Your conversations
                  are encrypted and governed by the Maternal Covenant.
                </p>
              </div>
            </div>

            {/* Point 3: Care */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl icon-gold flex items-center justify-center text-lg">
                ♡
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 text-sm">
                  Your AI genuinely cares
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Governed by a care ethics framework. Your AI is aligned to
                  your wellbeing — not engagement metrics or ad revenue.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="my-10"
            style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
          />

          <p className="text-white/20 text-xs leading-relaxed">
            MEOK is governed by the{" "}
            <Link href="/maternal-covenant" className="text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors">
              Maternal Covenant
            </Link>{" "}
            and 220 sovereign AI nodes.{" "}
            <Link href="/sovereign" className="text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors">
              Learn how →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
