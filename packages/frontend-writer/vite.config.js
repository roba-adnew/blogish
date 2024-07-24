import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'shared': '../shared/src'
    }
  },
  server: {
    port: 5000,
  }
})
