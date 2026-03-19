"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { mcp } from "@/lib/api";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { APIKeyResponse } from "@/lib/types";

export default function SettingsPage() {
  const { user } = useAuth();
  const [apiKeys, setApiKeys] = useState<APIKeyResponse[]>([]);
  const [newKeyName, setNewKeyName] = useState("default");
  const [generating, setGenerating] = useState(false);
  const [latestKey, setLatestKey] = useState<string | null>(null);

  const generateKey = async () => {
    setGenerating(true);
    setLatestKey(null);
    try {
      const res = await mcp.post<APIKeyResponse>("/auth/api-key", { name: newKeyName });
      setApiKeys((prev) => [res, ...prev]);
      setLatestKey(res.api_key);
      setNewKeyName("default");
    } catch (e) {
      console.error(e);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Settings</h2>
        <p className="text-sm text-white/40 mt-1">Account and API configuration</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        {user ? (
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-white/40">Email</span>
              <span className="text-white">{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Tenant ID</span>
              <span className="text-white/60 font-mono text-xs">{user.tenant_id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Hatch Name</span>
              <span className="text-white">{user.hatch_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Status</span>
              <Badge variant={user.is_active ? "green" : "red"}>
                {user.is_active ? "Active" : "Inactive"}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Created</span>
              <span className="text-white/60">{new Date(user.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        ) : null}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
        </CardHeader>
        <div className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              placeholder="Key name"
              className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50 text-sm"
            />
            <Button onClick={generateKey} disabled={generating} size="sm">
              {generating ? "Generating..." : "Generate Key"}
            </Button>
          </div>

          {latestKey && (
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-xs text-green-400 mb-1">New API key (copy now — shown only once):</p>
              <code className="text-sm text-green-300 break-all">{latestKey}</code>
            </div>
          )}

          {apiKeys.length > 0 && (
            <div className="space-y-2">
              {apiKeys.map((k, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 text-sm">
                  <div>
                    <span className="text-white/60">{k.name}</span>
                    <span className="text-white/20 ml-2 font-mono">{k.key_prefix}...</span>
                  </div>
                  <span className="text-xs text-white/30">
                    {new Date(k.created_at).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
