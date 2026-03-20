"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TerminalShell } from "@/components/terminal/TerminalShell";

export default function TerminalPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("meok_token");
    if (!token) {
      router.replace("/login");
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  if (authenticated === null) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "#000000",
          color: "#F59E0B",
          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
          fontSize: "12px",
          letterSpacing: "0.1em",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "8px", opacity: 0.6 }}>SOVEREIGN TERMINAL</div>
          <div>
            <span style={{ animation: "pulse 1s infinite" }}>▋</span>
            {" AUTHENTICATING..."}
          </div>
        </div>
      </div>
    );
  }

  return <TerminalShell />;
}
