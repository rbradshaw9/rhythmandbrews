'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useTransition } from 'react'

export default function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      // Replace the locale in the pathname
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
      router.push(newPath)
    })
  }

  return (
    <div className="inline-flex rounded-lg bg-background-light p-1 shadow-lg">
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
          locale === 'en'
            ? 'bg-primary text-background'
            : 'text-text-muted hover:text-text'
        } disabled:opacity-50`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('es')}
        disabled={isPending}
        className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
          locale === 'es'
            ? 'bg-primary text-background'
            : 'text-text-muted hover:text-text'
        } disabled:opacity-50`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  )
}
