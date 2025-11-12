import type { Metadata, Viewport } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import { Toaster } from 'react-hot-toast'

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
        <div className="relative min-h-screen text-accent-700">
          <header className="fixed inset-x-0 top-4 z-50 flex w-full items-center justify-between px-6">
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-full border border-primary-200 bg-white/90 px-4 py-2 shadow-lg shadow-primary-200/70 backdrop-blur-lg transition-colors hover:border-secondary-400/60 hover:bg-white"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="https://www.assent.com/wp-content/uploads/2025/02/logo.svg"
                  alt="Assent logo"
                  width={200}
                  height={56}
                  priority
                  className="h-14 w-auto object-contain"
                />
                <Image
                  src="https://i.postimg.cc/XJ7KH4L7/Somos-LIT-Ottawa-BLK-2x.png"
                  alt="Somos LIT Ottawa logo"
                  width={200}
                  height={56}
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>
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
      </body>
    </html>
  )
}
