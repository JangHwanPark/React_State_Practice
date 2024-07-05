import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 네트워크에서 접근하려면 이 설정을 확인하세요
    port: 5173, // 포트 번호를 확인하세요
  },
  build: {
    outDir: 'dist', // 빌드된 파일이 저장될 디렉토리를 확인하세요
  }
})