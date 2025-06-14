import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // plugin configuration - this is where you can add plugins like Tailwind CSS
  plugins: [react()],
  // server configuration - this is where you can set up the development server
  // proxy configuration for API requests
  // build configuration - this is where you can set up the build output directory and other options which is used to build the project
  server: {
    port: 3002,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
