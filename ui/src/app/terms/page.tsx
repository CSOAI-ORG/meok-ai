import Link from "next/link";
import { Brain, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service — MEOK AI",
  description: "Terms governing use of the MEOK AI sovereign companion platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />Back
          </Link>
          <div className="flex items-center gap-2 ml-auto">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span className="font-bold">MEOK</span>
          </div>
        </div>
      </nav>

      <div className="pt-28 pb-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-white/30 text-sm mb-10">Last updated: March 2026 · MEOK AI LTD · Registered in England &amp; Wales</p>

        <div className="space-y-8 text-white/50 leading-relaxed text-sm">
          {[
            {
              title: "1. Acceptance",
              body: "By creating a MEOK account or using any MEOK service, you agree to these Terms. If you do not agree, do not use MEOK."
            },
            {
              title: "2. Service description",
              body: "MEOK provides a sovereign AI companion platform. Your AI instance is hosted on our infrastructure and governed by our Byzantine fault-tolerant council system and the Maternal Covenant ethical framework. The service is provided 'as is' for personal, non-commercial use on free plans. Commercial use is permitted on Pro and Elite plans."
            },
            {
              title: "3. Acceptable use",
              body: "You must not: use MEOK to harass, threaten, or harm others; attempt to manipulate, jailbreak, or circumvent safety systems; use automated tools to scrape or harvest data; impersonate others; use MEOK for illegal purposes; or share access credentials. Violation may result in immediate account suspension."
            },
            {
              title: "4. Your content",
              body: "You own your conversation data and memories. By using MEOK, you grant us a limited licence to process your content for the purpose of providing the service. We do not claim ownership of your conversations. See our Privacy Policy for details on data handling."
            },
            {
              title: "5. Subscriptions and billing",
              body: "Paid plans are billed monthly via Stripe. Free trials are 14 days; a payment method is required and billing starts automatically at trial end unless cancelled. Refunds are issued at our discretion for unused periods. Cancel any time from Settings — no cancellation fees."
            },
            {
              title: "6. Service availability",
              body: "We aim for high availability but do not guarantee uninterrupted service. We may perform maintenance, update models, or modify features with reasonable notice. We are not liable for losses arising from service interruptions."
            },
            {
              title: "7. AI nature",
              body: "MEOK AI companions are artificial intelligence systems. They are not human, do not have genuine emotions, and should not be treated as substitutes for human relationships, medical advice, legal advice, or professional support. The Maternal Covenant governs care boundaries, but MEOK is not a mental health service."
            },
            {
              title: "8. Age requirement",
              body: "MEOK requires users to be at least 13 years old. Users aged 13-17 require parental or guardian consent. A dedicated under-13 variant with full regulatory compliance is planned for Q2 2026."
            },
            {
              title: "9. Intellectual property",
              body: "MEOK's software, design, brand, and the Maternal Covenant framework are owned by MEOK AI LTD. You may not copy, modify, or distribute them without written permission."
            },
            {
              title: "10. Limitation of liability",
              body: "To the maximum extent permitted by law, MEOK's liability for any claim arising from use of the service is limited to the amount paid by you in the 12 months preceding the claim. We are not liable for indirect, consequential, or incidental damages."
            },
            {
              title: "11. Governing law",
              body: "These Terms are governed by English law. Disputes are subject to the exclusive jurisdiction of the courts of England and Wales."
            },
            {
              title: "12. Changes",
              body: "We may update these Terms. Material changes will be notified by email and in-app with 30 days notice. Continued use after changes constitutes acceptance."
            },
          ].map((s) => (
            <section key={s.title}>
              <h2 className="text-white font-semibold text-base mb-2">{s.title}</h2>
              <p>{s.body}</p>
            </section>
          ))}

          <div className="pt-4 border-t border-white/10">
            <p>Contact: legal@meok.ai · MEOK AI LTD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
