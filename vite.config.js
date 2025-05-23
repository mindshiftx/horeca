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
      },
      
      // Ensure PDF files are included in the build
      output: {
        assetFileNames: (assetInfo) => {
          // Keep PDF files in their original directory structure
          if (assetInfo.name.endsWith('.pdf')) {
            return 'pdf/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    
    // Ensure assets like PDFs are copied to the build output
    assetsInclude: ['**/*.pdf']
  }
});
