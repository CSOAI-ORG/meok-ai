'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to error reporting service in production
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#0d0c18] flex flex-col items-center justify-center text-center px-6 py-24">
      {/* Icon */}
      <div className="w-16 h-16 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/5 flex items-center justify-center mb-8">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        </svg>
      </div>

      <p className="text-[#c9a84c] font-bold tracking-widest text-xs uppercase mb-4">
        Something went wrong
      </p>
      <h1 className="font-black text-[#f5f0e8] text-4xl sm:text-5xl mb-4">
        A glitch in the vault.
      </h1>
      <p className="text-[#f5f0e8]/50 text-lg max-w-md mb-10">
        An unexpected error occurred. Your data is safe — this is a display error, not a data error.
      </p>

      {error.digest && (
        <p className="text-white/20 text-xs font-mono mb-8">
          Error ID: {error.digest}
        </p>
      )}

      {/* Actions */}
      <div className="flex gap-4 flex-wrap justify-center mb-12">
        <button type="button"
          onClick={reset}
          className="bg-[#c9a84c] text-[#0d0c18] font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
        <Link
          href="/"
          className="border border-[#c9a84c]/40 text-[#f5f0e8] font-bold px-8 py-3 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
        >
          Back home
        </Link>
      </div>

      {/* Support note */}
      <p className="text-white/25 text-sm">
        If this keeps happening, contact{' '}
        <a href="mailto:support@meok.ai" className="text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors">
          support@meok.ai
        </a>
      </p>
    </main>
  );
}
