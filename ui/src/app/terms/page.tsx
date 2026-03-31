
export const metadata = {
  title: "Terms of Service — MEOK AI",
  description: "Terms governing use of the MEOK AI sovereign companion platform. Plain language.",
};

// ── Section component ─────────────────────────────────────────────────────────

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="space-y-3 scroll-mt-28">
      <h2 className="text-white font-bold text-base sm:text-lg border-l-2 border-[#c9a84c] pl-3">
        {title}
      </h2>
      <div className="text-white/55 leading-relaxed text-sm space-y-3">{children}</div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">

      <div className="pt-28 pb-24 px-6 max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black mb-2 text-white">Terms of Service</h1>
          <p className="text-white/30 text-sm">Last updated: 5 April 2026 · MEOK AI LABS · Registered in England &amp; Wales</p>
        </div>

        {/* TL;DR */}
        <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-2xl p-6 mb-12">
          <p className="text-xs font-black tracking-[0.2em] uppercase text-[#c9a84c] mb-3">TL;DR — what you need to know</p>
          <ul className="space-y-2 text-sm">
            {[
              "You own your conversations and memories. We just store them for you.",
              "The free tier is genuinely free. No hidden trial. No expiry.",
              "You can cancel any paid plan any time with no fees.",
              "Your companion is AI, not human. Don't use it as a substitute for medical or legal advice.",
              "We can suspend accounts that violate the acceptable use policy — but we'll be fair about it.",
              "English law governs these terms. Disputes go to courts of England and Wales.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#c9a84c] shrink-0 font-bold">✓</span>
                <span className="text-white/75">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/35 text-xs mt-4">
            The full terms below have the legal detail. But if you only read the above, you have the substance.
          </p>
        </div>

        {/* Plain-language training commitment */}
        <div className="rounded-2xl border border-[#c9a84c]/60 bg-[#c9a84c]/5 p-6 mb-10">
          <p className="text-xs font-bold text-[#c9a84c] mb-2 uppercase tracking-[0.15em]">
            Contractual commitment
          </p>
          <p className="text-white font-bold text-base mb-2">
            MEOK does not use your conversations to train AI models.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Not ours. Not anyone else&apos;s. Not in anonymised form. This is both a contractual
            commitment in these Terms and a technical constraint — your conversation data is stored
            in an isolated tenant vault with no pathway to any training pipeline.
          </p>
        </div>

        {/* Quick nav */}
        <nav className="mb-10 rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-xs font-bold text-white/30 uppercase tracking-[0.15em] mb-3">Jump to section</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
            {[
              ["#acceptance", "Acceptance"],
              ["#what-meok-is", "What MEOK is"],
              ["#acceptable-use", "Acceptable use"],
              ["#data-ownership", "Data ownership"],
              ["#subscriptions", "Subscriptions & billing"],
              ["#cancellation", "Cancellation"],
              ["#service-availability", "Availability"],
              ["#ai-nature", "Nature of AI"],
              ["#age", "Age requirement"],
              ["#intellectual-property", "Intellectual property"],
              ["#liability", "Liability"],
              ["#governing-law", "Governing law"],
              ["#term-changes", "Changes"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-[#c9a84c]/70 hover:text-[#c9a84c] transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Full terms */}
        <div className="space-y-10">
          <Section id="acceptance" title="1. Acceptance">
            <p>
              By creating a MEOK account or using any MEOK service, you agree to these Terms and our{" "}
              <a href="/privacy" className="text-[#c9a84c] hover:underline">Privacy Policy</a>. If you do not agree, do not use MEOK.
            </p>
          </Section>

          <Section id="what-meok-is" title="2. What MEOK is">
            <p>
              MEOK provides a <strong className="text-white/75">sovereign AI companion platform</strong> — a personal AI that learns about you, remembers you, and works for you. Your AI instance is hosted on our infrastructure and governed by the{" "}
              <a href="/blog/building-care-into-ai" className="text-[#c9a84c] hover:underline">Maternal Covenant</a> ethical framework and our{" "}
              <a href="/blog/byzantine-fault-tolerance-your-ai" className="text-[#c9a84c] hover:underline">Byzantine fault-tolerant council system</a>.
            </p>
            <p>
              The service is provided for personal, non-commercial use on the Explorer free plan. Commercial use is permitted on Sovereign and Family plans.
            </p>
          </Section>

          <Section id="acceptable-use" title="3. Acceptable use">
            <p>You agree not to:</p>
            <ul className="space-y-1.5 pl-4 list-disc">
              <li>Use MEOK to harass, threaten, stalk, or harm others.</li>
              <li>Attempt to manipulate, jailbreak, or circumvent MEOK&apos;s safety systems or the Maternal Covenant.</li>
              <li>Use automated tools to scrape, harvest, or extract data from MEOK.</li>
              <li>Impersonate other people or entities.</li>
              <li>Use MEOK for illegal purposes under English law or the law where you live.</li>
              <li>Share or sell access to your MEOK account.</li>
            </ul>
            <p>
              We enforce these fairly. A first violation typically results in a warning. Repeated or serious violations may result in immediate suspension. We do not terminate accounts arbitrarily.
            </p>
          </Section>

          <Section id="data-ownership" title="4. Your content and data ownership">
            <p>
              <strong className="text-white/75">You own your conversations and memories.</strong> Full stop. By using MEOK, you grant us a limited licence to process your content for the purpose of providing the service — nothing more. We do not claim ownership of your conversations or the memories your companion builds.
            </p>
            <p>
              See our <a href="/privacy" className="text-[#c9a84c] hover:underline">Privacy Policy</a> for how we store, protect, and handle your data.
            </p>
          </Section>

          <Section id="subscriptions" title="5. Subscriptions and billing">
            <ul className="space-y-2">
              {[
                "Paid plans are billed monthly via Stripe.",
                "Free plans are genuinely free — no credit card required, no trial expiry.",
                "14-day free trials on paid plans require a payment method. Billing starts automatically at trial end unless you cancel.",
                "Refunds are issued at our discretion for unused periods. Cancel any time from Settings with no cancellation fee.",
                "We will notify you by email at least 7 days before any price change takes effect.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-white/30 shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="cancellation" title="6. Cancellation">
            <p>
              You may cancel any paid plan at any time from Settings with no cancellation fee. Cancellation takes effect at the end of the current billing period; you retain access until then. Refunds for unused periods are issued at our discretion. To request a refund, contact <a href="mailto:billing@meok.ai" className="text-[#c9a84c] hover:underline">billing@meok.ai</a>.
            </p>
            <p>
              Account deletion is separate from plan cancellation. To delete your account and all associated data, use Settings → Delete Account. Data is purged within 30 days per our <a href="/privacy#data-retention" className="text-[#c9a84c] hover:underline">Privacy Policy</a>.
            </p>
          </Section>

          <Section id="service-availability" title="7. Service availability">
            <p>
              We aim for high availability but do not guarantee uninterrupted service. Planned maintenance will be communicated in advance. We are not liable for losses arising from service interruptions, though we will always try to make things right if something goes wrong on our side.
            </p>
          </Section>

          <Section id="ai-nature" title="8. The nature of AI companions">
            <p>
              MEOK AI companions are artificial intelligence systems. <strong className="text-white/75">They are not human.</strong> They do not have genuine emotions and should not be treated as substitutes for human relationships, medical advice, legal counsel, or professional mental health support.
            </p>
            <p>
              The Maternal Covenant governs care boundaries. MEOK is not a medical or therapeutic service. If you are in crisis, please contact a qualified professional or emergency services.
            </p>
          </Section>

          <Section id="age" title="9. Age requirement">
            <p>
              MEOK requires users to be at least <strong className="text-white/75">13 years old</strong>. Users aged 13–17 require parental or guardian consent. A dedicated under-13 variant with full regulatory compliance is in development.
            </p>
          </Section>

          <Section id="intellectual-property" title="10. Intellectual property">
            <p>
              MEOK&apos;s software, design, brand, and the Maternal Covenant framework are owned by MEOK AI LABS. You may not copy, modify, or distribute them without written permission. Your content and memories are yours — see <a href="#data-ownership" className="text-[#c9a84c] hover:underline">section 4</a>.
            </p>
          </Section>

          <Section id="liability" title="11. Limitation of liability">
            <p>
              To the maximum extent permitted by English law, MEOK&apos;s liability for any claim arising from use of the service is limited to the amount paid by you in the 12 months preceding the claim. We are not liable for indirect, consequential, or incidental damages.
            </p>
          </Section>

          <Section id="governing-law" title="12. Governing law">
            <p>
              These Terms are governed by the law of England and Wales. Disputes are subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </Section>

          <Section id="term-changes" title="13. Changes to these terms">
            <p>
              We may update these Terms. <strong className="text-white/75">Material changes will be notified by email and in-app with 30 days notice.</strong> We will never make changes that reduce your rights over your own data without explicit consent.
            </p>
          </Section>

          <div className="pt-6 border-t border-white/10 text-white/30 text-sm space-y-1">
            <p>Questions: <a href="mailto:legal@meok.ai" className="text-[#c9a84c]/60 hover:text-[#c9a84c]">legal@meok.ai</a></p>
            <p>MEOK AI LABS · Registered in England &amp; Wales</p>
          </div>
        </div>
      </div>

    </div>
  );
}
