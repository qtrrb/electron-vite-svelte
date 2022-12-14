import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import process from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  root: path.resolve(process.cwd(), 'src/renderer'),
  base: './',
  resolve: {
    alias: {
      '@': path.resolve('src/renderer/src'),
    },
  },
})
