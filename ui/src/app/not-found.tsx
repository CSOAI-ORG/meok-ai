import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Large dim 404 */}
        <div className="font-black text-[12rem] leading-none text-white/[0.04] select-none mb-0 -mt-8">
          404
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-bold -mt-8 mb-3">
          This page doesn&apos;t exist.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Your AI does though.
          </span>
        </h1>

        {/* Sub-message */}
        <p className="text-sm text-white/40 mb-8 leading-relaxed">
          It might have moved, or maybe you followed a bad link.
        </p>

        {/* Console message */}
        <div className="mb-8 mx-auto max-w-sm">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-3 font-mono text-xs text-left">
            <span className="text-green-400">[COUNCIL]</span>{" "}
            <span className="text-white/40">Page not found. Redirecting care to home.</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white/[0.06] text-white/70 hover:bg-white/[0.1] hover:text-white transition-colors text-sm font-medium border border-white/[0.08]"
          >
            Go home →
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all text-sm shadow-lg shadow-cyan-500/20"
          >
            Hatch your AI →
          </Link>
        </div>
      </div>
    </div>
  );
}
