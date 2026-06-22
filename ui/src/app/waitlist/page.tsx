import type { Metadata } from "next";
import { WaitlistClient } from "./waitlist-client";

export const metadata: Metadata = {
  title: "Join the MEOK Public Beta",
  description:
    "Sign up for the MEOK public beta. Watch agents live, vote in the BFT council, and create your own sovereign character.",
  alternates: { canonical: "https://meok.ai/waitlist" },
  openGraph: {
    title: "Join the MEOK Public Beta",
    description:
      "Watch agents live, vote in council, and create your character. Be first in line.",
    type: "website",
    url: "https://meok.ai/waitlist",
  },
};

export default function WaitlistPage() {
  return <WaitlistClient />;
}
