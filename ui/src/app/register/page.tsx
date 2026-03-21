import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hatch Your AI — MEOK",
  description: "Create your sovereign AI instance. Free to start.",
  robots: { index: false, follow: false },
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-4 py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <Link href="/" className="inline-block font-bold text-2xl tracking-tight mb-6">
          <span className="text-cyan-400">M</span>EOK
        </Link>
        <h1 className="text-3xl font-bold text-white mb-2">Hatch your AI</h1>
        <p className="text-white/40 text-sm">
          Create your sovereign AI instance. Free, no credit card required.
        </p>
      </div>

      {/* Clerk SignUp */}
      <SignUp
        appearance={{
          variables: {
            colorBackground: "#0e0e15",
            colorInputBackground: "#13131c",
            colorInputText: "#ffffff",
            colorText: "#ffffff",
            colorTextSecondary: "rgba(255,255,255,0.4)",
            colorPrimary: "#22d3ee",
            colorDanger: "#f87171",
            borderRadius: "0.75rem",
            fontFamily: "inherit",
          },
          elements: {
            card: "bg-[#0e0e15] border border-white/[0.08] shadow-2xl",
            headerTitle: "text-white font-bold",
            headerSubtitle: "text-white/40",
            formButtonPrimary:
              "bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors",
            footerActionLink: "text-cyan-400 hover:text-cyan-300",
            formFieldLabel: "text-white/50 text-sm",
            formFieldInput:
              "bg-white/[0.05] border border-white/10 text-white placeholder-white/20 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25",
            identityPreviewText: "text-white/70",
            identityPreviewEditButton: "text-cyan-400 hover:text-cyan-300",
            dividerLine: "bg-white/[0.08]",
            dividerText: "text-white/30",
            socialButtonsBlockButton:
              "bg-white/[0.05] border border-white/10 text-white/70 hover:bg-white/[0.08] hover:text-white transition-colors",
            socialButtonsBlockButtonText: "text-white/70",
          },
        }}
        forceRedirectUrl="/birth"
        signInUrl="/login"
      />

      <p className="mt-6 text-xs text-white/20 text-center max-w-xs">
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
    </div>
  );
}
