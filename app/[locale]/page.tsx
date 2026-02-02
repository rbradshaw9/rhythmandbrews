import { setRequestLocale } from 'next-intl/server'
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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale);
  return (
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
  )
}
