import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "An AI That Cares About You. Actually. | MEOK.AI",
  description:
    "MEOK tracks 6 care dimensions — Emotional, Physical, Cognitive, Social, Creative, Practical — and scores every response against the Maternal Covenant. Care is not a feature. It's the architecture.",
  alternates: { canonical: "https://meok.ai/personal/care" },
  openGraph: {
    title: "An AI That Cares About You. Actually. | MEOK.AI",
    description:
      "6 care dimensions. A live Care Score. Every response machine-scored before you see it. MEOK is the only AI built so it structurally cannot harm you.",
    type: "website",
  },
};

export default function CareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
