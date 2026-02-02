'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'

export default function QuickNav() {
  const [isVisible, setIsVisible] = useState(false)
  const locale = useLocale()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { id: 'signup', labelEN: 'Sign Up', labelES: 'Registro' },
    { id: 'faq', labelEN: 'FAQ', labelES: 'Preguntas' },
    { id: 'location', labelEN: 'Location', labelES: 'Ubicación' },
    { id: 'contact', labelEN: 'Contact', labelES: 'Contacto' },
  ]

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden md:block">
      <div className="bg-background-light/95 backdrop-blur-sm border-2 border-primary/30 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-6 py-3 text-sm font-semibold text-text hover:bg-primary/20 hover:text-primary transition-colors border-b border-primary/10 last:border-b-0"
            >
              {locale === 'es' ? item.labelES : item.labelEN}
            </button>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            {locale === 'es' ? 'Arriba' : 'Top'}
          </button>
        </div>
      </div>
    </div>
  )
}
