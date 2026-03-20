"use client";

import { useState, useCallback } from "react";
import { StatusBar } from "./StatusBar";
import { ConsoleModule } from "./modules/ConsoleModule";
import { NeuralDashboard } from "./modules/NeuralDashboard";
import { MemoryExplorer } from "./modules/MemoryExplorer";
import { AgentCouncil } from "./modules/AgentCouncil";
import { RalphModule } from "./modules/RalphModule";

type TabId = "console" | "neural" | "memory" | "agents" | "ralph" | "settings";

interface Tab {
  id: TabId;
  icon: string;
  label: string;
  shortcut: string;
}

const TABS: Tab[] = [
  { id: "console", icon: "⊡", label: "Console", shortcut: "1" },
  { id: "neural", icon: "⬡", label: "Neural", shortcut: "2" },
  { id: "memory", icon: "◈", label: "Memory", shortcut: "3" },
  { id: "agents", icon: "⊛", label: "Agents", shortcut: "4" },
  { id: "ralph", icon: "⊕", label: "Ralph", shortcut: "5" },
];

const SETTINGS_TAB: Tab = { id: "settings", icon: "⚙", label: "Settings", shortcut: "6" };

function getUserDisplay(): string {
  if (typeof window === "undefined") return "OPERATOR";
  try {
    const raw = localStorage.getItem("meok_user");
    if (!raw) return "OPERATOR";
    const u = JSON.parse(raw);
    return (u.name || u.email || "OPERATOR").toUpperCase().slice(0, 12);
  } catch {
    return "OPERATOR";
  }
}

