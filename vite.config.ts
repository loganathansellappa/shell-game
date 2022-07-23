import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  server: {
    hmr: {
      host: 'localhost',
    },
    open: '/',
    port: 9000,
  },
  plugins: [react(), EnvironmentPlugin(['SHELL_COUNT'])],
}));
