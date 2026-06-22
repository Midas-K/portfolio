import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 4321,
    strictPort: false,
    open: '/',
  },
  preview: {
    host: true,
    port: 4321,
    strictPort: false,
    open: '/',
  },
})
