import { profile } from '../data/profile'

export function SiteOwnershipBar() {
  return (
    <div className="site-ownership-bar border-b border-[var(--border)] px-4 py-2 text-center text-[11px] leading-relaxed t-muted sm:text-xs">
      This site is owned and operated by{' '}
      <span className="font-medium t-heading">{profile.name}</span> and{' '}
      <a href={`mailto:${profile.email}`} className="font-medium t-link transition-colors">
        {profile.email}
      </a>
    </div>
  )
}
