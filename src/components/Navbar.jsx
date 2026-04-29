import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const links = [
  { label: 'home', href: '#hero' },
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'education', href: '#education' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 42)
      for (let i = links.length - 1; i >= 0; i -= 1) {
        const id = links[i].href.replace('#', '')
        const node = document.getElementById(id)
        if (node && window.scrollY >= node.offsetTop - 170) {
          setActive(id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <>
      <nav className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-4">
        <div
          className="max-w-6xl mx-auto rounded-2xl px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-3"
          style={{
            background: scrolled ? 'rgba(8,14,24,0.82)' : 'rgba(8,14,24,0.58)',
            border: '1px solid rgba(128,180,255,0.2)',
            backdropFilter: 'blur(16px)',
            boxShadow: scrolled ? '0 14px 34px rgba(0,0,0,0.34)' : 'none',
          }}
        >
          <a href="#hero" className="flex items-center gap-2.5 hoverable">
            <span className="mono text-xs text-sky-200/80">{'<>'}</span>
            <span
              className="text-gradient"
              style={{ fontFamily: "'Archivo'", fontWeight: 700, letterSpacing: '0.07em', fontSize: '1rem' }}
            >
              HARSHIT
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {links.map((item) => {
              const id = item.href.replace('#', '')
              return (
                <a key={item.label} href={item.href} className={`nav-link ${active === id ? 'active' : ''}`}>
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="mono text-[10px] tracking-[0.12em] text-cyan-100/70 uppercase hidden lg:inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-200/80" />
              building daily
            </span>
            <a href="#contact" className="inline-flex btn-outline px-3.5 lg:px-4 py-2 text-[10px] lg:text-[11px]">
              collaborate()
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 rounded-lg border border-sky-200/25 flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className="block w-5 h-px transition-transform duration-200"
                style={{
                  background: 'var(--primary)',
                  transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-5 h-px transition-opacity duration-200"
                style={{ background: 'var(--primary)', opacity: open ? 0 : 1 }}
              />
              <span
                className="block w-5 h-px transition-transform duration-200"
                style={{
                  background: 'var(--primary)',
                  transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden pt-24 px-4"
            style={{ background: 'rgba(4,7,13,0.93)', backdropFilter: 'blur(12px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-2xl p-4 space-y-3"
              style={{ border: '1px solid rgba(128,180,255,0.18)', background: 'rgba(10,19,34,0.74)' }}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 hoverable"
                  style={{
                    border: '1px solid rgba(128,180,255,0.1)',
                    background: 'rgba(255,255,255,0.01)',
                  }}
                >
                  <span className="mono text-xs uppercase tracking-[0.14em] text-slate-300">{item.label}</span>
                  <span className="text-sky-200/70">↗</span>
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full py-3 text-xs text-center block">
                collaborate()
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
