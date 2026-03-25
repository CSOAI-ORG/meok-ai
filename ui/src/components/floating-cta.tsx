'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

/**
 * Floating CTA bar — appears after first viewport scroll.
 * Dismissible (remembers via sessionStorage).
 * Hidden on /onboarding and /dashboard routes.
 */
export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  // Don't show on onboarding, dashboard, or birth pages
  const hidden = pathname.startsWith('/onboarding') ||
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/birth') ||
    pathname.startsWith('/hatch');

  useEffect(() => {
    if (hidden) return;
    if (sessionStorage.getItem('meok-cta-dismissed')) {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hidden]);

  if (hidden || dismissed || !visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-3 px-4 py-3 md:bottom-6 md:left-auto md:right-6 md:rounded-full md:px-6 md:py-3 md:w-auto shadow-2xl"
      style={{
        background: '#c9a84c',
        boxShadow: '0 8px 32px rgba(201,168,76,0.4)',
      }}
    >
      <Link
        href="/onboarding"
        className="flex items-center gap-2 font-bold text-sm text-[#1a1a2e] hover:opacity-90 transition-opacity"
      >
        Hatch your AI free
        <ArrowRight className="w-4 h-4" />
      </Link>
      <button
        onClick={() => {
          setDismissed(true);
          sessionStorage.setItem('meok-cta-dismissed', '1');
        }}
        className="text-[#1a1a2e]/50 hover:text-[#1a1a2e] transition-colors ml-2"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
