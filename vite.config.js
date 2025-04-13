import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',                // 프로젝트 루트 위치
  build: {
    outDir: 'dist',         // 결과물을 저장할 폴더
  },
})
