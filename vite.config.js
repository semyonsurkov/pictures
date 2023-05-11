import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    assetsDir: 'assets',
  },
  publicDir: 'src',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
  },
  optimizeDeps: {
    include: ['vue', 'vuex', 'vue-router'],
  },
});
