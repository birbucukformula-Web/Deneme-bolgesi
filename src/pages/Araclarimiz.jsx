import { Link } from 'react-router-dom'
import './Araclarimiz.css'

export default function Araclarimiz() {
  return (
    <>
      {/* ── SAYFA BAŞLIĞI VE YÖNLENDİRME MENÜSÜ ───────────────────────────── */}
      <section className="araclar-header-section" style={{ minHeight: '80vh', justifyContent: 'center' }}>
        <div className="container">
          <p className="section-label reveal">// ARAÇLARIMIZ</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1 mt-16" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}>
            GEÇMİŞTEN GÜNÜMÜZE<br /><span className="text-red">ARAÇLARIMIZ</span>
          </h1>
          <p className="text-secondary mt-16 reveal reveal-delay-2" style={{ maxWidth: '600px' }}>
            Çukurova Üniversitesi Formula Student ekibi olarak her yıl kendimizi geliştiriyor, 
            pistlerde bizi temsil eden araçlarımızı daha güçlü ve yenilikçi hale getiriyoruz.
            Detaylı incelemek istediğiniz aracı aşağıdan seçebilirsiniz.
          </p>
          
          <div className="araclar-nav mt-32 reveal reveal-delay-3">
            <Link to="/2026arac" className="btn-primary">2025-2026 ARACIMIZ →</Link>
            <Link to="/2025arac" className="btn-outline">2024-2025 ARACIMIZ →</Link>
          </div>
        </div>
      </section>
    </>
  )
}