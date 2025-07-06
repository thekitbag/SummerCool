import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
const locations = require('./src/data/locations.json') 

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.summercool.co.uk',
      dynamicRoutes: locations.map((location) => `/${location.id}`),
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
