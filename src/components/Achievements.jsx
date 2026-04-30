import { SectionLabel } from './About'

const items = [
  {
    emoji: '🏆',
    type: 'Hackathon',
    typeColor: 'bg-blue-50 text-primary border-blue-100 dark:bg-blue-900/30 dark:border-blue-700',
    title: 'Techgium Hackathon — L&T',
    desc: 'Shortlisted till Semi-Final Round at National Level for the project "AI Enabled Building Automation System".',
  },
  {
    emoji: '🏅',
    type: 'Hackathon',
    typeColor: 'bg-blue-50 text-primary border-blue-100 dark:bg-blue-900/30 dark:border-blue-700',
    title: '24-Hour Intercollegiate Hackathon',
    desc: 'Received Surprise Special Prize for developing a Smart EB (Electricity Bill) Calculating and Controlling System.',
  },
  {
    emoji: '📜',
    type: 'Certification',
    typeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-700',
    title: 'AWS Skill Builder Certificate',
    desc: 'Completed foundational learning modules on AWS cloud services and core cloud concepts.',
  },
  {
    emoji: '💻',
    type: 'Workshop',
    typeColor: 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:border-amber-700',
    title: 'DSA Bootcamp — Syntax Error',
    desc: 'Completed comprehensive online bootcamp covering Data Structures & Algorithms with hands-on problem-solving practice. (Nov–Dec 2025)',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Recognition</SectionLabel>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-14">
          Achievements & <span className="gradient-text">Certifications</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-violet-400 opacity-30" />

          <div className="space-y-6">
            {items.map((item, i) => (
              <div
                key={item.title}
                style={{ transitionDelay: `${i * 100}ms` }}
                className="section-reveal flex gap-5 items-start"
              >
                {/* Dot */}
                <div className="relative z-10 w-12 h-12 rounded-full glass dark:glass-dark border border-white/40 dark:border-blue-700/40 flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                  {item.emoji}
                </div>

                {/* Card */}
                <div className="flex-1 glass dark:glass-dark rounded-2xl p-5 shadow-lg shadow-blue-500/5 hover:translate-x-2 hover:shadow-blue-500/15 transition-all duration-300">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border mb-2 ${item.typeColor}`}>
                    {item.type}
                  </span>
                  <h3 className="font-heading font-bold text-slate-800 dark:text-slate-100 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
