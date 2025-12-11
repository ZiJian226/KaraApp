import { Song, QueueState } from './types'

export class QueueManager {
  private static participantSongCounts: Map<string, number> = new Map()

  // Priority logic: first-time singers get priority
  static sortQueue(songs: Song[]): Song[] {
    return songs.sort((a, b) => {
      // First songs always come first
      if (a.isFirstSong !== b.isFirstSong) {
        return a.isFirstSong ? -1 : 1
      }
      // Then by submission time
      return new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime()
    })
  }

  static addSong(queue: Song[], song: Omit<Song, 'id' | 'isFirstSong' | 'position' | 'status'>): Song[] {
    const participantCount = this.participantSongCounts.get(song.participantName.toLowerCase()) || 0
    const isFirstSong = participantCount === 0

    const newSong: Song = {
      ...song,
      id: `song_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      isFirstSong,
      status: 'pending',
      position: 0,
      submittedAt: new Date(song.submittedAt),
    }

    const updatedQueue = [...queue, newSong]
    this.participantSongCounts.set(song.participantName.toLowerCase(), participantCount + 1)

    return this.sortQueue(updatedQueue).map((song, index) => ({
      ...song,
      position: index + 1,
    }))
  }

  static removeSong(queue: Song[], songId: string): Song[] {
    return queue
      .filter(song => song.id !== songId)
      .map((song, index) => ({
        ...song,
        position: index + 1,
      }))
  }

  static reorderSong(queue: Song[], songId: string, newPosition: number): Song[] {
    const songIndex = queue.findIndex(s => s.id === songId)
    if (songIndex === -1) return queue

    const song = queue[songIndex]
    const updatedQueue = queue.filter(s => s.id !== songId)
    updatedQueue.splice(newPosition - 1, 0, song)

    return updatedQueue.map((song, index) => ({
      ...song,
      position: index + 1,
    }))
  }

  static markSongAsPlaying(queue: Song[], songId: string): { queue: Song[], currentSong: Song | null } {
    const songIndex = queue.findIndex(s => s.id === songId)
    if (songIndex === -1) return { queue, currentSong: null }

    const updatedQueue = [...queue]
    updatedQueue[songIndex] = {
      ...updatedQueue[songIndex],
      status: 'playing',
    }

    return {
      queue: updatedQueue,
      currentSong: updatedQueue[songIndex],
    }
  }

  static completeSong(queue: Song[], history: Song[], songId: string): { queue: Song[], history: Song[] } {
    const songIndex = queue.findIndex(s => s.id === songId)
    if (songIndex === -1) return { queue, history }

    const song = {
      ...queue[songIndex],
      status: 'completed' as const,
      playedAt: new Date(),
    }

    return {
      queue: this.removeSong(queue, songId),
      history: [song, ...history],
    }
  }

  static holdSong(queue: Song[], songId: string): Song[] {
    const songIndex = queue.findIndex(s => s.id === songId)
    if (songIndex === -1) return queue

    const updatedQueue = [...queue]
    updatedQueue[songIndex] = {
      ...updatedQueue[songIndex],
      status: 'held',
    }

    return updatedQueue
  }

  static unholdSong(queue: Song[], songId: string): Song[] {
    const songIndex = queue.findIndex(s => s.id === songId)
    if (songIndex === -1) return queue

    const updatedQueue = [...queue]
    updatedQueue[songIndex] = {
      ...updatedQueue[songIndex],
      status: 'pending',
    }

    return updatedQueue
  }
}
