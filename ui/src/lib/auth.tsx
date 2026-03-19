"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { mcp } from "./api";
import type { TokenResponse, UserInfo } from "./types";

interface AuthContextType {
  user: UserInfo | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, hatchName: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async (t: string) => {
    try {
      localStorage.setItem("meok_token", t);
      const u = await mcp.get<UserInfo>("/auth/me");
      setUser(u);
      localStorage.setItem("meok_user", JSON.stringify(u));
    } catch {
      localStorage.removeItem("meok_token");
      localStorage.removeItem("meok_user");
      setToken(null);
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("meok_token");
    if (stored) {
      setToken(stored);
      fetchUser(stored).finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [fetchUser]);

  const login = async (email: string, password: string) => {
    const res = await mcp.post<TokenResponse>("/auth/login", { email, password });
    setToken(res.access_token);
    localStorage.setItem("meok_token", res.access_token);
    localStorage.setItem("meok_refresh", res.refresh_token);
    await fetchUser(res.access_token);
  };

  const register = async (email: string, password: string, hatchName: string) => {
    const res = await mcp.post<TokenResponse>("/auth/register", {
      email,
      password,
      hatch_name: hatchName,
    });
    setToken(res.access_token);
    localStorage.setItem("meok_token", res.access_token);
    localStorage.setItem("meok_refresh", res.refresh_token);
    await fetchUser(res.access_token);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("meok_token");
    localStorage.removeItem("meok_refresh");
    localStorage.removeItem("meok_user");
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
