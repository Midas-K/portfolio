import { profile } from '../data/profile'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <div>
              <p className="font-display text-sm font-semibold t-heading">{profile.name}</p>
              <p className="text-xs t-faint">Staff AI & Machine Learning Engineer</p>
            </div>
          </div>
          <p className="text-sm t-faint">© {year} All rights reserved.</p>
        </div>
        <p className="mt-6 border-t border-[var(--border)] pt-6 text-center text-sm t-muted">
          This site is owned and operated by{' '}
          <span className="font-medium t-heading">{profile.name}</span> and{' '}
          <a
            href={`mailto:${profile.email}`}
            className="font-medium t-link transition-colors"
          >
            {profile.email}
          </a>
        </p>
      </div>
    </footer>
  )
}
