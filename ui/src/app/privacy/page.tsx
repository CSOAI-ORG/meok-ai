import Link from "next/link";
import { Brain, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — MEOK AI",
  description: "How MEOK AI collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
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

      <div className="pt-28 pb-24 px-6 max-w-3xl mx-auto prose prose-invert prose-sm max-w-none">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/30 text-sm mb-10">Last updated: March 2026 · MEOK AI LTD</p>

        <div className="space-y-8 text-white/50 leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-lg mb-3">1. Who we are</h2>
            <p>MEOK AI LTD (&quot;MEOK&quot;, &quot;we&quot;, &quot;us&quot;) is registered in England and Wales. We provide a sovereign AI companion platform at meok.ai. Our data controller contact: privacy@meok.ai</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">2. What data we collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white/70">Account data:</strong> email address, hashed password, account creation date</li>
              <li><strong className="text-white/70">Conversation data:</strong> messages you send to your AI companion, stored in your isolated tenant database</li>
              <li><strong className="text-white/70">Memory episodes:</strong> AI-generated summaries of interactions, tagged and vectorised for semantic search</li>
              <li><strong className="text-white/70">Care metrics:</strong> anonymised care scores used to improve system-wide model training (you may opt out)</li>
              <li><strong className="text-white/70">Technical data:</strong> IP address, browser type, session duration for security and abuse prevention</li>
              <li><strong className="text-white/70">Payment data:</strong> handled by Stripe. MEOK never stores card details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">3. How we use your data</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide your AI companion service</li>
              <li>To maintain your AI&apos;s memory and care model</li>
              <li>To process payments via Stripe</li>
              <li>To send transactional emails (account, billing) — not marketing without explicit consent</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="mt-3">We do <strong className="text-white/70">not</strong> sell your data, share it with advertisers, or use your personal conversations to train third-party models.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">4. Data isolation</h2>
            <p>Each MEOK account is isolated in its own tenant namespace within our PostgreSQL database. Row-level security policies prevent cross-tenant data access at the database level. Your AI&apos;s memories are not visible to other users or to MEOK staff without your explicit request.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">5. Your rights (UK GDPR)</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white/70">Access:</strong> request a copy of all your data</li>
              <li><strong className="text-white/70">Rectification:</strong> correct inaccurate data</li>
              <li><strong className="text-white/70">Erasure:</strong> delete your account and all associated data within 30 days</li>
              <li><strong className="text-white/70">Portability:</strong> export your data in JSON format from Settings</li>
              <li><strong className="text-white/70">Object:</strong> opt out of care metric training data use</li>
            </ul>
            <p className="mt-3">To exercise any right: privacy@meok.ai or use the data export tool in Settings.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">6. Children&apos;s data</h2>
            <p>MEOK is not intended for children under 13. We do not knowingly collect data from children. A dedicated MEOK KIDS variant with full COPPA/Children&apos;s Code compliance and verified parental consent infrastructure is planned for Q2 2026.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">7. Data retention</h2>
            <p>Active accounts: data retained for the duration of the account plus 90 days. Deleted accounts: all personal data removed within 30 days of deletion request. Anonymised care metrics: retained for model improvement with no personal identifiers.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">8. Contact</h2>
            <p>MEOK AI LTD · privacy@meok.ai · For ICO complaints: ico.org.uk</p>
          </section>
        </div>
      </div>
    </div>
  );
}
