import { motion } from 'motion/react'
import SectionTitle from './SectionTitle'

const certs = [
  { name: 'Oracle Java Foundation', issuer: 'Oracle', date: 'Aug 2025', color: '#f6c37c' },
  { name: 'Generative AI', issuer: 'Microsoft', date: 'Mar 2026', color: '#8dc5ff' },
  { name: 'SQL Essential Training', issuer: 'LinkedIn Learning', date: 'Dec 2025', color: '#9cb0ff' },
]

const courses = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management',
  'Web Development',
  'Machine Learning',
  'Software Engineering',
]

function CapIcon({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 9.5L12 5l9 4.5-9 4.5-9-4.5zm4 3.6V16c0 1.4 2.5 2.6 5 2.6s5-1.2 5-2.6v-2.9"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function ShieldIcon({ color }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 4.6-2.7 7.8-7 10-4.3-2.2-7-5.4-7-10V6l7-3z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M9.5 12.5l2 2 3-3.4" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-28 grid-bg relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle num="04" title="education" />

        <div className="relative pl-7">
          <div
            className="absolute left-1.5 top-3 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, rgba(111,245,255,0.65), rgba(69,143,255,0.22), transparent)' }}
          />

          <motion.article
            className="surface rounded-3xl p-6 md:p-8 mb-7 relative"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <span
              className="absolute -left-[34px] top-7 w-4 h-4 rounded-full"
              style={{ background: '#75f9ff', boxShadow: '0 0 0 4px rgba(117,249,255,0.18)' }}
            />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <div className="kicker mb-3">
                  <CapIcon color="#82f8ff" />
                  Degree Track
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-100" style={{ fontFamily: "'Archivo'" }}>
                  B.Tech in Information Technology
                </h3>
                <p className="text-slate-300 mt-1">Dronacharya Group of Institution, Greater Noida</p>
              </div>

              <span
                className="mono text-[11px] px-3.5 py-2 rounded-xl"
                style={{ border: '1px solid rgba(128,180,255,0.3)', background: 'rgba(128,180,255,0.14)', color: '#cde7ff' }}
              >
                2023 - Present
              </span>
            </div>

            <div className="mono text-[11px] uppercase tracking-[0.12em] text-slate-400 mb-3">Relevant Coursework</div>
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => (
                <span
                  key={course}
                  className="mono text-[10px] px-3 py-1.5 rounded-full"
                  style={{ border: '1px solid rgba(128,180,255,0.2)', background: 'rgba(255,255,255,0.01)', color: '#c2d6ed' }}
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.article>

          <motion.article
            className="surface rounded-3xl p-6 md:p-8 relative"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
          >
            <span
              className="absolute -left-[34px] top-7 w-4 h-4 rounded-full"
              style={{ background: '#78a7ff', boxShadow: '0 0 0 4px rgba(120,167,255,0.2)' }}
            />

            <div className="kicker mb-5">
              <ShieldIcon color="#a2beff" />
              Certifications
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {certs.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-2xl p-4"
                  style={{ border: `1px solid ${cert.color}45`, background: `${cert.color}12` }}
                >
                  <h4 className="text-sm font-semibold text-slate-100 leading-6">{cert.name}</h4>
                  <p className="text-slate-300 text-xs mt-1">{cert.issuer}</p>
                  <p className="mono text-[11px] mt-3" style={{ color: cert.color }}>
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
