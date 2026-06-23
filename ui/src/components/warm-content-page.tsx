import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTA {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "soft";
}

interface WarmContentPageProps {
  title: string;
  description: string;
  eyebrow?: string;
  children: React.ReactNode;
  ctas?: CTA[];
}

export function WarmContentPage({
  title,
  description,
  eyebrow,
  children,
  ctas,
}: WarmContentPageProps) {
  return (
    <main className="meok-light-page min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-meok-gold/30 bg-meok-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-meok-gold mb-6">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-black text-meok-navy leading-tight mb-5">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-meok-muted max-w-2xl leading-relaxed">
          {description}
        </p>

        <div className="mt-10 prose prose-lg max-w-none text-[#4a4a3a] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-meok-navy [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:leading-relaxed">
          {children}
        </div>

        {ctas && ctas.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-4">
            {ctas.map((cta, index) => {
              const isPrimary = cta.variant === "primary" || index === 0;
              const isSecondary = cta.variant === "secondary";
              const base =
                "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-meok-gold/50";
              const styles = isPrimary
                ? "bg-meok-gold text-meok-deep hover:bg-meok-gold-dark shadow-[0_8px_24px_rgba(201,168,76,0.25)]"
                : isSecondary
                  ? "border-2 border-meok-gold text-meok-gold hover:bg-meok-gold/10"
                  : "bg-meok-cream-dark text-meok-navy hover:bg-meok-border";
              const El = cta.external ? "a" : Link;
              const props = cta.external
                ? { href: cta.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: cta.href };
              return (
                <El
                  key={cta.href + cta.label}
                  {...props}
                  className={`${base} ${styles}`}
                >
                  {cta.label}
                  {isPrimary && <ArrowRight size={16} />}
                </El>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
