export default function InfoGrid() {
  const infoItems = [
    {
      title: 'Every Thursday',
      description: 'Join us weekly for an evening of incredible performances and community vibes.',
      icon: '/images/illustrations/livemusic.svg',
    },
    {
      title: 'Open to All',
      description: 'Whether you\'re a seasoned performer or trying the stage for the first time, everyone is welcome.',
      icon: '/images/illustrations/community.svg',
    },
    {
      title: 'Cozy Atmosphere',
      description: 'Intimate venue with warm lighting, comfortable seating, and exceptional acoustics.',
      icon: '/images/backgrounds/guitar-illustration.png',
    },
    {
      title: 'Coffee & Refreshments',
      description: 'Enjoy artisan coffee, craft beverages, and light bites throughout the evening.',
      icon: '/images/illustrations/foodandbeer.svg',
    },
  ]

  return (
    <section id="info" className="py-20 bg-background-light">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-lg mb-4">What to Expect</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Rhythm & Brews is more than just an open mic—it&apos;s a gathering of artists, music lovers, and friends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                <img src={item.icon} alt="" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-text">
                {item.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
