import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  // Load .env.[mode] file
  const env = loadEnv(mode, process.cwd())

  // Always access like this:
  const apiUrl = env.VITE_API_URL || 'http://localhost:3000';

  return {
    plugins: [
      tailwindcss(),
      react()
    ],
    server: {
      proxy: {
        '/api/': {
          target: apiUrl,
          changeOrigin: true,
          secure: false,
        },
        '/uploads/': {
          target: apiUrl,
          changeOrigin: true,
          secure: false,
        },
      },
    }
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


