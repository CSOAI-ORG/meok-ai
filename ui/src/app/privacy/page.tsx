
export const metadata = {
  title: "Privacy Policy — MEOK AI",
  description: "How MEOK AI collects, uses, and protects your personal data. Plain language. Real commitments.",
};

// ── Highlight box component ───────────────────────────────────────────────────

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-bold text-white">{children}</span>
  );
}

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

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">

      <div className="pt-28 pb-24 px-6 max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black mb-2 text-white">Privacy Policy</h1>
          <p className="text-white/30 text-sm">Last updated: 5 April 2026 · MEOK AI LABS · Registered in England &amp; Wales</p>
        </div>

        {/* TL;DR — the whole point */}
        <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-2xl p-6 mb-12">
          <p className="text-xs font-black tracking-[0.2em] uppercase text-[#c9a84c] mb-3">TL;DR — the promise</p>
          <ul className="space-y-2 text-sm">
            {[
              "We don't sell your data. Full stop.",
              "We don't train on your conversations — ever, not even anonymised.",
              "You can export everything you've ever shared, any time, in one click.",
              "You can delete your account and all your data, permanently, with no friction.",
              "Your conversation vault is encrypted in a way that means even we can't bulk-read it.",
              "No ads. No data brokers. No third-party analytics that see your conversations.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#c9a84c] shrink-0 font-bold">✓</span>
                <span className="text-white/75">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/35 text-xs mt-4">
            The full policy below has the legal detail. But if you only read the above, you have the substance.
          </p>
        </div>

        {/* Plain-language training commitment */}
        <div className="rounded-2xl border border-[#c9a84c]/60 bg-[#c9a84c]/5 p-6 mb-10">
          <p className="text-sm font-black text-[#c9a84c] mb-2 tracking-tight uppercase text-xs tracking-[0.15em]">
            Core commitment
          </p>
          <p className="text-white font-bold text-base mb-2">
            MEOK does not use your conversations to train AI models.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Not ours. Not anyone else&apos;s. Not in anonymised form. Not in aggregated form.
            Your conversations exist to serve you. Full stop. This is a technical constraint,
            not a marketing promise — your conversation data is stored in an isolated tenant
            vault with no pathway to our training pipeline.
          </p>
        </div>

        {/* Quick nav */}
        <nav className="mb-10 rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-xs font-bold text-white/30 uppercase tracking-[0.15em] mb-3">Jump to section</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
            {[
              ["#who-we-are", "Who we are"],
              ["#data-collected", "Data collected"],
              ["#what-we-wont-do", "What we won't do"],
              ["#data-protection", "Protection"],
              ["#your-rights", "Your rights (UK GDPR)"],
              ["#data-retention", "Retention & deletion"],
              ["#children", "Children"],
              ["#policy-changes", "Changes"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-[#c9a84c]/70 hover:text-[#c9a84c] transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Full policy */}
        <div className="space-y-10">
          <Section id="who-we-are" title="1. Who we are">
            <p>
              <Highlight>MEOK AI LABS</Highlight> (&quot;MEOK&quot;, &quot;we&quot;, &quot;us&quot;) is registered in England and Wales. We provide a sovereign AI companion platform at meok.ai.
            </p>
            <p>Data controller contact: <a href="mailto:privacy@meok.ai" className="text-[#c9a84c] hover:underline">privacy@meok.ai</a></p>
          </Section>

          <Section id="data-collected" title="2. What data we collect — and why">
            <p>We collect the minimum necessary to provide the service:</p>
            <ul className="list-none space-y-3 pl-0">
              {[
                { label: "Account data", text: "Email address, hashed password, account creation date. Used to identify you and manage your account." },
                { label: "Conversation data", text: "Messages you send to your AI companion, stored in your isolated tenant database. Used only to power your AI — never for training or analysis." },
                { label: "Memory episodes", text: "AI-generated summaries of interactions, tagged and vectorised for semantic search. These live in your sovereign vault and belong to you." },
                { label: "Care metrics (opt-in only)", text: "Anonymised care scores that can be used to improve system-wide model quality. You opt in to this. Default is off." },
                { label: "Technical data", text: "IP address, browser type, session duration. Used only for security, abuse prevention, and diagnosing errors. Not used for profiling." },
                { label: "Payment data", text: "Handled entirely by Stripe. MEOK never sees or stores card details." },
              ].map((item) => (
                <li key={item.label} className="flex flex-col gap-0.5">
                  <span className="font-semibold text-white/75">{item.label}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="what-we-wont-do" title="3. What we will never do with your data">
            <ul className="space-y-2">
              {[
                "Sell it to anyone, ever.",
                "Share it with advertisers.",
                "Use your private conversations to train AI models — ours or anyone else's.",
                "Share it with third parties without your explicit consent, except where required by law.",
                "Use it for purposes other than providing your AI companion service.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-400/60 shrink-0 font-bold">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="data-protection" title="4. How your data is protected">
            <p>
              <Highlight>Tenant isolation:</Highlight> Your account lives in its own isolated namespace in our database. Row-level security policies prevent any cross-tenant access — including by MEOK staff — at the database engine level.
            </p>
            <p>
              <Highlight>Encryption at rest:</Highlight> Your vault is encrypted with AES-256. The key material is derived in part from a secret you control, meaning we cannot bulk-decrypt your conversations even if we wanted to.
            </p>
            <p>
              <Highlight>Encryption in transit:</Highlight> All data in transit uses TLS 1.3.
            </p>
          </Section>

          <Section id="your-rights" title="5. Your rights (UK GDPR)">
            <p>You have real rights over your data, and we make them easy to exercise:</p>
            <ul className="space-y-2">
              {[
                { right: "Access", text: "Request a complete copy of all your data, any time. Settings → Export." },
                { right: "Erasure", text: "Delete your account and all associated data. We purge it within 30 days. No shadow copies." },
                { right: "Portability", text: "Export your data in portable JSON format. Your memories come with you." },
                { right: "Rectification", text: "Correct inaccurate personal data by contacting privacy@meok.ai." },
                { right: "Object", text: "Opt out of the anonymised care metrics programme at any time in Settings." },
              ].map((item) => (
                <li key={item.right} className="flex flex-col gap-0.5">
                  <span className="font-semibold text-white/75">{item.right}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <p>To exercise any right: <a href="mailto:privacy@meok.ai" className="text-[#c9a84c] hover:underline">privacy@meok.ai</a> or use the data tools in Settings.</p>
          </Section>

          <Section id="data-retention" title="6. Data retention &amp; deletion">
            <p>
              <Highlight>Active accounts:</Highlight> Your data is retained for the duration of your account plus 90 days.
            </p>
            <p>
              <Highlight>Deleted accounts:</Highlight> All personal data is permanently removed within 30 days of your deletion request. No backups. No archives.
            </p>
            <p>
              <Highlight>Anonymised care metrics (opt-in):</Highlight> Retained for model improvement with no personal identifiers attached.
            </p>
          </Section>

          <Section id="children" title="7. Children">
            <p>
              MEOK is not intended for children under 13. We do not knowingly collect data from children. A dedicated MEOK KIDS variant with full COPPA/Children&apos;s Code compliance and verified parental consent infrastructure is in development for 2026.
            </p>
          </Section>

          <Section id="policy-changes" title="8. Changes to this policy">
            <p>
              If we make material changes to how we handle your data, we will notify you by email and in-app at least 30 days before the change takes effect. We will never quietly expand what we do with your data without telling you.
            </p>
          </Section>

          <Section id="contact" title="9. Contact">
            <p>
              <Highlight>MEOK AI LABS</Highlight> ·{" "}
              <a href="mailto:privacy@meok.ai" className="text-[#c9a84c] hover:underline">privacy@meok.ai</a>
            </p>
            <p className="text-white/30">
              For complaints to the UK Information Commissioner: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c]/60 hover:text-[#c9a84c]">ico.org.uk</a>
            </p>
          </Section>
        </div>
      </div>

    </div>
  );
}
