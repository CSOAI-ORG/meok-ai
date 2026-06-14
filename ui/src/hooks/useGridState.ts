'use client';

import { useState, useEffect, useCallback } from 'react';

export interface GridState {
  lat: number;
  lng: number;
  zoom: number;
  layers: string[];
  selected?: string;
  view: 'map' | 'globe';
}

const DEFAULT_STATE: GridState = {
  lat: 53.2307,
  lng: -0.5406,
  zoom: 5,
  layers: ['domains', 'hives', 'tools'],
  view: 'map',
};

export function useGridState() {
  const [state, setState] = useState<GridState>(DEFAULT_STATE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const lat = parseFloat(params.get('lat') || String(DEFAULT_STATE.lat));
    const lng = parseFloat(params.get('lng') || String(DEFAULT_STATE.lng));
    const zoom = parseFloat(params.get('z') || String(DEFAULT_STATE.zoom));
    const layers = params.get('layers')?.split(',').filter(Boolean) || DEFAULT_STATE.layers;
    const selected = params.get('domain') || undefined;
    const view = (params.get('view') as GridState['view']) || DEFAULT_STATE.view;
    setState({ lat, lng, zoom, layers, selected, view });
  }, []);

  const updateState = useCallback((patch: Partial<GridState>) => {
    setState((prev) => {
      const next = { ...prev, ...patch };
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams();
        params.set('lat', next.lat.toFixed(4));
        params.set('lng', next.lng.toFixed(4));
        params.set('z', next.zoom.toString());
        params.set('layers', next.layers.join(','));
        if (next.selected) params.set('domain', next.selected);
        params.set('view', next.view);
        window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
      }
      return next;
    });
  }, []);

  const toggleLayer = useCallback((layer: string) => {
    setState((prev) => {
      const has = prev.layers.includes(layer);
      const nextLayers = has ? prev.layers.filter((l) => l !== layer) : [...prev.layers, layer];
      return { ...prev, layers: nextLayers };
    });
  }, []);

  return { state, updateState, toggleLayer, mounted };
}
