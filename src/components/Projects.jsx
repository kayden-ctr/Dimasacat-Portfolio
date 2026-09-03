import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const typeStyles = {
  Academic:  'text-[#AFACA1] border border-[#2e2e2c]',
  Freelance: 'text-[#BDBBB2] border border-[#AFACA1]/30',
  Personal:  'text-[#AFACA1] border border-[#2e2e2c]',
}

const projects = [
  {
    title: 'JM Figurines',
    description: 'An informative e-commerce website for an anime figure shop, featuring product collections, preorder listings, and a clean catalog browsing experience.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    category: 'Frontend',
    type: 'Personal',
    image: '/Figurines.png',
    featured: false,
  },
  {
    title: 'E-Commerce Platform: Bakery',
    description: 'A responsive bakery e-commerce website with product browsing, shopping cart functionality, and a modern user interface for online ordering.',
    tags: ['PHP', 'CSS', 'JavaScript'],
    category: 'Web App',
    type: 'Academic',
    image: '/Bakery.png',
    featured: false,
  },
  {
    title: 'Yakap Kalinga',
    description: 'A community donation and outreach platform designed to connect donors with charitable initiatives through an accessible and responsive web interface.',
    tags: ['React', 'Tailwind CSS', 'Firebase'],
    category: 'Web App',
    type: 'Academic',
    image: '/Yakap.png',
    featured: false,
  },
  {
    title: 'Study Optimizer',
    description: 'A collaborative study management platform with AI-powered PDF summarization, task organization, analytics, and shared study tools for students.',
    tags: ['Django', 'PostgreSQL', 'Cloudinary', 'Gemini AI'],
    category: 'Full Stack',
    type: 'Academic',
    image: '/optinizer.jpg',
    featured: false,
  },
  {
    title: 'Alapa-Up Website',
    description: 'A modern software solutions company website that showcases services, company information, and responsive landing pages with smooth animations.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    category: 'Frontend',
    type: 'Freelance',
    image: '/Alapa-up.jpg',
    featured: false,
  },
  {
    title: 'Laravel Portfolio',
    description: 'A responsive developer portfolio showcasing my projects, technical skills, certifications, and leadership experience with a modern UI.',
    tags: ['Laravel', 'Tailwind CSS', 'Vite'],
    category: 'Website',
    type: 'Academic',
    image: '/Laravel.jpg',
    featured: false,
  },
]

export default function Projects() {
  const ref = useScrollReveal()
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', ...new Set(projects.map(p => p.category))]

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding">
      <div ref={ref} className="max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
        <div className="text-center mb-16">
          <p className="section-subtitle">What I have built</p>
          <h2 className="section-title">Projects</h2>
          <div className="w-16 h-1 bg-[#BDBBB2] mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-[#BDBBB2] text-[#141413] shadow-md'
                  : 'bg-[#1f1f1e] text-[#AFACA1] hover:text-[#C9C8BF] hover:bg-[#2e2e2c]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <div
              key={idx}
              className="card group flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="h-40 rounded-xl mb-4 relative overflow-hidden bg-[#1f1f1e]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-[#AFACA1] text-4xl font-bold select-none">
                    {project.title.charAt(0)}
                  </span>
                )}
                <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                  {project.featured && (
                    <span className="text-xs bg-black/40 backdrop-blur-sm text-[#C9C8BF] px-2 py-0.5 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold backdrop-blur-sm bg-black/40 ${typeStyles[project.type]}`}>
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-[#C9C8BF] font-bold mb-2 group-hover:text-[#C9C8BF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#AFACA1] text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(t => (
                    <span key={t} className="text-xs bg-[#1f1f1e] text-[#C9C8BF] px-2 py-0.5 rounded-md border border-[#2e2e2c]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#2e2e2c]">
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/kayden-ctr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#2e2e2c] hover:border-[#AFACA1] text-[#C9C8BF] hover:text-[#C9C8BF] rounded-xl transition-all duration-200 font-medium"
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
