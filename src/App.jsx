import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  const [cursorEnabled, setCursorEnabled] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const media = window.matchMedia('(pointer:fine)')
    const sync = () => {
      const enabled = media.matches
      setCursorEnabled(enabled)
      document.body.classList.toggle('has-custom-cursor', enabled)
    }
    sync()
    media.addEventListener('change', sync)
    return () => {
      media.removeEventListener('change', sync)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  useEffect(() => {
    if (!cursorEnabled) return undefined

    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY })
    const over = (e) => {
      if (e.target.closest('a, button, [role="button"], .hoverable')) setHovering(true)
    }
    const out = () => setHovering(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout', out)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout', out)
    }
  }, [cursorEnabled])

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative">
      {cursorEnabled && (
        <>
          <div
            className={`cursor-dot ${hovering ? 'hovering' : ''}`}
            style={{ left: cursorPos.x, top: cursorPos.y }}
          />
          <div
            className={`cursor-ring ${hovering ? 'hovering' : ''}`}
            style={{ left: cursorPos.x, top: cursorPos.y }}
          />
        </>
      )}

      <div className="fixed top-0 left-0 right-0 z-[90] h-px bg-white/5">
        <motion.div
          className="h-full"
          style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
          animate={{ width: `${Math.max(scrollProgress, 0)}%` }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </div>

      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-80 mesh-bg"
        aria-hidden="true"
      />
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="ambient-orb w-56 h-56 sm:w-80 sm:h-80 -top-16 -left-12" style={{ background: 'rgba(109,245,255,0.55)' }} />
        <div className="ambient-orb w-64 h-64 sm:w-96 sm:h-96 top-[35%] -right-24" style={{ background: 'rgba(69,143,255,0.52)' }} />
        <div className="ambient-orb w-44 h-44 sm:w-72 sm:h-72 -bottom-14 left-[30%]" style={{ background: 'rgba(145,255,165,0.45)' }} />
      </div>

      <motion.main
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </motion.main>
    </div>
  )
}
