'use client'

import { useEffect, useState } from 'react'
import { Song } from '@/lib/types'

export default function AdminPage() {
  const [queue, setQueue] = useState<Song[]>([])
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchQueue = async () => {
    try {
      const response = await fetch('/api/queue')
      const data = await response.json()
      if (response.ok) {
        setQueue(data.queue || [])
      }
    } catch (err) {
      console.error('Failed to fetch queue:', err)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchQueue()
      const interval = setInterval(fetchQueue, 3000)
      return () => clearInterval(interval)
    }
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (in production, this should be server-side)
    if (password === 'admin123') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Invalid password')
    }
  }

  const handleAction = async (action: string, songId: string, newPosition?: number) => {
    setLoading(true)
    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action,
          songId,
          newPosition,
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Action failed')
      }

      await fetchQueue()
      setError('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const moveSong = async (songId: string, direction: 'up' | 'down') => {
    const songIndex = queue.findIndex(s => s.id === songId)
    if (songIndex === -1) return

    const newPosition = direction === 'up' ? songIndex : songIndex + 2
    if (newPosition < 1 || newPosition > queue.length) return

    await handleAction('reorder', songId, newPosition)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark to-primary flex items-center justify-center">
        <div className="bg-gray p-8 rounded-lg shadow-xl max-w-md w-full">
          <h1 className="text-3xl font-bold text-accent mb-6 text-center">Admin Login</h1>
          
          {error && (
            <div className="bg-red-600 text-white p-4 rounded-md mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-dark text-white border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-primary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-accent">Admin Dashboard</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>

        {error && (
          <div className="bg-red-600 text-white p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        <div className="bg-gray rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-accent mb-6">Queue Management</h2>
          
          {queue.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-xl">No songs in queue</p>
            </div>
          ) : (
            <div className="space-y-4">
              {queue
                .filter(song => song.status !== 'completed')
                .map((song, index) => (
                  <div
                    key={song.id}
                    className={`p-6 rounded-lg ${
                      song.status === 'playing' ? 'bg-secondary border-2 border-accent' :
                      song.status === 'held' ? 'bg-dark opacity-60' :
                      'bg-primary'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="text-2xl font-bold text-accent min-w-[3rem]">
                          #{song.position}
                        </div>
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
                            {song.status === 'playing' && (
                              <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                                ▶ Playing
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

                      <div className="flex flex-col space-y-2 ml-4">
                        {song.status !== 'playing' && (
                          <>
                            <button
                              onClick={() => moveSong(song.id, 'up')}
                              disabled={loading || index === 0}
                              className="bg-primary hover:bg-secondary text-white px-3 py-1 rounded text-sm disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              ▲ Up
                            </button>
                            <button
                              onClick={() => moveSong(song.id, 'down')}
                              disabled={loading || index === queue.filter(s => s.status !== 'completed').length - 1}
                              className="bg-primary hover:bg-secondary text-white px-3 py-1 rounded text-sm disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              ▼ Down
                            </button>
                          </>
                        )}
                        
                        {song.status === 'pending' && (
                          <button
                            onClick={() => handleAction('play', song.id)}
                            disabled={loading}
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                          >
                            ▶ Play
                          </button>
                        )}

                        {song.status === 'playing' && (
                          <button
                            onClick={() => handleAction('complete', song.id)}
                            disabled={loading}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                          >
                            ✓ Complete
                          </button>
                        )}

                        {song.status === 'pending' && (
                          <button
                            onClick={() => handleAction('hold', song.id)}
                            disabled={loading}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm"
                          >
                            ⏸ Hold
                          </button>
                        )}

                        {song.status === 'held' && (
                          <button
                            onClick={() => handleAction('unhold', song.id)}
                            disabled={loading}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm"
                          >
                            ▶ Resume
                          </button>
                        )}

                        <button
                          onClick={() => handleAction('skip', song.id)}
                          disabled={loading}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                        >
                          ⏭ Skip
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-gray-400">
          <p>Queue updates automatically every 3 seconds</p>
        </div>
      </div>
    </div>
  )
}
