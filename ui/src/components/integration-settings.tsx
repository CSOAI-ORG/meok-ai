"use client";

import { useState, useEffect } from "react";
import { Mic, Key, Check, AlertCircle, ExternalLink, Loader2 } from "lucide-react";

interface VoiceConfig {
  provider: string;
  status: "missing" | "configured" | "error";
  keyName: string;
  description: string;
}

interface IntegrationConfig {
  provider: string;
  status: "missing" | "configured" | "error";
  keyName: string;
  description: string;
}

export default function IntegrationSettings() {
  const [loading, setLoading] = useState(false);
  const [discordUrl, setDiscordUrl] = useState("");
  const [testSent, setTestSent] = useState<Record<string, "pending" | "success" | "error">>({});

  // Voice providers
  const voiceProviders: VoiceConfig[] = [
    { provider: "elevenlabs", status: "missing", keyName: "ELEVENLABS_API_KEY", description: "Premium voice synthesis - natural sounding voices" },
    { provider: "cartesia", status: "missing", keyName: "CARTESIA_API_KEY", description: "Alternative voice API - fast generation" },
  ];

  // Gaming integrations
  const integrations: IntegrationConfig[] = [
    { provider: "steam", status: "missing", keyName: "STEAM_API_KEY", description: "Connect your Steam account for game data" },
    { provider: "twitch", status: "missing", keyName: "TWITCH_CLIENT_ID", description: "Stream notifications and viewer engagement" },
    { provider: "rawg", status: "missing", keyName: "RAWG_API_KEY", description: "Game database and reviews" },
  ];

  return (
    <div className="space-y-6">
      {/* Voice Section */}
      <div>
        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
          <Mic className="w-5 h-5" /> Voice APIs
        </h3>
        <div className="space-y-2">
          {voiceProviders.map((v) => (
            <div key={v.provider} className="p-3 rounded-lg flex items-center justify-between" style={{ background: "#1a1a2e" }}>
              <div>
                <div className="font-medium capitalize">{v.provider}</div>
                <div className="text-sm" style={{ opacity: 0.6 }}>{v.description}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  v.status === "configured" ? "bg-green-900 text-green-300" : 
                  v.status === "error" ? "bg-red-900 text-red-300" : "bg-yellow-900 text-yellow-300"
                }`}>
                  {v.status === "configured" ? "✓ Connected" : v.status === "error" ? "✗ Error" : "Not configured"}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs mt-2" style={{ opacity: 0.5 }}>
          Add API keys to .env.local to enable voice features
        </p>
      </div>

      {/* Gaming Integrations */}
      <div>
        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
          <Key className="w-5 h-5" /> Gaming Integrations
        </h3>
        <div className="space-y-2">
          {integrations.map((i) => (
            <div key={i.provider} className="p-3 rounded-lg flex items-center justify-between" style={{ background: "#1a1a2e" }}>
              <div>
                <div className="font-medium capitalize">{i.provider}</div>
                <div className="text-sm" style={{ opacity: 0.6 }}>{i.description}</div>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                i.status === "configured" ? "bg-green-900 text-green-300" : "bg-yellow-900 text-yellow-300"
              }`}>
                {i.status === "configured" ? "✓ Connected" : "Not configured"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Discord Section */}
      <div>
        <h3 className="text-lg font-bold mb-3">Discord Webhook</h3>
        <div className="space-y-3">
          <input
            type="text"
            value={discordUrl}
            onChange={(e) => setDiscordUrl(e.target.value)}
            placeholder="https://discord.com/api/webhooks/..."
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10"
          />
          <div className="flex gap-2">
            <button
              onClick={async () => {
                if (!discordUrl) return;
                setLoading(true);
                try {
                  const res = await fetch("/api/discord/webhook", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ action: "test", webhookUrl: discordUrl }),
                  });
                  setTestSent({ ...testSent, discord: res.ok ? "success" : "error" });
                } catch {
                  setTestSent({ ...testSent, discord: "error" });
                }
                setLoading(false);
              }}
              disabled={loading || !discordUrl}
              className="px-4 py-2 rounded-lg bg-white/10 font-medium disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Test Webhook"}
            </button>
            <a
              href="https://discord.com/developers/applications"
              target="_blank"
              rel="noopener"
              className="px-4 py-2 rounded-lg bg-white/10 font-medium flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" /> Get Webhook URL
            </a>
          </div>
          {testSent.discord === "success" && (
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <Check className="w-4 h-4" /> Test message sent!
            </div>
          )}
          {testSent.discord === "error" && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" /> Failed to send - check URL
            </div>
          )}
        </div>
      </div>

      {/* Quick Guide */}
      <div className="p-4 rounded-lg" style={{ background: "#1a1a2e" }}>
        <h4 className="font-medium mb-2">Quick Setup Guide</h4>
        <ol className="text-sm space-y-1 list-decimal list-inside" style={{ opacity: 0.8 }}>
          <li>Get API keys from each service's developer portal</li>
          <li>Add keys to <code className="bg-white/10 px-1 rounded">.env.local</code></li>
          <li>Restart the dev server for changes to take effect</li>
          <li>Test your integrations in the Settings panel</li>
        </ol>
      </div>
    </div>
  );
}