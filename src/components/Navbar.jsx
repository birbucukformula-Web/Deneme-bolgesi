import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/images/new-team-icon.png'

const links = [
  { to: '/',                  label: 'ANASAYFA'         },
  { to: '/hakkimizda',        label: 'HAKKIMIZDA'       },
  { to: '/araclarimiz',       label: 'ARAÇLARIMIZ'      },
  { to: '/formulastudent',    label: 'FORMULA STUDENT'  },
  { to: '/surdurulebilirlik', label: 'SÜRDÜRÜLEBİLİRLİK' },
  { to: '/sponsorlar',        label: 'SPONSORLAR'       },
  { to: '/oyun',              label: 'OYUN'             },
  { to: '/iletisim',          label: 'İLETİŞİM'         },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }          = useLocation()

  /* Sayfa değişince menüyü kapat */
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  /* Menü açıkken body scroll'u kilitle */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  /* Scroll tespiti */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)
  const toggle = () => setOpen(o => !o)

  return (
    <>
      {/* ── NAVBAR BARI ── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">

          {/* Logo */}
          <NavLink to="/" className="nav-logo" onClick={close}>
            <img src={logo} alt="1.5 Adana Formula Student" style={{ height: '40px', width: 'auto' }} />
          </NavLink>

          {/* Masaüstü linkler */}
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.to}>
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

          {/* Hamburger — her zaman en üstte */}
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

      {/* ── MOBİL MENÜ — navbar'ın DIŞINDA, ayrı bir portal gibi ── */}
      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <ul>
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
                onClick={close}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay — menü açıkken arka plana tıklayınca kapar */}
      {open && <div className="menu-overlay" onClick={close} />}
    </>
  )
}