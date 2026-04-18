import { defineConfig } from 'vite'
import react from '@vitejs/pugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [ react(),
    tailwindcss(),
  ],
})