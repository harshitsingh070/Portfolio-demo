import { motion } from 'motion/react'
import SectionTitle from './SectionTitle'

const infoItems = [
  { key: 'Name', val: 'Harshit Singh' },
  { key: 'Location', val: 'Greater Noida, India' },
  { key: 'Email', val: 'harshitsingh2807@gmail.com' },
  { key: 'Status', val: 'Open to Internship' },
]

const specialties = [
  { id: 'backend', label: 'Backend Engineering', val: 'Spring Boot, Java, REST APIs', color: '#73f7ff' },
  { id: 'frontend', label: 'Frontend Systems', val: 'React, responsive UI architecture', color: '#7bb1ff' },
  { id: 'devops', label: 'Deployment & DevOps', val: 'Dockerized services and CI workflows', color: '#9ab4ff' },
  { id: 'ai', label: 'Applied AI/ML', val: 'Detection systems, OCR pipelines', color: '#90ffb3' },
]

const principles = ['Scalable architecture', 'Readable code', 'Product thinking', 'Fast iteration']

function SpecialtyIcon({ id, color }) {
  const common = { stroke: color, strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }

  if (id === 'backend') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h16" {...common} />
        <circle cx="8" cy="7" r="1.2" fill={color} />
      </svg>
    )
  }
  if (id === 'frontend') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4L2 12l5 8M17 4l5 8-5 8M9.5 19.5L14.5 4.5" {...common} />
      </svg>
    )
  }
  if (id === 'devops') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v4M12 17v4M4.9 7.6l2.8 2.3M16.3 14.1l2.8 2.3M3 12h4M17 12h4M4.9 16.4l2.8-2.3M16.3 9.9l2.8-2.3" {...common} />
        <circle cx="12" cy="12" r="3.2" {...common} />
      </svg>
    )
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l2.5 5.2 5.5.8-4 3.9 1 5.5-5-2.6-5 2.6 1-5.5-4-3.9 5.5-.8z" {...common} />
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(128,180,255,0.25), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle num="01" title="about_me" />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-14 items-start">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.48, ease: 'easeOut' }}
          >
            <div className="kicker mb-5 sm:mb-6">// profile summary</div>

            <p className="text-slate-200 mb-4 leading-7 sm:leading-8 text-[15px] sm:text-base">
              I am a full-stack software engineer focused on shipping scalable products with strong system design,
              clean architecture, and a practical product mindset.
            </p>
            <p className="text-slate-300 mb-4 leading-7 sm:leading-8 text-[15px] sm:text-base">
              I currently build backend services in Java and Spring Boot, modern frontend systems with React,
              and intelligent workflows that combine software engineering with applied machine learning.
            </p>
            <p className="text-slate-300 mb-6 sm:mb-7 leading-7 sm:leading-8 text-[15px] sm:text-base">
              My goal is simple: deliver software that is reliable in production, readable for teams, and valuable
              for users.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8 sm:mb-9">
              {principles.map((item) => (
                <span
                  key={item}
                  className="mono text-[10px] sm:text-[10.5px] px-3 py-1.5 rounded-full"
                  style={{ border: '1px solid rgba(128,180,255,0.22)', background: 'rgba(255,255,255,0.02)', color: '#bdd5ed' }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {infoItems.map(({ key, val }) => (
                <div key={key} className="surface rounded-xl p-4 hoverable">
                  <div className="mono text-[11px] uppercase tracking-[0.12em] text-sky-200/70 mb-1.5">{key}</div>
                  <div className="text-slate-200 text-sm md:text-[15px] break-all">{val}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 grid gap-3.5"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.48, delay: 0.08, ease: 'easeOut' }}
          >
            {specialties.map(({ id, label, val, color }) => (
              <div
                key={label}
                className="surface rounded-2xl p-5 hoverable"
                style={{ border: `1px solid ${color}2a` }}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ border: `1px solid ${color}40`, background: `${color}12` }}
                  >
                    <SpecialtyIcon id={id} color={color} />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-[15px] font-semibold mb-1" style={{ color }}>
                      {label}
                    </h3>
                    <p className="text-slate-300 text-sm leading-6">{val}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
