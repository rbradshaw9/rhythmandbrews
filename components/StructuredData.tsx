import { eventConfig } from '@/config/event'

interface StructuredDataProps {
  locale: string
  translations: {
    faqItems: Array<{
      question: string
      answer: string
    }>
  }
}

export default function StructuredData({ locale, translations }: StructuredDataProps) {
  if (!eventConfig.date) return null

  const eventDate = new Date(eventConfig.date)
  const startTime = new Date(eventDate)
  startTime.setHours(18, 0, 0) // 6:00 PM
  
  const endTime = new Date(eventDate)
  endTime.setHours(22, 0, 0) // 10:00 PM

  const musicEventData = {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: 'Rhythm & Brews Open Mic Night',
    description: locale === 'es' 
      ? 'Noche de open mic de música en vivo en The Beer Box, Aguadilla. Todos los músicos son bienvenidos. Entrada gratis.'
      : 'Live music open mic night at The Beer Box in Aguadilla. All musicians welcome. Free entry.',
    image: 'https://rhythmandbrews.vercel.app/images/hero/open-mic-bg.png',
    startDate: startTime.toISOString(),
    endDate: endTime.toISOString(),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'The Beer Box',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'KM 31.6 PR-110, Aguacate',
        addressLocality: 'Aguadilla',
        addressRegion: 'PR',
        postalCode: '00603',
        addressCountry: 'US'
      }
    },
    organizer: {
      '@type': 'Organization',
      name: 'Rhythm & Brews',
      url: 'https://rhythmandbrews.vercel.app'
    },
    performer: {
      '@type': 'PerformingGroup',
      name: 'Local Musicians & Open Mic Performers'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://rhythmandbrews.vercel.app',
      validFrom: new Date().toISOString()
    },
    isAccessibleForFree: true,
    inLanguage: [locale === 'es' ? 'es' : 'en', 'es', 'en']
  }

  // FAQ Schema for rich snippets
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: translations.faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  // LocalBusiness Schema for venue
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'MusicVenue',
    name: 'The Beer Box',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'KM 31.6 PR-110, Aguacate',
      addressLocality: 'Aguadilla',
      addressRegion: 'PR',
      postalCode: '00603',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.505987982584774,
      longitude: -67.11274332480875
    },
    url: 'https://maps.app.goo.gl/Xt2RM624XNqsKYmw6',
    priceRange: 'Free',
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Parking',
        value: true
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicEventData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  )
}
