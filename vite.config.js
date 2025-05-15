import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public',
  server: {
    // open: true, // Removed as per guidelines for automated environments
  },
  build: {
    outDir: '../dist', // Adjusted to be relative to the new root, resolves to project_root/dist
    emptyOutDir: true,
    minify: 'terser',
  },
});