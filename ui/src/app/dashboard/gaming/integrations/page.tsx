"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Gamepad2,
  Search,
  Tv2,
  Swords,
  Link2,
  Link2Off,
  Loader2,
  ExternalLink,
  Star,
  Plus,
  Check,
  MessageSquare,
  AlertCircle,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

// ── Brand tokens ─────────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── localStorage keys ────────────────────────────────────────────────────────
const LS_STEAM = "meok_steam_data";
const LS_RAWG_LIBRARY = "meok_rawg_library";
const LS_TWITCH_DATA = "meok_twitch_data";
const LS_DOTA_DATA = "meok_dota_data";

// ── Types ─────────────────────────────────────────────────────────────────────
interface SteamProfile {
  steamid: string;
  username: string;
  avatar: string;
  profileUrl: string;
  status: string;
  currentGame: string | null;
  gamesCount: number | null;
  recentGames: Array<{
    appid: number;
    name: string;
    playtime2Weeks: number;
    playtimeForever: number;
    iconUrl: string | null;
  }>;
}

interface RawgGame {
  id: number;
  slug: string;
  name: string;
  released: string | null;
  backgroundImage: string | null;
  rating: number;
  ratingTop: number;
  ratingsCount: number;
  metacritic: number | null;
  platforms: string[];
  genres: string[];
  screenshots: string[];
}

interface TwitchGame {
  id: string;
  name: string;
  boxArtUrl: string;
  rank: number;
  viewerCount: number;
  streamCount: number;
  watchUrl: string;
}

interface TwitchData {
  games: TwitchGame[];
  fetchedAt: string;
}

interface DotaPlayer {
  profile: {
    account_id: number;
    personaname: string;
    avatarfull: string;
    profileurl: string;
  };
  rank_tier: number | null;
  mmr_estimate?: { estimate: number };
  win?: number;
  lose?: number;
}

interface DotaHero {
  hero_id: number;
  games: number;
  win: number;
}

interface DotaMatch {
  match_id: number;
  hero_id: number;
  kills: number;
  deaths: number;
  assists: number;
  radiant_win: boolean;
  player_slot: number;
  duration: number;
  start_time: number;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function ls<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function lsSet(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // silent
  }
}

function lsClear(key: string) {
  try {
    localStorage.removeItem(key);
  } catch {
    // silent
  }
}

function fmtMinutes(mins: number): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

