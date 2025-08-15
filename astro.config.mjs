// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    // Enable image optimization with Sharp service
    service: { entrypoint: 'astro/assets/services/sharp' },
    // Configure domains for external images if needed
    domains: [],
    // Configure remote patterns for external images
    remotePatterns: []
  },
  
  // Optimize build output
  build: {
    // Inline small assets to reduce HTTP requests
    inlineStylesheets: 'auto',
    // Organize assets in dedicated folder
    assets: 'images'
  },
  
  // Development server configuration
  server: {
    // Don't auto-open browser
    open: false,
    // Enable hot reload for faster development
    host: true
  },
  
  // Vite configuration for additional optimizations
  vite: {
    build: {
      // Optimize CSS and JS
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          // Ensure consistent chunk naming
          manualChunks: undefined
        }
      }
    }
  }
});
