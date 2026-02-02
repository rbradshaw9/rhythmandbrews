'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Client-side validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    // Reset previous status
    setSubmitStatus('idle')

    // Validate form
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({ name: '', email: '', message: '' })
        setErrors({})
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', data.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Get in Touch</h2>
          <p className="text-lg text-text-muted">
            Have questions? Want to perform? We&apos;d love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-text font-semibold mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background-light text-text rounded-lg border-2 ${
                errors.name ? 'border-red-500' : 'border-transparent'
              } focus:border-primary focus:outline-none transition-colors`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-text font-semibold mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background-light text-text rounded-lg border-2 ${
                errors.email ? 'border-red-500' : 'border-transparent'
              } focus:border-primary focus:outline-none transition-colors`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-text font-semibold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 bg-background-light text-text rounded-lg border-2 ${
                errors.message ? 'border-red-500' : 'border-transparent'
              } focus:border-primary focus:outline-none transition-colors resize-none`}
              placeholder="Tell us what's on your mind..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-900/30 border-2 border-green-500 rounded-lg text-center">
              <p className="text-green-400 font-semibold">
                ✓ Thank you! Your message has been sent successfully.
              </p>
              <p className="text-green-300 text-sm mt-1">
                We&apos;ll get back to you soon.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-900/30 border-2 border-red-500 rounded-lg text-center">
              <p className="text-red-400 font-semibold">
                ✗ Oops! Something went wrong.
              </p>
              <p className="text-red-300 text-sm mt-1">
                Please try again or email us directly at ryan@rhythmandbrewspr.com
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
