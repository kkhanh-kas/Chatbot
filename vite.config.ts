import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Chatbot/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // This enables access from other devices on the network
    open: true,  // This automatically opens the browser
    proxy: {
      '/api': {
        target: 'https://generativelanguage.googleapis.com/v1beta',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'Content-Type': 'application/json',
        }
      }
    }
  }
}); 