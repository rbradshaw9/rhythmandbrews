export interface EventConfig {
  date: string | null // null if no event scheduled
  doorsTime: string
  signupTime: string
}

export const eventConfig: EventConfig = {
  // Set to null when no event is scheduled
  // Format: "Saturday, February 21" or "Sábado, 21 de febrero"
  date: "February 21, 2026",
  doorsTime: "6:00pm",
  signupTime: "5:30pm",
}

export function getEventDate(locale: string): string | null {
  if (!eventConfig.date) return null
  
  // Parse the date and format based on locale
  const date = new Date(eventConfig.date)
  
  if (isNaN(date.getTime())) {
    // If date is invalid, return the raw string
    return eventConfig.date
  }
  
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric',
    month: 'long', 
    day: 'numeric' 
  }
  
  return new Intl.DateTimeFormat(locale, options).format(date)
}

export function getEventDetails(locale: string): string {
  const t = {
    en: {
      doors: "Doors at",
      signup: "Performer sign-up at"
    },
    es: {
      doors: "Puertas a las",
      signup: "Registro de músicos a las"
    }
  }
  
  const text = locale === 'es' ? t.es : t.en
  return `${text.doors} ${eventConfig.doorsTime} • ${text.signup} ${eventConfig.signupTime}`
}
