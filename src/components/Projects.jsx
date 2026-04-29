import { motion } from 'motion/react'
import SectionTitle from './SectionTitle'

const projects = [
  {
    title: 'FocusForge',
    subtitle: 'Gamified Productivity Platform',
    desc: 'Goal-tracking product where users create missions, monitor streaks, and compete on dynamic leaderboards.',
    tags: ['Spring Boot', 'React', 'PostgreSQL', 'JWT'],
    color: '#74f8ff',
    icon: 'controller',
    link: '#',
    featured: true,
    points: [
      'Built 10+ APIs for goal lifecycle and leaderboard aggregation',
      'Designed category and global ranking flows with secure auth',
      'Delivered a responsive dashboard for live productivity insights',
    ],
  },
  {
    title: 'Synthetic Media Detector',
    subtitle: 'Deepfake Detection Platform',
    desc: 'Microservices-based detection pipeline for image, audio, and video analysis with confidence scoring.',
    tags: ['Spring Boot', 'ML', 'Docker'],
    color: '#8db4ff',
    icon: 'shield',
    link: '#',
    featured: false,
  },
  {
    title: 'Snap Note',
    subtitle: 'Visual Note Intelligence App',
    desc: 'Cross-platform note app that extracts text from visuals and syncs searchable content across devices.',
    tags: ['Flutter', 'OCR', 'Supabase'],
    color: '#9eb0ff',
    icon: 'notes',
    link: '#',
    featured: false,
  },
  {
    title: 'Local Service Hub',
    subtitle: 'Business Services Platform',
    desc: 'Service discovery and booking web app with pricing calculators and conversion-focused UX.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#9dffc2',
    icon: 'grid',
    link: '#',
    featured: false,
  },
]

const CATEGORY_BADGES = ['Backend-heavy', 'Full-stack', 'AI-ready', 'Performance-first']

function ProjectIcon({ id, color }) {
  const common = { stroke: color, strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }

  if (id === 'controller') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="8" width="18" height="8" rx="4" {...common} />
        <path d="M8 12h3M9.5 10.5v3" {...common} />
        <circle cx="16.5" cy="11" r="0.8" fill={color} />
        <circle cx="15" cy="13" r="0.8" fill={color} />
      </svg>
    )
  }
  if (id === 'shield') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.6-2.7 7.8-7 10-4.3-2.2-7-5.4-7-10V6z" {...common} />
        <path d="M9.5 12.5l2 2 3.5-4" {...common} />
      </svg>
    )
  }
  if (id === 'notes') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2.5" {...common} />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4.5" {...common} />
      </svg>
    )
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="1.5" {...common} />
      <rect x="13" y="4" width="7" height="7" rx="1.5" {...common} />
      <rect x="4" y="13" width="7" height="7" rx="1.5" {...common} />
      <rect x="13" y="13" width="7" height="7" rx="1.5" {...common} />
    </svg>
  )
}

function FeaturedCard({ project }) {
  return (
    <motion.article
      className="surface project-card rounded-3xl p-6 md:p-8 mb-6"
      style={{ border: `1px solid ${project.color}30` }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
        <div className="lg:col-span-3">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ border: `1px solid ${project.color}45`, background: `${project.color}15` }}
            >
              <ProjectIcon id={project.icon} color={project.color} />
            </div>
            <span
              className="mono text-[10px] px-2.5 py-1 rounded-full tracking-[0.12em]"
              style={{ border: `1px solid ${project.color}45`, background: `${project.color}12`, color: project.color }}
            >
              FEATURED
            </span>
          </div>

          <h3 className="text-2xl font-semibold mb-1" style={{ color: project.color, fontFamily: "'Archivo'" }}>
            {project.title}
          </h3>
          <p className="mono text-[11px] text-slate-400 tracking-[0.12em] uppercase mb-4">{project.subtitle}</p>
          <p className="text-slate-300 leading-7 text-[15px] sm:text-base mb-6">{project.desc}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="mono text-[10.5px] px-3 py-1.5 rounded-full"
                style={{ border: `1px solid ${project.color}40`, background: `${project.color}10`, color: project.color }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-between">
          <div className="space-y-3">
            {project.points.map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                <span className="text-sm leading-6 text-slate-300">{point}</span>
              </div>
            ))}
          </div>

          <a href={project.link} className="mono text-xs mt-6 inline-flex items-center gap-2 hoverable" style={{ color: project.color }}>
            view_project()
            <span>↗</span>
          </a>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectCard({ project, idx }) {
  return (
    <motion.article
      className="surface project-card rounded-2xl p-5 md:p-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: idx * 0.07, ease: 'easeOut' }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ border: `1px solid ${project.color}45`, background: `${project.color}14` }}
        >
          <ProjectIcon id={project.icon} color={project.color} />
        </div>
        <a href={project.link} className="mono text-[11px] text-slate-300 hoverable">
          ↗
        </a>
      </div>

      <h3 className="text-lg font-semibold mb-1.5" style={{ color: project.color, fontFamily: "'Archivo'" }}>
        {project.title}
      </h3>
      <p className="mono text-[10px] uppercase tracking-[0.12em] text-slate-400 mb-3">{project.subtitle}</p>
      <p className="text-sm text-slate-300 leading-6 flex-1">{project.desc}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="mono text-[10px] px-2.5 py-1 rounded-full"
            style={{ border: `1px solid ${project.color}45`, background: `${project.color}10`, color: project.color }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const featured = projects.filter((project) => project.featured)
  const regular = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-24 md:py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(128,180,255,0.25), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle num="03" title="projects" />

        <div className="flex flex-wrap gap-2.5 mb-5 sm:mb-6">
          {CATEGORY_BADGES.map((badge) => (
            <span
              key={badge}
              className="mono text-[10px] px-3 py-1.5 rounded-full"
              style={{ border: '1px solid rgba(128,180,255,0.24)', background: 'rgba(255,255,255,0.02)', color: '#c2d8ed' }}
            >
              {badge}
            </span>
          ))}
        </div>

        {featured.map((project) => (
          <FeaturedCard key={project.title} project={project} />
        ))}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {regular.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
