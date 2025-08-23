import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maize Developments - Professional Construction Services',
  description: 'Specializing in new builds, renovations, rezoning, and subdivisions. Quality construction services in New Zealand.',
  keywords: 'construction, new build, renovation, rezone, subdivision, New Zealand',
  authors: [{ name: 'Maize Developments' }],
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
      <body
        className="antialiased"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
