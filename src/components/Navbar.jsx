// Navbar bileşeni — üst navigasyon çubuğunu ve mobil menüyü yönetir
import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

// Görseller public/images/ klasöründe olduğu için BASE_URL prefix kullanıyoruz
const base = import.meta.env.BASE_URL

// ─── NAVİGASYON LİNKLERİ ─────────────────────────────────────────────────────
// to   → React Router route'u
// label → ekranda görünen metin
// Yeni sayfa eklemek için buraya { to, label } nesnesi ekle
const links = [
  { to: '/',                  label: 'ANASAYFA'           },
  { to: '/hakkimizda',        label: 'HAKKIMIZDA'         },
  { to: '/araclarimiz',       label: 'ARAÇLARIMIZ'        },
  { to: '/formulastudent',    label: 'FORMULA STUDENT'    },
  { to: '/surdurulebilirlik', label: 'SÜRDÜRÜLEBİLİRLİK' },
  { to: '/sponsorlar',        label: 'SPONSORLAR'         },
  { to: '/oyun',              label: 'OYUN'               },
  { to: '/iletisim',          label: 'İLETİŞİM'           },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)  // Mobil menü açık mı?
  const [scrolled, setScrolled] = useState(false)  // Sayfa aşağı kaydırıldı mı?
  const { pathname }            = useLocation()    // Aktif route (sayfa değişimini algılar)

  // Sayfa değişince mobil menüyü otomatik kapat
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Mobil menü açıkken body scroll'unu kilitle (arka plan kaymasın)
  // cleanup fonksiyonu → bileşen kapanınca overflow'u sıfırla
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Scroll pozisyonunu dinle → 40px geçilince navbar arka planı değişir
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll) // Bellek sızıntısını önle
  }, [])

  const close  = () => setOpen(false)        // Menüyü kapat
  const toggle = () => setOpen(o => !o)      // Menüyü aç/kapat

  return (
    <>
      {/* ── NAVBAR ÇUBUĞU ────────────────────────────────────────────────── */}
      {/* scrolled true olunca CSS'de arka plan rengi değişir */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">

          {/* Logo — ana sayfaya yönlendirir */}
          <NavLink to="/" className="nav-logo" onClick={close}>
            <img src={`${base}images/new-team-icon.png`} alt="1.5 Adana Formula Student" style={{ height: '40px', width: 'auto' }} />
          </NavLink>

          {/* Masaüstü navigasyon linkleri */}
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.to}>
                {/* NavLink → aktif route'a otomatik "active" class'ı ekler */}
                {/* end={l.to === '/'} → sadece tam "/" eşleşmesinde aktif say */}
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger butonu — sadece mobilde görünür (CSS ile) */}
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={toggle}
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}   // Ekran okuyucular için erişilebilirlik
          >
            <span />  {/* 3 span = hamburger çizgileri */}
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── MOBİL MENÜ ───────────────────────────────────────────────────── */}
      {/* open class'ı CSS animasyonunu tetikler */}
      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <ul>
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
                onClick={close}  // Link'e tıklayınca menüyü kapat
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay — menü açıkken dışarıya tıklayınca kapatır */}
      {open && <div className="menu-overlay" onClick={close} />}
    </>
  )
}