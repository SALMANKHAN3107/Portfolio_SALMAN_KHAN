const cards = [
  {
    icon: '🚀',
    title: 'Who I Am',
    desc: 'Motivated and detail-oriented Computer Science professional with expertise in Java, backend development, and database systems.',
  },
  {
    icon: '🎯',
    title: 'My Focus',
    desc: 'Passionate about developing efficient solutions and continuously enhancing technical skills. I thrive solving complex backend challenges.',
  },
  {
    icon: '💡',
    title: 'My Goal',
    desc: 'Leverage strong backend skills and AI knowledge to build impactful systems — from scalable REST APIs to intelligent RAG-powered chatbots.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>About Me</SectionLabel>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-14">
          Profile <span className="gradient-text">Overview</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="section-reveal glass dark:glass-dark rounded-2xl p-7 shadow-lg shadow-blue-500/5 hover:-translate-y-2 hover:shadow-blue-500/15 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="font-heading text-lg font-bold mb-3 text-slate-800 dark:text-slate-100">{c.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ children }) {
  return (
    <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-primary bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-700 mb-4">
      {children}
    </div>
  )
}
