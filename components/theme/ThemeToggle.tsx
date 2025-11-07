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
    'inline-flex items-center justify-center rounded-full border border-primary-200 bg-white/90 p-2 text-accent-600 shadow-lg shadow-primary-200/70 backdrop-blur transition-colors hover:bg-primary-100'

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
