import { useEffect, useState } from 'react';

interface ActiveGameResponse {
  game: string | null;
  title: string;
  confidence: number;
  timestamp: string;
}

interface UseActiveGameResult {
  game: string | null;
  title: string;
  loading: boolean;
}

export function useActiveGame(): UseActiveGameResult {
  const [data, setData] = useState<ActiveGameResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchActiveWindow() {
      try {
        const res = await fetch('/api/gaming/active-window');
        if (!res.ok) throw new Error('Failed to fetch active window');
        const json = (await res.json()) as ActiveGameResponse;
        if (!cancelled) {
          setData(json);
        }
      } catch {
        if (!cancelled) {
          setData({ game: null, title: 'Unable to detect active window', confidence: 0, timestamp: new Date().toISOString() });
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchActiveWindow();
    const interval = setInterval(fetchActiveWindow, 10000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return {
    game: data?.game ?? null,
    title: data?.title ?? '',
    loading,
  };
}
