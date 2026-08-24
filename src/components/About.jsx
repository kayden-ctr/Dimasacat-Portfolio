import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skills = [
  { name: 'React.js',      level: 90 },
  { name: 'JavaScript',    level: 88 },
  { name: 'Tailwind CSS',  level: 92 },
  { name: 'Node.js',       level: 78 },
  { name: 'Python',        level: 75 },
  { name: 'Java',       level: 85 },
  { name: 'SQL / MySQL',   level: 80 },
]

const stats = [
  { value: '3+', label: 'Years Learning' },
  { value: '5+', label: 'Projects Built' },
  { value: '1', label: 'Certifications' },
  { value: '100%', label: 'Dedication' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section-padding bg-gray-950">
      <div ref={ref} className="max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
        <div className="text-center mb-16">
          <p className="section-subtitle">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Bio */}
          <div>
            {/* Avatar placeholder */}
            <img
            src="/Dimasacat_ID.jpg"
            alt="Dimasacat"
            className="w-40 h-50 rounded-2xl object-cover mx-auto mb-8 shadow-2xl shadow-primary-900/50"

            />

            <h3 className="text-2xl font-bold text-white mb-4">
              I'm a <span className="text-primary-400 text-justify">Information Technology Student</span> & Developer
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4 text-justify">
              Hello! I'm Dimasacat, a passionate and driven information technology student with a strong
              foundation in software development and a love for turning complex problems into
              elegant, user-friendly solutions.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-justify">
              When I'm not coding, I enjoy exploring the latest trends in technology, contributing
              to open-source projects, and continuously sharpening my skills through online courses
              and personal projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <div>
                <span className="text-gray-500 text-sm">Location</span>
                <p className="text-white font-medium">Philippines</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Availability</span>
                <p className="text-green-400 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Right – Skills & Stats */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Technical Skills</h4>
            <div className="space-y-4 mb-10">
              {skills.map(({ name, level }) => (
                <div key={name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-300 font-medium">{name}</span>
                    <span className="text-primary-400 font-semibold">{level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-600 to-violet-500 rounded-full"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="card text-center">
                  <p className="text-3xl font-extrabold text-primary-400 mb-1">{value}</p>
                  <p className="text-gray-400 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
