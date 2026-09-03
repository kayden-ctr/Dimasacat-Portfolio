import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  const go = href => document.querySelector(href)?.scrollIntoView({ behavior:'smooth' })

  return (
    <footer style={{ backgroundColor:'#141413', borderTop:'1px solid #2e2e2c' }} className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button onClick={() => go('#home')} className="text-lg font-bold tracking-wide" style={{ color:'#C9C8BF' }}>
            Dimasacat
          </button>
          <p className="text-sm" style={{ color:'#AFACA1' }}>
            &copy; {year} Dimasacat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
