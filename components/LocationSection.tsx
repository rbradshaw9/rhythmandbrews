'use client'

import { useTranslations } from 'next-intl'

export default function LocationSection() {
  const t = useTranslations('location')
  
  return (
    <section id="location" className="py-20 bg-background">
      <div className="section-container max-w-6xl">
        <h2 className="heading-lg text-center mb-12">{t('title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-text leading-relaxed">
                {t('paragraph1')}
              </p>
              <p className="text-lg text-text leading-relaxed">
                {t('paragraph2')}
              </p>
            </div>

            {/* Venue Details */}
            <div className="bg-background-light rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">{t('venueTitle')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-text font-semibold">The Beer Box</p>
                    <p className="text-text-muted text-sm">Aguadilla, Puerto Rico</p>
                  </div>
                </div>

                <div className="border-t border-primary/20 pt-4">
                  <h4 className="text-text font-semibold mb-2">{t('parkingTitle')}</h4>
                  <p className="text-text-muted text-sm">{t('parkingInfo')}</p>
                </div>

                <div className="border-t border-primary/20 pt-4">
                  <h4 className="text-text font-semibold mb-2">{t('accessibilityTitle')}</h4>
                  <p className="text-text-muted text-sm">{t('accessibilityInfo')}</p>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://maps.app.goo.gl/Xt2RM624XNqsKYmw6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('mapLinkText')}
              </a>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5067640801612!2d-67.11274332480875!3d18.505987982584774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c02963d49ccfa8b%3A0x9b1e61e27f29c02e!2sThe%20Beer%20Box!5e0!3m2!1sen!2spr!4v1770124903417!5m2!1sen!2spr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Beer Box location map"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
