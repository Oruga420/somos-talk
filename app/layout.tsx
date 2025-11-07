import type { Metadata, Viewport } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
          <div className="relative min-h-screen text-secondary-100">
            <header className="fixed inset-x-0 top-4 z-50 flex w-full items-center justify-between px-6">
              <Link
                href="/"
                className="group flex items-center gap-4 rounded-full border border-primary-700/60 bg-primary-900/80 px-6 py-3 shadow-lg shadow-primary-900/40 backdrop-blur-lg transition-colors hover:border-accent-400/60 hover:bg-primary-800/80"
              >
                <Image
                  src="/assent-logo.svg"
                  alt="Assent logo"
                  width={130}
                  height={34}
                  priority
                  className="h-8 w-auto"
                />
                <span className="text-xs uppercase tracking-[0.45em] text-secondary-200 transition-colors group-hover:text-accent-300">
                  Somos - Assent
                </span>
              </Link>
              <ThemeToggle className="shadow-accent-500/30" />
            </header>
            <main className="pt-24">{children}</main>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#143046',
                  color: '#f5f7f9',
                  border: '1px solid rgba(0,163,152,0.35)',
                },
              }}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
