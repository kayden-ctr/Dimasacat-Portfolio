import React, { useEffect, useState } from 'react'

const roles = ['Junior Developer','Web Developer', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]; let t
    if (typing) {
      t = displayed.length < current.length
        ? setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        : setTimeout(() => setTyping(false), 2000)
    } else {
      if (displayed.length > 0) t = setTimeout(() => setDisplayed(displayed.slice(0,-1)), 40)
      else { setRoleIndex((roleIndex+1)%roles.length); setTyping(true) }
    }
    return () => clearTimeout(t)
  }, [displayed, typing, roleIndex])

  const go = href => document.querySelector(href)?.scrollIntoView({ behavior:'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'transparent' }}>

      <div className="text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <p className="section-subtitle mb-6">Welcome to my portfolio</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight" style={{ color:'#C9C8BF' }}>
          {"Hi, I'm "}
          <span style={{ color:'#BDBBB2' }}>Dimasacat</span>
        </h1>
        <div className="h-10 mb-8">
          <p className="text-xl md:text-2xl font-medium">
            <span style={{ color:'#C9C8BF' }}>{displayed}</span>
            <span className="animate-pulse" style={{ color:'#BDBBB2' }}>|</span>
          </p>
        </div>
        <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color:'#AFACA1' }}>
          A passionate developer dedicated to building beautiful, functional, and accessible web experiences.
          {" Let's create something amazing together."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => go('#projects')}
            className="px-8 py-3.5 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor:'#BDBBB2', color:'#141413' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor='#CFCEC6'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor='#BDBBB2'}>
            View My Work
          </button>
          <button onClick={() => go('#contact')}
            className="px-8 py-3.5 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ border:'1px solid #2e2e2c', color:'#AFACA1' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='#AFACA1'; e.currentTarget.style.color='#C9C8BF' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='#2e2e2c'; e.currentTarget.style.color='#AFACA1' }}>
            Get In Touch
          </button>
        </div>
        <div className="mt-20 flex justify-center animate-bounce">
          <button onClick={() => go('#about')} aria-label="Scroll down" style={{ color:'#2e2e2c' }}
            onMouseEnter={e => e.currentTarget.style.color='#AFACA1'}
            onMouseLeave={e => e.currentTarget.style.color='#2e2e2c'}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
