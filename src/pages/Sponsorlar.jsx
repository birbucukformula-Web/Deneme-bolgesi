import { Link } from 'react-router-dom'
import './Sponsorlar.css'

// Klasördeki tüm resimleri tek seferde otomatik içeri alıyoruz
const images = import.meta.glob('/src/assets/images/sponsor-images/*.{png,jpg,jpeg,svg}', { eager: true });
/* TIER LİSTESİ: En üste 'ANA SPONSORLAR' eklendi */
const tiers = [
  {
    label: 'ALTIN SPONSORLAR',
    icon: '🥇',
    cls: 'tier-main',
    sponsors: [
      { name: 'Avioni', logo: 'avioni_logo.png', href: 'https://avionitech.com//' },
      { name: 'OnPlus', logo: 'onplus-sitelogo.png', href: 'https://www.onplus.com.tr/' },
      { name: 'Germaksan', logo: 'germaksan-logo.jpg', href: 'https://germaksan.com.tr/' },
      { name: 'NoktaDil', logo: 'noktadil-logo.jpg', href: 'https://www.noktadil.com.tr/' }
    ],
  },
  {
    label: 'GÜMÜŞ SPONSORLAR',
    icon: '🥈',
    cls: 'tier-silver',
    sponsors: [
      { name: 'Boğaziçi Yazılım', logo: 'boazici-yazilim-logo.png', href: 'https://www.bogaziciyazilim.com/' },
      { name: 'Cubicl', logo: 'cubicl-logo.png', href: 'https://cubicl.io/tr' },
      { name: 'Makersan', logo: 'makersan-logo.jpeg', href: 'https://www.makersan.com.tr/' },
      { name: 'Ateks', logo: 'ateks-logo.png', href: 'https://www.ateks.international/anasayfa-muhendislik' },
      { name: 'Şifa Ana', logo: 'sifa-ana-logo.png', href: 'https://www.sifaana.com.tr/' },
      { name: 'Petka', logo: 'petka-logo.png', href: 'https://www.petkakalip.com.tr/' },
    ],
  },
  {
    label: 'BRONZ SPONSORLAR',
    icon: '🥉',
    cls: 'tier-bronze',
    sponsors: [
      { name: 'ORS', logo: 'ors-logo.png', href: 'https://www.ors.com.tr/' }, 
      { name: 'BeautyMax', logo: 'beautymax.jpg' },
    ],
  },
  {
    label: 'DESTEKÇİ SPONSORLAR',
    icon: '🤝',
    cls: 'tier-other',
    sponsors: [
      { name: 'MSA', logo: 'MSA-logo.png', href: 'https://msaglobalgumruk.com/' },
      { name: 'Acımak', logo: 'acimak-logo.png', href: 'https://www.acimak.com.tr/' },
      { name: 'Cebeci', logo: 'cebeci-logo.png' },
      { name: 'Temsa', logo: 'temsa.png', href: 'https://www.temsa.com/tr/' },
      { name: 'Tasargem', logo: 'tasargem-logo.png', href: 'https://tasargem.com/' },
      { name: 'Şanal Petrol', logo: 'sanalpetrol-logo.png' },
      { name: 'Aslan Çelik Boru', logo: 'aslancelik-logo.jpg', href: 'https://www.aslancelikboru.com/' },
      { name: 'Groseri', logo: 'groseri-logo.png', href: 'https://www.groseri.com.tr/' },
      { name: 'Dimes', logo: 'dimes-logo.png', href: 'https://www.groseri.com.tr/' },
      { name: 'Han Kahve', logo: 'hankahve-logo.jpg', href: 'https://hankurukahvecisi.com/' }
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
  // Hafızadaki resim havuzundan ilgili logonun Vite yansıma yolunu çekiyoruz
  const imageSrc = images[`/src/assets/images/sponsor-images/${s.logo}`]?.default || s.logo;

  return (
    <a href={s.href} target="_blank" rel="noopener noreferrer" className={`sponsor-card card sponsor-card--${size}`}>
      <img 
        src={imageSrc} 
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