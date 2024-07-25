import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // rollupOptions: {
    //   external: ['date-fns'],
    //   output: {
    //     globals: {
    //       dateFns: 'date-fns'
    //     }
    //   }
    // }
  },
  server: {
    port: 4000,
  }
})
