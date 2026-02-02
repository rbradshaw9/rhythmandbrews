'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function FAQSection() {
  const t = useTranslations('faq')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-background">
      <div className="section-container max-w-4xl">
        <h2 className="heading-lg text-center mb-12">{t('title')}</h2>
        
        <div className="space-y-4">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div 
              key={index}
              className="bg-background-light rounded-lg border-2 border-background-light hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-lg font-semibold text-text">
                  {t(`items.${index}.question`)}
                </span>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-text leading-relaxed">
                    {t(`items.${index}.answer`)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
