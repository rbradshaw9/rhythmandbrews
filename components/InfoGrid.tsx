'use client'

import { useTranslations } from 'next-intl'

export default function InfoGrid() {
  const t = useTranslations('infoGrid')
  
  const infoItems = [
    {
      title: t('cards.schedule.title'),
      description: t('cards.schedule.description'),
      icon: '/images/illustrations/livemusic.svg',
    },
    {
      title: t('cards.openToAll.title'),
      description: t('cards.openToAll.description'),
      icon: '/images/illustrations/community.svg',
    },
    {
      title: t('cards.atmosphere.title'),
      description: t('cards.atmosphere.description'),
      icon: '/images/backgrounds/guitar-illustration.png',
    },
    {
      title: t('cards.refreshments.title'),
      description: t('cards.refreshments.description'),
      icon: '/images/illustrations/foodandbeer.svg',
    },
  ]

  return (
    <section id="info" className="py-20 bg-background-light">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-lg mb-4">{t('heading')}</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t('subheading')}
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
