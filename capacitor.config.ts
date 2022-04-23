import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.prancheta.quadrotaticodefutsal',
  appName: 'Quadro Tático de Futsal',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    }
  }
};

export default config;
