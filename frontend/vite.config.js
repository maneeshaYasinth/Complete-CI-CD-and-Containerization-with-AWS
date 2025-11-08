import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to your backend
      '/api': {
        target: 'http://3.89.212.168:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
