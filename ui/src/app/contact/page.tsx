import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — MEOK AI LABS",
  description: "Get in touch with MEOK AI LABS. Questions, partnerships, press, or support — we're here to help.",
  alternates: { canonical: "https://meok.ai/contact" },
};

const DEEP = '#0d0c18';
const GOLD = '#c9a84c';

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://meok.ai/contact" },
  ],
};

const CONTACT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — MEOK AI LABS",
  url: "https://meok.ai/contact",
  description: "Get in touch with MEOK AI LABS. Questions, partnerships, press, or support — we're here to help.",
  mainEntity: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
    contactPoint: [
      { "@type": "ContactPoint", contactType: "customer support", email: "support@meok.ai" },
      { "@type": "ContactPoint", contactType: "sales", email: "partners@meok.ai" },
      { "@type": "ContactPoint", contactType: "press", email: "press@meok.ai" },
      { "@type": "ContactPoint", contactType: "general enquiries", email: "hello@meok.ai" },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: DEEP }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_JSONLD) }} />
      <section className="relative pt-32 pb-20 px-6 text-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${GOLD} 1px, transparent 1px), linear-gradient(90deg, ${GOLD} 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>Contact</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Talk to us</h1>
          <p className="text-white/50 text-lg">
            Whether you have a question about sovereign AI, want to partner, or need support — we read every message.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/[0.08] p-6 bg-white/[0.03]">
              <h2 className="text-lg font-bold mb-2" style={{ color: GOLD }}>General enquiries</h2>
              <a href="mailto:hello@meok.ai" className="text-white/70 hover:text-white transition-colors">
                hello@meok.ai
              </a>
            </div>
            <div className="rounded-2xl border border-white/[0.08] p-6 bg-white/[0.03]">
              <h2 className="text-lg font-bold mb-2" style={{ color: GOLD }}>Press</h2>
              <a href="mailto:press@meok.ai" className="text-white/70 hover:text-white transition-colors">
                press@meok.ai
              </a>
            </div>
            <div className="rounded-2xl border border-white/[0.08] p-6 bg-white/[0.03]">
              <h2 className="text-lg font-bold mb-2" style={{ color: GOLD }}>Support</h2>
              <a href="mailto:support@meok.ai" className="text-white/70 hover:text-white transition-colors">
                support@meok.ai
              </a>
            </div>
            <div className="rounded-2xl border border-white/[0.08] p-6 bg-white/[0.03]">
              <h2 className="text-lg font-bold mb-2" style={{ color: GOLD }}>Partnerships</h2>
              <a href="mailto:partners@meok.ai" className="text-white/70 hover:text-white transition-colors">
                partners@meok.ai
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] p-6 bg-white/[0.03]">
            <h2 className="text-lg font-bold mb-4" style={{ color: GOLD }}>Send a message</h2>
            <form
              action="mailto:hello@meok.ai"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-white/50 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a84c]/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a84c]/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a84c]/50"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-sm bg-[#c9a84c] text-[#1a1a2e] hover:bg-[#d4b463] transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Link href="/" className="text-white/40 hover:text-white/70 text-sm transition-colors">
            &larr; Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
