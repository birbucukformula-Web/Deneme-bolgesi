import { Link } from 'react-router-dom'
import './Sponsorlar.css'

/* TIER LİSTESİ: En üste 'ANA SPONSORLAR' eklendi */
const tiers = [
  {
    label: 'ANA SPONSORLAR',
    icon: '💎',
    cls: 'tier-main', /* Bu class'a özel devasa CSS yazdık */
    sponsors: [
      { name: 'Emre Makina', logo: '/src/assets/images/sponsor-images/emremak-güncel.png', href: 'https://www.emremakinasan.com.tr/' },
      { name: 'Bomak', logo: '/src/assets/images/sponsor-images/bomak.png', href: 'https://bomak.com.tr/' },
      { name: 'Beauty Max', logo: '/src/assets/images/sponsor-images/beautymax.jpg', href: 'https://example3.com' },
    ],
  },
  {
    label: 'ALTIN SPONSORLAR',
    icon: '🥇',
    cls: 'tier-gold',
    sponsors: [
      { name: 'Numesys', logo: '/src/assets/images/sponsor-images/numesys.png', href: 'https://www.numesys.com.tr/' },
      { name: 'Temsa', logo: '/src/assets/images/sponsor-images/temsa.png', href: 'https://www.temsa.com/tr/tr' },
    ],
  },
  {
    label: 'GÜMÜŞ SPONSORLAR',
    icon: '🥈',
    cls: 'tier-silver',
    sponsors: [
      { name: 'KORDSA', logo: '/src/assets/images/sponsor-images/kordsa.png', href: 'https://kordsa.com/tr' },
      { name: 'İstanbul Filament', logo: '/src/assets/images/sponsor-images/istanbul filament.png', href: 'https://www.istanbulfilament.com/' },
      { name: 'KY Kırtasiye', logo: '/src/assets/images/sponsor-images/ky-kirtasiye.png', href: 'https://www.kykirtasiye.com/' },
    ],
  },
  {
    label: 'BRONZ SPONSORLAR',
    icon: '🥉',
    cls: 'tier-bronze',
    sponsors: [
      { name: 'Giriş Kırtasiye', logo: '/src/assets/images/sponsor-images/giris-kirtasiye.png', href: 'https://example10.com' },
      { name: 'GSB', logo: '/src/assets/images/sponsor-images/gsb.png', href: 'https://gsb.gov.tr/tr' },
      { name: 'Bilgehan Mak', logo: '/src/assets/images/sponsor-images/bilgehanmak.png', href: 'https://www.bilgehanltd.com/' },
    ],
  },
]

const benefits = [
  { icon: '📢', text: 'Araç üzerinde logo görünürlüğü' },
  { icon: '📱', text: 'Sosyal medya tanıtımı' },
  { icon: '🏁', text: 'Yarışma sürecinde marka temsili' },
  { icon: '🤝', text: 'Üniversite öğrencileriyle ağ kurma' },
  { icon: '📄', text: 'Web sitesi ve basın materyallerinde yer alma' },
  { icon: '🎥', text: 'Medya içeriklerinde sponsor tanıtımı' },
]

function SponsorCard({ s, size }) {
  return (
    <a href={s.href} target="_blank" rel="noopener noreferrer" className={`sponsor-card card sponsor-card--${size}`}>
      <img 
        src={s.logo} 
        alt={s.name} 
        onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }} 
      />
      <span className="sponsor-name-fallback" style={{ display: 'none' }}>{s.name}</span>
    </a>
  )
}

export default function Sponsorlar() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero sponsor-hero">
        <div className="container">
          <p className="section-label reveal">// SPONSORLAR</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1">
            BİZİMLE<br /><span className="text-red">YER ALIN</span>
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2" style={{ maxWidth: '560px' }}>
            Çukurova Üniversitesi'nin Formula Student takımını destekleyerek
            genç mühendislerin hayallerine ortak olun ve markanızı piste taşıyın.
          </p>
        </div>
      </section>

      {/* NEDEN SPONSOR OLUNMALI */}
      <section className="why-section">
        <div className="container">
          <p className="section-label reveal">// NEDEN SPONSOR OLUNMALI?</p>
          <div className="red-line reveal" />
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className={`benefit-item reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <span className="benefit-icon">{b.icon}</span>
                <span className="benefit-text">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSOR LOGO TIERLERİ */}
      <section className="sponsors-section">
        <div className="container">
          <p className="section-label reveal">// DESTEKÇİLERİMİZ</p>
          <div className="red-line reveal" />

          {tiers.map(tier => (
            <div key={tier.label} className={`tier-block reveal ${tier.cls}`}>
              <div className="tier-header">
                <span className="tier-icon">{tier.icon}</span>
                <span className="tier-label">{tier.label}</span>
              </div>
              {tier.sponsors.length ? (
                <div className={`sponsors-row sponsors-row--${tier.cls}`}>
                  {tier.sponsors.map(s => (
                    <SponsorCard key={s.name} s={s} size={tier.cls} />
                  ))}
                </div>
              ) : (
                <div className="tier-empty">
                  <p className="text-secondary" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '1px' }}>
                    Bu kategoride sponsor bekleniyor...
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sponsor-cta-section">
        <div className="container">
          <div className="sponsor-cta-box reveal">
            <p className="section-label">// SPONSOR OL</p>
            <div className="red-line" />
            <h2>Takımımızın<br /><span className="text-red">Sponsoru Olun</span></h2>
            <p className="text-secondary mt-24" style={{ maxWidth: '480px', lineHeight: '1.8' }}>
              Sponsorluk paketlerimiz ve detaylı bilgi için bizimle iletişime geçin.
              Her bütçeye uygun iş birliği fırsatları sunuyoruz.
            </p>
            <Link to="/iletisim" className="btn-primary mt-32 inline-block">BİZİMLE İLETİŞİME GEÇ →</Link>
          </div>
        </div>
      </section>
    </>
  )
}