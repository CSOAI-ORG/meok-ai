import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ai.meok.app',
  appName: 'MEOK',
  webDir: '../ui/dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
