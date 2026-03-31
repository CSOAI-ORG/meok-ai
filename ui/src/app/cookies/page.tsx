import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | MEOK.AI",
  description:
    "MEOK.AI uses minimal, privacy-respecting cookies. Read our cookie policy to understand what we collect and why.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-[#faf9f6]">
        {/* Hero */}
        <section className="bg-[#1a1a2e] text-white py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-4">🍪</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Cookie Policy
            </h1>
            <p className="text-[#9a9a8a] text-lg">
              We use cookies minimally and transparently. Your privacy is a first-class concern.
            </p>
            <p className="text-[#9a9a8a]/60 text-sm mt-3">
              Last updated: April 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-12 text-[#2a2a2a]">

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1a1a2e]">What are cookies?</h2>
              <p className="text-[#4a4a5a] leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and provide a better experience. MEOK.AI uses cookies strictly for essential functionality and anonymous analytics — never for advertising or selling your data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1a1a2e]">Cookies we use</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "meok_auth",
                    type: "Essential",
                    purpose: "Keeps you signed in to your MEOK account. Without this cookie, you would be signed out on every page.",
                    duration: "30 days",
                    color: "bg-green-100 text-green-800",
                  },
                  {
                    name: "meok_session",
                    type: "Essential",
                    purpose: "Maintains your session state across pages. Required for the dashboard and chat to function.",
                    duration: "Session",
                    color: "bg-green-100 text-green-800",
                  },
                  {
                    name: "meok_preferences",
                    type: "Functional",
                    purpose: "Stores your UI preferences (theme, sidebar state, language) so they persist across visits.",
                    duration: "1 year",
                    color: "bg-blue-100 text-blue-800",
                  },
                  {
                    name: "ph_*",
                    type: "Analytics",
                    purpose: "PostHog anonymous analytics to understand which features are used. No personal data collected. IP addresses are anonymised.",
                    duration: "1 year",
                    color: "bg-amber-100 text-amber-800",
                  },
                ].map((cookie) => (
                  <div key={cookie.name} className="border border-[#e8e4dc] rounded-2xl p-5 bg-white">
                    <div className="flex items-start justify-between mb-2 gap-3 flex-wrap">
                      <code className="text-sm font-mono text-[#1a1a2e] bg-[#f5f0e8] px-2 py-0.5 rounded">
                        {cookie.name}
                      </code>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cookie.color}`}>
                        {cookie.type}
                      </span>
                    </div>
                    <p className="text-sm text-[#4a4a5a] leading-relaxed mb-2">{cookie.purpose}</p>
                    <p className="text-xs text-[#9a9a8a]">Duration: {cookie.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1a1a2e]">Cookies we never use</h2>
              <ul className="space-y-2 text-[#4a4a5a]">
                {[
                  "❌ Advertising or tracking cookies",
                  "❌ Third-party social media tracking pixels",
                  "❌ Cross-site tracking of any kind",
                  "❌ Fingerprinting or device identification",
                  "❌ Any cookies that share data with advertisers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1a1a2e]">Managing cookies</h2>
              <p className="text-[#4a4a5a] leading-relaxed mb-4">
                You can control cookies through your browser settings. Disabling essential cookies will prevent you from signing in to MEOK. Analytics cookies can be disabled without affecting core functionality.
              </p>
              <p className="text-[#4a4a5a] leading-relaxed">
                Most browsers allow you to view, delete, and block cookies. Visit your browser&apos;s help documentation for instructions:
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-[#4a4a5a]">
                <li>• Chrome: Settings → Privacy &amp; Security → Cookies</li>
                <li>• Firefox: Settings → Privacy &amp; Security → Cookies and Site Data</li>
                <li>• Safari: Preferences → Privacy → Manage Website Data</li>
                <li>• Edge: Settings → Privacy, Search &amp; Services → Cookies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1a1a2e]">Your sovereignty</h2>
              <p className="text-[#4a4a5a] leading-relaxed">
                MEOK is built on sovereign AI principles. Your data — including cookie data — is yours. You can export your full MEOK data at any time from your dashboard settings, and delete your account with one click. We do not sell cookie data to any third party.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1a1a2e]">Contact</h2>
              <p className="text-[#4a4a5a] leading-relaxed">
                Questions about our cookie policy? Email us at{" "}
                <a href="mailto:privacy@meok.ai" className="text-[#c9a84c] hover:underline font-medium">
                  privacy@meok.ai
                </a>
                . We respond within 48 hours.
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
