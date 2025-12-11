'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a backend
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-primary py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-accent mb-8">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-pink mb-4">Get in Touch</h2>
              <p className="text-gray-200 mb-6">
                Have questions, suggestions, or feedback about KaraApp? We'd love to hear from you! 
                Fill out the form and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-4 text-gray-200">
                <div>
                  <h3 className="font-bold text-accent mb-2">📧 Email</h3>
                  <p>karaapp@tpjcg.club</p>
                </div>

                <div>
                  <h3 className="font-bold text-accent mb-2">🏫 Club</h3>
                  <p>TPJCG Club</p>
                  <p className="text-sm text-gray-400">Tampines Junior College</p>
                </div>

                <div>
                  <h3 className="font-bold text-accent mb-2">⏰ Response Time</h3>
                  <p>We typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>

            <div>
              {submitted && (
                <div className="bg-green-600 text-white p-4 rounded-md mb-4">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark text-white border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark text-white border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-dark text-white border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-dark text-white border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="bg-primary p-6 rounded-lg">
            <h3 className="text-accent font-bold text-xl mb-3">Common Inquiries</h3>
            <ul className="space-y-2 text-gray-200">
              <li><strong>Technical Issues:</strong> Try refreshing the page or clearing your cache first</li>
              <li><strong>Admin Access:</strong> Contact club leadership for authorization</li>
              <li><strong>Feature Requests:</strong> We welcome suggestions for improvements!</li>
              <li><strong>Bug Reports:</strong> Please include details about what you were doing when the issue occurred</li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-primary text-center">
            <p className="text-gray-400 mb-4">Looking for more information?</p>
            <div className="flex justify-center space-x-4">
              <a
                href="/faq"
                className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Read FAQ
              </a>
              <a
                href="/about"
                className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
