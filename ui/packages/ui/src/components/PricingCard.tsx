import { cn } from "../lib/utils";
import { colors } from "../tokens";

export interface PricingProduct {
  id: string;
  name: string;
  price: string;
  sub: string;
  description: string;
  href: string;
  featured?: boolean;
}

export interface PricingCardProps {
  product: PricingProduct;
  theme?: "dark" | "light";
  className?: string;
}

export function PricingCard({ product, theme = "light", className }: PricingCardProps) {
  const isDark = theme === "dark";
  const featured = product.featured ?? false;

  const wrapperBg = featured
    ? colors.navy
    : isDark
      ? colors.surface1
      : "#ffffff";
  const wrapperText = featured || isDark ? "text-white" : "text-meok-navy";
  const subText = featured || isDark ? "text-white/60" : "text-meok-navy/60";
  const borderColor = featured ? colors.gold : isDark ? "rgba(255,255,255,0.08)" : `${colors.border}`;

  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl p-6 border-2 transition-all hover:-translate-y-1 hover:shadow-xl",
        wrapperText,
        className
      )}
      style={{
        background: wrapperBg,
        borderColor,
      }}
    >
      <div
        className="text-xs font-black uppercase tracking-widest mb-1"
        style={{ color: colors.gold }}
      >
        {product.name}
      </div>
      <div className="text-3xl font-black leading-none mb-1">{product.price}</div>
      <div className={cn("text-xs mb-4", subText)}>{product.sub}</div>
      <p className={cn("text-sm leading-relaxed mb-6 flex-1", subText)}>{product.description}</p>
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "block text-center py-3 rounded-xl text-sm font-bold transition-all hover:brightness-110",
          featured
            ? ""
            : isDark
              ? "border border-white/20"
              : "border border-meok-navy/20"
        )}
        style={{
          background: featured ? colors.gold : "transparent",
          color: featured ? colors.deep : undefined,
        }}
      >
        {product.name.includes("Kit") || product.name.includes("Cert")
          ? `Buy ${product.name}`
          : `Subscribe ${product.name}`} →
      </a>
    </div>
  );
}
