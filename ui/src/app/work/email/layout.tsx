import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email — Email That Works For You. Not Against You. | MEOK Work OS",
  description:
    "Smart drafting, thread summarisation, follow-up reminders, and priority inbox. Draft an email in 3 words. Works with Gmail, Outlook, and ProtonMail. Sovereign.",
  alternates: { canonical: "https://meok.ai/work/email" },
  openGraph: {
    title: "Email — Email That Works For You. Not Against You. | MEOK Work OS",
    description:
      "Your AI knows your relationships — writes in your voice, knows your history with every contact, and keeps your inbox under control.",
    type: "website",
  },
};

export default function EmailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
