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
    proxy:{
      "/api/":"https://localhost:3000",
      "/uploads/":"https://localhost:3000",
      
    }
  }
})
