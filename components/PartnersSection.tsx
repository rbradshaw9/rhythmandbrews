'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function PartnersSection() {
  const t = useTranslations('partners')
  
  const partners = [
    { name: t('items.0'), logo: '/images/brand/beer-box-logo.svg' },
    { name: t('items.1'), logo: '/images/brand/box-lab-brewing-logo.svg' }
  ]
  
  return (
    <section className="py-16 bg-background-light">
      <div className="section-container max-w-4xl text-center">
        <h3 className="text-2xl font-serif font-bold text-text mb-12">{t('title')}</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="relative w-48 h-24">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
