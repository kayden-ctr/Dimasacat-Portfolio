import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const typeStyles = {
  Academic:  'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  Freelance: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  Personal:  'bg-violet-500/10 text-violet-400 border border-violet-500/20',
}

const projects = [
  {
    title: 'JM Figurines',
    description:
      'An informative e-commerce website for an anime figure shop, featuring product collections, preorder listings, and a clean catalog browsing experience.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    category: 'Frontend',
    type: 'Personal',
    github: 'https://github.com/kayden-ctr',
    live: 'https://example.com',
    gradient: 'from-blue-600 to-cyan-500',
    featured: false,
  },
  {
    title: 'E-Commerce Platform: Bakery',
    description:
      'A responsive bakery e-commerce website with product browsing, shopping cart functionality, and a modern user interface for online ordering.',
    tags: ['PHP', 'CSS', 'JavaScript'],
    category: 'Web App',
    type: 'Academic',
    github: 'https://github.com/kayden-ctr',
    live: 'https://example.com',
    gradient: 'from-purple-600 to-pink-500',
    featured: false,
  },
  {
    title: 'Yakap Kalinga',
    description:
      'A community donation and outreach platform designed to connect donors with charitable initiatives through an accessible and responsive web interface.',
    tags: ['React', 'Tailwind CSS', 'Firebase'],
    category: 'Web App',
    type: 'Academic',
    github: 'https://github.com/kayden-ctr',
    live: null,
    gradient: 'from-green-600 to-emerald-500',
    featured: false,
  },
  {
    title: 'Study Optimizer',
    description:
      'A collaborative study management platform with AI-powered PDF summarization, task organization, analytics, and shared study tools for students.',
    tags: ['Django', 'PostgreSQL', 'Cloudinary', 'Gemini AI'],
    category: 'Full Stack',
    type: 'Academic',
    github: 'https://github.com/kayden-ctr',
    live: null,
    gradient: 'from-orange-500 to-yellow-500',
    featured: false,
  },
  {
    title: 'Alapa-Up Website',
    description:
      'A modern software solutions company website that showcases services, company information, and responsive landing pages with smooth animations.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    category: 'Frontend',
    type: 'Freelance',
    github: 'https://github.com/kayden-ctr',
    live: null,
    gradient: 'from-red-600 to-rose-500',
    featured: false,
  },
  {
    title: 'Laravel Portfolio',
    description:
      'A responsive developer portfolio showcasing my projects, technical skills, certifications, and leadership experience with a modern UI.',
    tags: ['Laravel', 'Tailwind CSS', 'Vite'],
    category: 'Website',
    type: 'Academic',
    github: 'https://github.com/kayden-ctr',
    live: 'https://example.com',
    gradient: 'from-indigo-600 to-violet-500',
    featured: false,
  },
];

export default function Projects() {
  const ref = useScrollReveal()
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-gray-900/50">
      <div ref={ref} className="max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
        <div className="text-center mb-16">
          <p className="section-subtitle">What I've built</p>
          <h2 className="section-title">Projects</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

       

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <div
              key={idx}
              className={`card group flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-900/20 transition-all duration-300 ${
                project.featured ? 'ring-1 ring-primary-500/30' : ''
              }`}
            >
              {/* Thumbnail */}
              <div className={`h-36 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%), linear-gradient(-45deg, #ffffff 25%, transparent 25%)',
                    backgroundSize: '10px 10px',
                  }}
                />
                <span className="text-white text-4xl font-bold opacity-40 select-none">
                  {project.title.charAt(0)}
                </span>
                <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                  {project.featured && (
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold backdrop-blur-sm ${typeStyles[project.type]}`}>
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-bold mb-2 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(t => (
                    <span key={t} className="text-xs bg-primary-500/10 text-primary-300 px-2 py-0.5 rounded-md border border-primary-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/kayden-ctr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-primary-500 text-gray-300 hover:text-white rounded-xl transition-all duration-200 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
