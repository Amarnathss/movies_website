import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      tailwindcss(),
      react(),
    ],
    server: {
      proxy: {
        '/api/': {
          target: env.VITE_API_URL || 'http://localhost:3000', // ✅ safe access
          changeOrigin: true,
          secure: false,
        },
        '/uploads/': {
          target: env.VITE_API_URL || 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react()
//   ],
//   server:{
//     proxy: {
//       '/api/': {
//         target:  import.meta.env.VITE_API_URL || 'http://localhost:3000', // Your backend
//         changeOrigin: true,
//         secure: false,
//       },
//       '/uploads/': {
//         target: import.meta.env.VITE_API_URL || 'http://localhost:3000',
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   }
// })


