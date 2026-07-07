# BirBuçuk FS

Güzel, hızlı ve küçük bir takım web sitesi şablonu. Bu proje, Formula Student / öğrenci takımı sitesine uygun sayfalar, bileşenler ve medya varlıkları içerir: anasayfa, araçlarımız, Formula Student, sponsorlar, sürdürülebilirlik, iletişim ve oyun bölümleri.

## Özellikler
- Vite + React (JSX) tabanlı ön yüz
- Sayfa bazlı yapı: `src/pages`
- Yeniden kullanılabilir bileşenler: `src/components`
- Kolay medya yönetimi: `src/assets/images`
- Basit hook örneği: `src/hooks/useScrollReveal.js`

## Gereksinimler
- Node.js 16+ ve npm veya pnpm

## Kurulum
1. Depoyu klonlayın veya dosyaları indirin
2. Bağımlılıkları yükleyin:

```bash
npm install
```

## Geliştirici Sunucusu

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
```

Tarayıcıda genellikle `http://localhost:5173` adresinde açılır.

## Üretim Build'i ve Önizleme

```bash
npm run build
npm run preview
```

## Proje Yapısı (Öne Çıkanlar)
- `index.html`, `vite.config.js`, temel Vite yapılandırması
- `src/main.jsx` — uygulama giriş noktası
- `src/App.jsx` — rota / genel düzen
- `src/pages/` — sayfa bileşenleri (Home, FormulaStudent, Araclarimiz, vb.)
- `src/components/` — Navbar, Footer ve ortak CSS dosyaları
- `src/assets/images/` — görseller ve galeri

## Stil ve Bileşenler
CSS dosyaları her bileşenin yanında yer alır (`Footer.css`, `Navbar.css`, vb.) — bu düzen küçük projelerde okunabilirlik sağlar.

## Katkı
- İyileştirmeler, hata düzeltmeleri ve yeni sayfalar için pull request açabilirsiniz.
- Kod stili ve basit kurallar: küçük, tek amaçlı bileşenler; anlamlı dosya isimleri; okunabilir CSS.

## İletişim
Herhangi bir soru veya istek için projeyi yönetenlerle iletişime geçin veya repo üzerinden issue açın.

---

Eğer isterseniz, README'yi daha resmi, kısa veya İngilizce bir versiyon olarak güncelleyebilirim.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
