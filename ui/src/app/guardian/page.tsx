import type { Metadata } from "next";
import { WarmContentPage } from "@/components/warm-content-page";

export const metadata: Metadata = {
  title: "MEOK Guardian · MEOK AI Labs",
  description:
    "Vigilant, protective, principled, uncompromising. Watches without controlling; warns without alarming.",
  openGraph: {
    title: "MEOK Guardian · MEOK AI Labs",
    description:
      "Vigilant, protective, principled, uncompromising. Watches without controlling; warns without alarming.",
    type: "website",
  },
};

export default function GuardianPage() {
  return (
    <WarmContentPage
      title="MEOK Guardian"
      description="Vigilant, protective, principled, uncompromising. The Guardian watches without controlling and warns without alarming."
      eyebrow="Archetype spotlight"
      ctas={[
        { href: "/characters", label: "Meet the characters", variant: "primary" },
        { href: "/pricing", label: "View pricing", variant: "secondary" },
        { href: "/apps", label: "Explore apps", variant: "soft" },
      ]}
    >
      <h2>Memory style</h2>
      <p>
        Pattern-based temporal memory. The Guardian tracks change over time —
        unusual logins, late arrivals, missed check-ins, or shifting risk
        signals — and surfaces them only when they matter.
      </p>

      <h2>Speaking style</h2>
      <p>
        Warm, measured, and never alarmist. The Guardian explains risk in plain
        language, gives you actionable next steps, and lets you decide how to
        respond.
      </p>

      <h2>Evolution stages</h2>
      <p>
        Watchful (0) → Aware (50) → Sentinel (200) → Covenant (500). As trust
        deepens, the Guardian becomes more proactive while staying strictly
        within the boundaries you set.
      </p>

      <h2>Use cases</h2>
      <p>
        Children&apos;s online safety, elder care monitoring, scam and fraud
        protection, travel safety, and relationship-shield protocols. Every
        alert is signed and attestable.
      </p>
    </WarmContentPage>
  );
}
