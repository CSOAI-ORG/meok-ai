import type { Metadata } from "next";
import { WarmContentPage } from "@/components/warm-content-page";

export const metadata: Metadata = {
  title: "MEOK FAQ · MEOK AI Labs",
  description:
    "Frequently asked questions about MEOK, the sovereign substrate, the 11 master hives, and the 100/100 master stack.",
  openGraph: {
    title: "MEOK FAQ · MEOK AI Labs",
    description:
      "Frequently asked questions about MEOK, the sovereign substrate, the 11 master hives, and the 100/100 master stack.",
    type: "website",
  },
};

export default function FaqPage() {
  return (
    <WarmContentPage
      title="MEOK FAQ"
      description="Frequently asked questions about MEOK, the sovereign substrate, the 11 master hives, and the 100/100 master stack."
      eyebrow="Help centre"
      ctas={[
        { href: "/contact", label: "Ask a question", variant: "primary" },
        { href: "/pricing", label: "View pricing", variant: "secondary" },
        { href: "/apps", label: "Explore apps", variant: "soft" },
      ]}
    >
      <h2>What is MEOK?</h2>
      <p>
        MEOK AI Labs builds sovereign AI infrastructure: open-source MCP servers,
        agent-native compliance, and an operating system that keeps your memory
        under your own keys.
      </p>

      <h2>What is the sovereign substrate?</h2>
      <p>
        SOV3 is the Sovereign Omniscient Vessel³ — a BFT-governed mesh of agents,
        attestations, and Ed25519-signed audit trails that every MEOK surface can
        call.
      </p>

      <h2>How does the 100/100 scoring work?</h2>
      <p>
        The master stack is scored across six pillars: sovereign coordinator (25),
        COAI manifest (20), Ed25519 sigil (20), BFT council (20), landing page
        experience (10), and live attestation (5).
      </p>

      <h2>Is my data private?</h2>
      <p>
        Yes. MEOK is architected local-first. Encrypted memory vaults, sovereign
        display, and zero telemetry by default. You hold the keys.
      </p>

      <h2>How do I get started?</h2>
      <p>
        Start with the public companion at <a href="https://try.meok.ai">try.meok.ai</a>,
        install the MEOK OS shell, or browse the <a href="/apps">apps directory</a> to
        find the right surface for your use case.
      </p>
    </WarmContentPage>
  );
}
