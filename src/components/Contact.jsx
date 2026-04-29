import { useState } from 'react'
import { motion } from 'motion/react'
import SectionTitle from './SectionTitle'

const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/harshitsinggh070/', color: '#8ec5ff', desc: 'Professional updates and networking', id: 'in' },
  { label: 'GitHub', url: 'https://github.com/harshitsingh070', color: '#d7e6ff', desc: 'Code repositories and projects', id: 'gh' },
  { label: 'LeetCode', url: 'https://leetcode.com/harshitsingh070', color: '#ffd69e', desc: 'Problem-solving progress', id: 'lc' },
  { label: 'X (Twitter)', url: 'https://x.com/harsitsingh070', color: '#b8cff2', desc: 'Thoughts and quick insights', id: 'x' },
]

function SocialIcon({ id, color }) {
  const common = { stroke: color, strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (id === 'in') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3.5" {...common} />
        <path d="M8.2 10.2v5.6M8.2 8.5h.01M11.3 15.8v-3.2c0-1.3.9-2.3 2.1-2.3s2 .8 2 2.3v3.2" {...common} />
      </svg>
    )
  }
  if (id === 'gh') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 18.3c-3.8 1.2-3.8-2.1-5.4-2.6M14.4 20v-3.2c0-.9.1-1.4-.4-2 2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 00-1.3-3.3 4.3 4.3 0 00-.1-3.2s-1-.3-3.4 1.3a11.8 11.8 0 00-6.2 0C6.2 2.9 5.2 3.2 5.2 3.2a4.3 4.3 0 00-.1 3.2A4.7 4.7 0 003.8 9.8c0 4.7 2.8 5.7 5.5 6-.4.6-.4 1.2-.4 2V20" {...common} />
      </svg>
    )
  }
  if (id === 'lc') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.8 4.8L8.4 11l6.4 6.2M19.2 11H8.8M8.8 20h10.4" {...common} />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5l14 14M19 5L5 19" {...common} />
    </svg>
  )
}

function InputField({ label, name, type = 'text', placeholder, value, onChange, inputMode }) {
  return (
    <div>
      <label className="mono text-[11px] tracking-[0.12em] text-slate-400 uppercase mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        placeholder={placeholder}
        className="w-full rounded-xl px-4 py-3 text-base sm:text-sm outline-none transition-colors"
        style={{
          border: '1px solid rgba(128,180,255,0.22)',
          background: 'rgba(7,13,23,0.86)',
          color: '#d9e8f9',
        }}
      />
    </div>
  )
}

function SuccessIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#84ffe1" strokeWidth="1.8" fill="none" />
      <path d="M8.2 12.2l2.4 2.3 5-5.1" stroke="#84ffe1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handle = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const submit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 800)
  }

  return (
    <section id="contact" className="py-24 md:py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(128,180,255,0.25), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 42% at 50% 100%, rgba(109,245,255,0.1), transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle num="05" title="contact" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="kicker mb-6">// let's build together</div>
            <h3
              className="text-[1.9rem] sm:text-3xl md:text-4xl font-semibold text-slate-100 mb-4"
              style={{ fontFamily: "'Archivo'", lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Looking for internship opportunities and meaningful engineering work.
            </h3>
            <p className="text-slate-300 leading-8 mb-7">
              If you have a role, project, or collaboration in mind, send a message. I reply quickly and can start
              with backend, frontend, or full-stack ownership.
            </p>

            <a href="mailto:harshitsingh2807@gmail.com" className="mono text-sm text-cyan-100/90 hoverable inline-flex items-center gap-2 mb-8 break-all">
              harshitsingh2807@gmail.com
              <span>↗</span>
            </a>

            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="surface rounded-xl p-4 flex items-start sm:items-center gap-3 hoverable"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ border: `1px solid ${social.color}55`, background: `${social.color}14` }}
                  >
                    <SocialIcon id={social.id} color={social.color} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">{social.label}</p>
                    <p className="text-xs text-slate-400">{social.desc}</p>
                  </div>
                  <span className="mono text-xs text-slate-400 ml-auto">↗</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
          >
            <div className="surface rounded-3xl p-6 md:p-7">
              {sent ? (
                <div className="py-10 text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(132,255,225,0.12)', border: '1px solid rgba(132,255,225,0.35)' }}>
                    <SuccessIcon />
                  </div>
                  <h4 className="text-2xl font-semibold text-slate-100 mb-2" style={{ fontFamily: "'Archivo'" }}>
                    Message Sent
                  </h4>
                  <p className="text-slate-300 text-sm mb-5">Thanks for reaching out. I will get back to you soon.</p>
                  <button type="button" className="btn-outline px-5 py-2.5 text-xs" onClick={() => setSent(false)}>
                    send_another()
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="mono text-[11px] tracking-[0.12em] uppercase text-slate-400 mb-5">// send a message</div>
                  <InputField label="Name" name="name" inputMode="text" placeholder="your_name" value={form.name} onChange={handle} />
                  <InputField label="Email" name="email" type="email" inputMode="email" placeholder="your@email.com" value={form.email} onChange={handle} />

                  <div>
                    <label className="mono text-[11px] tracking-[0.12em] text-slate-400 uppercase mb-2 block" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={handle}
                      placeholder="Share your role, idea, or project details..."
                      className="w-full rounded-xl px-4 py-3 text-base sm:text-sm outline-none resize-none"
                      style={{
                        border: '1px solid rgba(128,180,255,0.22)',
                        background: 'rgba(7,13,23,0.86)',
                        color: '#d9e8f9',
                      }}
                    />
                  </div>

                  <button type="submit" disabled={sending} className="btn-primary w-full py-3.5 text-xs mt-2">
                    {sending ? 'sending...' : 'send_message()'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-6 border-t border-slate-700/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="mono text-xs text-slate-400">crafted by Harshit Singh</p>
          <p className="mono text-[11px] uppercase tracking-[0.12em] text-cyan-200/80">open to work</p>
        </div>
      </div>
    </section>
  )
}
