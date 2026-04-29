import { motion } from 'motion/react'
import SectionTitle from './SectionTitle'

const skills = [
  { name: 'Java', level: 90, cat: 'Language' },
  { name: 'Spring Boot', level: 88, cat: 'Framework' },
  { name: 'React.js', level: 84, cat: 'Framework' },
  { name: 'Python', level: 80, cat: 'Language' },
  { name: 'JavaScript', level: 82, cat: 'Language' },
  { name: 'Docker', level: 78, cat: 'DevOps' },
  { name: 'PostgreSQL', level: 82, cat: 'Database' },
  { name: 'Git', level: 86, cat: 'Tooling' },
  { name: 'REST APIs', level: 91, cat: 'Architecture' },
  { name: 'Microservices', level: 80, cat: 'Architecture' },
]

const CAT_COLORS = {
  Language: '#71f8ff',
  Framework: '#6fa6ff',
  DevOps: '#8f9cff',
  Database: '#8effb6',
  Tooling: '#ffd08a',
  Architecture: '#c6b8ff',
}

const TECH_STACK = [
  { name: 'Java', mark: 'JV' },
  { name: 'Spring', mark: 'SP' },
  { name: 'React', mark: 'RE' },
  { name: 'PostgreSQL', mark: 'PG' },
  { name: 'Docker', mark: 'DK' },
  { name: 'Git', mark: 'GT' },
  { name: 'Python', mark: 'PY' },
  { name: 'Flutter', mark: 'FL' },
  { name: 'Supabase', mark: 'SB' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-28 relative grid-bg">
      <div className="absolute inset-0 pointer-events-none mesh-bg opacity-80" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle num="02" title="tech_stack" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="kicker mb-7">// proficiency map</div>

            <div className="space-y-5">
              {skills.map(({ name, level, cat }, idx) => {
                const color = CAT_COLORS[cat]
                return (
                  <div key={name}>
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                        <span className="text-slate-200">{name}</span>
                        <span
                          className="mono text-[10px] px-2 py-0.5 rounded-full"
                          style={{ border: `1px solid ${color}40`, color, background: `${color}12` }}
                        >
                          {cat}
                        </span>
                      </div>
                      <span className="mono text-[11px]" style={{ color }}>
                        {level}%
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-900/80 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${color}, ${color}a5)`,
                          boxShadow: `0 0 12px ${color}66`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: idx * 0.05, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
          >
            <div className="kicker mb-7">// toolchain</div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TECH_STACK.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  className="surface rounded-xl p-4 text-center hoverable"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: idx * 0.04 }}
                >
                  <div
                    className="w-10 h-10 mx-auto rounded-lg mb-3 flex items-center justify-center mono text-xs font-semibold"
                    style={{ border: '1px solid rgba(128,180,255,0.32)', background: 'rgba(69,143,255,0.16)', color: '#d4ebff' }}
                  >
                    {tool.mark}
                  </div>
                  <div className="mono text-[10.5px] sm:text-[11px] text-slate-300 leading-4">{tool.name}</div>
                </motion.div>
              ))}
            </div>

            <div className="surface rounded-2xl p-5 mt-5">
              <div className="mono text-[11px] tracking-[0.12em] text-slate-400 mb-3">CATEGORY LEGEND</div>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {Object.entries(CAT_COLORS).map(([cat, color]) => (
                  <div key={cat} className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                    <span className="mono text-[11px] text-slate-300">{cat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface rounded-2xl p-5 mt-5">
              <p className="mono text-[11px] tracking-[0.12em] text-slate-400 uppercase mb-2">Current Focus</p>
              <p className="text-sm text-slate-300 leading-6">
                Building high-quality internship-ready projects with production-grade backend APIs, resilient frontend
                interactions, and AI-assisted workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
