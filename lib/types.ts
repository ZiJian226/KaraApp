export interface Song {
  id: string
  participantName: string
  songTitle: string
  artist: string
  songUrl: string
  platform: 'youtube' | 'spotify' | 'soundcloud'
  status: 'pending' | 'playing' | 'completed' | 'held'
  isFirstSong: boolean
  submittedAt: Date
  playedAt?: Date
  thumbnail?: string
  position: number
}

export interface QueueState {
  queue: Song[]
  history: Song[]
  currentSong: Song | null
}

export interface AdminAction {
  type: 'reorder' | 'skip' | 'hold' | 'play' | 'complete'
  songId: string
  newPosition?: number
}
