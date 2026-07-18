import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Hakkimizda from './pages/Hakkimizda'
import Araclarimiz from './pages/Araclarimiz'
import Arac2025 from './pages/Arac2025'
import Arac2026 from './pages/Arac2026'
import FormulaStudent from './pages/FormulaStudent'; 
import Surdurulebilirlik from './pages/Surdurulebilirlik'
import Sponsorlar from './pages/Sponsorlar'
import Oyun from './pages/Oyun'
import Iletisim from './pages/Iletisim'
import Galeri from './pages/Galeri'
import useScrollReveal from './hooks/useScrollReveal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  useScrollReveal()
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/araclarimiz" element={<Araclarimiz />} />
          <Route path="/2025arac" element={<Arac2025 />} />
          <Route path="/2026arac" element={<Arac2026 />} />
          <Route path="/formulastudent" element={<FormulaStudent />} />
          <Route path="/surdurulebilirlik" element={<Surdurulebilirlik />} />
          <Route path="/sponsorlar" element={<Sponsorlar />} />
          <Route path="/oyun" element={<Oyun />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/galeri" element={<Galeri />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}