import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server:{
    proxy: {
      '/api/': {
        target:  import.meta.env.VITE_API_URL || 'http://localhost:3000', // Your backend
        changeOrigin: true,
        secure: false,
      },
      '/uploads/': {
        target: import.meta.env.VITE_API_URL || 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  }
})
