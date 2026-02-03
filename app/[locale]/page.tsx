import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { locales } from '@/i18n'
import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import SignUpSection from '@/components/SignUpSection'
import FAQSection from '@/components/FAQSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import LocationSection from '@/components/LocationSection'
import PartnersSection from '@/components/PartnersSection'
import InstagramGallery from '@/components/InstagramGallery'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import QuickNav from '@/components/QuickNav'
import { getTranslations } from 'next-intl/server'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale);
  
  // Get translations for structured data
  const t = await getTranslations({ locale, namespace: 'faq' })
  const faqItems = Array.from({ length: 9 }, (_, i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`)
  }))
  
  return (
    <>
      <StructuredData locale={locale} translations={{ faqItems }} />
      <QuickNav />
      <main className="min-h-screen bg-background text-white">
        <Hero />
        <IntroSection />
        <SignUpSection />
        <FAQSection />
        <TestimonialsSection />
        <LocationSection />
        <PartnersSection />
        <InstagramGallery />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
