import React, { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Academics',      href: '#academics' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const ids = navLinks.map(l => l.href.replace('#',''))
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 100) { setActive(ids[i]); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = href => { setMenuOpen(false); document.querySelector(href)?.scrollIntoView({ behavior:'smooth' }) }

  return (
    <nav style={scrolled ? { backgroundColor:'#141413f2', borderBottom:'1px solid #2e2e2c' } : {}}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <button onClick={() => go('#home')} className="text-lg font-bold tracking-wide" style={{ color:'#C9C8BF' }}>
          Dimasacat
        </button>
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#','')
            const isActive = active === id
            return (
              <li key={label}>
                <button onClick={() => go(href)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{ color: isActive ? '#C9C8BF' : '#AFACA1', backgroundColor: isActive ? '#2e2e2c' : 'transparent' }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#C9C8BF' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#AFACA1' }}>
                  {label}
                </button>
              </li>
            )
          })}
        </ul>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg" aria-label="Toggle menu">
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor:'#C9C8BF' }} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor:'#C9C8BF' }} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor:'#C9C8BF' }} />
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ backgroundColor:'#141413f5', borderBottom:'1px solid #2e2e2c' }}>
        <ul className="flex flex-col px-6 pb-4 gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#','')
            const isActive = active === id
            return (
              <li key={label}>
                <button onClick={() => go(href)} className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{ color: isActive ? '#C9C8BF' : '#AFACA1', backgroundColor: isActive ? '#2e2e2c' : 'transparent' }}>
                  {label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
