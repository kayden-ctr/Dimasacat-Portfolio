import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Academics from './components/Academics'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'transparent' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academics />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

function BackToTop() {
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const base = 'fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300'
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{ backgroundColor: '#BDBBB2', color: '#141413' }}
      className={visible ? base : base + ' opacity-0 translate-y-4 pointer-events-none'}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#CFCEC6'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#BDBBB2'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
