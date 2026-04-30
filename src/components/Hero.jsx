import { useEffect, useState } from 'react'

const phrases = ['Scalable APIs.', 'Spring Boot Apps.', 'RAG Chatbots.', 'Cloud Solutions.', 'Elegant Code.']

function useTypingEffect(phrases) {
  const [text, setText] = useState('')
  const [pi, setPi] = useState(0)
  const [ci, setCi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[pi]
    const speed = deleting ? 50 : 100
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, ci + 1))
        if (ci + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500)
        } else {
          setCi(ci + 1)
        }
      } else {
        setText(current.slice(0, ci - 1))
        if (ci - 1 === 0) {
          setDeleting(false)
          setPi((pi + 1) % phrases.length)
          setCi(0)
        } else {
          setCi(ci - 1)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [ci, deleting, pi, phrases])

  return text
}

export default function Hero() {
  const typed = useTypingEffect(phrases)

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-violet-400/8 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
        {/* Left */}
        <div className="flex-1 section-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-700 text-primary text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-primary" /></span>
            Available for Opportunities
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-4">
            Salman<br />
            <span className="gradient-text">Khan S</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-slate-500 dark:text-slate-400 mb-4 min-h-8">
            I build{' '}
            <span className="text-primary">{typed}</span>
            <span className="animate-blink text-primary">|</span>
          </p>

          <p className="text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed mb-8">
            Motivated Java & Backend Developer skilled in Spring Boot, REST APIs, and Cloud technologies. Passionate about building scalable, efficient solutions.
          </p>

          <div className="flex gap-4 flex-wrap mb-8">
            <button
              onClick={() => scrollTo('projects')}
              className="px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:shadow-blue-500/50 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-7 py-3 rounded-full font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: '📧', label: 'skhan310703@gmail.com' },
              { icon: '📞', label: '+91 7418133107' },
              { icon: '🔗', label: 'SALMAN_KHAN_S' },
            ].map(({ icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-500 dark:text-slate-400 glass dark:glass-dark hover:text-primary hover:-translate-y-0.5 transition-all cursor-default">
                {icon} {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div className="flex-1 flex justify-center lg:justify-end section-reveal">
          <div className="glass dark:glass-dark rounded-3xl p-8 w-full max-w-sm shadow-2xl shadow-blue-500/10 animate-float">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/40 animate-pulse-slow">
              <span className="font-heading text-3xl font-extrabold text-white">SK</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              {[['8.76', 'CGPA'], ['2+', 'Projects'], ['2x', 'Hackathons']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-heading text-2xl font-extrabold text-primary">{n}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{l}</div>
                </div>
              ))}
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {['Java', 'Spring Boot', 'Python', 'AWS', 'MySQL', 'REST APIs'].map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-primary border border-blue-100 dark:border-blue-700 hover:bg-primary hover:text-white transition-all duration-200 cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
