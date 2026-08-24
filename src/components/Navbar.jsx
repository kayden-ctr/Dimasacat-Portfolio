import React, { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Academics',    href: '#academics' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-950/90 backdrop-blur-md shadow-lg shadow-black/40 border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => handleNav('#home')} className="text-xl font-bold text-white">
          <span className="text-primary-400"></span>
          Dimasacat
          <span className="text-primary-400"></span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '')
            return (
              <li key={label}>
                <button
                  onClick={() => handleNav(href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === id
                      ? 'text-primary-400 bg-primary-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {label}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col px-6 pb-4 gap-1 bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '')
            return (
              <li key={label}>
                <button
                  onClick={() => handleNav(href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === id
                      ? 'text-primary-400 bg-primary-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
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
