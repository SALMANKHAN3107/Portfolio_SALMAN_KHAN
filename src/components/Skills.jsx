import { useEffect, useRef } from 'react'
import { SectionLabel } from './About'

const barSkills = [
  { group: '⚙️ Programming', items: [{ name: 'Java', pct: 90 }, { name: 'Python', pct: 80 }, { name: 'SQL', pct: 85 }] },
  { group: '🖥️ Backend & APIs', items: [{ name: 'Spring Boot', pct: 88 }, { name: 'REST APIs', pct: 85 }, { name: 'JWT / Spring Security', pct: 80 }] },
  { group: '🗄️ Databases', items: [{ name: 'MySQL', pct: 85 }, { name: 'PostgreSQL', pct: 75 }] },
]

const tagSkills = [
  { group: '☁️ Cloud & Tools', tags: ['AWS Services', 'Git', 'GitHub', 'Postman', 'Maven', 'Render'] },
  { group: '🧠 Core Competencies', tags: ['Data Structures & Algorithms', 'OOP Principles', 'Problem Solving', 'API Development', 'Debugging'] },
  { group: '🌟 Key Strengths', tags: ['Leadership', 'Responsibility', 'Adaptability', 'Teamwork', 'Collaboration'] },
]

function BarGroup({ group, items }) {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current.querySelectorAll('[data-pct]').forEach(el => {
          el.style.width = el.dataset.pct + '%'
        })
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="section-reveal glass dark:glass-dark rounded-2xl p-6 shadow-lg shadow-blue-500/5 hover:-translate-y-1 hover:shadow-blue-500/15 transition-all duration-300">
      <h3 className="font-heading font-bold text-slate-700 dark:text-slate-200 mb-5 flex items-center gap-2">{group}</h3>
      <div className="space-y-4">
        {items.map(({ name, pct }) => (
          <div key={name}>
            <div className="flex justify-between text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5">
              <span>{name}</span><span className="text-primary">{pct}%</span>
            </div>
            <div className="h-2 bg-blue-50 dark:bg-blue-900/30 rounded-full overflow-hidden">
              <div
                data-pct={pct}
                className="h-full w-0 bar-fill-animate bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TagGroup({ group, tags }) {
  return (
    <div className="section-reveal glass dark:glass-dark rounded-2xl p-6 shadow-lg shadow-blue-500/5 hover:-translate-y-1 hover:shadow-blue-500/15 transition-all duration-300">
      <h3 className="font-heading font-bold text-slate-700 dark:text-slate-200 mb-5">{group}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map(t => (
          <span key={t} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-primary border border-blue-100 dark:border-blue-700 hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-default">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Expertise</SectionLabel>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-14">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {barSkills.map(g => <BarGroup key={g.group} {...g} />)}
          {tagSkills.map(g => <TagGroup key={g.group} {...g} />)}
        </div>
      </div>
    </section>
  )
}
