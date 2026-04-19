import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found · MEOK AI',
  description: 'This page has hatched and flown away. Navigate back to MEOK AI.',
};

export default function NotFound() {
  return (
    <>
      <div className="h-[94px]" aria-hidden />
      <main className="min-h-[calc(100vh-94px)] bg-[#0d0c18] flex flex-col items-center justify-center text-center px-6 py-24">
        {/* Giant cracked egg SVG */}
        <svg width="120" height="140" viewBox="0 0 120 140" fill="none" className="mb-8 opacity-50">
          <ellipse cx="60" cy="72" rx="46" ry="58" fill="#1a1a2e" stroke="#c9a84c" strokeWidth="1.5" />
          {/* Crack lines */}
          <path d="M60 20 L55 45 L65 55 L58 80" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
          <path d="M55 45 L45 48" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        <p className="text-[#c9a84c] font-bold tracking-widest text-xs uppercase mb-4">
          404 — Lost in the shell
        </p>
        <h1 className="font-black text-[#f5f0e8] text-5xl mb-4">
          Your AI couldn&apos;t find it either.
        </h1>
        <p className="text-[#f5f0e8]/50 text-lg max-w-md mb-10">
          This page has hatched and flown away, or it never existed. Either way, your sovereign AI is still here.
        </p>

        {/* Primary CTA */}
        <div className="flex gap-4 flex-wrap justify-center mb-12">
          <Link
            href="/"
            className="bg-[#c9a84c] text-[#0d0c18] font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Back home
          </Link>
          <Link
            href="/start"
            className="border border-[#c9a84c]/40 text-[#f5f0e8] font-bold px-8 py-3 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
          >
            Start your AI
          </Link>
        </div>

        {/* Popular pages */}
        <div className="border border-white/10 rounded-2xl bg-white/[0.02] p-6 max-w-md w-full">
          <p className="text-white/30 text-xs uppercase tracking-[0.15em] font-bold mb-4">
            Popular pages
          </p>
          <ul className="space-y-2 text-sm">
            {[
              ['/start', 'Start — create your AI companion'],
              ['/birth', 'Birth — meet the archetypes'],
              ['/pricing', 'Pricing — plans and tiers'],
              ['/faq', 'FAQ — common questions'],
              ['/blog', 'Blog — insights and research'],
              ['/about', 'About — our mission'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-2 text-[#f5f0e8]/60 hover:text-[#c9a84c] transition-colors group"
                >
                  <span className="text-[#c9a84c]/40 group-hover:text-[#c9a84c] transition-colors">→</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
