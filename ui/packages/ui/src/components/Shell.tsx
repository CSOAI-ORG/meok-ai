import { Nav, type NavProps } from "./Nav";
import { Footer, type FooterProps } from "./Footer";
import { cn } from "../lib/utils";

export interface ShellProps {
  children: React.ReactNode;
  nav?: Omit<NavProps, "className">;
  footer?: Omit<FooterProps, "className">;
  theme?: "dark" | "light";
  className?: string;
}

export function Shell({
  children,
  nav,
  footer,
  theme = "dark",
  className,
}: ShellProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <Nav theme={theme} {...nav} />
      <main className="flex-1 pt-14">{children}</main>
      <Footer theme={theme} {...footer} />
    </div>
  );
}
