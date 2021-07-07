import { defineConfig } from 'vite'
import path from 'path'
import legacy from '@vitejs/plugin-legacy'

// GitHub Pagesにデモをデプロイするため、ビルド先を標準のdistディレクトリから変更
const dist = path.join(__dirname, '..', 'docs', path.basename(__dirname))

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: dist
  },
  // IE11向けの変換を行うプラグインの設定
  plugins: [
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ]
})
