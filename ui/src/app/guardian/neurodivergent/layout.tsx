import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK for Neurodivergent Minds — ADHD, Autism, Dyslexia | MEOK.AI",
  description:
    "An AI built with neurodivergent people in mind from day one. Not an accessibility feature — a core design principle. ADHD support, autistic communication, executive function scaffolding, and more.",
  alternates: { canonical: "https://meok.ai/guardian/neurodivergent" },
  openGraph: {
    title: "MEOK for Neurodivergent Minds | MEOK.AI",
    description:
      "An AI that thinks differently — built for people who do too. ADHD, autism, dyslexia, sensory processing differences. Not bolted on. Built in.",
    type: "website",
    url: "https://meok.ai/guardian/neurodivergent",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Neurodivergent+Minds&desc=An+AI+that+thinks+differently.+Built+for+people+who+do+too.",
        width: 1200,
        height: 630,
        alt: "MEOK for Neurodivergent Minds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Neurodivergent Minds | MEOK.AI",
    description:
      "An AI that thinks differently — built for people who do too. ADHD, autism, dyslexia, sensory processing differences.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Neurodivergent+Minds&desc=An+AI+that+thinks+differently.+Built+for+people+who+do+too.",
    ],
  },
};

export default function NeurodivergentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
