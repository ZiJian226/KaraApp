'use client'

import { useEffect, useState } from 'react'
import { Song } from '@/lib/types'

export default function QueuePage() {
  const [queue, setQueue] = useState<Song[]>([])
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchQueue = async () => {
    try {
      const response = await fetch('/api/queue')
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch queue')
      }

      setQueue(data.queue || [])
      setCurrentSong(data.currentSong || null)
      setError('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQueue()
    // Poll for updates every 5 seconds
    const interval = setInterval(fetchQueue, 5000)
    return () => clearInterval(interval)
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark to-primary flex items-center justify-center">
        <div className="text-2xl text-accent">Loading queue...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-primary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-accent mb-4">Karaoke Queue</h1>
          <p className="text-xl text-pink">
            {queue.length} song{queue.length !== 1 ? 's' : ''} in queue
          </p>
        </div>

        {error && (
          <div className="bg-red-600 text-white p-4 rounded-md mb-6 max-w-2xl mx-auto">
            {error}
          </div>
        )}

        {/* Currently Playing */}
        {currentSong && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-accent mb-4 text-center">🎤 Now Playing</h2>
            <div className="bg-secondary p-6 rounded-lg shadow-xl max-w-2xl mx-auto border-4 border-accent">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{getPlatformIcon(currentSong.platform)}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-accent mb-2">{currentSong.songTitle}</h3>
                  <p className="text-lg text-gray-200 mb-2">{currentSong.artist}</p>
                  <p className="text-pink font-semibold">Sung by: {currentSong.participantName}</p>
                  {currentSong.isFirstSong && (
                    <span className="inline-block bg-accent text-dark px-3 py-1 rounded-full text-sm font-bold mt-2">
                      ⭐ First Song
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Queue List */}
        <div className="bg-gray rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-accent mb-6">Up Next</h2>
          
          {queue.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-2xl text-gray-400 mb-4">Queue is empty</p>
              <a href="/submit" className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors">
                Submit the first song!
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {queue
                .filter(song => song.status !== 'playing' && song.status !== 'completed')
                .map((song) => (
                  <div
                    key={song.id}
                    className={`p-6 rounded-lg ${
                      song.status === 'held' ? 'bg-dark opacity-60' : 'bg-primary'
                    } hover:shadow-lg transition-shadow`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl font-bold text-accent min-w-[3rem]">
                        #{song.position}
                      </div>
                      <div className="text-2xl">{getPlatformIcon(song.platform)}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{song.songTitle}</h3>
                        <p className="text-gray-300 mb-2">{song.artist}</p>
                        <div className="flex items-center space-x-4">
                          <p className="text-pink font-semibold">{song.participantName}</p>
                          {song.isFirstSong && (
                            <span className="bg-accent text-dark px-2 py-1 rounded-full text-xs font-bold">
                              ⭐ First Song
                            </span>
                          )}
                          {song.status === 'held' && (
                            <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                              ⏸ Held
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
          <p className="text-gray-400">
            Queue updates automatically every 5 seconds
          </p>
        </div>
      </div>
    </div>
  )
}
