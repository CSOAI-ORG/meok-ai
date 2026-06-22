"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, Vote, UserCircle, CheckCircle2, ArrowRight, Twitter, Linkedin } from "lucide-react";
import { WaitlistCount } from "@/components/waitlist-count";

const BENEFITS = [
  {
    icon: Eye,
    title: "Watch agents live",
    description: "Follow MEOK Town, the Council chamber, and agent hives in real time.",
  },
  {
    icon: Vote,
    title: "Vote in council",
    description: "Have a say in which protocols, characters, and civilizations ship next.",
  },
  {
    icon: UserCircle,
    title: "Create a character",
    description: "Reserve your name and archetype before the public launch.",
  },
];

export function WaitlistClient() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState("");
  const [count, setCount] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmed || !emailRegex.test(trimmed)) {
      setStatus("err");
      setErrMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          interest: "public-beta",
          metadata: { source: window.location.pathname, campaign: "public-beta" },
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("ok");
        if (typeof data.count === "number") setCount(data.count);
      } else {
        setStatus("err");
        setErrMsg(data.error || "Signup failed. Please try again.");
      }
    } catch {
      setStatus("err");
      setErrMsg("Network error. Please try again.");
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      {/* Hero */}
      <section className="relative px-6 pt-28 pb-20 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.10)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(45,155,138,0.08)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
          Public Beta
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          Join the{" "}
          <span className="text-gradient-gold">MEOK public beta</span>.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          Be first to watch sovereign agents work together, vote in the BFT council,
          and create a character that is yours from day one.
        </p>

        <div className="mx-auto mt-6 flex justify-center">
          <WaitlistCount fallback={847} />
        </div>

        {/* Form card */}
        <div className="mx-auto mt-10 max-w-xl">
          {status === "ok" ? (
            <div className="rounded-2xl border border-[#2d9b8a]/30 bg-[#2d9b8a]/10 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2d9b8a]/20">
                <CheckCircle2 className="h-7 w-7 text-[#2d9b8a]" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-white">You&apos;re in line.</h2>
              <p className="mx-auto mt-2 max-w-sm text-white/60">
                We&apos;ll email <span className="text-[#c9a84c] font-semibold">{email}</span> when
                your beta spot is ready.
              </p>
              {count !== null && (
                <p className="mt-3 text-sm text-white/40">
                  Pioneer number{" "}
                  <span className="font-mono text-[#c9a84c]">#{count.toLocaleString()}</span>
                </p>
              )}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/beta"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#c9a84c] px-6 py-3 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
                >
                  See your spot <ArrowRight size={16} />
                </Link>
                <Link
                  href="/civilizations"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore civilizations
                </Link>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === "loading"}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 focus:border-[#c9a84c] focus:outline-none disabled:opacity-70"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-xl bg-[#c9a84c] px-6 py-4 font-bold text-[#0d0c18] transition hover:bg-[#b8963e] disabled:opacity-70 whitespace-nowrap"
                >
                  {status === "loading" ? "Joining…" : "Join the beta"}
                </button>
              </div>
              {status === "err" && (
                <p className="mt-3 text-left text-sm text-red-400">{errMsg}</p>
              )}
              <p className="mt-3 text-center text-xs text-white/30">
                No spam. Unsubscribe anytime. Beta access is rolling out in waves.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#c9a84c]/20"
              >
                <div className="icon-gold mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Share teaser */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <p className="text-sm text-white/40">
          Know someone who should be early? Share the waitlist.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <a
            href="https://twitter.com/intent/tweet?text=I%20just%20joined%20the%20MEOK%20public%20beta%20%E2%80%94%20sovereign%20AI%20agents%20you%20can%20watch%2C%20vote%20on%2C%20and%20own.&url=https%3A%2F%2Ftry.meok.ai%2Fwaitlist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10"
          >
            <Twitter size={16} /> Tweet
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Ftry.meok.ai%2Fwaitlist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
