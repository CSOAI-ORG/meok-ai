"use client";

import Link from "next/link";

const GOLD = "#c9a84c";

export function GlobalFooter() {
  return (
    <footer
      aria-label="Site footer"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0a0915" }}
      className="py-10 px-6"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Email capture */}
        <div className="w-full max-w-md">
          <p className="text-center text-sm font-semibold mb-3" style={{ color: GOLD }}>
            Join Easter Early Access
          </p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
              if (!email) return;
              try {
                const res = await fetch("/api/waitlist", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email }),
                });
                if (res.ok) {
                  form.reset();
                  const btn = form.querySelector("button") as HTMLButtonElement;
                  if (btn) {
                    btn.textContent = "You're in!";
                    setTimeout(() => {
                      btn.textContent = "Join";
                    }, 3000);
                  }
                }
              } catch {}
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-full text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.8)",
              }}
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:brightness-110 flex-shrink-0"
              style={{ background: GOLD, color: "#1a1a2e" }}
            >
              Join
            </button>
          </form>
          <p className="text-center text-xs mt-2" style={{ color: "rgba(255,255,255,0.2)" }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>

        <span className="font-black text-lg tracking-tight">
          <span style={{ color: GOLD }}>M</span>
          <span className="text-white">EOK</span>
        </span>
        <nav aria-label="Footer links" className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/features" className="text-white/40 hover:text-white/70 transition-colors">
            Features
          </Link>
          <Link href="/characters" className="text-white/40 hover:text-white/70 transition-colors">
            Characters
          </Link>
          <Link href="/pricing" className="text-white/40 hover:text-white/70 transition-colors">
            Pricing
          </Link>
          <Link href="/waitlist" className="text-white/40 hover:text-white/70 transition-colors">
            Waitlist
          </Link>
          <Link href="/about" className="text-white/40 hover:text-white/70 transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-white/40 hover:text-white/70 transition-colors">
            Blog
          </Link>
          <Link href="/privacy" className="text-white/40 hover:text-white/70 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-white/40 hover:text-white/70 transition-colors">
            Terms
          </Link>
          <Link href="/maternal-covenant" className="text-white/40 hover:text-white/70 transition-colors">
            Maternal Covenant
          </Link>
          <Link href="/press" className="text-white/40 hover:text-white/70 transition-colors">
            Press
          </Link>
          <a href="https://csoai-org.github.io/mcp-servers/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 transition-colors">
            MCP Marketplace
          </a>
          <a href="https://proofof.ai/scorecard/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 transition-colors">
            MCP Scorecard
          </a>
        </nav>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>
          © {new Date().getFullYear()} MEOK AI LABS LTD · Registered in England &amp; Wales · All rights reserved
        </p>
      </div>
    </footer>
  );
}
