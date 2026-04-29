import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

const TYPING_STRINGS = [
  'Full-Stack Engineer',
  'Spring Boot Developer',
  'React Developer',
  'AI Systems Builder',
  'Microservices Enthusiast',
]

const COMMAND_LINES = [
  '$ init portfolio-engine --stack react,spring',
  '$ boot services --profile production-ready',
  '$ run ai-module --task intelligent-automation',
  '$ deploy --target internship-ready',
]

const PIPELINE = [
  { label: 'Backend APIs', value: 'Live' },
  { label: 'Frontend UX', value: 'Refined' },
  { label: 'AI Modules', value: 'Experimenting' },
]

const MARQUEE_ITEMS = [
  'Java',
  'Spring Boot',
  'React',
  'REST APIs',
  'Microservices',
  'PostgreSQL',
  'Docker',
  'Machine Learning',
  'System Design',
]

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return reduced
}

function Typing({ reducedMotion }) {
  const [display, setDisplay] = useState(reducedMotion ? TYPING_STRINGS[0] : '')
  const [strIdx, setStrIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reducedMotion) return undefined

    const current = TYPING_STRINGS[strIdx]
    const speed = deleting ? 44 : 84
    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplay(current.slice(0, charIdx + 1))
          setCharIdx((v) => v + 1)
        } else {
          setDeleting(true)
        }
      } else if (charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1))
        setCharIdx((v) => v - 1)
      } else {
        setDeleting(false)
        setStrIdx((v) => (v + 1) % TYPING_STRINGS.length)
      }
    }, deleting ? speed : charIdx === current.length ? 1100 : speed)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, reducedMotion, strIdx])

  return <span className="typing-cursor mono text-sm sm:text-base md:text-lg text-sky-100">{display}</span>
}

function Counter({ end, label, reducedMotion, suffix = '+' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(reducedMotion ? end : 0)

  useEffect(() => {
    if (reducedMotion) return undefined

    const node = ref.current
    if (!node) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.35 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion || !visible) return undefined

    let frame
    const start = performance.now()
    const duration = 850

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, end, reducedMotion])

  return (
    <div ref={ref}>
      <div className="mono text-lg sm:text-xl md:text-2xl font-semibold text-sky-100">
        {count}
        {suffix}
      </div>
      <p className="mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-slate-400 mt-1">{label}</p>
    </div>
  )
}

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion()
  const marqueeLoop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden grid-bg pt-28 sm:pt-32 pb-20 sm:pb-24"
      style={{ background: 'linear-gradient(180deg, rgba(4,7,13,0.74), rgba(4,7,13,0.95))' }}
    >
      <div className="absolute inset-0 pointer-events-none mesh-bg" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 65% 48% at 50% 45%, rgba(69,143,255,0.12), transparent 72%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center min-h-[calc(100vh-14rem)]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="kicker mb-5 sm:mb-6">
            <span className="pulse-dot" />
            Available for Internship
          </div>

          <h1
            className="text-gradient mb-3 sm:mb-4"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.3rem, 11vw, 5.4rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.98,
            }}
          >
            Harshit Singh
          </h1>

          <div className="flex items-center gap-2.5 sm:gap-3 h-7 sm:h-8 mb-5 sm:mb-6">
            <span className="mono text-sky-200/70 text-sm">&gt;</span>
            <Typing reducedMotion={reducedMotion} />
          </div>

          <p className="text-slate-300 max-w-xl leading-7 sm:leading-8 text-[15px] sm:text-base mb-7 sm:mb-9">
            I design and engineer production-ready software across backend services, modern frontend interfaces,
            and applied AI workflows with a developer-first product mindset.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8 sm:mb-10">
            <a href="#projects" className="btn-primary px-6 py-3 text-xs text-center sm:w-auto w-full">
              view_projects()
            </a>
            <a href="/resume.pdf" download className="btn-outline px-6 py-3 text-xs text-center sm:w-auto w-full">
              download_resume()
            </a>
          </div>

          <div className="surface rounded-2xl p-4 sm:p-5 md:p-6">
            <div className="mono text-[10px] sm:text-[11px] tracking-[0.1em] text-slate-400 mb-4">LIVE SNAPSHOT</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3">
              <Counter end={4} label="Production Projects" reducedMotion={reducedMotion} />
              <Counter end={10} label="REST APIs" reducedMotion={reducedMotion} />
              <Counter end={3} label="Certifications" reducedMotion={reducedMotion} />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' }}
        >
          <div className="code-window p-4 sm:p-5 md:p-6 project-card">
            <div className="flex items-center justify-between mb-4">
              <div className="mono text-[10px] sm:text-[11px] tracking-[0.12em] text-slate-300">DEVELOPER CONSOLE</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-300/70" />
                <span className="w-2 h-2 rounded-full bg-sky-400/60" />
                <span className="w-2 h-2 rounded-full bg-emerald-300/65" />
              </div>
            </div>

            <div
              className="rounded-2xl p-4 sm:p-5"
              style={{ border: '1px solid rgba(128,180,255,0.2)', background: 'rgba(3,8,15,0.74)' }}
            >
              <div className="space-y-3">
                {COMMAND_LINES.map((line, idx) => (
                  <motion.div
                    key={line}
                    className="mono text-[11px] sm:text-[12px] leading-6 text-sky-100/88 break-all"
                    initial={reducedMotion ? false : { opacity: 0, x: 8 }}
                    whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4">
              {PIPELINE.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl px-3 py-2.5"
                  style={{ border: '1px solid rgba(128,180,255,0.24)', background: 'rgba(255,255,255,0.02)' }}
                >
                  <p className="mono text-[10px] tracking-[0.1em] text-slate-400 uppercase">{item.label}</p>
                  <p className="text-[13px] text-slate-200 mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 sm:mt-8 mx-auto relative w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px]">
            {[100, 78, 58].map((size, idx) => (
              <div
                key={size}
                className={`hero-orbit hero-orbit-${idx}`}
                style={{
                  width: `${size}%`,
                  height: `${size}%`,
                  opacity: 0.34 - idx * 0.08,
                }}
              />
            ))}

            <div
              className="absolute inset-6 sm:inset-8 md:inset-10 rounded-full flex items-center justify-center float"
              style={{
                border: '1px solid rgba(128,180,255,0.32)',
                background: 'radial-gradient(circle at 30% 20%, rgba(109,245,255,0.26), rgba(8,14,24,0.94))',
                boxShadow: '0 20px 44px rgba(4,9,17,0.55), 0 0 34px rgba(109,245,255,0.16)',
              }}
            >
              <span
                className="text-gradient"
                style={{ fontFamily: "'Archivo'", fontWeight: 800, fontSize: 'clamp(2.4rem, 10vw, 3.6rem)', letterSpacing: '-0.06em' }}
              >
                HS
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 mt-6 sm:mt-8">
        <div className="hero-ticker">
          <div className="hero-ticker-track">
            {marqueeLoop.map((item, idx) => (
              <div key={`${item}-${idx}`} className="hero-ticker-item">
                {item}
                <span className="mx-3 text-cyan-200/55">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
