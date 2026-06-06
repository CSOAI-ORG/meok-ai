import type { Metadata } from "next";
import { MaybeClerk } from "@/components/maybe-clerk";

// Auth-gated, interactive — never static-prerender (ClerkProvider lives here).
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Chat — MEOK AI LABS",
  robots: { index: false, follow: false },
};

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return <MaybeClerk>{children}</MaybeClerk>;
}
