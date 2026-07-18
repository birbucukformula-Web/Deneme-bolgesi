// Araçlarımız sayfası — 2026 ve 2025 araçlarını, galeriyi, yapım aşamasını gösterir
import { useState } from 'react'
import './Araclarimiz.css'

// Görseller public/images/ klasöründe, base prefix ile doğru URL oluşturuyoruz
// Yerel: '/'  |  GitHub Pages: '/Deneme-bolgesi/'
const base = import.meta.env.BASE_URL

// ─── TEKNİK VERİLER ──────────────────────────────────────────────────────────
// Her nesne: key (özellik adı) + value (değer) → specs-grid'de kart olarak render edilir

// 2026 aracının teknik özellikleri
const specs2026 = [
  { key: 'Motor Tipi',      value: 'Elektrikli' },
  { key: 'Şasi',            value: 'Çelik Boru Kafes' },
  { key: 'Toplam Ağırlık',  value: '230 kg' },
  { key: 'Güç',             value: '80 kW' },
  { key: 'İvmelenme',       value: '3.9s (0-100)' },
  { key: 'Tekerlek Tabanı', value: '1530 mm' },
]

// 2025 aracının teknik özellikleri
const specs2025 = [
  { key: 'Motor Tipi',     value: 'Elektrikli' },
  { key: 'Şasi',           value: 'Çelik Boru Kafes' },
  { key: 'Toplam Ağırlık', value: '250 kg' },
  { key: 'Güç',            value: '60 kW' },
]

// ─── GALERİ VERİLERİ ─────────────────────────────────────────────────────────
// Her nesne: src (görsel yolu) + alt (erişilebilirlik metni)
// Yeni fotoğraf eklemek için listeye { src, alt } nesnesi ekle

// 2026 galeri fotoğrafları — public/images/gallery/ klasöründen
const gallery2026 = [
  { src: `${base}images/gallery/formula_student0.jpg`, alt: 'Ekip Pozu 1' },
  { src: `${base}images/gallery/formula_student1.jpg`, alt: 'Araç ve Çadır' },
  { src: `${base}images/gallery/formula_student2.jpg`, alt: 'Ekip Pozu 2' },
]

// 2025 galeri fotoğrafları — public/images/2025-arac-images/ klasöründen
const gallery2025 = [
  { src: `${base}images/2025-arac-images/arac-kucuk0.jpg`, alt: '2025 Detay 1' },
  { src: `${base}images/2025-arac-images/arac-kucuk1.jpg`, alt: '2025 Detay 2' },
  { src: `${base}images/2025-arac-images/arac-kucuk2.jpg`, alt: '2025 Detay 3' },
]

// Yapım aşaması fotoğrafları — public/images/2025-arac-images/made-progress/ klasöründen
// caption → fotoğrafın altında çıkan açıklama metni
const buildPhotos = [
  { src: `${base}images/2025-arac-images/made-progress/0.JPG`, caption: 'Kaynak İşlemleri' },
  { src: `${base}images/2025-arac-images/made-progress/1.JPG`, caption: 'Metal Kesim' },
  { src: `${base}images/2025-arac-images/made-progress/2.JPG`, caption: 'Şasi Detay' },
  { src: `${base}images/2025-arac-images/made-progress/3.JPG`, caption: 'Montaj Aşaması' },
  { src: `${base}images/2025-arac-images/made-progress/4.JPG`, caption: 'Son Düzenlemeler' },
]

// ─── LIGHTBOX BİLEŞENİ ───────────────────────────────────────────────────────
// Galeriden bir fotoğrafa tıklandığında tam ekran açılır
// onClose → dışarıya veya X butonuna tıklayınca kapanır
// e.stopPropagation() → resme tıklandığında arkadaki div'in onClick'i tetiklenmesin
function Lightbox({ src, alt, onClose }) {
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>✕</button>
      <img src={src} alt={alt} onClick={e => e.stopPropagation()} />
    </div>
  )
}

// ─── GALERİ BİLEŞENİ ─────────────────────────────────────────────────────────
// photos → gösterilecek fotoğraf dizisi
// label  → dizi boşsa "FOTOĞRAFLAR YAKINDA" mesajında kullanılır
// active → hangi fotoğrafın lightbox'ta açık olduğunu tutar (null = kapalı)
function Gallery({ photos, label }) {
  const [active, setActive] = useState(null) // Başlangıçta lightbox kapalı

  // Fotoğraf yoksa placeholder göster
  if (!photos.length) return (
    <div className="gallery-empty">
      <span className="section-label">// {label} — FOTOĞRAFLAR YAKINDA</span>
    </div>
  )

  return (
    <>
      <div className="gallery-masonry">
        {/* Her fotoğrafa tıklayınca o fotoğrafı active state'e set et → Lightbox açılır */}
        {photos.map((p, i) => (
          <div key={i} className="gallery-item" onClick={() => setActive(p)}>
            <img src={p.src} alt={p.alt} loading="lazy" /> {/* loading="lazy" → sayfayı hızlandırır */}
          </div>
        ))}
      </div>

      {/* active null değilse Lightbox render et, kapanınca null'a döner */}
      {active && <Lightbox {...active} onClose={() => setActive(null)} />}
    </>
  )
}

