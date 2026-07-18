// Navbar bileşeni — üst navigasyon çubuğunu ve mobil menüyü yönetir
import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

// Görseller public/images/ klasöründe olduğu için BASE_URL prefix kullanıyoruz
const base = import.meta.env.BASE_URL

// ─── NAVİGASYON LİNKLERİ ─────────────────────────────────────────────────────
const links = [
  { to: '/', label: 'ANASAYFA' },
  { 
    to: '#', 
    label: 'HAKKIMIZDA',
    subLinks: [
      { to: '/hakkimizda', label: 'Biz Kimiz?' },
      { to: '/formulastudent', label: 'Formula Student' },
      { to: '/surdurulebilirlik', label: 'Sürdürülebilirlik' },
      { to: '/oyun', label: 'Oyun' },
    ]
  },
  { to: '/araclarimiz', label: 'ARAÇLARIMIZ' },
  { to: '/sponsorlar', label: 'SPONSORLAR' },
  { 
    to: '#', 
    label: 'TAKIMIMIZ',
    subLinks: [
      { to: '/ekip-uyeleri', label: 'Ekip Üyeleri' },
      { to: '/galeri', label: 'Galeri' },
    ]
  },
  { to: '/iletisim', label: 'İLETİŞİM' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)  // Mobil menü açık mı?
  const [scrolled, setScrolled] = useState(false)  // Sayfa aşağı kaydırıldı mı?
  // Mobil menüdeki akordeonlar için
  const [openSub, setOpenSub]   = useState(null)
  const { pathname }            = useLocation()

  // Sayfa değişince mobil menüyü otomatik kapat
  useEffect(() => {
    setOpen(false)
    setOpenSub(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close  = () => setOpen(false)
  const toggle = () => setOpen(o => !o)

  const toggleSub = (label) => {
    setOpenSub(prev => prev === label ? null : label)
  }

  return (
    <>
      {/* ── NAVBAR ÇUBUĞU ────────────────────────────────────────────────── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">

          {/* Logo */}
          <NavLink to="/" className="nav-logo" onClick={close}>
            <img src={`${base}images/new-team-icon.png`} alt="1.5 Adana Formula Student" style={{ height: '40px', width: 'auto' }} />
          </NavLink>

          {/* Masaüstü navigasyon linkleri */}
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.label} className={l.subLinks ? 'has-dropdown' : ''}>
                {l.to !== '#' ? (
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  >
                    {l.label} {l.subLinks && <span className="dropdown-arrow"></span>}
                  </NavLink>
                ) : (
                  <div className="nav-link nav-link-text">
                    {l.label} <span className="dropdown-arrow"></span>
                  </div>
                )}

                {/* Dropdown Menüsü */}
                {l.subLinks && (
                  <ul className="dropdown-menu">
                    {l.subLinks.map(sub => (
                      <li key={sub.label}>
                        <NavLink to={sub.to} className="dropdown-item">
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger butonu */}
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={toggle}
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── MOBİL MENÜ ───────────────────────────────────────────────────── */}
      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <ul>
          {links.map(l => (
            <li key={l.label} className={l.subLinks ? 'mobile-has-dropdown' : ''}>
              {l.subLinks ? (
                <>
                  <div className="mobile-dropdown-header" onClick={() => toggleSub(l.label)}>
                    {l.to !== '#' ? (
                      <NavLink
                        to={l.to}
                        end={l.to === '/'}
                        className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
                        onClick={(e) => {
                          // Eğer alt menüsü varsa, tıklandığında sadece alt menüyü açsın istiyorsak:
                          // e.preventDefault(); toggleSub(l.label);
                          // Ama ana sayfaya da gitmesini istiyorsak bırakırız.
                          // Kullanıcı deneyimi için mobilde ok simgesine basınca açılsın diye yapıyı bölebiliriz.
                        }}
                      >
                        {l.label}
                      </NavLink>
                    ) : (
                      <div className="mobile-link">{l.label}</div>
                    )}
                    <button className={`mobile-dropdown-toggle ${openSub === l.label ? 'open' : ''}`}>
                      ▼
                    </button>
                  </div>
                  {/* Akordeon içeriği */}
                  <div className={`mobile-dropdown-content ${openSub === l.label ? 'open' : ''}`}>
                    {l.subLinks.map(sub => (
                      <NavLink key={sub.label} to={sub.to} className="mobile-dropdown-item" onClick={close}>
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
                  onClick={close}
                >
                  {l.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {open && <div className="menu-overlay" onClick={close} />}
    </>
  )
}