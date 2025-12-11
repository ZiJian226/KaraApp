'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SubmitPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    participantName: '',
    songUrl: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const detectPlatform = (url: string): 'youtube' | 'spotify' | 'soundcloud' | null => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube'
    if (url.includes('spotify.com')) return 'spotify'
    if (url.includes('soundcloud.com')) return 'soundcloud'
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    setLoading(true)

    try {
      const platform = detectPlatform(formData.songUrl)
      if (!platform) {
        setError('Please provide a valid YouTube, Spotify, or SoundCloud URL')
        setLoading(false)
        return
      }

      const response = await fetch('/api/queue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          participantName: formData.participantName,
          songUrl: formData.songUrl,
          platform,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit song')
      }

      setSuccess(true)
      setFormData({ participantName: '', songUrl: '' })
      
      setTimeout(() => {
        router.push('/queue')
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-primary py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-accent mb-2">Submit a Song</h1>
          <p className="text-gray-300 mb-8">Add your song to the karaoke queue</p>

          {success && (
            <div className="bg-green-600 text-white p-4 rounded-md mb-6">
              Song submitted successfully! Redirecting to queue...
            </div>
          )}

          {error && (
            <div className="bg-red-600 text-white p-4 rounded-md mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="participantName" className="block text-sm font-medium text-gray-200 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="participantName"
                required
                value={formData.participantName}
                onChange={(e) => setFormData({ ...formData, participantName: e.target.value })}
                className="w-full px-4 py-3 bg-dark text-white border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="songUrl" className="block text-sm font-medium text-gray-200 mb-2">
                Song URL *
              </label>
              <input
                type="url"
                id="songUrl"
                required
                value={formData.songUrl}
                onChange={(e) => setFormData({ ...formData, songUrl: e.target.value })}
                className="w-full px-4 py-3 bg-dark text-white border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Paste YouTube, Spotify, or SoundCloud link"
              />
              <p className="text-sm text-gray-400 mt-2">
                Supported platforms: YouTube, Spotify, SoundCloud
              </p>
            </div>

            <div className="bg-primary p-4 rounded-md">
              <h3 className="text-accent font-semibold mb-2">📌 Important Notes:</h3>
              <ul className="text-sm text-gray-200 space-y-1">
                <li>• First-time singers get priority in the queue</li>
                <li>• Make sure the link is to a karaoke or lyric video</li>
                <li>• Check the <a href="/rules" className="text-accent hover:underline">rules</a> before submitting</li>
              </ul>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Song'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-primary">
            <h3 className="text-xl font-bold text-accent mb-4">How to get song URLs:</h3>
            <div className="space-y-4 text-gray-200">
              <div>
                <h4 className="font-semibold text-pink">YouTube:</h4>
                <p className="text-sm">Search for your song, copy the URL from the browser address bar</p>
              </div>
              <div>
                <h4 className="font-semibold text-pink">Spotify:</h4>
                <p className="text-sm">Right-click the song → Share → Copy Song Link</p>
              </div>
              <div>
                <h4 className="font-semibold text-pink">SoundCloud:</h4>
                <p className="text-sm">Click Share below the song → Copy link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
