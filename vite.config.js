import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import wasm from 'vite-plugin-wasm';

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), wasm()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'src/pages/software-projects/projects.html'),
        dlt: resolve(__dirname, 'src/pages/software-projects/Digital-Lancer-Tool/Digital Lancer Tool Build Web/dlt.html')
      }
    }
  }
})
