import Image from 'next/image'

export default function CollageSection() {
  const collageImages = [
    { src: '/images/collages/photo-collage.png', alt: 'Rhythm & Brews community moments' },
    { src: '/images/collages/beer-box-collage.png', alt: 'Beer and brews selection' },
    { src: '/images/backgrounds/guitar-illustration.png', alt: 'Live music vibes' },
    { src: '/images/hero/openmic-background-2.jpg', alt: 'Open mic atmosphere' },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Moments from Our Nights</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A glimpse into the magic that happens when music and community come together.
          </p>
        </div>

        {/* Masonry-style grid for collage effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {collageImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Additional full-width image */}
        <div className="mt-8 relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/images/hero/openmic-background-2.jpg"
            alt="Rhythm & Brews venue atmosphere"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
