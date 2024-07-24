import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'SharedComponents',
      fileName: (format) => `shared-components.${format}.js`
    },
    rollupOptions: {
      external: (id) => ['react', 'react-dom', 'react-router-dom', 'date-fns'].includes(id) ||
        id.startsWith('react/') ||
        id.startsWith('react-dom/') ||
        id.startsWith('react-router-dom/') ||
        id.startsWith('date-fns/'),
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
          'date-fns': 'DateFNS'
        }
      }
    }
  }
})
