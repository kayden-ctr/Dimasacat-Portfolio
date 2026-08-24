import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Technological Institute of the Philippines - Manila',
    period: '2022 – Present',
    status: 'Undergraduate',
  },
  {
    degree: 'Senior High School – STEM Track',
    school: 'Philippine Christian University - Manila',
    period: '2010 – 2022',
    status: 'Graduated',
  },
]

const awards = [
  { title: 'With High Honors',           period: '2020 – 2022', desc: 'Maintained academic excellence each semester' },
  { title: 'AWS Cloud Club Captain',        period: '2025-2026',        desc: 'Led the AWS Cloud Club with dedication and enthusiasm' },
  { title: 'Open Society: Hackathon: 2nd Place', period: '2025',   desc: 'A small competition among its organization members' },
]

export default function Academics() {
  const ref = useScrollReveal()

  return (
    <section id="academics" className="section-padding bg-gray-900/50">
      <div ref={ref} className="max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
        <div className="text-center mb-16">
          <p className="section-subtitle">My education</p>
          <h2 className="section-title">Academic Performance</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        {/* Education timeline */}
        <div className="relative mb-16">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-1/2" />

          <div className="space-y-10">
            {education.map((edu, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-gray-950 z-10 top-6" />

                {/* Spacer for opposite side on desktop */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className="flex-1 ml-12 md:ml-0">
                  <div className="card hover:shadow-lg hover:shadow-primary-900/20">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl">{edu.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                            edu.status === 'In Progress'
                              ? 'bg-yellow-500/10 text-yellow-400'
                              : 'bg-green-500/10 text-green-400'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-primary-400 font-semibold text-sm">{edu.school}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-gray-500 text-sm">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 text-center">Academic Achievements</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {awards.map(({ title, period, desc }) => (
              <div key={title} className="card flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <p className="text-primary-400 text-xs mb-1">{period}</p>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
