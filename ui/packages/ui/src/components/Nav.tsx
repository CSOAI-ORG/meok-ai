"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { colors } from "../tokens";

export interface NavLink {
  href: string;
  label: string;
}

export interface NavProps {
  brand?: { name: string; href: string };
  links?: NavLink[];
  cta?: { href: string; label: string };
  theme?: "dark" | "light";
  className?: string;
}

export function Nav({
  brand = { name: "MEOK.AI", href: "/" },
  links = [],
  cta = { href: "/start", label: "Start Free" },
  theme = "dark",
  className,
}: NavProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isDark = theme === "dark";
  const bg = scrolled
    ? isDark
      ? `${colors.deep}f7`
      : `${colors.cream}f7`
    : isDark
      ? `${colors.deep}ee`
      : `${colors.cream}ee`;
  const text = isDark ? "text-white" : "text-meok-navy";
  const muted = isDark ? "text-white/60" : "text-meok-navy/60";
  const border = isDark ? "rgba(255,255,255,0.08)" : `${colors.border}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-shadow backdrop-blur-xl",
        className
      )}
      style={{ background: bg, borderBottom: `1px solid ${border}` }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href={brand.href}
          className={cn("font-black text-base tracking-tight", text)}
        >
          {brand.name.split(".").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span style={{ color: colors.gold }}>.</span>
              )}
            </span>
          ))}
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  active ? text : muted,
                  "hover:text-current"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href={cta.href}
            className="text-sm px-5 py-2 rounded-full font-bold transition-all hover:brightness-110"
            style={{ background: colors.gold, color: colors.deep }}
          >
            {cta.label}
          </Link>
        </div>

        <button
          className={cn("md:hidden p-1", muted)}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-14 z-40 flex flex-col overflow-y-auto transition-all",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{
          background: isDark ? `${colors.deep}f8` : `${colors.cream}f8`,
          backdropFilter: "blur(24px)",
          bottom: 0,
        }}
      >
        <div className="flex-1 p-4 space-y-1">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-3 rounded-xl text-base font-semibold transition-colors",
                  active
                    ? isDark
                      ? "text-meok-gold bg-white/[0.05]"
                      : "text-meok-gold bg-meok-gold/10"
                    : text
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="p-4 border-t" style={{ borderColor: border }}>
          <Link
            href={cta.href}
            className="block w-full text-center py-3 rounded-xl font-bold transition-all hover:brightness-110"
            style={{ background: colors.gold, color: colors.deep }}
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
