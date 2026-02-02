import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Rhythm & Brews | Open Mic Night',
  description: 'Join us for an unforgettable evening of live music, great coffee, and intimate performances at Rhythm & Brews open mic night.',
  keywords: ['open mic', 'live music', 'coffee', 'performances', 'acoustic', 'rhythm and brews'],
  openGraph: {
    title: 'Rhythm & Brews | Open Mic Night',
    description: 'Join us for an unforgettable evening of live music, great coffee, and intimate performances.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
