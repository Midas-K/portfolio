import { useEffect, useState } from 'react'
import { navLinks } from '../data/profile'
import { Logo } from './Logo'
import { SiteOwnershipBar } from './SiteOwnershipBar'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <SiteOwnershipBar />
      <div className="px-4 pt-3">
        <nav
          className={`nav-bar mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-5 py-3 ${
            scrolled ? 'nav-bar-scrolled' : ''
          }`}
        >
        <a href="#" className="flex shrink-0 items-center gap-3">
          <Logo size={34} className="shrink-0" />
          <span className="font-display text-base font-semibold t-heading sm:text-lg">
            Vikesh Patel
          </span>
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
          <ul className="flex max-w-full items-center gap-0.5 overflow-x-auto sm:gap-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="rounded-lg px-2.5 py-2 text-xs t-muted transition-colors hover:bg-[var(--pill-bg)] hover:t-heading sm:px-3.5 sm:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="ml-1 shrink-0 sm:ml-2">
              <a href="#contact" className="btn-primary !px-4 !py-2 !text-xs sm:!px-5 sm:!py-2.5 sm:!text-sm">
                Hire Me
              </a>
            </li>
          </ul>

          <ThemeToggle className="shrink-0" />
        </div>
      </nav>
      </div>
    </header>
  )
}
