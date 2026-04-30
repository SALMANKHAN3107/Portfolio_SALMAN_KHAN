import { SectionLabel } from './About'

const projects = [
  {
    emoji: '🔐',
    title: 'CertiVault',
    sub: 'Digital Certificate Management System',
    period: 'Jan 2025 – Apr 2026',
    desc: 'A role-based digital certificate management system built with Spring Boot. Features JWT authentication, certificate upload & approval workflows, REST APIs with pagination, and analytics for department-wise, year-wise, and category-wise insights.',
    tech: ['Java', 'Spring Boot', 'JWT', 'Spring Security', 'Spring Data JPA', 'MySQL', 'Postman', 'Render'],
    gradient: 'from-blue-600 to-sky-400',
    glow: 'hover:shadow-blue-500/25',
  },
  {
    emoji: '🤖',
    title: 'Academic Q&A Bot (RAG)',
    sub: 'AI-Powered Document Intelligence',
    period: 'Nov 2025 – Mar 2026',
    desc: 'A RAG-based chatbot that extracts key information from academic PDFs like syllabi and timetables using LlamaIndex for efficient retrieval. Integrated the Gemini API for accurate, context-aware responses with a clean Streamlit interface.',
    tech: ['Python', 'LlamaIndex', 'Gemini API', 'Streamlit', 'PyPDF', 'RAG Architecture'],
    gradient: 'from-violet-600 to-sky-400',
    glow: 'hover:shadow-violet-500/25',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-white/40 dark:bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Work</SectionLabel>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-14">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`section-reveal glass dark:glass-dark rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl ${p.glow} transition-all duration-400`}
            >
              {/* Header gradient */}
              <div className={`h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <span className="text-6xl drop-shadow-lg relative z-10">{p.emoji}</span>
              </div>

              {/* Body */}
              <div className="p-7">
                <p className="text-xs font-semibold text-slate-400 tracking-wide mb-1">{p.period}</p>
                <h3 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-100">{p.title}</h3>
                <p className="text-sm font-semibold text-primary mb-3">{p.sub}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-900/30 text-primary border border-blue-100 dark:border-blue-700 hover:bg-primary hover:text-white transition-all duration-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
