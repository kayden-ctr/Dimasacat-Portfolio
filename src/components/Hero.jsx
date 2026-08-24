import React, { useEffect, useState } from 'react'


export default function Hero() {
  const [typing, setTyping] = useState(true)


  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-800/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <p className="section-subtitle mb-5">Welcome to my portfolio</p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight mt-8">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent mt-6">
          Jeremy Dimasacat
          </span>
        </h1>

  
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed mt-10">
          A passionate developer dedicated to building beautiful, functional, and accessible web experiences.
          Let's create something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll('#projects')}
            className="px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-primary-900/50 hover:shadow-primary-700/50 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-3.5 border border-gray-700 hover:border-primary-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center animate-bounce">
          <button onClick={() => handleScroll('#about')} aria-label="Scroll down" className="text-gray-600 hover:text-primary-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
