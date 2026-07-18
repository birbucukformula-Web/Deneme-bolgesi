// Footer bileşeni — sitenin alt kısmında logo, hızlı linkler ve sosyal medya ikonları
import { Link } from 'react-router-dom'
import './Footer.css'

// Görseller public/images/ klasöründe olduğu için BASE_URL prefix kullanıyoruz
const base = import.meta.env.BASE_URL

// ─── SOSYAL MEDYA LİNKLERİ ───────────────────────────────────────────────────
// icon → public/images/ klasöründeki ikon görseli
// href → dış bağlantı (yeni sekmede açılır)
const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/1.5adanaformula/',          icon: `${base}images/Instagram_icon.png` },
  { name: 'LinkedIn',  href: 'https://www.linkedin.com/company/1.5adanaformulasae/', icon: `${base}images/Linkedin_icon.png`  },
  { name: 'YouTube',   href: 'https://www.youtube.com/@1.5adanaformula',             icon: `${base}images/Youtube_icon.png`   },
]

// ─── HIZLI SAYFALAR ──────────────────────────────────────────────────────────
// Footer'daki navigasyon linkleri — React Router'ın Link bileşeni kullanılır
const pages = [
  { to: '/',                  label: 'Ana Sayfa'       },
  { to: '/hakkimizda',        label: 'Hakkımızda'      },
  { to: '/araclarimiz',       label: 'Araçlarımız'     },
  { to: '/surdurulebilirlik', label: 'Sürdürülebilirlik'},
  { to: '/sponsorlar',        label: 'Sponsorlar'      },
  { to: '/oyun',              label: 'Oyun'            },
  { to: '/iletisim',          label: 'İletişim'        },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid"> {/* 3 sütunlu grid: logo | linkler | sosyal medya */}

        {/* ── MARKA / LOGO ────────────────────────────────────────────────── */}
        <div className="footer-brand">
          <img
            src={`${base}images/team_logo_footer_1.png`}
            alt="Team Logo"
            style={{ height: '80px', width: 'auto', marginBottom: '16px' }}
          />
          <p className="footer-tagline">Çukurova'nın Formula Student Takımı</p>
        </div>

        {/* ── HIZLI LİNKLER ───────────────────────────────────────────────── */}
        <div className="footer-links">
          <p className="footer-heading">Sayfalar</p>
          <ul>
            {/* pages dizisini döngüyle linklere çevir */}
            {pages.map(p => (
              <li key={p.to}><Link to={p.to}>{p.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* ── SOSYAL MEDYA İKONLARI ───────────────────────────────────────── */}
        <div className="footer-socials">
          <p className="footer-heading">Sosyal Medya</p>
          <div className="social-icons">
            {/* socials dizisini döngüyle ikon butonlarına çevir */}
            {/* target="_blank" → yeni sekmede aç */}
            {/* rel="noopener noreferrer" → güvenlik için (yeni sekmede parent sayfaya erişimi engeller) */}
            {socials.map(s => (
              <a key={s.name} href={s.href} className="social-icon" aria-label={s.name} target="_blank" rel="noopener noreferrer">
                <img src={s.icon} alt={s.name} className="footer-social-img" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── TELİF HAKKI SATIRI ──────────────────────────────────────────────── */}
      <div className="footer-bottom container">
        <p>© 2026 1.5 Adana Formula Student . Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}