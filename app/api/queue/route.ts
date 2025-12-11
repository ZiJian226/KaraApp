import { NextRequest, NextResponse } from 'next/server'
import { Song } from '@/lib/types'
import { QueueManager } from '@/lib/queue-manager'
import { dataStore } from '@/lib/store'

// Helper function to extract song info from URL
async function extractSongInfo(url: string, platform: 'youtube' | 'spotify' | 'soundcloud') {
  // In a real app, this would use APIs to fetch metadata
  // For now, return placeholder data
  let songTitle = 'Unknown Song'
  let artist = 'Unknown Artist'
  let thumbnail = ''

  if (platform === 'youtube') {
    // Extract video ID and use it for placeholder
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1]
    songTitle = 'YouTube Song'
    artist = 'YouTube Artist'
    thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : ''
  } else if (platform === 'spotify') {
    songTitle = 'Spotify Song'
    artist = 'Spotify Artist'
  } else if (platform === 'soundcloud') {
    songTitle = 'SoundCloud Song'
    artist = 'SoundCloud Artist'
  }

  return { songTitle, artist, thumbnail }
}

export async function GET(request: NextRequest) {
  try {
    const { queue, history, currentSong } = dataStore.getAllData()
    return NextResponse.json({
      queue: queue.filter(s => s.status !== 'completed'),
      history,
      currentSong,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch queue' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { participantName, songUrl, platform } = body

    if (!participantName || !songUrl || !platform) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Extract song information
    const { songTitle, artist, thumbnail } = await extractSongInfo(songUrl, platform)

    // Add song to queue
    const currentQueue = dataStore.getQueue()
    const updatedQueue = QueueManager.addSong(currentQueue, {
      participantName,
      songTitle,
      artist,
      songUrl,
      platform,
      submittedAt: new Date(),
      thumbnail,
    })
    dataStore.setQueue(updatedQueue)

    return NextResponse.json({
      message: 'Song added to queue',
      queue: updatedQueue.filter(s => s.status !== 'completed'),
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add song to queue' },
      { status: 500 }
    )
  }
}


