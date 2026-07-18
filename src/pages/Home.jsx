import { Link } from 'react-router-dom'
import './Home.css'

/* EDIT: Add your actual captain photos to src/assets/images/ */
const captains = [
  { name: 'Ahmet Göksel Durmaz', title: 'Takım Kaptanı', photo: 'https://birbucukadanaformula.com/images/team_leader.jpg' },
  { name: 'Mustafa Mert Abbak', title: 'Mekanik Departmanı', photo: 'https://birbucukadanaformula.com/images/mechanic_leader.jpg' },
  { name: 'Demir Torun', title: 'Elektrik Departmanı', photo: 'https://birbucukadanaformula.com/images/demir.png' },
  { name: 'Necdet Özdemir', title: 'Yazılım Departmanı', photo: 'https://birbucukadanaformula.com/images/software_leader.jpg' },
]

const stats = [
  { value: '2023', label: 'Kuruluş Yılı' },
  { value: '25+', label: 'Üye' },
  { value: 'FST', label: 'Yarışma' },
]

function CaptainCard({ c, delay }) {
  const initials = c.name.split(' ').slice(0, 2).map(n => n[0]).join('')
  return (
    <div className={`captain-card card reveal reveal-delay-${delay}`}>
      <div className="captain-photo-wrap">
        <img
          src={c.photo}
          alt={c.name}
          onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
        />
        <div className="captain-initials" style={{ display: 'none' }}>{initials}</div>
      </div>
      <div className="captain-info">
        <h3>{c.name}</h3>
        <p>{c.title}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero scanline-bg">
        <div className="hero-lines" aria-hidden="true">
          {[...Array(6)].map((_, i) => <span key={i} className="hero-line" style={{ animationDelay: `${i * 0.4}s` }} />)}
        </div>
        <div className="hero-content reveal">
          <h1 className="hero-title">
            <span className="hero-num">1.5</span>
            <span className="hero-formula">ADANA</span>
            <span className="hero-student text-red">FORMULA</span>
          </h1>
          <p className="hero-sub">MÜHENDİSLİK · HIZ · KOD · TUTKU</p>
          <div className="hero-ctas">
            <Link to="/araclarimiz" className="btn-primary">ARAÇLARIMIZI GÖR</Link>
            <Link to="/hakkimizda" className="btn-outline">HAKKIMIZDA</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span />
        </div>
      </section>

      {/* ARAÇ TEASER */}
      <section className="car-teaser">
        {/* EDIT: Replace with your car photo — src/assets/images/arac_2026.jpg */}
        <div className="car-teaser-bg" style={{ backgroundImage: 'url(/src/assets/images/arac_2026.jpg)' }}>
          <div className="car-teaser-overlay" />
          <div className="container car-teaser-inner">
            <div className="car-teaser-text reveal">
              <p className="section-label">// 2026 ARACIMIZ</p>
              <div className="red-line" />
              <h2>Yarışa Hazır.<br />Sınırları Zorluyor.</h2>
              <p className="mt-16 text-secondary">
                Mühendislik, tutku ve kodun birleştiği 2026 aracımız — her detayı takımımız tarafından tasarlandı.
              </p>
              <Link to="/araclarimiz" className="btn-primary mt-32 inline-block">ARAÇLARI İNCELE →</Link>
            </div>
            {/* Corner brackets */}
            <div className="bracket bracket-tl" />
            <div className="bracket bracket-br" />
          </div>
        </div>
      </section>

      {/* FORMULA STUDENT NEDİR */}
      <section className="about-section">
        <div className="container grid-2 items-center">
          <div className="reveal">
            <p className="section-label">// FORMULA STUDENT NEDİR?</p>
            <div className="red-line" />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>Mühendisliğin<br />Yarış Pistindeki<br /><span className="text-red">Sınavı</span></h2>
            <p className="mt-24 text-secondary" style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Formula Student, dünya genelinde üniversite öğrencilerinin tek kişilik yarış araçları tasarladığı,
              ürettiği ve yarıştırdığı uluslararası bir mühendislik yarışmasıdır. Teknik mükemmeliyetin
              ötesinde, pazarlama, maliyet optimizasyonu ve iş planlaması da değerlendirilir.
            </p>
          </div>

          <div className="stats-block reveal reveal-delay-2">
            {stats.map(s => (
              <div key={s.value} className="stat-item card">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKIM KAPTANLARI */}
      <section className="captains-section">
        <div className="container">
          <div className="reveal">
            <p className="section-label">// TAKIM KAPTANLARI</p>
            <div className="red-line" />
          </div>
          <div className="captains-grid">
            {captains.map((c, i) => (
              <CaptainCard key={c.name} c={c} delay={Math.min(i + 1, 4)} />
            ))}
          </div>
          <div className="reveal mt-48" style={{ textAlign: 'center' }}>
            <Link to="/hakkimizda" className="btn-outline">TÜM TAKIM →</Link>
          </div>
        </div>
      </section>
    </>
  )
}