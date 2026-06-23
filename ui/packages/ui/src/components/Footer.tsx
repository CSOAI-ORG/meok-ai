import Link from "next/link";
import { cn } from "../lib/utils";
import { colors } from "../tokens";

export interface FooterColumn {
  heading: string;
  links: { href: string; label: string }[];
  dotColor?: string;
}

export interface FooterProps {
  brand?: { name: string; tagline?: string };
  columns?: FooterColumn[];
  bottomText?: string;
  theme?: "dark" | "light";
  className?: string;
}

export function Footer({
  brand = { name: "MEOK.AI", tagline: "A unified Sovereign AI OS for life." },
  columns = [],
  bottomText = `© ${new Date().getFullYear()} MEOK AI LABS · All rights reserved`,
  theme = "dark",
  className,
}: FooterProps) {
  const isDark = theme === "dark";
  const bg = isDark ? "#111111" : colors.creamDark;
  const border = isDark ? "#2a2a3a" : colors.border;
  const text = isDark ? "text-white" : "text-meok-navy";
  const muted = isDark ? "text-white/50" : "text-meok-navy/50";

  return (
    <footer
      className={cn("border-t", className)}
      style={{ background: bg, borderColor: border }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className={cn("font-bold text-xl tracking-tight mb-2", text)}>
              {brand.name.split(".").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span style={{ color: colors.gold }}>.</span>
                  )}
                </span>
              ))}
            </div>
            {brand.tagline && (
              <p className={cn("text-sm leading-relaxed", muted)}>{brand.tagline}</p>
            )}
          </div>

          {/* Link columns */}
          {columns.map((column, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: column.dotColor ?? colors.gold }}
                />
                <span className={cn("text-[11px] font-semibold uppercase tracking-widest", muted)}>
                  {column.heading}
                </span>
              </div>
              <ul className="space-y-2.5">
                {column.links.map((link, linkIdx) => (
                  <li key={`${link.href}-${linkIdx}`}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm transition-colors relative group",
                        isDark ? "text-[#e8e4dc] hover:text-white" : "text-meok-navy/80 hover:text-meok-navy"
                      )}
                    >
                      {link.label}
                      <span className="absolute -bottom-px left-0 right-0 h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderColor: border }}
        >
          <p className={muted}>{bottomText}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className={cn("transition-colors", muted, "hover:text-current")}>
              Privacy
            </Link>
            <Link href="/terms" className={cn("transition-colors", muted, "hover:text-current")}>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
