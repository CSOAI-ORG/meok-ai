import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardian for Elderly Parents — Dignity, Independence & Safety | MEOK.AI",
  description:
    "Guardian provides daily check-ins, medication reminders, and emergency detection for elderly loved ones — with dignity and warmth, not surveillance. Family dashboard included.",
  openGraph: {
    title: "Guardian for Elderly Parents — Dignity, Independence & Safety | MEOK.AI",
    description:
      "Dignity, independence, and safety. For the people who gave you everything. Guardian watches so your family can breathe.",
    type: "website",
  },
  alternates: {
    canonical: "https://meok.ai/guardian/elderly",
  },
};

export default function GuardianElderlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
