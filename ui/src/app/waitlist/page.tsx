import type { Metadata } from "next";
import WaitlistClient from "./waitlist-client";

export const metadata: Metadata = {
  title: "Join the Waitlist — MEOK AI Sovereign Companions",
  description: "Get early access to MEOK. Be among the first to experience sovereign AI companions with persistent memory and zero training on your data.",
  alternates: { canonical: "https://meok.ai/waitlist" },
  openGraph: {
    title: "MEOK Waitlist",
    description: "Join the waitlist for early access to sovereign AI companions.",
    type: "website",
    url: "https://meok.ai/waitlist",
  },
};

export default function WaitlistPage() {
  return <WaitlistClient />;
}
