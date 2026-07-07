import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])
}