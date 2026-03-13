// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // forcing to use this port
    strictPort: true // fails if port used or occupied, doenst open another port
  }
})