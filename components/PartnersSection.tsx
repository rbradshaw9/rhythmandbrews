'use client'

import { useTranslations } from 'next-intl'

export default function PartnersSection() {
  const t = useTranslations('partners')
  
  return (
    <section className="py-16 bg-background-light">
      <div className="section-container max-w-4xl text-center">
        <h3 className="text-2xl font-serif font-bold text-text mb-8">{t('title')}</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[0, 1].map((index) => (
            <div key={index} className="text-xl font-semibold text-primary">
              {t(`items.${index}`)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
