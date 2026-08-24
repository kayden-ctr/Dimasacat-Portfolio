import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  { category: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Vue', 'Vite'] },
  { category: 'Backend',  skills: ['PHP', 'Laravel', 'Python', 'Java'] },
  { category: 'Cloud',    skills: ['AWS Cloud Fundamentals', 'EC2', 'S3', 'IAM'] },
  { category: 'Database', skills: ['SQL', 'MySQL', 'PostgreSQL'] },
  { category: 'Tools',    skills: ['Git', 'GitHub', 'VS Code', 'JIRA', 'Discord'] },
  { category: 'Other',    skills: ['Technical Documentation', 'Testing', 'Technical Support'] },
]

const stats = [
  { value: '3+',   label: 'Years Learning' },
  { value: '5+',   label: 'Projects Built' },
  { value: '1',    label: 'Certifications' },
  { value: '100%', label: 'Dedication' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section-padding bg-gray-950">
      <div ref={ref} className="max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-700">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        {/* Top: two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-8">

          {/* ── Left: photo + bio ── */}
          <div>
            <img
              src="/Dimasacat_ID.jpg"
              alt="Dimasacat"
              className="w-40 h-45 rounded-2xl object-cover mx-auto mb-8 shadow-2xl shadow-primary-900/50"
            />

            <h3 className="text-2xl font-bold text-white mb-4">
              I'm an{' '}
              <span className="text-primary-400">Information Technology Student</span>
              {' '}&amp; Developer
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4 text-justify">
              Hello! I'm Jeremy Dimasacat, a passionate and driven information technology student with a strong
              foundation in software development and a love for turning complex problems into
              elegant, user-friendly solutions.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 text-justify">
              When I'm not coding, I enjoy exploring the latest trends in technology, contributing
              to open-source projects, and continuously sharpening my skills through online courses
              and personal projects.
            </p>

            <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-800">
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-1">Location</p>
                <p className="text-white font-semibold">Philippines</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-1">Availability</p>
                <p className="text-green-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: skills ── */}
          <div className="card h-full space-y-5">
            <h4 className="text-base font-bold text-white pb-3 border-b border-gray-800">
              Technical Skills
            </h4>
            {skillGroups.map(({ category, skills }) => (
              <div key={category}>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="text-sm text-gray-300 border border-gray-700 rounded-lg px-3 py-1 hover:border-primary-500 hover:text-primary-300 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: stats spanning full width */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="card text-center py-5">
              <p className="text-3xl font-extrabold text-primary-400 mb-1">{value}</p>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