export function TerminalShell() {
  const [activeTab, setActiveTab] = useState<TabId>("console");
  const [collapsed, setCollapsed] = useState(false);
  const userDisplay = getUserDisplay();

  const handleTabClick = useCallback((tabId: TabId) => {
    setActiveTab(tabId);
  }, []);

  const renderModule = () => {
    switch (activeTab) {
      case "console": return <ConsoleModule />;
      case "neural": return <NeuralDashboard />;
      case "memory": return <MemoryExplorer />;
      case "agents": return <AgentCouncil />;
      case "ralph": return <RalphModule />;
      case "settings": return <SettingsPlaceholder />;
      default: return <ConsoleModule />;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "#000000",
        color: "#E5E7EB",
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          height: "40px",
          background: "#050507",
          borderBottom: "1px solid #1a1a2e",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          flexShrink: 0,
          zIndex: 10,
        }}
      >
        {/* Left: logo + title */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              color: "#F59E0B",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              userSelect: "none",
            }}
          >
            ▐██▌
          </div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "#E5E7EB",
            }}
          >
            SOVEREIGN TERMINAL
          </div>
          <div style={{ width: "1px", height: "20px", background: "#1a1a2e" }} />
          <div
            style={{
              fontSize: "10px",
              color: "#6B7280",
              letterSpacing: "0.05em",
            }}
          >
            v3.0.0
          </div>
        </div>

        {/* Right: status + user */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#10B981",
                boxShadow: "0 0 6px #10B981",
              }}
            />
            <span style={{ fontSize: "10px", color: "#10B981", letterSpacing: "0.1em" }}>
              ONLINE
            </span>
          </div>
          <div
            style={{
              fontSize: "10px",
              color: "#6B7280",
              padding: "2px 8px",
              border: "1px solid #1a1a2e",
              borderRadius: "2px",
            }}
          >
            {userDisplay}
          </div>
          <button
            onClick={() => {
              if (confirm("Exit terminal?")) window.location.href = "/dashboard";
            }}
            style={{
              background: "none",
              border: "1px solid #1a1a2e",
              color: "#6B7280",
              cursor: "pointer",
              fontSize: "14px",
              padding: "2px 8px",
              borderRadius: "2px",
              fontFamily: "inherit",
            }}
            title="Exit Terminal"
          >
            ×
          </button>
        </div>
      </div>

      {/* Body: sidebar + content */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Left sidebar */}
        <div
          style={{
            width: collapsed ? "48px" : "200px",
            background: "#050507",
            borderRight: "1px solid #1a1a2e",
            display: "flex",
            flexDirection: "column",
            transition: "width 0.15s ease",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          {/* Collapse toggle */}
          <div
            style={{
              padding: "8px",
              borderBottom: "1px solid #1a1a2e",
              display: "flex",
              justifyContent: collapsed ? "center" : "flex-end",
            }}
          >
            <button
              onClick={() => setCollapsed(!collapsed)}
              style={{
                background: "none",
                border: "none",
                color: "#6B7280",
                cursor: "pointer",
                fontSize: "14px",
                padding: "4px",
                fontFamily: "inherit",
                transition: "color 0.1s",
              }}
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? "▶" : "◀"}
            </button>
          </div>

          {/* Tab list */}
          <div style={{ flex: 1, padding: "8px 0" }}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: collapsed ? "10px 0" : "10px 16px",
                  justifyContent: collapsed ? "center" : "flex-start",
                  background: activeTab === tab.id ? "rgba(245, 158, 11, 0.08)" : "none",
                  border: "none",
                  borderLeft: activeTab === tab.id ? "2px solid #F59E0B" : "2px solid transparent",
                  borderRight: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  color: activeTab === tab.id ? "#F59E0B" : "#6B7280",
                  cursor: "pointer",
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: "12px",
                  textAlign: "left",
                  transition: "all 0.1s",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
                title={collapsed ? `${tab.label} [${tab.shortcut}]` : undefined}
              >
                <span style={{ fontSize: "14px", flexShrink: 0 }}>{tab.icon}</span>
                {!collapsed && (
                  <>
                    <span style={{ flex: 1, letterSpacing: "0.05em", fontSize: "11px" }}>
                      {tab.label}
                    </span>
                    <span style={{ fontSize: "9px", color: "#374151" }}>[{tab.shortcut}]</span>
                  </>
                )}
              </button>
            ))}

            {/* Separator */}
            <div
              style={{
                height: "1px",
                background: "#1a1a2e",
                margin: "8px 12px",
              }}
            />

            {/* Settings */}
            <button
              onClick={() => handleTabClick("settings")}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: collapsed ? "10px 0" : "10px 16px",
                justifyContent: collapsed ? "center" : "flex-start",
                background: activeTab === "settings" ? "rgba(245, 158, 11, 0.08)" : "none",
                border: "none",
                borderLeft: activeTab === "settings" ? "2px solid #F59E0B" : "2px solid transparent",
                borderRight: "none",
                borderTop: "none",
                borderBottom: "none",
                color: activeTab === "settings" ? "#F59E0B" : "#6B7280",
                cursor: "pointer",
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: "12px",
                textAlign: "left",
                transition: "all 0.1s",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
              title={collapsed ? "Settings [6]" : undefined}
            >
              <span style={{ fontSize: "14px", flexShrink: 0 }}>{SETTINGS_TAB.icon}</span>
              {!collapsed && (
                <>
                  <span style={{ flex: 1, letterSpacing: "0.05em", fontSize: "11px" }}>
                    Settings
                  </span>
                  <span style={{ fontSize: "9px", color: "#374151" }}>[6]</span>
                </>
              )}
            </button>
          </div>

          {/* Bottom version info */}
          {!collapsed && (
            <div
              style={{
                padding: "8px 16px",
                borderTop: "1px solid #1a1a2e",
                fontSize: "9px",
                color: "#374151",
                letterSpacing: "0.05em",
              }}
            >
              <div>SOV3 TERMINAL</div>
              <div style={{ marginTop: "2px" }}>BUILD 3.0.0</div>
            </div>
          )}
        </div>

        {/* Main content area */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            background: "#000000",
          }}
        >
          {renderModule()}
        </div>
      </div>

      {/* Status bar */}
      <StatusBar />
    </div>
  );
}

function SettingsPlaceholder() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#374151",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <div style={{ fontSize: "32px" }}>⚙</div>
      <div style={{ fontSize: "11px", letterSpacing: "0.1em" }}>SETTINGS — COMING SOON</div>
    </div>
  );
}
