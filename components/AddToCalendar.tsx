'use client'

import { useState } from 'react'
import { eventConfig } from '@/config/event'

interface AddToCalendarProps {
  locale: string
}

export default function AddToCalendar({ locale }: AddToCalendarProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (!eventConfig.date) return null

  const eventDate = new Date(eventConfig.date)
  
  // Event: 6pm - 10pm (Sign-up starts at 5:30pm)
  const startTime = new Date(eventDate)
  startTime.setHours(18, 0, 0) // 6:00 PM
  
  const endTime = new Date(eventDate)
  endTime.setHours(22, 0, 0) // 10:00 PM

  const eventDetails = {
    title: 'Rhythm & Brews Open Mic Night',
    description: 'Live music open mic night at The Beer Box in Aguadilla. Performer sign-up at 5:30pm, doors at 6:00pm. All musicians welcome!',
    location: 'The Beer Box, Aguadilla, Puerto Rico',
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
  }

  const formatDateForCalendar = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '')
  }

  const generateGoogleCalendarUrl = () => {
    const start = formatDateForCalendar(startTime)
    const end = formatDateForCalendar(endTime)
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventDetails.title
    )}&dates=${start}/${end}&details=${encodeURIComponent(
      eventDetails.description
    )}&location=${encodeURIComponent(eventDetails.location)}`
  }

  const generateICalFile = () => {
    const ical = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatDateForCalendar(startTime)}
DTEND:${formatDateForCalendar(endTime)}
SUMMARY:${eventDetails.title}
DESCRIPTION:${eventDetails.description}
LOCATION:${eventDetails.location}
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([ical], { type: 'text/calendar' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'rhythm-and-brews.ics'
    link.click()
    URL.revokeObjectURL(url)
  }

  const generateOutlookUrl = () => {
    const start = startTime.toISOString()
    const end = endTime.toISOString()
    
    return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
      eventDetails.title
    )}&startdt=${start}&enddt=${end}&body=${encodeURIComponent(
      eventDetails.description
    )}&location=${encodeURIComponent(eventDetails.location)}`
  }

  const buttonText = locale === 'es' ? 'Agregar al Calendario' : 'Add to Calendar'
  const googleText = locale === 'es' ? 'Google Calendar' : 'Google Calendar'
  const appleText = locale === 'es' ? 'Apple Calendar' : 'Apple Calendar'
  const outlookText = locale === 'es' ? 'Outlook' : 'Outlook'

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {buttonText}
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-30" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-2 left-0 z-40 bg-background-light border-2 border-primary/30 rounded-lg shadow-xl min-w-[240px] overflow-hidden">
            <button
              onClick={() => {
                window.open(generateGoogleCalendarUrl(), '_blank')
                setIsOpen(false)
              }}
              className="w-full px-4 py-3 text-left text-text hover:bg-primary/10 transition-colors flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.5 3.09L15 7.59V5a3 3 0 00-3-3H5a3 3 0 00-3 3v7a3 3 0 003 3h7a3 3 0 003-3V9.41l4.5 4.5a1 1 0 001.5-.8V3.89a1 1 0 00-1.5-.8z"/>
              </svg>
              {googleText}
            </button>
            <button
              onClick={() => {
                generateICalFile()
                setIsOpen(false)
              }}
              className="w-full px-4 py-3 text-left text-text hover:bg-primary/10 transition-colors flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 3h-1V2a1 1 0 00-2 0v1H10V2a1 1 0 00-2 0v1H7a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V6a3 3 0 00-3-3zm1 15a1 1 0 01-1 1H7a1 1 0 01-1-1v-8h12v8z"/>
              </svg>
              {appleText}
            </button>
            <button
              onClick={() => {
                window.open(generateOutlookUrl(), '_blank')
                setIsOpen(false)
              }}
              className="w-full px-4 py-3 text-left text-text hover:bg-primary/10 transition-colors flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 3H2a1 1 0 00-1 1v16a1 1 0 001 1h20a1 1 0 001-1V4a1 1 0 00-1-1zm-1 16H3V5h18v14z"/>
              </svg>
              {outlookText}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
