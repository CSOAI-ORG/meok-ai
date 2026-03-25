// Empty string = relative paths (proxied via next.config.ts rewrites in production)
// Falls back to localhost for local dev
const MCP_URL = process.env.NEXT_PUBLIC_MCP_URL ?? process.env.NEXT_PUBLIC_SOV3_ENDPOINT ?? "http://localhost:3101";
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? process.env.NEXT_PUBLIC_SOV3_ENDPOINT ?? "http://localhost:3101";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("meok_token");
}

async function request<T>(base: string, path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string> || {}),
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${base}${path}`, {
    ...options,
    headers,
  });

  if (res.status === 401) {
    if (typeof window !== "undefined") {
      localStorage.removeItem("meok_token");
      localStorage.removeItem("meok_refresh");
      localStorage.removeItem("meok_user");
      window.location.href = "/login";
    }
    throw new Error("Unauthorized");
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.detail || `HTTP ${res.status}`);
  }

  return res.json();
}

// MCP server endpoints (auth, health, MCP tools)
export const mcp = {
  get: <T>(path: string) => request<T>(MCP_URL, path),
  post: <T>(path: string, data?: unknown) =>
    request<T>(MCP_URL, path, { method: "POST", body: data ? JSON.stringify(data) : undefined }),
};

// Dashboard API endpoints
export const api = {
  get: <T>(path: string) => request<T>(API_URL, path),
  post: <T>(path: string, data?: unknown) =>
    request<T>(API_URL, path, { method: "POST", body: data ? JSON.stringify(data) : undefined }),
  del: <T>(path: string) => request<T>(API_URL, path, { method: "DELETE" }),
};

// MCP tool call helper
export async function callTool<T = unknown>(name: string, args: Record<string, unknown> = {}): Promise<T> {
  const res = await mcp.post<{
    result?: { content?: { text: string }[] };
    error?: { message: string };
  }>("/mcp", {
    jsonrpc: "2.0",
    id: Date.now(),
    method: "tools/call",
    params: { name, arguments: args },
  });

  if (res.error) throw new Error(res.error.message);
  const text = res.result?.content?.[0]?.text;
  if (!text) return {} as T;
  return JSON.parse(text);
}
