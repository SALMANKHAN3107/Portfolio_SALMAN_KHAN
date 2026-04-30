export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/30 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">
          Designed & built by <strong className="text-primary">Salman Khan S</strong> © {new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
          {[
            { label: 'Email', href: 'mailto:skhan310703@gmail.com' },
            { label: 'LinkedIn', href: '#' },
            { label: 'GitHub', href: 'https://github.com/SALMANKHAN3107' },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              className="text-sm font-semibold text-slate-400 hover:text-primary transition-colors duration-200">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
