// Vite yapılandırma dosyası — projenin build ve geliştirme ayarları burada
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // React JSX desteği için gerekli Vite eklentisi

  // base → GitHub Pages'te sitenin yayınlandığı alt klasör
  // Repo adı "Deneme-bolgesi" olduğu için bu prefix gerekli
  // Tüm asset yolları (CSS, JS, görseller) bu prefix ile başlar
  // Local geliştirmede '/' olur, production'da '/Deneme-bolgesi/' olur
  base: '/Deneme-bolgesi/',
})