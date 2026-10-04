import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build`            -> normal multi-file build in dist/
// `SINGLE=1 npm run build`   -> everything inlined into one dist/index.html (used for the shareable preview)
export default defineConfig({
  plugins: [react(), ...(process.env.SINGLE ? [viteSingleFile()] : [])],
})
