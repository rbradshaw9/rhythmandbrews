'use client'

import { useTranslations } from 'next-intl'

export default function TestimonialsSection() {
  const t = useTranslations('testimonials')

  return (
    <section className="py-20 bg-background-light">
      <div className="section-container max-w-6xl">
        <h2 className="heading-lg text-center mb-12">{t('title')}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[0, 1, 2].map((index) => (
            <div 
              key={index}
              className="bg-background rounded-lg p-8 relative"
            >
              <svg 
                className="w-12 h-12 text-primary/20 mb-4" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-text leading-relaxed mb-6 italic">
                &ldquo;{t(`items.${index}.quote`)}&rdquo;
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <p className="text-primary font-semibold">
                  {t(`items.${index}.author`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
