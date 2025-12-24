import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Gitee Pages 部署时，base 设置为仓库名
  base: '/christmas-tree/',
})
