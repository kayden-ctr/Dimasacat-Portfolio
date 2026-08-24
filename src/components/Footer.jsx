import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button onClick={() => handleScroll('#home')} className="text-xl font-bold text-white">
            <span className="text-primary-400"></span>
            Dimasacat
            <span className="text-primary-400"></span>
          </button>

          <p className="text-gray-600 text-sm">
            &copy; {year} Dimasacat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
