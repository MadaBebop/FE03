import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // Indirizzo del server Mockoon
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Se necessario, modifica il percorso per corrispondere alla configurazione di Mockoon
      },
    },
  }
})



  