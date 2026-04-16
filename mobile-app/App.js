import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const API_BASE = 'http://localhost:3101';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [loading, setLoading] = useState(false);
  const [health, setHealth] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [children, setChildren] = useState([]);
  const [wifiStatus, setWifiStatus] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    try {
      // Get health
      const healthRes = await fetch(`${API_BASE}/health`);
      const healthData = await healthRes.json();
      setHealth(healthData);

      // Get Family OS data
      const dashboardRes = await fetch(`${API_BASE}/mcp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'tools/call',
          params: { name: 'family_get_dashboard', arguments: {} },
          id: 'mobile-1'
        })
      });
      const dashData = await dashboardRes.json();
      if (dashData.result?.content?.[0]?.text) {
        setDashboard(JSON.parse(dashData.result.content[0].text));
      }

      // Get Guardian children
      const childrenRes = await fetch(`${API_BASE}/mcp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'tools/call',
          params: { name: 'guardian_get_child_profiles', arguments: {} },
          id: 'mobile-2'
        })
      });
      const childData = await childrenRes.json();
      if (childData.result?.content?.[0]?.text) {
        const parsed = JSON.parse(childData.result.content[0].text);
        setChildren(parsed.profiles || []);
      }

      // Get WiFi status
      const wifiRes = await fetch(`${API_BASE}/mcp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'tools/call',
          params: { name: 'guardian_check_wifi_security', arguments: {} },
          id: 'mobile-3'
        })
      });
      const wifiData = await wifiRes.json();
      if (wifiData.result?.content?.[0]?.text) {
        setWifiStatus(JSON.parse(wifiData.result.content[0].text));
      }
    } catch (e) {
      console.error('Error loading data:', e);
    }
    setLoading(false);
  }

  const tabs = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'family', icon: '👨‍👩‍👧‍👦', label: 'Family' },
    { id: 'guardian', icon: '🛡️', label: 'Guardian' },
    { id: 'ai', icon: '🤖', label: 'AI' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>MEOK</Text>
        <Text style={styles.subtitle}>Your Family OS</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} refreshControl={<RefreshControl refreshing={loading} onRefresh={loadData} />}>
        {loading && <ActivityIndicator size="large" color="#c9a84c" style={styles.loader} />}
        
        {activeTab === 'home' && (
          <View style={styles.section}>
            <Text style={styles.welcome}>Welcome Home</Text>
            
            <View style={styles.card}>
              <Text style={styles.cardTitle}>System Status</Text>
              <Text style={styles.cardValue}>{health?.status || 'Loading...'}</Text>
              <Text style={styles.cardSub}>Neural Models: {Object.keys(health?.components?.neural_models || {}).length}</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Consciousness</Text>
              <Text style={styles.cardValue}>{Math.round((health?.components?.consciousness?.consciousness_level || 0) * 100)}%</Text>
            </View>
          </View>
        )}

        {activeTab === 'family' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Family Dashboard</Text>
            
            <View style={styles.statsRow}>
              <View style={[styles.statCard, { flex: 1 }]}>
                <Text style={styles.statValue}>{dashboard?.members?.count || 0}</Text>
                <Text style={styles.statLabel}>Members</Text>
              </View>
              <View style={[styles.statCard, { flex: 1 }]}>
                <Text style={styles.statValue}>{dashboard?.chores?.pending || 0}</Text>
                <Text style={styles.statLabel}>Chores</Text>
              </View>
              <View style={[styles.statCard, { flex: 1 }]}>
                <Text style={styles.statValue}>{dashboard?.events?.today || 0}</Text>
                <Text style={styles.statLabel}>Events</Text>
              </View>
            </View>

            {children.length > 0 && (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Protected Children</Text>
                {children.map((child, i) => (
                  <View key={i} style={styles.childRow}>
                    <Text style={styles.childName}>{child.name}</Text>
                    <Text style={styles.childInfo}>Age {child.age} • {child.daily_limit_minutes}min/day</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {activeTab === 'guardian' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Guardian Protection</Text>
            
            <View style={styles.card}>
              <Text style={styles.cardTitle}>WiFi Security</Text>
              <Text style={styles.cardValue}>{wifiStatus?.security_type || 'Unknown'}</Text>
              <Text style={styles.cardSub}>Devices: {wifiStatus?.connected_devices || 0}</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Network Status</Text>
              <View style={styles.statusRow}>
                <View style={styles.statusItem}>
                  <Text style={styles.statusValue}>{wifiStatus?.trusted_devices || 0}</Text>
                  <Text style={styles.statusLabel}>Trusted</Text>
                </View>
                <View style={styles.statusItem}>
                  <Text style={[styles.statusValue, { color: '#f59e0b' }]}>{wifiStatus?.unknown_devices || 0}</Text>
                  <Text style={styles.statusLabel}>Unknown</Text>
                </View>
                <View style={styles.statusItem}>
                  <Text style={[styles.statusValue, { color: '#a855f7' }]}>{wifiStatus?.iot_devices || 0}</Text>
                  <Text style={styles.statusLabel}>IoT</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {activeTab === 'ai' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>MEOK AI</Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Sovereign AI</Text>
              <Text style={styles.cardValue}>Active</Text>
              <Text style={styles.cardSub}>Care-first, emotionally intelligent companion</Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        {tabs.map(tab => (
          <TouchableOpacity key={tab.id} style={styles.tab} onPress={() => setActiveTab(tab.id)}>
            <Text style={styles.tabIcon}>{tab.icon}</Text>
            <Text style={[styles.tabLabel, activeTab === tab.id && styles.tabActive]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d0c18' },
  header: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20, backgroundColor: '#13121f' },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#c9a84c' },
  subtitle: { fontSize: 14, color: '#6b7280' },
  content: { flex: 1 },
  section: { padding: 20 },
  welcome: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 15 },
  card: { backgroundColor: '#1f1f2e', borderRadius: 12, padding: 16, marginBottom: 12 },
  cardTitle: { fontSize: 14, color: '#9ca3af', marginBottom: 8 },
  cardValue: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  cardSub: { fontSize: 12, color: '#6b7280', marginTop: 4 },
  statsRow: { flexDirection: 'row', gap: 10, marginBottom: 12 },
  statCard: { backgroundColor: '#1f1f2e', borderRadius: 12, padding: 16, alignItems: 'center' },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#c9a84c' },
  statLabel: { fontSize: 12, color: '#6b7280', marginTop: 4 },
  childRow: { paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#2d2d3d' },
  childName: { fontSize: 16, color: '#fff', fontWeight: '600' },
  childInfo: { fontSize: 12, color: '#6b7280' },
  statusRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 },
  statusItem: { alignItems: 'center' },
  statusValue: { fontSize: 20, fontWeight: 'bold', color: '#10b981' },
  statusLabel: { fontSize: 12, color: '#6b7280' },
  tabBar: { flexDirection: 'row', backgroundColor: '#13121f', paddingBottom: 30, paddingTop: 10 },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 8 },
  tabIcon: { fontSize: 24, marginBottom: 4 },
  tabLabel: { fontSize: 11, color: '#6b7280' },
  tabActive: { color: '#c9a84c' },
  loader: { marginVertical: 20 },
});