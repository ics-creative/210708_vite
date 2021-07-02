import { defineConfig } from 'vite'
import path from 'path'

// GitHub Pagesにデモをデプロイするため、ビルド先を標準のdistディレクトリから変更
const dist = path.join(__dirname, '..', 'docs', path.basename(__dirname))

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: dist
  }
})
