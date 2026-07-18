import './Araclarimiz.css'

const base = import.meta.env.BASE_URL

// ─── TEKNİK VERİLER ──────────────────────────────────────────────────────────
const specs2026 = [
  { key: 'Motor Tipi',      value: 'Elektrikli' },
  { key: 'Şasi',            value: 'Çelik Boru Kafes' },
  { key: 'Toplam Ağırlık',  value: '230 kg' },
  { key: 'Güç',             value: '80 kW' },
  { key: 'İvmelenme',       value: '3.9s (0-100)' },
  { key: 'Tekerlek Tabanı', value: '1530 mm' },
]

// ─── YAPIM AŞAMASI FOTOĞRAFLARI ──────────────────────────────────────────────
// 2025-2026 Sezonu Yapım aşaması fotoğrafları (Henüz yok)
const buildPhotos2026 = []

export default function Arac2026() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="season-section">
        <div className="container">
          <div className="season-title-box reveal">
            <h2>2025-2026 <span className="text-red">SEZONU ARACI</span></h2>
          </div>

          <div className="season-main-img reveal reveal-delay-1">
            <img src={`${base}images/2026_arac.png`} alt="2025-2026 Sezonu Aracı" />
          </div>

          <div className="season-specs mt-48">
            <p className="section-label reveal">// TEKNİK ÖZELLİKLER</p>
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

          <div className="season-build mt-48">
            <p className="section-label reveal">// YAPIM AŞAMASI</p>
            <div className="red-line reveal" />
            
            {buildPhotos2026.length ? (
              <div className="build-grid">
                {buildPhotos2026.map((p, i) => (
                  <div key={i} className="build-item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <img src={p.src} alt={p.caption} loading="lazy" />
                    <p className="build-caption">{p.caption}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="build-grid">
                {/* 4 adet placeholder kutusu */}
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="build-placeholder-box reveal">
                    <span className="placeholder-icon">📸</span>
                    <p>Görsel Yakında<br/>Eklenecek</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
