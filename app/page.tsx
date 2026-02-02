import Hero from '@/components/Hero'
import InfoGrid from '@/components/InfoGrid'
import CollageSection from '@/components/CollageSection'
import InstagramGallery from '@/components/InstagramGallery'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <InfoGrid />
      <CollageSection />
      <InstagramGallery />
      <ContactForm />
      <Footer />
    </main>
  )
}
