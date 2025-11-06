import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import ThemeToggle from '@/components/theme/ThemeToggle'

export const metadata: Metadata = {
  title: 'Somos Talk - AI Patterns for Real Teams',
  description:
    "Inside Assent's AI playbook: context stacking, Slack assistants, agentic workflows, custom tools, fine-tuned models, and a creative showcase.",
  keywords:
    'AI, context stacking, agentic workflows, Slack bot, fine-tuned models, AI workflows, Somos, Assent',
  authors: [{ name: 'Somos' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <ThemeToggle />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
