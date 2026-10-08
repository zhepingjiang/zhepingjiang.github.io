import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative base so the build works on GitHub Pages project paths and custom domains alike
  base: './',
  plugins: [react(), tailwindcss()],
})
