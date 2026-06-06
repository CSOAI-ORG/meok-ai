import type { Metadata } from "next";
import { MaybeClerk } from "@/components/maybe-clerk";

// Auth-gated, interactive — never static-prerender (ClerkProvider lives here).
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sign In — MEOK AI LABS",
  description: "Sign in to your MEOK sovereign AI account. Access your dashboard, companions, memory vault, and Work OS tools.",
  robots: { index: false, follow: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <MaybeClerk>{children}</MaybeClerk>;
}
