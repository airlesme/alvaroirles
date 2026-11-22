import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dominio propio en la raíz (alvaroirles.com), por eso base es '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
