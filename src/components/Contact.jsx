import { useState } from 'react'
import { SectionLabel } from './About'

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'skhan310703@gmail.com', href: 'mailto:skhan310703@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 7418133107', href: 'tel:+917418133107' },
  { icon: '📍', label: 'Location', value: 'Tirupur, Tamil Nadu 641606', href: null },
  { icon: '🔗', label: 'LinkedIn', value: 'SALMAN_KHAN_S', href: '#' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); e.target.reset() }, 3500)
  }

  return (
    <section id="contact" className="py-28 px-6 bg-white/40 dark:bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Connect</SectionLabel>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-14">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <div className="section-reveal glass dark:glass-dark rounded-3xl p-8 shadow-xl shadow-blue-500/5">
            <h3 className="font-heading text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Let's work together!</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              I'm open to new opportunities, collaborations, or just a good tech conversation. Reach out anytime!
            </p>
            <div className="space-y-3">
              {contactInfo.map(({ icon, label, value, href }) => {
                const Comp = href ? 'a' : 'div'
                return (
                  <Comp
                    key={label}
                    href={href || undefined}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-900/20 border border-blue-100/80 dark:border-blue-800/40 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:translate-x-1 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{value}</p>
                    </div>
                  </Comp>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <div className="section-reveal glass dark:glass-dark rounded-3xl p-8 shadow-xl shadow-blue-500/5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                <div className="text-6xl">✅</div>
                <h3 className="font-heading text-xl font-bold text-emerald-600">Message Sent!</h3>
                <p className="text-slate-500 dark:text-slate-400">Thank you! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-blue-50/60 dark:bg-slate-800 border border-blue-100 dark:border-slate-600 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-blue-50/60 dark:bg-slate-800 border border-blue-100 dark:border-slate-600 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Hi Salman, I'd like to connect..."
                    className="w-full px-4 py-3 rounded-xl bg-blue-50/60 dark:bg-slate-800 border border-blue-100 dark:border-slate-600 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message 🚀
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
