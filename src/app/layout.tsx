import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CycleCore — Coming Soon',
  description: 'A local-first AI-powered workspace for developers and thinkers.',
  keywords: ['AI', 'workspace', 'developers', 'local-first', 'productivity'],
  authors: [{ name: 'CycleCore' }],
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}