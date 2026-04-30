import { useState, useEffect } from 'react'

const links = ['About', 'Education', 'Skills', 'Projects', 'Achievements', 'Contact']

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 100) setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'glass dark:glass-dark shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-6">
        <a href="#" className="font-heading text-2xl font-extrabold text-primary">
          SK<span className="text-secondary">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 ml-auto">
          {links.map(l => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${active === l.toLowerCase()
                    ? 'text-primary bg-blue-50 dark:bg-blue-900/30'
                    : 'text-slate-500 hover:text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-slate-400'
                  }`}
              >
                {l}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo('Contact')}
              className="ml-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 hover:shadow-blue-500/50 transition-all duration-200"
            >
              Hire Me
            </button>
          </li>
        </ul>

        {/* Theme toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all text-lg"
          aria-label="Toggle theme"
        >
          {dark ? '☀️' : '🌙'}
        </button>

        {/* Hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className={`w-5 h-0.5 bg-slate-700 dark:bg-slate-300 mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-slate-700 dark:bg-slate-300 mb-1 transition-all ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass dark:glass-dark border-t border-white/20 px-6 py-4 flex flex-col gap-2">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-left py-2 font-medium text-slate-600 dark:text-slate-300 hover:text-primary border-b border-slate-100 dark:border-slate-700 last:border-0 transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
