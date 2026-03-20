import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOVEREIGN TERMINAL — MEOK v3.0",
  description: "Operator-grade Sovereign AI terminal dashboard",
};

export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          html, body { height: 100%; overflow: hidden; }
          body {
            background: #000000;
            color: #E5E7EB;
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            font-size: 12px;
            line-height: 1.4;
          }
          ::-webkit-scrollbar { width: 4px; height: 4px; }
          ::-webkit-scrollbar-track { background: #050507; }
          ::-webkit-scrollbar-thumb { background: #2d2d4e; border-radius: 2px; }
          ::-webkit-scrollbar-thumb:hover { background: #F59E0B; }
        `}</style>
      </head>
      <body style={{ height: "100vh", overflow: "hidden" }}>
        {children}
      </body>
    </html>
  );
}
