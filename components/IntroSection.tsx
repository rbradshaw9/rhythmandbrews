'use client'

import { useTranslations } from 'next-intl'

export default function IntroSection() {
  const t = useTranslations('intro')
  
  return (
    <section className="py-20 bg-background">
      <div className="section-container max-w-4xl">
        <div className="space-y-6 text-center">
          <p className="text-xl text-text leading-relaxed">
            {t('paragraph1')}
          </p>
          <p className="text-xl text-text leading-relaxed">
            {t('paragraph2')}
          </p>
          <p className="text-xl text-text leading-relaxed">
            {t('paragraph3')}
          </p>
        </div>
      </div>
    </section>
  )
}
