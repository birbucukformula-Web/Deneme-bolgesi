import './Iletisim.css'

/* EDIT: Sosyal medya linklerini doldur */
const socials = [
  {
    name: 'Instagram',
    handle: '@birbucukadanafs', /* EDIT */
    href: '#',                  /* EDIT: Instagram URL */
    color: '#E1306C',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: '1.5 Adana Formula Student', /* EDIT */
    href: '#', /* EDIT: LinkedIn URL */
    color: '#0077B5',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '1.5 Adana Formula Student', /* EDIT */
    href: '#', /* EDIT: YouTube URL */
    color: '#FF0000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    name: 'E-posta',
    handle: 'info@birbucukadanaformula.com',
    href: 'mailto:info@birbucukadanaformula.com',
    color: '#E8000D',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
]

export default function Iletisim() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero iletisim-hero">
        <div className="container">
          <p className="section-label reveal">// İLETİŞİM</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1">
            BİZE<br /><span className="text-red">ULAŞIN</span>
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2">
            Sponsorluk, iş birliği veya merak ettiğin her şey için bize ulaşabilirsin.
          </p>
        </div>
      </section>

      {/* SOSYAL MEDYA KARTLARI */}
      <section className="social-section">
        <div className="container">
          <p className="section-label reveal">// SOSYAL MEDYA</p>
          <div className="red-line reveal" />
          <div className="social-grid">
            {socials.map((s, i) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`social-card card reveal reveal-delay-${Math.min(i + 1, 4)}`}
                style={{ '--hover-color': s.color }}
              >
                <div className="social-card-icon" style={{ color: s.color }}>{s.icon}</div>
                <div className="social-card-info">
                  <h3>{s.name}</h3>
                  <p>{s.handle}</p>
                </div>
                <div className="social-card-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ATÖLYE KONUMU */}
      <section className="map-section">
        <div className="container">
          <p className="section-label reveal">// ATÖLYEMİZ</p>
          <div className="red-line reveal" />
          <div className="map-wrapper reveal">
            {/* Google Maps embed — Çukurova Üniversitesi */}
            <iframe
              title="Atölye Konumu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.045211080554!2d35.354587575657625!3d37.05640577217521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288ddfbf9a5005%3A0x5c67da75f813a0eb!2zw4d1a3Vyb3ZhIMOcbml2ZXJzaXRlc2kgVMO2bWVy!5e0!3m2!1str!2str!4v1777664663349!5m2!1str!2str"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="map-address reveal reveal-delay-1">
            <span className="section-label">📍 ADRES</span>
            <p className="text-secondary mt-8" style={{ fontSize: '16px' }}>
              Çukurova Üniversitesi Tömer Binası
            </p>
            <p className="text-secondary" style={{ fontSize: '16px' }}>
               Sarıçam/Adana, Türkiye
            </p>
          </div>
        </div>
      </section>
    </>
  )
}