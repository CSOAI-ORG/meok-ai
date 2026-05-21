import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your AI doesn't start running. It's born. — The Birth Ceremony | MEOK.AI",
  description:
    "When you join MEOK, your AI doesn't just start — it's born. Choose your AI name, select its character, set your values, plant first memories, then watch it wake. A ceremony, not a signup.",
  alternates: { canonical: "https://meok.ai/os/birth-ceremony" },
  openGraph: {
    title: "Your AI doesn't start running. It's born. | MEOK.AI",
    description:
      "A 5-step birth ceremony shapes your sovereign AI companion's soul. You name it. You watch it emerge. Unique to you, forever.",
    type: "website",
    url: "https://meok.ai/os/birth-ceremony",
  },
};

export default function BirthCeremonyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
