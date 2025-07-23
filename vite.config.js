import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Baa-aero/',  // 👈 Add this line (exactly matches your GitHub Pages repo name)
  server: {
    allowedHosts: ['baa-aero.onrender.com']
  }
})
