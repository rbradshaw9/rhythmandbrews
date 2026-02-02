'use client'

import { useTranslations } from 'next-intl'

export default function IntroSection() {
  const t = useTranslations('intro')
  
  return (
    <section className="py-20 bg-background">
      <div className="section-container max-w-4xl">
        <div className="space-y-6 text-center mb-12">
          <p className="text-xl text-text leading-relaxed">
            {t('paragraph1')}
          </p>
          <p className="text-xl text-text leading-relaxed">
            {t('paragraph2')}
          </p>
          <p className="text-xl text-text leading-relaxed">
            {t('paragraph3')}
          </p>
          <div className="pt-4">
            <p className="text-lg text-primary font-semibold italic">
              {t('paragraph4')}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-primary/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{t('stat1Number')}</div>
            <div className="text-text-muted text-sm uppercase tracking-wider">{t('stat1Label')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{t('stat2Number')}</div>
            <div className="text-text-muted text-sm uppercase tracking-wider">{t('stat2Label')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{t('stat3Number')}</div>
            <div className="text-text-muted text-sm uppercase tracking-wider">{t('stat3Label')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
