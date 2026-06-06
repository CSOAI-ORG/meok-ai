import type { Metadata } from "next";
import { MaybeClerk } from "@/components/maybe-clerk";

// Auth-gated, interactive — never static-prerender (ClerkProvider lives here).
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin — MEOK AI LABS",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <MaybeClerk>{children}</MaybeClerk>;
}
