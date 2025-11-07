'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

interface ThemeToggleProps {
  className?: string
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps = {}) {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'
  const baseClasses =
    'inline-flex items-center justify-center rounded-full border border-primary-700/60 bg-primary-900/80 p-2 text-secondary-100 shadow-lg shadow-primary-900/40 backdrop-blur transition-colors hover:bg-primary-800/80'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${baseClasses} ${className}`.trim()}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun className="h-5 w-5 text-accent-300" /> : <Moon className="h-5 w-5 text-accent-400" />}
    </button>
  )
}