// ─── ANA SAYFA BİLEŞENİ ──────────────────────────────────────────────────────
export default function Araclarimiz() {
  return (
    <>
      {/* ── 2026 ARAÇ HERO ──────────────────────────────────────────────── */}
      {/* Araç görseli CSS backgroundImage olarak uygulanıyor */}
      <section className="car-hero">
        <div className="car-hero-bg" style={{ backgroundImage: `url(${base}images/2026_arac.png)` }}>
          <div className="car-hero-overlay" /> {/* Karartma katmanı, okunabilirliği artırır */}
          <div className="car-hero-content container reveal">
            <p className="section-label">// 2026</p>
            <h1 className="car-hero-title">ARACIMIZ</h1>
            {/* Galeri bölümüne smooth scroll */}
            <a href="#galeri-2026" className="btn-primary mt-32 inline-block">GALERİYİ GÖR ↓</a>
          </div>
        </div>
      </section>

      {/* ── 2026 TEKNİK ÖZELLİKLER ─────────────────────────────────────── */}
      <section className="specs-section">
        <div className="container">
          <p className="section-label reveal">// TEKNİK ÖZELLIKLER — 2026</p>
          <div className="red-line reveal" />
          <div className="specs-grid reveal reveal-delay-1">
            {/* specs2026 dizisini döngüyle her özellik için kart oluştur */}
            {specs2026.map(s => (
              <div key={s.key} className="spec-item card">
                <span className="spec-key">{s.key}</span>
                <span className="spec-val">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YAPIM AŞAMASI ───────────────────────────────────────────────── */}
      <section className="build-section">
        <div className="container">
          <p className="section-label reveal">// YAPIM AŞAMASI</p>
          <div className="red-line reveal" />

          {/* buildPhotos doluysa grid göster, boşsa placeholder */}
          {buildPhotos.length ? (
            <div className="build-grid">
              {buildPhotos.map((p, i) => (
                // transitionDelay → kartlar sırayla animasyonla giriyor (her biri 80ms farkla)
                <div key={i} className="build-item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <img src={p.src} alt={p.caption} loading="lazy" />
                  <p className="build-caption">{p.caption}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="build-placeholder reveal">
              <p className="text-secondary">Yapım aşaması fotoğrafları yakında eklenecek.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── 2026 GALERİ ─────────────────────────────────────────────────── */}
      {/* id="galeri-2026" → hero'daki "GALERİYİ GÖR" butonu buraya scroll eder */}
      <section className="gallery-section" id="galeri-2026">
        <div className="container">
          <p className="section-label reveal">// GALERİ — 2026</p>
          <div className="red-line reveal" />
          <Gallery photos={gallery2026} label="GALERİ 2026" />
        </div>
      </section>

      {/* ── 2025 ARAÇ VE GALERİ ─────────────────────────────────────────── */}
      <section className="car-2025-section">
        <div className="container">
          <p className="section-label reveal">// 2025 ARACIMIZ</p>
          <div className="red-line reveal" />

          {/* Sol: araç görseli | Sağ: teknik özellikler */}
          <div className="car-2025-inner">
            <div className="car-2025-img reveal">
              <img
                src={`${base}images/2025-arac-images/arac-buyuk.jpg`}
                alt="2025 Aracımız"
                // Görsel yüklenemezse parent div'e placeholder CSS sınıfı ekle
                onError={e => { e.target.parentElement.classList.add('img-placeholder-box') }}
              />
            </div>

            <div className="car-2025-specs reveal reveal-delay-2">
              <h2>2025<br /><span className="text-red">ARACIMIZ</span></h2>
              <div className="specs-list mt-24">
                {specs2025.map(s => (
                  <div key={s.key} className="specs-row">
                    <span className="specs-key">{s.key}</span>
                    <span className="specs-val">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2025 galeri fotoğrafları */}
          <div className="mt-48">
            <p className="section-label reveal">// GALERİ — 2025</p>
            <div className="red-line reveal" />
            <Gallery photos={gallery2025} label="GALERİ 2025" />
          </div>
        </div>
      </section>
    </>
  )
}