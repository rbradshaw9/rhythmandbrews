import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import SignUpSection from '@/components/SignUpSection'
import LocationSection from '@/components/LocationSection'
import PartnersSection from '@/components/PartnersSection'
import InstagramGallery from '@/components/InstagramGallery'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Hero />
      <IntroSection />
      <SignUpSection />
      <LocationSection />
      <PartnersSection />
      <InstagramGallery />
      <ContactForm />
      <Footer />
    </main>
  )
}
