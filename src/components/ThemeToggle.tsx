import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`theme-toggle ${className}`}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <Sun
          size={18}
          className={`absolute transition-all duration-100 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        />
        <Moon
          size={18}
          className={`absolute transition-all duration-100 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
        />
      </span>
    </button>
  )
}
