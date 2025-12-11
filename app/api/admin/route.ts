import { NextRequest, NextResponse } from 'next/server'
import { Song } from '@/lib/types'
import { QueueManager } from '@/lib/queue-manager'
import { dataStore } from '@/lib/store'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, songId, newPosition } = body

    if (!action || !songId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    let { queue, history, currentSong } = dataStore.getAllData()

    switch (action) {
      case 'reorder':
        if (newPosition === undefined) {
          return NextResponse.json(
            { error: 'New position is required for reorder' },
            { status: 400 }
          )
        }
        queue = QueueManager.reorderSong(queue, songId, newPosition)
        break

      case 'skip':
        // Remove song from queue and add to history as skipped
        const result = QueueManager.completeSong(queue, history, songId)
        queue = result.queue
        history = result.history
        if (currentSong?.id === songId) {
          currentSong = null
        }
        break

      case 'hold':
        queue = QueueManager.holdSong(queue, songId)
        break

      case 'unhold':
        queue = QueueManager.unholdSong(queue, songId)
        break

      case 'play':
        const playResult = QueueManager.markSongAsPlaying(queue, songId)
        queue = playResult.queue
        currentSong = playResult.currentSong
        break

      case 'complete':
        const completeResult = QueueManager.completeSong(queue, history, songId)
        queue = completeResult.queue
        history = completeResult.history
        if (currentSong?.id === songId) {
          currentSong = null
        }
        break

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }

    // Update the store
    dataStore.updateAllData(queue, history, currentSong)

    return NextResponse.json({
      message: 'Action completed successfully',
      queue: queue.filter(s => s.status !== 'completed'),
      currentSong,
    })
  } catch (error) {
    console.error('Admin action error:', error)
    return NextResponse.json(
      { error: 'Failed to perform action' },
      { status: 500 }
    )
  }
}


