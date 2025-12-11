'use client'

import { useEffect, useState } from 'react'
import { Song } from '@/lib/types'

export default function HistoryPage() {
  const [history, setHistory] = useState<Song[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('/api/history')
        const data = await response.json()
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch history')
        }

        setHistory(data.history || [])
        setError('')
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchHistory()
  }, [])

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'youtube':
        return '📺'
      case 'spotify':
        return '🎵'
      case 'soundcloud':
        return '☁️'
      default:
        return '🎶'
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark to-primary flex items-center justify-center">
        <div className="text-2xl text-accent">Loading history...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-primary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-accent mb-4">Song History</h1>
          <p className="text-xl text-pink">
            {history.length} song{history.length !== 1 ? 's' : ''} played
          </p>
        </div>

        {error && (
          <div className="bg-red-600 text-white p-4 rounded-md mb-6 max-w-2xl mx-auto">
            {error}
          </div>
        )}

        <div className="bg-gray rounded-lg shadow-xl p-8">
          {history.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-2xl text-gray-400 mb-4">No songs in history yet</p>
              <p className="text-gray-500">Songs will appear here after they've been played</p>
            </div>
          ) : (
            <div className="space-y-4">
              {history.map((song, index) => (
                <div
                  key={song.id}
                  className="p-6 rounded-lg bg-primary hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{getPlatformIcon(song.platform)}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{song.songTitle}</h3>
                          <p className="text-gray-300 mb-2">{song.artist}</p>
                        </div>
                        {song.playedAt && (
                          <span className="text-sm text-gray-400">
                            {formatDate(song.playedAt)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-pink font-semibold">{song.participantName}</p>
                        {song.isFirstSong && (
                          <span className="bg-accent text-dark px-2 py-1 rounded-full text-xs font-bold">
                            ⭐ First Song
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/queue"
            className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors"
          >
            Back to Queue
          </a>
        </div>
      </div>
    </div>
  )
}
