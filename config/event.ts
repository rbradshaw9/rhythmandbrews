export interface EventConfig {
  date: string | null // null if no event scheduled
  doorsTime: string
  endTime: string
  signupTime: string
}

export const eventConfig: EventConfig = {
  // Set to null when no event is scheduled
  // Format: "February 21, 2026" or full date string
  date: "February 21, 2026",
  doorsTime: "6:00pm",
  endTime: "10:00pm",
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
      event: "Event",
      signup: "Sign-up starts"
    },
    es: {
      event: "Evento",
      signup: "Registro comienza"
    }
  }
  
  const text = locale === 'es' ? t.es : t.en
  return `${text.event}: ${eventConfig.doorsTime} - ${eventConfig.endTime} • ${text.signup}: ${eventConfig.signupTime}`
}
