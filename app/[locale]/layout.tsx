import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'
import Analytics from '@/components/Analytics'
import '../../styles/globals.css'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params
  
  const titles = {
    en: 'Rhythm & Brews | Open Mic Night in Aguadilla, Puerto Rico',
    es: 'Rhythm & Brews | Noche de Micrófono Abierto en Aguadilla, Puerto Rico'
  }
  
  const descriptions = {
    en: 'Join us for live music at Rhythm & Brews open mic night in Aguadilla, PR. A fun, community-focused event for musicians and music lovers. Free entry, all styles welcome.',
    es: 'Únete a nosotros para música en vivo en la noche de open mic de Rhythm & Brews en Aguadilla, PR. Un evento comunitario divertido para músicos y amantes de la música. Entrada gratis, todos los estilos son bienvenidos.'
  }

  const siteUrl = 'https://rhythmandbrews.vercel.app'
  const ogImageUrl = `${siteUrl}/images/hero/openmic-background-1.jpg`
  
  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: ['open mic', 'live music', 'musicians', 'acoustic', 'electric', 'rhythm and brews', 'aguadilla', 'puerto rico', 'community event', 'the beer box'],
    authors: [{ name: 'Rhythm & Brews' }],
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      url: `${siteUrl}/${locale}`,
      siteName: 'Rhythm & Brews',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Rhythm & Brews Open Mic Night',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Get messages for the locale
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
