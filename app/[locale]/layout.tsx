import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'
import '../../styles/globals.css'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params
  
  const titles = {
    en: 'Rhythm & Brews | Open Mic Night',
    es: 'Rhythm & Brews | Noche de Micrófono Abierto'
  }
  
  const descriptions = {
    en: 'Join us for an unforgettable evening of live music, great coffee, and intimate performances at Rhythm & Brews open mic night.',
    es: 'Únete a nosotros para una noche inolvidable de música en vivo, café excelente y presentaciones íntimas en la noche de micrófono abierto de Rhythm & Brews.'
  }
  
  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: ['open mic', 'live music', 'coffee', 'performances', 'acoustic', 'rhythm and brews', 'aguadilla', 'puerto rico'],
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
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
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
