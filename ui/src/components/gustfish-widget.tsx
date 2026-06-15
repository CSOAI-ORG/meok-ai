'use client'

// MEOK Gustfish Gaming Widget
// 8 gaming servers + 4 MMO servers
// MIT licensed

import { useEffect, useState } from 'react';

const GATEWAY = 'http://localhost:3101/mcp';

const SERVERS = [
  { id: 1, name: 'meok-poker-hud-mcp',         game: 'Poker',         price: '$29/mo',   type: 'gaming' },
  { id: 2, name: 'meok-casino-ai-mcp',          game: 'Casino AI',     price: '$2-10K/mo', type: 'gaming' },
  { id: 3, name: 'meok-sports-odds-mcp',        game: 'Sports odds',   price: '$49-299/mo', type: 'gaming' },
  { id: 4, name: 'meok-gaming-fraud-mcp',       game: 'Fraud detect',  price: '$0.001-0.01/txn', type: 'gaming' },
  { id: 5, name: 'meok-responsible-gaming-mcp', game: 'Responsible gambling', price: '$0.01-0.05/player/mo', type: 'gaming' },
  { id: 6, name: 'meok-player-identity-mcp',    game: 'KYC/identity',  price: '$0.01-0.05/verify', type: 'gaming' },
  { id: 7, name: 'meok-hand-history-mcp',      game: 'Hand history',  price: 'Free academic / $0.01-0.05/hand', type: 'gaming' },
  { id: 8, name: 'meok-gaming-compliance-mcp', game: 'Compliance',    price: '$50-500K/year', type: 'gaming' },
  { id: 9, name: 'wow-mcp',                    game: 'WoW',           price: 'Free',       type: 'mmo' },
  { id: 10, name: 'ffxiv-mcp',                 game: 'FFXIV',         price: 'Free',       type: 'mmo' },
  { id: 11, name: 'eve-mcp',                   game: 'EVE Online',    price: 'Free',       type: 'mmo' },
  { id: 12, name: 'osrs-mcp',                  game: 'OSRS',          price: 'Free',       type: 'mmo' },
];

export function GustfishWidget() {
  return (
    <div className="p-4 bg-slate-900/80 rounded-xl text-slate-100">
      <h3 className="text-lg font-bold mb-3 text-pink-400">🎮 MEOK Gustfish · 12 servers</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {SERVERS.map((s) => (
          <div key={s.id} className="bg-slate-800/50 rounded p-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">#{s.id}</span>
              <span className={`px-1 rounded ${s.type === 'gaming' ? 'bg-pink-500/20 text-pink-300' : 'bg-purple-500/20 text-purple-300'}`}>
                {s.type}
              </span>
            </div>
            <div className="font-mono mt-1 truncate">{s.name}</div>
            <div className="text-slate-300">{s.game}</div>
            <div className="text-slate-400">{s.price}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-2 bg-pink-500/10 border border-pink-500/30 rounded text-xs text-pink-200">
        🎮 8 MEOK Gaming × Gambling + 4 MMO = 12 total. All sovereign, MIT, gamified.
      </div>
    </div>
  );
}

export default GustfishWidget;
