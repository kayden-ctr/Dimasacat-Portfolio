import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'June 2025',
    credentialId: '80d555f0f6684136b846806d7345d6eb',
    category: 'Cloud',
    skills: ['AWS', 'Cloud Computing', 'IAM', 'EC2'],
    color: 'from-[#AFACA1] to-[#BDBBB2]',
    verified: true,
  },
]

export default function Certifications() {
  const ref = useScrollReveal()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? certifications
    : certifications.filter(c => c.category === activeCategory)

  return (
    <section id="certifications" className="section-padding">
      <div ref={ref} className="max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
        <div className="text-center mb-16">
          <p className="section-subtitle">What I've earned</p>
          <h2 className="section-title">Certifications</h2>
          <div className="w-16 h-1 bg-[#BDBBB2] mx-auto rounded-full" />
        </div>

       

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, idx) => (
            <div
              key={idx}
              className="card group hover:shadow-xl hover:shadow-black/60 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top color bar */}
              <div className={`h-1.5 rounded-full bg-gradient-to-r ${cert.color} mb-5 -mx-6 -mt-6 rounded-t-2xl`} />

              <div className="flex items-start justify-between mb-3">
                {cert.verified && (
                  <span className="flex items-center gap-1 text-xs text-[#C9C8BF] bg-[#2e2e2c] px-2 py-1 rounded-full font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                )}
              </div>

              <h3 className="text-[#C9C8BF] font-bold text-sm leading-snug mb-1 group-hover:text-[#C9C8BF] transition-colors">
                {cert.title}
              </h3>
              <p className="text-[#C9C8BF] text-xs font-semibold mb-1">{cert.issuer}</p>
              <p className="text-[#AFACA1] text-xs mb-3">Issued: {cert.date}</p>
              <p className="text-[#AFACA1] text-xs mb-4 font-mono">ID: {cert.credentialId}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map(s => (
                  <span key={s} className="text-xs bg-[#1f1f1e] text-[#C9C8BF] px-2 py-0.5 rounded-md border border-[#2e2e2c]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

