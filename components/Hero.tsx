import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background z-10" />
        <Image
          src="/images/hero/openmic-background-1.jpg"
          alt="Rhythm & Brews Open Mic"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 section-container text-center animate-fade-in">
        <h1 className="heading-xl mb-6 tracking-tight">
          Rhythm & Brews
        </h1>
        <p className="text-xl sm:text-2xl text-text-muted mb-4 max-w-2xl mx-auto">
          Where Music Meets Community
        </p>
        <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
          Join us every week for an intimate evening of live performances, great coffee, and unforgettable moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a href="#info" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
