"use client";

import Link from "next/link";
import { Twitter, Linkedin, Link as LinkIcon, ArrowRight, Globe } from "lucide-react";

const SHARE_URL = "https://try.meok.ai/waitlist";
const SHARE_TEXT =
  "I just joined the MEOK public beta — sovereign AI agents you can watch, vote on, and own.";

export function BetaClient() {
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    SHARE_TEXT
  )}&url=${encodeURIComponent(SHARE_URL)}`;
  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    SHARE_URL
  )}`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      <section className="relative px-6 pt-28 pb-20 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.10)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#2d9b8a]/30 bg-[#2d9b8a]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2d9b8a]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2d9b8a] animate-pulse" />
          Beta Reservation Confirmed
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          You&apos;re in line.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          Beta spots are rolling out in waves. While you wait, explore the first live
          civilization and share the waitlist with other builders.
        </p>

        {/* Share buttons */}
        <div className="mx-auto mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={twitterHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <Twitter size={18} /> Share on X
          </a>
          <a
            href={linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <Linkedin size={18} /> Share on LinkedIn
          </a>
          <CopyLinkButton />
        </div>

        {/* CTA */}
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-[#c9a84c]/20 bg-[#c9a84c]/5 p-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a84c]/15">
            <Globe className="h-6 w-6 text-[#c9a84c]" />
          </div>
          <h2 className="mt-4 text-xl font-bold text-white">
            Explore Aethelgard while you wait
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-white/55">
            The EU Finance Hive is live now. Watch ministers debate, vote in council,
            and see the economy move in real time.
          </p>
          <Link
            href="/civilizations"
            className="mx-auto mt-6 inline-flex items-center gap-2 rounded-xl bg-[#c9a84c] px-6 py-3 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
          >
            Enter Aethelgard <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function CopyLinkButton() {
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(SHARE_URL);
          const el = document.getElementById("copy-feedback");
          if (el) {
            el.textContent = "Copied!";
            setTimeout(() => (el.textContent = "Copy link"), 2000);
          }
        } catch {
          // ignore
        }
      }}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 font-semibold text-white transition hover:bg-white/10"
    >
      <LinkIcon size={18} /> <span id="copy-feedback">Copy link</span>
    </button>
  );
}
