import type { Metadata } from "next";
import { MaybeClerk } from "@/components/maybe-clerk";
import DashboardShell from "./dashboard-shell";

// Auth-gated, interactive — never static-prerender (ClerkProvider lives here).
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    template: "%s | MEOK Dashboard",
    default: "Dashboard | MEOK AI LABS",
  },
  description: "Your sovereign AI companion dashboard — memory, chat, growth, and more.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <MaybeClerk>
      <DashboardShell>{children}</DashboardShell>
    </MaybeClerk>
  );
}
