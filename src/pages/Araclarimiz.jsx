import { useState } from 'react'
import './Araclarimiz.css'

/* 2026 Teknik Özellikler */
const specs2026 = [
  { key: 'Motor Tipi',     value: 'Elektrikli' },
  { key: 'Şasi',           value: 'Çelik Boru Kafes' },
  { key: 'Toplam Ağırlık', value: '230 kg' },
  { key: 'Güç',            value: '80 kW' },
  { key: 'İvmelenme',      value: '3.9s (0-100)' },
  { key: 'Tekerlek Tabanı',value: '1530 mm' },
]

/* 2025 Teknik Özellikler */
const specs2025 = [
  { key: 'Motor Tipi',     value: 'Elektrikli' },
  { key: 'Şasi',           value: 'Çelik Boru Kafes' },
  { key: 'Toplam Ağırlık', value: '250 kg' },
  { key: 'Güç',            value: '60 kW' },
]

/* GALERİ - 2026 (gallery klasöründeki fotoğraflar) */
const gallery2026 = [
  { src: '/src/assets/images/gallery/formula_student0.jpg', alt: 'Ekip Pozu 1' },
  { src: '/src/assets/images/gallery/formula_student1.jpg', alt: 'Araç ve Çadır' },
  { src: '/src/assets/images/gallery/formula_student2.jpg', alt: 'Ekip Pozu 2' },
]

/* GALERİ - 2025 (2025-arac-images içindeki küçük fotolar) */
const gallery2025 = [
  { src: '/src/assets/images/2025-arac-images/arac-kucuk0.jpg', alt: '2025 Detay 1' },
  { src: '/src/assets/images/2025-arac-images/arac-kucuk1.jpg', alt: '2025 Detay 2' },
  { src: '/src/assets/images/2025-arac-images/arac-kucuk2.jpg', alt: '2025 Detay 3' },
]

/* YAPIM AŞAMASI (made-progress klasörü veya ilgili fotolar) */
/* YAPIM AŞAMASI (made-progress klasöründeki fotoğraflar) */
const buildPhotos = [
  { src: '/src/assets/images/2025-arac-images/made-progress/0.JPG', caption: 'Kaynak İşlemleri' },
  { src: '/src/assets/images/2025-arac-images/made-progress/1.JPG', caption: 'Metal Kesim' },
  { src: '/src/assets/images/2025-arac-images/made-progress/2.JPG', caption: 'Şasi Detay' },
  { src: '/src/assets/images/2025-arac-images/made-progress/3.JPG', caption: 'Montaj Aşaması' },
  { src: '/src/assets/images/2025-arac-images/made-progress/4.JPG', caption: 'Son Düzenlemeler' },
]

function Lightbox({ src, alt, onClose }) {
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>✕</button>
      <img src={src} alt={alt} onClick={e => e.stopPropagation()} />
    </div>
  )
}

function Gallery({ photos, label }) {
  const [active, setActive] = useState(null)
  if (!photos.length) return (
    <div className="gallery-empty">
      <span className="section-label">// {label} — FOTOĞRAFLAR YAKINDA</span>
    </div>
  )
  return (
    <>
      <div className="gallery-masonry">
        {photos.map((p, i) => (
          <div key={i} className="gallery-item" onClick={() => setActive(p)}>
            <img src={p.src} alt={p.alt} loading="lazy" />
          </div>
        ))}
      </div>
      {active && <Lightbox {...active} onClose={() => setActive(null)} />}
    </>
  )
}

export default function Araclarimiz() {
  return (
    <>
      {/* 2026 ARAÇ HERO */}
      <section className="car-hero">
        {/* Ana klasördeki 2026_arac.png kullanıldı */}
        <div className="car-hero-bg" style={{ backgroundImage: 'url(/src/assets/images/2026_arac.png)' }}>
          <div className="car-hero-overlay" />
          <div className="car-hero-content container reveal">
            <p className="section-label">// 2026</p>
            <h1 className="car-hero-title">ARACIMIZ</h1>
            <a href="#galeri-2026" className="btn-primary mt-32 inline-block">GALERİYİ GÖR ↓</a>
          </div>
        </div>
      </section>

      {/* 2026 SPECS */}
      <section className="specs-section">
        <div className="container">
          <p className="section-label reveal">// TEKNİK ÖZELLIKLER — 2026</p>
          <div className="red-line reveal" />
          <div className="specs-grid reveal reveal-delay-1">
            {specs2026.map(s => (
              <div key={s.key} className="spec-item card">
                <span className="spec-key">{s.key}</span>
                <span className="spec-val">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YAPIM AŞAMASI */}
      <section className="build-section">
        <div className="container">
          <p className="section-label reveal">// YAPIM AŞAMASI</p>
          <div className="red-line reveal" />
          {buildPhotos.length ? (
            <div className="build-grid">
              {buildPhotos.map((p, i) => (
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

      {/* GALERİ 2026 */}
      <section className="gallery-section" id="galeri-2026">
        <div className="container">
          <p className="section-label reveal">// GALERİ — 2026</p>
          <div className="red-line reveal" />
          <Gallery photos={gallery2026} label="GALERİ 2026" />
        </div>
      </section>

      {/* 2025 ARAÇ */}
      <section className="car-2025-section">
        <div className="container">
          <p className="section-label reveal">// 2025 ARACIMIZ</p>
          <div className="red-line reveal" />

          <div className="car-2025-inner">
            <div className="car-2025-img reveal">
              <img
                src="/src/assets/images/2025-arac-images/arac-buyuk.jpg"
                alt="2025 Aracımız"
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