'use client';

import { useState, useEffect } from 'react';

interface FamilyMember {
  member_id: string;
  name: string;
  role: string;
  age: number;
  age_group: string;
}

interface Chore {
  chore_id: string;
  title: string;
  status: string;
  due_date: string | null;
  assigned_to: string[];
  points: number;
}

interface DashboardData {
  date: string;
  members: { count: number; parents: number; children: number };
  chores: { pending: number; overdue: number; preview: Chore[] };
  events: { today: number; upcoming: number; today_list: any[] };
  leaderboard: Record<string, number>;
}

interface ChildProfile {
  child_id: string;
  name: string;
  age: number;
  allowed_ratings: string[];
  daily_limit_minutes: number;
}

interface WifiSecurity {
  network_name: string;
  security_type: string;
  encryption_strength: number;
  connected_devices: number;
  trusted_devices: number;
  unknown_devices: number;
  iot_devices: number;
  vulnerabilities: string[];
  recommendations: string[];
}

type Tab = 'dashboard' | 'family' | 'guardian' | 'gaming' | 'wifi';

export default function FamilyOSDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [children, setChildren] = useState<ChildProfile[]>([]);
  const [wifiSecurity, setWifiSecurity] = useState<WifiSecurity | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    setError(null);
    try {
      const [dashRes, membersRes, childrenRes, wifiRes] = await Promise.all([
        fetch('/api/family-os?type=dashboard'),
        fetch('/api/family-os?type=members'),
        fetch('/api/family-os?type=guardian-children'),
        fetch('/api/family-os?type=guardian-wifi'),
      ]);
      
      setDashboard(await dashRes.json());
      setMembers(await membersRes.json());
      setChildren(await childrenRes.json());
      setWifiSecurity(await wifiRes.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  }

  async function addMember(name: string, role: string, age: number) {
    await fetch('/api/family-os', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'add_member', data: { member_id: `m${Date.now()}`, name, role, age } }),
    });
    loadData();
  }

  async function addChild(name: string, age: number) {
    await fetch('/api/family-os', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'add_child', data: { child_id: `c${Date.now()}`, name, age } }),
    });
    loadData();
  }

  async function checkGame(gameTitle: string) {
    const res = await fetch('/api/family-os', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'check_game', data: { game_title: gameTitle, child_id: children[0]?.child_id || 'default' } }),
    });
    const data = await res.json();
    alert(data.is_allowed ? `✅ ${gameTitle} is allowed` : `🚫 ${gameTitle} blocked: ${data.reason}`);
  }

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Home', icon: '🏠' },
    { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
    { id: 'guardian', label: 'Guardian', icon: '🛡️' },
    { id: 'gaming', label: 'Gaming', icon: '🎮' },
    { id: 'wifi', label: 'WiFi', icon: '📶' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              MEOK Family OS
            </h1>
            <p className="text-slate-400">Your family's digital command center</p>
          </div>
          <div className="flex gap-2">
            {tabs.map(tab => (
              <button type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                  activeTab === tab.id 
                    ? 'bg-cyan-600 text-white' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {loading && <div className="text-center py-12 text-slate-400">Loading...</div>}
        {error && <div className="bg-red-500/20 text-red-400 p-4 rounded-lg mb-4">{error}</div>}

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && dashboard && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl mb-2">👨‍👩‍👧‍👦</div>
              <div className="text-3xl font-bold">{dashboard.members.count}</div>
              <div className="text-slate-400">Family Members</div>
              <div className="text-sm text-slate-500 mt-2">
                {dashboard.members.parents} parents, {dashboard.members.children} children
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl mb-2">📋</div>
              <div className="text-3xl font-bold">{dashboard.chores.pending}</div>
              <div className="text-slate-400">Pending Chores</div>
              {dashboard.chores.overdue > 0 && (
                <div className="text-sm text-red-400 mt-2">⚠️ {dashboard.chores.overdue} overdue</div>
              )}
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl mb-2">📅</div>
              <div className="text-3xl font-bold">{dashboard.events.today}</div>
              <div className="text-slate-400">Today's Events</div>
              <div className="text-sm text-slate-500 mt-2">{dashboard.events.upcoming} this week</div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl mb-2">🛡️</div>
              <div className="text-3xl font-bold text-green-400">Active</div>
              <div className="text-slate-400">Guardian Status</div>
              <div className="text-sm text-slate-500 mt-2">24/7 Protection</div>
            </div>
          </div>
        )}

        {/* Family Tab */}
        {activeTab === 'family' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold mb-4">Family Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {members.map(member => (
                  <div key={member.member_id} className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-xl">
                        {member.role === 'parent' ? '👨' : '👦'}
                      </div>
                      <div>
                        <div className="font-bold">{member.name}</div>
                        <div className="text-sm text-slate-400">{member.role} • {member.age} years</div>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="button"
                  onClick={() => {
                    const name = prompt('Name:');
                    const role = prompt('Role (parent/child):');
                    const age = parseInt(prompt('Age:') || '0');
                    if (name && role) addMember(name, role, age);
                  }}
                  className="border-2 border-dashed border-slate-600 rounded-lg p-4 flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  + Add Member
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Guardian Tab */}
        {activeTab === 'guardian' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold mb-4">🛡️ Guardian Status</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">WiFi Security</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    {wifiSecurity?.security_type || 'Unknown'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Connected Devices</span>
                  <span className="font-bold">{wifiSecurity?.connected_devices || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Unknown Devices</span>
                  <span className={`font-bold ${(wifiSecurity?.unknown_devices || 0) > 3 ? 'text-red-400' : 'text-green-400'}`}>
                    {wifiSecurity?.unknown_devices || 0}
                  </span>
                </div>
                {wifiSecurity?.vulnerabilities?.map((v, i) => (
                  <div key={i} className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
                    ⚠️ {v}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold mb-4">👶 Protected Children</h2>
              {children.length === 0 ? (
                <p className="text-slate-400">No children added yet</p>
              ) : (
                <div className="space-y-3">
                  {children.map(child => (
                    <div key={child.child_id} className="bg-slate-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-bold">{child.name}</div>
                          <div className="text-sm text-slate-400">Age {child.age}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-cyan-400">{child.daily_limit_minutes} min/day</div>
                          <div className="text-xs text-slate-500">Allowed: {child.allowed_ratings?.join(', ')}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button type="button"
                onClick={() => {
                  const name = prompt('Child name:');
                  const age = parseInt(prompt('Age:') || '0');
                  if (name) addChild(name, age);
                }}
                className="mt-4 w-full py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
              >
                + Add Child
              </button>
            </div>
          </div>
        )}

        {/* Gaming Tab */}
        {activeTab === 'gaming' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold mb-4">🎮 Game Content Checker</h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter game name..."
                  className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2"
                  id="gameInput"
                />
                <button type="button"
                  onClick={() => {
                    const game = (document.getElementById('gameInput') as HTMLInputElement).value;
                    if (game) checkGame(game);
                  }}
                  className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
                >
                  Check
                </button>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Enter a game name to check if it's appropriate for your children
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold mb-4">⏰ Gaming Schedule</h2>
              {children.map(child => (
                <div key={child.child_id} className="mb-4 p-4 bg-slate-700 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{child.name}</span>
                    <span className="text-cyan-400">{child.daily_limit_minutes} min/day</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WiFi Tab */}
        {activeTab === 'wifi' && wifiSecurity && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold mb-4">📶 Network Security</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold">{wifiSecurity.connected_devices}</div>
                  <div className="text-sm text-slate-400">Devices</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">{wifiSecurity.trusted_devices}</div>
                  <div className="text-sm text-slate-400">Trusted</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">{wifiSecurity.unknown_devices}</div>
                  <div className="text-sm text-slate-400">Unknown</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">{wifiSecurity.iot_devices}</div>
                  <div className="text-sm text-slate-400">IoT</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                <div>
                  <div className="font-bold">{wifiSecurity.network_name}</div>
                  <div className="text-sm text-slate-400">Security: {wifiSecurity.security_type}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl">
                    {wifiSecurity.encryption_strength >= 4 ? '🔒' : wifiSecurity.encryption_strength >= 2 ? '🔓' : '⚠️'}
                  </div>
                  <div className="text-cyan-400 font-bold">{wifiSecurity.encryption_strength}/5</div>
                </div>
              </div>
              
              {wifiSecurity.recommendations?.map((r, i) => (
                <div key={i} className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm">
                  💡 {r}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}