import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../assets/images/team_logo_footer_1.png'
import InstagramIcon from '../assets/images/Instagram_icon.png'
import LinkedInIcon from '../assets/images/LinkedIn_icon.png'
import YouTubeIcon from '../assets/images/YouTube_icon.png'

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/1.5adanaformula/', icon: InstagramIcon }, 
  { name: 'LinkedIn',  href: 'https://www.linkedin.com/company/1.5adanaformulasae/', icon: LinkedInIcon }, 
  { name: 'YouTube',   href: 'https://www.youtube.com/@1.5adanaformula', icon: YouTubeIcon }, 
]

const pages = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/araclarimiz', label: 'Araçlarımız' },
  { to: '/surdurulebilirlik', label: 'Sürdürülebilirlik' },
  { to: '/sponsorlar', label: 'Sponsorlar' },
  { to: '/oyun', label: 'Oyun' },
  { to: '/iletisim', label: 'İletişim' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <img
            src={logo} 
            alt="Team Logo"
            style={{ height: '80px', width: 'auto', marginBottom: '16px' }}
          />
          <p className="footer-tagline">Çukurova'nın Formula Student Takımı</p>
        </div>

        {/* Quick links */}
        <div className="footer-links">
          <p className="footer-heading">Sayfalar</p>
          <ul>
            {pages.map(p => (
              <li key={p.to}><Link to={p.to}>{p.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <p className="footer-heading">Sosyal Medya</p>
          <div className="social-icons">
            {socials.map(s => (
              <a key={s.name} href={s.href} className="social-icon" aria-label={s.name} target="_blank" rel="noopener noreferrer">
                <img src={s.icon} alt={s.name} className="footer-social-img" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2026 1.5 Adana Formula Student . Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}