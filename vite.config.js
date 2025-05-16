/* vite.config.js */
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public',          // 🚩 keep this, because HTML is in public/

  build: {
    outDir: '../dist',     // dist/ at project root
    emptyOutDir: true,
    minify: 'terser',

    // tell Rollup which HTML files to bundle
    rollupOptions: {
      input: {
        main: 'public/index.html',
        services: 'public/services.html'
      }
    }
  }
});
