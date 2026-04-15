import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account — MEOK AI LABS",
  description: "Create your free MEOK account. Start with a sovereign AI agent, permanent memory, and 50 messages per day — no credit card required.",
  robots: { index: false, follow: false },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
