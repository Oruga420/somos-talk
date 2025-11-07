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
          <div className="relative min-h-screen text-accent-700">
            <header className="fixed inset-x-0 top-4 z-50 flex w-full items-center justify-between px-6">
              <Link
                href="/"
                className="group flex items-center gap-5 rounded-full border border-primary-200 bg-white/90 px-6 py-3 shadow-lg shadow-primary-200/70 backdrop-blur-lg transition-colors hover:border-secondary-400/60 hover:bg-white"
              >
                <div className="flex items-center gap-5">
                  <Image
                    src="/assent-logo.svg"
                    alt="Assent logo"
                    width={110}
                    height={30}
                    priority
                    className="h-8 w-auto"
                  />
                  <span className="text-sm font-semibold text-accent-400 group-hover:text-secondary-500">
                    ×
                  </span>
                  <Image
                    src="/somos-logo.png"
                    alt="Somos logo"
                    width={110}
                    height={30}
                    priority
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </Link>
              <ThemeToggle className="border-primary-200 bg-white/90 text-accent-600 shadow-primary-200/70 hover:bg-primary-100" />
            </header>
            <main className="pt-24">{children}</main>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#ffffff',
                  color: '#204c71',
                  border: '1px solid rgba(18,195,176,0.35)',
                },
              }}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
