import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work both on a custom domain and on
// https://<user>.github.io/<repo>/ without further changes.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 5173 },
})
