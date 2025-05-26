import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images/T1-T2.png',
          dest: 'assets/images'
        },
        {
          src: 'src/assets/images/T2-T3.png',
          dest: 'assets/images'
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        t1t2: 'T1-T2.html',
      }
    }
  }
})
