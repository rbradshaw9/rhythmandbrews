'use client'

import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import LanguageToggle from './LanguageToggle'
import { eventConfig, getEventDate, getEventDetails } from '@/config/event'

export default function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale()
  
  const eventDate = getEventDate(locale)
  const eventDetails = getEventDetails(locale)
  
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-10" />
        <Image
          src="/images/hero/open-mic-bg.png"
          alt="Musicians performing at Rhythm & Brews open mic night in Aguadilla"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-30">
        <Image
          src="/images/brand/rhythm-and-brews-logo.svg"
          alt="Rhythm & Brews logo"
          width={180}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-30">
        <LanguageToggle />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 section-container text-center animate-fade-in py-20">
        <h1 className="heading-xl mb-6 tracking-tight">
          {t('title')}
        </h1>
        <p className="text-xl sm:text-2xl text-text mb-6 max-w-3xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>
        <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
          {t('meta')}
        </p>
        
        {/* Next Event Info */}
        {eventDate ? (
          <div className="inline-block bg-background-light/80 backdrop-blur-sm border-2 border-primary/30 rounded-lg px-8 py-6 mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              {t('nextEventLabel')}
            </p>
            <p className="text-2xl font-serif font-bold text-text mb-2">
              {eventDate}
            </p>
            <p className="text-text-muted">
              {eventDetails}
            </p>
          </div>
        ) : (
          <div className="inline-block bg-background-light/80 backdrop-blur-sm border-2 border-accent/30 rounded-lg px-8 py-6 mb-10">
            <p className="text-accent font-semibold text-xl mb-2">
              {t('noEventScheduled')}
            </p>
            <p className="text-text-muted text-sm">
              {t('followForUpdates')}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a href="#signup" className="btn-secondary">
            Performer Sign-Up
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
