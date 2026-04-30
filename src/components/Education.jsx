import { SectionLabel } from './About'

const edu = [
  {
    icon: '🎓',
    degree: 'B.Tech — AI & Data Science',
    school: 'Rathinam Technical Campus, Coimbatore',
    period: '09/2023 – Present',
    badge: 'CGPA: 8.76',
    color: 'from-primary to-secondary',
  },
  {
    icon: '🏫',
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'Shamrock Mat. Hr. Sec. School, Chennai',
    period: '06/2020 – 05/2021',
    badge: '90%',
    color: 'from-violet-500 to-sky-400',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-white/40 dark:bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Background</SectionLabel>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-14">
          My <span className="gradient-text">Education</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {edu.map((e, i) => (
            <div
              key={e.degree}
              style={{ transitionDelay: `${i * 100}ms` }}
              className="section-reveal glass dark:glass-dark rounded-2xl p-7 shadow-lg shadow-blue-500/5 hover:-translate-y-2 hover:shadow-blue-500/15 transition-all duration-300 flex gap-5 items-start"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${e.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                {e.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-slate-800 dark:text-slate-100 leading-snug">{e.degree}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{e.school}</p>
                <p className="text-xs text-slate-400 mt-0.5">{e.period}</p>
              </div>
              <span className="flex-shrink-0 px-3 py-1.5 rounded-xl text-sm font-bold text-primary bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-700 whitespace-nowrap">
                {e.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
