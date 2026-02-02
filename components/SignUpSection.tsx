'use client'

import { useTranslations } from 'next-intl'

export default function SignUpSection() {
  const t = useTranslations('signup')
  
  return (
    <section id="signup" className="py-20 bg-background-light">
      <div className="section-container max-w-4xl">
        <h2 className="heading-lg text-center mb-12">{t('title')}</h2>
        
        <div className="space-y-6 mb-10">
          <p className="text-lg text-text leading-relaxed">
            {t('paragraph1')}
          </p>
          <p className="text-lg text-text leading-relaxed">
            {t('paragraph2')}
          </p>
        </div>

        <div className="bg-background rounded-lg p-8 mb-8">
          <ul className="space-y-4">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-text text-lg">
                  {t(`details.${index}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-accent/20 border-l-4 border-accent rounded-r-lg p-6 mb-8">
          <p className="text-text font-semibold text-lg">
            {t('musicOnly')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-background rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary mb-3">
              {t('equipmentTitle')}
            </h3>
            <p className="text-text mb-4">{t('equipmentDescription')}</p>
            <ul className="space-y-2">
              {[0, 1, 2, 3, 4].map((index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-text">{t(`equipment.${index}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary mb-3">
              {t('bringTitle')}
            </h3>
            <p className="text-text mb-4">{t('bringDescription')}</p>
            <ul className="space-y-2">
              {[0, 1, 2, 3].map((index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-text">{t(`bringItems.${index}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6">
          <p className="text-text leading-relaxed">
            {t('note')}
          </p>
        </div>
      </div>
    </section>
  )
}
