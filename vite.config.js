import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Allow external connections
    port: process.env.PORT || 5173,
    // Allow your Render domain
    allowedHosts: [
      'gtasix-react.onrender.com',
      'localhost',
      '127.0.0.1'
    ]
  },
  preview: {
    host: true,
    port: process.env.PORT || 5173,
    // Also for preview mode
    allowedHosts: [
      'gtasix-react.onrender.com', 
      'localhost',
      '127.0.0.1'
    ]
  }
})
