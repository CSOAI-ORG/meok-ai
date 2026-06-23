import type { Metadata } from "next";
import { WarmContentPage } from "@/components/warm-content-page";

export const metadata: Metadata = {
  title: "MEOK Family OS · MEOK AI Labs",
  description:
    "The family operating system. Multi-companion coordination, child-safe mode, elder-care mode.",
  openGraph: {
    title: "MEOK Family OS · MEOK AI Labs",
    description:
      "The family operating system. Multi-companion coordination, child-safe mode, elder-care mode.",
    type: "website",
  },
};

export default function FamilyPage() {
  return (
    <WarmContentPage
      title="MEOK Family OS"
      description="The family operating system. Multi-companion coordination, child-safe mode, and elder-care mode — all under your roof and your keys."
      eyebrow="For households"
      ctas={[
        { href: "/pricing", label: "View pricing", variant: "primary" },
        { href: "/characters", label: "Meet the characters", variant: "secondary" },
        { href: "/apps", label: "Explore apps", variant: "soft" },
      ]}
    >
      <h2>5 family archetypes</h2>
      <p>
        The Guardian watches, the Healer comforts, the Scholar teaches, the
        Storyteller brings wonder, and the Connector keeps everyone in sync.
        Each archetype can be assigned to a family member or shared across the
        household.
      </p>

      <h2>Child-safe mode</h2>
      <p>
        Age-appropriate communication filtering, no adult content, full parental
        visibility, and sovereign audit logs so you always know what the AI
        discussed with your child.
      </p>

      <h2>Elder-care mode</h2>
      <p>
        Medication reminders, activity monitoring, fall-detection sensor
        integration, and gentle voice check-ins — all routed to trusted family
        members, not a third-party cloud.
      </p>

      <h2>One household memory graph</h2>
      <p>
        Family OS keeps a shared memory graph under the household&apos;s own keys.
        Preferences, schedules, and care plans stay local and private.
      </p>
    </WarmContentPage>
  );
}