function fmtViewers(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

function rankTierLabel(tier: number | null): string {
  if (!tier) return "Unranked";
  const medals = [
    "", "Herald", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine", "Immortal",
  ];
  const medal = Math.floor(tier / 10);
  const star = tier % 10;
  const medalName = medals[medal] ?? "Unknown";
  if (medal >= 8) return "Immortal";
  return `${medalName} ${star}`;
}

// ── Section wrapper ───────────────────────────────────────────────────────────
function Card({
  children,
  className = "",
  gold = false,
}: {
  children: React.ReactNode;
  className?: string;
  gold?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-5 ${className}`}
      style={{
        background: gold ? `${GOLD}08` : SURFACE,
        border: `1px solid ${gold ? `${GOLD}25` : BORDER}`,
      }}
    >
      {children}
    </div>
  );
}

// ── Error pill ────────────────────────────────────────────────────────────────
function ErrorMsg({ msg }: { msg: string }) {
  return (
    <div
      className="flex items-start gap-2 rounded-lg px-3 py-2.5 mt-3 text-xs text-red-300"
      style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
    >
      <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
      <span>{msg}</span>
    </div>
  );
}

// ── Ask MEOK button ───────────────────────────────────────────────────────────
function AskMeokButton({ prompt }: { prompt: string }) {
  function handleClick() {
    // Store pre-fill prompt and navigate to chat
    try {
      localStorage.setItem("meok_chat_prefill", prompt);
    } catch {
      // silent
    }
    window.location.href = "/dashboard/chat";
  }

  return (
    <button type="button"
      onClick={handleClick}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-[1.02]"
      style={{ background: `${GOLD}15`, color: GOLD, border: `1px solid ${GOLD}30` }}
    >
      <MessageSquare className="w-3.5 h-3.5" />
      Ask MEOK about my stats
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEAM INTEGRATION
// ─────────────────────────────────────────────────────────────────────────────
function SteamIntegration() {
  const [connected, setConnected] = useState(false);
  const [profile, setProfile] = useState<SteamProfile | null>(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = ls<SteamProfile>(LS_STEAM);
    if (saved) {
      setProfile(saved);
      setConnected(true);
    }
  }, []);

  async function handleConnect() {
    if (!input.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `/api/gaming/steam?steamid=${encodeURIComponent(input.trim())}`
      );
      const data = await res.json() as SteamProfile & { error?: string };
      if (!res.ok || data.error) {
        setError(data.error ?? "Failed to load Steam profile.");
        return;
      }
      lsSet(LS_STEAM, data);
      setProfile(data);
      setConnected(true);
      setInput("");
    } catch {
      setError("Network error reaching Steam API proxy.");
    } finally {
      setLoading(false);
    }
  }

  function handleDisconnect() {
    lsClear(LS_STEAM);
    setProfile(null);
    setConnected(false);
    setError("");
  }

  const chatPrompt = profile
    ? `My Steam profile: ${profile.username} — ${profile.gamesCount ?? "unknown"} games owned. Recent 2-week playtime: ${
        profile.recentGames
          .map((g) => `${g.name} (${fmtMinutes(g.playtime2Weeks)})`)
          .join(", ") || "no recent activity"
      }. Based on my playtime data, give me personalised gaming coaching and suggest what I should focus on next.`
    : "";

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Steam logo */}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ background: "linear-gradient(135deg, #1b2838, #2a475e)" }}
          >
            S
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Steam</h3>
            <p className="text-[11px] text-white/40">
              Profile · Games · Playtime
            </p>
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full"
          style={{
            background: connected ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.05)",
            color: connected ? "#22c55e" : "rgba(255,255,255,0.3)",
            border: `1px solid ${connected ? "rgba(34,197,94,0.2)" : BORDER}`,
          }}
        >
          {connected ? (
            <><Check className="w-3 h-3" /> Connected</>
          ) : (
            <><Link2Off className="w-3 h-3" /> Not connected</>
          )}
        </div>
      </div>

      {!connected ? (
        <div className="space-y-3">
          <p className="text-xs text-white/40">
            Enter your Steam ID (17 digits) or full profile URL.
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleConnect()}
              placeholder="76561198... or steamcommunity.com/profiles/..."
              className="flex-1 px-3 py-2 rounded-lg text-xs text-white placeholder-white/20 outline-none"
              style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
            />
            <button type="button"
              onClick={handleConnect}
              disabled={loading || !input.trim()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100 shrink-0"
              style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`, color: DEEP }}
            >
              {loading ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Link2 className="w-3.5 h-3.5" />
              )}
              Connect
            </button>
          </div>
          {error && <ErrorMsg msg={error} />}
        </div>
      ) : profile ? (
        <div className="space-y-4">
          {/* Profile header */}
          <div className="flex items-center gap-3">
            {profile.avatar && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.avatar}
                alt={profile.username}
                className="w-12 h-12 rounded-lg"
              />
            )}
            <div className="min-w-0">
              <p className="text-sm font-bold text-white truncate">{profile.username}</p>
              <p className="text-[11px] text-white/40">{profile.status}</p>
              {profile.currentGame && (
                <p className="text-[11px] mt-0.5" style={{ color: GOLD }}>
                  Playing: {profile.currentGame}
                </p>
              )}
            </div>
            <a
              href={profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto shrink-0 text-white/30 hover:text-white/60 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 gap-2"
          >
            <div
              className="rounded-lg p-3 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}` }}
            >
              <div className="text-lg font-black text-white">
                {profile.gamesCount ?? "—"}
              </div>
              <div className="text-[10px] text-white/35 mt-0.5">Games Owned</div>
            </div>
            <div
              className="rounded-lg p-3 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}` }}
            >
              <div className="text-lg font-black text-white">
                {profile.recentGames.length}
              </div>
              <div className="text-[10px] text-white/35 mt-0.5">Recent Games</div>
            </div>
          </div>

          {/* Recent games */}
          {profile.recentGames.length > 0 && (
            <div>
              <p className="text-[11px] text-white/40 mb-2">Last 2 weeks</p>
              <div className="space-y-1.5">
                {profile.recentGames.slice(0, 4).map((g) => (
                  <div
                    key={g.appid}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2"
                    style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}` }}
                  >
                    {g.iconUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={g.iconUrl} alt={g.name} className="w-6 h-6 rounded" />
                    )}
                    <span className="flex-1 text-xs text-white truncate">{g.name}</span>
                    <span className="text-[11px] shrink-0" style={{ color: GOLD }}>
                      {fmtMinutes(g.playtime2Weeks)} this week
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MEOK coaching suggestion */}
          <div
            className="rounded-lg px-3 py-2.5 text-xs text-white/50 italic"
            style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}18` }}
          >
            Based on your playtime, MEOK suggests: focus on your most-played recent game and ask for
            targeted improvement tips.
          </div>

          <div className="flex items-center justify-between">
            <AskMeokButton prompt={chatPrompt} />
            <button type="button"
              onClick={handleDisconnect}
              className="text-[11px] text-white/25 hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <Link2Off className="w-3 h-3" /> Disconnect
            </button>
          </div>
        </div>
      ) : null}
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// RAWG GAME SEARCH INTEGRATION
// ─────────────────────────────────────────────────────────────────────────────
function RawgIntegration() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<RawgGame[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [library, setLibrary] = useState<RawgGame[]>([]);
  const [selectedGame, setSelectedGame] = useState<RawgGame | null>(null);

  useEffect(() => {
    const saved = ls<RawgGame[]>(LS_RAWG_LIBRARY);
    if (saved) setLibrary(saved);
  }, []);

  async function handleSearch() {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setResults([]);
    try {
      const res = await fetch(
        `/api/gaming/search?query=${encodeURIComponent(query.trim())}&page_size=8`
      );
      const data = await res.json() as { games?: RawgGame[]; error?: string };
      if (!res.ok || data.error) {
        setError(data.error ?? "Search failed.");
        return;
      }
      setResults(data.games ?? []);
    } catch {
      setError("Network error reaching RAWG API proxy.");
    } finally {
      setLoading(false);
    }
  }

  function addToLibrary(game: RawgGame) {
    if (library.some((g) => g.id === game.id)) return;
    const updated = [game, ...library];
    setLibrary(updated);
    lsSet(LS_RAWG_LIBRARY, updated);
  }

  function removeFromLibrary(id: number) {
    const updated = library.filter((g) => g.id !== id);
    setLibrary(updated);
    lsSet(LS_RAWG_LIBRARY, updated);
  }

  const inLibrary = (id: number) => library.some((g) => g.id === id);

  const chatPrompt = library.length > 0
    ? `My game library on MEOK: ${library.map((g) => `${g.name} (rated ${g.rating.toFixed(1)}/5, Metacritic: ${g.metacritic ?? "N/A"})`).join(", ")}. Based on these games and their ratings, give me personalised recommendations for what to play next and tips for improving at my genres.`
    : "";

  return (
    <Card>
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}
        >
          <Search className="w-4 h-4" style={{ color: GOLD }} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">RAWG Game Database</h3>
          <p className="text-[11px] text-white/40">
            500,000+ games · Ratings · Metacritic
          </p>
        </div>
        {library.length > 0 && (
          <span
            className="ml-auto text-[11px] px-2 py-0.5 rounded-full"
            style={{ background: `${GOLD}15`, color: GOLD }}
          >
            {library.length} in library
          </span>
        )}
      </div>

      {/* Search bar */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search any game..."
          className="flex-1 px-3 py-2 rounded-lg text-xs text-white placeholder-white/20 outline-none"
          style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
        />
        <button type="button"
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100 shrink-0"
          style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`, color: DEEP }}
        >
          {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Search className="w-3.5 h-3.5" />}
          Search
        </button>
      </div>

      {error && <ErrorMsg msg={error} />}

      {/* Search results */}
      {results.length > 0 && (
        <div className="space-y-2 mb-4">
          <p className="text-[11px] text-white/35">{results.length} results</p>
          <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
            {results.map((game) => (
              <div
                key={game.id}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 cursor-pointer transition-all hover:bg-white/5"
                style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}
                onClick={() => setSelectedGame(selectedGame?.id === game.id ? null : game)}
              >
                {game.backgroundImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={game.backgroundImage}
                    alt={game.name}
                    className="w-10 h-7 rounded object-cover shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-white truncate">{game.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-white/35">
                      {game.released?.slice(0, 4) ?? "TBA"}
                    </span>
                    <span className="flex items-center gap-0.5 text-[10px]" style={{ color: GOLD }}>
                      <Star className="w-2.5 h-2.5" fill={GOLD} />
                      {game.rating.toFixed(1)}
                    </span>
                    {game.metacritic && (
                      <span
                        className="text-[10px] px-1 rounded font-bold"
                        style={{
                          background: game.metacritic >= 75
                            ? "rgba(34,197,94,0.15)"
                            : game.metacritic >= 50
                            ? "rgba(201,168,76,0.15)"
                            : "rgba(239,68,68,0.15)",
                          color: game.metacritic >= 75
                            ? "#22c55e"
                            : game.metacritic >= 50
                            ? GOLD
                            : "#ef4444",
                        }}
                      >
                        MC {game.metacritic}
                      </span>
                    )}
                  </div>
                </div>
                <button type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    inLibrary(game.id) ? removeFromLibrary(game.id) : addToLibrary(game);
                  }}
                  className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: inLibrary(game.id) ? `${GOLD}20` : "rgba(255,255,255,0.05)",
                    border: `1px solid ${inLibrary(game.id) ? `${GOLD}40` : BORDER}`,
                  }}
                  title={inLibrary(game.id) ? "Remove from library" : "Add to library"}
                >
                  {inLibrary(game.id) ? (
                    <Check className="w-3 h-3" style={{ color: GOLD }} />
                  ) : (
                    <Plus className="w-3 h-3 text-white/40" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expanded game detail */}
      {selectedGame && (
        <div
          className="rounded-lg p-3 mb-4 space-y-2"
          style={{ background: `${GOLD}06`, border: `1px solid ${GOLD}20` }}
        >
          <p className="text-xs font-bold text-white">{selectedGame.name}</p>
          {selectedGame.genres.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {selectedGame.genres.map((g) => (
                <span
                  key={g}
                  className="text-[10px] px-1.5 py-0.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
                >
                  {g}
                </span>
              ))}
            </div>
          )}
          {selectedGame.platforms.length > 0 && (
            <p className="text-[10px] text-white/35">
              {selectedGame.platforms.slice(0, 4).join(" · ")}
            </p>
          )}
          {selectedGame.screenshots.length > 0 && (
            <div className="flex gap-1.5 overflow-x-auto">
              {selectedGame.screenshots.map((s, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={s}
                  alt={`screenshot ${i + 1}`}
                  className="h-16 rounded object-cover shrink-0"
                  style={{ aspectRatio: "16/9" }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Library */}
      {library.length > 0 && (
        <div>
          <p className="text-[11px] text-white/40 mb-2">My Library ({library.length})</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {library.slice(0, 8).map((g) => (
              <div
                key={g.id}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px]"
                style={{
                  background: `${GOLD}10`,
                  border: `1px solid ${GOLD}25`,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {g.name}
                <button type="button"
                  onClick={() => removeFromLibrary(g.id)}
                  className="text-white/20 hover:text-red-400 transition-colors ml-0.5"
                >
                  ×
                </button>
              </div>
            ))}
            {library.length > 8 && (
              <span className="text-[11px] text-white/30 px-2 py-1">
                +{library.length - 8} more
              </span>
            )}
          </div>
          {chatPrompt && <AskMeokButton prompt={chatPrompt} />}
        </div>
      )}
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TWITCH INTEGRATION
// ─────────────────────────────────────────────────────────────────────────────
function TwitchIntegration() {
  const [data, setData] = useState<TwitchData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const saved = ls<TwitchData>(LS_TWITCH_DATA);
    if (saved) {
      setData(saved);
      setConnected(true);
    }
  }, []);

  async function handleFetch() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/gaming/twitch?limit=10");
      const json = await res.json() as TwitchData & { error?: string };
      if (!res.ok || json.error) {
        setError(json.error ?? "Failed to load Twitch data.");
        return;
      }
      lsSet(LS_TWITCH_DATA, json);
      setData(json);
      setConnected(true);
    } catch {
      setError("Network error reaching Twitch API proxy.");
    } finally {
      setLoading(false);
    }
  }

  function handleDisconnect() {
    lsClear(LS_TWITCH_DATA);
    setData(null);
    setConnected(false);
    setError("");
  }

  const chatPrompt = data
    ? `Current top games on Twitch: ${data.games
        .slice(0, 5)
        .map((g) => `${g.name} (${fmtViewers(g.viewerCount)} viewers)`)
        .join(", ")}. Based on what's popular right now on Twitch, suggest which game from this list I should watch streams of to improve, and why.`
    : "";

  const fetchedTime = data?.fetchedAt
    ? new Date(data.fetchedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : null;

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #6441a5, #2a0e61)" }}
          >
            <Tv2 className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Twitch</h3>
            <p className="text-[11px] text-white/40">Top games live right now</p>
          </div>
        </div>

        {connected ? (
          <div className="flex items-center gap-2">
            {fetchedTime && (
              <span className="text-[10px] text-white/25">Updated {fetchedTime}</span>
            )}
            <button type="button"
              onClick={handleDisconnect}
              className="text-[11px] text-white/25 hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <Link2Off className="w-3 h-3" /> Disconnect
            </button>
          </div>
        ) : (
          <button type="button"
            onClick={handleFetch}
            disabled={loading}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-[1.02] disabled:opacity-40"
            style={{ background: "linear-gradient(135deg, #6441a5, #2a0e61)", color: "white" }}
          >
            {loading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Link2 className="w-3.5 h-3.5" />
            )}
            Load Live Data
          </button>
        )}
      </div>

      {error && <ErrorMsg msg={error} />}

      {connected && data ? (
        <div className="space-y-4">
          {/* Top games list */}
          <div className="space-y-1.5">
            {data.games.map((game) => (
              <div
                key={game.id}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 group"
                style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}
              >
                <span
                  className="text-[11px] font-bold w-5 text-center shrink-0"
                  style={{ color: game.rank <= 3 ? GOLD : "rgba(255,255,255,0.25)" }}
                >
                  {game.rank}
                </span>
                {game.boxArtUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={game.boxArtUrl}
                    alt={game.name}
                    className="w-7 h-9 rounded object-cover shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-white truncate">{game.name}</p>
                  <p className="text-[10px] text-white/35">
                    {fmtViewers(game.viewerCount)} viewers
                    {game.streamCount > 0 && ` · ${game.streamCount} streams`}
                  </p>
                </div>
                <a
                  href={game.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[10px] font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(100,65,165,0.3)", color: "#a78bfa" }}
                >
                  Watch
                </a>
              </div>
            ))}
          </div>

          {/* Refresh + Ask MEOK */}
          <div className="flex items-center justify-between pt-1">
            <AskMeokButton prompt={chatPrompt} />
            <button type="button"
              onClick={handleFetch}
              disabled={loading}
              className="text-[11px] text-white/25 hover:text-white/50 transition-colors"
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>
      ) : !connected ? (
        <p className="text-xs text-white/35 mt-1">
          See what games are trending live on Twitch and get AI coaching on what to watch.
        </p>
      ) : null}
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// OPENDOTA INTEGRATION (no API key — CORS enabled)
// ─────────────────────────────────────────────────────────────────────────────

// Minimal hero name map (most common heroes by ID). Full map would need a fetch.
const HERO_NAMES: Record<number, string> = {
  1: "Anti-Mage", 2: "Axe", 3: "Bane", 4: "Bloodseeker", 5: "Crystal Maiden",
  6: "Drow Ranger", 7: "Earthshaker", 8: "Juggernaut", 9: "Mirana", 10: "Morphling",
  11: "Shadow Fiend", 12: "Phantom Lancer", 13: "Puck", 14: "Pudge", 15: "Razor",
  16: "Sand King", 17: "Storm Spirit", 18: "Sven", 19: "Tiny", 20: "Vengeful Spirit",
  21: "Windranger", 22: "Zeus", 23: "Kunkka", 25: "Lina", 26: "Lion",
  27: "Shadow Shaman", 28: "Slardar", 29: "Tidehunter", 30: "Witch Doctor",
  31: "Lich", 32: "Riki", 33: "Enigma", 34: "Tinker", 35: "Sniper",
  36: "Necrophos", 37: "Warlock", 38: "Beastmaster", 39: "Queen of Pain",
  40: "Venomancer", 41: "Faceless Void", 42: "Skeleton King", 43: "Death Prophet",
  44: "Phantom Assassin", 45: "Pugna", 46: "Templar Assassin", 47: "Viper",
  48: "Luna", 49: "Dragon Knight", 50: "Dazzle", 51: "Clockwerk", 52: "Leshrac",
  53: "Nature's Prophet", 54: "Lifestealer", 55: "Dark Seer", 56: "Clinkz",
  57: "Omniknight", 58: "Enchantress", 59: "Huskar", 60: "Night Stalker",
  61: "Broodmother", 62: "Bounty Hunter", 63: "Weaver", 64: "Jakiro",
  65: "Batrider", 66: "Chen", 67: "Spectre", 68: "Ancient Apparition",
  69: "Doom", 70: "Ursa", 71: "Spirit Breaker", 72: "Gyrocopter",
  73: "Alchemist", 74: "Invoker", 75: "Silencer", 76: "Outworld Destroyer",
  77: "Lycan", 78: "Brewmaster", 79: "Shadow Demon", 80: "Lone Druid",
  81: "Chaos Knight", 82: "Meepo", 83: "Treant Protector", 84: "Ogre Magi",
  85: "Undying", 86: "Rubick", 87: "Disruptor", 88: "Nyx Assassin",
  89: "Naga Siren", 90: "Keeper of the Light", 91: "Io", 92: "Visage",
  93: "Slark", 94: "Medusa", 95: "Troll Warlord", 96: "Centaur Warrunner",
  97: "Magnus", 98: "Timbersaw", 99: "Bristleback", 100: "Tusk",
  101: "Skywrath Mage", 102: "Abaddon", 103: "Elder Titan", 104: "Legion Commander",
  105: "Techies", 106: "Ember Spirit", 107: "Earth Spirit", 108: "Underlord",
  109: "Terrorblade", 110: "Phoenix", 111: "Oracle", 112: "Winter Wyvern",
  113: "Arc Warden", 114: "Monkey King", 119: "Dark Willow", 120: "Pangolier",
  121: "Grimstroke", 123: "Hoodwink", 126: "Void Spirit", 128: "Snapfire",
  129: "Mars", 135: "Dawnbreaker", 136: "Marci", 137: "Primal Beast",
  138: "Muerta",
};

function heroName(id: number): string {
  return HERO_NAMES[id] ?? `Hero #${id}`;
}

function OpenDotaIntegration() {
  const [connected, setConnected] = useState(false);
  const [player, setPlayer] = useState<DotaPlayer | null>(null);
  const [heroes, setHeroes] = useState<DotaHero[]>([]);
  const [matches, setMatches] = useState<DotaMatch[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = ls<{ player: DotaPlayer; heroes: DotaHero[]; matches: DotaMatch[] }>(LS_DOTA_DATA);
    if (saved) {
      setPlayer(saved.player);
      setHeroes(saved.heroes);
      setMatches(saved.matches);
      setConnected(true);
    }
  }, []);

  const fetchDota = useCallback(async (accountId: string) => {
    setLoading(true);
    setError("");
    try {
      const [playerRes, heroesRes, matchesRes, wlRes] = await Promise.all([
        fetch(`https://api.opendota.com/api/players/${accountId}`),
        fetch(`https://api.opendota.com/api/players/${accountId}/heroes?limit=5`),
        fetch(`https://api.opendota.com/api/players/${accountId}/recentMatches`),
        fetch(`https://api.opendota.com/api/players/${accountId}/wl`),
      ]);

      if (!playerRes.ok) {
        if (playerRes.status === 404) {
          setError("Player not found. Make sure your Dota 2 profile is public in Steam settings.");
        } else {
          setError(`OpenDota API error: ${playerRes.status}`);
        }
        return;
      }

      const playerData = (await playerRes.json()) as DotaPlayer;
      const heroesData: DotaHero[] = heroesRes.ok ? await heroesRes.json() : [];
      const matchesData: DotaMatch[] = matchesRes.ok ? await matchesRes.json() : [];
      const wlData: { win: number; lose: number } = wlRes.ok
        ? await wlRes.json()
        : { win: 0, lose: 0 };

      const enrichedPlayer: DotaPlayer = {
        ...playerData,
        win: wlData.win,
        lose: wlData.lose,
      };

      const saved = { player: enrichedPlayer, heroes: heroesData, matches: matchesData.slice(0, 10) };
      lsSet(LS_DOTA_DATA, saved);
      setPlayer(enrichedPlayer);
      setHeroes(heroesData);
      setMatches(matchesData.slice(0, 10));
      setConnected(true);
      setInput("");
    } catch {
      setError("Failed to reach OpenDota API. It may be temporarily unavailable.");
    } finally {
      setLoading(false);
    }
  }, []);

  function handleConnect() {
    const trimmed = input.trim().replace(/\D/g, "");
    if (!trimmed) {
      setError("Enter a numeric Dota 2 account ID.");
      return;
    }
    fetchDota(trimmed);
  }

  function handleDisconnect() {
    lsClear(LS_DOTA_DATA);
    setPlayer(null);
    setHeroes([]);
    setMatches([]);
    setConnected(false);
    setError("");
  }

  const winRate =
    player?.win !== undefined && player?.lose !== undefined
      ? player.win + player.lose > 0
        ? Math.round((player.win / (player.win + player.lose)) * 100)
        : null
      : null;

  const chatPrompt =
    player
      ? `My Dota 2 stats — Player: ${player.profile?.personaname ?? "Unknown"}. Rank: ${rankTierLabel(player.rank_tier ?? null)}. Win/Loss: ${player.win ?? 0}W / ${player.lose ?? 0}L (${winRate ?? "N/A"}% win rate). Most played heroes: ${heroes.slice(0, 3).map((h) => `${heroName(h.hero_id)} (${h.games} games, ${Math.round((h.win / h.games) * 100)}% wr)`).join(", ")}. Based on these stats, give me targeted Dota 2 improvement coaching.`
      : "";

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #c23616, #6f0000)" }}
          >
            <Swords className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">OpenDota</h3>
            <p className="text-[11px] text-white/40">
              Dota 2 stats · No API key required
            </p>
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full"
          style={{
            background: connected ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.05)",
            color: connected ? "#22c55e" : "rgba(255,255,255,0.3)",
            border: `1px solid ${connected ? "rgba(34,197,94,0.2)" : BORDER}`,
          }}
        >
          {connected ? (
            <><Check className="w-3 h-3" /> Connected</>
          ) : (
            <><Link2Off className="w-3 h-3" /> Not connected</>
          )}
        </div>
      </div>

      {!connected ? (
        <div className="space-y-3">
          <p className="text-xs text-white/40">
            Enter your Dota 2 account ID (find it in your Steam profile URL or Dotabuff).
            Your Steam profile must be set to public.
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleConnect()}
              placeholder="e.g. 123456789"
              className="flex-1 px-3 py-2 rounded-lg text-xs text-white placeholder-white/20 outline-none"
              style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
            />
            <button type="button"
              onClick={handleConnect}
              disabled={loading || !input.trim()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100 shrink-0"
              style={{ background: "linear-gradient(135deg, #c23616, #6f0000)", color: "white" }}
            >
              {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Link2 className="w-3.5 h-3.5" />}
              Connect
            </button>
          </div>
          {error && <ErrorMsg msg={error} />}
        </div>
      ) : player ? (
        <div className="space-y-4">
          {/* Player header */}
          <div className="flex items-center gap-3">
            {player.profile?.avatarfull && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={player.profile.avatarfull}
                alt={player.profile.personaname}
                className="w-12 h-12 rounded-lg"
              />
            )}
            <div className="min-w-0">
              <p className="text-sm font-bold text-white truncate">
                {player.profile?.personaname ?? "Unknown"}
              </p>
              <p className="text-[11px]" style={{ color: GOLD }}>
                {rankTierLabel(player.rank_tier ?? null)}
              </p>
            </div>
            {player.profile?.profileurl && (
              <a
                href={player.profile.profileurl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-white/30 hover:text-white/60 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* W/L stats */}
          {player.win !== undefined && player.lose !== undefined && (
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Wins", value: player.win, color: "#22c55e" },
                { label: "Losses", value: player.lose, color: "#ef4444" },
                { label: "Win Rate", value: winRate !== null ? `${winRate}%` : "—", color: GOLD },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className="rounded-lg p-2.5 text-center"
                  style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}` }}
                >
                  <div className="text-base font-black" style={{ color }}>{value}</div>
                  <div className="text-[10px] text-white/35 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Win rate bar */}
          {winRate !== null && (
            <div>
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{ background: "rgba(239,68,68,0.3)" }}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${winRate}%`, background: "#22c55e" }}
                />
              </div>
            </div>
          )}

          {/* Most played heroes */}
          {heroes.length > 0 && (
            <div>
              <p className="text-[11px] text-white/40 mb-2">Most Played Heroes</p>
              <div className="space-y-1.5">
                {heroes.slice(0, 5).map((h) => {
                  const wr = Math.round((h.win / h.games) * 100);
                  return (
                    <div
                      key={h.hero_id}
                      className="flex items-center gap-2 rounded-lg px-3 py-2"
                      style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}
                    >
                      <span className="flex-1 text-xs text-white">{heroName(h.hero_id)}</span>
                      <span className="text-[10px] text-white/35">{h.games}g</span>
                      <span
                        className="text-[10px] font-semibold w-12 text-right"
                        style={{ color: wr >= 55 ? "#22c55e" : wr >= 45 ? GOLD : "#ef4444" }}
                      >
                        {wr}% WR
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Recent matches */}
          {matches.length > 0 && (
            <div>
              <p className="text-[11px] text-white/40 mb-2">Recent Matches</p>
              <div className="space-y-1">
                {matches.slice(0, 5).map((m) => {
                  const isRadiant = m.player_slot < 128;
                  const won = isRadiant ? m.radiant_win : !m.radiant_win;
                  return (
                    <div
                      key={m.match_id}
                      className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-[11px]"
                      style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}
                    >
                      <span
                        className="w-6 text-center font-bold shrink-0"
                        style={{ color: won ? "#22c55e" : "#ef4444" }}
                      >
                        {won ? "W" : "L"}
                      </span>
                      <span className="flex-1 text-white/70 truncate">{heroName(m.hero_id)}</span>
                      <span className="text-white/40 shrink-0">
                        {m.kills}/{m.deaths}/{m.assists}
                      </span>
                      <span className="text-white/25 shrink-0">
                        {Math.round(m.duration / 60)}m
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-1">
            <AskMeokButton prompt={chatPrompt} />
            <button type="button"
              onClick={handleDisconnect}
              className="text-[11px] text-white/25 hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <Link2Off className="w-3 h-3" /> Disconnect
            </button>
          </div>
        </div>
      ) : null}
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function GamingIntegrationsPage() {
  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: DEEP }}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Link
          href="/dashboard/gaming"
          className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" /> Gaming Dashboard
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `${GOLD}18` }}
        >
          <Gamepad2 className="w-5 h-5" style={{ color: GOLD }} />
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white">Gaming Integrations</h1>
          <p className="text-sm text-white/40">
            Connect real platforms · Pull live stats · Ask MEOK for coaching
          </p>
        </div>
      </div>

      {/* API status banner */}
      <div
        className="rounded-xl px-4 py-3 mb-6 flex items-start gap-2.5 text-xs text-white/50"
        style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
      >
        <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: GOLD }} />
        <span>
          <span className="text-white/70 font-medium">Setup required:</span> Steam and RAWG need
          API keys in{" "}
          <code
            className="px-1 py-0.5 rounded text-[11px]"
            style={{ background: "rgba(255,255,255,0.07)", color: GOLD }}
          >
            .env.local
          </code>
          . Twitch needs{" "}
          <code className="px-1 py-0.5 rounded text-[11px]" style={{ background: "rgba(255,255,255,0.07)", color: GOLD }}>
            TWITCH_CLIENT_ID
          </code>{" "}
          +{" "}
          <code className="px-1 py-0.5 rounded text-[11px]" style={{ background: "rgba(255,255,255,0.07)", color: GOLD }}>
            TWITCH_CLIENT_SECRET
          </code>
          . OpenDota works without any key.
        </span>
      </div>

      {/* 2-column grid on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <SteamIntegration />
        <RawgIntegration />
        <TwitchIntegration />
        <OpenDotaIntegration />
      </div>

      {/* Env reference */}
      <div
        className="mt-6 rounded-xl p-4"
        style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
      >
        <p className="text-xs font-semibold text-white/50 mb-2">Required .env.local keys</p>
        <div className="space-y-1">
          {[
            { key: "STEAM_API_KEY", url: "https://steamcommunity.com/dev/apikey", label: "Steam" },
            { key: "RAWG_API_KEY", url: "https://rawg.io/apidocs", label: "RAWG — 20k req/month free" },
            { key: "TWITCH_CLIENT_ID", url: "https://dev.twitch.tv/console/apps", label: "Twitch" },
            { key: "TWITCH_CLIENT_SECRET", url: "https://dev.twitch.tv/console/apps", label: "Twitch (same app)" },
          ].map(({ key, url, label }) => (
            <div key={key} className="flex items-center gap-3 text-xs">
              <code
                className="px-2 py-0.5 rounded text-[11px] font-mono shrink-0"
                style={{ background: "rgba(255,255,255,0.05)", color: GOLD }}
              >
                {key}
              </code>
              <span className="text-white/30">{label}</span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-white/20 hover:text-white/50 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
