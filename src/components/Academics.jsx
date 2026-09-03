import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Technological Institute of the Philippines - Manila',
    period: '2022 – Present',
    status: 'In Progress',
    description: 'Focusing on software engineering, algorithms, data structures, and web development. Active member of the Computer Science Society.',
    subjects: ['Data Structures & Algorithms', 'Software Engineering', 'Database Management', 'Operating Systems', 'Web Development'],
    icon: '🎓',
  },
  {
    degree: 'Senior High School – STEM Track',
    school: 'Philippine Christian University',
    period: '2020 – 2022',
    status: 'Graduated',
    description: 'Specialized in Science, Technology, Engineering, and Mathematics. Graduated with honors.',
    subjects: ['Pre-Calculus', 'Statistics & Probability', 'General Physics', 'Earth Science'],
    icon: '🏫',
  },
]

const awards = [
  { title: "Dean's Lister",                period: '2022 – Present', desc: 'Maintained academic excellence each semester' },
  { title: 'Best Thesis Award',            period: '2024',           desc: 'Awarded for outstanding research project' },
  { title: 'Coding Competition 1st Place', period: '2023',           desc: 'University-wide programming contest champion' },
]

export default function Academics() {
  const ref = useScrollReveal()

  return (
    <section id="academics" className="section-padding">
      <div ref={ref} className="max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
        <div className="text-center mb-16">
          <p className="section-subtitle">My education</p>
          <h2 className="section-title">Academic Performance</h2>
          <div className="w-16 h-1 bg-[#BDBBB2] mx-auto rounded-full" />
        </div>

        {/* Education timeline */}
        <div className="relative mb-16">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#1f1f1e] md:-translate-x-1/2" />

          <div className="space-y-10">
            {education.map((edu, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#BDBBB2] border-4 border-[#141413] z-10 top-6" />
                <div className="hidden md:block flex-1" />
                <div className="flex-1 ml-12 md:ml-0">
                  <div className="card hover:shadow-lg hover:shadow-black/60">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl">{edu.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                          <h3 className="text-lg font-bold text-[#C9C8BF]">{edu.degree}</h3>
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                            edu.status === 'In Progress'
                              ? 'bg-[#2e2e2c] text-[#C9C8BF]'
                              : 'bg-[#2e2e2c] text-[#C9C8BF]'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-[#C9C8BF] font-semibold text-sm">{edu.school}</p>
                        <span className="text-[#AFACA1] text-sm">{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-[#AFACA1] text-sm mb-4 leading-relaxed">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map(s => (
                        <span key={s} className="text-xs bg-[#1f1f1e] text-[#C9C8BF] px-2.5 py-1 rounded-lg border border-[#2e2e2c]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-xl font-bold text-[#C9C8BF] mb-6 text-center">Academic Achievements</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {awards.map(({ title, period, desc }) => (
              <div key={title} className="card flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2e2e2c] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C9C8BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#C9C8BF] font-semibold text-sm">{title}</p>
                  <p className="text-[#C9C8BF] text-xs mb-1">{period}</p>
                  <p className="text-[#AFACA1] text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
